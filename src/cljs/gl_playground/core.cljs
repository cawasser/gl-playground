(ns gl-playground.core
  (:require
    [reagent.core :as r]
    ;["react" :as react]
    ["@canvasjs/react-charts$default" :as CanvasJSReact]
    ["react-apexcharts$default" :as ReactApexCharts]
    ["react-chartjs-2" :refer (Line)]
    ["anychart-react" :as AnyChart]
    ["highcharts$default" :as HighCharts]
    ["highcharts-react-official$default" :as HighChartsReact]
    ["recharts" :refer [ResponsiveContainer LineChart Line Brush]]
    [reagent-table.core :as rt]
    [reagent.dom :as rd]
    [gl-playground.react-table :as rtable]))

(defn generate-chart-data [num-entries max-value]
  (let [num-entries num-entries
        max-value max-value]
    (vec (repeatedly num-entries
                     (fn []
                       {:x (rand-int (inc max-value))
                        :y (rand-int (inc max-value))})))))

(defn table []
  (let [table-data {:headers ["1" "2" "3" "4"]
                         :rows [["A"]]}
        tdata (r/atom table-data)]

    [rt/reagent-table tdata]))
(defn canvas-js-chart [type theme title x-axis-title y-axis-title line-size init-data]

  (let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
        data (r/atom init-data)
        options {:zoomEnabled true
                 :animationEnabled true
                 :theme theme
                 :title {:text title}
                 :axisX {:title x-axis-title}
                 :axisY {:title y-axis-title}
                 :data [{:type type
                         :markerSize line-size
                         :dataPoints @data
                         }]}]

    ;(js/setInterval #(swap! data conj [{:x 1 :y 1}]) 1000)
    ;
    (let [interval-id (js/setInterval #(swap! data conj [{:x 3 :y 4}]) 1000)]
      (fn []
        (js/clearInterval interval-id)))

    [:> CanvasJSChart {:options options}]))

(defn react-apex-chart [type data-title width height init-data]
  (let [data (r/atom init-data)
        options {
         :chart {
           :id "basic-bar"}
         :xaxis {
           :type "numeric"}}
        series [{
            :name data-title
            :data @data}]]

  [:> ReactApexCharts {:options options :series series :type type :width width :height height}]))

(defn any-chart []
  (let [chart (js/anychart.pie)
     data [["Chocolate" 5]
           ["Rhubarb compote" 2]
           ["Crêpe Suzette" 2]
           ["American blueberry" 2]
           ["Buttermilk" 1]]]
    (doto chart
    (.data chart data)
    (.title chart "Top 5 pancake fillings")
    (.container chart "app")
    (.draw))
    ;(print AnyChart.line)
  ;[:> chart {:type "pie" :data [1, 2, 3, 4] :title "Any Chart"}]
  ))

(defn high-chart []
  (let [options {:title {:text "My chart"}
                 :series [{:data [1 2 3]}]}]


  [:> HighChartsReact {:highcharts HighCharts :options options}]
  ))

(defn table []
  (rtable/table-component {} rtable/tabular-data))

(defn app-scaffold []
  (let [init-data (generate-chart-data 350 1000)]
  [:div {:id "chartContainer"}

     (canvas-js-chart "line" "light1" "Line chart in ClojureScript" "X-Axis" "Y-Axis" 1 (sort-by :x init-data))
     ;(react-apex-chart "line" "Satellite data" 1000 500 (generate-chart-data 32000 1000))
     ;(react-chart-js (generate-chart-data 10 10))
     ;(any-chart)
     ;[any-chart]
     ;(high-chart)
   [table]
   ]



   ;]
))

(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [app-scaffold] root-el)))


(defn main []
  (mount-components))