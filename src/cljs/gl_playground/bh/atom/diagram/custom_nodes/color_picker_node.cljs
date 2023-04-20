(ns gl-playground.bh.atom.diagram.custom-nodes.color-picker-node
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
            [reagent.core :as r]
            [gl-playground.bh.atom.diagram.custom-nodes.custom-node :as cn]))


(defn color-picker-node
  [node-type data isConnectable node]
  (let [handle-style   {:background "#555"}
        handle-a-style {:top 10 :background "#555"}
        handle-b-style {:bottom 10 :top "auto" :background "#555"}]
    (r/as-element
      [:div {:style (merge cn/default-node-style (node-type cn/node-style))}
       [:> Handle {:type          "target"
                   :position      (.-Left Position)
                   :style         handle-style
                   :onConnect     #(js/console.log "handle onConnect" %)
                   :isConnectable isConnectable}]
       [:div "Custom Color Picker Node: " [:strong (:color data)]]
       [:input.nodrag {:type         "color"
                       ;:onChange (:onChange data)
                       :defaultValue (:color data) :className "nodrag"}]
       [:> Handle {:type          "source"
                   :position      (.-Right Position)
                   :id            "a"
                   :style         handle-a-style
                   :isConnectable isConnectable}]
       [:> Handle {:type          "source"
                   :position      (.-Right Position)
                   :id            "b"
                   :style         handle-b-style
                   :isConnectable isConnectable}]])))


