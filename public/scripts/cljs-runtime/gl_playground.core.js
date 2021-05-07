goog.provide('gl_playground.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.timbre');
var module$node_modules$flexlayout_react$lib$index=shadow.js.require("module$node_modules$flexlayout_react$lib$index", {});
goog.require('gl_playground.widget.registry');
goog.require('gl_playground.widget.just_a_button');
goog.require('gl_playground.widget.simple_form');
gl_playground.core.layout = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global","global",93595047),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"row",new cljs.core.Keyword(null,"weight","weight",-1262796205),(100),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"tabset",new cljs.core.Keyword(null,"weight","weight",-1262796205),(50),new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"tab",new cljs.core.Keyword(null,"name","name",1843675177),"A Button",new cljs.core.Keyword(null,"component","component",1555936782),"button",new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Submit!"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"tabset",new cljs.core.Keyword(null,"weight","weight",-1262796205),(50),new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"tab",new cljs.core.Keyword(null,"name","name",1843675177),"Simple Form",new cljs.core.Keyword(null,"component","component",1555936782),"form",new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"some text"], null)], null)], null)], null)], null)], null)], null);
gl_playground.core.component_factory = (function gl_playground$core$component_factory(node){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"gl-playground.core",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component-factory ",node], null);
}),null)),null,1844135833,null);

var component = node.getComponent();
var name = node.getName();
var config = node.getConfig();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"gl-playground.core",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component-factory ",component,name,config], null);
}),null)),null,-826858088,null);

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__31508 = gl_playground.widget.registry.widget_for(component);
return (fexpr__31508.cljs$core$IFn$_invoke$arity$2 ? fexpr__31508.cljs$core$IFn$_invoke$arity$2(name,config) : fexpr__31508.call(null,name,config));
})());
});
gl_playground.core.flex = (function gl_playground$core$flex(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"gl-playground.core",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex"], null);
}),null)),null,-1174233872,null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$flexlayout_react$lib$index.Layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",331153215),module$node_modules$flexlayout_react$lib$index.Model.fromJson(cljs.core.clj__GT_js(gl_playground.core.layout)),new cljs.core.Keyword(null,"factory","factory",63933746),gl_playground.core.component_factory], null)], null);
});
/**
 * mount the main UI components using Reagent
 */
gl_playground.core.mount_components = (function gl_playground$core$mount_components(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.Var(function(){return gl_playground.core.flex;},new cljs.core.Symbol("gl-playground.core","flex","gl-playground.core/flex",1913658445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"gl-playground.core","gl-playground.core",-486779250,null),new cljs.core.Symbol(null,"flex","flex",215406899,null),"gl_playground/core.cljs",12,1,46,46,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gl_playground.core.flex)?gl_playground.core.flex.cljs$lang$test:null)])),document.getElementById("app"));
});
gl_playground.core.main = (function gl_playground$core$main(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"gl-playground.core",null,62,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["running!"], null);
}),null)),null,1299444250,null);

return gl_playground.core.mount_components();
});

//# sourceMappingURL=gl_playground.core.js.map
