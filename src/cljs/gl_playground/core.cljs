(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [cljs.tools.reader.edn :as edn]
    [taoensso.timbre :as log]
    [gl-playground.widget.registry :as wr]
    [gl-playground.widget.just-a-button]
    [gl-playground.widget.simple-form]
    [gl-playground.bh.atom.diagram.editable-diagram :as diagram]))


(def layout
  {:global {}
   :layout {:type     :row
            :weight   100
            :children [
                       {:type     :tabset
                        :weight   50
                        :selected 0
                        :children [{:type      :tab
                                    :name      "A Button"
                                    :component "button"
                                    :config    {:label "Click Me!!!"}}]}
                       {:type     :tabset
                        :weight   50
                        :selected 0
                        :children [{:type      :tab
                                    :name      "Simple Form"
                                    :component "form"
                                    :config    {:text "some text"}}]}]}})



(def initialNodes [{:id "100", :position {:x 0, :y 0}, :data {:label "1"}},
                   {:id "200", :position {:x 0, :y 100}, :data {:label "2"}}])
(def initialEdges [{:id "e1-2", :source "100", :target "200"}])
(defonce data (r/atom {:nodes initialNodes :edges initialEdges}))


(defn page []
  [:div {:style {:width "800vw" :height "800vh"}}
   [diagram/make-draggable-node "test"]
   [:f> diagram/editable-diagram
    :data data
    :controls true :mini-map true :background true]])


(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [page] root-el)))


(defn main []
  (log/info "running!")
  (mount-components))



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
