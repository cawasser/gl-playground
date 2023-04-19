(ns gl-playground.bh.atom.diagram.editable-diagram
  (:require [taoensso.timbre :as log]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]
            ["react" :as react]
            [reagent.core :as r]
            [gl-playground.bh.atom.diagram.custom-nodes.color-picker-node :as color-picker-node]
            [gl-playground.bh.atom.diagram.custom-nodes.editable-node :as editable-node]
            ))


(defonce next-id (atom 0))


(defn- on-drag-start [node-type event]
  (print node-type)
  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))


(defn- on-drop [reactFlowInstance data set-nodes-fn wrapper event]
  ;(log/info "on-drop" (js->clj @reactFlowInstance) @data)

  (.preventDefault event)

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]
    (println node-type)

    (when (not= node-type "undefined")
      (let [new-id   (str "node-" (swap! next-id inc))
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node {:id       new-id
                      :type     node-type
                      :data     {:label   new-id
                                 :inputs  []
                                 :outputs []}
                      :position position}]

        ;add the new nodes to the original nodes data (an atom)...
        (swap! data assoc :nodes (conj (:nodes @data) new-node))
        ; and this updates the data internal to the React diagram component...
        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))

    (println @data)))


[:div]


(defn make-draggable-node [label node-type]
  (print "Node Type")
  (print node-type)
 ; (print label)
  ^{:key label}
  [:div.draggable
   {:style       {:width           "150px" :height "50px"
                  :margin-bottom   "5px"
                  :display         :flex
                  :justify-content :center
                  :align-items     :center
                  :cursor          :grab
                  :border-radius   "3px" :padding "2px"}

    :onDragStart #(on-drag-start node-type % )
    :draggable   true} label])


(defn on-connect [flowInstance data set-edges-fn wrapper event]
  ;(log/info "on-connect" (js->clj event :keywordize-keys true))

  (let [event-map (js->clj event :keywordize-keys true)
        source-id (:source event-map)
        target-id (:target event-map)
        new-edge      {:id     (str source-id "->" target-id)
                       :source source-id
                       :target target-id}]
    ;(log/info "connecting" new-edge)

    ;add the new nodes to the original nodes data (an atom)...
    (swap! data assoc :edges (conj (:edges @data) new-edge))

    ; and this updates the data internal to the React diagram component..
    (set-edges-fn (fn [e] (.concat e (clj->js new-edge))))))

(def node-types {"color-picker" (partial color-picker-node/color-picker-node {:color "#1A192B"} true) "editable-node" editable-node/editableNode})

(defn- diagram* [{:keys [data
                         nodes edges
                         on-change-nodes on-change-edges
                         set-nodes set-edges
                         wrapper flowInstance]}]
  [:> ReactFlow {:nodes         nodes
                 :edges         edges
                 :onNodesChange on-change-nodes
                 :onEdgesChange on-change-edges
                 :nodeTypes node-types
                 :fitView       true
                 :onInit        (fn [r] (reset! flowInstance r))
                 :onDrop        (partial on-drop flowInstance data set-nodes wrapper)
                 :onDragOver    (or on-drag-over #())
                 :onConnect     (partial on-connect flowInstance data set-edges wrapper)}
   [:> Controls]
   [:> MiniMap]
   [:> Background]])


(defn- diagram [{:keys [data flowInstance wrapper]}]
  (let [nodes (:nodes @data)
        edges (:edges @data)
        [node-state set-nodes on-change-nodes] (useNodesState (clj->js nodes))
        [edge-state set-edges on-change-edges] (useEdgesState (clj->js edges))]

    [:> ReactFlowProvider
     [:div#wrapper {:style {:width "800px" :height "800px"}
                    :ref   (fn [el]
                             (reset! wrapper el))}

      [diagram* {:data data
                 :nodes node-state :edges edge-state
                 :on-change-nodes on-change-nodes :on-change-edges on-change-edges
                 :set-nodes set-nodes :set-edges set-edges
                 :wrapper wrapper :flowInstance flowInstance}]]]))


(defn editable-diagram [& {:keys [data]}]
  (let [wrapper      (clojure.core/atom nil)
        flowInstance (clojure.core/atom nil)] ; this is why we have 3 functions to make this one component...

    [:f> diagram {:data data
                  :wrapper wrapper
                  :flowInstance flowInstance}]))


