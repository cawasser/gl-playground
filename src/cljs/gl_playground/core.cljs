(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-com.core :as rc]
    [cljs.tools.reader.edn :as edn]
    ["reactflow" :refer (ReactFlowProvider
                          Handle Position)]
    [taoensso.timbre :as log]
    [gl-playground.widget.registry :as wr]
    [gl-playground.widget.just-a-button]
    [gl-playground.widget.simple-form]
    [gl-playground.bh.atom.diagram.editable-diagram :as diagram]
    [gl-playground.bh.atom.diagram.editable-diagram-rccst :as diagram-r]))
;[gl-playground.bh.atom.diagram.CustomNodes.EditableNode :as EditableNode]




(defn editableNode []
  [:<>])
;[Handle {:type "target"
;            :isConnectable true}]
;[:input {:type "text"}]
;[Handle {:type "source"
;            :isConnectable true}]


(rf/reg-event-db
  :init
  (fn-traced [db _]
    (log/info ":init")
    (-> db
      (assoc-in [:example-diagram :value] 0)
      (assoc-in [:example-diagram :range] [0 100])
      (assoc-in [:example-diagram :color] {:r 128 :g 128 :b 128 :a 1.0}))))


(rf/reg-sub
  :example-diagram
  (fn [db _]
    (:example-diagram db)))



(def initialNodes [{:id "100", :position {:x 100, :y 100}, :data {:label "1"}}
                   {:id "200", :position {:x 100, :y 200}, :data {:label "2"}}])
(def initialEdges [{:id            "e1-2", :source "100", :target "200"
                    :style         {:strokeWidth 1 :stroke :yellow}
                    :arrowHeadType "arrowclosed"}])


(defn react-flow->dsl [dsl-atom data]
  ; transform react-flow -> dsl
  dsl-atom)


(defn- dsl->react-flow [the-dsl]
  ; transform dsl -> react-flow
  (r/atom {:nodes initialNodes :edges initialEdges}))



(defn page []
  (let [the-dsl-as-an-atom (atom {})
        text-value         (r/atom "Type Here")
        open-details?      (r/atom {})
        data               (dsl->react-flow @the-dsl-as-an-atom)]

    [:div {:style {:width "800vw" :height "800vh"}}
     [rc/h-box
      :gap "5px"
      :children [[rc/box
                  :size "auto"
                  :child [rc/v-box :gap "2px" :width "200px"
                          :children [;[diagram/make-draggable-node ":ui/component" ":ui/component" :ui/component]
                                     ;[diagram/make-draggable-node ":source/remote" ":source/remote" :source/remote]
                                     ;[diagram/make-draggable-node "Color Picker" "color-picker" :source/local]
                                     ;[diagram/make-draggable-node "Editable" "editable-node" :source/fn]]
                                     [diagram/make-draggable-node "Slider" "slider" :ui/component]
                                     [diagram/make-draggable-node "Color Picker" "color-picker" :ui/component]]]]
                 [rc/box
                  :size "auto"
                  :child [diagram-r/editable-diagram
                          :data data
                          :update-fn #(partial react-flow->dsl the-dsl-as-an-atom)
                          :component-id "editable-diagram-rccst"
                          :node-types (diagram-r/node-types :example-diagram)
                          :controls true
                          :mini-map true
                          :background true]]]]]))


(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  ;(rf/dispatch-sync [:init])

  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [page] root-el)))


(defn main []
  (log/info "running!")
  (rf/dispatch-sync [:init])
  (mount-components))


(comment
  @re-frame.db/app-db


  ())

(comment
  [:> FlexLayout]

  [:> FlexLayout {:model   {}
                  :factory component-factory}]

  [:p "testing"]

  (def model (.fromJson Model (clj->js layout)))


  (r/reactify-component
    [:button name])

  (wr/widget-for "form")

  (clj->js {:text "some text"})
  (pr-str {:text "some text"})
  (-> {:text "some text"}
    pr-str
    edn/read-string)
  (js->clj {"text" "some text"})
  ())


(comment

  @data

  (-> @data :nodes count)
  (-> @data :edges count)

  @re-frame.db/app-db

  ())
