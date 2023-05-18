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





;(def chart (new js/CanvasJS.Chart "" {}))
;(def chart (js/CanvasJS.Chart. "chartContainer" (clj->js chart-data)))




;(defn render-chart []
;  (let [chart (-> (CanvasJS.Chart. "container" (clj->js chart-data))
;                  (.render))]
;    chart))

; var chart = new CanvasJS.Chart("container", {
;  //Chart Options - Check https://canvasjs.com/docs/charts/chart-options/
;  title:{
;    text: "Basic Column Chart in JavaScript"
;  },
;  data: [{
;    type: "column",
;    dataPoints: [
;      { label: "apple",  y: 10  },
;      { label: "orange", y: 15  },
;      { label: "banana", y: 25  },
;      { label: "mango",  y: 30  },
;      { label: "grape",  y: 28  }
;    ]
;  }]
;});
;//Render Chart
;chart.render();


(ns gl-playground.core
  (:require
    [reagent.core :as r]
    ;["react" :as react]
    ["@canvasjs/react-charts" :as CJS]
    ;["react-apexcharts" :refer (Chart)]
    [reagent.dom :as rd]))

;(def chart-data
;  {:title {:text "Basic Column Chart in ClojureScript"}
;   :data [{:type "column"
;           :dataPoints [{:label "apple"  :y 10}
;                        {:label "orange" :y 15}
;                        {:label "banana" :y 25}
;                        {:label "mango"  :y 30}
;                        {:label "grape"  :y 28}]}]})

;(def CanvasJS (CanvasJSReact/CanvasJS ))
(def CanvasJSChart (.CanvasJSChart CJS/CanvasJSReact))
;
;(def options
;  {:chart {:id "basic-bar"}
;   :xaxis {:categories [1991 1992 1993 1994 1995 1996 1997 1998 1999]}})

(def series
  [{:name "series-1"
    :data [30 40 45 50 49 60 70 91]}])
(def options {:zoomEnabled true
         :animationEnabled true
         :title {:text "Try Zooming - Panning"}
         :data [{:x 1 :y 2}]})

(defn app-scaffold []
  [:div {:id "chartContainer"}
   (print CJS/CanvasJSReact)
   ;[:> Chart {:options options :series series :type "line" :width 500}]
   [:> CanvasJSChart {:options options}]
   ])

(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [app-scaffold] root-el)))


(defn main []
  (mount-components))