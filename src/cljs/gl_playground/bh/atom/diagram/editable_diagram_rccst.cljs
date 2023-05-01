(ns gl-playground.bh.atom.diagram.editable-diagram-rccst
  (:require [clojure.set :as set]
            [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [gl-playground.bh.atom.diagram.custom-nodes.custom-node :as cn]
            [gl-playground.bh.atom.diagram.custom-nodes.color-picker-node :as cp-node]
            [gl-playground.bh.atom.diagram.custom-nodes.editable-node :as e-node]
            [gl-playground.bh.atom.diagram.custom-nodes.menu-node :as menu-node]
            ["react" :as react]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]))
;["react-flow-renderer" :refer (ReactFlowProvider MiniMap Controls
;                                Handle MarkerType
;                                Background
;                                applyNodeChanges
;                                applyEdgeChanges
;                                useNodesState
;                                useEdgesState) :default ReactFlow]))


(log/info "bh.ui-component.atom.diagram.editable-digraph")


(declare node)


(def sample-data
  {:nodes [{:id       ":ui/targets"
            ;:type     ":ui/component"
            :data     {:label   ":ui/targets"
                       :inputs  []
                       :outputs []}
            :position {:x 0 :y 100}}
           {:id       ":topic/target-data"
            ;:type     ":source/remote"
            :data     {:label   ":topic/target-data"
                       :inputs  []
                       :outputs []}
            :position {:x 100 :y 0}}
           {:id       ":topic/selected-targets"
            ;:type     ":source/local"
            :data     {:label   ":topic/selected-targets"
                       :inputs  []
                       :outputs []}
            :position {:x 0 :y 200}}]

   :edges [
           {:id        "target-data->targets"
            :source    ":topic/target-data" :target ":ui/targets"
            :style     {:strokeWidth 2 :stroke :orange}
            :markerEnd {:type (.-Arrow MarkerType)}}        ;:type (.-ArrowClosed MarkerType)}}
           {:id        "targets->selected-targets"
            :source    ":ui/targets" :target ":topic/selected-targets"
            :style     {:strokeWidth 2 :stroke :blue}
            :markerEnd {:type (.-ArrowClosed MarkerType)}}]})
(def sample-data-3
  {:nodes [{:id "1 " :type "input" :data {:label "input"} :position {:x 0 :y 0}}
           {:id "2 " :data {:label "node 2 "} :position {:x 0 :y 0}}
           {:id "2a " :data {:label "node 2a "} :position {:x 0 :y 0}}
           {:id "2b " :data {:label "node 2b "} :position {:x 0 :y 0}}
           {:id "2c " :data {:label "node 2c "} :position {:x 0 :y 0}}
           {:id "2d " :data {:label "node 2d "} :position {:x 0 :y 0}}
           {:id "3 " :data {:label "node 3 "} :position {:x 0 :y 0}}
           {:id "4 " :data {:label "node 4 "} :position {:x 0 :y 0}}
           {:id "5 " :data {:label "node 5 "} :position {:x 0 :y 0}}
           {:id "6 " :type "output" :data {:label "output"} :position {:x 0 :y 0}}
           {:id "7 " :type "output" :data {:label "output"} :position {:x 0 :y 0}}]

   :edges [{:id "e12" :source "1 " :target "2 " :type "smoothstep" :animated true}
           {:id "e13" :source "1 " :target "3 " :type "smoothstep" :animated true}
           {:id "e22a" :source "2 " :target "2a " :type "smoothstep" :animated true}
           {:id "e22b" :source "2 " :target "2b " :type "smoothstep" :animated true}
           {:id "e22c" :source "2 " :target "2c " :type "smoothstep" :animated true}
           {:id "e2c2d" :source "2c " :target "2d " :type "smoothstep" :animated true}
           {:id "e45" :source "4 " :target "5 " :type "smoothstep" :animated true}
           {:id "e56" :source "5 " :target "6 " :type "smoothstep" :animated true}
           {:id "e57" :source "5 " :target "7 " :type "smoothstep" :animated true}]})


(def source-code '[])




(defn- source-panel [])


;; region ; adding handles to nodes in the digraph

(defn- input-handles
  "
  NOTE: the inputs (values in the hash-map) are STRINGS!
  "
  [label inputs position]
  [:<>
   (doall
     (->> inputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "input-handle" label target-port)
                        [:> Handle {:id    target-port :type "target" :position position
                                    :style (merge cn/handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))])


(defn- output-handles
  "
  NOTE: the inputs (values in the hash-map) are STRINGS!
  "
  [label outputs position]
  [:<>
   (doall
     (->> outputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "output-handle" label source-port)
                        [:> Handle {:id    source-port :type "source" :position position
                                    :style (merge cn/handle-style {:right (+ 20 (* 10 idx))})}])))
       (into [:<>])))])


