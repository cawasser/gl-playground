goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26808 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26809 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26809);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26810 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26811 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26811);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26810);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26808);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26819 = arguments.length;
switch (G__26819) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26827 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26841_26867 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26842_26868 = null;
var count__26843_26869 = (0);
var i__26844_26870 = (0);
while(true){
if((i__26844_26870 < count__26843_26869)){
var vec__26852_26871 = chunk__26842_26868.cljs$core$IIndexed$_nth$arity$2(null,i__26844_26870);
var container_26872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26852_26871,(0),null);
var comp_26873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26852_26871,(1),null);
reagent.dom.re_render_component(comp_26873,container_26872);


var G__26874 = seq__26841_26867;
var G__26875 = chunk__26842_26868;
var G__26876 = count__26843_26869;
var G__26877 = (i__26844_26870 + (1));
seq__26841_26867 = G__26874;
chunk__26842_26868 = G__26875;
count__26843_26869 = G__26876;
i__26844_26870 = G__26877;
continue;
} else {
var temp__5735__auto___26878 = cljs.core.seq(seq__26841_26867);
if(temp__5735__auto___26878){
var seq__26841_26879__$1 = temp__5735__auto___26878;
if(cljs.core.chunked_seq_QMARK_(seq__26841_26879__$1)){
var c__4609__auto___26880 = cljs.core.chunk_first(seq__26841_26879__$1);
var G__26881 = cljs.core.chunk_rest(seq__26841_26879__$1);
var G__26882 = c__4609__auto___26880;
var G__26883 = cljs.core.count(c__4609__auto___26880);
var G__26884 = (0);
seq__26841_26867 = G__26881;
chunk__26842_26868 = G__26882;
count__26843_26869 = G__26883;
i__26844_26870 = G__26884;
continue;
} else {
var vec__26858_26885 = cljs.core.first(seq__26841_26879__$1);
var container_26886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26885,(0),null);
var comp_26887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26885,(1),null);
reagent.dom.re_render_component(comp_26887,container_26886);


var G__26888 = cljs.core.next(seq__26841_26879__$1);
var G__26889 = null;
var G__26890 = (0);
var G__26891 = (0);
seq__26841_26867 = G__26888;
chunk__26842_26868 = G__26889;
count__26843_26869 = G__26890;
i__26844_26870 = G__26891;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
