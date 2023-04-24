(ns gl-playground.bh.atom.diagram.utils.custom-node-utils
  (:require ["reactflow" :refer (Handle Position)]
))

(defn handle [id t style position isConnectable]
  [:> Handle {:id            id
              :type          t
              :position      position
              :style         style
              :onConnect     #(js/console.log "handle onConnect" %)
              :isConnectable isConnectable}])
