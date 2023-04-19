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
    ["react" :as react]
    [reagent.core :as r]))

;(defn color-picker-node []
;  (r/as-element
;    [:div
;     [:> Handle {:type "target"
;                 ;:position Position/Left
;                 :style {:background "#555"}
;                 ;:onConnect on-change
;                 :isConnectable true}]
;     [:div
;      "Custom Color Picker Node: "]
;     [:input.nodrag {:type "color"
;                     ;:onChange (data :onChange)
;                     ;:defaultValue (:color data)
;                     }
;      ]
;     [:> Handle {:type "source"
;                 ;:position Position/Right
;                 :id "a"
;                 :style {:top 10 :background "#555"}
;                 :isConnectable true}]
;     [:> Handle {:type "source"
;                 ;:position Position/Right
;                 :id "b"
;                 :style {:bottom 10 :top "auto" :background "#555"}
;                 :isConnectable true}]
;
;     ]
;    )
;  )
;(defn color-picker-node []
;  (let [on-change (js/console.log "handle onConnect")]
;    (r/as-element
;      [:<>
;       [:> Handle {:type          "target"
;                   :position (.-Left Position)
;                   :style         {:background "#555"}
;                   :onConnect     on-change
;                   :isConnectable true}]
;       [:div
;        "Custom Color Picker Node: "]
;       [:input.nodrag {:type         "color"
;                       :onChange     on-change
;                       :defaultValue "#1A192B"}]
;       [:> Handle {:type          "source"
;                   :position (.-Right Position)
;                   :id            "a"
;                   :style         {:top 10 :background "#555"}
;                   :isConnectable true}]
;       [:> Handle {:type          "source"
;                   :position (.-Right Position)
;                   :id            "b"
;                   :style         {:bottom 10 :top "auto" :background "#555"}
;                   :isConnectable true}]]))
;  ;)
;  )
(defn color-picker-node
  [data isConnectable]
  (let [handle-style {:background "#555"}
        handle-a-style {:top 10 :background "#555"}
        handle-b-style {:bottom 10 :top "auto" :background "#555"}]
    (r/as-element
      [::div#node-card
       [:> Handle {:type "target"
                   :position (.-Left Position)
                   :style handle-style
                   :onConnect #(js/console.log "handle onConnect" %)
                   :isConnectable isConnectable}]
       [:div "Custom Color Picker Node: " [:strong (:color data)]]
       [:input {:type "color"
                ;:onChange (:onChange data)
                :defaultValue (:color data) :className "nodrag"}]
       [:> Handle {:type "source"
                   :position (.-Right Position)
                   :id "a"
                   :style handle-a-style
                   :isConnectable isConnectable}]
       [:> Handle {:type "source"
                   :position (.-Right Position)
                   :id "b"
                   :style handle-b-style
                   :isConnectable isConnectable}]]
    )

    ))

(defn memoized-custom-color-picker-node
  []
  (react/useMemo color-picker-node ))