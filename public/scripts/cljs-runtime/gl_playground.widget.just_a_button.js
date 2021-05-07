goog.provide('gl_playground.widget.just_a_button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gl_playground.widget.registry');
goog.require('taoensso.timbre');
gl_playground.widget.just_a_button.widget = (function gl_playground$widget$just_a_button$widget(name,config){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"gl-playground.widget.just-a-button",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["just-a-button ",name,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(config)], null);
}),null)),null,1268676176,null);

var c = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(config);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked"], 0));
})], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,"label")], null)], null);
});
gl_playground.widget.registry.add_widget("button",new cljs.core.Var(function(){return gl_playground.widget.just_a_button.widget;},new cljs.core.Symbol("gl-playground.widget.just-a-button","widget","gl-playground.widget.just-a-button/widget",-1820931272,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"gl-playground.widget.just-a-button","gl-playground.widget.just-a-button",-1747375029,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),"gl_playground/widget/just_a_button.cljs",14,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"config","config",-1659574354,null)], null)),null,(cljs.core.truth_(gl_playground.widget.just_a_button.widget)?gl_playground.widget.just_a_button.widget.cljs$lang$test:null)])));

//# sourceMappingURL=gl_playground.widget.just_a_button.js.map
