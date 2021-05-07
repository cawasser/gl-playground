(ns gl-playground.widget.registry
  (:require [reagent.core :as r]
            [taoensso.timbre :as t]))


(def registry (r/atom {}))

(defn add-widget [tag widget-fn]
  (swap! registry assoc tag widget-fn))


(defn widget-for [tag]
  (get @registry tag))

