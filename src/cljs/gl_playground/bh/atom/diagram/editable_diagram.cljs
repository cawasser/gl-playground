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
                                  useCallBack)]
            [reagent.core :as r]))


(defn- on-drag-start [node-type event]
  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))


(defn- on-drop [reactFlowInstance set-nodes-fn wrapper event]
  (log/info "In ondrop")
  (log/info (js->clj @reactFlowInstance))

  (.preventDefault event)

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]

    (when (not= node-type "undefined")
      (let [new-id   (str "default" "-new")
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node {:id       new-id
                      :type     "default"
                      :data     {:label   new-id
                                 :inputs  []
                                 :outputs []}
                      :position position}]

        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))))


(defn make-draggable-node [label]
  ^{:key label}
  [:div.draggable
   {:style       {:width           "150px" :height "50px"
                  :margin-bottom   "5px"
                  :display         :flex
                  :justify-content :center
                  :align-items     :center
                  :cursor          :grab
                  :border-radius   "3px" :padding "2px"}

    :onDragStart #(on-drag-start "default" %)
    :draggable   true} label])


(defn on-connect [event]
  (log/info "on-connect" (js->clj event :keywordize-keys true))

  (let [event-map (js->clj event :keywordize-keys true)
        source-id (get-in event-map [:source :id])
        target-id (get-in event-map [:target :id])
        edge      {:id     (str source-id "->" target-id)
                   :source source-id
                   :target target-id}]))
    ;(applyEdgeChanges (clj->js [edge]))))


(defn- diagram* [{:keys [nodes edges
                         on-change-nodes on-change-edges
                         set-nodes set-edges
                         wrapper flowInstance]}]
  [:> ReactFlow {:nodes         nodes
                 :edges         edges
                 :onNodesChange on-change-nodes
                 :onEdgesChange on-change-edges
                 :fitView       true
                 :onInit        (fn [r] (reset! flowInstance r) (log/info @flowInstance))
                 :onDrop        (partial on-drop flowInstance set-nodes wrapper)
                 :onDragOver    (or on-drag-over #())
                 :onConnect     (partial on-connect)}
   [:> Controls]
   [:> MiniMap]
   [:> Background]])


(defn- diagram [{:keys [nodes edges flowInstance wrapper]}]
  (let [[node-state set-nodes on-change-nodes] (useNodesState (clj->js nodes))
        [edge-state set-edges on-change-edges] (useEdgesState (clj->js edges))]

    [:> ReactFlowProvider
     [:div#wrapper {:style {:width "800px" :height "800px"}
                    :ref   (fn [el]
                             (reset! wrapper el))}

      [diagram* {:nodes node-state :edges edge-state
                 :on-change-nodes on-change-nodes :on-change-edges on-change-edges
                 :set-nodes set-nodes :set-edges set-edges
                 :wrapper wrapper :flowInstance flowInstance}]]]))


(defn editable-diagram [& {:keys [nodes edges]}]
  (let [wrapper      (clojure.core/atom nil)
        flowInstance (clojure.core/atom nil)] ; this is why we have 3 functions to make this one component...

    [:f> diagram {:nodes nodes :edges edges
                  :wrapper wrapper
                  :flowInstance flowInstance}]))


