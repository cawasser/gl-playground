(ns gl-playground.bh.atom.diagram.editable-diagram
  (:require ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (Controls MiniMap Background)]))



(defn component [& {:keys [nodes edges]}]
  [:> ReactFlow {:nodes nodes
                 :edges edges}
   [:> Controls]
   [:> MiniMap]
   [:> Background]])



(comment

  (def nodes [{:id "1", :position {:x 0, :y 0}, :data {:label "1"}},
              {:id "2", :position {:x 0, :y 100}, :data {:label "2"}}])

  (def edges [{:id "e1-2", :source "1", :target "2"}])



  ())
