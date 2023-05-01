(ns gl-playground.bh.atom.diagram.custom-nodes.menu-node
  (:require ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (Handle Position NodeToolbar)]
            ["react" :as react]
            [reagent.core :as r]
            [gl-playground.bh.atom.diagram.utils.custom-node-utils :as utils]
            [gl-playground.bh.atom.diagram.custom-nodes.custom-node :as cn]))

;(defn menu-node [style data update-node-type]
;  (let [isVisible (r/atom false)]
;    (println "NodeType")
;    (println @style)
;    (r/with-let [type @(get-in data [:nodes])]
;                (r/as-element
;                  [:div {:style (merge cn/default-node-style (@style cn/node-style)) :on-mouse-enter #(reset! isVisible (-> true))}
;                   [:> NodeToolbar {:isVisible isVisible :position (.-Top Position)}
;                    [:select {:name "node-type" :on-change #(update-node-type (-> % (.-target) (.-value) keyword))
;                              ;#(swap! data update-in [:nodes :type] keyword (.-target %))
;                              }
;                     [:optgroup {:label "Node Type"}
;                      [:option {:value "ui/component"} ":ui/component"]
;                      [:option {:value "source/remote"} ":source/remote"]
;                      [:option {:value "source/local"} ":source/local"]
;                      [:option {:value "source/fn"} ":source/fn"]
;                      ]]
;                    ]
;                   [utils/handle "data-in" "target" {:background "#555"} (.-Left Position) true]
;                   [:div {:on-click #(println "node clicked")} @style]
;                   [utils/handle "data-in" "source" {:background "#555"} (.-Right Position) true]]))
;    (r/should-component-update
;      (fn [next-props _]
;        (not= @(get-in next-props [:data :nodes]) @(get-in data [:nodes]))))))


(defn menu-node [style update-node-type]
  (let [isVisible (r/atom false)]
        ;node-type (r/atom starting-node-type)

    (println "NodeType")
    (println @style)
    (r/as-element
      [:div {:style (merge cn/default-node-style (@style cn/node-style)) :on-mouse-enter #(reset! isVisible (-> true))}
       [:> NodeToolbar {:isVisible isVisible :position (.-Top Position)}
        [:select {:name "node-type" :on-change
                  ;#(println "updated")
                  #(update-node-type (-> % (.-target) (.-value) keyword))}
                  ;#(swap! data update-in [:nodes :type] keyword (.-target %))
                  ;#((assoc (get-in data [:nodes :type])(-> % (.-target) (.-value) keyword)))
                  ;#((reset! style (-> % (.-target) (.-value) keyword))
                  ;                                   (println "New style type:" @style)
                  ;                                   )

         [:optgroup {:label "Node Type"}
          [:option {:value "ui/component"} ":ui/component"]
          [:option {:value "source/remote"} ":source/remote"]
          [:option {:value "source/local"} ":source/local"]
          [:option {:value "source/fn"} ":source/fn"]]]]



       [utils/handle "data-in" "target" {:background "#555"} (.-Left Position) true]
       [:div {:on-click #(println "node clicked")} @style]
       [utils/handle "data-in" "source" {:background "#555"} (.-Right Position) true]])))


