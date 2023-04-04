(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [cljs.tools.reader.edn :as edn]
    [taoensso.timbre :as log]
    ;["flexlayout-react" :refer (Layout Model) :default FlexLayout]
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





;(defn component-factory [node]
;  (log/info "component-factory " node)
;  (let [component (.getComponent node)
;        name      (.getName node)
;        config    (.getConfig node)]
;    (log/info "component-factory " component name config)
;    (r/as-element ((wr/widget-for component) name config))))



;(defn- flex []
;  (log/info "flex")
;  [:> Layout {:model   (.fromJson Model (clj->js layout))
;              :factory component-factory}])





(defn page []
  [:div {:style {:width "100vw" :height "100vh"}}
   [diagram/component
    :nodes initialNodes :edges initialEdges
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


