(ns gl-playground.bh.atom.diagram.editable-diagram
  (:require
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

(def  reactFlowInstance (clojure.core/atom nil))
(defn- on-drag-start [node-type event]

  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))


(defn- on-drop [reactFlowInstance set-nodes-fn wrapper event]
  (print "In ondrop")
  (print @reactFlowInstance)

  (.preventDefault event)
  (let [node-type (.getData (.-dataTransfer event) "editable-flow")
        x (.-clientX event)
        y (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]

    (when (not= node-type "undefined")
      (let [new-id (str "default" "-new")
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node {:id       new-id
                      :type     "default"
                      :data     {:label   new-id
                                 :inputs  []
                                 :outputs []}
                      :position position}]

        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))))

(defn on-connect [event]
  ((println event)
   (let [event-map (js->clj event :keywordize-keys true)
         source-id (get-in event-map [:source :id])
         target-id (get-in event-map [:target :id])
         edge {:id     (str source-id "->" target-id)
               :source source-id
               :target target-id}]
     (applyEdgeChanges (clj->js [edge])))))


(defn editable-diagram [& {:keys [nodes edges]}]
  (let
    [[nodes set-nodes on-change-nodes] (useNodesState (clj->js nodes))
     [edges set-edges on-change-edges] (useEdgesState (clj->js edges))
     !wrapper (clojure.core/atom nil)]


    [:> ReactFlowProvider
     [:div#wrapper {:style {:width "800px" :height "800px"}
                    :ref   (fn [el]
                             (reset! !wrapper el))}
      [:> ReactFlow {
                     :nodes         nodes
                     :edges         edges
                     :onNodesChange on-change-nodes
                     :onEdgesChange on-change-edges
                     :fitView       true
                     :onInit        (fn [r] (reset! reactFlowInstance r) (print @reactFlowInstance))
                     :onDrop        (partial on-drop reactFlowInstance set-nodes !wrapper)
                     :onDragOver    (or on-drag-over #())
                     :onConnect     on-connect}

       [:> Controls]
       [:> MiniMap]
       [:> Background]]]]))

(defn- make-draggable-node [label]
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