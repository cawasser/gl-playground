(ns gl-playground.bh.atom.diagram.custom-nodes.editable-node
  (:require ["reactflow$default" :as ReactFlow]
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
            [gl-playground.bh.atom.diagram.custom-nodes.custom-node :as cn]))


(defn editableNode [node-type node]
  (let [text-value (r/atom "Type Here")]
    (r/as-element
      [:div {:style (merge cn/default-node-style (node-type cn/node-style))}
       [:> Handle {:type          "target"
                   :isConnectable true
                   :position      (.-Left Position)}]
       [:div {:on-click #(println "editableNode clicked")} "Editable Node"]
       [:input.input.nodrag {:type "text" :style {:width "50px"}}]
       ;:on-change #(reset! text-value (-> % .-target .-value))}]

       [:> Handle {:type          "source"
                   :isConnectable true
                   :position      (.-Right Position)}]])))




