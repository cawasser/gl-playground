goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29208 = arguments.length;
switch (G__29208) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29209 = (function (f,blockable,meta29210){
this.f = f;
this.blockable = blockable;
this.meta29210 = meta29210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29211,meta29210__$1){
var self__ = this;
var _29211__$1 = this;
return (new cljs.core.async.t_cljs$core$async29209(self__.f,self__.blockable,meta29210__$1));
}));

(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29211){
var self__ = this;
var _29211__$1 = this;
return self__.meta29210;
}));

(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29210","meta29210",-1244272858,null)], null);
}));

(cljs.core.async.t_cljs$core$async29209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29209");

(cljs.core.async.t_cljs$core$async29209.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29209.
 */
cljs.core.async.__GT_t_cljs$core$async29209 = (function cljs$core$async$__GT_t_cljs$core$async29209(f__$1,blockable__$1,meta29210){
return (new cljs.core.async.t_cljs$core$async29209(f__$1,blockable__$1,meta29210));
});

}

return (new cljs.core.async.t_cljs$core$async29209(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29231 = arguments.length;
switch (G__29231) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29255 = arguments.length;
switch (G__29255) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29315 = arguments.length;
switch (G__29315) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32299 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32299) : fn1.call(null,val_32299));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32299) : fn1.call(null,val_32299));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29330 = arguments.length;
switch (G__29330) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32312 = n;
var x_32313 = (0);
while(true){
if((x_32313 < n__4666__auto___32312)){
(a[x_32313] = x_32313);

var G__32314 = (x_32313 + (1));
x_32313 = G__32314;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29355 = (function (flag,meta29356){
this.flag = flag;
this.meta29356 = meta29356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29357,meta29356__$1){
var self__ = this;
var _29357__$1 = this;
return (new cljs.core.async.t_cljs$core$async29355(self__.flag,meta29356__$1));
}));

(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29357){
var self__ = this;
var _29357__$1 = this;
return self__.meta29356;
}));

(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29356","meta29356",-110622906,null)], null);
}));

(cljs.core.async.t_cljs$core$async29355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29355");

(cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29355.
 */
cljs.core.async.__GT_t_cljs$core$async29355 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29355(flag__$1,meta29356){
return (new cljs.core.async.t_cljs$core$async29355(flag__$1,meta29356));
});

}

