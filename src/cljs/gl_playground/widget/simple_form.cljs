(ns gl-playground.widget.simple-form
  (:require [reagent.core :as r]
            [taoensso.timbre :as log]
            [gl-playground.widget.registry :as wr]))


(defn- widget [name config]
  (log/info "simple-form " (js->clj config) (get (js->clj config) "text"))
  (let [c (js->clj config)]
    [:div
     [:h2 "A Simple Form"]
     [:p (get c "text")]
     [:button {:on-click #(log/info "Clicked Submit")} "Submit!"]
     [:button {:on-click #(log/info "Clicked Cancel")} "Cancel"]]))

(wr/add-widget "form" #'widget)

