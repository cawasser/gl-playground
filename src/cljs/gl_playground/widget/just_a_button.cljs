(ns gl-playground.widget.just-a-button
  (:require [reagent.core :as r]
            [gl-playground.widget.registry :as wr]
            [taoensso.timbre :as t]))


(defn- widget [name config]
  (t/info "just-a-button " name (js->clj config))
  (let [c (js->clj config)]
    [:div
     [:button {:on-click #(prn "Clicked")} (get c "label")]]))

(wr/add-widget "button" #'widget)