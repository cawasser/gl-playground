;(ns gl-playground.core
;  (:require
;    [reagent.core :as r]
;    [reagent.dom :as rd]
;    [re-frame.core :as rf]
;    [re-com.core :as rc]
;    ["recharts" :refer [LineChart Line Brush
;                        XAxis YAxis ZAxis Tooltip]]))
;
;;const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
;(def data [{:name "page-1" :fill "#ffffff" :uv 4000 :pv 2400 :amt 2400}])
;
;
;;(def source-code '[:> LineChart {:data d}
;;                   (utils/standard-chart-components component-id {})
;;                   [:> Line (merge {:type              "monotone" :dataKey a
;;                                    :isAnimationActive @isAnimationActive?
;;                                    :stroke            (ui-utils/resolve-sub subscriptions [a :stroke])
;;                                    :fill              (ui-utils/resolve-sub subscriptions [a :fill])}
;;                                   (when (seq (ui-utils/resolve-sub subscriptions [a :stackId]))
;;                                     {:stackId (ui-utils/resolve-sub subscriptions [a :stackId])}))]])
;(defn page []
;  ;(r/as-element
;    [:p "test"]
;  ;  [:> LineChart {:width 400 :height 400 :data data}
;     ;[:> Line {:type "monotone" :stroke "#8884d8"}]
;     ;]
;    )
;   ;)
;
;
;(defn ^:dev/after-load-async mount-components
;  "mount the main UI components using Reagent"
;  []
;  (let [root-el (.getElementById js/document "app")]
;    (rd/unmount-component-at-node root-el)
;    (rd/render [page] root-el)))
;
;
;(defn main []
;  (mount-components))

(ns gl-playground.core
  (:require
    [reagent.core :as r]
    ;[clojure.java.io :as io]
    [reagent.dom :as rd]
    [clojure.edn :as edn]
    ["react-vis" :as rvis]))

;(def chart-data [{:x 1 :y 1}
;                 {:x 2 :y 2}
;                 {:x 3 :y 4}
;                 {:x 4 :y 5}
;                 {:x 5 :y 4}
;                 {:x 6 :y 6}
;                 {:x 7 :y 8}
;                 {:x 8 :y 6}
;                 {:x 9 :y 5}
;                 {:x 10 :y 5}])

(defn generate-chart-data []
  (let [num-entries 10000
        max-value 100]
    (vec (repeatedly num-entries
                     (fn []
                       {:x (rand-int (inc max-value))
                        :y (rand-int (inc max-value))})))))

;(def chart-data
;  (generate-chart-data))



(def axis-style {:line {:stroke "#333"
                        :strokeLinecap "square"}
                 :ticks {:stroke "#999"}
                 :text {:stroke "none"
                        :fill "#333"}})

(defn line-chart [data]
  [:> rvis/XYPlot
   {:width 800
    :height 225
    :margin {:left 50 :right 50}}
   [:> rvis/XAxis
    {:tickTotal 10
     :tickSizeInner 0
     :tickSizeOuter 3
     :style axis-style}]
   [:> rvis/YAxis
    {:tickSizeInner 0
     :tickSizeOuter 3
     :style axis-style}]
   [:> rvis/LineSeries
    {:data data
     :color "#e47320"
     :strokeWidth 1
     :style {:fill "none"
             :strokeLinejoin "round"
             :strokeLinecap "round"}}]])

(def chart-data (vec (for [i (range 1 100)]
                       {:x i
                        :y (* 2 i)})))

(print chart-data)

(def chart-data (generate-chart-data))

(js/localStorage.setItem "chart-data" (pr-str chart-data))

(def read-data (edn/read-string (js/localStorage.getItem "chart-data")))

;(spit "chart-data.txt" (pr-str (generate-chart-data)))
;
;(def chart-data-from-file (edn/read-string (slurp "chart-data.txt")))


(defn app-scaffold []
  [:div
   [line-chart read-data]])

(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [app-scaffold] root-el)))


(defn main []
  (mount-components))