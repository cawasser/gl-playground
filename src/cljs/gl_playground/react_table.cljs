(ns gl-playground.react-table
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            ["react-table" :as rt]))


(defn- table [columns data table-type config]
       (let [^js table  (rt/useTable (clj->js {:columns columns :data data :autoResetExpanded false}) rt/useExpanded)]
            [:div {:style {:max-height (or (:height @config) "100%")
                           :overflow-y "auto"
                           :color (or (:text-color @config) "black")
                           :width (or (:width @config) "100%")
                           :border (or (:table-border @config) "2px solid black")}}
             [:r> "table" (.getTableProps table (clj->js {:style {:width "100%"
                                                                  :height "100%"
                                                                  :color (or (:text-color @config) "black")}
                                                          :className "table"}))
              [:thead {:style {:backgroundColor (or (:header-bg-color @config) "lightgray")
                               :position "sticky" :top 0}}
               (let [hgs (.-headerGroups table)]
                    (doall
                      (for [hg hgs]
                           [:r> "tr" (.getHeaderGroupProps hg)
                            (doall
                              (for [col (.-headers hg)]
                                   [:r> "th" (.getHeaderProps col)
                                    (.render col "Header")]))])))]
              [:r> "tbody" (.getTableBodyProps table (clj->js {:style {:backgroundColor (or (:body-bg-color @config) "white")}}))
               (doall
                 (for [row (.-rows table)]
                      (let [prepareRow (fn [] (.prepareRow table row))]
                           (prepareRow)
                           (r/as-element [:<> {:key (.-key (.getRowProps row))}
                                          [:r> "tr" (.getRowProps row)
                                           (doall
                                             (for [cell (.-cells row)]
                                                  (let [column (.-column cell)
                                                        cellType (if (and (not (.-canExpand row)) (= table-type "expandable"))
                                                                   "SubCell"
                                                                   "Cell")]
                                                       [:r> "td" (.getCellProps cell (clj->js {:style {:borderColor (or (:row-border-color @config) "white-smoke")}}))
                                                        (.render cell cellType)])))]]))))]]]))



