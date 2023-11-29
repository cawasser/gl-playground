(ns gl-playground.widget.just-a-button
  (:require [reagent.core :as r]
            [gl-playground.widget.registry :as wr]
            [taoensso.timbre :as log]))


(defn- widget [name config]
  (log/info "just-a-button " name (js->clj config))
  (let [c (js->clj config)
        label (get c "label")]
    [:div
     [:button {:on-click #(log/info "Clicked" label)} label]
     [:button.is-primary {:on-click #(log/info "Clicked" "the primary button")} "Primary"]]))

(wr/add-widget "button" #'widget)