(ns gl-playground.bh.atom.diagram.custom-nodes.custom-node
  (:require [reagent.core :as r]
            ["reactflow" :refer (Handle Position)]
            [taoensso.timbre :as log]))


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

(defn- make-handle [direction {:keys [label style position]}]
  ^{:key label} [handle label direction style position true])


(def ui-component-registry {":ui/table" {:inputs ["data-in" "config-in"] :outputs ["data-out" "config-out" "selection"]}})


(def ui-component-registry-almost {":ui/table" {:inputs [{:label "data-in" :style {:top 10 :background "#555"} :position (.-Left Position)}
                                                         {:label "config-in" :style {:top 20 :background "#555"} :position (.-Left Position)}]
                                                :outputs [{:label "data-out" :style {:bottom 10 :top "auto" :background "#555"} :position (.-Right Position)}
                                                          {:label "config-out" :style {:bottom 20 :top "auto" :background "#555"} :position (.-Right Position)}]}

                                   ":ui/slider" {:inputs [{:label "position-in" :style {:top 10 :background "#555"} :position (.-Left Position)}
                                                          {:label "config-in" :style {:top 20 :background "#555"} :position (.-Left Position)}]
                                                 :outputs [{:label "position-out" :style {:bottom 10 :top "auto" :background "#555"} :position (.-Right Position)}]}})

(defn look-up-ui-component [ui-name]
  (get ui-component-registry-almost ui-name))


(defn lookup-ui-types []
  (keys ui-component-registry-almost))


(def custom-handles {:inputs [{:label "data-in" :style {:top 10 :background "#555"} :position (.-Left Position)}
                              {:label "config-in" :style {:top 20 :background "#555"} :position (.-Left Position)}]
                     :outputs [{:label "data-out" :style {:bottom 20 :top "auto" :background "#555"} :position (.-Right Position)}
                               {:label "config-out" :style {:bottom 10 :top "auto" :background "#555"} :position (.-Right Position)}]})


(defn custom-node
  "build a custom node for the flow diagram, this time for :ui/component, so
  green, since this is a 'view', and one Handle for each input (along the top)
  and output (along the bottom)
  "
  [node-type open-details? node & extras?]
  (let [data    (js->clj node)
        label   (get-in data ["data" "label"])
        kind-of-element (get-in data ["data" "kind"])
        inputs  (get-in data ["data" "inputs"])
        outputs (get-in data ["data" "outputs"])
        style   (merge default-node-style (node-type node-style))]

    (log/info "custom-node" label node-type kind-of-element "///" data "///" inputs "///" outputs "//" extras?)

    (r/as-element
      [:div {:style style}
       (map #(make-handle "target" %) (:inputs (look-up-ui-component kind-of-element)))
       [:div {:style    (merge {:textAlign :center} style)
              :on-click #(open-details open-details? node)}
        label]
       [:input.nodrag {:type "color"}]
       [:input.input.nodrag {:type "text" :style {:width "75px"}}]
       (map #(make-handle "target" %) (:outputs (look-up-ui-component kind-of-element)))])))


(comment
  (def kind-of-element ":ui/table")


  ())

