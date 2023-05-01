(ns gl-playground.globals (:require
                            [reagent.core :as r]))

(def initialNodes [{:id "100", :position {:x 100, :y 100}, :data {:label "1"}}
                   {:id "200", :position {:x 100, :y 200}, :data {:label "2"}}])
(def initialEdges [{:id "e1-2", :source "100", :target "200"
                    :style {:strokeWidth 1 :stroke :yellow}
                    :arrowHeadType "arrowclosed"}])

(defonce data (r/atom {:nodes initialNodes :edges initialEdges}))

(defn get-data [] (-> data))
