(ns gl-playground.bh.atom.diagram.custom-nodes.bh-node
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]))



(def default-node-style {:padding      "3px" :max-width "100px"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})


(defn make-key [& path]
  (->> path
    flatten
    (remove nil?)
    (map str)
    (map #(clojure.string/replace % #":" ""))
    (map #(clojure.string/replace % #"/" "."))
    (map #(clojure.string/replace % #" " "-"))
    (clojure.string/join ".")
    keyword))



(defn unroll-params [container params]
  (->> params
    (map (fn [p] {p [(make-key [container p])]}))
    (into {})))


(defn bh-node [content params container node]
  (let [data (js->clj node)
        isVisible (r/atom false)]

    (log/info "bh-node" container "///" params "///" (unroll-params container params))

    (r/as-element
      [:div {:style (merge default-node-style {:border :solid :border-color :green})
             :on-mouse-enter #(reset! isVisible (-> true))}
       [content (unroll-params container params)]])))



(comment
  (make-key ["dummy"])

  (unroll-params "dummy" {})

  (def container-id :example-diagram)
  (def params [:value :range])


  [:content (unroll-params container-id params)]



  ())