(defn- updateVal [value index subRowIndex colId data react-data]
       (let [path (if (nil? subRowIndex)
                    [index (keyword colId)]
                    [index :subRows subRowIndex (keyword colId)])]

            (swap! react-data assoc-in path value)

            (swap! data assoc :data (if (nil? subRowIndex)
                                      @react-data
                                      (into [] (flatten (map #(get %1 :subRows) @react-data)))))))



(defn- configure-columns [data react-data config]
       (into [] (map
                  (fn [m]
                      {:Header   (:colHeader m)
                       :accessor (:colId m)
                       :SubCell  (if (or (= (:cellType m) "mainRow"))
                                   (fn [] nil)
                                   (fn [cellProps]
                                       (let [value (.-value cellProps)
                                             index (js/parseInt (.-id (.-row cellProps)))
                                             subRowIndex (.-index (.-row cellProps))
                                             colId       (keyword (.-id (.-column (.-cell cellProps))))]
                                            ((:render m) value index subRowIndex colId data react-data ))))
                       :Cell     (if (or (= (:cellType m) "mainRow") (= (:table-type (:meta-data @data)) "tabular"))
                                   (if (= (:colType m) "expandable")
                                     (fn [tableInstance]
                                         (let [row (.-row tableInstance)]
                                              (r/as-element [:r> "span" (.getToggleRowExpandedProps row)
                                                             (if (.-isExpanded row)
                                                               (or (:fold-row-icon @config) "\uD83D\uDC47")
                                                               (or (:expand-row-icon @config) "\uD83D\uDC49"))])))
                                     (fn [cellProps]
                                         (let [value (.-value cellProps)
                                               index (js/parseInt (.-id (.-row cellProps)))
                                               subRowIndex nil
                                               colId       (.-id (.-column (.-cell cellProps)))]
                                              ((:render m) value index subRowIndex colId data react-data))))
                                   (fn [] nil))})
                  (:columns (:meta-data @data)))))



(defn- configure-data [data]
       (let [table-type (:table-type (:meta-data @data))
             d (:data @data)
             group-by-key (:group-by (:meta-data @data))]
            (js/console.log "configure data")
            (if (= table-type "expandable")
              (->> d
                   (reduce #(conj %1 (group-by-key %2)) #{})
                   (sort)
                   (map (fn [val]
                            {group-by-key val
                             :subRows (into []
                                            (filter
                                              (fn [row]
                                                  (= val (group-by-key row)))
                                              d))}))
                   (into []))
              d)))



(defn table-component [config data]
      (let [config (r/atom config)
            data   (r/atom data)
            react-data   (r/atom (configure-data data))
            column-config (clj->js (configure-columns data react-data config))]
           (fn []
               (js/console.log (clj->js @react-data) (clj->js @data))
               [:f> table column-config (clj->js @react-data) (:table-type (:meta-data @data)) config])))



(def group-data {:meta-data {:table-type "expandable"
                             :group-by    :time
                             :columns    [{:colType   "expandable"
                                           :colHeader ""
                                           :colId     "expander"
                                           :cellType  "mainRow"}
                                          {:colHeader "time"
                                           :colId     "time"
                                           :cellType  "mainRow"
                                           :render     (fn [value]
                                                           value)}
                                          {:colHeader "Include?"
                                           :colId     "Include?"
                                           :cellType  "subRow"
                                           :render   (fn [value index subRowIndex colId data react-data]
                                                         (r/as-element [:input
                                                                        {:type "checkbox"
                                                                         :checked value
                                                                         :on-change (fn [e] (updateVal (not value) index subRowIndex colId data react-data))}]))}
                                          {:colId     "Symbol"
                                           :colHeader "Symbol"
                                           :cellType  "subRow"
                                           :render     (fn [value]
                                                           (r/as-element [:div {:style {:background-color (str value)
                                                                                        :height "20px"
                                                                                        :width  "20px"
                                                                                        :border-radius "50%"}}]))}
                                          {:colHeader "AoI"
                                           :colId     "AoI"
                                           :cellType  "subRow"
                                           :render     (fn [value]
                                                           value)}]}
                 :data      [{:Symbol "yellow" :time 0 :AoI "x" :Include? false}
                             {:Symbol "orange" :time 1 :AoI "x" :Include? false}
                             {:Symbol "green" :time 1 :AoI "x" :Include? false}
                             {:Symbol "blue" :time 0 :AoI "x" :Include? false}
                             {:Symbol "pink" :time 3 :AoI "x" :Include? false}
                             {:Symbol "pink" :time 3 :AoI "x" :Include? false}
                             {:Symbol "pink" :time 3 :AoI "x" :Include? false}
                             {:Symbol "blue" :time 0 :AoI "x" :Include? true}
                             {:Symbol "pink" :time 3 :AoI "x" :Include? true}]})

(def tabular-data {:meta-data {:table-type "tabular"
                               :columns    [{:colHeader "Subchannel Group"
                                             :colId     "subchannel-group"
                                             :render     (fn [value]
                                                           value)}
                                            {:colHeader "Super Subchannel Group"
                                             :colId     "super-subchannel-group"
                                             :render   (fn [value]
                                                         value)}

                                            {:colHeader "Uplink Subchannel Group Route"
                                             :colId "uplink-route"
                                             :render     (fn [value]
                                                             value)}
                                            {:colHeader  "Downlink Subchannel Group Route"
                                             :colId      "downlink-route"
                                             :render     (fn [value]
                                                             value)}]}
                   :data [{:subchannel-group "CCS5" :super-subchannel-group "Super group" :uplink-route "NCR2A_48" :downlink-route "ECRA_0NCR2A_48"}
                          {:subchannel-group "Japan_FO_Leg_1_to_US" :super-subchannel-group "Japan_FO" :uplink-route "NCR2A-68-78" :downlink-route "SBZ1A-68"}
                       ]})