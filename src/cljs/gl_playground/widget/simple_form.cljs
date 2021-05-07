(ns gl-playground.widget.simple-form
  (:require [reagent.core :as r]
            [taoensso.timbre :as t]
            [gl-playground.widget.registry :as wr]))


(defn- widget [name config]
  (t/info "simple-form " (js->clj config) (get (js->clj config) "text"))
  (let [c (js->clj config)]
    [:div
     [:h2 "A Simple Form"]
     [:p (get c "text")]
     [:button {:on-click #(prn "Clicked Submit")} "Submit!"]]))

(wr/add-widget "form" #'widget)

