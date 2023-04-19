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
            [reagent.core :as r]))

(defn editableNode []
  (let [text-value (r/atom "Type Here")]
  (r/as-element
    [:div {:on-click #(println "clicked")}
     [:> Handle {:type "target"
                 :isConnectable true
                 :position (.-Left Position)}]
     [:p  {:on-click #(println "clicked")} "Editable Node" ]
     [:form {:className "nodrag"}
      [:input.input {:className "nodrag" :type "text" :value @text-value :on-click #(println "clicked") :on-change #(reset! text-value (-> % .-target .-value))}]]

     [:> Handle {:type "source"
                 :isConnectable true
                 :position (.-Right Position)
                 }]
     ])))