(defn- apply-handles [label inputs outputs input-position output-position]
  (let [i        (->> inputs
                   (map (fn [[k [s d]]] [k s d]))
                   (into #{}))
        o        (->> outputs
                   (map (fn [[k [s d]]] [k s d]))
                   (into #{}))
        in-out   (set/intersection i o)
        in-only  (set/difference (set/difference i o) in-out)
        out-only (set/difference (set/difference o i) in-out)]

    (input-handles label in-out input-position)
    (input-handles label in-only input-position)
    (output-handles label out-only output-position)))

;; endregion


(def color-black "#000000")
(def color-white "#ffffff")





(defn input-output-handles
  "

  NOTE: the inputs (values in the hash-map) are STRINGS!
  "

  [label inputs outputs]
  [:<>
   ; add the input handles
   (doall
     (->> inputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "input-handle" label "/" target-port "///" target "/" source-port)
                        [:> Handle {:id    target-port :type "target" :position "top"
                                    :style (merge cn/handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))

   ; add the output handles
   (doall
     (->> outputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "output-handle" label "/" source-port "///" target "/" target-port)
                        [:> Handle {:id    source-port :type "source" :position "bottom"
                                    :style (merge cn/handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))])






;(input-output-handles label inputs outputs)])))

(def node-types {":ui/component"  (partial cn/custom-node :ui/component)
                 ":source/remote" (partial cn/custom-node :source/remote)
                 "color-picker"   (partial cp-node/color-picker-node :source/local)
                 "editable-node"  (partial e-node/editableNode :source/fn)})


;; region ; digraph drag-and-drop support

(defn- on-drag-start [node-type event]
  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))

(def next-id (atom 0))


(defn- on-drop [component-id data reactFlowInstance set-nodes-fn wrapper event]
  (.preventDefault event)

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]

    ;(log/info "on-drop" node-type)
    ;"//" @wrapper
    ;"//" (.-current @wrapper)
    ;"//" (.getBoundingClientRect @wrapper))
    ;"//" (js->clj reactFlowBounds)

    (when (not= node-type "undefined")
      (let [new-id   (str node-type "-" (swap! next-id inc))
            kind     ""
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node {:id       new-id
                      :type     node-type
                      :data     {:label   new-id
                                 :kind     kind
                                 :inputs  []
                                 :outputs []}
                      :position position}]

        (swap! data assoc :nodes (conj (:nodes @data) new-node))
        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))))


(defn- make-draggable-node [[k {:keys [label type color text-color]} :as node]]
  ;(log/info "make-draggable-node" label type "//" node)
  ^{:key label} [:div.draggable
                 {:style       {:width           "150px" :height "50px"
                                :margin-bottom   "5px"
                                :display         :flex
                                :justify-content :center
                                :align-items     :center
                                :cursor          :grab
                                :border-radius   "3px" :padding "2px"
                                :background      color :color text-color}
                  :onDragStart #(on-drag-start type %)
                  :draggable   true}
                 label])


(defn on-connect [data flowInstance set-edges-fn wrapper event]
  ;(log/info "on-connect" (js->clj event :keywordize-keys true))

  (let [event-map (js->clj event :keywordize-keys true)
        source-id (:source event-map)
        target-id (:target event-map)
        new-edge  {:id     (str source-id "->" target-id)
                   :source source-id
                   :target target-id
                   :style  {:stroke :green :strokeWidth 2}}]
    ;(log/info "connecting" new-edge)

    ;add the new nodes to the original nodes data (an atom)...
    (swap! data assoc :edges (conj (:edges @data) new-edge))

    ; and this updates the data internal to the React diagram component..
    (set-edges-fn (fn [e] (.concat e (clj->js new-edge))))))

;; endregion


(defn- details-panel [components component-id node]
  (let [details (get node "data")]

    ;(log/info "detail-panel" node "//" details)

    [:p details]))


(defn tool-panel [open-details? components component-id tool-types]
  ;(log/info "tool-panel" @open-details? "//" component-id "//" tool-types)

  [:div#tool-panel {:display         :flex
                    :flex-direction  :column
                    :justify-content :center
                    :align-items     :center
                    :style           {:width         "20%" :height "100%"
                                      :border-radius "5px" :padding "15px 10px"
                                      :background    :white :box-shadow "5px 5px 5px #888888"}}
   [rc/v-box :src (rc/at)
    :gap "2px"
    :children [[rc/v-box :src (rc/at)
                :gap "2px"
                :justify :center
                :align :center
                :children [(doall
                             (map make-draggable-node tool-types))]]
               [rc/line :size "2px"]
               [:div {:style {:width "20%" :height "100%"}}
                [:p @open-details?]]]]])


