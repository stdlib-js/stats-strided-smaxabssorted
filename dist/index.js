"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=u(function(h,f){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-absf/dist');function m(e,r,a,n){var s,t;return e<=0?NaN:e===1||a===0?r[0]:(s=r[n],t=r[n+(e-1)*a],v(s)||v(t)?NaN:(s=o(s),t=o(t),s>t?s:t))}f.exports=m
});var c=u(function(j,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=i();function l(e,r,a){return y(e,r,a,p(e,a))}q.exports=l
});var b=u(function(k,x){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=i();N(d,"ndarray",O);x.exports=d
});var R=b();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
