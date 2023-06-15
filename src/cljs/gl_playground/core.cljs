(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [re-com.core :as rc]
    [cljs.tools.reader.edn :as edn]
    ["reactflow" :refer (ReactFlowProvider
                          Handle Position)]
    [taoensso.timbre :as log]
    [gl-playground.widget.registry :as wr]
    [gl-playground.widget.just-a-button]
    [gl-playground.widget.simple-form]
    [gl-playground.bh.atom.diagram.editable-diagram :as diagram]
    [gl-playground.bh.atom.diagram.editable-diagram-rccst :as diagram-r]))
;[gl-playground.bh.atom.diagram.CustomNodes.EditableNode :as EditableNode]



(def layout
  {:global {}
   :layout {:type     :row
            :weight   100
            :children [
                       {:type     :tabset
                        :weight   50
                        :selected 0
                        :children [{:type      :tab
                                    :name      "A Button"
                                    :component "button"
                                    :config    {:label "Click Me!!!"}}]}
                       {:type     :tabset
                        :weight   50
                        :selected 0
                        :children [{:type      :tab
                                    :name      "Simple Form"
                                    :component "form"
                                    :config    {:text "some text"}}]}]}})

(defn editableNode []
  [:<>])
;[Handle {:type "target"
;            :isConnectable true}]
;[:input {:type "text"}]
;[Handle {:type "source"
;            :isConnectable true}]




(def initialEdges [{:id            "e1-2", :source "200", :target "300"
                    :style         {:strokeWidth 1 :stroke :yellow}
                    :arrowHeadType "arrowclosed"}])
(def initialNodes [{:id "200", :type ":ui/component" :position {:x 200, :y 300}, :data {:label ":ui/table" :kind ":ui/table"}}
                   {:id "300", :type ":ui/component" :position {:x 300, :y 400}, :data {:label ":ui/bar-chart" :kind ":ui/bar-chart"}}])
(def initial-dsl

  {:components  {:ui/bar-chart  {:type        :ui/component :name :rechart/bar
                                 :config-data []}
                 :ui/line-chart {:type        :ui/component :name :rechart/line
                                 :config-data []}
                 :topic/data    {:type :source/local :name :topic/data}}
   :links       {:topic/data {:data {:ui/bar-chart  :data
                                     :ui/line-chart :data}}}
   :grid-layout [{:i :ui/line-chart :x 0 :y 0 :w 10 :h 11 :static true}
                 {:i :ui/bar-chart :x 10 :y 0 :w 10 :h 11 :static true}]})


(def initial-dsl2
  {:components  (reduce #(assoc %1 (:id %2) (:data %2))
                        {}
                        initialNodes)
   :links       (reduce #(assoc-in %1 [:topic/data :data (:type %2)]
                                   (:id %2))
                        {}
                        initialEdges)
   :grid-layout [{:i :ui/line-chart :x 0 :y 0 :w 10 :h 11 :static true}
                 {:i :ui/bar-chart :x 10 :y 0 :w 10 :h 11 :static true}]})



(defn react-flow->dsl [dsl-atom data]
  ; transform react-flow -> dsl
  dsl-atom)


(defn- dsl->react-flow [the-dsl]
  (let [components (get the-dsl :components)
        links (get the-dsl :links)
        layout (get the-dsl :grid-layout)
        nodes (for [node initialNodes]
                (let [{:keys [type position data]} node
                      kind (get data :kind)
                      label (get data :label)]
                  {:id       (str "node-" (:id node))
                   :type     (keyword type)
                   :position position
                   :data     {:label label :kind kind}}))
        edges (for [edge initialEdges]
                (let [{:keys [id source target style arrowHeadType]} edge]
                  {:id            (str "edge-" id)
                   :source        (str "node-" source)
                   :target        (str "node-" target)
                   :animated      true
                   :style         style
                   :arrowHeadType arrowHeadType}))]

    (r/atom {:nodes nodes :edges edges})))


(defn page []
  (let [the-dsl-as-an-atom (atom initial-dsl)
        text-value (r/atom "Type Here")
        open-details? (r/atom {})
        data (dsl->react-flow @the-dsl-as-an-atom)]

    [:div {:style {:width "800vw" :height "800vh"}}
     [rc/h-box
      :gap "5px"
      :children [[rc/box
                  :size "auto"
                  :child [rc/v-box :gap "2px" :width "200px"
                          :children [[diagram/make-draggable-node ":ui/component" ":ui/component" :ui/component]
                                     [diagram/make-draggable-node ":source/remote" ":source/remote" :source/remote]
                                     [diagram/make-draggable-node "Color Picker" "color-picker" :source/local]
                                     [diagram/make-draggable-node "Editable" "editable-node" :source/fn]]]]
                 [rc/box
                  :size "auto"
                  :child [diagram-r/editable-diagram
                          :data data
                          :update-fn #(partial react-flow->dsl the-dsl-as-an-atom)
                          :component-id "editable-diagram-rccst"
                          :node-types diagram-r/node-types
                          :controls true
                          :mini-map true
                          :background true]]]]]))


(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [page] root-el)))


(defn main []
  (log/info "running!")
  (mount-components))