(defn- diagram* [& {:keys [component-id
                           data
                           nodes edges
                           node-types edge-types
                           minimap-styles
                           flowInstance
                           on-change-nodes on-change-edges on-drop on-drag-over
                           zoom-on-scroll preventScrolling onConnect] :as params}]

  ;(log/info "flow-star (params)" params "// (edge-types)" edge-types)

  (let [params (apply merge {:nodes               nodes
                             :edges               edges
                             :onNodesChange       on-change-nodes
                             :onEdgesChange       on-change-edges
                             :zoomOnScroll        (or zoom-on-scroll false)
                             :preventScrolling    (or preventScrolling false)
                             :onConnect           (or onConnect #())
                             :fitView             true
                             :defaultViewport     {:x 0 :y 0 :zoom 1.5}
                             :attributionPosition "bottom-left"
                             :onDrop              (or on-drop #())
                             :onDragOver          (or on-drag-over #())
                             :onInit              (fn [r] (reset! flowInstance r))}
                 (when node-types {:node-types node-types})
                 (when edge-types {:edge-types edge-types}))]

    ;(log/info "flow-star (local-params)" params)

    ;[:> ReactFlowProvider
    [:> ReactFlow params
     [:> MiniMap (if minimap-styles minimap-styles {})]
     [:> Background]
     [:> Controls]]))


(defn- diagram [& {:keys [component-id
                          orig-data
                          nodes edges
                          node-types edge-types
                          minimap-styles                    ;on-drop on-drag-over
                          zoom-on-scroll preventScrolling connectFn
                          flowInstance
                          force-layout?] :as params}]

  ;(log/info "editable-flow (params)" params)

  (let [n        nodes
        e        edges
        [ns set-nodes on-change-nodes] (useNodesState (clj->js n))
        [es set-edges on-change-edges] (useEdgesState (clj->js e))
        !wrapper (clojure.core/atom nil)]


    ;(log/info "editable-flow"
    ;  "//" (js->clj node-types)
    ;  "//" (js->clj edge-types))
    ;  "//" ns
    ;  "//" nodes)
    ;  "//" set-nodes
    ;  "//" on-change-nodes)

    [:div#wrapper {:style {:width "800px" :height "700px"}
                   :ref   (fn [el]
                            (reset! !wrapper el))}
     [diagram*
      :component-id component-id
      :orig-data orig-data
      :nodes ns :edges es
      :on-change-nodes on-change-nodes
      :on-change-edges on-change-edges
      :node-types node-types
      :edge-types edge-types
      :minimap-styles minimap-styles
      :connectFn (partial on-connect orig-data flowInstance set-edges !wrapper)
      :zoom-on-scroll zoom-on-scroll
      :preventScrolling preventScrolling
      :on-drop (partial on-drop component-id orig-data flowInstance set-nodes !wrapper)
      :on-drag-over on-drag-over
      :flowInstance flowInstance]]))


(defn editable-diagram [& {:keys [data
                                  node-types edge-types
                                  minimap-styles
                                  tool-types
                                  connectFn zoom-on-scroll preventScrolling
                                  component-id container-id
                                  force-layout?]}]

  ;(log/info "editable-diagram"
  ;  ;data @data
  ;  node-types)

  (let [d             data
        open-details? (r/atom {})
        n-types       (->> node-types
                        (map (fn [[k v]]
                               {k (partial v open-details?)}))
                        (into {})
                        (clj->js))
        flowInstance  (clojure.core/atom nil)]


    ;(log/info "component (DIGRAPH)" "//" data "//" @d "// node-types" node-types "// n-types" (js->clj n-types))

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :children [;[tool-panel open-details? (:components @d) component-id tool-types]
                  [:f> diagram
                   :component-id component-id
                   :orig-data d
                   :nodes (:nodes @d)
                   :edges (:edges @d)
                   :node-types n-types
                   :edge-types edge-types
                   ;:on-drop on-drop
                   ;:on-drag-over on-drag-over
                   :minimap-styles (or minimap-styles {})
                   ;:connectFn connectFn
                   :zoom-on-scroll zoom-on-scroll
                   :preventScrolling preventScrolling
                   :flowInstance flowInstance
                   :force-layout? force-layout?]]])))




(comment
  (:nodes @sample-data)
  (swap! sample-data assoc :nodes (conj (:nodes @sample-data)
                                    {:id "dummy-node" :position {:x 0 :y 0}}))

  (def node-types {":ui/component"  (partial bh.ui-component.molecule.composite.util.ui/custom-node :ui/component)
                   ":source/remote" (partial bh.ui-component.molecule.composite.util.ui/custom-node :source/remote)
                   ":source/local"  (partial bh.ui-component.molecule.composite.util.ui/custom-node :source/local)
                   ":source/fn"     (partial bh.ui-component.molecule.composite.util.ui/custom-node :source/fn)})
  (def open-details? (r/atom ""))

  (defn- dummy [a b c d]
    (+ a b c d))

  ((partial (partial dummy 1 1) 1 1))
  (->> node-types
    (map (fn [[k v]]
           {k (partial v open-details?)}))
    (into {})
    (clj->js))

  ())

