(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [cljs.tools.reader.edn :as edn]
    [taoensso.timbre :as t]
    ["flexlayout-react" :refer (Layout Model) :default FlexLayout]
    [gl-playground.widget.registry :as wr]
    [gl-playground.widget.just-a-button]
    [gl-playground.widget.simple-form]))


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
                                    :config    {:label "Submit!"}}]}
                       {:type     :tabset
                        :weight   50
                        :selected 0
                        :children [{:type      :tab
                                    :name      "Simple Form"
                                    :component "form"
                                    :config    {:text "some text"}}]}]}})




(defn component-factory [node]
  (t/info "component-factory " node)
  (let [component (.getComponent node)
        name      (.getName node)
        config    (.getConfig node)]
    (t/info "component-factory " component name config)
    (r/as-element ((wr/widget-for component) name config))))



(defn- flex []
  (t/info "flex")
  [:> Layout {:model   (.fromJson Model (clj->js layout))
              :factory component-factory}])



(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []

  (rd/render #'flex (.getElementById js/document "app")))



(defn main []
  (t/info "running!")
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


