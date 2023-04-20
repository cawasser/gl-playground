(ns gl-playground.bh.atom.diagram.custom-nodes.custom-node
  (:require [reagent.core :as r]
            ["reactflow" :refer (Handle Position)]))

(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :blue :color :white}
                 :source/fn     {:background :pink :color :black}})
(def default-node-style {:padding      "3px" :max-width "100px"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))


(defn- handle [id t style position isConnectable]
  [:> Handle {:id            id
              :type          t
              :position      position
              :style         style
              :onConnect     #(js/console.log "handle onConnect" %)
              :isConnectable isConnectable}])


(defn custom-node
  "build a custom node for the flow diagram, this time for :ui/component, so
  green, since this is a 'view', and one Handle for each input (along the top)
  and output (along the bottom)
  "
  [node-type open-details? node & extras?]
  (let [data    (js->clj node)
        label   (get-in data ["data" "label"])
        inputs  (get-in data ["data" "inputs"])
        outputs (get-in data ["data" "outputs"])
        style   (merge default-node-style (node-type node-style))]

    ;(log/info "custom-node" label data "///" inputs "///" outputs "//" extras?)

    (r/as-element
      [:div {:style style}
       [handle "data-in" "target" {:background "#555"} (.-Left Position) true]
       [:div {:style    (merge {:textAlign :center} style)
              :on-click #(open-details open-details? node)}
        label]
       [:input.nodrag {:type "color"}]
       [:input.input.nodrag {:type "text" :style {:width "75px"}}]
       [handle "data-out" "source" {:top 10 :background "#555"} (.-Right Position) true]
       [handle "config-out" "source" {:bottom 10 :top "auto" :background "#555"} (.-Right Position) true]])))


