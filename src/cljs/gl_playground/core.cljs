(ns gl-playground.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [re-com.core :as rc]
    ["reactflow" :refer (ReactFlowProvider Handle Position)]
    [taoensso.timbre :as log]
    ;[gl-playground.widget.just-a-button]
    ;[gl-playground.widget.simple-form]
    [gl-playground.bh.atom.diagram.editable-diagram :as diagram]
    [gl-playground.bh.atom.diagram.editable-diagram-rccst :as diagram-r]

    [gl-playground.bh.atom.diagram.custom-nodes.custom-node :as cn]
    [gl-playground.bh.atom.diagram.custom-nodes.editable-node :as e]
    [gl-playground.bh.atom.diagram.custom-nodes.color-picker-node :as cp]))


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

(def node-types {":ui/component"  (partial cn/custom-node :ui/component)
                 ":source/remote" (partial cn/custom-node :source/remote)
                 "color-picker"   (partial cp/color-picker-node :source/local)
                 "editable-node"  (partial e/editableNode :source/fn)})
(def bootstrap-node-data {":ui/component"  cn/node-data
                          ":source/remote" cn/node-data})


(defn default-node-kind [node-type]
  (condp = node-type
    ":ui/component" ":ui/table"
    ":source/remote" ":source/remote"
    :else "unknown"))


(def initialEdges [{:id     "e1-2",
                    :source "100", :sourceHandle "data-out"
                    :target "200" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "e1-3",
                    :source "100", :sourceHandle "data-out"
                    :target "300" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}])
(def initialNodes [{:id "100", :type ":source/remote" :position {:x 100, :y 100}, :data {:label "data-source" :kind ":source/remote"}}
                   {:id "200", :type ":ui/component" :position {:x 200, :y 150}, :data {:label "table" :kind ":ui/table"}}
                   {:id "300", :type ":ui/component" :position {:x 300, :y 200}, :data {:label "bar-chart" :kind ":ui/bar-chart"}}])

(def initial-dsl
  {:components  {":ui/bar-chart"  {:type        :ui/component :name :rechart/bar
                                   :config-data []}
                 ":ui/line-chart" {:type        :ui/component :name :rechart/line
                                   :config-data []}
                 ":topic/data"    {:type :source/local :name :topic/data}}
   :links       {":topic/data" {:data-out {":ui/bar-chart"  :data
                                           ":ui/line-chart" :data}}}
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
  (let [nodes (for [node initialNodes]
                (let [{:keys [type position data]} node
                      kind  (get data :kind)
                      label (get data :label)]
                  {:id       (str "node-" (:id node))
                   :type     type
                   :position position
                   :data     {:label label :kind kind}}))

        edges (for [edge initialEdges]
                (let [{:keys [id
                              source sourceHandle
                              target targetHandle
                              style arrowHeadType]} edge]
                  {:id            (str "edge-" id)
                   :source        (str "node-" source)
                   :sourceHandle  sourceHandle
                   :target        (str "node-" target)
                   :targetHandle  targetHandle
                   :style         style
                   :arrowHeadType arrowHeadType}))]

    (r/atom {:nodes nodes :edges edges})))


(defn page []
  (let [the-dsl-as-an-atom (atom initial-dsl)
        data               (dsl->react-flow @the-dsl-as-an-atom)]

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
                 [diagram-r/component
                  :data data
                  :component-id "editable-diagram"
                  :node-types node-types
                  :node-data bootstrap-node-data
                  :node-kind-fn default-node-kind
                  :controls true
                  :mini-map true
                  :background true]]]]))


(defn ^:dev/after-load-async mount-components
  "mount the main UI components using Reagent"
  []
  (let [root-el (.getElementById js/document "app")]
    (rd/unmount-component-at-node root-el)
    (rd/render [page] root-el)))


(defn main []
  (log/info "running!")
  (mount-components))



