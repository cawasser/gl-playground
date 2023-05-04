(ns gl-playground.bh.atom.re-com.slider
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]))



(rf/reg-sub
  :example-diagram.value
  :<- [:example-diagram]
  (fn [db _]
    (:value db)))


(rf/reg-sub
  :example-diagram.range
  :<- [:example-diagram]
  (fn [db _]
    (:range db)))


(rf/reg-event-db
  :example-diagram.value
  (fn-traced [db [_ new-value]]
    (assoc-in db [:example-diagram :value] new-value)))



(defn slider [{:keys [value range]} node]
  (let [val (rf/subscribe value)
        [min max] @(rf/subscribe range)]
    [rc/h-box :src (rc/at)
     :gap "2px"
     :width "100%"
     :class "nodrag"
     :children [[rc/slider :src (rc/at)
                 :model val
                 :min min
                 :max max
                 :parts {:wrapper {:style {:width "90%"}}}
                 :width "100%"
                 :on-change #(rf/dispatch (conj value (js/parseInt %)))
                 :disabled? false]
                [:p @val]]]))