return (new cljs.core.async.t_cljs$core$async29355(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29365 = (function (flag,cb,meta29366){
this.flag = flag;
this.cb = cb;
this.meta29366 = meta29366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29367,meta29366__$1){
var self__ = this;
var _29367__$1 = this;
return (new cljs.core.async.t_cljs$core$async29365(self__.flag,self__.cb,meta29366__$1));
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29367){
var self__ = this;
var _29367__$1 = this;
return self__.meta29366;
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29366","meta29366",-1887453757,null)], null);
}));

(cljs.core.async.t_cljs$core$async29365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29365");

(cljs.core.async.t_cljs$core$async29365.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29365.
 */
cljs.core.async.__GT_t_cljs$core$async29365 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29365(flag__$1,cb__$1,meta29366){
return (new cljs.core.async.t_cljs$core$async29365(flag__$1,cb__$1,meta29366));
});

}

return (new cljs.core.async.t_cljs$core$async29365(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29387_SHARP_){
var G__29402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29387_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29402) : fret.call(null,G__29402));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29388_SHARP_){
var G__29407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29388_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29407) : fret.call(null,G__29407));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32355 = (i + (1));
i = G__32355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32360 = arguments.length;
var i__4790__auto___32361 = (0);
while(true){
if((i__4790__auto___32361 < len__4789__auto___32360)){
args__4795__auto__.push((arguments[i__4790__auto___32361]));

var G__32369 = (i__4790__auto___32361 + (1));
i__4790__auto___32361 = G__32369;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29430){
var map__29431 = p__29430;
var map__29431__$1 = (((((!((map__29431 == null))))?(((((map__29431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29431):map__29431);
var opts = map__29431__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29421){
var G__29422 = cljs.core.first(seq29421);
var seq29421__$1 = cljs.core.next(seq29421);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29422,seq29421__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29449 = arguments.length;
switch (G__29449) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29122__auto___32392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (7))){
var inst_29484 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29516_32393 = state_29489__$1;
(statearr_29516_32393[(2)] = inst_29484);

(statearr_29516_32393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (1))){
var state_29489__$1 = state_29489;
var statearr_29524_32399 = state_29489__$1;
(statearr_29524_32399[(2)] = null);

(statearr_29524_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (4))){
var inst_29463 = (state_29489[(7)]);
var inst_29463__$1 = (state_29489[(2)]);
var inst_29464 = (inst_29463__$1 == null);
var state_29489__$1 = (function (){var statearr_29539 = state_29489;
(statearr_29539[(7)] = inst_29463__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29464)){
var statearr_29544_32404 = state_29489__$1;
(statearr_29544_32404[(1)] = (5));

} else {
var statearr_29545_32409 = state_29489__$1;
(statearr_29545_32409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (13))){
var state_29489__$1 = state_29489;
var statearr_29546_32417 = state_29489__$1;
(statearr_29546_32417[(2)] = null);

(statearr_29546_32417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (6))){
var inst_29463 = (state_29489[(7)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29489__$1,(11),to,inst_29463);
} else {
if((state_val_29490 === (3))){
var inst_29486 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29489__$1,inst_29486);
} else {
if((state_val_29490 === (12))){
var state_29489__$1 = state_29489;
var statearr_29549_32426 = state_29489__$1;
(statearr_29549_32426[(2)] = null);

(statearr_29549_32426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (2))){
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29489__$1,(4),from);
} else {
if((state_val_29490 === (11))){
var inst_29474 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29474)){
var statearr_29554_32433 = state_29489__$1;
(statearr_29554_32433[(1)] = (12));

} else {
var statearr_29555_32434 = state_29489__$1;
(statearr_29555_32434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (9))){
var state_29489__$1 = state_29489;
var statearr_29556_32435 = state_29489__$1;
(statearr_29556_32435[(2)] = null);

(statearr_29556_32435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (5))){
var state_29489__$1 = state_29489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29557_32438 = state_29489__$1;
(statearr_29557_32438[(1)] = (8));

} else {
var statearr_29558_32439 = state_29489__$1;
(statearr_29558_32439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (14))){
var inst_29482 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29559_32440 = state_29489__$1;
(statearr_29559_32440[(2)] = inst_29482);

(statearr_29559_32440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (10))){
var inst_29470 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29561_32441 = state_29489__$1;
(statearr_29561_32441[(2)] = inst_29470);

(statearr_29561_32441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (8))){
var inst_29467 = cljs.core.async.close_BANG_(to);
var state_29489__$1 = state_29489;
var statearr_29562_32442 = state_29489__$1;
(statearr_29562_32442[(2)] = inst_29467);

(statearr_29562_32442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_29489){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29489);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29568){if((e29568 instanceof Object)){
var ex__28850__auto__ = e29568;
var statearr_29569_32447 = state_29489;
(statearr_29569_32447[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32448 = state_29489;
state_29489 = G__32448;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_29570 = f__29123__auto__();
(statearr_29570[(6)] = c__29122__auto___32392);

return statearr_29570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29583){
var vec__29584 = p__29583;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29584,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29584,(1),null);
var job = vec__29584;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29122__auto___32449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_29591){
var state_val_29592 = (state_29591[(1)]);
if((state_val_29592 === (1))){
var state_29591__$1 = state_29591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29591__$1,(2),res,v);
} else {
if((state_val_29592 === (2))){
var inst_29588 = (state_29591[(2)]);
var inst_29589 = cljs.core.async.close_BANG_(res);
var state_29591__$1 = (function (){var statearr_29608 = state_29591;
(statearr_29608[(7)] = inst_29588);

return statearr_29608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29591__$1,inst_29589);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_29613 = [null,null,null,null,null,null,null,null];
(statearr_29613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__);

(statearr_29613[(1)] = (1));

return statearr_29613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1 = (function (state_29591){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29591);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29614){if((e29614 instanceof Object)){
var ex__28850__auto__ = e29614;
var statearr_29615_32453 = state_29591;
(statearr_29615_32453[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32454 = state_29591;
state_29591 = G__32454;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = function(state_29591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1.call(this,state_29591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_29616 = f__29123__auto__();
(statearr_29616[(6)] = c__29122__auto___32449);

return statearr_29616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29617){
var vec__29618 = p__29617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(1),null);
var job = vec__29618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32467 = n;
var __32468 = (0);
while(true){
if((__32468 < n__4666__auto___32467)){
var G__29621_32469 = type;
var G__29621_32470__$1 = (((G__29621_32469 instanceof cljs.core.Keyword))?G__29621_32469.fqn:null);
switch (G__29621_32470__$1) {
case "compute":
var c__29122__auto___32473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32468,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = ((function (__32468,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function (state_29634){
var state_val_29635 = (state_29634[(1)]);
if((state_val_29635 === (1))){
var state_29634__$1 = state_29634;
var statearr_29637_32475 = state_29634__$1;
(statearr_29637_32475[(2)] = null);

(statearr_29637_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (2))){
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29634__$1,(4),jobs);
} else {
if((state_val_29635 === (3))){
var inst_29632 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29634__$1,inst_29632);
} else {
if((state_val_29635 === (4))){
var inst_29624 = (state_29634[(2)]);
var inst_29625 = process(inst_29624);
var state_29634__$1 = state_29634;
if(cljs.core.truth_(inst_29625)){
var statearr_29644_32477 = state_29634__$1;
(statearr_29644_32477[(1)] = (5));

} else {
var statearr_29645_32478 = state_29634__$1;
(statearr_29645_32478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (5))){
var state_29634__$1 = state_29634;
var statearr_29646_32480 = state_29634__$1;
(statearr_29646_32480[(2)] = null);

(statearr_29646_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (6))){
var state_29634__$1 = state_29634;
var statearr_29647_32483 = state_29634__$1;
(statearr_29647_32483[(2)] = null);

(statearr_29647_32483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (7))){
var inst_29630 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29648_32485 = state_29634__$1;
(statearr_29648_32485[(2)] = inst_29630);

(statearr_29648_32485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32468,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
;
return ((function (__32468,switch__28846__auto__,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_29649 = [null,null,null,null,null,null,null];
(statearr_29649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__);

(statearr_29649[(1)] = (1));

return statearr_29649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1 = (function (state_29634){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29634);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29650){if((e29650 instanceof Object)){
var ex__28850__auto__ = e29650;
var statearr_29651_32498 = state_29634;
(statearr_29651_32498[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32500 = state_29634;
state_29634 = G__32500;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = function(state_29634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1.call(this,state_29634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__;
})()
;})(__32468,switch__28846__auto__,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
})();
var state__29124__auto__ = (function (){var statearr_29652 = f__29123__auto__();
(statearr_29652[(6)] = c__29122__auto___32473);

return statearr_29652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
});})(__32468,c__29122__auto___32473,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
);


break;
case "async":
var c__29122__auto___32505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32468,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = ((function (__32468,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function (state_29673){
var state_val_29674 = (state_29673[(1)]);
if((state_val_29674 === (1))){
var state_29673__$1 = state_29673;
var statearr_29681_32509 = state_29673__$1;
(statearr_29681_32509[(2)] = null);

(statearr_29681_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (2))){
var state_29673__$1 = state_29673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29673__$1,(4),jobs);
} else {
if((state_val_29674 === (3))){
var inst_29671 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29673__$1,inst_29671);
} else {
if((state_val_29674 === (4))){
var inst_29661 = (state_29673[(2)]);
var inst_29663 = async(inst_29661);
var state_29673__$1 = state_29673;
if(cljs.core.truth_(inst_29663)){
var statearr_29682_32510 = state_29673__$1;
(statearr_29682_32510[(1)] = (5));

} else {
var statearr_29683_32511 = state_29673__$1;
(statearr_29683_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (5))){
var state_29673__$1 = state_29673;
var statearr_29684_32515 = state_29673__$1;
(statearr_29684_32515[(2)] = null);

(statearr_29684_32515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (6))){
var state_29673__$1 = state_29673;
var statearr_29685_32518 = state_29673__$1;
(statearr_29685_32518[(2)] = null);

(statearr_29685_32518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (7))){
var inst_29669 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29686_32519 = state_29673__$1;
(statearr_29686_32519[(2)] = inst_29669);

(statearr_29686_32519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32468,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
;
return ((function (__32468,switch__28846__auto__,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_29687 = [null,null,null,null,null,null,null];
(statearr_29687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__);

(statearr_29687[(1)] = (1));

return statearr_29687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1 = (function (state_29673){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29673);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29690){if((e29690 instanceof Object)){
var ex__28850__auto__ = e29690;
var statearr_29691_32522 = state_29673;
(statearr_29691_32522[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32524 = state_29673;
state_29673 = G__32524;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = function(state_29673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1.call(this,state_29673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__;
})()
;})(__32468,switch__28846__auto__,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
})();
var state__29124__auto__ = (function (){var statearr_29696 = f__29123__auto__();
(statearr_29696[(6)] = c__29122__auto___32505);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
});})(__32468,c__29122__auto___32505,G__29621_32469,G__29621_32470__$1,n__4666__auto___32467,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29621_32470__$1)].join('')));

}

var G__32532 = (__32468 + (1));
__32468 = G__32532;
continue;
} else {
}
break;
}

var c__29122__auto___32534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_29718){
var state_val_29719 = (state_29718[(1)]);
if((state_val_29719 === (7))){
var inst_29714 = (state_29718[(2)]);
var state_29718__$1 = state_29718;
var statearr_29720_32536 = state_29718__$1;
(statearr_29720_32536[(2)] = inst_29714);

(statearr_29720_32536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (1))){
var state_29718__$1 = state_29718;
var statearr_29721_32537 = state_29718__$1;
(statearr_29721_32537[(2)] = null);

(statearr_29721_32537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (4))){
var inst_29699 = (state_29718[(7)]);
var inst_29699__$1 = (state_29718[(2)]);
var inst_29700 = (inst_29699__$1 == null);
var state_29718__$1 = (function (){var statearr_29723 = state_29718;
(statearr_29723[(7)] = inst_29699__$1);

return statearr_29723;
})();
if(cljs.core.truth_(inst_29700)){
var statearr_29725_32538 = state_29718__$1;
(statearr_29725_32538[(1)] = (5));

} else {
var statearr_29726_32540 = state_29718__$1;
(statearr_29726_32540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (6))){
var inst_29704 = (state_29718[(8)]);
var inst_29699 = (state_29718[(7)]);
var inst_29704__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29706 = [inst_29699,inst_29704__$1];
var inst_29707 = (new cljs.core.PersistentVector(null,2,(5),inst_29705,inst_29706,null));
var state_29718__$1 = (function (){var statearr_29727 = state_29718;
(statearr_29727[(8)] = inst_29704__$1);

return statearr_29727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29718__$1,(8),jobs,inst_29707);
} else {
if((state_val_29719 === (3))){
var inst_29716 = (state_29718[(2)]);
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29718__$1,inst_29716);
} else {
if((state_val_29719 === (2))){
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29718__$1,(4),from);
} else {
if((state_val_29719 === (9))){
var inst_29711 = (state_29718[(2)]);
var state_29718__$1 = (function (){var statearr_29728 = state_29718;
(statearr_29728[(9)] = inst_29711);

return statearr_29728;
})();
var statearr_29729_32545 = state_29718__$1;
(statearr_29729_32545[(2)] = null);

(statearr_29729_32545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (5))){
var inst_29702 = cljs.core.async.close_BANG_(jobs);
var state_29718__$1 = state_29718;
var statearr_29732_32546 = state_29718__$1;
(statearr_29732_32546[(2)] = inst_29702);

(statearr_29732_32546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (8))){
var inst_29704 = (state_29718[(8)]);
var inst_29709 = (state_29718[(2)]);
var state_29718__$1 = (function (){var statearr_29735 = state_29718;
(statearr_29735[(10)] = inst_29709);

return statearr_29735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29718__$1,(9),results,inst_29704);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_29738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__);

(statearr_29738[(1)] = (1));

return statearr_29738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1 = (function (state_29718){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29718);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29740){if((e29740 instanceof Object)){
var ex__28850__auto__ = e29740;
var statearr_29749_32551 = state_29718;
(statearr_29749_32551[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32554 = state_29718;
state_29718 = G__32554;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = function(state_29718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1.call(this,state_29718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_29754 = f__29123__auto__();
(statearr_29754[(6)] = c__29122__auto___32534);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


var c__29122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_29794){
var state_val_29795 = (state_29794[(1)]);
if((state_val_29795 === (7))){
var inst_29789 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29797_32557 = state_29794__$1;
(statearr_29797_32557[(2)] = inst_29789);

(statearr_29797_32557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (20))){
var state_29794__$1 = state_29794;
var statearr_29806_32559 = state_29794__$1;
(statearr_29806_32559[(2)] = null);

(statearr_29806_32559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (1))){
var state_29794__$1 = state_29794;
var statearr_29808_32561 = state_29794__$1;
(statearr_29808_32561[(2)] = null);

(statearr_29808_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (4))){
var inst_29758 = (state_29794[(7)]);
var inst_29758__$1 = (state_29794[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var state_29794__$1 = (function (){var statearr_29812 = state_29794;
(statearr_29812[(7)] = inst_29758__$1);

return statearr_29812;
})();
if(cljs.core.truth_(inst_29759)){
var statearr_29814_32562 = state_29794__$1;
(statearr_29814_32562[(1)] = (5));

} else {
var statearr_29815_32563 = state_29794__$1;
(statearr_29815_32563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (15))){
var inst_29771 = (state_29794[(8)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29794__$1,(18),to,inst_29771);
} else {
if((state_val_29795 === (21))){
var inst_29784 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29820_32570 = state_29794__$1;
(statearr_29820_32570[(2)] = inst_29784);

(statearr_29820_32570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (13))){
var inst_29786 = (state_29794[(2)]);
var state_29794__$1 = (function (){var statearr_29821 = state_29794;
(statearr_29821[(9)] = inst_29786);

return statearr_29821;
})();
var statearr_29822_32572 = state_29794__$1;
(statearr_29822_32572[(2)] = null);

(statearr_29822_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (6))){
var inst_29758 = (state_29794[(7)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29794__$1,(11),inst_29758);
} else {
if((state_val_29795 === (17))){
var inst_29779 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29779)){
var statearr_29825_32575 = state_29794__$1;
(statearr_29825_32575[(1)] = (19));

} else {
var statearr_29826_32577 = state_29794__$1;
(statearr_29826_32577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (3))){
var inst_29791 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29794__$1,inst_29791);
} else {
if((state_val_29795 === (12))){
var inst_29768 = (state_29794[(10)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29794__$1,(14),inst_29768);
} else {
if((state_val_29795 === (2))){
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29794__$1,(4),results);
} else {
if((state_val_29795 === (19))){
var state_29794__$1 = state_29794;
var statearr_29831_32579 = state_29794__$1;
(statearr_29831_32579[(2)] = null);

(statearr_29831_32579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (11))){
var inst_29768 = (state_29794[(2)]);
var state_29794__$1 = (function (){var statearr_29836 = state_29794;
(statearr_29836[(10)] = inst_29768);

return statearr_29836;
})();
var statearr_29839_32580 = state_29794__$1;
(statearr_29839_32580[(2)] = null);

(statearr_29839_32580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (9))){
var state_29794__$1 = state_29794;
var statearr_29843_32581 = state_29794__$1;
(statearr_29843_32581[(2)] = null);

(statearr_29843_32581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (5))){
var state_29794__$1 = state_29794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29844_32582 = state_29794__$1;
(statearr_29844_32582[(1)] = (8));

} else {
var statearr_29845_32583 = state_29794__$1;
(statearr_29845_32583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (14))){
var inst_29771 = (state_29794[(8)]);
var inst_29771__$1 = (state_29794[(2)]);
var inst_29772 = (inst_29771__$1 == null);
var inst_29773 = cljs.core.not(inst_29772);
var state_29794__$1 = (function (){var statearr_29846 = state_29794;
(statearr_29846[(8)] = inst_29771__$1);

return statearr_29846;
})();
if(inst_29773){
var statearr_29847_32586 = state_29794__$1;
(statearr_29847_32586[(1)] = (15));

} else {
var statearr_29848_32588 = state_29794__$1;
(statearr_29848_32588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (16))){
var state_29794__$1 = state_29794;
var statearr_29852_32589 = state_29794__$1;
(statearr_29852_32589[(2)] = false);

(statearr_29852_32589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (10))){
var inst_29765 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29854_32590 = state_29794__$1;
(statearr_29854_32590[(2)] = inst_29765);

(statearr_29854_32590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (18))){
var inst_29776 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29857_32593 = state_29794__$1;
(statearr_29857_32593[(2)] = inst_29776);

(statearr_29857_32593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (8))){
var inst_29762 = cljs.core.async.close_BANG_(to);
var state_29794__$1 = state_29794;
var statearr_29859_32596 = state_29794__$1;
(statearr_29859_32596[(2)] = inst_29762);

(statearr_29859_32596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__);

(statearr_29864[(1)] = (1));

return statearr_29864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1 = (function (state_29794){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29794);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29865){if((e29865 instanceof Object)){
var ex__28850__auto__ = e29865;
var statearr_29867_32600 = state_29794;
(statearr_29867_32600[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32601 = state_29794;
state_29794 = G__32601;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_29870 = f__29123__auto__();
(statearr_29870[(6)] = c__29122__auto__);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

return c__29122__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29876 = arguments.length;
switch (G__29876) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29892 = arguments.length;
switch (G__29892) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29900 = arguments.length;
switch (G__29900) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29122__auto___32614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (7))){
var inst_29928 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29943_32619 = state_29932__$1;
(statearr_29943_32619[(2)] = inst_29928);

(statearr_29943_32619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (1))){
var state_29932__$1 = state_29932;
var statearr_29945_32620 = state_29932__$1;
(statearr_29945_32620[(2)] = null);

(statearr_29945_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (4))){
var inst_29907 = (state_29932[(7)]);
var inst_29907__$1 = (state_29932[(2)]);
var inst_29909 = (inst_29907__$1 == null);
var state_29932__$1 = (function (){var statearr_29948 = state_29932;
(statearr_29948[(7)] = inst_29907__$1);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29950_32621 = state_29932__$1;
(statearr_29950_32621[(1)] = (5));

} else {
var statearr_29952_32622 = state_29932__$1;
(statearr_29952_32622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (13))){
var state_29932__$1 = state_29932;
var statearr_29954_32623 = state_29932__$1;
(statearr_29954_32623[(2)] = null);

(statearr_29954_32623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (6))){
var inst_29907 = (state_29932[(7)]);
var inst_29914 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29907) : p.call(null,inst_29907));
var state_29932__$1 = state_29932;
if(cljs.core.truth_(inst_29914)){
var statearr_29957_32624 = state_29932__$1;
(statearr_29957_32624[(1)] = (9));

} else {
var statearr_29958_32625 = state_29932__$1;
(statearr_29958_32625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (3))){
var inst_29930 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29932__$1,inst_29930);
} else {
if((state_val_29933 === (12))){
var state_29932__$1 = state_29932;
var statearr_29960_32630 = state_29932__$1;
(statearr_29960_32630[(2)] = null);

(statearr_29960_32630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (2))){
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29932__$1,(4),ch);
} else {
if((state_val_29933 === (11))){
var inst_29907 = (state_29932[(7)]);
var inst_29918 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29932__$1,(8),inst_29918,inst_29907);
} else {
if((state_val_29933 === (9))){
var state_29932__$1 = state_29932;
var statearr_29964_32632 = state_29932__$1;
(statearr_29964_32632[(2)] = tc);

(statearr_29964_32632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (5))){
var inst_29911 = cljs.core.async.close_BANG_(tc);
var inst_29912 = cljs.core.async.close_BANG_(fc);
var state_29932__$1 = (function (){var statearr_29968 = state_29932;
(statearr_29968[(8)] = inst_29911);

return statearr_29968;
})();
var statearr_29969_32633 = state_29932__$1;
(statearr_29969_32633[(2)] = inst_29912);

(statearr_29969_32633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (14))){
var inst_29926 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29973_32634 = state_29932__$1;
(statearr_29973_32634[(2)] = inst_29926);

(statearr_29973_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (10))){
var state_29932__$1 = state_29932;
var statearr_29974_32635 = state_29932__$1;
(statearr_29974_32635[(2)] = fc);

(statearr_29974_32635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (8))){
var inst_29920 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
if(cljs.core.truth_(inst_29920)){
var statearr_29975_32636 = state_29932__$1;
(statearr_29975_32636[(1)] = (12));

} else {
var statearr_29976_32637 = state_29932__$1;
(statearr_29976_32637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_29978 = [null,null,null,null,null,null,null,null,null];
(statearr_29978[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_29978[(1)] = (1));

return statearr_29978;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_29932){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_29932);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e29980){if((e29980 instanceof Object)){
var ex__28850__auto__ = e29980;
var statearr_29981_32640 = state_29932;
(statearr_29981_32640[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_29932;
state_29932 = G__32641;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_29988 = f__29123__auto__();
(statearr_29988[(6)] = c__29122__auto___32614);

return statearr_29988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_30019){
var state_val_30021 = (state_30019[(1)]);
if((state_val_30021 === (7))){
var inst_30015 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
var statearr_30034_32642 = state_30019__$1;
(statearr_30034_32642[(2)] = inst_30015);

(statearr_30034_32642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (1))){
var inst_29999 = init;
var state_30019__$1 = (function (){var statearr_30036 = state_30019;
(statearr_30036[(7)] = inst_29999);

return statearr_30036;
})();
var statearr_30040_32643 = state_30019__$1;
(statearr_30040_32643[(2)] = null);

(statearr_30040_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (4))){
var inst_30002 = (state_30019[(8)]);
var inst_30002__$1 = (state_30019[(2)]);
var inst_30003 = (inst_30002__$1 == null);
var state_30019__$1 = (function (){var statearr_30041 = state_30019;
(statearr_30041[(8)] = inst_30002__$1);

return statearr_30041;
})();
if(cljs.core.truth_(inst_30003)){
var statearr_30043_32650 = state_30019__$1;
(statearr_30043_32650[(1)] = (5));

} else {
var statearr_30044_32651 = state_30019__$1;
(statearr_30044_32651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (6))){
var inst_30002 = (state_30019[(8)]);
var inst_29999 = (state_30019[(7)]);
var inst_30006 = (state_30019[(9)]);
var inst_30006__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29999,inst_30002) : f.call(null,inst_29999,inst_30002));
var inst_30007 = cljs.core.reduced_QMARK_(inst_30006__$1);
var state_30019__$1 = (function (){var statearr_30047 = state_30019;
(statearr_30047[(9)] = inst_30006__$1);

return statearr_30047;
})();
if(inst_30007){
var statearr_30048_32656 = state_30019__$1;
(statearr_30048_32656[(1)] = (8));

} else {
var statearr_30050_32658 = state_30019__$1;
(statearr_30050_32658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (3))){
var inst_30017 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30019__$1,inst_30017);
} else {
if((state_val_30021 === (2))){
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30019__$1,(4),ch);
} else {
if((state_val_30021 === (9))){
var inst_30006 = (state_30019[(9)]);
var inst_29999 = inst_30006;
var state_30019__$1 = (function (){var statearr_30054 = state_30019;
(statearr_30054[(7)] = inst_29999);

return statearr_30054;
})();
var statearr_30055_32662 = state_30019__$1;
(statearr_30055_32662[(2)] = null);

(statearr_30055_32662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (5))){
var inst_29999 = (state_30019[(7)]);
var state_30019__$1 = state_30019;
var statearr_30057_32667 = state_30019__$1;
(statearr_30057_32667[(2)] = inst_29999);

(statearr_30057_32667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (10))){
var inst_30013 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
var statearr_30058_32668 = state_30019__$1;
(statearr_30058_32668[(2)] = inst_30013);

(statearr_30058_32668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (8))){
var inst_30006 = (state_30019[(9)]);
var inst_30009 = cljs.core.deref(inst_30006);
var state_30019__$1 = state_30019;
var statearr_30059_32672 = state_30019__$1;
(statearr_30059_32672[(2)] = inst_30009);

(statearr_30059_32672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28847__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28847__auto____0 = (function (){
var statearr_30060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30060[(0)] = cljs$core$async$reduce_$_state_machine__28847__auto__);

(statearr_30060[(1)] = (1));

return statearr_30060;
});
var cljs$core$async$reduce_$_state_machine__28847__auto____1 = (function (state_30019){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_30019);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e30063){if((e30063 instanceof Object)){
var ex__28850__auto__ = e30063;
var statearr_30064_32673 = state_30019;
(statearr_30064_32673[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32674 = state_30019;
state_30019 = G__32674;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28847__auto__ = function(state_30019){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28847__auto____1.call(this,state_30019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28847__auto____0;
cljs$core$async$reduce_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28847__auto____1;
return cljs$core$async$reduce_$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_30076 = f__29123__auto__();
(statearr_30076[(6)] = c__29122__auto__);

return statearr_30076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

return c__29122__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (1))){
var inst_30085 = cljs.core.async.reduce(f__$1,init,ch);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30090__$1,(2),inst_30085);
} else {
if((state_val_30091 === (2))){
var inst_30087 = (state_30090[(2)]);
var inst_30088 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30087) : f__$1.call(null,inst_30087));
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30090__$1,inst_30088);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28847__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28847__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$transduce_$_state_machine__28847__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$transduce_$_state_machine__28847__auto____1 = (function (state_30090){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_30090);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__28850__auto__ = e30098;
var statearr_30099_32685 = state_30090;
(statearr_30099_32685[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32686 = state_30090;
state_30090 = G__32686;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28847__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28847__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28847__auto____0;
cljs$core$async$transduce_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28847__auto____1;
return cljs$core$async$transduce_$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_30101 = f__29123__auto__();
(statearr_30101[(6)] = c__29122__auto__);

return statearr_30101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

return c__29122__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30111 = arguments.length;
switch (G__30111) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_30142){
var state_val_30144 = (state_30142[(1)]);
if((state_val_30144 === (7))){
var inst_30123 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30147_32691 = state_30142__$1;
(statearr_30147_32691[(2)] = inst_30123);

(statearr_30147_32691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (1))){
var inst_30117 = cljs.core.seq(coll);
var inst_30118 = inst_30117;
var state_30142__$1 = (function (){var statearr_30148 = state_30142;
(statearr_30148[(7)] = inst_30118);

return statearr_30148;
})();
var statearr_30149_32695 = state_30142__$1;
(statearr_30149_32695[(2)] = null);

(statearr_30149_32695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (4))){
var inst_30118 = (state_30142[(7)]);
var inst_30121 = cljs.core.first(inst_30118);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30142__$1,(7),ch,inst_30121);
} else {
if((state_val_30144 === (13))){
var inst_30135 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30151_32696 = state_30142__$1;
(statearr_30151_32696[(2)] = inst_30135);

(statearr_30151_32696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (6))){
var inst_30126 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30126)){
var statearr_30152_32698 = state_30142__$1;
(statearr_30152_32698[(1)] = (8));

} else {
var statearr_30154_32699 = state_30142__$1;
(statearr_30154_32699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (3))){
var inst_30139 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30142__$1,inst_30139);
} else {
if((state_val_30144 === (12))){
var state_30142__$1 = state_30142;
var statearr_30166_32705 = state_30142__$1;
(statearr_30166_32705[(2)] = null);

(statearr_30166_32705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (2))){
var inst_30118 = (state_30142[(7)]);
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30118)){
var statearr_30168_32706 = state_30142__$1;
(statearr_30168_32706[(1)] = (4));

} else {
var statearr_30173_32707 = state_30142__$1;
(statearr_30173_32707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (11))){
var inst_30132 = cljs.core.async.close_BANG_(ch);
var state_30142__$1 = state_30142;
var statearr_30175_32708 = state_30142__$1;
(statearr_30175_32708[(2)] = inst_30132);

(statearr_30175_32708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (9))){
var state_30142__$1 = state_30142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30176_32710 = state_30142__$1;
(statearr_30176_32710[(1)] = (11));

} else {
var statearr_30177_32711 = state_30142__$1;
(statearr_30177_32711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (5))){
var inst_30118 = (state_30142[(7)]);
var state_30142__$1 = state_30142;
var statearr_30178_32712 = state_30142__$1;
(statearr_30178_32712[(2)] = inst_30118);

(statearr_30178_32712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (10))){
var inst_30137 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30179_32713 = state_30142__$1;
(statearr_30179_32713[(2)] = inst_30137);

(statearr_30179_32713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (8))){
var inst_30118 = (state_30142[(7)]);
var inst_30128 = cljs.core.next(inst_30118);
var inst_30118__$1 = inst_30128;
var state_30142__$1 = (function (){var statearr_30180 = state_30142;
(statearr_30180[(7)] = inst_30118__$1);

return statearr_30180;
})();
var statearr_30181_32716 = state_30142__$1;
(statearr_30181_32716[(2)] = null);

(statearr_30181_32716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_30182 = [null,null,null,null,null,null,null,null];
(statearr_30182[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_30182[(1)] = (1));

return statearr_30182;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_30142){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_30142);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e30185){if((e30185 instanceof Object)){
var ex__28850__auto__ = e30185;
var statearr_30186_32724 = state_30142;
(statearr_30186_32724[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32727 = state_30142;
state_30142 = G__32727;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_30190 = f__29123__auto__();
(statearr_30190[(6)] = c__29122__auto__);

return statearr_30190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

return c__29122__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30222 = (function (ch,cs,meta30223){
this.ch = ch;
this.cs = cs;
this.meta30223 = meta30223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30224,meta30223__$1){
var self__ = this;
var _30224__$1 = this;
return (new cljs.core.async.t_cljs$core$async30222(self__.ch,self__.cs,meta30223__$1));
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30224){
var self__ = this;
var _30224__$1 = this;
return self__.meta30223;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30223","meta30223",-1399346265,null)], null);
}));

(cljs.core.async.t_cljs$core$async30222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30222");

(cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30222.
 */
cljs.core.async.__GT_t_cljs$core$async30222 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30222(ch__$1,cs__$1,meta30223){
return (new cljs.core.async.t_cljs$core$async30222(ch__$1,cs__$1,meta30223));
});

}

return (new cljs.core.async.t_cljs$core$async30222(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29122__auto___32771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_30399){
var state_val_30400 = (state_30399[(1)]);
if((state_val_30400 === (7))){
var inst_30393 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30405_32773 = state_30399__$1;
(statearr_30405_32773[(2)] = inst_30393);

(statearr_30405_32773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (20))){
var inst_30285 = (state_30399[(7)]);
var inst_30300 = cljs.core.first(inst_30285);
var inst_30301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30300,(0),null);
var inst_30303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30300,(1),null);
var state_30399__$1 = (function (){var statearr_30407 = state_30399;
(statearr_30407[(8)] = inst_30301);

return statearr_30407;
})();
if(cljs.core.truth_(inst_30303)){
var statearr_30408_32781 = state_30399__$1;
(statearr_30408_32781[(1)] = (22));

} else {
var statearr_30409_32782 = state_30399__$1;
(statearr_30409_32782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (27))){
var inst_30250 = (state_30399[(9)]);
var inst_30343 = (state_30399[(10)]);
var inst_30338 = (state_30399[(11)]);
var inst_30336 = (state_30399[(12)]);
var inst_30343__$1 = cljs.core._nth(inst_30336,inst_30338);
var inst_30344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30343__$1,inst_30250,done);
var state_30399__$1 = (function (){var statearr_30416 = state_30399;
(statearr_30416[(10)] = inst_30343__$1);

return statearr_30416;
})();
if(cljs.core.truth_(inst_30344)){
var statearr_30418_32789 = state_30399__$1;
(statearr_30418_32789[(1)] = (30));

} else {
var statearr_30419_32790 = state_30399__$1;
(statearr_30419_32790[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (1))){
var state_30399__$1 = state_30399;
var statearr_30422_32793 = state_30399__$1;
(statearr_30422_32793[(2)] = null);

(statearr_30422_32793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (24))){
var inst_30285 = (state_30399[(7)]);
var inst_30312 = (state_30399[(2)]);
var inst_30313 = cljs.core.next(inst_30285);
var inst_30261 = inst_30313;
var inst_30262 = null;
var inst_30263 = (0);
var inst_30264 = (0);
var state_30399__$1 = (function (){var statearr_30423 = state_30399;
(statearr_30423[(13)] = inst_30262);

(statearr_30423[(14)] = inst_30263);

(statearr_30423[(15)] = inst_30264);

(statearr_30423[(16)] = inst_30261);

(statearr_30423[(17)] = inst_30312);

return statearr_30423;
})();
var statearr_30425_32797 = state_30399__$1;
(statearr_30425_32797[(2)] = null);

(statearr_30425_32797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (39))){
var state_30399__$1 = state_30399;
var statearr_30433_32802 = state_30399__$1;
(statearr_30433_32802[(2)] = null);

(statearr_30433_32802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (4))){
var inst_30250 = (state_30399[(9)]);
var inst_30250__$1 = (state_30399[(2)]);
var inst_30251 = (inst_30250__$1 == null);
var state_30399__$1 = (function (){var statearr_30434 = state_30399;
(statearr_30434[(9)] = inst_30250__$1);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30251)){
var statearr_30435_32813 = state_30399__$1;
(statearr_30435_32813[(1)] = (5));

} else {
var statearr_30436_32814 = state_30399__$1;
(statearr_30436_32814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (15))){
var inst_30262 = (state_30399[(13)]);
var inst_30263 = (state_30399[(14)]);
var inst_30264 = (state_30399[(15)]);
var inst_30261 = (state_30399[(16)]);
var inst_30280 = (state_30399[(2)]);
var inst_30281 = (inst_30264 + (1));
var tmp30429 = inst_30262;
var tmp30430 = inst_30263;
var tmp30431 = inst_30261;
var inst_30261__$1 = tmp30431;
var inst_30262__$1 = tmp30429;
var inst_30263__$1 = tmp30430;
var inst_30264__$1 = inst_30281;
var state_30399__$1 = (function (){var statearr_30438 = state_30399;
(statearr_30438[(13)] = inst_30262__$1);

(statearr_30438[(14)] = inst_30263__$1);

(statearr_30438[(18)] = inst_30280);

(statearr_30438[(15)] = inst_30264__$1);

(statearr_30438[(16)] = inst_30261__$1);

return statearr_30438;
})();
var statearr_30442_32819 = state_30399__$1;
(statearr_30442_32819[(2)] = null);

(statearr_30442_32819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (21))){
var inst_30316 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30449_32820 = state_30399__$1;
(statearr_30449_32820[(2)] = inst_30316);

(statearr_30449_32820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (31))){
var inst_30343 = (state_30399[(10)]);
var inst_30347 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30343);
var state_30399__$1 = state_30399;
var statearr_30450_32822 = state_30399__$1;
(statearr_30450_32822[(2)] = inst_30347);

(statearr_30450_32822[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (32))){
var inst_30335 = (state_30399[(19)]);
var inst_30337 = (state_30399[(20)]);
var inst_30338 = (state_30399[(11)]);
var inst_30336 = (state_30399[(12)]);
var inst_30349 = (state_30399[(2)]);
var inst_30350 = (inst_30338 + (1));
var tmp30446 = inst_30335;
var tmp30447 = inst_30337;
var tmp30448 = inst_30336;
var inst_30335__$1 = tmp30446;
var inst_30336__$1 = tmp30448;
var inst_30337__$1 = tmp30447;
var inst_30338__$1 = inst_30350;
var state_30399__$1 = (function (){var statearr_30451 = state_30399;
(statearr_30451[(19)] = inst_30335__$1);

(statearr_30451[(20)] = inst_30337__$1);

(statearr_30451[(11)] = inst_30338__$1);

(statearr_30451[(12)] = inst_30336__$1);

(statearr_30451[(21)] = inst_30349);

return statearr_30451;
})();
var statearr_30452_32829 = state_30399__$1;
(statearr_30452_32829[(2)] = null);

(statearr_30452_32829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (40))){
var inst_30362 = (state_30399[(22)]);
var inst_30366 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30362);
var state_30399__$1 = state_30399;
var statearr_30455_32834 = state_30399__$1;
(statearr_30455_32834[(2)] = inst_30366);

(statearr_30455_32834[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (33))){
var inst_30353 = (state_30399[(23)]);
var inst_30355 = cljs.core.chunked_seq_QMARK_(inst_30353);
var state_30399__$1 = state_30399;
if(inst_30355){
var statearr_30459_32841 = state_30399__$1;
(statearr_30459_32841[(1)] = (36));

} else {
var statearr_30462_32842 = state_30399__$1;
(statearr_30462_32842[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (13))){
var inst_30274 = (state_30399[(24)]);
var inst_30277 = cljs.core.async.close_BANG_(inst_30274);
var state_30399__$1 = state_30399;
var statearr_30467_32847 = state_30399__$1;
(statearr_30467_32847[(2)] = inst_30277);

(statearr_30467_32847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (22))){
var inst_30301 = (state_30399[(8)]);
var inst_30309 = cljs.core.async.close_BANG_(inst_30301);
var state_30399__$1 = state_30399;
var statearr_30468_32848 = state_30399__$1;
(statearr_30468_32848[(2)] = inst_30309);

(statearr_30468_32848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (36))){
var inst_30353 = (state_30399[(23)]);
var inst_30357 = cljs.core.chunk_first(inst_30353);
var inst_30358 = cljs.core.chunk_rest(inst_30353);
var inst_30359 = cljs.core.count(inst_30357);
var inst_30335 = inst_30358;
var inst_30336 = inst_30357;
var inst_30337 = inst_30359;
var inst_30338 = (0);
var state_30399__$1 = (function (){var statearr_30469 = state_30399;
(statearr_30469[(19)] = inst_30335);

(statearr_30469[(20)] = inst_30337);

(statearr_30469[(11)] = inst_30338);

(statearr_30469[(12)] = inst_30336);

return statearr_30469;
})();
var statearr_30470_32851 = state_30399__$1;
(statearr_30470_32851[(2)] = null);

(statearr_30470_32851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (41))){
var inst_30353 = (state_30399[(23)]);
var inst_30368 = (state_30399[(2)]);
var inst_30369 = cljs.core.next(inst_30353);
var inst_30335 = inst_30369;
var inst_30336 = null;
var inst_30337 = (0);
var inst_30338 = (0);
var state_30399__$1 = (function (){var statearr_30476 = state_30399;
(statearr_30476[(19)] = inst_30335);

(statearr_30476[(25)] = inst_30368);

(statearr_30476[(20)] = inst_30337);

(statearr_30476[(11)] = inst_30338);

(statearr_30476[(12)] = inst_30336);

return statearr_30476;
})();
var statearr_30477_32867 = state_30399__$1;
(statearr_30477_32867[(2)] = null);

(statearr_30477_32867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (43))){
var state_30399__$1 = state_30399;
var statearr_30479_32869 = state_30399__$1;
(statearr_30479_32869[(2)] = null);

(statearr_30479_32869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (29))){
var inst_30381 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30484_32871 = state_30399__$1;
(statearr_30484_32871[(2)] = inst_30381);

(statearr_30484_32871[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (44))){
var inst_30390 = (state_30399[(2)]);
var state_30399__$1 = (function (){var statearr_30491 = state_30399;
(statearr_30491[(26)] = inst_30390);

return statearr_30491;
})();
var statearr_30493_32879 = state_30399__$1;
(statearr_30493_32879[(2)] = null);

(statearr_30493_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (6))){
var inst_30326 = (state_30399[(27)]);
var inst_30325 = cljs.core.deref(cs);
var inst_30326__$1 = cljs.core.keys(inst_30325);
var inst_30327 = cljs.core.count(inst_30326__$1);
var inst_30328 = cljs.core.reset_BANG_(dctr,inst_30327);
var inst_30334 = cljs.core.seq(inst_30326__$1);
var inst_30335 = inst_30334;
var inst_30336 = null;
var inst_30337 = (0);
var inst_30338 = (0);
var state_30399__$1 = (function (){var statearr_30498 = state_30399;
(statearr_30498[(27)] = inst_30326__$1);

(statearr_30498[(19)] = inst_30335);

(statearr_30498[(20)] = inst_30337);

(statearr_30498[(28)] = inst_30328);

(statearr_30498[(11)] = inst_30338);

(statearr_30498[(12)] = inst_30336);

return statearr_30498;
})();
var statearr_30500_32887 = state_30399__$1;
(statearr_30500_32887[(2)] = null);

(statearr_30500_32887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (28))){
var inst_30335 = (state_30399[(19)]);
var inst_30353 = (state_30399[(23)]);
var inst_30353__$1 = cljs.core.seq(inst_30335);
var state_30399__$1 = (function (){var statearr_30506 = state_30399;
(statearr_30506[(23)] = inst_30353__$1);

return statearr_30506;
})();
if(inst_30353__$1){
var statearr_30509_32898 = state_30399__$1;
(statearr_30509_32898[(1)] = (33));

} else {
var statearr_30511_32899 = state_30399__$1;
(statearr_30511_32899[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (25))){
var inst_30337 = (state_30399[(20)]);
var inst_30338 = (state_30399[(11)]);
var inst_30340 = (inst_30338 < inst_30337);
var inst_30341 = inst_30340;
var state_30399__$1 = state_30399;
if(cljs.core.truth_(inst_30341)){
var statearr_30512_32908 = state_30399__$1;
(statearr_30512_32908[(1)] = (27));

} else {
var statearr_30516_32913 = state_30399__$1;
(statearr_30516_32913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (34))){
var state_30399__$1 = state_30399;
var statearr_30518_32921 = state_30399__$1;
(statearr_30518_32921[(2)] = null);

(statearr_30518_32921[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (17))){
var state_30399__$1 = state_30399;
var statearr_30519_32922 = state_30399__$1;
(statearr_30519_32922[(2)] = null);

(statearr_30519_32922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (3))){
var inst_30395 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30399__$1,inst_30395);
} else {
if((state_val_30400 === (12))){
var inst_30321 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30527_32931 = state_30399__$1;
(statearr_30527_32931[(2)] = inst_30321);

(statearr_30527_32931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (2))){
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30399__$1,(4),ch);
} else {
if((state_val_30400 === (23))){
var state_30399__$1 = state_30399;
var statearr_30529_32932 = state_30399__$1;
(statearr_30529_32932[(2)] = null);

(statearr_30529_32932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (35))){
var inst_30379 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30531_32933 = state_30399__$1;
(statearr_30531_32933[(2)] = inst_30379);

(statearr_30531_32933[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (19))){
var inst_30285 = (state_30399[(7)]);
var inst_30290 = cljs.core.chunk_first(inst_30285);
var inst_30291 = cljs.core.chunk_rest(inst_30285);
var inst_30292 = cljs.core.count(inst_30290);
var inst_30261 = inst_30291;
var inst_30262 = inst_30290;
var inst_30263 = inst_30292;
var inst_30264 = (0);
var state_30399__$1 = (function (){var statearr_30535 = state_30399;
(statearr_30535[(13)] = inst_30262);

(statearr_30535[(14)] = inst_30263);

(statearr_30535[(15)] = inst_30264);

(statearr_30535[(16)] = inst_30261);

return statearr_30535;
})();
var statearr_30538_32939 = state_30399__$1;
(statearr_30538_32939[(2)] = null);

(statearr_30538_32939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (11))){
var inst_30285 = (state_30399[(7)]);
var inst_30261 = (state_30399[(16)]);
var inst_30285__$1 = cljs.core.seq(inst_30261);
var state_30399__$1 = (function (){var statearr_30541 = state_30399;
(statearr_30541[(7)] = inst_30285__$1);

return statearr_30541;
})();
if(inst_30285__$1){
var statearr_30542_32943 = state_30399__$1;
(statearr_30542_32943[(1)] = (16));

} else {
var statearr_30544_32944 = state_30399__$1;
(statearr_30544_32944[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (9))){
var inst_30323 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30545_32946 = state_30399__$1;
(statearr_30545_32946[(2)] = inst_30323);

(statearr_30545_32946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (5))){
var inst_30259 = cljs.core.deref(cs);
var inst_30260 = cljs.core.seq(inst_30259);
var inst_30261 = inst_30260;
var inst_30262 = null;
var inst_30263 = (0);
var inst_30264 = (0);
var state_30399__$1 = (function (){var statearr_30547 = state_30399;
(statearr_30547[(13)] = inst_30262);

(statearr_30547[(14)] = inst_30263);

(statearr_30547[(15)] = inst_30264);

(statearr_30547[(16)] = inst_30261);

return statearr_30547;
})();
var statearr_30548_32953 = state_30399__$1;
(statearr_30548_32953[(2)] = null);

(statearr_30548_32953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (14))){
var state_30399__$1 = state_30399;
var statearr_30549_32954 = state_30399__$1;
(statearr_30549_32954[(2)] = null);

(statearr_30549_32954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (45))){
var inst_30387 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30550_32959 = state_30399__$1;
(statearr_30550_32959[(2)] = inst_30387);

(statearr_30550_32959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (26))){
var inst_30326 = (state_30399[(27)]);
var inst_30383 = (state_30399[(2)]);
var inst_30384 = cljs.core.seq(inst_30326);
var state_30399__$1 = (function (){var statearr_30551 = state_30399;
(statearr_30551[(29)] = inst_30383);

return statearr_30551;
})();
if(inst_30384){
var statearr_30552_32963 = state_30399__$1;
(statearr_30552_32963[(1)] = (42));

} else {
var statearr_30553_32964 = state_30399__$1;
(statearr_30553_32964[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (16))){
var inst_30285 = (state_30399[(7)]);
var inst_30288 = cljs.core.chunked_seq_QMARK_(inst_30285);
var state_30399__$1 = state_30399;
if(inst_30288){
var statearr_30555_32967 = state_30399__$1;
(statearr_30555_32967[(1)] = (19));

} else {
var statearr_30556_32972 = state_30399__$1;
(statearr_30556_32972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (38))){
var inst_30376 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30557_32973 = state_30399__$1;
(statearr_30557_32973[(2)] = inst_30376);

(statearr_30557_32973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (30))){
var state_30399__$1 = state_30399;
var statearr_30559_32975 = state_30399__$1;
(statearr_30559_32975[(2)] = null);

(statearr_30559_32975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (10))){
var inst_30262 = (state_30399[(13)]);
var inst_30264 = (state_30399[(15)]);
var inst_30273 = cljs.core._nth(inst_30262,inst_30264);
var inst_30274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30273,(0),null);
var inst_30275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30273,(1),null);
var state_30399__$1 = (function (){var statearr_30561 = state_30399;
(statearr_30561[(24)] = inst_30274);

return statearr_30561;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30562_32982 = state_30399__$1;
(statearr_30562_32982[(1)] = (13));

} else {
var statearr_30563_32983 = state_30399__$1;
(statearr_30563_32983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (18))){
var inst_30319 = (state_30399[(2)]);
var state_30399__$1 = state_30399;
var statearr_30564_32985 = state_30399__$1;
(statearr_30564_32985[(2)] = inst_30319);

(statearr_30564_32985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (42))){
var state_30399__$1 = state_30399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30399__$1,(45),dchan);
} else {
if((state_val_30400 === (37))){
var inst_30250 = (state_30399[(9)]);
var inst_30362 = (state_30399[(22)]);
var inst_30353 = (state_30399[(23)]);
var inst_30362__$1 = cljs.core.first(inst_30353);
var inst_30363 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30362__$1,inst_30250,done);
var state_30399__$1 = (function (){var statearr_30565 = state_30399;
(statearr_30565[(22)] = inst_30362__$1);

return statearr_30565;
})();
if(cljs.core.truth_(inst_30363)){
var statearr_30566_32992 = state_30399__$1;
(statearr_30566_32992[(1)] = (39));

} else {
var statearr_30568_32993 = state_30399__$1;
(statearr_30568_32993[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30400 === (8))){
var inst_30263 = (state_30399[(14)]);
var inst_30264 = (state_30399[(15)]);
var inst_30266 = (inst_30264 < inst_30263);
var inst_30267 = inst_30266;
var state_30399__$1 = state_30399;
if(cljs.core.truth_(inst_30267)){
var statearr_30570_32997 = state_30399__$1;
(statearr_30570_32997[(1)] = (10));

} else {
var statearr_30572_32998 = state_30399__$1;
(statearr_30572_32998[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28847__auto__ = null;
var cljs$core$async$mult_$_state_machine__28847__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$mult_$_state_machine__28847__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$mult_$_state_machine__28847__auto____1 = (function (state_30399){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_30399);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__28850__auto__ = e30576;
var statearr_30577_33004 = state_30399;
(statearr_30577_33004[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_30399;
state_30399 = G__33008;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28847__auto__ = function(state_30399){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28847__auto____1.call(this,state_30399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28847__auto____0;
cljs$core$async$mult_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28847__auto____1;
return cljs$core$async$mult_$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_30582 = f__29123__auto__();
(statearr_30582[(6)] = c__29122__auto___32771);

return statearr_30582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30589 = arguments.length;
switch (G__30589) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33065 = arguments.length;
var i__4790__auto___33066 = (0);
while(true){
if((i__4790__auto___33066 < len__4789__auto___33065)){
args__4795__auto__.push((arguments[i__4790__auto___33066]));

var G__33067 = (i__4790__auto___33066 + (1));
i__4790__auto___33066 = G__33067;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30638){
var map__30641 = p__30638;
var map__30641__$1 = (((((!((map__30641 == null))))?(((((map__30641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30641):map__30641);
var opts = map__30641__$1;
var statearr_30646_33076 = state;
(statearr_30646_33076[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30650_33079 = state;
(statearr_30650_33079[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30652_33081 = state;
(statearr_30652_33081[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30631){
var G__30632 = cljs.core.first(seq30631);
var seq30631__$1 = cljs.core.next(seq30631);
var G__30633 = cljs.core.first(seq30631__$1);
var seq30631__$2 = cljs.core.next(seq30631__$1);
var G__30634 = cljs.core.first(seq30631__$2);
var seq30631__$3 = cljs.core.next(seq30631__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30632,G__30633,G__30634,seq30631__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30672 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30673){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30673 = meta30673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30674,meta30673__$1){
var self__ = this;
var _30674__$1 = this;
return (new cljs.core.async.t_cljs$core$async30672(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30673__$1));
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30674){
var self__ = this;
var _30674__$1 = this;
return self__.meta30673;
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30672.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30673","meta30673",-73757758,null)], null);
}));

(cljs.core.async.t_cljs$core$async30672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30672");

(cljs.core.async.t_cljs$core$async30672.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30672.
 */
cljs.core.async.__GT_t_cljs$core$async30672 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30672(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30673){
return (new cljs.core.async.t_cljs$core$async30672(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30673));
});

}

return (new cljs.core.async.t_cljs$core$async30672(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29122__auto___33129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_30806){
var state_val_30807 = (state_30806[(1)]);
if((state_val_30807 === (7))){
var inst_30710 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30808_33134 = state_30806__$1;
(statearr_30808_33134[(2)] = inst_30710);

(statearr_30808_33134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (20))){
var inst_30725 = (state_30806[(7)]);
var state_30806__$1 = state_30806;
var statearr_30809_33135 = state_30806__$1;
(statearr_30809_33135[(2)] = inst_30725);

(statearr_30809_33135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (27))){
var state_30806__$1 = state_30806;
var statearr_30814_33139 = state_30806__$1;
(statearr_30814_33139[(2)] = null);

(statearr_30814_33139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (1))){
var inst_30694 = (state_30806[(8)]);
var inst_30694__$1 = calc_state();
var inst_30698 = (inst_30694__$1 == null);
var inst_30699 = cljs.core.not(inst_30698);
var state_30806__$1 = (function (){var statearr_30820 = state_30806;
(statearr_30820[(8)] = inst_30694__$1);

return statearr_30820;
})();
if(inst_30699){
var statearr_30823_33141 = state_30806__$1;
(statearr_30823_33141[(1)] = (2));

} else {
var statearr_30825_33142 = state_30806__$1;
(statearr_30825_33142[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (24))){
var inst_30754 = (state_30806[(9)]);
var inst_30777 = (state_30806[(10)]);
var inst_30763 = (state_30806[(11)]);
var inst_30777__$1 = (inst_30754.cljs$core$IFn$_invoke$arity$1 ? inst_30754.cljs$core$IFn$_invoke$arity$1(inst_30763) : inst_30754.call(null,inst_30763));
var state_30806__$1 = (function (){var statearr_30827 = state_30806;
(statearr_30827[(10)] = inst_30777__$1);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30777__$1)){
var statearr_30828_33143 = state_30806__$1;
(statearr_30828_33143[(1)] = (29));

} else {
var statearr_30832_33144 = state_30806__$1;
(statearr_30832_33144[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (4))){
var inst_30713 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30713)){
var statearr_30835_33146 = state_30806__$1;
(statearr_30835_33146[(1)] = (8));

} else {
var statearr_30836_33148 = state_30806__$1;
(statearr_30836_33148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (15))){
var inst_30744 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30744)){
var statearr_30841_33150 = state_30806__$1;
(statearr_30841_33150[(1)] = (19));

} else {
var statearr_30843_33151 = state_30806__$1;
(statearr_30843_33151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (21))){
var inst_30753 = (state_30806[(12)]);
var inst_30753__$1 = (state_30806[(2)]);
var inst_30754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30806__$1 = (function (){var statearr_30846 = state_30806;
(statearr_30846[(12)] = inst_30753__$1);

(statearr_30846[(9)] = inst_30754);

(statearr_30846[(13)] = inst_30755);

return statearr_30846;
})();
return cljs.core.async.ioc_alts_BANG_(state_30806__$1,(22),inst_30756);
} else {
if((state_val_30807 === (31))){
var inst_30785 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30785)){
var statearr_30852_33158 = state_30806__$1;
(statearr_30852_33158[(1)] = (32));

} else {
var statearr_30854_33162 = state_30806__$1;
(statearr_30854_33162[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (32))){
var inst_30762 = (state_30806[(14)]);
var state_30806__$1 = state_30806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30806__$1,(35),out,inst_30762);
} else {
if((state_val_30807 === (33))){
var inst_30753 = (state_30806[(12)]);
var inst_30725 = inst_30753;
var state_30806__$1 = (function (){var statearr_30856 = state_30806;
(statearr_30856[(7)] = inst_30725);

return statearr_30856;
})();
var statearr_30857_33163 = state_30806__$1;
(statearr_30857_33163[(2)] = null);

(statearr_30857_33163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (13))){
var inst_30725 = (state_30806[(7)]);
var inst_30733 = inst_30725.cljs$lang$protocol_mask$partition0$;
var inst_30734 = (inst_30733 & (64));
var inst_30735 = inst_30725.cljs$core$ISeq$;
var inst_30736 = (cljs.core.PROTOCOL_SENTINEL === inst_30735);
var inst_30737 = ((inst_30734) || (inst_30736));
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30737)){
var statearr_30861_33164 = state_30806__$1;
(statearr_30861_33164[(1)] = (16));

} else {
var statearr_30862_33165 = state_30806__$1;
(statearr_30862_33165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (22))){
var inst_30762 = (state_30806[(14)]);
var inst_30763 = (state_30806[(11)]);
var inst_30761 = (state_30806[(2)]);
var inst_30762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30761,(0),null);
var inst_30763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30761,(1),null);
var inst_30764 = (inst_30762__$1 == null);
var inst_30765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30763__$1,change);
var inst_30766 = ((inst_30764) || (inst_30765));
var state_30806__$1 = (function (){var statearr_30865 = state_30806;
(statearr_30865[(14)] = inst_30762__$1);

(statearr_30865[(11)] = inst_30763__$1);

return statearr_30865;
})();
if(cljs.core.truth_(inst_30766)){
var statearr_30866_33173 = state_30806__$1;
(statearr_30866_33173[(1)] = (23));

} else {
var statearr_30867_33174 = state_30806__$1;
(statearr_30867_33174[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (36))){
var inst_30753 = (state_30806[(12)]);
var inst_30725 = inst_30753;
var state_30806__$1 = (function (){var statearr_30868 = state_30806;
(statearr_30868[(7)] = inst_30725);

return statearr_30868;
})();
var statearr_30869_33177 = state_30806__$1;
(statearr_30869_33177[(2)] = null);

(statearr_30869_33177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (29))){
var inst_30777 = (state_30806[(10)]);
var state_30806__$1 = state_30806;
var statearr_30872_33178 = state_30806__$1;
(statearr_30872_33178[(2)] = inst_30777);

(statearr_30872_33178[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (6))){
var state_30806__$1 = state_30806;
var statearr_30874_33179 = state_30806__$1;
(statearr_30874_33179[(2)] = false);

(statearr_30874_33179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (28))){
var inst_30773 = (state_30806[(2)]);
var inst_30774 = calc_state();
var inst_30725 = inst_30774;
var state_30806__$1 = (function (){var statearr_30875 = state_30806;
(statearr_30875[(15)] = inst_30773);

(statearr_30875[(7)] = inst_30725);

return statearr_30875;
})();
var statearr_30876_33181 = state_30806__$1;
(statearr_30876_33181[(2)] = null);

(statearr_30876_33181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (25))){
var inst_30800 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30881_33183 = state_30806__$1;
(statearr_30881_33183[(2)] = inst_30800);

(statearr_30881_33183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (34))){
var inst_30798 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30883_33184 = state_30806__$1;
(statearr_30883_33184[(2)] = inst_30798);

(statearr_30883_33184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (17))){
var state_30806__$1 = state_30806;
var statearr_30888_33187 = state_30806__$1;
(statearr_30888_33187[(2)] = false);

(statearr_30888_33187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (3))){
var state_30806__$1 = state_30806;
var statearr_30889_33189 = state_30806__$1;
(statearr_30889_33189[(2)] = false);

(statearr_30889_33189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (12))){
var inst_30802 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30806__$1,inst_30802);
} else {
if((state_val_30807 === (2))){
var inst_30694 = (state_30806[(8)]);
var inst_30702 = inst_30694.cljs$lang$protocol_mask$partition0$;
var inst_30703 = (inst_30702 & (64));
var inst_30704 = inst_30694.cljs$core$ISeq$;
var inst_30705 = (cljs.core.PROTOCOL_SENTINEL === inst_30704);
var inst_30706 = ((inst_30703) || (inst_30705));
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30706)){
var statearr_30894_33193 = state_30806__$1;
(statearr_30894_33193[(1)] = (5));

} else {
var statearr_30895_33196 = state_30806__$1;
(statearr_30895_33196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (23))){
var inst_30762 = (state_30806[(14)]);
var inst_30768 = (inst_30762 == null);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30768)){
var statearr_30900_33202 = state_30806__$1;
(statearr_30900_33202[(1)] = (26));

} else {
var statearr_30901_33203 = state_30806__$1;
(statearr_30901_33203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (35))){
var inst_30788 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
if(cljs.core.truth_(inst_30788)){
var statearr_30903_33207 = state_30806__$1;
(statearr_30903_33207[(1)] = (36));

} else {
var statearr_30904_33208 = state_30806__$1;
(statearr_30904_33208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (19))){
var inst_30725 = (state_30806[(7)]);
var inst_30748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30725);
var state_30806__$1 = state_30806;
var statearr_30905_33209 = state_30806__$1;
(statearr_30905_33209[(2)] = inst_30748);

(statearr_30905_33209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (11))){
var inst_30725 = (state_30806[(7)]);
var inst_30730 = (inst_30725 == null);
var inst_30731 = cljs.core.not(inst_30730);
var state_30806__$1 = state_30806;
if(inst_30731){
var statearr_30908_33214 = state_30806__$1;
(statearr_30908_33214[(1)] = (13));

} else {
var statearr_30910_33215 = state_30806__$1;
(statearr_30910_33215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (9))){
var inst_30694 = (state_30806[(8)]);
var state_30806__$1 = state_30806;
var statearr_30913_33218 = state_30806__$1;
(statearr_30913_33218[(2)] = inst_30694);

(statearr_30913_33218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (5))){
var state_30806__$1 = state_30806;
var statearr_30914_33219 = state_30806__$1;
(statearr_30914_33219[(2)] = true);

(statearr_30914_33219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (14))){
var state_30806__$1 = state_30806;
var statearr_30919_33220 = state_30806__$1;
(statearr_30919_33220[(2)] = false);

(statearr_30919_33220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (26))){
var inst_30763 = (state_30806[(11)]);
var inst_30770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30763);
var state_30806__$1 = state_30806;
var statearr_30924_33224 = state_30806__$1;
(statearr_30924_33224[(2)] = inst_30770);

(statearr_30924_33224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (16))){
var state_30806__$1 = state_30806;
var statearr_30928_33225 = state_30806__$1;
(statearr_30928_33225[(2)] = true);

(statearr_30928_33225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (38))){
var inst_30794 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30930_33229 = state_30806__$1;
(statearr_30930_33229[(2)] = inst_30794);

(statearr_30930_33229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (30))){
var inst_30754 = (state_30806[(9)]);
var inst_30755 = (state_30806[(13)]);
var inst_30763 = (state_30806[(11)]);
var inst_30780 = cljs.core.empty_QMARK_(inst_30754);
var inst_30781 = (inst_30755.cljs$core$IFn$_invoke$arity$1 ? inst_30755.cljs$core$IFn$_invoke$arity$1(inst_30763) : inst_30755.call(null,inst_30763));
var inst_30782 = cljs.core.not(inst_30781);
var inst_30783 = ((inst_30780) && (inst_30782));
var state_30806__$1 = state_30806;
var statearr_30935_33232 = state_30806__$1;
(statearr_30935_33232[(2)] = inst_30783);

(statearr_30935_33232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (10))){
var inst_30694 = (state_30806[(8)]);
var inst_30720 = (state_30806[(2)]);
var inst_30721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30720,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30720,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30720,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30725 = inst_30694;
var state_30806__$1 = (function (){var statearr_30938 = state_30806;
(statearr_30938[(16)] = inst_30722);

(statearr_30938[(17)] = inst_30721);

(statearr_30938[(18)] = inst_30724);

(statearr_30938[(7)] = inst_30725);

return statearr_30938;
})();
var statearr_30939_33236 = state_30806__$1;
(statearr_30939_33236[(2)] = null);

(statearr_30939_33236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (18))){
var inst_30741 = (state_30806[(2)]);
var state_30806__$1 = state_30806;
var statearr_30941_33237 = state_30806__$1;
(statearr_30941_33237[(2)] = inst_30741);

(statearr_30941_33237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (37))){
var state_30806__$1 = state_30806;
var statearr_30942_33238 = state_30806__$1;
(statearr_30942_33238[(2)] = null);

(statearr_30942_33238[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30807 === (8))){
var inst_30694 = (state_30806[(8)]);
var inst_30717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30694);
var state_30806__$1 = state_30806;
var statearr_30945_33239 = state_30806__$1;
(statearr_30945_33239[(2)] = inst_30717);

(statearr_30945_33239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28847__auto__ = null;
var cljs$core$async$mix_$_state_machine__28847__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = cljs$core$async$mix_$_state_machine__28847__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var cljs$core$async$mix_$_state_machine__28847__auto____1 = (function (state_30806){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_30806);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e30951){if((e30951 instanceof Object)){
var ex__28850__auto__ = e30951;
var statearr_30954_33260 = state_30806;
(statearr_30954_33260[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_30806;
state_30806 = G__33261;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28847__auto__ = function(state_30806){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28847__auto____1.call(this,state_30806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28847__auto____0;
cljs$core$async$mix_$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28847__auto____1;
return cljs$core$async$mix_$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_30955 = f__29123__auto__();
(statearr_30955[(6)] = c__29122__auto___33129);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30969 = arguments.length;
switch (G__30969) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30977 = arguments.length;
switch (G__30977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30974_SHARP_){
if(cljs.core.truth_((p1__30974_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30974_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30974_SHARP_.call(null,topic)))){
return p1__30974_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30974_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30996){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30996__$1));
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
}));

(cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995");

(cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30995.
 */
cljs.core.async.__GT_t_cljs$core$async30995 = (function cljs$core$async$__GT_t_cljs$core$async30995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30996));
});

}

return (new cljs.core.async.t_cljs$core$async30995(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29122__auto___33336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31102){
var state_val_31103 = (state_31102[(1)]);
if((state_val_31103 === (7))){
var inst_31098 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31109_33337 = state_31102__$1;
(statearr_31109_33337[(2)] = inst_31098);

(statearr_31109_33337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (20))){
var state_31102__$1 = state_31102;
var statearr_31110_33338 = state_31102__$1;
(statearr_31110_33338[(2)] = null);

(statearr_31110_33338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (1))){
var state_31102__$1 = state_31102;
var statearr_31112_33339 = state_31102__$1;
(statearr_31112_33339[(2)] = null);

(statearr_31112_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (24))){
var inst_31080 = (state_31102[(7)]);
var inst_31090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31080);
var state_31102__$1 = state_31102;
var statearr_31117_33340 = state_31102__$1;
(statearr_31117_33340[(2)] = inst_31090);

(statearr_31117_33340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (4))){
var inst_31021 = (state_31102[(8)]);
var inst_31021__$1 = (state_31102[(2)]);
var inst_31022 = (inst_31021__$1 == null);
var state_31102__$1 = (function (){var statearr_31118 = state_31102;
(statearr_31118[(8)] = inst_31021__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31022)){
var statearr_31119_33342 = state_31102__$1;
(statearr_31119_33342[(1)] = (5));

} else {
var statearr_31120_33347 = state_31102__$1;
(statearr_31120_33347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (15))){
var inst_31074 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31123_33348 = state_31102__$1;
(statearr_31123_33348[(2)] = inst_31074);

(statearr_31123_33348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (21))){
var inst_31095 = (state_31102[(2)]);
var state_31102__$1 = (function (){var statearr_31126 = state_31102;
(statearr_31126[(9)] = inst_31095);

return statearr_31126;
})();
var statearr_31129_33357 = state_31102__$1;
(statearr_31129_33357[(2)] = null);

(statearr_31129_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (13))){
var inst_31049 = (state_31102[(10)]);
var inst_31052 = cljs.core.chunked_seq_QMARK_(inst_31049);
var state_31102__$1 = state_31102;
if(inst_31052){
var statearr_31132_33362 = state_31102__$1;
(statearr_31132_33362[(1)] = (16));

} else {
var statearr_31133_33363 = state_31102__$1;
(statearr_31133_33363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (22))){
var inst_31086 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_31086)){
var statearr_31135_33364 = state_31102__$1;
(statearr_31135_33364[(1)] = (23));

} else {
var statearr_31136_33365 = state_31102__$1;
(statearr_31136_33365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (6))){
var inst_31021 = (state_31102[(8)]);
var inst_31082 = (state_31102[(11)]);
var inst_31080 = (state_31102[(7)]);
var inst_31080__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31021) : topic_fn.call(null,inst_31021));
var inst_31081 = cljs.core.deref(mults);
var inst_31082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31081,inst_31080__$1);
var state_31102__$1 = (function (){var statearr_31138 = state_31102;
(statearr_31138[(11)] = inst_31082__$1);

(statearr_31138[(7)] = inst_31080__$1);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31082__$1)){
var statearr_31139_33366 = state_31102__$1;
(statearr_31139_33366[(1)] = (19));

} else {
var statearr_31140_33367 = state_31102__$1;
(statearr_31140_33367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (25))){
var inst_31092 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31143_33368 = state_31102__$1;
(statearr_31143_33368[(2)] = inst_31092);

(statearr_31143_33368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (17))){
var inst_31049 = (state_31102[(10)]);
var inst_31064 = cljs.core.first(inst_31049);
var inst_31066 = cljs.core.async.muxch_STAR_(inst_31064);
var inst_31067 = cljs.core.async.close_BANG_(inst_31066);
var inst_31068 = cljs.core.next(inst_31049);
var inst_31033 = inst_31068;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31102__$1 = (function (){var statearr_31145 = state_31102;
(statearr_31145[(12)] = inst_31033);

(statearr_31145[(13)] = inst_31034);

(statearr_31145[(14)] = inst_31036);

(statearr_31145[(15)] = inst_31035);

(statearr_31145[(16)] = inst_31067);

return statearr_31145;
})();
var statearr_31147_33369 = state_31102__$1;
(statearr_31147_33369[(2)] = null);

(statearr_31147_33369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (3))){
var inst_31100 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31102__$1,inst_31100);
} else {
if((state_val_31103 === (12))){
var inst_31076 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31154_33370 = state_31102__$1;
(statearr_31154_33370[(2)] = inst_31076);

(statearr_31154_33370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (2))){
var state_31102__$1 = state_31102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31102__$1,(4),ch);
} else {
if((state_val_31103 === (23))){
var state_31102__$1 = state_31102;
var statearr_31160_33371 = state_31102__$1;
(statearr_31160_33371[(2)] = null);

(statearr_31160_33371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (19))){
var inst_31021 = (state_31102[(8)]);
var inst_31082 = (state_31102[(11)]);
var inst_31084 = cljs.core.async.muxch_STAR_(inst_31082);
var state_31102__$1 = state_31102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31102__$1,(22),inst_31084,inst_31021);
} else {
if((state_val_31103 === (11))){
var inst_31033 = (state_31102[(12)]);
var inst_31049 = (state_31102[(10)]);
var inst_31049__$1 = cljs.core.seq(inst_31033);
var state_31102__$1 = (function (){var statearr_31166 = state_31102;
(statearr_31166[(10)] = inst_31049__$1);

return statearr_31166;
})();
if(inst_31049__$1){
var statearr_31167_33373 = state_31102__$1;
(statearr_31167_33373[(1)] = (13));

} else {
var statearr_31168_33374 = state_31102__$1;
(statearr_31168_33374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (9))){
var inst_31078 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31171_33375 = state_31102__$1;
(statearr_31171_33375[(2)] = inst_31078);

(statearr_31171_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (5))){
var inst_31030 = cljs.core.deref(mults);
var inst_31031 = cljs.core.vals(inst_31030);
var inst_31032 = cljs.core.seq(inst_31031);
var inst_31033 = inst_31032;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31102__$1 = (function (){var statearr_31174 = state_31102;
(statearr_31174[(12)] = inst_31033);

(statearr_31174[(13)] = inst_31034);

(statearr_31174[(14)] = inst_31036);

(statearr_31174[(15)] = inst_31035);

return statearr_31174;
})();
var statearr_31179_33376 = state_31102__$1;
(statearr_31179_33376[(2)] = null);

(statearr_31179_33376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (14))){
var state_31102__$1 = state_31102;
var statearr_31184_33377 = state_31102__$1;
(statearr_31184_33377[(2)] = null);

(statearr_31184_33377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (16))){
var inst_31049 = (state_31102[(10)]);
var inst_31054 = cljs.core.chunk_first(inst_31049);
var inst_31055 = cljs.core.chunk_rest(inst_31049);
var inst_31056 = cljs.core.count(inst_31054);
var inst_31033 = inst_31055;
var inst_31034 = inst_31054;
var inst_31035 = inst_31056;
var inst_31036 = (0);
var state_31102__$1 = (function (){var statearr_31193 = state_31102;
(statearr_31193[(12)] = inst_31033);

(statearr_31193[(13)] = inst_31034);

(statearr_31193[(14)] = inst_31036);

(statearr_31193[(15)] = inst_31035);

return statearr_31193;
})();
var statearr_31198_33381 = state_31102__$1;
(statearr_31198_33381[(2)] = null);

(statearr_31198_33381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (10))){
var inst_31033 = (state_31102[(12)]);
var inst_31034 = (state_31102[(13)]);
var inst_31036 = (state_31102[(14)]);
var inst_31035 = (state_31102[(15)]);
var inst_31043 = cljs.core._nth(inst_31034,inst_31036);
var inst_31044 = cljs.core.async.muxch_STAR_(inst_31043);
var inst_31045 = cljs.core.async.close_BANG_(inst_31044);
var inst_31046 = (inst_31036 + (1));
var tmp31180 = inst_31033;
var tmp31181 = inst_31034;
var tmp31182 = inst_31035;
var inst_31033__$1 = tmp31180;
var inst_31034__$1 = tmp31181;
var inst_31035__$1 = tmp31182;
var inst_31036__$1 = inst_31046;
var state_31102__$1 = (function (){var statearr_31204 = state_31102;
(statearr_31204[(12)] = inst_31033__$1);

(statearr_31204[(17)] = inst_31045);

(statearr_31204[(13)] = inst_31034__$1);

(statearr_31204[(14)] = inst_31036__$1);

(statearr_31204[(15)] = inst_31035__$1);

return statearr_31204;
})();
var statearr_31205_33384 = state_31102__$1;
(statearr_31205_33384[(2)] = null);

(statearr_31205_33384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (18))){
var inst_31071 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31208_33387 = state_31102__$1;
(statearr_31208_33387[(2)] = inst_31071);

(statearr_31208_33387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (8))){
var inst_31036 = (state_31102[(14)]);
var inst_31035 = (state_31102[(15)]);
var inst_31040 = (inst_31036 < inst_31035);
var inst_31041 = inst_31040;
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_31041)){
var statearr_31210_33391 = state_31102__$1;
(statearr_31210_33391[(1)] = (10));

} else {
var statearr_31211_33392 = state_31102__$1;
(statearr_31211_33392[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31102){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31102);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31217){if((e31217 instanceof Object)){
var ex__28850__auto__ = e31217;
var statearr_31221_33400 = state_31102;
(statearr_31221_33400[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33401 = state_31102;
state_31102 = G__33401;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31225 = f__29123__auto__();
(statearr_31225[(6)] = c__29122__auto___33336);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31230 = arguments.length;
switch (G__31230) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31241 = arguments.length;
switch (G__31241) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31254 = arguments.length;
switch (G__31254) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29122__auto___33431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (7))){
var state_31309__$1 = state_31309;
var statearr_31316_33432 = state_31309__$1;
(statearr_31316_33432[(2)] = null);

(statearr_31316_33432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (1))){
var state_31309__$1 = state_31309;
var statearr_31318_33433 = state_31309__$1;
(statearr_31318_33433[(2)] = null);

(statearr_31318_33433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (4))){
var inst_31267 = (state_31309[(7)]);
var inst_31269 = (inst_31267 < cnt);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31269)){
var statearr_31321_33434 = state_31309__$1;
(statearr_31321_33434[(1)] = (6));

} else {
var statearr_31322_33435 = state_31309__$1;
(statearr_31322_33435[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (15))){
var inst_31303 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31326_33436 = state_31309__$1;
(statearr_31326_33436[(2)] = inst_31303);

(statearr_31326_33436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (13))){
var inst_31296 = cljs.core.async.close_BANG_(out);
var state_31309__$1 = state_31309;
var statearr_31327_33440 = state_31309__$1;
(statearr_31327_33440[(2)] = inst_31296);

(statearr_31327_33440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (6))){
var state_31309__$1 = state_31309;
var statearr_31329_33441 = state_31309__$1;
(statearr_31329_33441[(2)] = null);

(statearr_31329_33441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (3))){
var inst_31305 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31309__$1,inst_31305);
} else {
if((state_val_31310 === (12))){
var inst_31293 = (state_31309[(8)]);
var inst_31293__$1 = (state_31309[(2)]);
var inst_31294 = cljs.core.some(cljs.core.nil_QMARK_,inst_31293__$1);
var state_31309__$1 = (function (){var statearr_31342 = state_31309;
(statearr_31342[(8)] = inst_31293__$1);

return statearr_31342;
})();
if(cljs.core.truth_(inst_31294)){
var statearr_31344_33448 = state_31309__$1;
(statearr_31344_33448[(1)] = (13));

} else {
var statearr_31345_33449 = state_31309__$1;
(statearr_31345_33449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (2))){
var inst_31266 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31267 = (0);
var state_31309__$1 = (function (){var statearr_31350 = state_31309;
(statearr_31350[(7)] = inst_31267);

(statearr_31350[(9)] = inst_31266);

return statearr_31350;
})();
var statearr_31355_33453 = state_31309__$1;
(statearr_31355_33453[(2)] = null);

(statearr_31355_33453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (11))){
var inst_31267 = (state_31309[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31309,(10),Object,null,(9));
var inst_31279 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31267) : chs__$1.call(null,inst_31267));
var inst_31280 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31267) : done.call(null,inst_31267));
var inst_31281 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31279,inst_31280);
var state_31309__$1 = state_31309;
var statearr_31364_33455 = state_31309__$1;
(statearr_31364_33455[(2)] = inst_31281);


cljs.core.async.impl.ioc_helpers.process_exception(state_31309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (9))){
var inst_31267 = (state_31309[(7)]);
var inst_31283 = (state_31309[(2)]);
var inst_31285 = (inst_31267 + (1));
var inst_31267__$1 = inst_31285;
var state_31309__$1 = (function (){var statearr_31367 = state_31309;
(statearr_31367[(7)] = inst_31267__$1);

(statearr_31367[(10)] = inst_31283);

return statearr_31367;
})();
var statearr_31370_33459 = state_31309__$1;
(statearr_31370_33459[(2)] = null);

(statearr_31370_33459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (5))){
var inst_31291 = (state_31309[(2)]);
var state_31309__$1 = (function (){var statearr_31376 = state_31309;
(statearr_31376[(11)] = inst_31291);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31309__$1,(12),dchan);
} else {
if((state_val_31310 === (14))){
var inst_31293 = (state_31309[(8)]);
var inst_31298 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31293);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31309__$1,(16),out,inst_31298);
} else {
if((state_val_31310 === (16))){
var inst_31300 = (state_31309[(2)]);
var state_31309__$1 = (function (){var statearr_31381 = state_31309;
(statearr_31381[(12)] = inst_31300);

return statearr_31381;
})();
var statearr_31382_33460 = state_31309__$1;
(statearr_31382_33460[(2)] = null);

(statearr_31382_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (10))){
var inst_31274 = (state_31309[(2)]);
var inst_31275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31309__$1 = (function (){var statearr_31383 = state_31309;
(statearr_31383[(13)] = inst_31274);

return statearr_31383;
})();
var statearr_31385_33467 = state_31309__$1;
(statearr_31385_33467[(2)] = inst_31275);


cljs.core.async.impl.ioc_helpers.process_exception(state_31309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (8))){
var inst_31289 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31388_33468 = state_31309__$1;
(statearr_31388_33468[(2)] = inst_31289);

(statearr_31388_33468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31390[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31390[(1)] = (1));

return statearr_31390;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31309){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31309);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31391){if((e31391 instanceof Object)){
var ex__28850__auto__ = e31391;
var statearr_31394_33470 = state_31309;
(statearr_31394_33470[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33471 = state_31309;
state_31309 = G__33471;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31396 = f__29123__auto__();
(statearr_31396[(6)] = c__29122__auto___33431);

return statearr_31396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31403 = arguments.length;
switch (G__31403) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31442){
var state_val_31443 = (state_31442[(1)]);
if((state_val_31443 === (7))){
var inst_31419 = (state_31442[(7)]);
var inst_31420 = (state_31442[(8)]);
var inst_31419__$1 = (state_31442[(2)]);
var inst_31420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31419__$1,(0),null);
var inst_31421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31419__$1,(1),null);
var inst_31422 = (inst_31420__$1 == null);
var state_31442__$1 = (function (){var statearr_31449 = state_31442;
(statearr_31449[(7)] = inst_31419__$1);

(statearr_31449[(8)] = inst_31420__$1);

(statearr_31449[(9)] = inst_31421);

return statearr_31449;
})();
if(cljs.core.truth_(inst_31422)){
var statearr_31450_33487 = state_31442__$1;
(statearr_31450_33487[(1)] = (8));

} else {
var statearr_31453_33488 = state_31442__$1;
(statearr_31453_33488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (1))){
var inst_31406 = cljs.core.vec(chs);
var inst_31408 = inst_31406;
var state_31442__$1 = (function (){var statearr_31455 = state_31442;
(statearr_31455[(10)] = inst_31408);

return statearr_31455;
})();
var statearr_31456_33490 = state_31442__$1;
(statearr_31456_33490[(2)] = null);

(statearr_31456_33490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (4))){
var inst_31408 = (state_31442[(10)]);
var state_31442__$1 = state_31442;
return cljs.core.async.ioc_alts_BANG_(state_31442__$1,(7),inst_31408);
} else {
if((state_val_31443 === (6))){
var inst_31438 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31458_33492 = state_31442__$1;
(statearr_31458_33492[(2)] = inst_31438);

(statearr_31458_33492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (3))){
var inst_31440 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31442__$1,inst_31440);
} else {
if((state_val_31443 === (2))){
var inst_31408 = (state_31442[(10)]);
var inst_31410 = cljs.core.count(inst_31408);
var inst_31411 = (inst_31410 > (0));
var state_31442__$1 = state_31442;
if(cljs.core.truth_(inst_31411)){
var statearr_31464_33493 = state_31442__$1;
(statearr_31464_33493[(1)] = (4));

} else {
var statearr_31465_33494 = state_31442__$1;
(statearr_31465_33494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (11))){
var inst_31408 = (state_31442[(10)]);
var inst_31430 = (state_31442[(2)]);
var tmp31459 = inst_31408;
var inst_31408__$1 = tmp31459;
var state_31442__$1 = (function (){var statearr_31472 = state_31442;
(statearr_31472[(10)] = inst_31408__$1);

(statearr_31472[(11)] = inst_31430);

return statearr_31472;
})();
var statearr_31473_33497 = state_31442__$1;
(statearr_31473_33497[(2)] = null);

(statearr_31473_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (9))){
var inst_31420 = (state_31442[(8)]);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31442__$1,(11),out,inst_31420);
} else {
if((state_val_31443 === (5))){
var inst_31435 = cljs.core.async.close_BANG_(out);
var state_31442__$1 = state_31442;
var statearr_31481_33499 = state_31442__$1;
(statearr_31481_33499[(2)] = inst_31435);

(statearr_31481_33499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (10))){
var inst_31433 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31486_33500 = state_31442__$1;
(statearr_31486_33500[(2)] = inst_31433);

(statearr_31486_33500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (8))){
var inst_31419 = (state_31442[(7)]);
var inst_31408 = (state_31442[(10)]);
var inst_31420 = (state_31442[(8)]);
var inst_31421 = (state_31442[(9)]);
var inst_31424 = (function (){var cs = inst_31408;
var vec__31415 = inst_31419;
var v = inst_31420;
var c = inst_31421;
return (function (p1__31398_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31398_SHARP_);
});
})();
var inst_31426 = cljs.core.filterv(inst_31424,inst_31408);
var inst_31408__$1 = inst_31426;
var state_31442__$1 = (function (){var statearr_31495 = state_31442;
(statearr_31495[(10)] = inst_31408__$1);

return statearr_31495;
})();
var statearr_31497_33502 = state_31442__$1;
(statearr_31497_33502[(2)] = null);

(statearr_31497_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31506[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31506[(1)] = (1));

return statearr_31506;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31442){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31442);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31507){if((e31507 instanceof Object)){
var ex__28850__auto__ = e31507;
var statearr_31513_33503 = state_31442;
(statearr_31513_33503[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33506 = state_31442;
state_31442 = G__33506;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31516 = f__29123__auto__();
(statearr_31516[(6)] = c__29122__auto___33473);

return statearr_31516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31524 = arguments.length;
switch (G__31524) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31553){
var state_val_31554 = (state_31553[(1)]);
if((state_val_31554 === (7))){
var inst_31534 = (state_31553[(7)]);
var inst_31534__$1 = (state_31553[(2)]);
var inst_31535 = (inst_31534__$1 == null);
var inst_31536 = cljs.core.not(inst_31535);
var state_31553__$1 = (function (){var statearr_31558 = state_31553;
(statearr_31558[(7)] = inst_31534__$1);

return statearr_31558;
})();
if(inst_31536){
var statearr_31559_33524 = state_31553__$1;
(statearr_31559_33524[(1)] = (8));

} else {
var statearr_31560_33525 = state_31553__$1;
(statearr_31560_33525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (1))){
var inst_31529 = (0);
var state_31553__$1 = (function (){var statearr_31564 = state_31553;
(statearr_31564[(8)] = inst_31529);

return statearr_31564;
})();
var statearr_31565_33529 = state_31553__$1;
(statearr_31565_33529[(2)] = null);

(statearr_31565_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (4))){
var state_31553__$1 = state_31553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31553__$1,(7),ch);
} else {
if((state_val_31554 === (6))){
var inst_31547 = (state_31553[(2)]);
var state_31553__$1 = state_31553;
var statearr_31566_33533 = state_31553__$1;
(statearr_31566_33533[(2)] = inst_31547);

(statearr_31566_33533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (3))){
var inst_31549 = (state_31553[(2)]);
var inst_31551 = cljs.core.async.close_BANG_(out);
var state_31553__$1 = (function (){var statearr_31567 = state_31553;
(statearr_31567[(9)] = inst_31549);

return statearr_31567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31553__$1,inst_31551);
} else {
if((state_val_31554 === (2))){
var inst_31529 = (state_31553[(8)]);
var inst_31531 = (inst_31529 < n);
var state_31553__$1 = state_31553;
if(cljs.core.truth_(inst_31531)){
var statearr_31568_33534 = state_31553__$1;
(statearr_31568_33534[(1)] = (4));

} else {
var statearr_31569_33536 = state_31553__$1;
(statearr_31569_33536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (11))){
var inst_31529 = (state_31553[(8)]);
var inst_31539 = (state_31553[(2)]);
var inst_31540 = (inst_31529 + (1));
var inst_31529__$1 = inst_31540;
var state_31553__$1 = (function (){var statearr_31570 = state_31553;
(statearr_31570[(8)] = inst_31529__$1);

(statearr_31570[(10)] = inst_31539);

return statearr_31570;
})();
var statearr_31571_33541 = state_31553__$1;
(statearr_31571_33541[(2)] = null);

(statearr_31571_33541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (9))){
var state_31553__$1 = state_31553;
var statearr_31575_33543 = state_31553__$1;
(statearr_31575_33543[(2)] = null);

(statearr_31575_33543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (5))){
var state_31553__$1 = state_31553;
var statearr_31576_33544 = state_31553__$1;
(statearr_31576_33544[(2)] = null);

(statearr_31576_33544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (10))){
var inst_31544 = (state_31553[(2)]);
var state_31553__$1 = state_31553;
var statearr_31577_33545 = state_31553__$1;
(statearr_31577_33545[(2)] = inst_31544);

(statearr_31577_33545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (8))){
var inst_31534 = (state_31553[(7)]);
var state_31553__$1 = state_31553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31553__$1,(11),out,inst_31534);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31582[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31582[(1)] = (1));

return statearr_31582;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31553){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31553);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object)){
var ex__28850__auto__ = e31583;
var statearr_31584_33549 = state_31553;
(statearr_31584_33549[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33550 = state_31553;
state_31553 = G__33550;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31585 = f__29123__auto__();
(statearr_31585[(6)] = c__29122__auto___33519);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31589 = (function (f,ch,meta31590){
this.f = f;
this.ch = ch;
this.meta31590 = meta31590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31591,meta31590__$1){
var self__ = this;
var _31591__$1 = this;
return (new cljs.core.async.t_cljs$core$async31589(self__.f,self__.ch,meta31590__$1));
}));

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31591){
var self__ = this;
var _31591__$1 = this;
return self__.meta31590;
}));

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31592 = (function (f,ch,meta31590,_,fn1,meta31593){
this.f = f;
this.ch = ch;
this.meta31590 = meta31590;
this._ = _;
this.fn1 = fn1;
this.meta31593 = meta31593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31594,meta31593__$1){
var self__ = this;
var _31594__$1 = this;
return (new cljs.core.async.t_cljs$core$async31592(self__.f,self__.ch,self__.meta31590,self__._,self__.fn1,meta31593__$1));
}));

(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31594){
var self__ = this;
var _31594__$1 = this;
return self__.meta31593;
}));

(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31587_SHARP_){
var G__31600 = (((p1__31587_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31587_SHARP_) : self__.f.call(null,p1__31587_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31600) : f1.call(null,G__31600));
});
}));

(cljs.core.async.t_cljs$core$async31592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31590","meta31590",-398177588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31589","cljs.core.async/t_cljs$core$async31589",435698273,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31593","meta31593",-275865882,null)], null);
}));

(cljs.core.async.t_cljs$core$async31592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31592");

(cljs.core.async.t_cljs$core$async31592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31592.
 */
cljs.core.async.__GT_t_cljs$core$async31592 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31592(f__$1,ch__$1,meta31590__$1,___$2,fn1__$1,meta31593){
return (new cljs.core.async.t_cljs$core$async31592(f__$1,ch__$1,meta31590__$1,___$2,fn1__$1,meta31593));
});

}

return (new cljs.core.async.t_cljs$core$async31592(self__.f,self__.ch,self__.meta31590,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31605 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31605) : self__.f.call(null,G__31605));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31589.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31590","meta31590",-398177588,null)], null);
}));

(cljs.core.async.t_cljs$core$async31589.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31589");

(cljs.core.async.t_cljs$core$async31589.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31589");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31589.
 */
cljs.core.async.__GT_t_cljs$core$async31589 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31589(f__$1,ch__$1,meta31590){
return (new cljs.core.async.t_cljs$core$async31589(f__$1,ch__$1,meta31590));
});

}

return (new cljs.core.async.t_cljs$core$async31589(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31609 = (function (f,ch,meta31610){
this.f = f;
this.ch = ch;
this.meta31610 = meta31610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31611,meta31610__$1){
var self__ = this;
var _31611__$1 = this;
return (new cljs.core.async.t_cljs$core$async31609(self__.f,self__.ch,meta31610__$1));
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31611){
var self__ = this;
var _31611__$1 = this;
return self__.meta31610;
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31610","meta31610",1192838244,null)], null);
}));

(cljs.core.async.t_cljs$core$async31609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31609");

(cljs.core.async.t_cljs$core$async31609.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31609.
 */
cljs.core.async.__GT_t_cljs$core$async31609 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31609(f__$1,ch__$1,meta31610){
return (new cljs.core.async.t_cljs$core$async31609(f__$1,ch__$1,meta31610));
});

}

return (new cljs.core.async.t_cljs$core$async31609(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31625 = (function (p,ch,meta31626){
this.p = p;
this.ch = ch;
this.meta31626 = meta31626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31627,meta31626__$1){
var self__ = this;
var _31627__$1 = this;
return (new cljs.core.async.t_cljs$core$async31625(self__.p,self__.ch,meta31626__$1));
}));

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31627){
var self__ = this;
var _31627__$1 = this;
return self__.meta31626;
}));

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31626","meta31626",-939883633,null)], null);
}));

(cljs.core.async.t_cljs$core$async31625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31625");

(cljs.core.async.t_cljs$core$async31625.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31625.
 */
cljs.core.async.__GT_t_cljs$core$async31625 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31625(p__$1,ch__$1,meta31626){
return (new cljs.core.async.t_cljs$core$async31625(p__$1,ch__$1,meta31626));
});

}

return (new cljs.core.async.t_cljs$core$async31625(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31637 = arguments.length;
switch (G__31637) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (7))){
var inst_31657 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31663_33615 = state_31661__$1;
(statearr_31663_33615[(2)] = inst_31657);

(statearr_31663_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (1))){
var state_31661__$1 = state_31661;
var statearr_31664_33617 = state_31661__$1;
(statearr_31664_33617[(2)] = null);

(statearr_31664_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (4))){
var inst_31643 = (state_31661[(7)]);
var inst_31643__$1 = (state_31661[(2)]);
var inst_31644 = (inst_31643__$1 == null);
var state_31661__$1 = (function (){var statearr_31665 = state_31661;
(statearr_31665[(7)] = inst_31643__$1);

return statearr_31665;
})();
if(cljs.core.truth_(inst_31644)){
var statearr_31666_33621 = state_31661__$1;
(statearr_31666_33621[(1)] = (5));

} else {
var statearr_31667_33622 = state_31661__$1;
(statearr_31667_33622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (6))){
var inst_31643 = (state_31661[(7)]);
var inst_31648 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31643) : p.call(null,inst_31643));
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31648)){
var statearr_31668_33623 = state_31661__$1;
(statearr_31668_33623[(1)] = (8));

} else {
var statearr_31669_33624 = state_31661__$1;
(statearr_31669_33624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (3))){
var inst_31659 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31661__$1,inst_31659);
} else {
if((state_val_31662 === (2))){
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31661__$1,(4),ch);
} else {
if((state_val_31662 === (11))){
var inst_31651 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31670_33628 = state_31661__$1;
(statearr_31670_33628[(2)] = inst_31651);

(statearr_31670_33628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (9))){
var state_31661__$1 = state_31661;
var statearr_31671_33629 = state_31661__$1;
(statearr_31671_33629[(2)] = null);

(statearr_31671_33629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (5))){
var inst_31646 = cljs.core.async.close_BANG_(out);
var state_31661__$1 = state_31661;
var statearr_31672_33632 = state_31661__$1;
(statearr_31672_33632[(2)] = inst_31646);

(statearr_31672_33632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (10))){
var inst_31654 = (state_31661[(2)]);
var state_31661__$1 = (function (){var statearr_31674 = state_31661;
(statearr_31674[(8)] = inst_31654);

return statearr_31674;
})();
var statearr_31675_33633 = state_31661__$1;
(statearr_31675_33633[(2)] = null);

(statearr_31675_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (8))){
var inst_31643 = (state_31661[(7)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31661__$1,(11),out,inst_31643);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null,null,null];
(statearr_31676[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31661){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31661);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__28850__auto__ = e31677;
var statearr_31678_33644 = state_31661;
(statearr_31678_33644[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33646 = state_31661;
state_31661 = G__33646;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31679 = f__29123__auto__();
(statearr_31679[(6)] = c__29122__auto___33611);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31684 = arguments.length;
switch (G__31684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31755){
var state_val_31756 = (state_31755[(1)]);
if((state_val_31756 === (7))){
var inst_31751 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31757_33655 = state_31755__$1;
(statearr_31757_33655[(2)] = inst_31751);

(statearr_31757_33655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (20))){
var inst_31721 = (state_31755[(7)]);
var inst_31732 = (state_31755[(2)]);
var inst_31733 = cljs.core.next(inst_31721);
var inst_31707 = inst_31733;
var inst_31708 = null;
var inst_31709 = (0);
var inst_31710 = (0);
var state_31755__$1 = (function (){var statearr_31758 = state_31755;
(statearr_31758[(8)] = inst_31707);

(statearr_31758[(9)] = inst_31708);

(statearr_31758[(10)] = inst_31710);

(statearr_31758[(11)] = inst_31732);

(statearr_31758[(12)] = inst_31709);

return statearr_31758;
})();
var statearr_31759_33663 = state_31755__$1;
(statearr_31759_33663[(2)] = null);

(statearr_31759_33663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (1))){
var state_31755__$1 = state_31755;
var statearr_31760_33671 = state_31755__$1;
(statearr_31760_33671[(2)] = null);

(statearr_31760_33671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (4))){
var inst_31695 = (state_31755[(13)]);
var inst_31695__$1 = (state_31755[(2)]);
var inst_31696 = (inst_31695__$1 == null);
var state_31755__$1 = (function (){var statearr_31761 = state_31755;
(statearr_31761[(13)] = inst_31695__$1);

return statearr_31761;
})();
if(cljs.core.truth_(inst_31696)){
var statearr_31762_33683 = state_31755__$1;
(statearr_31762_33683[(1)] = (5));

} else {
var statearr_31763_33684 = state_31755__$1;
(statearr_31763_33684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (15))){
var state_31755__$1 = state_31755;
var statearr_31768_33685 = state_31755__$1;
(statearr_31768_33685[(2)] = null);

(statearr_31768_33685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (21))){
var state_31755__$1 = state_31755;
var statearr_31769_33686 = state_31755__$1;
(statearr_31769_33686[(2)] = null);

(statearr_31769_33686[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (13))){
var inst_31707 = (state_31755[(8)]);
var inst_31708 = (state_31755[(9)]);
var inst_31710 = (state_31755[(10)]);
var inst_31709 = (state_31755[(12)]);
var inst_31717 = (state_31755[(2)]);
var inst_31718 = (inst_31710 + (1));
var tmp31765 = inst_31707;
var tmp31766 = inst_31708;
var tmp31767 = inst_31709;
var inst_31707__$1 = tmp31765;
var inst_31708__$1 = tmp31766;
var inst_31709__$1 = tmp31767;
var inst_31710__$1 = inst_31718;
var state_31755__$1 = (function (){var statearr_31770 = state_31755;
(statearr_31770[(8)] = inst_31707__$1);

(statearr_31770[(9)] = inst_31708__$1);

(statearr_31770[(10)] = inst_31710__$1);

(statearr_31770[(12)] = inst_31709__$1);

(statearr_31770[(14)] = inst_31717);

return statearr_31770;
})();
var statearr_31771_33690 = state_31755__$1;
(statearr_31771_33690[(2)] = null);

(statearr_31771_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (22))){
var state_31755__$1 = state_31755;
var statearr_31772_33693 = state_31755__$1;
(statearr_31772_33693[(2)] = null);

(statearr_31772_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (6))){
var inst_31695 = (state_31755[(13)]);
var inst_31705 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31695) : f.call(null,inst_31695));
var inst_31706 = cljs.core.seq(inst_31705);
var inst_31707 = inst_31706;
var inst_31708 = null;
var inst_31709 = (0);
var inst_31710 = (0);
var state_31755__$1 = (function (){var statearr_31773 = state_31755;
(statearr_31773[(8)] = inst_31707);

(statearr_31773[(9)] = inst_31708);

(statearr_31773[(10)] = inst_31710);

(statearr_31773[(12)] = inst_31709);

return statearr_31773;
})();
var statearr_31774_33698 = state_31755__$1;
(statearr_31774_33698[(2)] = null);

(statearr_31774_33698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (17))){
var inst_31721 = (state_31755[(7)]);
var inst_31725 = cljs.core.chunk_first(inst_31721);
var inst_31726 = cljs.core.chunk_rest(inst_31721);
var inst_31727 = cljs.core.count(inst_31725);
var inst_31707 = inst_31726;
var inst_31708 = inst_31725;
var inst_31709 = inst_31727;
var inst_31710 = (0);
var state_31755__$1 = (function (){var statearr_31778 = state_31755;
(statearr_31778[(8)] = inst_31707);

(statearr_31778[(9)] = inst_31708);

(statearr_31778[(10)] = inst_31710);

(statearr_31778[(12)] = inst_31709);

return statearr_31778;
})();
var statearr_31779_33699 = state_31755__$1;
(statearr_31779_33699[(2)] = null);

(statearr_31779_33699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (3))){
var inst_31753 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31755__$1,inst_31753);
} else {
if((state_val_31756 === (12))){
var inst_31741 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31780_33700 = state_31755__$1;
(statearr_31780_33700[(2)] = inst_31741);

(statearr_31780_33700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (2))){
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31755__$1,(4),in$);
} else {
if((state_val_31756 === (23))){
var inst_31749 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31782_33701 = state_31755__$1;
(statearr_31782_33701[(2)] = inst_31749);

(statearr_31782_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (19))){
var inst_31736 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31783_33708 = state_31755__$1;
(statearr_31783_33708[(2)] = inst_31736);

(statearr_31783_33708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (11))){
var inst_31707 = (state_31755[(8)]);
var inst_31721 = (state_31755[(7)]);
var inst_31721__$1 = cljs.core.seq(inst_31707);
var state_31755__$1 = (function (){var statearr_31788 = state_31755;
(statearr_31788[(7)] = inst_31721__$1);

return statearr_31788;
})();
if(inst_31721__$1){
var statearr_31795_33710 = state_31755__$1;
(statearr_31795_33710[(1)] = (14));

} else {
var statearr_31800_33711 = state_31755__$1;
(statearr_31800_33711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (9))){
var inst_31743 = (state_31755[(2)]);
var inst_31744 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31755__$1 = (function (){var statearr_31802 = state_31755;
(statearr_31802[(15)] = inst_31743);

return statearr_31802;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31804_33713 = state_31755__$1;
(statearr_31804_33713[(1)] = (21));

} else {
var statearr_31805_33715 = state_31755__$1;
(statearr_31805_33715[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (5))){
var inst_31698 = cljs.core.async.close_BANG_(out);
var state_31755__$1 = state_31755;
var statearr_31806_33716 = state_31755__$1;
(statearr_31806_33716[(2)] = inst_31698);

(statearr_31806_33716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (14))){
var inst_31721 = (state_31755[(7)]);
var inst_31723 = cljs.core.chunked_seq_QMARK_(inst_31721);
var state_31755__$1 = state_31755;
if(inst_31723){
var statearr_31807_33719 = state_31755__$1;
(statearr_31807_33719[(1)] = (17));

} else {
var statearr_31808_33720 = state_31755__$1;
(statearr_31808_33720[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (16))){
var inst_31739 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31809_33722 = state_31755__$1;
(statearr_31809_33722[(2)] = inst_31739);

(statearr_31809_33722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (10))){
var inst_31708 = (state_31755[(9)]);
var inst_31710 = (state_31755[(10)]);
var inst_31715 = cljs.core._nth(inst_31708,inst_31710);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31755__$1,(13),out,inst_31715);
} else {
if((state_val_31756 === (18))){
var inst_31721 = (state_31755[(7)]);
var inst_31730 = cljs.core.first(inst_31721);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31755__$1,(20),out,inst_31730);
} else {
if((state_val_31756 === (8))){
var inst_31710 = (state_31755[(10)]);
var inst_31709 = (state_31755[(12)]);
var inst_31712 = (inst_31710 < inst_31709);
var inst_31713 = inst_31712;
var state_31755__$1 = state_31755;
if(cljs.core.truth_(inst_31713)){
var statearr_31817_33729 = state_31755__$1;
(statearr_31817_33729[(1)] = (10));

} else {
var statearr_31819_33730 = state_31755__$1;
(statearr_31819_33730[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____0 = (function (){
var statearr_31824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31824[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__);

(statearr_31824[(1)] = (1));

return statearr_31824;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____1 = (function (state_31755){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31755);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31828){if((e31828 instanceof Object)){
var ex__28850__auto__ = e31828;
var statearr_31830_33736 = state_31755;
(statearr_31830_33736[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_31755;
state_31755 = G__33737;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__ = function(state_31755){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____1.call(this,state_31755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28847__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31838 = f__29123__auto__();
(statearr_31838[(6)] = c__29122__auto__);

return statearr_31838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));

return c__29122__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31841 = arguments.length;
switch (G__31841) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31866 = arguments.length;
switch (G__31866) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31883 = arguments.length;
switch (G__31883) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_31926){
var state_val_31927 = (state_31926[(1)]);
if((state_val_31927 === (7))){
var inst_31920 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31928_33766 = state_31926__$1;
(statearr_31928_33766[(2)] = inst_31920);

(statearr_31928_33766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (1))){
var inst_31899 = null;
var state_31926__$1 = (function (){var statearr_31929 = state_31926;
(statearr_31929[(7)] = inst_31899);

return statearr_31929;
})();
var statearr_31933_33767 = state_31926__$1;
(statearr_31933_33767[(2)] = null);

(statearr_31933_33767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (4))){
var inst_31902 = (state_31926[(8)]);
var inst_31902__$1 = (state_31926[(2)]);
var inst_31906 = (inst_31902__$1 == null);
var inst_31907 = cljs.core.not(inst_31906);
var state_31926__$1 = (function (){var statearr_31937 = state_31926;
(statearr_31937[(8)] = inst_31902__$1);

return statearr_31937;
})();
if(inst_31907){
var statearr_31940_33780 = state_31926__$1;
(statearr_31940_33780[(1)] = (5));

} else {
var statearr_31941_33781 = state_31926__$1;
(statearr_31941_33781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (6))){
var state_31926__$1 = state_31926;
var statearr_31944_33782 = state_31926__$1;
(statearr_31944_33782[(2)] = null);

(statearr_31944_33782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (3))){
var inst_31922 = (state_31926[(2)]);
var inst_31923 = cljs.core.async.close_BANG_(out);
var state_31926__$1 = (function (){var statearr_31946 = state_31926;
(statearr_31946[(9)] = inst_31922);

return statearr_31946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31926__$1,inst_31923);
} else {
if((state_val_31927 === (2))){
var state_31926__$1 = state_31926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31926__$1,(4),ch);
} else {
if((state_val_31927 === (11))){
var inst_31902 = (state_31926[(8)]);
var inst_31914 = (state_31926[(2)]);
var inst_31899 = inst_31902;
var state_31926__$1 = (function (){var statearr_31947 = state_31926;
(statearr_31947[(7)] = inst_31899);

(statearr_31947[(10)] = inst_31914);

return statearr_31947;
})();
var statearr_31948_33789 = state_31926__$1;
(statearr_31948_33789[(2)] = null);

(statearr_31948_33789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (9))){
var inst_31902 = (state_31926[(8)]);
var state_31926__$1 = state_31926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31926__$1,(11),out,inst_31902);
} else {
if((state_val_31927 === (5))){
var inst_31902 = (state_31926[(8)]);
var inst_31899 = (state_31926[(7)]);
var inst_31909 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31902,inst_31899);
var state_31926__$1 = state_31926;
if(inst_31909){
var statearr_31961_33791 = state_31926__$1;
(statearr_31961_33791[(1)] = (8));

} else {
var statearr_31963_33792 = state_31926__$1;
(statearr_31963_33792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (10))){
var inst_31917 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31965_33796 = state_31926__$1;
(statearr_31965_33796[(2)] = inst_31917);

(statearr_31965_33796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (8))){
var inst_31899 = (state_31926[(7)]);
var tmp31953 = inst_31899;
var inst_31899__$1 = tmp31953;
var state_31926__$1 = (function (){var statearr_31970 = state_31926;
(statearr_31970[(7)] = inst_31899__$1);

return statearr_31970;
})();
var statearr_31971_33801 = state_31926__$1;
(statearr_31971_33801[(2)] = null);

(statearr_31971_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_31979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31979[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_31979[(1)] = (1));

return statearr_31979;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_31926){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_31926);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e31984){if((e31984 instanceof Object)){
var ex__28850__auto__ = e31984;
var statearr_31986_33809 = state_31926;
(statearr_31986_33809[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33811 = state_31926;
state_31926 = G__33811;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_31926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_31926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_31991 = f__29123__auto__();
(statearr_31991[(6)] = c__29122__auto___33765);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31999 = arguments.length;
switch (G__31999) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (7))){
var inst_32038 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32053_33838 = state_32042__$1;
(statearr_32053_33838[(2)] = inst_32038);

(statearr_32053_33838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (1))){
var inst_32005 = (new Array(n));
var inst_32006 = inst_32005;
var inst_32007 = (0);
var state_32042__$1 = (function (){var statearr_32055 = state_32042;
(statearr_32055[(7)] = inst_32007);

(statearr_32055[(8)] = inst_32006);

return statearr_32055;
})();
var statearr_32056_33843 = state_32042__$1;
(statearr_32056_33843[(2)] = null);

(statearr_32056_33843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (4))){
var inst_32010 = (state_32042[(9)]);
var inst_32010__$1 = (state_32042[(2)]);
var inst_32011 = (inst_32010__$1 == null);
var inst_32012 = cljs.core.not(inst_32011);
var state_32042__$1 = (function (){var statearr_32058 = state_32042;
(statearr_32058[(9)] = inst_32010__$1);

return statearr_32058;
})();
if(inst_32012){
var statearr_32059_33846 = state_32042__$1;
(statearr_32059_33846[(1)] = (5));

} else {
var statearr_32063_33848 = state_32042__$1;
(statearr_32063_33848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (15))){
var inst_32032 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32070_33850 = state_32042__$1;
(statearr_32070_33850[(2)] = inst_32032);

(statearr_32070_33850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (13))){
var state_32042__$1 = state_32042;
var statearr_32071_33851 = state_32042__$1;
(statearr_32071_33851[(2)] = null);

(statearr_32071_33851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (6))){
var inst_32007 = (state_32042[(7)]);
var inst_32028 = (inst_32007 > (0));
var state_32042__$1 = state_32042;
if(cljs.core.truth_(inst_32028)){
var statearr_32075_33857 = state_32042__$1;
(statearr_32075_33857[(1)] = (12));

} else {
var statearr_32076_33858 = state_32042__$1;
(statearr_32076_33858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (3))){
var inst_32040 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32042__$1,inst_32040);
} else {
if((state_val_32043 === (12))){
var inst_32006 = (state_32042[(8)]);
var inst_32030 = cljs.core.vec(inst_32006);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32042__$1,(15),out,inst_32030);
} else {
if((state_val_32043 === (2))){
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32042__$1,(4),ch);
} else {
if((state_val_32043 === (11))){
var inst_32022 = (state_32042[(2)]);
var inst_32023 = (new Array(n));
var inst_32006 = inst_32023;
var inst_32007 = (0);
var state_32042__$1 = (function (){var statearr_32110 = state_32042;
(statearr_32110[(10)] = inst_32022);

(statearr_32110[(7)] = inst_32007);

(statearr_32110[(8)] = inst_32006);

return statearr_32110;
})();
var statearr_32112_33860 = state_32042__$1;
(statearr_32112_33860[(2)] = null);

(statearr_32112_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (9))){
var inst_32006 = (state_32042[(8)]);
var inst_32020 = cljs.core.vec(inst_32006);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32042__$1,(11),out,inst_32020);
} else {
if((state_val_32043 === (5))){
var inst_32015 = (state_32042[(11)]);
var inst_32007 = (state_32042[(7)]);
var inst_32006 = (state_32042[(8)]);
var inst_32010 = (state_32042[(9)]);
var inst_32014 = (inst_32006[inst_32007] = inst_32010);
var inst_32015__$1 = (inst_32007 + (1));
var inst_32016 = (inst_32015__$1 < n);
var state_32042__$1 = (function (){var statearr_32115 = state_32042;
(statearr_32115[(12)] = inst_32014);

(statearr_32115[(11)] = inst_32015__$1);

return statearr_32115;
})();
if(cljs.core.truth_(inst_32016)){
var statearr_32121_33867 = state_32042__$1;
(statearr_32121_33867[(1)] = (8));

} else {
var statearr_32122_33868 = state_32042__$1;
(statearr_32122_33868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (14))){
var inst_32035 = (state_32042[(2)]);
var inst_32036 = cljs.core.async.close_BANG_(out);
var state_32042__$1 = (function (){var statearr_32124 = state_32042;
(statearr_32124[(13)] = inst_32035);

return statearr_32124;
})();
var statearr_32125_33869 = state_32042__$1;
(statearr_32125_33869[(2)] = inst_32036);

(statearr_32125_33869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (10))){
var inst_32026 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32127_33870 = state_32042__$1;
(statearr_32127_33870[(2)] = inst_32026);

(statearr_32127_33870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (8))){
var inst_32015 = (state_32042[(11)]);
var inst_32006 = (state_32042[(8)]);
var tmp32123 = inst_32006;
var inst_32006__$1 = tmp32123;
var inst_32007 = inst_32015;
var state_32042__$1 = (function (){var statearr_32128 = state_32042;
(statearr_32128[(7)] = inst_32007);

(statearr_32128[(8)] = inst_32006__$1);

return statearr_32128;
})();
var statearr_32133_33880 = state_32042__$1;
(statearr_32133_33880[(2)] = null);

(statearr_32133_33880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_32134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32134[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_32134[(1)] = (1));

return statearr_32134;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_32042){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_32042);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e32135){if((e32135 instanceof Object)){
var ex__28850__auto__ = e32135;
var statearr_32137_33890 = state_32042;
(statearr_32137_33890[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33892 = state_32042;
state_32042 = G__33892;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_32138 = f__29123__auto__();
(statearr_32138[(6)] = c__29122__auto___33837);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32140 = arguments.length;
switch (G__32140) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29122__auto___33907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29123__auto__ = (function (){var switch__28846__auto__ = (function (state_32190){
var state_val_32191 = (state_32190[(1)]);
if((state_val_32191 === (7))){
var inst_32186 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32192_33911 = state_32190__$1;
(statearr_32192_33911[(2)] = inst_32186);

(statearr_32192_33911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (1))){
var inst_32145 = [];
var inst_32146 = inst_32145;
var inst_32147 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32190__$1 = (function (){var statearr_32193 = state_32190;
(statearr_32193[(7)] = inst_32146);

(statearr_32193[(8)] = inst_32147);

return statearr_32193;
})();
var statearr_32194_33912 = state_32190__$1;
(statearr_32194_33912[(2)] = null);

(statearr_32194_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (4))){
var inst_32150 = (state_32190[(9)]);
var inst_32150__$1 = (state_32190[(2)]);
var inst_32151 = (inst_32150__$1 == null);
var inst_32152 = cljs.core.not(inst_32151);
var state_32190__$1 = (function (){var statearr_32195 = state_32190;
(statearr_32195[(9)] = inst_32150__$1);

return statearr_32195;
})();
if(inst_32152){
var statearr_32199_33915 = state_32190__$1;
(statearr_32199_33915[(1)] = (5));

} else {
var statearr_32200_33917 = state_32190__$1;
(statearr_32200_33917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (15))){
var inst_32180 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32205_33918 = state_32190__$1;
(statearr_32205_33918[(2)] = inst_32180);

(statearr_32205_33918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (13))){
var state_32190__$1 = state_32190;
var statearr_32208_33919 = state_32190__$1;
(statearr_32208_33919[(2)] = null);

(statearr_32208_33919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (6))){
var inst_32146 = (state_32190[(7)]);
var inst_32175 = inst_32146.length;
var inst_32176 = (inst_32175 > (0));
var state_32190__$1 = state_32190;
if(cljs.core.truth_(inst_32176)){
var statearr_32211_33920 = state_32190__$1;
(statearr_32211_33920[(1)] = (12));

} else {
var statearr_32212_33923 = state_32190__$1;
(statearr_32212_33923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (3))){
var inst_32188 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32190__$1,inst_32188);
} else {
if((state_val_32191 === (12))){
var inst_32146 = (state_32190[(7)]);
var inst_32178 = cljs.core.vec(inst_32146);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32190__$1,(15),out,inst_32178);
} else {
if((state_val_32191 === (2))){
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32190__$1,(4),ch);
} else {
if((state_val_32191 === (11))){
var inst_32154 = (state_32190[(10)]);
var inst_32150 = (state_32190[(9)]);
var inst_32168 = (state_32190[(2)]);
var inst_32169 = [];
var inst_32170 = inst_32169.push(inst_32150);
var inst_32146 = inst_32169;
var inst_32147 = inst_32154;
var state_32190__$1 = (function (){var statearr_32213 = state_32190;
(statearr_32213[(7)] = inst_32146);

(statearr_32213[(11)] = inst_32170);

(statearr_32213[(8)] = inst_32147);

(statearr_32213[(12)] = inst_32168);

return statearr_32213;
})();
var statearr_32214_33930 = state_32190__$1;
(statearr_32214_33930[(2)] = null);

(statearr_32214_33930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (9))){
var inst_32146 = (state_32190[(7)]);
var inst_32166 = cljs.core.vec(inst_32146);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32190__$1,(11),out,inst_32166);
} else {
if((state_val_32191 === (5))){
var inst_32147 = (state_32190[(8)]);
var inst_32154 = (state_32190[(10)]);
var inst_32150 = (state_32190[(9)]);
var inst_32154__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32150) : f.call(null,inst_32150));
var inst_32158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32154__$1,inst_32147);
var inst_32159 = cljs.core.keyword_identical_QMARK_(inst_32147,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32160 = ((inst_32158) || (inst_32159));
var state_32190__$1 = (function (){var statearr_32218 = state_32190;
(statearr_32218[(10)] = inst_32154__$1);

return statearr_32218;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32219_33934 = state_32190__$1;
(statearr_32219_33934[(1)] = (8));

} else {
var statearr_32220_33935 = state_32190__$1;
(statearr_32220_33935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (14))){
var inst_32183 = (state_32190[(2)]);
var inst_32184 = cljs.core.async.close_BANG_(out);
var state_32190__$1 = (function (){var statearr_32222 = state_32190;
(statearr_32222[(13)] = inst_32183);

return statearr_32222;
})();
var statearr_32223_33939 = state_32190__$1;
(statearr_32223_33939[(2)] = inst_32184);

(statearr_32223_33939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (10))){
var inst_32173 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32224_33940 = state_32190__$1;
(statearr_32224_33940[(2)] = inst_32173);

(statearr_32224_33940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (8))){
var inst_32146 = (state_32190[(7)]);
var inst_32154 = (state_32190[(10)]);
var inst_32150 = (state_32190[(9)]);
var inst_32163 = inst_32146.push(inst_32150);
var tmp32221 = inst_32146;
var inst_32146__$1 = tmp32221;
var inst_32147 = inst_32154;
var state_32190__$1 = (function (){var statearr_32227 = state_32190;
(statearr_32227[(7)] = inst_32146__$1);

(statearr_32227[(14)] = inst_32163);

(statearr_32227[(8)] = inst_32147);

return statearr_32227;
})();
var statearr_32228_33941 = state_32190__$1;
(statearr_32228_33941[(2)] = null);

(statearr_32228_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28847__auto__ = null;
var cljs$core$async$state_machine__28847__auto____0 = (function (){
var statearr_32229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32229[(0)] = cljs$core$async$state_machine__28847__auto__);

(statearr_32229[(1)] = (1));

return statearr_32229;
});
var cljs$core$async$state_machine__28847__auto____1 = (function (state_32190){
while(true){
var ret_value__28848__auto__ = (function (){try{while(true){
var result__28849__auto__ = switch__28846__auto__(state_32190);
if(cljs.core.keyword_identical_QMARK_(result__28849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28849__auto__;
}
break;
}
}catch (e32233){if((e32233 instanceof Object)){
var ex__28850__auto__ = e32233;
var statearr_32234_33945 = state_32190;
(statearr_32234_33945[(5)] = ex__28850__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33949 = state_32190;
state_32190 = G__33949;
continue;
} else {
return ret_value__28848__auto__;
}
break;
}
});
cljs$core$async$state_machine__28847__auto__ = function(state_32190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28847__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28847__auto____1.call(this,state_32190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28847__auto____0;
cljs$core$async$state_machine__28847__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28847__auto____1;
return cljs$core$async$state_machine__28847__auto__;
})()
})();
var state__29124__auto__ = (function (){var statearr_32241 = f__29123__auto__();
(statearr_32241[(6)] = c__29122__auto___33907);

return statearr_32241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29124__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
