goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32459 = coll;
var G__32460 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32459,G__32460) : shadow.dom.lazy_native_coll_seq.call(null,G__32459,G__32460));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32527 = arguments.length;
switch (G__32527) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32541 = arguments.length;
switch (G__32541) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32548 = arguments.length;
switch (G__32548) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32560 = arguments.length;
switch (G__32560) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32576 = arguments.length;
switch (G__32576) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32595 = arguments.length;
switch (G__32595) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32605){if((e32605 instanceof Object)){
var e = e32605;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32605;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32609 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32610 = null;
var count__32611 = (0);
var i__32612 = (0);
while(true){
if((i__32612 < count__32611)){
var el = chunk__32610.cljs$core$IIndexed$_nth$arity$2(null,i__32612);
var handler_33974__$1 = ((function (seq__32609,chunk__32610,count__32611,i__32612,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32609,chunk__32610,count__32611,i__32612,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33974__$1);


var G__33975 = seq__32609;
var G__33976 = chunk__32610;
var G__33977 = count__32611;
var G__33978 = (i__32612 + (1));
seq__32609 = G__33975;
chunk__32610 = G__33976;
count__32611 = G__33977;
i__32612 = G__33978;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32609);
if(temp__5735__auto__){
var seq__32609__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32609__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32609__$1);
var G__33979 = cljs.core.chunk_rest(seq__32609__$1);
var G__33980 = c__4609__auto__;
var G__33981 = cljs.core.count(c__4609__auto__);
var G__33982 = (0);
seq__32609 = G__33979;
chunk__32610 = G__33980;
count__32611 = G__33981;
i__32612 = G__33982;
continue;
} else {
var el = cljs.core.first(seq__32609__$1);
var handler_33983__$1 = ((function (seq__32609,chunk__32610,count__32611,i__32612,el,seq__32609__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32609,chunk__32610,count__32611,i__32612,el,seq__32609__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33983__$1);


var G__33984 = cljs.core.next(seq__32609__$1);
var G__33985 = null;
var G__33986 = (0);
var G__33987 = (0);
seq__32609 = G__33984;
chunk__32610 = G__33985;
count__32611 = G__33986;
i__32612 = G__33987;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32639 = arguments.length;
switch (G__32639) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32646 = cljs.core.seq(events);
var chunk__32647 = null;
var count__32648 = (0);
var i__32649 = (0);
while(true){
if((i__32649 < count__32648)){
var vec__32669 = chunk__32647.cljs$core$IIndexed$_nth$arity$2(null,i__32649);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32669,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33989 = seq__32646;
var G__33990 = chunk__32647;
var G__33991 = count__32648;
var G__33992 = (i__32649 + (1));
seq__32646 = G__33989;
chunk__32647 = G__33990;
count__32648 = G__33991;
i__32649 = G__33992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32646);
if(temp__5735__auto__){
var seq__32646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32646__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32646__$1);
var G__33995 = cljs.core.chunk_rest(seq__32646__$1);
var G__33996 = c__4609__auto__;
var G__33997 = cljs.core.count(c__4609__auto__);
var G__33998 = (0);
seq__32646 = G__33995;
chunk__32647 = G__33996;
count__32648 = G__33997;
i__32649 = G__33998;
continue;
} else {
var vec__32675 = cljs.core.first(seq__32646__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33999 = cljs.core.next(seq__32646__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__32646 = G__33999;
chunk__32647 = G__34000;
count__32648 = G__34001;
i__32649 = G__34002;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32678 = cljs.core.seq(styles);
var chunk__32679 = null;
var count__32680 = (0);
var i__32681 = (0);
while(true){
if((i__32681 < count__32680)){
var vec__32692 = chunk__32679.cljs$core$IIndexed$_nth$arity$2(null,i__32681);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34005 = seq__32678;
var G__34006 = chunk__32679;
var G__34007 = count__32680;
var G__34008 = (i__32681 + (1));
seq__32678 = G__34005;
chunk__32679 = G__34006;
count__32680 = G__34007;
i__32681 = G__34008;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32678);
if(temp__5735__auto__){
var seq__32678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32678__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32678__$1);
var G__34010 = cljs.core.chunk_rest(seq__32678__$1);
var G__34011 = c__4609__auto__;
var G__34012 = cljs.core.count(c__4609__auto__);
var G__34013 = (0);
seq__32678 = G__34010;
chunk__32679 = G__34011;
count__32680 = G__34012;
i__32681 = G__34013;
continue;
} else {
var vec__32700 = cljs.core.first(seq__32678__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32700,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34014 = cljs.core.next(seq__32678__$1);
var G__34015 = null;
var G__34016 = (0);
var G__34017 = (0);
seq__32678 = G__34014;
chunk__32679 = G__34015;
count__32680 = G__34016;
i__32681 = G__34017;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32709_34018 = key;
var G__32709_34019__$1 = (((G__32709_34018 instanceof cljs.core.Keyword))?G__32709_34018.fqn:null);
switch (G__32709_34019__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34029 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34029,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34029,"aria-");
}
})())){
el.setAttribute(ks_34029,value);
} else {
(el[ks_34029] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32740){
var map__32741 = p__32740;
var map__32741__$1 = (((((!((map__32741 == null))))?(((((map__32741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32741):map__32741);
var props = map__32741__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32747 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32747,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32747,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32747,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32756 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32756,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32756;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32760 = arguments.length;
switch (G__32760) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32777){
var vec__32778 = p__32777;
var seq__32779 = cljs.core.seq(vec__32778);
var first__32780 = cljs.core.first(seq__32779);
var seq__32779__$1 = cljs.core.next(seq__32779);
var nn = first__32780;
var first__32780__$1 = cljs.core.first(seq__32779__$1);
var seq__32779__$2 = cljs.core.next(seq__32779__$1);
var np = first__32780__$1;
var nc = seq__32779__$2;
var node = vec__32778;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32787 = nn;
var G__32788 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32787,G__32788) : create_fn.call(null,G__32787,G__32788));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32791 = nn;
var G__32792 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32791,G__32792) : create_fn.call(null,G__32791,G__32792));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32794 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32794,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32794,(1),null);
var seq__32798_34045 = cljs.core.seq(node_children);
var chunk__32799_34046 = null;
var count__32800_34047 = (0);
var i__32801_34048 = (0);
while(true){
if((i__32801_34048 < count__32800_34047)){
var child_struct_34049 = chunk__32799_34046.cljs$core$IIndexed$_nth$arity$2(null,i__32801_34048);
var children_34050 = shadow.dom.dom_node(child_struct_34049);
if(cljs.core.seq_QMARK_(children_34050)){
var seq__32880_34052 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34050));
var chunk__32882_34053 = null;
var count__32883_34054 = (0);
var i__32884_34055 = (0);
while(true){
if((i__32884_34055 < count__32883_34054)){
var child_34056 = chunk__32882_34053.cljs$core$IIndexed$_nth$arity$2(null,i__32884_34055);
if(cljs.core.truth_(child_34056)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34056);


var G__34058 = seq__32880_34052;
var G__34059 = chunk__32882_34053;
var G__34060 = count__32883_34054;
var G__34061 = (i__32884_34055 + (1));
seq__32880_34052 = G__34058;
chunk__32882_34053 = G__34059;
count__32883_34054 = G__34060;
i__32884_34055 = G__34061;
continue;
} else {
var G__34062 = seq__32880_34052;
var G__34063 = chunk__32882_34053;
var G__34064 = count__32883_34054;
var G__34065 = (i__32884_34055 + (1));
seq__32880_34052 = G__34062;
chunk__32882_34053 = G__34063;
count__32883_34054 = G__34064;
i__32884_34055 = G__34065;
continue;
}
} else {
var temp__5735__auto___34066 = cljs.core.seq(seq__32880_34052);
if(temp__5735__auto___34066){
var seq__32880_34067__$1 = temp__5735__auto___34066;
if(cljs.core.chunked_seq_QMARK_(seq__32880_34067__$1)){
var c__4609__auto___34068 = cljs.core.chunk_first(seq__32880_34067__$1);
var G__34069 = cljs.core.chunk_rest(seq__32880_34067__$1);
var G__34070 = c__4609__auto___34068;
var G__34071 = cljs.core.count(c__4609__auto___34068);
var G__34072 = (0);
seq__32880_34052 = G__34069;
chunk__32882_34053 = G__34070;
count__32883_34054 = G__34071;
i__32884_34055 = G__34072;
continue;
} else {
var child_34073 = cljs.core.first(seq__32880_34067__$1);
if(cljs.core.truth_(child_34073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34073);


var G__34074 = cljs.core.next(seq__32880_34067__$1);
var G__34075 = null;
var G__34076 = (0);
var G__34077 = (0);
seq__32880_34052 = G__34074;
chunk__32882_34053 = G__34075;
count__32883_34054 = G__34076;
i__32884_34055 = G__34077;
continue;
} else {
var G__34078 = cljs.core.next(seq__32880_34067__$1);
var G__34079 = null;
var G__34080 = (0);
var G__34081 = (0);
seq__32880_34052 = G__34078;
chunk__32882_34053 = G__34079;
count__32883_34054 = G__34080;
i__32884_34055 = G__34081;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34050);
}


var G__34082 = seq__32798_34045;
var G__34083 = chunk__32799_34046;
var G__34084 = count__32800_34047;
var G__34085 = (i__32801_34048 + (1));
seq__32798_34045 = G__34082;
chunk__32799_34046 = G__34083;
count__32800_34047 = G__34084;
i__32801_34048 = G__34085;
continue;
} else {
var temp__5735__auto___34086 = cljs.core.seq(seq__32798_34045);
if(temp__5735__auto___34086){
var seq__32798_34087__$1 = temp__5735__auto___34086;
if(cljs.core.chunked_seq_QMARK_(seq__32798_34087__$1)){
var c__4609__auto___34088 = cljs.core.chunk_first(seq__32798_34087__$1);
var G__34089 = cljs.core.chunk_rest(seq__32798_34087__$1);
var G__34090 = c__4609__auto___34088;
var G__34091 = cljs.core.count(c__4609__auto___34088);
var G__34092 = (0);
seq__32798_34045 = G__34089;
chunk__32799_34046 = G__34090;
count__32800_34047 = G__34091;
i__32801_34048 = G__34092;
continue;
} else {
var child_struct_34093 = cljs.core.first(seq__32798_34087__$1);
var children_34094 = shadow.dom.dom_node(child_struct_34093);
if(cljs.core.seq_QMARK_(children_34094)){
var seq__32947_34096 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34094));
var chunk__32949_34097 = null;
var count__32950_34098 = (0);
var i__32951_34099 = (0);
while(true){
if((i__32951_34099 < count__32950_34098)){
var child_34100 = chunk__32949_34097.cljs$core$IIndexed$_nth$arity$2(null,i__32951_34099);
if(cljs.core.truth_(child_34100)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34100);


var G__34101 = seq__32947_34096;
var G__34102 = chunk__32949_34097;
var G__34103 = count__32950_34098;
var G__34104 = (i__32951_34099 + (1));
seq__32947_34096 = G__34101;
chunk__32949_34097 = G__34102;
count__32950_34098 = G__34103;
i__32951_34099 = G__34104;
continue;
} else {
var G__34105 = seq__32947_34096;
var G__34106 = chunk__32949_34097;
var G__34107 = count__32950_34098;
var G__34108 = (i__32951_34099 + (1));
seq__32947_34096 = G__34105;
chunk__32949_34097 = G__34106;
count__32950_34098 = G__34107;
i__32951_34099 = G__34108;
continue;
}
} else {
var temp__5735__auto___34110__$1 = cljs.core.seq(seq__32947_34096);
if(temp__5735__auto___34110__$1){
var seq__32947_34111__$1 = temp__5735__auto___34110__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32947_34111__$1)){
var c__4609__auto___34112 = cljs.core.chunk_first(seq__32947_34111__$1);
var G__34113 = cljs.core.chunk_rest(seq__32947_34111__$1);
var G__34114 = c__4609__auto___34112;
var G__34115 = cljs.core.count(c__4609__auto___34112);
var G__34116 = (0);
seq__32947_34096 = G__34113;
chunk__32949_34097 = G__34114;
count__32950_34098 = G__34115;
i__32951_34099 = G__34116;
continue;
} else {
var child_34118 = cljs.core.first(seq__32947_34111__$1);
if(cljs.core.truth_(child_34118)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34118);


var G__34119 = cljs.core.next(seq__32947_34111__$1);
var G__34120 = null;
var G__34121 = (0);
var G__34122 = (0);
seq__32947_34096 = G__34119;
chunk__32949_34097 = G__34120;
count__32950_34098 = G__34121;
i__32951_34099 = G__34122;
continue;
} else {
var G__34126 = cljs.core.next(seq__32947_34111__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__32947_34096 = G__34126;
chunk__32949_34097 = G__34127;
count__32950_34098 = G__34128;
i__32951_34099 = G__34129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34094);
}


var G__34130 = cljs.core.next(seq__32798_34087__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__32798_34045 = G__34130;
chunk__32799_34046 = G__34131;
count__32800_34047 = G__34132;
i__32801_34048 = G__34133;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33023 = cljs.core.seq(node);
var chunk__33024 = null;
var count__33025 = (0);
var i__33026 = (0);
while(true){
if((i__33026 < count__33025)){
var n = chunk__33024.cljs$core$IIndexed$_nth$arity$2(null,i__33026);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34140 = seq__33023;
var G__34141 = chunk__33024;
var G__34142 = count__33025;
var G__34143 = (i__33026 + (1));
seq__33023 = G__34140;
chunk__33024 = G__34141;
count__33025 = G__34142;
i__33026 = G__34143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33023);
if(temp__5735__auto__){
var seq__33023__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33023__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33023__$1);
var G__34145 = cljs.core.chunk_rest(seq__33023__$1);
var G__34146 = c__4609__auto__;
var G__34147 = cljs.core.count(c__4609__auto__);
var G__34148 = (0);
seq__33023 = G__34145;
chunk__33024 = G__34146;
count__33025 = G__34147;
i__33026 = G__34148;
continue;
} else {
var n = cljs.core.first(seq__33023__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34153 = cljs.core.next(seq__33023__$1);
var G__34154 = null;
var G__34155 = (0);
var G__34156 = (0);
seq__33023 = G__34153;
chunk__33024 = G__34154;
count__33025 = G__34155;
i__33026 = G__34156;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33062 = arguments.length;
switch (G__33062) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33086 = arguments.length;
switch (G__33086) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34173 = arguments.length;
var i__4790__auto___34174 = (0);
while(true){
if((i__4790__auto___34174 < len__4789__auto___34173)){
args__4795__auto__.push((arguments[i__4790__auto___34174]));

var G__34175 = (i__4790__auto___34174 + (1));
i__4790__auto___34174 = G__34175;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33167_34179 = cljs.core.seq(nodes);
var chunk__33169_34180 = null;
var count__33170_34181 = (0);
var i__33171_34182 = (0);
while(true){
if((i__33171_34182 < count__33170_34181)){
var node_34183 = chunk__33169_34180.cljs$core$IIndexed$_nth$arity$2(null,i__33171_34182);
fragment.appendChild(shadow.dom._to_dom(node_34183));


var G__34184 = seq__33167_34179;
var G__34185 = chunk__33169_34180;
var G__34186 = count__33170_34181;
var G__34187 = (i__33171_34182 + (1));
seq__33167_34179 = G__34184;
chunk__33169_34180 = G__34185;
count__33170_34181 = G__34186;
i__33171_34182 = G__34187;
continue;
} else {
var temp__5735__auto___34188 = cljs.core.seq(seq__33167_34179);
if(temp__5735__auto___34188){
var seq__33167_34190__$1 = temp__5735__auto___34188;
if(cljs.core.chunked_seq_QMARK_(seq__33167_34190__$1)){
var c__4609__auto___34191 = cljs.core.chunk_first(seq__33167_34190__$1);
var G__34192 = cljs.core.chunk_rest(seq__33167_34190__$1);
var G__34193 = c__4609__auto___34191;
var G__34194 = cljs.core.count(c__4609__auto___34191);
var G__34195 = (0);
seq__33167_34179 = G__34192;
chunk__33169_34180 = G__34193;
count__33170_34181 = G__34194;
i__33171_34182 = G__34195;
continue;
} else {
var node_34196 = cljs.core.first(seq__33167_34190__$1);
fragment.appendChild(shadow.dom._to_dom(node_34196));


var G__34197 = cljs.core.next(seq__33167_34190__$1);
var G__34198 = null;
var G__34199 = (0);
var G__34200 = (0);
seq__33167_34179 = G__34197;
chunk__33169_34180 = G__34198;
count__33170_34181 = G__34199;
i__33171_34182 = G__34200;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33159){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33159));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33198_34201 = cljs.core.seq(scripts);
var chunk__33199_34202 = null;
var count__33200_34203 = (0);
var i__33201_34204 = (0);
while(true){
if((i__33201_34204 < count__33200_34203)){
var vec__33221_34205 = chunk__33199_34202.cljs$core$IIndexed$_nth$arity$2(null,i__33201_34204);
var script_tag_34206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33221_34205,(0),null);
var script_body_34207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33221_34205,(1),null);
eval(script_body_34207);


var G__34208 = seq__33198_34201;
var G__34209 = chunk__33199_34202;
var G__34210 = count__33200_34203;
var G__34211 = (i__33201_34204 + (1));
seq__33198_34201 = G__34208;
chunk__33199_34202 = G__34209;
count__33200_34203 = G__34210;
i__33201_34204 = G__34211;
continue;
} else {
var temp__5735__auto___34212 = cljs.core.seq(seq__33198_34201);
if(temp__5735__auto___34212){
var seq__33198_34213__$1 = temp__5735__auto___34212;
if(cljs.core.chunked_seq_QMARK_(seq__33198_34213__$1)){
var c__4609__auto___34215 = cljs.core.chunk_first(seq__33198_34213__$1);
var G__34217 = cljs.core.chunk_rest(seq__33198_34213__$1);
var G__34218 = c__4609__auto___34215;
var G__34219 = cljs.core.count(c__4609__auto___34215);
var G__34220 = (0);
seq__33198_34201 = G__34217;
chunk__33199_34202 = G__34218;
count__33200_34203 = G__34219;
i__33201_34204 = G__34220;
continue;
} else {
var vec__33226_34222 = cljs.core.first(seq__33198_34213__$1);
var script_tag_34223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33226_34222,(0),null);
var script_body_34224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33226_34222,(1),null);
eval(script_body_34224);


var G__34225 = cljs.core.next(seq__33198_34213__$1);
var G__34226 = null;
var G__34227 = (0);
var G__34228 = (0);
seq__33198_34201 = G__34225;
chunk__33199_34202 = G__34226;
count__33200_34203 = G__34227;
i__33201_34204 = G__34228;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33230){
var vec__33233 = p__33230;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33233,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33233,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33270 = arguments.length;
switch (G__33270) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33303 = cljs.core.seq(style_keys);
var chunk__33304 = null;
var count__33305 = (0);
var i__33306 = (0);
while(true){
if((i__33306 < count__33305)){
var it = chunk__33304.cljs$core$IIndexed$_nth$arity$2(null,i__33306);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34265 = seq__33303;
var G__34266 = chunk__33304;
var G__34267 = count__33305;
var G__34268 = (i__33306 + (1));
seq__33303 = G__34265;
chunk__33304 = G__34266;
count__33305 = G__34267;
i__33306 = G__34268;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33303);
if(temp__5735__auto__){
var seq__33303__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33303__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33303__$1);
var G__34274 = cljs.core.chunk_rest(seq__33303__$1);
var G__34275 = c__4609__auto__;
var G__34276 = cljs.core.count(c__4609__auto__);
var G__34277 = (0);
seq__33303 = G__34274;
chunk__33304 = G__34275;
count__33305 = G__34276;
i__33306 = G__34277;
continue;
} else {
var it = cljs.core.first(seq__33303__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34280 = cljs.core.next(seq__33303__$1);
var G__34281 = null;
var G__34282 = (0);
var G__34283 = (0);
seq__33303 = G__34280;
chunk__33304 = G__34281;
count__33305 = G__34282;
i__33306 = G__34283;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33330,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33341 = k33330;
var G__33341__$1 = (((G__33341 instanceof cljs.core.Keyword))?G__33341.fqn:null);
switch (G__33341__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33330,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33353){
var vec__33354 = p__33353;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33329){
var self__ = this;
var G__33329__$1 = this;
return (new cljs.core.RecordIter((0),G__33329__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33331,other33332){
var self__ = this;
var this33331__$1 = this;
return (((!((other33332 == null)))) && ((this33331__$1.constructor === other33332.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33331__$1.x,other33332.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33331__$1.y,other33332.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33331__$1.__extmap,other33332.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33329){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33378 = cljs.core.keyword_identical_QMARK_;
var expr__33379 = k__4447__auto__;
if(cljs.core.truth_((pred__33378.cljs$core$IFn$_invoke$arity$2 ? pred__33378.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33379) : pred__33378.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33379)))){
return (new shadow.dom.Coordinate(G__33329,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33378.cljs$core$IFn$_invoke$arity$2 ? pred__33378.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33379) : pred__33378.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33379)))){
return (new shadow.dom.Coordinate(self__.x,G__33329,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33329),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33329){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33329,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33333){
var extmap__4478__auto__ = (function (){var G__33402 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33333,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33402);
} else {
return G__33402;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33333),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33333),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33424,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33439 = k33424;
var G__33439__$1 = (((G__33439 instanceof cljs.core.Keyword))?G__33439.fqn:null);
switch (G__33439__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33424,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33444){
var vec__33445 = p__33444;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33423){
var self__ = this;
var G__33423__$1 = this;
return (new cljs.core.RecordIter((0),G__33423__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33425,other33426){
var self__ = this;
var this33425__$1 = this;
return (((!((other33426 == null)))) && ((this33425__$1.constructor === other33426.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33425__$1.w,other33426.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33425__$1.h,other33426.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33425__$1.__extmap,other33426.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33423){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33474 = cljs.core.keyword_identical_QMARK_;
var expr__33475 = k__4447__auto__;
if(cljs.core.truth_((pred__33474.cljs$core$IFn$_invoke$arity$2 ? pred__33474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33475) : pred__33474.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33475)))){
return (new shadow.dom.Size(G__33423,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33474.cljs$core$IFn$_invoke$arity$2 ? pred__33474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33475) : pred__33474.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33475)))){
return (new shadow.dom.Size(self__.w,G__33423,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33423),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33423){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33423,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33428){
var extmap__4478__auto__ = (function (){var G__33498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33428,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33428)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33498);
} else {
return G__33498;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33428),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33428),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34350 = (i + (1));
var G__34351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34350;
ret = G__34351;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33535){
var vec__33537 = p__33535;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33537,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33548 = arguments.length;
switch (G__33548) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34356 = ps;
var G__34357 = (i + (1));
el__$1 = G__34356;
i = G__34357;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33591 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33599_34363 = cljs.core.seq(props);
var chunk__33600_34364 = null;
var count__33601_34365 = (0);
var i__33602_34366 = (0);
while(true){
if((i__33602_34366 < count__33601_34365)){
var vec__33625_34367 = chunk__33600_34364.cljs$core$IIndexed$_nth$arity$2(null,i__33602_34366);
var k_34368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625_34367,(0),null);
var v_34369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625_34367,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34368);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34368),v_34369);


var G__34370 = seq__33599_34363;
var G__34371 = chunk__33600_34364;
var G__34372 = count__33601_34365;
var G__34373 = (i__33602_34366 + (1));
seq__33599_34363 = G__34370;
chunk__33600_34364 = G__34371;
count__33601_34365 = G__34372;
i__33602_34366 = G__34373;
continue;
} else {
var temp__5735__auto___34374 = cljs.core.seq(seq__33599_34363);
if(temp__5735__auto___34374){
var seq__33599_34375__$1 = temp__5735__auto___34374;
if(cljs.core.chunked_seq_QMARK_(seq__33599_34375__$1)){
var c__4609__auto___34376 = cljs.core.chunk_first(seq__33599_34375__$1);
var G__34377 = cljs.core.chunk_rest(seq__33599_34375__$1);
var G__34378 = c__4609__auto___34376;
var G__34379 = cljs.core.count(c__4609__auto___34376);
var G__34380 = (0);
seq__33599_34363 = G__34377;
chunk__33600_34364 = G__34378;
count__33601_34365 = G__34379;
i__33602_34366 = G__34380;
continue;
} else {
var vec__33635_34381 = cljs.core.first(seq__33599_34375__$1);
var k_34382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34381,(0),null);
var v_34383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34381,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34382);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34382),v_34383);


var G__34388 = cljs.core.next(seq__33599_34375__$1);
var G__34389 = null;
var G__34390 = (0);
var G__34391 = (0);
seq__33599_34363 = G__34388;
chunk__33600_34364 = G__34389;
count__33601_34365 = G__34390;
i__33602_34366 = G__34391;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33657 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(1),null);
var seq__33665_34393 = cljs.core.seq(node_children);
var chunk__33667_34394 = null;
var count__33668_34395 = (0);
var i__33669_34396 = (0);
while(true){
if((i__33669_34396 < count__33668_34395)){
var child_struct_34397 = chunk__33667_34394.cljs$core$IIndexed$_nth$arity$2(null,i__33669_34396);
if((!((child_struct_34397 == null)))){
if(typeof child_struct_34397 === 'string'){
var text_34400 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34400),child_struct_34397].join(''));
} else {
var children_34401 = shadow.dom.svg_node(child_struct_34397);
if(cljs.core.seq_QMARK_(children_34401)){
var seq__33738_34402 = cljs.core.seq(children_34401);
var chunk__33740_34403 = null;
var count__33741_34404 = (0);
var i__33742_34405 = (0);
while(true){
if((i__33742_34405 < count__33741_34404)){
var child_34406 = chunk__33740_34403.cljs$core$IIndexed$_nth$arity$2(null,i__33742_34405);
if(cljs.core.truth_(child_34406)){
node.appendChild(child_34406);


var G__34407 = seq__33738_34402;
var G__34408 = chunk__33740_34403;
var G__34409 = count__33741_34404;
var G__34410 = (i__33742_34405 + (1));
seq__33738_34402 = G__34407;
chunk__33740_34403 = G__34408;
count__33741_34404 = G__34409;
i__33742_34405 = G__34410;
continue;
} else {
var G__34415 = seq__33738_34402;
var G__34416 = chunk__33740_34403;
var G__34417 = count__33741_34404;
var G__34418 = (i__33742_34405 + (1));
seq__33738_34402 = G__34415;
chunk__33740_34403 = G__34416;
count__33741_34404 = G__34417;
i__33742_34405 = G__34418;
continue;
}
} else {
var temp__5735__auto___34419 = cljs.core.seq(seq__33738_34402);
if(temp__5735__auto___34419){
var seq__33738_34420__$1 = temp__5735__auto___34419;
if(cljs.core.chunked_seq_QMARK_(seq__33738_34420__$1)){
var c__4609__auto___34421 = cljs.core.chunk_first(seq__33738_34420__$1);
var G__34422 = cljs.core.chunk_rest(seq__33738_34420__$1);
var G__34423 = c__4609__auto___34421;
var G__34424 = cljs.core.count(c__4609__auto___34421);
var G__34425 = (0);
seq__33738_34402 = G__34422;
chunk__33740_34403 = G__34423;
count__33741_34404 = G__34424;
i__33742_34405 = G__34425;
continue;
} else {
var child_34426 = cljs.core.first(seq__33738_34420__$1);
if(cljs.core.truth_(child_34426)){
node.appendChild(child_34426);


var G__34427 = cljs.core.next(seq__33738_34420__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33738_34402 = G__34427;
chunk__33740_34403 = G__34428;
count__33741_34404 = G__34429;
i__33742_34405 = G__34430;
continue;
} else {
var G__34431 = cljs.core.next(seq__33738_34420__$1);
var G__34432 = null;
var G__34433 = (0);
var G__34434 = (0);
seq__33738_34402 = G__34431;
chunk__33740_34403 = G__34432;
count__33741_34404 = G__34433;
i__33742_34405 = G__34434;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34401);
}
}


var G__34435 = seq__33665_34393;
var G__34436 = chunk__33667_34394;
var G__34437 = count__33668_34395;
var G__34438 = (i__33669_34396 + (1));
seq__33665_34393 = G__34435;
chunk__33667_34394 = G__34436;
count__33668_34395 = G__34437;
i__33669_34396 = G__34438;
continue;
} else {
var G__34439 = seq__33665_34393;
var G__34440 = chunk__33667_34394;
var G__34441 = count__33668_34395;
var G__34442 = (i__33669_34396 + (1));
seq__33665_34393 = G__34439;
chunk__33667_34394 = G__34440;
count__33668_34395 = G__34441;
i__33669_34396 = G__34442;
continue;
}
} else {
var temp__5735__auto___34444 = cljs.core.seq(seq__33665_34393);
if(temp__5735__auto___34444){
var seq__33665_34445__$1 = temp__5735__auto___34444;
if(cljs.core.chunked_seq_QMARK_(seq__33665_34445__$1)){
var c__4609__auto___34446 = cljs.core.chunk_first(seq__33665_34445__$1);
var G__34447 = cljs.core.chunk_rest(seq__33665_34445__$1);
var G__34448 = c__4609__auto___34446;
var G__34449 = cljs.core.count(c__4609__auto___34446);
var G__34450 = (0);
seq__33665_34393 = G__34447;
chunk__33667_34394 = G__34448;
count__33668_34395 = G__34449;
i__33669_34396 = G__34450;
continue;
} else {
var child_struct_34451 = cljs.core.first(seq__33665_34445__$1);
if((!((child_struct_34451 == null)))){
if(typeof child_struct_34451 === 'string'){
var text_34452 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34452),child_struct_34451].join(''));
} else {
var children_34453 = shadow.dom.svg_node(child_struct_34451);
if(cljs.core.seq_QMARK_(children_34453)){
var seq__33774_34454 = cljs.core.seq(children_34453);
var chunk__33776_34455 = null;
var count__33777_34456 = (0);
var i__33778_34457 = (0);
while(true){
if((i__33778_34457 < count__33777_34456)){
var child_34458 = chunk__33776_34455.cljs$core$IIndexed$_nth$arity$2(null,i__33778_34457);
if(cljs.core.truth_(child_34458)){
node.appendChild(child_34458);


var G__34459 = seq__33774_34454;
var G__34460 = chunk__33776_34455;
var G__34461 = count__33777_34456;
var G__34462 = (i__33778_34457 + (1));
seq__33774_34454 = G__34459;
chunk__33776_34455 = G__34460;
count__33777_34456 = G__34461;
i__33778_34457 = G__34462;
continue;
} else {
var G__34463 = seq__33774_34454;
var G__34464 = chunk__33776_34455;
var G__34465 = count__33777_34456;
var G__34466 = (i__33778_34457 + (1));
seq__33774_34454 = G__34463;
chunk__33776_34455 = G__34464;
count__33777_34456 = G__34465;
i__33778_34457 = G__34466;
continue;
}
} else {
var temp__5735__auto___34468__$1 = cljs.core.seq(seq__33774_34454);
if(temp__5735__auto___34468__$1){
var seq__33774_34469__$1 = temp__5735__auto___34468__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33774_34469__$1)){
var c__4609__auto___34470 = cljs.core.chunk_first(seq__33774_34469__$1);
var G__34471 = cljs.core.chunk_rest(seq__33774_34469__$1);
var G__34472 = c__4609__auto___34470;
var G__34473 = cljs.core.count(c__4609__auto___34470);
var G__34474 = (0);
seq__33774_34454 = G__34471;
chunk__33776_34455 = G__34472;
count__33777_34456 = G__34473;
i__33778_34457 = G__34474;
continue;
} else {
var child_34475 = cljs.core.first(seq__33774_34469__$1);
if(cljs.core.truth_(child_34475)){
node.appendChild(child_34475);


var G__34476 = cljs.core.next(seq__33774_34469__$1);
var G__34477 = null;
var G__34478 = (0);
var G__34479 = (0);
seq__33774_34454 = G__34476;
chunk__33776_34455 = G__34477;
count__33777_34456 = G__34478;
i__33778_34457 = G__34479;
continue;
} else {
var G__34480 = cljs.core.next(seq__33774_34469__$1);
var G__34481 = null;
var G__34482 = (0);
var G__34483 = (0);
seq__33774_34454 = G__34480;
chunk__33776_34455 = G__34481;
count__33777_34456 = G__34482;
i__33778_34457 = G__34483;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34453);
}
}


var G__34484 = cljs.core.next(seq__33665_34445__$1);
var G__34485 = null;
var G__34486 = (0);
var G__34487 = (0);
seq__33665_34393 = G__34484;
chunk__33667_34394 = G__34485;
count__33668_34395 = G__34486;
i__33669_34396 = G__34487;
continue;
} else {
var G__34488 = cljs.core.next(seq__33665_34445__$1);
var G__34489 = null;
var G__34490 = (0);
var G__34491 = (0);
seq__33665_34393 = G__34488;
chunk__33667_34394 = G__34489;
count__33668_34395 = G__34490;
i__33669_34396 = G__34491;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34502 = arguments.length;
var i__4790__auto___34503 = (0);
while(true){
if((i__4790__auto___34503 < len__4789__auto___34502)){
args__4795__auto__.push((arguments[i__4790__auto___34503]));

var G__34505 = (i__4790__auto___34503 + (1));
i__4790__auto___34503 = G__34505;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33812){
var G__33813 = cljs.core.first(seq33812);
var seq33812__$1 = cljs.core.next(seq33812);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33813,seq33812__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33847 = arguments.length;
switch (G__33847) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29122__auto___34518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (1))){
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33865__$1,(2),once_or_cleanup);
} else {
if((state_val_33866 === (2))){
var inst_33862 = (state_33865[(2)]);
var inst_33863 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33865__$1 = (function (){var statearr_33879 = state_33865;
(statearr_33879[(7)] = inst_33862);

return statearr_33879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33865__$1,inst_33863);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28847__auto__ = null;
var shadow$dom$state_machine__28847__auto____0 = (function (){
var statearr_33885 = [null,null,null,null,null,null,null,null];
(statearr_33885[(0)] = shadow$dom$state_machine__28847__auto__);

(statearr_33885[(1)] = (1));

return statearr_33885;
});
var shadow$dom$state_machine__28847__auto____1 = (function (state_33865){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_33865);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e33891){if((e33891 instanceof Object)){
var ex__28850__auto__ = e33891;
var statearr_33893_34526 = state_33865;
(statearr_33893_34526[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34527 = state_33865;
state_33865 = G__34527;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
shadow$dom$state_machine__28847__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28847__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28847__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28847__auto____0;
shadow$dom$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28847__auto____1;
return shadow$dom$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_33903 = f__29123__auto__();
(statearr_33903[(6)] = c__29122__auto___34518);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
