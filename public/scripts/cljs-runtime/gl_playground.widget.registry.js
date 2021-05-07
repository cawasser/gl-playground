goog.provide('gl_playground.widget.registry');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('taoensso.timbre');
gl_playground.widget.registry.registry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
gl_playground.widget.registry.add_widget = (function gl_playground$widget$registry$add_widget(tag,widget_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gl_playground.widget.registry.registry,cljs.core.assoc,tag,widget_fn);
});
gl_playground.widget.registry.widget_for = (function gl_playground$widget$registry$widget_for(tag){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gl_playground.widget.registry.registry),tag);
});

//# sourceMappingURL=gl_playground.widget.registry.js.map
