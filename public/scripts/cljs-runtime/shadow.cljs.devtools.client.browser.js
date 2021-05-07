goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35770 = arguments.length;
var i__4790__auto___35771 = (0);
while(true){
if((i__4790__auto___35771 < len__4789__auto___35770)){
args__4795__auto__.push((arguments[i__4790__auto___35771]));

var G__35772 = (i__4790__auto___35771 + (1));
i__4790__auto___35771 = G__35772;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35623){
var G__35624 = cljs.core.first(seq35623);
var seq35623__$1 = cljs.core.next(seq35623);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35624,seq35623__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35637 = cljs.core.seq(sources);
var chunk__35638 = null;
var count__35639 = (0);
var i__35640 = (0);
while(true){
if((i__35640 < count__35639)){
var map__35650 = chunk__35638.cljs$core$IIndexed$_nth$arity$2(null,i__35640);
var map__35650__$1 = (((((!((map__35650 == null))))?(((((map__35650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35650):map__35650);
var src = map__35650__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35650__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35652){var e_35773 = e35652;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35773);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35773.message)].join('')));
}

var G__35774 = seq__35637;
var G__35775 = chunk__35638;
var G__35776 = count__35639;
var G__35777 = (i__35640 + (1));
seq__35637 = G__35774;
chunk__35638 = G__35775;
count__35639 = G__35776;
i__35640 = G__35777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35637);
if(temp__5735__auto__){
var seq__35637__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35637__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35637__$1);
var G__35778 = cljs.core.chunk_rest(seq__35637__$1);
var G__35779 = c__4609__auto__;
var G__35780 = cljs.core.count(c__4609__auto__);
var G__35781 = (0);
seq__35637 = G__35778;
chunk__35638 = G__35779;
count__35639 = G__35780;
i__35640 = G__35781;
continue;
} else {
var map__35653 = cljs.core.first(seq__35637__$1);
var map__35653__$1 = (((((!((map__35653 == null))))?(((((map__35653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35653):map__35653);
var src = map__35653__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35653__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35653__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35653__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35653__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35655){var e_35782 = e35655;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35782);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35782.message)].join('')));
}

var G__35783 = cljs.core.next(seq__35637__$1);
var G__35784 = null;
var G__35785 = (0);
var G__35786 = (0);
seq__35637 = G__35783;
chunk__35638 = G__35784;
count__35639 = G__35785;
i__35640 = G__35786;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35658 = cljs.core.seq(js_requires);
var chunk__35659 = null;
var count__35660 = (0);
var i__35661 = (0);
while(true){
if((i__35661 < count__35660)){
var js_ns = chunk__35659.cljs$core$IIndexed$_nth$arity$2(null,i__35661);
var require_str_35787 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35787);


var G__35788 = seq__35658;
var G__35789 = chunk__35659;
var G__35790 = count__35660;
var G__35791 = (i__35661 + (1));
seq__35658 = G__35788;
chunk__35659 = G__35789;
count__35660 = G__35790;
i__35661 = G__35791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35658);
if(temp__5735__auto__){
var seq__35658__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35658__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35658__$1);
var G__35792 = cljs.core.chunk_rest(seq__35658__$1);
var G__35793 = c__4609__auto__;
var G__35794 = cljs.core.count(c__4609__auto__);
var G__35795 = (0);
seq__35658 = G__35792;
chunk__35659 = G__35793;
count__35660 = G__35794;
i__35661 = G__35795;
continue;
} else {
var js_ns = cljs.core.first(seq__35658__$1);
var require_str_35796 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35796);


var G__35797 = cljs.core.next(seq__35658__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35658 = G__35797;
chunk__35659 = G__35798;
count__35660 = G__35799;
i__35661 = G__35800;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35664 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35664) : callback.call(null,G__35664));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35666){
var map__35667 = p__35666;
var map__35667__$1 = (((((!((map__35667 == null))))?(((((map__35667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35667):map__35667);
var msg = map__35667__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35667__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35667__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35669(s__35670){
return (new cljs.core.LazySeq(null,(function (){
var s__35670__$1 = s__35670;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35670__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35675 = cljs.core.first(xs__6292__auto__);
var map__35675__$1 = (((((!((map__35675 == null))))?(((((map__35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35675):map__35675);
var src = map__35675__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35670__$1,map__35675,map__35675__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35667,map__35667__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35669_$_iter__35671(s__35672){
return (new cljs.core.LazySeq(null,((function (s__35670__$1,map__35675,map__35675__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35667,map__35667__$1,msg,info,reload_info){
return (function (){
var s__35672__$1 = s__35672;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35672__$1);
if(temp__5735__auto____$1){
var s__35672__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35672__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35672__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35674 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35673 = (0);
while(true){
if((i__35673 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__35673);
cljs.core.chunk_append(b__35674,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35801 = (i__35673 + (1));
i__35673 = G__35801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35674),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35669_$_iter__35671(cljs.core.chunk_rest(s__35672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35674),null);
}
} else {
var warning = cljs.core.first(s__35672__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35669_$_iter__35671(cljs.core.rest(s__35672__$2)));
}
} else {
return null;
}
break;
}
});})(s__35670__$1,map__35675,map__35675__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35667,map__35667__$1,msg,info,reload_info))
,null,null));
});})(s__35670__$1,map__35675,map__35675__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35667,map__35667__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35669(cljs.core.rest(s__35670__$1)));
} else {
var G__35802 = cljs.core.rest(s__35670__$1);
s__35670__$1 = G__35802;
continue;
}
} else {
var G__35803 = cljs.core.rest(s__35670__$1);
s__35670__$1 = G__35803;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35677_35804 = cljs.core.seq(warnings);
var chunk__35678_35805 = null;
var count__35679_35806 = (0);
var i__35680_35807 = (0);
while(true){
if((i__35680_35807 < count__35679_35806)){
var map__35686_35808 = chunk__35678_35805.cljs$core$IIndexed$_nth$arity$2(null,i__35680_35807);
var map__35686_35809__$1 = (((((!((map__35686_35808 == null))))?(((((map__35686_35808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35686_35808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35686_35808):map__35686_35808);
var w_35810 = map__35686_35809__$1;
var msg_35811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686_35809__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686_35809__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686_35809__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686_35809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35814)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35812),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35813),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35811__$1)].join(''));


var G__35815 = seq__35677_35804;
var G__35816 = chunk__35678_35805;
var G__35817 = count__35679_35806;
var G__35818 = (i__35680_35807 + (1));
seq__35677_35804 = G__35815;
chunk__35678_35805 = G__35816;
count__35679_35806 = G__35817;
i__35680_35807 = G__35818;
continue;
} else {
var temp__5735__auto___35819 = cljs.core.seq(seq__35677_35804);
if(temp__5735__auto___35819){
var seq__35677_35820__$1 = temp__5735__auto___35819;
if(cljs.core.chunked_seq_QMARK_(seq__35677_35820__$1)){
var c__4609__auto___35821 = cljs.core.chunk_first(seq__35677_35820__$1);
var G__35822 = cljs.core.chunk_rest(seq__35677_35820__$1);
var G__35823 = c__4609__auto___35821;
var G__35824 = cljs.core.count(c__4609__auto___35821);
var G__35825 = (0);
seq__35677_35804 = G__35822;
chunk__35678_35805 = G__35823;
count__35679_35806 = G__35824;
i__35680_35807 = G__35825;
continue;
} else {
var map__35689_35826 = cljs.core.first(seq__35677_35820__$1);
var map__35689_35827__$1 = (((((!((map__35689_35826 == null))))?(((((map__35689_35826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35689_35826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35689_35826):map__35689_35826);
var w_35828 = map__35689_35827__$1;
var msg_35829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35689_35827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35689_35827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35689_35827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35689_35827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35829__$1)].join(''));


var G__35833 = cljs.core.next(seq__35677_35820__$1);
var G__35834 = null;
var G__35835 = (0);
var G__35836 = (0);
seq__35677_35804 = G__35833;
chunk__35678_35805 = G__35834;
count__35679_35806 = G__35835;
i__35680_35807 = G__35836;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35665_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35665_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35691){
var map__35692 = p__35691;
var map__35692__$1 = (((((!((map__35692 == null))))?(((((map__35692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35692):map__35692);
var msg = map__35692__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35694 = cljs.core.seq(updates);
var chunk__35696 = null;
var count__35697 = (0);
var i__35698 = (0);
while(true){
if((i__35698 < count__35697)){
var path = chunk__35696.cljs$core$IIndexed$_nth$arity$2(null,i__35698);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35724_35837 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35727_35838 = null;
var count__35728_35839 = (0);
var i__35729_35840 = (0);
while(true){
if((i__35729_35840 < count__35728_35839)){
var node_35841 = chunk__35727_35838.cljs$core$IIndexed$_nth$arity$2(null,i__35729_35840);
var path_match_35842 = shadow.cljs.devtools.client.browser.match_paths(node_35841.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35842)){
var new_link_35843 = (function (){var G__35734 = node_35841.cloneNode(true);
G__35734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35842),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35734;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35842], 0));

goog.dom.insertSiblingAfter(new_link_35843,node_35841);

goog.dom.removeNode(node_35841);


var G__35844 = seq__35724_35837;
var G__35845 = chunk__35727_35838;
var G__35846 = count__35728_35839;
var G__35847 = (i__35729_35840 + (1));
seq__35724_35837 = G__35844;
chunk__35727_35838 = G__35845;
count__35728_35839 = G__35846;
i__35729_35840 = G__35847;
continue;
} else {
var G__35848 = seq__35724_35837;
var G__35849 = chunk__35727_35838;
var G__35850 = count__35728_35839;
var G__35851 = (i__35729_35840 + (1));
seq__35724_35837 = G__35848;
chunk__35727_35838 = G__35849;
count__35728_35839 = G__35850;
i__35729_35840 = G__35851;
continue;
}
} else {
var temp__5735__auto___35852 = cljs.core.seq(seq__35724_35837);
if(temp__5735__auto___35852){
var seq__35724_35853__$1 = temp__5735__auto___35852;
if(cljs.core.chunked_seq_QMARK_(seq__35724_35853__$1)){
var c__4609__auto___35854 = cljs.core.chunk_first(seq__35724_35853__$1);
var G__35855 = cljs.core.chunk_rest(seq__35724_35853__$1);
var G__35856 = c__4609__auto___35854;
var G__35857 = cljs.core.count(c__4609__auto___35854);
var G__35858 = (0);
seq__35724_35837 = G__35855;
chunk__35727_35838 = G__35856;
count__35728_35839 = G__35857;
i__35729_35840 = G__35858;
continue;
} else {
var node_35859 = cljs.core.first(seq__35724_35853__$1);
var path_match_35860 = shadow.cljs.devtools.client.browser.match_paths(node_35859.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35860)){
var new_link_35861 = (function (){var G__35735 = node_35859.cloneNode(true);
G__35735.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35860),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35735;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35860], 0));

goog.dom.insertSiblingAfter(new_link_35861,node_35859);

goog.dom.removeNode(node_35859);


var G__35862 = cljs.core.next(seq__35724_35853__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35724_35837 = G__35862;
chunk__35727_35838 = G__35863;
count__35728_35839 = G__35864;
i__35729_35840 = G__35865;
continue;
} else {
var G__35866 = cljs.core.next(seq__35724_35853__$1);
var G__35867 = null;
var G__35868 = (0);
var G__35869 = (0);
seq__35724_35837 = G__35866;
chunk__35727_35838 = G__35867;
count__35728_35839 = G__35868;
i__35729_35840 = G__35869;
continue;
}
}
} else {
}
}
break;
}


var G__35870 = seq__35694;
var G__35871 = chunk__35696;
var G__35872 = count__35697;
var G__35873 = (i__35698 + (1));
seq__35694 = G__35870;
chunk__35696 = G__35871;
count__35697 = G__35872;
i__35698 = G__35873;
continue;
} else {
var G__35874 = seq__35694;
var G__35875 = chunk__35696;
var G__35876 = count__35697;
var G__35877 = (i__35698 + (1));
seq__35694 = G__35874;
chunk__35696 = G__35875;
count__35697 = G__35876;
i__35698 = G__35877;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35694);
if(temp__5735__auto__){
var seq__35694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35694__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35694__$1);
var G__35878 = cljs.core.chunk_rest(seq__35694__$1);
var G__35879 = c__4609__auto__;
var G__35880 = cljs.core.count(c__4609__auto__);
var G__35881 = (0);
seq__35694 = G__35878;
chunk__35696 = G__35879;
count__35697 = G__35880;
i__35698 = G__35881;
continue;
} else {
var path = cljs.core.first(seq__35694__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35736_35882 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35739_35883 = null;
var count__35740_35884 = (0);
var i__35741_35885 = (0);
while(true){
if((i__35741_35885 < count__35740_35884)){
var node_35886 = chunk__35739_35883.cljs$core$IIndexed$_nth$arity$2(null,i__35741_35885);
var path_match_35887 = shadow.cljs.devtools.client.browser.match_paths(node_35886.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35887)){
var new_link_35888 = (function (){var G__35746 = node_35886.cloneNode(true);
G__35746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35887),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35746;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35887], 0));

goog.dom.insertSiblingAfter(new_link_35888,node_35886);

goog.dom.removeNode(node_35886);


var G__35889 = seq__35736_35882;
var G__35890 = chunk__35739_35883;
var G__35891 = count__35740_35884;
var G__35892 = (i__35741_35885 + (1));
seq__35736_35882 = G__35889;
chunk__35739_35883 = G__35890;
count__35740_35884 = G__35891;
i__35741_35885 = G__35892;
continue;
} else {
var G__35893 = seq__35736_35882;
var G__35894 = chunk__35739_35883;
var G__35895 = count__35740_35884;
var G__35896 = (i__35741_35885 + (1));
seq__35736_35882 = G__35893;
chunk__35739_35883 = G__35894;
count__35740_35884 = G__35895;
i__35741_35885 = G__35896;
continue;
}
} else {
var temp__5735__auto___35897__$1 = cljs.core.seq(seq__35736_35882);
if(temp__5735__auto___35897__$1){
var seq__35736_35898__$1 = temp__5735__auto___35897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35736_35898__$1)){
var c__4609__auto___35899 = cljs.core.chunk_first(seq__35736_35898__$1);
var G__35900 = cljs.core.chunk_rest(seq__35736_35898__$1);
var G__35901 = c__4609__auto___35899;
var G__35902 = cljs.core.count(c__4609__auto___35899);
var G__35903 = (0);
seq__35736_35882 = G__35900;
chunk__35739_35883 = G__35901;
count__35740_35884 = G__35902;
i__35741_35885 = G__35903;
continue;
} else {
var node_35904 = cljs.core.first(seq__35736_35898__$1);
var path_match_35905 = shadow.cljs.devtools.client.browser.match_paths(node_35904.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35905)){
var new_link_35906 = (function (){var G__35747 = node_35904.cloneNode(true);
G__35747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35905),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35747;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35905], 0));

goog.dom.insertSiblingAfter(new_link_35906,node_35904);

goog.dom.removeNode(node_35904);


var G__35907 = cljs.core.next(seq__35736_35898__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35736_35882 = G__35907;
chunk__35739_35883 = G__35908;
count__35740_35884 = G__35909;
i__35741_35885 = G__35910;
continue;
} else {
var G__35911 = cljs.core.next(seq__35736_35898__$1);
var G__35912 = null;
var G__35913 = (0);
var G__35914 = (0);
seq__35736_35882 = G__35911;
chunk__35739_35883 = G__35912;
count__35740_35884 = G__35913;
i__35741_35885 = G__35914;
continue;
}
}
} else {
}
}
break;
}


var G__35915 = cljs.core.next(seq__35694__$1);
var G__35916 = null;
var G__35917 = (0);
var G__35918 = (0);
seq__35694 = G__35915;
chunk__35696 = G__35916;
count__35697 = G__35917;
i__35698 = G__35918;
continue;
} else {
var G__35919 = cljs.core.next(seq__35694__$1);
var G__35920 = null;
var G__35921 = (0);
var G__35922 = (0);
seq__35694 = G__35919;
chunk__35696 = G__35920;
count__35697 = G__35921;
i__35698 = G__35922;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35748){
var map__35749 = p__35748;
var map__35749__$1 = (((((!((map__35749 == null))))?(((((map__35749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35749):map__35749);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35751,done){
var map__35752 = p__35751;
var map__35752__$1 = (((((!((map__35752 == null))))?(((((map__35752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35752):map__35752);
var msg = map__35752__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35754){
var map__35755 = p__35754;
var map__35755__$1 = (((((!((map__35755 == null))))?(((((map__35755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35755):map__35755);
var src = map__35755__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35755__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35757){var e = e35757;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35758,done){
var map__35759 = p__35758;
var map__35759__$1 = (((((!((map__35759 == null))))?(((((map__35759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35759):map__35759);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35761){
var map__35762 = p__35761;
var map__35762__$1 = (((((!((map__35762 == null))))?(((((map__35762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35762):map__35762);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35764,done){
var map__35765 = p__35764;
var map__35765__$1 = (((((!((map__35765 == null))))?(((((map__35765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35765):map__35765);
var msg = map__35765__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35767_35923 = type;
var G__35767_35924__$1 = (((G__35767_35923 instanceof cljs.core.Keyword))?G__35767_35923.fqn:null);
switch (G__35767_35924__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35768 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35768.cljs$core$IFn$_invoke$arity$1 ? fexpr__35768.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35768.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35769){var e = e35769;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35926 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35926)){
var s_35927 = temp__5735__auto___35926;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35927.onclose = (function (e){
return null;
}));

s_35927.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
