(ns gl-playground.bh.atom.re-com.color-picker
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            ["react-colorful" :refer [HexColorPicker RgbaColorPicker]]
            [taoensso.timbre :as log]))


(rf/reg-sub
  :example-diagram.color
  :<- [:example-diagram]
  (fn [db _]
    (:color db)))


(rf/reg-event-db
  :example-diagram.color
  (fn-traced [db [_ new-value]]
    (assoc-in db [:example-diagram :color] new-value)))




(defn color-picker [{:keys [color]}]
  [:div {:style {:width "100px" :height "100px"}}
   [rc/box :src (rc/at)
    :size "auto"
    :class "nodrag"
    :child [:> RgbaColorPicker {:color     @(rf/subscribe color)
                                :on-change #(rf/dispatch (conj color (js->clj %)))}]]])



(comment
  (rf/subscribe [:example-diagram])
  (rf/subscribe [:example-diagram.color])


  ())
