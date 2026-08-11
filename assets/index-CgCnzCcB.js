var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=n(),r=i(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),A=pe(null),he=pe(null),ge=pe(null);function _e(e,t){switch(k(he,t),k(A,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ve(){O(me),O(A),O(he)}function ye(e){e.memoizedState!==null&&k(ge,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(A,e),k(me,n))}function be(e){A.current===e&&(O(me),O(A)),ge.current===e&&(O(ge),Qf._currentValue=D)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ht]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function j(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function M(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?M(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function N(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var P=_n&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Wt(r)||(r=Pr,`selectionStart`in r&&N(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&jr(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};_n&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),At(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],F=0,ni=0;function ri(){for(var e=F,t=ni=F=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ti[F++]=e,ti[F++]=t,ti[F++]=n,ti[F++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)fi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=di(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return gi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=di(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ee:return e=di(13,n,t,i),e.elementType=ee,e.lanes=a,e;case te:return e=di(19,n,t,i),e.elementType=te,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case ne:o=14;break a;case re:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=di(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ge(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(s(519));function Bi(e){throw Ki(xi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=pe(null),Ji=null,Yi=null;function Xi(e,t,n){k(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,O(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Qi(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qi(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ea(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ge.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(s(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=T.S;T.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=pe(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?k(ba,ba.current):k(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(s(460)),Ta=Error(s(474)),Ea=Error(s(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(s(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(s(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===re&&Aa(a)===t.type)?(t=i(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=gi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case re:return t=Aa(t),f(e,t,n)}if(ue(t)||se(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Aa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Aa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),L&&ji(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),L&&ji(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Aa(l)===r.type){n(e,r.sibling),c=i(r,a.props),La(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=gi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=hi(a.type,a.key,a.props,null,e.mode,c),La(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(a,e.mode,c),c.return=e,e=c}return o(e);case re:return a=Aa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ia(a),c);if(a.$$typeof===C)return b(e,r,ia(e,a),c);Ra(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=_i(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=pe(null),to=pe(0);function no(e,t){e=Ul,k(to,e),k(eo,t),Ul=e|t.baseLanes}function ro(){k(to,Ul),k(eo,eo.current)}function io(){Ul=to.current,O(eo),O(to)}var ao=pe(null),oo=null;function so(e){var t=e.alternate;k(R,R.current&1),k(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){k(R,R.current),k(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(k(R,R.current),k(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){k(R,R.current),k(ao,ao.current)}function fo(e){O(ao),oo===e&&(oo=null),O(R)}var R=pe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(s(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?zs:Bs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){T.H=Rs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(s(300));e===null||rc||(e=e.dependencies,e!==null&&ta(e)&&(rc=!0))}function Eo(e,t,n,r){z=e;var i=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=i)throw Error(s(301));if(i+=1,ho=B=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Vs,a=t(n,r)}while(_o);return a}function Do(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(s(467)):Error(s(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?zs:Bs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ra(e)}throw Error(s(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(rc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(rc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bo(e,t,n){var r=z,i=H(),a=L;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((B||i).memoizedState,n);if(o&&(i.memoizedState=n,rc=!0),i=i.queue,ds(Uo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,i,n,t),null),q===null)throw Error(s(349));a||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,i){if(Fs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Yo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=q.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ms.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Ps.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Ar(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Ar(e,t)||(rc=!0),e)}function Cs(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ps(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,va(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function U(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Ts(e).queue;Cs(e,i,t,D,n===null?U:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:D},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ra(Qf)}function Os(){return H().memoizedState}function ks(){return H().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return ii(e,t,i,0),q===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(s(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===z||t!==null&&t===z}function Is(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Rs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};Rs.useEffectEvent=V;var zs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ms.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,i=jo();if(L){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),q===null)throw Error(s(349));Y&127||Vo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,us(Uo.bind(null,r,a,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),n},useId:function(){var e=jo(),t=q.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=As.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Os,useHostTransitionStatus:Ds,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:ks};Bs.useEffectEvent=ps;var Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Os,useHostTransitionStatus:Ds,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:ks};Vs.useEffectEvent=ps;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ei(e)}function Js(e){console.error(e)}function Ys(e){ei(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ga(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,i,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(s(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=xi(r,n),i=Qs(e.stateNode,r,i),Ja(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==zi&&(e=Error(s(422),{cause:r}),Ki(xi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=xi(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Qs(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=$s(i),ec(i,e,n,r),Ja(n,i),!1}n=n.return}while(n!==null);return!1}var nc=Error(s(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!rc?(ko(e,t,i),kc(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ba(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return dc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(co(t),i){if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(rc||ea(e,t,n,!1),i=(n&e.childLanes)!==0,rc||i){if(r=q,r!==null&&(o=ct(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,oi(e,o),hu(r,e,o),nc;Du(),t=fc(e,t,n)}else e=a.treeContext,I=cf(o.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=dc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!rc?(ko(e,t,i),kc(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!rc?(ko(e,t,a),kc(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ha||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ha||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Wi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Ca()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(i?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(uo(t),i=t.mode,c=wc({mode:`hidden`,children:c},i),r=gi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(null,r)):(so(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(so(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,i=t.mode,r=wc({mode:`visible`,children:r.children},i),c=gi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,t=lc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Ki({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||ea(e,t,n,!1),o=(n&e.childLanes)!==0,rc||o){if(o=q,o!==null&&(r=ct(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(o,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return i?(uo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,i,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(i=c.cachePool,i===null?i=Ca():(l=la._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ba(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(R,o),ic(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function jc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(R,R.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}}else rc=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=ac(null,t,e,r,n);break a}if(i===ne){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ks(r,t.pendingProps),_c(e,t,r,i,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Wa(e,t),Za(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0),Xa(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=vc(e,t,r,n);break a}if(r!==i){i=xi(Error(s(424)),t),Ki(i),t=vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===i){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ii=t,Ri=!0,i=I,Zd(t.type)?(lf=i,I=cf(r.firstChild)):I=i),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((i=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?i=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,i=!0)),i||Bi(t)),ye(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=wo(e,t,Do,null,null,n),Qf._currentValue=i),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Sc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,na(t),i=ra(i),r=r(i),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(i=xa(),i===null&&(i=q,a=ua(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ua(t),Xi(t,la,i)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Xi(t,la,r),r!==i.cache&&$i(t,[la],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Xi(t,la,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),W(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Nc(t),a===null?(W(t),Pc(t,i,null,r,n)):(W(t),Fc(t,a))):a?a===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,a)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,i,e,r,n)),null;case 27:if(be(t),n=he.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}e=me.current,Ui(t)?Vi(t,e):(e=ff(i,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(be(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}if(a=me.current,Ui(t))Vi(t,a);else{var o=Bd(he.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[mt]=t,a[ht]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=he.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ii,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[mt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(s(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[mt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),i=!1}else i=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Zi(t.type),W(t),null;case 19:if(O(R),r=t.memoizedState,r===null)return W(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,Lc(r,!1),e=a.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return k(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=po(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!L)return W(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=R.current,k(R,i?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),W(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function zc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(s(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(R),null;case 4:return ve(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&O(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Bc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:O(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&O(ba);break;case 24:Zi(la)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),N(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ks(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null){if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(s(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(s(160));ul(a,o,i),G=null,cl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[xt]||a[mt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[mt]=e,Dt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[mt]=e,Dt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode)}else e.stateNode=If(i,r,e.memoizedProps)}else a===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Jc(e,i,n===null?i:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=gl,gl=gf(t.containerInfo),hl(t,e),gl=i,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||i,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Qc(e,Xc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),Qc(e,Xc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Zc(e,Xc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:T.T===null?dt():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||L){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),it(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||et(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Ne(),10<i)){if(yu(r,t,Jl,!Bl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},jl(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=pi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=et(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ri(),n}function Cu(e,t){z=null,T.H=Rs,t===wa||t===Ea?(t=Ma(),X=3):t===Ta?(t=Ma(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(Y&4194048)===Y?oo===null:(Y&62914560)===Y||Y&536870912?e===oo:!1}function Tu(){var e=T.H;return T.H=Rs,e===null?Rs:e}function Eu(){var e=T.A;return T.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&ao.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,K=r,T.H=i,T.A=a,J===null&&(q=null,Y=0,ri()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),i=Eu();q!==e||Y!==t?(nu=null,tu=Ne()+500,Su(e,t)):Vl=et(e,t);a:do try{if(X!==0&&J!==null){t=J;var a=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(Oa(a)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},a.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Oa(a)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var c=J;if(o?Wf(o):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,a,5);break;case 6:X=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,T.H=r,T.A=i,K=n,J===null?(q=null,Y=0,ri(),Wl):0}function ju(){for(;J!==null&&!je();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Ao(t);default:Bc(n,t),t=J=mi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,xi(n,e.current)),J=null;return}t.flags&32768?(L||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ni,at(e,n,a,o,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=K,K|=4;try{al(e,t,n)}finally{K=o,E.p=i,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&M(s.ownerDocument.documentElement,s)){if(c!==null&&N(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=j(s,h),v=j(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(s(331));var c=K;if(K|=4,Pl(a.current),El(a,a.current,o,n),K=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=Qs(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=$s(2),r=Ka(t,n,2),r!==null&&(ec(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ne()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=oi(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=$e(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=$e(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ct(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=Zr.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Wr:case Gr:case Kr:c=zn;break;case Xr:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Ct(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Tt(c),h=u==null?s:Tt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Tt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s)){if(yr)v=Or;else{v=Er;var y=Tr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(o,n,i);break;case`selectionchange`:if(P)break;case`keydown`:case`keyup`:Rr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ht]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=he.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Et(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Dt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Dt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Dt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Dt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=qs,a=Js,o=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=i(),u=c();function d(e){let t=1779033703^e.length;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),3432918353),t=t<<13|t>>>19;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^=t>>>16)>>>0}var f=class e{state;seed;calls=0;constructor(e){this.seed=e,this.state=d(e)}next(){this.calls++,this.state=this.state+1831565813|0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}pick(e){if(e.length===0)throw Error(`pick() 于空数组`);return e[Math.floor(this.next()*e.length)]}weighted(e,t){let n=t.reduce((e,t)=>e+t,0);if(n<=0)throw Error(`weighted() 权重和为 0`);let r=this.next()*n;for(let n=0;n<e.length;n++)if(r-=t[n]??0,r<=0)return e[n];return e[e.length-1]}gaussian(e=0,t=1){let n=1-this.next(),r=this.next();return e+t*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)}fork(t){return new e(`${this.seed}:${t}:${this.calls}`)}snapshot(){return{seed:this.seed,state:this.state,calls:this.calls}}static restore(t){let n=new e(t.seed);return n.state=t.state,n.calls=t.calls,n}},p=e=>Math.log(e)/Math.log(8),m={1:100,2:200,3:500,4:1200,5:3e3,6:8e3,7:2e4,8:5e4,9:1e5},h={1:140,2:260,3:800,4:2e3,5:4500,6:12e3,7:3e4,8:7e4,9:1e5},g={1:6,2:12,3:24,4:120,5:300,6:1200,7:4800,8:12e3,9:12e3},_={正道:{speed:1,power:1,note:`传承完整，天劫温和，但受制于人`},魔道:{speed:1.5,power:1.15,note:`战斗中吸纳煞气，长期不战会反噬`},鬼道:{speed:1.2,power:.95,note:`肉身非必需，神魂极强，畏阳畏佛`},妖修:{speed:1.3,power:1.25,note:`肉身极强，化形前不能用人类功法法宝`},佛道:{speed:.9,power:.75,note:`不吃灵根，心魔免疫，戒律削减选项`},儒道:{speed:1,power:.85,note:`言出法随，依附王朝气运`},武道:{speed:.7,power:.7,note:`凡人可修，根基天然纯净，前六阶落后`},散修:{speed:.85,power:1,note:`自由杂修，无人指点，领悟型瓶颈 +40%`}},v={graceTicks:3,damagePerTick:.04},y={tiers:[1,6],mult:.7},b={单灵根:3,异灵根:3,变异灵根:2.2,双灵根:1.8,三灵根:1.2,四灵根:.8,五灵根:.5,无灵根:0},x={单灵根:15,异灵根:40,变异灵根:8,双灵根:3,三灵根:0,四灵根:0,五灵根:0,无灵根:0},S=.7,C=e=>e>=10?2.1:.7+(e-1)*.15,w={打坐吐纳:{speed:1,perfection:0,risk:0,daoxin:.4},聚灵阵辅修:{speed:1.6,perfection:0,risk:0,costStones:20,daoxin:.2},洞天闭关:{speed:2.5,perfection:2,risk:0,blocksEvents:!0,daoxin:.15},悟道:{speed:.6,perfection:8,risk:0,needsInsight:!0,daoxin:2.2},历练突破:{speed:1.8,perfection:-6,risk:.08,daoxin:.8},丹药速成:{speed:3,perfection:-10,risk:.03,toxin:6,daoxin:-1},双修:{speed:2.2,perfection:3,risk:0,needsPartner:!0,daoxin:.5},吞噬夺取:{speed:5,perfection:-25,risk:.12,corruption:8,daoxin:-3},香火愿力:{speed:1.4,perfection:5,risk:.02,daoxin:1.2},献祭:{speed:4,perfection:-18,risk:.15,corruption:12,daoxin:-2},苦修锻体:{speed:.8,perfection:6,risk:.02,daoxin:1.5},借残魂指点:{speed:2,perfection:0,risk:0,possession:8,daoxin:-.2}},ee={breakthroughPenaltyAt:30,breakthroughPenalty:.15,perfectionCapAt:60,perfectionCap:70,deathRiskAt:90,deathRiskPerTick:.05},te={功法:{min:.55,max:1.9},法宝:{min:.7,max:1.75},状态:{min:.4,max:1.45},灵宠:{min:.95,max:1.35},伙伴:{min:.9,max:1.4},道侣:{min:1,max:1.25},情报:{min:.85,max:1.3}},ne={defaultScale:12,combatScale:.35,luckShift:.15,pClamp:[.02,.98],critBand:.05},re={sigmaBase:.02,sigmaLuckCoef:.25},ie={tierCoef:[1,1.4,2,3,4.5,7],gain:{越阶战斗:3,强夺气运:8,读档回溯:5,逆天行为:20},decayBase:2,bands:[{at:0,difficulty:1,hunted:0,desc:`无事`},{at:21,difficulty:1.1,hunted:0,desc:`天气异常，修炼时心悸`},{at:51,difficulty:1.2,hunted:.05,desc:`天机阁开始推演你`},{at:101,difficulty:1.35,hunted:.12,desc:`天罚使者`},{at:201,difficulty:1.6,hunted:.2,desc:`天地压制，属性 −20%`},{at:351,difficulty:2,hunted:.3,desc:`无妄之灾`}],smiteAt:351,smiteChance:.08},ae=[{at:0,speed:1,power:1,mishap:0,death:0,threat:0,label:`守律`},{at:16,speed:1.3,power:1.1,mishap:.03,death:0,threat:.55,label:`☠死亡谷`},{at:46,speed:2,power:1.35,mishap:.07,death:0,threat:.75,label:`强邪`},{at:76,speed:3.2,power:1.7,mishap:.09,death:.02,threat:1,label:`邪极带`},{at:89,speed:4.5,power:2.1,mishap:.12,death:.05,threat:1.3,label:`失控临界`},{at:100,speed:0,power:0,mishap:0,death:1,threat:0,label:`入魔`}],oe={transcendBand:[76,88],transcendDriftTolerance:40,reflectionTiers:[3,5,7],reflectionTarget:30,tribulationMult:2.2,inheritanceCutoffTier:6},se={base:45,hiddenRealmBonus:25,weights:{1:1,2:1.5,3:2.5,4:2,5:2,6:1.5,7:1.5,8:1.5,9:2},orthodox:{根基纯净:15,功法契合:10,道心一致:10,心魔残留:-20,捷径惩罚:-30},corrupt:{堕度稳定:20,意志强度:15,禁忌贯彻:10,失控每次:-12,被净化:-20}},ce={真仙:{perfection:95,transgression:50,needAllHidden:!0,needTier:9},堕仙:{perfection:90,corruptionBand:[76,88],needReflections:3,needTier:9},位面主宰:{perfection:80,transgression:200,needTier:9},地方大佬:{perfection:0,minTier:3},以凡证道:{perfection:95,path:`武道`,needTier:9}},le={2:95,3:150,4:215,5:300,6:400,7:520,8:660,9:820,10:1150},ue={normal:{sublevelLoss:.35,daoxinLoss:4},critical:!0},T={2:{name:`道基劫`,outcome:`道基裂损，退回练气`,branch:null,recoverable:!0,perfectionLoss:20},3:{name:`结丹劫`,outcome:`金丹碎裂，退回筑基`,branch:null,recoverable:!0,gradeCapLoss:2},4:{name:`婴变劫`,outcome:`婴死体存`,branch:`守尸人`,recoverable:`partial`},5:{name:`神识劫`,outcome:`神识裂解，人格破碎`,branch:`痴儿`,recoverable:`partial`},6:{name:`虚空劫`,outcome:`被虚空吞噬`,branch:`虚空漂流`,recoverable:!0,cannotReturn:!0},7:{name:`融合劫`,outcome:`道体崩解，只余残魂`,branch:`残魂`,recoverable:`partial`},8:{name:`三灾九难`,outcome:`道消，执念缚于死地`,branch:`地缚灵`,recoverable:!1},9:{name:`九重天劫`,outcome:`形神俱灭`,branch:null,recoverable:!1}},E={minEventWeight:10,maxResolvePerTick:2,lethalMinForeshadow:2,lethalMinWindow:1,defaultMatureWindow:[30,120]},D={secrets:[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`],witnessWeight:.5,publicUseWeight:1,overTierArtifact:15,revealAt:100},de={faceSlapMultMax:2.5,decayBonusMax:1,resourcePenaltyMax:.45},fe=[{id:`凡俗`,weight:550,reveal:`线索集齐`},{id:`上古血脉后裔`,weight:80,reveal:`血脉共鸣`},{id:`遗孤`,weight:60,reveal:`信物/仇家`},{id:`转世重修者`,weight:50,reveal:`顿悟闪回`},{id:`棋子`,weight:50,reveal:`发现机缘被安排`},{id:`气运之子`,weight:40,reveal:`首次死里逃生`},{id:`天煞孤星`,weight:40,reveal:`第三位亲近者身死`},{id:`容器`,weight:30,reveal:`夺舍者上门`},{id:`罪裔`,weight:30,reveal:`被追讨`},{id:`双生`,weight:20,reveal:`双生感应`},{id:`无名`,weight:10,reveal:`天机阁推演失败`},{id:`归来者`,weight:5,reveal:`见到上一局遗物`}],pe={luckBonus:25,boonMult:1.8,deathExemptPerTier:1},O={maxTier:18,guidanceByGap:[{gap:5,level:`全面指导`,speedBonus:1,canAct:!0},{gap:3,level:`有效指导`,speedBonus:.6,canAct:!1},{gap:1,level:`经验参考`,speedBonus:.25,canAct:!1},{gap:0,level:`只能陪伴`,speedBonus:0,canAct:!1},{gap:-1,level:`反向求教`,speedBonus:0,canAct:!1}],soulThreshold:40,possessionPerGuidance:8},k={tierMult:[1,1.3,1.7,2.4,3.5,5],corruptMult:3,transcendMult:10,noSystemMult:8,difficultyMult:{凡人:.5,修士:1,天骄:1.5,逆天:2,天道:3}},me={eventChance:.62},A=(e,t,n)=>Math.min(n,Math.max(t,e)),he=e=>(e.气运-50)/100;function ge(e,t,n=0){let r=t.scale??ne.defaultScale,i=A(1/(1+Math.exp(-(t.power-t.dc)/r))+n*ne.luckShift+(t.bonus??0),ne.pClamp[0],ne.pClamp[1]),a=e.next(),o=ne.critBand*(1+n),s=ne.critBand*(1-n);return a<o?`CRIT_SUCCESS`:a>1-s?`CRIT_FAIL`:a<i?`SUCCESS`:`FAIL`}function _e(e,t=0){let n=e.scale??ne.defaultScale;return A(1/(1+Math.exp(-(e.power-e.dc)/n))+t*ne.luckShift+(e.bonus??0),ne.pClamp[0],ne.pClamp[1])}function ve(e,t,n){let r=A(n+.5,0,1),i=re.sigmaBase+re.sigmaLuckCoef*(1-r);return A(t+e.gaussian(0,i),0,1)}function ye(e){let t=ae[0];for(let n of ae)e>=n.at&&(t=n);return t}function be(e){let t=ie.bands[0];for(let n of ie.bands)e>=n.at&&(t=n);return t}function xe(e){let t=e.tier+e.sublevel;e.goldenCoreGrade>0&&(t+=p(C(e.goldenCoreGrade)));let n=_[e.path];t+=p(n.power),e.path===`武道`&&e.tier>=y.tiers[0]&&e.tier<=y.tiers[1]&&(t+=p(y.mult));for(let n of Object.keys(te))t+=p(e.factors[n]);return t+=p(ye(e.堕度).power),be(e.僭越).at>=201&&(t+=p(.8)),t}function Se(e){let t=xe(e);return t<=0?0:A((t-e.锋芒)/t,0,1)}function Ce(e,t,n,r=0){return ge(e,{power:xe(t)+r,dc:n,scale:ne.combatScale},he(t))}function we(){return{功法:.7,法宝:.75,状态:1,灵宠:.95,伙伴:.9,道侣:1,情报:.85}}var Te=[{id:`tianshu`,desc:`九宗环拱的首善之城。规矩最多，路也最多。`,name:`天枢城`,region:`中州`,qiDensity:72,elementWeights:{土:.3,金:.2,木:.2,水:.15,火:.15},mutationPool:[`雷`],mutationRate:.06,pathPool:[`正道`,`儒道`,`武道`]},{id:`yaowang`,desc:`满谷药香，丹修的摇篮 —— 也是药人的产地。`,name:`药王谷`,region:`东林州`,qiDensity:88,elementWeights:{木:.78,水:.12,土:.1},pathPool:[`正道`,`儒道`]},{id:`huoshan`,desc:`地火昼夜不熄。炼器师的圣地，脾气和火一样。`,name:`火山邑`,region:`南离州`,qiDensity:80,elementWeights:{火:.82,土:.13,金:.05},mutationPool:[`火`],mutationRate:.1,pathPool:[`正道`,`魔道`]},{id:`jianzhong`,desc:`万剑埋骨之地。剑修视为圣地，旁人避之不及。`,name:`剑冢外围`,region:`西金州`,qiDensity:68,elementWeights:{金:.8,土:.12,火:.08},pathPool:[`正道`,`武道`],bonus:{根骨:10}},{id:`bingyuan`,desc:`极北苦寒。修出来的都硬，冻死的更多。`,name:`冰渊边`,region:`北溟州`,qiDensity:64,elementWeights:{水:.75,金:.15,土:.1},mutationPool:[`冰`],mutationRate:.18,pathPool:[`正道`,`鬼道`]},{id:`nanjiang`,desc:`瘴雨蛊虫，魔修与蛊寨杂处。强者才配有名字。`,name:`十万大山`,region:`南疆`,qiDensity:70,elementWeights:{木:.45,毒:.35,水:.2},mutationPool:[`毒`],mutationRate:.22,pathPool:[`魔道`,`妖修`]},{id:`wangxiang`,desc:`幽冥边上的河镇，家家做渡亡的营生。夜里别看对岸。`,name:`望乡镇`,region:`幽冥边界`,qiDensity:58,elementWeights:{水:.5,暗:.35,土:.15},mutationPool:[`暗`],mutationRate:.15,pathPool:[`鬼道`,`正道`],bonus:{神魂:25}},{id:`baigu`,desc:`北荒妖蛮部落。无宗门无月钱，爪牙就是道理。`,name:`白骨部`,region:`北荒`,qiDensity:40,elementWeights:{土:.4,火:.3,金:.3},pathPool:[`妖修`,`武道`],bonus:{根骨:40}},{id:`fudao`,desc:`散修的天堂与坟场。什么都买得到 —— 包括你。`,name:`东海浮岛`,region:`东海`,qiDensity:66,elementWeights:{水:.55,风:.25,木:.2},mutationPool:[`风`],mutationRate:.1,pathPool:[`散修`],bonus:{气运:8}},{id:`juelin`,desc:`天下最穷的灵脉，修不了仙。所以这里的人只信拳头。`,name:`绝灵谷`,region:`中州边陲`,qiDensity:5,elementWeights:{土:1},pathPool:[`武道`,`散修`],hiddenBodyRate:3e-4}];function Ee(e,t){return e===0?`无灵根`:t?`变异灵根`:[`单灵根`,`双灵根`,`三灵根`,`四灵根`,`五灵根`][e-1]??`五灵根`}function De(e,t){let n=.15+t.qiDensity/130;if(!e.chance(n)){let r=!!t.hiddenBodyRate&&e.chance(t.hiddenBodyRate/n);return{hiddenBody:r,talent:{root:`无灵根`,elements:[`无`],purity:r?100:0,悟性:A(e.int(35,75)+(t.bonus?.悟性??0),1,100),根骨:A(e.int(35,70)+(t.bonus?.根骨??0),1,100),神魂:A(e.int(35,70)+(t.bonus?.神魂??0),1,100)}}}let r=t.qiDensity/100,i=[1,2,3,4,5],a=[2*r**3,12*r**2,30*r,32,24],o=e.weighted(i,a),s=Object.entries(t.elementWeights),c=[],l=[...s];for(let t=0;t<o&&l.length>0;t++){let t=l.map(([,t])=>t*.6+e.next()*.4),n=t.indexOf(Math.max(...t));c.push(l[n][0]),l.splice(n,1)}let u=!1;t.mutationPool&&t.mutationRate&&e.chance(t.mutationRate)&&(c[0]=e.pick(t.mutationPool),u=!0);let d=A(40+t.qiDensity*.4+e.gaussian(0,6)-(o-1)*6,5,100);return{hiddenBody:!1,talent:{root:Ee(o,u),elements:c,purity:d,悟性:A(e.int(30,80)+(t.bonus?.悟性??0),1,100),根骨:A(e.int(30,75)+(t.bonus?.根骨??0),1,100),神魂:A(e.int(30,75)+(t.bonus?.神魂??0),1,100)}}}function Oe(e){return e.weighted(fe.map(e=>e.id),fe.map(e=>e.weight))}function ke(e,t={}){let n=t.birthplace??e.pick(Te),{talent:r,hiddenBody:i}=De(e,n),a=Oe(e),o=t.path??n.pathPool[0];r.root===`无灵根`&&!i&&o!==`武道`&&o!==`佛道`&&(o=n.pathPool.includes(`武道`)?`武道`:`佛道`);let s=50+(n.bonus?.气运??0)+(a===`气运之子`?pe.luckBonus:0)+(a===`天煞孤星`?-10:0);return{id:`player`,name:t.name??`无名`,path:o,tier:1,sublevel:0,goldenCoreGrade:0,hiddenRealms:[],talent:r,origin:a,originRevealed:!1,originClues:0,ageMonths:192,lifespanYears:m[1],alive:!0,气运:A(s+e.gaussian(0,8),0,100),道心:A(50+e.gaussian(0,10),0,100),功德:0,业障:0,僭越:x[r.root]??0,堕度:0,丹毒:0,名望:0,锋芒:1,secrets:{金手指:0,残魂:0,真实血脉:0,真实修为:0,杀过某人:0,身世:0},factors:we(),perfectionByTier:{},goldFingerTier:t.goldFingerTier??-1,souls:[],deathExemptions:a===`气运之子`?pe.deathExemptPerTier:0,tribulationAttempts:{}}}function Ae(e){return(b[e.talent.root]??0)*(e.talent.purity/100)**S}function je(e){let t=ae[0];for(let n of ae)e>=n.at&&(t=n);return t}function Me(e){return 100*1.55**(e-1)}function Ne(e,t){let n=e.actor,r=w[t],i=g[n.tier]??12,a=(n.path===`佛道`||n.path===`武道`?1:Ae(n))*_[n.path].speed*r.speed*je(n.堕度).speed;be(n.僭越).at>=201&&(a*=.8),n.path===`魔道`&&t!==`历练突破`&&(a*=1-v.damagePerTick);let o=a*i*.5;n.sublevel=A(n.sublevel+o/Me(n.tier),0,1);let s=`toxin`in r?r.toxin:0;n.丹毒=A(n.丹毒+s,0,100),n.道心=A(n.道心+r.daoxin,0,100);let c=r.risk+je(n.堕度).mishap,l=e.rng.chance(c);return l&&(n.sublevel=Math.max(0,n.sublevel-.15),n.道心=A(n.道心-5,0,100)),{progress:o,mishap:l,toxinGained:s,ready:n.sublevel>=1}}function Pe(e){let t=le[e.tier+1]??le[9],n=e.goldFingerTier>=0?ie.tierCoef[e.goldFingerTier]??1:1,r=e.堕度>=oe.transcendBand[0]?oe.tribulationMult:1,i=e.hiddenRealms.includes(8)?.7:1,a=1+(e.tribulationAttempts[e.tier]??0)*.15;return t*(1+e.僭越/100)*(1-A(e.功德,0,250)/300)*n*r*i*a}function Fe(e){return e.道心*1+e.talent.根骨*.5+e.talent.神魂*.5+e.talent.悟性*.3+Me(e.tier)*.14+e.hiddenRealms.length*30+Math.max(0,xe(e)-e.tier)*60+e.factors.状态*20+(e.丹毒>ee.breakthroughPenaltyAt?-25:0)}function Ie(e,t={}){let n=e.actor,r=n.tier+1,i=Fe(n),a=Pe(n);n.tribulationAttempts[n.tier]=(n.tribulationAttempts[n.tier]??0)+1;let o=ge(e.rng,{power:i,dc:a,scale:Math.max(20,a*.2)},he(n)),s=o===`SUCCESS`||o===`CRIT_SUCCESS`,c=n.goldenCoreGrade;if(s&&r===3){let r=3+(t.coreGradeInvest??0)*4+(n.talent.purity-50)/25+(n.道心-50)/30-n.丹毒/25+he(n)*2;c=A(Math.round(r+e.rng.gaussian(0,1.1)),1,9),o===`CRIT_SUCCESS`&&c===9&&n.talent.elements.length>=5&&(c=10)}let l=!1;if(s&&t.hiddenAttempt){let t=ge(e.rng,{power:n.道心+n.talent.悟性+(100-n.丹毒)+n.hiddenRealms.length*8+(n.perfectionByTier[n.tier-1]??60)*.35,dc:190+n.tier*18,scale:14},he(n));l=t===`SUCCESS`||t===`CRIT_SUCCESS`,l&&n.hiddenRealms.push(n.tier)}let u=Le(n,l);if(n.perfectionByTier[n.tier]=u,!s){if(o!==`CRIT_FAIL`)return n.sublevel=Math.max(0,1-ue.normal.sublevelLoss),n.道心=A(n.道心-ue.normal.daoxinLoss,0,100),delete n.perfectionByTier[n.tier],{outcome:o,newTier:n.tier,hiddenAchieved:!1,goldenCoreGrade:c,perfection:u};let e=T[n.tier],t=e?{name:e.name,outcome:e.outcome,branch:`branch`in e?e.branch:null,recoverable:e.recoverable}:void 0;return t?.recoverable===!0&&n.tier>1?(--n.tier,n.sublevel=.5,`perfectionLoss`in e&&(n.perfectionByTier[n.tier]=A((n.perfectionByTier[n.tier]??se.base)-e.perfectionLoss,0,100))):n.sublevel=.7,{outcome:o,newTier:n.tier,hiddenAchieved:!1,goldenCoreGrade:c,failure:t,perfection:u}}return n.tier=r,n.sublevel=0,n.goldenCoreGrade=c,n.lifespanYears=(l?h[r]:m[r])??n.lifespanYears,n.僭越+=ie.gain.越阶战斗*.5,{outcome:o,newTier:r,hiddenAchieved:l,goldenCoreGrade:c,perfection:u}}function Le(e,t){let n=e.堕度>=46,r=se.base+(t?se.hiddenRealmBonus:0);if(n){let t=se.corrupt,n=e.堕度>=oe.transcendBand[0]&&e.堕度<=oe.transcendBand[1];r+=(n?1:.3)*t.堕度稳定,r+=A(e.道心/100,0,1)*t.意志强度,r+=A((e.堕度-45)/55,0,1)*t.禁忌贯彻}else{let t=se.orthodox;r+=A((100-e.丹毒)/100,0,1)*t.根基纯净,r+=A(e.factors.功法/1.9,0,1)*t.功法契合,r+=A(e.道心/100,0,1)*t.道心一致,r+=A(e.业障/100,0,1)*t.心魔残留,r+=A(e.堕度/45,0,1)*t.捷径惩罚}let i=e.丹毒>ee.perfectionCapAt?ee.perfectionCap:100;return A(r,0,i)}function Re(e){let t=Object.entries(e.perfectionByTier);if(t.length===0)return 0;let n=0,r=0;for(let[e,i]of t){let t=Number(e),a=se.weights[t]??1;n+=a*Math.log(Math.max(i,.5)),r+=a}return Math.exp(n/r)}function ze(e){return e>=95?`无瑕无垢，可期大道`:e>=88?`其基醇厚，几近圆满`:e>=80?`根基扎实，尚有余地`:e>=70?`其基醇厚，其行有瑕`:e>=58?`瑕瑜互见，前路难料`:e>=45?`根基已污，恐难登顶`:`道基溃烂，止步在即`}var Be=0;function Ve(e){for(let t of e.hooks){if(!t.lethal)continue;let n=t.foreshadow??[];if(n.length<E.lethalMinForeshadow)throw Error(`[铁律二] 因果钩子「${t.id}」标记 lethal 但只有 ${n.length} 条预警（需 ≥${E.lethalMinForeshadow}）。来源：${e.source}`);if(n.filter(e=>e.window).length<E.lethalMinWindow)throw Error(`[铁律二] 因果钩子「${t.id}」缺少可干预窗口（需 ≥${E.lethalMinWindow} 个 window:true）。来源：${e.source}`)}}function He(e,t){Ve(t);let n=t.matureWindow??[...E.defaultMatureWindow],r=e.year+e.rng.range(n[0],n[1]),i={id:`k_${++Be}_${t.type}`,type:t.type,source:t.source,actor:t.actor,target:t.target,weight:t.weight,polarity:t.polarity,createdYear:e.year,matureWindow:n,chainParent:t.chainParent??null,resolved:!1,hooks:t.hooks,matureAt:r,foreshadowsSent:[],unusedWindows:[]};return e.karmaLedger.push(i),i}function Ue(e,t){let n=e.karmaLedger.find(e=>!e.resolved&&e.target===t.target&&e.type===t.type);return n?(n.weight+=t.weight,n):He(e,t)}function We(e,t){let n=[],r=0;for(let i of e.karmaLedger){if(i.resolved||i.weight<E.minEventWeight)continue;let a=Ge(e,i);if(a){for(let r of a.foreshadow??[]){let o=i.matureAt+r.at;!i.foreshadowsSent.includes(r.evt)&&e.year>=o&&e.year-t<o+t&&(i.foreshadowsSent.push(r.evt),r.window&&i.unusedWindows.push(r.evt),n.push({kind:r.window?`window`:`foreshadow`,karma:i,hook:a,evtId:r.evt,lethal:!!a.lethal}))}if(e.year>=i.matureAt&&r<E.maxResolvePerTick){let o=i.foreshadowsSent.length;if(a.lethal&&o<E.lethalMinForeshadow){i.matureAt=e.year+Math.max(2,t);continue}r++,i.resolved=!0,n.push({kind:`mature`,karma:i,hook:a,evtId:a.id,lethal:!!a.lethal})}}}return n}function Ge(e,t){if(t.hooks.length===0)return;let n=t.polarity<0?0:Math.min(t.hooks.length-1,1);return t.hooks[n]??t.hooks[0]}function Ke(e,t){let n=new Map(e.map(e=>[e.id,e])),r=[],i=n.get(t),a=new Set;for(;i&&!a.has(i.id);)a.add(i.id),r.unshift(i),i=i.chainParent?n.get(i.chainParent):void 0;return r}function qe(e){return e.filter(e=>!e.resolved).sort((e,t)=>t.weight-e.weight)}function Je(e){return e.reduce((e,t)=>e+t.polarity*t.weight,0)}var Ye=class extends Error{};function Xe(e,t){let n=t.karmaId?Ke(e.karmaLedger,t.karmaId):[];if(n.length===0&&t.kind!==`寿元`)throw new Ye(`[铁律三] 死因「${t.id}」(${t.kind}) 无因果链，无法向玩家解释。`);let r=n.flatMap(e=>e.foreshadowsSent);if(t.lethal&&t.kind!==`寿元`&&r.length<E.lethalMinForeshadow)throw new Ye(`[铁律二] 死因「${t.id}」只投放了 ${r.length} 条预警（需 ≥${E.lethalMinForeshadow}）。`);let i=n.flatMap(e=>e.unusedWindows);return e.actor.alive=!1,{cause:t,chain:n,warnings:r,missedWindows:i,atYear:Math.floor(e.year),atTier:e.actor.tier}}function Ze(e){return e.actor.ageMonths/12<e.actor.lifespanYears?null:{id:`death_lifespan`,kind:`寿元`,lethal:!0,description:`寿元耗尽，坐化于第 ${Math.floor(e.year)} 年`}}function Qe(e){let t=e.actor.lifespanYears-e.actor.ageMonths/12;return t>10||t<=0?null:`寿元将尽，尚余 ${t.toFixed(1)} 年`}function $e(e,t){let n=e.tier-t;for(let e of O.guidanceByGap)if(n>=e.gap)return{level:e.level,speedBonus:e.speedBonus,canAct:e.canAct,gap:n};return{level:O.guidanceByGap[O.guidanceByGap.length-1].level,speedBonus:0,canAct:!1,gap:n}}function et(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);if(!n)return null;let r=$e(n,e.actor.tier);if(r.speedBonus<=0)return r;let i=O.possessionPerGuidance*(1+r.gap*.08)*(1-e.actor.道心/250);return n.possession=A(n.possession+i,0,100),n.favor=A(n.favor+1,-100,100),r}function tt(e){let t=[];for(let n of e.actor.souls)if(!n.dissipated){if(n.possession>=100){t.push({soul:n,fate:`夺舍成功`}),e.actor.alive=!1;continue}if(Math.max(0,n.tier-e.actor.tier)<=0&&e.rng.chance(.02)){n.dissipated=!0,t.push({soul:n,fate:`消散`});continue}n.favor=A(n.favor-.15,-100,100)}return t}function nt(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);if(!n)return{ok:!1,text:`并无此魂`};let r=55+n.tier*4+n.possession*.3;return e.actor.道心<r?(n.possession=100,e.actor.alive=!1,{ok:!1,text:`你伸手去抓那缕残魂，却被它顺着手臂爬了进来。`}):(n.dissipated=!0,e.actor.factors.功法=A(e.actor.factors.功法+.25,.55,1.9),e.actor.业障+=25,e.actor.道心=A(e.actor.道心-12,0,100),{ok:!0,text:`你吞下了他。他毕生所学成了你的，连同他没来得及说完的那句话。`})}function rt(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);return n?n.favor<80?{ok:!1,text:`他还不信你。`}:(n.dissipated=!0,e.actor.功德+=40,e.actor.道心=A(e.actor.道心+8,0,100),{ok:!0,text:`他松开了。最后那点光散进风里，往下面去了。`}):{ok:!1,text:`并无此魂`}}function it(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);return n?n.favor<90?{ok:!1,text:`他还没打算把自己交出去。`}:(n.dissipated=!0,e.actor.talent.神魂=A(e.actor.talent.神魂+15,1,100),e.actor.factors.功法=A(e.actor.factors.功法+.18,.55,1.9),e.flags.add(`融合_${t}`),{ok:!0,text:`从此你分不清哪些念头是自己的，哪些是他的。他好像也不在意了。`}):{ok:!1,text:`并无此魂`}}function at(e){let t=e.actor;switch(t.origin){case`气运之子`:return!t.originRevealed&&e.rng.chance(.06)?`又一次恰好躲开。你开始觉得有点不对劲。`:null;case`天煞孤星`:return e.rng.chance(.04)?(e.flags.add(`孤星应验`),`你身边又少了一个人。这已经是第几个了？`):null;case`上古血脉后裔`:return t.tier>=3&&!t.originRevealed&&e.rng.chance(.08)?(t.originClues++,`血液里有什么东西在响应，像是隔着很厚的石头。`):null;case`转世重修者`:return e.rng.chance(.05)?(t.talent.悟性=A(t.talent.悟性+1,1,100),`一段不属于这一世的记忆闪过，快得抓不住。`):null;case`罪裔`:return t.业障+=.3,null;case`无名`:for(let e of Object.keys(t.secrets))t.secrets[e]=Math.max(0,t.secrets[e]-1);return null;case`容器`:return t.tier>=3&&e.rng.chance(.05)?(t.originClues++,`有人在打听你的生辰八字，问得很细。`):null;default:return null}}function ot(e,t=1){e.actor.originClues+=t}function st(e){let t=e.actor;return t.originRevealed||t.originClues<4?null:(t.originRevealed=!0,t.secrets.身世=A(t.secrets.身世+20,0,100),{origin:t.origin,text:ut(t.origin)})}function ct(e){let t=e.actor;return t.deathExemptions<=0?!1:(t.deathExemptions--,t.originRevealed||(t.originRevealed=!0,t.originClues=4),!0)}function lt(e){e.actor.origin===`气运之子`&&(e.actor.deathExemptions=pe.deathExemptPerTier)}function ut(e){switch(e){case`凡俗`:return`查到最后，什么也没有。你父母是普通人，祖上也是。
没有血脉，没有遗命，没有谁在暗中安排。走到今天的每一步，都是你自己走的。`;case`气运之子`:return`「难怪。」那位老者盯着你看了很久，「原来你是。」
他说的时候，语气里没有羡慕，只有一点说不清的怜悯。`;case`上古血脉后裔`:return`祖祠地底那口棺材是空的。棺盖内侧刻着一个名字，和你的姓氏一样。`;case`转世重修者`:return`你在梦里第无数次走到那扇门前，这次推开了。里面站着的人回过头 —— 是你。`;case`天煞孤星`:return`「命硬。」相师收了钱，「硬到旁人挨不住。你活得越久，身边越空。」`;case`棋子`:return`你把这些年的机缘一件件排开，发现它们连成了一条线。
而线的那一头，有人一直在等你走到这里。`;case`容器`:return`那个人打量你的方式，像是在看一件快要熟的东西。
「养得不错，」他说，「再等等。」`;case`遗孤`:return`那枚旧玉佩终于对上了。有人认出了它，脸色瞬间变了。`;case`双生`:return`你在千里之外受伤的那天，另一个人也在同一处疼。你们从未见过。`;case`罪裔`:return`族谱上那一页被撕掉了。撕掉的地方，纸背还留着压痕 —— 你能认出那几个字。`;case`无名`:return`天机阁推了三次，三次都是空白。掌事的手在抖：「你……是从哪儿来的？」`;case`归来者`:return`你在一具无名尸骸旁停下。它手上戴的储物戒，和你梦里那枚一模一样。`}}function dt(e){let t=fe.find(t=>t.id===e);if(!t)return 1;let n=fe.reduce((e,t)=>e+t.weight,0);return Math.round(n/t.weight*10)/10}var ft=[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`];function pt(e,t,n,r){e.actor.secrets[t]=A(e.actor.secrets[t]+n,0,100),r&&!e.knowers.some(e=>e.npc===r&&e.secret===t)&&e.knowers.push({npc:r,secret:t,risk:A(n/20,.05,.9)})}function mt(e){let t=e.actor,n=be(t.僭越),r=Se(t);n.hunted>0&&(t.secrets.金手指=A(t.secrets.金手指+n.hunted*4,0,100),t.secrets.真实修为=A(t.secrets.真实修为+n.hunted*2,0,100));for(let n of e.knowers)e.rng.chance(n.risk*.06)&&(t.secrets[n.secret]=A(t.secrets[n.secret]+6,0,100));let i=.8+r*2.2;for(let e of ft)t.secrets[e]=Math.max(0,t.secrets[e]-i)}function ht(e){return ft.filter(t=>e.actor.secrets[t]>=D.revealAt)}function gt(e,t){let n=e.knowers.filter(e=>e.npc===t).map(e=>e.secret);e.knowers=e.knowers.filter(e=>e.npc!==t);for(let t of n)e.actor.secrets[t]=Math.max(0,e.actor.secrets[t]-18);return e.actor.业障+=12+n.length*5,e.actor.道心=A(e.actor.道心-3,0,100),n}function _t(e,t){let n=e.knowers.findIndex(e=>e.npc===t);if(n<0)return!1;let r=e.knowers[n];return e.actor.secrets[r.secret]=Math.max(0,e.actor.secrets[r.secret]-10),e.knowers.splice(n,1),e.actor.业障+=2,!0}function vt(e){let t=e.actor;t.僭越=0,t.名望=0,t.锋芒=0;for(let e of ft)t.secrets[e]=0;e.knowers=[],t.factors.情报=.85,t.factors.伙伴=.9,t.factors.道侣=1,e.flags.add(`假死脱身`)}function yt(e){let t=Se(e.actor);return{faceSlapMult:1+t*(de.faceSlapMultMax-1),decayBonus:t*de.decayBonusMax,resourcePenalty:t*de.resourcePenaltyMax}}function bt(e){let{decayBonus:t}=yt(e),n=1+A(e.actor.功德,0,300)/600;e.actor.僭越=Math.max(0,e.actor.僭越-ie.decayBase*(1+t)*n)}var xt={守尸人:{name:`婴死体存 · 守尸人`,grade:`凡碑`,mult:.8,text:`肉身还在，元婴没了。往后的日子靠药和阵撑着，等一个「借婴」的法子。`},痴儿:{name:`神识裂解 · 痴儿`,grade:`凡碑`,mult:.9,text:`修为还在，人不在了。你在山里走来走去，见谁都笑，谁的名字都想不起来。`},虚空漂流:{name:`虚空吞噬 · 漂流者`,grade:`灵碑`,mult:1.1,text:`虚空裂开的那一瞬间你没抓住任何东西。此后你还活着，只是再也回不去了。`},残魂:{name:`道体崩解 · 化为残魂`,grade:`玄碑`,mult:1.4,text:`肉身尽毁，只余一缕。你飘在原地，看着自己的洞府积灰 —— 你终于成了你当年遇到的那种东西。`},地缚灵:{name:`道消 · 地缚`,grade:`凡碑`,mult:.7,text:`执念缚在这片死地上。偶尔有人路过，你想说话，他们听不见。`}},St={药王谷:`药王谷谷主`,东海:`东海岛主`,中州:`一城之主`,山野:`山野散人`,宗门:`太上长老`,北荒:`妖蛮部落王`,西域:`佛国住持`,坊市:`坊市巨商`,剑冢:`剑冢守墓人`};function Ct(e){let t=e.actor,n=Re(t),r=ce;if(e.death&&e.death.cause.kind!==`寿元`){let n=e.death.cause.kind;return{id:`death_${n}`,name:`夭折 · ${n}`,tier:`夭折`,grade:`凡碑`,fruitMult:.3+t.tier*.08,text:e.death.cause.description}}if(e.failedBranch){let n=e.failedBranch.branch?xt[e.failedBranch.branch]:void 0;return n?{id:`branch_${e.failedBranch.branch}`,name:n.name,tier:`夭折`,grade:n.grade,fruitMult:n.mult+t.tier*.1,text:n.text}:{id:`tribulation_failed`,name:`${e.failedBranch.name} · ${e.failedBranch.outcome}`,tier:`夭折`,grade:`凡碑`,fruitMult:.6+t.tier*.1,text:e.failedBranch.outcome}}if(t.souls.some(e=>e.possession>=100))return{id:`possessed`,name:`被夺舍 · ${t.souls.find(e=>e.possession>=100).name}`,tier:`夭折`,grade:`凡碑`,fruitMult:.5,text:`你最后的念头是：他早就说过的。`};if(t.堕度>=100)return{id:`possessed_by_demon`,name:`入魔失控`,tier:`夭折`,grade:`血道碑`,fruitMult:1.2,text:`你还在，但那个「你」已经不在了。往后有人会用你的名字，做你不会做的事。`};if(t.tier>=10)return t.path===`武道`&&t.talent.root===`无灵根`&&n>=r.以凡证道.perfection?{id:`mortal_ascend`,name:`以凡证道`,tier:`隐藏`,grade:`无字碑`,fruitMult:k.noSystemMult,text:`你从头到尾都是个凡人。然后你打赢了神仙。`}:n>=r.真仙.perfection&&t.僭越<r.真仙.transgression&&t.hiddenRealms.length>=9&&e.jieXian?{id:`true_immortal`,name:`真仙`,tier:`飞升`,grade:`道碑`,fruitMult:6,text:`云开，天梯落下。你回头看了一眼这座你活了千年的山，然后走了上去。`}:t.堕度>=oe.transcendBand[0]&&t.堕度<=oe.transcendBand[1]&&n>=r.堕仙.perfection&&(e.reflections??0)>=3?{id:`fallen_immortal`,name:`堕仙 · 魔祖证道`,tier:`飞升`,grade:`血道碑`,fruitMult:k.transcendMult,text:`此道自我而始，亦自我而终。后来者，勿效。`}:{id:`ascend`,name:`飞升 · 上位面一员`,tier:`飞升`,grade:`天碑`,fruitMult:3,text:`天梯尽头是另一片天。你抬头，发现上面还有人在往上走。`};if(e.steppedDown){let r=St[e.rootedAt??`山野`]??`一方之主`,i=n>=80?`玄碑`:`灵碑`;return{id:`local_${e.rootedAt??`山野`}`,name:`偏安一隅 · ${r}`,tier:`偏安`,grade:i,fruitMult:1+t.tier*.15+n/100,text:`你在这里住了下来。后来有人问起你是谁，你说，就是个种药的。`}}return!e.death&&t.tier>=5&&t.功德>200&&t.僭越<20&&n>=85?{id:`seclusion`,name:`归隐`,tier:`隐藏`,grade:`无字碑`,fruitMult:4,text:`你把修为散了。散得干干净净，像从来没修过一样。`}:t.tier>=9?n>=r.位面主宰.perfection&&t.僭越<r.位面主宰.transgression?{id:`plane_sovereign`,name:`位面主宰`,tier:`主宰`,grade:`地碑`,fruitMult:2.2,text:`这一界之内，再无人能让你抬头。而你抬头时，看见的还是那层没破的天。`}:{id:`stuck_at_9`,name:`止步渡劫期`,tier:`主宰`,grade:`玄碑`,fruitMult:1.6,text:`你在渡劫期停了下来。天劫还在上面等着，你知道自己过不去。`}:t.tier>=5?{id:`elder_${t.tier}`,name:`一方尊长 · 老死于此界`,tier:`偏安`,grade:n>=80?`玄碑`:`灵碑`,fruitMult:.9+t.tier*.14+n/150,text:`你没能再往上走一步。但这一界之内，认得你名字的人已经不多了 —— 比你年长的都死光了。`}:t.tier>=3?{id:`mortal_end_${t.tier}`,name:`碌碌一生 · 尚有薄名`,tier:`偏安`,grade:`灵碑`,fruitMult:.6+t.tier*.12,text:`结了丹，也就到此为止了。山下的人还记得你，山上的人已经忘了。`}:{id:`mortal_end_${t.tier}`,name:`碌碌一生`,tier:`偏安`,grade:`凡碑`,fruitMult:.5+t.tier*.12,text:`没什么可说的。这样的人，这座山上每年都要埋掉几十个。`}}function wt(e,t,n={}){let r=Re(e),i=e.tier*10+r*.6,a=t.fruitMult;n.noSystem&&(a*=k.noSystemMult/3),e.堕度>=46&&(a*=k.corruptMult/2),e.goldFingerTier>=0&&(a*=k.tierMult[e.goldFingerTier]??1),a*=k.difficultyMult[n.difficulty??`修士`]??1;let o=e.锋芒>0?Math.max(0,1-e.锋芒/Math.max(e.tier,1)):1;return a*=1+o*.35,Math.round(i*a)}function Tt(e){return e.tier>=ce.地方大佬.minTier&&e.alive}function Et(e,t,n){return{tick:t,year:Math.floor(n),tier:e.tier,道心:Math.round(e.道心),僭越:Math.round(e.僭越),堕度:Math.round(e.堕度),气运:Math.round(e.气运),名望:Math.round(e.名望),perfection:Math.round(Re(e))}}function Dt(e,t,n){let r=Math.max(1,Math.floor(n-t.createdYear)),i=t.resolved;if(t.polarity>0)return e.pick([`后来他活得不错，只是再没见过你。他跟人提起过一次，说当年有个人帮过他，可惜没问名字。`,`他记了你一辈子。临终前把这件事讲给了孙辈听，讲得添油加醋。`,`他后来也修出了点名堂。有人问他师承何处，他说，是一个只见过一面的人。`,`他没等到还这份人情的机会。你死的消息传到他那儿时，他沉默了很久。`]);if(t.polarity<0){if(i){let n=[`这笔账在第 ${Math.floor(t.createdYear)+Math.floor(r*.6)} 年了了。之后再没人提起。`,`他死在了你前面。死因与你无关，但也不能说全无关系。`,`你们最后一次见面时谁也没说话。这事就这么过去了。`];return e.pick(n)}let n=[`他等了你 ${r} 年，等到你死也没等来。这口气他带进了棺材。`,`他把这笔账留给了后人。你的名字被写在一张纸上，压在他家祠堂的供桌下面。`,`他后来做了和你一样的事，对另一个人。`,`他一直在找你。你死那年，他刚好走到离你三百里的地方。`];return e.pick(n)}return`此后各自行路，再无交集。`}function Ot(e){switch(e.type){case`救助`:case`施恩`:return`你救过/帮过的人`;case`杀戮`:return`死在你手上的人`;case`背叛`:return`被你辜负的人`;case`夺取`:return`被你拿走过东西的人`;case`受辱`:return`欺负过你的人`;case`毁诺`:return`你食言过的人`;case`欺骗`:return`被你骗过的人`;case`传承`:return`把东西留给你的人`;case`放走`:return`你放过一马的人`;case`灭门`:return`被你灭门的人`;case`立誓`:return`你许过诺的人`}}function kt(e){let{actor:t,ledger:n,death:r,ending:i}=e,a=new f(`${e.seed}:chronicle`),o=n.filter(e=>e.resolved),s=qe(n),c=new Set,l=[...n].sort((e,t)=>t.weight-e.weight).slice(0,12).map(t=>{let n=Dt(a,t,e.diedAtYear);for(let r=0;r<3&&c.has(n);r++)n=Dt(a,t,e.diedAtYear);return c.add(n),{name:t.target,relation:Ot(t),whatYouDid:`第 ${Math.floor(t.createdYear)} 年 · ${t.type}（因果重 ${t.weight}）`,afterward:n}}),u=[...e.flags].filter(e=>e.startsWith(`道·`)||e.startsWith(`结丹·`)||[`无系统`,`得系统`,`拒绝过系统`,`假死脱身`,`手上有人命`,`已立威`].includes(e)),d=Re(t);return{timeline:e.milestones,deathChain:r?At(r):null,missedWindows:r?.missedWindows??[],karmaResolved:o,karmaUnresolved:s,karmaNet:Math.round(Je(n)),people:l,curve:e.curve,forks:u,verdict:jt(t,n,i,e.diedAtYear),unfinished:s.slice(0,8).map(e=>`第 ${Math.floor(e.createdYear)} 年欠下的「${e.type}」—— ${e.target}（重 ${e.weight}）`),name:t.name,path:t.path,origin:t.origin,originRarity:dt(t.origin),tier:t.tier,lifespan:Math.floor(t.ageMonths/12),perfection:Math.round(d*10)/10,concealment:Math.round(Se(t)*100)/100,ending:i}}function At(e){return e.chain.map((e,t)=>`${t+1}. 第 ${Math.floor(e.createdYear)} 年 · ${e.type} · ${e.target}（重 ${e.weight}）`).join(`
`)}function jt(e,t,n,r){let i=Re(e),a=t.filter(e=>e.type===`杀戮`).length,o=t.filter(e=>e.type===`救助`||e.type===`施恩`).length,s=t.filter(e=>e.type===`毁诺`).length,c=t.filter(e=>e.type===`立誓`).length,l=e.origin===`凡俗`?`生于微末，无所凭恃`:e.originRevealed?`身负「${e.origin}」之命`:`生而不知其所以生`,u=e.souls.length>0?`得残魂而起`:n.tier===`隐藏`&&n.id===`mortal_ascend`?`不假外物`:`独行至此`,d=Se(e)>.6?`一世藏锋，未尝显名`:e.名望>200?`声名赫赫，四海皆闻`:`半明半晦，不为人知`,f=i>=95?`无瑕无垢`:i>=80?`其行有瑕，其志不移`:i>=60?`瑕瑜互见`:`根基已污`,p=[];a&&p.push(`杀${Pt(a)}人`),o&&p.push(`救${Pt(o)}人`),s&&p.push(`负${Pt(s)}诺`),c&&p.push(`践${Pt(c)}誓`);let m=Mt(e,n,i);return[`${l}，${u}，${d}。`,`${f}。${p.length?p.join(`，`)+`。`:``}`,`寿${Pt(Math.floor(e.ageMonths/12))}载，终于${Math.floor(r)}年。`,`——「${m}」`].join(`
`)}function Mt(e,t,n){return t.id===`true_immortal`?`道无捷径，唯诚而已。`:t.id===`fallen_immortal`?`此道自我而始，亦自我而终。`:t.id===`mortal_ascend`?`凡骨亦可撼天，只是无人肯信。`:t.id===`seclusion`?`知其可为而不为，是为大智。`:t.tier===`夭折`&&e.tier<=2?`此山每年埋人数十，其名多不可考。`:t.tier===`夭折`?`知其不可为而为之，是为道心；知其不可留而留之，是为执念。`:t.tier===`偏安`?`止于所当止，亦是一种圆满。`:n<60?`路是自己选的，账也是自己欠的。`:`行至水穷，坐看云起。`}var Nt=[`零`,`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`];function Pt(e){return e<10?Nt[e]:e<20?`十${e%10?Nt[e%10]:``}`:e<100?`${Nt[Math.floor(e/10)]}十${e%10?Nt[e%10]:``}`:e<1e4?String(e):`${Math.floor(e/1e4)}万${e%1e4?String(e%1e4):``}`}function Ft(e){let t=[],n=e=>{t.push(``,`── ${e} ──`)};t.push(`═`.repeat(66)),t.push(`《一生录》 · ${e.name}`),t.push(`═`.repeat(66)),t.push(`${e.path} · 位阶 ${e.tier} · 寿 ${e.lifespan} 载`),t.push(`身世「${e.origin}」（约 ${e.originRarity} 局一见）· 道途完满度 ${e.perfection}「${ze(e.perfection)}」`),t.push(`藏拙 ${e.concealment} · 因果净极性 ${e.karmaNet}`),t.push(``),t.push(`【${e.ending.name}】${e.ending.text}`),n(`① 生平`);for(let n of e.timeline.slice(0,24))t.push(`  ${String(n.year).padStart(5)}年  ${n.text}`);if(e.timeline.length>24&&t.push(`  …另有 ${e.timeline.length-24} 条`),e.deathChain&&(n(`② 死因链`),t.push(e.deathChain),e.missedWindows.length)){t.push(``,`  你本可以在这些时刻改变结局：`);for(let n of e.missedWindows)t.push(`  · ${n}`)}n(`③ 因果`),t.push(`  已了结 ${e.karmaResolved.length} 条 · 未了结 ${e.karmaUnresolved.length} 条`),n(`④ 人物志`);for(let n of e.people.slice(0,6))t.push(`  【${n.name}】${n.relation}`),t.push(`    ${n.whatYouDid}`),t.push(`    ${n.afterward}`),t.push(``);if(e.forks.length&&(n(`⑥ 岔路`),t.push(`  ${e.forks.join(` · `)}`)),n(`⑦ 判词`),t.push(e.verdict.split(`
`).map(e=>`  ${e}`).join(`
`)),e.unfinished.length){n(`⑧ 未竟之事`);for(let n of e.unfinished)t.push(`  · ${n}`);t.push(``,`  （这些会跟着你，进入下一局。）`)}return t.push(``),t.join(`
`)}var It={正道:[`练气`,`筑基`,`金丹`,`元婴`,`化神`,`炼虚`,`合体`,`大乘`,`渡劫`],魔道:[`聚煞`,`魔基`,`魔丹`,`魔婴`,`化魔`,`炼狱`,`魔身`,`大魔`,`魔劫`],鬼道:[`凝魂`,`阴煞`,`鬼将`,`鬼王`,`幽冥`,`阴神`,`冥主`,`鬼帝`,`鬼仙劫`],妖修:[`开智`,`化形`,`妖丹`,`妖将`,`妖王`,`大妖`,`妖圣`,`妖帝`,`妖皇劫`],佛道:[`入门`,`沙弥`,`比丘`,`罗汉`,`菩萨`,`明王`,`尊者`,`古佛`,`涅槃`],儒道:[`开蒙`,`秀才`,`举人`,`进士`,`大儒`,`亚圣`,`文圣`,`至圣`,`立言`],武道:[`淬体`,`洗髓`,`罡气`,`化劲`,`抱丹`,`宗师`,`武圣`,`武神`,`破凡`],散修:[`练气`,`筑基`,`金丹`,`元婴`,`化神`,`炼虚`,`合体`,`大乘`,`渡劫`]},Lt={正道:`金丹`,魔道:`魔丹`,鬼道:`鬼将印`,妖修:`妖丹`,佛道:`舍利`,儒道:`文心`,武道:`丹劲`,散修:`金丹`};function Rt(e,t){return t>=10?`飞升`:(It[e]??It.正道)[t-1]??`位阶${t}`}var zt=[`初期`,`中期`,`后期`,`圆满`];function Bt(e){let t=Rt(e.path,e.tier);if(e.tier===3&&e.goldenCoreGrade>0){let t=Lt[e.path]??`金丹`;return`${e.goldenCoreGrade>=10?`混沌${t}`:`${t}${e.goldenCoreGrade}品`}`}return e.tier>=10?t:`${t}${zt[Math.min(3,Math.floor(e.sublevel*4))]}`}var Vt=`甲乙丙丁戊己庚辛壬癸`,Ht=`子丑寅卯辰巳午未申酉戌亥`,Ut=[`零`,`壹`,`贰`,`叁`,`肆`,`伍`,`陆`,`柒`,`捌`,`玖`];function Wt(e){return`${Vt[e%10]}${Ht[e%12]}·${String(e).split(``).map(e=>Ut[Number(e)]).join(``)}`}function Gt(e,t){let n=Math.max(1,Math.floor(e.createdYear-t+16)),r=n<100?`${n}岁`:`${Math.floor(e.createdYear)}年`,i=e.target;switch(e.type){case`杀戮`:return`${r}，杀${i}${e.weight>45?`，血溅五步`:``}。`;case`救助`:return`${r}，救${i}于危难。`;case`施恩`:return`${r}，施恩于${i}，未求报。`;case`背叛`:return`${r}，负${i}。`;case`夺取`:return`${r}，取${i}之物，其人不甘。`;case`受辱`:return`${r}，为${i}所辱，未即报。`;case`毁诺`:return`${r}，毁与${i}之约。`;case`欺骗`:return`${r}，绐${i}。`;case`传承`:return`${r}，得${i}之遗泽。`;case`放走`:return`${r}，纵${i}去。`;case`立誓`:return`${r}，与${i}立誓。`;case`灭门`:return`${r}，屠${i}满门。`}}function Kt(e){let{actor:t,ledger:n,ending:r}=e,i=[...n].sort((e,t)=>t.weight-e.weight).slice(0,5).sort((e,t)=>e.createdYear-t.createdYear).map(t=>Gt(t,e.birthYear)),a=[`生${t.path===`武道`?`而无灵根`:`具${t.talent.root}`}，${t.origin===`凡俗`?`无所凭恃`:t.originRevealed?`身负「${t.origin}」`:`来历不明`}。`,...i];a.length<6&&a.push(`终，${r.name}。`);let o=Re(t),s=qt(r.grade)+ +(o>=95);return{serial:Wt(e.serialIndex),seed:e.seed,grade:r.grade,ending:r.name,daoName:t.name,finalRealm:Bt(t),perfection:Math.round(o*10)/10,verdictShort:e.verdictShort,lifespan:Math.floor(t.ageMonths/12),inscription:a,marks:{僭越:Math.round(t.僭越),因果:Math.round(n.reduce((e,t)=>e+t.polarity*t.weight,0)),功德:Math.round(t.功德),业障:Math.round(t.业障),藏拙:Math.round(Se(t)*100)/100,堕度:Math.round(t.堕度)},goldFingers:e.goldFingers,rarity:s,createdAtYear:Math.floor(e.diedAtYear)}}function qt(e){switch(e){case`凡碑`:return 1;case`灵碑`:return 2;case`玄碑`:return 3;case`地碑`:return 4;case`天碑`:return 4;case`血道碑`:return 5;case`道碑`:return 5;case`无字碑`:return 5}}function Jt(e){let t=[];t.push(`┌`+`─`.repeat(60)+`┐`);let n=(e=``)=>{t.push(`│ `+e.padEnd(58)+` │`)};n(`${e.grade}  ${`★`.repeat(e.rarity)}`),n(`编号 ${e.serial}`),n(),n(`【${e.ending}】`),n(`${e.daoName} · ${e.finalRealm}`),n(`寿 ${e.lifespan} 载 · 完满度 ${e.perfection}`),n(`「${e.verdictShort}」`),n();for(let t of e.inscription)n(t);return n(),n(`僭越 ${e.marks.僭越} · 因果 ${e.marks.因果} · 功德 ${e.marks.功德}`),n(`业障 ${e.marks.业障} · 藏拙 ${e.marks.藏拙} · 堕度 ${e.marks.堕度}`),n(`金手指：${e.goldFingers.length?e.goldFingers.join(`、`):`无`}`),n(),n(`世界种子 ${e.seed}`),t.push(`└`+`─`.repeat(60)+`┘`),t.join(`
`)}function Yt(){return{version:1,entries:[],steleCount:0,daoFruit:0,unlockedSystems:[]}}function Xt(e){switch(e.tier){case`飞升`:return`飞升`;case`主宰`:return e.id===`plane_sovereign`?`主宰`:null;case`夭折`:return e.id===`possessed_by_demon`?`魔头`:`尸骸`;case`偏安`:return e.id.startsWith(`local_`)?`传承`:null;case`隐藏`:return e.id===`seclusion`?`隐世`:`飞升`}}function Zt(e,t){e.steleCount++,e.daoFruit+=t.daoFruit;let n=Xt(t.ending);if(!n)return null;let r={kind:n,id:t.stele.serial,daoName:t.actor.name,path:t.actor.path,tier:t.actor.tier,realm:t.stele.finalRealm,inscription:t.stele.inscription,signature:t.signature,place:t.place,relics:t.relics,unfinished:t.unfinished,seed:t.stele.seed,atYear:t.stele.createdAtYear,steleGrade:t.stele.grade};return e.entries.push(r),r}function Qt(e,t){return e.entries.filter(e=>(e.kind===`飞升`||e.kind===`隐世`)&&e.tier<=t)}function $t(e){return e.entries.filter(e=>e.kind===`魔头`||e.kind===`主宰`)}function en(e){return e.entries.filter(e=>e.kind===`尸骸`&&e.relics.length>0)}function tn(e){return e.entries.filter(e=>e.kind===`传承`)}function nn(e){switch(e.kind){case`飞升`:return`一缕残魂自称「${e.daoName}」，说他当年也是从这座山走出去的。\n  「${e.signature}」`;case`主宰`:return`${e.place}的主宰之位上坐着「${e.daoName}」，${e.realm}。已在位 ${e.atYear} 年。`;case`魔头`:return`魔头「${e.daoName}」盘踞${e.place}，用的是一套你莫名眼熟的功法。\n  「${e.signature}」`;case`传承`:return`${e.place}有一处旧洞府，主人姓名已不可考，只留下几个字：「${e.signature}」`;case`尸骸`:return`${e.place}的乱石堆里有一具枯骨，手上戴着一枚储物戒。\n  戒中有：${e.relics.join(`、`)}`;case`隐世`:return`据说${e.place}深处住着一位散功的老者，从不见客。`}}var rn=[`&&`,`||`,`>=`,`<=`,`==`,`!=`,`>`,`<`,`!`,`+`,`-`,`*`,`/`],an=class extends Error{};function on(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(r===`(`){t.push({kind:`lparen`,value:r,pos:n++});continue}if(r===`)`){t.push({kind:`rparen`,value:r,pos:n++});continue}if(r===`,`){t.push({kind:`comma`,value:r,pos:n++});continue}if(r===`'`||r===`"`){let i=r,a=n+1,o=``;for(;a<e.length&&e[a]!==i;)o+=e[a++];if(a>=e.length)throw new an(`字符串未闭合 @${n}: ${e}`);t.push({kind:`str`,value:o,pos:n}),n=a+1;continue}if(/[0-9]/.test(r)){let r=``;for(;n<e.length&&/[0-9.]/.test(e[n]);)r+=e[n++];t.push({kind:`num`,value:r,pos:n});continue}let i=rn.find(t=>e.startsWith(t,n));if(i){t.push({kind:`op`,value:i,pos:n}),n+=i.length;continue}if(/[\p{L}_]/u.test(r)){let r=``;for(;n<e.length&&/[\p{L}\p{N}_.]/u.test(e[n]);)r+=e[n++];t.push({kind:`ident`,value:r,pos:n});continue}throw new an(`无法识别的字符 '${r}' @${n}: ${e}`)}return t.push({kind:`eof`,value:``,pos:n}),t}var sn=class{toks;i=0;constructor(e){this.toks=on(e)}peek(){return this.toks[this.i]}next(){return this.toks[this.i++]}eat(e,t){let n=this.peek();if(n.kind!==e||t!==void 0&&n.value!==t)throw new an(`期望 ${t??e}，实际 '${n.value}' @${n.pos}`);return this.next()}parse(){let e=this.or();return this.eat(`eof`),e}or(){let e=this.and();for(;this.peek().value===`||`;)this.next(),e={t:`bin`,op:`||`,a:e,b:this.and()};return e}and(){let e=this.cmp();for(;this.peek().value===`&&`;)this.next(),e={t:`bin`,op:`&&`,a:e,b:this.cmp()};return e}cmp(){let e=this.add();for(;[`>`,`>=`,`<`,`<=`,`==`,`!=`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.add()};return e}add(){let e=this.mul();for(;[`+`,`-`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.mul()};return e}mul(){let e=this.unary();for(;[`*`,`/`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.unary()};return e}unary(){return[`!`,`-`].includes(this.peek().value)?{t:`un`,op:this.next().value,a:this.unary()}:this.primary()}primary(){let e=this.peek();if(e.kind===`lparen`){this.next();let e=this.or();return this.eat(`rparen`),e}if(e.kind===`num`)return this.next(),{t:`lit`,v:Number(e.value)};if(e.kind===`str`)return this.next(),{t:`lit`,v:e.value};if(e.kind===`ident`){if(this.next(),e.value===`true`)return{t:`lit`,v:!0};if(e.value===`false`)return{t:`lit`,v:!1};if(e.value===`null`)return{t:`lit`,v:null};if(this.peek().kind===`lparen`){this.next();let t=[];if(this.peek().kind!==`rparen`)for(t.push(this.or());this.peek().kind===`comma`;)this.next(),t.push(this.or());return this.eat(`rparen`),{t:`call`,name:e.value,args:t}}return{t:`path`,p:e.value}}throw new an(`意外的记号 '${e.value}' @${e.pos}`)}};function cn(e){return e!==null&&e!==!1&&e!==0&&e!==``}function ln(e,t){switch(e.t){case`lit`:return e.v;case`path`:return t.get(e.p);case`call`:return t.call(e.name,e.args.map(e=>ln(e,t)));case`un`:{let n=ln(e.a,t);return e.op===`!`?!cn(n):-(Number(n)||0)}case`bin`:{if(e.op===`&&`)return cn(ln(e.a,t))?cn(ln(e.b,t)):!1;if(e.op===`||`)return cn(ln(e.a,t))?!0:cn(ln(e.b,t));let n=ln(e.a,t),r=ln(e.b,t);switch(e.op){case`==`:return n===r;case`!=`:return n!==r;case`>`:return Number(n)>Number(r);case`>=`:return Number(n)>=Number(r);case`<`:return Number(n)<Number(r);case`<=`:return Number(n)<=Number(r);case`+`:return typeof n==`string`||typeof r==`string`?String(n)+String(r):Number(n)+Number(r);case`-`:return Number(n)-Number(r);case`*`:return Number(n)*Number(r);case`/`:return Number(r)===0?0:Number(n)/Number(r);default:throw new an(`未知运算符 ${e.op}`)}}}}var un=new Map;function dn(e){let t=un.get(e);if(t)return t;let n=new sn(e).parse();return un.set(e,n),n}function fn(e,t){return ln(dn(e),t)}function pn(e,t){return!e||e==="default"||cn(fn(e,t))}var mn={tier:e=>e.actor.tier,sublevel:e=>e.actor.sublevel,path:e=>e.actor.path,goldenCoreGrade:e=>e.actor.goldenCoreGrade,hiddenRealmCount:e=>e.actor.hiddenRealms.length,道心:e=>e.actor.道心,气运:e=>e.actor.气运,功德:e=>e.actor.功德,业障:e=>e.actor.业障,僭越:e=>e.actor.僭越,堕度:e=>e.actor.堕度,丹毒:e=>e.actor.丹毒,名望:e=>e.actor.名望,锋芒:e=>e.actor.锋芒,藏拙:e=>Se(e.actor),"talent.root":e=>e.actor.talent.root,"talent.purity":e=>e.actor.talent.purity,"talent.悟性":e=>e.actor.talent.悟性,"talent.根骨":e=>e.actor.talent.根骨,"talent.神魂":e=>e.actor.talent.神魂,"factors.功法":e=>e.actor.factors.功法,"factors.法宝":e=>e.actor.factors.法宝,"factors.状态":e=>e.actor.factors.状态,"factors.灵宠":e=>e.actor.factors.灵宠,"factors.伙伴":e=>e.actor.factors.伙伴,"factors.道侣":e=>e.actor.factors.道侣,"factors.情报":e=>e.actor.factors.情报,"expose.金手指":e=>e.actor.secrets.金手指,"expose.残魂":e=>e.actor.secrets.残魂,"expose.真实修为":e=>e.actor.secrets.真实修为,"expose.身世":e=>e.actor.secrets.身世,"expose.杀过某人":e=>e.actor.secrets.杀过某人,origin:e=>e.actor.origin,originRevealed:e=>e.actor.originRevealed,originClues:e=>e.actor.originClues,year:e=>Math.floor(e.year),tick:e=>e.tick,age:e=>Math.floor(e.actor.ageMonths/12),lifespanLeft:e=>e.actor.lifespanYears-e.actor.ageMonths/12,location:e=>e.location,effectiveTier:e=>xe(e.actor),daoPerfection:e=>Re(e.actor),knowerCount:e=>e.knowers.length,maxExpose:e=>Math.max(...Object.values(e.actor.secrets))},hn={hasSystem:(e,[t])=>e.systems.includes(String(t)),hasAnySystem:e=>e.systems.length>0,hasSoul:(e,[t])=>e.actor.souls.some(e=>e.id===t&&!e.dissipated),soulFavor:(e,[t])=>e.actor.souls.find(e=>e.id===t)?.favor??0,soulPossession:(e,[t])=>e.actor.souls.find(e=>e.id===t)?.possession??0,flag:(e,[t])=>e.flags.has(String(t)),karmaWith:(e,[t])=>e.karmaLedger.filter(e=>!e.resolved&&e.target===t).reduce((e,t)=>e+t.polarity*t.weight,0),unresolvedEvil:e=>e.karmaLedger.filter(e=>!e.resolved&&e.polarity<0).length,seen:(e,[t])=>e.eventHistory.has(String(t)),seenCount:(e,[t])=>e.eventCounts.get(String(t))??0,realmAtLeast:(e,[t])=>e.actor.tier>=Number(t),knows:(e,[t])=>e.knowers.some(e=>e.npc===t),chance:(e,[t])=>e.rng.next()<Number(t),min:(e,t)=>Math.min(...t.map(Number)),max:(e,t)=>Math.max(...t.map(Number))};function gn(e){return{get(t){let n=mn[t];if(!n)throw new an(`未知的字段 '${t}'（不在 scope.ts 白名单内）`);return n(e)},call(t,n){let r=hn[t];if(!r)throw new an(`未知的函数 '${t}()'（不在 scope.ts 白名单内）`);return r(e,n)}}}Object.keys(mn),Object.keys(hn);var _n=class extends Error{},vn={道心:{get:e=>e.actor.道心,set:(e,t)=>{e.actor.道心=A(t,0,100)}},气运:{get:e=>e.actor.气运,set:(e,t)=>{e.actor.气运=A(t,0,100)}},功德:{get:e=>e.actor.功德,set:(e,t)=>{e.actor.功德=Math.max(0,t)}},业障:{get:e=>e.actor.业障,set:(e,t)=>{e.actor.业障=Math.max(0,t)}},僭越:{get:e=>e.actor.僭越,set:(e,t)=>{e.actor.僭越=Math.max(0,t)}},堕度:{get:e=>e.actor.堕度,set:(e,t)=>{e.actor.堕度=A(t,0,100)}},丹毒:{get:e=>e.actor.丹毒,set:(e,t)=>{e.actor.丹毒=A(t,0,100)}},名望:{get:e=>e.actor.名望,set:(e,t)=>{e.actor.名望=A(t,-100,1e3)}},锋芒:{get:e=>e.actor.锋芒,set:(e,t)=>{e.actor.锋芒=Math.max(0,t)}},sublevel:{get:e=>e.actor.sublevel,set:(e,t)=>{e.actor.sublevel=A(t,0,1)}},lifespan:{get:e=>e.actor.lifespanYears,set:(e,t)=>{e.actor.lifespanYears=Math.max(0,t)}},age:{get:e=>e.actor.ageMonths/12,set:(e,t)=>{e.actor.ageMonths=Math.max(0,t*12)}},originClues:{get:e=>e.actor.originClues,set:(e,t)=>{e.actor.originClues=Math.max(0,Math.floor(t))}},悟性:{get:e=>e.actor.talent.悟性,set:(e,t)=>{e.actor.talent.悟性=A(t,1,100)}},根骨:{get:e=>e.actor.talent.根骨,set:(e,t)=>{e.actor.talent.根骨=A(t,1,100)}},神魂:{get:e=>e.actor.talent.神魂,set:(e,t)=>{e.actor.talent.神魂=A(t,1,100)}},纯度:{get:e=>e.actor.talent.purity,set:(e,t)=>{e.actor.talent.purity=A(t,5,100)}}};for(let e of Object.keys(te))vn[`factors.${e}`]={get:t=>t.actor.factors[e],set:(t,n)=>{t.actor.factors[e]=A(n,te[e].min,te[e].max)}};for(let e of[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`])vn[`expose.${e}`]={get:t=>t.actor.secrets[e],set:(t,n)=>{t.actor.secrets[e]=A(n,0,100)}};function yn(e,t){let n=t.trim();if(!n)return;let r=n.split(/\s+/),i=r[0];switch(i){case`flag`:xn(r[1],n),e.flags.add(r[1]);return;case`unflag`:xn(r[1],n),e.flags.delete(r[1]);return;case`move`:xn(r[1],n),e.location=r[1];return;case`bind.system`:{xn(r[1],n);let t=r[1];e.systems.includes(t)||e.systems.push(t);return}case`bind.soul`:{xn(r[1],n);let t=r[1];e.actor.souls.some(e=>e.id===t)||e.actor.souls.push({id:t,name:t,tier:Math.min(Number(r[2]??9),O.maxTier),favor:0,possession:0,dissipated:!1});return}case`devourSoul`:{xn(r[1],n);let t=nt(e,r[1]);e.flags.add(t.ok?`吞魂成功_${r[1]}`:`吞魂失败_${r[1]}`);return}case`reincarnateSoul`:xn(r[1],n),rt(e,r[1]).ok&&e.flags.add(`送归转世_${r[1]}`);return;case`mergeSoul`:xn(r[1],n),it(e,r[1]).ok&&e.flags.add(`融合共生_${r[1]}`);return;case`witness`:{xn(r[1],n),xn(r[2],n);let t=r[2];if(!ft.includes(t))throw new _n(`未知的秘密类型 '${r[2]}'：${n}`);pt(e,t,8,r[1]);return}case`silence`:xn(r[1],n),gt(e,r[1]);return;case`eraseMemory`:xn(r[1],n),_t(e,r[1]);return;case`fakeDeath`:vt(e);return;case`stepDown`:e.flags.add(`止步`);return}if(i.startsWith(`soul.`)){let t=i.split(`.`);if(t.length!==3)throw new _n(`残魂效果格式应为 soul.<id>.<favor|possession>：${n}`);let[,a,o]=t,s=e.actor.souls.find(e=>e.id===a);if(!s)return;let c=Sn(r[1],n);if(o===`favor`)s.favor=A(s.favor+c,-100,100);else if(o===`possession`)s.possession=A(s.possession+c,0,100);else throw new _n(`残魂无此字段 '${o}'：${n}`);return}let a=vn[i];if(!a)throw new _n(`未知的效果目标 '${i}'（不在 effects.ts 白名单内）：${n}`);let o=r[1];if(o===void 0)throw new _n(`缺少数值：${n}`);o.startsWith(`=`)?a.set(e,Number(o.slice(1))):a.set(e,a.get(e)+Sn(o,n))}function bn(e,t){for(let n of t??[])yn(e,n)}function xn(e,t){if(!e)throw new _n(`缺少参数：${t}`)}function Sn(e,t){if(e===void 0)throw new _n(`缺少数值：${t}`);let n=Number(e);if(Number.isNaN(n))throw new _n(`数值无法解析 '${e}'：${t}`);return n}var Cn=[`flag`,`unflag`,`move`,`bind.system`,`bind.soul`,`devourSoul`,`reincarnateSoul`,`mergeSoul`,`silence`,`eraseMemory`],wn=[`fakeDeath`,`stepDown`];[...Object.keys(vn),...Cn,...wn];function Tn(e,t,n={}){let r=gn(e),i=n.location??e.location,a=[];for(let o of t.events.values()){if(o.location&&o.location!==i)continue;let t=e.eventHistory.get(o.id);t!==void 0&&(o.once||o.cooldown&&e.tick-t<o.cooldown)||n.excludeTags?.length&&o.tags?.some(e=>n.excludeTags.includes(e))||pn(o.cond,r)&&a.push(o)}return a}function En(e,t,n={}){let r=Tn(e,t,n);if(r.length===0)return null;let i=he(e.actor),a=r.map(e=>Math.max(.01,e.weight*(1+i*.25)));return e.rng.weighted(r,a)}function Dn(e,t){if(typeof t.text==`string`)return t.text;if(t.text.length===0)return``;let n=e.eventCounts.get(t.id)??0;return t.text[n%t.text.length]}function On(e,t){let n=gn(e);return t.choices.filter(e=>pn(e.require,n))}function kn(e,t,n){return!n||n===`none`?null:Ue(e,{type:n.type,source:t.id,actor:`player`,target:n.target,weight:n.weight,polarity:n.polarity??-1,matureWindow:n.matureWindow,hooks:n.hooks}).id}function An(e,t,n){if(!n)return{text:``,goto:null,karma:null};bn(e,n.effects);let r=kn(e,t,n.karma);return{text:n.text??``,goto:n.goto??null,karma:r}}function jn(e,t,n){e.eventHistory.set(t.id,e.tick),e.eventCounts.set(t.id,(e.eventCounts.get(t.id)??0)+1);let r=kn(e,t,n.karma);if(!n.check){bn(e,n.effects);let i=An(e,t,n.then);return{outcome:null,text:i.text,goto:i.goto,karmaCreated:i.karma??r}}let i=gn(e),a=Number(fn(n.check.actor,i)),o=Number(fn(n.check.dc,i)),s=ge(e.rng,{power:a,dc:o,scale:n.check.scale,bonus:n.check.bonus},he(e.actor)),c=An(e,t,s===`CRIT_SUCCESS`?n.onCritSuccess??n.onSuccess:s===`SUCCESS`?n.onSuccess:s===`FAIL`?n.onFail:n.onCritFail??n.onFail);return{outcome:s,text:c.text,goto:c.goto,karmaCreated:c.karma??r}}var Mn={你:`亲历（你）`,我:`自述（我）`,他:`说书（道号）`};function Nn(e,t,n=`他`){return t===`你`?e:e.split(`
`).map(e=>e.split(/(「[^」]*」)/).map(e=>e.startsWith(`「`)?e:t===`我`?e.replace(/你们/g,`我们`).replace(/你/g,`我`):e.replace(/你们/g,`几人`).replace(/你/g,n)).join(``)).join(`
`)}function Pn(e,t){return e===`我`?`我`:e===`他`?t:`你`}function Fn(e,t){return Nn(e,`他`,t)}function In(e,t,n){if(e<2)return null;let r=Math.floor(e);return r<4?[`转过年去，又是一年。`,`两三年一晃而过。`,`此后两年，山中无事。`][r%3]:r<12?`此后${Rn(r)}年，无事。`:r<50?`一晃，便是${Rn(r)}年。`:t>=4?`这一坐，便是${Rn(r)}年。出关那日，${n}认得的凡人，坟头草都换了几茬。`:`${Rn(r)}年过去了。山下已经换了人间。`}var Ln=[`零`,`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`];function Rn(e){return e<10?Ln[e]:e<20?`十${e%10?Ln[e%10]:``}`:e<100?`${Ln[Math.floor(e/10)]}十${e%10?Ln[e%10]:``}`:String(e)}var zn=3;function Bn(e){let t=[],n={title:`起于微末`,beats:[]};for(let r of e){let e=r.isMajor&&(r.kind===`scene`||r.kind===`milestone`);e&&n.beats.length>=zn?(t.push(n),n={title:r.title??r.text.slice(0,12),beats:[r]}):(e&&n.beats.length<zn&&r.title&&(n.title=n.beats.length===0?r.title??n.title:`${n.title} · ${r.title}`),n.beats.push(r))}return n.beats.length&&t.push(n),t}function Vn(e,t,n){let r=e.text.trim();if(!r)return null;switch(e.kind){case`scene`:return Nn(r,t,n);case`choice`:return r.startsWith(`「`)?r.replace(/^「【[^】]*】/,`「`):`—— ${Nn(r,t,t===`我`?`我`:`他`)}`;case`outcome`:case`notice`:return Nn(r,t,t===`我`?`我`:`他`);case`milestone`:return`是年，${Nn(r,t,n)}${/[。！？」]$/.test(r)?``:`。`}`}}function Hn(e){let t=new Set,n=[],r=!1;for(let i of e){if(i.kind===`scene`){if(i.evId&&t.has(i.evId)&&!i.isMajor){r=!0;continue}i.evId&&t.add(i.evId),r=!1,n.push(i);continue}(i.kind===`choice`||i.kind===`outcome`)&&r||((i.kind===`milestone`||i.kind===`notice`)&&(r=!1),n.push(i))}return n}function Un(e){let{daoName:t,chronicle:n,stele:r}=e,i=e.pov??`他`,a=[];a.push(`# 藏锋录 · ${t}${i===`我`?`自述`:`卷`}`),a.push(``),a.push(`> ${e.signature}`),a.push(`>`),a.push(`> —— ${t}${n.origin!==`凡俗`&&n.ending.tier!==`夭折`?`，${n.origin}`:``}，寿${Rn(n.lifespan)}载`),a.push(``);let o=Bn(Hn(e.beats)),s=null,c=i===`我`?`我`:t;if(o.forEach((e,n)=>{a.push(`## 第${Rn(n+1)}回 · ${e.title}`),a.push(``);for(let n of e.beats){if(s!==null&&n.kind===`scene`){let e=In(n.year-s,n.tier,c);e&&(a.push(e),a.push(``))}let e=Vn(n,i,t);e&&(a.push(e),a.push(``)),s=n.year}}),a.push(`## 终 · ${n.ending.name}`),a.push(``),i===`我`&&(a.push(`*（自述至此而止。以下数页为后人所补。）*`),a.push(``)),a.push(Fn(n.ending.text,t)),a.push(``),n.deathChain){a.push(`后来有人翻起这段公案，把前因后果排了出来：`),a.push(``);for(let e of n.deathChain.split(`
`))a.push(`> ${e}`);n.missedWindows.length&&(a.push(`>`),a.push(`> 局中人未曾察觉的是，有${Rn(n.missedWindows.length)}次，事情本可以不是这样。`)),a.push(``)}a.push(`---`),a.push(``),a.push(`## 跋`),a.push(``);for(let e of n.verdict.split(`
`))a.push(`> ${e}`);if(a.push(``),n.people.length){a.push(`### 书中诸人，后来`),a.push(``);for(let e of n.people.slice(0,8))a.push(`**${e.name}**（${Fn(e.relation,t)}）`),a.push(``),a.push(Fn(e.afterward,t)),a.push(``)}if(n.unfinished.length){a.push(`### 未了之事`),a.push(``);for(let e of n.unfinished)a.push(`- ${e}`);a.push(``),a.push(`（这些账没有随他入土。它们还在世上走动，等下一个人。）`),a.push(``)}return a.push(`### 碑拓`),a.push(``),a.push("```"),a.push(Jt(r)),a.push("```"),a.push(``),a.push(`*此书由一局真实的推演自动写成。世界种子 \`${e.seed}\` —— 持此种子者，可入同一世界，另写一卷。*`),a.push(``),a.join(`
`)}function Wn(e){return e.replace(/[#>*`\-\s]/g,``).length}function Gn(e){return[...e.effects??[],...e.onCritSuccess?.effects??[],...e.onSuccess?.effects??[],...e.onFail?.effects??[],...e.onCritFail?.effects??[]]}function Kn(e,t){let n=[],r=new Set,i=(e,t)=>{r.has(e)||(r.add(e),n.push({text:e,level:t}))};e.tags?.includes(`岔路`)&&i(`人生岔路 · 落子无悔`,`grave`);let a=t.karma;a&&a!==`none`&&(a.hooks?.some(e=>e.lethal)?i(`或招杀身之祸`,`grave`):a.weight>=40&&i(`结下重因果`,`warn`));for(let e of Gn(t)){let t=e.trim();t.startsWith(`fakeDeath`)?i(`假死脱身 · 尽弃身份人脉`,`grave`):t.startsWith(`stepDown`)?i(`就此止步 · 不再求进`,`grave`):t.startsWith(`devourSoul`)?i(`反吞残魂 · 败则身死`,`grave`):t.startsWith(`mergeSoul`)?i(`魂魄相融 · 不可分离`,`grave`):t.startsWith(`silence`)?i(`灭口 · 业障加身`,`grave`):t.startsWith(`bind.soul`)&&i(`引魂入体 · 祸福难料`,`warn`);let n=/^堕度 \+(\d+(?:\.\d+)?)/.exec(t);n&&Number(n[1])>=8&&i(`堕入邪道`,`grave`),n=/^lifespan -(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=5&&i(`折寿${n[1]}载`,`grave`),n=/^僭越 \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=8&&i(`僭越大增 · 天道侧目`,`warn`),n=/^业障 \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=20&&i(`业障深重`,`warn`),n=/^expose\.[^ ]+ \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=15&&i(`大损隐秘`,`warn`)}return n}function qn(e,t){return Kn(e,t).some(e=>e.level===`grave`)}var Jn=class e{ctx;db;registry;seed;maxTicks;birthYear=16;milestones=[];curve=[];notices=[];beats=[];pendingEvent=null;chainDepth=0;breakthroughCooldown=0;death=null;steppedDown=!1;failedBranch=null;finished=null;lastTags=[];stance=`打坐吐纳`;lastOutcome=null;lastDeltas=[];lastBreakthrough=null;signInYear=-1;autoResolveMinor=!0;note(e,t=`notice`){this.notices.push(e),this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:t,text:e})}constructor(e){let t=new f(e.seed);if(this.seed=e.seed,this.db=e.db,this.registry=e.registry,this.maxTicks=e.maxTicks??500,e.restore){let t=structuredClone(e.restore);if(t.pendingEventId&&!e.db.events.has(t.pendingEventId))throw Error(`快照中的事件「${t.pendingEventId}」已不存在（内容已更新）`);this.ctx={rng:f.restore(t.rng),year:t.year,tick:t.tick,actor:t.actor,karmaLedger:t.karmaLedger,log:[],flags:new Set(t.flags),systems:t.systems,eventHistory:new Map(t.eventHistory),eventCounts:new Map(t.eventCounts),location:t.location,knowers:t.knowers},this.milestones.push(...t.milestones),this.curve.push(...t.curve),this.beats.push(...t.beats),this.notices.push(...t.notices),this.pendingEvent=t.pendingEventId?e.db.events.get(t.pendingEventId):null,this.chainDepth=t.chainDepth,this.breakthroughCooldown=t.breakthroughCooldown,this.lastTags=t.lastTags,this.stance=t.stance,this.signInYear=t.signInYear??-1,this.autoResolveMinor=t.autoResolve??!0;return}let n=e.birthplace??t.pick(Te),r=ke(t,{birthplace:n,name:e.name??`无名`});this.ctx={rng:t,year:this.birthYear,tick:0,actor:r,karmaLedger:[],log:[],flags:new Set,systems:[],eventHistory:new Map,eventCounts:new Map,location:n.name,knowers:[]},this.milestones.push({year:this.birthYear,kind:`出生`,text:`生于${n.name}，${r.talent.root}`}),this.ctx.flags.add(`出身·${n.id}`),this.ctx.flags.add(`道统·${r.path}`),(r.path===`正道`||r.path===`儒道`)&&this.ctx.flags.add(`宗门弟子`);let i=e.db.events.get(`evt_prologue_${n.id}`);i&&(this.pendingEvent=i,this.beats.push({year:this.birthYear,tier:1,kind:`scene`,text:Dn(this.ctx,i),evId:i.id,title:i.title,isMajor:!0}))}snapshot(){return this.finished||!this.ctx.actor.alive?null:structuredClone({v:1,seed:this.seed,name:this.ctx.actor.name,rng:this.ctx.rng.snapshot(),year:this.ctx.year,tick:this.ctx.tick,actor:this.ctx.actor,karmaLedger:this.ctx.karmaLedger,flags:[...this.ctx.flags],systems:this.ctx.systems,eventHistory:[...this.ctx.eventHistory.entries()],eventCounts:[...this.ctx.eventCounts.entries()],location:this.ctx.location,knowers:this.ctx.knowers,milestones:this.milestones,curve:this.curve,beats:this.beats,notices:[...this.notices],pendingEventId:this.pendingEvent?.id??null,chainDepth:this.chainDepth,breakthroughCooldown:this.breakthroughCooldown,lastTags:this.lastTags,stance:this.stance,signInYear:this.signInYear,autoResolve:this.autoResolveMinor})}currentPrompt(){return this.finished?{kind:`gameover`,result:this.finished}:this.pendingEvent?{kind:`event`,card:this.pendingEvent,text:Dn(this.ctx,this.pendingEvent),choices:On(this.ctx,this.pendingEvent)}:null}advance(){if(this.finished)return{kind:`gameover`,result:this.finished};if(this.pendingEvent){let e=this.currentPrompt();if(e)return e}let{ctx:e}=this,t=e.actor;for(;t.alive&&e.tick<this.maxTicks;){e.tick++;let n=g[t.tier]??12,r=n/12;e.year+=r,t.ageMonths+=n;let i=Ne(e,this.stance);i.mishap&&this.note(`修炼时气息岔了一下，胸口发闷 —— 走火的前兆。`);for(let n of t.souls){if(n.dissipated||n.favor<=-20||n.possession>=90)continue;let r=$e(n,t.tier);r.speedBonus>0&&e.rng.chance(.25)&&(et(e,n.id),t.sublevel=Math.min(1,t.sublevel+.012*r.speedBonus))}let a=Qe(e);a&&this.note(a);let o=e.rng.chance(me.eventChance)?En(e,this.db,{excludeTags:this.lastTags}):null;if(o){this.lastTags=o.tags?.slice(0,1)??[];let n=On(e,o);if(!this.autoResolveMinor||n.length===0||this.isMajor(o,n)){this.pendingEvent=o,this.chainDepth=0;let r=Dn(e,o);return this.beats.push({year:Math.floor(e.year),tier:t.tier,kind:`scene`,text:r,evId:o.id,title:o.title,isMajor:o.tags?.includes(`主干`)||o.tags?.includes(`岔路`)}),{kind:`event`,card:o,text:r,choices:n}}let r=this.autoResolve(o,n);if(r)return r;if(!t.alive)return{kind:`gameover`,result:this.finalize()}}else this.lastTags=[];let s=this.postTick(r);if(s)return s;if(i.ready&&t.tier<10&&this.breakthroughCooldown<=0){let n=_e({power:Fe(t),dc:Pe(t),scale:Math.max(20,Pe(t)*.2)},he(t)),r=ve(e.rng,n,he(t));return{kind:`breakthrough`,toTier:t.tier+1,estimate:r}}this.breakthroughCooldown>0&&this.breakthroughCooldown--,e.tick%4==0&&this.curve.push(Et(t,e.tick,e.year))}return{kind:`gameover`,result:this.finalize()}}static MAJOR_TAGS=new Set([`主干`,`岔路`,`道德`,`抉择`,`打脸`,`止步`,`结丹`,`定道`,`系统`,`心魔`]);isMajor(t,n){return!!(t.once||t.tags?.some(t=>e.MAJOR_TAGS.has(t))||n.some(e=>!!e.require)||n.some(e=>qn(t,e))||n.some(e=>e.karma!==`none`&&typeof e.karma==`object`&&e.karma.weight>=30))}autoResolve(e,t){let{ctx:n}=this,r=e,i=t,a=0;for(;r&&a++<5;){let e=Dn(n,r);this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`scene`,text:e,evId:r.id,title:r.title});let t=i.filter(e=>!qn(r,e)),o=t.length?t:i,s=o.map((e,t)=>1/(t+1)+.3),c=n.rng.weighted(o,s);this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`choice`,text:c.text});let l=jn(n,r,c);if(l.text&&this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`outcome`,text:l.text}),r=l.goto?this.db.events.get(l.goto)??null:null,!r||(i=On(n,r),i.length===0))break;if(this.isMajor(r,i)){this.pendingEvent=r,this.chainDepth=a;let e=Dn(n,r);return this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`scene`,text:e,evId:r.id,title:r.title,isMajor:r.tags?.includes(`主干`)||r.tags?.includes(`岔路`)}),{kind:`event`,card:r,text:e,choices:i}}}return null}captureStats(){let e=this.ctx.actor;return{修为:e.sublevel*100,道心:e.道心,气运:e.气运,功德:e.功德,业障:e.业障,僭越:e.僭越,堕度:e.堕度,丹毒:e.丹毒,名望:e.名望,悟性:e.talent.悟性,根骨:e.talent.根骨,神魂:e.talent.神魂,寿元:e.lifespanYears,功法:e.factors.功法,法宝:e.factors.法宝,状态:e.factors.状态,灵宠:e.factors.灵宠,伙伴:e.factors.伙伴,道侣:e.factors.道侣,情报:e.factors.情报,暴露:Math.max(...Object.values(e.secrets))}}static WARN_KEYS=new Set([`业障`,`僭越`,`堕度`,`丹毒`,`暴露`]);static FACTOR_KEYS=new Set([`功法`,`法宝`,`状态`,`灵宠`,`伙伴`,`道侣`,`情报`]);diffStats(t){let n=this.captureStats(),r=[];for(let i of Object.keys(t)){let a=(n[i]??0)-(t[i]??0),o=e.FACTOR_KEYS.has(i);if(Math.abs(a)<(o?.015:.5))continue;let s=e.WARN_KEYS.has(i)?a>0?`warn`:`good`:a>0?`good`:`bad`,c=o?a>0?`+${a.toFixed(2)}`:a.toFixed(2):i===`修为`?`${a>0?`+`:``}${a.toFixed(1)}%`:`${a>0?`+`:``}${Math.round(a)}`;r.push({key:i,delta:a,kind:s,text:`${i} ${c}`})}return r}choose(e){let t=this.pendingEvent;if(!t)throw Error(`当前没有待处理的事件`);let n=On(this.ctx,t),r=n[e];if(!r)throw Error(`选项 ${e} 不存在（共 ${n.length} 项）`);this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`choice`,text:r.text});let i=this.captureStats(),a=jn(this.ctx,t,r);if(this.lastOutcome=a.outcome,this.lastDeltas=this.diffStats(i),a.karmaCreated){let e=this.ctx.karmaLedger.find(e=>e.id===a.karmaCreated);e&&this.lastDeltas.push({key:`因果`,delta:e.polarity,kind:e.polarity>0?`good`:e.polarity<0?`warn`:`bad`,text:`因果 · ${e.type}`})}if(a.text&&(this.notices.push(a.text),this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`outcome`,text:a.text})),(t.tags?.includes(`岔路`)||t.tags?.includes(`主干`))&&this.milestones.push({year:Math.floor(this.ctx.year),kind:`岔路`,text:`【${t.title}】`}),a.goto&&this.chainDepth<4){let e=this.db.events.get(a.goto);if(e){this.chainDepth++,this.pendingEvent=e;let t=On(this.ctx,e);if(t.length>0){let n=Dn(this.ctx,e);return this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`scene`,text:n,evId:e.id,title:e.title,isMajor:e.tags?.includes(`主干`)||e.tags?.includes(`岔路`)}),{kind:`event`,card:e,text:n,choices:t}}}}if(this.pendingEvent=null,!this.ctx.actor.alive)return{kind:`gameover`,result:this.finalize()};if(this.ctx.flags.has(`止步`)&&Tt(this.ctx.actor))return this.steppedDown=!0,this.milestones.push({year:Math.floor(this.ctx.year),kind:`结局`,text:`止步 —— 不再求进`}),{kind:`gameover`,result:this.finalize()};let o=g[this.ctx.actor.tier]??12;return this.postTick(o/12)||this.advance()}decideBreakthrough(e,t=!1){let n=this.ctx.actor;if(this.lastBreakthrough=null,!e)return this.breakthroughCooldown=6,this.note(`你压下了冲关的念头，继续温养。`),this.advance();let r=n.tier,i=Ie(this.ctx,{hiddenAttempt:t,coreGradeInvest:this.ctx.flags.has(`结丹·全押`)?.85:.4});if(i.newTier>r){lt(this.ctx);let e=Rt(n.path,i.newTier);this.milestones.push({year:Math.floor(this.ctx.year),kind:`突破`,text:`入${e}${i.hiddenAchieved?`（得隐藏境界）`:``}${i.newTier===3?` · ${i.goldenCoreGrade}品金丹`:``}`}),this.notices.push(`突破成功 —— ${e}。${i.hiddenAchieved?`而且你摸到了传说里的那一层。`:``}`),this.lastBreakthrough={ok:!0,name:e,hidden:i.hiddenAchieved},this.beats.push({year:Math.floor(this.ctx.year),tier:n.tier,kind:`milestone`,isMajor:!0,title:`入${e}`,text:`入${e}${i.hiddenAchieved?`，且踏足了世所罕闻的隐秘之境`:``}${i.newTier===3?`，结成${i.goldenCoreGrade}品金丹`:``}`})}else if(i.failure){if(this.milestones.push({year:Math.floor(this.ctx.year),kind:`突破`,text:`渡劫失败 · ${i.failure.name}`}),this.note(`突破失败 —— ${i.failure.outcome}`),i.failure.recoverable===!1||i.failure.branch)return this.failedBranch={name:i.failure.name,outcome:i.failure.outcome,branch:i.failure.branch},n.alive=!1,{kind:`gameover`,result:this.finalize()}}else this.note(`冲关未成，气机散了。所幸根基未损，还能再来。`);return this.advance()}signIn(){if(!this.ctx.systems.includes(`签到`))return{ok:!1,text:`未绑定签到系统`};let e=Math.floor(this.ctx.year);if(e<=this.signInYear)return{ok:!1,text:`今岁已签，明年再来`};this.signInYear=e;let t=this.ctx.actor,n=this.ctx.rng.pick([{text:`灵气灌顶 · 修为 +2%`,apply:()=>{t.sublevel=Math.min(1,t.sublevel+.02)}},{text:`残页功法一篇 · 功法 +0.02`,apply:()=>{t.factors.功法=Math.min(1.9,t.factors.功法+.02)}},{text:`下品法器一件 · 法宝 +0.02`,apply:()=>{t.factors.法宝=Math.min(1.75,t.factors.法宝+.02)}},{text:`疗伤玉露 · 状态 +0.06`,apply:()=>{t.factors.状态=Math.min(1.45,t.factors.状态+.06)}},{text:`静心符一道 · 道心 +1`,apply:()=>{t.道心=Math.min(100,t.道心+1)}},{text:`一点玄妙气机 · 气运 +1`,apply:()=>{t.气运=Math.min(100,t.气运+1)}}]);return n.apply(),t.僭越+=1.5,t.secrets.金手指=Math.min(100,t.secrets.金手指+1.5),this.note(`【签到系统】叮 —— 连续签到中。今日奖励：${n.text}。`),{ok:!0,text:n.text}}postTick(e){let{ctx:t}=this,n=t.actor,r=at(t);r&&(this.note(r),t.rng.chance(.4)&&ot(t));let i=st(t);i&&(this.note(i.text),this.milestones.push({year:Math.floor(t.year),kind:`机缘`,text:`身世揭晓：${i.origin}`}));for(let{soul:e,fate:n}of tt(t))this.milestones.push({year:Math.floor(t.year),kind:`因果`,text:`${e.name} · ${n}`}),this.note(`${e.name} —— ${n}。`);if(!n.alive)return{kind:`gameover`,result:this.finalize()};mt(t),bt(t),n.锋芒=xe(n)*(.15+.85*(n.secrets.真实修为/100));let a=ht(t);if(a.length){this.milestones.push({year:Math.floor(t.year),kind:`因果`,text:`秘密败露：${a.join(`、`)}`}),this.note(`瞒不住了 —— 你的${a.join(`、`)}已是公开的秘密。`);for(let e of a)n.secrets[e]=70;n.名望-=10}for(let r of We(t,e)){if(r.kind===`foreshadow`||r.kind===`window`){this.note(`（${r.evtId.replace(/_/g,` `)}）`);continue}if(!r.lethal)continue;let e=Ce(t.rng,n,xe(n)+t.rng.range(.1,.9));if(e===`FAIL`||e===`CRIT_FAIL`){if(ct(t))this.note(`你本该死在那里。可你没有。`),this.milestones.push({year:Math.floor(t.year),kind:`机缘`,text:`死里逃生`});else{let e={id:`death_${r.karma.id}`,kind:`因果致死`,lethal:!0,karmaId:r.karma.id,description:`${Math.floor(t.year-r.karma.createdYear)} 年前的「${r.karma.type}」找上门 —— ${r.karma.target}`};return this.death=Xe(t,e),this.milestones.push({year:Math.floor(t.year),kind:`死亡`,text:e.description}),{kind:`gameover`,result:this.finalize()}}}else this.note(`${r.karma.target}的旧账找上门来。你赢了这一场 —— 这一段因果，就此了结。`)}let o=Ze(t);return o?(this.death=Xe(t,o),this.milestones.push({year:Math.floor(t.year),kind:`死亡`,text:o.description}),{kind:`gameover`,result:this.finalize()}):null}finalize(){if(this.finished)return this.finished;let{ctx:e}=this,t=e.actor;t.perfectionByTier[t.tier]||(t.perfectionByTier[t.tier]=Le(t,t.hiddenRealms.includes(t.tier))),this.curve.push(Et(t,e.tick,e.year));let n=Ct({actor:t,death:this.death,steppedDown:this.steppedDown,rootedAt:e.location,failedBranch:this.failedBranch});this.milestones.push({year:Math.floor(e.year),kind:`结局`,text:n.name});let r=kt({actor:t,ledger:e.karmaLedger,milestones:this.milestones,curve:this.curve,flags:e.flags,death:this.death,ending:n,diedAtYear:e.year,seed:this.seed}),i=Kt({actor:t,ledger:e.karmaLedger,ending:n,seed:this.seed,serialIndex:this.registry.steleCount+1,birthYear:this.birthYear,diedAtYear:e.year,goldFingers:[...e.systems,...t.souls.map(e=>e.name)],verdictShort:ze(Re(t))}),a=wt(t,n,{noSystem:e.flags.has(`无系统`)});Zt(this.registry,{actor:t,ending:n,stele:i,place:e.location,signature:this.signature(),unfinished:r.unfinished,relics:this.relics(),daoFruit:a});for(let t of e.systems)this.registry.unlockedSystems.includes(t)||this.registry.unlockedSystems.push(t);let o=Un({daoName:t.name,seed:this.seed,beats:this.beats,chronicle:r,stele:i,signature:this.signature()});return this.finished={ending:n,chronicle:r,stele:i,daoFruit:a,novel:o,novelChars:Wn(o)},this.finished}signature(){let e=this.ctx.flags;return e.has(`道·剑`)?`挡我者，斩。`:e.has(`道·丹`)?`我要救的人，一个都不能少。`:e.has(`道·苟`)?`谁都可以死，我不行。`:e.has(`道·杀`)?`这世道就是这样，我认。`:e.has(`无系统`)?`我什么都没有。所以我什么都不欠。`:e.has(`拒绝过系统`)?`那东西认的不是我，是「载体」。`:`后生，老夫观你骨骼清奇。`}relics(){let e=[],t=this.ctx.actor;return t.factors.法宝>1.1&&e.push(`一件养过手的法宝`),t.factors.功法>1.2&&e.push(`半部残缺功法`),t.tier>=3&&e.push(`一枚认过主的储物戒`),this.ctx.systems.length&&e.push(`一枚温热的青玉简`),t.goldenCoreGrade>=7&&e.push(`一颗${t.goldenCoreGrade}品金丹`),e}},Yn=`# 幕一 · 主干岔路
# 对应 docs/DESIGN.md §11 的岔路节点 2–5：金手指获取 / 第一次被欺压 / 入宗 / 第一条人命
#
# 设计要点：
# · 每个 choice 必须显式声明 karma（无因果写 karma: none），由 lint 强制
# · 致死钩子必须挂 ≥2 条预警 + ≥1 个可干预窗口（铁律二）
# · 金手指通过 choice.require 注入专属选项 —— 这是内容量的核心杠杆

events:

  # ══════════════════════════════════════════════════════════
  # 岔路 2：金手指获取
  # ══════════════════════════════════════════════════════════

  - id: evt_houshan_yiwen
    title: 后山的裂缝
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && !flag('金手指已定')"
    tags: [主干, 机缘]
    text: |
      入夜，你采药归来抄了近路，脚下一空。
      腐叶盖着的地面裂开一道缝，凉气从底下冒上来，带着一股说不清的味道 ——
      像是很旧的铁，又像是烧过的纸。
      裂缝不宽，侧身能过。往下望去，隐约有一点极淡的光。
      山风过林，四下无人。这里离常有人走的山道，有三里。
    choices:
      - text: 侧身钻进去
        karma: none
        effects: ["flag 已入裂缝"]
        check: { actor: "talent.根骨 + 道心 * 0.5", dc: "58", scale: 10 }
        onSuccess:
          text: 你贴着湿冷的石壁滑下去，落地时踉跄了一下，没伤着。
          goto: evt_dongxue_sanze
        onCritSuccess:
          text: 你落得极稳，甚至在半途借力看清了石壁上的刻痕 —— 有人来过，很久以前。
          effects: ["originClues +1"]
          goto: evt_dongxue_sanze
        onFail:
          text: 石壁比看上去滑。你摔进底部，膝盖磕在石头上，疼得眼前发黑。
          effects: ["factors.状态 -0.15"]
          goto: evt_dongxue_sanze
        onCritFail:
          text: 你整个人翻着滚下去，后脑撞在石棱上。醒来时不知过了多久，血已经干在脸上。
          effects: ["factors.状态 -0.3", "lifespan -1"]
          goto: evt_dongxue_sanze

      - text: 记下位置，回去报给管事的人
        karma:
          type: 施恩
          target: 外门执事·钱通
          weight: 12
          polarity: 1
          hooks:
            - id: 记你一功
            - id: 转手吞了功劳
        effects: ["名望 +6", "flag 上报裂缝", "flag 金手指已定"]
        then:
          text: |
            你用三块石头把裂缝口垒上，折了根带杈的树枝插在旁边作记。
            下山的路上你回头看了两次。
            第二天一早，钱通带着人上了山。他拍了拍你的肩，笑得很热络。
            后来那道裂缝里出了什么，没人告诉你 —— 只是钱通那几日看你的眼神，
            像是在重新掂量一件货的价钱。

      - text: 什么都不做，转身就走
        karma: none
        effects: ["flag 金手指已定", "道心 +2"]
        then:
          text: |
            深更半夜，来历不明的洞，底下还有光 —— 这几样凑在一起，
            在话本里是机缘，在坟头上是碑文。
            你把药篓背紧了些，绕开裂缝，拣原路下了山。
            那晚你睡得很沉。只是后来许多年，你偶尔还会想起那点光。
            想起时，你已经不确定自己是庆幸，还是后悔。

  - id: evt_dongxue_sanze
    title: 洞中三物
    weight: 100
    act: 1
    once: true
    cond: "flag('已入裂缝')"
    tags: [主干, 机缘, 岔路]
    text: |
      底下是一间被山体压塌了一半的石室。
      正中的石台上并排放着三样东西：
      一枚青玉简，表面浮着极细的光纹，像是有什么在里面缓缓地转；
      一柄断剑，只剩半截，插在石缝里，剑身上凝着一层化不开的寒气；
      还有一只豁了口的药鼎，鼎壁焦黑，底下压着几片早已枯透的叶子。
      三样东西之间，隔着不到两尺。你只有一次机会 —— 石室在往下沉。
    choices:
      - text: 抓起玉简
        karma: none
        effects:
          - "flag 得系统"
          - "expose.金手指 +3"
          - "僭越 +5"
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "40", scale: 10 }
        onSuccess:
          text: 玉简入手的瞬间，那些光纹活了过来，顺着你的指缝钻进去。
          goto: evt_yujian_renzhu
        onFail:
          text: 玉简入手的瞬间，那些光纹活了过来，顺着你的指缝钻进去 —— 你痛得几乎松手。
          effects: ["factors.状态 -0.1"]
          goto: evt_yujian_renzhu

      - text: 握住断剑
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.12"
        then:
          text: |
            剑柄比石头还凉。你刚握实，寒气顺着掌心往骨头里钻，半条手臂瞬间麻了。
            拔——断剑离石的那一声不像金铁，倒像一声叹息。
            石室霎时静了。然后你听见一个苍老的声音，不在耳边，在你脑子里：
            「……多少年了。」
            那声音停了很久，久到你以为是幻觉。
            「小子。握住我的手不要抖。报上名来。」

      - text: 抱起药鼎
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +15"
          - "expose.残魂 +4"
          - "悟性 +3"
        then:
          text: |
            鼎比看上去沉得多。你把它搂进怀里的一瞬，鼎底那几片枯叶忽然无风自动，
            打着旋儿贴上你的手背 —— 一股药香从骨头缝里漫上来，苦的，却让人安心。
            「哎哟。」一个声音在你识海里响起来，像个刚睡醒的老人，
            「轻些，轻些。这鼎跟了我三百年，比你金贵。」
            顿了顿，那声音软下来：「……罢了。孩子，你叫什么？手伸出来，婆婆看看你的脉。」

      - text: 三样都不碰，原路爬出去
        karma: none
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +8"
          - "originClues +1"
        then:
          text: |
            你在三样东西前站了很久。石室还在往下沉，灰从头顶簌簌地落。
            天上不会掉这么巧的机缘 —— 巧到像是摆好了等人来拿。
            你退出去的时候，那柄断剑上的寒气似乎动了一下，又归于沉寂。
            爬出裂缝，夜风一吹，你后背全是冷汗。
            但脚下的路，每一步都踩得很实。

  - id: evt_yujian_renzhu
    title: 玉简认主
    weight: 100
    act: 1
    once: true
    cond: "flag('得系统')"
    tags: [主干, 机缘, 岔路]
    text: |
      光纹在你眼前铺开，排成一片你看不懂的字，然后忽然就看懂了。
      ——那不是文字，是**契约**。
      三段光纹分成三团，各自转着，像是在等你挑。
      你听见一个不带情绪的声音，从颅骨内侧响起：
      「载体已确认。请择其一。此后不可更改。」
      （更高阶的权柄尚未对你开放。你隐约觉得，那声音也在掂量你够不够格。）
    choices:
      - text: 「签到」——落地生根，走到哪算到哪
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +2"
        then:
          text: |
            一团光纹应声散开，钻进你眉心。凉丝丝的，像咽下一口井水。
            「叮 —— 绑定完成。签到系统，为您服务。」
            那声音忽然变得轻快殷勤，跟方才判若两人。
            「检测到宿主当前位置：无名石室（危险等级：中）。已可签到。
            温馨提示：越是凶险之地，签到奖励越是丰厚哦。」
            ……它最后那句话，让你莫名想起集市上招揽客人的贩子。

      - text: 「任务」——有人给你派活，也有人给你算账
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 任务"
          - "expose.金手指 +2"
        then:
          text: |
            一团光纹应声散开，沉入你眉心，像一块烙铁按进雪里。
            「绑定完成。任务系统，启动。」
            眼前浮出一行小字，冷冰冰的：
            【新手任务：活着离开此地。奖励：聚气散×3。失败惩罚：无（你已经死了）。】
            ——括号里那句话，它似乎觉得很有必要写清楚。

      - text: 「面板」——把这世上所有人和物都看穿
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +2"
        then:
          text: |
            一团光纹应声散开，漫进你的眼睛。世界忽然「亮」了一层——
            你低头看自己的手，一行淡淡的小字浮在皮肤上方：
            【凡躯 · 根骨中平 · 经脉三处淤塞 · 寿数：不宜示人】
            「绑定完成。」那声音说，「温馨提示：窥视强者属性有几率被察觉。
            另，关于宿主本人的『寿数』一栏，系统建议您……不要频繁查看。」

      - text: 松手。这东西认的不是你，是「载体」。
        karma: none
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "flag 拒绝过系统"
          - "道心 +12"
          - "originClues +1"
        then:
          text: |
            你松开手。玉简坠地，光纹疯了一样闪烁：
            「警告。警告。载体不得——」
            「拒绝。」你说。
            光纹僵住了。许久，那个不带情绪的声音恢复了平直，却慢了半拍：
            「……记录：第七千三百次投放，载体主动拒绝。原因：未知。」
            「很有意思。」它说了一句完全不像程序会说的话，然后彻底暗了下去。
            你把它留在原地。爬出裂缝时，你觉得脊背挺得比进来时直。

  # ══════════════════════════════════════════════════════════
  # 岔路 3：第一次被欺压
  # ══════════════════════════════════════════════════════════

  - id: evt_waimen_qiangling
    title: 岔道上的三个人
    weight: 60
    act: 1
    cooldown: 12
    cond: "tier == 1 && 名望 < 30 && !flag('已立威') && flag('宗门弟子')"
    location: 外门
    tags: [主干, 冲突, 打脸]
    text: |
      月钱刚领到手，李虎带着两个同门堵在了下山的岔道上。
      「新来的？」他掂了掂手里的木棍，「这条道是有规矩的。」
      他身后那两个笑得很难看。三个人都是练气三层，你能看出来 ——
      他们也能看出你是几层。
      风把你袖口那点药草味吹散了。这条道两边都是坡，喊人也没人听得见。
    choices:
      - text: 把灵石递过去，低头认了
        karma:
          type: 受辱
          target: 李虎
          weight: 16
          polarity: -1
          hooks:
            - id: 变本加厉
            - id: 来日打脸
            - id: 他日落魄求你
        effects: ["道心 -2", "锋芒 -0.05", "名望 -3"]

      - text: 动手
        karma:
          type: 杀戮
          target: 李虎
          weight: 22
          polarity: -1
          hooks:
            - id: 结为死仇
            - id: 暗中作梗
        check: { actor: "effectiveTier * 40 + 道心 * 0.3", dc: "48", scale: 9 }
        onCritSuccess:
          text: |
            你没等他把话说完。一击撂倒李虎，另两个愣在原地，转身就跑。
            消息当天就传遍了外门 —— 那个采药的哑巴，动起手来不要命。
          effects: ["名望 +18", "expose.真实修为 +8", "flag 已立威", "factors.状态 -0.05"]
        onSuccess:
          text: 三个人缠斗了半炷香。你挨了两棍，但李虎的鼻子歪了。
          effects: ["名望 +9", "expose.真实修为 +5", "factors.状态 -0.12"]
        onFail:
          text: 你被按在地上打了一顿。灵石还是被搜走了，外加一身伤。
          effects: ["factors.状态 -0.2", "道心 -4", "名望 -5"]
        onCritFail:
          text: |
            木棍抡在你后腰上，你听见自己身体里有什么东西响了一声。
            他们走后你在坡下躺到天亮，爬回住处时天已经蒙蒙亮。
          effects: ["factors.状态 -0.35", "lifespan -2", "道心 -6"]

      - text: 「你们要的东西，在我身后那块石头下面。」
        karma:
          type: 欺骗
          target: 李虎
          weight: 14
          polarity: -1
          hooks:
            - id: 识破后加倍报复
            - id: 传为笑谈
        check: { actor: "talent.悟性 + 道心 * 0.4", dc: "62", scale: 11 }
        onSuccess:
          text: 三个人一起回头的那一瞬间，你已经窜进了林子。
          effects: ["锋芒 -0.08", "名望 -2"]
        onFail:
          text: 李虎只瞥了一眼就笑了：「当我傻？」结果是你多挨了几下。
          effects: ["factors.状态 -0.18", "道心 -3"]

      - text: 「【签到】此地凶险，签到。」
        require: "hasSystem('签到')"
        karma: none
        effects:
          - "factors.法宝 +0.08"
          - "expose.金手指 +4"
          - "僭越 +2"

      - text: 「【独孤离】……让开。」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 15"
        karma:
          type: 杀戮
          target: 李虎
          weight: 30
          polarity: -1
          hooks:
            - id: 血债血偿
            - id: 无人敢惹
        effects:
          - "soul.独孤离.favor +8"
          - "expose.残魂 +10"
          - "expose.真实修为 +15"
          - "名望 +30"
          - "僭越 +6"
          - "flag 已立威"

  # ══════════════════════════════════════════════════════════
  # 岔路 5：第一条人命
  # ══════════════════════════════════════════════════════════

  - id: evt_diyitiao_renming
    title: 药圃里的人
    weight: 70
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.55 && flag('宗门弟子')"
    tags: [主干, 道德, 岔路]
    text: |
      你半夜回药圃取落下的镰刀，撞见一个人正在挖三年份的雪参。
      是同院的周小乙 —— 你们一起扫过三个月的地。
      他手上全是泥，抬头看见你，整个人僵住了。
      「……我娘病了。」他说，「就一株。求你了。」
      药圃丢一株雪参，管事会把整院的人都罚一遍。而按宗规，盗窃灵药，废去修为逐出山门。
    choices:
      - text: 让他走，你替他把坑填上
        karma:
          type: 救助
          target: 周小乙
          weight: 35
          polarity: 1
          matureWindow: [20, 90]
          hooks:
            - id: 来日相报
            - id: 他被查出来，供出了你
        effects: ["功德 +8", "道心 +5", "expose.杀过某人 +0"]

      - text: 按宗规扭送执事
        karma:
          type: 背叛
          target: 周小乙
          weight: 30
          polarity: -1
          matureWindow: [15, 80]
          hooks:
            - id: 他恨了你一辈子
            - id: 宗门赏识你
        effects: ["名望 +12", "道心 -6", "功德 -3"]

      - text: 「参我要一半。」
        karma:
          type: 夺取
          target: 周小乙
          weight: 25
          polarity: -1
          hooks:
            - id: 从此互相拿捏
            - id: 他先动手灭口
        effects: ["道心 -4", "factors.状态 +0.05", "堕度 +3"]

      - text: 灭口
        karma:
          type: 杀戮
          target: 周小乙
          weight: 55
          polarity: -1
          matureWindow: [25, 110]
          hooks:
            - id: 周家寻仇
              lethal: true
              foreshadow:
                - { at: -10, evt: "周家托人打听弟弟下落" }
                - { at: -4, evt: "有生面孔在山下问药圃的事" }
                - { at: -1, evt: "一个背刀的人在山门外等了三天", window: true }
            - id: 无人知晓
        effects:
          - "堕度 +12"
          - "业障 +18"
          - "道心 -12"
          - "expose.杀过某人 +25"
          - "flag 手上有人命"
`,Xn=`# 幕一 · 日常事件池
# 高频、低权重的常驻事件。它们是「僭越—藏拙」拉扯的日常载体：
# 每一次要不要露一手，都在往因果账本上记一笔。

events:

  - id: evt_saodi_wunian
    title: 藏书阁的灰
    weight: 30
    act: 1
    cooldown: 8
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 机缘]
    text: |
      轮到你扫藏书阁三层。这里放的都是没人要的残卷 ——
      缺页的、被虫蛀的、字迹泡烂了的。管事说过，扫完就走，别翻。
      你蹲下擦第七排书架底下的灰时，摸到一本没有封皮的册子。
      纸很脆。翻开第一页，只有八个字：「气行三十六，不可逆。」
    choices:
      - text: 借着扫地把它读完
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "55", scale: 12 }
        onCritSuccess:
          text: 你在昏暗里读到天黑，忽然明白了那八个字是什么意思。经脉里有什么松了一下。
          effects: ["悟性 +2", "sublevel +0.06", "道心 +3"]
        onSuccess:
          text: 你记住了大半。虽不解其意，但那些句子在心里落住了。
          effects: ["sublevel +0.03", "悟性 +1"]
        onFail:
          text: 字太潦草，读了半天头晕眼花，什么也没记住。
          effects: []
        onCritFail:
          text: |
            你照着册子上的路子试运了一遍气，胸口猛地一闷，一口血呛在袖子上。
            那八个字后面，原来还有半句被虫蛀掉了。
          effects: ["factors.状态 -0.15", "sublevel -0.04"]

      - text: 放回去，扫完就走
        karma: none
        effects: ["道心 +1"]

      - text: 「【面板】看看它的真实属性。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["sublevel +0.05", "悟性 +2", "expose.金手指 +2", "僭越 +1"]

      - text: 揣进怀里带走
        karma:
          type: 夺取
          target: 藏书阁管事
          weight: 18
          polarity: -1
          hooks:
            - id: 查到你头上
            - id: 无人在意
        effects: ["sublevel +0.05", "expose.杀过某人 +0", "道心 -2"]

  - id: evt_yuefen_lingshi
    title: 月钱
    weight: 40
    act: 1
    cooldown: 6
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 资源]
    text: |
      月钱发下来了。外门弟子每月三块下品灵石，扣掉丹药钱和住处的份子，剩两块。
      两块灵石够买什么？半瓶最次的聚气散，或者一顿有肉的饭。
      发钱的执事眼皮都没抬：「下一个。」
    choices:
      - text: 全买聚气散
        karma: none
        effects: ["sublevel +0.04", "丹毒 +3"]
      - text: 攒着
        karma: none
        effects: ["道心 +1"]
      - text: 请同院的人吃顿饭
        karma:
          type: 施恩
          target: 同院弟子
          weight: 12
          polarity: 1
          hooks:
            - id: 有人替你说话
            - id: 只当你是冤大头
        effects: ["名望 +4", "factors.情报 +0.03"]

  - id: evt_lianqi_kanpo
    title: 一个坎
    weight: 35
    act: 1
    cooldown: 10
    cond: "tier == 1 && sublevel > 0.3 && flag('宗门弟子')"
    tags: [日常, 修炼]
    text: |
      灵气行到膻中就卡住了，像一条被石头堵了的溪。
      你试了七天，每次都在同一处停下。
      同院的人说，这就是所谓的「坎」，有人三个月过去，有人一辈子过不去。
      也有人说，硬冲能过，但会留下暗伤。
    choices:
      - text: 稳着来，一天磨一点
        karma: none
        effects: ["sublevel +0.03", "道心 +2"]
      - text: 硬冲
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.5", dc: "70", scale: 12 }
        onSuccess:
          text: 灵气撞开了那道坎。你出了一身冷汗，但过去了。
          effects: ["sublevel +0.12"]
        onFail:
          text: 冲了三次，第三次胸口一阵剧痛。坎没过去，倒是伤了根本。
          effects: ["factors.状态 -0.2", "丹毒 +4", "sublevel -0.05"]
      - text: 「【苟道】不冲。就这么待着。」
        require: "hasSystem('苟道')"
        karma: none
        effects: ["sublevel +0.09", "道心 +3", "锋芒 -0.03"]

  - id: evt_shanxia_yaocai
    title: 山下的药商
    weight: 28
    act: 1
    cooldown: 12
    cond: "tier == 1 && sublevel > 0.2"
    tags: [日常, 资源, 风险]
    text: |
      镇子上来了个收药的，出价比公价高三成。
      「那点公价，糊弄谁呢。」他压低声音，「你有多少我要多少，不问出处。」
      货的来路他不问，你也清楚这钱烫不烫手。
    choices:
      - text: 卖
        karma:
          type: 夺取
          target: 宗门收购处
          weight: 20
          polarity: -1
          hooks:
            - id: 账目对不上，查了下来
            - id: 神不知鬼不觉
        effects: ["factors.法宝 +0.06", "道心 -2", "expose.真实修为 +2"]
      - text: 不卖，但记住了这个人
        karma: none
        effects: ["factors.情报 +0.05"]
      - text: 转头报给执事
        karma:
          type: 背叛
          target: 山下药商
          weight: 15
          polarity: -1
          hooks:
            - id: 药商记恨
            - id: 宗门嘉许
        effects: ["名望 +8", "功德 +2"]

  - id: evt_tongyuan_bingdao
    title: 同院的人病倒了
    weight: 25
    act: 1
    cooldown: 15
    cond: "tier == 1 && flag('宗门弟子')"
    tags: [日常, 道德]
    text: |
      住在你隔壁铺位的人夜里开始咳，咳了三天，咳出血来。
      外门没有免费的丹药。管事说，扛过去就扛过去，扛不过去就送下山。
      他攒的灵石不够，正一个个地问人借。轮到你时，他没开口，只是看着你。
    choices:
      - text: 把攒的灵石给他
        karma:
          type: 救助
          target: 隔壁铺位的人
          weight: 28
          polarity: 1
          matureWindow: [10, 70]
          hooks:
            - id: 他活下来了，记你一辈子
            - id: 他还是死了，但托人捎来一样东西
        effects: ["功德 +10", "道心 +4"]
      - text: 装作没看见
        karma:
          type: 背叛
          target: 隔壁铺位的人
          weight: 10
          polarity: -1
          hooks:
            - id: 他死前看了你一眼
            - id: 无事发生
        effects: ["道心 -3"]
      - text: 「【苏婆婆】婆婆，这是什么症候？」
        require: "hasSoul('苏婆婆')"
        karma:
          type: 救助
          target: 隔壁铺位的人
          weight: 35
          polarity: 1
          hooks:
            - id: 他成了你第一个死心塌地的人
            - id: 你救人的名声传开了
        effects:
          - "soul.苏婆婆.favor +12"
          - "功德 +15"
          - "名望 +10"
          - "expose.残魂 +6"
          - "悟性 +1"

  - id: evt_xunshan_yaoshou
    title: 巡山遇兽
    weight: 32
    act: 1
    cooldown: 9
    cond: "tier == 1 && sublevel > 0.25"
    tags: [日常, 战斗, 风险]
    text: |
      巡山的路上撞见一头一阶后期的青纹狼。它比你想的要瘦，也比你想的要饿。
      它没有立刻扑上来，只是压低身子，慢慢挪。
      你身后三十步是下山的路，跑得掉。它的皮和牙能换十块灵石。
    choices:
      - text: 打
        karma: none
        check: { actor: "effectiveTier * 45 + talent.根骨 * 0.4", dc: "52", scale: 10 }
        onCritSuccess:
          text: 一击封喉。你收拾好皮毛下山时，天还没黑。
          effects: ["factors.法宝 +0.08", "名望 +5", "expose.真实修为 +3"]
        onSuccess:
          text: 缠斗了一阵，你赢了，但小腿上添了两道口子。
          effects: ["factors.法宝 +0.05", "factors.状态 -0.1"]
        onFail:
          text: 你没打过，狼也没占到便宜。它退走了，你也退了。
          effects: ["factors.状态 -0.12"]
        onCritFail:
          text: 它咬穿了你的小臂。你是靠滚下坡才活下来的。
          effects: ["factors.状态 -0.3", "lifespan -1.5"]
      - text: 退走
        karma: none
        effects: ["锋芒 -0.02"]
      - text: 「【掠夺】杀了它，把它的东西拿过来。」
        require: "hasSystem('掠夺')"
        karma: none
        effects:
          - "factors.法宝 +0.1"
          - "sublevel +0.04"
          - "业障 +3"
          - "僭越 +3"
          - "expose.金手指 +3"

  - id: evt_zhaji_renwu
    title: 杂役任务榜
    weight: 30
    act: 1
    cooldown: 7
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 资源]
    text: |
      任务榜前挤满了人。好差事早被抢光，剩下的是：
      清理后山的粪池（五块灵石）、去乱葬岗收殓无名尸（十五块，无人接）、
      替内门师姐跑腿三个月（三块，但能见到内门的人）。
    choices:
      - text: 接粪池
        karma: none
        effects: ["factors.法宝 +0.03", "锋芒 -0.02"]
      - text: 接乱葬岗
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.6", dc: "60", scale: 12 }
        onSuccess:
          text: 三天收殓了十九具。回来时你身上的味道半个月没散，但灵石到手了。
          effects: ["factors.法宝 +0.09", "道心 +3", "功德 +5"]
        onFail:
          text: 第二天夜里你看见了不该看的东西。任务没做完，钱也没拿到。
          effects: ["道心 -5", "factors.状态 -0.08"]
      - text: 接跑腿
        karma:
          type: 施恩
          target: 内门师姐
          weight: 14
          polarity: 1
          hooks:
            - id: 她记住了你
            - id: 只当你是个跑腿的
        effects: ["factors.情报 +0.06", "名望 +3"]

  - id: evt_jinjie_liangji
    title: 练气两极
    weight: 22
    act: 1
    cooldown: 20
    cond: "tier == 1 && sublevel > 0.7 && flag('宗门弟子')"
    tags: [日常, 修炼, 抉择]
    text: |
      你已经摸到练气后期的边。
      同院一起进来的十七个人，还剩九个。有三个上了内门，六个卡在四五层。
      管事拍着你的肩说：「小子，稳点，别学那些急着出头的。」
      走廊尽头贴着内门选拔的告示，还有二十天。
    choices:
      - text: 藏着，等下一次
        karma: none
        effects: ["锋芒 -0.1", "道心 +4", "僭越 -3"]
      - text: 报名
        karma: none
        effects: ["名望 +8", "expose.真实修为 +6", "flag 报名选拔"]
      - text: 「【模拟器】先演一遍再说。」
        require: "hasSystem('模拟器')"
        karma: none
        effects:
          - "lifespan -0.5"
          - "factors.情报 +0.12"
          - "僭越 +4"
          - "expose.金手指 +5"
`,Zn=`# 幕一 · 补充事件池（外门杂役期）
# 前缀 evt_1m_，全部 act: 1，cond 均含 tier == 1。
# 主题：外门的小人物、小账目、小道德 —— 每一次「要不要多管一步」都在记账。
#
# 设计要点：
# · 每个 choice 显式声明 karma（无因果写 karma: none）
# · 药圃亏空为两卡小链：evt_1m_yaopu_kuikong 设 flag 药圃暗查，
#   蹲守成功直接 goto evt_1m_yaopu_zhenxiong，失败则靠 cond 延后触发
# · 断玉佩 / 夜半琴声分别埋身世（originClues）与鬼修伏笔（flag 鬼修·闻琴）

events:

  # ══════════════════════════════════════════════════════════
  # 宗门 · 岁考签筒
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_kaohe_chouqian
    title: 签筒
    weight: 40
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 宗门, 道德]
    text: |
      外门岁考，比试的对手抽签定。你被考功堂的罗执事叫去搬签筒。
      库房里没别人。他把一小把竹签浸进灯油里，晾干，再混回筒底 ——
      浸过油的签，指腹一搓就认得出来。
      「我侄儿今年也考。」他把签筒递给你，像递一件再平常不过的东西，
      「你只当没看见。亏不了你。」
      签筒不重。你抱着它出门，掌心全是汗。
    choices:
      - text: 只当没看见
        karma: none
        effects: ["道心 -3", "flag 签筒缄默"]

      - text: 夜里溜回库房，把签全倒出来重混一遍
        karma:
          type: 欺骗
          target: 考功堂罗执事
          weight: 14
          polarity: -1
          hooks:
            - id: 他查不出是谁动的
            - id: 他记起那几日进过库房的，只有你
        check: { actor: "talent.悟性 + 气运 * 0.3", dc: "60", scale: 11 }
        onSuccess:
          text: |
            考那日，他侄儿抽中了这一届最难缠的一个，三招落台。
            罗执事在台下把签筒盯了很久。
          effects: ["道心 +5", "功德 +4"]
        onFail:
          text: 你混签时碰翻了灯。油签是认不出了，可库房进过人，这事瞒不住。
          effects: ["道心 +3", "名望 -3", "flag 得罪罗执事"]

      - text: 到执法堂递一纸告发
        karma:
          type: 背叛
          target: 考功堂罗执事
          weight: 20
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 执法堂查实，他被夺了差事
            - id: 签筒早换干净了，反坐你一个攀诬
        effects: ["道心 +4", "flag 得罪罗执事"]

      - text: 收下好处，替他把签筒抱稳
        karma:
          type: 欺骗
          target: 应考的外门弟子
          weight: 12
          polarity: -1
          hooks:
            - id: 无人知晓
            - id: 落榜的人里，有人记了一辈子
        effects: ["factors.法宝 +0.05", "道心 -5", "堕度 +3"]

      - text: 「【面板】这筒签，谁碰过。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["factors.情报 +0.05", "expose.金手指 +2", "僭越 +1", "flag 签筒留证"]

  # ══════════════════════════════════════════════════════════
  # 修炼 · 雪夜守炉
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_xueye_shoulu
    title: 雪夜的炉
    weight: 35
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 修炼, 机缘]
    text: |
      腊月，丹房轮到你守夜。三座炉只剩中间一座还温着 —— 一炉走了三天火的凝气散。
      管事交代得死：寅时添一次霜炭，别的不许碰。
      后半夜落了雪。窗纸透进一点白，炉腔里的火忽明忽暗，像有自己的呼吸。
      你添完炭，发现火色比先前深了一线。
      书上说，火候这东西，丹师熬十年也未必摸得着门。
      炉在你面前烧着，四下无人。
    choices:
      - text: 盯着火，试着看懂它
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "66", scale: 12 }
        onCritSuccess:
          text: |
            天亮前你看懂了 —— 火不是一直烧，是一收一放。收的时候药香沉，放的时候浮。
            开炉那日，管事盯着成色看了半天：「这炉谁守的？」
          effects: ["悟性 +2", "sublevel +0.04", "flag 火候心得"]
        onSuccess:
          text: 你说不出门道，只是记住了那一收一放的节奏。往后行功，你总想起那炉火。
          effects: ["悟性 +1", "道心 +1"]
        onFail:
          text: 盯到后半夜，眼睛干得发疼，火还是那团火。
          effects: []
        onCritFail:
          text: |
            你盯得入了神，寅时误了添炭。火塌了半刻，一炉凝气散成色跌了一等 ——
            管事扣了你两个月月钱。
          effects: ["名望 -4", "factors.法宝 -0.04", "道心 -2"]

      - text: 按吩咐添炭，别的不看
        karma: none
        effects: ["道心 +1"]

      - text: 揭一线炉盖，借溢出的药气行功
        karma:
          type: 夺取
          target: 丹房管事
          weight: 10
          polarity: -1
          hooks:
            - id: 药气亏了一分，没人查出来
            - id: 开炉那日成色差了，账落在守夜的人头上
        effects: ["sublevel +0.05", "丹毒 +4", "道心 -3"]

      - text: 「【苏婆婆】婆婆，这火，对吗？」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects: ["soul.苏婆婆.favor +6", "悟性 +2", "expose.残魂 +3", "flag 火候心得"]

  # ══════════════════════════════════════════════════════════
  # 人情 · 落下的储物袋
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_shixiong_chuwudai
    title: 落下的储物袋
    weight: 35
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 道德, 人情]
    text: |
      收药的孙师兄在你屋里核完账，人走了，袋子忘在凳上 ——
      巴掌大一只青布储物袋，口上封绳还系着他惯用的双结。
      外门弟子攒三年月钱，也买不起一只入品的储物袋。
      你追出门，山道上已经没了人影。
      袋子躺在凳上。里面是什么，坠手的分量能猜出几分。
      他明早就会想起来。也可能，后天。
    choices:
      - text: 连夜送上山还他
        karma:
          type: 施恩
          target: 孙师兄
          weight: 12
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 他记下这份人情
            - id: 他反疑你动过，当面倒出来点了一遍
        effects: ["道心 +2", "名望 +2"]

      - text: 解开看一眼，再原样系上
        karma:
          type: 欺骗
          target: 孙师兄
          weight: 8
          polarity: -1
          hooks:
            - id: 双结系回去了，不差分毫
            - id: 他惯用的结，旁人系不出那个松紧
        effects: ["factors.情报 +0.04", "道心 -2"]

      - text: 借用一晚 —— 里面那册《行气浅注》，抄完就还
        karma:
          type: 夺取
          target: 孙师兄
          weight: 14
          polarity: -1
          hooks:
            - id: 抄本无痕
            - id: 书页里夹着的那根头发，不见了
        effects: ["factors.功法 +0.04", "道心 -3", "僭越 +1"]

      - text: 昧下。山道无人，天知地知。
        karma:
          type: 夺取
          target: 孙师兄
          weight: 20
          polarity: -1
          matureWindow: [8, 60]
          hooks:
            - id: 他认了倒霉
            - id: 他挨屋问过去，问到了你门口
        effects: ["factors.法宝 +0.07", "堕度 +5", "道心 -5"]

  # ══════════════════════════════════════════════════════════
  # 机缘 · 后山野果
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_houshan_yeguo
    title: 崖缝里的红果
    weight: 30
    act: 1
    cooldown: 30
    cond: "tier == 1 && flag('宗门弟子')"
    tags: [日常, 机缘, 风险]
    text: |
      采药回程，你在背阴的崖缝里看见一丛果子。指头大，红得发乌，叶形不在《百草图》前三卷里。
      凑近了闻，一股淡淡的甜，底下压着一丝说不清的腥。
      山里的老规矩：不认得的东西，红得越好看，越别碰。
      可外门弟子的份例丹药，这个月又断了。
    choices:
      - text: 摘一颗，吃了
        karma: none
        check: { actor: "talent.根骨 + 气运 * 0.5", dc: "58", scale: 12 }
        onCritSuccess:
          text: |
            果肉入口即化，一线暖气从喉头一直烧到丹田。
            你在崖下坐到日头偏西，起身时，耳目清明得像洗过一遍。
          effects: ["悟性 +2", "sublevel +0.03"]
        onSuccess:
          text: 微麻，回甘。没什么大动静，只是当夜行功，气走得比平日顺了一线。
          effects: ["sublevel +0.02", "悟性 +1"]
        onFail:
          text: 半个时辰后你蹲在溪边吐得直不起腰。回山躺了两天，舌根到现在还是麻的。
          effects: ["丹毒 +5", "factors.状态 -0.1"]
        onCritFail:
          text: |
            吐过之后是发热，烧了三天。药房的人嗅了嗅你带回的果子，皱眉：
            「蚀脉果。再多吃两颗，经脉就废了。」
          effects: ["丹毒 +8", "factors.状态 -0.18", "sublevel -0.02"]

      - text: 不碰。画下叶形，记着位置。
        karma: none
        effects: ["factors.情报 +0.03", "道心 +1"]

      - text: 摘满一兜，送药房掌眼
        karma:
          type: 施恩
          target: 药房管事
          weight: 8
          polarity: 1
          hooks:
            - id: 果然是稀罕物，记了你一功
            - id: 他说是凡果，转头自己收了起来
        effects: ["名望 +3"]

      - text: 「【苏婆婆】婆婆，这果子您认得吗？」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects: ["soul.苏婆婆.favor +6", "悟性 +2", "expose.残魂 +2"]

  # ══════════════════════════════════════════════════════════
  # 道德 · 隔帘的口试
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_koushi_daikao
    title: 隔帘的口试
    weight: 35
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 道德, 人情]
    text: |
      季考前夜，同院的王石头蹲在你门槛上，半天憋出一句话。
      明日口试，考《引气总纲》，隔帘问答，考官不见人，只听声。
      他背了一个月，睡里都在背，一睁眼还是忘。
      「再过不了，就得下山了。」他从怀里掏出布包，三块灵石，棱角都被摩挲圆了，
      「师弟，你替我进去，应三炷香。」
    choices:
      - text: 替他进去
        karma:
          type: 欺骗
          target: 考功堂
          weight: 18
          polarity: -1
          matureWindow: [5, 50]
          hooks:
            - id: 无人识破
            - id: 考官记性好，记住了这个声音
        check: { actor: "talent.悟性 + 道心 * 0.2", dc: "58", scale: 11 }
        onSuccess:
          text: |
            三炷香，你应得滴水不漏。
            放榜那日，王石头对着榜单看了很久，回头请了全院的酒。
          effects: ["factors.法宝 +0.04", "道心 -3", "堕度 +2", "flag 替人代考"]
        onFail:
          text: |
            第二炷香，帘那头忽然问了一句总纲之外的东西。你应上了 —— 应得太好了。
            帘后静了片刻：「报上名姓。」
          effects: ["道心 -4", "名望 -3", "僭越 +2", "flag 代考被疑"]

      - text: 把灵石推回去，教他三夜
        karma:
          type: 施恩
          target: 王石头
          weight: 15
          polarity: 1
          matureWindow: [3, 30]
          hooks:
            - id: 他过了，这辈子认你这个师弟
            - id: 他还是没过，收拾包袱那天没看你
        effects: ["悟性 +1", "道心 +3"]

      - text: 拒了。各人有各人的命。
        karma: none
        effects: ["道心 +1", "名望 -1"]

      - text: 「【词条】把这篇总纲拆成三句话。」
        require: "hasSystem('词条')"
        karma: none
        effects: ["悟性 +1", "功德 +2", "expose.金手指 +3", "僭越 +1"]

  # ══════════════════════════════════════════════════════════
  # 冲突 · 药圃亏空（链 1/2）
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_yaopu_kuikong
    title: 对不上的账
    weight: 45
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 宗门, 冲突]
    text: |
      月末盘点，药圃三株雪参对不上数。
      刘管事把名册摔在案上，当着一院的人点你的名：「夜里常往圃里去的，就你一个。」
      去年镰刀落在圃里，你半夜回去取过一趟 —— 这事有人看见，也有人记得。
      一院子的眼睛看过来。窗外雪参垄上，新翻的土还没盖严。
      你说什么，都像辩解。你不说，就是认了。
    choices:
      - text: 低头领罚
        karma:
          type: 受辱
          target: 药圃刘管事
          weight: 14
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 这口黑锅从此扣实了
            - id: 真凶日后露了马脚，有人想起你受过的罚
        effects: ["名望 -6", "道心 -3", "factors.法宝 -0.04", "flag 药圃背锅"]

      - text: 当众辩白
        karma: none
        check: { actor: "talent.悟性 + 名望 * 0.4", dc: "62", scale: 11 }
        onSuccess:
          text: |
            你只问了一句：「参是带泥挖走的。诸位看看我屋里，可有一件带泥的家什？」
            刘管事的脸色变了一变，改口说再查。
          effects: ["名望 +3", "道心 +2", "flag 药圃存疑"]
        onFail:
          text: 你越说，围着的人眼神越冷。空口无凭，这种事从来是先喊冤的先输。
          effects: ["名望 -6", "道心 -4", "flag 药圃背锅"]

      - text: 白日不争。入夜，去圃边蹲着。
        karma: none
        effects: ["flag 药圃暗查"]
        check: { actor: "talent.神魂 + factors.情报 * 40", dc: "55", scale: 11 }
        onSuccess:
          text: 第三夜，后半夜，雪参垄那头有了动静。
          goto: evt_1m_yaopu_zhenxiong
        onFail:
          text: |
            你蹲了五夜，雪参垄安安静静。第六夜你熬不住睡着了，
            天亮一看 —— 又少了一株。
          effects: ["名望 -3", "factors.状态 -0.05"]

      - text: 「【面板】这三株参，去了哪。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["flag 药圃暗查", "factors.情报 +0.05", "expose.金手指 +3", "僭越 +2"]

  # ══════════════════════════════════════════════════════════
  # 冲突 · 药圃亏空（链 2/2）
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_yaopu_zhenxiong
    title: 垄那头的人
    weight: 90
    act: 1
    once: true
    cond: "tier == 1 && flag('药圃暗查') && flag('宗门弟子')"
    location: 外门
    tags: [日常, 宗门, 冲突]
    text: |
      云开了一线，月光落在雪参垄上。
      挖参的人背对你蹲着，手法熟，下铲避开须根，一看就不是头一回。
      他直起身来擦汗，你看清了脸 —— 刘管事。
      三株参的账，是他自己记的；点你名那天，他的嗓门比谁都高。
      坊市的参价你听过：一株三年雪参，够还半年的赌债。
      他把参裹进布里，往回走，快要经过你藏身的这丛灌木。
    choices:
      - text: 当场喝住，天亮闹到执法堂
        karma:
          type: 夺取
          target: 药圃刘管事
          weight: 20
          polarity: -1
          matureWindow: [5, 50]
          hooks:
            - id: 他被革了差事，临走那一眼你记了很久
            - id: 执法堂里他咬定是你栽赃，各挨五十戒尺
        effects: ["名望 +6", "道心 +3", "功德 +4", "flag 药圃洗冤"]

      - text: 不出声。这个把柄，比三株参值钱。
        karma:
          type: 夺取
          target: 药圃刘管事
          weight: 16
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 他从此对你有求必应
            - id: 被人拿住把柄的人睡不安稳，总想一劳永逸
        effects: ["factors.情报 +0.06", "堕度 +4", "道心 -3", "flag 拿捏刘管事"]

      - text: 走出去，只要一句话 —— 当众还你清白
        karma:
          type: 施恩
          target: 药圃刘管事
          weight: 18
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 他寻了个由头替你翻了案，此后待你极厚
            - id: 他应得太痛快，痛快得让你后来想起就心惊
        effects: ["名望 +4", "道心 +2", "flag 药圃洗冤"]

      - text: 退回暗处，只当没看见
        karma: none
        effects: ["道心 -3"]

  # ══════════════════════════════════════════════════════════
  # 身世 · 溪底的半块玉
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_shanxi_yupei
    title: 溪底的半块玉
    weight: 30
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    tags: [日常, 身世, 机缘]
    text: |
      你在山溪里洗药材，指尖碰到一样硌手的东西。
      半块玉佩，断口圆钝，在水底不知躺了多少年。玉色发青，雕的是双鱼衔环 ——
      只剩下半环，和一尾鱼。
      你盯着那纹样看了很久。
      入宗那年你揣着的旧襁褓，角上绣的就是这个花样。
      当时管登记的执事多看了一眼，什么也没说。
      溪水从你手背上流过去，很凉。
    choices:
      - text: 贴身收好
        karma: none
        effects: ["originClues +1", "flag 断佩在手"]

      - text: 坐在溪边，把纹样想个明白
        karma: none
        check: { actor: "talent.神魂 + talent.悟性 * 0.5", dc: "64", scale: 12 }
        onSuccess:
          text: |
            双鱼衔环，鱼目是空的 —— 那不是装饰，是嵌东西的槽。
            你襁褓上的绣纹，鱼目处也留着两个针脚圈出的空。这不是巧合。
          effects: ["originClues +2", "flag 断佩在手"]
        onFail:
          text: |
            想了半日，只想起襁褓早在入宗那年就上缴了，
            如今在哪个库房，无从查起。
          effects: ["originClues +1", "道心 -2", "flag 断佩在手"]

      - text: 扔回溪里。来历不明的东西，少一桩是一桩。
        karma: none
        effects: ["道心 +2"]

      - text: 下月去坊市，当旧玉卖了
        karma: none
        effects: ["factors.法宝 +0.04", "道心 -1"]

  # ══════════════════════════════════════════════════════════
  # 道德 · 家书
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_tongxiang_jiashu
    title: 家书
    weight: 40
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    tags: [日常, 道德, 人情]
    text: |
      同乡的货郎捎来一封信，信皮磨得起了毛，是你爹的笔迹 ——
      只有他写「儿」字总缺最后一捺。
      信不长。娘入冬咳了血，郎中说要用三七年份的老参吊着；
      家里那两亩水田，已经典出去一亩。
      末尾一行字劲很轻：「勿念。修行要紧。」
      货郎蹲在山门外抽旱烟，等你的回信。他后天一早动身回乡。
    choices:
      - text: 攒下的灵石连同这月的月钱，全托他带回去
        karma:
          type: 救助
          target: 爹娘
          weight: 25
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 参买上了，娘熬过了这个冬天
            - id: 货郎路上起了贪心，到家的钱只剩一半
        effects: ["factors.法宝 -0.08", "功德 +6", "道心 +4"]

      - text: 告假回乡，守到娘病见好
        karma:
          type: 救助
          target: 爹娘
          weight: 30
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 你在床前伺候到开春，娘拉着你的手不肯放
            - id: 归期误了考核，名册上你那格空着
        effects: ["sublevel -0.04", "道心 +6", "功德 +4", "flag 回过乡"]

      - text: 回信一封：「参钱随后。」钱，留下买这个月的聚气散。
        karma:
          type: 背叛
          target: 爹娘
          weight: 18
          polarity: -1
          matureWindow: [8, 50]
          hooks:
            - id: 下一封信来时，信皮是白的
            - id: 娘熬过来了，信里再没提过病
        effects: ["sublevel +0.03", "道心 -6", "业障 +3"]

      - text: 「【任务】发布：青溪镇，寻医，限一月。」
        require: "hasSystem('任务')"
        karma: none
        effects: ["factors.法宝 -0.05", "功德 +8", "expose.金手指 +3", "僭越 +2"]

  # ══════════════════════════════════════════════════════════
  # 伏笔 · 夜半琴声
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_yeban_qinsheng
    title: 无人听见的琴
    weight: 35
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    tags: [日常, 神魂, 伏笔]
    text: |
      子时，你在铺上睁开眼。
      琴声。从后山旧坟场的方向，一声一声，隔着三里地，却像贴着耳根弹。
      你推醒同屋的人，他骂了一句，翻身又睡 —— 他听不见。
      你走到院里。满院的窗都黑着，只有你站在琴声里。
      曲子弹得极慢，弹琴的人不急。
      像是弹给谁听，又像是，在等谁听见。
    choices:
      - text: 循声去后山
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "70", scale: 12 }
        onCritSuccess:
          text: |
            旧坟场的断碑前坐着个白衣人，膝上一张琴，琴上无弦。
            他没回头，曲子也没停：「三十年了，头一个走过来的。」
            你走近两步，人和琴都淡了，只剩碑前一片压平的草。
          effects: ["神魂 +2", "factors.情报 +0.03", "flag 鬼修·闻琴"]
        onSuccess:
          text: |
            琴声在坟场边上断了。断碑，荒草，一张蒙土的旧琴桌，
            桌角压着半页焦黄的琴谱。你没碰，记下了地方。
          effects: ["factors.情报 +0.04", "flag 鬼修·闻琴"]
        onFail:
          text: |
            曲子牵着你在林子里绕。回过神来，你站在崖沿，脚尖前一步就是空的。
            琴声停了，像笑了一声。
          effects: ["道心 -4", "factors.状态 -0.08", "flag 鬼修·闻琴"]
        onCritFail:
          text: |
            一缕凉气顺着耳根钻进来。你病了半个月，
            烧退了曲子还在，一闭眼就在识海里响。
          effects: ["神魂 -2", "factors.状态 -0.15", "道心 -3", "flag 鬼修·缠身"]

      - text: 蒙头睡。听不见的东西，最好也别听。
        karma: none
        effects: ["道心 +1"]

      - text: 天亮报给巡夜执事
        karma: none
        effects: ["名望 -2", "flag 鬼修·闻琴"]

      - text: 「【独孤离】老祖，您听这琴。」
        require: "hasSoul('独孤离')"
        karma: none
        effects: ["soul.独孤离.favor +5", "expose.残魂 +2", "道心 +2", "flag 鬼修·闻琴"]

  # ══════════════════════════════════════════════════════════
  # 实干 · 溃堰
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_dayu_yaotian
    title: 溃堰
    weight: 40
    act: 1
    once: true
    cond: "tier == 1 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 宗门, 道德]
    text: |
      雨下到第三天，后半夜山洪下来了。
      锣声把整个外门敲醒 —— 药田上游的石堰裂了口子，浊水卷着碎石往垄上灌。
      三畦三年份的灵药泡在水里，多泡一刻，药性就废一分。
      刘管事站在雨里嘶喊，嗓子已经劈了。火把在雨幕里一团一团，照不清人脸。
      堰口越冲越宽。要堵，得有人下水。
    choices:
      - text: 下水，堵堰口
        karma: none
        check: { actor: "talent.根骨 + factors.状态 * 30", dc: "62", scale: 12 }
        onCritSuccess:
          text: |
            你在水里泡到天亮，和七八个人拿身子抵着门板，把口子堵住了。
            三畦灵药保下大半。点名的时候，刘管事在你名字上顿了一下。
          effects: ["功德 +8", "名望 +6", "factors.状态 -0.08", "flag 药田抢险"]
        onSuccess:
          text: 堰堵住了。你上岸时腿肚子抽筋，是被人架回去的。
          effects: ["功德 +5", "名望 +3", "factors.状态 -0.12", "flag 药田抢险"]
        onFail:
          text: |
            一个浪头把你掀出去，呛了好几口带药毒的浊水。
            堰最后是堵住了 —— 不是靠你。
          effects: ["丹毒 +3", "factors.状态 -0.15", "功德 +2"]
        onCritFail:
          text: |
            上游冲下来的木桩撞在你背上。你被捞起来时人是昏的，
            醒来已是三天后，腰到现在直不利索。
          effects: ["factors.状态 -0.3", "lifespan -1", "功德 +2"]

      - text: 不下水，抢搬垄上还没泡透的药苗
        karma: none
        effects: ["功德 +3", "名望 +2", "factors.状态 -0.05", "flag 药田抢险"]

      - text: 只顾自己名下那两垄
        karma: none
        effects: ["道心 -2", "名望 -3"]

      - text: 雨太大。你把门关严，睡了。
        karma:
          type: 背叛
          target: 外门同院
          weight: 8
          polarity: -1
          matureWindow: [3, 30]
          hooks:
            - id: 天亮点名乱成一团，没人顾得上少了谁
            - id: 名册上你那格是空的，刘管事记下了
        effects: ["道心 -4", "名望 -5"]

  # ══════════════════════════════════════════════════════════
  # 物是人非 · 收人的时节
  # ══════════════════════════════════════════════════════════

  - id: evt_1m_shourenji
    title: 又到收人的时节
    weight: 25
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.25 && flag('宗门弟子')"
    location: 外门
    tags: [日常, 宗门]
    text: |
      三月，山门大开，又到收人的时节。
      你奉命在山道上引路。新收的孩子背着包袱往上走，一路仰着头数台阶，
      数一段，回头望一段山下。
      三年前你也这么走过一遍。那时台阶两侧站着的旧人面无表情，你还想：
      修仙的人，原来都是这副样子。
      如今你站在台阶旁，新人从你面前一个个走过去。
      队尾一个瘦小的，鞋底磨穿了，一步一颠，死死咬着牙不掉队。
    choices:
      - text: 站着，看完这一队
        karma: none
        effects: ["道心 +3"]

      - text: 走过去，把那孩子的包袱接过来一段
        karma:
          type: 施恩
          target: 新弟子阿茅
          weight: 8
          polarity: 1
          matureWindow: [20, 100]
          hooks:
            - id: 多年后他还记得山道上接包袱的那只手
            - id: 头一年考核他就被刷了下去，下山那天没人送
        effects: ["功德 +2", "道心 +2"]

      - text: 对身边同伴笑一句：「又来三百，明年剩不下一半。」
        karma: none
        effects: ["道心 -2", "锋芒 +0.02"]

      - text: 什么也不做，转身去做自己的活
        karma: none
        effects: []
`,Qn=`# 幕二 · 主干岔路（筑基期）
# 对应 docs/DESIGN.md §11 岔路节点 7（定道）、10（结丹）
# 以及 T1 金手指的解锁路径 —— 「按逆天程度解锁」在内容层的落点

events:

  # ══════════════════════════════════════════════════════════
  # T1 系统解锁：筑基后玉简开放二阶权限
  # ══════════════════════════════════════════════════════════

  - id: evt_yujian_erjie
    title: 二阶权限
    weight: 90
    act: 2
    once: true
    cond: "tier >= 2 && hasAnySystem()"
    tags: [主干, 系统]
    text: |
      筑基那夜，那个声音时隔多年又响了一次。
      「载体强度达标。二阶权限解锁。」
      眼前又铺开一片光纹，比当年多、也比当年密。
      你注意到一件事：这一次，它没有说「不可更改」。
      它说的是：「请择其一。剩余选项将在下一载体处开放。」
      ——下一个载体。原来你不是第一个，也不会是最后一个。
    choices:
      - text: 「模拟器」——先看结果，再决定要不要那么活
        karma: none
        effects: ["bind.system 模拟器", "expose.金手指 +4", "僭越 +8", "originClues +1"]

      - text: 「词条」——把万物拆开，取走想要的那一条
        karma: none
        effects: ["bind.system 词条", "expose.金手指 +4", "僭越 +8", "originClues +1"]

      - text: 「掠夺」——他有的，杀了就是你的
        karma: none
        effects: ["bind.system 掠夺", "expose.金手指 +4", "僭越 +10", "堕度 +5", "originClues +1"]

      - text: 「回收站」——舍得下的，都能换回来
        karma: none
        effects: ["bind.system 回收站", "expose.金手指 +4", "僭越 +6", "originClues +1"]

      - text: 「苟道」——不动，就不会错
        karma: none
        effects: ["bind.system 苟道", "expose.金手指 +3", "僭越 +5", "锋芒 -0.15", "originClues +1"]

      - text: 「剩余选项将在下一载体处开放」——你问它，上一个载体去哪了。
        karma: none
        effects: ["道心 +6", "originClues +2", "flag 追问过系统"]

  # ══════════════════════════════════════════════════════════
  # 岔路 7：定道（决定道心的判定标准，全程不可更改）
  # ══════════════════════════════════════════════════════════

  - id: evt_dingdao
    title: 你的道
    weight: 100
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.35"
    tags: [主干, 岔路, 定道]
    text: |
      筑基之后，师父只问了一句话：「你修的是什么？」
      你说功法名字。他摇头。
      「我问的不是你练什么。我问的是 ——
      往后八百年，你遇到过不去的坎、咽不下的气、放不下的人，
      你拿什么撑住自己？」
      他没等你回答，转身走了。
      「想清楚了再来找我。想不清楚，就一辈子卡在这儿。」
    choices:
      - text: 「剑。挡我者，斩。」
        karma: none
        effects: ["flag 道·剑", "factors.功法 +0.15", "道心 +8", "锋芒 +0.1"]

      - text: 「丹。我要救的人，一个都不能少。」
        karma: none
        effects: ["flag 道·丹", "悟性 +5", "道心 +8", "功德 +10"]

      - text: 「活。谁都可以死，我不行。」
        karma: none
        effects: ["flag 道·苟", "道心 +6", "锋芒 -0.2", "僭越 -10"]

      - text: 「杀。这世道就是这样，我认。」
        karma: none
        effects: ["flag 道·杀", "factors.功法 +0.2", "堕度 +8", "道心 +5", "业障 +5"]

      - text: 「我不知道。」
        karma: none
        effects: ["flag 道·未定", "道心 -5", "悟性 +2"]

  # ══════════════════════════════════════════════════════════
  # 岔路 10：结丹 —— 一次性、不可逆、高方差的全局收敛点
  # ══════════════════════════════════════════════════════════

  - id: evt_jiedan_qianye
    title: 结丹前夜
    weight: 120
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.9"
    tags: [主干, 岔路, 结丹]
    text: |
      灵气已经满了，压在丹田里转不动，像一锅烧到了边上的水。
      再拖下去会自燃，现在动手，就是一锤子买卖 ——
      金丹的品级一旦定下，往后每一个境界的上限都跟着定下。
      一品和九品，差的不是一点修为，是八百年后你站在哪儿。
      桌上摆着你这些年攒的全部家当。用多少，什么时候用，没人能替你决定。
    choices:
      - text: 稳一点。留三成压箱底，够用就行。
        karma: none
        effects: ["flag 结丹·稳", "道心 +4"]

      - text: 全押。把所有天材地宝一次投进去。
        karma: none
        effects: ["flag 结丹·全押", "道心 -2"]

      - text: 「【苏婆婆】婆婆，您当年是怎么结的丹？」
        require: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 30"
        karma: none
        effects:
          - "flag 结丹·稳"
          - "soul.苏婆婆.favor +10"
          - "悟性 +3"
          - "道心 +6"
          - "expose.残魂 +5"

      - text: 「【独孤离】老祖，压得住吗？」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 30"
        karma: none
        effects:
          - "flag 结丹·全押"
          - "soul.独孤离.favor +6"
          - "soul.独孤离.possession +8"
          - "factors.功法 +0.1"
          - "expose.残魂 +6"

      - text: 「【模拟器】先演一百遍，挑最好的那次。」
        require: "hasSystem('模拟器')"
        karma: none
        effects:
          - "flag 结丹·全押"
          - "lifespan -8"
          - "悟性 +4"
          - "僭越 +15"
          - "expose.金手指 +10"

      - text: 抢一颗现成的。城东那位散修，闭关到第七天了。
        karma:
          type: 杀戮
          target: 城东散修·陆七
          weight: 60
          polarity: -1
          matureWindow: [20, 100]
          hooks:
            - id: 陆家满门寻仇
              lethal: true
              foreshadow:
                - { at: -12, evt: "城东那处宅子挂上了白幡" }
                - { at: -5, evt: "有人在坊市高价打听你的行踪" }
                - { at: -1, evt: "一队人马堵住了你洞府的三个出口", window: true }
            - id: 死无对证
        effects:
          - "flag 结丹·夺"
          - "堕度 +18"
          - "业障 +30"
          - "道心 -10"
          - "expose.杀过某人 +30"
          - "僭越 +12"

  # ══════════════════════════════════════════════════════════
  # 筑基期日常：藏拙与锋芒的持续拉扯
  # ══════════════════════════════════════════════════════════

  - id: evt_zongmen_dabi
    title: 宗门大比
    weight: 45
    act: 2
    cooldown: 25
    cond: "tier == 2"
    tags: [冲突, 藏拙]
    text: |
      三年一度的大比。赢了有资源、有名分、有师门倚重；
      输了什么都没有，但也没人再盯着你。
      你站在报名处，前面那个人报完名回头看了你一眼 ——
      去年他还是外门跟你一起扫地的。
    choices:
      - text: 认真打，能赢多少赢多少
        karma: none
        check: { actor: "effectiveTier * 50 + 道心 * 0.4", dc: "115", scale: 14 }
        onCritSuccess:
          text: 你一路打到最后。名字挂上了内门榜首。当晚就有三位长老递话过来。
          effects: ["名望 +40", "expose.真实修为 +25", "factors.功法 +0.12", "factors.情报 +0.1"]
        onSuccess:
          text: 进了前十。有人开始记住你的名字。
          effects: ["名望 +18", "expose.真实修为 +12", "factors.法宝 +0.08"]
        onFail:
          text: 第二轮出局。没人多看你一眼。
          effects: ["名望 -3"]
        onCritFail:
          text: 首轮就被打下台，肋骨断了两根。台下有人笑出了声。
          effects: ["factors.状态 -0.25", "道心 -6", "名望 -8"]

      - text: 报名，但只打到中游就收
        karma: none
        effects: ["锋芒 -0.12", "僭越 -5", "名望 +4", "道心 +3"]

      - text: 不报
        karma: none
        effects: ["锋芒 -0.2", "僭越 -8", "名望 -6"]

      - text: 「【苟道】不报。一动不如一静。」
        require: "hasSystem('苟道')"
        karma: none
        effects: ["sublevel +0.08", "锋芒 -0.25", "僭越 -10", "道心 +4"]
`,$n=`# 幕二 · 日常事件池（筑基期）
# 视野从「活下去」扩到「一个山头」：坊市、宗门人事、道基旧账、同辈与旧识。
# 前缀 evt_a2_，全部 act: 2。
#
# 设计要点：
# · 每个 choice 显式声明 karma（无因果写 karma: none）
# · 押送卡（evt_a2_yasong_lingcai）承担 witness / silence 的暴露线联动，
#   灭口选项按铁律二挂满预警链
# · 心魔卡消费 flag('手上有人命')，与幕一「灭口」及本文件押送卡形成回响

events:

  # ══════════════════════════════════════════════════════════
  # 游历 · 第一次独自下山
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_fangshi_chuxing
    title: 青石坊市
    weight: 40
    act: 2
    cooldown: 18
    cond: "tier == 2"
    tags: [日常, 游历, 资源]
    text: |
      筑基之后，师门第一次放你独自下山 —— 去青石坊市替丹房购一批朱砂芝。
      坊市比你想的吵。卖符的、卖丹的、卖「前朝洞府图」的，一条街挤了三百个摊子。
      带你入行的老执事只交代过一句：「坊市十件货，两三件是假的。看不出来，就别多花一个子儿。」
      朱砂芝买齐了，还剩十一块灵石。街角的摊子上，一柄锈得看不出本相的短剑标价八块。
      摊主蹲在后头抽烟杆，眼皮都不抬。
    choices:
      - text: 蹲下来，仔细看那柄剑
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "68", scale: 12 }
        onCritSuccess:
          text: 锈是拿药水养出来的，剑脊的纹路骗不了人。你不动声色付了八块。回山的路上，剑在包袱里轻轻鸣了一声。
          effects: ["factors.法宝 +0.15", "flag 捡漏·锈剑"]
        onSuccess:
          text: 剑是凡铁，锈也是真锈。倒是摊角一册水渍斑斑的旧拳谱，两块灵石拿下 —— 是真的。
          effects: ["factors.功法 +0.04"]
        onFail:
          text: 你付了八块。三天后剑身的「锈」搓下来了 —— 底下是打磨过的凡铁。八块灵石，买了个教训。
          effects: ["factors.法宝 -0.08", "道心 -2", "flag 坊市吃过亏"]
        onCritFail:
          text: 摊主收钱时多看了你两眼。当晚客栈进了贼，把你剩下的灵石摸了个干净 —— 那摊主是望风的。
          effects: ["factors.法宝 -0.12", "道心 -3", "flag 坊市吃过亏"]

      - text: 办完差事就回山，一个子儿不多花
        karma: none
        effects: ["道心 +2", "锋芒 -0.02"]

      - text: 找个茶棚坐半天，只听人说话
        karma: none
        effects: ["factors.情报 +0.08"]

      - text: 「【面板】看看这条街上有几件真货。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["factors.法宝 +0.1", "factors.情报 +0.05", "expose.金手指 +3", "僭越 +2"]

  # ══════════════════════════════════════════════════════════
  # 游历 · 荒村除祟
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_huangcun_chusui
    title: 李家坳的祟
    weight: 35
    act: 2
    cooldown: 25
    cond: "tier == 2"
    tags: [日常, 游历, 道德]
    text: |
      下山办事路过李家坳，村正带着一村人跪在道边拦你 —— 村里闹祟，入夜就有哭声绕着祠堂转，
      已经吓死了一个老人。「仙师除了它，全村凑三十块灵石。」三十块，对一个穷村不是小数。
      入夜你守在祠堂。哭声果然来了 —— 那不是什么凶煞，是个新死的游魂，身上七八处钝器伤。
      它绕着祠堂，一个字一个字地哭：「还我药篓。」
      村正站在你身后，脸白得比鬼还快。
    choices:
      - text: 逼村正交出药篓，让死者入土。灵石一块不收。
        karma:
          type: 救助
          target: 李家坳游魂
          weight: 20
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 游魂入土前回头看了你一眼
            - id: 村人怕你说出去，反咬一口
        effects: ["功德 +10", "道心 +4", "名望 +3", "flag 知道李家坳的事"]

      - text: 收钱，把它打散。死人不会再哭。
        karma:
          type: 杀戮
          target: 李家坳游魂
          weight: 18
          polarity: -1
          hooks:
            - id: 怨气入体
            - id: 无人知晓
        effects: ["factors.法宝 +0.06", "业障 +8", "堕度 +4", "道心 -4"]

      - text: 收一半钱，超度它上路。别的不问。
        karma: none
        effects: ["factors.法宝 +0.03", "功德 +3", "道心 -2"]

      - text: 「【苏婆婆】婆婆，这几处伤，您给掌掌眼。」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.苏婆婆.favor +8"
          - "expose.残魂 +4"
          - "悟性 +1"
          - "flag 知道李家坳的事"

  # ══════════════════════════════════════════════════════════
  # 宗门 · 内门册封仪式
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_neimen_cefeng
    title: 册封
    weight: 60
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 宗门, 站队]
    text: |
      筑基满月，宗门开册封礼。你跪在丹陛下听司仪唱名，领了内门玉牌，和一座向阳的洞府。
      礼成之后，两拨人几乎同时到了你洞府门口。
      剑峰的执事留下一柄剑穗：「峰主说，你的剑意像一个故人。」
      丹阁的管事留下一盒丹药：「阁老说，好苗子不该去挨刀。」
      两份礼都不轻。收哪份，明天全内门都会知道。
    choices:
      - text: 收剑穗
        karma:
          type: 施恩
          target: 剑峰峰主
          weight: 20
          polarity: 1
          hooks:
            - id: 峰主亲自点拨
            - id: 卷进剑丹两峰的旧怨
        effects: ["flag 站队·剑峰", "factors.功法 +0.08", "锋芒 +0.05", "名望 +6"]

      - text: 收丹药
        karma:
          type: 施恩
          target: 丹阁阁老
          weight: 20
          polarity: 1
          hooks:
            - id: 阁老另眼相看
            - id: 替丹阁挡了一件说不清的事
        effects: ["flag 站队·丹阁", "丹毒 -4", "悟性 +2", "名望 +6"]

      - text: 两份都原样退回
        karma: none
        effects: ["flag 两不沾", "道心 +5", "名望 -4", "锋芒 -0.04"]

      - text: 两份都收下
        karma:
          type: 欺骗
          target: 剑丹两峰
          weight: 16
          polarity: -1
          hooks:
            - id: 两边都当你是自己人
            - id: 两边同时发现了
        effects: ["factors.功法 +0.05", "丹毒 -2", "僭越 +3", "道心 -3"]

      - text: 「【独孤离】老祖，谁的剑意像您的故人？」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "flag 站队·剑峰"
          - "soul.独孤离.favor +6"
          - "expose.残魂 +3"
          - "originClues +1"

  # ══════════════════════════════════════════════════════════
  # 宗门 · 执事缺位的争夺
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_zhishi_zhengduo
    title: 空出来的位子
    weight: 45
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 宗门, 人情]
    text: |
      丹房执事告老，位子空了出来。内门谁都知道这是个肥缺 —— 管着每月的丹药份例。
      争的人有两个。赵乾，丹阁管事的师侄，底子硬，待人刻薄；
      孟秋，和你同年入的外门，熬了十几年才筑基，人缘好，靠山没有。
      两人先后来找你 —— 内门弟子联名保举，你的名字如今值几分量。
      赵乾开的价是三炉份例。孟秋什么都没开，只是坐了很久。
    choices:
      - text: 保孟秋
        karma:
          type: 施恩
          target: 孟秋
          weight: 25
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 丹房从此有你一盏灯
            - id: 他坐不稳，连累保举的人
        effects: ["名望 +4", "道心 +3", "flag 保举孟秋"]

      - text: 保赵乾
        karma:
          type: 施恩
          target: 赵乾
          weight: 18
          polarity: 1
          hooks:
            - id: 三炉份例如约而至
            - id: 他上了位，转头就不认账
        effects: ["factors.法宝 +0.05", "道心 -3", "flag 保举赵乾"]

      - text: 谁也不保
        karma: none
        effects: ["锋芒 -0.05", "名望 -2", "道心 +1"]

      - text: 放话出去 —— 这位子，你也要争
        karma:
          type: 夺取
          target: 赵乾
          weight: 15
          polarity: -1
          hooks:
            - id: 结了梁子
            - id: 他掂量过后，服了
        check: { actor: "名望 + talent.悟性 * 0.5", dc: "72", scale: 12 }
        onSuccess:
          text: 联名的帖子上，你的名字后头签满了。赵乾在公示那天没露面。
          effects: ["flag 兼任丹房执事", "名望 +12", "factors.法宝 +0.08", "锋芒 +0.08"]
        onFail:
          text: 票数差了七张。赵乾上任第一件事，把你的丹药份例排到了最后。
          effects: ["名望 -5", "factors.法宝 -0.03", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 宗门 · 押送灵材（witness / silence 联动卡）
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_yasong_lingcai
    title: 三箱灵乳
    weight: 50
    act: 2
    cooldown: 20
    cond: "tier == 2 && sublevel > 0.2"
    tags: [日常, 宗门, 冲突, 暴露]
    text: |
      师门差事：押三箱百年灵乳去青阳别院，三日路程，走的是官道。
      第二日过黑水峡，前后忽然都没了人声。三个蒙面修士从坡上下来，不多话，刀已经出鞘。
      为首那个盯着你腰间的宗门玉牌看了一眼，又看了看你 ——
      「筑基初期，独身押货。」他朝左右点了点头。
      他们清楚货单，也清楚押送名录。这一趟，有人把你卖了。
    choices:
      - text: 拼死护货
        karma: none
        check: { actor: "effectiveTier * 50 + factors.状态 * 30", dc: "118", scale: 14 }
        onCritSuccess:
          text: 三招之内撂倒两个，第三个跪地求饶。你押着货和俘虏进了别院 —— 名录的事，有人要倒霉了。
          effects: ["名望 +15", "expose.真实修为 +10", "factors.情报 +0.08", "flag 押送立功"]
        onSuccess:
          text: 你且战且退护住了货，伤了一人，他们撤了。为首那个退走前又看了你一眼 —— 他记住你了。
          effects: ["witness 黑水峡蒙面首领 真实修为", "expose.真实修为 +6", "factors.状态 -0.15", "名望 +8"]
        onFail:
          text: 三打一。你醒来时货没了，玉牌还在，命也还在 —— 他们本也没打算杀人。
          effects: ["factors.状态 -0.25", "名望 -8", "道心 -4", "flag 押送失手"]
        onCritFail:
          text: 刀从肩胛穿过去。你是被别院巡逻的人从沟里捞回来的，三箱灵乳一滴不剩。
          effects: ["factors.状态 -0.4", "lifespan -2", "名望 -10", "flag 押送失手"]

      - text: 弃货保命
        karma:
          type: 受辱
          target: 黑水峡蒙面首领
          weight: 14
          polarity: -1
          hooks:
            - id: 这条道上都知道你软
            - id: 来日狭路相逢
        effects: ["道心 -5", "名望 -6", "锋芒 -0.05", "flag 押送失手"]

      - text: 杀人灭口，一个不留
        karma:
          type: 杀戮
          target: 黑水峡蒙面修士
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 蒙面人的同门寻仇
              lethal: true
              foreshadow:
                - { at: -10, evt: "坊市有人重金打听黑水峡那晚过路的行商" }
                - { at: -4, evt: "别院外一连三天有人蹲守，抄录押送名录" }
                - { at: -1, evt: "你洞府外的山道上，多了几个不赶路的人", window: true }
            - id: 黑水峡从此干净
        check: { actor: "effectiveTier * 50 + 堕度 * 0.5", dc: "125", scale: 13 }
        onSuccess:
          text: 峡谷里安静下来。你把三具尸首埋进乱石滩，抹掉血迹 —— 货一件没少，人一个没走脱。
          effects:
            - "silence 黑水峡蒙面首领"
            - "expose.杀过某人 +12"
            - "业障 +12"
            - "堕度 +8"
            - "道心 -6"
            - "flag 手上有人命"
        onFail:
          text: 你杀了两个，为首那个带着半条命遁走了。他看见了你杀人的样子，也看见了你不想让人看见的东西。
          effects:
            - "witness 黑水峡蒙面首领 杀过某人"
            - "expose.杀过某人 +20"
            - "业障 +10"
            - "堕度 +8"
            - "道心 -6"
            - "flag 手上有人命"

      - text: 「【掠夺】他们身上的东西，也都是我的。」
        require: "hasSystem('掠夺')"
        karma:
          type: 杀戮
          target: 黑水峡蒙面修士
          weight: 40
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 有人认出了这种手笔
              lethal: true
              foreshadow:
                - { at: -8, evt: "坊市传言，黑水峡的尸首干净得不像人杀的" }
                - { at: -3, evt: "一个游方修士在山门外打听「取人机缘」的邪功" }
                - { at: -1, evt: "他找上了门，说只想当面看你一眼", window: true }
            - id: 死无对证
        effects:
          - "factors.法宝 +0.12"
          - "sublevel +0.05"
          - "业障 +15"
          - "堕度 +10"
          - "僭越 +6"
          - "expose.金手指 +5"
          - "expose.杀过某人 +15"
          - "flag 手上有人命"

  # ══════════════════════════════════════════════════════════
  # 修行 · 道基隐患复查
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_daoji_fucha
    title: 旧账
    weight: 40
    act: 2
    once: true
    cond: "tier == 2 && (丹毒 >= 6 || factors.状态 < 0.9)"
    tags: [日常, 修炼, 隐患]
    text: |
      内门每年一次道基复查。医修的手指搭在你腕上，半天没说话。
      「练气的时候，吃过不少速成的东西吧。」他抽回手，「暗伤压在道基底下，筑基那天被一并封了进去。
      现在它跟你的根长在一起。」
      他取出纸笔：「筑基期清，花三年苦功和一笔灵石。拖到结丹，它就长在丹里，一辈子清不掉。」
      「宗门只管查，不管治。你自己定。」
    choices:
      - text: 现在清。砸钱，砸时间。
        karma: none
        effects:
          - "factors.法宝 -0.08"
          - "sublevel -0.04"
          - "丹毒 -12"
          - "factors.状态 +0.1"
          - "道心 +4"
          - "flag 道基已清"

      - text: 先不动。把修为顶上去再说。
        karma: none
        effects: ["sublevel +0.04", "丹毒 +3", "flag 道基有痕"]

      - text: 不劳医修，自己照医书慢慢养
        karma: none
        check: { actor: "talent.悟性 + talent.根骨 * 0.5", dc: "70", scale: 12 }
        onSuccess:
          text: 一年半。药浴的方子换了四次，最后一次洗出来的水是黑的。
          effects: ["丹毒 -8", "factors.状态 +0.06", "悟性 +1"]
        onFail:
          text: 第三个月你养岔了一味药。旧伤没动，倒添了层新的。
          effects: ["丹毒 +4", "factors.状态 -0.08", "flag 道基有痕"]

      - text: 「【苏婆婆】婆婆，这笔账，您看怎么还？」
        require: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 20"
        karma: none
        effects:
          - "soul.苏婆婆.favor +10"
          - "丹毒 -15"
          - "factors.状态 +0.1"
          - "expose.残魂 +5"
          - "originClues +1"
          - "flag 道基已清"

  # ══════════════════════════════════════════════════════════
  # 修行 · 第一次心魔小劫
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_xinmo_xiaojie
    title: 雾里的人
    weight: 55
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.5"
    tags: [日常, 修炼, 心魔]
    text: |
      这一夜行功到紧要处，识海忽然起了雾。
      你知道这是什么 —— 筑基之后的第一场心魔。不大，但躲不掉。
      雾里站着一个人，背对你，一动不动。
      你认得那身衣裳。
      雾里没有路。想出去，要么从他身上踏过去，要么等雾散 ——
      可雾里的时辰，和外头不一样。
    choices:
      - text: 走过去，看清那张脸
        require: "flag('手上有人命')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "75", scale: 12 }
        onSuccess:
          text: |
            是周小乙。他手上还是那年药圃里的泥。
            你在雾里跟他说了很久的话。说了什么，出定之后不记得了 —— 只记得他最后点了点头。
          effects: ["道心 +8", "业障 -6", "flag 心魔·直面"]
        onFail:
          text: 是周小乙。他一句话不说，只是把手里那株雪参递过来。你退了一步 —— 雾顺着这一步涌了上来。
          effects: ["道心 -8", "factors.状态 -0.12", "flag 心魔未过"]

      - text: 站着不动，等他先转身
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.4", dc: "65", scale: 11 }
        onSuccess:
          text: 他转过身 —— 是你自己。穿着外门那身旧衣裳，看了你很久，像在确认什么，然后让开了路。
          effects: ["道心 +6", "悟性 +2", "flag 心魔·直面"]
        onFail:
          text: 他转过身，是当年病死在你隔壁铺位的那个人。他咳着问你借灵石，一遍，又一遍。你捂着耳朵冲出雾时，行功岔了一口气。
          effects: ["道心 -5", "sublevel -0.04", "factors.状态 -0.08", "flag 心魔未过"]

      - text: 强行出定
        karma: none
        effects: ["sublevel -0.06", "道心 -3", "丹毒 +2", "flag 心魔未过"]

      - text: 「老祖。」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +5"
          - "soul.独孤离.possession +6"
          - "道心 +2"
          - "flag 心魔·借剑"

  # ══════════════════════════════════════════════════════════
  # 人际 · 同辈论道
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_tongbei_lundao
    title: 论道会
    weight: 40
    act: 2
    cooldown: 15
    cond: "tier == 2"
    tags: [日常, 人际, 藏拙]
    text: |
      内门每旬一次论道会，这日讲《洗髓真解》第三卷。讲经的长老中途离席，座下便自己争起来了。
      争的是「气与意孰先」—— 老题目，谁都能说两句，谁都说不透。
      沈观澜几句话把众人驳得没了声，末了目光落到你身上：
      「听闻师弟筑基只用了七年。想必于此道，另有见地？」
      满座都看着你。这一问，接是锋芒，不接是怯。
    choices:
      - text: 接
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "70", scale: 12 }
        onCritSuccess:
          text: 你从「溪堵于石」讲起，只讲了半炷香。散会后有三个人在门口等你，想借你那个说法回去抄。
          effects: ["名望 +14", "锋芒 +0.06", "expose.真实修为 +4", "flag 论道扬名"]
        onSuccess:
          text: 你讲得平实，挑不出错。沈观澜点了点头，没再追问。
          effects: ["名望 +6", "锋芒 +0.03"]
        onFail:
          text: 讲到一半，被他三个问题问住了。座里有笑声，不大，但你听见了。
          effects: ["名望 -4", "道心 -3", "flag 论道受激"]
        onCritFail:
          text: 你引错了一段经文。沈观澜没笑，他只是把原文一字不差背了一遍 —— 这比笑难受。
          effects: ["名望 -8", "道心 -5", "flag 论道受激"]

      - text: 「见地谈不上。愿听师兄的。」
        karma: none
        effects: ["锋芒 -0.06", "僭越 -3", "名望 -2", "道心 +1"]

      - text: 「【词条】把他这段话拆开看看。」
        require: "hasSystem('词条')"
        karma: none
        effects: ["悟性 +2", "名望 +10", "expose.金手指 +4", "僭越 +3", "flag 论道扬名"]

  # ══════════════════════════════════════════════════════════
  # 人际 · 有人求你作保
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_baizhan_zuobao
    title: 作保
    weight: 35
    act: 2
    cooldown: 30
    cond: "tier == 2"
    tags: [日常, 人际, 人情]
    text: |
      白湛深夜来访，搓着手，半天说不到正题。
      末了才说明白：他看中了坊市丹阁一张「筑基候补丹」的丹单，本钱要两百灵石，他只有八十。
      丹阁肯赊，但要一个内门弟子作保 —— 保人画押，他还不上，债就是你的。
      「三个月，丹一出手就还。」他说得很快，「利钱算你三成。」
      灯花爆了一下。你想起他上个月，刚给老家汇过一笔钱。
    choices:
      - text: 画押作保
        karma:
          type: 施恩
          target: 白湛
          weight: 22
          polarity: 1
          matureWindow: [6, 40]
          hooks:
            - id: 连本带利，一分不少
            - id: 丹砸了，人也不见了
        effects: ["名望 +2", "flag 替白湛作保"]

      - text: 保不作。借他五十块，不要利。
        karma:
          type: 施恩
          target: 白湛
          weight: 15
          polarity: 1
          hooks:
            - id: 他记你雪中送炭
            - id: 有借无还
        effects: ["factors.法宝 -0.04", "道心 +2"]

      - text: 拒了
        karma: none
        effects: ["道心 -1", "名望 -1"]

      - text: 「本钱我全出。丹出了，五五分。」
        karma:
          type: 施恩
          target: 白湛
          weight: 12
          polarity: 1
          hooks:
            - id: 白湛成了你的人
            - id: 他觉得被拿捏了，面服心不服
        effects: ["factors.法宝 -0.1", "factors.情报 +0.03", "flag 入股白湛"]

  # ══════════════════════════════════════════════════════════
  # 人际 · 旧识重逢
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_jiushi_chongfeng
    title: 山下来的名帖
    weight: 30
    act: 2
    cooldown: 40
    cond: "tier == 2"
    tags: [日常, 人际]
    text: |
      山门递上来一张名帖，字歪歪扭扭 —— 陈四。当年和你一个院里扫地的，卡在练气三层，后来下山了。
      你到山门时，他站在石阶下面，拎着一篓山货。看见你，他搓了搓手，
      把腰弯下去一半，又直起来 —— 他不知道该行哪种礼。
      「就……路过。」他说。
      山货篓子底下，压着一封写了又涂的信。
    choices:
      - text: 把他领进洞府，像当年一样分一张饼
        karma:
          type: 施恩
          target: 陈四
          weight: 16
          polarity: 1
          hooks:
            - id: 山下从此有人替你听着风声
            - id: 他逢人便说和你的交情，给你惹了事
        effects: ["道心 +3", "factors.情报 +0.05"]

      - text: 收下山货，回赠一瓶丹药，让他走
        karma: none
        effects: ["名望 +2", "道心 +1"]

      - text: 让门房打发了
        karma:
          type: 背叛
          target: 陈四
          weight: 10
          polarity: -1
          hooks:
            - id: 那封信你永远不知道写了什么
            - id: 无事发生
        effects: ["道心 -3"]

      - text: 「陈四。信，拿来。」
        require: "名望 >= 40"
        karma:
          type: 救助
          target: 青溪镇
          weight: 20
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 满镇立你的长生牌位
            - id: 药不够，死了人，怨到你头上
        effects: ["factors.法宝 -0.06", "功德 +12", "名望 +8", "flag 青溪镇施药"]

  # ══════════════════════════════════════════════════════════
  # 机缘 · 秘境边缘的裂隙
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_mijing_liexi
    title: 合拢中的裂隙
    weight: 50
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.4"
    tags: [日常, 机缘, 风险]
    text: |
      替宗门巡视地界的最后一天，你在乱石谷底看见了它 ——
      一道两指宽的裂隙悬在半空，边缘的空气像水一样打着旋。
      裂隙里透出来的灵气，浓得你隔着十丈都觉得经脉发胀。
      按律，发现秘境遗迹，上报者记大功；私入者，逐出宗门。
      你盯着它看了一炷香，它又窄了半指。
      等你回山再折返，它多半已经没了。
    choices:
      - text: 挤进去
        karma: none
        check: { actor: "talent.根骨 + talent.神魂 * 0.5 + 气运 * 0.3", dc: "80", scale: 13 }
        onCritSuccess:
          text: |
            里面是半座塌了的丹房洞府。你搬空了药架，还在案上摸到半页烧剩的丹方 ——
            落款那个名字，你好像在哪里见过。
          effects: ["factors.法宝 +0.15", "sublevel +0.08", "悟性 +2", "originClues +1", "flag 私入裂隙"]
        onSuccess:
          text: 灵气浓得像化不开的粥。你在里面坐了不知多久，出来时衣裳朽了一层，丹田却满得发烫。
          effects: ["sublevel +0.1", "factors.状态 -0.08", "flag 私入裂隙"]
        onFail:
          text: 裂隙在你进去半个时辰后开始合拢。你是从缝里硬挤出来的 —— 半条胳膊到现在抬不起来。
          effects: ["factors.状态 -0.25", "lifespan -1", "flag 私入裂隙"]
        onCritFail:
          text: 合拢的边缘剐着了你半边身子。你在谷底躺了两天，靠一口气爬回山门 —— 这事你谁也没敢告诉。
          effects: ["factors.状态 -0.4", "lifespan -3", "丹毒 +3", "flag 私入裂隙"]

      - text: 回山上报
        karma:
          type: 施恩
          target: 巡查堂执事
          weight: 14
          polarity: 1
          hooks:
            - id: 大功记在你名下
            - id: 功劳换了个轻飘飘的口头嘉许
        effects: ["名望 +10", "功德 +3", "flag 上报裂隙"]

      - text: 守着它合拢。谁也不告诉。
        karma: none
        effects: ["道心 +3"]

      - text: 「【模拟器】先演一遍再进。」
        require: "hasSystem('模拟器')"
        karma: none
        effects:
          - "lifespan -1"
          - "sublevel +0.09"
          - "factors.法宝 +0.1"
          - "僭越 +6"
          - "expose.金手指 +4"
          - "flag 私入裂隙"

  # ══════════════════════════════════════════════════════════
  # 机缘 · 拍卖会
  # ══════════════════════════════════════════════════════════

  - id: evt_a2_fangshi_qiupai
    title: 秋拍
    weight: 38
    act: 2
    cooldown: 30
    cond: "tier == 2 && sublevel > 0.3"
    tags: [日常, 机缘, 暴露]
    text: |
      青石坊市秋拍，一年一场。你的座位在二层最角落 —— 内门玉牌换来的。
      压轴是一枚凝魂珠，主治神魂裂伤，结丹时用得上。起价三百。
      坊市的老人都懂规矩：在这儿举牌，举的不是灵石，是身家。
      散修露财，和割开口子往鲨群里游没有分别。
      三百二。三百五。出价的只剩你，和斜对面那个黑袍人。
      他的手又抬起来了。
    choices:
      - text: 跟到底
        karma:
          type: 夺取
          target: 黑袍修士
          weight: 16
          polarity: -1
          hooks:
            - id: 拍卖行外有人跟了你三条街
            - id: 他只是个代买的，不了了之
        effects:
          - "factors.法宝 -0.06"
          - "神魂 +3"
          - "expose.真实修为 +8"
          - "锋芒 +0.08"
          - "名望 +5"
          - "flag 拍下凝魂珠"

      - text: 收手
        karma: none
        effects: ["锋芒 -0.03", "expose.真实修为 +3", "道心 -2"]

      - text: 全程不举牌，只记人
        karma: none
        effects: ["factors.情报 +0.07"]

      - text: 散场后，蹲流拍的「次品」堆
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "72", scale: 12 }
        onSuccess:
          text: 一只裂了口的玉匣，三十块没人要。匣子是凡玉。匣底夹层里的东西，不是。
          effects: ["factors.法宝 +0.12", "flag 捡漏·玉匣"]
        onFail:
          text: 你挑了一炉「只是卖相差」的丹药。回去一验，二十二丸里，五丸是米粉搓的。
          effects: ["factors.法宝 -0.05", "道心 -2"]

      - text: 「【面板】这一场，哪些是真的？」
        require: "hasSystem('面板')"
        karma: none
        effects:
          - "factors.情报 +0.08"
          - "factors.法宝 +0.06"
          - "expose.金手指 +3"
          - "僭越 +2"
          - "flag 看破凝魂珠"
`,er=`# 幕二 · 补充事件池（筑基期）
# 前缀 evt_2m_，全部 act: 2，cond 均含 tier == 2。
#
# 设计要点：
# · 每个 choice 显式声明 karma（无因果写 karma: none）
# · 灵田两张卡构成经营小线：承包（flag 承包灵田）→ 旱灾抉择
# · 破庙魔修卡的「杀」选项按铁律二挂满预警链，「救」埋魔道线因果
# · 师父嘱托 / 面板选项持续喂 originClues

events:

  # ══════════════════════════════════════════════════════════
  # 人际 · 第一次收到世家拜帖
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_shijia_baitie
    title: 烫金拜帖
    weight: 40
    act: 2
    once: true
    cond: "tier == 2 && 名望 >= 20"
    tags: [日常, 人际, 姻缘]
    text: |
      山门递上来一份拜帖，洒金笺，柳氏的家徽压在角上 —— 山下三县最大的修真世家。
      来人是柳家二管家，礼数周全得挑不出错。绕了半盏茶的圈子，话才落到实处：
      柳家嫡女柳青梧，筑基三层，尚未婚配。家主属意于你 —— 入赘。
      「聘礼单子在帖子里。灵田、法器、丹药份例，柳家出得起。」
      二管家垂着眼，「仙师出身寒微，这样的门第，旁人求都求不来。」
      最后一句他说得很轻，像是无心。
    choices:
      - text: 应下这门亲
        karma:
          type: 立誓
          target: 柳氏世家
          weight: 20
          polarity: 0
          matureWindow: [5, 40]
          hooks:
            - id: 柳家的路替你铺到了内门
            - id: 入了柳家的门，就得办柳家的事
        effects:
          - "flag 入赘柳氏"
          - "factors.道侣 +0.12"
          - "factors.法宝 +0.1"
          - "名望 +5"
          - "道心 -3"

      - text: 辞了，礼数还他
        karma: none
        effects: ["道心 +4", "名望 +1"]

      - text: 「亲事不急。先见一面。」
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 40", dc: "66", scale: 12 }
        onSuccess:
          text: |
            茶过三巡，你看明白了：柳青梧根骨极好，眼里却没有你 ——
            柳家要的是你这个人坐在客位上，给谁看。你把话留了半句，起身告辞。
          effects: ["factors.情报 +0.08", "flag 看破柳家"]
        onFail:
          text: |
            那顿饭吃得滴水不漏。你什么都没看出来，倒是席间应了两句不该应的话 ——
            帖子第二天又来了，比上一份更厚。
          effects: ["flag 柳家纠缠", "道心 -2"]

      - text: 帖子压在案头，不应不回
        karma:
          type: 欺骗
          target: 柳氏世家
          weight: 10
          polarity: -1
          hooks:
            - id: 柳家另寻了旁人，此事作罢
            - id: 世家的耐心磨完了，脸就翻了
        effects: ["名望 -2", "锋芒 -0.02"]

  # ══════════════════════════════════════════════════════════
  # 经营小线 1/2 · 灵田承包
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_lingtian_chengbao
    title: 山腰三亩
    weight: 35
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 经营, 资源]
    text: |
      杂役堂放榜：山腰阳坡三亩灵田对内门放租，年租四十灵石，灵谷收成三七分账，宗门拿三。
      那块地你去看过 —— 渠尾，灵气薄，石头多，前一个租户种了两年，赔着租金走的。
      可它挨着你的洞府，走过去一炷香。榜下站了几个人，看的多，揭的少。
      管事嗑着瓜子：「揭不揭？地就这么块地，丑话说在前头。」
    choices:
      - text: 揭榜。自己的地，自己耕。
        karma: none
        effects: ["flag 承包灵田", "flag 灵田自耕", "factors.法宝 -0.08", "道心 +3"]

      - text: 揭榜，雇山下佃户来种
        karma:
          type: 施恩
          target: 渠尾佃户
          weight: 10
          polarity: 1
          hooks:
            - id: 佃户把地当自家的伺候
            - id: 谷种被人顺手牵走了几斗
        effects: ["flag 承包灵田", "flag 灵田雇工", "factors.法宝 -0.1"]

      - text: 看了一炷香，转身走了
        karma: none
        effects: ["道心 +1"]

      - text: 「【签到】就在这田头，签个到。」
        require: "hasSystem('签到')"
        karma: none
        effects:
          - "flag 承包灵田"
          - "flag 灵田灵砂"
          - "factors.法宝 -0.08"
          - "expose.金手指 +2"
          - "僭越 +2"

  # ══════════════════════════════════════════════════════════
  # 经营小线 2/2 · 旱灾抉择
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_lingtian_hanzai
    title: 渠尾的水
    weight: 55
    act: 2
    once: true
    cond: "tier == 2 && flag('承包灵田')"
    tags: [日常, 经营, 道德]
    text: |
      入夏三个月没下过一场透雨。灵谷抽穗正要水，渠里的水一天比一天细。
      按宗门水规，灵渠先灌灵田，余下的才放给山下 —— 今年没有余下。
      你去渠口看过：闸一落，你那三亩穗子能保住；渠尾往下十里，
      两个村子的稻田当天就得裂口。村正带人在渠边跪了两天了，没人敢拦宗门的闸。
      管事问你：「落不落？就等你一句话。」
    choices:
      - text: 落闸。规矩就是规矩。
        karma:
          type: 夺取
          target: 渠尾村户
          weight: 12
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 荒年过去，没人再提
            - id: 村里饿死了人，账记在宗门头上，也记在你头上
        effects: ["factors.法宝 +0.12", "道心 -3", "功德 -2"]

      - text: 分一半水下去。谷穗和稻子，各活各的。
        karma:
          type: 施恩
          target: 渠尾村户
          weight: 14
          polarity: 1
          hooks:
            - id: 秋后两个村子抬着新米到你田头
            - id: 明年更旱，他们只记得你给过
        effects: ["factors.法宝 +0.04", "功德 +6", "道心 +3", "名望 +3"]

      - text: 闸不落了。这一季，弃了。
        karma:
          type: 救助
          target: 渠尾村户
          weight: 20
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 两个村子给你立了长生牌位
            - id: 宗门问起分成，租金你自己贴
        effects: ["factors.法宝 -0.1", "功德 +12", "名望 +5", "道心 +5"]

      - text: 翻遍杂书，试一试聚云行雨
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.5", dc: "76", scale: 12 }
        onSuccess:
          text: |
            你在雨师残篇里凑出半套聚云的法子。那夜的雨下了两个时辰，
            渠上渠下都听得见有人在喊。第二天没人知道云是怎么来的。
          effects: ["factors.法宝 +0.08", "功德 +8", "名望 +4", "sublevel +0.02", "flag 行雨瞒天"]
        onFail:
          text: 云聚了又散。你在坛上站到后半夜，灵力空了两回，雨没来。
          effects: ["factors.状态 -0.15", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 宗门 · 师父闭关前的嘱托
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_shifu_zhutuo
    title: 闭关前夜
    weight: 60
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 宗门, 身世]
    text: |
      师父定在月底闭死关，冲金丹。成了，宗门多一位真人；不成，你连他埋在哪都未必知道。
      闭关前夜他叫你过去，屋里没点灯。案上放着一只巴掌大的木匣，锁已经锈死了。
      「替我收着。」他说，「不许打开，不许示人。我若出关，你原样还我。」
      你伸手去接，他却按住匣子，又看了你一眼 ——
      「若是三年没动静，你把它烧了。记住，别打开。」
    choices:
      - text: 双手接过，一个字不问
        karma:
          type: 立誓
          target: 师父
          weight: 18
          polarity: 1
          matureWindow: [3, 30]
          hooks:
            - id: 出关那日，他第一个找的是你
            - id: 认得这匣子的，不止师父一个
        effects: ["flag 师父的木匣", "道心 +4", "originClues +1"]

      - text: 「师父，这里头是什么？」
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "70", scale: 11 }
        onSuccess:
          text: |
            他沉默了很久。「一笔旧账。」他说，「跟你无关 —— 本来无关。」
            最后四个字，他说得极慢。你把匣子收进袖中，没敢再问。
          effects: ["flag 师父的木匣", "originClues +2", "道心 +2"]
        onFail:
          text: |
            他把匣子收了回去。「睡去吧。」灯没点，你看不清他的脸。
            第二天，听说他把匣子托给了执法堂。
          effects: ["道心 -3", "originClues +1"]

      - text: 「弟子怕守不住它。」
        karma: none
        effects: ["道心 +2", "锋芒 -0.03"]

      - text: 「【面板】接匣子时，扫一眼它的来历。」
        require: "hasSystem('面板')"
        karma:
          type: 立誓
          target: 师父
          weight: 18
          polarity: 1
          matureWindow: [3, 30]
          hooks:
            - id: 出关那日，他第一个找的是你
            - id: 有些东西，看一眼就沾上了
        effects:
          - "flag 师父的木匣"
          - "originClues +2"
          - "expose.金手指 +3"
          - "僭越 +3"

  # ══════════════════════════════════════════════════════════
  # 人际 · 同门借贷不还
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_tongmen_jiedai
    title: 欠条
    weight: 40
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 人际, 人情]
    text: |
      半年前吴大有跪在你洞府门口借走三十块灵石，说母亲病重，回头就还。
      如今他月钱照领，坊市照逛，上旬还换了身新道袍。见了你，隔着老远就拐进岔道。
      昨日你托人递话，他回：「宽限些时日。」今日再去，门童说他闭关了 ——
      窗纸上，人影晃得清清楚楚。
      同屋的师弟看不过去：「要不要我陪你去堵他？」
    choices:
      - text: 当面堵他，把欠条摆在案上
        karma: none
        check: { actor: "名望 + talent.悟性 * 0.4", dc: "56", scale: 11 }
        onSuccess:
          text: |
            你在斋堂门口拦住他，没高声，只把欠条放在案上。
            他脸上红一阵白一阵，当场还了二十，余下立了新据，按了指印。
          effects: ["factors.法宝 +0.04", "名望 +2", "锋芒 +0.02"]
        onFail:
          text: |
            他当着半个斋堂的人哭起穷来，母亲、汤药、老家的田，一样样数。
            倒显得你一个筑基修士，逼一个穷师弟。
          effects: ["名望 -4", "道心 -3"]

      - text: 算了。三十块灵石，买看清一个人。
        karma: none
        effects: ["道心 +1", "锋芒 -0.03"]

      - text: 往执事房递状子
        karma:
          type: 夺取
          target: 吴大有
          weight: 10
          polarity: -1
          hooks:
            - id: 灵石一块不少地回来了
            - id: 他被罚了三个月俸，背后的话就没断过
        effects: ["factors.法宝 +0.05", "名望 -2", "道心 -1"]

      - text: 「债销了。往后杂役房的事，我要先知道。」
        karma:
          type: 立誓
          target: 吴大有
          weight: 12
          polarity: 0
          matureWindow: [3, 30]
          hooks:
            - id: 他成了你在杂役房的耳目
            - id: 这债他越背越重，背出恨来
        effects: ["factors.情报 +0.07", "道心 -2", "堕度 +1"]

  # ══════════════════════════════════════════════════════════
  # 游历 · 坊市抽奖摊（明显的局）
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_fangshi_choujiang
    title: 十抽九中
    weight: 35
    act: 2
    cooldown: 25
    cond: "tier == 2"
    tags: [日常, 游历, 气运]
    text: |
      坊市东口新支了个彩棚，幡子上四个大字：十抽九中。
      彩头挂了满墙 —— 最当中一只白玉瓶，标着「百年凝露」，三块灵石抽一次。
      摊前围了一圈人，眼看着一个散修抽中了瓶符水，又一个抽中了柄小飞剑，欢声一片。
      你站着看了两炷香：中彩的是那两张熟面孔，轮着来。
      摊主笑呵呵朝你招手：「道友，看了这么久，手气攒足了吧？」
    choices:
      - text: 抽一次。看看自己的运。
        karma: none
        check: { actor: "气运", dc: "72", scale: 14 }
        onCritSuccess:
          text: |
            竹签落地，满棚静了一瞬。摊主脸上的笑没绷住 —— 头彩。
            做局的自己都没想到真能被人抽走。他肉痛地把白玉瓶递过来，围观的比你还高兴。
          effects: ["factors.法宝 +0.1", "气运 -2", "flag 坊市抽中头彩"]
        onSuccess:
          text: 中了个末彩，一把裁纸的凡铁小刀。不亏不赚，全当看了场戏。
          effects: ["factors.情报 +0.02"]
        onFail:
          text: |
            三块灵石换了支「下下签」。摊主安慰你：「运是攒出来的，再来一次？」
            你捏着那支签，签底的墨还没干透。
          effects: ["factors.法宝 -0.03", "道心 -1"]
        onCritFail:
          text: |
            你不服，连抽了五次。回山的路上你把五支空签排在掌心看了很久 ——
            每一支的裂口，都在同一个位置。
          effects: ["factors.法宝 -0.1", "道心 -3", "flag 坊市吃过亏"]

      - text: 点破这个局
        karma:
          type: 夺取
          target: 彩棚摊主
          weight: 8
          polarity: -1
          hooks:
            - id: 他连夜收摊，换条街重新开张
            - id: 摊主背后有人，记下了你的脸
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "64", scale: 12 }
        onSuccess:
          text: |
            你当众抽出签筒底的夹层，两指捻出一撮封蜡。围观的先静了一瞬，随即炸开。
            摊主被扭去了市署，散修里有人朝你抱拳。
          effects: ["名望 +6", "功德 +3", "factors.情报 +0.03"]
        onFail:
          text: |
            夹层没摸着。摊主嗓门比你大：「输不起就说输不起！」
            围观的哄笑起来，你站在当中，进退都不是。
          effects: ["名望 -4", "道心 -2"]

      - text: 看戏。不下场。
        karma: none
        effects: ["factors.情报 +0.04"]

      - text: 「【模拟器】演一遍 —— 哪一签是真的。」
        require: "hasSystem('模拟器')"
        karma: none
        effects: ["lifespan -1", "factors.法宝 +0.08", "expose.金手指 +3", "僭越 +4"]

  # ══════════════════════════════════════════════════════════
  # 名望 · 猎杀榜第一次上榜
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_liesha_shangbang
    title: 榜上第九十七
    weight: 45
    act: 2
    once: true
    cond: "tier == 2 && 名望 >= 30"
    tags: [日常, 名望, 暴露]
    text: |
      坊市猎妖司的照壁上贴着猎杀榜，每月一换。这月的榜尾添了个新名字 —— 你的。
      第九十七位，注：「青云宗内门，斩乱山妖狼三头。」
      消息比你的脚程快。回山这一路，茶棚里有人偷偷指你，也有人明着看你。
      入夜，来道贺的同门踏破了门槛。最后一个走的压低了声音：
      「师兄，榜是妖修也看的。上了榜的人，狼群里都传了名。」
    choices:
      - text: 去猎妖司领赏，站着受这个名
        karma: none
        effects:
          - "名望 +10"
          - "锋芒 +0.06"
          - "expose.真实修为 +6"
          - "factors.法宝 +0.05"
          - "flag 猎杀榜在册"

      - text: 花钱把名字抹了
        karma: none
        effects: ["factors.法宝 -0.06", "锋芒 -0.08", "僭越 -2", "flag 猎杀榜除名"]

      - text: 随它去。榜是榜，我是我。
        karma: none
        effects: ["名望 +4", "expose.真实修为 +3"]

      - text: 趁热接下榜上的悬红，再拿一单
        karma:
          type: 杀戮
          target: 乱山狼群
          weight: 16
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 狼群散了，赏钱干干净净
            - id: 头狼没死。它记气味。
        check: { actor: "effectiveTier * 50 + factors.状态 * 25", dc: "116", scale: 14 }
        onSuccess:
          text: |
            又是三天两夜。你把两只狼耳拍在司案上，名次往前挪了二十位。
            回山那晚你听见狼嚎，很远，但朝着山门的方向。
          effects: ["名望 +12", "factors.法宝 +0.08", "锋芒 +0.08", "expose.真实修为 +8"]
        onFail:
          text: |
            狼群比榜上写的多。你退出来时半边袖子没了，
            赏没领着，脸上还添了道口子。
          effects: ["factors.状态 -0.2", "名望 -3", "道心 -2"]
        onCritFail:
          text: |
            是头狼设的围。你从狼牙底下滚出来，断了两根肋骨，爬回山门时天蒙蒙亮 ——
            榜上你的名字旁边，多了一个红圈。
          effects: ["factors.状态 -0.35", "lifespan -1", "名望 -5", "flag 狼群记仇"]

  # ══════════════════════════════════════════════════════════
  # 游历 · 护送凡人商队（速度与安全）
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_fanren_shangdui
    title: 二十车药材
    weight: 38
    act: 2
    cooldown: 28
    cond: "tier == 2"
    tags: [日常, 游历, 权衡]
    text: |
      孙老倌的商队在山门外递了雇书：二十车鲜药材过乱山送郡城药行，雇金六十灵石，只求一位仙师压阵。
      药材是鲜货，捂过五天烂一半，雇金跟着折半。
      路有两条：近道穿黑风口，三天，去年在那儿折过两支商队；
      官道绕山，七天，太平，可药也蔫得差不多了。
      孙老倌搓着手不敢催。车队里还坐着他要出嫁的闺女 —— 绕道，是赶不上婚期的。
    choices:
      - text: 走黑风口
        karma: none
        check: { actor: "effectiveTier * 45 + factors.情报 * 30", dc: "104", scale: 13 }
        onSuccess:
          text: |
            黑风口静得反常。你让车队夜里熄灯赶路，白天躲进岩窝。第三天晌午出了山口，
            孙老倌回头看山，腿一软坐在车辕上。雇金之外，他多塞了十块。
          effects: ["factors.法宝 +0.09", "名望 +4", "factors.情报 +0.03"]
        onFail:
          text: |
            第二夜还是撞上了。你拦住了劫道的，药材保住了大半，可乱箭里折了一个赶车的伙计。
            孙老倌没扣你雇金。只是收殓的时候，他一直背对着你。
          effects: ["factors.法宝 +0.04", "道心 -4", "名望 -2"]
          karma:
            type: 毁诺
            target: 孙老倌商队
            weight: 8
            polarity: -1
            hooks:
              - id: 伙计的婆娘上山讨说法
              - id: 走镖的都说，这是命
        onCritFail:
          text: |
            是硬点子，冲着药材来的，人手是你的三倍。你护住了人，二十车货烧了一半。
            回程没人说话，只有孙老倌闺女的哭声压在车帘子底下。
          effects: ["factors.状态 -0.2", "名望 -5", "道心 -5"]
          karma:
            type: 毁诺
            target: 孙老倌商队
            weight: 12
            polarity: -1
            hooks:
              - id: 药行的赔账压垮了孙家
              - id: 商路上从此没人敢雇你
      - text: 走官道。婚期误得，命误不得。
        karma: none
        effects: ["factors.法宝 +0.03", "道心 +2"]

      - text: 分两拨。四车鲜货你亲自带近道，大队走官道。
        karma: none
        check: { actor: "effectiveTier * 50", dc: "98", scale: 13 }
        onSuccess:
          text: |
            你带四车鲜货三天出山，大队七天后平安到齐。
            药行掌柜验完货，当场把明年的雇书也签了。
          effects: ["factors.法宝 +0.1", "名望 +5", "flag 商路熟客"]
        onFail:
          text: |
            四车货太扎眼。你且战且走保住了两车，另两车连人带车滚下了涧 ——
            赶车的伙计是你拽上来的，货没了。
          effects: ["factors.法宝 -0.02", "factors.状态 -0.12", "道心 -2"]

      - text: 「【苟道】走官道。一动不如一静。」
        require: "hasSystem('苟道')"
        karma: none
        effects: ["道心 +2", "锋芒 -0.04", "factors.法宝 +0.02"]

  # ══════════════════════════════════════════════════════════
  # 道德 · 雨夜破庙遇重伤魔修（魔道线入口）
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_pomiao_moxiu
    title: 破庙的血
    weight: 42
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 道德, 魔道]
    text: |
      雨下到二更天，你在乱山的破山神庙里避雨，神像后头有血腥气。
      一个黑衣人靠着墙根坐在供桌后，胸口的伤翻着肉，止血的手法很老练 —— 魔门的路子。
      他睁开眼看你，手已经按在刀上，却连刀都抬不起来了。
      「正道的？」他笑了一声，牵动伤口，咳出一口血沫，
      「动手就趁现在。再晚半个时辰，你未必按得住我。」
      庙外雨声不歇。他腰间的铁牌上，刻着一个「阙」字。
    choices:
      - text: 救他。伤成这样，先是个人，才是个魔修。
        karma:
          type: 救助
          target: 魔修·阙
          weight: 30
          polarity: 1
          matureWindow: [8, 60]
          hooks:
            - id: 魔道有人记你一命
            - id: 他日正道翻旧账，问你那晚的雨
        effects: ["flag 救过魔修", "flag 阙字铁牌", "道心 +3"]

      - text: 杀他。除魔卫道，就在此刻。
        karma:
          type: 杀戮
          target: 魔修·阙
          weight: 26
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 血河旧部寻仇
              lethal: true
              foreshadow:
                - { at: -8, evt: "山下有黑衣人打听乱山破庙那夜的雨" }
                - { at: -3, evt: "你收到半块烧焦的铁牌，没有落款" }
                - { at: -1, evt: "一个戴斗笠的人在山门外站了一夜，只是看着你的洞府", window: true }
            - id: 无人知晓
        effects:
          - "名望 +6"
          - "功德 +4"
          - "业障 +8"
          - "道心 -4"
          - "expose.杀过某人 +8"
          - "flag 手上有人命"

      - text: 转身走进雨里
        karma:
          type: 放走
          target: 魔修·阙
          weight: 10
          polarity: 0
          hooks:
            - id: 各走各路，两不相欠
            - id: 他记性很好。好人坏人，都记。
        effects: ["道心 -1"]

      - text: 「【苏婆婆】婆婆，这条命还救得回来么？」
        require: "hasSoul('苏婆婆')"
        karma:
          type: 救助
          target: 魔修·阙
          weight: 30
          polarity: 1
          matureWindow: [8, 60]
          hooks:
            - id: 魔道有人记你一命
            - id: 这手药圣的金创手法，他认得
        effects:
          - "flag 救过魔修"
          - "flag 阙字铁牌"
          - "soul.苏婆婆.favor +8"
          - "expose.残魂 +5"
          - "道心 +2"

  # ══════════════════════════════════════════════════════════
  # 宗门 · 藏书阁二层借阅权
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_cangshuge_jieyue
    title: 二层的门
    weight: 40
    act: 2
    once: true
    cond: "tier == 2"
    tags: [日常, 宗门, 资源]
    text: |
      藏书阁一层谁都进得，二层要「借阅令」—— 内门一年只发十二枚。
      你要找的《周天引气正解》就在二层，你打听得清清楚楚：东三架，第二格。
      守阁的岑老瞎了一只眼，在阁里守了六十年。掌令的执事房那边，今年的令只剩一枚，
      盯着的人不止你一个。
      听说掌令执事好古墨；也听说岑老夜里亥时下阁打盹，两刻钟。
    choices:
      - text: 寻一锭古墨，送去执事房
        karma:
          type: 施恩
          target: 掌令执事
          weight: 8
          polarity: 1
          hooks:
            - id: 令牌次日就到了你手上
            - id: 他收礼收惯了，转头就忘
        effects: ["factors.法宝 -0.07", "flag 藏书阁借阅令", "factors.功法 +0.05", "悟性 +1"]

      - text: 拿三个月丹药份例，换别人手里的令
        karma: none
        effects: ["factors.法宝 -0.1", "flag 藏书阁借阅令", "factors.功法 +0.06", "悟性 +1"]

      - text: 亥时进去，抄完就走
        karma:
          type: 欺骗
          target: 岑老
          weight: 10
          polarity: -1
          hooks:
            - id: 神不知鬼不觉
            - id: 少了动静，多了脚印，他心里有数
        check: { actor: "talent.神魂 + 藏拙 * 20", dc: "74", scale: 12 }
        onSuccess:
          text: |
            两刻钟，你抄下了要紧的三页。下阁时你回头看了一眼 ——
            岑老靠在门边打盹，独眼阖着，手边的灯芯，剪得很齐。
          effects: ["factors.功法 +0.08", "悟性 +2", "僭越 +3", "道心 -3", "flag 夜入藏书阁"]
        onFail:
          text: |
            你的手刚碰到书脊，灯就亮了。岑老站在架子那头，独眼在灯下看不出情绪。
            「放回去。」他说，「这事我不报。但你往后，一层也别来了。」
          effects: ["道心 -5", "名望 -3", "flag 藏书阁被拒"]

      - text: 不进二层。把一层的书吃透再说。
        karma: none
        effects: ["悟性 +2", "道心 +3"]

  # ══════════════════════════════════════════════════════════
  # 藏拙 · 筑基同侪的论剑约战
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_lunjian_yuezhan
    title: 演武台的帖子
    weight: 42
    act: 2
    once: true
    cond: "tier == 2 && 名望 >= 15"
    tags: [日常, 人际, 藏拙]
    text: |
      帖子是裴照亲手递的。剑峰这一辈的头名，筑基中期，指节上一层旧茧。
      「三日后，演武台，点到为止。」他话不多，「你平日收着的那点东西，我见过一角。」
      你说不知道他在说什么。他不争辩，把帖子放在案上就走，到门口又停了停：
      「你来，我全力以赴。不来，我也不与旁人说。」
      帖子压在案上。三日后的演武台，去是锋芒，不去是藏拙 —— 他都替你想好了。
    choices:
      - text: 应战，登台
        karma: none
        check: { actor: "effectiveTier * 50 + factors.功法 * 40", dc: "112", scale: 14 }
        onCritSuccess:
          text: |
            第九招你收了力，剑尖停在他咽喉三寸。台下静了一瞬才响起喝彩。
            裴照盯着那截剑尖看了很久，抱拳，退了半步：「受教。」
          effects: ["名望 +15", "锋芒 +0.1", "expose.真实修为 +12", "flag 演武胜裴照"]
        onSuccess:
          text: 五十招开外，你险险赢了半招。裴照收剑笑了 —— 输的人倒像是痛快的那个。
          effects: ["名望 +8", "锋芒 +0.05", "expose.真实修为 +7", "factors.状态 -0.08"]
        onFail:
          text: |
            你输在第三十招，输得不难看。下台时裴照追上来：「再练两年，你我还有一战。」
            这话不知怎么，比赢了还扎人。
          effects: ["名望 +2", "道心 -2", "factors.状态 -0.1"]
        onCritFail:
          text: |
            他一剑挑飞你的剑，剑气擦着肋骨进去半寸。医修拿话宽你：
            「败在裴照手里，不丢人。」满山都这么说。满山都知道了。
          effects: ["factors.状态 -0.25", "名望 -4", "道心 -4", "expose.真实修为 +4"]

      - text: 回帖婉拒
        karma: none
        effects: ["锋芒 -0.08", "僭越 -3", "名望 -3", "道心 +1"]

      - text: 「台就不上了。后山，只你我。」
        karma: none
        check: { actor: "effectiveTier * 50 + factors.功法 * 40", dc: "108", scale: 13 }
        onSuccess:
          text: |
            后山无人。你赢了，赢得没收着。裴照坐在石上喘了半天，忽然笑出声：「怪不得。」
            他说到做到 —— 这场剑，山上没有第三个人知道。
          effects: ["witness 裴照 真实修为", "factors.功法 +0.07", "锋芒 -0.02", "flag 后山之约"]
        onFail:
          text: |
            你输了。裴照收剑，替你捡起剑递回来：「你留着力。」
            他看着你，「留力输我的人，你是头一个。」
          effects: ["factors.状态 -0.1", "悟性 +2", "flag 后山之约"]

      - text: 「【独孤离】老祖说，想看看如今的年轻人。」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 10"
        karma: none
        effects:
          - "soul.独孤离.favor +6"
          - "soul.独孤离.possession +5"
          - "名望 +14"
          - "锋芒 +0.12"
          - "expose.残魂 +8"
          - "expose.真实修为 +10"
          - "flag 演武胜裴照"

  # ══════════════════════════════════════════════════════════
  # 气运 · 山下城隍庙求签
  # ══════════════════════════════════════════════════════════

  - id: evt_2m_chenghuang_qiuqian
    title: 一支签
    weight: 30
    act: 2
    cooldown: 40
    cond: "tier == 2"
    tags: [日常, 游历, 气运]
    text: |
      下山办完事，路过县城，城隍庙的香火隔着两条街就闻得见。
      庙祝眯眼打量你：「客官面生。求支签？三文钱。」
      殿上泥胎金漆剥了大半，眼却像是常有人擦的，看着谁都像看着你。
      签筒递过来，竹签磕得筒壁咯咯响。你在山上什么都算得，
      偏这三文钱一支的签，从来没人替修士摇过。
    choices:
      - text: 摇一支
        karma: none
        check: { actor: "道心 + 气运 * 0.4", dc: "78", scale: 14 }
        onCritSuccess:
          text: |
            签落，庙祝拾起来看了看，又抬头看你，半晌才开口：「上上。
            『藏器于身，待时而动。』」他把签双手奉还，「这支签，十年没人摇出来过了。」
          effects: ["气运 +3", "道心 +3", "flag 城隍签·藏器"]
        onSuccess:
          text: |
            中平签。「守静得吉，妄动生悔。」庙祝笑呵呵：「稳当签，好签。」
            你捏着签出了殿，回头看了一眼泥胎 —— 它还看着你。
          effects: ["道心 +2"]
        onFail:
          text: |
            下签。「木秀于林。」底下一行小字：「风必摧之，人必伐之。」
            庙祝忙不迭地圆场：「签是死的人是活的 ——」你把签插了回去。
          effects: ["道心 -2", "flag 城隍签·示警"]
        onCritFail:
          text: |
            签摇出来，掉在地上，签面朝下。庙祝弯腰去捡，你说不必了。
            出殿时香炉里一炷香拦腰断了。没有风。
          effects: ["气运 -3", "道心 -3", "flag 城隍签·凶"]

      - text: 签不求了，添三文香油钱
        karma: none
        effects: ["功德 +2", "道心 +1"]

      - text: 以神识探一探那泥胎
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.2", dc: "72", scale: 12 }
        onSuccess:
          text: |
            泥胎里果然有点东西 —— 一缕将散未散的愿力，凝在金漆底下，不成形，
            却认得出你是谁。它没有言语，只朝你极缓地拱了拱手，像老吏见上官。
          effects: ["factors.情报 +0.05", "功德 +2", "flag 见过城隍"]
        onFail:
          text: |
            神识刚探进金漆，就被什么东西轻轻弹了回来。你鼻血流到嘴角，庙祝直念罪过。
            出门时日头很好，你后颈却凉了一路。
          effects: ["factors.状态 -0.06", "僭越 +3", "道心 -2"]

      - text: 「泥塑木雕，也配受香火。」
        require: "道心 <= 55"
        karma: none
        effects: ["僭越 +2", "道心 -1"]
`,tr=`# 幕二 · 备选主干（evt_2s_）
# 与 act2-core 的主干平行的「大事池」：普通局按权重与门禁只会撞到其中两三件，
# 制造局与局之间「命运入口」的差异。
#
# 结构：
# · 两条金手指备选链（与幕一后山链靠 flag('金手指已定') 互斥，谁先被抽到谁作数）：
#     敲门人链（剑）：evt_2s_yeban_qiaomen → evt_2s_duanyun_jiancang（独孤离 / 任务 / 拒绝）
#     赌坊链（丹）：  evt_2s_dufang_yapiao → evt_2s_kujing_dongfu（苏婆婆 / 面板 / 拒绝）
#   链首 cond 均含 !flag('金手指已定')；链中卡 cond 亦带该门禁 ——
#   若两卡间隙被别的链抢先定局，本链自然断掉，不会发出第二个金手指。
# · 五张独立主干大事：界碑私会 / 坊市大火（身世钩子）/ 雪前流民 / 七日护法 / 顶名的人。
#
# 跨卡回响（选项岔开落 flag，后续卡凭 flag 多出专属选项）：
# · 敲门人链：裴照同行 / 杀了裴照 → 剑冢两条专属出路
# · 赌坊链：识破赌局 → 洞府「调包」出路
# · 界碑私会：拿捏孟秋池 → 顶名的人「差遣孟秋池」
# · 坊市大火：火闻其名 → 顶名的人「查大火那夜」
# · 雪前流民：开过私仓 → 七日护法「不要酬劳，托他护流民」

events:

  # ══════════════════════════════════════════════════════════
  # 备选金手指链 A（剑）· 1/2
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_yeban_qiaomen
    title: 夜半的敲门人
    weight: 85
    act: 2
    once: true
    cond: "tier == 2 && flag('宗门弟子') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      三更天，敲门声。不急，一下，又一下，像抬一次手要攒半天的力气。
      门外的人靠着门框往下滑，胸口一道剑伤翻着黑边，血在门槛石上积了一小滩。
      他从怀里摸出一卷桐皮，抖开一角——是图。墨线勾着山势，一处涧口用朱砂点了一点。
      「断云涧……剑冢。」他喘着，「救我。图，归你。」
      雪没化。这道伤拖不过天亮；背他去医堂，来回两个时辰。
    choices:
      - text: 把人拖进屋，拆了自己备着的丹药给他吊命
        karma:
          type: 救助
          target: 裴照
          weight: 28
          polarity: 1
          matureWindow: [8, 60]
          hooks:
            - id: 断云客记你一命
            - id: 追他的人循着血迹，记下了你的门
        effects: ["flag 救下裴照", "flag 得藏宝图", "功德 +6", "factors.法宝 -0.05"]
        then:
          text: |
            天亮前他的气息稳了。第三日他能坐起来，把桐皮图押在你桌上，一个字没多说。
            又过五日，人不辞而别。图还在。

      - text: 救下他，伤稳之后，随他同去断云涧
        karma:
          type: 救助
          target: 裴照
          weight: 30
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 生死同行，交情另算
            - id: 他的仇家把你们记成了一路人
        effects: ["flag 救下裴照", "flag 得藏宝图", "flag 裴照同行", "功德 +6"]
        then:
          text: |
            他养了半月伤，能提剑了。临行前夜他把图摊开，指着那处朱砂点：
            「东西在涧底。到了你就明白，我为什么非回去不可。」
          goto: evt_2s_duanyun_jiancang

      - text: 「图我收下。命，你自己想办法。」
        karma:
          type: 夺取
          target: 裴照
          weight: 30
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 他没死成，记住了你的脸
            - id: 门前冻毙的尸首，引来巡山弟子的盘问
        effects: ["flag 得藏宝图", "flag 拒救裴照", "堕度 +6", "道心 -6", "名望 -2"]
        then:
          text: |
            你抽走桐皮图，把人推回门外。门闩落下之后，敲门声又响了一阵，慢慢停了。
            天亮开门，门前只剩一摊冻黑的血。人不见了。

      - text: 杀人，夺图，扫雪，掩痕
        karma:
          type: 杀戮
          target: 裴照
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 断云涧来的问剑人
              lethal: true
              foreshadow:
                - { at: -10, evt: "坊市有人重金打听一个背桐皮图的伤者" }
                - { at: -4, evt: "你洞府外的雪地上，多出一行不属于你的脚印" }
                - { at: -1, evt: "一个佩双剑的女子在山门外递帖，指名要见你", window: true }
            - id: 无人知晓
        effects:
          - "flag 得藏宝图"
          - "flag 杀了裴照"
          - "flag 手上有人命"
          - "堕度 +12"
          - "业障 +18"
          - "道心 -10"
          - "expose.杀过某人 +20"
        then:
          text: |
            他连挣扎都没有——那道剑伤本就只剩一口气吊着。
            你把尸身沉进后山的涧潭，回来扫平门前的雪。
            桐皮图在灯下摊开，朱砂那一点红得像还没干。

      - text: 连夜背他去医堂，图原样塞回他怀里
        karma:
          type: 施恩
          target: 裴照
          weight: 20
          polarity: 1
          hooks:
            - id: 他伤愈之后，携图再来敲门
            - id: 图在换药时被医堂的人瞧了去
        effects: ["flag 金手指已定", "flag 送医裴照", "功德 +8", "道心 +5", "名望 +3", "factors.状态 -0.05"]
        then:
          text: |
            两个时辰山路，到医堂时你后背全是他的血。
            值夜的医修剪开他衣襟时，你把那卷桐皮塞回他怀里，转身下了台阶。
            有些机缘，错过了才算干净。

      - text: 不开门
        karma: none
        effects: ["flag 金手指已定", "flag 夜不开门", "道心 -4"]
        then:
          text: |
            「山里夜路，走岔的人多了。」你吹熄灯。
            门外的动静由抓挠变成拍打，再变成没有。
            天亮开门，门前是空的，只有雪上一道拖出去的血痕，往山下去了。

  # ══════════════════════════════════════════════════════════
  # 备选金手指链 A（剑）· 2/2 —— 链尾：独孤离 / 任务 / 拒绝
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_duanyun_jiancang
    title: 断云涧剑冢
    weight: 120
    act: 2
    once: true
    cond: "tier == 2 && flag('得藏宝图') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      照着桐皮图走了三日，断云涧到了。涧底没有金玉，只有剑。
      上百柄剑插在黑石里，锈成了上百块碑，风穿过涧口，呜呜地擦着剑身响。
      正中一柄断剑不锈，只剩半截，剑身凝着一层化不开的寒气。
      剑前的石案上搁着一枚青玉简，极细的光纹在里面缓缓地转。
      石案侧面刻着一行小字，笔画瘦得像剑痕——
      「取剑者承剑，取简者承契。空手来的，空手回。」
    choices:
      - text: 握住那柄断剑
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.12"
        then:
          text: |
            寒气顺着掌纹爬上手腕。你听见一声极轻的冷笑，从骨头里响起来。
            「几百年了，」那声音说，「总算来了个握剑不抖的。」

      - text: 取那枚青玉简
        karma: none
        effects: ["flag 金手指已定", "bind.system 任务", "expose.金手指 +3", "僭越 +5"]
        then:
          text: |
            光纹顺着指缝钻进去，一个不带情绪的声音贴着颅骨响起：
            「载体已确认。当前权柄——任务。首件事务已下发。」
            你回头看那柄断剑。它还插在原处，寒气纹丝未动，像是根本没把你放在眼里。

      - text: 一样不动，退出涧口，把图烧了
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "flag 焚了藏宝图", "道心 +10", "originClues +1"]
        then:
          text: |
            桐皮蜷成一团黑灰。你在涧口回头望了一眼——
            百来块剑碑立在暮色里，像一群没走成的人。
            有些东西认下了就是一辈子。你转身下山。

      - text: 「东西是你师门的。你自己拿。」
        require: "flag('裴照同行')"
        karma:
          type: 施恩
          target: 裴照
          weight: 26
          polarity: 1
          matureWindow: [5, 60]
          hooks:
            - id: 断云客欠你一剑，他认
            - id: 那柄剑，未必肯认他
        effects: ["flag 金手指已定", "flag 无系统", "flag 让剑裴照", "道心 +8", "factors.伙伴 +0.1"]
        then:
          text: |
            裴照在剑前站了很久，跪下去磕了三个头，才伸手。
            握剑的手背上青筋绷起，寒气爬到肘弯就停了。
            他回头看你，嘴唇动了动，最后只说了两个字：「记下了。」

      - text: 割掌沥血，抹上剑身，骗剑认主
        require: "flag('杀了裴照')"
        karma:
          type: 欺骗
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: -1
          hooks:
            - id: 剑认血不认人，这笔账早晚有一问
            - id: 冢中群剑记下了这一日
        effects: ["flag 金手指已定"]
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "70", scale: 12 }
        onSuccess:
          text: |
            血渗进剑身，寒气顺着伤口倒灌进来，在心口盘成一团。
            剑认了——或者说，它把裴照的血和你的血一并记下了，连本带利。
          effects: ["bind.soul 独孤离 9", "soul.独孤离.favor -15", "expose.残魂 +6", "factors.功法 +0.1"]
        onFail:
          text: |
            群剑齐鸣。一道剑气贴着你脖颈掠过去，削断了半边衣领。
            你连滚带爬出涧口，半边身子麻到入夜。
            石案上那行小字后头，不知何时多了两个字：「不配。」
          effects: ["factors.状态 -0.3", "lifespan -1", "flag 剑冢除名"]

  # ══════════════════════════════════════════════════════════
  # 备选金手指链 B（丹）· 1/2
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_dufang_yapiao
    title: 十七张押票
    weight: 75
    act: 2
    once: true
    cond: "tier == 2 && 名望 < 60 && !flag('金手指已定')"
    tags: [主干, 岔路]
    text: |
      下山办货，在坊市西街的赌坊里坐了半个时辰。起头你赢，后来输，再后来，
      掌柜把十七张押票摊在你面前——张张按着你的指印，合计三百灵石。
      你记得清楚，自己只押过三注。
      里间的辛掌柜请你吃茶。他亲手把押票码齐，推到你手边，笑纹很深。
      「灵石，我不急。」他说，「城南有口枯井，井底有座旧洞府。
      你替我下去取一样东西上来。这些，当着你的面烧。」
    choices:
      - text: 「取什么。」
        karma:
          type: 立誓
          target: 辛掌柜
          weight: 16
          polarity: 0
          matureWindow: [3, 30]
          hooks:
            - id: 这一件之后，还有下一件
            - id: 他当真烧了押票
        effects: ["flag 应承辛掌柜"]
        then:
          text: |
            「一只药鼎。焦的，豁了口。」
            辛掌柜把一枚开门的铜符放在押票上，指腹在符面上抹了一下。
            「别的东西，你看都别看。」
          goto: evt_2s_kujing_dongfu

      - text: 「容我三日。」——先把这局的底摸清
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "70", scale: 12 }
        onSuccess:
          text: |
            三日打听下来，你摸到两件事：押票上的指印是拓的；
            那口枯井，辛掌柜自己的人下去过三拨，一个都没上来——洞府里的禁制只放生人。
            他缺的不是灵石，是一个跟那洞府无冤无仇的活人。
          effects: ["flag 识破赌局", "flag 应承辛掌柜", "factors.情报 +0.08"]
          goto: evt_2s_kujing_dongfu
        onFail:
          text: |
            三日一无所获。第四日再进赌坊，桌上的押票变成了二十一张。
            你只得应下。
          effects: ["flag 应承辛掌柜", "道心 -3"]
          goto: evt_2s_kujing_dongfu

      - text: 「票是假的。债，我不认。」
        karma:
          type: 毁诺
          target: 辛掌柜
          weight: 20
          polarity: -1
          hooks:
            - id: 押票转到了收账更狠的人手里
            - id: 赌坊自认倒霉，此事不了了之
        effects: ["flag 金手指已定", "flag 赖下赌债", "名望 -4", "道心 +2"]
        then:
          text: |
            辛掌柜也不恼，把押票一张张收好，用红绳扎起来。
            「仙长慢走。」他说，「票，我替你收着。」

      - text: 认下三百灵石，分期偿还，不替他办事
        karma:
          type: 立誓
          target: 辛掌柜
          weight: 12
          polarity: 0
          hooks:
            - id: 债照还，人两清
            - id: 利滚利，这债越还越厚
        effects: ["flag 金手指已定", "flag 认下赌债", "factors.法宝 -0.15", "道心 +5"]
        then:
          text: |
            「无冤无仇的债，我认。」你把随身的储物袋倒了个底朝天。
            辛掌柜看着你，头一回收了笑。
            「有意思。」他说，「这年头，还有人拿亏吃。」

      - text: 掀桌。当着满堂的客，把押票撕了
        karma:
          type: 夺取
          target: 辛掌柜
          weight: 22
          polarity: -1
          hooks:
            - id: 和记的场子被人当众踩了，这口气他咽不下
            - id: 打服了，坊市反倒传你的名
        effects: ["flag 金手指已定"]
        check: { actor: "effectiveTier * 45 + factors.状态 * 30", dc: "108", scale: 14 }
        onSuccess:
          text: |
            看场的四个，你放倒了三个。押票的碎纸落了一桌，满堂没人敢接话。
            出得门去，你回头——辛掌柜站在檐下望着你，还在笑。
          effects: ["名望 +9", "锋芒 +0.12", "expose.真实修为 +10", "flag 撕票结怨"]
        onFail:
          text: |
            看场的不止四个。你被按在赌桌上，当着满堂客人，
            在第十八张押票上按了指印。这一张，是真的。
          effects: ["factors.状态 -0.2", "名望 -6", "道心 -5", "flag 屈签押票"]

  # ══════════════════════════════════════════════════════════
  # 备选金手指链 B（丹）· 2/2 —— 链尾：苏婆婆 / 面板 / 拒绝
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_kujing_dongfu
    title: 枯井下的洞府
    weight: 120
    act: 2
    once: true
    cond: "tier == 2 && flag('应承辛掌柜') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      井底横着一道石门。门上的禁制老得只剩一口气，却仍认人——
      辛掌柜的人烂在门槛外，铜符递过去，纹丝不动；你空手一推，门开了。
      洞府只有一进。丹房正中，一只豁口药鼎坐在冷了不知多少年的炉上，鼎壁焦黑。
      炉边靠着一具坐化的尸骨，衣冠齐整，指骨间捏着一枚青玉简。
      你俯身去搬鼎，听见鼎里极轻地响了一声。
      像叹气。
    choices:
      - text: 抱鼎出井，交货，两清
        karma: none
        effects: ["flag 金手指已定", "flag 交出药鼎", "flag 债已清", "名望 +2", "道心 -4"]
        then:
          text: |
            押票当着你的面烧了，火光里辛掌柜的笑纹一动不动。
            你走出赌坊时，袖口还留着那只鼎的凉气。
            那声叹气，你只当没有听见。

      - text: 守着鼎，把那口气等出来
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +15"
          - "悟性 +3"
          - "expose.残魂 +4"
          - "flag 私藏药鼎"
          - "flag 失信辛掌柜"
        then:
          text: |
            三炷香后，鼎里那口气终于开了腔。苍老，含混，像隔着一层百年的灰：
            「小娃娃，手脚倒干净……外头那个要拿老身炼丹的，你也敢应他的差？」
            你抱起鼎，出井，往城外走。债，回头再算。

      - text: 鼎照交。玉简，你袖了
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +3"
          - "僭越 +5"
          - "flag 交出药鼎"
          - "flag 债已清"
        then:
          text: |
            从尸骨指间抽出玉简的那一瞬，光纹钻进掌心，一个不带情绪的声音响起：
            「载体已确认。当前权柄——面板。」
            眼前的世界忽然多了一层细字。押票烧尽，辛掌柜捧着鼎笑得很深——
            你看见他头顶浮着一行小字。红的。

      - text: 一样不动，原路上去
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "flag 认下赌债", "道心 +11", "factors.法宝 -0.12"]
        then:
          text: |
            「井下只有死人。」你对辛掌柜说，「债，我还。」
            他盯着你看了半晌，忽然笑了，把押票收回怀里。
            往后三年，你按月往和记送灵石——那洞府里的东西，你一件都不想沾。

      - text: 调包。灶下那只裂鼎，一样焦黑
        require: "flag('识破赌局')"
        karma:
          type: 欺骗
          target: 辛掌柜
          weight: 30
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 辛掌柜验出了假鼎
              lethal: true
              foreshadow:
                - { at: -8, evt: "坊市传言，和记的丹炉这一冬一炉都没成" }
                - { at: -3, evt: "有人抱着一只裂口焦鼎，在你常走的巷口坐了一天" }
                - { at: -1, evt: "辛掌柜下帖请你吃酒，席设赌坊后院，只摆了一双碗筷", window: true }
            - id: 他验也没验，当着你的面烧了押票
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +20"
          - "悟性 +3"
          - "expose.残魂 +3"
          - "flag 调包药鼎"
          - "flag 债已清"
        then:
          text: |
            他的人没一个活着见过真鼎——这是你三日里摸清的最后一件事。
            裂鼎出井交差，真鼎捆在井壁的暗龛里。押票烧尽，你夜里折回去取。
            鼎里那口气哼了一声：「胆子不小。老身生前，最不缺的就是你这号病人。」

  # ══════════════════════════════════════════════════════════
  # 独立大事 · 同门的秘密
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_jiebei_sihui
    title: 界碑外的私会
    weight: 65
    act: 2
    once: true
    cond: "tier == 2 && flag('宗门弟子')"
    tags: [主干, 道德, 岔路]
    text: |
      巡山替值，你抄了界碑外的近路，撞见了不该撞见的事。
      内门的孟秋池蹲在一堆篝火边，火对面坐着个黑衣女修——
      她袖口滚出来的煞气是魔道的路数，做不得假。
      你看见孟秋池把一包东西递了过去。
      他发现你时，脸一下子白了，隔着十几步就作了个揖，声音压得极低：
      「她不是细作，是伤退躲仇的。瞒我三个月……三个月后她伤好就走。
      师弟，我拿什么换都行。」
    choices:
      - text: 「三个月。多一天，我就上报。」
        karma:
          type: 施恩
          target: 孟秋池
          weight: 25
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 他记你一世
            - id: 三个月后她没走，事发连你一并拖下水
        effects: ["flag 瞒下孟秋池", "功德 +3", "道心 -2"]
        then:
          text: |
            孟秋池长揖到地。此后三个月，他替你值了所有的夜巡，谁也没提为什么。
            第三个月的最后一天，界碑外的篝火没有再亮——
            雪地上只留了一只空药包，和朝北去的一行脚印。

      - text: 上报执法堂
        karma:
          type: 背叛
          target: 孟秋池
          weight: 30
          polarity: -1
          matureWindow: [8, 60]
          hooks:
            - id: 他被废去修为逐出山门，恨你入骨
            - id: 执法堂记你一功
        effects: ["flag 上报孟秋池", "名望 +10", "道心 -4", "功德 -3"]
        then:
          text: |
            执法堂来得比你想的快。女修走脱了，孟秋池没跑——
            他就站在界碑边等着，被押走时回头看了你一眼。
            不恨，就是看了一眼。那一眼你记了很多年。

      - text: 「瞒可以。往后你在内门，替我办三件事。」
        karma:
          type: 夺取
          target: 孟秋池
          weight: 25
          polarity: -1
          hooks:
            - id: 从此互相拿捏
            - id: 他狗急了，先咬你
        effects: ["flag 拿捏孟秋池", "堕度 +5", "道心 -5", "factors.情报 +0.08"]
        then:
          text: |
            孟秋池盯着你看了很久，像是头一回认识你。
            「好。」他说，「三件。」
            火堆对面，那女修低低笑了一声。不知是笑他，还是笑你。

      - text: 先跟上那女修，查她的底
        karma: none
        check: { actor: "talent.神魂 + factors.情报 * 40", dc: "72", scale: 12 }
        onSuccess:
          text: |
            你缀了她半夜，看清了她背上的伤——魔门的「追心钉」，专钉叛门之人。
            她躲的不是正道，是自家人。
            你把看见的原样告诉孟秋池，又替他把这三个月的巡值路线排开了。
          effects: ["flag 瞒下孟秋池", "flag 查明魔女底细", "factors.情报 +0.08", "功德 +5"]
        onFail:
          text: |
            跟到半山她忽然停步，头也不回：「再跟，就留下。」
            煞气贴着地皮漫过来。你退了。
            此后半月，界碑外的篝火再没亮过。
          effects: ["flag 打草惊蛇", "道心 -2", "factors.状态 -0.05"]

      - text: 当场喝破，出手拿人
        karma:
          type: 杀戮
          target: 魔修·玄绡
          weight: 26
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 魔门记下了你的名字
            - id: 孟秋池与你恩断义绝
        check: { actor: "effectiveTier * 45 + factors.状态 * 30", dc: "112", scale: 14 }
        onSuccess:
          text: |
            你一击打散她的护身煞气。孟秋池扑过来抱你的腰，被你肘开。
            执法堂赶到时，女修已被你用巡山索捆了三道。
            功是你的。孟秋池的求情，没人听。
          effects: ["名望 +14", "expose.真实修为 +8", "flag 上报孟秋池", "道心 -2", "功德 +3"]
        onFail:
          text: |
            煞气炸开，火堆整个泼熄。两人一前一后掠出界碑，眨眼没了踪影。
            你捂着肋下站在原地——那包东西掉在雪里，散开。
            是伤药。寻常得不能再寻常的伤药。
          effects: ["factors.状态 -0.15", "flag 打草惊蛇", "道心 -3"]

  # ══════════════════════════════════════════════════════════
  # 独立大事 · 坊市大火（身世钩子）
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_fangshi_dahuo
    title: 火里喊你名字的人
    weight: 70
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.2"
    tags: [主干, 岔路, 身世]
    text: |
      坊市南街走水。火起在绸庄，风一送，半条街都红了。
      你在人群外站定，正要走，火里传出一个声音——喊的不是「救命」，
      是你的名字。连名带姓，一声一声，不乱，不停。
      喊到第四声，你汗毛立起来了：它喊出了你的乳名。
      那个名字，山下没人知道；山上，你自己都快忘了。
    choices:
      - text: 冲进去
        karma:
          type: 救助
          target: 火中人
          weight: 20
          polarity: 1
          hooks:
            - id: 她还会来找你
            - id: 她再没有出现过
        effects: ["flag 火闻其名"]
        check: { actor: "talent.根骨 + factors.状态 * 40", dc: "72", scale: 11 }
        onCritSuccess:
          text: |
            你破开三堵火墙，在绸庄后院拖出一个老妇。她满脸烟灰，抓着你的手腕却不慌，
            翻过你的掌心，用指甲写了一个字，随即贴着你耳边说：「去问你娘。」
            人群涌上来时她松了手。再找，没了。
          effects: ["flag 火中救人", "flag 掌心的字", "originClues +3", "expose.身世 +3", "名望 +10"]
        onSuccess:
          text: |
            你从塌了半边的绸庄里背出一个老妇。她一直盯着你的脸看，看了很久，
            忽然摇头：「……不像。眉眼一点都不像。」
            你问她方才喊谁。她闭上眼，任人抬走了。
          effects: ["flag 火中救人", "originClues +2", "expose.身世 +2", "名望 +8", "factors.状态 -0.1"]
        onFail:
          text: |
            房梁塌下来那一瞬，你把身边的伙计推了出去，自己被压了半边肩。
            等你挣出来，喊声已经停了。火场翻遍，没有那个人。
          effects: ["flag 火中救人", "originClues +1", "名望 +6", "factors.状态 -0.25"]
        onCritFail:
          text: |
            你循声闯到火最深处——那里什么都没有。声音就在你四周，贴着耳根喊，不喘气。
            火舌卷上来时你才惊觉不对，退出来时，半边身子已经燎透了。
          effects: ["flag 火场重伤", "originClues +1", "factors.状态 -0.35", "lifespan -1"]

      - text: 站在人群里听完，不进
        karma: none
        effects: ["flag 火闻其名", "flag 隔火听名", "originClues +1", "道心 -3"]
        then:
          text: |
            喊声一直到火塌了才停。你在人群里站到半夜，脸上一阵一阵地烫——不是火烤的。
            收尸的进去抬出七具，你一具一具看过去。
            没有一具，像会认得你的人。

      - text: 循声辨位——先辨清那声音，再决定进不进
        karma: none
        effects: ["flag 火闻其名"]
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "68", scale: 11 }
        onSuccess:
          text: |
            你闭眼听了三息，寒意顺着后颈下去了——那声音不吸气。
            一声与一声之间没有换气的空隙，像是念出来的，
            又像很多年前录下的一段话，搁在火里，专等你路过。
          effects: ["flag 听破火中声", "originClues +2", "道心 +3"]
        onFail:
          text: |
            风声、火声、塌梁声。你辨了半天，什么也辨不真，喊声停了。
            挤出人群时，你后背的衣裳湿透了。
          effects: ["flag 隔火听名", "originClues +1", "道心 -2"]

      - text: 引渠破墙，先救火
        karma:
          type: 施恩
          target: 南街商户
          weight: 14
          polarity: 1
          hooks:
            - id: 半条街的人记住了你
            - id: 绸庄东家嫌你砸了他的墙
        effects: ["flag 火闻其名"]
        check: { actor: "talent.悟性 + effectiveTier * 20", dc: "75", scale: 12 }
        onSuccess:
          text: |
            你破开两堵界墙，引渠水灌进去，三更前把火压住了，半条街保了下来。
            救出的人一个个从你面前抬过去——没有一个是喊你名字的人。
            火熄之后，那声音也没有再响。
          effects: ["名望 +12", "功德 +8", "originClues +1"]
        onFail:
          text: |
            墙破了，渠水却引偏了，反倒冲塌了一间货栈。火最后是自己烧完的。
            有人在背后指你的脊梁骨。你没回头。
          effects: ["名望 -5", "功德 -2", "道心 -2", "flag 隔火听名"]

      - text: 「【面板】看穿这场火。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["flag 火闻其名", "flag 听破火中声", "originClues +2", "expose.金手指 +3", "僭越 +2"]
        then:
          text: |
            细字在火光里一行行浮起：起火处·绸庄西厢；存者·十一；亡者·七。
            你一行行看下去，在名单尽头看见一行从未见过的红字——
            「呼名者：无此人。」
            面板顶着火光闪了两下，那行字自己灭了。

      - text: 转身走，当没听见
        karma: none
        effects: ["flag 掩耳而行", "道心 -5", "锋芒 -0.05"]
        then:
          text: |
            你走出两条街，还能听见那个名字。
            回到山上，夜里打坐，喊声在定境里又响了一遍——一声不多，一声不少。
            你睁开眼。窗外无火，无人。

  # ══════════════════════════════════════════════════════════
  # 独立大事 · 北来的难民
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_beilai_liumin
    title: 雪前的流民
    weight: 75
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.1"
    tags: [主干, 道德]
    text: |
      北边三州打起来了。先过境的是溃兵，再过境的就是人——
      拖家带口，推着独轮车，在山门外的官道上排出去二里地。
      宗门当夜落了闭山令：山门七日不开，弟子不得私放一人上山，不得私开仓廪。
      布告栏前没人说话。天阴得很沉，看云势，三日内必有大雪。
      你囤在洞府里的灵谷和冬衣，够百来人熬过这场雪。
    choices:
      - text: 开私仓——连夜把囤粮运下山，不留名
        karma:
          type: 施恩
          target: 北地流民
          weight: 20
          polarity: 1
          matureWindow: [10, 80]
          hooks:
            - id: 多年后有人捧着一只粗碗来谢你
            - id: 粮车被认了出来，宗门追责
        effects: ["flag 开过私仓", "功德 +12", "道心 +6", "factors.法宝 -0.1"]
        then:
          text: |
            三车粮，两车冬衣，趁夜从樵道运下去，赶在头一片雪落地前分完了。
            你蒙着脸，没人看清你。
            回山的路上雪大起来，你回头望了一眼官道上的火堆——一堆一堆，烧得都不旺。

      - text: 随众——闭山令就是闭山令
        karma: none
        effects: ["flag 随众闭门", "道心 -4"]
        then:
          text: |
            七日后开山，官道上空了。
            雪化的地方露出几处新坟，坟头插的不是碑，是独轮车的车把。
            你从那条道下山办事，走得比平时快。

      - text: 带头请命——联名上书，请宗门开仓设粥棚
        karma: none
        check: { actor: "名望 + 道心 * 0.5", dc: "55", scale: 12 }
        onSuccess:
          text: |
            二十七个名字联在你后头。掌门批了三个字：「设三日。」
            粥棚支在山门外，你的名字在名单头一行——
            功记在你身上；往后出了差错，也记在你身上。
          effects: ["flag 带头请命", "名望 +15", "功德 +8", "锋芒 +0.1", "道心 +5"]
        onFail:
          text: |
            联名书递上去，当日就驳了回来，朱笔批着「聚众」二字。
            名单头一行是你。此后半年，你每次考绩都莫名慢半档。
          effects: ["flag 请命被驳", "名望 -5", "道心 +2", "锋芒 +0.05"]

      - text: 下山混进流民里，看一夜
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "72", scale: 12 }
        onSuccess:
          text: |
            第三堆篝火边，你看见了不该有的东西：三个「流民」指甲缝里干干净净，
            靴底是北军的制式；火堆边埋的不是锅，是一口封了漆的箱子。
            兵祸赶着人往南走——有人要的，就是这些人往南走。
          effects: ["flag 流民探底", "factors.情报 +0.1"]
        onFail:
          text: |
            一夜风雪，你只看见饿。孩子饿得不哭，大人饿得不看锅。
            天亮你回山，那种安静跟了你一路。
          effects: ["flag 见过流民", "道心 +2", "factors.状态 -0.05"]

      - text: 「灾年最贱的是人。」——挑十个筋骨好的，签死契
        karma:
          type: 夺取
          target: 北地流民
          weight: 18
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 死契里有个孩子，后来长成了你想不到的人
            - id: 「趁灾买人」的名声安在了你头上
        effects: ["flag 灾年买仆", "堕度 +6", "道心 -6", "factors.伙伴 +0.08", "名望 -4"]
        then:
          text: |
            一袋灵谷换一张死契，画押的手冻得握不住笔。
            十个人跟你上山，一路没人回头——回头看的人，签不下这种契。
            夜里你听见柴房有人压着嗓子哭。第二天起来，柴码得整整齐齐。

  # ══════════════════════════════════════════════════════════
  # 独立大事 · 替人渡劫护法（回响：开过私仓）
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_hufa_qiri
    title: 七日护法
    weight: 65
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.4"
    tags: [主干, 机缘]
    text: |
      递帖上门的是坊市药铺的掌柜，替人传话。
      话主是城西闭关十九年的散修闻人涧——他要冲结丹了。
      丹劫如火，最忌冲关时有人打搅，需一位护法，守洞外七日。
      酬劳：灵石三百，外加一件他游历时得的旧法器，先付一半。
      药铺掌柜压低了声音：「老先生前两次冲关都没成，这一回把棺材本都押上了。
      仙长要应就得应全——丹劫无眼，这七日什么都可能来。」
    choices:
      - text: 应下，守足七日
        karma:
          type: 施恩
          target: 闻人涧
          weight: 28
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 丹成之日，他认你这个小友
            - id: 丹碎人亡，他的仇家却记住了守在洞外的你
        check: { actor: "effectiveTier * 40 + talent.神魂 * 0.5 + 道心 * 0.3", dc: "108", scale: 14 }
        onCritSuccess:
          text: |
            第六夜天火三落，你三次替他引偏了火头。
            开炉那日，闻人涧金丹在手，对你长揖到地：
            「借你这双眼七日，老朽记到丹碎那天。」
            法器之外，他又把半生游历的手札塞给了你。
          effects: ["flag 护法功成", "factors.法宝 +0.18", "factors.情报 +0.08", "名望 +10"]
        onSuccess:
          text: |
            七日惊而无险。第七日清晨洞门开了，闻人涧捧着丹走出来，
            人瘦了一圈，眼睛亮得吓人。酬劳分文不少。
            他送你到山口，只说了一句：「往后你冲关，递个信。」
          effects: ["flag 护法功成", "factors.法宝 +0.15", "名望 +6"]
        onFail:
          text: |
            第五日劫火偏了一线，你抬手硬接了半记，右臂的衣袖齐肘烧没了。
            丹成了，成色平平。闻人涧把酬劳如数付清，看你的眼神里多了愧。
          effects: ["flag 护法带伤", "factors.状态 -0.2", "factors.法宝 +0.1", "名望 +4"]
        onCritFail:
          text: |
            第七日，丹碎。炉炸开的那一瞬，闻人涧反手把你推出洞口，自己没有出来。
            你左臂三条经脉焦了，往后阴雨天，抬不过肩。
            药铺掌柜替他收的尸。你去帮了忙。
          effects: ["flag 护法之殇", "factors.状态 -0.4", "根骨 -4", "lifespan -3", "道心 -5"]

      - text: 应下，但把话讲明——劫火过三，我必退
        karma:
          type: 立誓
          target: 闻人涧
          weight: 15
          polarity: 0
          hooks:
            - id: 他敬你有分寸
            - id: 第三道火落下时，他在炉里喊了你的名字
        check: { actor: "effectiveTier * 40 + talent.神魂 * 0.5", dc: "88", scale: 12 }
        onSuccess:
          text: |
            七日只落了两道火，你守满了。丹成，酬劳照付。
            闻人涧送你出山口时说：「把丑话说在前头的人，反倒信得过。」
          effects: ["flag 护法功成", "factors.法宝 +0.1", "道心 +3", "名望 +4"]
        onFail:
          text: |
            第三道火落下来的时候，你按约退到了半里外。
            第四道你听见了。第五道你也听见了。
            丹终究成了，只是裂了一道纹。此后他见你照旧客气，只是再没提过那七日。
          effects: ["flag 护法退过", "factors.法宝 +0.06", "道心 -3"]

      - text: 先探他的底，再回话
        karma:
          type: 施恩
          target: 闻人涧
          weight: 24
          polarity: 1
          hooks:
            - id: 过命的交情
            - id: 那夜来的人，记住了你改的阵
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "74", scale: 12 }
        onSuccess:
          text: |
            三日查下来你弄明白了：他前两次冲关，都败在冲关当夜有人上门——
            他年轻时结的仇，比他的丹龄还长。
            你应下差事，把洞外的警戒阵改了三处。第四夜果然有人来，
            踩中你改的那一处，没进百步就退了。丹成之日，闻人涧握着你的手腕，没说话。
          effects: ["flag 护法功成", "flag 探明护法底细", "factors.情报 +0.08", "factors.法宝 +0.12", "名望 +6"]
        onFail:
          text: |
            他的来路你查不出来——太干净了，干净得不像活了一百多岁的人。
            你把定钱退了回去。半月后听说他丹成了，
            替他护法的是坊市雇的两个游修，酬劳翻了一倍。
          effects: ["flag 辞过护法", "道心 +1"]

      - text: 辞了——「这份酬劳，烫手。」
        karma: none
        effects: ["flag 辞过护法", "道心 +2", "锋芒 -0.05"]
        then:
          text: |
            药铺掌柜没多劝，收帖走了。半月后城西传来消息：丹成了。
            道贺的人挤破了门槛。你路过时在门外站了片刻，没进去。
            少一桩富贵，也少一桩因果——这笔账划不划算，你很多年后也没算清。

      - text: 「酬劳不要。前辈丹成之后，替我照看一程北边下来的那些人。」
        require: "flag('开过私仓')"
        karma:
          type: 立誓
          target: 闻人涧
          weight: 20
          polarity: 1
          matureWindow: [3, 40]
          hooks:
            - id: 他应了，也做到了
            - id: 丹若不成，这句托付随他入土
        effects: ["flag 护法为民", "flag 护法功成", "功德 +10", "道心 +8", "名望 +5"]
        then:
          text: |
            隔着洞门，闻人涧静了半晌，问了你的名字，又问了一遍你要护的是些什么人。
            七日无事，丹成。他出关头一件事不是开宴，是往山门外的官道去了一趟。
            开春之前，那里的粥棚没断过火。

  # ══════════════════════════════════════════════════════════
  # 独立大事 · 假冒的你（回响落点：拿捏孟秋池 / 火闻其名）
  # ══════════════════════════════════════════════════════════

  - id: evt_2s_dingming_zhe
    title: 顶名的人
    weight: 70
    act: 2
    once: true
    cond: "tier == 2 && sublevel > 0.5 && 名望 >= 10"
    tags: [主干, 岔路, 藏拙]
    text: |
      山下传回来的消息越来越离谱：有人顶着你的名号行走三县——
      「山上的那位仙师」替盐商驱过邪，替县尊看过宅，收人礼金，出手「丹药」。
      蹊跷的是，他没砸你的名声。经他的手，你的名头反倒一日响过一日，
      连你三年前在坊市替人正过一次骨这种小事，他都讲得分毫不差。
      同门已经有人拿这个打趣你了。再传下去，迟早传进长老的耳朵。
    choices:
      - text: 亲自下山去追
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "70", scale: 12 }
        onSuccess:
          text: |
            你在渡口的茶棚里堵住了他。他见了你，不跑，也不慌，起身让座：
            「真人来了。名字借了三个月，利钱我认。」
            他知道你的事，多得不像一个骗子该知道的——包括你没对任何人讲过的那一件。
            你还没开口，他把一本礼金账推过来，转身下了渡船。
          effects: ["flag 截住顶名者", "originClues +2", "factors.情报 +0.06", "名望 +4"]
        onFail:
          text: |
            赶到地方，人走了一日。客栈号房里留着半盏冷茶，一句口信：
            「替兄台把名声再养肥些。」
            掌柜的说，那位「仙长」的眉眼，跟你有五六分像。
          effects: ["flag 顶名者在逃", "originClues +1", "道心 -3"]

      - text: 由他去——名声白涨，何乐不为
        karma: none
        effects: ["flag 默许顶名", "名望 +10", "锋芒 +0.08", "道心 -3"]
        then:
          text: |
            你就当多了个不要工钱的门客。名头一日响过一日，
            连宗门里看你的眼神都热了几分。
            只是夜里偶尔想起来：他把你的事迹讲得那么真——他到底还知道些什么？

      - text: 将计就计——放出风去，「你」下月初八在城隍庙设坛讲药理
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 40", dc: "74", scale: 12 }
        onSuccess:
          text: |
            初八那日你坐在坛上，一眼就看见了他——混在人堆里，听得很认真，记了两页字。
            散场的人流里他没躲你的眼，拱了拱手。
            蒲团底下压着一封信。信里只有一行：一个巷名，后缀四个字——「令堂旧居」。
          effects: ["flag 将计就计", "originClues +3", "expose.身世 +2", "名望 +8"]
        onFail:
          text: |
            坛是设了，他没来。来的是三十几个求医问药的，把你围到掌灯。
            你骑虎难下讲了半日药理，临了还搭出去七八张方子。
          effects: ["flag 弄巧成拙", "名望 +6", "锋芒 +0.1", "道心 -2"]

      - text: 报请执法堂，发文书缉拿
        karma: none
        effects: ["flag 缉拿顶名", "名望 -4", "锋芒 -0.05", "道心 +2"]
        then:
          text: |
            文书发下去，三县的坊市都贴了。画影图形，越传越广——
            他倒像得了势，索性销声匿迹。
            宗门里这桩事成了茶余的谈资：山上的仙师，被山下一个骗子撵着名声跑。

      - text: 让孟秋池去办——他在山下有的是眼线，也该还你一件了
        require: "flag('拿捏孟秋池')"
        karma:
          type: 夺取
          target: 孟秋池
          weight: 12
          polarity: -1
          hooks:
            - id: 事办得干净，把柄又厚一分
            - id: 他借这趟差事，摸清了你的底
        effects: ["flag 顶名者落网", "factors.情报 +0.1", "名望 +6", "堕度 +2"]
        then:
          text: |
            半月后，孟秋池递上来一只信匣：顶名者的落脚点、来路、
            这三个月见过的每一个人，钉是钉，铆是铆。
            「人我没动。」他说，「你只说查，没说拿。」
            匣底压着一句他自己添的话：此人查你，比你查他，早了半年。

      - text: 先查一件事——坊市大火那夜，他在哪
        require: "flag('火闻其名')"
        karma: none
        check: { actor: "factors.情报 * 60 + talent.悟性", dc: "78", scale: 12 }
        onSuccess:
          text: |
            查出来了。大火前三日，他就住在南街绸庄的隔壁院；
            火起当夜退了房，往北去了。他不是躲火——他是知道那把火要来。
            火里喊你名字的声音，和这个顶着你名字的人，多半认得同一个人。
          effects: ["flag 火名同源", "originClues +3", "factors.情报 +0.08"]
        onFail:
          text: |
            那三个月他像不存在——住店不留名，雇车用现结，
            见过他的人，连他的口音都说不准。线断在渡口。
          effects: ["originClues +1", "道心 -2"]
`,nr=`# 幕三 · 主干岔路（金丹期）· evt_a3c_
# 覆盖：旧仇清算链（岔路11）/ 道侣线开端（沈青梧三张链）/ 身份暴露金丹版 /
# 收徒 / 宗门权力两张 / 天机阁上门
#
# 设计要点：
# · 旧仇链回收幕一的李虎（evt_waimen_qiangling）——「只杀元凶」留下的负因果
#   由 karmaWith('李虎') 驱动「仇人之子」卡；「灭门」走 lethal 预警链（铁律二）
# · 道侣链三张靠 flag 串联：识得沈青梧 → 沈青梧·生死之交 → 道侣/知己
# · 嫁祸与杀天机阁来使均为致死因果，各配三段预警 + 可干预窗口

events:

  # ══════════════════════════════════════════════════════════
  # 岔路 11 · 旧仇清算链 一：当年的人落在你手里
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_jiuchou_luowang
    title: 琵琶骨上的铁链
    weight: 90
    act: 3
    once: true
    cond: "tier == 3 && (flag('已立威') || 名望 > 80)"
    tags: [主干, 旧仇, 岔路]
    text: |
      刑堂押来一个人，铁链穿了琵琶骨。
      你认了好一会儿才认出来——李虎。当年在下山岔道上，掂着木棍跟你讲「规矩」的那个。
      后来他转投黑水寨落了草，劫杀行商十一起，卷宗摞起来半尺高。寨中同伙家眷，也一并锁在山下。
      主审执事躬身请示：「他与师叔有旧怨，宗门上下都知道。此案，请师叔定夺。」
      李虎抬起头。他也认出你了。
    choices:
      - text: 「黑水寨上下，一个不留。」
        karma:
          type: 灭门
          target: 李虎一族
          weight: 60
          polarity: -1
          matureWindow: [20, 100]
          hooks:
            - id: 漏网之人蛰伏复仇
              lethal: true
              foreshadow:
                - { at: -12, evt: "有人在黑水寨的废墟前烧了三炷香" }
                - { at: -5, evt: "坊市传言，行刑那夜寨里少了一个少年" }
                - { at: -1, evt: "你的洞府门前，多了一块黑水寨的旧腰牌", window: true }
            - id: 从此无人敢犯你
        effects:
          - "堕度 +15"
          - "业障 +25"
          - "道心 -8"
          - "expose.杀过某人 +15"
          - "名望 +10"
          - "flag 灭李虎满门"

      - text: 只杀李虎。旁人依律发落，不多添一刀。
        karma:
          type: 杀戮
          target: 李虎
          weight: 30
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 虎有子
            - id: 一命抵一命，两讫
        effects:
          - "堕度 +5"
          - "业障 +8"
          - "expose.杀过某人 +6"
          - "名望 +5"
          - "flag 杀了李虎"

      - text: 把当年那袋灵石丢还给他，人交刑堂按律办
        karma:
          type: 放走
          target: 李虎
          weight: 20
          polarity: 1
          matureWindow: [10, 80]
          hooks:
            - id: 矿里传出一句救你性命的话
            - id: 他不认这份情
        effects:
          - "功德 +12"
          - "道心 +6"
          - "名望 +6"
          - "flag 释怨·李虎"

      - text: 「留他一命。黑水寨那条道，往后替我盯着。」
        karma:
          type: 施恩
          target: 李虎
          weight: 25
          polarity: 1
          matureWindow: [8, 60]
          hooks:
            - id: 得一把趁手的刀
            - id: 刀是会回头的
        effects:
          - "factors.情报 +0.1"
          - "堕度 +3"
          - "僭越 +3"
          - "flag 收编李虎"

  # ══════════════════════════════════════════════════════════
  # 岔路 11 · 旧仇清算链 二：仇人之子上门
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_chouren_zhizi
    title: 柴刀
    weight: 70
    act: 3
    once: true
    cond: "tier == 3 && karmaWith('李虎') < 0 && !flag('灭李虎满门')"
    tags: [主干, 旧仇, 因果]
    text: |
      夜里有人翻进洞府外院，被护山禁制拍在地上。
      是个十五六岁的少年，练气三层，怀里揣着一把磨得极亮的柴刀。
      「李虎是我爹。」他被禁制压得跪着，还是把头抬了起来，「杀人偿命。」
      不喊，也不哭。你看得出他练过——方才冲你要害去的那一下，路数是对的。
      守夜弟子已经按住剑柄，等你一句话。
    choices:
      - text: 斩草除根
        karma:
          type: 杀戮
          target: 李家少年
          weight: 30
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 门里门外都寒了心
            - id: 干净
        effects:
          - "堕度 +10"
          - "业障 +15"
          - "道心 -8"
          - "expose.杀过某人 +10"

      - text: 废其修为，逐下山去
        karma:
          type: 夺取
          target: 李家少年
          weight: 20
          polarity: -1
          hooks:
            - id: 他换个名字，再练一遍
            - id: 山下多了个废人
        effects:
          - "堕度 +4"
          - "名望 +2"
          - "道心 -3"

      - text: 撤了禁制，把胸口亮给他。「刺得进，就是你爹赢。」
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "60", scale: 11 }
        onSuccess:
          text: 刀尖抵着你的衣襟停了很久，一寸一寸垂下去。他跪在地上哭出了声——进门之后，这是他头一次像个孩子。
          effects: ["功德 +6", "业障 -8", "道心 +5", "flag 李家因果两讫"]
        onFail:
          text: 他真刺了。刀进去半寸，你没躲。他松手退了三步，看着你胸口的血，忽然把柴刀扔下了崖。
          effects: ["factors.状态 -0.15", "业障 -12", "功德 +4", "flag 李家因果两讫"]

      - text: 「刀留下。人，进门来。」——把这笔账背到自己身上
        karma:
          type: 立誓
          target: 李家少年
          weight: 25
          polarity: 0
          matureWindow: [15, 90]
          hooks:
            - id: 他叫了你一声师父
            - id: 他夜里还在磨刀
        effects:
          - "factors.伙伴 +0.05"
          - "道心 +4"
          - "flag 收留李家少年"

  # ══════════════════════════════════════════════════════════
  # 岔路 11 · 旧仇清算链 三：围山（假死避世选项卡）
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_choujia_weishan
    title: 七份帖子
    weight: 75
    act: 3
    once: true
    cond: "tier == 3 && (flag('灭李虎满门') || unresolvedEvil() >= 3)"
    tags: [主干, 旧仇, 危机]
    text: |
      帖子是一起递上来的，七份，落款各不相同。
      黑水寨的余党、被你按过律的人家、坊市里结过怨的散修——不知是谁牵的线，这些人凑到了一处。
      约期三日后，山门外，「讨一个公道」。
      山下客栈住满了生面孔，连挑水的路上都有人盯着。
      掌门没有过问，只让人捎来一句话：「宗门的山门，不替私怨开。」
      三日，够做很多事。
    choices:
      - text: 咬碎替身符，假死避世——身份、人脉、财产，一并烧在这具「尸首」里
        karma: none
        effects:
          - "fakeDeath"
          - "factors.法宝 -0.2"
          - "道心 -5"

      - text: 三日后，应约。一个一个打服。
        karma: none
        check: { actor: "effectiveTier * 55 + factors.功法 * 40", dc: "195", scale: 14 }
        onCritSuccess:
          text: 你在山门外立了半日，来的人换了七拨，没人走过第三招。日落时分，最后一份帖子被它的主人亲手烧了。
          effects: ["名望 +25", "锋芒 +0.12", "expose.真实修为 +10", "flag 旧账已清"]
        onSuccess:
          text: 打到第五场你袖子已经湿透。但七份帖子，日落前都换成了七份告罪书。
          effects: ["名望 +12", "factors.状态 -0.15", "flag 旧账已清"]
        onFail:
          text: 车轮战。第六场你被一柄软鞭抽下石阶，是巡山弟子把场子隔开的。公道没讨成，但也没人再提。
          effects: ["factors.状态 -0.3", "名望 -10", "lifespan -2"]
        onCritFail:
          text: 有人在第四场里下了死手。你在床上躺了三个月，醒来第一件事是让人去查——那七份帖子里，有一份的墨迹是宗门内的松烟墨。
          effects: ["factors.状态 -0.45", "lifespan -4", "道心 -6", "flag 围山有内鬼"]

      - text: 摆酒。当众赔罪，银货两讫。
        karma: none
        effects:
          - "factors.法宝 -0.18"
          - "业障 -15"
          - "名望 -8"
          - "道心 -3"
          - "flag 旧账已清"

      - text: 「【苟道】闭死关。让时间替我磨掉这口气。」
        require: "hasSystem('苟道')"
        karma: none
        effects:
          - "sublevel +0.05"
          - "锋芒 -0.25"
          - "名望 -12"
          - "僭越 -8"
          - "flag 闭关避祸"

  # ══════════════════════════════════════════════════════════
  # 道侣线 一：药庐相识
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_yaolu_gaifang
    title: 改方子的人
    weight: 65
    act: 3
    once: true
    cond: "tier == 3"
    tags: [主干, 道侣, 人际]
    text: |
      金丹结成之后，旧年的丹毒压不住了，一入夜丹田就发烫。
      济生堂的老坐堂给你开了方子。你去药庐配药，柜前一个青衣女修接过方子看了一遍，搁下了。
      「紫芝换成三年的。」她说，「九转紫芝性烈，与你丹里的火毒犯冲。照这么吃，丹基十年必裂。」
      说完她接着碾自己的药，没有再看你。
      你后来才打听到，她叫沈青梧，丹阁的人，炼丹十一年，替人改方子从不多收一个灵石。
    choices:
      - text: 追出去，问那一味药的道理
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "66", scale: 11 }
        onSuccess:
          text: 她讲了两句就停了，看你的眼神变了变。「你懂药理。」她把手里的药杵搁下，多讲了一炷香。
          effects: ["悟性 +1", "丹毒 -3", "flag 识得沈青梧"]
        onFail:
          text: 她讲到第三句，你没跟上。她也不恼，只把那味药的名字写在纸角递给你。「回去自己查。查明白了，方子才是你的。」
          effects: ["道心 +1", "flag 识得沈青梧"]

      - text: 按她改的方子抓药，记下这个名字
        karma: none
        effects:
          - "丹毒 -5"
          - "factors.状态 +0.05"
          - "flag 识得沈青梧"

      - text: 老坐堂行医五十年，不至于错。按原方抓。
        karma: none
        effects:
          - "丹毒 +4"
          - "道心 -2"

      - text: 「【苏婆婆】婆婆，她改得对么？」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.苏婆婆.favor +5"
          - "悟性 +1"
          - "丹毒 -5"
          - "flag 识得沈青梧"

  # ══════════════════════════════════════════════════════════
  # 道侣线 二：断龙涧的那一剑
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_duanlongjian_yijian
    title: 断龙涧
    weight: 80
    act: 3
    once: true
    cond: "tier == 3 && flag('识得沈青梧')"
    tags: [主干, 道侣, 冲突]
    text: |
      丹阁往火岩谷采一味赤髓芝，点了你护道。同行的正是沈青梧——赤髓芝离火性烈，全程要她的手法养着。
      去时无事。回程过断龙涧，三道剑光贴着崖壁斜插下来，为首的黑衣人直取你后心。
      你听见风声时，已经晚了半步。
      是沈青梧撞开的你。那一剑从她左肩穿过去，她闷哼都没有哼，反手把药匣塞进你怀里——
      「药别摔了。」
      崖下还有人往上爬。
    choices:
      - text: 背起她杀出去
        karma: none
        check: { actor: "effectiveTier * 50 + factors.功法 * 30", dc: "160", scale: 13 }
        onSuccess:
          text: 你背着她连破两道截杀，落到涧口时她已经晕过去了，手还扣着你的衣领。药匣一角磕瘪了，芝无恙。
          effects: ["factors.道侣 +0.08", "factors.状态 -0.12", "flag 沈青梧·生死之交"]
        onFail:
          text: 你们是滚下溪涧、顺水漂出三里才脱身的。两个人都挂了彩。她靠在石头上缓过气，第一句话是「芝呢」，第二句是「你背上的伤，回去我看」。
          effects: ["factors.状态 -0.28", "lifespan -1", "factors.道侣 +0.06", "flag 沈青梧·生死之交"]

      - text: 把最后一颗保命丹按进她嘴里
        karma:
          type: 救助
          target: 沈青梧
          weight: 25
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 那颗丹她记了很多年
            - id: 你自己的伤，落下了病根
        effects:
          - "factors.道侣 +0.1"
          - "factors.状态 -0.1"
          - "丹毒 +2"
          - "flag 沈青梧·生死之交"

      - text: 拎起药匣，独自走脱。差事要紧。
        karma:
          type: 背叛
          target: 沈青梧
          weight: 22
          polarity: -1
          matureWindow: [5, 50]
          hooks:
            - id: 她活了下来，也记住了
            - id: 丹阁的门从此对你关上
        effects:
          - "道心 -8"
          - "堕度 +4"
          - "名望 -3"

      - text: 「【独孤离】老祖，借剑。」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +6"
          - "expose.残魂 +8"
          - "witness 沈青梧 残魂"
          - "factors.道侣 +0.05"
          - "flag 沈青梧·生死之交"

  # ══════════════════════════════════════════════════════════
  # 道侣线 三：灯下定情，或止于知己
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_qingwu_dengxia
    title: 算不清的一笔
    weight: 80
    act: 3
    once: true
    cond: "tier == 3 && flag('沈青梧·生死之交')"
    tags: [主干, 道侣, 岔路]
    text: |
      她的伤养了半年。你去丹阁问过两次，都被药童挡了回来。
      入冬那晚她自己来了，肩上落着雪，手里提一只食盒——盒里不是饭，是一炉丹，九颗，颗颗有纹。
      「固本的。你丹里的火毒我顺手算过，这一炉压得住。」她把食盒放下，「药债，两讫。」
      话说完了，她没有走。灯芯爆了一下。
      「我炼了十一年丹，账从来算得清。」她看着灯，不看你，「只有你这一笔，我算不清利钱。」
    choices:
      - text: 「那就不算了。往后一辈子，慢慢还。」——结为道侣
        karma:
          type: 立誓
          target: 沈青梧
          weight: 40
          polarity: 0
          matureWindow: [20, 200]
          hooks:
            - id: 大道同行，寒暑不弃
            - id: 枕边藏不住秘密
        effects:
          - "flag 道侣·沈青梧"
          - "factors.道侣 +0.15"
          - "道心 +5"

      - text: 「青梧，我这条路上因果太重。账，就记到这儿。」——止于知己
        karma: none
        effects:
          - "flag 知己·沈青梧"
          - "factors.伙伴 +0.05"
          - "道心 +2"

      - text: 把食盒原样推回去
        karma: none
        effects:
          - "道心 -6"

      - text: 「【面板】姻缘一栏，先看一眼。」
        require: "hasSystem('面板')"
        karma:
          type: 立誓
          target: 沈青梧
          weight: 40
          polarity: 0
          matureWindow: [20, 200]
          hooks:
            - id: 面板上那一行，你没敢看完
            - id: 她若知道你看过
        effects:
          - "flag 道侣·沈青梧"
          - "factors.道侣 +0.15"
          - "僭越 +5"
          - "expose.金手指 +3"
          - "道心 -4"

  # ══════════════════════════════════════════════════════════
  # 身份暴露大危机 · 金丹版：静室对质
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_jingshi_sanzhancha
    title: 静室里的四盏茶
    weight: 85
    act: 3
    once: true
    cond: "tier == 3 && maxExpose > 70"
    tags: [主干, 危机, 暴露]
    text: |
      掌律长老的静室里摆了四个蒲团，三位长老都在，茶倒了四盏。
      没有刑堂的人，没有笔录。掌律长老亲手把茶推过来。
      「坐。今日的话，出不了这间屋子。」
      案上摆着三样东西：一页你入门时的名册、一枚黑水峡捡到的碎符、一份坊市秋拍的底账。
      「一件一件说，还是并成一件说？」他问得很慢，「宗门养你到金丹，总要知道，养的是什么。」
    choices:
      - text: 咬碎齿间替身符，假死脱身——烧掉这个名字
        karma: none
        effects:
          - "fakeDeath"
          - "factors.法宝 -0.2"
          - "道心 -6"

      - text: 端起茶，从裂缝那一夜讲起
        karma:
          type: 立誓
          target: 掌律长老
          weight: 30
          polarity: 0
          matureWindow: [10, 100]
          hooks:
            - id: 三位长老替你封了口
            - id: 知道的人，又多了三个
        effects:
          - "witness 掌律长老 金手指"
          - "道心 +8"
          - "名望 +5"
          - "僭越 +5"
          - "flag 秘密半公开"

      - text: 把库房执事郑迁的名字放进那份底账里
        karma:
          type: 欺骗
          target: 郑迁
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 郑家后人查清了当年
              lethal: true
              foreshadow:
                - { at: -10, evt: "有人重金赎买当年问案的卷宗" }
                - { at: -4, evt: "郑家小女在山门外跪了三日，求重审" }
                - { at: -1, evt: "重审的牒文，已经递到掌门案头", window: true }
            - id: 死案翻不了身
        effects:
          - "expose.金手指 -15"
          - "expose.残魂 -10"
          - "业障 +20"
          - "堕度 +12"
          - "道心 -10"
          - "flag 嫁祸郑迁"

      - text: 三样东西，一样一样掰碎了否
        karma:
          type: 欺骗
          target: 掌律长老
          weight: 20
          polarity: -1
          hooks:
            - id: 他信了七分
            - id: 他从此只信你三分
        check: { actor: "talent.神魂 + 藏拙 * 30", dc: "72", scale: 12 }
        onSuccess:
          text: 名册是誊录之误，碎符是缴获上交，底账是替丹阁代购。三件事都有据可查——因为你三年前就备好了这些「据」。
          effects: ["expose.金手指 -8", "expose.真实修为 -8", "道心 -3"]
        onFail:
          text: 说到底账那一条，掌律长老一直没端茶。你说完了，他把三样东西原样收好。「今日就到这儿。」——这比问罪更不好受。
          effects: ["expose.金手指 +8", "道心 -3", "flag 长老团起疑"]

  # ══════════════════════════════════════════════════════════
  # 收徒
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_shanmen_baishi
    title: 雪里跪着的人
    weight: 60
    act: 3
    once: true
    cond: "tier == 3"
    tags: [主干, 传承, 人际]
    text: |
      那少年在山门外守了两个月。问过名姓，叫石生，樵户出身。
      不喊不闹，天不亮把上山的石阶扫一遍，扫完就跪回原处。执事测过他的根骨——下下，灵根杂得像掺了沙的米。
      按例早该赶走，可他就是不走。落雪那天，巡山弟子看他半边身子埋在雪里，还跪着。
      你路过时他磕了个头，额头压进雪里：
      「资质我知道。杂役、火工，什么都行——只求离道近一点。」
    choices:
      - text: 「起来。跟我上山。」——收为亲传
        karma:
          type: 传承
          target: 石生
          weight: 30
          polarity: 0
          matureWindow: [30, 150]
          hooks:
            - id: 平庸的徒弟守了你一辈子
            - id: 你的因果，落到了他头上
        effects:
          - "factors.伙伴 +0.08"
          - "道心 +4"
          - "名望 +3"
          - "flag 徒·石生"

      - text: 不收。赠他一部凡人的拳谱，指他下山去。
        karma:
          type: 施恩
          target: 石生
          weight: 10
          polarity: 1
          hooks:
            - id: 二十年后，山下多了个好镖头
            - id: 他转身又去跪了别家山门
        effects:
          - "功德 +3"
          - "道心 +2"

      - text: 收进洞府当杂役。教不教，以后再说。
        karma:
          type: 施恩
          target: 石生
          weight: 8
          polarity: 1
          hooks:
            - id: 他把烧水扫地当成修行
            - id: 他早晚会明白，你没打算教他
        effects:
          - "flag 杂役·石生"
          - "道心 -2"

      - text: 「【面板】根骨、心性、寿数，看完再定。」
        require: "hasSystem('面板')"
        karma:
          type: 传承
          target: 石生
          weight: 30
          polarity: 0
          matureWindow: [30, 150]
          hooks:
            - id: 面板说他心性九十九
            - id: 面板没算出他的命
        effects:
          - "factors.伙伴 +0.08"
          - "expose.金手指 +2"
          - "僭越 +2"
          - "flag 徒·石生"

  # ══════════════════════════════════════════════════════════
  # 宗门权力 一：增补的一席
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_gongfeng_zengbu
    title: 增补的一席
    weight: 70
    act: 3
    once: true
    cond: "tier == 3"
    tags: [主干, 宗门, 站队]
    text: |
      供奉阁的陈长老坐化了，牌位进了祠堂，位子空出一席。
      按宗规，金丹以上皆可入册。今年入册的一共三人：剑峰推了雷远道，丹阁推了阮慈，再就是你。
      议事前十日，两边的人先后到了你洞府。
      剑峰来人话少：「雷师兄让带一句——他敬你。」
      丹阁来人话多，礼也重，连条陈都替你拟好了。
      名册压在案上。落谁的名，十日后满宗门都会知道。
    choices:
      - text: 落自己的名。这一席，你也要争。
        karma: none
        check: { actor: "名望 + talent.悟性 * 0.3", dc: "88", scale: 12 }
        onSuccess:
          text: 议事那日你陈了三条宗务利弊，条条落在实处。唱名过半，胜负已分。雷远道散会后在廊下等你，抱了一拳，什么也没说。
          effects: ["flag 位列长老", "名望 +20", "锋芒 +0.1", "factors.情报 +0.05"]
        onFail:
          text: 差了四票。阮慈上位当日，丹药份例的新册子发下来，你的名字挪到了第二页。
          effects: ["名望 -8", "道心 -3", "flag 争位失利"]

      - text: 把票许给剑峰
        karma:
          type: 施恩
          target: 剑峰峰主
          weight: 18
          polarity: 1
          hooks:
            - id: 剑峰欠你一票
            - id: 你从此被当成剑峰的人
        effects:
          - "flag 站队·剑峰"
          - "名望 +4"

      - text: 把票许给丹阁
        karma:
          type: 施恩
          target: 丹阁阁老
          weight: 18
          polarity: 1
          hooks:
            - id: 丹阁的份例先紧着你
            - id: 阮慈坐稳之后，头一个提防的就是你
        effects:
          - "flag 站队·丹阁"
          - "名望 +4"

      - text: 名册不动。谁也不推，谁也不争。
        karma: none
        effects:
          - "锋芒 -0.08"
          - "名望 -4"
          - "道心 +2"

  # ══════════════════════════════════════════════════════════
  # 宗门权力 二：刑堂的印
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_xingtang_lingyin
    title: 刑堂的印
    weight: 70
    act: 3
    once: true
    cond: "tier == 3"
    tags: [主干, 宗门, 执法]
    text: |
      掌门把刑堂的令印推到你面前时，殿里只有你们两个人。
      「这方印，十年换了四任。」他说，「办得严，得罪人；办得松，坏规矩。没人肯接。」
      你接印第三日，头一桩案子就到了：内门弟子裴远盗录《青元真解》卖与散修，人赃并获。
      按律，废修为，逐出山门。
      牒文还未用印，何长老的帖子先到了——裴远是他外甥。帖上只有四个字：「高抬贵手。」
    choices:
      - text: 用印。按律，废修为，逐出山门。
        karma:
          type: 夺取
          target: 裴远
          weight: 25
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 何长老记下了这笔
            - id: 刑堂的规矩重新立了起来
        effects:
          - "flag 掌刑堂"
          - "名望 +10"
          - "锋芒 +0.08"
          - "道心 +5"

      - text: 改判思过崖十年。何长老的人情，收下。
        karma:
          type: 施恩
          target: 何长老
          weight: 20
          polarity: 1
          hooks:
            - id: 库房的份例从此宽裕
            - id: 律法从你手里，松了第一寸
        effects:
          - "flag 掌刑堂"
          - "道心 -6"
          - "堕度 +4"
          - "factors.法宝 +0.05"

      - text: 顺着赃银的账，往上查
        karma:
          type: 夺取
          target: 何长老
          weight: 35
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 何长老买凶
              lethal: true
              foreshadow:
                - { at: -8, evt: "库房的旧账连夜烧掉了一批" }
                - { at: -3, evt: "有陌生修士打听你惯走哪条山道" }
                - { at: -1, evt: "你的茶里被人下了慢药，被药童撞破", window: true }
            - id: 树倒猢狲散
        check: { actor: "talent.悟性 + factors.情报 * 60", dc: "78", scale: 12 }
        onSuccess:
          text: 账查了四个月，赃银的去处指向库房三笔平不了的亏空。何长老自请去了守山堂，走那天没人送。刑堂的门槛，从此被人踏矮了三寸。
          effects: ["flag 掌刑堂", "flag 扳倒何长老", "名望 +18", "功德 +8"]
        onFail:
          text: 账在第三笔断了——有人比你先一步平了亏空。查无实据，反倒落了个「挟私构陷」的风声。何长老在大殿上遇见你，笑着还了半礼。
          effects: ["flag 掌刑堂", "flag 结怨何长老", "名望 -6", "道心 -4"]

      - text: 把令印原样推回去
        karma: none
        effects:
          - "锋芒 -0.06"
          - "名望 -3"
          - "道心 +2"

  # ══════════════════════════════════════════════════════════
  # 天机阁上门
  # ══════════════════════════════════════════════════════════

  - id: evt_a3c_tianjige_yegua
    title: 夜里的卦
    weight: 80
    act: 3
    once: true
    cond: "tier == 3 && 僭越 > 60"
    tags: [主干, 危机, 天机阁]
    text: |
      子时，一个蒙面人坐在你洞府的茶案前。禁制没有拦住他，也没有惊动任何人。
      「天机阁。」他自报家门，往案上推过来一枚铜钱，「阁中近来起了一卦，卦上有个变数，反推回去，落在你身上。
      卦文尚未归档。归了档，就是阁产——谁出得起钱，谁都能看。」
      他伸出三根手指：「三千灵石，卦文当面烧掉。或者，你把你的底细卖给阁里，价钱翻十倍。」
      茶还冒着热气。他不急。
    choices:
      - text: 「三千就三千。烧。」
        karma:
          type: 立誓
          target: 天机阁
          weight: 25
          polarity: 0
          matureWindow: [20, 120]
          hooks:
            - id: 卦烧了，账还留着
            - id: 十年后又起一卦，价钱翻倍
        effects:
          - "factors.法宝 -0.2"
          - "flag 天机阁·封卦"

      - text: 让他把卦文带进棺材
        karma:
          type: 杀戮
          target: 天机阁行走
          weight: 50
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 天机阁将你记入死簿
              lethal: true
              foreshadow:
                - { at: -10, evt: "坊市的卦摊一夜之间全收了" }
                - { at: -4, evt: "你的生辰八字，出现在一张流出的符纸上" }
                - { at: -1, evt: "一个瞎眼老者在山门外求见，说要见你最后一面", window: true }
            - id: 死无对证
        effects:
          - "业障 +15"
          - "堕度 +8"
          - "僭越 +10"
          - "expose.杀过某人 +10"
          - "flag 手上有人命"

      - text: 「翻十倍是吧。坐好，我从头讲。」——喂他一个假的
        karma:
          type: 欺骗
          target: 天机阁行走
          weight: 20
          polarity: -1
          hooks:
            - id: 假卦入了天机阁的库
            - id: 假的，迟早对不上真的
        check: { actor: "talent.悟性 + factors.情报 * 60", dc: "80", scale: 12 }
        onSuccess:
          text: 你讲了半个时辰，真三分，假七分，假的那七分互相都能印证。他付了钱，走前把那枚铜钱留在案上——卦面朝上，是个「困」字。
          effects: ["factors.法宝 +0.12", "factors.情报 +0.08", "僭越 +3", "flag 天机阁·喂了假卦"]
        onFail:
          text: 讲到一半他抬手止住你，把铜钱收了回去。「阁里买的是天机，不是话本。」他起身时多看了你一眼——这一眼，比卦文更贵。
          effects: ["expose.金手指 +12", "witness 天机阁行走 金手指", "flag 天机阁·结怨"]

      - text: 「茶凉了。送客。」
        karma: none
        effects:
          - "僭越 +3"
          - "道心 +3"
          - "flag 天机阁·留卦"
`,rr=`# 幕三 · 日常事件池（金丹期）
# 视野从「一个山头」扩到「一方之主」：你成了别人的机缘，也成了别人的靶子。
# 时间粒度两年一回合 —— 凡人在老，同辈在掉队，你的账在往后堆。
# 前缀 evt_a3d_，全部 act: 3。
#
# 设计要点：
# · 每个 choice 显式声明 karma（无因果写 karma: none）
# · 三条致死钩子（赤岭灭口 / 柳氏买凶 / 出卖聂远舟）均按铁律二挂满预警链
# · 聂远舟两卡成链：evt_a3d_qianli_touben 埋人情，evt_a3d_haibu_wenshu 用
#   karmaWith('聂远舟') 与 flag('收留聂远舟') 收账
# · 元婴征兆卡消费 flag('手上有人命')，为将来的心魔劫立向

events:

  # ══════════════════════════════════════════════════════════
  # 身份 · 低阶弟子求指点 —— 你成了别人的机缘
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_dizi_qiudian
    title: 山道上的问礼
    weight: 45
    act: 3
    cooldown: 20
    cond: "tier == 3"
    tags: [日常, 宗门, 身份]
    text: |
      讲经散后你从传功堂出来，一个外门弟子跪在山道旁，双手举着一册翻烂的《引气诀》。
      执事说他在这里跪了六个时辰——练气七层，卡了四年，家里是山下佃户，每月月钱一半寄回去。
      按宗门的规矩，金丹真人一句话，够外门弟子受用十年；也正因如此，规矩里没有「求到就教」这一条。
      他袖口两块补丁摞在一起，指节上全是冻疮。山风把经页吹得哗哗响。
    choices:
      - text: 扶他起来，把他的经络从头看一遍
        karma:
          type: 施恩
          target: 外门弟子·郑七
          weight: 18
          polarity: 1
          matureWindow: [30, 120]
          hooks:
            - id: 廿年后，有个筑基修士逢人便说师承
            - id: 他底子已伤，你那句指点吊着他多熬了十年
        effects: ["功德 +6", "名望 +5", "道心 +2"]

      - text: 留一句口诀，让他自己参
        karma: none
        effects: ["功德 +2", "名望 +2"]

      - text: 「指点有价。你出得起什么？」
        karma:
          type: 夺取
          target: 外门弟子·郑七
          weight: 8
          polarity: -1
          hooks:
            - id: 他真把攒了四年的灵石都拿了出来
            - id: 「金丹真人收穷弟子的束脩」，这话传得比你想的快
        effects: ["factors.法宝 +0.02", "名望 -4", "道心 -2"]

      - text: 从他身边走过去
        karma: none
        effects: ["道心 -2"]

      - text: 「【面板】他堵在哪儿？」
        require: "hasSystem('面板')"
        karma: none
        effects: ["功德 +6", "名望 +6", "expose.金手指 +3", "僭越 +2"]

  # ══════════════════════════════════════════════════════════
  # 身份 · 千里投奔（聂远舟线 · 上）
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_qianli_touben
    title: 半只葫芦
    weight: 40
    act: 3
    once: true
    cond: "tier == 3"
    tags: [日常, 身份, 人情]
    text: |
      门房通传：山门外有个散修，跪了两日，赶都赶不走。
      你下去看。那人风尘满面，筑基后期，背上一只旧背囊，是全部家当。见你下来，他不磕头，
      只从怀里摸出半只豁口的酒葫芦。
      你认得它。十几年前你在乱石谷外中了瘴毒，倒在官道边，是个游方修士把半葫芦药酒灌进你嘴里，
      没留姓名就走了。
      「聂远舟。」他说，「听闻恩公结丹，特来投奔。」
      背囊侧袋里，整整齐齐码着一叠手抄的北境魔修动向。
    choices:
      - text: 收他做客卿，拨一座偏院
        karma:
          type: 施恩
          target: 聂远舟
          weight: 20
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 你的山头从此多了一把不出鞘的刀
            - id: 他身上背着的事，早晚找上门
        effects: ["flag 收留聂远舟", "factors.伙伴 +0.08", "名望 +2"]

      - text: 当年的酒今日还清——赠资百枚灵石，荐他去别处安身
        karma:
          type: 施恩
          target: 聂远舟
          weight: 10
          polarity: 1
          hooks:
            - id: 他只数了三十块，拿够路上用的
            - id: 你在他眼里看见一点熄下去的东西
        effects: ["factors.法宝 -0.04", "道心 +2", "flag 打发聂远舟"]

      - text: 手抄收下，人不留
        karma:
          type: 欺骗
          target: 聂远舟
          weight: 12
          polarity: -1
          hooks:
            - id: 那叠手抄后来救过你一队弟子
            - id: 江湖上说，青石山的真人恩情只认一半
        effects: ["factors.情报 +0.1", "道心 -4", "flag 打发聂远舟"]

      - text: 闭门不见
        karma: none
        effects: ["道心 -2", "flag 打发聂远舟"]

  # ══════════════════════════════════════════════════════════
  # 时间感 · 山下故旧的寿宴
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_chenjiu_shouyan
    title: 七十寿
    weight: 35
    act: 3
    once: true
    cond: "tier == 3"
    tags: [日常, 时间, 道心]
    text: |
      青溪镇来了张帖子，底子是描红的——陈四的孙子代笔，请你赴他祖父的七十寿。
      你算了算年头。上回见他，他还能拎着一篓山货走三十里山路上山。
      寿宴那日你到了镇口。院里六桌流水席已经开了，隔着墙能听见里头划拳的、哄孩子的、喊添菜的。
      有个半大孩子趴在墙头看见你，回头喊了一嗓子：「来仙师了——」
      满院子忽然静下来。
    choices:
      - text: 进去，坐末席，陪他喝到席散
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "70", scale: 11 }
        onSuccess:
          text: |
            席散时陈四趴在桌上睡着了。你把他背回屋，像当年他把山货背上山。
            出镇的路上，月亮很好。
          effects: ["道心 +8", "flag 陈四寿宴·到场"]
        onFail:
          text: |
            席间他孙子敬酒，问你：「仙师，我爷爷小时候什么样？」你答不上来。
            你记得的陈四，只有山门石阶下那一个。
          effects: ["道心 -3", "flag 陈四寿宴·到场"]

      - text: 进去行故人礼，另留一粒延年丹给他压帖
        karma:
          type: 施恩
          target: 陈四
          weight: 10
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 他又硬硬朗朗过了十年，逢人只说是儿孙孝顺
            - id: 凡人骤得仙家药，寿数是从别处抢来的
        effects: ["功德 +4", "僭越 +3", "道心 +2", "flag 陈四寿宴·到场"]

      - text: 礼物留在门房，人不进去
        karma: none
        effects: ["道心 -4"]

      - text: 站在墙外听完一场，天黑再走
        karma: none
        effects: ["道心 -1", "锋芒 -0.02"]

  # ══════════════════════════════════════════════════════════
  # 时间感 · 同批弟子的重逢
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_tongpi_chongfeng
    title: 同批
    weight: 35
    act: 3
    once: true
    cond: "tier == 3"
    tags: [日常, 时间, 人际]
    text: |
      新岁传功大宴，序齿而坐。你入门那年一并领皂衣的共四十一人，如今在册的还剩九个。
      你坐上席。白湛坐在丹房账房那一桌，鬓角全白了，筑基中期，见你举杯，隔着三张桌子把杯沿压得比你低。
      散席时你在藏经阁廊下看见沈观澜——当年论道会上把满座驳得没声的人。三年前他结丹炸了，
      道基裂了，如今在阁里抄书。他右手抖得厉害，一页字抄得深一笔浅一笔。
      听见脚步声，他没回头：「师弟如今，不该走这条廊。」
    choices:
      - text: 进去，坐下，陪他抄完这一页
        karma: none
        effects: ["道心 +5"]

      - text: 「我丹气尚温。师兄的道基，让我看看。」
        karma:
          type: 施恩
          target: 沈观澜
          weight: 18
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 他闭门七日后收下了——十年后藏经阁出了位讲经不用书的长老
            - id: 他把笔搁下：「沈某败给天，没败给你。」此后再不见你
        effects: ["功德 +5", "道心 +2"]

      - text: 转头提白湛半级，让他把丹房的账整个管起来
        karma:
          type: 施恩
          target: 白湛
          weight: 12
          polarity: 1
          hooks:
            - id: 丹房的账从此一笔不错，你的份例永远最先到
            - id: 有人说闲话：金丹真人往丹房里安自己人
        effects: ["flag 白湛掌丹房", "名望 +2"]

      - text: 各人有各人的命。你走完那条廊，没停。
        karma: none
        effects: ["道心 -3", "锋芒 -0.02"]

  # ══════════════════════════════════════════════════════════
  # 势力 · 坐镇坊市断纠纷
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_fangshi_duanan
    title: 升座
    weight: 45
    act: 3
    cooldown: 24
    cond: "tier == 3"
    tags: [日常, 势力, 道德]
    text: |
      青石坊市如今每月初三升座断纠纷，座上是你。
      这月的案子不小：万宝行上月售出的一炉「固元丹」，吃倒了三个散修，一个瘫在床上起不来。
      苦主的兄长跪在堂下，呈上丹渣。你捻开一看便知——药引掺了陈年的次货，省本钱省出来的祸。
      难处在后头：万宝行的干股里有宗门三成的灵石进项，行主递上来的帖子里，
      夹着一张两千灵石的「香火」。
      堂下人山人海。瘫者的兄长把额头磕在青石板上，没抬起来。
    choices:
      - text: 照实判——万宝行赔足命价，封炉三年
        karma:
          type: 施恩
          target: 苦主郑氏
          weight: 18
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 「青石坊有王法」——散修们把这句话带去了千里外
            - id: 万宝行悄悄换了东家，新东家的来路没人查得清
        effects: ["功德 +10", "名望 +8", "道心 +5", "factors.法宝 -0.05", "flag 断案·公"]

      - text: 判赔灵石，封炉的事高高举起、轻轻放下
        karma:
          type: 背叛
          target: 苦主郑氏
          weight: 14
          polarity: -1
          hooks:
            - id: 那兄长收了钱，把丹渣拓了十份，送去十家坊市
            - id: 万宝行的「香火」从此逢节必到
        effects: ["factors.法宝 +0.08", "道心 -5", "业障 +4", "flag 断案·私"]

      - text: 押后再审，让两边先耗着
        karma: none
        effects: ["名望 -4", "道心 -3"]

      - text: 「【面板】这炉丹，经了几只手？」
        require: "hasSystem('面板')"
        karma: none
        effects:
          - "功德 +6"
          - "名望 +6"
          - "factors.情报 +0.05"
          - "expose.金手指 +3"
          - "僭越 +2"
          - "flag 断案·公"

  # ══════════════════════════════════════════════════════════
  # 势力 · 带队护送灵材
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_daidui_hudao
    title: 赤岭
    weight: 45
    act: 3
    cooldown: 26
    cond: "tier == 3"
    tags: [日常, 势力, 冲突]
    text: |
      宗门丹阁开炉在即，主材千岁血芝由南边别院起运，你带四个筑基弟子押最后一程。
      第三日过赤岭，天上的鹰先没了声。三个魔修从烧过的林子里出来，当先那个的刀背上开着血槽，
      刀身乌沉——化血一脉的路数，专拿活人温刀。
      他掂了掂刀，隔着二十丈开口，声音不高：
      「血芝留下。人么——留两个也行。」
      四个弟子在你身后，没人后退，但你听得见他们的呼吸乱了。
    choices:
      - text: 「带货走。」你一个人迎上去。
        karma: none
        check: { actor: "effectiveTier * 55 + factors.状态 * 30", dc: "178", scale: 14 }
        onCritSuccess:
          text: |
            三招。当先那把血槽刀断成两截，余下两人往林子里退，你没追。
            赤岭这条道，从此有你的名字。
          effects: ["名望 +15", "expose.真实修为 +8", "功德 +5", "flag 赤岭立威"]
        onSuccess:
          text: 你缠住三人半个时辰，弟子押着血芝走脱。收势时你左肩挨了一记刀背，魔修也没讨着好，退了。
          effects: ["名望 +8", "功德 +4", "factors.状态 -0.15", "expose.真实修为 +5"]
        onFail:
          text: |
            你压住了两个，第三个从坡后绕了过去。
            追回血芝时，最小的那个弟子倒在车辕边，手里还攥着缰绳。
          effects: ["道心 -8", "名望 -4", "factors.状态 -0.2", "flag 赤岭·折了弟子"]
        onCritFail:
          text: 化血刀开了你的右肋。你醒来时血芝没了，四个弟子活着三个，抬着你走了一夜。
          effects: ["factors.状态 -0.35", "lifespan -2", "名望 -10", "道心 -6", "flag 赤岭·失手"]

      - text: 把血芝推过去，换四个弟子全须全尾
        karma:
          type: 受辱
          target: 化血刀客
          weight: 16
          polarity: -1
          hooks:
            - id: 「赤岭的买卖好做」——这条道上的魔修都听说了
            - id: 宗门追责，你替四个弟子把罪全认了
        effects: ["名望 -8", "道心 -4", "锋芒 -0.05", "flag 赤岭·失手"]

      - text: 杀。一个不留。
        karma:
          type: 杀戮
          target: 赤岭魔修
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 化血宗顺着刀找来
              lethal: true
              foreshadow:
                - { at: -9, evt: "坊市有人高价收赤岭那一战的断刀，出的是魔修的价" }
                - { at: -4, evt: "山下驿站有生面孔打听你每月下山的路线" }
                - { at: -1, evt: "护山阵外的老松上，一夜之间挂了一把带血槽的刀", window: true }
            - id: 赤岭从此干净
        check: { actor: "effectiveTier * 55 + 堕度 * 0.5", dc: "182", scale: 13 }
        onSuccess:
          text: 林子里静下来。你让弟子在道边等着，自己动手埋的人。血芝一片叶子没掉。
          effects:
            - "业障 +14"
            - "堕度 +7"
            - "道心 -5"
            - "expose.杀过某人 +10"
            - "名望 +8"
            - "flag 手上有人命"
        onFail:
          text: 你杀了两个。当先那个断了一臂，遁进烧过的林子——他记住的不止你的脸。
          effects:
            - "witness 化血刀客 杀过某人"
            - "业障 +10"
            - "堕度 +6"
            - "道心 -5"
            - "expose.杀过某人 +15"
            - "flag 手上有人命"

      - text: 「老祖，借剑。」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 20"
        karma:
          type: 杀戮
          target: 赤岭魔修
          weight: 30
          polarity: -1
          hooks:
            - id: 那一剑之后，化血一脉绕着赤岭走
            - id: 有老家伙认出了这一剑的路数
        effects:
          - "soul.独孤离.favor +6"
          - "soul.独孤离.possession +5"
          - "expose.残魂 +8"
          - "expose.真实修为 +10"
          - "名望 +12"
          - "flag 赤岭立威"

  # ══════════════════════════════════════════════════════════
  # 势力 · 巡查下属家族
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_xuncha_kuikong
    title: 账上的窟窿
    weight: 40
    act: 3
    once: true
    cond: "tier == 3"
    tags: [日常, 势力, 道德]
    text: |
      宗门下辖十七家附庸，今年轮着你巡。柳氏一门三代经营灵田三百亩，年贡雪灵米，账面素来干净。
      你在账房坐了三天，翻出一个窟窿：四年，一千四百块灵石，走的是修缮和虫害的名目。
      线头不难顺——柳氏嫡孙前年进了云川派内门，筑基名额加两炉丹，市价正好这个数。
      第三夜，老家主柳伯庸提着灯来账房，把一沓地契放在你手边，人跪了下去。
      「田是祖上传的，孙儿是柳家唯一的种。真人要哪个，柳某不还价。」
    choices:
      - text: 照实上报
        karma:
          type: 背叛
          target: 柳伯庸
          weight: 14
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 你办事的名声在宗门里立住了
            - id: 那个嫡孙被云川派退回、废了名额，他记你一辈子
        effects: ["名望 +8", "道心 +2", "flag 柳氏·上报"]

      - text: 瞒下。限他三年，连本带息补上。
        karma:
          type: 施恩
          target: 柳伯庸
          weight: 22
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 柳氏满门自此以你马首是瞻
            - id: 窟窿越补越大，东窗事发那天，你的名字也在账上
        effects: ["僭越 +4", "功德 +4", "flag 柳氏·瞒报"]

      - text: 窟窿你替他填。地契原样退回。
        karma:
          type: 施恩
          target: 柳伯庸
          weight: 16
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 老头当夜烧了地契，柳氏子弟以父礼事你
            - id: 他受不住这份无功之禄，转头去宗门自首，把你也牵了出来
        effects: ["factors.法宝 -0.1", "功德 +8", "道心 +3"]

      - text: 「地契收回去。往后柳氏年贡，三成走我私账。」
        karma:
          type: 夺取
          target: 柳伯庸
          weight: 20
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 柳氏铤而走险，买凶平账
              lethal: true
              foreshadow:
                - { at: -8, evt: "柳氏的账房老仆告老还乡，走得很突然" }
                - { at: -3, evt: "坊市黑市有人重金打听金丹修士的生辰八字" }
                - { at: -1, evt: "夜里护山阵被人试了三次，手法生疏，砸的钱却不少", window: true }
            - id: 年年三成，一文不少
        effects: ["factors.法宝 +0.08", "堕度 +6", "道心 -4", "僭越 +3", "flag 柳氏·拿捏"]

  # ══════════════════════════════════════════════════════════
  # 修行 · 元婴瓶颈的第一次征兆
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_yuanying_zhengzhao
    title: 丹上的纹
    weight: 55
    act: 3
    once: true
    cond: "tier == 3 && sublevel > 0.5"
    tags: [日常, 修炼, 心魔]
    text: |
      闭关行功到第九周天，金丹忽地一滞。
      你内视看去：丹面上多了一道纹，细得像发丝。不是裂——裂是死的，这道纹是活的，随着丹转，缓缓地长。
      你翻遍手头的典籍，只在一册残卷里找到六个字：「婴未成，相先立。」
      入定深处，你听见极远的地方有水声，像有人在雾里蹚水，朝你走。
      还隔着几年的路程。但方向，已经对准了你。
    choices:
      - text: 把丹纹的走向一笔一笔记下来。从今日起，理旧账。
        karma: none
        effects: ["flag 心魔劫·预告", "道心 +4"]

      - text: 以功法硬磨，把纹压回去
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.4", dc: "80", scale: 12 }
        onSuccess:
          text: 磨了一年，纹淡得几乎看不见了。只有你知道——淡，不是没有。
          effects: ["sublevel +0.04", "丹毒 +2", "flag 心魔劫·压制"]
        onFail:
          text: 纹深了半分。行功岔气那晚，水声近了一程。
          effects: ["道心 -5", "丹毒 +4", "flag 心魔劫·压制"]

      - text: 顺着水声，望进雾里
        require: "flag('手上有人命')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "85", scale: 12 }
        onSuccess:
          text: |
            雾里的人影一个一个从你身边走过去。你数了，数目对得上，一个不多。
            你在原地站到雾散，没有躲。
          effects: ["道心 +8", "业障 -5", "flag 心魔劫·直面"]
        onFail:
          text: |
            你数到一半就数不下去了——雾里的人影，比你记得的名字多。
            多出来的那些，你不知道是谁。
          effects: ["道心 -8", "神魂 -1", "flag 心魔劫·业重"]

      - text: 「婆婆，给看看这道纹。」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects: ["soul.苏婆婆.favor +6", "丹毒 -4", "expose.残魂 +3", "flag 心魔劫·预告"]

      - text: 「老祖。你当年的丹上，有没有这个？」
        require: "hasSoul('独孤离')"
        karma: none
        effects: ["soul.独孤离.favor +6", "originClues +1", "expose.残魂 +3", "flag 心魔劫·预告"]

  # ══════════════════════════════════════════════════════════
  # 修行 · 二探秘境（贪婪陷阱）
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_ertan_mijing
    title: 潮底
    weight: 50
    act: 3
    once: true
    cond: "tier == 3 && sublevel > 0.25"
    tags: [日常, 机缘, 风险]
    text: |
      乱石谷的秘境到底还是被宗门找着了门——六十年一开的潮汐，这一回赶上了。
      入内分三层，各队按签分地。你是队里唯一的金丹，走最深的一层。
      外层灵药收得干净，你面前只剩一道往下的石阶。阶底有光，暖的，一漾一漾，像隔着水看火。
      潮汐合拢还剩一炷香。来时的路上，两侧石壁里嵌着七具前人的骨——头朝下的五具，朝上的两具。
      上头，你带的弟子在阶口等你。
    choices:
      - text: 就到这里。带人撤。
        karma: none
        effects: ["道心 +5", "flag 潮底·止步"]

      - text: 下到阶底，取一件，立刻回头
        karma: none
        check: { actor: "talent.神魂 + 气运 * 0.4", dc: "78", scale: 12 }
        onCritSuccess:
          text: |
            光底下是一枚拳大的暖玉，里头封着一缕说不出名目的先天之气。
            回身时你多看了一眼壁上的骨——最下面那具的指骨，还保持着往前抓的姿势。
          effects: ["factors.法宝 +0.18", "originClues +1", "flag 潮底·得宝"]
        onSuccess:
          text: 你取了光底下那枚暖玉就走，一步没多留。跨出阶口时，一炷香剩三分。
          effects: ["factors.法宝 +0.12", "flag 潮底·得宝"]
        onFail:
          text: |
            光是饵。阶底的东西顺着你的手腕往神魂里钻，你是咬破舌尖挣脱的。
            爬回阶口，潮汐已经在合。
          effects: ["神魂 -2", "factors.状态 -0.2", "lifespan -1", "flag 潮底·失手"]
        onCritFail:
          text: |
            弟子们把你从合拢的缝里硬拽了出来。半幅衣袍留在里头——还有一缕神魂。
            此后每逢阴雨，你听得见水底有人叫你。
          effects: ["神魂 -4", "factors.状态 -0.3", "lifespan -3", "道心 -4", "flag 潮底·失魂"]

      - text: 让弟子先撤。你留到最后一刻。
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "88", scale: 13 }
        onSuccess:
          text: |
            你贴着潮汐合拢的边，把阶底搬空了。出来时袖里两件重宝，眉梢结着冰——
            弟子们没人敢问，剩下那半炷香里你看见了什么。
          effects: ["factors.法宝 +0.15", "sublevel +0.06", "flag 潮底·满载"]
        onFail:
          text: |
            贪那半炷香的代价：潮汐提前合了半息。你挤出来时左臂骨裂，
            重宝只抓住一件，另一件连同你半身法衣，永远留在了里面。
          effects: ["factors.法宝 +0.06", "factors.状态 -0.25", "lifespan -2", "道心 -4", "flag 潮底·失手"]

      - text: 「【模拟器】先演一遍。」
        require: "hasSystem('模拟器')"
        karma: none
        effects:
          - "lifespan -1"
          - "factors.法宝 +0.14"
          - "僭越 +5"
          - "expose.金手指 +4"
          - "flag 潮底·得宝"

  # ══════════════════════════════════════════════════════════
  # 修行 · 丹毒的清算
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_dandu_qingsuan
    title: 洗丹
    weight: 60
    act: 3
    once: true
    cond: "tier == 3 && 丹毒 > 40"
    tags: [日常, 修炼, 隐患]
    text: |
      年检的医修这回没有绕弯子。
      他按着你的脉，按了一炷香，收手时先净了手，才开口：
      「毒咬进丹皮了。练气欠的账，筑基滚的利，你结丹那天，把它们一并炼进了丹里。」
      「三成。你这枚丹，三成是毒养着的。眼下不碍事——可元婴是从丹里生出来的。
      毒胎里养婴，真人比我懂。」
      他留下三个方子。起身时又回头看了一眼你丹田的位置，像在看一口埋了东西的井。
    choices:
      - text: 闭关。推倒丹皮，重炼。
        karma: none
        effects: ["sublevel -0.1", "丹毒 -25", "道心 +5", "factors.状态 +0.05", "flag 丹皮重炼"]

      - text: 服「九转清灵散」，先压下去
        karma: none
        effects: ["丹毒 -10", "factors.法宝 -0.08", "flag 丹毒·压制"]

      - text: 索性以毒入丹，另辟一道
        karma: none
        check: { actor: "talent.悟性 + 堕度 * 0.5", dc: "82", scale: 13 }
        onSuccess:
          text: |
            三年。毒没清，但如今它听你的——丹面浮起一层墨色宝光。
            医修再按你的脉时，手抖了。
          effects: ["丹毒 -15", "sublevel +0.06", "堕度 +6", "锋芒 +0.05", "flag 毒丹入道"]
        onFail:
          text: 毒不受驭。反噬那夜你吐了半升黑血，丹面的墨色，褪不掉了。
          effects: ["丹毒 +8", "factors.状态 -0.15", "道心 -5"]

      - text: 「婆婆。这口井，您给淘了吧。」
        require: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 20"
        karma: none
        effects:
          - "soul.苏婆婆.favor +10"
          - "丹毒 -30"
          - "factors.状态 +0.08"
          - "expose.残魂 +5"
          - "flag 丹皮重炼"

  # ══════════════════════════════════════════════════════════
  # 江湖 · 魔修过境屠村
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_moxiu_tucun
    title: 柳家集的烟
    weight: 45
    act: 3
    once: true
    cond: "tier == 3"
    tags: [日常, 江湖, 道德]
    text: |
      开春的第一份山下急报是青石坊市递来的：一伙魔修过境，前夜屠了柳家集。
      一百七十四口，鸡犬不留，尸身上的血被抽得干干净净——修的是「集煞」的路数，屠一村，涨一分。
      他们顺着官道往西去了。西边八十里是赵家埠，再往西，是青溪镇。
      宗门例会上议了半个时辰，议出八个字：行踪不明，从长计议。
      散会后你站在舆图前。按脚程，他们后天入夜到赵家埠。
    choices:
      - text: 连夜。你一个人追。
        karma: none
        check: { actor: "effectiveTier * 55 + factors.状态 * 25", dc: "180", scale: 14 }
        onCritSuccess:
          text: |
            你在赵家埠外三十里的官道上等了他们一夜。
            天亮时，官道上多了七具干尸——这回轮到他们的血被放干净。
          effects: ["功德 +18", "名望 +15", "expose.真实修为 +8", "flag 截杀集煞"]
        onSuccess:
          text: |
            你追到赵家埠时他们刚破了寨墙。厮杀半夜，魔修死了四个，走了为首的。
            村子折了三十几口，保住了七百。
          effects: ["功德 +12", "名望 +10", "factors.状态 -0.2", "flag 截杀集煞"]
        onFail:
          text: |
            他们没走官道。第三天清晨，青溪镇方向的烟柱升起来的时候，
            你在四十里外的岔道上。
          effects: ["道心 -10", "flag 青溪镇·大祸"]
        onCritFail:
          text: |
            你追上了。七个「集煞」合围，煞气灌进识海——你是被路过的商队从官道边抬回来的。
            青溪镇，没有保住。
          effects: ["factors.状态 -0.35", "神魂 -2", "道心 -12", "flag 青溪镇·大祸"]

      - text: 传讯附近三家仙门布网合围——网要一日才合，赵家埠只能自求多福
        karma:
          type: 施恩
          target: 三家仙门
          weight: 12
          polarity: 1
          matureWindow: [5, 40]
          hooks:
            - id: 网成了。三家自此以你为首，西边的道上再没人敢修「集煞」
            - id: 分功的时候，七颗首级记在了三家自己的账上
        effects: ["功德 +8", "名望 +6", "道心 -2", "flag 合围集煞"]

      - text: 从长计议。宗门都不急，你急什么。
        karma: none
        effects: ["道心 -8", "功德 -4", "flag 坐视集煞"]

      - text: 封山。传讯山下佃户举族上山避祸。
        require: "flag('道·苟')"
        karma: none
        effects: ["功德 +4", "名望 -5", "锋芒 -0.06", "flag 封山避煞"]

      - text: 「【掠夺】炼到一半的『集煞』，正肥。」
        require: "hasSystem('掠夺')"
        karma:
          type: 杀戮
          target: 集煞魔修
          weight: 30
          polarity: -1
          hooks:
            - id: 你替一百七十四口收了利钱
            - id: 从此夜里行功，你数得见血里多出来的人声
        effects:
          - "factors.功法 +0.1"
          - "功德 +8"
          - "业障 +8"
          - "堕度 +6"
          - "僭越 +5"
          - "expose.金手指 +4"
          - "flag 截杀集煞"

  # ══════════════════════════════════════════════════════════
  # 江湖 · 海捕文书（聂远舟线 · 下）
  # ══════════════════════════════════════════════════════════

  - id: evt_a3d_haibu_wenshu
    title: 海捕文书
    weight: 50
    act: 3
    once: true
    cond: "tier == 3 && seen('evt_a3d_qianli_touben')"
    tags: [日常, 江湖, 因果]
    text: |
      入秋，一纸海捕文书贴遍了七十二坊市，青石坊也不例外。
      画影图形，赏格八千：聂远舟，弑师，杀清河观观主曲元真于静室，一剑穿喉。
      你认得那张脸——山门外跪过两日的那个人，半只酒葫芦的主人。
      文书上没写的那一半，你从他给的手抄里对出来过：二十年前北岭七个村子起火，
      纵火的道兵出自清河观，名册上报的是「山匪」。
      七个村子里，有一个村的族谱上，有他的名字。
    choices:
      - text: 把人叫来。当面问那一夜。
        require: "flag('收留聂远舟')"
        karma: none
        check: { actor: "道心 + karmaWith('聂远舟') * 0.5", dc: "75", scale: 11 }
        onSuccess:
          text: |
            他从静室的门闩说到那一剑，一处没瞒。末了把剑双手捧过来：
            「要送官，远舟自己走。」
          effects: ["flag 聂远舟·实情", "factors.伙伴 +0.05", "道心 +3"]
        onFail:
          text: |
            他说到一半，停了。有些东西他打定了主意带进土里。
            你们隔着一张桌子坐到天亮。
          effects: ["道心 -2", "factors.伙伴 -0.03"]

      - text: 连夜送他出境，给他改一张脸
        require: "flag('收留聂远舟')"
        karma:
          type: 放走
          target: 聂远舟
          weight: 25
          polarity: 1
          matureWindow: [10, 70]
          hooks:
            - id: 十年后北境有难，来了一位不留名的剑客
            - id: 清河一脉顺着蛛丝，查到了送人出境的那条船
        effects: ["flag 私纵聂远舟", "僭越 +5", "道心 +2"]

      - text: 缚了，送清河观领赏
        require: "flag('收留聂远舟')"
        karma:
          type: 背叛
          target: 聂远舟
          weight: 35
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 他越了枷，回来找你
              lethal: true
              foreshadow:
                - { at: -9, evt: "北边传来消息：押送聂远舟的囚车，过界河时翻了" }
                - { at: -4, evt: "你山门外围的两处暗桩被人拆了，手法熟门熟路" }
                - { at: -1, evt: "清晨，案头多了半只豁口的酒葫芦，葫芦口朝着你的卧房", window: true }
            - id: 八千灵石与清河观的谢帖
        effects: ["factors.法宝 +0.1", "名望 +4", "道心 -8", "堕度 +4", "flag 出卖聂远舟"]

      - text: 把北岭七村的旧案翻出来，递到几家大宗案头
        karma: none
        check: { actor: "名望 + factors.情报 * 60", dc: "85", scale: 12 }
        onSuccess:
          text: |
            三个月后，海捕文书悄悄换了一版：赏格撤了，案由改成「缉拿归案，另有隐情待查」。
            没人提是谁递的卷宗。
          effects: ["功德 +10", "名望 +6", "flag 北岭翻案"]
        onFail:
          text: 大宗的回帖客气而空。倒是清河观记住了——有位金丹真人，替弑师的凶手递过话。
          effects: ["名望 -4", "flag 得罪清河观"]

      - text: 文书压在案头，不动
        karma: none
        effects: ["道心 -3"]
`,ir=`# 幕三 · 备选主线链（金丹期大事）· evt_3s_
# 六条链 / 九张卡：
#   A 灭门之夜的幸存者（2）：独活的人 → 借名的人
#   B 拍卖会上的故人之物（1）：第七件拍品
#   C 邀你入局的密信（2，金手指备选链）：无落款的帖 → 落雁峡的门
#   D 座下弟子叛出（1）：三叠浪
#   E 病中的大人物（1）：玑衡试药
#   F 江上论道（2，金手指备选链）：江心蒲团 → 三问
#
# 设计要点：
# · C/F 为金手指备选入口：链首 cond 带 !flag('金手指已定')，链尾所有出口
#   均落 flag 金手指已定（得系统 / 得残魂 / 拒绝三类），与后山裂缝链互斥
# · 跨卡回响：
#   - A1 立誓追凶 / 收留遗孤 / 疑云在身 → A2 三个专属选项
#   - B1 查知卖主 → C1 识破渡桥 → C2 当众揭底（跨链双跳）
#   - B1 赎回/截下故人剑 → E1 「长老为何选你」专属应法
#   - D1 问过商陆 → F2 把他的话说给论道老人听
#   - C1 密信黑吃黑 → C2 动手独吞；F1 江上末座 → F2 说破六人错处
# · 致死钩子三处（灭口遗孤 / 落雁峡黑吃黑 / 糊弄玑衡），均按铁律二配
#   2+ 预警与可干预窗口

events:

  # ══════════════════════════════════════════════════════════
  # 链 A · 灭门之夜的幸存者 一：指认
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_miemen_duhuo
    title: 独活的人
    weight: 85
    act: 3
    once: true
    cond: "tier == 3 && 名望 > 30"
    tags: [主干, 危机, 岔路]
    text: |
      云溪坞灭门的第七天，独活的那个姑娘被带上了议事堂。
      十五六岁，左臂吊着，眼睛却不乱看——一进门就直直钉在你脸上。
      「就是他。」她说，「那夜的人蒙着面，报了他的名号，使的是他的手段。」
      执事们的目光跟着落过来。云溪坞十七口，练气以下无一活口，手法干净，像是早就摸清了门户。
      凶手报的是你的名字。堂上一半人信了，另一半在等你开口。
    choices:
      - text: 当堂自证——那一夜你在何处，一样一样摆出来
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "64", scale: 10 }
        onSuccess:
          text: 你在何处、见过何人、批过哪几份文书，你摆了出来，让人当场去核。核完，堂上没人再看你。
          effects: ["flag 自证清白", "名望 +6"]
        onFail:
          text: 你能自证的时辰，偏偏缺了半夜。堂上没人说话，可散堂之后，背后的目光多了起来。
          effects: ["flag 疑云在身", "名望 -8"]

      - text: 「有人借我的名字杀人。这笔账，我亲手去收。」
        karma:
          type: 立誓
          target: 云溪坞遗孤
          weight: 20
          polarity: 1
          matureWindow: [10, 80]
          hooks:
            - id: 誓言有人记着
            - id: 追不到，誓就一直悬着
        effects: ["flag 立誓追凶", "道心 +4", "名望 +4"]
        then:
          text: 她盯着你看了半晌，忽然屈膝磕了一个头。没人扶她。堂上的目光松了一半——另一半，在等你兑现。

      - text: 「真凶落网之前，你住我洞府。想杀我，刀我替你磨。」
        karma:
          type: 救助
          target: 云溪坞遗孤
          weight: 30
          polarity: 1
          matureWindow: [15, 90]
          hooks:
            - id: 她把你的洞府当了家
            - id: 她夜里握着刀，在你门外站过一回
        effects: ["flag 收留遗孤", "道心 +3", "factors.伙伴 +0.04"]
        then:
          text: 执事们交换了眼色，没人反对——肯把仇人留在自己屋檐下的，要么问心无愧，要么胆子太大。她跟着你走，始终隔着三步远。

      - text: 人交刑堂看管，案子按规矩一层层查
        karma: none
        effects: ["flag 遗孤入刑堂", "道心 -2"]
        then:
          text: 她被带下去时没有挣，只在门口回了一次头。那眼神不是恨，是把你的脸，又刻了一遍。

      - text: 让她「病死」在馆驿里——死无对证
        karma:
          type: 杀戮
          target: 云溪坞遗孤
          weight: 45
          polarity: -1
          matureWindow: [20, 100]
          hooks:
            - id: 堂上有人始终不信她是病死的
              lethal: true
              foreshadow:
                - { at: -10, evt: "馆驿那夜当值的仵作，被人重金请去「喝茶」" }
                - { at: -4, evt: "云溪坞的远亲里，有人变卖了田产，买了一口好刀" }
                - { at: -1, evt: "你出行的路线，连着三日被同一只信鸽掠过", window: true }
            - id: 死无对证
        effects:
          - "堕度 +14"
          - "业障 +20"
          - "道心 -10"
          - "expose.杀过某人 +18"
          - "flag 灭口遗孤"
        then:
          text: 七日后，馆驿报了病亡，仵作的验状写得干净。你听到消息那晚多点了一炷香——香烧到一半，自己灭了。

  # ══════════════════════════════════════════════════════════
  # 链 A · 灭门之夜的幸存者 二：真凶落网
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_miemen_zhenxiong
    title: 借名的人
    weight: 90
    act: 3
    once: true
    cond: "tier == 3 && seen('evt_3s_miemen_duhuo') && !flag('灭口遗孤')"
    tags: [主干, 危机, 因果]
    text: |
      三个月后，邻州又出了一桩灭门案——这回凶手失了手，留下活口，被人合围拿下。
      人押到山门时你去看了。散修，姓贺，指节粗大，见了你居然笑：「正主来了。」
      他认得干脆：云溪坞是他做的。借你的名号，是因为「报你的名，苦主不敢追，同道不肯查」。
      刑堂的人立在两侧，等你一句话。当日在堂上看过你的那些眼睛，如今也都在。
    choices:
      - text: 「我立过誓。」——当着当日指认你的人，亲手了结
        require: "flag('立誓追凶')"
        karma:
          type: 杀戮
          target: 贺屠
          weight: 25
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 贺屠的同伙记下了你
            - id: 誓践，心安
        effects: ["名望 +12", "业障 +6", "道心 +5", "flag 誓已践"]
        then:
          text: 刀落得很快。你没让她看第二眼，也没让他再开口。散场时，当日堂上摇过头的那几位，走过你身侧都放轻了脚步。

      - text: 把刀递给那个姑娘。「这一刀，该你来。」
        require: "flag('收留遗孤')"
        karma:
          type: 施恩
          target: 云溪坞遗孤
          weight: 25
          polarity: 1
          matureWindow: [10, 70]
          hooks:
            - id: 仇了了，她从此认你这个家
            - id: 仇了了，她的魂也空了一块
        effects: ["factors.伙伴 +0.06", "道心 +2", "flag 遗孤手刃仇人"]
        then:
          text: 她双手接过刀，走得很稳。一刀，没有多的。回来时她把刀还你，退后一步磕了三个头——那之后很多年，她再没提过云溪坞。

      - text: 押他回当日的公堂，一句一句当众对清
        require: "flag('疑云在身')"
        karma: none
        effects: ["名望 +18", "道心 +4", "unflag 疑云在身", "flag 当众洗冤"]
        then:
          text: 一条条对完，日头已经西斜。当日信过传言的人，一个个过来朝你拱手。你受了，脸上没有什么表情。

      - text: 交有司，依律，不多看一眼
        karma: none
        effects: ["功德 +6", "道心 +3", "flag 依律办贺屠"]
        then:
          text: 秋后，文书递到你案上：贺屠，依律，磔。你在「已阅」处落了笔，墨迹与平常一样。

      - text: 「为什么，偏是我的名字？」
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "62", scale: 10 }
        onSuccess:
          text: 逼问到后半夜，他松了口——云溪坞不是他随手挑的。有人给过他一张单子，单子上的门户，都「适合」用你的名字。
          effects: ["flag 递名单的人", "factors.情报 +0.1"]
        onFail:
          text: 他只是笑，把嘴闭成了一条缝。「你的名字好用。」他说，「这就够了。」
          effects: ["道心 -2"]

      - text: 狱里递一张条子，让他「病死」——免得对质翻出更多脏
        karma:
          type: 杀戮
          target: 贺屠
          weight: 20
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 灭口灭得太顺，有人起了疑
            - id: 死无对证
        effects: ["堕度 +8", "expose.杀过某人 +8", "道心 -6", "flag 狱中灭口"]
        then:
          text: 条子递出去的第三天，狱里报了暴病。没人多问——不多问的人里，有几个的眼神，让你觉得他们自以为懂了什么。

  # ══════════════════════════════════════════════════════════
  # 链 B · 拍卖会上的故人之物
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_paimai_guwu
    title: 第七件拍品
    weight: 70
    act: 3
    once: true
    cond: "tier == 3 && sublevel > 0.1"
    tags: [主干, 故人, 岔路]
    text: |
      万宝楼秋拍，第七件拍品抬上来时，你的茶盏停在了唇边。
      锦盘上是一柄秋水般的短剑——裴远舟的本命剑。三年前他陨在乱星海，尸骨无还。
      本命之物随主而灭，除非死前被人硬生生剥了去。
      唱价的伙计报得字正腔圆：「无主旧剑，起价八百灵石。」
      台下有人开始举牌。没人知道剑的来历——或者，知道的人没作声。
    choices:
      - text: 买回来。多少灵石都认。
        karma: none
        effects: ["factors.法宝 -0.15", "道心 +4", "flag 赎回故人剑"]
        then:
          text: 剑到手那晚，你把它擦了一遍，供在静室。剑身映灯，像那年他递给你看时一样亮。

      - text: 不举牌。顺着拍卖行的线，查卖主。
        karma: none
        check: { actor: "talent.神魂 + factors.情报 * 60", dc: "70", scale: 10 }
        onSuccess:
          text: 三道转手的暗账，最后指着一个代号——「渡桥」。寄卖单上的笔迹，你让人描了下来。还有一件事：乱星海那一队，当年没回来的不止裴远舟，可流出来的东西，只有他的。
          effects: ["flag 查知卖主", "flag 故人死因有疑", "factors.情报 +0.08"]
        onFail:
          text: 万宝楼的口风比护山阵还严。你问到第三层，对面的管事反过来问起了你的来意。
          effects: ["flag 打草惊蛇", "锋芒 +0.05"]

      - text: 当场发作——按住锦盘。「这柄剑的主人，是怎么死的？」
        karma:
          type: 夺取
          target: 万宝楼
          weight: 20
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 万宝楼记下了你
            - id: 满场看客，记住了你的失态
        effects: ["flag 截下故人剑", "名望 +8", "锋芒 +0.12"]
        then:
          text: 满场死静。万宝楼的护卫围上来，又停住——你的手一直按在锦盘上，没人敢先动。最后是大掌柜亲自下楼，把这一件「撤拍」了。

      - text: 散场后寻到买主，愿出双倍转购
        karma: none
        check: { actor: "名望 * 0.5 + talent.神魂 * 0.5", dc: "60", scale: 10 }
        onSuccess:
          text: 买主是个附庸风雅的丹商，听你说「故人之物」，摆摆手连加价都没要。「拿去。死人的剑，压我库里也是阴气。」
          effects: ["flag 赎回故人剑", "factors.法宝 -0.1", "道心 +3"]
        onFail:
          text: 买主隔着帘子回了八个字：「价高者得，概不转售。」
          effects: ["flag 故人剑落他手", "道心 -3"]

      - text: 死人的东西，随它去。喝完这盏茶，走人。
        karma: none
        effects: ["道心 -2", "flag 未认故人剑"]
        then:
          text: 茶凉了。你出楼时听见里头落槌——一千六百灵石，成交。江风一吹，你没有回头。

  # ══════════════════════════════════════════════════════════
  # 链 C · 邀你入局的密信 一（金手指备选链 · 链首）
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_mixin_ruju
    title: 无落款的帖
    weight: 75
    act: 3
    once: true
    cond: "tier == 3 && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      帖子是从门缝里塞进来的，无落款，字却端正。
      写信的自称三人，皆与你同阶，探得落雁峡底一座上古洞府，外阵完好，三人苦无开阵之法。
      「闻君于阵道有独得之秘。」帖上许你四成，附了半页阵图为凭——图是真的，年头比这座山门还老。
      落款处只有三个代号：观棋、执灯、渡桥。约期七日后，落雁峡口。
    choices:
      - text: 入伙。按图赴约。
        karma:
          type: 立誓
          target: 观棋三人
          weight: 15
          polarity: 0
          matureWindow: [5, 40]
          hooks:
            - id: 同舟
            - id: 同舟的人，先凿船
        effects: ["flag 密信入局"]
        then:
          text: 你依帖回了四个字：七日，峡口。信鸽飞出去那一刻，你有种要钻进什么裂缝的错觉——底下有光，也有凉气。

      - text: 赴约——「渡桥」二字的笔迹，你在万宝楼描回来的寄卖单上见过
        require: "flag('查知卖主')"
        karma: none
        effects: ["flag 密信入局", "flag 识破渡桥", "factors.情报 +0.06"]
        then:
          text: 你把描回来的笔迹又比对了一遍，分毫不差。也好——赴这趟约，你比他们三个，多揣了一样东西。

      - text: 赴约，但把后手也备上——黑吃黑，看谁的牙口好
        karma:
          type: 欺骗
          target: 观棋三人
          weight: 20
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 你备后手，焉知人无
            - id: 先手在你
        effects: ["flag 密信入局", "flag 密信黑吃黑"]
        then:
          text: 七日里你把落雁峡的舆图吃透了，又备下三道后手。牌，要看完再翻。

      - text: 原帖呈报宗门。上古洞府，不该三个人分。
        karma:
          type: 背叛
          target: 观棋三人
          weight: 25
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 三人未必都落了网
            - id: 宗门记你一功
        effects: ["名望 +10", "功德 +4", "flag 密信告发"]
        then:
          text: 三日后宗门出手，在峡口拿了两个，跑了一个。押回来的两人隔着囚车看你，目光像钉子。跑掉的那个，代号渡桥。

      - text: 烧了。无落款的富贵，多半连本带利要还。
        karma: none
        effects: ["道心 +3", "flag 密信焚帖"]
        then:
          text: 帖子烧到「四成」二字时卷了边。那半页阵图烧得最慢，你看着它烧成灰，才去睡。

  # ══════════════════════════════════════════════════════════
  # 链 C · 邀你入局的密信 二（链尾 · 金手指出口）
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_dongfu_kaizhen
    title: 落雁峡的门
    weight: 90
    act: 3
    once: true
    cond: "tier == 3 && flag('密信入局')"
    tags: [主干, 机缘, 岔路]
    text: |
      峡底雾重。三个人已在阵前等着：观棋是个青袍老者，执灯是名冷面女修，渡桥又矮又圆，笑得殷勤。
      你按图起手，外阵一层层退开，石门洞开时，三个人的呼吸都变了。
      洞里没有金山。石室尽头一座剑台，半截断剑斜插其上，寒气凝而不散；台侧玉匣里躺着一卷玉简，光纹在匣中缓缓地转。
      「四成。」观棋说，「道友先挑。」执灯的手，已经按在了剑诀上。
    choices:
      - text: 取断剑
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
        then:
          text: 指尖碰上剑身的一瞬，寒气顺着手臂窜上后颈。一个苍老的声音在你颅内醒来，只说了两个字：「握稳。」

      - text: 取玉简
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 任务"
          - "expose.金手指 +3"
          - "僭越 +4"
        then:
          text: 光纹入手即散，在你眼底重新排成一行小字：「古契承接。第一事：活着走出此峡。」——你抬起头，那三个人正在分剩下的东西。

      - text: 「东西你们分。我那四成，折灵石。」
        karma: none
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +9"
          - "factors.法宝 +0.1"
        then:
          text: 观棋多看了你两眼，没说什么。折成灵石的四成沉甸甸压在袖里，出峡时你没有回头。

      - text: 阵开一半时动手——把三个人封死在内外两层阵之间
        require: "flag('密信黑吃黑')"
        karma:
          type: 杀戮
          target: 观棋三人
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 执灯的师门顺藤而至
              lethal: true
              foreshadow:
                - { at: -12, evt: "坊市有人高价收购落雁峡左近三个月内的见闻" }
                - { at: -5, evt: "一盏未点的白灯笼，挂上了你山门外的老树" }
                - { at: -1, evt: "山下茶棚坐着个眼生的女修，用的是和执灯同一种剑穗", window: true }
            - id: 落雁峡里的事，再无活口知晓
        effects:
          - "flag 金手指已定"
          - "flag 落雁峡黑吃黑"
          - "bind.system 任务"
          - "expose.金手指 +3"
          - "factors.法宝 +0.12"
          - "堕度 +12"
          - "业障 +22"
          - "expose.杀过某人 +12"
          - "道心 -8"
        then:
          text: 阵合上的一瞬，三张脸你都看清了。观棋在骂，渡桥在哭，执灯什么都没说——她只是把你的脸，从头到脚看了一遍。雾漫上来，峡底安静了。

      - text: 手按玉匣，先开口——「裴远舟的本命剑，怎么会在渡桥道友手里？」
        require: "flag('识破渡桥')"
        karma:
          type: 背叛
          target: 渡桥
          weight: 18
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 渡桥记恨入骨
            - id: 观棋与执灯承你的情
        effects:
          - "flag 金手指已定"
          - "bind.system 任务"
          - "expose.金手指 +3"
          - "flag 故人死因水落石出"
          - "名望 +5"
          - "道心 +5"
        then:
          text: 渡桥的笑僵在脸上。观棋与执灯同时后退半步，与他拉开了距离。「剑是我从死人堆里收的——」他喉结滚了滚，「乱星海那一队，是自己人先动的手！」

  # ══════════════════════════════════════════════════════════
  # 链 D · 座下弟子叛出
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_dizi_pantu
    title: 三叠浪
    weight: 70
    act: 3
    once: true
    cond: "tier == 3 && 名望 > 25"
    tags: [主干, 因果, 岔路]
    text: |
      刑堂把一份海捕文书放在你案上。画影图形，是商陆。
      三年前他在外门蹲桩，你路过点了他两句。后来他每旬都来，你把一手「借力三叠」拆开揉碎，教给了他。
      文书上写：商陆，投赤幡教，月余连杀七人。仵作验状：七人皆是一击透心——借力三叠，第三叠。
      末尾一行小字：其名帖师承一栏，写着你的名字。
    choices:
      - text: 清理门户。亲自去，亲手了。
        karma:
          type: 杀戮
          target: 商陆
          weight: 35
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 赤幡教把你记上了名单
            - id: 门内说你敢担当
        effects: ["名望 +12", "道心 -6", "业障 +10", "flag 清理门户·商陆"]
        then:
          text: 你追了他半个月，在一处废窑里对上。三叠浪对三叠浪，第三叠，你比他深半寸。回山那日你把他的名帖烧了，灰埋在他当年蹲桩的桩位底下。

      - text: 发帖公告诸方——革其师承，自此恩断义绝
        karma:
          type: 背叛
          target: 商陆
          weight: 15
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 他在魔道里，把你的名字咬得更紧
            - id: 于律，你与他两清
        effects: ["名望 -3", "锋芒 -0.05", "道心 -4", "flag 断绝师徒·商陆"]
        then:
          text: 告帖贴出去当日，说什么的都有。夜里你翻出他留下的那本笔记——一页页，记的全是你随口讲过的话。你合上了，没有烧。

      - text: 谁都不带。去赤幡教地界，问他一句为什么。
        karma: none
        check: { actor: "effectiveTier * 45 + 道心 * 0.5", dc: "155", scale: 12 }
        onSuccess:
          text: 赤幡教的哨卡放了你进去——他们也想看看你要做什么。商陆见了你，行的还是当年的礼。「师父教我借力。」他说，「可这世道，只有魔道肯借我力。」他妹妹被债主抵走那年，他往内门递过七次状纸。
          effects: ["flag 问过商陆", "道心 +4"]
        onFail:
          text: 你在赤幡教地界外围被三道阴幡拦住，缠斗半夜。人没见着，自己先挂了彩。
          effects: ["flag 问商陆未果", "factors.状态 -0.2"]

      - text: 放话出去——「借力三叠只教了一半。剩下那一叠，叫他自己来取。」
        karma:
          type: 欺骗
          target: 商陆
          weight: 20
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 来的不是他，是赤幡教的执事
            - id: 他真的一个人回来了
        effects: ["flag 设局引商陆", "堕度 +3"]
        then:
          text: 话放出去了。你在演武场把第三叠拆开重练——局要做真，饵就得是真的。

      - text: 七条人命，逐家登门。头低下去，钱补上，骂名你受。
        karma:
          type: 立誓
          target: 商陆
          weight: 25
          polarity: 1
          matureWindow: [15, 90]
          hooks:
            - id: 七家里有一家，不肯收你的钱
            - id: 此事传到了他耳朵里
        effects: ["功德 +12", "道心 +6", "factors.法宝 -0.15", "flag 替商陆偿债"]
        then:
          text: 第七家在最北边的山坳。开门的是个瞎眼的老妇，摸着你的袖口问：「是商陆叫你来的？」你隔了很久，说：「是。」

  # ══════════════════════════════════════════════════════════
  # 链 E · 病中的大人物
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_jiheng_shiyao
    title: 玑衡试药
    weight: 65
    act: 3
    once: true
    cond: "tier == 3 && 名望 > 40"
    tags: [主干, 危机, 岔路]
    text: |
      戌时三刻，一块无字玉牌从角门递进来。来人是玑衡长老的药童，只说：「长老请你。一个人来。」
      玑衡峰上药气冲鼻。那位元婴长老靠在榻上，脸色灰败，指给你看案上三只玉瓶。
      「换髓丹，三版方子。」他说，「老夫的经脉，验不出岔路了。你结丹未久，经脉最敏——药入你身怎么走，你说与老夫听。」
      「事成，老夫记你一诺。」他顿了顿，「今夜的事，出了这道门，就没有过。」
    choices:
      - text: 应下。以身试药。
        karma:
          type: 施恩
          target: 玑衡长老
          weight: 25
          polarity: 1
          matureWindow: [15, 90]
          hooks:
            - id: 元婴关口，他真的来护了你
            - id: 人走茶凉，一诺随风
        check: { actor: "talent.根骨 + factors.状态 * 30", dc: "62", scale: 10 }
        onCritSuccess:
          text: 三版药走完，你把每一处岔路说得分毫不差。老人撑起身子亲手替你把了脉，半晌，从枕下摸出一枚温润的木牌：「养魂木。拿去。」
          effects: ["sublevel +0.03", "丹毒 +6", "factors.法宝 +0.1", "flag 试药有功", "flag 玑衡欠你一诺"]
        onSuccess:
          text: 第三版药性最烈，你咬牙走完了全程。脉案递上去，老人看了很久：「难为你。老夫记下了。」
          effects: ["丹毒 +12", "factors.状态 -0.1", "flag 试药有功", "flag 玑衡欠你一诺"]
        onFail:
          text: 第二版走岔了。药力在丹田里横冲直撞，你醒来时天已大亮，舌根还是麻的。
          effects: ["丹毒 +20", "factors.状态 -0.25", "lifespan -2", "flag 试药伤身"]
        onCritFail:
          text: 药毒噬脉。你在玑衡峰的偏殿里躺了半个月，对外只说是闭关。
          effects: ["丹毒 +30", "factors.状态 -0.4", "lifespan -4", "flag 试药伤身"]

      - text: 「长老选弟子，是因为万宝楼那件事？」——应下，但丑话说在前头：脉案，只写真的
        require: "flag('赎回故人剑') || flag('截下故人剑')"
        karma:
          type: 施恩
          target: 玑衡长老
          weight: 25
          polarity: 1
          matureWindow: [15, 90]
          hooks:
            - id: 「肯为死人破财的人，脉案不会骗我。」
            - id: 元婴关口，他真的来护了你
        check: { actor: "talent.根骨 + factors.状态 * 30", dc: "60", scale: 10 }
        onSuccess:
          text: 老人撩起眼皮，头一回正眼看你：「不然呢？」药走了三程，你的脉案一字未虚——他要的就是这个。
          effects: ["丹毒 +10", "factors.状态 -0.08", "道心 +5", "flag 试药有功", "flag 玑衡欠你一诺"]
        onFail:
          text: 药性烈过预想。脉案你还是一字未虚——包括「弟子验不下去了」那一句。老人叹了口气，没有为难你。
          effects: ["丹毒 +18", "factors.状态 -0.2", "lifespan -1", "道心 +3", "flag 试药伤身"]

      - text: 辞。这潭水太深，深过药气。
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "58", scale: 10 }
        onSuccess:
          text: 「长老，弟子结丹未满一载，丹基未固，不敢以残躯误长老大事。」老人盯了你片刻，摆摆手：「口风紧些。」
          effects: ["flag 辞了玑衡", "锋芒 -0.05"]
        onFail:
          text: 老人没说什么。三个月后，你的月例灵石被库房「例行核减」了三成。
          effects: ["flag 辞了玑衡", "flag 玑衡记了你", "factors.法宝 -0.08"]

      - text: 应下——药倒进袖中暗袋，脉案照医书编
        karma:
          type: 欺骗
          target: 玑衡长老
          weight: 35
          polarity: -1
          matureWindow: [15, 80]
          hooks:
            - id: 照假脉案配出的第四版药，伤了长老的根本
              lethal: true
              foreshadow:
                - { at: -10, evt: "玑衡峰的药童，一夜之间换了一批生面孔" }
                - { at: -4, evt: "当夜递玉牌的那道角门，封了" }
                - { at: -1, evt: "玑衡座下首徒亲自登门，「请」你上峰一叙", window: true }
            - id: 无人看破
        effects: ["堕度 +8", "道心 -8", "flag 糊弄玑衡"]
        then:
          text: 你把编好的脉案誊得工整。老人枕着看完，点了点头：「与老夫料的差不离。」——那一刻，你袖中的药囊重得像块铁。

      - text: 暗改配伍——第三版那味赤须藤性烈走髓，你依药理减去三成，再以身试
        require: "talent.悟性 > 58"
        karma:
          type: 欺骗
          target: 玑衡长老
          weight: 20
          polarity: 1
          matureWindow: [15, 80]
          hooks:
            - id: 他复盘时看出方子被人动过——也看出了为什么
            - id: 他至死不知。但他活了下来。
        check: { actor: "talent.悟性 + talent.根骨 * 0.3", dc: "66", scale: 10 }
        onSuccess:
          text: 改后的药走得稳。你在脉案末尾添了一句：「赤须藤，宜减三成。」老人看到那一行，抬起眼，看了你很久。
          effects: ["丹毒 +6", "悟性 +1", "flag 暗改药方", "flag 玑衡欠你一诺"]
        onFail:
          text: 你减得多了，药力不足，岔路没验出来。老人皱眉把脉案掷回：「再来一遍。」
          effects: ["丹毒 +14", "factors.状态 -0.15", "flag 暗改药方"]

      - text: 「【苏婆婆】三版方子，老婆子替你掌掌眼。」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.苏婆婆.favor +8"
          - "expose.残魂 +6"
          - "名望 +8"
          - "factors.法宝 +0.1"
          - "僭越 +3"
          - "flag 献了真方"
        then:
          text: 婆婆只扫了一眼便嗤了一声：「三版皆是取死。换髓不换血，髓成也是死髓。」她口授，你笔录，一版新方递到榻前。老人看完，撑着坐直了：「你师承何人？」——你把话头含混了过去。

  # ══════════════════════════════════════════════════════════
  # 链 F · 江上论道 一（金手指备选链 · 链首）
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_jiangxin_putuan
    title: 江心蒲团
    weight: 70
    act: 3
    once: true
    cond: "tier == 3 && sublevel > 0.2 && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      临江渡口堵了三天了。江心一叶无桨的扁舟，舟头蒲团上坐着个鹤发老人，竿上挑着一件布裹的东西。
      一个青衣童子撑一片竹筏来回摆渡，见人便传一样的话：「先生说，论道三题。答上，竿上之物归有缘人。答不上，原路送回。」
      三天里上船的人，没有一个撑过第二题。岸上有人认出，败下来的里头，有一位是剑南有名的老前辈。
    choices:
      - text: 上船
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.2", dc: "62", scale: 10 }
        onCritSuccess:
          text: 第一题来得平常：「何谓藏？」你几乎没想：「藏者非匿，有所待也。」老人挑了挑眉，第一次正眼看你。
          effects: ["悟性 +1", "flag 江上一题过", "flag 江上一题惊座"]
          goto: evt_3s_jiangxin_sanwen
        onSuccess:
          text: 「何谓藏？」你想了想这些年收着锋芒过的日子，给了个不好听、但诚实的答法。老人不置可否，抬手：「坐。」
          effects: ["flag 江上一题过"]
          goto: evt_3s_jiangxin_sanwen
        onFail:
          text: 「何谓藏？」你答得四平八稳。老人听完便闭了眼。竹筏无声地掉了头。
          effects: ["flag 江上落第", "道心 -2"]
        onCritFail:
          text: 你引经据典答了一篇，自觉漂亮。老人一个字没说，童子已经在收筏了。
          effects: ["flag 江上落第", "道心 -3"]

      - text: 看完这一日再上——又有三人败下，你记住了他们各自折在哪一句
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.2", dc: "56", scale: 10 }
        effects: ["悟性 +1"]
        onSuccess:
          text: 日头偏西，你最后一个上船。第一题问出时，你已经听人答错了六遍——这一遍，你答的是自己的。
          effects: ["flag 江上一题过", "flag 江上末座"]
          goto: evt_3s_jiangxin_sanwen
        onFail:
          text: 看会了别人的错处，轮到自己，舌头还是打了结。童子送你回岸，竿上的布纹丝没动。
          effects: ["flag 江上落第"]

      - text: 不上船。借纸笔，只托童子递一句话过去。
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "74", scale: 11 }
        onSuccess:
          text: 老人展开那张纸，看了很久，然后亲自把舟撑到了岸边：「上来。」
          effects: ["悟性 +1", "flag 江上一题过", "flag 江上纸上惊人"]
          goto: evt_3s_jiangxin_sanwen
        onFail:
          text: 童子把你的纸条折成一只小船，放进江里，看着它漂远了。
          effects: ["道心 -2", "flag 江上落第"]

      - text: 隔水一揖，转身走
        karma: none
        effects: ["道心 +3", "flag 江上未赴"]
        then:
          text: 有的机缘是饵。你走出半里回头望，江心舟上，老人似乎也正望着你——隔得太远，看不真切。

  # ══════════════════════════════════════════════════════════
  # 链 F · 江上论道 二（链尾 · 金手指出口）
  # ══════════════════════════════════════════════════════════

  - id: evt_3s_jiangxin_sanwen
    title: 三问
    weight: 80
    act: 3
    once: true
    cond: "tier == 3 && flag('江上一题过')"
    tags: [主干, 机缘, 岔路]
    text: |
      蒲团对坐，江水在脚下打着旋。
      「第二题。」老人不看你，「你这一身修为，从别人身上取过多少？折过几条路，压过几个人——报个数。」
      你报了。瞒不得——他等你开口之前，眼睛就已经从你丹田上收回去了。
      「第三题。」他终于抬眼，指了指你，「藏锋至死，锋，还在么？」
      竿上那件布裹的东西，随着江风轻轻晃。
    choices:
      - text: 直答第三题
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.4", dc: "74", scale: 11 }
        onCritSuccess:
          text: 你答完，江面静了一息。老人大笑，笑声惊起两岸宿鸟。他解下竿上布裹抛了过来——一卷玉简，光纹森然。「另送你一句：你的来历，你自己其实没有看全。」
          effects: ["flag 金手指已定", "flag 江上得简", "bind.system 面板", "expose.金手指 +2", "悟性 +2", "originClues +1"]
        onSuccess:
          text: 沉吟半晌，老人道：「勉强。」布裹解开，玉简递到你面前。「拿去。看人，先看己。」
          effects: ["flag 金手指已定", "flag 江上得简", "bind.system 面板", "expose.金手指 +2"]
        onFail:
          text: 你说了半句，自己停住了。老人摇头：「回去想。想明白那一日，不必来寻我——你自会知道答案。」
          effects: ["flag 金手指已定", "悟性 +1", "道心 +2"]
        onCritFail:
          text: 你答了一个极漂亮的句子。老人把布裹重新系紧：「你在答我。不是在答你。」
          effects: ["flag 金手指已定", "道心 -3"]

      - text: 把商陆那句话说给他听——「只有魔道肯借他力。」然后，再答你自己的。
        require: "flag('问过商陆')"
        karma: none
        effects: ["flag 金手指已定", "flag 江上得简", "bind.system 面板", "expose.金手指 +2", "道心 +4"]
        then:
          text: 老人久久没有说话，江水响了很长一阵。「带着人间的问来的。」他解下布裹，「物归你。回去替他，也替你自己，把这题接着答完。」

      - text: 先把那六个人的错处一一说破，再答你自己的
        require: "flag('江上末座')"
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "66", scale: 10 }
        onSuccess:
          text: 「眼里能看见别人折在哪儿，是个本事。」老人把玉简抛过来，「拿去。别折在同一处。」
          effects: ["flag 金手指已定", "flag 江上得简", "bind.system 面板", "expose.金手指 +2", "悟性 +1"]
        onFail:
          text: 你把别人的错处说得头头是道，轮到自己的答，却空了。「回去。」老人重新闭上眼，「自己的题一日不答，看再多人也没用。」
          effects: ["flag 金手指已定", "悟性 +1", "道心 -2"]

      - text: 「第三题，弟子答不上。竿上的东西，弟子也不要。」
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +10"]
        then:
          text: 「想要的太多，是弟子这些年最大的病。」老人看了你很久，忽然一笑：「这算你答上了半题。」舟自行离岸，入了江雾。雾散时，江心什么都没有了。
`,ar=`# 幕四 · 主干岔路（元婴期）· evt_a4c_
# 对应 docs/DESIGN.md §11 岔路 14–16：心魔渡劫 / 势力抉择 / 正魔大战站队，
# 外加道侣线后续、收徒成材、天命之子初现、僭越清算预备
#
# 设计要点：
# · 元婴一回合＝十年：正文反复落「凡人换代、山河改道、宗门换血」的时间感
# · 心魔大劫按 flag 分四条直面路线（手上有人命/结丹·夺/假死脱身/皆无），
#   三种处理：战胜（压制，留 flag 心魔·压而未消，复发卡回收）/接纳（心魔·此身受之）/偿还（心魔债）
# · 正魔大战「两头骗」与「杀天命之子」均为致死因果，各配三段预警＋可干预窗口（铁律二）
# · 回收前幕：周小乙（幕一灭口）、陆七（结丹·夺原主）、沈青梧（道侣/知己）、
#   石生（幕三收徒）、化血宗（幕三赤岭）、瞎眼老者（幕三天机阁预警的本尊）

events:

  # ══════════════════════════════════════════════════════════
  # 岔路 14 · 心魔大劫：无字的账册
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_xinmo_dajie
    title: 无字的账册
    weight: 95
    act: 4
    once: true
    cond: "tier == 4 && sublevel > 0.3"
    tags: [主干, 心魔, 大劫, 岔路]
    text: |
      结婴之后第一次长定，一坐就是三年。
      第三年上，识海起了雾。雾里没有人，只有一张案，案上摊着一册簿子，封皮无字。
      你翻开。头一页记着你入门那年的月钱，一笔一笔，比库房的账还细。往后翻，墨迹渐深，像是拿指甲刻出来的。
      雾在案的四周站定了，不进，也不退。
      你知道这一关的名字——婴变心魔。账翻到哪一页停住，雾里就站出谁来。
    choices:
      - text: 翻到带血的那几页，停住
        require: "flag('手上有人命')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "95", scale: 12 }
        onSuccess:
          text: |
            雾里的人一个一个走出来。周小乙手上还是药圃里的泥。
            有的脸你叫得出名字，有的只记得刀落下去的地方。你一张一张认过去，认到最后，雾散了。
            案上的字淡了几行——淡了，没有消。
          effects: ["道心 +10", "业障 -10", "flag 心魔·此身受之"]
        onFail:
          text: 认到第三张脸，你退了半步。雾顺着这半步涌上来，把案吞了。出定时满口腥甜，婴在丹田里蜷着，不肯转。
          effects: ["道心 -10", "sublevel -0.05", "factors.状态 -0.15", "flag 心魔·压而未消"]

      - text: 账翻到结丹那一页——雾里坐着陆七
        require: "flag('结丹·夺')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "100", scale: 12 }
        onSuccess:
          text: |
            「丹，好用么？」他问。
            你把丹田摊开给他看——那颗丹早已化婴。你指给他：这条命，如今一半是他的。
            他看了很久，起身，让了路。
          effects: ["道心 +8", "业障 -12", "flag 心魔·此身受之"]
        onFail:
          text: 他只问了一句，你答不上来。他也不逼你，就坐在案后看着，看得你行不了功。往后每次入定，那把椅子都在。
          effects: ["道心 -12", "sublevel -0.06", "factors.状态 -0.1", "flag 心魔·压而未消"]

      - text: 账里夹着一页讣文——雾里站着来吊唁的人
        require: "flag('假死脱身')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "90", scale: 12 }
        onSuccess:
          text: |
            你「死」的那天，来了些你没想到的人。
            有人哭得真，有人只是来看棺材钉严了没有。你把两种脸都记下了，朝雾里作了一揖。
          effects: ["道心 +8", "悟性 +2", "flag 心魔·此身受之"]
        onFail:
          text: 哭声里你听见了自己的名字——旧的那个。你想应一声，应不出来。名字是你自己烧掉的。
          effects: ["道心 -8", "factors.状态 -0.08", "flag 心魔·压而未消"]

      - text: 账册干净。雾里站出来的，是外门扫地的你自己。
        require: "!flag('手上有人命') && !flag('结丹·夺') && !flag('假死脱身')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "80", scale: 12 }
        onSuccess:
          text: |
            他把扫帚靠在案边，翻了翻账，点点头：「没欠什么。」又抬眼看你：「往后呢？」
            你答不出。他也不急，低头扫地，扫着扫着，慢慢淡了。
          effects: ["道心 +12", "悟性 +3", "flag 心魔·此身受之"]
        onFail:
          text: 他问：「爬这么高，是要做什么？」你张口，说出来的全是别人的话。他听完，摇了摇头，把地上你的影子也扫走了。
          effects: ["道心 -6", "flag 心魔·压而未消"]

      - text: 合上账册，一掌拍碎那张案——这一关，硬闯
        karma: none
        check: { actor: "道心 * 0.6 + talent.神魂 * 0.6", dc: "95", scale: 13 }
        onSuccess:
          text: 案碎了，雾退了。退得很慢，也很静——像让路，不像败走。你知道账册没坏，它只是合上了，等下一次开。
          effects: ["sublevel +0.04", "锋芒 +0.08", "道心 +2", "flag 心魔·压而未消"]
        onFail:
          text: 掌落下去，案纹丝不动，反震把你的婴掀了个跟头。出定时七窍见血，那册账，摊得比先前更开。
          effects: ["道心 -12", "sublevel -0.08", "factors.状态 -0.2", "flag 心魔·压而未消"]
        onCritFail:
          text: 你拍碎的不是案，是识海自己。醒来时你躺在血泊里，婴淡得像一层影子。
          effects: ["道心 -16", "sublevel -0.1", "lifespan -5", "神魂 -2", "flag 心魔·压而未消"]

      - text: 把账册揣进怀里。「欠的，认。出关之后，一笔一笔还。」
        karma:
          type: 立誓
          target: 账上诸人
          weight: 30
          polarity: 0
          matureWindow: [10, 100]
          hooks:
            - id: 还清一笔，账上便自己淡一行
            - id: 认了账，天道也记了一份——赖账的代价翻倍
        effects:
          - "flag 心魔债"
          - "道心 +5"
          - "业障 -5"

  # ══════════════════════════════════════════════════════════
  # 岔路 14 · 复发：案又摆回来了（压制线回收）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_xinmo_fufa
    title: 案又摆回来了
    weight: 70
    act: 4
    once: true
    cond: "tier == 4 && flag('心魔·压而未消') && sublevel > 0.55"
    tags: [主干, 心魔]
    text: |
      冲击元婴后期的关口上，行功到第九周天，识海深处咔的一响——
      那张案，原样摆了回来。碎过一次的案面上连道裂纹都没有，账册摊开着，正是你上次合上的那一页。
      雾比十年前贴得近，凉气挨着后颈。
      你压下去过一次。它记得，你也记得。
    choices:
      - text: 再拍一次
        karma: none
        check: { actor: "道心 * 0.6 + talent.神魂 * 0.6", dc: "105", scale: 13 }
        onSuccess:
          text: 又压下去了。雾退出去的时候，你听见极轻的一声笑——不急，它说，你的道还长，我等得起。
          effects: ["sublevel +0.03", "道心 -2"]
        onFail:
          text: 案没碎，你的行功岔了。婴在丹田里僵了三个月，冲关之事就此作罢。
          effects: ["道心 -12", "sublevel -0.1", "factors.状态 -0.25", "lifespan -5"]

      - text: 这次不拍了。坐下来，把账从头翻一遍。
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "100", scale: 12 }
        onSuccess:
          text: |
            翻完最后一页，天光从识海顶上漏下来，案与册一同化在光里。
            出关那日，婴眉目已开。眉眼像你，神情不像——比你静。
          effects: ["unflag 心魔·压而未消", "flag 心魔·此身受之", "道心 +10", "业障 -8"]
        onFail:
          text: 翻到一半你合上了。有些页，你还是不敢看。案留在原处，雾退开三尺——这一局，谁也没赢。
          effects: ["道心 -6", "factors.状态 -0.1"]

      - text: 「欠的，认。往后一笔一笔还。」
        karma:
          type: 立誓
          target: 账上诸人
          weight: 25
          polarity: 0
          matureWindow: [10, 80]
          hooks:
            - id: 账认下来，雾就退作了纸墨
            - id: 誓在天道那里存了底
        effects:
          - "unflag 心魔·压而未消"
          - "flag 心魔债"
          - "道心 +4"

      - text: 「【独孤离】老祖。你当年，是怎么过的这一关？」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +6"
          - "soul.独孤离.possession +5"
          - "道心 +3"
          - "originClues +1"

  # ══════════════════════════════════════════════════════════
  # 岔路 15 · 势力抉择 一：贺客与旧殿
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_lizong_juelu
    title: 贺客与旧殿
    weight: 85
    act: 4
    once: true
    cond: "tier == 4"
    tags: [主干, 势力, 岔路]
    text: |
      婴成的消息传开，贺客来了十年。
      你回过一趟老宗门。掌律长老已经坐化，大殿上一半的脸你不认得，倒是他们都认得你——礼行得极齐。掌门鬓白了，亲手斟茶：「供奉阁虚位以待。或者，你要哪一峰，宗门割哪一峰。」
      出山门时，山下候着的散修跪了一路。为首的捧着一方新刻的印，印上四个字：开山之请。
      长生路远。这一步，是立在人前，还是走在人外。
    choices:
      - text: 「择地开山。愿留的，跟我走。」
        karma:
          type: 立誓
          target: 门下诸修
          weight: 35
          polarity: 0
          matureWindow: [20, 150]
          hooks:
            - id: 百年之后，有人唤你祖师
            - id: 有了山门，你的仇家从此有了砸得着的地方
        effects:
          - "flag 已建宗"
          - "factors.伙伴 +0.12"
          - "名望 +25"
          - "锋芒 +0.12"
          - "factors.法宝 -0.15"

      - text: 「回宗门。北峰空着，我接了。」
        karma:
          type: 立誓
          target: 掌门
          weight: 25
          polarity: 0
          matureWindow: [10, 100]
          hooks:
            - id: 宗门的气数，与你绑在了一处
            - id: 峰上的旧人，未必都服你
        effects:
          - "flag 执掌北峰"
          - "名望 +15"
          - "factors.情报 +0.08"
          - "factors.伙伴 +0.06"

      - text: 把印还回去，茶谢过，一个人下山
        karma: none
        effects:
          - "flag 云游独行"
          - "道心 +6"
          - "锋芒 -0.1"
          - "名望 -5"

      - text: 「【苟道】名头就是靶子。都辞了，换个名字接着走。」
        require: "hasSystem('苟道')"
        karma: none
        effects:
          - "flag 云游独行"
          - "锋芒 -0.2"
          - "名望 -10"
          - "僭越 -5"
          - "道心 +2"

  # ══════════════════════════════════════════════════════════
  # 岔路 15 · 势力抉择 二：山门第一案（建宗线）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_kaishan_diyian
    title: 山门第一案
    weight: 80
    act: 4
    once: true
    cond: "tier == 4 && flag('已建宗')"
    tags: [主干, 势力, 执法]
    text: |
      开山十年，门下三百余口，山名立住了。
      巡山弟子在后崖抓住两个细作：一个身上搜出化血宗的血引，另一个的传讯玉简，落款竟是你老宗门刑堂的暗记。
      两人跪在演武场上，三百双眼睛看着你——也看着你会怎么立这一宗的规矩。
      开山以来，你的山门还没杀过人。
    choices:
      - text: 「首恶悬门，以儆效尤。」
        karma:
          type: 杀戮
          target: 两名细作
          weight: 28
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 新立的山门，从此没人敢小看
            - id: 两家都把这笔记在了账上
        effects:
          - "名望 +12"
          - "锋芒 +0.1"
          - "堕度 +6"
          - "业障 +10"
          - "expose.杀过某人 +5"
          - "flag 山门·立威"

      - text: 废修为，各遣回原处，附一封亲笔信
        karma:
          type: 放走
          target: 两名细作
          weight: 18
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 一封信，换来十年相安
            - id: 放回去的人，把你山门的虚实也带了回去
        effects:
          - "名望 +8"
          - "功德 +5"
          - "道心 +4"
          - "flag 山门·立规"

      - text: 原地放着，只喂他们想要的消息
        karma:
          type: 欺骗
          target: 化血宗
          weight: 25
          polarity: -1
          matureWindow: [8, 50]
          hooks:
            - id: 两家按你喂的图，谋划了三年
            - id: 假的对不上真的那天，两家一起醒
        check: { actor: "factors.情报 * 200 + talent.悟性", dc: "110", scale: 12 }
        onSuccess:
          text: 两个细作至今不知道自己已经死过一回。他们发回去的每一个字，都是你写的。
          effects: ["factors.情报 +0.15", "flag 细作·反用"]
        onFail:
          text: 化血宗那个警觉，半年后借着采买遁走。你的山防图，去了不该去的地方。
          effects: ["factors.情报 -0.05", "名望 -5", "flag 细作·走脱"]

      - text: 「交给石生审。他的心，比我的刀稳。」
        require: "flag('徒·石生')"
        karma: none
        effects:
          - "factors.伙伴 +0.06"
          - "道心 +3"
          - "flag 石生·掌律"

  # ══════════════════════════════════════════════════════════
  # 岔路 16 · 正魔大战 一：两份盟书
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_zhengmo_fengyan
    title: 两份盟书
    weight: 85
    act: 4
    once: true
    cond: "tier == 4 && sublevel > 0.2"
    tags: [主干, 正魔, 岔路]
    text: |
      化血宗合魔道六宗东进，半年连破三州。修士的尸首顺着洛水漂，下游的凡人城郭十室九空。
      正道会盟于洛水之北，盟书快剑送到你案头，抬头第一行就是你的名字——元婴之尊，谁都想借。
      三日后，魔道的密使也到了，夜里翻墙进来，价开得极实在：三州灵脉，任你先挑。
      两份文书并排摆在案上。这一仗打起来，九州没有干净的地方。
    choices:
      - text: 歃血与盟，落名正道
        karma:
          type: 立誓
          target: 洛水盟
          weight: 30
          polarity: 0
          matureWindow: [5, 40]
          hooks:
            - id: 盟中论功，你的座次在前
            - id: 盟书名录，魔道也抄了一份
        effects:
          - "flag 大战·站正"
          - "名望 +15"
          - "锋芒 +0.1"

      - text: 收下魔道的价。乱世里，灵脉比名声实在。
        karma:
          type: 立誓
          target: 化血宗
          weight: 35
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 魔道许你的，向来给得爽快
            - id: 名录传出去那天，正道把你除了名
        effects:
          - "flag 大战·站魔"
          - "堕度 +15"
          - "业障 +8"
          - "名望 -20"
          - "factors.功法 +0.1"

      - text: 封山。两份文书都压进匣底，谁也不帮。
        karma: none
        effects:
          - "flag 大战·中立"
          - "名望 -10"
          - "锋芒 -0.1"
          - "道心 +3"

      - text: 盟书签了，密使的信也回了——两头都应下
        karma:
          type: 欺骗
          target: 正魔两道
          weight: 55
          polarity: -1
          matureWindow: [5, 45]
          hooks:
            - id: 两边同时翻出你的信
              lethal: true
              foreshadow:
                - { at: -6, evt: "盟中设了勘合司，各家往来文书一份一份对笔迹" }
                - { at: -2, evt: "魔道换了密使，新来的不认你旧日的暗记" }
                - { at: -1, evt: "一封你发出去的信被原样放回案头——火漆揭开过，又重新封上了", window: true }
            - id: 两头的好处，你都先拿着
        effects:
          - "flag 大战·两头骗"
          - "factors.情报 +0.1"
          - "factors.法宝 +0.1"
          - "道心 -8"
          - "堕度 +8"

  # ══════════════════════════════════════════════════════════
  # 岔路 16 · 正魔大战 二：洛水最后一夜
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_zhengmo_luoshui
    title: 洛水最后一夜
    weight: 90
    act: 4
    once: true
    cond: "tier == 4 && seen('evt_a4c_zhengmo_fengyan')"
    tags: [主干, 正魔, 决战]
    text: |
      这一仗打了十年，把洛水两岸打成了绞盘。城郭修了塌，塌了修，凡人换了一代，仗还在打。
      如今两边都撑不住了，各自把家底押上——总攻的日子，竟选在了同一夜。
      入夜前，几拨信使先后到了你山门外：请战的、催约的、探口风的、递密信的。
      今夜过后，九州要换一张图。图上你的位置，还空着。
    choices:
      - text: 请为先锋，破化血中军
        require: "flag('大战·站正')"
        karma:
          type: 杀戮
          target: 化血宗
          weight: 40
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 正道叙功，你名列第一
            - id: 化血余脉给你立了牌位——受咒的那种
        check: { actor: "effectiveTier * 55 + factors.功法 * 40", dc: "250", scale: 14 }
        onCritSuccess:
          text: 你一人一剑先渡洛水。中军大纛倒下去的时候，两岸十万修士都看清了你的脸。
          effects: ["名望 +30", "锋芒 +0.15", "expose.真实修为 +12", "flag 大战·首功"]
        onSuccess:
          text: 中军破了。你的婴伤了一角，回山养了三年。但九州新图上，你的名字落在赢的那一边。
          effects: ["名望 +18", "factors.状态 -0.2", "flag 大战·有功"]
        onFail:
          text: 血魔大阵比军报里深了三倍。你破阵未成反陷了半夜，是盟中老怪把你捞出来的。
          effects: ["factors.状态 -0.35", "lifespan -5", "名望 +5", "flag 大战·力竭"]
        onCritFail:
          text: 大阵合拢那一刻你就知道错了。你婴体带伤遁出百里，本命法器折在阵里——那一夜，正道也没赢。
          effects: ["factors.状态 -0.5", "lifespan -10", "factors.法宝 -0.15", "道心 -6", "flag 大战·力竭"]

      - text: 依约献盟军布防，放魔道过洛水
        require: "flag('大战·站魔')"
        karma:
          type: 背叛
          target: 洛水盟
          weight: 50
          polarity: -1
          matureWindow: [10, 90]
          hooks:
            - id: 正道清算名录，你列前十
              lethal: true
              foreshadow:
                - { at: -8, evt: "战后叙功的邸报上，你的名字被朱笔圈了" }
                - { at: -3, evt: "三个金丹修士在你山门外看了半日风水——看的是阵眼" }
                - { at: -1, evt: "一位故人星夜来访，只留下四个字：名录有你", window: true }
            - id: 魔道酬功，三州灵脉兑了现
        effects:
          - "名望 -30"
          - "堕度 +20"
          - "业障 +25"
          - "factors.法宝 +0.2"
          - "flag 大战·魔功"

      - text: 开山门，收两边的伤者，不问出身
        require: "flag('大战·中立')"
        karma:
          type: 救助
          target: 两道伤修
          weight: 30
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 活下来的人，记得你山上那盏灯
            - id: 两边都疑你借伤兵收人心
        effects:
          - "功德 +20"
          - "名望 +10"
          - "道心 +8"
          - "flag 大战·渡人"

      - text: 把最后两封信，同时发出去
        require: "flag('大战·两头骗')"
        karma: none
        check: { actor: "factors.情报 * 220 + talent.悟性", dc: "115", scale: 13 }
        onSuccess:
          text: 正道按你的信赢了东岸，魔道按你的信保住了老巢。战后两边论功，都算了你一份——至今没人对过账。
          effects: ["factors.法宝 +0.2", "factors.情报 +0.1", "名望 +10", "flag 大战·渔利"]
        onFail:
          text: 两封信，送岔了一封。当夜就有快剑离营北去——去的方向，是勘合司。
          effects: ["名望 -20", "道心 -10", "锋芒 +0.05", "flag 大战·骗局败露"]

      - text: 谁的信都不回。闭死关。
        karma: none
        effects:
          - "flag 大战·抽身"
          - "锋芒 -0.15"
          - "名望 -12"
          - "道心 -4"

  # ══════════════════════════════════════════════════════════
  # 道侣线后续 一：炉冷（沈青梧结丹失败）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_qingwu_luleng
    title: 炉冷
    weight: 92
    act: 4
    once: true
    cond: "tier == 4 && flag('道侣·沈青梧')"
    tags: [主干, 道侣]
    text: |
      你入定十年，出关那日雪没过门槛。药庐的炉是冷的。
      沈青梧坐在炉边等你，鬓角白了一片。你入定的时候，她正备着冲结丹关的最后一味药。
      「炉开了，丹碎了。」她说得像在讲别人的病案，「道基裂了三寸。医家断的，是二十年。」
      她顿了顿：「账我自己算过了。你出关得不迟——正好把这二十年，商量着怎么花。」
      炉边搁着两只杯，茶是刚沏的。
    choices:
      - text: 「不用商量。」你割破掌心——元婴修士，寿元割得下来
        karma:
          type: 立誓
          target: 沈青梧
          weight: 35
          polarity: 0
          matureWindow: [20, 150]
          hooks:
            - id: 同寿之约，天道记了档
            - id: 割出去的寿数，再也长不回来
        effects:
          - "lifespan -20"
          - "factors.道侣 +0.15"
          - "道心 +8"
          - "flag 青梧·同寿"

      - text: 「九转还元丹能续道基。主药，我去找。」
        karma: none
        effects:
          - "flag 为青梧求药"
          - "道心 +3"
          - "factors.道侣 +0.03"

      - text: 端起茶。二十年就二十年——陪她把每一年过成一年。
        karma: none
        effects:
          - "flag 青梧·倒计时"
          - "道心 +6"
          - "悟性 +2"
          - "factors.道侣 +0.05"

      - text: 「【苏婆婆】婆婆，求你。」
        require: "hasSoul('苏婆婆')"
        karma:
          type: 立誓
          target: 苏婆婆
          weight: 20
          polarity: 0
          matureWindow: [10, 80]
          hooks:
            - id: 婆婆把压箱底的本事都使了出来
            - id: 这一炉丹，烧的是残魂的本源
        effects:
          - "soul.苏婆婆.favor +8"
          - "flag 青梧·婆婆续脉"
          - "factors.道侣 +0.08"
          - "expose.残魂 +4"

  # ══════════════════════════════════════════════════════════
  # 道侣线后续 二：药在魔窟里（求药线）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_qingwu_yaoyin
    title: 药在魔窟里
    weight: 88
    act: 4
    once: true
    cond: "tier == 4 && flag('为青梧求药')"
    tags: [主干, 道侣, 正魔]
    text: |
      翻遍三州药志，九转还元丹的主药只剩一处还活着——九窍还元果，长在化血宗祖山的血池边，三百年只结七枚。
      你托的商路刚递出话，化血宗主的亲笔信倒先到了，只有一句：「果有。价面议。」
      见了面，他开价也爽快：要么，来日大战，你的山门一人一剑不出；要么，拿你身上那桩「谁都不知道的东西」抵。
      末了他笑了笑：「抢也行。祖山血池，恭候大驾。」
    choices:
      - text: 应下头一个价——大战之日，我不出手
        karma:
          type: 立誓
          target: 化血宗
          weight: 30
          polarity: -1
          matureWindow: [5, 50]
          hooks:
            - id: 果到手，丹成了
            - id: 这一诺捏在魔修手里，正道迟早知道
        effects:
          - "flag 青梧·续命"
          - "道心 -6"
          - "堕度 +8"
          - "factors.道侣 +0.1"

      - text: 拿那桩「谁都不知道的东西」抵
        require: "hasAnySystem()"
        karma:
          type: 立誓
          target: 化血宗主
          weight: 25
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 药是真药，救的是真人
            - id: 从此世上最懂你底细的，是一个魔头
        effects:
          - "flag 青梧·续命"
          - "expose.金手指 +12"
          - "witness 化血宗主 金手指"
          - "僭越 +5"
          - "factors.道侣 +0.1"

      - text: 抢。祖山血池，那就去一趟。
        karma:
          type: 夺取
          target: 化血宗
          weight: 35
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 夺药之仇，魔修记得比谁都牢
            - id: 血池边的老仆，看清了你的脸
        check: { actor: "effectiveTier * 55 + factors.功法 * 40", dc: "255", scale: 14 }
        onSuccess:
          text: 你踏血池三进三出，七枚果摘走两枚。出山那夜化血宗灯火通明——账他们记下了，但丹，能成了。
          effects: ["flag 青梧·续命", "factors.状态 -0.2", "名望 +8"]
        onFail:
          text: 血池底下镇着的东西，药志上没写。你婴体带伤遁回，果没到手，右手三根指骨至今是黑的。
          effects: ["factors.状态 -0.35", "lifespan -3", "丹毒 +8", "flag 青梧·药未得"]

      - text: 价太高。回去，把实话原样告诉她。
        karma: none
        effects:
          - "flag 青梧·倒计时"
          - "道心 +4"
          - "factors.道侣 +0.04"

  # ══════════════════════════════════════════════════════════
  # 道侣线后续 · 无道侣分支：山下无故人（长生独行卡）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_changye_guren
    title: 山下无故人
    weight: 68
    act: 4
    once: true
    cond: "tier == 4 && !flag('道侣·沈青梧')"
    tags: [主干, 长生, 独行]
    text: |
      一定三十年。出关那日你下山去，走到半路就停了——路没了。
      洛水改过一次道，把官道连同渡口一起搬去了十里外。当年的县城迁到新河湾，旧城墙塌成一道土梁，梁上放牛的孩子唱的歌，你一句听不懂。
      你打听当年相熟的几个名字。酒肆掌柜的孙子想了半天：「仙长说的，怕是我太爷爷那辈的人。」
      山上一炷香，山下已三代。
    choices:
      - text: 挨个坟头，坐一坐
        karma: none
        effects:
          - "道心 +8"
          - "悟性 +2"
          - "功德 +3"

      - text: 把还记得的名字都写下来，在渡口立一块碑
        karma:
          type: 施恩
          target: 山下故旧
          weight: 15
          polarity: 1
          matureWindow: [30, 150]
          hooks:
            - id: 百年之后，山下还有人给这块碑除草
            - id: 有心人顺着碑上的名字，摸到了你的来历
        effects:
          - "功德 +8"
          - "道心 +5"
          - "expose.身世 +5"
          - "flag 故人碑"

      - text: 转身回山。从此不再记凡人的名字。
        karma: none
        effects:
          - "道心 -6"
          - "flag 心不系尘"

      - text: 去丹阁。三十年，她该结丹了。
        require: "flag('知己·沈青梧')"
        karma: none
        check: { actor: "道心 + talent.悟性", dc: "40", scale: 10 }
        onSuccess:
          text: |
            丹阁的药童已成了掌事。他捧出一只食盒：九颗丹，颗颗有纹。
            「沈师叔十二年前坐化了。冲结丹关，没成。」他说，「她留话——你早晚会来取。」
          effects: ["flag 青梧·遗丹", "丹毒 -10", "道心 -5", "悟性 +3"]
        onFail:
          text: 丹阁说她十二年前坐化了。遗物里有一只写着你名字的食盒。你在丹阁门口站了一夜，没伸手。
          effects: ["flag 青梧·遗丹未取", "道心 -8"]

  # ══════════════════════════════════════════════════════════
  # 收徒成材：卷宗压到他头上（石生线）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_shisheng_qingya
    title: 卷宗压到他头上
    weight: 75
    act: 4
    once: true
    cond: "tier == 4 && flag('徒·石生') && !flag('石生·掌律')"
    tags: [主干, 传承, 宗门]
    text: |
      石生筑基了。下下的根骨，磨了三十年，十次冲关，第十次成的。
      消息传来你还没来得及高兴，第二封信就到了——他在老宗门领着药圃的差，供奉阁两系争位，有人翻出他当年入门的文书：破格收录，保人是你，而你早已不在宗门名册上。
      罪名拟的是「冒籍」。按律，废修为，逐出山门。
      拟罪的那一系真正想敲的是谁，明眼人都看得出来。
    choices:
      - text: 亲自回山。元婴的威压，就坐在堂下听审。
        karma:
          type: 施恩
          target: 石生
          weight: 20
          polarity: 1
          matureWindow: [10, 80]
          hooks:
            - id: 这份情，他记成了道心
            - id: 借他敲你的人，换了条更阴的路子
        effects:
          - "flag 石生·保下"
          - "名望 +8"
          - "锋芒 +0.12"
          - "factors.伙伴 +0.05"

      - text: 把当年文书的真本寄给他——这一堂，让他自己上
        karma: none
        check: { actor: "道心 + talent.悟性 * 0.4", dc: "88", scale: 12 }
        onSuccess:
          text: 他在堂上一条一条地辩，辩到掌律拍案叫了声好。出堂那日，半个宗门记住了这个下下根骨的名字。
          effects: ["flag 石生·自立", "factors.伙伴 +0.1", "道心 +5"]
        onFail:
          text: 堂上输了半筹——修为保住，差事革了。他收拾了药圃那把旧锄头，出山门，投你来了。
          effects: ["flag 石生·来投", "factors.伙伴 +0.06", "名望 -4"]

      - text: 不管。收他的时候没应过要保他一世。
        karma:
          type: 背叛
          target: 石生
          weight: 30
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 废修台上，他到底没喊你一声师父
            - id: 三十年师徒，寒的不止他一个人的心
        effects:
          - "道心 -10"
          - "factors.伙伴 -0.1"
          - "flag 石生·被废"

      - text: 顺着卷宗，查拟罪的人
        karma:
          type: 夺取
          target: 供奉阁主事
          weight: 25
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 他的把柄，到了你手里
            - id: 这一系从此与你死磕
        check: { actor: "factors.情报 * 220 + talent.悟性", dc: "112", scale: 12 }
        onSuccess:
          text: 卷宗倒查三十年，拟罪那位自己的入门文书先出了纰漏。石生的案子无人再提——连提过的人都没了。
          effects: ["flag 石生·保下", "factors.情报 +0.1", "名望 +5"]
        onFail:
          text: 查到一半，对方先递了和解的帖子——条件是石生调去守矿十年。他去了。走前，给你磕了个头。
          effects: ["flag 石生·守矿", "道心 -4", "factors.伙伴 -0.02"]

  # ══════════════════════════════════════════════════════════
  # 天命之子初现：巧得过分的少年
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_tianming_guzhao
    title: 巧得过分的少年
    weight: 78
    act: 4
    once: true
    cond: "tier == 4"
    tags: [主干, 气运, 岔路]
    text: |
      你地界南边起了个少年，姓顾名昭，樵户出身。
      五年里：你封存的断崖秘境，他采药失足跌了进去，得了全套传承；你门下最傲的弟子与他起了冲突，三招落败，反替他扬了名；连你早年遗失的那枚旧剑符，都让他在河滩上捡去，认了主。
      桩桩件件，巧得像有人提前写好了本子。
      你查过他的底，干净得反常。他还不知道你是谁——可这些「巧」，一件一件，全落在你的地界里。
    choices:
      - text: 趁他羽翼未成，做成一场「意外」
        karma:
          type: 杀戮
          target: 顾昭
          weight: 60
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 天道补完命数，杀劫回冲
              lethal: true
              foreshadow:
                - { at: -9, evt: "你的本命法器无故生出一道裂纹" }
                - { at: -4, evt: "起卦十次，十次都落在同一个「困」字上" }
                - { at: -1, evt: "雷雨夜，护山阵的电光里映出一张脸，与顾昭七分像", window: true }
            - id: 他的机缘散了，落进旁人袋里
        effects:
          - "业障 +25"
          - "堕度 +15"
          - "气运 -15"
          - "道心 -8"
          - "expose.杀过某人 +10"
          - "flag 天命·逆天而杀"

      - text: 递帖子请他上山，结一份善缘
        karma:
          type: 施恩
          target: 顾昭
          weight: 30
          polarity: 1
          matureWindow: [20, 120]
          hooks:
            - id: 气运之子记恩，向来是加倍还的
            - id: 他的因果绞进你的因果，从此解不开
        effects:
          - "气运 +10"
          - "功德 +5"
          - "factors.伙伴 +0.05"
          - "flag 天命·结善缘"

      - text: 把南边的地界让出去。不与天争。
        karma: none
        effects:
          - "flag 天命·避其锋"
          - "气运 +3"
          - "名望 -8"
          - "锋芒 -0.1"
          - "道心 +4"

      - text: 「【面板】查他的命格。」
        require: "hasSystem('面板')"
        karma: none
        effects:
          - "expose.金手指 +3"
          - "僭越 +8"
          - "originClues +1"
          - "flag 天命·窥命"

  # ══════════════════════════════════════════════════════════
  # 僭越清算预备：遮天的价目
  # ══════════════════════════════════════════════════════════

  - id: evt_a4c_zhetian_jiamu
    title: 遮天的价目
    weight: 95
    act: 4
    once: true
    cond: "tier == 4 && 僭越 > 80"
    tags: [主干, 僭越, 危机]
    text: |
      入夜，一个瞎眼老叟拄着竹杖走进你的洞府——护山大阵，如同虚设。
      「老朽从前在天机阁当差，管的就是『变数』的档。」他自顾自坐下，「你的档，厚得压手。天罚使者的名录三年一勘，下一勘，你在头一页。」
      他从袖中摸出一张价目，纸是旧的，字是新的：
      「遮十年，二十载寿元。遮一世，让老朽看一眼你藏得最深的那样东西。不遮，老朽这就走，就当没来过。」
    choices:
      - text: 「遮十年。」——二十载寿元，割给他
        karma: none
        effects:
          - "lifespan -20"
          - "僭越 -35"
          - "flag 天机·遮十年"

      - text: 「遮一世。」——把藏得最深的东西，摊开给他看
        karma:
          type: 立誓
          target: 遮天老叟
          weight: 30
          polarity: -1
          matureWindow: [15, 100]
          hooks:
            - id: 他看过的东西，忘不掉
            - id: 世上从此多了一个最懂你底细的人
        effects:
          - "僭越 -55"
          - "expose.身世 +8"
          - "witness 遮天老叟 身世"
          - "flag 天机·遮一世"

      - text: 「不遮。让天罚来，我在山上等它。」
        karma: none
        effects:
          - "道心 +8"
          - "锋芒 +0.1"
          - "flag 天罚·候劫"

      - text: 杀了他。价目连人，一起埋了。
        karma:
          type: 杀戮
          target: 遮天老叟
          weight: 40
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 杀了递话的，堵不住天听
            - id: 他那份手段随他入了土——你再也买不着
        effects:
          - "业障 +15"
          - "僭越 +10"
          - "堕度 +8"
          - "expose.杀过某人 +8"
          - "flag 天机·灭口"
`,or=`# 幕四 · 日常事件池（元婴期）· evt_a4d_
# 一回合十年。主题：「长生者的账」——
# 凡人故旧成批老死，宗门换了辈分，山河改了道；你还在，账在往后堆。
#
# 设计要点：
# · 时间三张（侍剑白头 / 山下城郭 / 同辈葬尽）写时间感，不写热闹
# · 身份三张（话本 / 请仙帖 / 无名老朽）吃 名望 与 藏拙 两头
# · 修行三张铺化神：神识裂解预警（掉字）→ 百年关抉择 → 故地裂缝收幕一因果
# · 世事三张：流民入山（僭越改河道）/ 借名作恶 / 新朝玉册（儒道·正道分支）
# · 唯一致死钩子在 evt_a4d_liefeng_jiudi「夺回旧物」——按铁律二挂满预警

events:

  # ══════════════════════════════════════════════════════════
  # 时间 · 一：侍剑童子白了头
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_shijian_baitou
    title: 阶前雪
    weight: 50
    act: 4
    once: true
    cond: "tier == 4"
    tags: [日常, 时间, 道心]
    text: |
      这一关闭了三十年。出关那日洞府外落着雪，阶前有人在扫，动作很慢，扫帚每落一下都要缓一缓。
      「老爷出关了。」他回头，须眉全白。
      你认了好一会儿。明尘。拨来侍剑那年他八岁，个子够不着剑架，垫着两块青砖给你擦剑穗。
      练气三层，一辈子就停在那儿。这三十年他没告老，每日扫阶、擦剑、换香，风雪无阻。
      「剑我都上过油了。」他躬身，腰弯得很吃力，「就是手抖，穗子打得不如从前齐整。」
    choices:
      - text: 取一粒延寿丹按进他掌心：「再替我看六十年山门。」
        karma:
          type: 施恩
          target: 侍剑老仆·明尘
          weight: 12
          polarity: 1
          matureWindow: [10, 70]
          hooks:
            - id: 他又扫了六十年阶，走时是笑着的
            - id: 凡身受仙家寿，夜里总梦见有人来对账
        effects: ["功德 +4", "僭越 +4", "道心 +2", "flag 明尘·延寿"]

      - text: 放他归乡养老，俸禄按长老例发到身后
        karma:
          type: 施恩
          target: 侍剑老仆·明尘
          weight: 8
          polarity: 1
          hooks:
            - id: 他在乡下学人含饴弄孙，学得很认真
            - id: 走前他把扫帚立在阶边，立了三次才立稳
        effects: ["功德 +3", "道心 +4", "flag 明尘·归乡"]

      - text: 「嗯。」接过剑，转身进洞府——你已经开始习惯这种事
        karma: none
        effects: ["道心 -3"]

      - text: 准他孙儿接这份差——扫帚传下去，人换一茬
        karma:
          type: 立誓
          target: 侍剑老仆·明尘
          weight: 10
          polarity: 0
          matureWindow: [20, 120]
          hooks:
            - id: 明家三代人守你一座山门，成了宗门的一景
            - id: 守山的人家，早晚被人当成你的软处
        effects: ["道心 +1", "factors.伙伴 +0.03", "flag 侍剑·传代"]

  # ══════════════════════════════════════════════════════════
  # 时间 · 二：山下的集镇成了州城
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_zhencheng_jiujing
    title: 旧井
    weight: 45
    act: 4
    once: true
    cond: "tier == 4"
    tags: [日常, 时间, 人间]
    text: |
      你少年时挑药下山，卖给的是青溪镇西头的济生堂。
      后来大水改道，镇子废了三十年；再后来漕运挪过来，废墟上起了一座州城。
      你落下云头走进去。九纵九横的大街，牌楼三重，人挤着人。济生堂、老槐树、陈家的院子，全没了方位。
      走到城心，脚下忽然一空——青石板中间围着半圈石栏，栏里是一口井。
      井沿上的绳痕你认得。当年全镇就这一口甜水井，你替药铺挑过三年。
      井还在用。一个孩子正趴在栏上，往下面喊自己的名字，听回声。
    choices:
      - text: 在井边坐一个下午，听满城的市声
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "72", scale: 11 }
        onSuccess:
          text: 日头偏西，你把整座城的声音听成了当年那个镇子的。起身时衣摆上落了一层尘，你没有掸。
          effects: ["道心 +7", "flag 旧井·坐过"]
        onFail:
          text: 你想凭井找回济生堂的方位，量了三遍，三遍都落在一座酒楼的灶房里。满城人声忽然离你很远。
          effects: ["道心 -4", "flag 旧井·坐过"]

      - text: 出资修井起亭，碑上不落名姓
        karma:
          type: 施恩
          target: 州城百姓
          weight: 10
          polarity: 1
          hooks:
            - id: 亭子叫「甜水亭」，说书人编了个孝子的故事安上去
            - id: 无名的碑，反倒惹动了有心人来查
        effects: ["功德 +6", "factors.法宝 -0.03", "道心 +3"]

      - text: 不进城。在云头看一眼，走了。
        karma: none
        effects: ["道心 -2"]

      - text: 「【模拟器】推演此城百年之后。」
        require: "hasSystem('模拟器')"
        karma: none
        effects: ["僭越 +5", "expose.金手指 +3", "悟性 +1", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 时间 · 三：同辈的最后一场葬礼
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_tongbei_zangli
    title: 执绋
    weight: 50
    act: 4
    once: true
    cond: "tier == 4"
    tags: [日常, 时间, 宗门]
    text: |
      讣帖是丹房递上来的，白纸黑字：老账房白湛，坐化于静室，寿一百九十一。
      帖尾一行小字，执笔的弟子大约以为你爱听——「白师叔祖乃门中耆宿，与老祖同年入门」。
      你把帖子看了很久。那一年领皂衣的共四十一人。如今在册的，剩你一个。
      灵堂设在丹房偏殿。来吊的弟子排出去半里，没有一个认得死者年轻时的样子；
      他们排这么长的队，是因为讣帖上有你的名字。
    choices:
      - text: 亲往扶棺。以同门礼，不以长老礼。
        karma: none
        effects: ["道心 +6", "名望 +4", "flag 白湛·扶棺"]

      - text: 灵前守一夜，把四十一个名字挨个写进祭文，烧了
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.4", dc: "76", scale: 11 }
        onSuccess:
          text: 写到天亮，四十一个名字一个没漏。烧祭文时你想，往后这些名字，天底下只在你一个人心里有全份。
          effects: ["道心 +9", "flag 同批·祭尽"]
        onFail:
          text: 写到第十七个，你想不起那人的脸，只记得他冬天爱把手拢在袖子里。祭文烧到一半，你把剩下的名字默念完了。
          effects: ["道心 -2", "flag 同批·祭尽"]

      - text: 遣亲传代祭，赙仪加三倍
        karma: none
        effects: ["名望 +1", "道心 -3"]

      - text: 不去。长生的人，不能每一场都到。
        karma: none
        effects: ["道心 -5", "flag 不再赴葬"]

  # ══════════════════════════════════════════════════════════
  # 身份 · 一：话本里的你
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_huaben_santou
    title: 三头六臂
    weight: 45
    act: 4
    once: true
    cond: "tier == 4 && 名望 > 40"
    tags: [日常, 身份, 名望]
    text: |
      州城最大的书场在说一部新话本，《藏锋老祖平妖传》，已说到第四十回。
      你挑了个角落坐下听。书里的你三头六臂，脚踏双火龙，一剑劈开黑水峡，收了龙女做侍妾，
      夜里还能把星星摘下来给徒弟当灯。满场喝彩。
      荒唐到第四十回，忽然有一段不荒唐——少年时下山岔道，三个人堵住你要「规矩」。
      连风把你袖口药草味吹散那一节，都分毫不差。
      说书的是个瞎眼老人。这一段，他说得比哪一段都慢。
    choices:
      - text: 听完，照市价赏一锭金，走人
        karma: none
        effects: ["气运 +2", "道心 +2", "expose.真实修为 -4"]

      - text: 散场后留下，查这部话本的底本来路
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 60", dc: "80", scale: 12 }
        onSuccess:
          text: 底本是抄的，抄自一册杂记——落款的名字你认得，当年同院扫地的一个师弟，死了六十年了。原来有人一直在记你。
          effects: ["factors.情报 +0.04", "道心 +3", "flag 话本·有源头"]
        onFail:
          text: 书商换了三手，底本的来路断在一场大火里。只有那一段真事，像一根线头，露在外面，捏不住。
          effects: ["道心 -2"]

      - text: 买断书版，命人把荒唐处都改「对」
        karma: none
        effects: ["expose.真实修为 +8", "名望 +6", "道心 -3", "factors.法宝 -0.04"]

      - text: 禁了这部书
        karma:
          type: 夺取
          target: 瞎眼说书人
          weight: 8
          polarity: -1
          hooks:
            - id: 禁书的抄本翻着倍地卖
            - id: 老人从此改说前朝旧事，说到你那段就咳嗽
        effects: ["名望 -4", "expose.真实修为 +5", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 身份 · 二：跨州的请仙帖
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_qingxian_tie
    title: 请仙帖
    weight: 45
    act: 4
    once: true
    cond: "tier == 4"
    tags: [日常, 身份, 势力]
    text: |
      七州万宝盟的请帖用的是金丝楠木匣，抬匣的是两位金丹供奉。
      开匣，帖上言辞极恭：三年后万宝大会开于云陵州，七州商路半数系于此会。前次大会被魔修劫了场，
      死了四位金丹，盟中脸面扫地。此番恳请你赴会坐镇——不必出手，只需你在。
      报酬列在次页：养魂玉一方，凝神髓三钱，另加十年供奉。
      抬匣的供奉伏在地上，补了一句：「老祖坐着喝盏茶，七州的刀就都在鞘里。」
    choices:
      - text: 应下。去坐着喝那盏茶。
        karma:
          type: 立誓
          target: 万宝盟
          weight: 18
          polarity: 0
          matureWindow: [10, 80]
          hooks:
            - id: 七州商路记你的香火，行商供你的长生牌
            - id: 你在哪儿，哪儿就成了魔修最想炸的场子
        effects: ["名望 +15", "锋芒 +0.08", "factors.法宝 +0.1", "expose.真实修为 +5", "flag 万宝会·坐镇"]

      - text: 「【徒·石生】让我徒弟去。他该见见世面了。」
        require: "flag('徒·石生')"
        karma: none
        effects: ["factors.伙伴 +0.05", "名望 +5", "flag 石生·历练"]

      - text: 帖子原匣退回：「山门不出租。」
        karma: none
        effects: ["锋芒 -0.05", "名望 -3", "道心 +3"]

      - text: 抬价——凝神髓三钱改三两，一钱不少
        karma: none
        check: { actor: "名望 + effectiveTier * 20", dc: "150", scale: 12 }
        onSuccess:
          text: 盟里连夜回帖：三两，另附赔笑的一车灵茶。你要的不是药，是让七州知道你的价不由他们定。
          effects: ["神魂 +2", "名望 +5", "锋芒 +0.05", "flag 万宝会·坐镇"]
        onFail:
          text: 回帖迟了一个月，措辞依旧恭敬，坐镇的名字换成了别州一位元婴。你省了一趟远行，也少了一方养魂玉。
          effects: ["名望 -6", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 身份 · 三：无名老朽（藏拙线）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_xiaobei_wuming
    title: 无名老朽
    weight: 45
    act: 4
    once: true
    cond: "tier == 4 && 藏拙 > 0.5"
    tags: [日常, 身份, 藏拙]
    text: |
      你穿着布袍在山门外茶棚喝茶。棚外来了一行人，为首的少年金丹初成，背一口红鞘长剑，
      是近年名头最响的剑道天骄，来下战书的——指名要战「藏锋老祖」。
      他等得不耐烦，一眼看见你，把一块灵石丢在你桌上：
      「老丈，替我进去通传。」
      随行的门客嗤笑出声：「让这等朽木看山门，这一宗的老祖，只怕也就那么回事。」
      灵石在粗瓷碗边转了两圈，停了。茶还热。
    choices:
      - text: 收了灵石，慢慢起身：「小老儿这就去替仙长通传。」
        karma: none
        effects: ["道心 +3", "锋芒 -0.03", "flag 茶棚·通传"]

      - text: 「老朽年轻时也学过两手。仙长既等得无聊，先过我这关如何？」
        karma: none
        check: { actor: "effectiveTier * 60", dc: "120", scale: 14 }
        onCritSuccess:
          text: 他拔剑到一半，剑就出不了鞘了——你两根手指搭在鞘口。满棚的茶客里，只有他一个人看清了你做过什么。他把战书当场吃了。
          effects: ["名望 +20", "expose.真实修为 +15", "锋芒 +0.1", "flag 茶棚一指"]
        onSuccess:
          text: 三招。第三招你拿茶碗底磕了一下他的剑脊，剑鸣半晌不止。少年脸白了，躬身到底：「敢问老先生名讳。」你把灵石还他：「山高路滑，回去罢。」
          effects: ["名望 +10", "expose.真实修为 +8", "flag 茶棚退天骄"]
        onFail:
          text: 你收力收得太狠，反被他一剑挑飞了斗笠。门客哄堂大笑。少年倒是皱了皱眉——只有他觉出那一剑落空落得蹊跷。
          effects: ["道心 -3", "锋芒 -0.02"]

      - text: 拾起灵石，躬身谢赏，替他把马也牵了
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "78", scale: 11 }
        onSuccess:
          text: 你牵着马走在头里，听身后一路的哄笑，心湖没起一丝纹。荣辱这一关,你是很多年前过的，今日不过复核一遍。
          effects: ["道心 +8", "锋芒 -0.05"]
        onFail:
          text: 夜里你摊开手，那块灵石不知何时已被捏成了粉。粉末从指缝里漏下去，你看了很久。
          effects: ["道心 -4"]

      - text: 「【独孤离】识海里一声冷笑：『竖子。借你的手一用。』」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +5"
          - "expose.残魂 +8"
          - "expose.真实修为 +10"
          - "名望 +15"
          - "锋芒 +0.06"

  # ══════════════════════════════════════════════════════════
  # 修行 · 一：神识掉字（化神瓶颈征兆）
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_shishi_diaozi
    title: 掉字
    weight: 55
    act: 4
    once: true
    cond: "tier == 4 && sublevel > 0.45"
    tags: [日常, 修炼, 心魔]
    text: |
      元婴稳固之后，你的神识一念可覆百里，山中鸟兽草木皆在观照之内。
      这一日行功内视，你看见识海边缘起了纹——像大旱的河滩，一块一块，往里裂。
      裂开的地方不疼，只是空。你试着回想，才发觉先掉的都是最旧的：
      娘唤你乳名的声调，想不起来了；入门头一年的那场雪，只剩「下过」两个字。
      翻遍藏经阁，只在一册化神前辈的手记残页上找到一行：「神欲合道，先蜕人形。蜕之不尽者，裂。」
      裂到哪一层算「尽」，手记没有写。写手记的人，也没能写完。
    choices:
      - text: 回外门旧居，取当年的镰刀、皂衣、旧碗——以旧物锚神
        karma: none
        effects: ["道心 +6", "神魂 +1", "flag 锚神·旧物"]

      - text: 由它裂。该掉的都是拖累。
        karma: none
        effects: ["sublevel +0.06", "道心 -6", "flag 神识·任蜕"]

      - text: 闭阁十年，把历代化神的手记残篇逐字校勘
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.5", dc: "95", scale: 12 }
        onSuccess:
          text: 十年校出一部《蜕神考》。历代裂解而亡的化神共录十一人，十一人临关前，都刚刚了断过一桩「舍不得」。你把这一条抄在案头。
          effects: ["悟性 +2", "神魂 +1", "flag 化神·有谱"]
        onFail:
          text: 残篇彼此矛盾，越校越乱。十年过去，你只确认了一件事：走到这一步的人，没有一个肯把话写全。
          effects: ["factors.状态 -0.05", "道心 -2"]

      - text: 「【独孤离】前辈，神识裂解……你可蜕过？」
        require: "hasSoul('独孤离')"
        karma: none
        effects: ["soul.独孤离.favor +5", "expose.残魂 +2", "悟性 +1", "flag 化神·有谱"]

  # ══════════════════════════════════════════════════════════
  # 修行 · 二：百年关的抉择
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_bainian_guan
    title: 百年关
    weight: 50
    act: 4
    once: true
    cond: "tier == 4 && sublevel > 0.6"
    tags: [日常, 修炼, 抉择]
    text: |
      化神隔着一层窗纸。按历代的老规矩，元婴至此当闭死关，一关百年，纸破人出，纸不破人不出。
      你在洞府门口站了一夜，算这一百年的账：
      徒弟会从金丹修到瓶颈，等不到你一句指点；山下的州城要换四五个年号；
      认得你的凡人会死绝，认得你的修士会老一辈。你出关那天，山还是这座山，山下已经不是那个山下。
      死关的门槛就在脚边，一步而已。
    choices:
      - text: 闭。百年之后再算人间的账。
        karma: none
        effects:
          - "sublevel +0.22"
          - "道心 +4"
          - "factors.伙伴 -0.08"
          - "factors.道侣 -0.04"
          - "名望 -10"
          - "flag 百年死关"

      - text: 「【道侣·沈青梧】同关。她的丹炉支在外间，隔墙听火。」
        require: "flag('道侣·沈青梧')"
        karma: none
        effects:
          - "sublevel +0.16"
          - "factors.道侣 +0.08"
          - "道心 +3"
          - "flag 百年同关"

      - text: 折中——十年一开关，每次出关只办三件事
        karma: none
        effects: ["sublevel +0.08", "道心 +2", "flag 十年一出"]

      - text: 不闭。化神要在人间化，关在门里蜕出来的不知是什么。
        karma: none
        effects: ["道心 +6", "锋芒 +0.03", "flag 红尘炼神"]

  # ══════════════════════════════════════════════════════════
  # 修行 · 三：故地重游——裂缝里的脚印
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_liefeng_jiudi
    title: 裂缝里的脚印
    weight: 50
    act: 4
    once: true
    cond: "tier == 4 && flag('已入裂缝')"
    tags: [日常, 机缘, 因果]
    text: |
      你回后山去看那道裂缝。禁制早成了摆设，腐叶换了不知多少层。
      侧身下去——石室又沉了半人深，石台斜着。当年你只取走一样，剩下的，如今一样也不在了。
      压枯叶的位置只余一圈印子，石缝里的寒气也散了。
      壁上多了几排新凿的攀爬点，又小又浅，是手小力弱的人凿的，凿了不止一次。
      洞外乱草里，你拾到一块外门腰牌：丁字七房，柳安。
      你想起很多年前，也有一个少年，替内门师兄采药，一脚踩空在这里。
    choices:
      - text: 把腰牌埋回草里，抹掉他进出的所有痕迹
        karma:
          type: 施恩
          target: 柳安
          weight: 15
          polarity: 1
          matureWindow: [30, 150]
          hooks:
            - id: 多年后一位新贵登门，还你一晚没人知道的人情
            - id: 你替他瞒住的，未必是一颗好心
        effects: ["功德 +5", "道心 +4", "flag 裂缝·有后来人"]

      - text: 结一道观照在洞口，看看这个柳安是什么人
        karma: none
        check: { actor: "talent.神魂 + factors.情报 * 50", dc: "88", scale: 12 }
        onSuccess:
          text: 半月后他又来了，进洞前先朝四下拜了三拜。你隔着观照看他把得来的东西藏进怀里，又把洞口的草恢复原样——手脚干净，心思也干净。
          effects: ["factors.情报 +0.04", "道心 +2", "flag 裂缝·盯着柳安"]
        onFail:
          text: 他再没来过。机缘这东西比兽还警觉，见过一次光，就换地方了。
          effects: ["道心 -2"]

      - text: 东西讨回来。此地机缘因你而起，还轮不到别人。
        karma:
          type: 夺取
          target: 柳安
          weight: 30
          polarity: -1
          matureWindow: [20, 120]
          hooks:
            - id: 少年含恨投魔，专修克你之道
              lethal: true
              foreshadow:
                - { at: -30, evt: "北境魔道出了个年轻人，路数眼熟，专挑各家福地下手" }
                - { at: -10, evt: "有人假扮杂役回山，抄走了丁字七房的旧名册" }
                - { at: -1, evt: "案头多了一封信：「当年洞里的东西，我来取回。」", window: true }
            - id: 无主之物，本就归有力者
        effects: ["堕度 +6", "业障 +8", "道心 -6", "flag 裂缝·夺回旧物"]

      - text: 一掌塌了这条裂缝。机缘祸福，到你为止。
        karma: none
        effects: ["道心 -2", "僭越 +2", "flag 裂缝·已封"]

  # ══════════════════════════════════════════════════════════
  # 世事 · 一：天灾流民
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_liumin_koushan
    title: 舆图上的水
    weight: 45
    act: 4
    cooldown: 4
    cond: "tier == 4"
    tags: [日常, 人间, 道德]
    text: |
      江州大水，连着三年。官仓见了底，流民顺着官道往高处走，走到你山门外，结起了半里长的窝棚。
      知客弟子来报时声音发紧：粗数四千口，每日抬出去的席卷子，十几副。
      窝棚里没人敢喊。他们不求仙法，只在山门望得见的地方待着——凡人的想法很简单：
      仙山脚下，总不至于饿死人。
      宗门例会议了两个时辰，议出四个字：仙凡有别。
      散会后你登高看了一眼。舆图上那条改道的河，像一根勒进江州的绳。
    choices:
      - text: 开外门山场设粥厂，愿留的编为山下佃户
        karma:
          type: 救助
          target: 江州流民
          weight: 25
          polarity: 1
          matureWindow: [10, 80]
          hooks:
            - id: 三十年后山下多出一座镇子，家家灶后供一块无字牌
            - id: 四千口人进山，混进来的不止是饿肚子的
        effects: ["功德 +15", "名望 +8", "道心 +3", "flag 山下·活人镇"]

      - text: 择灵根童子三十人收入外门，余者发粮三月，遣散
        karma:
          type: 施恩
          target: 江州流民
          weight: 12
          polarity: 1
          hooks:
            - id: 三十个孩子里，日后出了一个真种子
            - id: 被挑剩的人记住的不是粮，是挑
        effects: ["功德 +6", "名望 +2", "道心 -2"]

      - text: 闭山。仙凡有别，这四个字没说错。
        karma: none
        effects: ["道心 -4", "名望 -6"]

      - text: 夜里出手，把上游改道的河搬回故道
        karma:
          type: 救助
          target: 江州万民
          weight: 40
          polarity: 1
          matureWindow: [20, 150]
          hooks:
            - id: 江州人不知谢谁，把上游那座山叫成了「挪山」
            - id: 河道是天道账上的一笔。你动了它的账。
        effects:
          - "功德 +25"
          - "僭越 +18"
          - "名望 +12"
          - "expose.真实修为 +8"
          - "flag 移河·还道"

  # ══════════════════════════════════════════════════════════
  # 世事 · 二：借你名号的人
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_jieming_hao
    title: 借来的名号
    weight: 50
    act: 4
    once: true
    cond: "tier == 4 && 名望 > 50"
    tags: [日常, 江湖, 名望]
    text: |
      邻州的信到了第七封你才知道——前六封，各家都没敢递。
      有人自称「藏锋老祖座下行走」，打你的旗号收「护山钱」，三年吞了两座坊市。
      上月赤云观没交，满门十七口，一夜之间没了。各家敢怒不敢言：他们怕的不是那杆旗，是旗后头的你。
      递第七封信的是赤云观的小道童，一路磕头上山，额角结着血痂。
      到了山门他却不敢喊冤，跪在雪里发抖——他也怕你。
      「仙长要是……要是当真收护山钱，」他把一只小布包举过头顶，「这是观里剩下的全部。」
    choices:
      - text: 先把孩子扶起来。然后亲自去拿人。
        karma:
          type: 杀戮
          target: 借名魔修
          weight: 20
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 魔修的同门把这笔账记在了簿上
            - id: 那杆旗烧了，名声一寸寸正了回来
        check: { actor: "effectiveTier * 55 + factors.情报 * 40", dc: "220", scale: 13 }
        onSuccess:
          text: 三个月，你顺着钱的去向摸到他的老巢。是个金丹后期的散修魔头，见你真身当场跪了。你让他把三年吞的账吐干净，然后当着两座坊市的面，把旗和人一起烧了。
          effects: ["名望 +15", "功德 +10", "expose.真实修为 +5", "flag 借名者·已诛"]
        onFail:
          text: 他耳目比你想的灵，烧了三处分坛遁走，临走又屠了一处散修寨子——记在你名下。你追到州界，只捡到那杆旗。
          effects: ["名望 -5", "业障 +5", "flag 借名者·在逃"]

      - text: 发讣文昭告七州：此獠冒名，人人得而诛之，首级悬赏万灵石
        karma: none
        effects: ["名望 +4", "factors.法宝 -0.05", "factors.情报 +0.03", "flag 借名者·悬赏"]

      - text: 设局——放风「老祖亲至」，在他下一个目标坐等
        karma:
          type: 欺骗
          target: 借名魔修
          weight: 15
          polarity: -1
          hooks:
            - id: 他栽在自己借的名字里
            - id: 替你设局的坊市，担了三个月的惊
        check: { actor: "talent.悟性 + factors.情报 * 60", dc: "84", scale: 12 }
        onSuccess:
          text: 他果然来了——借着你的名，他不敢不来，不来就是自认冒牌。你在他开口收钱时落了签。满坊市的人看着「老祖」拿下「老祖」，看了一辈子的谈资。
          effects: ["名望 +12", "功德 +6", "factors.情报 +0.05", "flag 借名者·已诛"]
        onFail:
          text: 风声放得太满，他嗅出味道遁了，改换旗号去了北境。你的名字他不敢再用，赤云观的账，却没了着落。
          effects: ["名望 -4", "道心 -3", "flag 借名者·在逃"]

      - text: 不理。脏水泼在百年的名声上，晾一晾就干了。
        karma: none
        effects: ["业障 +10", "名望 -8", "道心 -4"]

  # ══════════════════════════════════════════════════════════
  # 世事 · 三：新朝的玉册
  # ══════════════════════════════════════════════════════════

  - id: evt_a4d_xinchao_yuce
    title: 新朝的玉册
    weight: 45
    act: 4
    once: true
    cond: "tier == 4"
    tags: [日常, 人间, 站队]
    text: |
      山下的大梁朝完了。你在山上看着它开国，如今又看着它收场——前后不过你两次闭关的工夫。
      新朝国号大雍，遣使奉玉册金印上山，请你受「护国真君」之号，许国师之礼，香火万户。
      使团后头缀着个白衣老者，前朝的探花，如今须发皆白，不肯乘轿，一路步行上的山。
      他不求活命，只求你一句话：「新朝逆取，仙长不受——有这一句，天下读书人的脊梁就断不了。」
      玉册摆在左边，老人跪在右边。仙人一句话，山下要死人，也能少死人。
    choices:
      - text: 受册，但削去「护国」二字，只留「山主」——并附一条：永不出山干政
        karma:
          type: 立誓
          target: 大雍朝廷
          weight: 20
          polarity: 0
          matureWindow: [10, 100]
          hooks:
            - id: 国朝的香火按年上山，从不短少
            - id: 国运衰时，头一个想起你的也是他们
        effects: ["名望 +10", "气运 +3", "flag 受册·山主"]

      - text: 玉册原样送回：「山上不认年号。」
        karma: none
        effects: ["道心 +5", "名望 +3", "flag 山上无年号"]

      - text: 「【儒道】随使团下山，见新君——以文脉压国运，讨一道『永不加赋』的铁券」
        require: "path == '儒道'"
        karma:
          type: 立誓
          target: 大雍新君
          weight: 30
          polarity: 1
          matureWindow: [20, 150]
          hooks:
            - id: 铁券挂在太庙，文脉替你记了一笔
            - id: 君王老了会忘，可史官不会，天道也不会
        effects: ["功德 +18", "名望 +15", "僭越 +8", "flag 铁券·永不加赋"]

      - text: 「【正道】发帖各宗，共立『仙凡之界』——修士不受册，王朝不祭仙，两不相欠」
        require: "path == '正道'"
        karma:
          type: 立誓
          target: 正道各宗
          weight: 25
          polarity: 0
          matureWindow: [20, 150]
          hooks:
            - id: 你定的规矩，后世叫它「界碑之约」
            - id: 立规矩的人，最先被规矩来量
        effects: ["名望 +18", "僭越 +6", "锋芒 +0.05", "flag 仙凡界碑"]

      - text: 留老翰林在山中抄书终老，玉册不受也不退，压在藏经阁吃灰
        karma:
          type: 施恩
          target: 前朝翰林
          weight: 10
          polarity: 1
          hooks:
            - id: 他抄了二十年书，最后一册抄的是你的起居注
            - id: 新朝记下了这份不给的面子
        effects: ["道心 +4", "功德 +3", "名望 -4", "flag 山藏遗臣"]
`,sr=`# 幕五 · 主干（化神 → 炼虚合体 → 大乘渡劫）· evt_a5_
# 覆盖：岔路 20（献祭抉择）/ 岔路 21（僭越大清算）/ 岔路 22（渡劫前夜大卡）/
# 神游太虚 / 因果法庭预演 / 无敌之空虚 / 托付宗门 / 天罚使者 / 位面裂隙 /
# 自创功法 / 三灾风火 / 心魔劫 / 止步为一界之主
#
# 设计要点：
# · tier==5 化神一回合 25 年 —— 文本里写足长生者的时间感：故旧成批老死、
#   掌门换代、山河改道
# · 心魔劫按 flag 分支（手上有人命 / 结丹·夺 / 假死脱身），心魔=你自己做过的事
# · 天罚使者为 lethal 因果，三段预警 + 可干预窗口（铁律二）；
#   杀使者的因果挂在 onSuccess 分支上 —— 没杀成不该背这条账
# · 渡劫失败转体系由引擎处理，这里只铺劫前抉择

events:

  # ══════════════════════════════════════════════════════════
  # 化神 一：神游太虚的诱惑（隐藏境界钩子）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_shenyou_taixu
    title: 神游
    weight: 85
    act: 5
    once: true
    cond: "tier == 5"
    tags: [主干, 化神, 机缘]
    text: |
      化神之后，神识可以离开身体了。
      头一回神游，你只敢绕着山门飞一圈。第二回，你去看了看东海。
      第三回，你顺着天地间一道极细的缝往上飘，飘到灵气稀薄处，看见了一扇门。
      门是虚掩的。门缝里透出的光，不是这一界的颜色。
      你的肉身还在洞府里坐着，离这里不知几万里。神识离体越久，越难回去。
    choices:
      - text: 推门进去
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "110", scale: 12 }
        onSuccess:
          text: 门后是一处收拢起来的小天地，灵机古旧，石上的刻痕比这一界的文字还老。你只站了一息就退了出来——但方位，你记死了。
          effects: ["flag 窥入隐境", "originClues +1", "悟性 +2"]
        onFail:
          text: 门缝里有东西看了你一眼。神识炸开一样地疼，你顺着来路仓皇往回坠，回到肉身时七窍都是血。
          effects: ["神魂 -3", "factors.状态 -0.2", "flag 隐境·受创"]
        onCritFail:
          text: 你在门后迷了路。找回肉身用了半年——半年里宗门当你坐化，牌位都刻好了。
          effects: ["神魂 -5", "factors.状态 -0.3", "lifespan -10", "道心 -4"]

      - text: 不进。记下方位，日后肉身亲至。
        karma: none
        effects:
          - "flag 隐境·钤记"
          - "factors.情报 +0.08"
          - "道心 +2"

      - text: 门后来历不明。原路返回，不再神游此处。
        karma: none
        effects:
          - "道心 +6"

      - text: 「【模拟器】先把门后推演一遍。」
        require: "hasSystem('模拟器')"
        karma: none
        effects:
          - "flag 隐境·已推演"
          - "悟性 +1"
          - "僭越 +8"
          - "expose.金手指 +4"

  # ══════════════════════════════════════════════════════════
  # 化神 二：因果法庭预演（旧账化形索命）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_yinguo_fating
    title: 案前无人
    weight: 90
    act: 5
    once: true
    cond: "tier == 5 && unresolvedEvil() > 3"
    tags: [主干, 化神, 因果, 危机]
    text: |
      入定第七日，静室里多出一张案。
      案后没有人。案前跪着一排——都是你认得的。你杀过的、废过的、骗过的，一个一个报名字，报年月，报你当时说过的话。
      没有喊冤的。他们只是把账摊开，等你认。
      你知道这不是真的。这是渡劫之前，天道照例的预演——劫云里那一场，才是正审。
      案上的卷宗，还差最后一册没有翻。
    choices:
      - text: 一桩一桩认下来
        karma: none
        effects:
          - "业障 -20"
          - "道心 +8"
          - "lifespan -5"
          - "flag 因果·认账"

      - text: 以神魂硬撼，把这一场「预演」打散
        karma: none
        check: { actor: "talent.神魂 + effectiveTier * 20", dc: "140", scale: 13 }
        onSuccess:
          text: 案碎了。跪着的人一排排散成灰。静室重归于静——只是你知道，散的是影子，账还在。劫云里，它们会再来一遍。
          effects: ["堕度 +8", "道心 -5", "flag 因果·强压"]
        onFail:
          text: 神魂撞在案上，像撞在山上。你从定中跌出来，口鼻俱血。那张案不见了，最后一册卷宗留在你膝头。
          effects: ["神魂 -5", "factors.状态 -0.3", "道心 -8", "flag 因果·留册"]

      - text: 出关之后，逐件去了——能偿的偿，能赎的赎
        karma:
          type: 立誓
          target: 旧债诸主
          weight: 30
          polarity: 0
          matureWindow: [10, 80]
          hooks:
            - id: 偿了七成，天道记档
            - id: 有一笔债，主人不肯收
        effects:
          - "道心 +5"
          - "功德 +10"
          - "flag 因果·践偿之誓"

      - text: 「【回收站】旧账也是账。丢进去。」
        require: "hasSystem('回收站')"
        karma: none
        effects:
          - "业障 -30"
          - "僭越 +15"
          - "道心 -6"
          - "expose.金手指 +3"
          - "flag 因果·回收"

  # ══════════════════════════════════════════════════════════
  # 化神 三：一界之内再无敌手的空虚
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_wudi_kongxu
    title: 一百张帖子
    weight: 75
    act: 5
    once: true
    cond: "tier == 5"
    tags: [主干, 化神, 道心]
    text: |
      这一坐，又是二十五年。
      出关那日你翻了翻名帖。当年比过剑的、结过怨的、递过战书的，名字后头多半添了一个「故」字。山下的国换了年号，江改了道，渡口挪了三十里。
      你放出话去，愿与人论道。帖子发出去一百张，回来九十九封告罪书。
      剩下那一封，是个八岁孩童的字，只有两个字——「等我」。
    choices:
      - text: 收起那封信。换个名字下山，做二十年凡人。
        karma: none
        effects:
          - "flag 化名行世"
          - "道心 +10"
          - "锋芒 -0.12"
          - "名望 -10"

      - text: 把「等我」裱起来，挂在洞府里。然后闭关，往上面找对手。
        karma: none
        effects:
          - "sublevel +0.05"
          - "道心 +4"
          - "flag 志在上界"

      - text: 开讲席。打不过你的，教到打得过为止。
        karma:
          type: 传承
          target: 一界修士
          weight: 25
          polarity: 1
          matureWindow: [25, 150]
          hooks:
            - id: 桃李满界，皆执弟子礼
            - id: 教出来的人里，有一个想超过你的方式是杀了你
        effects:
          - "名望 +20"
          - "功德 +12"
          - "锋芒 +0.08"
          - "flag 开山讲道"

      - text: 由它去。酒里一日，山中一年。
        karma: none
        effects:
          - "道心 -8"
          - "factors.状态 -0.1"
          - "flag 空虚沉沦"

      - text: 「【独孤离】老祖，你当年走到这一步，是怎么熬的？」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +8"
          - "道心 +5"
          - "flag 前人同路"

  # ══════════════════════════════════════════════════════════
  # 化神 四：收官——把宗门托付出去
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_tuofu_zongmen
    title: 第六任掌门
    weight: 80
    act: 5
    once: true
    cond: "tier == 5"
    tags: [主干, 化神, 宗门, 传承]
    text: |
      掌门又换了一任。新掌门接印当日照例上山来拜——你数了数，这是你见过的第六任。
      他跪在洞府外回话，声音压得很低。宗门上下都清楚，真正镇着这座山的不是掌门印，是你。
      可你要往上走了。炼虚一关，一闭关就是几十上百年。
      这座山，不能一直挂在一个闭关之人的名字底下。身后事，得趁走之前排好。
    choices:
      - text: 「叫石生来。这座山，往后他看着。」
        require: "flag('徒·石生')"
        karma:
          type: 传承
          target: 石生
          weight: 30
          polarity: 0
          matureWindow: [25, 120]
          hooks:
            - id: 他把宗门守成了你的样子
            - id: 他担不住的那一天，你正在关中
        effects:
          - "flag 石生掌门"
          - "factors.伙伴 +0.08"
          - "道心 +5"

      - text: 立下规制——供奉不干政，长老议事定夺，你的名字从名册上划去
        karma:
          type: 施恩
          target: 宗门
          weight: 20
          polarity: 1
          matureWindow: [20, 100]
          hooks:
            - id: 规制传了十几代，成了祖训
            - id: 规制挡得住人，挡不住世道
        effects:
          - "flag 托付宗门"
          - "功德 +8"
          - "名望 +10"
          - "锋芒 -0.06"

      - text: 什么也不留。抽身而去，山高水长。
        karma: none
        effects:
          - "flag 云游"
          - "道心 +3"
          - "名望 -8"
          - "锋芒 -0.1"

      - text: 谁也不托。以化神之威亲领宗门，闭关也攥着印。
        karma: none
        effects:
          - "flag 亲掌宗门"
          - "名望 +10"
          - "锋芒 +0.15"
          - "僭越 +5"
          - "道心 -3"

  # ══════════════════════════════════════════════════════════
  # 岔路 20 · 炼虚合体 一：献祭抉择
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_xianji_jueze
    title: 三样抵押
    weight: 95
    act: 5
    once: true
    cond: "tier == 6"
    tags: [主干, 合体, 岔路]
    text: |
      合体关前，天地把价码明明白白摆了出来。
      炼虚是把自己炼空，合体是拿空掉的地方去合天地——天地不白给，要收一样抵押。
      神识里那杆秤只给你看三样东西：一截寿数，一段记忆，一片道心。
      「择其一。」那声音不带情绪，像在报账。
      秤就在那里。你放什么上去，什么就再也拿不回来。
    choices:
      - text: 献寿元。一百年，拿去。
        karma: none
        effects:
          - "lifespan -100"
          - "sublevel +0.2"
          - "道心 +4"
          - "flag 献祭·寿元"

      - text: 献记忆。从最旧的开始拿。
        karma: none
        effects:
          - "悟性 -10"
          - "sublevel +0.2"
          - "flag 献祭·记忆"

      - text: 献道。把最执的那一念割下来。
        karma: none
        effects:
          - "道心 -20"
          - "sublevel +0.25"
          - "悟性 +5"
          - "flag 献祭·道"

      - text: 不献。停在炼虚，等一个不用抵押的法子。
        karma: none
        effects:
          - "sublevel -0.05"
          - "道心 +8"
          - "flag 不肯献祭"

      - text: 「【掠夺】我不出。拿别人的抵。」
        require: "hasSystem('掠夺')"
        karma:
          type: 夺取
          target: 坐忘峰散修
          weight: 45
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 夺来的道行，天道记的是你的名
            - id: 那人没死，废在半山，一坐三十年
        effects:
          - "sublevel +0.2"
          - "堕度 +20"
          - "业障 +25"
          - "僭越 +15"
          - "flag 献祭·夺人"

  # ══════════════════════════════════════════════════════════
  # 炼虚合体 二：天罚使者上门（lethal · 铁律二三段预警）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_tianfa_shizhe
    title: 无面的使者
    weight: 100
    act: 5
    once: true
    cond: "tier == 6 && 僭越 > 120"
    tags: [主干, 合体, 危机, 天罚]
    text: |
      来的不是人。
      一道雷光在山门外站定，凝成人形。五官是没有的，开口却字字清楚——
      「检得僭越逾限。窃天机、借伪力、乱次序，条目在册。」
      它报了一遍你的账，年月分毫不差，连你自己都忘了的那几笔也在。
      「限期自处。逾期，执行。」
      说完它就立在那里。不走，也不动，像一段等着回执的公文。
    choices:
      - text: 「条目既然在册——来试试，能不能执行。」
        karma: none
        check: { actor: "effectiveTier * 60 + factors.功法 * 50", dc: "430", scale: 15 }
        onSuccess:
          text: 你把那段雷光一寸一寸拆散了。它到消散都没有表情，最后一个音节还是那两个字——「记档」。
          karma:
            type: 杀戮
            target: 天罚使者
            weight: 60
            polarity: -1
            matureWindow: [10, 60]
            hooks:
              - id: 天罚升格·抹除令
                lethal: true
                foreshadow:
                  - { at: -15, evt: "天上多了一颗不该有的星，正对你的山头" }
                  - { at: -6, evt: "界内落雷连年，十次有九次绕着你的洞府转" }
                  - { at: -1, evt: "第二尊使者立在山门外——这一次，它带了名册", window: true }
              - id: 规则暂时静默
          effects: ["僭越 +40", "锋芒 +0.15", "flag 抹杀天罚使者"]
        onFail:
          text: 雷光过处，你半边身子焦黑。它没有追击——执行之外的杀伤，不在它的条目里。它只是把「抗拒」二字添进了册子。
          effects: ["factors.状态 -0.4", "lifespan -20", "僭越 +20", "flag 天罚·抗拒在册"]

      - text: 领罚。自削三成修为，当着它的面。
        karma: none
        effects:
          - "sublevel -0.3"
          - "僭越 -80"
          - "道心 +6"
          - "flag 领受天罚"

      - text: 立誓收敛，以历年功德抵扣
        karma:
          type: 立誓
          target: 天道
          weight: 35
          polarity: 0
          matureWindow: [10, 60]
          hooks:
            - id: 誓约录档，违者双倍
            - id: 功德销了大半，账面干净了
        effects:
          - "僭越 -50"
          - "功德 -40"
          - "flag 天道誓约"

      - text: 「【苟道】收锋、敛息、装死。程序找不到不动的东西。」
        require: "hasSystem('苟道')"
        karma: none
        effects:
          - "sublevel -0.1"
          - "锋芒 -0.2"
          - "僭越 -30"
          - "名望 -20"
          - "flag 苟道·蛰伏"

  # ══════════════════════════════════════════════════════════
  # 炼虚合体 三：位面裂隙初窥（上位面 · 飞升伏笔）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_weimian_liexi
    title: 天裂一线
    weight: 85
    act: 5
    once: true
    cond: "tier == 6"
    tags: [主干, 合体, 机缘, 飞升伏笔]
    text: |
      破境余波未散的那一夜，天顶裂了一线。
      只一线，像宣纸被人裁开。缝后头不是星空——灵气浓得化成了白色的河，河上有桥，桥那头立着说不清是塔还是碑的东西，大得没有边。
      有钟声顺着缝漏下来，很慢，一共响了三下。
      然后缝就开始合了，合得很快，像有人在那头拉拢帘子。
      典籍里管缝后头叫上界。谁也没去过。
    choices:
      - text: 趁缝未合，以神识探进去一瞬
        karma: none
        check: { actor: "talent.神魂 + talent.悟性 * 0.5", dc: "115", scale: 12 }
        onSuccess:
          text: 一瞬便够了。桥头有界碑，碑上的字你不认识，却看懂了——那是「门」的意思。上界有门，门就开得进。你退回来时，钟声正好敲完第三下。
          effects: ["flag 窥见上界", "originClues +2", "悟性 +3"]
        onFail:
          text: 神识刚探进去，桥那头有什么东西转过头来。你被一股力量拂了回来，像蛛网上的虫被指头弹开。裂缝合拢前，那道目光在你身上停了一息。
          effects: ["神魂 -4", "僭越 +10", "flag 被上界注视"]

      - text: 不探。记下裂隙开合的方位与时刻。
        karma: none
        effects:
          - "flag 裂隙·钤记"
          - "factors.情报 +0.08"
          - "悟性 +1"

      - text: 退开三百里。该你上去的时候，自然会上去。
        karma: none
        effects:
          - "道心 +6"

      - text: 「【独孤离】老祖——上面，就是你要去的地方？」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +10"
          - "道心 +2"
          - "flag 独孤离·望乡"

  # ══════════════════════════════════════════════════════════
  # 炼虚合体 四：自创功法的顿悟契机
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_zichuang_gongfa
    title: 最后一页
    weight: 80
    act: 5
    once: true
    cond: "tier == 6"
    tags: [主干, 合体, 顿悟]
    text: |
      功法练到了最后一页。
      批注是历代祖师添的，越往后越少。最后一页只有一行小字——「此后无路，各凭天资」。
      那天你在山下看了三天河。五百年前它不走这条道，是一场大水把山凿开，它自己拐过来的。
      水没有功法。水只是往低处去，把路走成了道。
      回山时，你掌心一直是烫的。有些东西到了嘴边，只差一个落笔处。
    choices:
      - text: 闭死关。从无字处，写自己的第一页。
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.5", dc: "120", scale: 13 }
        onCritSuccess:
          text: 出关那日，你把旧功法的玉简还回了藏经阁。阁老捧着玉简问后头呢，你说没有后头了——从今往后，是另一部。它还没有名字。
          effects: ["factors.功法 +0.25", "悟性 +3", "名望 +15", "flag 自创功法"]
        onSuccess:
          text: 三十年，成了七篇。第七篇结尾你留了空——不是写不出，是知道自己还没走到。够用了，剩下的路上补。
          effects: ["factors.功法 +0.15", "flag 自创功法"]
        onFail:
          text: 三十年，废稿堆了半间静室。出关那天你把稿全烧了，火光里忽然看明白一件事——你还在用别人的字，写自己的道。
          effects: ["道心 -5", "factors.状态 -0.1", "悟性 +1", "flag 闭关无所得"]
        onCritFail:
          text: 写到第九年，岔了。真气在没有前人验证过的经络里走失，你在关中吐了三年血，靠旧功法把自己缝了回来。
          effects: ["factors.状态 -0.3", "神魂 -3", "道心 -8", "lifespan -15"]

      - text: 不另起炉灶。集百家批注，把旧法补到头。
        karma: none
        effects:
          - "factors.功法 +0.08"
          - "悟性 +1"
          - "flag 旧法补全"

      - text: 「【词条】把『悟』字点满，直接看答案。」
        require: "hasSystem('词条')"
        karma: none
        effects:
          - "factors.功法 +0.18"
          - "僭越 +10"
          - "expose.金手指 +5"
          - "道心 -4"
          - "flag 自创功法·词条"

      - text: 「【苏婆婆】婆婆，丹是怎么从无方子处开方子的？」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.苏婆婆.favor +8"
          - "悟性 +2"
          - "factors.功法 +0.1"
          - "flag 丹剑同源"

  # ══════════════════════════════════════════════════════════
  # 大乘渡劫 一：三灾之风火（战斗判定 · 失败重伤不死）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_sanzai_fenghuo
    title: 风火同至
    weight: 95
    act: 5
    once: true
    cond: "tier >= 7"
    tags: [主干, 渡劫, 三灾, 战斗]
    text: |
      三灾说来就来，还是两个一起。
      火从丹田里自己烧起来——不是丹毒，是业火，烧的是你这一路欠下的。火头刚压住，罡风就到了，从九天上下来，刀子一样往骨缝里钻。
      方圆千里的生灵，你早遣散了。山头烧红了三座。
      这是渡劫前的规矩，躲不掉，只能受。怎么受、受多少，看你自己安排。
    choices:
      - text: 什么都不借。以身当灾，硬受。
        karma: none
        check: { actor: "effectiveTier * 55 + factors.功法 * 45", dc: "430", scale: 14 }
        onCritSuccess:
          text: 业火烧到第七日自己熄了——欠的烧完了，多一分都点不着。罡风削去你一层皮，削出来的那层，风吹不动。
          effects: ["factors.功法 +0.1", "纯度 +5", "道心 +6", "flag 三灾·已过其二"]
        onSuccess:
          text: 火七日，风七日。第十四日夜里你从灰堆里站起来，走了两步，没有倒。
          effects: ["factors.状态 -0.15", "道心 +4", "flag 三灾·已过其二"]
        onFail:
          text: 风灾第三日，你被从半空刮下来，钉在山根上。灾过去了，人剩了半条——经脉碎了三成，好在命是自己的。
          effects: ["factors.状态 -0.45", "lifespan -30", "根骨 -3", "flag 三灾·带伤"]
        onCritFail:
          text: 业火烧穿了丹田一角。你昏死过去之前把自己埋进了寒潭，醒来时潭水煮干了，人还在。只是往后每逢阴雨，丹田那处就烧。
          effects: ["factors.状态 -0.6", "lifespan -60", "神魂 -5", "道心 -6", "flag 三灾·重创"]

      - text: 布九宫阵，以历年法宝分灾
        karma: none
        effects:
          - "factors.法宝 -0.25"
          - "factors.状态 -0.1"
          - "flag 三灾·已过其二"

      - text: 引灾入无人荒界再受——多熬十年，不伤一草一木
        karma: none
        effects:
          - "lifespan -10"
          - "功德 +12"
          - "factors.状态 -0.2"
          - "flag 三灾·已过其二"

      - text: 「【签到】灾眼正中，签到。」
        require: "hasSystem('签到')"
        karma: none
        effects:
          - "factors.法宝 +0.1"
          - "僭越 +12"
          - "expose.金手指 +6"
          - "flag 三灾·已过其二"

  # ══════════════════════════════════════════════════════════
  # 岔路 21 · 大乘渡劫 二：僭越大清算
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_jianyue_qingsuan
    title: 不落的劫云
    weight: 100
    act: 5
    once: true
    cond: "tier >= 7 && 僭越 > 60"
    tags: [主干, 渡劫, 岔路, 清算]
    text: |
      劫云在头顶结了三年，不落。
      你知道它在等什么。这一路你借过的力、窥过的天机、越过的次序，云里一笔一笔都记着。它在等你先给个说法。
      散功，是把借来的一并还了；行善，是拿功德去抵；不还也行——那就劫里见，连本带利。
      三年了。云又压低了一尺。
    choices:
      - text: 散功重修。借来的，连本带利还回去。
        karma: none
        effects:
          - "sublevel =0"
          - "僭越 =0"
          - "道心 +15"
          - "锋芒 -0.2"
          - "flag 散功重修"

      - text: 行大功德——镇魔渊、通水路、开灵济世，用几十年换一笔干净账
        karma:
          type: 施恩
          target: 一界生灵
          weight: 40
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 万家香火，念力护劫
            - id: 名高引谤，有人说你买天
        effects:
          - "功德 +100"
          - "僭越 -60"
          - "lifespan -20"
          - "名望 +30"
          - "flag 大功德·济世"

      - text: 「账我认。利息，劫里算。」——硬抗
        karma: none
        effects:
          - "flag 硬抗天劫"
          - "道心 +8"
          - "锋芒 +0.2"

      - text: 「【回收站】僭越也是『物』。丢进去。」
        require: "hasSystem('回收站')"
        karma: none
        effects:
          - "僭越 -100"
          - "堕度 +15"
          - "道心 -10"
          - "expose.金手指 +8"
          - "flag 僭越·回收"

  # ══════════════════════════════════════════════════════════
  # 大乘渡劫 三：心魔劫（按 flag 分支——心魔=你做过的事）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_xinmo_jie
    title: 用你的脸
    weight: 90
    act: 5
    once: true
    cond: "tier >= 7"
    tags: [主干, 渡劫, 心魔]
    text: |
      静室里，对面坐了一个人，用的是你的脸。
      它不狰狞，也不催促，只是慢条斯理翻一本册子。册子上的字你隔着三步就认得——那是你自己的笔迹。
      「从哪一页开始？」它问。
      心魔不从外面来。它翻的每一页，都是你亲手写下的。
    choices:
      - text: 它翻到了带血的那几页。你坐过去，同它对质每一条人命。
        require: "flag('手上有人命')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "120", scale: 12 }
        onSuccess:
          text: 一条一条过完，天已亮了。你没有辩解，也没有悔到跪下——杀时是什么缘由，认时就是什么缘由。它合上册子，人散了。
          effects: ["道心 +10", "业障 -10", "flag 心魔·已渡"]
        onFail:
          text: 过到第三条，你移开了眼。就这一瞬，它笑了——用你的脸。册子没翻完，它把剩下的几页折了角。劫里，它还会来。
          effects: ["道心 -12", "神魂 -4", "flag 心魔·留痕"]

      - text: 它翻到夺丹那一页，问你「那一炉丹，如今在你丹田里安不安稳」
        require: "flag('结丹·夺')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "120", scale: 12 }
        onSuccess:
          text: 「不安稳。」你说，「夺来的东西，我背着走了一辈子，往后接着背。」它盯了你很久——认账认得这么齐的，它拿不住。
          effects: ["道心 +10", "flag 心魔·已渡"]
        onFail:
          text: 你答了一句「事已至此」。它不追问，也不冷笑，只是提笔，把这四个字端端正正写回了册子里——用你的笔迹。
          effects: ["道心 -12", "神魂 -4", "flag 心魔·留痕"]

      - text: 它翻到你「死」的那一页——那个被烧掉的名字，问你如今活成了谁
        require: "flag('假死脱身')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "120", scale: 12 }
        onSuccess:
          text: 你把两个名字都报了一遍，从生到「死」，从「死」到今日，中间没有一处含糊。「都是我。」它翻不出第三个名字，散了。
          effects: ["道心 +10", "flag 心魔·已渡"]
        onFail:
          text: 报到旧名字的时候，你停了半息。半息就够了——它把那个名字从册子上撕下来，收进了袖子。劫云里，会有人用那个名字叫你。
          effects: ["道心 -12", "神魂 -4", "flag 心魔·留痕"]

      - text: 册子上没有大恶。它翻的是别的——每一次转身、每一次沉默、每一句没说出口的话。
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "95", scale: 12 }
        onSuccess:
          text: 「小账。」翻完最后一页，它有些无趣，「几百年，就攒下这些。」你说，账小，也是账，一笔一笔都认。它散的时候，像是叹了口气。
          effects: ["道心 +8", "flag 心魔·已渡"]
        onFail:
          text: 小账翻久了，比大账更磨人。你在某一页上出了神——那一页上的人，你已经想不起脸了。它把册子留在案上，人先走了。
          effects: ["道心 -8", "flag 心魔·留痕"]

  # ══════════════════════════════════════════════════════════
  # 岔路 22 · 大乘渡劫 四：渡劫前夜（道别大卡）
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_dujie_qianye
    title: 前夜
    weight: 100
    act: 5
    once: true
    cond: "tier >= 7"
    tags: [主干, 渡劫, 岔路, 道别]
    text: |
      钦天监算出的日子，就是明天。
      劫云已经聚齐，压在九霄上，像一座倒扣的山。界内修士能走的都走了，方圆万里空出来给你。
      洞府里灯还亮着。你入门那年亲手栽的松，如今要三人合抱。
      这一夜过去，要么上去，要么什么都不剩。
      还有几个时辰。灯下这点时间，给谁？
    choices:
      - text: 给青梧。两个人对坐，谁也不提明天。
        require: "flag('道侣·沈青梧')"
        karma:
          type: 立誓
          target: 沈青梧
          weight: 30
          polarity: 0
          matureWindow: [1, 30]
          hooks:
            - id: 「回来」两个字，她到天亮只说了这一句
            - id: 劫云底下，有人替你留着一盏灯
        effects:
          - "factors.道侣 +0.1"
          - "道心 +10"
          - "flag 前夜·道侣"

      - text: 给丹阁去一封信。不署名——她看得出笔迹。
        require: "flag('知己·沈青梧')"
        karma: none
        effects:
          - "道心 +6"
          - "flag 前夜·知己"

      - text: 把石生叫来。衣钵、洞府、没了结的账，一样一样交代。
        require: "flag('徒·石生') || flag('石生掌门')"
        karma:
          type: 传承
          target: 石生
          weight: 25
          polarity: 0
          matureWindow: [1, 40]
          hooks:
            - id: 他把你交代的每一样，都办到了
            - id: 交代到最后，他说「师父，我等你回来接着教」
        effects:
          - "factors.伙伴 +0.05"
          - "道心 +6"
          - "flag 前夜·托徒"

      - text: 给袖中故人。温一壶酒，三只杯。
        require: "hasSoul('独孤离') || hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.独孤离.favor +10"
          - "soul.苏婆婆.favor +10"
          - "道心 +6"
          - "flag 前夜·故人"

      - text: 无人可别。吹了灯，去崖顶坐到天亮。
        karma: none
        effects:
          - "道心 +8"
          - "flag 前夜·独坐"

  # ══════════════════════════════════════════════════════════
  # 大乘渡劫 五：最后的诱惑——止步为一界之主
  # ══════════════════════════════════════════════════════════

  - id: evt_a5_jiezhu_youhuo
    title: 阶下之印
    weight: 90
    act: 5
    once: true
    cond: "tier >= 7"
    tags: [主干, 渡劫, 诱惑, 止步]
    text: |
      渡劫前三日，界内来了一场跪请。
      七十二家宗门的掌门跪在山下，为首的捧着一方印——界主之印。上一回有人把它捧出来，是四千年前。
      「尊上若留，一界奉为共主。万载香火，诸天供养。」
      留下，这一界你就是顶。不必赌那场九死一生的劫，也不必去那扇谁都没进过的门。
      印在阶下。劫云在头顶。
    choices:
      - text: 接印。留下，做一界之主。
        karma:
          type: 立誓
          target: 一界生灵
          weight: 30
          polarity: 0
          matureWindow: [50, 300]
          hooks:
            - id: 万载为尊，寿尽为限
            - id: 上面那扇门，从此不会再为你开
        effects:
          - "stepDown"
          - "flag 一界之主"
          - "名望 +50"
          - "锋芒 +0.2"
          - "道心 -5"

      - text: 「印收回去。三日后，山上见分晓。」
        karma: none
        effects:
          - "道心 +10"
          - "flag 决意飞升"

      - text: 「我见过上面。这里不是尽头。」
        require: "flag('窥见上界')"
        karma: none
        effects:
          - "道心 +12"
          - "flag 决意飞升"

      - text: 把印转赠合适的人——这一界该有主，但不该是一个要走的人
        karma:
          type: 施恩
          target: 宗门
          weight: 20
          polarity: 1
          matureWindow: [10, 100]
          hooks:
            - id: 你指的人坐稳了界主之位
            - id: 印是你给的，怨也算在你头上
        effects:
          - "功德 +10"
          - "名望 +10"
          - "flag 界主·让贤"
`,cr=`# 奇遇池 · 「运气好才撞到」的低概率高印象事件
# 前缀 evt_cp_，act 混合 1~3，weight 8~15。
#
# 设计要点：
# · 每张卡一个记忆点：借与赠之别 / 鹤环刻字 / 满筒下下签 / 坛底的时机 /
#   椟才是宝 / 纸人多了一个 / 听棋忘名 / 半张残图原是棋谱
# · 跨卡回响（本文件内自洽，不依赖其他文件）：
#   雨棚问伞(1) → 十里仪仗(3)：借/赠/同行 三种旧情各开专属选项
#   涧边断鹤(1) → 檐上白鹤(2)：系过环的人才看得见环上多出的字
#   下下签(1)   → 断墙讨签人(3)：揣/烧 各有对证；存酒者可开坛请神
#   最后一坛(1) → 开坛(2+)：喝的时机自己挑，卡会一直回来问你
#   半张残图(1) → 隔崖一局(3)：残图对上棋声，才知图是什么
# · 每个 choice 显式声明 karma；掀棺的致死钩子按铁律二挂满预警链

events:

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 雨棚问伞（回响头 → evt_cp_yizhang_shili）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_yupeng_wensan
    title: 雨棚问伞
    weight: 12
    act: 1
    once: true
    cond: "tier == 1 && !flag('雨夜赠伞') && !flag('雨夜借伞') && !flag('雨夜同行')"
    tags: [奇遇, 人情, 伏笔]
    text: |
      山雨说下就下。你钻进道旁的野茶棚，棚里已立着一个白衣人，没带伞。
      他的鞋面干干净净，像是雨追不上他，人却被这场雨拦住了。
      雨越下越大。他看了半晌雨幕，转过身来，看着你手里那把旧竹伞。
      「这位小友，你的伞——借，还是赠？」
      他问得极认真，像这两个字之间隔着一条河。
    choices:
      - text: 「赠你。我淋得起。」
        karma:
          type: 施恩
          target: 茶棚白衣人
          weight: 12
          polarity: 1
          matureWindow: [15, 40]
          hooks:
            - id: 赠者不图报
            - id: 这把伞早晚会回来
        effects: ["flag 雨夜赠伞", "道心 +2", "factors.状态 -0.05"]

      - text: 「借你。他日有缘，原伞奉还。」
        karma:
          type: 立誓
          target: 茶棚白衣人
          weight: 10
          polarity: 0
          matureWindow: [15, 40]
          hooks:
            - id: 有借有还
            - id: 他认的就是这个「借」字
        effects: ["flag 雨夜借伞"]

      - text: 「一把伞打两人。走吧，我送你一程。」
        karma:
          type: 施恩
          target: 茶棚白衣人
          weight: 8
          polarity: 1
          hooks:
            - id: 同过半程雨路
        effects: ["flag 雨夜同行", "道心 +1", "factors.状态 -0.08"]

      - text: 「雨里认生人，不合适。」收伞，背过身去
        karma: none
        effects: ["气运 -1"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 涧边断鹤（回响头 → evt_cp_yanshang_baihe）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_jianbian_duanhe
    title: 涧边断鹤
    weight: 12
    act: 1
    once: true
    cond: "tier == 1 && !flag('救过断鹤')"
    tags: [奇遇, 道德, 因果]
    text: |
      秋涧边，一只白鹤陷在猎户下的绊索里，左腿已经折了，挣得翎羽上全是血。
      见你过来，它不叫也不挣了，就用一只眼看着你——
      那眼神不像鸟，倒像个落了难、又拉不下脸求人的人。
      半里外，猎户的哨音正在唤狗，一声近过一声。
    choices:
      - text: 割断绊索，替它接骨，看它走
        karma:
          type: 救助
          target: 白鹤
          weight: 15
          polarity: 1
          matureWindow: [3, 25]
          hooks:
            - id: 它记得你
            - id: 鹤寿千年，记性比人长
        effects: ["flag 救过断鹤", "功德 +3", "道心 +1"]

      - text: 接好骨，再解下药囊上的铜环系在它足上，做个记认
        karma:
          type: 救助
          target: 白鹤
          weight: 15
          polarity: 1
          matureWindow: [3, 25]
          hooks:
            - id: 环为记，恩有主
        effects: ["flag 救过断鹤", "flag 鹤足系环", "功德 +3"]

      - text: 等猎户来，帮着收网，分几块灵石
        karma:
          type: 夺取
          target: 白鹤
          weight: 12
          polarity: -1
          hooks:
            - id: 仙禽血债
            - id: 鹤群夜唳，绕山三日
        effects: ["业障 +5", "功德 -2", "道心 -2"]

      - text: 野物自有野物的命，绕开走
        karma: none
        effects: ["气运 -1"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 下下签（回响头 → evt_cp_taoqian_ren；卅年因果挂 karma）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_shanshen_qian
    title: 下下签
    weight: 10
    act: 1
    once: true
    cond: "tier == 1"
    tags: [奇遇, 因果, 伏笔]
    text: |
      赶夜路遇雨，你借宿在一座破山神庙。神像半边脸剥落了，看不出是在笑还是在哭。
      后半夜，供桌上的签筒无风自倒，滚出一支签，停在你脚边。
      签上墨色新得像刚写的：「今日檐下客，卅年债上人。」
      背面一方朱印——「下下」。
      你把签筒扶起来倒了倒：满筒五十支，支支都是这一句。
    choices:
      - text: 把签揣进袖袋。债也好，缘也好，先记着。
        karma:
          type: 立誓
          target: 破庙山神
          weight: 14
          polarity: 0
          matureWindow: [25, 40]
          hooks:
            - id: 签文应验
            - id: 庙塌了，签还在
        effects: ["flag 揣着下下签"]

      - text: 就着长明灯，把签烧了
        karma:
          type: 毁诺
          target: 破庙山神
          weight: 10
          polarity: -1
          hooks:
            - id: 烧得掉签，烧不掉数
            - id: 灰烬也记得日子
        effects: ["flag 烧了下下签", "道心 +2"]

      - text: 把签插回筒里，压上三文香火钱
        karma:
          type: 施恩
          target: 破庙山神
          weight: 8
          polarity: 1
          hooks:
            - id: 香火有主
            - id: 他记得你的三文钱
        effects: ["flag 还了下下签", "功德 +2"]

      - text: 「【签到】此庙，签到。」
        require: "hasSystem('签到')"
        karma: none
        check: { actor: "talent.神魂", dc: "50", scale: 10 }
        onSuccess:
          text: 签到成了。掌心多了一枚温热的丹丸——只是那尊剥落的神像，好像朝你偏了偏头。
          effects: ["factors.状态 +0.05", "僭越 +2", "expose.金手指 +2"]
        onFail:
          text: 系统顿了半晌，破天荒回了两个字：「不宜。」今夜签到无功。
          effects: ["僭越 +1", "flag 系统避谶"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 最后一坛（回响头 → evt_cp_kaitan / evt_cp_taoqian_ren）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_zuihou_yitan
    title: 最后一坛
    weight: 10
    act: 1
    once: true
    cond: "tier == 1 && !flag('窖藏百年酒') && !flag('百年酒已开')"
    tags: [奇遇, 人情, 机缘]
    text: |
      散集时分，一个老汉守着独轮车，车上只剩一坛酒。泥封百年，苔痕结了壳，
      封上四个刻字：「留与有缘」。
      「我祖父给一位仙长酿的。仙长走前说，埋着，替他等个喝的日子。」
      老汉搓着手，眼圈是红的，「家父昨夜没了，等钱下葬。这坛……我不能白送，也不敢贱卖。」
      「祖父说，喝它的日子得自己挑。我挑不了。你来。」
    choices:
      - text: 倾囊买下，原坛不动，窖着等一个日子
        karma:
          type: 施恩
          target: 卖酒老汉
          weight: 8
          polarity: 1
          hooks:
            - id: 葬礼上他朝山的方向磕了个头
            - id: 仙长那句话，有了下文
        effects: ["flag 窖藏百年酒", "道心 +1"]

      - text: 当场拍开泥封，请满集的人喝
        karma:
          type: 施恩
          target: 集上众人
          weight: 10
          polarity: 1
          hooks:
            - id: 喝过你酒的人记得你
            - id: 「拍酒的仙师」有了名号
        effects: ["flag 百年酒已开", "名望 +8", "气运 +3", "道心 +2"]

      - text: 趁他急钱下葬，把价压到三成
        karma:
          type: 夺取
          target: 卖酒老汉
          weight: 10
          polarity: -1
          hooks:
            - id: 乘人之危
            - id: 这坛酒，喝着发苦
        effects: ["flag 窖藏百年酒", "道心 -3", "业障 +3"]

      - text: 不买。指他去镇东当铺，那家朝奉不欺生
        karma: none
        effects: ["功德 +1"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 半张残图（回响头 → evt_cp_geya_yiju）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_banzhang_cantu
    title: 半张残图
    weight: 10
    act: 1
    once: true
    cond: "tier == 1 && !flag('半张残图')"
    tags: [奇遇, 机缘, 伏笔]
    text: |
      镇口酒旗下，一个醉汉一把拽住你的袖子，力气大得不像凡人。
      他往你怀里塞了半张油浸的图，边缘焦黑，像从火里抢出来的。
      「另一半……另一半在会下棋的人手里……」
      他哭了一声，又笑了一声，一头栽回酒桌。
      次日你再去寻，酒家把抹布一甩：昨夜打烊前，没来过这么个人。
    choices:
      - text: 把图收进怀里最贴身的那层
        karma:
          type: 传承
          target: 醉酒之人
          weight: 10
          polarity: 0
          matureWindow: [5, 35]
          hooks:
            - id: 另一半自会寻来
            - id: 图随债走
        effects: ["flag 半张残图"]

      - text: 扶他进店醒酒，问他来历
        karma:
          type: 施恩
          target: 醉酒之人
          weight: 8
          polarity: 1
          hooks:
            - id: 他清醒的那半刻记得你
        check: { actor: "talent.悟性", dc: "60", scale: 10 }
        onSuccess:
          text: |
            他伏在桌上抬了下眼，那一瞬眼底清明如镜：「棋，别替我下完。」
            说完又醉了。天亮前人不见了，图压在酒钱底下，留给了你。
          effects: ["flag 半张残图", "flag 醉汉的嘱托", "道心 +1"]
        onFail:
          text: 他睡死过去，鼾声震得酒碗跳。天亮前人没了，桌上只剩那半张图，和一股酒气。
          effects: ["flag 半张残图", "功德 +1"]

      - text: 按图寻去
        karma: none
        check: { actor: "talent.悟性 + 气运 * 0.3", dc: "66", scale: 11 }
        onSuccess:
          text: |
            三日后，你站在一面刻满棋格的石壁前。壁上一局残棋，缺了半边——
            缺的那半，正是你手里这半张图上没有的。你看不懂，但你记下了。
          effects: ["flag 半张残图", "flag 见过棋壁", "factors.状态 -0.05"]
        onFail:
          text: 你在山里空转了七日。图上墨迹被汗浸开，越看越不像路，倒像谁的掌纹。
          effects: ["flag 半张残图", "factors.状态 -0.1", "道心 -1"]

      - text: 塞回他怀里，把袖子抽出来
        karma: none
        effects: ["气运 -1"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 檐上白鹤（回响尾 ← 涧边断鹤）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_yanshang_baihe
    title: 檐上白鹤
    weight: 15
    act: 2
    once: true
    cond: "tier == 2 && flag('救过断鹤')"
    tags: [奇遇, 因果, 机缘]
    text: |
      清晨推门，檐角落下一只白鹤，左腿微跛。
      是它。见你出来，它不飞，反倒慢条斯理理了理翎毛，像是等了有一阵了。
      你走近，它衔住你的衣角，往山外的方向拽，拽两下，回头看你一眼。
    choices:
      - text: 跟它走
        karma: none
        check: { actor: "气运 + talent.悟性 * 0.5", dc: "55", scale: 10 }
        onCritSuccess:
          text: |
            它领你到一处背阴崖缝——一株雪芝须发皆全，长足了年份。
            你采芝时，它就站在崖口替你望风，姿态老练得像干过许多回。
          effects: ["factors.状态 +0.12", "气运 +2", "悟性 +1", "flag 鹤衔仙缘"]
        onSuccess:
          text: 它领你到一处崖缝，里头一株雪芝正当年份。回头想谢，鹤已经乘风去了。
          effects: ["factors.状态 +0.12", "气运 +2", "flag 鹤衔仙缘"]
        onFail:
          text: |
            走到半途起了大雾，鹤长唳一声，飞得没了影。你骂了句多此一举，原路折返——
            回来才听说，你原本要走的那条山道，晌午塌了半坡。
          effects: ["气运 +2", "道心 +1"]

      - text: 捉住它的腿，看那枚铜环
        require: "flag('鹤足系环')"
        karma: none
        effects: ["flag 环上有字", "originClues +1", "factors.情报 +0.05"]

      - text: 备下清水鱼干，留它在山中住下
        karma:
          type: 立誓
          target: 白鹤
          weight: 8
          polarity: 0
          hooks:
            - id: 鹤寿千年，陪得过你
            - id: 它总替你先看一眼路
        effects: ["factors.灵宠 +0.12", "flag 白鹤为伴"]

      - text: 挥袖驱它。仙禽野性，沾上是因果。
        karma: none
        effects: ["道心 -1"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 开坛（回响尾 ← 最后一坛；时机自己挑，卡会一直回来问）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_kaitan
    title: 开坛
    weight: 12
    act: 2
    cooldown: 10
    cond: "tier >= 2 && flag('窖藏百年酒')"
    tags: [奇遇, 时间, 抉择]
    text: |
      又是一个像样的日子——雪初霁，你刚迈过一道坎。
      行囊最底下那坛酒，泥封的裂纹比去年又深了一线，香气一年比一年往外冒，
      像在替埋它的人问：就今日？
      老汉当年转述的话你还记得：喝它的日子，得自己挑。
    choices:
      - text: 就是今夜。开坛。
        karma: none
        effects:
          - "unflag 窖藏百年酒"
          - "flag 百年酒已开"
          - "道心 +4"
          - "factors.状态 +0.1"
          - "悟性 +1"

      - text: 还不是时候。再窖十年。
        karma: none
        effects: ["道心 +1"]

      - text: 抱去，送给此刻你最想敬的那个人
        karma:
          type: 施恩
          target: 你最想敬的人
          weight: 12
          polarity: 1
          hooks:
            - id: 这坛酒替你说了没说出口的话
            - id: 来日他回你一坛
        effects:
          - "unflag 窖藏百年酒"
          - "flag 百年酒赠人"
          - "名望 +2"
          - "factors.伙伴 +0.06"

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 珠与椟
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_zhu_yu_du
    title: 珠与椟
    weight: 10
    act: 2
    once: true
    cond: "tier == 2"
    tags: [奇遇, 机缘, 眼力]
    text: |
      坊市散摊的角落，一个咳血的行商守着最后一件货：
      一枚鸽卵大的明珠，盛在一只乌木旧椟里。整卖，不拆。
      围拢的人都盯着珠，出价一浪高过一浪，嫌那只旧椟碍事。
      行商眼皮耷拉着，谁喊价都不应——
      只在有人伸手去碰那只椟时，才抬一下眼。
    choices:
      - text: 整套买下，转手把珠让给出高价的，独留椟
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 40", dc: "62", scale: 11 }
        onCritSuccess:
          text: |
            灯下细看，椟壁的木纹并非木纹——是缩刻的一篇吐纳古诀，笔画细过发丝。
            篇末一行小字：「珠养眼，椟养人。识者得之。」
          effects: ["factors.功法 +0.12", "悟性 +1", "flag 椟中古诀"]
        onSuccess:
          text: 灯下细看，椟壁木纹里藏着一篇缩刻的古诀。怪不得行商只在人碰椟时抬眼。
          effects: ["factors.功法 +0.1", "flag 椟中古诀"]
        onFail:
          text: 你看了三夜，椟就是椟，木头就是木头。珠让得急了，价也贱了三成。
          effects: ["道心 -2", "名望 -1"]

      - text: 加价单买那枚珠，椟还他
        karma: none
        effects: ["flag 买珠还椟", "气运 -2"]

      - text: 「【面板】鉴之。」
        require: "hasSystem('面板')"
        karma: none
        check: { actor: "talent.神魂", dc: "45", scale: 10 }
        onSuccess:
          text: |
            面板扫过——珠：蚌泪，凡品。椟：「不可鉴」。
            你活这么大，头一回见面板吐出这三个字。买椟。
          effects: ["flag 得了不可鉴之椟", "factors.法宝 +0.1", "expose.金手指 +2", "僭越 +2"]
        onFail:
          text: 面板扫过明珠，报了个「凡品」；扫到椟上，字迹乱了一瞬，什么也没报出来。
          effects: ["flag 面板失灵过", "僭越 +1"]

      - text: 不沾。转身走开。
        karma: none
        effects: []

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 逆风的白事（纸人抬棺；掀棺的致死钩子按铁律二挂预警链）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_zhiren_taiguan
    title: 逆风的白事
    weight: 8
    act: 2
    once: true
    cond: "tier == 2"
    tags: [奇遇, 诡异, 风险]
    text: |
      黄昏山道，逆着风来了一支出殡的队伍。没有锣，没有哭声，纸钱撒在风里不落地。
      八个抬棺人步子分毫不差，齐得不像人——走近了看，果然不是：
      白纸糊的脸，额心一点朱砂。
      队尾跟着个披麻的小童，是活的。他看见你，冲你轻轻摇了摇头。
    choices:
      - text: 退到道旁，垂目让行
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.2", dc: "45", scale: 10 }
        onSuccess:
          text: 队伍擦身过去，纸衣窸窣。你数了数——来时八个纸人。过去时，是九个。
          effects: ["flag 数过纸人", "道心 -2", "factors.情报 +0.02"]
        onFail:
          text: 你垂着眼，没敢细看。夜里回想，总觉得那支队伍，比来时长了一截。
          effects: ["道心 -1"]

      - text: 拦住小童，问这是谁家的丧
        karma: none
        check: { actor: "talent.神魂", dc: "60", scale: 11 }
        onSuccess:
          text: |
            小童不说话，从麻衣里摸出一张黄纸路引递你。名字被墨涂了，只余一个姓——
            与你同姓。他追上队伍前，又回头看了你一眼。
          effects: ["flag 同姓路引", "originClues +1", "道心 -3"]
        onFail:
          text: 你开口的一瞬，八个纸人同时转头。小童把你往道旁一推，队伍走远了才松手。
          effects: ["道心 -4", "factors.状态 -0.05"]

      - text: 掀开棺盖
        karma:
          type: 夺取
          target: 阴丧之主
          weight: 18
          polarity: -1
          matureWindow: [8, 30]
          hooks:
            - id: 纸人索命
              lethal: true
              foreshadow:
                - { at: -8, evt: "夜里窗纸上多了个人形的影，天亮就没了" }
                - { at: -3, evt: "扎纸铺的伙计寻上门，笑着问你的生辰八字" }
                - { at: -1, evt: "你屋外落了一夜纸灰，像烧尽了八个人", window: true }
            - id: 空棺无主，不了了之
        check: { actor: "talent.神魂 + 气运 * 0.3", dc: "68", scale: 12 }
        onSuccess:
          text: |
            棺里没有尸首。只有一件叠得整整齐齐的寿衣，
            里衬用红线绣着一个字：「等」。
          effects: ["业障 +6", "僭越 +3", "originClues +1"]
        onFail:
          text: |
            棺里躺着个人，穿着你没见过的衣裳。
            那张脸——是你的脸。只是老了三十岁。
          effects: ["道心 -6", "业障 +6", "flag 棺中同脸", "originClues +1"]

      - text: 缀在队尾，远远跟着
        karma: none
        check: { actor: "talent.神魂", dc: "55", scale: 10 }
        onSuccess:
          text: |
            乱葬岗上，队伍连人带棺走进一座新坟，没入土里，像水渗进沙。
            坟前纸幡上写着下葬的年号——是三十年后的年号。
          effects: ["flag 见过阴丧", "道心 -3", "factors.情报 +0.04"]
        onFail:
          text: 山道转了个弯，队伍没了。风把一片纸钱贴在你脸上，冰的。
          effects: ["道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 十里仪仗（回响尾 ← 雨棚问伞：借/赠/同行各开专属选项）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_yizhang_shili
    title: 十里仪仗
    weight: 15
    act: 3
    once: true
    cond: "tier == 3 && (flag('雨夜赠伞') || flag('雨夜借伞') || flag('雨夜同行'))"
    tags: [奇遇, 因果, 人情]
    text: |
      官道十里，仪仗自北而来，幡上绣着星纹——天机阁。道旁修士纷纷退避躬身，
      有人压着嗓子说，阁主三十年不出阁，算尽天下人。
      舆驾行到你面前，却停了。纱帘之内，一个苍老的声音：
      「山雨，野棚，一把旧竹伞。小友，别来无恙。」
      你想起那个雨夜没带伞的白衣人。他说过，那晚的雨，他没算到。
    choices:
      - text: 上前一步——「当年说好，有借有还。」
        require: "flag('雨夜借伞')"
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.3", dc: "50", scale: 10 }
        onSuccess:
          text: |
            帘内递出一把伞。还是原来的伞面，伞骨却换过了，触手冰凉如剑。
            「借字既落，老朽记了三十年。伞骨是老朽亲手换的——往后的雨，它替你挡。」
          effects: ["factors.法宝 +0.15", "flag 得还伞", "名望 +5"]
        onFail:
          text: |
            话出口你才觉唐突。帘内静了静，还是递出伞来，多了一句：
            「小友的胆气，比那晚大了。」
          effects: ["factors.法宝 +0.12", "flag 得还伞"]

      - text: 「伞既是赠的，前辈不欠我。」
        require: "flag('雨夜赠伞')"
        karma: none
        check: { actor: "道心", dc: "55", scale: 10 }
        onSuccess:
          text: |
            「不欠？」帘内笑了。「赠字最贵。老朽算人一世，只有没算到的雨记得住。」
            他留给你一句话。只有一句，却正是你此刻卡住的那一关。
          effects: ["悟性 +3", "道心 +3", "flag 天机一言"]
        onFail:
          text: |
            帘内良久无声。仪仗起行，一片伞形的影子却罩着你走了十里——
            那十里落着雨，你身上没沾一滴。
          effects: ["气运 +5"]

      - text: 哼起那支不成调的曲子——那晚他一路哼的
        require: "flag('雨夜同行')"
        karma: none
        check: { actor: "talent.神魂", dc: "50", scale: 10 }
        onSuccess:
          text: |
            满道修士骇然——竟有人敢对着阁主的仪仗哼小曲。
            帘内的人却接着哼完了后半段，走调走得一模一样。
            「同路人。」他说。仪仗过尽，你袖中多了一枚星纹小令。
          effects: ["flag 天机故人", "factors.情报 +0.1", "名望 +8"]
        onFail:
          text: 你哼错了两个转调。帘内咳了一声：「难听。」——却把帘子掀开了一角。
          effects: ["flag 天机故人", "factors.情报 +0.08"]

      - text: 随众人退避，垂首而立，装作不识
        karma: none
        effects: ["锋芒 -0.02", "道心 +1"]

      - text: 拦驾。你倒要看看舆中人的脸。
        karma: none
        check: { actor: "道心 + 名望 * 0.1", dc: "72", scale: 12 }
        onSuccess:
          text: |
            护法的剑没落下——帘内抬了抬手：「让他看。」
            你看清了那张脸。平平无奇，正是那晚茶棚里，被一场雨拦住的脸。
          effects: ["名望 +5", "锋芒 +0.05"]
        onFail:
          text: |
            两柄剑架上你的脖子。帘内淡淡一句：「不曾见过。」
            仪仗过尽，你在道旁站了一炷香，背上的汗才落下去。
          effects: ["名望 -5", "道心 -3"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 断墙上的讨签人（回响尾 ← 下下签 / 最后一坛）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_taoqian_ren
    title: 断墙上的讨签人
    weight: 15
    act: 3
    once: true
    cond: "tier == 3 && seen('evt_cp_shanshen_qian')"
    tags: [奇遇, 因果, 岁月]
    text: |
      风雪里你又路过那座山神庙——只剩半堵断墙了。
      墙上坐着个披蓑的老人，蓑衣上积雪半寸，身前雪地里插着一排烧尽的香脚。
      「三十年了。」他不抬头，「那年在这儿躲过雨、抽过签的，今日都该到了。」
      「到的，只有你一个。」
    choices:
      - text: 从袖袋最深处，摸出那支签，递还给他
        require: "flag('揣着下下签')"
        karma: none
        check: { actor: "道心", dc: "40", scale: 10 }
        onSuccess:
          text: |
            他接签的手在抖。「下下签，抽的是老朽自己的命数——庙塌香断，神随庙灭。
            你替我揣了三十年。」签在他掌中化作一点火，落进香脚里。灭了的香，直了。
          effects: ["unflag 揣着下下签", "flag 山神偿签", "气运 +6", "功德 +5"]
        onFail:
          text: |
            签被岁月磨得只剩「下下」二字。他捧着看了很久很久。
            「够了。」他说，「字在不在的，不要紧。你来了。」
          effects: ["unflag 揣着下下签", "flag 山神偿签", "气运 +4", "功德 +3"]

      - text: 「签，我当夜就烧了。」
        require: "flag('烧了下下签')"
        karma: none
        check: { actor: "道心", dc: "55", scale: 10 }
        onSuccess:
          text: |
            「烧了，人却来了。」老人笑出声，蓑上的雪簌簌往下落。
            「可见签是假的，人是真的。这三十年，老朽讨的不是签。」
          effects: ["道心 +5", "功德 +2"]
        onFail:
          text: 老人叹了口气：「烧签的人多，肯回来看一眼的少。也罢，也罢。」
          effects: ["道心 +2"]

      - text: 把行囊最底下那坛百年酒，当着他的面拍开
        require: "flag('窖藏百年酒')"
        karma:
          type: 施恩
          target: 破庙山神
          weight: 15
          polarity: 1
          hooks:
            - id: 一坛酒换一脉山运
            - id: 醉过的神，不忘人
        effects:
          - "unflag 窖藏百年酒"
          - "flag 百年酒已开"
          - "气运 +8"
          - "道心 +3"
          - "功德 +3"

      - text: 在断墙下坐下，陪他到雪停
        karma:
          type: 施恩
          target: 破庙山神
          weight: 10
          polarity: 1
          hooks:
            - id: 香火断了，人情没断
        effects: ["道心 +3", "功德 +2"]

      - text: 疯叫花罢了。赶路。
        karma: none
        effects: ["气运 -2"]

  # ══════════════════════════════════════════════════════════
  # 奇遇 · 隔崖一局（回响尾 ← 半张残图）
  # ══════════════════════════════════════════════════════════

  - id: evt_cp_geya_yiju
    title: 隔崖一局
    weight: 8
    act: 3
    once: true
    cond: "tier == 3"
    tags: [奇遇, 悟道, 机缘]
    text: |
      采药到绝顶，两崖夹出一线天。对崖云雾深处，传来落子声——
      笃。隔很久，又一声。慢得像檐下滴水。
      一个声音说：「你这一手，人间要多落三年雪。」另一个不答，又落一子。
      你看不见人。可云气确实随着每一子变阵，聚了又散，散了又聚。
    choices:
      - text: 寻块石头坐下，听完这一局
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.5", dc: "65", scale: 12 }
        onCritSuccess:
          text: |
            终局那一子，你竟先一步听了出来。云开雾散，对崖空无一人，
            只余两堆棋子摆着残局。下山路上有人唤你，你应不上来——
            自己的名字，你想了一整天才想起来。可那一局，你记了一辈子。
          effects: ["悟性 +3", "神魂 +1", "flag 听过崖上棋", "flag 忘过名字"]
        onSuccess:
          text: |
            你听懂了小半局。下山时有人唤你，你怔怔应不上来——
            自己的名字，你想了一天才想起来。
          effects: ["悟性 +2", "flag 听过崖上棋", "flag 忘过名字"]
        onFail:
          text: |
            中盘一子落下如雷。你醒来时暮色四合，满耳空空，只记得住山风。
            名字倒是没忘——可你总觉得，忘掉的那些更要紧。
          effects: ["神魂 -1", "factors.状态 -0.08", "flag 忘过名字"]

      - text: 摸出怀里那半张残图，就着棋声对照
        require: "flag('半张残图')"
        karma: none
        check: { actor: "talent.悟性", dc: "55", scale: 10 }
        onSuccess:
          text: |
            图上蜿蜒的「河道」根本不是河道——是这一局的棋路。
            醉汉塞给你的，是半张棋谱。此刻对崖正下着的，是它的另一半。
          effects: ["悟性 +2", "factors.功法 +0.08", "flag 残图原是棋谱"]
        onFail:
          text: 你对到一半，云气忽然全停了。再抬头，崖上已无落子声，图上的墨迹烫得指尖发麻。
          effects: ["悟性 +1", "道心 -1"]

      - text: 朗声问——「敢问上仙，这一手黑棋何解？」
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "70", scale: 12 }
        onSuccess:
          text: |
            静了半晌，对崖传来一句：「棋无解，人有解。」
            再无声息。这六个字，你嚼了半年。
          effects: ["道心 +4", "悟性 +1"]
        onFail:
          text: 你话音未落，云气一散，两崖只剩风声。一局仙弈，被你一句话问散了。
          effects: ["道心 -3", "flag 问散仙弈"]

      - text: 山高风冷，赶路要紧
        karma: none
        effects: ["道心 +2"]
`,lr=`# 暴露与危机事件池 · evt_ex_
# 覆盖：被目击 / 敲诈链（试探→开价→余波）/ 天机阁推演与天罚预警 /
# 秘密败露大事件（假死脱身）/ 藏拙被轻视的打脸卡
#
# 设计要点：
# · 敲诈链三张卡靠 knowerCount / seen() / flag 串联，不依赖固定顺序抽取
# · silence 灭口一律配 lethal 因果与三段预警（铁律二）
# · fakeDeath 的代价在选项文案里写死：人脉、身份、财产一并烧掉

events:

  # ══════════════════════════════════════════════════════════
  # 被目击 · 金手指
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_chaifang_guang
    title: 柴房的光
    weight: 60
    act: 1
    once: true
    cond: "hasAnySystem() && tier >= 1 && chance(0.35)"
    tags: [危机, 暴露]
    text: |
      后半夜你在柴房里唤出那片光纹，一条条核着这个月的进项。
      门轴响了一声。
      同门张三站在门口，抱着一捆柴，眼睛落在你指间还没散尽的光上。
      「……师兄。」他把柴放下，声音压得很低，「你手上那个，是什么？」
      柴房外没有别人。他站在那里看了多久，你不知道。
    choices:
      - text: 「你看岔了。」把光收进袖中
        karma:
          type: 欺骗
          target: 同门张三
          weight: 12
          polarity: -1
          hooks:
            - id: 他记住了这一晚
            - id: 他真信了
        check: { actor: "talent.神魂 + 藏拙 * 20", dc: "60", scale: 10 }
        onSuccess:
          text: 他盯着你的袖口看了两息，弯腰把柴捡起来。「……天太黑，是我眼花。」
          effects: ["expose.金手指 +3"]
        onFail:
          text: 他没接话，退出去时把门带得很轻。第二天，饭堂里有人看你的眼神不对。
          effects: ["witness 同门张三 金手指", "expose.金手指 +5"]
        onCritFail:
          text: 他转身就走，走得太快，柴都忘了拿。你追到门口，人已经下了坡。
          effects: ["witness 同门张三 金手指", "expose.金手指 +8", "flag 张三惊走"]

      - text: 「进来。关门。」塞给他一袋灵石
        karma:
          type: 立誓
          target: 同门张三
          weight: 18
          polarity: 0
          hooks:
            - id: 拿人手短
            - id: 灵石花完的那一天
        effects:
          - "witness 同门张三 金手指"
          - "factors.法宝 -0.06"
          - "factors.情报 +0.04"

      - text: 一道迷魂术拂过他的眉心
        karma:
          type: 夺取
          target: 同门张三
          weight: 10
          polarity: -1
          hooks:
            - id: 迷魂有隙，他梦里见过那道光
            - id: 干净利落
        effects: ["eraseMemory 同门张三", "僭越 +4", "道心 -3"]

      - text: 手按在柴刀上，又松开
        karma: none
        effects:
          - "witness 同门张三 金手指"
          - "道心 -2"
          - "堕度 +2"
          - "flag 对张三起过杀心"

  # ══════════════════════════════════════════════════════════
  # 被目击 · 真实修为
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_mingce_duibushang
    title: 名册对不上
    weight: 70
    act: 1
    once: true
    cond: "expose.真实修为 > 30 && tier >= 1"
    tags: [危机, 暴露]
    text: |
      戒律堂的罗嵩长老把你叫了去。案上摊着外门名册，你那一页折了角。
      「入门六年，练气四层。」他念完，抬眼看你，
      「上月巡山，狼群夜袭，有弟子看见你出手。四层，接不住那一爪。」
      香炉里的烟直直往上走。他不催，就这么等着。
    choices:
      - text: 「弟子那晚连吞了两颗聚气散，拼死侥幸。」
        karma:
          type: 欺骗
          target: 罗嵩
          weight: 14
          polarity: -1
          hooks:
            - id: 他去翻了丹房的账
            - id: 他懒得深究
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "64", scale: 10 }
        onSuccess:
          text: 他把名册合上。「下不为例。」你退出门槛时，后背全湿了。
          effects: ["expose.真实修为 -8", "锋芒 -0.05"]
        onFail:
          text: 「丹房的领用簿上，没有你的名字。」他没再问，提笔在你那页写了什么。
          effects: ["expose.真实修为 +10", "flag 罗嵩起疑"]

      - text: 承认修为，只瞒来历
        karma:
          type: 施恩
          target: 罗嵩
          weight: 15
          polarity: 1
          hooks:
            - id: 他替你把名册压了下来
            - id: 他早晚要你办一件事
        effects:
          - "expose.真实修为 +15"
          - "名望 +10"
          - "锋芒 +0.05"
          - "flag 罗嵩看重"

      - text: 一言不发，任他去猜
        karma: none
        effects: ["道心 +3", "expose.真实修为 +5", "flag 罗嵩起疑"]

      - text: 「【面板】先看看他到底知道多少。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["factors.情报 +0.08", "expose.金手指 +3", "僭越 +3"]

  # ══════════════════════════════════════════════════════════
  # 敲诈链 · 一：试探
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_fantang_banju
    title: 饭堂里的半句话
    weight: 55
    act: 1
    once: true
    cond: "knowerCount > 0"
    tags: [危机, 敲诈]
    text: |
      饭堂人最多的时辰，陈九端着碗坐到你对面。
      他是杂役房的老人，谁的事都知道一点。
      「前些日子的事，」他扒了口饭，不看你，「知道的人不多。」
      他把「不多」两个字嚼得很慢。
      邻桌在吵月钱，没人往这边看。他吃完了也不走，拿筷子敲着碗沿。
    choices:
      - text: 「什么事？」装傻到底
        karma: none
        check: { actor: "talent.悟性 + 藏拙 * 20", dc: "58", scale: 10 }
        onSuccess:
          text: 他盯了你半晌，嘟囔一句「许是我听岔了」，端碗走了。走得不甘心。
          effects: ["锋芒 -0.02"]
        onFail:
          text: 他笑了，往前凑了凑。「装。行——那我把话说明白。」
          goto: evt_ex_chenjiu_kaijia

      - text: 「你想要什么。」
        karma: none
        effects: ["flag 向陈九露了怯"]

      - text: 拉他去山下喝酒，探他的底
        karma:
          type: 施恩
          target: 陈九
          weight: 10
          polarity: 1
          hooks:
            - id: 酒后吐了真言
            - id: 他只当你怕了
        effects: ["factors.情报 +0.06", "factors.法宝 -0.03"]

      - text: 捏碎他手里的碗
        karma:
          type: 受辱
          target: 陈九
          weight: 12
          polarity: -1
          hooks:
            - id: 他咽不下这口气
            - id: 他真被吓住了
        effects: ["锋芒 +0.05", "expose.真实修为 +5", "名望 +3"]

  # ══════════════════════════════════════════════════════════
  # 敲诈链 · 二：开价
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_chenjiu_kaijia
    title: 开价
    weight: 65
    act: 1
    once: true
    cond: "knowerCount > 0 && seen('evt_ex_fantang_banju')"
    tags: [危机, 敲诈]
    text: |
      陈九把价钱摆在桌上：每月十块下品灵石，他替你把嘴缝上。
      「别嫌贵。执法堂的规矩你是知道的。我这价，比宗规便宜。」
      他说话时手一直拢在袖子里，人坐在门边——早想好了退路。
      「也别想别的路子。我要是三天没去杂役房点卯，自会有人把话捎出去。」
      真假难辨。
    choices:
      - text: 给钱
        karma:
          type: 受辱
          target: 陈九
          weight: 16
          polarity: -1
          hooks:
            - id: 胃口一月大过一月
            - id: 拿钱办事，嘴倒真严
        effects: ["factors.法宝 -0.1", "道心 -4", "flag 被陈九拿捏"]

      - text: 灭口
        karma:
          type: 杀戮
          target: 陈九
          weight: 45
          polarity: -1
          matureWindow: [20, 100]
          hooks:
            - id: 那句「有人捎话」是真的
              lethal: true
              foreshadow:
                - { at: -12, evt: "杂役房来了个总打听你的新面孔" }
                - { at: -5, evt: "你的旧居被人翻过，翻得很仔细" }
                - { at: -1, evt: "山下茶棚有人出重金买你的行踪", window: true }
            - id: 那句话只是吓你的
        effects:
          - "silence 陈九"
          - "堕度 +10"
          - "道心 -6"
          - "expose.杀过某人 +20"
          - "flag 灭口之后"

      - text: 一道迷魂术，让他忘了自己知道什么
        karma:
          type: 夺取
          target: 陈九
          weight: 12
          polarity: -1
          hooks:
            - id: 迷魂不净，他隔三差五头疼
            - id: 他忘得干干净净
        effects: ["eraseMemory 陈九", "僭越 +6", "道心 -3"]

      - text: 拉他入伙，把秘密变成同谋
        karma:
          type: 立誓
          target: 陈九
          weight: 20
          polarity: 0
          hooks:
            - id: 同条船，同条命
            - id: 他转头把把柄换了别人的把柄
        effects:
          - "factors.情报 +0.08"
          - "factors.法宝 -0.05"
          - "flag 与陈九同谋"

      - text: 把事情原原本本讲给他，赌他讲义气
        karma: none
        check: { actor: "道心 + 名望 * 0.2", dc: "66", scale: 12 }
        onSuccess:
          text: 他听完沉默了很久，伸手把桌上的价钱抹了。「……这事，到我为止。」
          effects: ["道心 +8", "功德 +5"]
          karma:
            type: 立誓
            target: 陈九
            weight: 18
            polarity: 1
            hooks:
              - id: 他真把这事咽进了棺材
              - id: 他敬你，但敬不过灵石
        onFail:
          text: 他听完笑出了声。「义气值几块灵石？」价钱翻了一倍。
          effects: ["道心 -5", "factors.法宝 -0.12", "flag 被陈九拿捏"]
          karma:
            type: 受辱
            target: 陈九
            weight: 14
            polarity: -1
            hooks:
              - id: 得寸进尺
              - id: 见好就收

  # ══════════════════════════════════════════════════════════
  # 敲诈链 · 三：灭口余波
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_diqitian
    title: 第七天
    weight: 90
    act: 1
    once: true
    cond: "flag('灭口之后')"
    tags: [危机, 敲诈]
    text: |
      陈九失踪第七天，执法堂来杂役房问话。
      他果然留了后手——同乡的一个货郎，每月替他捎信回家，这个月的信断了。
      货郎守在山门外，见人就问。
      执法堂挨个铺位翻检，从陈九褥子底下翻出一本账，
      上面记着几笔没名目的进项，日子对得很齐。
      问话快轮到你了。
    choices:
      - text: 抢在问话前把那页账调包
        karma: none
        check: { actor: "talent.神魂 + factors.情报 * 60", dc: "68", scale: 12 }
        onSuccess:
          text: 那一页在你袖中化成了灰。执法堂查了三天，不了了之。
          effects: ["expose.杀过某人 -10", "道心 -3"]
        onFail:
          text: 你伸手的那一刻，执法堂的人回了头。
          effects: ["expose.杀过某人 +15", "僭越 +3", "flag 执法堂盯上你"]

      - text: 照实答一半，含糊一半
        karma:
          type: 欺骗
          target: 执法堂
          weight: 10
          polarity: -1
          hooks:
            - id: 供词被翻出破绽
            - id: 例行公事，无人细究
        effects: ["expose.杀过某人 +5", "道心 -2"]

      - text: 主动请缨，帮着寻人
        karma:
          type: 欺骗
          target: 货郎
          weight: 14
          polarity: -1
          hooks:
            - id: 他信了你，逢人夸你仁义
            - id: 他总觉得你眼神不对
        effects: ["名望 +5", "道心 -5", "expose.杀过某人 +3"]

      - text: 「【独孤离】前辈，杀了人，如何了局？」
        require: "hasSoul('独孤离')"
        karma: none
        effects:
          - "soul.独孤离.favor +4"
          - "expose.杀过某人 -6"
          - "expose.残魂 +3"
          - "堕度 +4"

  # ══════════════════════════════════════════════════════════
  # 天机阁 · 推演
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_shengchen_bazi
    title: 生辰八字
    weight: 50
    act: 2
    cooldown: 30
    cond: "僭越 > 50"
    tags: [危机, 天机]
    text: |
      山下客栈的伙计收了你的赏钱，说了件怪事。
      前夜有个蒙面人包下顶层，铺了一张丈宽的星图，烧了三炷香，天亮才走。
      伙计收拾屋子时，捡到一张烧剩的纸角。
      你接过来看。上面是一列小字——某年某月某日某时生。
      是你的生辰八字，一个字不差。纸角上还有半枚朱印，像一只闭着的眼睛。
    choices:
      - text: 烧了纸角，换个地方落脚
        karma: none
        effects: ["锋芒 -0.05", "气运 -2", "flag 避过推演"]

      - text: 顺着蒙面人的来路往回查
        karma: none
        check: { actor: "factors.情报 * 100 + talent.悟性 * 0.5", dc: "62", scale: 11 }
        onSuccess:
          text: |
            三天后你摸到那人落脚的道观。他们管自己叫「天机阁」。
            账上记着这一卦的卦金——出钱人的名字，被墨涂了。
          effects: ["factors.情报 +0.1", "originClues +1", "flag 知晓天机阁"]
        onFail:
          text: 线索断在渡口。回头的路上，你总觉得有人在看你的背影。
          effects: ["僭越 +4", "expose.金手指 +4"]

      - text: 守在客栈，杀下一个来推演的
        karma:
          type: 杀戮
          target: 天机阁
          weight: 40
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 阁中察觉卦师未归
              lethal: true
              foreshadow:
                - { at: -10, evt: "坊市新开的卦摊，只给你一个人免卦金" }
                - { at: -4, evt: "有人沿街打听你常走哪条路" }
                - { at: -1, evt: "你的房门上被人用朱砂点了一点", window: true }
            - id: 死的只是外围散人，无人在意
        effects:
          - "业障 +12"
          - "僭越 +8"
          - "expose.杀过某人 +10"
          - "堕度 +6"

      - text: 「【苟道】收摊。从今日起，做个死人。」
        require: "hasSystem('苟道')"
        karma: none
        effects:
          - "僭越 -15"
          - "锋芒 -0.1"
          - "expose.金手指 -5"
          - "sublevel -0.02"

  # ══════════════════════════════════════════════════════════
  # 天机阁 · 天罚预警
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_sangeyue
    title: 三个月
    weight: 110
    act: 2
    once: true
    cond: "僭越 > 150"
    tags: [危机, 天机, 主干]
    text: |
      那人白衣，站在山门外的雪里，不进来。
      知客弟子请了三次，他不动，只朝山上报了一个数。
      后来你才知道，那是你这些年逆天而行的次数——一次不多，一次不少。
      「上头把你的卷宗调出来了。」他隔着山门看你，像看一页纸，
      「三个月。要么你自己停下来，要么，我们替你停。」
      说完他就走了。雪地上没有脚印。
    choices:
      - text: 停下来。就修到这里。
        require: "tier >= 3"
        karma: none
        effects:
          - "stepDown"
          - "僭越 -60"
          - "道心 +6"
          - "锋芒 -0.2"
          - "flag 主动止步"

      - text: 收敛行迹，献出手里最逆天的一件东西
        karma:
          type: 立誓
          target: 天罚使者
          weight: 20
          polarity: 0
          hooks:
            - id: 卷宗上记了一笔「尚可教」
            - id: 案底还在，只是往后压了压
        effects: ["factors.法宝 -0.15", "僭越 -40", "锋芒 -0.1"]

      - text: 满口应下，转身照旧行事
        karma:
          type: 欺骗
          target: 天罚使者
          weight: 50
          polarity: -1
          matureWindow: [3, 15]
          hooks:
            - id: 三月之期一到，复核即至
              lethal: true
              foreshadow:
                - { at: -3, evt: "你的护身之物无故裂了一道缝" }
                - { at: -2, evt: "夜里有星子坠向你的方位，坠到一半熄了" }
                - { at: -1, evt: "山门外的雪地上，又立了一道白影", window: true }
            - id: 上头改了主意，缓期再查
        effects: ["flag 欺瞒天罚"]

      - text: 「那就来。」
        karma: none
        effects:
          - "名望 +20"
          - "僭越 +25"
          - "道心 +10"
          - "锋芒 +0.2"
          - "flag 与天为敌"

  # ══════════════════════════════════════════════════════════
  # 秘密败露 · 大殿对质
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_dadian_duizhi
    title: 大殿对质
    weight: 130
    act: 2
    once: true
    cond: "maxExpose > 85"
    tags: [危机, 暴露, 主干]
    text: |
      钟响九声，议事大殿的门开着，里外站满了人。
      你的事被一条条摆出来：某年某月，你在哪里，做了什么。人证物证，一样样过。
      说到第三条，殿里就没人说话了。
      掌门坐在上首，不看那些证物，只看你。
      「都说完了？」他等人群静下来，「好。现在，你自己说。」
      所有人都在等你开口。退路，一条也没有了。
    choices:
      - text: 咬碎齿间那枚替身符——假死脱身。人脉、身份、财产，一并烧在这具「尸首」里。
        require: "tier >= 3"
        karma: none
        effects: ["fakeDeath", "factors.法宝 -0.2", "道心 -6"]

      - text: 「都是真的。」站着受。
        karma: none
        effects: ["名望 +15", "僭越 +10", "道心 +8", "flag 秘密大白"]

      - text: 反咬检举的长老一口，把水搅浑
        karma:
          type: 欺骗
          target: 检举长老
          weight: 30
          polarity: -1
          hooks:
            - id: 构陷被拆穿，罪加一等
            - id: 水搅浑了，无人敢定案
        check: { actor: "talent.悟性 + factors.情报 * 80", dc: "72", scale: 12 }
        onSuccess:
          text: 你抛出他私吞贡品的账。殿上炸了锅，你的事反倒没人顾得上问了。
          effects: ["expose.金手指 -10", "expose.真实修为 -10", "名望 -5", "道心 -6"]
        onFail:
          text: 账目对不上。掌门的脸沉了下来。「事到如今，还要攀咬。」
          effects: ["名望 -20", "道心 -8", "flag 宗门除名危机"]

      - text: 杀出去
        karma:
          type: 杀戮
          target: 宗门
          weight: 50
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 宗门海捕文书
              lethal: true
              foreshadow:
                - { at: -8, evt: "各处坊市贴出了你的画影图形" }
                - { at: -3, evt: "旧识捎信：追缉的赏格又加了三成" }
                - { at: -1, evt: "客栈掌柜多看了你三眼，当夜有人快马出镇", window: true }
            - id: 宗门自顾不暇，缉令不了了之
        effects:
          - "堕度 +15"
          - "业障 +20"
          - "expose.杀过某人 +25"
          - "名望 -30"
          - "道心 -5"
          - "flag 叛出宗门"

  # ══════════════════════════════════════════════════════════
  # 打脸 · 宴上
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_jingjiu
    title: 敬酒
    weight: 45
    act: 2
    cooldown: 30
    cond: "藏拙 > 0.6 && tier >= 2"
    tags: [打脸, 冲突]
    text: |
      庆功宴摆在演武场，新晋真传裴远的座次在你上首。
      敬酒敬到你这一桌，他端着杯子停下来，笑着问你入门几年了。
      你说了。他点点头，转头对满座道：「诸位听听——比我早入门十一年。」
      满座哄笑，有人拍着桌子收不住。
      他把杯中酒缓缓倒在你脚边。「师兄，这杯我替你喝了，怕你受不住。」
    choices:
      - text: 忍
        karma:
          type: 受辱
          target: 裴远
          weight: 14
          polarity: -1
          hooks:
            - id: 他愈发不把你放在眼里
            - id: 来日方长
        check: { actor: "道心", dc: "52", scale: 12 }
        onSuccess:
          text: 你端起自己那杯，喝了，坐下。笑声渐渐没了意思。
          effects: ["道心 +6", "锋芒 -0.06"]
        onFail:
          text: 你也跟着笑了笑。夜里回去，那口没喝的酒一直堵在喉咙里。
          effects: ["道心 -4"]

      - text: 弹指震裂他手里的空杯——点到为止
        karma: none
        effects: ["名望 +12", "expose.真实修为 +12", "锋芒 +0.08"]

      - text: 一掌把他按回椅子里，用全力
        karma:
          type: 受辱
          target: 裴远
          weight: 22
          polarity: -1
          hooks:
            - id: 他怀恨在心，暗中寻你的错处
            - id: 从此见你绕道走
        effects:
          - "名望 +28"
          - "僭越 +12"
          - "expose.真实修为 +22"
          - "witness 裴远 真实修为"
          - "锋芒 +0.15"
          - "flag 已立威"

      - text: 「【独孤离】前辈，借三分剑意。」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 20"
        karma: none
        effects:
          - "soul.独孤离.favor +6"
          - "expose.残魂 +8"
          - "名望 +15"
          - "僭越 +5"
          - "锋芒 +0.1"

  # ══════════════════════════════════════════════════════════
  # 打脸 · 坊市
  # ══════════════════════════════════════════════════════════

  - id: evt_ex_yanhuo
    title: 验货
    weight: 40
    act: 1
    cooldown: 25
    cond: "藏拙 > 0.6"
    tags: [打脸, 日常]
    text: |
      坊市的丹铺里，你挑了三瓶凝气散。
      掌柜上下打量你一遍，收走柜上的好货，从底下摸出三瓶成色发暗的。
      「就这个。爱要不要。」
      旁边一个锦衣修士嗤了一声：「掌柜的，别耽误工夫。他那点月钱，够闻个瓶塞。」
      铺子里几个伙计都笑了。掌柜捏着瓶子，等你伸手。
    choices:
      - text: 接过次货，付钱走人
        karma: none
        effects: ["道心 +3", "锋芒 -0.04", "丹毒 +2"]

      - text: 当场点破这批丹的成色
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "56", scale: 10 }
        onSuccess:
          text: 你报出这批丹火候差在哪一刻。掌柜脸色变了，伙计不笑了。好货摆了回来，还多饶一瓶。
          effects: ["名望 +8", "factors.法宝 +0.03", "expose.真实修为 +5"]
        onFail:
          text: 掌柜嗤笑：「懂行的？懂行的不穿这身衣裳。」
          effects: ["道心 -3", "名望 -2"]

      - text: 放开气息，压得满铺子直不起腰
        karma:
          type: 受辱
          target: 锦衣修士
          weight: 16
          polarity: -1
          hooks:
            - id: 他是有来头的，回去搬了人
            - id: 他自认倒霉
        effects:
          - "名望 +15"
          - "僭越 +8"
          - "expose.真实修为 +15"
          - "witness 锦衣修士 真实修为"
          - "锋芒 +0.1"

      - text: 「【词条】拆开看看这丹里掺了什么。」
        require: "hasSystem('词条')"
        karma: none
        effects: ["factors.法宝 +0.05", "expose.金手指 +3", "僭越 +2", "名望 +5"]
`,ur=`# 备选主线 · 宗门线金手指三链（gf-sect）
# 与 act1-core 的「后山裂缝」链互斥：链首 cond 均含 !flag('金手指已定')，
# 链尾所有出口都落 flag 金手指已定 —— 谁先落定谁作数。
#
# 三条链（每局最多命中其一走完）：
#   链一「藏经阁的夹页」：半页丹房图 → 雨夜探废丹房 → 地窖小炉（苏婆婆 / 面板 / 拒绝）
#   链二「病重的老执事」：钱通托匣 → 五十年的账 → 匣中断剑（独孤离 / 任务 / 拒绝）
#     · 恩情因果：受匣即欠钱通一诺（立誓），沉匣即毁诺（含致死钩子，预警链齐全）
#   链三「小比的彩头」：黑玉佩夜烫 → 月望认主（独孤离 / 签到 / 拒绝）
#
# 跨卡回响（链首选择在链尾开出专属选项）：
#   链一：链首抽走原页 → 链尾可「物归原主」还图给苏婆婆；链中带了周小乙 → 链尾可只取药渣救他娘
#   链二：听完五十年的故事 → 链尾可对断剑说「接您回家」
#   链三：查过来历 / 扔过玉佩 / 卖过玉佩 → 链尾各开一个只属于那条路的应对

events:

  # ══════════════════════════════════════════════════════════
  # 链一 · 藏经阁的夹页
  # ══════════════════════════════════════════════════════════

  - id: evt_gs_cangjingge_jiaye
    title: 藏经阁的夹页
    weight: 60
    act: 1
    once: true
    cond: "flag('宗门弟子') && !flag('金手指已定') && tier == 1 && sublevel > 0.15"
    tags: [主干, 机缘]
    text: |
      轮值扫洒，这月轮到藏经阁外殿。
      你擦到最末一排书架时，一册虫蛀的《杂录》散了线，从里头飘出半页夹着的旧纸。
      纸色焦黄，画的是一座丹房的地形：灶、水槽、库门，笔笔都标着尺寸。
      图角原有一行小字，被墨涂去了半行。
      图上那座丹房你认得 —— 药圃后头废弃的那座，听说十几年前走了火，再没人修。
      阁中静得很，管事的师叔在前殿打盹。
    choices:
      - text: 就着窗光把图看熟，原样夹回去
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "56", scale: 10 }
        onCritSuccess:
          text: |
            涂墨遮不住笔画的凹痕。你把纸斜对着窗光，一笔一笔地辨，
            辨出了那半行小字：「灶眼为虚，水槽为实」。
            你把纸原样夹回，书线抻直。图已经在你心里了。
          effects: ["flag 记熟夹页", "flag 识破图注", "originClues +1"]
        onSuccess:
          text: |
            你把图记进心里，连尺寸都没落下。
            只有那半行涂掉的小字，怎么辨都辨不出 —— 涂的人手很稳，是存心的。
          effects: ["flag 记熟夹页"]
        onFail:
          text: |
            前殿的鼾声停了。你匆匆把纸夹回去，抓起扫帚。
            图只记了个大概，有两处方位拿不准 —— 但那座丹房就在药圃后头，总找得到。
          effects: ["flag 记熟夹页", "道心 -1"]

      - text: 把那半页纸抽出来，藏进袖中
        karma:
          type: 夺取
          target: 宗门藏经阁
          weight: 8
          polarity: -1
          hooks:
            - id: 一页残纸无人记挂
            - id: 失卷录上添了一笔
        effects: ["flag 夹页在手", "堕度 +2"]
        then:
          text: |
            前殿的鼾声停了一下，又续上。
            你袖着那半页纸走出阁门，日头晃眼，心口那块地方烫得很。
            回房后你把它压在枕下。夜里对着灯，把涂墨的那半行小字照了又照，
            只照出一团死黑。

      - text: 临一份摹本，原页交给管事师叔
        karma:
          type: 欺骗
          target: 藏经阁管事
          weight: 8
          polarity: -1
          hooks:
            - id: 无人深究
            - id: 对出笔迹
        effects: ["flag 记熟夹页", "名望 +5"]
        then:
          text: |
            师叔捏着那半页纸端详两眼：「哪本掉出来的？」
            听你答了，随手把它压进一摞待修的残卷底下，夸了你一句老实。
            你袖中的摹本，是趁研墨的工夫一笔一笔描下来的 —— 连那半行涂墨，
            你都照着描了。

      - text: 原样夹回去，只当没看见
        karma: none
        effects: ["flag 金手指已定", "道心 +2"]
        then:
          text: |
            来历不明的图，标着尺寸的地窖 —— 这样的东西夹在虫蛀的杂录里，
            不是遗漏，就是饵。
            你把书线抻直，搁回原处。
            往后你再没值过藏经阁的扫洒，那册《杂录》也再没人翻起过。

      - text: 原页上交，一字不留
        karma:
          type: 施恩
          target: 藏经阁管事
          weight: 10
          polarity: 1
          hooks:
            - id: 记你一份老实
            - id: 顺手掩下了图
        effects: ["flag 金手指已定", "名望 +5"]
        then:
          text: |
            师叔收了纸，眯着眼看了很久，久到你以为他又睡着了。
            「知道了，你去罢。」
            出门时你回头看了一眼，那半页图往废卷堆里一沉，就再没浮上来。
            半月后你听人说，师叔告了三日假 —— 回来时腰杆挺直，
            气色红润得不像当值的人。

  - id: evt_gs_danfang_yeyu
    title: 废丹房的雨夜
    weight: 100
    act: 1
    once: true
    cond: "(flag('记熟夹页') || flag('夹页在手')) && !flag('金手指已定')"
    tags: [主干, 机缘]
    text: |
      你挑了个雨夜。
      药圃后头的废丹房塌了半边，焦梁上生着白蘑菇，雨水顺着断椽滴成一条线。
      按图上的方位，灶台该在东墙下 —— 如今只剩半座土墩。
      水槽倒还在，槽里积着半尺深的黑水，雨点打上去，一圈一圈。
      你把蓑衣下摆掖紧。三里内没有人家，巡夜的火光在山道那头，隔着一片竹林。
    choices:
      - text: 「灶眼为虚，水槽为实。」—— 直接探水槽底
        require: "flag('识破图注')"
        karma: none
        effects: ["flag 已入地窖", "originClues +1"]
        then:
          text: |
            黑水冰得刺骨。槽底一块石板松动，抠开，底下是一道往下的石阶 ——
            阶面是干的。雨水灌不进去，砌这道阶的人，有手艺。
          goto: evt_gs_dijiao_xiaolu

      - text: 照图撬灶下的砖
        karma: none
        effects: ["flag 已入地窖"]
        check: { actor: "talent.根骨 + talent.悟性 * 0.3", dc: "52", scale: 10 }
        onCritSuccess:
          text: |
            砖一撬就空 —— 灶膛底下什么都没有。
            你蹲在原地想了想：笔笔标尺寸的图，偏偏灶下无物，真东西必在没标的地方。
            你把丹房里外敲了一遍。水槽底下，一声空响。
          effects: ["factors.情报 +0.03"]
          goto: evt_gs_dijiao_xiaolu
        onSuccess:
          text: 灶下挖了个空。你不死心，又把四壁与地面敲了一遍 —— 敲到水槽底，一声空响。
          goto: evt_gs_dijiao_xiaolu
        onFail:
          text: |
            撬到一半，半架焦梁塌下来，砸在你肩上。
            挪开梁木，灶下仍是空的。最后是水槽底下，敲出了空响。
          effects: ["factors.状态 -0.12"]
          goto: evt_gs_dijiao_xiaolu
        onCritFail:
          text: |
            梁塌的动静惊起一片宿鸟。竹林那头的火光晃了晃，朝这边来。
            你伏进水槽边的黑水里，憋着气数到三百。
            火光走了，你也冻透了 —— 好在，伏着的时候，你听见了槽底的空响。
          effects: ["factors.状态 -0.2", "道心 -2"]
          goto: evt_gs_dijiao_xiaolu

      - text: 不急动手。先蹲两夜，看看还有没有别人盯着这里
        karma: none
        effects: ["flag 已入地窖"]
        check: { actor: "talent.神魂 + talent.悟性 * 0.3", dc: "55", scale: 10 }
        onSuccess:
          text: |
            两夜里只有狸子来过。第三夜你摸清了巡夜换岗的时辰，从容动手 ——
            水槽底，石板，石阶。
          effects: ["factors.情报 +0.04"]
          goto: evt_gs_dijiao_xiaolu
        onFail:
          text: |
            白蹲了两夜，淋透了两身衣裳，什么也没等来。
            第三夜你按捺不住动了手。好在，水槽底下真有东西。
          effects: ["factors.状态 -0.08"]
          goto: evt_gs_dijiao_xiaolu

      - text: 叫上周小乙，让他在竹林边望风
        karma:
          type: 施恩
          target: 周小乙
          weight: 10
          polarity: 1
          hooks:
            - id: 记你带挈
            - id: 他嘴不严
        effects: ["flag 已入地窖", "flag 带了小乙"]
        then:
          text: |
            小乙来得比你还早，竹哨攥在手心。
            「哨响两声是巡夜，三声是快跑。」他说得像模像样。
            你探开水槽底的石板时，竹林那头安安静静 —— 他连蚊子都没敢拍。
          goto: evt_gs_dijiao_xiaolu

      - text: 越想越凉 —— 这图偏偏落到你手里。烧了它，收手
        karma: none
        effects: ["flag 金手指已定", "道心 +5"]
        then:
          text: |
            摹本也好，原页也罢，一并递进灯焰。
            纸烧到那行涂墨的小字时，火苗蓝了一下。
            你后来再没走近过那座废丹房。只是雨夜听着檐水，偶尔会想：
            图上那道往下的墨线，画的究竟是什么。

  - id: evt_gs_dijiao_xiaolu
    title: 地窖里的小炉
    weight: 100
    act: 1
    once: true
    cond: "flag('已入地窖') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      石阶到底，是一间干燥的地窖 —— 火没烧到这里，连尘都薄。
      一排药柜靠墙立着，抽斗大半空了，标签上的字迹娟秀。
      最里一格搁着两样东西：
      一枚青玉简，水色荧荧，像刚从溪里捞出来；
      一只巴掌大的紫砂小炉，炉盖用蜡封着，蜡上按着半枚指印。
      墙角还有一坛药渣，封泥完好，坛肩题着「戊申年冬」。
      那半页图上，没画这一格。
    choices:
      - text: 揭了蜡封，开炉
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +12"
          - "expose.残魂 +4"
          - "悟性 +2"
        then:
          text: |
            蜡皮一揭，一缕药香散出来，苦而回甘，从鼻腔一直暖到肺里。
            「唔……」一个苍老的声音带着睡意，在你识海里翻了个身，
            「是哪个不省事的，把婆婆挪到这等地方……」
            那声音顿了顿，似乎把你上下打量了一番：
            「—— 不是故人。也罢，循着图来的，就是有缘。孩子，伸手，婆婆看看你的脉。」

      - text: 先对小炉长揖，通了姓名来历，再揭蜡封
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 1
          hooks:
            - id: 婆婆认亲
            - id: 礼数入了她的眼
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +16"
          - "expose.残魂 +4"
          - "悟性 +2"
          - "道心 +1"
        then:
          text: |
            「哟。」蜡封底下先笑了一声，「多少年没人跟婆婆见这个礼了。」
            药香漫出来，竟带着一点甜。
            「外门的？扫洒的？好，好。手脚干净，礼数也周全 ——
            比婆婆那些眼高手低的徒孙强。伸手来。」

      - text: 揭封之前，把那半页图放在炉边 ——「物归原主。」
        require: "flag('夹页在手')"
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 1
          hooks:
            - id: 婆婆认亲
            - id: 还图之谊
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +20"
          - "expose.残魂 +4"
          - "悟性 +2"
          - "道心 +3"
        then:
          text: |
            炉里静了很久。
            「……这图，是阿蘅的笔。」苍老的声音低下去，「涂掉那半行的，也是她。
            怕图落进歹人手里，又怕真断了念想 —— 傻丫头。」
            蜡皮无风自落，药香涌出来。「她人呢？」
            你答不上来。半晌，炉中轻轻一叹：
            「不问了。肯把图送回来的，心是正的。孩子，往后婆婆跟着你。」

      - text: 取那枚青玉简
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +3"
          - "僭越 +5"
        then:
          text: |
            玉简一沾掌心就化了，化作一层浮在眼前的淡光。
            你看向那坛药渣，一行小字浮起：「陈年药渣·下品·可入药」；
            看向紫砂小炉，小字却乱跳，半晌只凝出两个字：「勿开」。
            一个不带情绪的声音在颅内响起：「万物属性面板，已认主。」
            你又看了那小炉一眼。「勿开」二字，红得扎眼。
            退出地窖时，你把它原样留在了柜上。

      - text: 只搬走那坛药渣给小乙 —— 他娘的药钱。其余原样封好
        require: "flag('带了小乙')"
        karma:
          type: 施恩
          target: 周小乙
          weight: 14
          polarity: 1
          matureWindow: [20, 90]
          hooks:
            - id: 他娘的一条命
            - id: 他嘴不严
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +8"
          - "功德 +5"
        then:
          text: |
            陈年丹渣熬水，比外头的汤药顶用 —— 这是药柜标签上那笔娟秀小字教你的。
            小乙抱着坛子不肯撒手，眼圈红了：「等我娘好了，我给你磕头。」
            你把石板原样盖回，黑水漫上来，像什么都没发生过。
            柜上那两样东西，你一眼都没有多看。

      - text: 两样都不动。退出去，石板照原样盖好
        karma: none
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +10"
          - "originClues +1"
        then:
          text: |
            画图的人没把这一格画进图里 —— 是不想叫人拿，还是拿不走，你不知道。
            你只知道，标签上那笔娟秀的字、蜡上那半枚指印，都在等一个人，
            而那个人不是你。
            石板盖回，黑水合拢。爬出丹房时雨停了，山里干净得很。

  # ══════════════════════════════════════════════════════════
  # 链二 · 病重的老执事
  # ══════════════════════════════════════════════════════════

  - id: evt_gs_bingta_muxia
    title: 病榻下的木匣
    weight: 65
    act: 1
    once: true
    cond: "flag('宗门弟子') && !flag('金手指已定') && tier == 1 && sublevel > 0.15"
    tags: [主干, 机缘]
    text: |
      入冬第一场雪，外门执事钱通病倒了。
      他管月钱、管扫洒，克扣起来一文不让，外门背地里没人说他好。
      可这日他的侄儿挨门传话：钱执事谁都不见，单单要见你。
      屋里药味冲鼻，炭盆烧得很旺，他还是冷，半躺在被里，瘦脱了形。
      见你进来，他指了指床底：「拖出来。」
      是一只旧木匣，锁孔锈死了。
      「外门这些年，扫地不偷懒的，我就见过你一个。」他喘了口气，
      「这匣子你拿走。别问是什么，也别在山里打开。」
    choices:
      - text: 双手接过木匣
        karma:
          type: 立誓
          target: 外门执事·钱通
          weight: 20
          polarity: 0
          matureWindow: [10, 60]
          hooks:
            - id: 一诺待偿
            - id: 死人的账没人讨
        effects: ["flag 受匣", "flag 欠钱通一诺"]
        then:
          text: |
            匣子入手很沉。他盯着你看了半晌，忽然笑了一下 ——
            你从没见他这么笑过。「出了山再开。记住了？」你点头。
            出门时，身后又飘来一句，轻得像自言自语：「……多谢。」
            你在雪地里站了一会儿。
            刻薄了一辈子的钱通，原来也会说这两个字。五日后，他没了。

      - text: 「无功不受禄。这匣子，弟子受不起。」
        karma: none
        effects: ["flag 金手指已定", "道心 +4"]
        then:
          text: |
            他不恼，反倒像松了口气，又像更沉了。
            「……也好。干净。」他朝门口摆摆手。
            五日后钱通没了。出殡那日风大，他侄儿捧着的遗物里，
            有一只锈锁木匣。你多看了一眼，没有停步。

      - text: 「匣子里是什么，您先说与我听。」
        karma: none
        effects: ["flag 听了故事"]
        then:
          text: |
            他看了你很久，久到炭盆里爆了三个火星。
            「好。」他往枕上靠了靠，「你坐下。
            这话在我肚子里搁了五十年，搁得我五脏六腑都是苦的。」
          goto: evt_gs_wushinian_zhang

      - text: 「您等等，我先去医堂请人。」
        karma:
          type: 救助
          target: 外门执事·钱通
          weight: 12
          polarity: 1
          hooks:
            - id: 临终的热乎气
            - id: 人情落了空
        effects: ["flag 求过医", "功德 +2"]
        then:
          text: |
            医堂的执事来看过，开了方子，出门时朝你摇了摇头。
            钱通等人走远了，把匣子又往你那边推了推：
            「我这病，我自己知道。叫你来，不是为这个。」
            他咳了一阵：「坐下。听我说完一件事，你再决定接不接。」
          goto: evt_gs_wushinian_zhang

      - text: 推说职事在身，改日再来
        karma:
          type: 欺骗
          target: 外门执事·钱通
          weight: 6
          polarity: -1
          hooks:
            - id: 死人不记账
            - id: 他侄儿记得你没接
        effects: ["flag 金手指已定", "道心 -2"]
        then:
          text: |
            他看着你，慢慢把手从匣盖上收了回去。「……去罢。」
            第三日，钱通没了。木匣随他的遗物一并抬走，去向没人说得清。
            后来你路过执事院，总觉得那扇门后头，还有咳嗽声。

  - id: evt_gs_wushinian_zhang
    title: 五十年的账
    weight: 100
    act: 1
    once: true
    cond: "(flag('听了故事') || flag('求过医')) && !flag('金手指已定')"
    tags: [主干, 机缘]
    text: |
      「五十年前，我也是外门扫地的。」
      他望着帐顶，「有个姓沈的师兄，和我一个院。
      是我怂恿他陪我进后山剑谷采云母 —— 谷里有剑阵，老辈人都说邪，我不信。」
      炭火哔剥响了一声。
      「阵动的时候，是他把我推出来的。他没出来。
      宗门问罪，他担了『私闯』的名，牌位都没能入祠。没人知道是我起的头。」
      他把匣子往前推：「这是他寄放在我这儿的东西。我收了五十年，没脸打开。」
    choices:
      - text: 「他的东西，我替您送到该去的地方。」受匣
        karma:
          type: 立誓
          target: 外门执事·钱通
          weight: 22
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 一诺待偿
            - id: 两个死人的账
        effects: ["flag 受匣", "flag 欠钱通一诺", "flag 知道沈师兄"]
        then:
          text: |
            他把匣子交到你手上，两只手一直在抖 ——
            像交出去的不是匣子，是压了五十年的那块石头。
            当夜他睡得很沉，鼾声隔着两重门都听得见。
            侄儿说，这是入冬以来头一回。
            五日后钱通走了，走时脸上是松快的。

      - text: 「五十年了，您怎么不自己送去？」
        karma:
          type: 立誓
          target: 外门执事·钱通
          weight: 22
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 一诺待偿
            - id: 两个死人的账
        effects: ["flag 受匣", "flag 欠钱通一诺", "flag 知道沈师兄", "flag 问过为何", "道心 +2"]
        then:
          text: |
            「没脸。」他答得极快，像这三个字在嘴边候了五十年。
            「名是他替我背的，福是我替他享的。我刻薄了一辈子，
            是怕再欠谁的 —— 到头来，还是欠得最多。」
            他闭了闭眼：「你替我走这一趟。我在底下，给他赔罪去。」

      - text: 「这账是您的，不该我背。」起身告辞
        karma: none
        effects: ["flag 金手指已定", "道心 +8"]
        then:
          text: |
            他没拦你，手指在匣盖上敲了两下，又停了。
            你走到门口，听见他在身后自言自语，声音轻得像雪落：
            「师兄，没人肯捎话……我自己来跟你说罢。」
            五日后钱通没了。那只木匣，葬礼上没人见过。

      - text: 「您没脸开，我替您开。就现在，当着您的面。」
        karma:
          type: 立誓
          target: 外门执事·钱通
          weight: 20
          polarity: 0
          matureWindow: [10, 60]
          hooks:
            - id: 当面之诺
            - id: 死人的账没人讨
        effects: ["flag 受匣", "flag 欠钱通一诺", "flag 知道沈师兄"]
        then:
          text: |
            他枯瘦的手死死按住匣盖，不知哪来的力气。「不行。」
            喘定了，他才慢慢松开：「山里人多眼杂。
            这里头的东西，见不得风，也见不得人。」
            他盯着你：「出了山，寻个没人的地方。答应我。」
            你答应了。

  - id: evt_gs_xiazhong_duanjian
    title: 匣中断剑
    weight: 100
    act: 1
    once: true
    cond: "flag('受匣') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      开春随队下山送药，夜里宿在河滩，同行的都睡熟了。
      你走出半里，就着月光撬开锈锁。
      匣中三样：
      半截断剑，乌沉沉不映月色，缠着褪成灰白的剑穗；
      一枚旧玉简，面上只刻一个「役」字；
      最底下压着一页折了又折的纸 —— 展开，是一份自认状，
      认的是五十年前诱人私闯剑谷之罪。落款「钱通」，按着指印。
      写状的日子，就在沈师兄死后第七天。他终究没敢递。
    choices:
      - text: 握住断剑
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
        then:
          text: |
            寒气顺着掌纹咬进来，像握住一条活物。
            「五十年。」一个声音从剑脊里渗出来，又冷又哑，
            「老夫在这匣子里，听那姓钱的小子咳了五十年，没胆开匣。
            姓沈的娃娃倒有胆，可惜命短。」
            剑身一颤，寒光扫过你的眉眼：「你。敢不敢拔？」

      - text: 先把剑穗理顺，轻声道：「沈师兄，钱执事托我来接您回家。」
        require: "flag('知道沈师兄')"
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 1
          hooks:
            - id: 剑主认可
            - id: 两代之托
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +18"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
          - "道心 +2"
        then:
          text: |
            剑没有立刻响。
            半晌，一道苍老的剑鸣才缓缓浮起：「……剑是那娃娃的胆，穗子是他娘编的。
            五十年，头一回有人对他说『回家』。」
            声音沉下去，像入了鞘：「他把剑留在匣里，是留给接得住的人。
            老夫瞧瞧你接不接得住 —— 伸手。」

      - text: 取那枚「役」字玉简
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 任务"
          - "expose.金手指 +3"
          - "僭越 +5"
        then:
          text: |
            「役」字入眼即活，化作几行细字爬满简面：
            「役者已认。首役：【故人之名】—— 匣中有状，送至执事堂。酬：另叙。」
            不带情绪的声音念完就散了。
            你捏着那页自认状，在河滩上坐了半宿。
            断剑留在匣底。你合盖时，它极轻地震了一下，像叹了口气。

      - text: 剑与简都不动 —— 只拿那页自认状，回山替沈师兄正名
        karma:
          type: 施恩
          target: 沈师兄
          weight: 18
          polarity: 1
          matureWindow: [15, 80]
          hooks:
            - id: 泉下有知
            - id: 翻旧案碍了谁的眼
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +12"
          - "功德 +6"
          - "名望 +4"
          - "unflag 欠钱通一诺"
        then:
          text: |
            旧案翻起来比想的难。执事堂推了三回，你递了三回，
            最后把自认状拍在了值堂长老的案上。
            入冬前，祠堂西墙添了一方新牌位，「沈」字底下的名讳，
            是照着状纸上的字描的。
            你把木匣埋在望得见祠堂的山坡上，剑和玉简一并埋了。
            落葬那晚下了雪。你睡得很实。

      - text: 连匣带物，沉进河心
        karma:
          type: 毁诺
          target: 外门执事·钱通
          weight: 16
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 一诺成空
            - id: 捞匣人寻主
              lethal: true
              foreshadow:
                - { at: -8, evt: "下游村子里出了个拾荒的疯子，逢人便问「剑呢」" }
                - { at: -3, evt: "一个背木匣的生面孔在山门外转了两日" }
                - { at: -1, evt: "那人托进香的散修递话：愿以匣换一炷香的话", window: true }
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 -6"
          - "业障 +5"
        then:
          text: |
            匣子很沉，沉下去只冒了两串泡。
            死人的东西，死人的账，都该沉在水底。
            你在滩上坐到后半夜，总觉得水底下有什么在看你。
            回山之后，你再没梦见过钱通 —— 一次都没有。
            这反倒叫你心里发毛。

  # ══════════════════════════════════════════════════════════
  # 链三 · 小比的彩头
  # ══════════════════════════════════════════════════════════

  - id: evt_gs_xiaobi_caitou
    title: 小比的彩头
    weight: 55
    act: 1
    once: true
    cond: "flag('宗门弟子') && !flag('金手指已定') && tier == 1 && sublevel > 0.15"
    tags: [主干, 机缘]
    text: |
      岁末外门小比，你本想着走个过场。
      不料抽中的对手在台上踩了滑苔，自己栽下去了 —— 你稀里糊涂进了前十。
      彩头是库房挑剩的旧物，轮到你，只剩一枚黑玉佩：云头纹，断了穗，玉色沉得发乌。
      当夜它隔着衣裳发起烫来，像贴身揣了块煨热的炭。
      解下来搁在桌上，隔着三尺，烫意仍一丝一丝往你手心里钻。
    choices:
      - text: 去库房翻旧档，查它的来历
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "58", scale: 10 }
        onSuccess:
          text: |
            档册翻到蛀得只剩半边的一页：三十七年前，剑峰一位闭关的长老殒了，
            随身之物抄没入库。殒因那一栏，只有涂改过的两个字：「走火」。
          effects: ["flag 玉佩在身", "flag 查过来历", "originClues +1"]
        onFail:
          text: 库房的旧档被虫蛀得七零八落。你翻了两个时辰，只翻出一鼻子霉味。
          effects: ["flag 玉佩在身"]

      - text: 用粗布裹了，下山托坊市的老鉴师掌眼
        karma: none
        effects: ["flag 玉佩在身", "flag 请人掌眼", "factors.情报 +0.03"]
        then:
          text: |
            老鉴师只掀开布角看了一眼，就像烫着似的合上，连佩带布一起推回来。
            「剑冢的形制。」他声音压得极低，
            「小友，这东西已经认了你了。收好，别给第二个人看，也别叫它离身。」
            你摸出的灵石，他一块没收。

      - text: 夜里拿去后山，扔进涧底
        karma: none
        effects: ["flag 玉佩在身", "flag 扔过玉佩"]
        then:
          text: |
            涧水声响了一整夜。
            第三日清晨，它躺在你枕边，穗结上还挂着一缕水草。
            同屋的都说没见有人进来。
            你捏着这枚凉冰冰的玉佩坐到天亮 —— 它这几日头一回不烫了，
            倒像是……消了气，又憋着气。

      - text: 上交执事堂，只说彩头有异
        karma:
          type: 施恩
          target: 执事堂
          weight: 8
          polarity: 1
          hooks:
            - id: 记你懂规矩
            - id: 东西再没了下文
        effects: ["flag 金手指已定", "名望 +3"]
        then:
          text: |
            当值的执事收了玉佩，掂了掂，顺手挂上了自己的腰。
            三日后他告了假，再回来时，腰上空了，看你的眼神有点发虚。
            你问玉佩去向，他咳了一声：「入库了。最底下那层。」
            这事就再没人提起。

      - text: 拿去坊市，换了八块灵石
        karma:
          type: 欺骗
          target: 坊市货郎
          weight: 8
          polarity: -1
          hooks:
            - id: 烫手的货
            - id: 钱货两清
        effects: ["flag 玉佩在身", "flag 卖过玉佩", "factors.法宝 +0.03"]
        then:
          text: |
            换了八块下品灵石，当夜你睡得格外踏实。
            第七日，那货郎寻上山来，眼窝乌青，把玉佩塞回你手里，灵石一块没要：
            「这东西认人。」
            他说完就走，下山的路走得几乎是跑。
            玉佩回到你掌心，温的，像是熨帖了。

  - id: evt_gs_heiyu_renzhu
    title: 黑玉认主
    weight: 100
    act: 1
    once: true
    cond: "flag('玉佩在身') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路]
    text: |
      月望之夜，玉佩烫得攥不住。你把它搁在桌上。
      黑玉里渗出一线寒光，离玉三寸，凝成个半尺高的虚影 ——
      负手而立，眉眼看不真切，唯独一双眼，像两点悬着的剑尖。
      「三十七年。」他开口，声若磨铁，
      「从剑冢到库房，从库房到比武台。老夫等的不是彩头，是个握得住剑的。」
      剑尖似的目光落在你身上，一寸一寸地掂。
    choices:
      - text: 「请前辈指教。」
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
        then:
          text: |
            「『指教』？」虚影哼了一声，「老夫不指教，老夫只磨剑。
            从今日起，你就是那块料 —— 是钝是利，磨过才知道。」
            寒光散进玉里，玉佩贴回你胸口，不烫了，只剩一点沉。
            识海深处，有人淬着口剑似的吐出两个字：「睡罢。明日起，闻鸡便起。」

      - text: 不答话。提剑到院里，把外门剑诀从头走一遍给他看
        karma: none
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.5", dc: "55", scale: 10 }
        onCritSuccess:
          text: |
            一遍走完，院里落叶被剑风扫成一线。
            虚影半天没说话，末了咂了一声：「架子潦草，骨头是块好骨头。」
            寒光落回玉佩：「老夫收了。」
          effects:
            - "flag 金手指已定"
            - "bind.soul 独孤离 9"
            - "soul.独孤离.favor +15"
            - "expose.残魂 +5"
            - "factors.功法 +0.12"
        onSuccess:
          text: |
            一遍走完，你气息微乱。
            「平平。」虚影道，「胜在敢当着老夫的面出剑。」
            寒光落回玉佩：「收了。往后每一剑，都得比今夜强。」
          effects:
            - "flag 金手指已定"
            - "bind.soul 独孤离 9"
            - "soul.独孤离.favor +8"
            - "expose.残魂 +5"
            - "factors.功法 +0.1"
        onFail:
          text: |
            走到一半你手心出汗，剑势散了。
            「潦草。」他哼了一声，「但敢拔，就还有救。」
            寒光在你腕上敲了一记，像戒尺：「收了。从明日起，给老夫从站桩练起。」
          effects:
            - "flag 金手指已定"
            - "bind.soul 独孤离 9"
            - "soul.独孤离.favor +2"
            - "expose.残魂 +5"
            - "factors.功法 +0.08"
        onCritFail:
          text: |
            一式走岔，剑脱手飞出，钉在门框上，嗡嗡直响。
            虚影仰天笑了三声，笑声里全是失望：「三十七年，等来个握不住剑的。」
            寒光倒卷回玉。玉佩自此凉得像块死玉，再没烫过。
          effects: ["flag 金手指已定", "flag 无系统", "道心 -4", "名望 -2"]

      - text: 「三十七年前那位长老，档上写『走火』。他是怎么死的？」
        require: "flag('查过来历')"
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 丑话说在前
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +12"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
          - "道心 +3"
        then:
          text: |
            「压不住老夫的剑意，又舍不得撒手。」虚影答得干脆，
            「贪心的死法，跟走火不相干。」
            他盯着你：「问出这一句，你比他明白。—— 听明白了，还敢要么？」
            你伸出了手。
            「好。」他说，「这就叫敢。」

      - text: 「那夜扔你，是我心里没底。对不住。」
        require: "flag('扔过玉佩')"
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 记你一扔
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +6"
          - "expose.残魂 +5"
          - "factors.功法 +0.1"
        then:
          text: |
            「哼。」虚影的眼神冷了一瞬，又缓下来，
            「怕而不欺，算你老实。当年怕老夫的，没一个敢当面认。」
            寒光绕你腕上一匝，似锁，似量：
            「记住这一扔。往后你的剑要是也这么没底，老夫亲自扔你下涧。」

      - text: 把那八块灵石摸出来，压在玉佩边上：「货款两讫，你我两清。」
        require: "flag('卖过玉佩')"
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +8"]
        then:
          text: |
            虚影盯着那八块灵石，忽然笑了 —— 笑声像磨石擦过剑脊。
            「拿老夫换灵石的，你是头一个；敢跟老夫两清的，也是头一个。」
            笑声一收：「滚罢。」
            寒光敛尽，玉佩凉透。它再没烫过，
            只是每逢月望，黑得格外深，像一只闭着的眼。

      - text: 玉佩背面忽然浮起两个字：「签到」。你把拇指按了上去
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +2"
          - "僭越 +5"
        then:
          text: |
            光纹顺着拇指爬上来。虚影像被一只无形的手从中抹去 ——
            他直到消散，眼里都是不可置信。
            「签到系统，已认主。今日已签：凝气散一枚。」
            玉佩凉透，黑得发死。
            深夜你醒来喝水，总觉得桌上那点黑，像一只刚闭上的眼睛。

      - text: 「前辈的东西，晚辈担不起。」将玉佩用红绳系了，供上窗台
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +9"]
        then:
          text: |
            虚影盯了你半晌。「……不敢拔剑的，老夫不留。」
            语气里说不上是讥诮，还是惋惜。
            寒光收回玉里，再没出来过。玉佩从此不烫，
            你每逢朔望给它换一炷香。
            只是月望之夜，玉色总要深上一分 —— 像有人在里头，又数完了一个月。
`,dr=`# 野路子出身的备选金手指链（幕一）
# 修复玩家反馈「每局主线雷同」：五种野路子出身各得一条与后山裂缝链互斥的机缘链，
# 每局谁先被抽到谁作数（互斥全靠 flag('金手指已定')：链首 cond 挡门，所有出口落 flag）。
#
# 链目录（前缀 evt_gw_，各 2 卡，链中靠专属 flag 串接）：
#   baigu     兽骨祭坛 → 骨缝里的光      出口：独孤离 / 面板 / 拒绝
#   wangxiang 河底的沉棺 → 棺中之物      出口：苏婆婆 / 任务 / 拒绝
#   nanjiang  蛊王的赠礼 → 匣中三寸      出口：签到 / 拒绝（魔道妖修与两位残魂道统不合，不硬塞）
#   fudao     海上的漂流匣 → 火漆之下    出口：独孤离 / 面板 / 拒绝
#   juelin    绝壁石匣 → 无灰之匣        出口：苏婆婆 / 签到 / 拒绝
#
# 跨卡回响：链首每个继续选项落不同 flag，链尾以 require 读取，给只属于那种走法的选项。

events:

  # ══════════════════════════════════════════════════════════
  # 白骨部 · 兽骨祭坛（妖修/武道，北荒迁徙途中）
  # ══════════════════════════════════════════════════════════

  - id: evt_gw_baigu_jitan
    title: 兽骨祭坛
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && flag('出身·baigu') && !flag('金手指已定') && !flag('南下')"
    tags: [主干, 机缘, 白骨部]
    text: |
      部落迁徙的第七日，你替驼队探路，在一片风蚀的洼地里停了脚。
      半座祭坛从冻土里露出来。垒坛的不是石头，是骨——兽骨人骨都有，垒得极密。
      骨缝深处透出一点微光，不跳，不闪，像一只不眨的眼。
      驼队还在十里外。风从坛底钻过去，呜呜地响，像有什么在骨头底下换气。
      老人们说过：北荒的骨堆，埋的不只是死物。
    choices:
      - text: 拨开骨堆，把发光的东西挖出来
        karma: none
        check: { actor: "talent.根骨 + talent.神魂 * 0.3", dc: "55", scale: 10 }
        onCritSuccess:
          text: |
            骨头比看上去沉，你却搬得极顺，像它们自己在让路。
            挖到臂深处，你看清了几根股骨内侧的刻痕——是符，也是锁。
          effects: ["originClues +1", "flag 白骨·近过坛"]
          goto: evt_gw_baigu_tanxia
        onSuccess:
          text: 骨头比看上去沉。你挖到臂深，指尖触到一片温润的凉。
          effects: ["flag 白骨·近过坛"]
          goto: evt_gw_baigu_tanxia
        onFail:
          text: 一根股骨塌下来砸在你手背上，血珠渗出来，立刻冻住了。你换只手，接着挖。
          effects: ["factors.状态 -0.1", "flag 白骨·近过坛"]
          goto: evt_gw_baigu_tanxia
        onCritFail:
          text: |
            骨堆塌了半边，把你埋到腰。挣出来时两片指甲翻了，
            那点光却近了——它就在最底下那层肋骨后面。
          effects: ["factors.状态 -0.2", "flag 白骨·近过坛"]
          goto: evt_gw_baigu_tanxia

      - text: 先割掌，以血敬骨——部里对无主骨堆的老礼
        karma:
          type: 立誓
          target: 北荒骨坛
          weight: 10
          polarity: 0
          hooks:
            - id: 血敬有回应
            - id: 坛下的东西记了你的血
        effects: ["factors.状态 -0.05", "flag 白骨·敬过血", "flag 白骨·近过坛"]
        then:
          text: |
            血珠落进骨缝，没有渗开，像被什么接住了。
            风声停了一瞬。你等到血凉，才动手拨骨——骨头轻得反常。
          goto: evt_gw_baigu_tanxia

      - text: 妖血在鼻腔里发紧——那光的气味，是「非我族类」
        require: "flag('道统·妖修')"
        karma: none
        effects: ["originClues +1", "flag 白骨·嗅出非类", "flag 白骨·近过坛"]
        then:
          text: |
            你绕坛走了一圈。气味只有一个来处：坛心，骨缝最深的地方。
            那不是妖，不是人，也不是死物的味道。你压着汗毛，开始拨骨。
          goto: evt_gw_baigu_tanxia

      - text: 退回去领驼队绕道，回头报给萨满
        karma:
          type: 施恩
          target: 萨满·乌骨勒
          weight: 12
          polarity: 1
          hooks:
            - id: 萨满记你识大体
            - id: 部族起走了坛中之物，当夜出了事
        effects: ["名望 +5", "flag 金手指已定"]
        then:
          text: |
            乌骨勒听完，盯着火塘看了半晌，只说了一句：「绕开。三代人都绕开。」
            后来迁徙的路线上，那片洼地被骨杖画了个圈。没人再提。

      - text: 什么也不动。北荒的骨堆，活人别翻
        karma: none
        effects: ["道心 +3", "flag 金手指已定"]
        then:
          text: |
            你退出洼地，退得很慢，脚印踩着来时的脚印。
            驼队过境时你走在最外侧。那点光你没有再看第二眼。

  - id: evt_gw_baigu_tanxia
    title: 骨缝里的光
    weight: 100
    act: 1
    once: true
    cond: "flag('白骨·近过坛') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路, 白骨部]
    text: |
      你把最后一层肋骨移开，光的来处露了出来——两样东西并排卡在坛心：
      一截断刃，颜色比骨更白，寒气凝在刃口，多年不散；
      一册骨簿，页页是磨薄的兽骨，骨面上浮着细密的光纹，缓缓地转。
      风停了。骨堆底下那种换气般的声音也停了，像整座祭坛都在等你伸手。
      远处，驼队的号角响了两声——是在催你。
    choices:
      - text: 握住那截断刃
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.12"
        then:
          text: |
            寒气顺着掌纹一路钻进心口，你握着的忽然不再是断刃，是一个人的一辈子。
            苍老的声音在颅内炸开：「北荒？……也罢。拔都拔出来了，那就练。」

      - text: 取那册骨簿
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +4"
          - "僭越 +5"
        then:
          text: |
            骨簿入手的一瞬，光纹顺着你的手腕爬上来。
            你再看向远处的驼队时，每一头驼、每一个人的头顶，都浮着几行细字。

      - text: 把掌心的血按上断刃——以血为契，请它自己认
        require: "flag('白骨·敬过血')"
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 血契之谊
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +18"
          - "expose.残魂 +3"
          - "factors.功法 +0.12"
          - "道心 +2"
        then:
          text: |
            血吃进刃口，寒气顺着掌纹钻进来，却不伤你。
            一个苍老的声音在你颅内哼了一声：「北荒蛮子，倒懂规矩。」

      - text: 气味不对——这坛是「封」，不是「藏」。把骨照原样垒回去
        require: "flag('白骨·嗅出非类')"
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +10", "originClues +2"]
        then:
          text: |
            你一根一根把骨垒回去，垒到最后一层，那点光隔着骨缝看了你很久。
            你没有回头。有些东西被垒进骨堆，不是因为它死了。

      - text: 空手退出来，把翻开的骨重新垒好
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +8", "功德 +3"]
        then:
          text: |
            垒到最后一根骨，号角第三次响起。你拍净手上的骨灰，追驼队去了。
            断刃与骨簿留在坛心，谁封的，还归谁封着。

  # ══════════════════════════════════════════════════════════
  # 望乡镇 · 河底的沉棺（鬼道/正道，守夜时分）
  # ══════════════════════════════════════════════════════════

  - id: evt_gw_wangxiang_chenguan
    title: 河底的沉棺
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && flag('出身·wangxiang') && !flag('金手指已定') && !flag('望乡·离镇')"
    location: 望乡镇
    tags: [主干, 机缘, 望乡镇]
    text: |
      轮到你守下半夜。三更刚过，河面的雾忽然让开了一块。
      一角棺木从水里浮上来。乌木的，棺身缠着锁链——链环锈得只剩薄薄一层，早断了。
      棺没有顺流走。它贴着渡口的石阶，轻轻磕了一下，又磕了一下。
      守夜的规矩你背得熟：河送来的东西，先问来路，再问去处。
      可规矩没说过这种事——棺里的东西自己在敲。笃，笃。不急，也不停。
    choices:
      - text: 用篙把棺勾上石阶，撬开
        karma: none
        check: { actor: "talent.根骨 + talent.神魂 * 0.3", dc: "52", scale: 10 }
        onSuccess:
          text: 棺身沉得不像空棺。撬棍下去第三下，棺盖起了一条缝——敲声停了。
          effects: ["flag 望乡·沉棺上岸"]
          goto: evt_gw_wangxiang_guanzhong
        onFail:
          text: 撬棍滑了两回，你腕子扭了一下，棺盖才让出一条缝。敲声停了。
          effects: ["factors.状态 -0.08", "flag 望乡·沉棺上岸"]
          goto: evt_gw_wangxiang_guanzhong
        onCritFail:
          text: |
            棺在水里一翻，篙带着你半身入河。你呛着水爬上石阶时，
            它已经沉了下去。敲声隔着一层河水，还在响——响了一夜。
          effects: ["factors.状态 -0.2", "道心 -2"]

      - text: 凝神去听——三长，两短，敲的是渡亡人的门
        require: "flag('道统·鬼道')"
        karma: none
        effects: ["factors.情报 +0.04", "flag 望乡·听懂棺声", "flag 望乡·沉棺上岸"]
        then:
          text: |
            你依着渡亡的旧礼，在船板上叩了三下作答。
            棺身一震，自己贴上了石阶。棺盖松开一条缝，像一扇虚掩的门。
          goto: evt_gw_wangxiang_guanzhong

      - text: 点一炷香，按送亡的礼数把棺请上岸
        karma:
          type: 施恩
          target: 棺中人
          weight: 10
          polarity: 1
          hooks:
            - id: 记你一炷香
            - id: 香火引来了别的东西
        effects: ["功德 +4", "flag 望乡·棺前上香", "flag 望乡·沉棺上岸"]
        then:
          text: |
            香点起来，敲声就缓了，像喘匀了一口气。
            你把棺请上石阶，香烧到一半，棺盖自己滑开了一条缝。
          goto: evt_gw_wangxiang_guanzhong

      - text: 找条新链把棺重新锁了，坠石沉底
        karma: none
        effects: ["道心 +3", "功德 +2", "flag 金手指已定"]
        then:
          text: |
            新链入水的声音很闷。棺沉下去之前，敲声急了一阵，又慢了下来，
            最后一下敲在链环上，像是认了。那夜之后，河面再没浮起过东西。

      - text: 去敲老渡亡的门，把这事交给他
        karma:
          type: 施恩
          target: 老渡亡
          weight: 12
          polarity: 1
          hooks:
            - id: 老人记你守规矩
            - id: 那夜之后，老人再没守过夜
        effects: ["名望 +4", "flag 金手指已定"]
        then:
          text: |
            老渡亡披衣出来，看了一眼河面，脸色就变了。
            「你没开棺？」他问。你摇头。他叹了口气：「那你还能在镇上住很多年。」

  - id: evt_gw_wangxiang_guanzhong
    title: 棺中之物
    weight: 100
    act: 1
    once: true
    cond: "flag('望乡·沉棺上岸') && !flag('金手指已定')"
    location: 望乡镇
    tags: [主干, 机缘, 岔路, 望乡镇]
    text: |
      棺里没有尸首。
      半棺河泥，泥上搁着两样东西，干干净净，像有人刚拂过：
      一只焦黑的药鼎，缺了一只耳，鼎身的裂纹里透着微温——敲声就是从鼎里出来的；
      一册皮面簿子，浸了不知多少年的水，页页完好。你翻开头一页，字正在自己长出来：
      「事一：送棺回上游。酬——」后头的字，还没长完。
      锁链是从里面挣断的。这一点，你现在才看清。
    choices:
      - text: 捧起药鼎
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +15"
          - "expose.残魂 +4"
          - "悟性 +3"
        then:
          text: |
            鼎贴上胸口的一瞬，裂纹里的微温漫上来，像有人隔着鼎壁握了握你的手。
            一声苍老的叹息：「顺水漂了这么些年……到底是漂到了个肯开棺的孩子跟前。」

      - text: 收下那册簿子
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 任务"
          - "expose.金手指 +4"
          - "僭越 +5"
        then:
          text: |
            簿子一入怀，头一页的字就长完了。
            酬劳那一栏写的东西，你盯着看了很久——它怎么会知道你缺这个。

      - text: 把烧剩的半截香插上棺头：「有话，趁香没尽说完。」
        require: "flag('望乡·棺前上香')"
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +22"
          - "expose.残魂 +2"
          - "悟性 +3"
          - "道心 +2"
        then:
          text: |
            香灰落尽之前，鼎里传出一声极轻的咳，苍老，疲惫。
            「好孩子，」那声音说，「先上香，后问话——如今懂这个的，不多了。」

      - text: 应三声，把棺推回河心——望乡的规矩，过河的不留
        require: "flag('望乡·听懂棺声')"
        karma:
          type: 施恩
          target: 棺中人
          weight: 14
          polarity: 1
          hooks:
            - id: 它记得望乡渡有个懂敲声的
            - id: 上游有人在等这口棺，也记住了你
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "道心 +10"
          - "功德 +8"
          - "originClues +1"
        then:
          text: |
            棺离岸的时候，敲声又起了——三长，两短，这回是道别。
            雾合上之前，你听见极轻的一声：「回头见。」你希望不会。

      - text: 什么都不碰，合上棺盖，推回河里
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +8"]
        then:
          text: |
            棺盖合拢时，鼎里的敲声又起了一下——只一下，没有再响。
            你看着那角乌木没进雾里。守夜人送走的东西多了，这一件，不必记在簿上。

  # ══════════════════════════════════════════════════════════
  # 十万大山 · 蛊王的赠礼（魔道/妖修，乌木寨）
  # 两位残魂的道统立场都容不下魔修——此链只给 系统/拒绝 两类出口
  # ══════════════════════════════════════════════════════════

  - id: evt_gw_nanjiang_zengli
    title: 蛊王的赠礼
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && flag('出身·nanjiang') && !flag('金手指已定') && !flag('出山')"
    tags: [主干, 机缘, 南疆]
    text: |
      蛊寨的老蛊王死了。咽气前他屏退众人，只交代了一件事，指名道姓——匣子传给你。
      你与他拢共没说过十句话。
      乌木老匣送到你手上那天起，寨里人看你的眼神就变了。打水的让你先打，
      吃饭的隔你三步，连莫三刀都只远远看了一眼，什么都没说。
      蓝阿婆路过你门前，烟杆敲了敲门框：「他挑人从来不挑错。就是挑中的，没一个善终。」
    choices:
      - text: 依蛊寨的规矩，抱匣守灵三日，再开
        karma:
          type: 施恩
          target: 老蛊王
          weight: 12
          polarity: 1
          hooks:
            - id: 死者的托付，要还
            - id: 守灵的人，承的不止是匣子
        effects: ["功德 +3", "flag 南疆·守过灵", "flag 南疆·开了匣"]
        then:
          text: |
            三天三夜，你抱着匣子坐在灵棚里。匣中细碎的虫声起初躁，后来静，
            最后跟着你的呼吸走。第四天清晨，你揭开了匣盖。
          goto: evt_gw_nanjiang_xiazhong

      - text: 当夜就开。是福是祸，早看早知道
        karma: none
        effects: ["flag 南疆·开了匣"]
        then:
          text: 门闩落死，油灯挑亮。你把匣子放在膝上，揭开了盖。
          goto: evt_gw_nanjiang_xiazhong

      - text: 先去问蓝阿婆，这匣子什么来历
        karma: none
        effects: ["factors.情报 +0.05", "flag 南疆·问过阿婆", "flag 南疆·开了匣"]
        then:
          text: |
            蓝阿婆吸了半袋烟才开口：「他年轻时出过山，回来就带着这匣子。」
            烟杆点了点你：「记住一条——匣里的东西认喂不认拿。先喂，后伸手。」
          goto: evt_gw_nanjiang_xiazhong

      - text: 体内的子蛊隔着匣板躁起来——同出一母的蛊，认得彼此
        require: "flag('蛊种入体')"
        karma: none
        effects: ["originClues +1", "flag 南疆·蛊认了匣", "flag 南疆·开了匣"]
        then:
          text: |
            你贴着匣板听。里面的虫声与你血里那点动静，一应一和，像久别的同族。
            匣子不用撬——子蛊在你掌心咬了一口，锁扣自己弹开了。
          goto: evt_gw_nanjiang_xiazhong

      - text: 当着寨老的面，把匣子退回蛊寨
        karma: none
        effects: ["道心 +3", "名望 +2", "flag 金手指已定"]
        then:
          text: |
            寨老们对视了很久，没人肯伸手接。最后是蓝阿婆抱走的。
            她看你的眼神很复杂：「退得掉匣子，退不掉他挑过你这件事。」

      - text: 转手卖给收山货的老客，钱货两清
        karma:
          type: 背叛
          target: 老蛊王
          weight: 18
          polarity: -1
          hooks:
            - id: 匣子会自己回来
            - id: 老客死在了出山的路上
        effects: ["道心 -4", "堕度 +3", "factors.法宝 +0.05", "flag 金手指已定"]
        then:
          text: |
            老客给的价钱好得反常，接匣子的时候手一直在抖——是高兴的抖。
            你用那笔钱换了件趁手的东西。夜里偶尔想起，寨里人如今连你的门都绕着走。

  - id: evt_gw_nanjiang_xiazhong
    title: 匣中三寸
    weight: 100
    act: 1
    once: true
    cond: "flag('南疆·开了匣') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路, 南疆]
    text: |
      匣底垫着晒干的虫壳，搁着两样东西。
      一枚血玉，指节大小，贴掌微温，像揣了多年的体温还没散尽。玉心有一点极细的光，
      随你的呼吸明灭——匣里的虫声，护的就是它。
      一册手记，南疆土文，蝇头小字，是老蛊王的笔迹。头一页只有一行：
      「养了它们一辈子，到头来，是它们挑了把匣子交给谁。」
    choices:
      - text: 攥住血玉。它贴上掌心的一瞬，吸了你一点血
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +4"
          - "僭越 +5"
        then:
          text: |
            血进玉心，那点光稳了。一个不带情绪的声音贴着你的耳骨响起：
            「契成。此地可签。」你环顾四周——灵棚、虫冢、黑水潭，处处浮着淡淡的印记。

      - text: 守了三日灵，虫声认熟了你——让它们先替你探玉
        require: "flag('南疆·守过灵')"
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +2"
          - "僭越 +5"
          - "气运 +2"
        then:
          text: |
            虫群爬过血玉，没有一只回头。你这才伸手——玉贴上掌心，温的，没有吸血。
            守灵三日，它已把你的气息认作了旧主的延续。

      - text: 照蓝阿婆的话，先滴血喂过，再伸手
        require: "flag('南疆·问过阿婆')"
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +1"
          - "僭越 +5"
          - "道心 +1"
        then:
          text: |
            血珠先落，玉心的光应声一亮，像点了个头。你再拿玉，拿得干干净净。
            喂过的东西不记恨人——这一点，阿婆没说错过。

      - text: 放子蛊进匣，让它替你挑
        require: "flag('南疆·蛊认了匣')"
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +3"
          - "僭越 +5"
          - "factors.灵宠 +0.06"
        then:
          text: |
            子蛊绕着两样东西各转了一圈，最后趴上血玉，翅子一收，不走了。
            你连玉带蛊一起收进怀里。从此它守着玉，玉养着它。

      - text: 只取手记。玉随他葬进虫冢——他养的东西，该陪他
        karma: none
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "factors.情报 +0.08"
          - "originClues +1"
          - "道心 +6"
        then:
          text: |
            手记后头几页记的不是蛊经，是山外的事——地名、人名、一笔一笔的旧账。
            你读到第三页就明白了：老蛊王挑你，挑的不是传人，是读信的人。

      - text: 一样不取。连匣带物，随他葬进虫冢
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +10", "功德 +5"]
        then:
          text: |
            下葬那日，你亲手把匣子放进虫冢最深处。虫声送出去很远，像一场哭丧。
            蓝阿婆在冢口等你，看了你半晌：「他挑中的人头一回空着手走出来。……好。」

  # ══════════════════════════════════════════════════════════
  # 东海浮岛 · 海上的漂流匣（散修，台风后捡浪）
  # ══════════════════════════════════════════════════════════

  - id: evt_gw_fudao_liuxiang
    title: 海上的漂流匣
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && flag('出身·fudao') && !flag('金手指已定') && !flag('出海') && !flag('宗门弟子')"
    tags: [主干, 机缘, 浮岛]
    text: |
      台风过境第二日，全岛的人都下滩捡浪。
      你在礁缝里翻出一只尺半长的沉木匣：火漆封口，漆印完好，压着一个你不认得的徽记。
      入手极沉。晃一晃，里面纹丝不动——装得满，或是钉得死。
      当天下午，坊市就有了动静。先后三拨人打听「台风天漂来的物件」：
      四海斋的伙计，一拨佩剑的生面孔，还有黑市瘸七的人。
      出手最阔的那拨放了话：见匣即收，不问来路。
    choices:
      - text: 揣回窝棚，闩死门，夜里再开
        karma: none
        effects: ["锋芒 -0.03", "flag 浮岛·私开匣", "flag 浮岛·匣已开"]
        then:
          text: |
            你等到潮声最大的时辰才动手。烛火压到豆大，
            一柄削鱼刀贴着火漆的边，整片起下来——漆印完好，还能封回去。
          goto: evt_gw_fudao_huoqi

      - text: 抱到坊市口当众开——东西越见光，越没人敢黑你
        karma: none
        effects: ["名望 +3", "flag 浮岛·当众开匣", "flag 浮岛·匣已开"]
        then:
          text: |
            你把匣子墩在鱼档的案板上，当众敲碎火漆。围观的人叠了三层，
            三拨打听的人都在其中。没人敢抢——几十双眼睛，就是你的凭据。
          goto: evt_gw_fudao_huoqi

      - text: 原封不动，交给巡海队
        karma:
          type: 施恩
          target: 巡海队·郑大缆
          weight: 12
          polarity: 1
          hooks:
            - id: 郑大缆记你懂事
            - id: 匣子的正主寻到巡海队，顺藤摸到了你
        effects: ["名望 +5", "flag 金手指已定"]
        then:
          text: |
            郑大缆掂了掂匣子，又掂了掂你：「捡浪的孩子里，肯交上来的，你是头一个。」
            他没说匣子后来去了哪。只是那之后，巡海队的船见了你，会点一下头。

      - text: 卖给出手最阔的那拨，火漆都不动
        karma:
          type: 夺取
          target: 沉匣正主
          weight: 16
          polarity: -1
          hooks:
            - id: 正主循着火漆找了来
            - id: 买主起过杀人灭口的念头
        effects: ["factors.法宝 +0.06", "道心 -2", "flag 金手指已定"]
        then:
          text: |
            交割在黑市后巷。对方验漆的手法极熟，付账干脆得不像买货，倒像销赃。
            你用那笔灵石换了件护身的物件。价钱好得越想越不对。

      - text: 扔回浪里——三拨人抢的东西，拿着烫手
        karma: none
        effects: ["道心 +3", "气运 +2", "flag 金手指已定"]
        then:
          text: |
            匣子沉得很快，像迫不及待。三拨人又在坊市打听了半个月，先后散了。
            后来风声传回来：邻岛有个捡到它的，没能活过那个月圆。

  - id: evt_gw_fudao_huoqi
    title: 火漆之下
    weight: 100
    act: 1
    once: true
    cond: "flag('浮岛·匣已开') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路, 浮岛]
    text: |
      火漆下面是三层浸蜡的油布，一层比一层裹得紧。
      最里面两样东西，各垫一格软木：
      半截断剑，断口如新，剑身凝着一层化不开的寒气——海气这么重，它竟没有一星锈；
      一枚青玉简，面上浮着细细的光纹，指头一碰，纹路就跟着你的指尖走。
      软木格上还嵌着张货单，海水泡花了大半，只认得出抬头两个字：「剑冢」。
    choices:
      - text: 握住断剑
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 剑主认可
            - id: 剑主索命
        effects:
          - "flag 金手指已定"
          - "bind.soul 独孤离 9"
          - "soul.独孤离.favor +10"
          - "expose.残魂 +5"
          - "factors.功法 +0.12"
        then:
          text: |
            寒气咬进掌心，像剑在认人。一个苍老的声音自你颅内响起，带着难掩的诧异：
            「装船运走，沉海，还能落到人手里……好。捡到就是缘，握住了就别撒手。」

      - text: 收下玉简
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +4"
          - "僭越 +5"
        then:
          text: |
            光纹钻进指缝的那一刻，整个坊市在你眼里换了一副模样——
            瘸七摊上那堆「宝贝」，头顶浮着的小字，十件里有九件写着：赝品。

      - text: 火漆是整片起下来的——取玉简，余下封回，再「捡」一次交公
        require: "flag('浮岛·私开匣')"
        karma:
          type: 欺骗
          target: 巡海队·郑大缆
          weight: 14
          polarity: -1
          hooks:
            - id: 火漆的切口瞒不过老海狗
            - id: 上交的匣子替你挡了三拨人
        effects:
          - "flag 金手指已定"
          - "bind.system 面板"
          - "expose.金手指 +1"
          - "僭越 +5"
          - "名望 +3"
          - "锋芒 -0.05"
        then:
          text: |
            第二天你「又」从礁缝里捡到了它，当众送去巡海队。
            断剑引走了所有眼睛，三拨人追着匣子去了。没人想过匣里原有两样东西。

      - text: 满场的眼睛都盯着——按浪规喊一嗓子：「见者有份！」
        require: "flag('浮岛·当众开匣')"
        karma:
          type: 施恩
          target: 捡浪的岛民
          weight: 12
          polarity: 1
          hooks:
            - id: 浪规办事，人人念你一声
            - id: 分走断剑的人，当夜就出了事
        effects:
          - "flag 金手指已定"
          - "flag 无系统"
          - "名望 +10"
          - "道心 +4"
          - "功德 +4"
        then:
          text: |
            断剑、玉简、连沉木匣板都被拆分了个干净。你自己一样没留。
            散场时，鱼档的老板娘往你篓里塞了两尾好鱼：「浪规还在，是因为还有人肯守。」

      - text: 一样不留。封回匣子，扔回海里
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +9"]
        then:
          text: |
            油布一层层裹回去，火漆按原样压平。匣子离手的那一刻，你竟觉得轻松。
            剑冢的东西，自有剑冢的人来寻。捡浪的本分，是捡浪。

  # ══════════════════════════════════════════════════════════
  # 绝灵谷 · 绝壁石匣（武道/散修，采药坠崖）
  # 谷中无灵气——「不该有的灵光」本身就是悬念
  # ══════════════════════════════════════════════════════════

  - id: evt_gw_juelin_shixia
    title: 绝壁上的匣子
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.15 && flag('出身·juelin') && !flag('金手指已定') && !flag('出谷')"
    tags: [主干, 机缘, 绝灵谷]
    text: |
      北崖采七叶芝，脚下的岩层酥了。
      你坠出两丈，一把抓住崖缝里的老藤根，整个人贴在绝壁上——上不去，下面是百丈涧雾。
      喘匀第三口气，你看见了：右手边的石缝深处，卡着一只巴掌大的石匣。
      匣上没有灰。缝里透出一线极淡的光。
      在绝灵谷活了十几年，你太清楚这意味着什么——谷里压根不该有会发光的东西。
      藤根在头顶咯吱作响。同伴石头的喊声从崖顶飘下来，远得像隔着一条河。
    choices:
      - text: 腾出右手，先把匣子抠出来
        karma: none
        check: { actor: "talent.根骨 * 1.2", dc: "58", scale: 10 }
        onCritSuccess:
          text: |
            两指探进石缝，匣子应手而出。你借着换手的一荡，三下攀回了崖顶。
            石头看着你，半天说出一句：「你疯了。」你把匣子揣好，没接话。
          effects: ["根骨 +1", "flag 绝灵·匣到手"]
          goto: evt_gw_juelin_wuhui
        onSuccess:
          text: 匣子抠出来的一瞬，藤根断了半股。你咬着匣子爬回崖顶，十指全是血。
          effects: ["factors.状态 -0.08", "flag 绝灵·匣到手"]
          goto: evt_gw_juelin_wuhui
        onFail:
          text: |
            指尖差半寸。第三次去够时肩膀脱了臼，你靠一条胳膊吊到石头放绳下来。
            匣子最后是用脚尖一点一点蹭出来的——落进药篓的那声响，比什么都好听。
          effects: ["factors.状态 -0.18", "flag 绝灵·匣到手"]
          goto: evt_gw_juelin_wuhui
        onCritFail:
          text: |
            你够到了匣子——藤根应声而断。半壁摔下去，砸在下方的岩台上，
            匣子弹出手，坠进涧雾，连声响都没有。石头把你吊上来时，你还在往下看。
          effects: ["factors.状态 -0.3", "lifespan -1"]

      - text: 不贪这一时。先攀回崖顶，再用采药绳吊下来取
        karma: none
        effects: ["道心 +1", "flag 绝灵·稳取匣", "flag 绝灵·匣到手"]
        then:
          text: |
            你多悬了一炷香的工夫才回到崖顶，又吊着绳下来。这一回手稳眼也稳，
            匣子四面你都看了个仔细——连匣底那一行细刻的小字，也没漏过。
          goto: evt_gw_juelin_wuhui

      - text: 喊石头放绳，两人一起弄——这东西瞒不住他
        karma: none
        effects: ["factors.伙伴 +0.04", "flag 绝灵·石头见匣", "flag 绝灵·匣到手"]
        then:
          text: |
            石头把你拽上崖顶，又陪你吊下去取了匣子。上来之后他一直盯着那线光，
            咽了口唾沫，什么都没说——但你知道，他看见了。
          goto: evt_gw_juelin_wuhui

      - text: 不该在的东西就别碰。攀回崖顶，只当没看见
        karma: none
        effects: ["道心 +4", "flag 金手指已定"]
        then:
          text: |
            你爬回崖顶，背起药篓下山。七叶芝一株没少，这才是今天该带回去的东西。
            那线光在你身后的石缝里，又归于它待了不知多少年的黑。

      - text: 回谷报给聂铁山，让老拳师拿主意
        karma:
          type: 施恩
          target: 老拳师·聂铁山
          weight: 12
          polarity: 1
          hooks:
            - id: 老头记你一功
            - id: 三日后，老头独自上了北崖
        effects: ["名望 +4", "flag 金手指已定"]
        then:
          text: |
            聂铁山听完，擦拳的手停了停：「谷里有光？」他没再问细处，只说知道了。
            三日后有人看见他独自上了北崖。回来之后，他教拳教得比往常狠了许多。

  - id: evt_gw_juelin_wuhui
    title: 无灰之匣
    weight: 100
    act: 1
    once: true
    cond: "flag('绝灵·匣到手') && !flag('金手指已定')"
    tags: [主干, 机缘, 岔路, 绝灵谷]
    text: |
      匣身没有锁，严丝合缝，摸不出开口。你顺着石纹错动匣盖，第七下，它开了。
      里面衬着褪色的绒布，搁着两样东西：
      一只三寸小鼎，鼎口封蜡，那线光就从蜡缝里漏出来，落在绝灵谷的夜里，亮得扎眼；
      一枚薄如指甲的玉简，贴着绒布，凉得不像石头。
      谷里人人都知道，这地方留不住灵物。可这匣子在石缝里不知躺了多少年。
      有人费了大力气，把东西藏进了天底下最找不见的地方。
    choices:
      - text: 揭了封蜡，捧出小鼎
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +15"
          - "expose.残魂 +3"
          - "悟性 +3"
        then:
          text: |
            蜡一破，鼎里透出一声长长的、如释重负的叹息。
            「多少年了……」一个苍老的声音在你颅内响起，「进来的怎么是个孩子。」

      - text: 收下玉简
        karma: none
        effects:
          - "flag 金手指已定"
          - "bind.system 签到"
          - "expose.金手指 +4"
          - "僭越 +5"
        then:
          text: |
            光纹贴上指尖就活了，一个没有起伏的声音响在颅内：「绝灵之地，签到有效。」
            在这座连火折子都燃得勉强的谷里，它是唯一对你亮着的东西。

      - text: 吊在绳上时你看清了匣底的刻字——「灵不出谷，人不寻鼎」
        require: "flag('绝灵·稳取匣')"
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 婆婆认亲
            - id: 药王谷旧债
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +20"
          - "expose.残魂 +1"
          - "悟性 +3"
          - "originClues +2"
        then:
          text: |
            你照着那八个字的意思，只请出小鼎，玉简连匣封回石缝，堵死。
            鼎里的声音沉默了很久：「你读懂了。……刻那行字的人，是我自己。」

      - text: 石头咽着唾沫盯了半天。「谷里的规矩——见者有份。」玉简归他
        require: "flag('绝灵·石头见匣')"
        karma:
          type: 施恩
          target: 同伴·石头
          weight: 15
          polarity: 1
          hooks:
            - id: 石头得了机缘，记你一辈子
            - id: 石头夜里开始对着玉简说话
        effects:
          - "flag 金手指已定"
          - "bind.soul 苏婆婆 8"
          - "soul.苏婆婆.favor +15"
          - "expose.残魂 +3"
          - "悟性 +3"
          - "功德 +5"
          - "factors.伙伴 +0.06"
        then:
          text: |
            石头捧着玉简的手一直在抖。「份成这样？」他问。你说，规矩就是规矩。
            下山的路上他一句话没说，到了谷口忽然站住：「往后你的事，就是我的事。」

      - text: 原样合匣，塞回石缝，堵死
        karma: none
        effects: ["flag 金手指已定", "flag 无系统", "道心 +10", "originClues +1"]
        then:
          text: |
            你搬了三块石头把缝堵死，又抹了把崖土。做完这些，天已经亮了。
            有人把它藏进天底下最找不见的地方——自然有藏它的道理。你不必是找见它的人。
`,fr=`# 岔路 6 · 师承 —— 三位可拜的师父（备选主线链）
#
# 互斥机制：三条链共用 flag('师承已定')。链首另检 flag('师承有约')，
# 防止两位师父同时把你当徒弟考。谁先被抽到，这一局的师承入口便落在谁身上。
#
# 链一 · 剑痴聂断水（act1，宗门弟子限定）：相遇看眼力，考验看敢不敢往剑气里递剑
# 链二 · 落第丹儒顾迁（act1，通用出身）：三天抓药不许错一味——教的不是药，是读人
# 链三 · 匿名魔修灰衣人（act2，野出身加权）：送一封不许拆的信——拆了他反而收你
#
# 跨卡回响（每链至少一处）：
# 链一：卡1「看破一式」→ 卡2 可喊破一剑 → 卡3 多一条「得见真传」的收徒出口
# 链二：卡1「看破药毒」→ 卡2 可单包附注 → 卡3 顾迁认出你把那味毒记了多久
# 链三：卡1「识破魔功」→ 卡3「不拆信」的人多一条赌命翻盘的收徒出口
#
# 长线因果：聂断水——折断他剑的人（致死钩，预警链齐）；
# 顾迁——丹会旧案，黜落他的主考如今位高；灰衣人——追杀他的旧账（致死钩，预警链齐）。

events:

  # ══════════════════════════════════════════════════════════
  # 链一 · 剑痴聂断水（相遇 → 递剑 → 收徒或错过）
  # ══════════════════════════════════════════════════════════

  - id: evt_ms_nie_yujian
    title: 雨里的半截剑
    weight: 110
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.2 && flag('宗门弟子') && !flag('师承已定') && !flag('师承有约')"
    tags: [主干, 机缘, 师承]
    text: |
      你替执事送月例丹药去客卿院，赶上大雨，院门虚掩着。
      客卿聂断水立在院中雨里，手上是半截断剑。同一式起手，收势，再起手。
      外门都传这位剑痴不收徒、不见客，一柄剑断了三十年也不换。
      雨水顺着他的下颌往下淌。不知过了多久，他忽然收势，隔着雨帘望向门口。
      「看了多久？」
    choices:
      - text: 「从头看到尾。」
        karma: none
        effects: ["flag 剑约·聂断水", "flag 师承有约"]
        then:
          text: |
            他盯了你片刻，把断剑负回背后。
            「明日卯时，剑坪。」说完转身进屋，再没看你一眼。

      - text: 「方才刚到。」
        karma:
          type: 欺骗
          target: 聂断水
          weight: 8
          polarity: -1
          hooks:
            - id: 剑痴眼里揉不得沙
        effects: ["flag 师承已定", "flag 错过聂断水", "道心 -2"]
        then:
          text: |
            「鞋。」他只说了一个字。
            你低头——两只鞋在雨水里泡得透湿。他掩门的声音不重，却像把什么东西切断了。

      - text: 「前辈这一式，肘沉了半寸。」
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "60", scale: 10 }
        onSuccess:
          text: |
            他半晌没说话，雨声显得格外响。
            「……明日卯时，剑坪。」推门前又停了停，「到时候再说一遍，沉了几寸。」
          effects: ["flag 剑约·聂断水", "flag 师承有约", "flag 看破一式"]
        onFail:
          text: |
            「半寸？」他冷笑一声，随手一挥，雨珠在你眼前齐齐断成两截。
            「眼比手高。回去。」——但你转身时，他补了一句：「明日卯时，剑坪。敢来再说。」
          effects: ["flag 剑约·聂断水", "flag 师承有约", "名望 -1"]

      - text: 放下丹药，低头退出去
        karma: none
        effects: ["flag 师承已定", "flag 错过聂断水", "锋芒 -0.05"]
        then:
          text: |
            你把食盒搁在檐下，退出院门。雨更大了。
            往后你偶尔还会想起那一式——想不起起手，只记得雨。

      - text: 「雨大伤身，前辈何苦。」
        karma:
          type: 施恩
          target: 聂断水
          weight: 6
          polarity: 1
          hooks:
            - id: 他记得这句废话
        effects: ["flag 师承已定", "flag 错过聂断水"]
        then:
          text: |
            「剑没伤着我，雨伤得着？」他嗤了一声，却接过了食盒。「回去吧。」
            门合上前，你听见里面极轻地咳了一声。

  - id: evt_ms_nie_dijian
    title: 剑坪递剑
    weight: 180
    act: 1
    once: true
    cond: "flag('剑约·聂断水') && !flag('剑坪已了')"
    tags: [主干, 岔路, 师承]
    text: |
      卯时的剑坪来了个外人——游方剑客，佩三尺青锋，点名要会一会「剑痴」。
      聂断水没推辞。两人拆到三十招开外，剑气把青石犁出一道道白痕，围观的同门退出两丈又两丈。
      忽地一声脆响，那半截断剑被震脱了手，落在你脚边。
      剑客持剑逼近。聂断水空着手站在原地，谁也没看——偏偏你觉得，他在等。
    choices:
      - text: 冲进剑气里，把断剑递过去
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.5", dc: "56", scale: 10 }
        onCritSuccess:
          text: |
            你贴着剑气的缝隙抢进去，剑柄拍进他掌心。
            他反手便是一式——正是雨里练的那一式。青锋应声而折。
          effects: ["flag 递过剑", "flag 剑坪已了", "名望 +6"]
          goto: evt_ms_nie_shoutu
        onSuccess:
          text: 剑气在你小臂上开了道口子，血珠溅在青石上。剑，递到了。
          effects: ["flag 递过剑", "flag 剑坪已了", "factors.状态 -0.1"]
          goto: evt_ms_nie_shoutu
        onFail:
          text: |
            你被剑气掀翻，滚了半圈，硬是把剑柄塞进他手里。
            血把剑柄都浸滑了。后面的胜负你是躺着看完的。
          effects: ["flag 递过剑", "flag 递剑带伤", "flag 剑坪已了", "factors.状态 -0.2"]
          goto: evt_ms_nie_shoutu
        onCritFail:
          text: |
            剑气贴着前胸掠过，你眼前一黑，最后的记忆是把剑朝他的方向掷了出去。
            醒来已在榻上，胸口缠了三层布，同屋说你昏了一天一夜。
          effects: ["flag 递过剑", "flag 递剑带伤", "flag 剑坪已了", "factors.状态 -0.3", "lifespan -1"]
          goto: evt_ms_nie_shoutu

      - text: 用脚尖挑起断剑，隔空踢给他
        karma: none
        effects: ["flag 踢过剑", "flag 剑坪已了"]
        then:
          text: |
            断剑在空中翻了两翻，他探手接住，一式逼退剑客。场面赢了。
            他收势时朝你这边看了一眼——那一眼看得你心里发凉。
          goto: evt_ms_nie_shoutu

      - text: 「肘沉半寸——他挑你右肩！」
        require: "flag('看破一式')"
        karma: none
        effects: ["flag 喊破一剑", "flag 剑坪已了", "名望 +4", "expose.真实修为 +3"]
        then:
          text: |
            话音未落，青锋果然斜挑右肩。聂断水空手错身，两指夹住剑脊，就势一带——剑客踉跄跌出剑坪。
            满场死寂。聂断水看也不看你：「捡剑。」
          goto: evt_ms_nie_shoutu

      - text: 站在人群里，看完这一场
        karma: none
        effects: ["flag 未递剑", "flag 剑坪已了", "道心 -2"]
        then:
          text: |
            聂断水最终空手夺了剑，胜得干净。断剑在你脚边躺到散场，最后是个杂役捡走的。
            你说不清自己方才在等什么——等的东西没有来。
          goto: evt_ms_nie_shoutu

      - text: 趁乱悄悄退出剑坪——这浑水沾不得
        karma: none
        effects: ["flag 未递剑", "flag 剑坪已了", "锋芒 -0.05"]
        then:
          text: |
            你退到人群外，又退出月洞门。剑鸣声在背后响了很久。
            当夜你睡得并不安稳，梦里总有一柄剑躺在脚边。
          goto: evt_ms_nie_shoutu

  - id: evt_ms_nie_shoutu
    title: 断剑三十年
    weight: 180
    act: 1
    once: true
    cond: "flag('剑坪已了')"
    tags: [主干, 岔路, 师承]
    text: |
      当夜你被叫去客卿院。聂断水坐在檐下擦那半截剑，动作很慢，像在擦一件比命长的东西。
      「白日剑坪上，你做的事，我都看见了。」
      他把断剑横在膝上，第一次正眼看你。
      「说说。那时候，你在想什么？」
    choices:
      - text: 「没想。剑在地上，前辈的手空着。」
        require: "flag('递过剑') && !flag('递剑带伤')"
        karma:
          type: 传承
          target: 聂断水
          weight: 30
          polarity: 0
          matureWindow: [30, 150]
          hooks:
            - id: 倾囊相授
            - id: 折剑之人寻来
              lethal: true
              foreshadow:
                - { at: -12, evt: "有人在山下打听聂断水收了什么样的徒弟" }
                - { at: -5, evt: "师父连夜擦剑，一直擦到天亮" }
                - { at: -1, evt: "聂断水递来一封信：「他来了。你可以走。」", window: true }
        effects: ["flag 师承·聂断水", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.15", "道心 +4", "锋芒 +0.05"]
        then:
          text: |
            「好。」他把断剑往你面前一放。「磕头就免了。明日起，卯时剑坪。
            我教的剑没有名字——断过一次，才算开锋。」

      - text: 你拉开衣襟，露出新缠的伤布。「想的是——这一道，值。」
        require: "flag('递剑带伤')"
        karma:
          type: 传承
          target: 聂断水
          weight: 30
          polarity: 0
          matureWindow: [30, 150]
          hooks:
            - id: 倾囊相授
            - id: 折剑之人寻来
              lethal: true
              foreshadow:
                - { at: -12, evt: "有人在山下打听聂断水收了什么样的徒弟" }
                - { at: -5, evt: "师父连夜擦剑，一直擦到天亮" }
                - { at: -1, evt: "聂断水递来一封信：「他来了。你可以走。」", window: true }
        effects: ["flag 师承·聂断水", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.15", "道心 +6"]
        then:
          text: |
            他看着那道伤，看了很久。「疼过，还敢伸手。」
            他起身进屋，摸出一小瓶金疮药丢给你。「明日卯时。伤好之前，用左手练。」

      - text: 「弟子想的是——那半寸，前辈自己知道。」
        require: "flag('喊破一剑')"
        karma:
          type: 传承
          target: 聂断水
          weight: 30
          polarity: 0
          matureWindow: [30, 150]
          hooks:
            - id: 倾囊相授
            - id: 折剑之人寻来
              lethal: true
              foreshadow:
                - { at: -12, evt: "有人在山下打听聂断水收了什么样的徒弟" }
                - { at: -5, evt: "师父连夜擦剑，一直擦到天亮" }
                - { at: -1, evt: "聂断水递来一封信：「他来了。你可以走。」", window: true }
        effects: ["flag 师承·聂断水", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.15", "悟性 +3", "flag 得见一式真传"]
        then:
          text: |
            「三十年，看出这半寸的，你是第二个。」他顿了顿。
            「第一个，就是折断这柄剑的人。」他没有再说下去。「明日卯时。那半寸，我教你补。」

      - text: 「剑到了前辈手里就行。怎么到的，要紧么？」
        require: "flag('踢过剑')"
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过聂断水", "悟性 +2"]
        then:
          text: |
            「要紧。」他把断剑收回鞘中。「取巧的人，练不了我的剑。
            脚下功夫倒不坏——去学身法，能成。」这是指点，也是逐客。

      - text: 「弟子没敢。」
        require: "flag('未递剑')"
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过聂断水", "道心 +3"]
        then:
          text: |
            「嗯。」他不置可否。「不敢，不丢人。学剑是把命递出去的活，你把命留住了。」
            他挥挥手。「走吧。往后，别学剑。」

      - text: 跪下。「弟子求前辈收留。」
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过聂断水", "锋芒 -0.03"]
        then:
          text: |
            「起来。」他的声音没有起伏。「拜师不在膝盖上。
            剑坪上你已经答过了——答的什么，你自己清楚。」

  # ══════════════════════════════════════════════════════════
  # 链二 · 落第丹儒顾迁（相遇 → 三天抓药 → 收徒或错过）
  # ══════════════════════════════════════════════════════════

  - id: evt_ms_gu_yiguan
    title: 济生堂的规矩
    weight: 80
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.2 && path != '妖修' && path != '鬼道' && !flag('师承已定') && !flag('师承有约')"
    tags: [主干, 机缘, 师承]
    text: |
      山下济生堂，坐堂的顾迁是个落第丹儒——丹会黜落的名头挂了半辈子，修为浅得几乎瞧不出，方圆百里的病人却只认他。
      你去抓药那日，堂里排着长队。一个绸衫商人挤到案前，拍下一锭银子。「加急。」
      顾迁头也不抬。「排队。」
      商人又摸出一块灵石。队尾抱着孩子的妇人往前探了探，又缩回去。孩子烧得满脸通红。
    choices:
      - text: 上前一步，把商人请回队尾
        karma:
          type: 施恩
          target: 顾迁
          weight: 8
          polarity: 1
          hooks:
            - id: 丹儒记性极好
        effects: ["flag 拦过富商", "flag 药约·顾迁", "flag 师承有约", "名望 +2"]
        then:
          text: |
            商人上下打量你，把银子收了，撂下句「不识抬举」走了。
            顾迁这才抬头看你一眼。「会抓药么？」不等你答：「明日起，来帮三天工。错一味，走人。」

      - text: 凑近看那孩子两眼，低声说出病源
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "62", scale: 10 }
        onSuccess:
          text: |
            「舌绛无苔——不是风寒，是误服了热药。」你声音压得很低。
            顾迁执笔的手停了。他重新看了孩子，也重新看了你。「明日起，来帮三天工。错一味，走人。」
          effects: ["flag 看破药毒", "flag 药约·顾迁", "flag 师承有约"]
        onFail:
          text: |
            「风热入肺——」你话没说完，顾迁摆手打断。「莫要卖弄。」
            他利落开了方子，末了却补一句：「话说错了，眼神没错。想学，明日来帮三天工。错一味，走人。」
          effects: ["flag 药约·顾迁", "flag 师承有约", "名望 -1"]

      - text: 商人拂袖带翻案上药戥，你抢先托住
        karma: none
        effects: ["flag 护过药戥", "flag 药约·顾迁", "flag 师承有约"]
        then:
          text: |
            戥杆没沾地。你把戥子摆回原位，秤星对得一丝不差。
            「东西比人金贵？」「戥子准，抓的药才准。」他难得地笑了一下。「明日起，来帮三天工。错一味，走人。」

      - text: 收下商人塞来的灵石，替他说两句话
        karma:
          type: 欺骗
          target: 顾迁
          weight: 8
          polarity: -1
          hooks:
            - id: 他把你的脸记下了
        effects: ["flag 师承已定", "flag 错过顾迁", "堕度 +2", "名望 -2"]
        then:
          text: |
            「病有轻重，诊金自然也该有轻重。」你说得圆滑。
            顾迁终于抬头，目光把你从头到脚看了一遍，很平静。「药，我不卖你。济生堂治病，不治这个。」

      - text: 抓完自己的药，付钱走人
        karma: none
        effects: ["flag 师承已定", "flag 错过顾迁"]
        then:
          text: |
            药童称药，你付钱出门。身后顾迁不紧不慢的声音又响起来：「排队。」
            多年后你早忘了这一日，只偶尔在闻到药香时，想起一张烧红的小脸。

  - id: evt_ms_gu_zhuayao
    title: 第三天的方子
    weight: 180
    act: 1
    once: true
    cond: "flag('药约·顾迁') && !flag('药庐三日毕')"
    tags: [主干, 岔路, 师承]
    text: |
      头两日你没错一味。戥高戥低，顾迁眼皮都不抬，却总能隔着半间屋报出你手上的分量。
      第三日打烊前，最后一张方子递进来——顾迁亲笔。你逐味配到一半，手停住了。
      方上一味「九节蘅」，性烈走窜，与这病人的沉疴犯冲。
      要么是先生笔误，要么……这一味写的就不是药。
    choices:
      - text: 拿着方子走到案前，当面问
        karma: none
        effects: ["flag 当面问方", "flag 药庐三日毕"]
        then:
          text: |
            「先生，这一味与病犯冲。」顾迁不抬头。「方子上写什么，抓什么。」
            「病人吃了要坏事——请先生再看一眼。」他这才搁笔接过方子，看了看，随手改掉一味。「抓吧。」

      - text: 一味不差，照方抓完
        karma: none
        effects: ["flag 照方抓了", "flag 药庐三日毕"]
        then:
          text: |
            你把「九节蘅」称足分量，包进药里。呈上去时顾迁扫了一眼，收进柜台底下，没说好，也没说不好。
            那副药最后有没有煎给病人，你不知道。

      - text: 不声不响，自己把那味换掉
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.2", dc: "66", scale: 10 }
        onSuccess:
          text: |
            你换了性平的「白蘅」，分量照旧。包好呈上，顾迁拆开抖了抖，把每一味都过了一遍手。
            他的手指在白蘅上停了一停，什么也没说。
          effects: ["flag 私改药方", "flag 改对了", "flag 药庐三日毕"]
        onFail:
          text: |
            你自作主张换了一味。顾迁拆包过手，拈起你换的那味放在鼻下一闻，眉头动了动。
            「第三天。」他只说了这三个字。你后知后觉地明白——换错了。
          effects: ["flag 私改药方", "flag 改错了", "flag 药庐三日毕", "道心 -2"]

      - text: 照方抓齐，只把那一味单独包起，附一行小字
        require: "flag('看破药毒')"
        karma: none
        effects: ["flag 单包附注", "flag 药庐三日毕"]
        then:
          text: |
            你认得这味药——那日孩子误服的热毒里，就有它。
            你把它单独包了，附上小字：「此味与症相冲，去留请先生定。」呈上去时，顾迁看那行字看了很久。

      - text: 压低声音，去问抓了一辈子药的老伙计
        karma: none
        effects: ["flag 照方抓了", "flag 问过伙计", "flag 药庐三日毕", "锋芒 -0.02"]
        then:
          text: |
            老伙计眯眼看了看方子，又看了看柜台后的顾迁，慢吞吞把烟杆敲了敲，一个字也没有。
            你只好照方抓齐。打烊时你回头，正撞上顾迁收回去的目光。

  - id: evt_ms_gu_shoutu
    title: 两碗粗茶
    weight: 180
    act: 1
    once: true
    cond: "flag('药庐三日毕')"
    tags: [主干, 岔路, 师承]
    text: |
      第三天打烊，顾迁闩了门，泡了两碗粗茶，一碗推到你面前。
      「三天，辛苦。」他吹开茶沫。「最后那张方子是我写的——写坏一味，也是故意的。」
      「说说吧。你当时怎么想，怎么做的。」
      茶汤很酽，映着灯，你看不清他的眼睛。
    choices:
      - text: 「弟子不知道方子是对是错——所以问。」
        require: "flag('当面问方')"
        karma:
          type: 传承
          target: 顾迁
          weight: 26
          polarity: 0
          matureWindow: [30, 140]
          hooks:
            - id: 倾囊相授的读人术
            - id: 丹会旧案——黜他的主考如今位高
        effects: ["flag 师承·顾迁", "flag 师承已定", "unflag 师承有约", "factors.情报 +0.12", "悟性 +2"]
        then:
          text: |
            「不知道就问——这几个字，十个修士九个学不会。」他把茶一口饮尽。
            「我教不了你腾云驾雾。我教你认药、认脉、认人。药有君臣，人有表里——往后你看谁，都是一张方子。」

      - text: 「弟子换了。人写的方子，人会错。」
        require: "flag('改对了')"
        karma:
          type: 传承
          target: 顾迁
          weight: 26
          polarity: 0
          matureWindow: [30, 140]
          hooks:
            - id: 倾囊相授的读人术
            - id: 丹会旧案——黜他的主考如今位高
        effects: ["flag 师承·顾迁", "flag 师承已定", "unflag 师承有约", "factors.情报 +0.12", "锋芒 +0.03"]
        then:
          text: |
            「胆子不小。」他盯了你半晌，忽然笑了。「换对了是眼力，敢换是胆气。
            但记着——这两样凑不齐的时候，宁可去问。」他起身取了纸笔。「学吧。先学认人。」

      - text: 「弟子换错了一味。愿领责罚。」
        require: "flag('改错了')"
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过顾迁", "悟性 +2", "道心 +2"]
        then:
          text: |
            「罚就不必了，药没出这个门。」他把你换错的那味搁在桌上。
            「三天错一味，我不能收。这一味你带走——搁在看得见的地方，记一辈子，比拜我有用。」

      - text: 「方子是先生写的。弟子信先生。」
        require: "flag('照方抓了')"
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过顾迁", "悟性 +1"]
        then:
          text: |
            「信我？」他叹了口气。「我写坏的那味，病人吃下去是要偿命的。
            你信的不是我，是不想担干系。」他把茶收了。「读人先读己。三天工钱照付——回去吧。」

      - text: 你把那包单独的药推过去。「去留，请先生定。」
        require: "flag('单包附注')"
        karma:
          type: 传承
          target: 顾迁
          weight: 26
          polarity: 0
          matureWindow: [30, 140]
          hooks:
            - id: 倾囊相授的读人术
            - id: 丹会旧案——黜他的主考如今位高
        effects: ["flag 师承·顾迁", "flag 师承已定", "unflag 师承有约", "factors.情报 +0.12", "悟性 +2", "功德 +3", "flag 得授读人术"]
        then:
          text: |
            他捻开那行小字，看了很久。「那孩子的毒，你记到今日。」
            「记性好不算什么。难得的是，你把定夺还给我，自己不越一步。」他起身，朝你长长一揖。「这三天，是我在受教。明日起，随我坐堂。」

      - text: 起身长揖。「无论先生收不收，谢这三天。」
        karma:
          type: 施恩
          target: 顾迁
          weight: 6
          polarity: 1
          hooks:
            - id: 山下永远有你一碗茶
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过顾迁"]
        then:
          text: |
            顾迁摆摆手。「茶喝完再走。」灯花爆了一声。
            你出门时，他在身后说：「往后抓药，先看抓药的人——这句，白送你。」

  # ══════════════════════════════════════════════════════════
  # 链三 · 匿名魔修灰衣人（相遇 → 送信 → 收徒或错过）
  # ══════════════════════════════════════════════════════════

  - id: evt_ms_mo_jiuming
    title: 灰衣人
    weight: 90
    act: 2
    once: true
    cond: "tier == 2 && !flag('师承已定') && !flag('师承有约') && (!flag('宗门弟子') || chance(0.35))"
    tags: [主干, 机缘, 师承]
    text: |
      野渡口的破庙里，三个修士堵住了你，为你身上那点东西。为首的刀已经出鞘。
      变故只在一瞬——庙门口不知何时立了个灰衣人，咳了一声。
      三人像被无形的手掐住脖颈，齐齐僵在原地，冷汗把衣裳洇透。
      灰衣人挨个翻过他们的储物袋，取走一件东西，其余的丢到你脚边。
      「命，我不要。东西，你分了。」他说话很轻，像怕吵着谁。
    choices:
      - text: 收下东西，抱拳道谢
        karma: none
        effects: ["flag 遇灰衣人", "flag 师承有约", "factors.法宝 +0.05"]
        then:
          text: |
            他看你把东西收好，没说好坏，跨出庙门前留下一句：「拿了就是你的。别烧香还愿——我不是佛。」
            此后他偶尔出现，教你一两手，从不留名，也从不许你问。

      - text: 不收。「敢问前辈名姓？」
        karma: none
        effects: ["flag 问过姓名", "flag 遇灰衣人", "flag 师承有约", "道心 +2"]
        then:
          text: |
            「救你的人，要什么名姓？」他笑了一声，不答。「讨债的才通名报姓。」
            他抬脚跨出门槛，又停了停：「东西不拿是你的事。往后我教你的东西，你最好拿着。」

      - text: 盯着他制人的那一下，看出路数
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.4", dc: "60", scale: 10 }
        onSuccess:
          text: |
            摄魂定窍，走的是煞气——魔道的手段。你认出来了，没说破，只把目光收得很稳。
            他瞥了你一眼，眼底掠过一点极淡的笑意。「眼睛不错。活得长的人，都有这么一双眼睛。」
          effects: ["flag 识破魔功", "flag 遇灰衣人", "flag 师承有约"]
        onFail:
          text: |
            你盯着他的手看了太久。他忽然回头，庙里的温度像降了一截。「不该看的，少看。」
            此后他仍旧偶尔出现，教你一两手——只是你再没敢多看他的手。
          effects: ["flag 遇灰衣人", "flag 师承有约", "锋芒 +0.02"]

      - text: 跪下磕头，求他教你
        karma: none
        effects: ["flag 求过拜师", "flag 遇灰衣人", "flag 师承有约"]
        then:
          text: |
            「起来。」他皱眉，语气头一回重了。「膝盖软的人，学不了我的东西。」
            你以为完了，他却在门口丢下一句：「跟着吧。别叫师父，也别打听我是谁。」

      - text: 道了谢，转身就走，越远越好
        karma: none
        effects: ["flag 师承已定", "flag 错过灰衣人", "道心 +3", "锋芒 -0.03"]
        then:
          text: |
            那手段太阴，来历太深，这样的人沾上就是因果。你把东西留在原地，退出破庙。
            灰衣人没拦，只在你身后轻轻说了句：「聪明。」——不知怎么，这两个字你记了很多年。

  - id: evt_ms_mo_songxin
    title: 不许拆的信
    weight: 180
    act: 2
    once: true
    cond: "flag('遇灰衣人') && !flag('信已送到') && !flag('烧了信')"
    tags: [主干, 岔路, 师承]
    text: |
      他教了你数月。从不教整套，只教「怎么活」——怎么走夜路，怎么看人手，怎么在三句话里听出杀意。
      这一日他递来一封信。火漆封口，无名无姓。
      「送到青槐渡，交给一个戴斗笠的女人。三日为限。」
      他顿了顿，补了三个字。「不许拆。」
      你接信时发现，那火漆的手法，正是他上月教你的那一种。
    choices:
      - text: 原样送到，一路不停
        karma: none
        effects: ["flag 原样送信", "flag 信已送到"]
        then:
          text: |
            两日一夜，你把信递到斗笠女人手里。她验过火漆，掀起笠檐看了你一眼——只一眼，你竟看不出她的深浅。
            「回去吧。」她说。「告诉他，账，我记下了。」

      - text: 半路拆开看——火漆手法是他教的，能复原
        karma: none
        effects: ["flag 拆过信", "flag 信已送到", "道心 -2"]
        then:
          text: |
            夜里你起了火漆。信纸上只有一行字。你看完，独坐了半宿，把信原样封好——手法是他教的，封得天衣无缝。
            次日信送到青槐渡，斗笠女人验过火漆，什么也没说。

      - text: 不动火漆，对着日头隔纸辨字
        karma: none
        check: { actor: "talent.神魂 + talent.悟性 * 0.3", dc: "58", scale: 10 }
        onSuccess:
          text: |
            纸厚墨淡，日头底下只隐约辨出最末两个字——「可教」。
            你的心口猛地跳了一下。你把信收好，装作什么也没看见，照旧送到了青槐渡。
          effects: ["flag 隔纸窥信", "flag 信已送到"]
        onFail:
          text: |
            纸太厚，日头底下什么也照不出来。你举了半晌，胳膊都酸了，终究没敢动火漆。
            信原样送到了青槐渡。
          effects: ["flag 原样送信", "flag 信已送到"]

      - text: 把信烧了，不去青槐渡
        karma: none
        effects: ["flag 烧了信", "道心 -1"]
        then:
          text: |
            魔修的信，送到哪里都是因果。你在野地里点了火，看火漆熔成一滴黑泪。
            灰烬被风卷走那一刻你就后悔了——不是怕他。是你头一回，亲手烧掉一件托付。

      - text: 送到之后，多问那女人一句他的来历
        karma: none
        effects: ["flag 原样送信", "flag 问过渡口女人", "flag 信已送到"]
        then:
          text: |
            女人验过火漆，听到这一问，掀起笠檐把你从头到脚看了一遍。「他没说，我便不能说。」
            顿了顿，又添半句：「你只须记得——他如今这副脾气，是拿命换来的。」

  - id: evt_ms_mo_jieru
    title: 两碗浊酒
    weight: 180
    act: 2
    once: true
    cond: "flag('信已送到') || flag('烧了信')"
    tags: [主干, 岔路, 师承]
    text: |
      三日后，灰衣人在你落脚处等你，桌上摆着两碗浊酒。
      「信的事，说说。」他把一碗推过来，自己先喝了一口。
      「想清楚再开口。我这个人——最恨旁人对我说谎，也最瞧不起不敢认账的人。」
      灯芯哔剥响了一声。他就坐在灯影里看着你。
    choices:
      - text: 「拆了。」你把信上那行字，一字一字背了出来。
        require: "flag('拆过信')"
        karma:
          type: 传承
          target: 灰衣人
          weight: 32
          polarity: 0
          matureWindow: [40, 160]
          hooks:
            - id: 倾囊以授，从不留名
            - id: 追他的人一路杀来
              lethal: true
              foreshadow:
                - { at: -14, evt: "集镇上多了几张生面孔，逢人便展开画影图形" }
                - { at: -6, evt: "他教你的东西忽然快了，像在赶时间" }
                - { at: -1, evt: "桌上留着一枚黑木牌：「他们到了。带牌走，或烧了它。」", window: true }
        effects: ["flag 师承·灰衣人", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.15", "堕度 +3", "僭越 +3"]
        then:
          text: |
            信上写的是——「送信人若原封送到，赏他一程盘缠，打发了便是；若是拆过，此子可教。」
            他听你背完，仰头把酒饮尽，笑出了声。「头一课，记住了——规矩，是定规矩的人拿来拴旁人的。
            你起火漆那一刻，才算入了我的门。」

      - text: 「没拆。先生是什么路数，弟子头一日就看出来了——看出来了，还是走了这一趟。」
        require: "flag('原样送信') && flag('识破魔功')"
        karma:
          type: 传承
          target: 灰衣人
          weight: 32
          polarity: 0
          matureWindow: [40, 160]
          hooks:
            - id: 倾囊以授，从不留名
            - id: 追他的人一路杀来
              lethal: true
              foreshadow:
                - { at: -14, evt: "集镇上多了几张生面孔，逢人便展开画影图形" }
                - { at: -6, evt: "他教你的东西忽然快了，像在赶时间" }
                - { at: -1, evt: "桌上留着一枚黑木牌：「他们到了。带牌走，或烧了它。」", window: true }
        effects: ["flag 师承·灰衣人", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.15", "道心 +3"]
        then:
          text: |
            他端着碗的手停在半空，很久。「知道我是什么人，不拆信，也不逃——这不是蠢。」
            他把碗放下。「是赌。拿命赌我不迁怒。」他忽然笑了。「敢押命的，也可教。明日起，跟我走一趟。」

      - text: 「原封没动。先生说了，不许拆。」
        require: "flag('原样送信')"
        karma:
          type: 施恩
          target: 灰衣人
          weight: 12
          polarity: 1
          matureWindow: [30, 150]
          hooks:
            - id: 他日有难，灰衣相援
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过灰衣人", "factors.功法 +0.05", "道心 +4"]
        then:
          text: |
            「守信。是好人。」他点点头，神色却淡下去。他把自己那碗喝干，起身，将一页折得整齐的残篇压在酒碗底下。
            「好人，学不了我的东西——学了是害你。这一页防身够用。」门开了又合，灯焰晃了晃。他没有再来过。

      - text: 「弟子……对着日头照过。没拆。」
        require: "flag('隔纸窥信')"
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过灰衣人", "道心 -3"]
        then:
          text: |
            他脸上那点笑意，一寸一寸退干净了。「隔着纸偷看——既想要，又想装干净。」
            他起身，袖子带起一阵风。「说谎的我杀，守信的我送。你这种，我懒得沾。」门砰的一声。桌上两碗酒，一碗没动。

      - text: 「信，弟子烧了。」你把碗推开，坐直，等他发落。
        require: "flag('烧了信')"
        karma:
          type: 传承
          target: 灰衣人
          weight: 32
          polarity: 0
          matureWindow: [40, 160]
          hooks:
            - id: 倾囊以授，从不留名
            - id: 追他的人一路杀来
              lethal: true
              foreshadow:
                - { at: -14, evt: "集镇上多了几张生面孔，逢人便展开画影图形" }
                - { at: -6, evt: "他教你的东西忽然快了，像在赶时间" }
                - { at: -1, evt: "桌上留着一枚黑木牌：「他们到了。带牌走，或烧了它。」", window: true }
        effects: ["flag 师承·灰衣人", "flag 师承已定", "unflag 师承有约", "factors.功法 +0.12", "道心 +5"]
        then:
          text: |
            「烧了。」他重复了一遍，忽然笑出声来。「烧了我的信，还敢坐在这儿等我——毁我的事，认我的账。」
            他把你面前那碗酒推得更近。「那信，本就不是给她的。喝了。魔道收徒没有跪礼——一碗酒，两清起头。」

      - text: 你端起酒，先饮尽了，不说话。
        karma: none
        effects: ["flag 师承已定", "unflag 师承有约", "flag 错过灰衣人"]
        then:
          text: |
            他等了一炷香，你没开口。他也不逼，自斟自饮，末了把两只空碗摞在一起。「不答，也是答。」
            他起身出门，声音从夜色里飘回来：「往后遇上事，躲着走。你没学会的那些——别去试。」
`,pr=`# 幕一 · 白骨部开局包
# 出身·baigu 专属：北荒妖蛮之地，无宗门无月钱，部落以力为尊，妖血在身。
# 修的是吃、猎、活。法宝概念在这里是「爪牙骨器」——化形前，人族法器用不了。
#
# 卡序（靠 cond 里的 sublevel 阈值软排序，不硬链，避免死局）：
#   成年礼 → 分肉/共猎（日常） → 骨相(originClues) → 妖血沸腾 → 收妖人 → 贡品 → 冬荒 → 开智(妖修) → 离乡(落 flag 南下)
# 跨卡因果：收妖人「谈」落 flag 北荒之誓 → 离乡卡的毁诺选项；开智 落 flag 已开智 → 共猎卡的喉音选项。

events:

  # ══════════════════════════════════════════════════════════
  # 成年礼：猎一头角狼。化形前全凭爪牙。
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_chengnianli
    title: 角狼之礼
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && !flag('成年礼已过')"
    tags: [出身, 白骨部, 主干]
    text: |
      十四岁的雪落下来之前，萨满用骨灰在你臂上画了一头狼。
      「独自去。猎一头角狼回来。」他说，「不许带骨器。」
      这是白骨部的成年礼。化形之前，全凭爪牙——老人们说，妖血没醒的人，凭的就是这双手。
      角狼比你重，那对角能豁开野驼的皮。雪线以北，三天脚程。
      能不能回来，部里不问。
    choices:
      - text: 循着风里的血腥气，跟它耗三天
        karma: none
        check: { actor: "talent.根骨 + talent.悟性 * 0.3", dc: "60", scale: 10 }
        onCritSuccess:
          text: |
            第三天夜里它先撑不住了。你按住那对角，用体重压断了它的脖颈。
            萨满把角磨成一枚骨锥递还给你：「你的第一件骨器。它认你的血。」
          effects: ["flag 成年礼已过", "名望 +10", "factors.法宝 +0.06", "根骨 +2"]
        onSuccess:
          text: 第三天黄昏你追上了它。你们在雪里滚了半里地，它死了，你只是伤了。
          effects: ["flag 成年礼已过", "名望 +6", "factors.状态 -0.1"]
        onFail:
          text: 你追丢了它，反被它豁开小腿。爬回部里时，血已经冻在伤口上。
          effects: ["flag 成年礼未过", "factors.状态 -0.2", "名望 -4"]
        onCritFail:
          text: 角尖挑中你肋下。你在雪窝里躺了一夜，靠嚼雪吊着命，被巡猎的族人拖了回来。
          effects: ["flag 成年礼未过", "factors.状态 -0.3", "lifespan -1", "道心 -2"]

      - text: 不追。在它饮水的洼子边挖坑守着
        karma: none
        check: { actor: "talent.悟性 + talent.根骨 * 0.3", dc: "55", scale: 10 }
        onSuccess:
          text: 第二天夜里它来了。前蹄陷进坑里的那一瞬，你从雪底下扑了上去。
          effects: ["flag 成年礼已过", "名望 +5", "悟性 +1"]
        onFail:
          text: 它绕开了。老狼认得人挖的土。你守到粮尽，空着手回去。
          effects: ["flag 成年礼未过", "名望 -3", "道心 -2"]

      - text: 抓一头没长角的幼狼回去充数
        karma:
          type: 欺骗
          target: 萨满·乌骨勒
          weight: 14
          polarity: -1
          hooks:
            - id: 骨相瞒不过萨满的眼
            - id: 幼狼在部里长大，记得是谁折了它的群
        effects: ["flag 成年礼已过", "道心 -4", "堕度 +2"]

      - text: 空手回去，当着火塘认输
        karma: none
        effects: ["flag 成年礼未过", "名望 -6", "道心 +3"]

  # ══════════════════════════════════════════════════════════
  # 日常：分肉的规矩 —— 弱者最后拿
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_fenrou
    title: 火塘前的次序
    weight: 40
    act: 1
    cooldown: 9
    cond: "tier == 1 && flag('出身·baigu')"
    tags: [出身, 白骨部, 日常]
    text: |
      猎队回来了，两头雪麂一头野驼，血在雪地上拖出很长一道。
      分肉在火塘前，当着全部落。规矩传了不知多少代：出力最多的先割，能猎的其次，妇孺再次，老的病的最后。
      轮到最后，只剩骨架和板油。瘸腿的折戈坐在最外圈等那份骨头——他曾是部里最好的猎手，直到一头熊要走他半条腿。
      没人觉得这规矩狠。北荒的冬天比这狠。
    choices:
      - text: 按次序割你那份，不多看一眼
        karma: none
        effects: ["道心 +1"]

      - text: 拿你那条腿肉，换他那份骨头
        karma:
          type: 施恩
          target: 老猎人·折戈
          weight: 16
          polarity: 1
          hooks:
            - id: 老猎手把压箱底的追踪本事教了你
            - id: 部里笑你不懂规矩，肉喂了废人
        effects: ["功德 +4", "名望 -2"]

      - text: 仗着力气挤到头排，先割一刀
        karma:
          type: 夺取
          target: 猎队头人·赤那
          weight: 18
          polarity: -1
          hooks:
            - id: 头人记下了这一刀
            - id: 从此没人敢排你后头
        check: { actor: "talent.根骨 + 名望 * 0.2", dc: "58", scale: 10 }
        onSuccess:
          text: 赤那按着刀看你割完，没动。火塘边静得只剩柴响。
          effects: ["名望 +8", "堕度 +2"]
        onFail:
          text: 你被三个人按进雪里。赤那割了你半个月的份例：「规矩就是规矩。」
          effects: ["名望 -6", "factors.状态 -0.1", "道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 萨满看骨相（originClues）
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_kangu
    title: 骨相
    weight: 80
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.1"
    tags: [出身, 白骨部, 身世]
    text: |
      大祭前夜，萨满挨个给年轻人看骨相。轮到你，他捏着你的腕骨，忽然停住了。
      火光里，他把你的手翻来覆去看了三遍，又扒开你的眼皮看眼底。
      「怪。」他只说了一个字。
      帐里静下来。他抓了把骨粉撒进火里，烟直直地升，升到一半，突然折了个弯。
      「你这骨头里，掺着不是白骨部的东西。」
    choices:
      - text: 追问：「掺着什么？」
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "60", scale: 10 }
        onCritSuccess:
          text: |
            萨满盯着那道折弯的烟看了很久，声音压得极低：
            「南边的血。很老的南边。你娘揣着你进北荒那年，身后是有追兵的。」
          effects: ["originClues +2", "expose.身世 +2"]
        onSuccess:
          text: 「南边的血。」他说完就闭了嘴，把骨粉扫进火里，再问就只剩烟味。
          effects: ["originClues +1"]
        onFail:
          text: 萨满摇头，不肯再说。「知道得早，死得早。骨头会自己开口的，等它想说的时候。」
          effects: []

      - text: 「骨头长在我身上。掺了什么，也是我的。」
        karma: none
        effects: ["道心 +4"]

      - text: 拿一冬攒的白狐皮求他，别对旁人讲
        karma:
          type: 施恩
          target: 萨满·乌骨勒
          weight: 10
          polarity: 1
          hooks:
            - id: 萨满守口如瓶
            - id: 收了皮子，反而日日多看你两眼
        effects: ["锋芒 -0.03", "originClues +1"]

  # ══════════════════════════════════════════════════════════
  # 第一次妖血沸腾：堕度或根骨
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_yaoxue
    title: 血烧起来的那夜
    weight: 90
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.2"
    tags: [出身, 白骨部, 主干, 岔路]
    text: |
      围猎时你被野驼的蹄子扫中，肋下裂了两根骨头。当夜躺在皮帐里，血忽然烧了起来。
      不是发热。是血自己在走，逆着走，烧过的地方骨头咯咯作响。指甲在变厚，喉咙里滚着不是人声的东西。
      你咬住一截皮带，听见自己的心跳得像祭鼓。
      老人们说过：妖血头一回沸，随它去，人就往兽那边多走一步；压下去，往人这边留一步。
    choices:
      - text: 松开牙，随它烧
        karma: none
        effects:
          - "flag 妖血初沸"
          - "堕度 +8"
          - "根骨 +5"
          - "expose.真实血脉 +5"
          - "factors.状态 +0.1"

      - text: 咬紧，逆着把血压回去
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "62", scale: 10 }
        onSuccess:
          text: 天亮时血静了。你浑身是汗，牙关渗血，肋下的断骨还疼——但你还是你。
          effects: ["flag 妖血初沸", "道心 +6"]
        onFail:
          text: 压到后半夜，没压住。血冲开牙关的那一瞬，你听见自己嗥了一声。帐外的狗全哑了。
          effects: ["flag 妖血初沸", "堕度 +5", "根骨 +2", "factors.状态 -0.1"]

      - text: 爬出帐子，跳进冰河
        karma: none
        effects:
          - "flag 妖血初沸"
          - "factors.状态 -0.2"
          - "道心 +3"
          - "根骨 +1"

  # ══════════════════════════════════════════════════════════
  # 外来人族修士来「收妖」：打／藏／谈
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_shouyao
    title: 收妖人
    weight: 85
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.3"
    tags: [出身, 白骨部, 主干, 冲突]
    text: |
      开春，部落来了个佩剑的人族。青衫在一群皮袍子中间，白得刺眼。
      他自称游方修士崔判，说北荒妖气冲了他的星盘，此来「收妖」。剑尖遥遥指着萨满的帐：
      「巢穴在此，妖血为证。孩童可免，成者当诛。」
      部里能战的都按住了刀。他一个人站在雪里，不像怕的样子。
      你袖子底下，指甲慢慢变厚了。
    choices:
      - text: 打。第一个扑上去
        karma:
          type: 杀戮
          target: 游方修士·崔判
          weight: 34
          polarity: -1
          matureWindow: [20, 100]
          hooks:
            - id: 师门清算
              lethal: true
              foreshadow:
                - { at: -10, evt: "南来的商队捎话，有人族在打听崔判的下落" }
                - { at: -5, evt: "山口的望哨看见成队的剑光连夜过境" }
                - { at: -1, evt: "三个佩剑人族在部落外扎营，只等一个答复", window: true }
            - id: 剑主胆寒，人族修士自此绕开北荒
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "60", scale: 10 }
        onCritSuccess:
          text: |
            你快过他的剑。雪还没落回地面，他已经躺下了。
            你去拾那柄剑，剑身上的灵气烫得握不住——人族的法器认气不认爪。
            你只撬走了剑柄上一枚骨环，串在颈绳上。
          effects: ["flag 杀了收妖人", "名望 +20", "expose.真实血脉 +10", "factors.法宝 +0.04"]
        onSuccess:
          text: 部里的人跟着你一齐压上。他的剑豁开你的肩，但他退了，退出山口再没回头。
          effects: ["名望 +10", "factors.状态 -0.15", "expose.真实血脉 +6"]
        onFail:
          text: 他的剑比你的爪快。你被剑气钉在雪里，是萨满举着骨杖把人拦下的。
          effects: ["factors.状态 -0.25", "expose.真实血脉 +8", "道心 -2"]
        onCritFail:
          text: 剑光贴着心口进去半寸。你在皮帐里躺了一个月，闻着自己伤口腐了又好。
          effects: ["factors.状态 -0.4", "lifespan -2", "expose.真实血脉 +10"]

      - text: 藏。趁人堆挡着，把妖血最重的几个孩子塞进地窖
        karma:
          type: 救助
          target: 部中幼崽
          weight: 20
          polarity: 1
          hooks:
            - id: 孩子们的母亲记你一辈子
            - id: 有个孩子在地窖里憋出了病根
        effects: ["功德 +6", "锋芒 -0.05"]

      - text: 谈。捧一冬的白狐皮走出去，替部落立誓不出北荒
        karma:
          type: 立誓
          target: 游方修士·崔判
          weight: 18
          polarity: 0
          hooks:
            - id: 誓约缚身，南下之日即是毁诺之日
            - id: 他收皮走人，星盘上这一笔勾了
        check: { actor: "talent.悟性 + 名望 * 0.2", dc: "58", scale: 10 }
        onSuccess:
          text: 他掂了掂皮子，又掂了掂你：「妖不出荒，剑不入帐。」转身踏雪去了。
          effects: ["flag 北荒之誓", "名望 +6"]
        onFail:
          text: 他把皮子挑落在雪里：「妖物学人说话。」剑尖仍指着萨满的帐，是头人赔了双倍才送走的。
          effects: ["名望 -3", "道心 -3"]

      - text: 缩进人堆里，不出头
        karma: none
        effects: ["道心 -3", "锋芒 -0.02"]

  # ══════════════════════════════════════════════════════════
  # 被大部落勒索贡品：站出来／沉默
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_gongpin
    title: 黑角部的鞭子
    weight: 70
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.25"
    tags: [出身, 白骨部, 冲突]
    text: |
      黑角部的使者带着六骑进了营地，皮鞭指着火塘报数：「三十张好皮，十坛骨油，二十条风干腿。」
      顿了顿，鞭梢转向人群里的年轻人：「再加一个见过血的，跟我们走。黑角部替你们挡着雪魈，这是规矩。」
      头人的手按上刀柄，又松开了。去年顶撞使者的那个部落，如今火塘都是灭的。
      鞭梢从你脸前扫过去。
    choices:
      - text: 站出来：「白骨部的东西，不给。」
        karma:
          type: 杀戮
          target: 黑角部使者
          weight: 20
          polarity: -1
          hooks:
            - id: 黑角部秋后算账
            - id: 使者掂量过你的眼神，没敢再加码
        check: { actor: "talent.根骨 + 名望 * 0.3", dc: "64", scale: 10 }
        onCritSuccess:
          text: 你攥住扫过来的鞭梢，一寸一寸拽了过来。六骑没有一个下马。使者留下半句「明年再算」，走了。
          effects: ["flag 顶撞黑角部", "名望 +15"]
        onSuccess:
          text: 使者盯了你半晌，把数目折了一半。走时他多看了你一眼，那一眼你记住了。
          effects: ["flag 顶撞黑角部", "名望 +8"]
        onFail:
          text: 六骑把你围在中间抽。头人把你拖出来的时候，贡品一张皮没少。
          effects: ["factors.状态 -0.2", "名望 -4", "道心 -3"]
        onCritFail:
          text: 鞭子上是带倒钩的。你在皮帐里趴了半个月，部里为你的莽撞多赔了十张皮。
          effects: ["factors.状态 -0.35", "lifespan -1", "名望 -8"]

      - text: 沉默。看着帐里的骨朵被带走
        karma: none
        effects: ["道心 -5", "flag 骨朵被带走"]

      - text: 「见过血的——我算一个。」自己顶了那个名额
        karma:
          type: 救助
          target: 少年·骨朵
          weight: 22
          polarity: 1
          hooks:
            - id: 骨朵长大了，记着那天替他站出来的人
            - id: 在黑角部当役的一年，你见了北荒真正的大
        effects: ["名望 +6", "factors.状态 -0.1", "factors.情报 +0.04", "flag 去过黑角部"]

      - text: 夜里往贡品的骨油坛底，掺了一半雪水
        karma:
          type: 欺骗
          target: 黑角部
          weight: 16
          polarity: -1
          hooks:
            - id: 开坛之日，必有报复
            - id: 混过去了，没人开坛
        effects: ["道心 -2"]

  # ══════════════════════════════════════════════════════════
  # 冬荒：饿，吃什么的道德题
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_donghuang
    title: 三个月的雪
    weight: 60
    act: 1
    cooldown: 14
    cond: "tier == 1 && flag('出身·baigu')"
    tags: [出身, 白骨部, 道德]
    text: |
      雪封了三个月，比最老的老人记得的都久。存肉吃完了，骨头熬了三遍，汤已经是白水。
      部里有人整日躺着不动——省力气。孩子饿得不哭了，这比哭更坏。
      夜里火塘边，头人哑着嗓子开口：「地窖里，还冻着去年冬天没埋的两个。」
      没有人接话。风把帐顶压得咯咯响。
      老规矩：这种话说出第二遍，就要动刀分了。
    choices:
      - text: 「先吃我的狗。」把灰尾牵到火塘边
        karma: none
        effects: ["功德 +3", "道心 -3", "factors.伙伴 -0.05", "flag 灰尾入锅"]

      - text: 抢在第二遍之前，带还走得动的人冒雪出猎
        karma: none
        check: { actor: "talent.根骨 + factors.状态 * 30", dc: "66", scale: 12 }
        onCritSuccess:
          text: 你们在雪窝子底下刨出一头冬眠的棕熊。那年冬天，部里一个人都没少。
          effects: ["名望 +15", "功德 +8", "factors.状态 -0.15"]
        onSuccess:
          text: 三天，换回一头瘦驼。不够吃到开春，但够把火塘边那句话压回去。
          effects: ["名望 +8", "factors.状态 -0.2"]
        onFail:
          text: 雪太深。三个人出去，回来两个半——你背回来的那个，脚趾留在了原地。
          effects: ["factors.状态 -0.3", "道心 -4"]
        onCritFail:
          text: 白毛风起来的时候，天地一个颜色。你靠着妖血的热气爬了回来，别人没有妖血。
          effects: ["factors.状态 -0.4", "lifespan -1", "道心 -5", "功德 -2"]

      - text: 沉默。那句话说出第二遍，分到你的那份时——你吃了
        karma: none
        effects: ["堕度 +6", "道心 -8", "flag 吃过那锅肉"]

      - text: 「人不能吃人。吃了，白骨部就真的只剩白骨了。」
        karma: none
        effects: ["道心 +5", "名望 -2"]

  # ══════════════════════════════════════════════════════════
  # 开智的顿悟（妖修）：月下忽然听懂了风
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_kaizhi
    title: 听懂风的那夜
    weight: 90
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && flag('道统·妖修') && sublevel > 0.45"
    tags: [出身, 白骨部, 主干, 修炼]
    text: |
      轮到你守夜。月亮很满，荒原上没有一点人声。
      风从北边过来，穿过枯草，穿过白骨堆成的界桩，穿过你。
      忽然，那呜呜的声音里有了字。不是人话，却听得懂——
      风说，雪三天后到；风说，西边二十里死了头野驼，狼群正往那边去；风说，你脚下的土里埋着很老很老的骨头。
      你站在那里，浑身的血都是静的。老人们说的「开智」，原来是这个意思。
    choices:
      - text: 迎着风，长嗥一声
        karma: none
        effects:
          - "flag 已开智"
          - "sublevel +0.08"
          - "expose.真实血脉 +6"
          - "名望 +5"
          - "锋芒 +0.05"

      - text: 坐下来，听它说到天亮
        karma: none
        effects:
          - "flag 已开智"
          - "sublevel +0.06"
          - "悟性 +3"
          - "道心 +3"

      - text: 捂住耳朵。人不该听懂的东西，不听
        karma: none
        effects:
          - "flag 已开智"
          - "sublevel +0.02"
          - "道心 -3"
          - "锋芒 -0.04"

  # ══════════════════════════════════════════════════════════
  # 与兽群共猎（伙伴线）
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_gonglie
    title: 狼群让出的缺口
    weight: 45
    act: 1
    cooldown: 10
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.15 && !flag('得罪狼群')"
    tags: [出身, 白骨部, 日常, 伙伴]
    text: |
      雪麂群往南边洼地迁，青鬃狼群缀在后面。你也缀在后面。
      头狼在坡上停下来，回头看你。隔着一百步，它看了很久，没有龇牙。
      你身上的味道骗不了它们——妖血的味道，不算人。
      狼群散开，包抄的弧线上让出一个缺口，正对着你。
    choices:
      - text: 补进那个缺口，按狼的规矩猎
        karma: none
        check: { actor: "talent.根骨 + 堕度 * 0.3", dc: "58", scale: 10 }
        onCritSuccess:
          text: 雪麂倒了五头。分食前，头狼把最肥那头的心叼到你脚边——狼的礼。
          effects: ["flag 狼群相识", "factors.伙伴 +0.08", "根骨 +1"]
        onSuccess:
          text: 猎成了。分食时，它们容你割走一整条后腿，没有一头狼抬眼。
          effects: ["flag 狼群相识", "factors.伙伴 +0.05"]
        onFail:
          text: 你抢步慢了半拍，惊了麂群。头狼盯着你，喉咙里滚了一声。这一场，它们白跑了。
          effects: ["factors.状态 -0.05"]

      - text: 借狼群赶拢的势，抢先截走两头
        karma:
          type: 夺取
          target: 青鬃狼群
          weight: 15
          polarity: -1
          hooks:
            - id: 头狼记住了你的味道
            - id: 狼群从此绕着你走
        effects: ["堕度 +2", "flag 得罪狼群"]

      - text: 退下坡地，不掺和兽群的事
        karma: none
        effects: ["道心 +1"]

      - text: 用喉音应它，问它借一冬的伙伴
        require: "flag('已开智')"
        karma:
          type: 立誓
          target: 青鬃头狼
          weight: 18
          polarity: 1
          hooks:
            - id: 冬猎共行，狼群护你侧翼
            - id: 开春它带着幼狼堵你的帐门
        effects: ["flag 狼群相识", "factors.伙伴 +0.1", "expose.真实血脉 +3"]

  # ══════════════════════════════════════════════════════════
  # 离乡抉择：留部落／南下人族地界（落 flag 南下）
  # ══════════════════════════════════════════════════════════

  - id: evt_ob_lixiang
    title: 南边的天
    weight: 95
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·baigu') && sublevel > 0.55 && !flag('南下') && !flag('留在北荒')"
    tags: [出身, 白骨部, 主干, 岔路]
    text: |
      萨满把你叫进帐里，火塘只剩炭。
      「北荒的气太薄。」他说，「你的血在这里养到头了。再往上走，要南边的灵山灵水。」
      他往炭火里看了很久。「南下，就是进人族的地界。在那里，妖血是罪。藏得住，有你的路；藏不住——」
      他把一截烧剩的骨头拨出来，没有说完。
      「留下，做部里最好的猎手，娶妻，生崽，四十岁老，五十岁死。也是一条路。」
    choices:
      - text: 南下。当夜收拾行囊，天亮前出山口
        karma: none
        effects: ["flag 南下", "flag 离了白骨部", "道心 +3"]

      - text: 接过萨满递来的狼牙骨符，再南下
        karma:
          type: 传承
          target: 萨满·乌骨勒
          weight: 24
          polarity: 0
          hooks:
            - id: 死劫临头时，骨符替你挡一次
            - id: 部落有难，骨符发烫，召你北归
        effects:
          - "flag 南下"
          - "flag 离了白骨部"
          - "flag 身负骨符"
          - "factors.法宝 +0.05"

      - text: 背着北荒之誓南下——誓是誓，路是路
        require: "flag('北荒之誓')"
        karma:
          type: 毁诺
          target: 游方修士·崔判
          weight: 20
          polarity: -1
          hooks:
            - id: 誓破之日，剑主的星盘有感
            - id: 誓言随立誓的皮子一起烂在了雪里
        effects: ["flag 南下", "flag 离了白骨部", "业障 +8"]

      - text: 留下。北荒的天矮，可它认得你
        karma: none
        effects: ["flag 留在北荒", "名望 +10", "道心 +2"]
`,mr=`# 出身专属 · 东海浮岛（fudao）与绝灵谷（juelin）
# 修复玩家投诉：野路子出身不该再走「宗门外门弟子扫地领月钱」的开局。
#
# A 组 · 东海浮岛散修（flag('出身·fudao')）：坊市跑腿、黑市假货、海汛捡浪、
#        无师无门的瓶颈、出海抉择（落 flag 出海）
# B 组 · 绝灵谷武道（flag('出身·juelin')）：谷中无灵气，拳头就是道理。
#        境界叫法：淬体 / 洗髓，文案不得出现「练气筑基」。
#        出谷抉择落 flag 出谷。

events:

  # ══════════════════════════════════════════════════════════
  # A · 东海浮岛散修
  # ══════════════════════════════════════════════════════════

  - id: evt_of_fangshi_paotui
    title: 火漆木匣
    weight: 100
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·fudao') && !flag('宗门弟子') && !flag('出海')"
    tags: [出身, 日常]
    text: |
      潮水退了，坊市的青石缝里还嵌着盐。
      你在「四海斋」跑腿三年，管事说你腿快，嘴严。
      今天这趟不一样：一只封了火漆的木匣，送去黑水巷最里头，
      交给一个「披蓑衣的人」。管事多塞了两枚贝币，末了压低声音：
      「路上别停，别看，别应人话。」
      蓑衣、火漆、加钱——这三样凑在一处，你跑腿三年，头一回见。
    choices:
      - text: 照吩咐送到，一眼不看
        karma: none
        effects: ["名望 +3", "factors.情报 +0.03", "道心 +1"]

      - text: 拐进背巷，掂一掂那火漆的深浅
        karma:
          type: 欺骗
          target: 四海斋管事·蔡九
          weight: 10
          polarity: -1
          hooks:
            - id: 动过的火漆瞒不过行家
            - id: 手脚干净，无人知晓
        check: { actor: "talent.悟性 + talent.神魂 * 0.5", dc: "60", scale: 10 }
        onSuccess:
          text: 你借着蒸汽把火漆启开一线——匣底是半枚断裂的铜牌。黑水巷要的不是货，是信物。你原样封好，送到时手没有抖。
          effects: ["factors.情报 +0.08", "悟性 +1"]
        onFail:
          text: 火漆比看上去脆，裂了一角。交货时，蓑衣人的眼睛在斗笠下停了很久，什么也没说。
          effects: ["名望 -3", "道心 -2"]

      - text: 推说病了，这趟活不接
        karma: none
        effects: ["道心 +2", "名望 -2"]

      - text: 送完之后，远远缀着那蓑衣人
        karma: none
        check: { actor: "talent.神魂 + talent.悟性 * 0.5", dc: "65", scale: 10 }
        onSuccess:
          text: 他进了黑市深处一间从不开门的铺子。你把位置记下了，没跟任何人提起。
          effects: ["factors.情报 +0.1", "flag 黑水巷的铺子"]
        onFail:
          text: 跟到第三个巷口，人不见了。身后有个声音慢悠悠地说：「回去吧，小子。」你没敢回头。
          effects: ["道心 -1", "锋芒 +0.02"]

  - id: evt_of_heishi_diyike
    title: 黑市第一课
    weight: 80
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·fudao') && !flag('出海')"
    tags: [出身, 日常, 资源]
    text: |
      你把三个月跑腿攒下的贝币全数出去，从黑市换回一瓶「聚气散」。
      瓶身的符纹很新，塞子底下封的，却是掺了海沙的米粉。
      坊市的老人瞥了一眼，连惋惜都省了：
      「黑市十件货，两件是这个。你今日才知道？」
      他把瓶子抛回来，「学费。人人都交过。」
      那摊主明日还会出摊。黑市没有讲理的地方，只有记性好的人。
    choices:
      - text: 认下学费，把假货揣好当样本
        karma: none
        effects: ["悟性 +1", "factors.情报 +0.05", "道心 +2"]

      - text: 明日出摊时，把瓶子拍回他摊上
        karma:
          type: 夺取
          target: 黑市摊主·瘸七
          weight: 15
          polarity: -1
          hooks:
            - id: 黑市记下了你的脸
            - id: 瘸七认栽，退了一半
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "55", scale: 10 }
        onSuccess:
          text: 你盯着他，一言不发。四下安静下来。瘸七笑了笑，退了一半贝币——闹到这一步，黑市的规矩就值一半。
          effects: ["名望 +5", "锋芒 +0.03"]
        onFail:
          text: 摊后站起来两个帮闲，袖子挽着。你退了，贝币没退。
          effects: ["名望 -4", "道心 -3"]

      - text: 照原价，把这瓶转卖给刚上岛的外乡人
        karma:
          type: 欺骗
          target: 外乡散修
          weight: 18
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 苦主循着符纹找回来
            - id: 他至死没发现
        effects: ["堕度 +5", "道心 -4", "factors.情报 +0.03"]

      - text: 「【面板】往后每件货，先看一眼。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["factors.情报 +0.1", "expose.金手指 +2", "僭越 +1"]

  - id: evt_of_haixun_jianlang
    title: 海汛捡浪
    weight: 70
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·fudao') && !flag('出海')"
    tags: [出身, 机缘, 道德]
    text: |
      海汛三日，浮岛人倾家下滩「捡浪」。
      你占的这段礁湾里，浪头送上来半箱泡胀的灵木——
      还有一具尸体。道袍，束发，指端焦黑，像被雷燎过。
      腰间一只储物袋，鼓的。
      滩上的老规矩，物归见者。可老人也说过，死人身上的东西带煞。
      潮再涨就在半个时辰后，远处已有别的捡浪人朝这边张望。
    choices:
      - text: 只取灵木，把人推回海里
        karma: none
        effects: ["sublevel +0.04", "factors.法宝 +0.03"]

      - text: 解下那只储物袋
        karma:
          type: 夺取
          target: 焦手修士的遗族
          weight: 30
          polarity: -1
          matureWindow: [8, 60]
          hooks:
            - id: 白幡船寻物
              lethal: true
              foreshadow:
                - { at: -8, evt: "坊市有人描着一只储物袋的绣纹，挨家打听下落" }
                - { at: -3, evt: "一艘挂白幡的海船进了港，船上的人在查那年的海汛" }
                - { at: -1, evt: "白幡船的人坐在你门口，说只想问一句话", window: true }
            - id: 无人认领
        check: { actor: "talent.神魂 + talent.悟性 * 0.3", dc: "62", scale: 10 }
        onSuccess:
          text: 禁制早被雷气烧散了。袋里有一小把灵石、一柄未开刃的短剑、三瓶没有名目的丹药。你把尸体推回海里，浪很快把它带走了。
          effects: ["factors.法宝 +0.15", "sublevel +0.05", "业障 +5", "道心 -2"]
        onFail:
          text: 残存的禁制炸开，你半条手臂麻到肩头。袋子到手了，动静也出去了——半个滩的捡浪人都看见了你手里的东西。
          effects: ["factors.法宝 +0.12", "factors.状态 -0.12", "业障 +5", "锋芒 +0.05"]

      - text: 就地垒石成坟，东西一并埋了
        karma:
          type: 救助
          target: 焦手修士
          weight: 20
          polarity: 1
          matureWindow: [5, 50]
          hooks:
            - id: 亡者亲族寻来，重谢
            - id: 坟被别的捡浪人刨了
        effects: ["功德 +6", "道心 +4", "气运 +2"]

      - text: 报给巡海的郑大缆，让官面上处置
        karma:
          type: 施恩
          target: 巡海队·郑大缆
          weight: 10
          polarity: 1
          hooks:
            - id: 郑大缆记你一份人情
            - id: 东西进了他自己的腰包
        effects: ["名望 +4"]

  - id: evt_of_wushi_pingjing
    title: 无师之坎
    weight: 80
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.4 && flag('出身·fudao') && !flag('出海')"
    tags: [出身, 修炼]
    text: |
      气行到膻中就散，第七日仍是如此。
      你知道这叫「坎」——宗门弟子问师父一句话的事，你得拿命去猜。
      浮岛没有师父。书摊上有号称筑基修士手书的残页，三十贝币一张，真假自辨；
      城隍庙前，游方的陆道人开坛讲道，入座一枚灵石，墙根不要钱；
      再不然，就只剩自己在夜里，一遍一遍地试。
    choices:
      - text: 咬牙买下一页残诀
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.3", dc: "58", scale: 10 }
        onSuccess:
          text: 残页是真的，只是缺了后半。你对着缺口处自己补了三天——补对了。
          effects: ["sublevel +0.07", "悟性 +1"]
        onFail:
          text: 残页写得头头是道，照行时气却岔进肋下，疼得你蜷了一夜。假的。三十贝币，又一笔学费。
          effects: ["factors.状态 -0.12", "sublevel -0.03", "道心 -2"]

      - text: 贴着城隍庙的墙根偷听讲道
        karma:
          type: 欺骗
          target: 游方道人·陆玄
          weight: 8
          polarity: -1
          hooks:
            - id: 被拿住，当众罚扫庙前石阶
            - id: 陆道人瞧见了，只当没瞧见，末了多讲了半句
        check: { actor: "talent.悟性 + talent.神魂 * 0.5", dc: "60", scale: 10 }
        onSuccess:
          text: 隔着一堵墙，你把「过坎如渡溪，不填不越」八个字听全了。当夜便试，坎松了。
          effects: ["sublevel +0.06", "悟性 +2"]
        onFail:
          text: 你踩塌了墙根一摞瓦，满座回头。陆道人隔墙笑道：「墙根的道友，进来是一枚灵石，摔出去可不止。」
          effects: ["名望 -3", "道心 -2"]

      - text: 谁也不求，硬悟
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.5", dc: "72", scale: 12 }
        onCritSuccess:
          text: 第十九夜，你忽然明白散掉的不是气，是你自己的急。坎过了，过得比谁都干净——这条路从头到尾是你自己蹚出来的。
          effects: ["sublevel +0.1", "悟性 +3", "道心 +4"]
        onSuccess:
          text: 试了一个月，试出一条窄路。窄，但能走。
          effects: ["sublevel +0.06", "道心 +2"]
        onFail:
          text: 一个月过去，坎还在原处。海风吹得窗纸响，你睁眼到天亮。
          effects: ["道心 -1"]
        onCritFail:
          text: 你冲得急了，气在肋下拧成一团。你在床上躺了半个月，连桶都提不起来。
          effects: ["factors.状态 -0.2", "sublevel -0.04"]

      - text: 先放一放，把跑腿的活计接回来
        karma: none
        effects: ["factors.情报 +0.04", "道心 +1"]

  - id: evt_of_chuhai_jueze
    title: 宝济号
    weight: 90
    act: 1
    cooldown: 15
    cond: "tier == 1 && sublevel > 0.5 && flag('出身·fudao') && !flag('出海') && !flag('留守浮岛')"
    tags: [出身, 岔路]
    text: |
      「宝济号」要出一趟远海，去内陆的青阳大市，来回一年。
      冯船主要一个会点修行的杂役：看货，试水，镇一镇舱底的邪祟。
      工钱不多，但到了青阳，坊市比浮岛大十倍，
      残页、讲道、宗门招收，什么都有。
      老人们说，浮岛养人，也困人——灵气薄，货是过路的，机缘也是过路的。
      船三日后开。错过这一班，下一班不知在何年。
    choices:
      - text: 画押上船
        karma:
          type: 立誓
          target: 宝济号·冯船主
          weight: 15
          polarity: 0
          hooks:
            - id: 船主守约，到岸结清双饷
            - id: 风浪一起，杂役先被推出去挡灾
        effects: ["flag 出海", "道心 +3", "气运 +2"]

      - text: 这班不赶，再攒一年本钱
        karma: none
        effects: ["sublevel +0.03", "道心 +1"]

      - text: 不走了。浮岛的水，你闭着眼都认得
        karma: none
        effects: ["flag 留守浮岛", "factors.情报 +0.06", "道心 +2"]

      - text: 掏不起船位——藏进货舱
        karma:
          type: 欺骗
          target: 宝济号·冯船主
          weight: 12
          polarity: -1
          hooks:
            - id: 半途被翻出来，扔在荒礁上
            - id: 到岸都没人发现
        check: { actor: "talent.神魂 + talent.悟性 * 0.4", dc: "64", scale: 10 }
        onSuccess:
          text: 你在腌鱼桶后头蜷了一个月。船靠青阳那天，你混在脚夫里下了船，没人多看你一眼。
          effects: ["flag 出海", "锋芒 -0.03", "factors.状态 -0.08"]
        onFail:
          text: 第五日夜里，你被人从桶后拎上甲板。冯船主没扔你下海，只把你丢给了回程的渔船。「浮岛就这么大，」他说，「下回见了面，别低头。」
          effects: ["名望 -4", "道心 -3"]

  # ══════════════════════════════════════════════════════════
  # B · 绝灵谷武道 —— 谷中无灵气，拳头就是道理
  # ══════════════════════════════════════════════════════════

  - id: evt_of_tiaoshui_zhuanggong
    title: 三百级石阶
    weight: 90
    act: 1
    cooldown: 10
    cond: "tier == 1 && flag('出身·juelin') && !flag('出谷')"
    tags: [出身, 修炼, 日常]
    text: |
      绝灵谷没有灵气。谷里人淬体，靠的是拳，是汗，是一口不肯断的气。
      聂老拳师收你那天只给了两只木桶：
      「三百级石阶，日挑四趟。桶满到顶，洒一路，补一趟。」
      三个月了，肩上的茧结了破，破了又结。
      今晨落过雨，石阶滑。同门里已有人偷偷只装半桶——
      拳师年纪大了，未必看得出来。
    choices:
      - text: 满桶，照挑
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.3", dc: "56", scale: 10 }
        onSuccess:
          text: 四趟挑完，一路没洒。放下桶时腿在抖，桩却是稳的。
          effects: ["根骨 +1", "sublevel +0.05"]
        onFail:
          text: 第三趟在湿阶上滑了半步，洒了小半桶。你补了第五趟，回屋时天已黑透。
          effects: ["sublevel +0.03", "factors.状态 -0.08"]

      - text: 也装半桶——雨天，情有可原
        karma:
          type: 欺骗
          target: 老拳师·聂铁山
          weight: 10
          polarity: -1
          hooks:
            - id: 拳师掂了掂你的桶，什么也没说
            - id: 无人察觉
        effects: ["道心 -3", "sublevel +0.01"]

      - text: 加挑一趟
        karma: none
        check: { actor: "talent.根骨 * 1.2", dc: "68", scale: 10 }
        onCritSuccess:
          text: 第五趟到顶，你把桶放得很轻。拳师在廊下看了很久，转身进屋，添了一副碗筷。
          effects: ["根骨 +2", "sublevel +0.07", "名望 +2"]
        onSuccess:
          text: 多出的这趟挑完，两条腿像灌了铅，却比昨日更听使唤。
          effects: ["根骨 +1", "sublevel +0.05", "factors.状态 -0.06"]
        onFail:
          text: 湿阶吃人。第五趟没到顶，你连人带桶滚下七级台阶。
          effects: ["factors.状态 -0.18"]
        onCritFail:
          text: 膝盖磕在阶棱上，闷闷地响了一声。你躺了十天，下地时那条腿仍不敢吃力。
          effects: ["factors.状态 -0.3", "sublevel -0.02"]

      - text: 问拳师：挑水与拳，有什么相干
        karma: none
        check: { actor: "talent.悟性", dc: "50", scale: 10 }
        onSuccess:
          text: 拳师头也不抬：「水稳，桩就稳。」你想了一夜。次日再挑，肩上忽然不那么沉了。
          effects: ["悟性 +1", "sublevel +0.03", "道心 +1"]
        onFail:
          text: 「挑你的水。」拳师说。
          effects: ["道心 +1"]

  - id: evt_of_laoquanshi_guiju
    title: 祠堂门框上的第一条
    weight: 80
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·juelin') && !flag('出谷')"
    tags: [出身, 道德]
    text: |
      大师兄岑虎在集上与菜贩争秤，一掌把人拍在墙上——凡人的骨头，断了三根。
      谷规刻在祠堂门框上，第一条：以武凌弱者，逐。
      夜里岑虎跪在院中，拳师坐在阶上，面前一盏灯。
      「有人看见你先出的手。」拳师说，「也有人说，是菜贩先抡的秤砣。」
      他转过头来——那日，你就在集上。
      「你说。」
    choices:
      - text: 照实说：是师兄先动的手
        karma:
          type: 背叛
          target: 大师兄·岑虎
          weight: 20
          polarity: -1
          matureWindow: [10, 70]
          hooks:
            - id: 出谷那日他回头看了你一眼，那眼神你记了很多年
            - id: 他在谷外立住了脚，反倒谢你当年没让他烂在谷里
        effects: ["道心 +5", "名望 +2"]

      - text: 替他圆：秤砣确实先飞过来
        karma:
          type: 欺骗
          target: 老拳师·聂铁山
          weight: 18
          polarity: -1
          hooks:
            - id: 拳师那晚多看了你两眼
            - id: 岑虎私下寻你，给你磕了一个头
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "66", scale: 10 }
        onSuccess:
          text: 拳师沉默半晌，罚岑虎挑水一年，免了逐谷。灯灭时你听见他叹了口气——你分不清那口气，是信了，还是不愿再问。
          effects: ["道心 -5", "factors.伙伴 +0.06"]
        onFail:
          text: 「菜贩断的是右手三根骨，秤砣在他左边筐里压着。」拳师说，「连你一起罚。」岑虎当夜被逐，你挑了三个月双份的水。
          effects: ["道心 -6", "名望 -4", "factors.状态 -0.1"]

      - text: 求情：「谷规是逐。可他练了十二年。」
        karma:
          type: 施恩
          target: 大师兄·岑虎
          weight: 12
          polarity: 1
          hooks:
            - id: 他在谷外记着你这句话
            - id: 拳师说，规矩不是情面
        effects: ["道心 +2", "名望 -1"]

      - text: 垂下眼，不说话
        karma: none
        effects: ["道心 -2"]

  - id: evt_of_jishi_hubiao
    title: 黑风坳
    weight: 70
    act: 1
    once: true
    cond: "tier == 1 && sublevel > 0.3 && flag('出身·juelin') && !flag('出谷')"
    tags: [出身, 冲突]
    text: |
      白掌柜的货队要过黑风坳，雇了谷中三个弟子押车，你头一回在列。
      坳口的老松下坐着三个人，刀横在膝上。为首的敞着怀，慢悠悠站起来：
      「车留下，人可以走。」
      你听见自己的心跳，也听见身后同门的呼吸变粗。
      真刀真枪——不是谷中喂招，拳上没有留手的余地。
      拳师的话在耳边过了一遍：先礼，后兵；兵起，不留半分。
    choices:
      - text: 先礼——「借道。佣金分三成。」
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.4", dc: "60", scale: 10 }
        onSuccess:
          text: 为首的盯了你半晌，笑了：「谷里出来的，懂事。」刀归鞘，三成佣金买下一条整路。
          effects: ["名望 +4", "factors.情报 +0.03"]
        onFail:
          text: 「三成？」他啐了一口，「爷要十成。」话音未落刀已出鞘。你们且战且退，货丢了两车。
          effects: ["factors.状态 -0.15", "名望 -3"]

      - text: 兵起不留——抢先出拳
        karma:
          type: 杀戮
          target: 黑风坳·灰狗
          weight: 26
          polarity: -1
          matureWindow: [8, 60]
          hooks:
            - id: 灰狗的兄弟收账
              lethal: true
              foreshadow:
                - { at: -6, evt: "集上有生面孔打听那年押车的谷中弟子" }
                - { at: -2, evt: "邻镇酒肆有个独眼刀客，喝多了说要替兄弟收一笔旧账" }
                - { at: -1, evt: "独眼刀客在谷口的老松下坐了一整日", window: true }
            - id: 匪伙作鸟兽散
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.4", dc: "54", scale: 10 }
        onCritSuccess:
          text: 你一步抢进，一拳打断了他持刀的腕骨。刀落地，另两人拖着他钻进了林子。货，一件没少。
          effects: ["名望 +10", "expose.真实修为 +5", "flag 见过血"]
        onSuccess:
          text: 拳头开了肉，你肩上也挨了一刀。匪退了，血把半边袖子浸透——他的，也有你的。
          effects: ["名望 +6", "factors.状态 -0.12", "flag 见过血"]
        onFail:
          text: 刀比拳长。你被撂倒在车辕边，货被挑走一半。白掌柜的脸，比坳里的天还阴。
          effects: ["factors.状态 -0.25", "名望 -5"]
        onCritFail:
          text: 那一刀进了左肋。你趴在车板上被拉回谷里，一路听着自己的血，一滴一滴落在车轴上。
          effects: ["factors.状态 -0.35", "lifespan -1", "道心 -3"]

      - text: 弃货保人，带同门退走
        karma:
          type: 毁诺
          target: 货主·白掌柜
          weight: 14
          polarity: -1
          hooks:
            - id: 镖行的路子从此断了
            - id: 白掌柜念你保下了两个伙计
        effects: ["名望 -6", "道心 +3"]

      - text: 把自己那份佣金推出去买路
        karma:
          type: 受辱
          target: 黑风坳·灰狗
          weight: 12
          polarity: -1
          hooks:
            - id: 黑风坳记住了这条肥路
            - id: 来日你带着拳，再走一遍这条坳
        effects: ["道心 -3", "名望 -4", "锋芒 -0.04"]

  - id: evt_of_guwai_qingmie
    title: 凡人二字
    weight: 60
    act: 1
    once: true
    cond: "tier == 1 && flag('出身·juelin') && !flag('出谷')"
    tags: [出身, 冲突, 打脸]
    text: |
      两个青衫修士路过谷口讨水，站在场边看你打拳。
      一趟拳收势，年长的那个摇头失笑：
      「灵气死绝之地，练这个？练到老，也还是个凡人。」
      另一个连看都懒得看，只顾把水囊灌满。
      「凡人」两个字轻飘飘的，落在场上，比石锁还沉。
      井台边，同门都停了手，看着你。
    choices:
      - text: 咽下去，接着打拳
        karma: none
        effects: ["道心 +4", "锋芒 -0.03"]

      - text: 「凡人的拳，道长可敢接一趟？」
        karma: none
        check: { actor: "talent.根骨 + effectiveTier * 30", dc: "76", scale: 12 }
        onCritSuccess:
          text: 他抬手引灵光护身——你的拳从灵光的缝里钻进去，停在他咽喉前一寸。场上极静。年长的收了笑，正正经经朝你抱了一次拳。
          effects: ["名望 +10", "expose.真实修为 +6", "道心 +5"]
        onSuccess:
          text: 三招过后他退了两步，青衫下摆沾了井台的泥。「有点意思。」说这四个字时，他没有再笑。
          effects: ["名望 +6", "expose.真实修为 +4", "道心 +3"]
        onFail:
          text: 灵光一荡，你像撞上一堵看不见的墙，倒退跌坐。他叹了口气：「何苦。」
          effects: ["factors.状态 -0.15", "道心 -2", "名望 -2"]
        onCritFail:
          text: 你被掀出一丈开外，后背擦着井台落地，半天喘不上气。两人走远了，笑声顺着山风又飘回来一截。
          effects: ["factors.状态 -0.28", "道心 -5"]

      - text: 舀水递过去，顺口问山外的修行是什么样
        karma: none
        effects: ["悟性 +1", "factors.情报 +0.05"]

      - text: 什么也不说，记下他们的长相与去向
        karma: none
        effects: ["flag 凡人二字", "道心 -2", "锋芒 +0.02"]

  - id: evt_of_chugu_jueze
    title: 樟木箱底的木牌
    weight: 90
    act: 1
    cooldown: 15
    cond: "tier == 1 && sublevel > 0.5 && flag('出身·juelin') && !flag('出谷') && !flag('守谷')"
    tags: [出身, 岔路]
    text: |
      拳师说，你淬体将满。
      「再往上是洗髓。要药，要对手，要山外的路——谷里没有。」
      他从樟木箱底翻出一块旧木牌：青阳镇，威远镖局。
      那是他年轻时用拳头挣下的交情，能保你一口安稳饭。
      「留下也行。接我的班，教谷里娃娃扎桩，也是一辈子。」
      灯芯爆了个花。他没有再劝，只是等。
    choices:
      - text: 接过木牌，应下「不以武凌弱」，拜别出谷
        karma:
          type: 立誓
          target: 老拳师·聂铁山
          weight: 16
          polarity: 1
          matureWindow: [15, 90]
          hooks:
            - id: 危难之际，这句誓言替你挡了一次
            - id: 毁誓之日，拳师拄杖出谷寻你
        effects: ["flag 出谷", "道心 +4", "气运 +2"]

      - text: 留下，接拳师的班
        karma: none
        effects: ["flag 守谷", "道心 +3", "根骨 +1"]

      - text: 不辞而别，天亮前翻出谷墙
        karma:
          type: 背叛
          target: 老拳师·聂铁山
          weight: 14
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 多年后你回谷，祠堂门框上你的名字被刮去了
            - id: 拳师终究没有追
        effects: ["flag 出谷", "道心 -4", "锋芒 +0.03"]
`,hr=`# 十万大山开局包 —— 出身·nanjiang（南疆·魔修聚落）
# 玩家投诉修复：野路子出身不该再看到「宗门外门弟子扫地领月钱」。
#
# 世界基调：南疆雨林，魔修聚落（乌木寨）与蛊寨杂处。
# 聚煞不靠灵气 —— 战斗、欲望、煞气。魔道有魔道的体面：重诺、敬强、不欺弱。
# 人物表：师父·莫三刀（说话算话的魔头）｜大师兄·岩罕｜庄家·韦大肚
#         蛊寨·蓝阿婆｜死敌·赤藤寨｜水源·黑水潭
#
# 连锁说明：evt_on_daobei_lishi（誓·刀不离寨）→ evt_on_lishan_jueze（不辞而别 = 毁诺，
# 落 flag 毁诺·刀碑，带铁律二预警链）→ evt_on_zhuishi_deren（毁诺后果卡）。

events:

  # ── 1. 斗兽赌局：第一桶金或第一笔债 ──────────────────────

  - id: evt_on_doushou_yazhu
    title: 斗兽坑的一注
    weight: 75
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 市井]
    text: |
      雨一停，斗兽坑边就围满了人。今日压轴是独眼铁背猿对赤鳞蟒，
      韦大肚把赔率牌一翻 —— 买蟒一赔五，买猿一赔一，唾沫横飞地喊庄。
      你挤在人堆里，腰袋里是攒了半年的盐巴和兽牙。
      那头猿蹲在坑角，独眼上的血痂是新结的，可它呼吸很稳，稳得不像一头伤兽。
    choices:
      - text: 那道血痂是做出来的。押上全部身家，买猿
        karma: none
        effects: ["flag 进过斗兽坑"]
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "58", scale: 10 }
        onCritSuccess:
          text: 铁背猿三合绞死赤鳞蟒。韦大肚脸黑得像锅底，一赔五照付 —— 他记住了你看牌的眼神。
          effects: ["factors.法宝 +0.1", "名望 +8", "flag 第一桶金"]
        onSuccess:
          text: 猿赢得难看，但赢了。你捧着彩头挤出人堆，手心全是汗。
          effects: ["factors.法宝 +0.07", "名望 +4", "flag 第一桶金"]
        onFail:
          text: 血痂是真的，稳的是回光返照。半年的积蓄，一炷香就没了。
          effects: ["道心 -2", "flag 输光了本钱"]
        onCritFail:
          text: 你输光之后不肯走，又把腰刀押了上去。刀也没了。
          effects: ["道心 -4", "factors.法宝 -0.05", "flag 输光了本钱"]

      - text: 找韦大肚借印子钱，押得更大
        karma:
          type: 立誓
          target: 韦大肚
          weight: 20
          polarity: 0
          matureWindow: [3, 20]
          hooks:
            - id: 三日一催的债
            - id: 韦大肚记得你这号人
        effects: ["flag 进过斗兽坑"]
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "58", scale: 10 }
        onCritSuccess:
          text: 连本带利当场结清。韦大肚捏着银子笑：「敢借敢还，往后坑里有你的位子。」
          effects: ["factors.法宝 +0.12", "名望 +10", "flag 第一桶金"]
        onSuccess:
          text: 赢了。抽掉利钱，剩下的仍比你半年攒的多。
          effects: ["factors.法宝 +0.08", "名望 +5", "flag 第一桶金"]
        onFail:
          text: 蟒被绞死的那一刻，你听见自己脖子后头韦大肚的声音：「三日一催，利滚利。」
          effects: ["flag 欠韦大肚的债", "道心 -3", "名望 -4"]
        onCritFail:
          text: 你的腰刀被当场解下来抵了头一笔息。刀是师门给的。
          effects: ["flag 欠韦大肚的债", "factors.法宝 -0.05", "道心 -5"]

      - text: 只押一枚兽牙，先看水有多深
        karma: none
        effects: ["factors.情报 +0.04", "flag 进过斗兽坑"]

      - text: 捂紧腰袋，转身走人
        karma: none
        effects: ["道心 +3"]

  # ── 2. 师父：说话算话的魔头，第一课 ──────────────────────

  - id: evt_on_shifu_diyike
    title: 师父的第一课
    weight: 95
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 师承]
    text: |
      莫三刀收你那天，先当着你的面杀了一个人。
      那汉子三年前对他指天起誓，替寨里守盐道；上个月，他把盐道卖给了赤藤寨。
      刀落得很快，汉子到死还保持着抱拳的姿势。
      师父蹲下擦刀，头也不抬：「我杀人不问善恶，只问他应没应过。」
      他把刀插回背上，看你：「第一课。你记住了什么？」
    choices:
      - text: 「毁诺者死。」
        karma:
          type: 传承
          target: 莫三刀
          weight: 25
          polarity: 0
          matureWindow: [10, 60]
          hooks:
            - id: 师父的刀替你撑过腰
            - id: 师父的仇家也认你这张脸
        effects: ["flag 拜师·莫三刀", "factors.功法 +0.08", "道心 +2"]

      - text: 「应不下的事，一开始就别应。」
        karma:
          type: 传承
          target: 莫三刀
          weight: 25
          polarity: 0
          matureWindow: [10, 60]
          hooks:
            - id: 他觉得你配得上这把刀
            - id: 师父的仇家也认你这张脸
        effects: ["flag 拜师·莫三刀"]
        check: { actor: "talent.悟性 + 道心 * 0.5", dc: "56", scale: 10 }
        onSuccess:
          text: 师父的手在刀柄上停了一停。「比我当年强。」他说，「明早起，跟我练刀。」
          effects: ["factors.功法 +0.1", "道心 +5"]
        onFail:
          text: 刀背拍在你肩上，半边身子都麻了。「滑头。」师父说，「先学挨打。」
          effects: ["factors.状态 -0.08", "factors.功法 +0.05"]

      - text: 不拜。「我的命，不押在别人的规矩上。」
        karma: none
        effects: ["flag 未拜师", "道心 +5", "名望 -4"]

  # ── 3. 蛊母祭：参不参加 + 毒灵根钩子 ──────────────────────

  - id: evt_on_gumu_ji
    title: 蛊母祭
    weight: 70
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 机缘]
    text: |
      三年一次的蛊母祭，蓝阿婆开了祭池。池水黑得发亮，
      底下沉着蛊寨供了百年的蛊母。规矩是下池者由子蛊择主：
      成了，往后多一条命；不成，就当喂了池子。
      乌木寨与蛊寨素有走动，今年匀出一个下池的名额，落在你头上。
      池边的人都在看你。蓝阿婆的烟杆，敲了敲石沿。
    choices:
      - text: 你刚走近，池水就朝你的方向偏了过来
        require: "talent.root == '变异灵根'"
        karma:
          type: 传承
          target: 蛊母
          weight: 28
          polarity: 0
          matureWindow: [15, 90]
          hooks:
            - id: 蛊母的偏爱不白给
            - id: 三十年后要来收一样东西
        effects:
          - "flag 蛊种入体"
          - "flag 蛊母亲选"
          - "factors.灵宠 +0.12"
          - "纯度 +5"

      - text: 脱了上衣，下池
        karma:
          type: 传承
          target: 蛊母
          weight: 20
          polarity: 0
          matureWindow: [15, 90]
          hooks:
            - id: 同出一母的蛊认得彼此
            - id: 蓝阿婆要你还一桩事
        effects: ["flag 下过祭池"]
        check: { actor: "talent.根骨 + talent.神魂 * 0.5", dc: "60", scale: 10 }
        onCritSuccess:
          text: 一线金色的子蛊贴着你的心口钻进去，不疼，只是很凉。蓝阿婆的烟杆掉在了地上。
          effects: ["flag 蛊种入体", "factors.灵宠 +0.1", "纯度 +4"]
        onSuccess:
          text: 子蛊入体的那一刻，你听见自己血里有了第二种声音。
          effects: ["flag 蛊种入体", "factors.灵宠 +0.06", "factors.状态 -0.08"]
        onFail:
          text: 蛊没有择你，反咬了一口。你被拖上岸时，半边胳膊青黑。
          effects: ["factors.状态 -0.25"]
        onCritFail:
          text: 池底有东西攥住了你的脚踝。三个人才把你拽出来，你在岸上吐了半天黑水。
          effects: ["factors.状态 -0.35", "lifespan -2"]

      - text: 站在池边看完全程，把每一步规矩记下来
        karma: none
        effects: ["factors.情报 +0.05", "flag 看过蛊母祭"]

      - text: 借口采药，躲开这场祭
        karma: none
        effects: ["名望 -3", "道心 +1"]

  # ── 4. 第一次聚煞：历练即修行（魔道） ──────────────────────

  - id: evt_on_diyici_jusha
    title: 第一场架
    weight: 90
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && flag('道统·魔道') && tier == 1 && sublevel < 0.5"
    tags: [出身, 南疆, 修行]
    text: |
      你的煞种沉在丹田里，半个月了，纹丝不动。
      寨里老人说得直白：「聚煞不打坐。灵气是天上的，煞是人身上的 ——
      见血，见汗，见生死，它才肯醒。」
      这一步没人替得了你。要入聚煞，先得自己去挑一场架，
      真刀真枪的那种。挑谁、怎么打，是你自己的事。
    choices:
      - text: 挑寨里最横的 —— 大师兄岩罕
        karma: none
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "62", scale: 10 }
        onCritSuccess:
          text: 你在他刀下走了三十合，还回敬了一记。岩罕收刀，第一次正眼看你：「煞醒了。滚去练。」
          effects: ["sublevel +0.15", "名望 +15", "flag 挑过大师兄", "factors.状态 -0.08"]
        onSuccess:
          text: 你挨的比还的多，但站到了最后。丹田里那点东西，热了。
          effects: ["sublevel +0.12", "名望 +8", "factors.状态 -0.15"]
        onFail:
          text: 岩罕把你按进泥里，按了三次。第三次你爬起来时，煞种动了 —— 它喜欢这个。
          effects: ["sublevel +0.06", "factors.状态 -0.25"]
        onCritFail:
          text: 你醒来时躺在自己屋里，肋骨断了两根。岩罕留了话：「骨头长好再来。」
          effects: ["factors.状态 -0.35", "lifespan -1"]

      - text: 找个软柿子 —— 后山挑柴的老倌
        karma:
          type: 杀戮
          target: 挑柴的老倌
          weight: 12
          polarity: -1
          matureWindow: [8, 50]
          hooks:
            - id: 寨里人背后啐你
            - id: 他孙子在人群里看着
        effects:
          - "sublevel +0.08"
          - "名望 -8"
          - "堕度 +5"
          - "道心 -5"

      - text: 进瘴林，寻一头独居的山魈
        karma: none
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "55", scale: 10 }
        onCritSuccess:
          text: 你把山魈的尸首拖回寨门，一路上没人说话。煞种在丹田里烧得像一小炉炭。
          effects: ["sublevel +0.18", "名望 +6", "factors.状态 -0.05"]
        onSuccess:
          text: 缠斗到天黑，山魈断了气，你断了一根手指的骨头。值。
          effects: ["sublevel +0.12", "factors.状态 -0.15"]
        onFail:
          text: 你是滚下山坡才捡回命的。不过煞种见了你自己的血，也算开了荤。
          effects: ["sublevel +0.04", "factors.状态 -0.3"]
        onCritFail:
          text: 山魈的爪子从你背上撕下一条肉。你在药棚里趴了一个月。
          effects: ["factors.状态 -0.4", "lifespan -1"]

      - text: 不挑。等心里那口气自己憋出来
        karma: none
        effects: ["道心 +2", "flag 煞种未醒"]

  # ── 5. 外寨抢水源：部落战 ────────────────────────────────

  - id: evt_on_heishuitan
    title: 黑水潭
    weight: 80
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 冲突]
    text: |
      旱季第三个月，黑水潭见了底的一半。
      赤藤寨三百来人顺着干河床下来了，蛊烟在队伍前头压得很低。
      寨主敲响铜锣点人：「站前排的，分水多一瓢；递刀抬伤的，算半份；
      躲着不出来的 —— 往后旱死渴死，别怪寨里。」
      火把一支支点起来。轮到你报名字了。
    choices:
      - text: 站前排
        karma:
          type: 杀戮
          target: 赤藤寨
          weight: 20
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 赤藤寨记下了你的脸
            - id: 头功的名声传出山
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "52", scale: 10 }
        onCritSuccess:
          text: 你第一个撞进对面的盾墙，也是最后一个退出来的。分水那天，你的瓢比别人深。
          effects: ["名望 +15", "flag 寨战头功", "factors.状态 -0.08"]
        onSuccess:
          text: 前排活下来的人不到七成。你是其中之一，带着两道疤。
          effects: ["名望 +8", "factors.状态 -0.18"]
        onFail:
          text: 你被蛊烟呛倒在河床上，是后排的人把你拖回来的。好在，你没退。
          effects: ["名望 +2", "factors.状态 -0.3"]
        onCritFail:
          text: 一杆竹矛穿透了你的肩。拔出来的时候，你听见骨头在响。
          effects: ["factors.状态 -0.4", "lifespan -2"]

      - text: 递刀抬伤，跟在队尾
        karma: none
        effects: ["名望 +3", "factors.状态 -0.05", "flag 寨战出过力"]

      - text: 躲进后山岩洞，等打完再出来
        karma:
          type: 背叛
          target: 乌木寨
          weight: 16
          polarity: -1
          matureWindow: [6, 40]
          hooks:
            - id: 分水没你的份
            - id: 没人再把后背交给你
        effects: ["名望 -10", "道心 -4", "flag 寨战躲了"]

      - text: 放出体内的子蛊，逆着风送回去
        require: "flag('蛊种入体')"
        karma:
          type: 杀戮
          target: 赤藤寨
          weight: 26
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 赤藤寨的蛊婆记住了这味蛊
            - id: 伤敌太狠，结的仇更深
        effects:
          - "名望 +12"
          - "堕度 +4"
          - "factors.灵宠 +0.04"
          - "flag 寨战头功"

  # ── 6. 正道「清剿」的风声：藏／迎／迁 ─────────────────────

  - id: evt_on_qingjiao_fengsheng
    title: 清剿的风声
    weight: 70
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 危机]
    text: |
      盐商队带来山外的信：剑南几家正道宗门联了手，
      点了三处「魔窟」的名字要清剿，乌木寨排在第二。
      当夜火塘议事，寨里分成三派 —— 封山藏匿的，设伏迎击的，
      举寨迁往老林深处的，吵到后半夜。
      寨主忽然抬手压下声音，看向你们这些小辈：「你们也说说。」
    choices:
      - text: 「封山口，熄烟火，让他们扑个空。」
        karma: none
        effects: ["flag 寨议·藏", "锋芒 -0.06", "factors.情报 +0.05", "名望 +3"]

      - text: 「在鹰嘴崖设伏。他们要名，我们要命。」
        karma: none
        effects: ["flag 寨议·迎", "锋芒 +0.08", "名望 +6"]

      - text: 「迁。深山再苦，苦不过刀口。」
        karma: none
        effects: ["flag 寨议·迁", "道心 +3", "名望 +2"]

      - text: 低头拨火不说话，暗自备好自己的退路
        karma: none
        effects: ["factors.情报 +0.05", "道心 -3", "flag 私备退路"]

  # ── 7. 瘴气救人：救人是弱点还是本钱 ──────────────────────

  - id: evt_on_zhanggu_jiuren
    title: 瘴谷里的人
    weight: 65
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 道德]
    text: |
      老瘴谷的雾比往年沉。你采药到谷底，看见溪边趴着个人 ——
      外乡装束，佩剑的穗子是山外样式，怀里露出半块玉牌。
      瘴毒入了肺，那人只剩一口气。
      寨里的老话：瘴谷里的东西，捡到就是自己的；人，也算东西。
      谷口离寨子七里。背个人走瘴气最沉的那段，你自己也未必稳。
    choices:
      - text: 背他出谷，拿蛇药先吊住那口气
        karma:
          type: 救助
          target: 昏迷的外乡人
          weight: 30
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 他记得瘴气里那张脸
            - id: 寨里传你心软
        effects: ["flag 救过外乡人"]
        check: { actor: "talent.根骨 + 道心 * 0.3", dc: "55", scale: 10 }
        onSuccess:
          text: 出谷那一刻他咳醒了半声，抓着你的袖子说了两个字，你没听清。
          effects: ["功德 +6", "道心 +4"]
        onFail:
          text: 最沉那段瘴气你自己也吸了几口。人救出来了，你的肺疼了半个月。
          effects: ["功德 +6", "factors.状态 -0.2"]

      - text: 搜走玉牌和佩剑，人留在原地
        karma:
          type: 夺取
          target: 昏迷的外乡人
          weight: 18
          polarity: -1
          matureWindow: [8, 50]
          hooks:
            - id: 他竟没死成
            - id: 玉牌是有主的东西
        effects:
          - "factors.法宝 +0.06"
          - "道心 -4"
          - "堕度 +3"
          - "flag 拿了外乡人的玉牌"

      - text: 救回寨里，绑在柱子上等人来赎
        karma:
          type: 夺取
          target: 昏迷的外乡人
          weight: 20
          polarity: -1
          matureWindow: [6, 40]
          hooks:
            - id: 赎金背后站着他的师门
            - id: 他记你两笔账 —— 一救，一绑
        effects: ["名望 +5", "flag 绑了外乡人"]

      - text: 绕开走。瘴谷里死个人，不稀奇
        karma: none
        effects: ["道心 -1"]

  # ── 8. 第一个誓：魔道立誓 ────────────────────────────────

  - id: evt_on_daobei_lishi
    title: 刀碑立誓
    weight: 85
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1"
    tags: [出身, 南疆, 立誓]
    text: |
      寨门外那块刀碑插满断刀，每一柄断刀都是一个誓。
      寨规：在乌木寨吃粮的，满十六那年要在碑前立一个誓 ——
      内容自己挑，立下就是一辈子。
      蓝阿婆坐在碑下记名，莫三刀抱着刀站在人群后头。
      前头那人立完了，轮到你。碑上的断刀在风里嗡嗡地响，像很多人在同时说话。
    choices:
      - text: 「学不成，刀不出寨。」
        karma:
          type: 立誓
          target: 莫三刀
          weight: 40
          polarity: 0
          matureWindow: [8, 40]
          hooks:
            - id: 碑上记了你的名
            - id: 这誓拴着你的脚
        effects: ["flag 已立血誓", "flag 誓·刀不离寨", "道心 +3"]

      - text: 「不欺弱，不毁诺。」
        karma:
          type: 立誓
          target: 乌木寨刀碑
          weight: 40
          polarity: 0
          matureWindow: [8, 40]
          hooks:
            - id: 总有弱者来试你的誓
            - id: 寨里人敢把后背给你
        effects: ["flag 已立血誓", "flag 誓·不欺弱", "道心 +4"]

      - text: 「谁动乌木寨，我平谁全寨。」
        karma:
          type: 立誓
          target: 乌木寨
          weight: 40
          polarity: 0
          matureWindow: [8, 40]
          hooks:
            - id: 寨仇从此是你的仇
            - id: 赤藤寨也听说了这句话
        effects: ["flag 已立血誓", "flag 誓·护寨", "名望 +6", "锋芒 +0.06"]

      - text: 不立。舌头是自己的，命也是
        karma: none
        effects: ["flag 未立血誓", "道心 +2", "名望 -6"]

  # ── 9. 煞气反噬初体验：长期不斗则伤（魔道，可重复） ────────

  - id: evt_on_shaqi_fanshi
    title: 煞气如狗
    weight: 55
    act: 1
    cooldown: 15
    cond: "flag('出身·nanjiang') && flag('道统·魔道') && tier == 1 && sublevel > 0.15 && !flag('得泄煞法')"
    tags: [出身, 南疆, 修行, 反噬]
    text: |
      整半个月没动过手。煞气先是在指节里发胀，指甲盖泛出青黑；
      到夜里，它开始啃经脉，你咬碎了半颗牙才没喊出声。
      寨里老人早说过：「煞是狗。三天不喂，它就掉头啃主人。」
      天不亮，你坐在床沿，十根手指黑得像泡过墨。
      这东西不会自己散，得给它找个去处。
    choices:
      - text: 下山，寻一场架打
        karma:
          type: 杀戮
          target: 过路刀客
          weight: 12
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 刀客有同伴
            - id: 这条道上记住了你
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "50", scale: 9 }
        onSuccess:
          text: 三十合，见了血。煞气顺着刀口退回丹田，服帖得像喂饱的狗。
          effects: ["factors.状态 +0.05", "sublevel +0.06"]
        onFail:
          text: 架是打了，人差点没回来。不过煞气总算消停了。
          effects: ["factors.状态 -0.2", "sublevel +0.03"]

      - text: 咬牙硬压，一夜坐到天亮
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.5", dc: "58", scale: 10 }
        onSuccess:
          text: 天亮时指甲上的青黑退了。你压住了它 —— 这一回。
          effects: ["道心 +4", "factors.状态 -0.05"]
        onFail:
          text: 后半夜煞气破关而入，你在床上抽了半宿。腑脏像被犁过一遍。
          effects: ["factors.状态 -0.25"]
        onCritFail:
          text: 你昏过去之前，看见自己的手指在自己的意思之外，掐向了自己的喉咙。
          effects: ["factors.状态 -0.3", "lifespan -1"]

      - text: 拿自己放血，喂刀
        karma: none
        effects: ["factors.状态 -0.12", "道心 -2", "sublevel +0.03"]

      - text: 「师父，煞压不住了。」
        require: "flag('拜师·莫三刀')"
        karma: none
        effects: ["flag 得泄煞法", "factors.功法 +0.06", "道心 +2"]

  # ── 10. 离山抉择：留寨／出山（落 flag 出山） ───────────────

  - id: evt_on_lishan_jueze
    title: 山外
    weight: 85
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && tier == 1 && sublevel > 0.5"
    tags: [出身, 南疆, 岔路]
    text: |
      商队进山那晚，你在火塘边坐到后半夜。
      这一年你的火候涨得比谁都快，寨子开始小，山开始矮。
      商队三日后出山，愿意捎人。
      莫三刀没提这事，只在白天磨他那口刀，磨得比哪天都久。
      走，还是留，没人逼你 —— 山里人只认一条：拿定了主意，就别回头。
    choices:
      - text: 留下。寨子里有你的位置
        karma: none
        effects: ["flag 留在乌木寨", "factors.伙伴 +0.08", "名望 +5"]

      - text: 拜别师长，跟商队出山
        require: "!flag('誓·刀不离寨')"
        karma: none
        effects: ["flag 出山", "道心 +3"]

      - text: 先去求莫三刀解誓，再走
        require: "flag('誓·刀不离寨')"
        karma: none
        check: { actor: "道心 + talent.悟性 * 0.5", dc: "60", scale: 10 }
        onSuccess:
          text: 师父听完，磨刀的手没停：「应过的事，当面来销，这才是乌木寨的人。」他拔下碑上你那半截断刀，扔给你。「带着。滚吧。」
          effects: ["unflag 誓·刀不离寨", "flag 出山", "名望 +4", "道心 +5"]
        onFail:
          text: 「刀还生。」师父说，「再养一年。」你留了下来，等一个他点头的日子。
          effects: ["道心 +2", "flag 留在乌木寨"]

      - text: 不辞而别，连夜跟商队走
        require: "flag('誓·刀不离寨')"
        karma:
          type: 毁诺
          target: 莫三刀
          weight: 45
          polarity: -1
          matureWindow: [8, 40]
          hooks:
            - id: 毁诺者死
              lethal: true
              foreshadow:
                - { at: -6, evt: "山下茶棚有人打听乌木寨逃徒的相貌" }
                - { at: -2, evt: "瘸腿货郎捎来一句口信 —— 回去磕头，还来得及", window: true }
                - { at: -1, evt: "夜里有人在你门外坐了一宿，天亮只留下一道刀痕" }
            - id: 大师兄先到一步
        effects:
          - "flag 出山"
          - "flag 毁诺·刀碑"
          - "道心 -8"
          - "堕度 +5"

  # ── 11. 毁诺连锁卡：追誓 ─────────────────────────────────

  - id: evt_on_zhuishi_deren
    title: 追誓的人
    weight: 150
    act: 1
    once: true
    cond: "flag('出身·nanjiang') && flag('毁诺·刀碑')"
    tags: [出身, 南疆, 因果, 连锁]
    text: |
      你在山外落脚的第三个月，瘸腿货郎寻到了你的桌子，放下半截断刀。
      刀你认得 —— 刀碑上你立誓那柄的另一半。
      城外亭子里，大师兄岩罕面前摆着两碗酒、两把刀。
      「师父说，毁诺者死。」他把其中一碗推过来，
      「也说你是他收的最后一个徒弟 —— 给你一回把话说完的机会。」
    choices:
      - text: 喝了那碗酒，跟他回寨领刀罚
        karma: none
        effects:
          - "unflag 毁诺·刀碑"
          - "flag 领了刀罚"
          - "factors.状态 -0.2"
          - "道心 +5"
          - "名望 +3"

      - text: 「欠的认，罚不受。」自散一段火候抵誓
        karma: none
        effects:
          - "unflag 毁诺·刀碑"
          - "flag 抵了誓债"
          - "sublevel -0.3"
          - "道心 +3"

      - text: 拔刀
        karma:
          type: 杀戮
          target: 大师兄·岩罕
          weight: 30
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 师门死仇
            - id: 刀上认过的亲，刀上断
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "58", scale: 10 }
        onSuccess:
          text: 你伤了他左臂，趁乱脱身。誓还背在身上，往后的路，得一直快过身后那把刀。
          effects: ["factors.状态 -0.25", "flag 伤了岩罕", "expose.真实修为 +5"]
        onFail:
          text: 岩罕一条腿把你钉在亭柱上，捆上骡车拖回了寨。刀罚没免，罪加了一等。
          effects: ["factors.状态 -0.4", "lifespan -1", "unflag 毁诺·刀碑", "flag 领了刀罚"]
        onCritFail:
          text: 他的刀停在你颈侧半寸。「师父说留你全尸。」岩罕收刀，「我说 —— 再给你一次。」
          effects: ["factors.状态 -0.45", "lifespan -2", "unflag 毁诺·刀碑", "flag 领了刀罚"]

      - text: 跪下来求一条生路
        karma: none
        effects:
          - "名望 -8"
          - "道心 -5"
          - "factors.状态 -0.2"
          - "unflag 毁诺·刀碑"
          - "flag 领了刀罚"
`,gr=`# 出身包 · 望乡镇（幽冥边界的河镇）
# 前缀 evt_ow_，全部 cond 含 flag('出身·wangxiang')，location: 望乡镇（引擎开局 location = 出生地名）
#
# 世界观：家家供着渡亡的行当，夜里听得见对岸。鬼道不打坐 ——
# 收魂、守夜、抄度亡经，功夫都在这些事里。境界叫法：凝魂 / 阴煞（严禁写练气筑基）。
# 道统分流：wangxiang 的 pathPool 是 鬼道/正道，凝魂卡与「役使亲魂」选项额外用 flag('道统·鬼道') 把门。

events:

  # ── 第一次守夜：亡魂托梦，办不办 ──────────────────────────

  - id: evt_ow_diyici_shouye
    title: 头一夜
    weight: 100
    act: 1
    once: true
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 主干, 道德]
    text: |
      镇里的规矩，新丧停灵三日，头一夜要有人守。今夜轮到你 ——
      船工赵大，前日翻在河湾里，捞上来时手里还攥着半截桨。
      三更灯芯一跳，你在似睡非睡间见他立在棺前，浑身滴着水：
      「房梁东数第三根，有我攒下的钱。给我婆娘，别叫我兄弟晓得。」
      天亮了。棺是冷的，地上有一摊水。梦里的话，办不办？
    choices:
      - text: 把话带到，一字不多，一字不少
        karma:
          type: 施恩
          target: 船工赵大
          weight: 16
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 遗孀记你一辈子
            - id: 他兄弟记恨你多事
        effects: ["功德 +6", "名望 +3", "flag 望乡·守过夜"]

      - text: 守夜人只守夜，不传亡人的话
        karma: none
        effects: ["道心 +3", "flag 望乡·守过夜"]

      - text: 天不亮先去撬那根房梁
        karma:
          type: 夺取
          target: 船工赵大
          weight: 22
          polarity: -1
          matureWindow: [8, 50]
          hooks:
            - id: 亡魂夜夜立在你床头
            - id: 无人知晓
        effects: ["factors.状态 +0.05", "堕度 +5", "道心 -4", "业障 +4", "flag 望乡·守过夜"]

  # ── 渡亡人的规矩：收谁的钱，不收谁的钱 ────────────────────

  - id: evt_ow_duwang_guiju
    title: 两桩活
    weight: 45
    act: 1
    cooldown: 10
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 日常, 道德]
    text: |
      一日两桩活。镇东米行的老太爷殁了，管家捧着双倍的钱上门，只求风光；
      河湾又捞起一个外乡脚夫，同伴三人蹲在滩上，凑不出半吊。
      老渡亡人传下的规矩只有三句：横死的先渡，无主的不收钱，丧家的钱不还价、也不加价。
      米行的管家催得急。脚夫的尸首搁在日头底下，等不得。
    choices:
      - text: 按老规矩来：先渡脚夫，分文不取；米行照旧价，排明日
        karma:
          type: 施恩
          target: 外乡脚夫的同伴
          weight: 12
          polarity: 1
          hooks:
            - id: 江湖上多了三个念你好的人
            - id: 泥牛入海
        effects: ["功德 +5", "名望 +4", "道心 +2"]

      - text: 死人分不出先后，银钱分得出 —— 先应米行，双倍照收
        karma: none
        effects: ["factors.状态 +0.06", "功德 -2", "道心 -2"]

      - text: 两桩都应，连夜赶工，一桩不落
        karma: none
        check: { actor: "talent.根骨 + talent.神魂 * 0.5", dc: "60", scale: 10 }
        onSuccess:
          text: 你两头跑到后半夜，仪轨一处没错。米行的管家服了，滩上那三个朝你磕了头。
          effects: ["名望 +6", "功德 +4", "factors.状态 -0.08"]
        onFail:
          text: 后半夜手一抖，经文错了一行。错在哪桩上，你自己心里清楚。
          effects: ["道心 -3", "factors.状态 -0.15", "名望 -3"]

  # ── 河上飘来的无名尸：收殓积功德 / 搜身取财 ───────────────

  - id: evt_ow_heshang_wumingshi
    title: 河送来的
    weight: 50
    act: 1
    cooldown: 12
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 日常, 道德]
    text: |
      清早，一具浮尸卡在镇口的木桩上，面朝下，泡得发白。没人认得。
      衣裳是上游的样式，腰间一个油布包，裹得很紧。
      镇上的老话：河送来的，是送给渡亡人的活，也是送给渡亡人的债。
      围看的人不少，没一个肯下水。
    choices:
      - text: 下水捞起，收殓入土，立一块无字碑
        karma:
          type: 施恩
          target: 无名亡者
          weight: 12
          polarity: 1
          hooks:
            - id: 此魂记你一恩
            - id: 永无回音
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "52", scale: 10 }
        onCritSuccess:
          text: 合眼之前，那张泡白的脸安静了下来。你隐约看见他生前最后望着的方向 —— 上游。
          effects: ["功德 +10", "道心 +3", "factors.情报 +0.03"]
        onSuccess:
          text: 半卷度亡经诵完，水里那点滞住的东西松开了。你把碑立在河湾最高处。
          effects: ["功德 +8", "道心 +2"]
        onFail:
          text: 人入了土，魂却滞在滩上不肯走。当夜你门槛上的水渍，到晌午都没干。
          effects: ["功德 +4", "factors.状态 -0.1"]

      - text: 捞是要捞的 —— 先解开那个油布包
        karma:
          type: 夺取
          target: 无名亡者
          weight: 24
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 认尸的人寻到望乡镇
              lethal: true
              foreshadow:
                - { at: -8, evt: "有人沿河一路南下，挨镇打听一具浮尸的下落" }
                - { at: -3, evt: "一个外乡妇人在镇口挨家问：谁见过一枚缠金线的玉扳指" }
                - { at: -1, evt: "妇人在你门外站了一整夜 —— 东西还回去，现在还来得及", window: true }
            - id: 无人认领
        effects: ["factors.法宝 +0.06", "堕度 +6", "道心 -4", "业障 +6"]

      - text: 撑篙把尸首推回河心，眼不见为净
        karma: none
        effects: ["道心 -3", "功德 -2"]

  # ── 镇口的引魂灯该添油了：守约 ────────────────────────────

  - id: evt_ow_yinhundeng_tianyou
    title: 灯不能灭
    weight: 45
    act: 1
    cooldown: 8
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 日常]
    text: |
      镇口石塔上那盏引魂灯，一年到头不能灭 —— 对岸回来的、河里迷路的，全靠它认路。
      灯油各家轮着出，这个月轮到你。
      入冬油价又涨了。灯楼避风的角落里还堆着半坛去年的陈油，掺一半进去，没人看得出来。
      守灯的老人前年没了。如今灯亮不亮，只有天知道。
    choices:
      - text: 足油满捻，守到天亮
        karma: none
        effects: ["道心 +3", "功德 +4", "factors.状态 -0.05"]

      - text: 掺陈油，省下的钱换米
        karma:
          type: 毁诺
          target: 望乡镇
          weight: 14
          polarity: -1
          matureWindow: [5, 40]
          hooks:
            - id: 灯暗那夜，有魂迷了路
            - id: 无人发觉
        effects: ["factors.状态 +0.04", "道心 -3", "堕度 +3"]

      - text: 添满油，再以自家气机护灯一夜 —— 今晚河风太大
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.2", dc: "58", scale: 10 }
        onSuccess:
          text: 风声在塔外打转，灯焰一夜纹丝不动。天亮时你看见河面上有雾散开，像有人上了岸。
          effects: ["功德 +5", "sublevel +0.03"]
        onFail:
          text: 一阵河风卷进灯楼，你扑上去护住了灯，自己受了整夜的寒。
          effects: ["factors.状态 -0.12", "功德 +3"]

  # ── 阴差过境：避让 / 偷看 / 搭话 ──────────────────────────

  - id: evt_ow_yinchai_guojing
    title: 链声过境
    weight: 55
    act: 1
    cooldown: 14
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 机缘]
    text: |
      半夜，镇上的狗一齐哑了。
      街面浮起一层薄雾，雾里有铁链拖地的声音，不紧不慢，从镇北头往渡口去。
      门缝里望出去：两个高个子的影子，押着一串低矮的影子，走得极慢。
      老人说过 —— 阴差过境，熄灯，伏低，别出声。
      链声到你家门前，停了一停。
    choices:
      - text: 熄灯伏低，数着链声走远
        karma: none
        effects: ["道心 +2"]

      - text: 贴着门缝，看个仔细
        karma: none
        check: { actor: "talent.神魂 + talent.悟性 * 0.3", dc: "62", scale: 10 }
        onCritSuccess:
          text: 你看清了差役腰牌上的字，也看清了那串影子里，没有一个是望乡镇的人。
          effects: ["factors.情报 +0.06", "悟性 +2"]
        onSuccess:
          text: 影子过完，你记下了他们押人的路数、锁魂的手法。这些东西，书上没有。
          effects: ["factors.情报 +0.04", "悟性 +1"]
        onFail:
          text: 一道视线隔着雾扫过门缝。你僵在原地，半宿没缓过劲来。
          effects: ["factors.状态 -0.12"]
        onCritFail:
          text: |
            门无风自开了一线。那夜之后，你听对岸的声音，比从前清楚 —— 也比从前近。
          effects: ["factors.状态 -0.15", "lifespan -1", "悟性 +1"]

      - text: 开门，长揖到地，问一句
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.4", dc: "68", scale: 10 }
        onSuccess:
          text: 前头的影子顿了顿，丢下一句话：「河这边的事管好。河那边的事，少问。」
          effects: ["factors.情报 +0.05", "道心 +2", "flag 望乡·见过阴差"]
        onFail:
          text: 影子没停。铁链贴着你的脚背拖了过去，那股凉意三天没散。
          effects: ["factors.状态 -0.15", "僭越 +2"]

  # ── 被正道游方修士斥为邪祟：辩 / 忍 / 记下 ────────────────

  - id: evt_ow_youfang_chize
    title: 邪祟二字
    weight: 50
    act: 1
    cooldown: 12
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 冲突]
    text: |
      一个佩剑的游方修士站在纸扎铺前，眉头拧着。
      他一路看过引魂灯、招魂幡、家家门上的度亡符，最后指着整条街：
      「聚阴养魂，装神弄鬼。此地邪祟成风，早晚生出大患。」
      铺子里的老少都低着头。他的剑穗是云纹，正道大宗的样式。
      他看见了你 —— 和你袖口露出的铃。
    choices:
      - text: 与他辩：渡亡是替生人安心，替死人引路
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.4", dc: "60", scale: 10 }
        onSuccess:
          text: 他盯着你看了半晌，拂袖而去，丢下两个字：「强词。」但烧幡的话，没有再提。
          effects: ["名望 +5", "道心 +3"]
        onFail:
          text: 「巧言。」他当街折断了一杆招魂幡。没人敢拦，包括你。
          effects: ["名望 -3", "道心 -3"]

      - text: 低头，忍下
        karma:
          type: 受辱
          target: 游方修士·孟青崖
          weight: 12
          polarity: -1
          hooks:
            - id: 他日重逢，他早不记得你
            - id: 你记得
        effects: ["道心 -2", "锋芒 -0.05"]

      - text: 不辩，不忍。记下他的剑穗、口音和去向
        karma: none
        effects: ["factors.情报 +0.05", "flag 望乡·记下孟青崖"]

      - text: 袖中铃轻轻一晃 —— 让他自己听听对岸
        require: "flag('道统·鬼道')"
        karma:
          type: 受辱
          target: 游方修士·孟青崖
          weight: 16
          polarity: -1
          hooks:
            - id: 他带同门回来清剿邪祟
            - id: 他自认学艺不精，闭口不提此镇
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "64", scale: 10 }
        onSuccess:
          text: 铃声极轻，他的脸色却一寸寸白下去，按着剑退了半步。走的时候，一个字也没说。
          effects: ["名望 +6", "expose.真实修为 +6", "僭越 +3", "锋芒 +0.05"]
        onFail:
          text: 铃声出袖，他的剑也出了半寸。你收铃退后，他冷笑：「果然是邪祟。」
          effects: ["名望 -4", "expose.真实修为 +8", "僭越 +4", "flag 望乡·被指邪祟"]

  # ── 祖传的招魂铃响了：身世钩子 ────────────────────────────

  - id: evt_ow_zhaohunling_zixiang
    title: 哑铃自响
    weight: 90
    act: 1
    once: true
    cond: "flag('出身·wangxiang') && tier == 1"
    location: 望乡镇
    tags: [出身, 身世, 机缘]
    text: |
      爹娘没给你留下别的，只有一枚黄铜招魂铃，哑了多少年 ——
      镇上人都说，这铃没有舌，摇不响。
      今夜三更，它在枕边自己响了一声。极轻，像水滴落进井里。
      你举灯细看：铃里其实有舌，只是被人用银丝缠死了。
      银丝底下，还缠着半片指甲盖大的骨片，上头有刻痕。
    choices:
      - text: 解开银丝，取出骨片
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.3", dc: "55", scale: 10 }
        onCritSuccess:
          text: |
            骨片两面都有字。一面是个姓 —— 不是你养家的姓；
            另一面四个小字：「铃响勿应。」
          effects: ["originClues +2", "expose.身世 +2", "flag 望乡·铃中骨片"]
        onSuccess:
          text: 骨片上刻着一个姓。你在镇册上翻了一夜 —— 望乡镇没有一户人家姓这个。
          effects: ["originClues +2", "flag 望乡·铃中骨片"]
        onFail:
          text: |
            银丝一断，铃猛地连响三声，你按都按不住。
            对岸的方向，有什么静了下来 —— 像是在听。
          effects: ["originClues +1", "expose.身世 +4", "factors.状态 -0.08", "flag 望乡·铃中骨片"]

      - text: 原样收好，拿去问镇上最老的渡亡人
        karma: none
        effects: ["originClues +1", "factors.情报 +0.04", "flag 望乡·问过老渡亡"]

      - text: 用棉絮把铃裹了三层，只当没听见
        karma: none
        effects: ["道心 +3"]

      - text: 划到河心，把铃沉下去
        karma: none
        effects: ["道心 +2", "气运 -3", "flag 望乡·沉铃"]

  # ── 第一缕魂力凝成：凝魂境（鬼道） ────────────────────────

  - id: evt_ow_diyilv_hunli
    title: 眉心一点凉
    weight: 100
    act: 1
    once: true
    cond: "flag('出身·wangxiang') && flag('道统·鬼道') && tier == 1 && sublevel > 0.15"
    location: 望乡镇
    tags: [出身, 修炼, 主干]
    text: |
      鬼道不打坐。收魂、守夜、抄度亡经，把耳朵借给死人，把夜借给河 ——
      功夫都在这些事里，一天一天，看不见长。
      今夜抄到「往生」二字，笔尖一顿，眉心忽然一点凉，
      像有人隔着雾，朝你呵了一口气。
      一缕极细的魂力，在眉心自己凝住了。老辈说的凝魂，原来是这么回事：
      不是你凝它，是它认你。
    choices:
      - text: 由它去。继续抄经，把这一卷抄完
        karma: none
        effects: ["sublevel +0.1", "道心 +4"]

      - text: 引这缕魂力入祖传的招魂铃
        require: "!flag('望乡·沉铃')"
        karma: none
        effects: ["factors.法宝 +0.08", "sublevel +0.05", "flag 望乡·魂入铃"]

      - text: 以初凝的魂力，试着听一次对岸
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.3", dc: "66", scale: 11 }
        onCritSuccess:
          text: 千百种声音潮水般涌来，你却在其中听清了一句极轻的、像是在唤谁小名的尾音。
          effects: ["sublevel +0.08", "悟性 +2", "originClues +1"]
        onSuccess:
          text: 只听了一息，你便自己收住了。但就在这一息里，你摸到了魂力的用法。
          effects: ["sublevel +0.08", "悟性 +2"]
        onFail:
          text: 声音涌过来，那缕魂力差点被整个拽出眉心。你咬破舌尖才醒。
          effects: ["factors.状态 -0.15", "道心 -3", "sublevel +0.02"]
        onCritFail:
          text: 你在河滩上醒来，双脚泡在水里，不记得自己是怎么走出家门的。
          effects: ["factors.状态 -0.25", "lifespan -1", "道心 -4"]

  # ── 亡母的魂在对岸：鬼道大忌 ──────────────────────────────

  - id: evt_ow_wangmu_duian
    title: 对岸有人望
    weight: 95
    act: 1
    once: true
    cond: "flag('出身·wangxiang') && tier == 1 && sublevel > 0.3"
    location: 望乡镇
    tags: [出身, 道德, 主干]
    text: |
      摆渡的哑叔比划了半天，你才看懂：前夜他渡人回来，在对岸的雾里，看见了你娘。
      十二年了。她没走远。就站在岸边，朝这边望。
      行里的老话你从小听到大：亲族的亡魂最恋生人，也最听生人的话 ——
      所以役使亲魂是渡亡人第一大忌，谁犯了，行里的香火就不再认他。
      哑叔看着你，等你一句话。
    choices:
      - text: 隔河见一面。不唤她，不应她，看一眼就回
        karma: none
        effects: ["道心 +4", "originClues +1", "flag 望乡·见过亡母"]

      - text: 不见。托哑叔带一炷香过去，请她安心走
        karma: none
        effects: ["道心 +2", "功德 +6", "flag 望乡·送香"]

      - text: 依仪轨正式渡她过河 —— 哪怕你的修为还太浅
        karma:
          type: 救助
          target: 亡母
          weight: 26
          polarity: 1
          matureWindow: [15, 70]
          hooks:
            - id: 阴司记你一功
            - id: 她临去时回头看了你三次
        check: { actor: "talent.神魂 + 道心 * 0.5", dc: "70", scale: 10 }
        onSuccess:
          text: |
            经诵到第三遍，对岸的影子轻了。没入雾中之前，她朝你拜了一拜 ——
            像是放心，又像是道别。
          effects: ["功德 +12", "道心 +6", "originClues +1", "flag 望乡·亡母已渡"]
        onFail:
          text: |
            你的魂力撑到一半就散了。雾合上时，岸边已经空了 ——
            她躲开了。她不肯耗你的性命。
          effects: ["道心 -3", "factors.状态 -0.12", "flag 望乡·渡母未成"]

      - text: 【大忌】刺血引铃，唤她过河，役为己用
        require: "flag('道统·鬼道')"
        karma:
          type: 夺取
          target: 亡母
          weight: 45
          polarity: -1
          matureWindow: [8, 45]
          hooks:
            - id: 亲魂反噬
              lethal: true
              foreshadow:
                - { at: -10, evt: "梦里娘总背对着你，怎么唤都不回头" }
                - { at: -4, evt: "招魂铃一夜哑过一夜，铃声里开始带血腥气" }
                - { at: -1, evt: "老渡亡人拦在你门口：「现在送她走，还来得及。」", window: true }
            - id: 行里除名，渡亡人与你割席
        effects:
          - "factors.伙伴 +0.2"
          - "堕度 +12"
          - "业障 +15"
          - "道心 -10"
          - "僭越 +5"
          - "expose.残魂 +6"
          - "flag 望乡·役使亲魂"

  # ── 离镇抉择：守镇 / 入世 ─────────────────────────────────

  - id: evt_ow_lizhen_jueze
    title: 三日后的船
    weight: 85
    act: 1
    once: true
    cond: "flag('出身·wangxiang') && tier == 1 && sublevel > 0.5"
    location: 望乡镇
    tags: [出身, 主干, 岔路]
    text: |
      你的行当在镇里立住了。白事人家先来敲你的门，守夜的肯把一整夜交给你。
      可你也清楚：这重境界再往上走，要借的不是安稳，是风浪 ——
      河这边能教你的，都教完了。
      老渡亡人蹲在渡口，抽完半袋烟才开口：
      「走出去的，我送过十七个。回来的，两个。你自己算。」
      下游的船，三日后过镇。
    choices:
      - text: 留下。守镇，守灯，守这条河
        karma:
          type: 立誓
          target: 望乡镇
          weight: 20
          polarity: 1
          matureWindow: [20, 90]
          hooks:
            - id: 镇上人把你当自家长辈供着
            - id: 一辈子听着对岸，直到有一天听得太清
        effects: ["道心 +5", "名望 +8", "flag 望乡·守镇"]

      - text: 上船。行当带走，规矩也带走
        karma: none
        effects: ["flag 入世", "flag 望乡·离镇", "道心 +3", "move 中州官道"]

      - text: 上船。铃和规矩都留在镇里 —— 从此只当个修士
        karma: none
        effects: ["flag 入世", "flag 望乡·离镇", "flag 望乡·弃行当", "道心 -2", "锋芒 +0.03", "move 中州官道"]
`,_r=`# 开场白 · 十地入世卡
# 引擎在开局第一回合强制先出 evt_prologue_<出生地id> —— 这是玩家入世看到的第一段文字。
#
# 写法约定：
# · 两段式：先写「末法将至」在这个地方的模样（时代要从本地人眼里看），再写「你是谁」——
#   十六岁这年的家境、处境、眼前最急的一件事。写此刻，不写生平。
# · 三个选项不是剧情分支，是玩家对「我是什么样的人」的第一次自我定义：
#   性子·谨慎（道心+2）／性子·争胜（锋芒+0.05, 气运+1）／性子·惜命（僭越-2），措辞随语境变。
# · 术语红线：望乡镇不写练气筑基（凝魂/阴煞），绝灵谷只有淬体/洗髓，白骨部无宗门无灵石。

events:

  # ══════════════════════════════════════════════════════════
  # 中州 · 天枢城
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_tianshu
    title: 帖上新墨
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·tianshu')"
    tags: [主干, 开场]
    text: |
      天枢城的告示墙前围了三层人。九宗联选的红榜今晨贴出来——今年中州只取四十人，十年前是两百。
      人群里有人低声骂：灵气一年薄过一年，宗门养不起闲人了。骂完了，还是把自家孩子往前推。
      茶棚里说书的还在讲三万年前白日飞升的老段子，听客一年比一年少。
      你十六岁，西市杂货铺的儿子。爹把铺面押了半间，换来你袖中这张荐帖，三日后入场。
      荐帖上你的名字墨迹还新，爹的手印按得很重。
    choices:
      - text: 性子沉。先弄清这场试考什么，再谈进场
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你没去人堆里挤，转身进了墙根下的茶棚，给跑堂的多添了两文钱。
            半个时辰后你出来，袖里多了三样东西：主考的名讳、往年的题目，
            还有一句话——今年考心性，不考灵根。
      - text: 两百变四十，那也得有我一个
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你把荐帖贴身收好，当着红榜把自己的名字默念了一遍。
            转身时你多看了一眼榜首空着的那一行。
            三日后那里写谁，还没定。
      - text: 尽人事就好，别把爹的铺子和人都折进去
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你先绕去西市看了一眼那半间铺子，门板上的漆还是你小时候帮着刷的。
            你在心里定了个数：考得上就考，考不上，三年内把铺子赎回来。
            这么一想，脚下反而稳了。

  # ══════════════════════════════════════════════════════════
  # 东林州 · 药王谷
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_yaowang
    title: 三片叶
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·yaowang')"
    tags: [主干, 开场]
    text: |
      药市上的老人如今不聊飞升了，聊年份：三百年的老参，煎出来只剩百年的药力。
      谷里连着两年缩减药童名额，说是灵田养不起闲人。药价一年年涨，药效一年年跌，
      连谷里飘出来的丹香，都比你小时候记得的淡。
      你是谷外药农的儿子，十六岁。家里那畦雪参今年只肯抽三片叶，爹蹲在田埂上抽了半夜的烟。
      娘挑了品相最好的一株，湿布裹了三层塞进你怀里——明日谷中收药童，识得百草的留下。
    choices:
      - text: 今夜不睡，把认过的药再从头过一遍
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你把油灯芯剪短，省着点亮到天明。三百七十一味，按根、茎、花、毒四类各默了一遍，
            错了两味，又倒回去重记。
            鸡叫头遍时，你把那株雪参重新裹好，湿布换了新的。
      - text: 识药，我不输谷里任何一个吃灵米长大的
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            七岁那年在药市，你一眼认出柴胡堆里混着的断肠草，老掌柜盯了你半天。
            你把怀里的参又按了按。
            明日谷门前的人会很多，你打算站到最前排去。
      - text: 考不上就回来种参，地不会亏待人
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            出门前你把畦里剩下的两株参培了土，浇了半瓢水。
            考得上，这畦地是退路；考不上，它就是生路。
            你把锄头擦干净挂回墙上，才背起包袱。

  # ══════════════════════════════════════════════════════════
  # 南离州 · 火山邑
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_huoshan
    title: 封炉之年
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·huoshan')"
    tags: [主干, 开场]
    text: |
      火山邑的老炉工说，地火凉了。主炉三十年来头一回封了两口，
      封炉那天全邑的铁匠都去看，没人说话。老人讲，地火是九州的心跳——心跳慢了，谁也没法子。
      天火宗采买灵铁的单子一年薄过一年，倒是修补农具的活计多了起来。
      你是陈记铸铺的学徒，十六岁。师父前日接了一炉不许砸的活——
      给赤霄盟的客人重锻一口旧刀，三日后交货，是铺子今年最大的一单。
      今夜起，看火色的活头一回归你。
    choices:
      - text: 火色宁可看慢三分，不抢一分
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你搬了条矮凳坐在炉口三步外，把师父的口诀在心里排好：
            橘红退，樱红起，起三息，添一炭。夜里风向变了两回，你每回都先撤炭，再观色。
            天亮时师父来看了一眼炉膛，没骂人。
      - text: 地火凉了，人手上的火不能凉
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你把袖子扎紧，往手心啐了口唾沫。
            师父说过你看火色的眼比他年轻时还毒——这话他只说过一回，你记到今天。
            这一炉烧好了，明年上手打铁的名单里就该有你。
      - text: 刀再金贵，金贵不过炉前这条命
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            上炉前你先把水缸挑满，湿布搭上肩，炉边的退路清出三步宽。
            老辈人说炉子炸起来不挑人，你信。
            火要盯，命也要盯——两样你都盯得很紧。

  # ══════════════════════════════════════════════════════════
  # 西金州 · 剑冢外围
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_jianzhong
    title: 试剑的生辰
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·jianzhong')"
    tags: [主干, 开场]
    text: |
      守冢的老人说，从前每逢月圆，满山剑吟如潮；这几年，整夜只剩风声。
      冢里肯认主出鞘的剑一年少过一年，剑冢收徒的规矩倒没变——
      入外围，凭本心拔一剑。剑认了，人就留下。去年一整年，外围只走出来三个带剑的人。
      你家三代磨剑为生。十六岁生辰这天，你有一次入外围试剑的资格，去或不去，今日就得定。
      爹把你的手按在那方磨了半辈子剑的青石上，半天没说话。
    choices:
      - text: 陪爹磨完这一柄，想明白了再上山
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你舀水、上石、控着腕子走完最后一道细磨，爹在旁边看着，没插手。
            剑刃映出你的眼睛，很静。
            收工时你说：明早上山。爹点了点头，转身去给你装干粮。
      - text: 剑鸣少了，那是剑在等值得的人
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你当天就动了身。
            路过山道口那块止步碑时，你伸手在碑面上按了一下。
            三代人磨的都是别人的剑——到你这一代，该有一柄自己的。
      - text: 试剑可以，命得留着回来吃饭
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你先把规矩打听清楚：外围试剑，拔不动可以放手，放了手全身而退的，剑冢不拦。
            这一条你问了三个人，三个人都这么说。
            你这才回家收拾行李，把娘塞的伤药放在包袱最顺手的地方。

  # ══════════════════════════════════════════════════════════
  # 北溟州 · 冰渊边
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_bingyuan
    title: 裂冰
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·bingyuan')"
    tags: [主干, 开场]
    text: |
      冰渊边上的人不谈飞升，只看封渊的那层青冰。老辈说这冰万年不化，
      可老辈也说，这冰是靠灵气养着的——灵气薄了，冰就瘦了。近三年，冰面的裂纹一年长过一年，
      夜里贴着冰听，听得见渊底有东西一下、一下地撞。
      你家在渊边凿冰捕鱼。十六岁这年冬汛迟了一个月，缸里鱼干见了底，爹的腿伤又犯了。
      明早凿冰队出工，工头放话：缺一个探冰眼的，钱给双份——走在队伍最前头。
    choices:
      - text: 去。但绳子系两道，冰眼一个一个试
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            当夜你借来一根旧冰钎，把家里的麻绳换成两指粗的新绳，绳结打了三种，一一拽实。
            娘问你怕不怕。
            你说怕，所以才要样样备齐。
      - text: 双份钱，凭什么轮不到我挣
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你当晚就去工头家应了这活，按了手印。
            回来的路上你踩着冻硬的河滩，一步比一步快——
            镇上人人都说渊边的孩子命贱，你想让他们改口。
      - text: 最前头不去。零工也是钱，命只有一条
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你回绝了工头，转头接下鱼栈补网的零活。钱少一半，可网补完，人还在。
            夜里你给爹熬了药，
            把开春想做的事一件一件数给他听。

  # ══════════════════════════════════════════════════════════
  # 南疆 · 十万大山
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_nanjiang
    title: 刀碑前夜
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·nanjiang')"
    tags: [主干, 开场]
    text: |
      山外的人哭灵气薄了、仙门败了，十万大山不理会这些——煞不靠天给，刀口上的东西天收不走。
      可寨里老人也皱眉：收蛊的商队三年没进山，盐和铁一年贵过一年，赤藤寨的眼神一年比一年野。
      寨口的刀碑上，今年又添了两个没能回来的名字。
      你是乌木寨的猎户遗孤，十六岁，没有师父。莫三刀三年没收过徒，明日他在刀碑前坐堂。
      全寨适龄的少年都会去跪。你的全部家当，是一把豁口的柴刀。
    choices:
      - text: 去跪。但先看清他挑人，看的是什么
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            傍晚你绕到刀碑后头的坡上，看莫三刀一个人擦刀。
            他擦得很慢，每一寸都看过了才过下一寸。
            你蹲到天黑，回家把柴刀也这么擦了一遍。
      - text: 三年不收徒？那就从我这儿破例
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你把柴刀磨到后半夜。豁口磨不平，你就把带豁口的那一段练得最熟。
            明日全寨的少年会跪成一排。
            你打算跪在最前头，抬着头。
      - text: 学刀是为了活命，不是为了送命
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            娘死在瘴月，爹死在猎场，这个家就剩你一个了。
            明日你会去跪，但你想得很清楚：
            拜师是为了这条命更结实，不是为了替谁的恩怨去填命。

  # ══════════════════════════════════════════════════════════
  # 幽冥边界 · 望乡镇
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_wangxiang
    title: 头一盏灯
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·wangxiang')"
    tags: [主干, 开场]
    text: |
      望乡镇的人不看天时，看河。老渡亡人说，对岸的灯影一年比一年稠——
      飞升的门断了，听说轮回的路也挤了，亡魂积在河那边，过不去。
      镇上渡亡的行当，活多得做不完。老人还说：引魂灯要是灭了，对岸的东西就敢踩水过河。
      你家三代渡亡。爹上月摔坏了腿，今夜镇口的引魂灯，头一回由你一个人去点。
      规矩你背得熟：酉时上灯，诵文三遍，天亮前谁叫你，都不回头。
    choices:
      - text: 出门前，把规矩在心里再过三遍
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你把灯油、火折、备用的灯芯各检了两遍，又把「不回头」三个字在心里钉牢。
            爹靠在床上看你收拾，末了只说了一句：
            怕是应该的，忘了怕才出事。
      - text: 我家的灯三代没灭过，到我手上也不能灭
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你把灯罩擦得透亮，罩上那个旧姓氏被你用袖口蹭了又蹭。
            出门时你回身看了一眼床上的爹。
            今夜过后，镇上提起这盏灯，就不止是提他了。
      - text: 灯照亡人就好，别的什么都别沾身
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你多带了一包爹配的安神香，袖口扎紧，鞋帮里塞了艾草。
            渡亡人的老话你记得牢：手上的活做干净，身后的事别多问。
            点灯是活计，不是交情。

  # ══════════════════════════════════════════════════════════
  # 北荒 · 白骨部
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_baigu
    title: 凉血
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·baigu')"
    tags: [主干, 开场]
    text: |
      萨满在骨堆前数了三夜，今年山里开了智的妖，只寻见两头。
      他说妖血一辈凉过一辈，连狼群都懒得化形了。老人们讲：天要收走的东西，从北荒最先收起。
      部里的火塘边，今年格外沉。
      你十六岁，妖血还没有醒。冬荒将至，明日部里挑贡品狩猎的人手——
      去的人吃双份肉，也可能回不来。你弟弟今冬的口粮还差着数，
      他睡着了，手里还攥着白天没啃完的半根骨头。
    choices:
      - text: 报名。但猎场的路，先用自己的脚量一遍
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            天没亮你就出了帐，沿去年狩猎队的旧辙走到雪线，
            把水源、风口、狼粪的新旧一一记牢。
            回来时你在火塘边报了名，声音不大，脚跟站得很实。
      - text: 妖血没醒又怎样，我这双手够用
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你走到火塘前第一个报名，当着全部落把手按在骨堆上。
            有人笑你血还没醒。
            你没回嘴——猎场上见。
      - text: 活着回来的猎手，才带得回肉
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你报了名，当晚做了三件事：补好皮袄，给弟弟留话，把肉干分成去程和回程两份。
            部里有人笑你婆妈，你不理。
            北荒的雪，埋过太多逞强的人。

  # ══════════════════════════════════════════════════════════
  # 东海 · 浮岛
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_fudao
    title: 差三十枚
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·fudao')"
    tags: [主干, 开场]
    text: |
      码头上的老海客说，浪里淘不出东西了——从前海汛一过，滩涂上能捡着带灵光的物件，
      如今冲上来的只有碎船板和死鱼。坊市照旧热闹，只是柜上的真货一年比一年少，
      酒桌上甚至有人说，海底的老龙宫都在变卖家当。
      你在四海斋跑腿三年，无师无门。罐里的贝币离黑市那半部残卷还差三十枚，
      今晚栈房的租钱又到期。管事今日透了话，想提你上柜——上了柜，跑黑市的工夫就没了。
    choices:
      - text: 残卷是真是假还两说，先探明白再掏钱
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你先交了租钱，然后揣着两枚贝币去了趟黑市——不买，只看。
            你蹲在残卷摊对面啃了半个炊饼，
            把来问价的人、摊主的眼神、他翻页的手法，都记在心里。
      - text: 上柜是安稳路，可我的路不在柜台后头
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你回了管事，说容你想三天。
            当夜你把罐子倒出来数了两遍，还是差三十枚。
            你翻出三年跑腿攒下的人情，一条一条盘算哪条能换成钱。
      - text: 先交租钱。屋顶和饭碗，比什么都实在
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你当晚把租钱交了，还多押了半个月，管事那边应下先试半月柜。
            残卷你没忘，只在罐底压了张字条：
            饿着肚子的人，练什么都练不成。

  # ══════════════════════════════════════════════════════════
  # 中州边陲 · 绝灵谷
  # ══════════════════════════════════════════════════════════

  - id: evt_prologue_juelin
    title: 缠拳
    weight: 1
    act: 1
    once: true
    cond: "flag('出身·juelin')"
    tags: [主干, 开场]
    text: |
      山外闹的什么末法，绝灵谷听不懂。谷里祖祖辈辈没沾过灵气，淬体、洗髓，
      靠的是一口气两只拳。倒是近两年，落魄的山外修士一个接一个进谷讨生活。
      有个自称炼过气的当街演了手指尖火，火苗小得点不着烟杆——
      谷里人头一回觉得，自己竟不算最苦的。
      你在石场扛了三年石头，十六岁。武行明日开场比拳收人：收下的管两顿干饭，教真功夫。
      你娘往你手上缠布条，缠得很慢，一圈压着一圈。
    choices:
      - text: 明日先蹲在场边看，看透了再上
        karma: none
        effects: ["flag 性子·谨慎", "道心 +2"]
        then:
          text: |
            你把打算跟娘说了，她手上的布条停了停，又继续缠。
            当晚你找相熟的脚夫把武行比拳的规矩问了个遍：
            几胜留人、伤了怎么算、有没有人使阴招。
      - text: 头一场就上，打给全谷看
        karma: none
        effects: ["flag 性子·争胜", "锋芒 +0.05", "气运 +1"]
        then:
          text: |
            你把布条的结咬紧，对着水缸里的影子空练了两轮拳。
            石场三年，你扛的石头比同龄人都沉。
            明天，正好让全谷看看这三年没白扛。
      - text: 拳要赢，骨头更得囫囵着回家
        karma: none
        effects: ["flag 性子·惜命", "僭越 -2"]
        then:
          text: |
            你请娘把腕骨那处多缠了两道。
            石场的老把头说过：赢一场吃两顿，废一双手饿一家。
            这话你缠在手上，也缠在心里。
`,vr=`# 残魂线 · 夺舍与归宿
# 覆盖：夺舍危机三段链（警兆→明示→摊牌）/ 独孤离专属 / 苏婆婆专属 /
#       归宿（送转世·融合共生）/ 断奶告别
#
# 设计要点：
# · 三段链由 soulPossession 阈值驱动，独孤离与苏婆婆共用
# · 归宿卡 require 与引擎门槛对齐（转世 favor>80、融合 favor>90）
# · 断奶卡是情感落点：他从指点者变成你要保护的人

events:

  # ══════════════════════════════════════════════════════════
  # 夺舍危机 · 一：警兆（possession > 40）
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_dier_xintiao
    title: 第二道心跳
    weight: 90
    act: 1
    once: true
    cond: "(hasSoul('独孤离') && soulPossession('独孤离') > 40) || (hasSoul('苏婆婆') && soulPossession('苏婆婆') > 40)"
    tags: [残魂, 夺舍]
    text: |
      入定到第三个时辰，你听见了心跳。
      一下，又一下。比你的慢半拍，也沉得多，像从很深的井底传上来。
      你按住腕脉数自己的——没有错。那声音不在胸口，在识海里。
      你睁开眼。洞府里只有你一个人，香烧了一半，火苗不动。
      再闭眼入定，那心跳还在。
      这一回，它比方才近了一些。
    choices:
      - text: 以己心压彼心，日日打坐镇住它
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.4", dc: "60", scale: 10 }
        onCritSuccess:
          text: 七日之后，那心跳退回了井底。你在识海边上立了一道无形的坎——它没有再过来。
          effects: ["soul.独孤离.possession -15", "soul.苏婆婆.possession -15", "道心 +5", "flag 听过第二心跳"]
        onSuccess:
          text: 你镇了半个月，那声音淡了下去。但你知道它没有消失，只是退远了。
          effects: ["soul.独孤离.possession -8", "soul.苏婆婆.possession -8", "道心 +3", "flag 听过第二心跳"]
        onFail:
          text: 你越想压它，越听得清楚。到后来，你分不出哪一下是自己的。
          effects: ["soul.独孤离.possession +4", "soul.苏婆婆.possession +4", "道心 -2", "flag 听过第二心跳"]
        onCritFail:
          text: 那夜你在两道心跳里坐到天亮，冷汗把蒲团浸透了。起身时，你先动的是左脚——你从来是先动右脚的人。
          effects: ["soul.独孤离.possession +8", "soul.苏婆婆.possession +8", "道心 -4", "factors.状态 -0.1", "flag 听过第二心跳"]

      - text: 直接问他，这是怎么回事
        karma: none
        effects:
          - "soul.独孤离.favor +4"
          - "soul.苏婆婆.favor +4"
          - "soul.独孤离.possession +3"
          - "soul.苏婆婆.possession +3"
          - "flag 听过第二心跳"

      - text: 只当没听见，照常修行
        karma: none
        effects:
          - "soul.独孤离.possession +6"
          - "soul.苏婆婆.possession +6"
          - "道心 -2"
          - "flag 听过第二心跳"

  # ══════════════════════════════════════════════════════════
  # 夺舍危机 · 二：明示（possession > 65）
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_moshengdelu
    title: 你不认得的山脊
    weight: 95
    act: 2
    once: true
    cond: "(hasSoul('独孤离') && soulPossession('独孤离') > 65) || (hasSoul('苏婆婆') && soulPossession('苏婆婆') > 65)"
    tags: [残魂, 夺舍]
    text: |
      你醒来时天已经亮了。这里不是你的洞府。
      是一处山脊，风很大，你不认得四周的山形。来路的草倒伏了一线——是你自己走上来的。
      你低头看手。
      右手虎口磨出一层新茧，茧的位置，是握剑的位置。
      指缝里还嵌着药碾子留下的青渍。
      你昨夜明明只是打坐。你不记得的那几个时辰里，这具身体去过哪里，见过谁，做了什么。
    choices:
      - text: 回去，当面问他昨夜的事
        karma: none
        effects:
          - "soul.独孤离.favor -6"
          - "soul.苏婆婆.favor -6"
          - "soul.独孤离.possession -5"
          - "soul.苏婆婆.possession -5"
          - "flag 挑明过夺舍"

      - text: 咬破指尖，以血誓在识海立禁
        karma: none
        check: { actor: "talent.神魂 + 道心 * 0.5", dc: "65", scale: 10 }
        onSuccess:
          text: 禁制落成时你吐了一口血。识海里安静了——安静得近乎负气。
          effects: ["soul.独孤离.possession -20", "soul.苏婆婆.possession -20", "factors.状态 -0.1", "flag 挑明过夺舍"]
        onFail:
          text: 血誓立到一半，识海里那股力道轻轻一搅，禁制散了。你听见一声几不可闻的叹息。
          effects: ["soul.独孤离.possession +5", "soul.苏婆婆.possession +5", "factors.状态 -0.15", "道心 -3"]
        onCritFail:
          text: 禁制反噬。你在床上躺了半个月，右手一直好不利索——它偶尔会自己攥紧。
          effects: ["soul.独孤离.possession +10", "soul.苏婆婆.possession +10", "factors.状态 -0.25", "lifespan -1", "道心 -5"]

      - text: 从此不再入定求教，一切靠自己
        karma: none
        effects:
          - "soul.独孤离.favor -8"
          - "soul.苏婆婆.favor -8"
          - "soul.独孤离.possession -6"
          - "soul.苏婆婆.possession -6"
          - "sublevel -0.03"
          - "道心 +4"

      - text: 把新茧磨掉，装作什么都没发生
        karma: none
        effects:
          - "soul.独孤离.possession +8"
          - "soul.苏婆婆.possession +8"
          - "道心 -4"

  # ══════════════════════════════════════════════════════════
  # 夺舍危机 · 三：摊牌（possession > 85）
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_tanpai
    title: 体面的走法
    weight: 100
    act: 2
    once: true
    cond: "(hasSoul('独孤离') && soulPossession('独孤离') > 85) || (hasSoul('苏婆婆') && soulPossession('苏婆婆') > 85)"
    tags: [残魂, 夺舍, 岔路]
    text: |
      这一夜你不敢合眼。
      子时刚过，你的右手自己抬了起来，五指一根根舒开，又握上。你看着它动，像看别人的手。
      识海里的那个声音，不再遮掩了。
      「这具身子，你用得不好。」
      「让给我。我保你魂魄无损，替你寻一具好胎重新来过——这是你我都体面的走法。」
      灯芯爆了一下。
      你还有小半个身子，是听你的。
    choices:
      - text: 「那就看看，是谁吞谁。」——反吞独孤离
        require: "hasSoul('独孤离') && soulPossession('独孤离') > 85"
        karma: none
        effects: ["devourSoul 独孤离"]

      - text: 「那就看看，是谁吞谁。」——反吞苏婆婆
        require: "hasSoul('苏婆婆') && soulPossession('苏婆婆') > 85"
        karma: none
        effects: ["devourSoul 苏婆婆"]

      - text: 「我许你一件事。你退回去。」——与独孤离盟誓
        require: "hasSoul('独孤离') && soulPossession('独孤离') > 85"
        karma:
          type: 立誓
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 他记得你欠的
            - id: 誓约反噬
        effects:
          - "soul.独孤离.possession -45"
          - "soul.独孤离.favor +5"
          - "flag 欠独孤离一诺"
          - "道心 -3"

      - text: 「我许你一件事。你退回去。」——与苏婆婆盟誓
        require: "hasSoul('苏婆婆') && soulPossession('苏婆婆') > 85"
        karma:
          type: 立誓
          target: 药圣·苏婆婆
          weight: 30
          polarity: -1
          matureWindow: [10, 60]
          hooks:
            - id: 她记得你欠的
            - id: 誓约反噬
        effects:
          - "soul.苏婆婆.possession -45"
          - "soul.苏婆婆.favor +5"
          - "flag 欠苏婆婆一诺"
          - "道心 -3"

      - text: 一个字都不接，硬抗到底
        karma: none
        check: { actor: "道心 + talent.神魂 * 0.6", dc: "75", scale: 8 }
        onCritSuccess:
          text: 你把那道意志一寸一寸挤回识海最深处，在外面压了一座山。天亮时，右手是你的了。
          effects: ["soul.独孤离.possession -50", "soul.苏婆婆.possession -50", "道心 +8"]
        onSuccess:
          text: 缠斗了三天三夜。你守住了，但守得很难看——袍子磨破了两层，人瘦了一圈。
          effects: ["soul.独孤离.possession -30", "soul.苏婆婆.possession -30", "道心 +4", "factors.状态 -0.1"]
        onFail:
          text: 你抗住了今夜。可你们都清楚，这样的夜还会再来，而你一次比一次弱。
          effects: ["soul.独孤离.possession +6", "soul.苏婆婆.possession +6", "道心 -6", "factors.状态 -0.2", "lifespan -1"]
        onCritFail:
          text: 天亮之前，你的右半边身子不听使唤了整整一个时辰。那一个时辰里，它在练剑，或者在碾药。
          effects: ["soul.独孤离.possession +12", "soul.苏婆婆.possession +12", "道心 -10", "factors.状态 -0.3", "lifespan -2"]

  # ══════════════════════════════════════════════════════════
  # 独孤离 · 专属
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_dugu_bizhan
    title: 用我教你的第三式
    weight: 60
    act: 1
    cooldown: 14
    cond: "hasSoul('独孤离')"
    tags: [残魂, 冲突]
    text: |
      演武场抽签，你抽中了内门的赵拱。
      他没打算点到为止。第三招把你扫下台后，他朝台下笑：「外门就这个成色。」
      识海里，独孤离的声音冷得像铁——
      「起来。用我教你的第三式。」
      「他桥手有个破绽。你看见了。我知道你看见了。」
      「你再装一次废物，我传你的东西，就当喂了狗。」
      台上的人，已经在唱下一个名字。
    choices:
      - text: 揉着肩膀认输下台
        karma: none
        effects:
          - "soul.独孤离.favor -8"
          - "道心 +2"
          - "锋芒 -0.05"
          - "名望 -3"

      - text: 重新上台，用他的剑
        karma:
          type: 杀戮
          target: 内门弟子·赵拱
          weight: 16
          polarity: -1
          hooks:
            - id: 怀恨在心
            - id: 服气认输
        check: { actor: "effectiveTier * 40 + factors.功法 * 30", dc: "52", scale: 10 }
        onCritSuccess:
          text: 一式。赵拱的剑脱手钉在三丈外的木桩上，全场没有人说话。识海里，独孤离哼了一声——那是他高兴的意思。
          effects: ["soul.独孤离.favor +12", "名望 +15", "expose.真实修为 +12", "expose.残魂 +4"]
        onSuccess:
          text: 你赢了，赢得不轻松。下台时赵拱盯着你看了很久，像在重新认识一个人。
          effects: ["soul.独孤离.favor +8", "名望 +8", "expose.真实修为 +8", "factors.状态 -0.08"]
        onFail:
          text: 那一式你用出来了，火候差着十年。赵拱赢了第二次，识海里从头到尾没有声音——这比骂你难受。
          effects: ["soul.独孤离.favor -4", "道心 -3", "factors.状态 -0.15", "expose.真实修为 +4"]
        onCritFail:
          text: 剑意反噬经脉，你半跪在台上咳血。抬下去的路上你听见独孤离说：「怪我。教早了。」
          effects: ["soul.独孤离.favor -2", "factors.状态 -0.3", "lifespan -1", "名望 -5"]

      - text: 重新上台——但只用自己的粗浅把式
        karma: none
        effects:
          - "道心 +4"
          - "soul.独孤离.favor -4"
          - "factors.状态 -0.1"
          - "名望 +2"

      - text: 「【苟道】判定：此局无关生死，收益为负。」
        require: "hasSystem('苟道')"
        karma: none
        effects:
          - "锋芒 -0.08"
          - "soul.独孤离.favor -10"
          - "道心 -1"

  - id: evt_sf_dugu_yiyuan
    title: 第七座无名碑
    weight: 80
    act: 2
    once: true
    cond: "hasSoul('独孤离') && soulFavor('独孤离') > 70 && !flag('独孤离遗愿已了')"
    tags: [残魂, 独孤离]
    text: |
      他挑了一个你炼完剑、心气最顺的晚上开口。
      「替我去一趟剑冢。不用进去。外围，东南角，第七座无名碑。」
      「碑底下埋的人姓陈。当年说好我带他一起走，我食言了。」
      「把我那半截剑，埋在碑边上。剑还了他，账就清了。」
      你等他往下说。他没有再说。
      这是他头一回求你办事——从前，都是命令。
    choices:
      - text: 替他走这一趟
        karma:
          type: 施恩
          target: 剑冢老祖·独孤离
          weight: 25
          polarity: 1
          hooks:
            - id: 倾囊相授
            - id: 死心塌地
        check: { actor: "effectiveTier * 35 + talent.根骨 * 0.4", dc: "50", scale: 10 }
        onCritSuccess:
          text: 剑入土时，碑四周的草伏了一伏，像有人长长吐了一口气。识海里，独孤离说了一个字：「好。」
          effects: ["flag 独孤离遗愿已了", "soul.独孤离.favor +15", "soul.独孤离.possession -10", "功德 +5"]
        onSuccess:
          text: 你把断剑埋进碑侧，培了土，拜了三拜。回程一路，识海里安静得很。
          effects: ["flag 独孤离遗愿已了", "soul.独孤离.favor +12", "soul.独孤离.possession -6", "功德 +3"]
        onFail:
          text: 外围的残余剑气比他说的凶。你带着两道透骨的口子把剑埋下了。他没道谢，但那晚他把第四式讲完了。
          effects: ["flag 独孤离遗愿已了", "soul.独孤离.favor +10", "factors.状态 -0.15"]
        onCritFail:
          text: 一道残剑气贯肩而过。你爬到碑前，还是把剑埋了。醒来时人在山下药铺，账是一个没留名的人结的。
          effects: ["flag 独孤离遗愿已了", "soul.独孤离.favor +12", "factors.状态 -0.3", "lifespan -1"]

      - text: 「等我修为再高些，再去。」
        karma: none
        effects:
          - "soul.独孤离.favor -6"

      - text: 口头应下，转身把断剑收进箱底
        karma:
          type: 毁诺
          target: 剑冢老祖·独孤离
          weight: 22
          polarity: -1
          hooks:
            - id: 夺舍之心复炽
            - id: 从此不再传剑
        effects:
          - "soul.独孤离.favor -15"
          - "soul.独孤离.possession +10"
          - "道心 -4"
          - "flag 私藏断剑"

  # ══════════════════════════════════════════════════════════
  # 苏婆婆 · 专属
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_supo_yaofang
    title: 劝人只劝三遍
    weight: 70
    act: 1
    cooldown: 12
    cond: "hasSoul('苏婆婆') && 丹毒 > 30"
    tags: [残魂, 日常]
    text: |
      你把丹炉里最后一炉聚气散倒出来的时候，识海里传来一声叹。
      「舌根发麻了吧。夜里心口压着块热炭，睡不实。」
      你没答话。她说的都对。
      「丹是好东西，也是最温柔的毒。我给你配个方子，三味药，后山都采得到。七日一剂，忌荤，忌怒，忌半夜运功。」
      「肯不肯听，你自己定。我这把年纪，劝人只劝三遍。」
      这是第三遍。
    choices:
      - text: 按方调理，七日一剂
        karma: none
        effects:
          - "丹毒 -15"
          - "soul.苏婆婆.favor +8"
          - "sublevel -0.02"
          - "flag 服过婆婆的方子"

      - text: 请她以魂力入体，亲手清毒
        karma: none
        effects:
          - "丹毒 -25"
          - "soul.苏婆婆.favor +5"
          - "soul.苏婆婆.possession +7"
          - "factors.状态 +0.05"

      - text: 「毒先欠着。修为要紧。」照旧服丹
        karma: none
        effects:
          - "丹毒 +5"
          - "soul.苏婆婆.favor -6"
          - "sublevel +0.03"

  - id: evt_sf_supo_tanbai
    title: 药人
    weight: 80
    act: 2
    once: true
    cond: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 70 && !flag('苏婆婆已坦白')"
    tags: [残魂, 苏婆婆]
    text: |
      最后一味雪苓收进药匣，她忽然开口，声音比往常低。
      「有件事，再不说，怕是没机会说了。」
      「当年在石室里，我留那只药鼎，不是等传人。是等一具药人。」
      「根骨干净、经络未开的孩子，用药一年一年养着，养到火候——我便借体还魂。」
      「我瞧上你的第一眼，瞧的就是这个。」
      「后来怎么改的主意……你别问。我自己也说不上来。」
      药匣上她留的那道魂力，轻轻地抖。
    choices:
      - text: 「都过去了。」
        karma:
          type: 施恩
          target: 药圣·苏婆婆
          weight: 18
          polarity: 1
          hooks:
            - id: 她把最后一件事也教了你
            - id: 余生相报
        effects:
          - "flag 苏婆婆已坦白"
          - "soul.苏婆婆.favor +15"
          - "soul.苏婆婆.possession -8"
          - "道心 +5"

      - text: 「那你现在——还想要这具身子吗。」
        karma: none
        effects:
          - "flag 苏婆婆已坦白"
          - "soul.苏婆婆.favor -5"
          - "soul.苏婆婆.possession -5"
          - "道心 +2"

      - text: 「从今往后，你我两清。」
        karma: none
        effects:
          - "flag 苏婆婆已坦白"
          - "soul.苏婆婆.favor -50"
          - "soul.苏婆婆.possession -15"
          - "道心 +3"

  # ══════════════════════════════════════════════════════════
  # 归宿 · 送转世 / 融合共生
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_songzhuanshi
    title: 你若肯送，我便敢走
    weight: 70
    act: 2
    cooldown: 16
    cond: "(hasSoul('独孤离') && soulFavor('独孤离') > 80 && flag('独孤离遗愿已了')) || (hasSoul('苏婆婆') && soulFavor('苏婆婆') > 80 && flag('苏婆婆已坦白'))"
    tags: [残魂, 归宿]
    text: |
      你在窗前坐了一夜，终于把那句话问出了口：「若有来世，想去吗。」
      识海里静了很久，久到你以为不会有回答。
      那个声音才响起来，比任何一次都轻。
      「魂就这么多，散一分，少一分。留在你这儿，是熬。出去，是赌。」
      「轮回那条路，走得过去就是来世。走不过去，就什么都没有了。」
      「——你若肯送，我便敢走。」
      窗外的天，正在一点一点亮起来。
    choices:
      - text: 结往生法坛，送独孤离入轮回
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 80 && flag('独孤离遗愿已了')"
        karma:
          type: 施恩
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 1
          hooks:
            - id: 来世有人叫你师父
        effects:
          - "reincarnateSoul 独孤离"
          - "功德 +12"
          - "道心 +6"

      - text: 结往生法坛，送苏婆婆入轮回
        require: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 80 && flag('苏婆婆已坦白')"
        karma:
          type: 施恩
          target: 药圣·苏婆婆
          weight: 30
          polarity: 1
          hooks:
            - id: 来世药庐给你留了灯
        effects:
          - "reincarnateSoul 苏婆婆"
          - "功德 +12"
          - "道心 +6"

      - text: 「……再陪我走一程。」
        karma: none
        effects:
          - "soul.独孤离.favor +3"
          - "soul.苏婆婆.favor +3"
          - "soul.独孤离.possession +2"
          - "soul.苏婆婆.possession +2"

  - id: evt_sf_ronghe
    title: 没有回头路
    weight: 60
    act: 2
    cooldown: 20
    cond: "(hasSoul('独孤离') && soulFavor('独孤离') > 90) || (hasSoul('苏婆婆') && soulFavor('苏婆婆') > 90)"
    tags: [残魂, 归宿]
    text: |
      你是从一件小事上察觉的。
      昨夜炼器到一半，你随手补了一道纹——那手法你从没学过，却熟极而流。
      识海里那条界线，不知何时已经薄得像一层水。
      「再往后，就分不出彼此了。」那个声音说，「分不出，也就回不去了。」
      「我这缕魂，往后不是住客，是你骨血里的一部分。生同生，死同死。」
      「想清楚。这一步，没有回头路。」
    choices:
      - text: 「生同生，死同死。」——与独孤离融合
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 90"
        karma:
          type: 传承
          target: 剑冢老祖·独孤离
          weight: 30
          polarity: 0
          hooks:
            - id: 故人认出他的剑
            - id: 剑冢遥遥相应
        effects:
          - "mergeSoul 独孤离"
          - "僭越 +5"

      - text: 「生同生，死同死。」——与苏婆婆融合
        require: "hasSoul('苏婆婆') && soulFavor('苏婆婆') > 90"
        karma:
          type: 传承
          target: 药圣·苏婆婆
          weight: 30
          polarity: 0
          hooks:
            - id: 药王谷旧人识得这手法
        effects:
          - "mergeSoul 苏婆婆"
          - "僭越 +5"

      - text: 「这条界线，我替你我守着。」
        karma: none
        effects:
          - "道心 +5"
          - "soul.独孤离.favor -2"
          - "soul.苏婆婆.favor -2"

  # ══════════════════════════════════════════════════════════
  # 断奶 · 告别（tier >= 6，残魂已帮不上忙）
  # ══════════════════════════════════════════════════════════

  - id: evt_sf_duannai
    title: 纸糊的灯
    weight: 90
    act: 2
    once: true
    cond: "tier >= 6 && (hasSoul('独孤离') || hasSoul('苏婆婆'))"
    tags: [残魂, 告别]
    text: |
      突破后的第七天，你照旧在识海里问那句问惯了的话：「此境之后，如何走？」
      这一次，答话隔了很久。
      「从这里往上，我当年走了三百年。处处是绕不过去、又绕过去的死路。」
      「我能讲给你的，都是走错的那部分。」
      「还有——」那个声音停了停。
      「你如今真元太盛。我这缕魂贴着你，像纸糊的灯贴着炉子。往后入定，把我挪远些。」
      你头一回听见，那个骂过你、逼过你、也护过你的声音里，有怯。
    choices:
      - text: 分一缕真元，从此把他护在身侧
        karma: none
        effects:
          - "soul.独孤离.favor +12"
          - "soul.苏婆婆.favor +12"
          - "soul.独孤离.possession -5"
          - "soul.苏婆婆.possession -5"
          - "sublevel -0.04"
          - "flag 护魂人"

      - text: 「你教我的，够我走完剩下的路。」
        karma: none
        effects:
          - "道心 +5"
          - "soul.独孤离.favor +5"
          - "soul.苏婆婆.favor +5"

      - text: 从此少入识海，让那盏灯自己慢慢暗下去
        karma: none
        effects:
          - "soul.独孤离.favor -10"
          - "soul.苏婆婆.favor -10"
          - "道心 -3"
`,yr=`# 主动止步 · 三种心境入口（A）＋ 幕一日常扩充（B）
# 前缀 evt_sd_
#
# A：同一个「止步」的决定，三张不同的入口——倦、足、惧。
#    stepDown 不是正确答案：三张里止步与不止步各有代价，
#    拒绝止步一律 道心+ 但落一个「执念·×」标记，留给后续内容清算。
# B：幕一日常池扩充，tier==1，与 act1-daily 已有题材不重复。

events:

  # ══════════════════════════════════════════════════════════
  # A · 主动止步（tier>=3，已止步则不再出现）
  # ══════════════════════════════════════════════════════════

  - id: evt_sd_guren_xin
    title: 迟到四十三年的信
    weight: 60
    act: 2
    once: true
    cond: "tier >= 3 && !flag('止步')"
    tags: [止步, 抉择]
    text: |
      信是山下驿站辗转递上来的，纸已经黄得发脆。
      落款是陈平安——你想了很久才想起来，当年同院进山的十七个人里，
      他是头一个熬不住、下山还俗的。
      信里说他成了亲，说山下的新米比宗门的饭软和，
      问你几时得空下山，喝一杯他家自酿的酒。
      写信的日子，是四十三年前。
      你差人去打听。他的孙子，前年也故去了。
      名册上那十七个名字，如今还活着的，只剩你一个。
    choices:
      - text: 下山。去喝那杯迟了四十三年的酒
        karma: none
        effects: ["stepDown", "flag 止步·倦", "道心 +2", "锋芒 -0.2"]

      - text: 把信压进匣底，转身回静室
        karma: none
        effects: ["道心 +6", "flag 执念·故人"]

      - text: 把十六个名字抄下来，在灵前点了一夜的灯
        karma: none
        effects: ["道心 +3", "功德 +3", "flag 故人名册"]

      - text: 「【独孤离】老祖，您当年……也是这样过来的？」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 20"
        karma: none
        effects: ["soul.独孤离.favor +10", "道心 +2", "expose.残魂 +2"]

  - id: evt_sd_chuntian_fan
    title: 一声喊你吃饭的
    weight: 60
    act: 2
    once: true
    cond: "tier >= 3 && !flag('止步')"
    tags: [止步, 抉择]
    text: |
      金丹结成的第三年，你在山腰置了个小院。药田是随手开的，
      种的都是不值钱的草药。清明前后雨水足，芽出得齐。
      你蹲在田埂上掐虫，一掐就是一下午。
      灶下帮工的老婆婆隔着院子喊你——饭得了，再不来就凉了。
      你应了一声，起身时膝上沾着泥。
      风从坡下上来，带着新翻的土腥气。
      你忽然想不起，再往上修，是为了什么来着。
      锅里炖的是芋头。很香。
    choices:
      - text: 洗手，吃饭。往后就这样
        karma: none
        effects: ["stepDown", "flag 止步·足", "道心 +5"]

      - text: 吃完这一顿就回山。够不够，得到顶上才知道
        karma: none
        effects: ["道心 +6", "flag 执念·未竟"]

      - text: 「【苟道】评级：活。宿主，这便是大成。」
        require: "hasSystem('苟道')"
        karma: none
        effects: ["stepDown", "flag 止步·足", "僭越 -5", "道心 +3"]

      - text: 「【独孤离】芋头？剑冢三百年没人供过一炷香了。」——你放下碗，回了山
        require: "hasSoul('独孤离')"
        karma: none
        effects: ["soul.独孤离.favor +5", "soul.独孤离.possession +5", "flag 执念·未竟", "道心 -2"]

  - id: evt_sd_mudu_dujie
    title: 第七道雷
    weight: 60
    act: 2
    once: true
    cond: "tier >= 3 && !flag('止步')"
    tags: [止步, 抉择]
    text: |
      碧游峰洛真君渡劫，方圆百里的修士都去了——
      那是近三千年最有望飞升的人。
      第七道雷落下来时，护身的青莲碎了。
      没有惨叫。那么大的一个人，连灰都没剩下。
      雷云散尽，只有他的本命剑从半空当啷一声砸在焦土上，断成两截。
      回程的路上没人说话。你走在人群里，
      听见自己的心跳，一下，一下，数得清清楚楚。
    choices:
      - text: 回去把丹炉封了。就到金丹，挺好
        karma: none
        effects: ["stepDown", "flag 止步·惧", "道心 -3", "锋芒 -0.2"]

      - text: 他死在第七道。那你就去准备第八道
        karma: none
        effects: ["道心 +8", "flag 执念·天雷", "僭越 +3"]

      - text: 夜里折回焦土，收那半截断剑
        karma:
          type: 夺取
          target: 洛氏遗族
          weight: 25
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 遗族循剑而来
            - id: 无主之物
        check: { actor: "talent.神魂 + 气运 * 0.3", dc: "60", scale: 10 }
        onSuccess:
          text: 断剑入手，残雷未散，烫得掌心起泡。你用三层油布把它裹了。
          effects: ["factors.法宝 +0.15", "flag 得洛氏断剑"]
        onFail:
          text: 你的手刚碰到剑柄，蛰伏的残雷炸开。你在焦土上躺了一夜才爬起来。
          effects: ["factors.状态 -0.25", "lifespan -2"]

      - text: 「【独孤离】老祖，飞升……真有人成过吗？」
        require: "hasSoul('独孤离') && soulFavor('独孤离') > 20"
        karma: none
        effects: ["soul.独孤离.favor +5", "originClues +1", "道心 +2", "expose.残魂 +2"]

  # ══════════════════════════════════════════════════════════
  # B · 幕一日常扩充（tier==1）
  # ══════════════════════════════════════════════════════════

  - id: evt_sd_yuye_shangxiu
    title: 雨夜敲门的人
    weight: 26
    act: 1
    cooldown: 15
    cond: "tier == 1"
    location: 外门
    tags: [日常, 道德, 风险]
    text: |
      雨下到后半夜，有人敲你的门。
      门外站着个陌生修士，左袖空荡荡地贴在身上，
      雨水顺着下摆往下淌，落在地上的是淡红色。
      「借宿一夜。」他说，「天亮就走。」
      他不肯说来历，只把一块成色极好的灵石搁在门槛上。
      外门规矩，私留外人，逐出山门。雨越下越大了。
    choices:
      - text: 侧身让他进来
        karma:
          type: 救助
          target: 断臂的夜客
          weight: 30
          polarity: 1
          matureWindow: [15, 80]
          hooks:
            - id: 他记下了这一夜
            - id: 追他的人顺着血迹找到了你门上
        effects: ["功德 +6", "道心 +3", "flag 留宿过夜客"]

      - text: 收下灵石，指给他后山山神庙的方向
        karma: none
        effects: ["factors.法宝 +0.05", "道心 -2"]

      - text: 关门，落栓
        karma: none
        effects: ["道心 -1"]

      - text: 天亮报给巡山执事
        karma:
          type: 背叛
          target: 断臂的夜客
          weight: 18
          polarity: -1
          hooks:
            - id: 他没被抓到，记住了你的脸
            - id: 宗门赏了你三块灵石
        effects: ["名望 +5", "功德 -2"]

      - text: 「【苏婆婆】婆婆，他这伤……」
        require: "hasSoul('苏婆婆')"
        karma:
          type: 救助
          target: 断臂的夜客
          weight: 35
          polarity: 1
          hooks:
            - id: 你救下的是个惹不起的人物
            - id: 他伤愈后无声无息地消失了
        effects: ["soul.苏婆婆.favor +8", "功德 +8", "expose.残魂 +4"]

  - id: evt_sd_chuangong_zhanwai
    title: 檐外
    weight: 30
    act: 1
    cooldown: 10
    cond: "tier == 1"
    location: 外门
    tags: [日常, 修炼]
    text: |
      每月初三，传功长老在阁内讲法。内门弟子坐在里面，
      外门的只能站在檐外听。檐外也分远近——靠窗根那一片，
      字字真切，得前一夜就去占。去晚了就只能站在台阶下，
      风一大，什么都听不见。
      上个月占到窗根的胖子，这个月被内门的人一脚踹下了台阶：
      「杂役也配听道？」
    choices:
      - text: 前一夜就去，占窗根
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.3", dc: "55", scale: 10 }
        onSuccess:
          text: 站了一夜加一个上午，腿麻得没了知觉，但那段口诀你一字不落记下来了。
          effects: ["悟性 +2", "sublevel +0.05", "factors.状态 -0.05"]
        onFail:
          text: 天没亮你就被内门弟子撵下了台阶。一上午，只听见风。
          effects: ["factors.状态 -0.08", "道心 -2"]

      - text: 站台阶下，听个大概
        karma: none
        effects: ["sublevel +0.02", "道心 +1"]

      - text: 花两块灵石，买下别人占好的位置
        karma: none
        effects: ["factors.法宝 -0.04", "悟性 +1", "sublevel +0.04"]

      - text: 「【面板】隔着墙，直接看长老的功法条目。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["悟性 +2", "sublevel +0.05", "僭越 +3", "expose.金手指 +2"]

  - id: evt_sd_tongmen_douou
    title: 柴房前的架
    weight: 28
    act: 1
    cooldown: 12
    cond: "tier == 1"
    location: 外门
    tags: [日常, 冲突, 道德]
    text: |
      柴房前围了一圈人。赵大压着王五打，王五的脸已经肿得看不出原样。
      起因是赵大储物袋里少了三块灵石，他咬定是王五偷的，王五不认。
      围观的人越聚越多，没有一个上前。
      有人小声说，再打下去要出人命——修士斗殴伤了气海，一辈子就完了。
      执事房在半里外。赵大又一拳砸了下去。
    choices:
      - text: 挤进去，把赵大架开
        karma:
          type: 施恩
          target: 王五
          weight: 16
          polarity: 1
          hooks:
            - id: 他记你的情
            - id: 赵大记你的仇
        check: { actor: "effectiveTier * 40 + talent.根骨 * 0.3", dc: "50", scale: 10 }
        onSuccess:
          text: 你架住了赵大的胳膊。他瞪着你，喘了几口粗气，甩手走了。
          effects: ["名望 +6", "功德 +4", "expose.真实修为 +3"]
        onFail:
          text: 赵大反手一肘砸在你脸上。架没拉开，你倒先见了血。
          effects: ["factors.状态 -0.12", "名望 -2"]

      - text: 高喊一声「执事来了」
        karma:
          type: 欺骗
          target: 赵大
          weight: 8
          polarity: 0
          hooks:
            - id: 被拆穿后他找你麻烦
            - id: 王五承你的情
        effects: ["名望 +2"]

      - text: 转身去执事房报信
        karma: none
        effects: ["功德 +2", "名望 -2"]

      - text: 看着
        karma: none
        effects: ["道心 -2"]

  - id: evt_sd_shanmen_qigai
    title: 石阶下的老乞丐
    weight: 24
    act: 1
    once: true
    cond: "tier == 1"
    location: 外门
    tags: [日常, 身世]
    text: |
      山门的石阶下不知什么时候多了个老乞丐，不讨钱，也不讨饭，
      就坐在那里看人。上山的、下山的，他都不看，
      眼皮耷拉着，像睡着了。
      你搬完货下山经过，他忽然睁开眼，盯着你看了很久。
      「像。」他说，「眉眼真像。」
      你问他像谁。他又闭上眼，不说话了。
      第二天你再下山，石阶下空着。
    choices:
      - text: 蹲下来，把干粮分他一半，再问一次
        karma:
          type: 施恩
          target: 石阶下的老乞丐
          weight: 10
          polarity: 1
          hooks:
            - id: 他记下了这半块干粮
            - id: 疯话而已
        effects: ["功德 +2", "originClues +1", "flag 乞丐说你像谁"]

      - text: 只当疯话，走自己的路
        karma: none
        effects: ["道心 +1"]

      - text: 回去翻自己入门时的旧包袱
        karma: none
        effects: ["originClues +1", "flag 翻过旧襁褓"]

      - text: 「【面板】看看他的名姓来历。」
        require: "hasSystem('面板')"
        karma: none
        effects: ["originClues +2", "僭越 +2", "expose.金手指 +2", "flag 面板照不出的人"]

  - id: evt_sd_zaofang_huohou
    title: 灶房的火
    weight: 26
    act: 1
    cooldown: 14
    cond: "tier == 1"
    location: 外门
    tags: [日常, 机缘]
    text: |
      你被派去灶房帮一个月工。掌灶的是个姓文的老头，烧了四十年火。
      他不用灵力，一双肉眼看烟色，抬手抽一根柴，火就矮下去半寸；
      撒一把盐，焰心从黄转青。三百人的饭，他的锅从来没糊过。
      有老人说，文老头早年在丹房司火，炸了一炉不该炸的丹，才被贬下来。
      他听见了也不恼，只说：「烧火就是烧火。」
    choices:
      - text: 少说话，多添柴，偷偷记他的手法
        karma: none
        check: { actor: "talent.悟性 + 道心 * 0.2", dc: "58", scale: 11 }
        onSuccess:
          text: 一个月下来，你看懂了七成。火候这东西，原来跟运气行功是一个理。
          effects: ["悟性 +2", "flag 火候入门"]
        onFail:
          text: 第十天，文老头头也不回：「要学就大大方方看。鬼鬼祟祟的，学不成。」
          effects: ["名望 -1", "道心 -1"]

      - text: 「文师傅，这一手，能教我吗？」
        karma: none
        check: { actor: "道心 + talent.悟性 * 0.3", dc: "52", scale: 10 }
        onSuccess:
          text: 他上下打量你半天，扔过来一根烧火棍。「先烧三个月再说。」
          effects: ["flag 火候入门", "道心 +2", "功德 +1"]
        onFail:
          text: 「灶上的事，学了没用。」他把你支去洗碗。
          effects: ["锋芒 -0.02"]

      - text: 只当苦役，混满这个月
        karma: none
        effects: ["道心 +1"]

      - text: 「【苏婆婆】婆婆忽然出声：盐里掺了云母粉……这是丹房的引火诀。盯着他的手。」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects: ["soul.苏婆婆.favor +6", "悟性 +2", "flag 火候入门", "expose.残魂 +3"]

  - id: evt_sd_dongzhi_xiang
    title: 冬至的香
    weight: 22
    act: 1
    cooldown: 30
    cond: "tier == 1"
    tags: [日常, 身世]
    text: |
      冬至，宗门歇工一日。傍晚，院里的人各自朝家乡的方向摆一炷香：
      朝东的是青州人，朝南的是越地来的，
      连最不着调的孙麻子都对着西北磕了三个头。
      你端着香站在院子当中，忽然发现不知道该朝哪边。
      师父只说过，当年抱你上山的人把你放下，往北去了，没留名姓。
      香烧过半，烫了手，你还站在原地。
    choices:
      - text: 朝北，拜了三拜
        karma: none
        effects: ["originClues +1", "道心 +2"]

      - text: 把香掐了。没有来处，就不必回头
        karma: none
        effects: ["道心 +3", "flag 自断来处"]

      - text: 趁着节庆，去问师父当年的细节
        karma: none
        check: { actor: "道心 + 名望 * 0.2", dc: "56", scale: 10 }
        onSuccess:
          text: 师父喝了点酒，难得多说了一句——那人一身风尘，像赶了很远的路，袖口上有半枚看不懂的绣纹。
          effects: ["originClues +2", "flag 袖口绣纹"]
        onFail:
          text: 师父放下杯子：「问这个做什么。修行人，过去就是过去。」
          effects: ["道心 -2"]

      - text: 把香分给院里另外两个没处拜的孤儿
        karma:
          type: 施恩
          target: 同院孤儿
          weight: 12
          polarity: 1
          hooks:
            - id: 患难里认下的交情
            - id: 香是分了，路各是各的
        effects: ["功德 +3", "名望 +2"]

  - id: evt_sd_waimen_duju
    title: 柴房后的赌局
    weight: 26
    act: 1
    cooldown: 10
    cond: "tier == 1"
    location: 外门
    tags: [日常, 风险]
    text: |
      月钱一发，柴房后的赌局就开张。押大小，一把定输赢。
      坐庄的是杂役堂管事的小舅子，来路没人敢问。
      十个下注的九个输，可赢过一次的人，能把那一次讲一年。
      同院的钱三上个月把被褥都押了进去，夜里睡光板，白天照旧去蹲。
      今晚他又来拉你：「就一把。手气这东西，我看你有。」
    choices:
      - text: 押两块灵石
        karma: none
        check: { actor: "气运", dc: "62", scale: 12 }
        onCritSuccess:
          text: 连开五把，你面前的灵石堆成了小山。庄家的脸色越来越难看。
          effects: ["factors.法宝 +0.1", "名望 +3", "flag 赢过庄家"]
        onSuccess:
          text: 赢了一把，见好就收。
          effects: ["factors.法宝 +0.04"]
        onFail:
          text: 两块灵石，一炷香就没了。
          effects: ["factors.法宝 -0.04", "道心 -2"]
        onCritFail:
          text: 你不但输光了月钱，还按了一个手印。「下月连本带利。」
          effects: ["factors.法宝 -0.08", "道心 -4", "flag 欠下赌债"]

      - text: 不碰，把钱三拽回去
        karma:
          type: 施恩
          target: 钱三
          weight: 10
          polarity: 1
          hooks:
            - id: 他真戒了，念你的好
            - id: 他转头又去了
        effects: ["道心 +2", "功德 +2"]

      - text: 蹲在边上看三晚，看清庄家的手法
        karma:
          type: 背叛
          target: 赌局庄家
          weight: 16
          polarity: -1
          hooks:
            - id: 管事的小舅子记恨上了你
            - id: 外门清净了一阵子
        check: { actor: "talent.悟性 + talent.神魂 * 0.4", dc: "66", scale: 10 }
        onSuccess:
          text: 骰盅里有一颗子灌了铅。你把这事捅到了执事房。
          effects: ["名望 +6", "功德 +4", "flag 掀了赌局"]
        onFail:
          text: 看了三晚什么也没看出来，倒被庄家记住了脸。「小子，看白戏的也要给钱。」
          effects: ["factors.法宝 -0.02", "名望 -1"]

      - text: 「【签到】赌桌前签到。」
        require: "hasSystem('签到')"
        karma: none
        effects: ["factors.法宝 +0.06", "气运 +2", "僭越 +2", "expose.金手指 +2"]

  - id: evt_sd_xikuayuan
    title: 西跨院的绳
    weight: 30
    act: 1
    cooldown: 25
    cond: "tier == 1"
    location: 外门
    tags: [日常, 道德]
    text: |
      入秋，外门起了时疫。先是低烧，三五天后开始咳血。
      病倒的人都挪进了西跨院，门口拉了一根草绳，饭食从绳下递进去。
      管事按人头发预防的药汤，一人一勺。轮到你，桶见了底，只刮出半勺。
      西跨院每天往外抬人，草席裹着，走后门。
      夜里你听见隔壁院有人压着嗓子哭，不敢哭响——
      哭响了，也要被当成病的。
    choices:
      - text: 把那半勺让给病重的人
        karma:
          type: 救助
          target: 西跨院的病人
          weight: 26
          polarity: 1
          matureWindow: [10, 60]
          hooks:
            - id: 活下来的人记得那半勺
            - id: 你自己也染上了
        effects: ["功德 +8", "道心 +4", "factors.状态 -0.08"]

      - text: 喝了，往人少的地方躲
        karma: none
        effects: ["道心 -2"]

      - text: 报名去西跨院送饭——没人肯去，一天二十块灵石
        karma: none
        check: { actor: "talent.根骨 + 道心 * 0.4", dc: "60", scale: 12 }
        onSuccess:
          text: 送了半个月，你没病倒。灵石到手，还有人偷偷塞给你一双纳好的鞋底。
          effects: ["factors.法宝 +0.1", "功德 +6", "名望 +5"]
        onFail:
          text: 第九天，你开始发烧。
          effects: ["factors.状态 -0.25", "lifespan -1", "flag 染过时疫"]

      - text: 低价收别人的药汤，转手高价卖给怕死的
        karma:
          type: 夺取
          target: 外门病弟子
          weight: 20
          polarity: -1
          hooks:
            - id: 有人临死前念着你的名字
            - id: 乱世里没人追究
        effects: ["factors.法宝 +0.12", "堕度 +6", "道心 -5", "名望 -4"]

      - text: 「【苏婆婆】婆婆，这疫……您见过吗？」
        require: "hasSoul('苏婆婆')"
        karma:
          type: 救助
          target: 西跨院的病人
          weight: 40
          polarity: 1
          hooks:
            - id: 半个外门欠你一条命
            - id: 有人追问一个杂役哪来的古方
        effects: ["soul.苏婆婆.favor +12", "功德 +15", "名望 +10", "expose.残魂 +10", "悟性 +1"]
`,br=`# MVP 残魂（2 个）
#
# 残魂与系统的根本区别：系统是规则化的、冷冰冰的；残魂有人格、有立场、会撒谎。
# 硬上限：生前位阶不得超过 18 —— 神界（19+）陨落时神格散归本源，不留残魂。
#
# 断奶曲线见 engine/balance.ts SOUL.guidanceByGap：
# 位阶差 ≥5 全面指导，3–4 有效指导，1–2 只剩经验参考，≤0 他已经帮不上忙了。

souls:
  - id: 独孤离
    name: 剑冢老祖·独孤离
    tier: 9
    personality: 暴烈、骄傲、看不起苟活之人
    gives: 无上剑道传承、剑意加持、越阶战斗的胆气
    wants: 逼你战斗，不许退。他要看的是你敢不敢拔剑，不是你能不能赢。
    possessionRisk: mid
    paths: [正道, 散修, 武道]
    lines:
      - cond: "soulFavor('独孤离') < 0"
        text: 「……缩头乌龟。老夫当年瞎了眼。」
      - cond: "soulFavor('独孤离') > 60 && tier >= 3"
        text: 「不错。你这一剑，比老夫当年干净。」
      - cond: "tier >= 8"
        text: 「后生，老夫已经教不了你了。往后的路，自己走。」
      - text: 「拔剑。别问为什么，拔剑。」

  - id: 苏婆婆
    name: 药圣·苏婆婆
    tier: 8
    personality: 慈祥、唠叨、话里总留半句
    gives: 丹道传承、疗伤续命、辨药之能
    wants: 要你替她找回被灭的药王谷血脉 —— 她说的是这个。
    possessionRisk: low
    paths: [正道, 佛道, 儒道, 散修]
    lines:
      - cond: "丹毒 > 40"
        text: 「傻孩子，丹药是拿来救命的，不是拿来赶路的。你这身子……唉。」
      - cond: "soulFavor('苏婆婆') > 70"
        text: 「你比我那些不成器的徒弟强多了。婆婆没看错人。」
      - cond: "tier >= 7"
        text: 「孩子，往后婆婆帮不上你了。……有件事，婆婆一直没跟你说实话。」
      - text: 「慢些走，慢些走。修行不是赶路。」
`,xr=`# 残魂扩展 二 · evt_s2_
# 新增残魂：阵祖·无名（tier12，明码标价收寿元）/ 未来的你（tier10，只给预警，不给答案）
#
# 设计要点：
# · 阵祖不撒谎、句句留半——他的每次开口都是交易，lifespan -2 是他的「价」
# · 唯一一次免费开口（evt_s2_zhenzu_mianfei）是人物弧光：免费的那句只说一半，后半句照旧收钱
# · 未来的你 possessionRisk: none —— 他不要你的身体，他只是不想你变成他
# · 台词按 tier 分层，越到后期话越少；tier>=5 的告别卡写长生者时间感（幕四铁律）
# · 杀阵反杀走 lethal 预警链（铁律二：≥2 条预警 + ≥1 个 window）

souls:

  - id: 阵祖无名
    name: 阵祖·无名
    tier: 12
    personality: 冷漠、只谈交易、明码标价。绝不撒谎，但句句只说一半。
    gives: 阵道传承、布阵困杀、勘破天下阵纹
    wants: 收寿元。指点一次，收两年阳寿。收去做什么，他说可以问——问，也算一次。
    possessionRisk: low
    paths: [正道, 魔道, 佛道, 儒道, 鬼道, 妖修, 散修, 武道]
    lines:
      - cond: "soulFavor('阵祖无名') < 0"
        text: 「赊账的人，老夫不教第二次。」
      - cond: "lifespanLeft < 20"
        text: 「你的余寿，不够再问十次了。省着用——这一句，不算钱。」
      - cond: "tier >= 6"
        text: 「天下的阵，你如今看得懂五成。剩下五成里有一座，是老夫布的。」
      - text: 「先讲价，后开口。老夫不赊，也不骗。」

  - id: 未来的你
    name: 未来的你
    tier: 10
    personality: 疲惫、缄默。什么都不肯说，只在紧要处给一句精准的预警。
    gives: 预警。他知道你前面每一个坑——他一个一个踩过。
    wants: 他不要你的身体，也不要香火。他只是不想你走到他站着的地方。
    possessionRisk: none
    paths: [正道, 魔道, 佛道, 儒道, 鬼道, 妖修, 散修, 武道]
    lines:
      - cond: "tier >= 8"
        text: 「……」
      - cond: "tier >= 5"
        text: 「快了。」
      - cond: "tier >= 3"
        text: 「别问。往前看。」
      - text: 「逢岔路，先停一步。旁的不能说——说了，就不准了。」

events:

  # ══════════════════════════════════════════════════════════
  # 阵祖获取链 一：雾里那点铜色
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_mijing_canzhen
    title: 不散的雾
    weight: 90
    act: 2
    cooldown: 16
    cond: "tier == 2 && !flag('阵盘·得') && !hasSoul('阵祖无名')"
    tags: [残魂, 阵法, 机缘]
    text: |
      筑基后随队入秘境，归途拐进一条岔谷。雾停在半山，不散，也不动。
      雾里立着八根断石柱，柱身刻纹磨得只剩一半。柱下有白骨，骨上那件袍子的样式，是前朝的。
      一只山雀掠进雾里，没有再出来。
      队伍绕着走了。你落在最后，看见雾心深处隐约一点铜色——像一只盘。
    choices:
      - text: 依柱影推纹，从生门破进去
        karma: none
        check: { actor: "talent.悟性 + talent.神魂 * 0.4", dc: "68", scale: 11 }
        onCritSuccess:
          text: 半日。八根柱子的纹路在你眼里连成一张活图，生门死门次第翻转，你踩着翻转的空当走到雾心，俯身拾起一只八角铜盘。身后，雾开始散了。
          effects: ["悟性 +2", "flag 阵盘·得"]
          goto: evt_s2_zhenpan_kaijia
        onSuccess:
          text: 你在谷口守了三日，推演到第三夜才敢进去。生门只开一线，你贴着白骨走完最后十步，把那只铜盘拿到了手里。
          effects: ["flag 阵盘·得"]
          goto: evt_s2_zhenpan_kaijia
        onFail:
          text: 推到一半，纹路变了——这阵是活的。雾无声地拢过来，你退出来时半边身子湿冷，像在水底泡了一夜。
          effects: ["factors.状态 -0.15"]
        onCritFail:
          text: 你在雾里困了一日一夜。最后是白骨旁那半行刻痕救了你——留刻痕的人，也曾困在这里，只是他没有走出去。
          effects: ["factors.状态 -0.3", "lifespan -1", "道心 -2"]

      - text: 不推纹。凭身法硬抢那点铜色。
        karma: none
        check: { actor: "talent.根骨 + factors.功法 * 50", dc: "82", scale: 12 }
        onSuccess:
          text: 你冲进去又冲出来，前后三息。袍子烂了半幅，掌心多了一只冰凉的铜盘。雾在你身后合拢，像什么都没发生过。
          effects: ["factors.状态 -0.1", "flag 阵盘·得"]
          goto: evt_s2_zhenpan_kaijia
        onFail:
          text: 第五步，有东西缠住了你的脚踝——凉的，不知是雾还是别的。你拼着一身伤挣出来，回头看，雾纹丝不动。
          effects: ["factors.状态 -0.3", "lifespan -1"]

      - text: 记下方位，追上队伍
        karma: none
        effects:
          - "道心 +2"

      - text: 「【苏婆婆】婆婆，这阵你识得么？」
        require: "hasSoul('苏婆婆')"
        karma: none
        effects:
          - "soul.苏婆婆.favor +3"
          - "悟性 +1"

  # ══════════════════════════════════════════════════════════
  # 阵祖获取链 二：开价
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_zhenpan_kaijia
    title: 二年一问
    weight: 100
    act: 2
    once: true
    cond: "flag('阵盘·得') && !hasSoul('阵祖无名')"
    tags: [残魂, 阵法, 岔路]
    text: |
      铜盘入手冰凉。擦净泥锈，盘底刻着一个「无」字。
      当夜它自己热了。一个声音从盘心出来，平得没有一丝起伏：
      「老夫姓什么，忘了。生前布阵，人称阵祖。」
      「规矩先讲明白：指点一次，收你两年阳寿。不赊，不折，不骗。」
      「寿元收去做什么，你可以问——问，也算一次。」
      盘心那点光亮着，不催你。
    choices:
      - text: 「成交。」
        karma:
          type: 立誓
          target: 阵祖·无名
          weight: 20
          polarity: 0
          matureWindow: [10, 120]
          hooks:
            - id: 寿元有去处
            - id: 价钱不改，规矩也不改
        effects:
          - "bind.soul 阵祖无名 12"
          - "soul.阵祖无名.favor +5"
          - "flag 阵祖·成契"

      - text: 「先答我——收寿元，做什么用？」两年，我付。
        karma:
          type: 立誓
          target: 阵祖·无名
          weight: 20
          polarity: 0
          matureWindow: [10, 120]
          hooks:
            - id: 他记得你头一个问的是这个
            - id: 寿元有去处
        effects:
          - "bind.soul 阵祖无名 12"
          - "lifespan -2"
          - "soul.阵祖无名.favor +8"
          - "flag 阵祖·成契"
          - "flag 阵祖·答过半句"

      - text: 把铜盘送去坊市，换三百灵石
        karma:
          type: 背叛
          target: 阵祖·无名
          weight: 18
          polarity: -1
          matureWindow: [10, 80]
          hooks:
            - id: 铜盘又换了两次主人
            - id: 新主人替他找到了你
        effects:
          - "factors.法宝 +0.08"
          - "flag 阵盘·卖了"

      - text: 用油布裹了，压进箱底
        karma: none
        effects:
          - "道心 +2"
          - "flag 阵盘·封存"

  # ══════════════════════════════════════════════════════════
  # 阵祖互动 一：葫芦谷，杀阵或困阵
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_hulugu_fansha
    title: 价不看死活
    weight: 80
    act: 2
    once: true
    cond: "hasSoul('阵祖无名') && (unresolvedEvil() >= 1 || 名望 > 60)"
    tags: [残魂, 阵法, 危机]
    text: |
      三个修士衔尾跟了你四日。换过衣饰，换过路线，甩不脱。
      第五日，你被逼进一条葫芦谷。谷口只有一个。
      袖中铜盘热起来。
      「谷口一处生门，两处死门。」他说得不紧不慢，「杀阵，二年。困阵，也二年。老夫的价，不看死活。」
      谷外的脚步声，到三百步内了。
    choices:
      - text: 「杀阵。」
        karma:
          type: 杀戮
          target: 谷外追兵
          weight: 40
          polarity: -1
          matureWindow: [15, 90]
          hooks:
            - id: 主家加了三倍悬红
              lethal: true
              foreshadow:
                - { at: -9, evt: "坊市的悬红榜上，你的画像添了新墨" }
                - { at: -3, evt: "有人重金求购你惯用的阵纹拓样" }
                - { at: -1, evt: "你的护府阵一夜之间被人试了三处阵脚", window: true }
            - id: 尸首没人来收
        effects:
          - "lifespan -2"
          - "factors.法宝 +0.1"
          - "soul.阵祖无名.favor +6"
          - "业障 +12"
          - "堕度 +5"
          - "expose.杀过某人 +8"
          - "flag 手上有人命"

      - text: 「困阵。困三日就够。」
        karma:
          type: 放走
          target: 谷外追兵
          weight: 18
          polarity: 1
          matureWindow: [8, 60]
          hooks:
            - id: 回去复命的人说你邪门
            - id: 有人开始琢磨你的阵
        effects:
          - "lifespan -2"
          - "factors.法宝 +0.08"
          - "soul.阵祖无名.favor +3"
          - "名望 +5"

      - text: 「不买。」提剑守住谷口。
        karma: none
        check: { actor: "effectiveTier * 45 + factors.功法 * 30", dc: "130", scale: 12 }
        onSuccess:
          text: 一场血战从午后打到日落。三人退走时留下两蓬血，你靠着谷壁坐了半个时辰才站起来。铜盘凉了下去——他不劝，也不惋惜。
          effects: ["factors.状态 -0.25", "名望 +8", "expose.真实修为 +6"]
        onFail:
          text: 你带着三道透骨的口子从死门的乱石里爬出去，靠一场夜雨才断了行迹。袖中铜盘自始至终没有再响——不成交，他连一个字都不多给。
          effects: ["factors.状态 -0.4", "lifespan -2", "道心 -3"]

  # ══════════════════════════════════════════════════════════
  # 阵祖互动 二：唯一一次免费开口
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_zhenzu_mianfei
    title: 不收钱的半句
    weight: 75
    act: 2
    once: true
    cond: "hasSoul('阵祖无名') && knowerCount > 0"
    tags: [残魂, 暴露]
    text: |
      夜里你校对护府的阵纹，铜盘忽然自己响了。
      「有句话，不收钱。」
      你停下手。成契以来，他从没说过这四个字。
      「头一回，也是末一回。」他照旧一个字一个字地说，「知道你底细的那几个人里，有一个，近来脚印不对。」
      「哪一个，往哪边不对——这两句，照价。」
    choices:
      - text: 「说。二年就二年。」
        karma: none
        effects:
          - "lifespan -2"
          - "factors.情报 +0.12"
          - "soul.阵祖无名.favor +4"
          - "flag 阵祖·点破知情人"

      - text: 后两句不买。自己查。
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 60", dc: "70", scale: 12 }
        onSuccess:
          text: 你翻了三个月的行踪：果然有一人，近来三次下山都绕开了驿道，落脚的客栈，柜上是生面孔。你不动声色，只把此人挪出了要紧事之外。
          effects: ["factors.情报 +0.08", "flag 阵祖·点破知情人"]
        onFail:
          text: 查了三个月，人人都像平常。可「脚印不对」四个字已经进了你耳朵——此后你看谁，都多看半眼。
          effects: ["道心 -3"]

      - text: 「不听。我身边的人，我自己信。」
        karma: none
        effects:
          - "道心 +4"
          - "soul.阵祖无名.favor -2"

  # ══════════════════════════════════════════════════════════
  # 未来的你 · 获取：镜中人
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_jingzhongren
    title: 镜里的字
    weight: 90
    act: 3
    once: true
    cond: "tier == 3 && !hasSoul('未来的你')"
    tags: [残魂, 机缘]
    text: |
      结丹之后，宗门贺了三日。这一夜你独自守着灯。
      铜镜摆在案上。你俯身吹灯时，镜里的人没有跟着动。
      他比你老三十岁。鬓角灰白，右手少了两根手指，披一件你没见过的旧袍。
      他隔着镜面看你，看了很久，抬手在镜上写了两个反着的字：
      「别急。」
      灯花爆了一声。你数了数自己的手指——十根，都在。
    choices:
      - text: 伸手，按住镜面
        karma: none
        effects:
          - "bind.soul 未来的你 10"
          - "soul.未来的你.favor +5"
          - "flag 见过未来"
          - "道心 -2"

      - text: 「你是谁？」
        karma: none
        effects:
          - "bind.soul 未来的你 10"
          - "flag 见过未来"
          - "道心 -3"

      - text: 抄起镇纸，砸碎那面镜子
        karma: none
        effects:
          - "道心 +5"
          - "气运 -3"
          - "flag 碎过那面镜"

      - text: 「【面板】鉴定镜中人。」
        require: "hasSystem('面板')"
        karma: none
        effects:
          - "bind.soul 未来的你 10"
          - "flag 见过未来"
          - "僭越 +4"
          - "expose.金手指 +2"

  # ══════════════════════════════════════════════════════════
  # 未来的你 · 互动一：「别去。」
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_weilai_biequ
    title: 两个字
    weight: 80
    act: 3
    once: true
    cond: "hasSoul('未来的你') && tier == 3"
    tags: [残魂, 岔路]
    text: |
      宗门接下北境一桩护送差事：一卷矿脉图，三名金丹同行。报酬厚得反常——功勋翻倍，还许你先挑一件库藏法器。
      名册明日封卷。你研墨落笔时，识海里那个久不开口的声音说话了：
      「别去。」
      你问为什么。没有回音。
      你又问了一遍。
      「别去。」还是这两个字，一模一样，像他只剩这两个字。
    choices:
      - text: 称病，辞了差事
        karma: none
        effects:
          - "名望 -5"
          - "道心 -2"
          - "soul.未来的你.favor +8"
          - "flag 未来·听劝"

      - text: 去。前程不能靠两个字定夺。
        karma: none
        check: { actor: "effectiveTier * 50 + factors.功法 * 30", dc: "170", scale: 13 }
        onSuccess:
          text: 归途峡口，伏杀。来的人清一色蒙面，招招冲图不冲人。你们且战且退了三十里，图保住了，三人都挂了彩。回山之后，识海里安静得像空的。
          effects: ["factors.法宝 +0.12", "名望 +10", "factors.状态 -0.25", "soul.未来的你.favor -5", "flag 未来·没听劝"]
        onFail:
          text: 同行三人折了两个。你带着断了三根肋骨的身子把图送到，交割的执事夸你忠勇。夜里入定，那道影子背对着你，很久，很久。
          effects: ["factors.状态 -0.4", "lifespan -2", "道心 -5", "名望 +4", "flag 未来·没听劝"]
        onCritFail:
          text: 峡口的伏杀里，有一剑不冲图，只冲你的性命。你亮了压箱底的手段，又假意坠崖，才换回一条命。爬上崖时你忽然想明白：他早知道这一剑。
          effects: ["factors.状态 -0.45", "lifespan -3", "道心 -8", "expose.真实修为 +6", "flag 未来·没听劝"]

      - text: 差事接下，托病迟三日动身
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "72", scale: 12 }
        onSuccess:
          text: 迟了三日，你避开了正日子——前队在峡口全折了。你押着补队绕小路把图送到，回程一路没人说话。识海里也没有。两个字他说过了，剩下的路是你自己挑的。
          effects: ["名望 +6", "factors.情报 +0.05", "flag 未来·听了一半"]
        onFail:
          text: 伏杀的人，也多等了三日。你在小路上被堵个正着，仗着地形烂熟才捡回一条命。原来「别去」两个字里，没有「晚三日就行」的意思。
          effects: ["factors.状态 -0.3", "lifespan -1", "flag 未来·听了一半"]

  # ══════════════════════════════════════════════════════════
  # 未来的你 · 互动二：她的字
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_weilai_tadezi
    title: 她的字
    weight: 70
    act: 3
    once: true
    cond: "hasSoul('未来的你') && (flag('道侣·沈青梧') || flag('知己·沈青梧'))"
    tags: [残魂, 道侣]
    text: |
      入冬，沈青梧来洞府替你核一张丹方。她伏案写字，笔不停。
      你察觉识海里那道疲惫的目光，落在她执笔的手上，落了很久。
      她走后，你问他。
      沉默比平时更长。
      「她的字，还是这样。」
      只有这一句。你听不出那语气——像追念，又像告罪。
      「还是这样」。他什么时候，见过她的字？
      你再问。识海里已经没有声音了。
    choices:
      - text: 追问到底。今夜不答，就夜夜问。
        karma: none
        effects:
          - "soul.未来的你.favor -5"
          - "道心 -2"
          - "flag 未来·问过她"

      - text: 不问了。只把她历年写给你的方子，收进一只铁盒。
        karma: none
        effects:
          - "factors.道侣 +0.06"
          - "道心 +3"
          - "flag 收了她的方子"

      - text: 「阵祖。镜里那位的事，你看得见么？」
        require: "hasSoul('阵祖无名')"
        karma: none
        effects:
          - "lifespan -2"
          - "soul.阵祖无名.favor +2"
          - "flag 阵祖·谈过镜中人"

      - text: 从那天起，你看她的眼神里，多了点别的东西
        karma: none
        effects:
          - "factors.道侣 -0.08"
          - "道心 -4"

  # ══════════════════════════════════════════════════════════
  # 未来的你 · 互动三：七日之内
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_qiri_tiezi
    title: 递帖子的人
    weight: 85
    act: 3
    once: true
    cond: "hasSoul('未来的你') && maxExpose > 55"
    tags: [残魂, 暴露]
    text: |
      他极少开口，你几乎忘了他在。
      这日清晨你束发，那个声音贴着耳骨响起来：
      「七日之内，递帖子的人，一个都别见。」
      你追问。没有下文。
      第三日起，帖子当真来了：烫金的拜帖、素笺的请柬、盖着外门小印的公函——一共五份。递帖的人都客气。
      客气得过分。
    choices:
      - text: 照做。闭关七日，一份不接。
        karma: none
        effects:
          - "expose.金手指 -6"
          - "expose.残魂 -6"
          - "名望 -6"
          - "锋芒 -0.06"
          - "soul.未来的你.favor +6"
          - "flag 未来·避过一劫"

      - text: 只接外门公函那一份——公事推不得
        karma: none
        check: { actor: "talent.悟性 + factors.情报 * 50", dc: "75", scale: 12 }
        onSuccess:
          text: 公函果然只是例行考功。你顺着话缝反问了两句，问出另外四份帖子背后是同一双手——有人在凑你的底细，凑得很有耐心。
          effects: ["factors.情报 +0.06", "expose.金手指 -3", "flag 未来·避过一劫"]
        onFail:
          text: 来的人东拉西扯，从丹方问到师承。你多说了三句。事后回想，三句都不该说——三句，也都被记下了。
          effects: ["expose.金手指 +8", "道心 -2"]

      - text: 全见。行得正，坐得端，怕什么帖子。
        karma: none
        effects:
          - "expose.金手指 +8"
          - "expose.残魂 +5"
          - "名望 +5"
          - "soul.未来的你.favor -6"
          - "flag 未来·不听预警"

  # ══════════════════════════════════════════════════════════
  # 未来的你 · 互动四：越来越淡（tier>=5 告别）
  # ══════════════════════════════════════════════════════════

  - id: evt_s2_weilai_gaobie
    title: 隔水的影子
    weight: 90
    act: 4
    once: true
    cond: "hasSoul('未来的你') && tier >= 5"
    tags: [残魂, 离别]
    text: |
      化神一坐，就是二十几年。
      出关那日，山下的城换了名字。旧年替你抄书的凡人小童，坟头的树已经合抱。
      识海里那道影子，也一年薄似一年。你数过，他上一回开口，是十一年前。
      今夜入定，他站在一层水光后面，薄得快要看不见了。
      他看着你——头一回，露出想说话的神情。
    choices:
      - text: 「要走了？……走之前，留一句话。」
        require: "soulFavor('未来的你') >= 50"
        karma: none
        check: { actor: "soulFavor('未来的你') + 道心 * 0.5", dc: "70", scale: 10 }
        onSuccess:
          text: 水光晃了晃。那句话隔着二十几年的疲惫递过来，很轻，你却听得极清——「这次……也许能不一样。」影子散尽的那一瞬，你看见他鬓角的白，比初见时少了。
          effects: ["flag 未来已改", "道心 +6", "气运 +4"]
        onFail:
          text: 他的嘴动了动。话没有传过来，影子先散了。你对着空处坐到天亮，把那半句没听见的话，自己补了二十几年。
          effects: ["道心 -3", "flag 未来·未及道别"]

      - text: 拦在水光前。「话说清楚，再走。」
        karma: none
        effects:
          - "soul.未来的你.favor -6"
          - "道心 -2"
          - "flag 未来·强留过"

      - text: 什么也不说。陪他坐完这一炷香。
        karma: none
        effects:
          - "道心 +4"
          - "soul.未来的你.favor +4"
          - "flag 未来·静别"
`,Sr=`# MVP 金手指（8 个）
# skin 决定 UI 皮肤 —— 面板即世界观：
#   cheap    俗气廉价的网游弹窗（暗示低阶系统是批量发放的量产货）
#   data     冷静的数据表格
#   ink      水墨手写，字迹随情绪抖动
#   terminal 黑底绿字的天道日志
#   meta     伪装成游戏本身的 UI

systems:
  - id: 签到
    name: 签到系统
    tier: 0
    skin: cheap
    desc: 在特定地点、特定时机签到即可得物。地点越险，奖励越好。
    cost: 签到即留痕，天机可循 —— 暴露度持续上升。
    grants: [choice.签到]

  - id: 任务
    name: 任务系统
    tier: 0
    skin: cheap
    desc: 系统发布任务，完成给奖励。
    cost: 拒绝或失败有惩罚，倒计时全程可见，抹杀条款写在接任务那一刻。
    grants: [choice.任务]

  - id: 面板
    name: 万物属性面板
    tier: 0
    skin: data
    desc: 能看到人、物、功法的真实属性与弱点。
    cost: 窥视强者会被神识察觉 —— 你看得见他，他也看得见你在看。
    grants: [choice.鉴物, choice.识人]

  - id: 模拟器
    name: 人生模拟器
    tier: 1
    skin: data
    desc: 消耗寿元预演未来若干年，看到结果再决定要不要那么做。
    cost: 预演本身会改变未来。演得越多，世界偏离得越远。
    unlock: "realmAtLeast(2)"
    grants: [choice.预演]

  - id: 词条
    name: 词条系统
    tier: 1
    skin: data
    desc: 万物皆有词条，可摘取、镶嵌、合成。
    cost: 摘取会让原物崩坏。被摘者若还活着，会一路找到你。
    unlock: "realmAtLeast(2)"
    grants: [choice.摘取]

  - id: 掠夺
    name: 掠夺系统
    tier: 1
    skin: cheap
    desc: 击杀可夺取对方的修为、天赋、寿元。
    cost: 夺来的东西带着对方的执念，一层层积成心魔。
    unlock: "realmAtLeast(2)"
    grants: [choice.掠夺]

  - id: 回收站
    name: 回收站系统
    tier: 1
    skin: cheap
    desc: 丢弃废品可换回等价好物。越舍不得的东西，换回来的越好。
    cost: 必须是真的失去，且不可撤销 —— 系统认得出你舍不舍得。
    unlock: "realmAtLeast(2)"
    grants: [choice.回收]

  - id: 苟道
    name: 苟道系统
    tier: 1
    skin: ink
    desc: 不主动出手、不出风头，就持续变强。越怂越强。
    cost: 一旦主动攻击，进度清零并倒扣。
    unlock: "realmAtLeast(2)"
    grants: [choice.苟]
`,Cr=Symbol.for(`yaml.alias`),wr=Symbol.for(`yaml.document`),Tr=Symbol.for(`yaml.map`),Er=Symbol.for(`yaml.pair`),Dr=Symbol.for(`yaml.scalar`),Or=Symbol.for(`yaml.seq`),kr=Symbol.for(`yaml.node.type`),Ar=e=>!!e&&typeof e==`object`&&e[kr]===Cr,jr=e=>!!e&&typeof e==`object`&&e[kr]===wr,Mr=e=>!!e&&typeof e==`object`&&e[kr]===Tr,j=e=>!!e&&typeof e==`object`&&e[kr]===Er,M=e=>!!e&&typeof e==`object`&&e[kr]===Dr,Nr=e=>!!e&&typeof e==`object`&&e[kr]===Or;function N(e){if(e&&typeof e==`object`)switch(e[kr]){case Tr:case Or:return!0}return!1}function P(e){if(e&&typeof e==`object`)switch(e[kr]){case Cr:case Tr:case Dr:case Or:return!0}return!1}var Pr=e=>(M(e)||N(e))&&!!e.anchor,Fr=Symbol(`break visit`),Ir=Symbol(`skip children`),Lr=Symbol(`remove node`);function Rr(e,t){let n=Br(t);jr(e)?zr(null,e.contents,n,Object.freeze([e]))===Lr&&(e.contents=null):zr(null,e,n,Object.freeze([]))}Rr.BREAK=Fr,Rr.SKIP=Ir,Rr.REMOVE=Lr;function zr(e,t,n,r){let i=Vr(e,t,n,r);if(P(i)||j(i))return Hr(e,r,i),zr(e,i,n,r);if(typeof i!=`symbol`){if(N(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=zr(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===Fr)return Fr;else i===Lr&&(t.items.splice(e,1),--e)}}else if(j(t)){r=Object.freeze(r.concat(t));let e=zr(`key`,t.key,n,r);if(e===Fr)return Fr;e===Lr&&(t.key=null);let i=zr(`value`,t.value,n,r);if(i===Fr)return Fr;i===Lr&&(t.value=null)}}return i}function Br(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Vr(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(Mr(t))return n.Map?.(e,t,r);if(Nr(t))return n.Seq?.(e,t,r);if(j(t))return n.Pair?.(e,t,r);if(M(t))return n.Scalar?.(e,t,r);if(Ar(t))return n.Alias?.(e,t,r)}function Hr(e,t,n){let r=t[t.length-1];if(N(r))r.items[e]=n;else if(j(r))e===`key`?r.key=n:r.value=n;else if(jr(r))r.contents=n;else{let e=Ar(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var Ur={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},Wr=e=>e.replace(/[!,[\]{}]/g,e=>Ur[e]),Gr=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags)}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Wr(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&P(e.contents)){let t={};Rr(e.contents,(e,n)=>{P(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)(i!==`!!`||a!==`tag:yaml.org,2002:`)&&(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};Gr.defaultYaml={explicit:!1,version:`1.2`},Gr.defaultTags={"!!":`tag:yaml.org,2002:`};function Kr(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function qr(e){let t=new Set;return Rr(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function Jr(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function Yr(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=qr(e);let a=Jr(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(M(t.node)||N(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function Xr(e,t,n,r){if(r&&typeof r==`object`){if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=Xr(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=Xr(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=Xr(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=Xr(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}}return e.call(t,n,r)}function Zr(e,t,n){if(Array.isArray(e))return e.map((e,t)=>Zr(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!Pr(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var Qr=class{constructor(e){Object.defineProperty(this,kr,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!jr(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=Zr(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?Xr(i,{"":o},``,o):o}},$r=class extends Qr{constructor(e){super(Cr),this.source=e,Object.defineProperty(this,"tag",{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){if(t?.maxAliasCount===0)throw ReferenceError(`Alias resolution is disabled`);let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],Rr(e,{Node:(e,t)=>{(Ar(t)||Pr(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}return r}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:r,maxAliasCount:i}=t,a=this.resolve(r,t);if(!a){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}let o=n.get(a);if(o||=(Zr(a,null,t),n.get(a)),o?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=ei(r,a,n)),o.count*o.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`);return o.res}toString(e,t,n){let r=`*${this.source}`;if(e){if(Kr(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function ei(e,t,n){if(Ar(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}if(N(t)){let r=0;for(let i of t.items){let t=ei(e,i,n);t>r&&(r=t)}return r}if(j(t)){let r=ei(e,t.key,n),i=ei(e,t.value,n);return Math.max(r,i)}return 1}var ti=e=>!e||typeof e!=`function`&&typeof e!=`object`,F=class extends Qr{constructor(e){super(Dr),this.value=e}toJSON(e,t){return t?.keep?this.value:Zr(this.value,e,t)}toString(){return String(this.value)}};F.BLOCK_FOLDED=`BLOCK_FOLDED`,F.BLOCK_LITERAL=`BLOCK_LITERAL`,F.PLAIN=`PLAIN`,F.QUOTE_DOUBLE=`QUOTE_DOUBLE`,F.QUOTE_SINGLE=`QUOTE_SINGLE`;var ni=`tag:yaml.org,2002:`;function ri(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function ii(e,t,n){if(jr(e)&&(e=e.contents),P(e))return e;if(j(e)){let t=n.schema[Tr].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new $r(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=ni+t.slice(2));let l=ri(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new F(e);return c&&(c.node=t),t}l=e instanceof Map?o[Tr]:Symbol.iterator in Object(e)?o[Or]:o[Tr]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new F(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function ai(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return ii(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var oi=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,si=class extends Qr{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>P(t)||j(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(oi(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if(N(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,ai(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if(N(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&M(i)?i.value:i:N(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!j(t))return!1;let n=t.value;return n==null||e&&M(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return N(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if(N(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,ai(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},ci=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function li(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var ui=(e,t,n)=>e.endsWith(`
`)?li(n,t):n.includes(`
`)?`
`+li(n,t):(e.endsWith(` `)?``:` `)+n,di=`flow`,fi=`block`,pi=`quoted`;function mi(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=hi(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=hi(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d){if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function hi(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var gi=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),_i=e=>/^(%|---|\.\.\.)/m.test(e);function vi(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function yi(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(_i(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:mi(o,a,pi,gi(t,!1))}function bi(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return yi(e,t);let n=t.indent||(_i(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:mi(r,n,di,gi(t,!1))}function xi(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=yi;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?bi:i&&!t?yi:n?bi:yi}return r(e,t)}var Si;try{Si=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{Si=/\n+(?!\n|$)/g}function Ci({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return xi(n,r);let l=r.indent||(r.forceBlockIndent||_i(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===F.BLOCK_FOLDED?!1:t===F.BLOCK_LITERAL||!vi(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(Si,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=gi(r,!0);o!==`folded`&&t!==F.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=mi(`${v}${e}${p}`,l,fi,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function wi(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return xi(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?xi(a,t):Ci(e,t,n,r);if(!s&&!u&&i!==F.PLAIN&&a.includes(`
`))return Ci(e,t,n,r);if(_i(a)){if(c===``)return t.forceBlockIndent=!0,Ci(e,t,n,r);if(s&&c===l)return xi(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return xi(a,t)}return s?d:mi(d,c,di,gi(t,!1))}function Ti(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==F.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=F.QUOTE_DOUBLE);let c=e=>{switch(e){case F.BLOCK_FOLDED:case F.BLOCK_LITERAL:return i||a?xi(o.value,t):Ci(o,t,n,r);case F.QUOTE_DOUBLE:return yi(o.value,t);case F.QUOTE_SINGLE:return bi(o.value,t);case F.PLAIN:return wi(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function Ei(e,t){let n=Object.assign({blockQuote:!0,commentString:ci,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function Di(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(M(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function Oi(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(M(e)||N(e))&&e.anchor;a&&Kr(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function ki(e,t,n,r){if(j(e))return e.toString(t,n,r);if(Ar(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=P(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=Di(t.doc.schema.tags,a);let o=Oi(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):M(a)?Ti(a,t,n,r):a.toString(t,n,r);return o?M(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Ai({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=P(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if(N(e)||!P(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||N(e)||(M(e)?e.type===F.BLOCK_FOLDED||e.type===F.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=ki(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=ui(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=ui(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=ui(g,n.indent,l(f))));let _,v,y;P(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&M(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&Nr(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=ki(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${li(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&N(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else(x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=ui(g,n.indent,l(y)):h&&i&&i(),g}function ji(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var Mi=`<<`,Ni={identify:e=>e===Mi||typeof e==`symbol`&&e.description===Mi,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new F(Symbol(Mi)),{addToJSMap:Fi}),stringify:()=>Mi},Pi=(e,t)=>(Ni.identify(t)||M(t)&&(!t.type||t.type===F.PLAIN)&&Ni.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===Ni.tag&&e.default);function Fi(e,t,n){let r=I(e,n);if(Nr(r))for(let n of r.items)Ii(e,t,n);else if(Array.isArray(r))for(let n of r)Ii(e,t,n);else Ii(e,t,r)}function Ii(e,t,n){let r=I(e,n);if(!Mr(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function I(e,t){return e&&Ar(t)?t.resolve(e.doc,e):t}function L(e,t,{key:n,value:r}){if(P(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if(Pi(e,n))Fi(e,t,r);else{let i=Zr(n,``,e);if(t instanceof Map)t.set(i,Zr(r,i,e));else if(t instanceof Set)t.add(i);else{let a=Li(n,i,e),o=Zr(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function Li(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(P(e)&&n?.doc){let t=Ei(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),ji(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function Ri(e,t,n){return new zi(ii(e,void 0,n),ii(t,void 0,n))}var zi=class e{constructor(e,t=null){Object.defineProperty(this,kr,{value:Er}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return P(n)&&(n=n.clone(t)),P(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return L(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Ai(this,e,t,n):JSON.stringify(this)}};function Bi(e,t,n){return(t.inFlow??e.flow?Hi:Vi)(e,t,n)}function Vi({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(P(i))!d&&i.spaceBefore&&f.push(``),Ui(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(j(i)){let e=P(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),Ui(n,f,e.commentBefore,d))}d=!1;let s=ki(i,u,()=>o=null,()=>d=!0);o&&(s+=ui(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+li(l(e),c),s&&s()):d&&o&&o(),p}function Hi({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(P(i))i.spaceBefore&&d.push(``),Ui(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(j(i)){let e=P(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),Ui(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=P(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=ki(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=ui(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}return`${f}${o}${d.join(` `)}${o}${p}`}function Ui({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=li(t(r),e);n.push(i.trimStart())}}function Wi(e,t){let n=M(t)?t.value:t;for(let r of e)if(j(r)&&(r.key===t||r.key===n||M(r.key)&&r.key.value===n))return r}var Gi=class extends si{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(Tr,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(Ri(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=j(e)?e:!e||typeof e!=`object`||!(`key`in e)?new zi(e,e?.value):new zi(e.key,e.value);let r=Wi(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);M(r.value)&&ti(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=Wi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=Wi(this.items,e)?.value;return(!t&&M(n)?n.value:n)??void 0}has(e){return!!Wi(this.items,e)}set(e,t){this.add(new zi(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)L(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!j(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Bi(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},Ki={collection:`map`,default:!0,nodeClass:Gi,tag:`tag:yaml.org,2002:map`,resolve(e,t){return Mr(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>Gi.from(e,t,n)},qi=class extends si{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(Or,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=Ji(e);return typeof t==`number`&&this.items.splice(t,1).length>0}get(e,t){let n=Ji(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&M(r)?r.value:r}has(e){let t=Ji(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=Ji(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];M(r)&&ti(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(Zr(e,String(r++),t));return n}toString(e,t,n){return e?Bi(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(ii(a,void 0,n))}}return i}};function Ji(e){let t=M(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var Yi={collection:`seq`,default:!0,nodeClass:qi,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return Nr(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>qi.from(e,t,n)},Xi={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),Ti(e,t,n,r)}},Zi={identify:e=>e==null,createNode:()=>new F(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new F(null),stringify:({source:e},t)=>typeof e==`string`&&Zi.test.test(e)?e:t.options.nullStr},Qi={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new F(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&Qi.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function $i({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^-?\d/.test(a)&&!a.includes(`e`)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-->0;)a+=`0`}return a}var ea={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:$i},ta={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():$i(e)}},na={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new F(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:$i},ra=e=>typeof e==`bigint`||Number.isInteger(e),ia=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function aa(e,t,n){let{value:r}=e;return ra(r)&&r>=0?n+r.toString(t):$i(e)}var oa={identify:e=>ra(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>ia(e,2,8,n),stringify:e=>aa(e,8,`0o`)},sa={identify:ra,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>ia(e,0,10,n),stringify:$i},ca={identify:e=>ra(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>ia(e,2,16,n),stringify:e=>aa(e,16,`0x`)},la=[Ki,Yi,Xi,Zi,Qi,oa,sa,ca,ea,ta,na];function ua(e){return typeof e==`bigint`||Number.isInteger(e)}var da=({value:e})=>JSON.stringify(e),fa=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:da},{identify:e=>e==null,createNode:()=>new F(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:da},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:da},{identify:ua,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>ua(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:da}],pa=[Ki,Yi].concat(fa,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),ma={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=F.BLOCK_LITERAL,t!==F.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===F.BLOCK_LITERAL?`
`:` `)}return Ti({comment:e,type:t,value:s},r,i,a)}};function ha(e,t){if(Nr(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!j(r)){if(Mr(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new zi(new F(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=j(r)?r:new zi(r)}}else t(`Expected a sequence for this tag`);return e}function ga(e,t,n){let{replacer:r}=n,i=new qi(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e)){if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`)}else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(Ri(o,s,n))}return i}var _a={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:ha,createNode:ga},va=class e extends qi{constructor(){super(),this.add=Gi.prototype.add.bind(this),this.delete=Gi.prototype.delete.bind(this),this.get=Gi.prototype.get.bind(this),this.has=Gi.prototype.has.bind(this),this.set=Gi.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(j(e)?(r=Zr(e.key,``,t),i=Zr(e.value,r,t)):r=Zr(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=ga(e,t,n),i=new this;return i.items=r.items,i}};va.tag=`tag:yaml.org,2002:omap`;var ya={collection:`seq`,identify:e=>e instanceof Map,nodeClass:va,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=ha(e,t),r=[];for(let{key:e}of n.items)M(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new va,n)},createNode:(e,t,n)=>va.from(e,t,n)};function ba({value:e,source:t},n){return t&&(e?xa:Sa).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var xa={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new F(!0),stringify:ba},Sa={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new F(!1),stringify:ba},Ca={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:$i},wa={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():$i(e)}},Ta={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new F(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:$i},Ea=e=>typeof e==`bigint`||Number.isInteger(e);function Da(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function Oa(e,t,n){let{value:r}=e;if(Ea(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return $i(e)}var ka={identify:Ea,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Da(e,2,2,n),stringify:e=>Oa(e,2,`0b`)},Aa={identify:Ea,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Da(e,1,8,n),stringify:e=>Oa(e,8,`0`)},ja={identify:Ea,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Da(e,0,10,n),stringify:$i},Ma={identify:Ea,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Da(e,2,16,n),stringify:e=>Oa(e,16,`0x`)},Na=class e extends Gi{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=j(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new zi(e.key,null):new zi(e,null),Wi(this.items,t.key)||this.items.push(t)}get(e,t){let n=Wi(this.items,e);return!t&&j(n)?M(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=Wi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new zi(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(Ri(e,null,n));return i}};Na.tag=`tag:yaml.org,2002:set`;var Pa={collection:`map`,identify:e=>e instanceof Set,nodeClass:Na,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>Na.from(e,t,n),resolve(e,t){if(Mr(e)){if(e.hasAllNullValues(!0))return Object.assign(new Na,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function Fa(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function Ia(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return $i(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var La={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Fa(e,n),stringify:Ia},Ra={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Fa(e,!1),stringify:Ia},za={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(za.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=Fa(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},Ba=[Ki,Yi,Xi,Zi,xa,Sa,ka,Aa,ja,Ma,Ca,wa,Ta,ma,Ni,ya,_a,Pa,La,Ra,za],Va=new Map([[`core`,la],[`failsafe`,[Ki,Yi,Xi]],[`json`,pa],[`yaml11`,Ba],[`yaml-1.1`,Ba]]),Ha={binary:ma,bool:Qi,float:na,floatExp:ta,floatNaN:ea,floatTime:Ra,int:sa,intHex:ca,intOct:oa,intTime:La,map:Ki,merge:Ni,null:Zi,omap:ya,pairs:_a,seq:Yi,set:Pa,timestamp:za},Ua={"tag:yaml.org,2002:binary":ma,"tag:yaml.org,2002:merge":Ni,"tag:yaml.org,2002:omap":ya,"tag:yaml.org,2002:pairs":_a,"tag:yaml.org,2002:set":Pa,"tag:yaml.org,2002:timestamp":za};function Wa(e,t,n){let r=Va.get(t);if(r&&!e)return n&&!r.includes(Ni)?r.concat(Ni):r.slice();let i=r;if(!i){if(Array.isArray(e))i=[];else{let e=Array.from(Va.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(Ni)),i.reduce((e,t)=>{let n=typeof t==`string`?Ha[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(Ha).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var Ga=(e,t)=>e.key<t.key?-1:+(e.key>t.key),Ka=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Wa(e,`compat`):e?Wa(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?Ua:{},this.tags=Wa(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Tr,{value:Ki}),Object.defineProperty(this,Dr,{value:Xi}),Object.defineProperty(this,Or,{value:Yi}),this.sortMapEntries=typeof a==`function`?a:a===!0?Ga:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function qa(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=Ei(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(li(t,``))}let o=!1,s=null;if(e.contents){if(P(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(li(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=ki(e.contents,i,()=>s=null,t);s&&(c+=ui(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(ki(e.contents,i));if(e.directives?.docEnd){if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(li(t,``))):n.push(`... ${t}`)}else n.push(`...`)}else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(li(a(t),``)))}return n.join(`
`)+`
`}var Ja=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,kr,{value:wr});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Gr({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[kr]:{value:wr}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=P(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){Ya(this.contents)&&this.contents.add(e)}addIn(e,t){Ya(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=qr(this);e.anchor=!t||n.has(t)?Jr(t||`a`,n):t}return new $r(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=Yr(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=ii(e,l,p);return o&&N(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new zi(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return Ya(this.contents)?this.contents.delete(e):!1}deleteIn(e){return oi(e)?this.contents!=null&&(this.contents=null,!0):Ya(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return N(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return oi(e)?!t&&M(this.contents)?this.contents.value:this.contents:N(this.contents)?this.contents.getIn(e,t):void 0}has(e){return N(this.contents)?this.contents.has(e):!1}hasIn(e){return oi(e)?this.contents!==void 0:N(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=ai(this.schema,[e],t):Ya(this.contents)&&this.contents.set(e,t)}setIn(e,t){oi(e)?this.contents=t:this.contents==null?this.contents=ai(this.schema,Array.from(e),t):Ya(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new Gr({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new Gr({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Ka(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=Zr(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?Xr(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return qa(this,e)}};function Ya(e){if(N(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var Xa=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},Za=class extends Xa{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},Qa=class extends Xa{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},$a=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function eo(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],C=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:C,start:x??C}}function to(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(to(t.key)||to(t.value))return!0}return!1;default:return!0}}function no(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&to(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function ro(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||M(e)&&M(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var io=`All mapping items must start at the same column`;function ao({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??Gi)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=eo(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,io)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||to(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,io);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&no(r.indent,u,i),n.atKey=!1,ro(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=eo(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&no(r.indent,f,i),s=c.range[2];let l=new zi(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new zi(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function oo({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??qi)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=eo(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found){if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&no(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function so(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var co=`Block collections are not allowed within flow collections`,lo=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function uo({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new((a?.nodeClass)??(o?Gi:qi))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=eo(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&to(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];j(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],lo(m)&&i(r.range,`BLOCK_IN_FLOW`,co)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);lo(f)&&i(g.range,`BLOCK_IN_FLOW`,co),n.atKey=!1;let _=eo(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?lo(m)&&i(v.range,`BLOCK_IN_FLOW`,co):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new zi(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;ro(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new Gi(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=so(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function fo(e,t,n,r,i,a){let o=n.type===`block-map`?ao(e,t,n,r,a):n.type===`block-seq`?oo(e,t,n,r,a):uo(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function R(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===Gi.tagName&&s===`map`||o===qi.tagName&&s===`seq`)return fo(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),fo(e,t,n,i,o)}let l=fo(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=P(u)?u:new F(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function po(e,t,n){let r=t.offset,i=mo(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?F.BLOCK_FOLDED:F.BLOCK_LITERAL,o=t.source?z(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===F.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
`):t.length>c||r[0]===`	`?(f===` `?f=`
`:!p&&f===`
`&&(f=`

`),d+=f+t.slice(c)+r,f=`
`,p=!0):r===``?f===`
`?d+=`
`:f=`
`:(d+=f+r,f=` `,p=!1)}switch(i.chomp){case`-`:break;case`+`:for(let e=s;e<o.length;++e)d+=`
`+o[e][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function mo({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function z(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function B(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=F.PLAIN,c=ho(a,l);break;case`single-quoted-scalar`:s=F.QUOTE_SINGLE,c=go(a,l);break;case`double-quoted-scalar`:s=F.QUOTE_DOUBLE,c=vo(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=so(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function ho(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),_o(e)}function go(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),_o(e.slice(1,-1)).replace(/''/g,`'`)}function _o(e){let t,n;try{t=RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,`sy`),n=RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,`sy`)}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=t.exec(e);if(!r)return e;let i=r[1],a=` `,o=t.lastIndex;for(n.lastIndex=o;r=n.exec(e);)r[1]===``?a===`
`?i+=a:a=`
`:(i+=a+r[1],a=` `),o=n.lastIndex;let s=/[ \t]*(.*)/sy;return s.lastIndex=o,r=s.exec(e),i+a+(r?.[1]??``)}function vo(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(i!==`\r`||e[r+1]!==`
`){if(i===`
`){let{fold:t,offset:i}=yo(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=bo[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a=i===`x`?2:i===`u`?4:8;n+=xo(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&(a!==`\r`||e[r+2]!==`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function yo(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&(r!==`\r`||e[t+2]===`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var bo={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function xo(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}}function So(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?po(e,t,r):B(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[Dr]:c?V(e.schema,i,c,n,r):t.type===`scalar`?Co(e,i,t,r):e.schema[Dr];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=M(a)?a:new F(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new F(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function V(e,t,n,r,i){if(n===`!`)return e[Dr];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n){if(t.default&&t.test)a.push(t);else return t}for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[Dr])}function Co({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[Dr];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[Dr];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function wo(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var To={composeNode:Eo,composeEmptyNode:Do};function Eo(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=Oo(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=So(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=R(To,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=Do(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!M(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function Do(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=So(e,{type:`scalar`,offset:wo(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function Oo({options:e},{offset:t,source:n,end:r},i){let a=new $r(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=so(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function ko(e,t,{offset:n,start:r,value:i,end:a},o){let s=new Ja(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=eo(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?Eo(c,i,l,o):Do(c,l.end,r,null,l,o);let u=s.contents.range[2],d=so(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function Ao(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function jo(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var H=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=Ao(e);r?this.warnings.push(new Qa(i,t,n)):this.errors.push(new Za(i,t,n))},this.directives=new Gr({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=jo(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if(N(i)&&!i.flow&&i.items.length>0){let e=i.items[0];j(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=Ao(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=ko(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Za(Ao(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new Za(Ao(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=so(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Za(Ao(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new Ja(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},Mo=Symbol(`break visit`),No=Symbol(`skip children`),Po=Symbol(`remove item`);function Fo(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),Io(Object.freeze([]),e,t)}Fo.BREAK=Mo,Fo.SKIP=No,Fo.REMOVE=Po,Fo.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},Fo.parentCollection=(e,t)=>{let n=Fo.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function Io(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=Io(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===Mo)return Mo;else r===Po&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function Lo(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function Ro(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var zo=new Set(`0123456789ABCDEFabcdef`),Bo=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),Vo=new Set(`,[]{}`),Ho=new Set(` ,[]{}
\r	`),Uo=e=>!e||Ho.has(e),Wo=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`||t===`\r`&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&Ro(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&Ro(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ro(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&Ro(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,`block-start`}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(Uo),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&Ro(r[3]))&&(n!==this.indentNext-1||this.flowLevel!==1||r[0]!==`]`&&r[0]!==`}`))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(Uo),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||Ro(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>Ro(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.indentNext=this.blockScalarIndent===-1?t:this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(!0);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(Ro(r)||e&&Vo.has(r))break;t=n}else if(Ro(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&Vo.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&Vo.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){let e=0;loop:for(;;){switch(this.charAt(0)){case`!`:e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue loop;case`&`:e+=yield*this.pushUntil(Uo),e+=yield*this.pushSpaces(!0);continue loop;case`-`:case`?`:case`:`:{let t=this.flowLevel>0,n=this.charAt(1);if(Ro(n)||t&&Vo.has(n)){t?this.flowKey&&=!1:this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue loop}}}break loop}return e}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!Ro(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Bo.has(t))t=this.buffer[++e];else if(t===`%`&&zo.has(this.buffer[e+1])&&zo.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},Go=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function Ko(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function qo(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function Jo(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function Yo(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function Xo(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function Zo(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function Qo(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!Ko(t.start,`explicit-key-ind`)&&!Ko(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,Jo(t.value)?t.value.end?Zo(t.value.end,t.sep):t.value.end=t.sep:Zo(t.start,t.sep),delete t.sep)}var $o=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new Wo,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=Lo(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&Qo(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&qo(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:qo(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=Xo(Yo(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Zo(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey){if(!t.sep){if(Ko(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=Xo(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ko(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(Jo(t.key)&&!Ko(t.sep,`newline`)){let e=Xo(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken)}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Ko(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!Ko(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Zo(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||Ko(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=Xo(Yo(t));Qo(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=Xo(Yo(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=Xo(Yo(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function es(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Go||null,prettyErrors:t}}function ts(e,t={}){let{lineCounter:n,prettyErrors:r}=es(t),i=new $o(n?.addNewLine),a=new H(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new Za(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach($a(e,n)),o.warnings.forEach($a(e,n))),o}function ns(e,t,n){let r;typeof t==`function`?r=t:n===void 0&&t&&typeof t==`object`&&(n=t);let i=ts(e,n);if(!i)return null;if(i.warnings.forEach(e=>ji(i.options.logLevel,e)),i.errors.length>0){if(i.options.logLevel!==`silent`)throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:r},n))}var rs=class extends Error{};function is(){return{events:new Map,systems:new Map,souls:new Map,locations:new Map}}function as(e){let t=is();for(let n of e){let e;try{e=ns(n.text)}catch(e){throw new rs(`${n.path} YAML 解析失败：${e.message}`)}if(!e||typeof e!=`object`)continue;let r=(e,t,r)=>{for(let i of e??[]){if(!i?.id)throw new rs(`${n.path} 存在缺少 id 的${r}`);if(t.has(i.id))throw new rs(`${n.path} ${r} id 重复：${i.id}`);t.set(i.id,i)}};r(e.events,t.events,`事件`),r(e.systems,t.systems,`系统`),r(e.souls,t.souls,`残魂`),r(e.locations,t.locations,`地点`)}return t}var os=Object.assign({"../../content/events/act1-core.yaml":Yn,"../../content/events/act1-daily.yaml":Xn,"../../content/events/act1-more.yaml":Zn,"../../content/events/act2-core.yaml":Qn,"../../content/events/act2-daily.yaml":$n,"../../content/events/act2-more.yaml":er,"../../content/events/act2-spine.yaml":tr,"../../content/events/act3-core.yaml":nr,"../../content/events/act3-daily.yaml":rr,"../../content/events/act3-spine.yaml":ir,"../../content/events/act4-core.yaml":ar,"../../content/events/act4-daily.yaml":or,"../../content/events/act5-core.yaml":sr,"../../content/events/chance-pool.yaml":cr,"../../content/events/expose-crisis.yaml":lr,"../../content/events/gf-sect.yaml":ur,"../../content/events/gf-wild.yaml":dr,"../../content/events/masters.yaml":fr,"../../content/events/origin-baigu.yaml":pr,"../../content/events/origin-fudao-juelin.yaml":mr,"../../content/events/origin-nanjiang.yaml":hr,"../../content/events/origin-wangxiang.yaml":gr,"../../content/events/prologues.yaml":_r,"../../content/events/souls-fate.yaml":vr,"../../content/events/stepdown-act1.yaml":yr,"../../content/souls/mvp.yaml":br,"../../content/souls-extra/souls2.yaml":xr,"../../content/systems/mvp.yaml":Sr}),ss=null;function cs(){return ss||(ss=as(Object.entries(os).map(([e,t])=>({path:e,text:t})).sort((e,t)=>e.path.localeCompare(t.path))),ss)}function ls(){return{version:1,registry:Yt(),steles:[]}}function us(e){if(!e)return ls();try{let t=JSON.parse(e);return t.version!==1||!t.registry||!Array.isArray(t.steles)?ls():t}catch{return ls()}}function ds(e){let t={};for(let n of e.steles)t[n.grade]=(t[n.grade]??0)+1;return t}var fs=`cangfeng-save-v1`;function ps(){try{return us(localStorage.getItem(fs))}catch{return ls()}}function ms(e){try{localStorage.setItem(fs,JSON.stringify(e))}catch{}}var hs=`cangfeng-run-v1`;function gs(e,t){try{localStorage.setItem(hs,JSON.stringify({snap:e,pov:t,savedAt:Date.now()}))}catch{}}function _s(){try{let e=localStorage.getItem(hs);if(!e)return null;let t=JSON.parse(e);return!t?.snap||t.snap.v!==1?null:t}catch{return null}}function vs(){localStorage.removeItem(hs)}var ys=`<svg viewBox="0 0 390 420" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="cov_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="0.42" stop-color="#101624"/>
      <stop offset="0.78" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="cov_dawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0"/>
      <stop offset="0.62" stop-color="#d9b36a" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0.3"/>
    </linearGradient>
    <radialGradient id="cov_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/>
      <stop offset="0.45" stop-color="#f2d795" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cov_moon" cx="0.42" cy="0.38" r="0.72">
      <stop offset="0" stop-color="#f7ecc9"/>
      <stop offset="0.55" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </radialGradient>
    <linearGradient id="cov_m1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#33405a"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="cov_m2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#253048"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="cov_m3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="cov_m4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="cov_m5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="cov_mist" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#9fb0c8" stop-opacity="0.11"/>
      <stop offset="0.7" stop-color="#9fb0c8" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#9fb0c8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect x="0" y="0" width="390" height="420" fill="url(#cov_sky)"/>

  <g>
    <circle cx="24" cy="36" r="1" fill="#f2d795" opacity="0.7"/>
    <circle cx="58" cy="120" r="0.7" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="90" cy="58" r="0.8" fill="#f2d795" opacity="0.55"/>
    <circle cx="128" cy="158" r="0.9" fill="#f2d795" opacity="0.6"/>
    <circle cx="166" cy="118" r="0.7" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="206" cy="64" r="1.1" fill="#f2d795" opacity="0.65"/>
    <circle cx="238" cy="150" r="0.8" fill="#e7e0cf" opacity="0.55"/>
    <circle cx="256" cy="32" r="0.7" fill="#f2d795" opacity="0.5"/>
    <circle cx="348" cy="44" r="1" fill="#f2d795" opacity="0.7"/>
    <circle cx="368" cy="132" r="0.8" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="20" cy="176" r="0.7" fill="#f2d795" opacity="0.45"/>
    <circle cx="74" cy="182" r="1.1" fill="#f2d795" opacity="0.6"/>
    <circle cx="300" cy="178" r="0.9" fill="#e7e0cf" opacity="0.55"/>
    <circle cx="338" cy="168" r="0.7" fill="#f2d795" opacity="0.45"/>
    <circle cx="150" cy="190" r="0.9" fill="#7fd4b2" opacity="0.5"/>
  </g>

  <circle cx="300" cy="96" r="62" fill="url(#cov_halo)"/>
  <circle cx="300" cy="96" r="21" fill="url(#cov_moon)"/>

  <rect x="0" y="190" width="390" height="48" fill="url(#cov_dawn)"/>

  <path d="M0,240 Q28,218 60,230 Q95,206 130,224 Q165,200 200,218 Q235,204 262,220 Q300,202 330,222 Q362,212 390,228 L390,420 L0,420 Z" fill="url(#cov_m1)"/>

  <path d="M0,290 Q35,258 75,276 Q115,250 155,270 Q195,246 240,268 Q280,252 320,272 Q355,258 390,276 L390,420 L0,420 Z" fill="url(#cov_m2)"/>

  <ellipse cx="110" cy="290" rx="145" ry="10" fill="url(#cov_mist)"/>
  <ellipse cx="310" cy="282" rx="110" ry="8" fill="url(#cov_mist)"/>

  <path d="M0,330 Q40,306 80,320 Q112,300 134,276 Q147,252 152,246 Q157,252 172,282 Q198,306 235,318 Q275,298 315,316 Q350,304 390,320 L390,420 L0,420 Z" fill="url(#cov_m3)"/>

  <g fill="#0a0e15">
    <circle cx="152" cy="236.8" r="1.6"/>
    <path d="M150.9,238.6 Q150,242.4 149,246.4 L155,246.4 Q154.1,242.4 153.1,238.6 Z"/>
    <path d="M155.2,238.2 L156.4,246.4 L155.6,246.4 L154.6,238.6 Z"/>
  </g>

  <ellipse cx="190" cy="330" rx="160" ry="10" fill="url(#cov_mist)"/>

  <path d="M0,376 Q50,348 100,364 Q150,342 205,362 Q255,344 305,360 Q350,348 390,362 L390,420 L0,420 Z" fill="url(#cov_m4)"/>

  <ellipse cx="180" cy="374" rx="175" ry="11" fill="url(#cov_mist)"/>

  <path d="M0,404 Q60,388 130,400 Q210,386 280,398 Q340,388 390,398 L390,420 L0,420 Z" fill="url(#cov_m5)"/>
</svg>`,bs=`<svg viewBox="0 0 390 80" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="cov_b_r1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="cov_b_r2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="cov_b_mist" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#9fb0c8" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#9fb0c8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <circle cx="52" cy="16" r="0.8" fill="#f2d795" opacity="0.45"/>
  <circle cx="212" cy="10" r="0.7" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="336" cy="20" r="0.9" fill="#f2d795" opacity="0.5"/>

  <path d="M0,46 Q60,34 120,44 Q190,28 250,42 Q320,32 390,44 L390,80 L0,80 Z" fill="url(#cov_b_r1)"/>
  <path d="M0,46 Q60,34 120,44 Q190,28 250,42 Q320,32 390,44" fill="none" stroke="#d9b36a" stroke-width="0.8" stroke-opacity="0.16"/>

  <ellipse cx="195" cy="46" rx="185" ry="9" fill="url(#cov_b_mist)"/>

  <path d="M0,62 Q80,52 160,60 Q250,50 320,58 Q360,54 390,60 L390,80 L0,80 Z" fill="url(#cov_b_r2)"/>
</svg>`,xs={tianshu:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_tianshu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="0.7" stop-color="#131a28"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_tianshu_glow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.55"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_tianshu_sky)"/>
  <circle cx="30" cy="18" r="0.9" fill="#f2d795" opacity="0.5"/>
  <circle cx="74" cy="10" r="0.7" fill="#f2d795" opacity="0.38"/>
  <circle cx="132" cy="8" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="205" cy="14" r="0.9" fill="#f2d795" opacity="0.46"/>
  <circle cx="178" cy="26" r="0.6" fill="#f2d795" opacity="0.3"/>
  <path d="M0,70 L34,54 L62,66 L96,50 L128,63 L168,52 L204,64 L240,56 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,82 L20,82 L20,74 L34,74 L34,82 L56,82 L56,66 L52,66 L65,53 L78,66 L74,66 L74,82 L100,82 L100,72 L118,72 L118,82 L148,82 L148,62 L144,62 L157,46 L170,62 L166,62 L166,82 L196,82 L196,75 L214,75 L214,82 L240,82 L240,110 Z" fill="#253048"/>
  <path d="M0,110 L0,93 L28,93 L34,87 L58,87 L64,93 L108,93 L114,85 L146,85 L152,93 L198,93 L204,88 L240,88 L240,110 Z" fill="#131a28"/>
  <circle cx="130" cy="90" r="9" fill="url(#bp_tianshu_glow)"/>
  <circle cx="130" cy="90" r="1.5" fill="#f2d795"/>
  <path d="M0,110 L0,102 Q60,97 120,101 Q180,105 240,100 L240,110 Z" fill="#0d1117"/>
</svg>`,yaowang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_yaowang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1c2740"/>
    </linearGradient>
    <radialGradient id="bp_yaowang_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_yaowang_sky)"/>
  <circle cx="38" cy="14" r="0.8" fill="#f2d795" opacity="0.42"/>
  <circle cx="96" cy="10" r="0.6" fill="#f2d795" opacity="0.34"/>
  <circle cx="130" cy="22" r="0.7" fill="#f2d795" opacity="0.38"/>
  <circle cx="206" cy="12" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="163" cy="26" r="15" fill="url(#bp_yaowang_moonglow)"/>
  <path d="M163.5,18.2 A9,9 0 0 0 163.5,33.8 Q160.5,26 163.5,18.2 Z" fill="#f2d795" opacity="0.95"/>
  <path d="M55,110 L55,70 L92,52 L122,62 L152,48 L188,64 L188,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,16 Q34,34 62,62 Q84,84 108,98 L108,110 Z" fill="#1a2334"/>
  <path d="M240,110 L240,26 Q210,42 184,66 Q162,86 140,99 L140,110 Z" fill="#1a2334"/>
  <path d="M0,110 L0,104 Q120,88 240,102 L240,110 Z" fill="#131a28"/>
  <path d="M90,97 Q124,91 156,96" fill="none" stroke="#7fd4b2" stroke-width="0.8" opacity="0.22"/>
  <path d="M78,101 Q120,93 168,100" fill="none" stroke="#7fd4b2" stroke-width="0.8" opacity="0.18"/>
  <path d="M64,105 Q120,97 180,104" fill="none" stroke="#2e3b52" stroke-width="0.9" opacity="0.8"/>
</svg>`,huoshan:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_huoshan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_huoshan_lava">
      <stop offset="0" stop-color="#e8794a" stop-opacity="0.9"/><stop offset="0.55" stop-color="#b3532f" stop-opacity="0.5"/><stop offset="1" stop-color="#b3532f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_huoshan_sky)"/>
  <circle cx="34" cy="16" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="66" cy="30" r="0.6" fill="#f2d795" opacity="0.3"/>
  <circle cx="196" cy="18" r="0.8" fill="#f2d795" opacity="0.42"/>
  <circle cx="222" cy="34" r="0.6" fill="#f2d795" opacity="0.3"/>
  <path d="M0,86 L48,72 L92,80 L150,70 L200,80 L240,74 L240,110 L0,110 Z" fill="#2e3b52"/>
  <ellipse cx="116" cy="41" rx="14" ry="7" fill="url(#bp_huoshan_lava)"/>
  <path d="M62,110 L102,46 L108,40 L113,44 L119,44 L124,38 L131,46 L178,110 Z" fill="#131a28"/>
  <path d="M104,45 L108,41 L113,44.5 L119,44.5 L124,39" fill="none" stroke="#e07048" stroke-width="1" opacity="0.85"/>
  <circle cx="114" cy="28" r="1" fill="#e8794a" opacity="0.9"/>
  <circle cx="121" cy="20" r="0.8" fill="#e8965a" opacity="0.7"/>
  <circle cx="110" cy="13" r="0.6" fill="#e8965a" opacity="0.5"/>
  <path d="M0,110 L0,74 Q36,66 78,92 L98,110 Z" fill="#253048"/>
  <path d="M240,110 L240,80 Q206,72 172,94 L160,110 Z" fill="#253048"/>
  <path d="M0,110 L0,100 Q120,92 240,101 L240,110 Z" fill="#0d1117"/>
</svg>`,jianzhong:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_jianzhong_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#182132"/>
    </linearGradient>
    <radialGradient id="bp_jianzhong_moon">
      <stop offset="0" stop-color="#fbf3dd"/><stop offset="0.6" stop-color="#f2d795"/><stop offset="1" stop-color="#e6c684"/>
    </radialGradient>
    <radialGradient id="bp_jianzhong_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.28"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_jianzhong_sky)"/>
  <circle cx="36" cy="14" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="150" cy="20" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="216" cy="14" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="188" cy="34" r="0.5" fill="#f2d795" opacity="0.28"/>
  <circle cx="96" cy="22" r="16" fill="url(#bp_jianzhong_moonglow)"/>
  <circle cx="96" cy="22" r="7.5" fill="url(#bp_jianzhong_moon)"/>
  <path d="M0,110 L0,78 L60,77 L140,75 L240,77 L240,110 Z" fill="#253048"/>
  <g fill="#2e3b52" transform="rotate(10 190 76)">
    <circle cx="190" cy="50.5" r="1.5"/>
    <rect x="189.2" y="52" width="1.6" height="4"/>
    <rect x="185.5" y="56" width="9" height="1.8"/>
    <path d="M188,58 L192,58 L190.8,78 L189.2,78 Z"/>
  </g>
  <g fill="#2e3b52" transform="rotate(-12 214 77)">
    <circle cx="214" cy="58" r="1.2"/>
    <rect x="213.3" y="59.5" width="1.4" height="3"/>
    <rect x="210.5" y="62.5" width="7" height="1.6"/>
    <path d="M212.4,64 L215.6,64 L214.6,79 L213.4,79 Z"/>
  </g>
  <path d="M0,110 L0,90 Q80,84 150,88 Q200,90 240,86 L240,110 Z" fill="#1a2334"/>
  <g fill="#0d1117" transform="rotate(-9 150 86)">
    <circle cx="150" cy="36" r="2.2"/>
    <rect x="148.9" y="38.5" width="2.2" height="5.5"/>
    <rect x="143.5" y="44" width="13" height="2.2"/>
    <path d="M147,46.5 L153,46.5 L151.4,88 L148.6,88 Z"/>
  </g>
  <g fill="#0d1117" transform="rotate(12 40 98)">
    <circle cx="40" cy="20" r="3"/>
    <rect x="38.6" y="23" width="2.8" height="7"/>
    <rect x="32" y="30" width="16" height="2.8"/>
    <path d="M36.2,33 L43.8,33 L41.6,100 L38.4,100 Z"/>
  </g>
  <path d="M0,110 L0,101 Q120,95 240,100 L240,110 Z" fill="#0d1117"/>
</svg>`,bingyuan:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_bingyuan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#162032"/>
    </linearGradient>
    <radialGradient id="bp_bingyuan_ice" cx="0.5" cy="1" r="1">
      <stop offset="0" stop-color="#9fe8c8" stop-opacity="0.85"/><stop offset="0.5" stop-color="#7fd4b2" stop-opacity="0.4"/><stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_bingyuan_sky)"/>
  <circle cx="42" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="120" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="188" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="222" cy="28" r="0.5" fill="#f2d795" opacity="0.26"/>
  <path d="M0,76 L22,58 L40,68 L66,52 L88,64 L112,50 L134,62 L160,48 L184,62 L214,54 L240,64 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,82 Q60,76 120,80 Q180,76 240,82 L240,110 Z" fill="#253048"/>
  <path d="M120,80 L115,90 L121,98 L114,106 L117,110 L133,110 L127,102 L132,92 L125,86 L128,80 Z" fill="url(#bp_bingyuan_ice)"/>
  <ellipse cx="124" cy="84" rx="26" ry="12" fill="url(#bp_bingyuan_ice)" opacity="0.28"/>
  <path d="M0,110 L0,82 Q44,77 82,81 L104,79 L120,80 L115,90 L121,98 L114,106 L117,110 Z" fill="#131a28"/>
  <path d="M240,110 L240,80 Q198,75 162,80 L142,79 L128,80 L125,86 L132,92 L127,102 L133,110 Z" fill="#1a2334"/>
  <path d="M124,82 L119,92 L124,100 L118,108" fill="none" stroke="#9fe8c8" stroke-width="1" opacity="0.55"/>
  <path d="M120,80 L115,90 L121,98 L114,106 L117,110" fill="none" stroke="#7fd4b2" stroke-width="0.7" opacity="0.45"/>
  <path d="M128,80 L125,86 L132,92 L127,102 L133,110" fill="none" stroke="#7fd4b2" stroke-width="0.7" opacity="0.28"/>
</svg>`,nanjiang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_nanjiang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_nanjiang_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_nanjiang_fog" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0"/><stop offset="0.5" stop-color="#8d97a9" stop-opacity="0.16"/><stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_nanjiang_sky)"/>
  <circle cx="60" cy="14" r="0.6" fill="#f2d795" opacity="0.3"/>
  <circle cx="210" cy="18" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="150" cy="26" r="16" fill="url(#bp_nanjiang_moonglow)"/>
  <circle cx="150" cy="26" r="5.5" fill="#f2d795" opacity="0.5"/>
  <path d="M0,58 Q20,44 42,56 Q64,40 88,54 Q112,38 136,52 Q160,40 184,52 Q208,42 228,54 Q234,56 240,52 L240,110 L0,110 Z" fill="#2e3b52"/>
  <rect x="0" y="50" width="240" height="16" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,72 Q28,56 56,70 Q86,52 116,68 Q146,54 176,68 Q204,56 240,70 L240,110 L0,110 Z" fill="#253048"/>
  <rect x="0" y="64" width="240" height="18" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,88 Q34,70 68,86 Q104,68 140,84 Q176,70 208,86 Q224,78 240,88 L240,110 L0,110 Z" fill="#1a2334"/>
  <rect x="0" y="82" width="240" height="20" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,110 L0,100 Q48,88 96,100 Q150,88 200,102 Q220,96 240,100 L240,110 Z" fill="#131a28"/>
  <path d="M0,110 L0,106 Q120,98 240,106 L240,110 Z" fill="#0d1117"/>
</svg>`,wangxiang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_wangxiang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1c2536"/>
    </linearGradient>
    <linearGradient id="bp_wangxiang_river" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101724"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="bp_wangxiang_lamp">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_wangxiang_refl" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.45"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_wangxiang_sky)"/>
  <circle cx="46" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="110" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="174" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="216" cy="26" r="0.5" fill="#f2d795" opacity="0.28"/>
  <path d="M0,66 Q40,52 80,62 Q130,48 180,60 Q212,54 240,60 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,86 L0,74 L8,74 L8,70 L24,70 L24,74 L32,74 L30,66 L44,58 L58,66 L56,74 L66,74 L66,69 L80,69 L80,74 L88,74 L86,68 L98,61 L110,68 L108,74 L122,74 L122,78 L134,78 L132,72 L142,66 L152,72 L150,78 L168,78 L168,74 L182,74 L182,78 L196,78 L196,80 L240,80 L240,86 Z" fill="#1a2334"/>
  <rect x="41.5" y="63" width="3" height="4" fill="#d9b36a" opacity="0.7"/>
  <path d="M0,88 L0,84 Q120,80 240,83 L240,88 Z" fill="#131a28"/>
  <rect x="0" y="86" width="240" height="24" fill="url(#bp_wangxiang_river)"/>
  <rect x="30" y="92" width="22" height="1" fill="#2e3b52" opacity="0.35"/>
  <rect x="128" y="97" width="30" height="1" fill="#2e3b52" opacity="0.3"/>
  <rect x="196" y="93" width="18" height="1" fill="#2e3b52" opacity="0.3"/>
  <circle cx="76" cy="95" r="6" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="76" cy="95" r="1.3" fill="#f2d795"/>
  <rect x="75.4" y="97" width="1.2" height="8" fill="url(#bp_wangxiang_refl)"/>
  <circle cx="118" cy="100" r="6" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="118" cy="100" r="1.3" fill="#f2d795"/>
  <rect x="117.4" y="102" width="1.2" height="7" fill="url(#bp_wangxiang_refl)"/>
  <circle cx="160" cy="93" r="5" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="160" cy="93" r="1.1" fill="#f2d795"/>
  <rect x="159.5" y="95" width="1" height="9" fill="url(#bp_wangxiang_refl)"/>
</svg>`,baigu:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_baigu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#192132"/>
    </linearGradient>
    <radialGradient id="bp_baigu_star">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_baigu_sky)"/>
  <circle cx="66" cy="20" r="9" fill="url(#bp_baigu_star)"/>
  <rect x="65.4" y="12" width="1.2" height="16" fill="#f2d795" opacity="0.32"/>
  <rect x="58" y="19.4" width="16" height="1.2" fill="#f2d795" opacity="0.32"/>
  <circle cx="66" cy="20" r="1.5" fill="#f2d795"/>
  <path d="M0,110 L0,80 L80,77 L160,79 L240,76 L240,110 Z" fill="#253048"/>
  <path d="M58,93 Q60,76 74,73" fill="none" stroke="#131a28" stroke-width="2.5" opacity="0.9"/>
  <path d="M76,93 Q78,78 90,75" fill="none" stroke="#131a28" stroke-width="2" opacity="0.85"/>
  <path d="M0,110 L0,92 Q60,84 120,90 Q180,84 240,90 L240,110 Z" fill="#1a2334"/>
  <path fill-rule="evenodd" d="M146,92 Q142,60 158,48 L150,32 L165,44 Q196,36 212,58 Q220,70 214,92 L202,92 Q210,72 202,60 Q190,50 172,56 Q158,64 158,92 Z M185,48.5 a4,3 0 1 0 8,0 a4,3 0 1 0 -8,0 Z" fill="#0d1117"/>
  <path d="M0,110 L0,102 Q120,96 240,102 L240,110 Z" fill="#0d1117"/>
</svg>`,fudao:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_fudao_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bp_fudao_sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#212c42"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="bp_fudao_moon">
      <stop offset="0" stop-color="#fdf4dc"/><stop offset="1" stop-color="#f2d795"/>
    </radialGradient>
    <radialGradient id="bp_fudao_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.32"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_fudao_path" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.4"/><stop offset="1" stop-color="#f2d795" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_fudao_sky)"/>
  <circle cx="34" cy="16" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="86" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="150" cy="12" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="222" cy="18" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="120" cy="22" r="16" fill="url(#bp_fudao_moonglow)"/>
  <circle cx="120" cy="22" r="7" fill="url(#bp_fudao_moon)"/>
  <path d="M44,39 Q58,35 72,39 L67,41 L63,47 L58,41 L52,43 L48,40 Z" fill="#2e3b52"/>
  <path d="M156,34 Q182,29 208,34 L202,36 L198,44 L192,38 L188,52 L183,40 L176,44 L170,36 L162,35 Z" fill="#1a2334"/>
  <circle cx="188" cy="58" r="1.5" fill="#1a2334"/>
  <circle cx="185" cy="64" r="1" fill="#1a2334"/>
  <rect x="0" y="72" width="240" height="38" fill="url(#bp_fudao_sea)"/>
  <path d="M38,72 Q52,64 66,72 Z" fill="#2e3b52"/>
  <path d="M196,72 Q210,65 224,72 Z" fill="#2e3b52"/>
  <path d="M113,72 L127,72 L136,110 L104,110 Z" fill="url(#bp_fudao_path)"/>
  <rect x="110" y="78" width="20" height="1" fill="#f2d795" opacity="0.4"/>
  <rect x="106" y="86" width="28" height="1.2" fill="#f2d795" opacity="0.28"/>
  <rect x="100" y="97" width="36" height="1.4" fill="#f2d795" opacity="0.16"/>
</svg>`,juelin:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_juelin_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#141a26"/>
    </linearGradient>
    <linearGradient id="bp_juelin_mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0"/><stop offset="0.5" stop-color="#8d97a9" stop-opacity="0.05"/><stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_juelin_sky)"/>
  <circle cx="76" cy="26" r="7" fill="#8d97a9" opacity="0.16"/>
  <path d="M0,64 L20,56 L34,56 L52,62 L74,50 L92,50 L108,60 L132,54 L148,54 L166,62 L190,52 L210,52 L228,60 L240,58 L240,110 L0,110 Z" fill="#253048"/>
  <path d="M0,80 L26,70 L48,70 L66,78 L96,66 L118,66 L142,76 L170,68 L192,68 L216,78 L240,74 L240,110 L0,110 Z" fill="#1a2334"/>
  <rect x="0" y="76" width="240" height="14" fill="url(#bp_juelin_mist)"/>
  <g stroke="#0d1117" stroke-width="1.3" fill="none">
    <path d="M150,86 L150,68"/>
    <path d="M150,78 L142,69"/>
    <path d="M150,73 L158,66"/>
    <path d="M142,69 L138,63"/>
  </g>
  <path d="M0,96 L36,86 L60,86 L84,94 L120,84 L150,84 L178,92 L206,86 L240,90 L240,110 L0,110 Z" fill="#131a28"/>
  <path d="M0,110 L0,104 Q120,98 240,104 L240,110 Z" fill="#0d1117"/>
</svg>`,random:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_random_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_random_glow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.14"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_random_sky)"/>
  <circle cx="34" cy="20" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="76" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="200" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="226" cy="36" r="0.5" fill="#f2d795" opacity="0.28"/>
  <circle cx="140" cy="44" r="40" fill="url(#bp_random_glow)"/>
  <g transform="rotate(-18 112 52)">
    <ellipse cx="112" cy="52" rx="7.5" ry="5" fill="#131a28" stroke="#d9b36a" stroke-width="1" opacity="0.95"/>
    <rect x="109" y="49.8" width="6" height="4.4" fill="none" stroke="#a9853f" stroke-width="0.9"/>
  </g>
  <circle cx="140" cy="34" r="8" fill="#131a28" stroke="#d9b36a" stroke-width="1.2"/>
  <rect x="136.8" y="30.8" width="6.4" height="6.4" fill="none" stroke="#d9b36a" stroke-width="1"/>
  <g transform="rotate(14 166 56)">
    <ellipse cx="166" cy="56" rx="7" ry="5.4" fill="#131a28" stroke="#d9b36a" stroke-width="1" opacity="0.95"/>
    <rect x="163.2" y="53.6" width="5.6" height="4.8" fill="none" stroke="#a9853f" stroke-width="0.9"/>
  </g>
  <circle cx="128" cy="22" r="0.7" fill="#f2d795" opacity="0.6"/>
  <circle cx="156" cy="42" r="0.6" fill="#f2d795" opacity="0.55"/>
  <path d="M104,110 L109,93 Q110,88 115,86 L111,81 L116,83 Q117,77 120,82 L122,76 L125,82 L128,77 L131,83 L135,79 L136,86 Q134,90 128,91 Q119,93 116,98 L115,110 Z" fill="#0d1117"/>
</svg>`},Ss={冲突:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_chongtu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_chongtu_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_chongtu_rift" cx="0.5" cy="0.3" r="0.7">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="0.55" stop-color="#a9853f" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_chongtu_sky)"/>
  <circle cx="48" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="120" cy="9" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="238" cy="13" r="0.7" fill="#f2d795" opacity="0.34"/>
  <circle cx="284" cy="7" r="0.5" fill="#f2d795" opacity="0.24"/>
  <circle cx="332" cy="20" r="0.8" fill="#f2d795" opacity="0.38"/>
  <path d="M0,52 C60,42 130,52 195,47 C262,42 330,51 390,45 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M0,62 C80,54 160,63 235,57 C300,52 350,60 390,57 L390,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="195" cy="66" rx="78" ry="10" fill="#2e3b52" opacity="0.16"/>
  <path d="M0,70 L390,70 L390,90 L0,90 Z" fill="url(#bn_chongtu_ground)"/>
  <ellipse cx="195" cy="76" rx="46" ry="13" fill="url(#bn_chongtu_rift)"/>
  <path d="M195,70 L199,74 L190,78 L201,82 L193,86 L197,90" fill="none" stroke="#d9b36a" stroke-opacity="0.15" stroke-width="3" stroke-linejoin="round"/>
  <path d="M195,70 L199,74 L190,78 L201,82 L193,86 L197,90" fill="none" stroke="#a9853f" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M199,74 L207,76.5 M190,78 L181,81" fill="none" stroke="#a9853f" stroke-opacity="0.4" stroke-width="0.8"/>
  <circle cx="112" cy="55.6" r="2.7" fill="#0d1117"/>
  <path d="M109.5,58 C108.7,61.8 107.5,66 106.3,70.4 L117.7,70.4 C116.5,66 115.3,61.8 114.5,58 Z" fill="#0d1117"/>
  <path d="M116.2,61.5 L121.5,70.8" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="278" cy="55.6" r="2.7" fill="#0d1117"/>
  <path d="M280.5,58 C281.3,61.8 282.5,66 283.7,70.4 L272.3,70.4 C273.5,66 274.7,61.8 275.5,58 Z" fill="#0d1117"/>
  <path d="M273.8,61.5 L268.5,70.8" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,机缘:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_jiyuan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_jiyuan_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_jiyuan_cave" cx="0.5" cy="1" r="0.95">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.92"/>
      <stop offset="0.35" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.7" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_jiyuan_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bn_jiyuan_beam" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_jiyuan_sky)"/>
  <circle cx="36" cy="14" r="0.7" fill="#f2d795" opacity="0.34"/>
  <circle cx="96" cy="8" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="150" cy="18" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="208" cy="10" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="252" cy="22" r="0.7" fill="#f2d795" opacity="0.3"/>
  <path d="M0,48 C70,38 150,50 230,43 C270,39 305,44 335,41 L335,90 L0,90 Z" fill="#253048"/>
  <path d="M0,60 C80,54 160,62 245,56 L245,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="140" cy="80" rx="115" ry="8" fill="#2e3b52" opacity="0.14"/>
  <path d="M0,78 L390,78 L390,90 L0,90 Z" fill="url(#bn_jiyuan_ground)"/>
  <path d="M232,90 C244,58 268,36 306,28 C340,22 370,20 390,20 L390,90 Z" fill="#131a28"/>
  <ellipse cx="317" cy="84" rx="42" ry="17" fill="url(#bn_jiyuan_halo)"/>
  <path d="M296,90 C296,72 304,60 317,58 C330,60 338,72 338,90 Z" fill="url(#bn_jiyuan_cave)"/>
  <polygon points="298,87 336,87 336,90 230,90" fill="url(#bn_jiyuan_beam)"/>
  <circle cx="256" cy="74.8" r="2.2" fill="#0d1117"/>
  <path d="M254,77 C253.4,80 252.8,83 252.2,86 L259.8,86 C259.2,83 258.6,80 258,77 Z" fill="#0d1117"/>
  <path d="M258.1,77.2 C258.7,80.1 259.3,83 259.8,86" fill="none" stroke="#d9b36a" stroke-opacity="0.45" stroke-width="0.7"/>
</svg>`,宗门:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_zongmen_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bn_zongmen_moonglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.26"/>
      <stop offset="0.55" stop-color="#f2d795" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_zongmen_moon" cx="0.42" cy="0.38" r="0.72">
      <stop offset="0" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </radialGradient>
    <linearGradient id="bn_zongmen_door" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_zongmen_sky)"/>
  <circle cx="110" cy="12" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="160" cy="20" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="230" cy="9" r="0.8" fill="#f2d795" opacity="0.36"/>
  <circle cx="300" cy="14" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="20" cy="42" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="58" cy="22" r="15" fill="url(#bn_zongmen_moonglow)"/>
  <circle cx="58" cy="22" r="6.5" fill="url(#bn_zongmen_moon)"/>
  <path d="M150,52 C230,36 320,24 390,22 L390,90 L150,90 Z" fill="#2e3b52"/>
  <path d="M306,38 Q330,28 354,38 Z" fill="#2e3b52"/>
  <path d="M306,38 C303.8,37.3 302.4,35.6 301.6,33.8 C303,35.2 304.8,36.4 307,37 Z" fill="#2e3b52"/>
  <path d="M354,38 C356.2,37.3 357.6,35.6 358.4,33.8 C357,35.2 355.2,36.4 353,37 Z" fill="#2e3b52"/>
  <path d="M316,38 L344,38 L344,50 L316,50 Z" fill="#2e3b52"/>
  <path d="M0,84 C80,78 160,70 235,60 C295,52 345,44 390,40 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M30,90 C90,87 138,84 162,82 M196,80 C214,74 226,69 236,66 M274,63 C292,58 304,53.5 316,50.5" fill="none" stroke="#2e3b52" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-dasharray="2.5 3.2"/>
  <path d="M234,53 L270,53 L270,66 L234,66 Z" fill="#1a2334"/>
  <path d="M224,53 Q252,41 280,53 Z" fill="#1a2334"/>
  <path d="M224,53 C221.6,52.2 220,50.2 219.2,48.2 C220.8,49.8 222.8,51.2 225.2,51.9 Z" fill="#1a2334"/>
  <path d="M280,53 C282.4,52.2 284,50.2 284.8,48.2 C283.2,49.8 281.2,51.2 278.8,51.9 Z" fill="#1a2334"/>
  <circle cx="252" cy="45.6" r="1.2" fill="#1a2334"/>
  <circle cx="245" cy="58.5" r="1" fill="#d9b36a" opacity="0.5"/>
  <circle cx="259" cy="58.5" r="1" fill="#d9b36a" opacity="0.5"/>
  <path d="M146,66 L190,66 L190,82 L146,82 Z" fill="#131a28"/>
  <path d="M132,66 Q168,50 204,66 Z" fill="#131a28"/>
  <path d="M132,66 C129,65 127,62.5 126,60 C128,62 130.5,64 133.5,64.8 Z" fill="#131a28"/>
  <path d="M204,66 C207,65 209,62.5 210,60 C208,62 205.5,64 202.5,64.8 Z" fill="#131a28"/>
  <circle cx="168" cy="56.4" r="1.5" fill="#131a28"/>
  <rect x="165" y="69" width="6" height="13" fill="url(#bn_zongmen_door)"/>
  <circle cx="154" cy="72.5" r="1.1" fill="#d9b36a" opacity="0.5"/>
  <circle cx="182" cy="72.5" r="1.1" fill="#d9b36a" opacity="0.5"/>
</svg>`,山野:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_shanye_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_shanye_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="bn_shanye_lamp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </linearGradient>
    <radialGradient id="bn_shanye_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_shanye_sky)"/>
  <circle cx="30" cy="12" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="92" cy="20" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="158" cy="8" r="0.8" fill="#f2d795" opacity="0.36"/>
  <circle cx="226" cy="16" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="286" cy="9" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="352" cy="18" r="0.6" fill="#f2d795" opacity="0.26"/>
  <path d="M0,52 C70,44 140,52 210,47 C280,42 340,50 390,45 L390,90 L0,90 Z" fill="#2e3b52"/>
  <path d="M0,60 C90,54 170,62 260,56 C320,52 360,58 390,55 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M69.4,66 L69,57.5" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <ellipse cx="69" cy="53.6" rx="7.5" ry="4.6" fill="#131a28"/>
  <ellipse cx="62.5" cy="56.6" rx="4" ry="2.8" fill="#131a28"/>
  <path d="M0,68 C120,64.5 260,64.5 390,68 L390,90 L0,90 Z" fill="url(#bn_shanye_ground)"/>
  <path d="M0,74 C120,70.5 260,70.5 390,74" fill="none" stroke="#253048" stroke-opacity="0.6" stroke-width="1"/>
  <path d="M0,80 C130,75.5 260,75.5 390,80" fill="none" stroke="#253048" stroke-opacity="0.55" stroke-width="1"/>
  <path d="M0,86 C140,81 250,81 390,86" fill="none" stroke="#253048" stroke-opacity="0.5" stroke-width="1"/>
  <path d="M313,50.5 C315.5,44.5 311.5,39.5 314.5,32.5" fill="none" stroke="#2e3b52" stroke-opacity="0.35" stroke-width="1" stroke-linecap="round"/>
  <circle cx="302" cy="61.5" r="10" fill="url(#bn_shanye_glow)"/>
  <path d="M290,56 L316,56 L316,66.5 L290,66.5 Z" fill="#0d1117"/>
  <path d="M286,57 L303,47.5 L320,57 Z" fill="#0d1117"/>
  <rect x="299.2" y="59" width="5.6" height="5.2" rx="0.8" fill="url(#bn_shanye_lamp)"/>
</svg>`,心魔:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="bn_xinmo_sky" cx="0.5" cy="0.55" r="0.75">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </radialGradient>
    <linearGradient id="bn_xinmo_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_xinmo_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.2"/>
      <stop offset="0.6" stop-color="#7fd4b2" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_xinmo_sky)"/>
  <circle cx="60" cy="14" r="0.6" fill="#7fd4b2" opacity="0.26"/>
  <circle cx="140" cy="8" r="0.5" fill="#7fd4b2" opacity="0.22"/>
  <circle cx="250" cy="8" r="0.5" fill="#7fd4b2" opacity="0.22"/>
  <circle cx="330" cy="14" r="0.6" fill="#7fd4b2" opacity="0.26"/>
  <path d="M0,50 C65,42 130,56 195,49 C260,56 325,42 390,50 L390,90 L0,90 Z" fill="#1a2334"/>
  <path d="M0,62 C70,56 140,66 195,60 C250,66 320,56 390,62 L390,90 L0,90 Z" fill="#131a28"/>
  <ellipse cx="195" cy="60" rx="42" ry="23" fill="url(#bn_xinmo_glow)"/>
  <path d="M0,70 L390,70 L390,90 L0,90 Z" fill="url(#bn_xinmo_ground)"/>
  <ellipse cx="195" cy="64" rx="120" ry="4" fill="#7fd4b2" opacity="0.04"/>
  <ellipse cx="195" cy="72" rx="160" ry="7" fill="#7fd4b2" opacity="0.05"/>
  <ellipse cx="90" cy="80" rx="95" ry="6" fill="#2e3b52" opacity="0.25"/>
  <ellipse cx="300" cy="80" rx="95" ry="6" fill="#2e3b52" opacity="0.25"/>
  <circle cx="178" cy="48.6" r="2.9" fill="#0d1117"/>
  <path d="M175.3,51.6 C174.4,56.5 173.1,63.5 171.9,70.6 L184.1,70.6 C182.9,63.5 181.6,56.5 180.7,51.6 Z" fill="#0d1117"/>
  <circle cx="212" cy="48.6" r="2.9" fill="#0d1117" stroke="#7fd4b2" stroke-opacity="0.3" stroke-width="0.6"/>
  <path d="M214.7,51.6 C215.6,56.5 216.9,63.5 218.1,70.6 L205.9,70.6 C207.1,63.5 208.4,56.5 209.3,51.6 Z" fill="#0d1117" stroke="#7fd4b2" stroke-opacity="0.3" stroke-width="0.6"/>
  <ellipse cx="178" cy="73.5" rx="4.5" ry="1.5" fill="#7fd4b2" opacity="0.06"/>
  <ellipse cx="212" cy="73.5" rx="4.5" ry="1.5" fill="#7fd4b2" opacity="0.06"/>
</svg>`,秘境:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="bn_mijing_wall" cx="0.54" cy="0.6" r="0.9">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.55" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </radialGradient>
    <linearGradient id="bn_mijing_doorL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="bn_mijing_doorR" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="bn_mijing_gap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.1"/>
      <stop offset="0.5" stop-color="#7fd4b2" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0.85"/>
    </linearGradient>
    <radialGradient id="bn_mijing_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_mijing_spill" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_mijing_wall)"/>
  <path d="M60,30 L74,38 L68,52" fill="none" stroke="#253048" stroke-opacity="0.3" stroke-width="0.8"/>
  <path d="M330,44 L318,54 L326,68" fill="none" stroke="#253048" stroke-opacity="0.3" stroke-width="0.8"/>
  <rect x="164" y="18" width="16" height="72" fill="#131a28"/>
  <rect x="240" y="18" width="16" height="72" fill="#131a28"/>
  <path d="M156,20 L264,20 L256,6 L164,6 Z" fill="#131a28"/>
  <path d="M180,20 L209,23 L209,90 L180,90 Z" fill="url(#bn_mijing_doorL)"/>
  <path d="M240,20 L213,23 L213,90 L240,90 Z" fill="url(#bn_mijing_doorR)"/>
  <ellipse cx="211" cy="58" rx="11" ry="35" fill="url(#bn_mijing_halo)"/>
  <rect x="208.5" y="23" width="5" height="67" fill="url(#bn_mijing_gap)"/>
  <ellipse cx="211" cy="89" rx="30" ry="5" fill="url(#bn_mijing_spill)"/>
  <polygon points="208.5,88 213.5,88 228,90 194,90" fill="#7fd4b2" opacity="0.12"/>
  <path d="M172,0 C170,9 174,16 171,26 C169,34 172,40 170,47" fill="none" stroke="#0d1117" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M186,0 C188,8 184,15 187,24 C189,31 186,36 187,41" fill="none" stroke="#0d1117" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M203,0 C201,7 205,14 202,21" fill="none" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M226,0 C228,9 224,17 227,27 C229,35 226,42 228,50" fill="none" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M247,0 C245,8 249,16 246,25 C244,33 247,38 245,44" fill="none" stroke="#0d1117" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="170.5" cy="30" r="1.3" fill="#0d1117"/>
  <circle cx="169.6" cy="46" r="1.4" fill="#0d1117"/>
  <circle cx="187.4" cy="27" r="1.2" fill="#0d1117"/>
  <circle cx="187.2" cy="40.5" r="1.2" fill="#0d1117"/>
  <circle cx="202.2" cy="20.5" r="1.1" fill="#0d1117"/>
  <circle cx="227.4" cy="31" r="1.3" fill="#0d1117"/>
  <circle cx="227.8" cy="49" r="1.4" fill="#0d1117"/>
  <circle cx="245.4" cy="28" r="1.2" fill="#0d1117"/>
  <circle cx="245.2" cy="43.5" r="1.2" fill="#0d1117"/>
</svg>`,岔路:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_chalu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_chalu_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="bn_chalu_roadL" x1="1" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bn_chalu_roadR" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bn_chalu_stem" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0.72"/>
    </linearGradient>
    <radialGradient id="bn_chalu_lamp" cx="0.5" cy="0.45" r="0.6">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.9"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0.3"/>
    </radialGradient>
    <radialGradient id="bn_chalu_lampglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_chalu_sky)"/>
  <circle cx="44" cy="18" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="112" cy="10" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="196" cy="14" r="0.9" fill="#f2d795" opacity="0.42"/>
  <circle cx="262" cy="8" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="322" cy="16" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="366" cy="26" r="0.5" fill="#f2d795" opacity="0.22"/>
  <path d="M0,56 C80,50 170,58 250,52 C310,48 355,54 390,50 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M0,64 C90,59 180,66 270,61 C330,57 365,62 390,60 L390,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="195" cy="66" rx="125" ry="6" fill="#2e3b52" opacity="0.14"/>
  <path d="M0,68 L390,68 L390,90 L0,90 Z" fill="url(#bn_chalu_ground)"/>
  <polygon points="187,79 202,79 90,68.6 83,68.6" fill="url(#bn_chalu_roadL)"/>
  <polygon points="190,79 204,79 308,68.6 315,68.6" fill="url(#bn_chalu_roadR)"/>
  <polygon points="170,90 220,90 204,79 187,79" fill="url(#bn_chalu_stem)"/>
  <ellipse cx="78" cy="70" rx="44" ry="10" fill="#0d1117" opacity="0.55"/>
  <ellipse cx="320" cy="70" rx="44" ry="10" fill="#0d1117" opacity="0.55"/>
  <path d="M158,62 Q158,57 165,57 Q172,57 172,62 L172,80 L158,80 Z" fill="#0d1117"/>
  <path d="M154,79 L176,79 L177.5,83 L152.5,83 Z" fill="#0d1117"/>
  <circle cx="189" cy="71.5" r="9" fill="url(#bn_chalu_lampglow)"/>
  <path d="M181,83 L181,66" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M181,66 C184,64.4 186.5,64.4 189,66" fill="none" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M189,66 L189,68.4" stroke="#0d1117" stroke-width="0.8"/>
  <path d="M186.4,68.4 L191.6,68.4" stroke="#0d1117" stroke-width="1" stroke-linecap="round"/>
  <ellipse cx="189" cy="71.6" rx="3.1" ry="3.9" fill="url(#bn_chalu_lamp)"/>
</svg>`,命关:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_mingguan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.45" stop-color="#253048"/>
      <stop offset="0.62" stop-color="#2e3b52"/>
      <stop offset="0.8" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_cloud" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a9853f"/>
      <stop offset="0.5" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#a9853f"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_mingguan_sky)"/>
  <path d="M0,44 C30,50 60,40 95,46 C130,52 160,42 200,48 C240,54 275,44 310,50 C340,54 370,46 390,50 L390,0 L0,0 Z" fill="#1a2334"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42 L390,0 L0,0 Z" fill="url(#bn_mingguan_cloud)"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42" fill="none" stroke="#d9b36a" stroke-opacity="0.15" stroke-width="5"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42" fill="none" stroke="url(#bn_mingguan_gold)" stroke-opacity="0.9" stroke-width="1.3"/>
  <path d="M0,64 L390,64 L390,71 L0,71 Z" fill="#1a2334"/>
  <path d="M10,61.2 h5 v2.9 h-5 Z M40,61.2 h5 v2.9 h-5 Z M70,61.2 h5 v2.9 h-5 Z M100,61.2 h5 v2.9 h-5 Z M130,61.2 h5 v2.9 h-5 Z M160,61.2 h5 v2.9 h-5 Z M190,61.2 h5 v2.9 h-5 Z M220,61.2 h5 v2.9 h-5 Z M250,61.2 h5 v2.9 h-5 Z M340,61.2 h5 v2.9 h-5 Z M370,61.2 h5 v2.9 h-5 Z" fill="#1a2334"/>
  <path d="M290,52 L322,52 L322,64 L290,64 Z" fill="#1a2334"/>
  <path d="M284,52 Q306,44 328,52 Z" fill="#1a2334"/>
  <path d="M0,71 L390,71 L390,90 L0,90 Z" fill="url(#bn_mingguan_ground)"/>
  <ellipse cx="150" cy="80" rx="62" ry="8" fill="#2e3b52" opacity="0.18"/>
  <circle cx="150" cy="73.6" r="2.5" fill="#0d1117"/>
  <path d="M147.9,76.2 C147.2,79 146.6,81.8 146.1,84.6 L153.9,84.6 C153.4,81.8 152.8,79 152.1,76.2 Z" fill="#0d1117"/>
  <path d="M148,72.2 C149,71.1 151.6,71.2 152.6,72.6" fill="none" stroke="#d9b36a" stroke-opacity="0.5" stroke-width="0.8"/>
  <path d="M147.6,76.5 L152.4,76.5" stroke="#d9b36a" stroke-opacity="0.25" stroke-width="0.7"/>
</svg>`},Cs=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),U=e(((e,t)=>{t.exports=Cs()}))(),ws={你:`「亲历。好，最痛的活法，也最真。」`,我:`「自述么。将来那本书，就是你自己的口气了。」`,他:`「说书。也好——隔着一层看自己，有些事反而看得清。」`};function Ts(){return`世界-${Math.random().toString(36).slice(2,8)}`}function Es(e){let t=(0,l.useMemo)(()=>new URLSearchParams(location.search).get(`seed`)??``,[]),[n,r]=(0,l.useState)(`greet`),[i,a]=(0,l.useState)([]),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(`你`),[d,f]=(0,l.useState)(void 0),[p,m]=(0,l.useState)(``),[h,g]=(0,l.useState)(t),[_,v]=(0,l.useState)(``),y=(0,l.useRef)(null),b=e.save.registry,x=(0,l.useMemo)(()=>[...Qt(b,O.maxTier),...$t(b),...tn(b),...en(b)].slice(0,2),[b]),S=e=>a(t=>[...t,...e]);(0,l.useEffect)(()=>{y.current?.scrollIntoView({behavior:`smooth`,block:`end`})},[i,n]),(0,l.useEffect)(()=>{let e=[{who:`吏`,text:`「又来一位。」`},{who:`吏`,text:`渡口的老人头也不抬，续着手里那盏灯。船在雾里，看不见对岸。`},{who:`吏`,text:`「先与你交个底：如今下界不比从前 —— 灵气一年薄过一年，飞升的门断了三万年。修行人多，路窄。」`},{who:`吏`,text:`「就这么个世道，想去的人还是挤破头。」他终于抬眼看你，「说吧，这一世打算怎么个活法。」`}];x.length&&e.splice(3,0,{who:`吏`,text:`「这渡口送走的人里，有几个你兴许会遇上——${x.map(e=>nn(e).split(`
`)[0]).join(`；`)}」`}),a(e)},[]);let C=()=>{let e=_.trim()||`无名`;s(e),S([{who:`你`,text:e===`无名`?`（你没有报名字。）`:`「${e}。」`},{who:`吏`,text:e===`无名`?`「不肯说？也罢，名册上便记『无名』。这样的倒也不少。」`:`「${e}……」他在船头的名册上落了一笔，墨迹很快被雾打湿，「记下了。」`},{who:`吏`,text:`「这一世，你想怎么记着它？」`}]),r(`pov`)},w=e=>{u(e),S([{who:`你`,text:`「${Mn[e]}。」`},{who:`吏`,text:ws[e]},{who:`吏`,text:`「生在哪儿？」他把灯往你这边递了递，「先说好，各处有各处的活法，也有各处的死法。」`}]),r(`birth`)},ee=(e,t)=>{f(e),m(t),S([{who:`你`,text:`「${t}。」`},{who:`吏`,text:e?`「${e.name}。」他点点头，「${e.desc}」`:`「随波逐流？」他笑了一声，「也算一种胆量。船到哪算哪。」`},{who:`吏`,text:`「可有指定的去处？」见你不解，他补了一句，「懂行的人会报一串『世界种子』——持同一颗种子的人，入的是同一方天地。不懂就摇头，我替你掷签。」`}]),r(`seed`)},te=e=>{let t=e?.trim()||Ts();g(t),S([{who:`你`,text:e?.trim()?`「${e.trim()}。」`:`（你摇了摇头。）`},{who:`吏`,text:e?.trim()?`「哦？懂行。」他多看了你一眼。`:`「那便听天由命。」竹签落在筒底，「${t}——是这一方了。」`},{who:`吏`,text:`「${o}，${p}人氏。」他收了名册，撑篙点水，「此去一世，生死自负。船上有一句老话——」`},{who:`吏`,text:`「莫回头。」`}]),r(`confirm`)};return(0,U.jsxs)(`div`,{className:`ferry fade-in`,children:[(0,U.jsxs)(`div`,{className:`ferry-log`,children:[i.map((e,t)=>(0,U.jsxs)(`div`,{className:`ferry-line ${e.who===`吏`?`npc`:`me`} fade-in`,children:[e.who===`吏`&&(0,U.jsx)(`span`,{className:`ferry-who`,children:`渡口老吏`}),(0,U.jsx)(`span`,{className:`ferry-text`,children:e.text})]},t)),(0,U.jsx)(`div`,{ref:y})]}),(0,U.jsxs)(`div`,{className:`ferry-input`,children:[n===`greet`&&(0,U.jsxs)(`div`,{className:`inline-choices`,children:[(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>{S([{who:`你`,text:`（你走近了些。）`},{who:`吏`,text:`「叫什么？」`}]),r(`name`)},children:[(0,U.jsx)(`span`,{className:`idx`,children:`1`}),`上前答话`]}),(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:e.onGallery,children:[(0,U.jsx)(`span`,{className:`idx`,children:`2`}),`先看看渡口的碑林（`,e.save.steles.length,`）`]})]}),n===`name`&&(0,U.jsxs)(`div`,{className:`ferry-form`,children:[(0,U.jsx)(`input`,{type:`text`,value:_,placeholder:`报上道号（空着=无名）`,maxLength:8,autoFocus:!0,onChange:e=>v(e.target.value),onKeyDown:e=>{e.key===`Enter`&&C()}}),(0,U.jsx)(`button`,{className:`primary-btn`,style:{marginTop:0,padding:`10px 22px`},onClick:C,children:`报 名`})]}),n===`pov`&&(0,U.jsx)(`div`,{className:`inline-choices`,children:[`你`,`我`,`他`].map((e,t)=>(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>w(e),children:[(0,U.jsx)(`span`,{className:`idx`,children:t+1}),Mn[e],(0,U.jsx)(`span`,{className:`ferry-hint`,children:e===`你`?`经典视角`:e===`我`?`回忆录体`:`说书体`})]},e))}),n===`birth`&&(0,U.jsxs)(`div`,{className:`bp-grid`,children:[(0,U.jsxs)(`div`,{className:`radio-card bp-card`,onClick:()=>ee(void 0,`听天由命`),children:[xs.random&&(0,U.jsx)(`div`,{className:`bp-art`,dangerouslySetInnerHTML:{__html:xs.random}}),(0,U.jsx)(`div`,{className:`rt`,children:`听天由命`}),(0,U.jsx)(`div`,{className:`rd`,children:`随缘投胎，各安天命`})]}),Te.map(e=>(0,U.jsxs)(`div`,{className:`radio-card bp-card`,onClick:()=>ee(e,e.name),children:[xs[e.id]&&(0,U.jsx)(`div`,{className:`bp-art`,dangerouslySetInnerHTML:{__html:xs[e.id]}}),(0,U.jsx)(`div`,{className:`rt`,children:e.name}),(0,U.jsx)(`div`,{className:`rd`,children:e.desc}),(0,U.jsxs)(`div`,{className:`rd`,style:{opacity:.7},children:[e.region,` · 灵气`,e.qiDensity,` · `,e.pathPool.join(`/`)]})]},e.id))]}),n===`seed`&&(0,U.jsxs)(`div`,{className:`ferry-form`,children:[(0,U.jsx)(`input`,{type:`text`,value:h,placeholder:`世界种子（可留空）`,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Enter`&&te(h)}}),(0,U.jsx)(`button`,{className:`ghost-btn`,onClick:()=>te(null),children:`摇头`}),(0,U.jsx)(`button`,{className:`primary-btn`,style:{marginTop:0,padding:`10px 22px`},onClick:()=>te(h),children:`报出`})]}),n===`confirm`&&(0,U.jsxs)(`div`,{className:`inline-choices`,children:[(0,U.jsx)(`button`,{className:`primary-btn`,onClick:()=>{e.onStart({seed:h,name:o,pov:c,birthplace:d})},children:`登 船 入 世`}),(0,U.jsx)(`button`,{className:`linklike`,onClick:()=>{a([]),r(`greet`),v(``),g(t),S([{who:`吏`,text:`「重新想想？」老人不置可否，把名册翻回上一页。`},{who:`吏`,text:`「叫什么？」`}]),r(`name`)},children:`再想想`})]})]})]})}function Ds(e){let t=(0,l.useMemo)(()=>_s(),[]);return(0,U.jsxs)(`div`,{className:`cover fade-in`,children:[(0,U.jsx)(`div`,{className:`cover-art`,dangerouslySetInnerHTML:{__html:ys}}),(0,U.jsxs)(`div`,{className:`cover-title`,children:[(0,U.jsx)(`h1`,{children:`藏锋录`}),(0,U.jsx)(`div`,{className:`cover-slogan`,children:`开挂即僭越 · 藏拙以保身`}),(0,U.jsx)(`div`,{className:`cover-sub`,children:`一场瞒过天道的修行`})]}),(0,U.jsxs)(`div`,{className:`cover-actions`,children:[t&&(0,U.jsxs)(`button`,{className:`primary-btn`,onClick:e.onResume,children:[`续 前 缘`,(0,U.jsxs)(`span`,{className:`cover-resume-sub`,children:[t.snap.name,` · 第 `,Math.floor(t.snap.year),` 年`]})]}),(0,U.jsx)(`button`,{className:t?`ghost-btn cover-enter`:`primary-btn`,onClick:e.onEnter,children:t?`另 开 一 世`:`入 世`}),(0,U.jsxs)(`button`,{className:`linklike`,onClick:e.onGallery,children:[`碑林（`,e.save.steles.length,`）`]})]}),(0,U.jsx)(`div`,{className:`cover-bottom`,dangerouslySetInnerHTML:{__html:bs}})]})}var Os={evt_houshan_yiwen:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_hs_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101624"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <linearGradient id="sca_hs_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="sca_hs_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.85"/>
      <stop offset="0.45" stop-color="#58b894" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#58b894" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_hs_crack" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#58b894" stop-opacity="0.7"/>
      <stop offset="0.5" stop-color="#7fd4b2" stop-opacity="1"/>
      <stop offset="1" stop-color="#58b894" stop-opacity="0.5"/>
    </linearGradient>
    <linearGradient id="sca_hs_shaft" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_hs_sky)"/>
  <circle cx="168" cy="24" r="1" fill="#f2d795" opacity="0.5"/>
  <circle cx="196" cy="12" r="0.8" fill="#f2d795" opacity="0.35"/>
  <circle cx="222" cy="30" r="1.1" fill="#f2d795" opacity="0.4"/>
  <circle cx="184" cy="44" r="0.7" fill="#f2d795" opacity="0.3"/>
  <path d="M0,0 H150 C140,26 150,44 132,58 C110,74 70,60 48,72 C24,82 8,68 0,74 Z" fill="#0d1117"/>
  <path d="M240,0 H390 V66 C360,58 340,76 312,64 C286,54 268,72 250,58 C240,48 246,20 240,0 Z" fill="#0d1117"/>
  <path d="M84,192 C82,150 80,112 76,66 L90,66 C88,116 90,154 94,192 Z" fill="#101624"/>
  <path d="M252,190 C250,150 249,116 246,72 L258,72 C256,118 258,152 262,190 Z" fill="#101624"/>
  <path d="M28,196 C26,150 24,110 20,60 L34,60 C32,110 34,150 38,196 Z" fill="#131a28"/>
  <path d="M20,92 C34,84 46,80 60,80" stroke="#131a28" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M322,200 C320,150 318,105 314,52 L330,52 C328,110 330,155 336,200 Z" fill="#131a28"/>
  <path d="M328,96 C314,88 302,86 290,88" stroke="#131a28" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M356,202 C355,160 354,120 352,78 L364,78 C362,124 364,162 368,202 Z" fill="#131a28"/>
  <path d="M0,190 C60,184 120,188 180,192 C250,197 320,190 390,186 L390,240 H0 Z" fill="url(#sca_hs_ground)"/>
  <ellipse cx="195" cy="162" rx="200" ry="18" fill="#1a2334" opacity="0.18"/>
  <ellipse cx="252" cy="208" rx="122" ry="54" fill="url(#sca_hs_glow)" opacity="0.55"/>
  <path d="M196,226 L252,198 L216,110 L160,132 Z" fill="url(#sca_hs_shaft)" opacity="0.32"/>
  <path d="M180,238 L200,224 L196,214 L214,206 L210,198 L232,194 L236,186 L258,188 L262,180 L284,184 L292,176 L312,180 L318,172 L336,178 L340,182 L320,186 L314,192 L294,190 L288,198 L266,196 L262,204 L240,202 L236,210 L218,214 L214,222 L200,230 L190,240 Z" fill="url(#sca_hs_crack)" opacity="0.85"/>
  <path d="M186,234 L208,218 L226,204 L248,196 L272,190 L296,184 L322,178" stroke="#7fd4b2" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.28"/>
  <path d="M186,234 L208,218 L226,204 L248,196 L272,190 L296,184 L322,178" stroke="#7fd4b2" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.95"/>
  <path d="M258,150 C256,120 254,96 252,74" stroke="#7fd4b2" stroke-width="1" fill="none" opacity="0.25"/>
  <path d="M330,150 C332,120 333,96 334,80" stroke="#7fd4b2" stroke-width="1" fill="none" opacity="0.2"/>
  <circle cx="169" cy="142" r="6.2" fill="#0a0e15"/>
  <path d="M168,148 C160,151 156,159 155,167 C153,179 152,191 148,200 L182,200 C178,189 178,177 177,167 C176,157 174,150 168,148 Z" fill="#0a0e15"/>
  <path d="M175,155 C180,162 184,171 186,180 L182,182 C179,174 175,166 171,158 Z" fill="#0a0e15"/>
  <path d="M180,182 C182,176 190,176 192,182" stroke="#0a0e15" stroke-width="2" fill="none"/>
  <path d="M177,182 L195,182 L192,202 L180,202 Z" fill="#0a0e15"/>
  <path d="M178,189 L194,189 M179,195 L193,195" stroke="#131a28" stroke-width="1"/>
  <path d="M171,136 C174,138 175,142 173,147" stroke="#7fd4b2" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.7"/>
  <path d="M170,150 C174,153 176,160 177,168 C178,178 178,190 182,199" stroke="#7fd4b2" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M195,183 L192,201" stroke="#7fd4b2" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M0,240 L0,214 C20,208 36,220 52,214 C66,209 84,222 96,216 L104,240 Z" fill="#0a0e15"/>
  <path d="M340,240 L346,220 C360,212 376,218 390,212 L390,240 Z" fill="#0a0e15"/>
</svg>`,evt_dongxue_sanze:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_dx_wall" cx="0.5" cy="0.82" r="0.9">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.5" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowG" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.4" stop-color="#d9b36a" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowJ" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowW" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_dx_shadow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#0a0e15" stop-opacity="0.4"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0a0e15"/>
  <rect x="0" y="0" width="390" height="192" fill="url(#sca_dx_wall)"/>
  <path d="M250,40 C262,66 258,96 266,120" stroke="#0a0e15" stroke-width="1.4" fill="none" opacity="0.6"/>
  <path d="M320,30 C314,60 322,92 316,126" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M160,36 C154,60 160,84 154,110" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M0,0 L110,0 L70,36 L30,24 L0,40 Z" fill="#0a0e15"/>
  <path d="M0,36 L74,54 L112,94 L88,132 L118,170 L0,170 Z" fill="#101624"/>
  <path d="M0,108 L56,122 L86,150 L60,172 L0,172 Z" fill="#131a28"/>
  <path d="M24,170 L52,146 L84,166 L70,180 L30,182 Z" fill="#1a2334"/>
  <path d="M92,160 L112,150 L126,166 L108,176 Z" fill="#131a28"/>
  <path d="M0,188 H390 V240 H0 Z" fill="#0d1117"/>
  <ellipse cx="200" cy="198" rx="152" ry="34" fill="url(#sca_dx_pool)"/>
  <path d="M118,174 L134,164 L146,174 L132,182 Z" fill="#131a28"/>
  <circle cx="155" cy="140" r="34" fill="url(#sca_dx_glowG)"/>
  <ellipse cx="232" cy="146" rx="36" ry="13" fill="url(#sca_dx_glowJ)" opacity="0.85"/>
  <circle cx="300" cy="142" r="27" fill="url(#sca_dx_glowW)" opacity="0.75"/>
  <path d="M120,148 L330,148 L344,158 L106,158 Z" fill="#222d43"/>
  <path d="M120,148 L330,148" stroke="#d9b36a" stroke-width="1" opacity="0.35"/>
  <rect x="106" y="158" width="238" height="16" fill="#131a28"/>
  <rect x="140" y="174" width="40" height="16" fill="#101624"/>
  <rect x="270" y="174" width="40" height="16" fill="#101624"/>
  <rect x="106" y="174" width="238" height="14" fill="#0a0e15" opacity="0.5"/>
  <g transform="rotate(8 155 138)">
    <rect x="151" y="128" width="8" height="20" rx="1.5" fill="#f2d795" opacity="0.95"/>
    <path d="M155,131 L155,145" stroke="#a9853f" stroke-width="1"/>
  </g>
  <path d="M204,152 L254,143 L257,146 L207,156 Z" fill="#7fd4b2" opacity="0.82"/>
  <path d="M263,141 L275,138 L277,141 L265,144 Z" fill="#7fd4b2" opacity="0.6"/>
  <path d="M195,153 L204,151 L205,155 L196,157 Z" fill="#a9853f"/>
  <path d="M203,149 L206,158" stroke="#a9853f" stroke-width="2"/>
  <path d="M286,152 C286,140 314,140 314,152 C314,160 307,164 300,164 C293,164 286,160 286,152 Z" fill="#0d1117" stroke="#d9b36a" stroke-width="1.2" stroke-opacity="0.85"/>
  <path d="M291,141 L291,135 M309,141 L309,135" stroke="#d9b36a" stroke-width="1.6" stroke-opacity="0.7" stroke-linecap="round"/>
  <path d="M292,164 L290,170 M300,165 L300,171 M308,164 L310,170" stroke="#d9b36a" stroke-width="1.4" stroke-opacity="0.5" stroke-linecap="round"/>
  <path d="M176,206 L214,206 L262,240 L118,240 Z" fill="url(#sca_dx_shadow)"/>
  <circle cx="195" cy="132" r="7" fill="#0a0e15"/>
  <path d="M195,139 C185,141 180,150 179,160 C177,176 176,194 172,208 L218,208 C214,194 213,176 211,160 C210,150 205,141 195,139 Z" fill="#0a0e15"/>
  <path d="M188,127 C190,123 200,123 202,127" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.8"/>
  <path d="M188,141 C182,146 180,154 179,163 C177,178 176,194 172,207" stroke="#d9b36a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M202,141 C208,146 210,154 211,163 C213,178 214,194 218,207" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.9"/>
  <path d="M0,0 H390 V16 C340,28 300,12 250,22 C200,30 150,14 100,24 C60,30 20,18 0,24 Z" fill="#0a0e15" opacity="0.9"/>
  <path d="M0,0 L30,0 C20,80 22,160 12,240 L0,240 Z" fill="#0a0e15" opacity="0.8"/>
  <path d="M390,0 L360,0 C370,80 368,160 378,240 L390,240 Z" fill="#0a0e15" opacity="0.8"/>
</svg>`,evt_yujian_renzhu:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_yj_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.3" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.65" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_yj_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_yj_vig" cx="0.5" cy="0.48" r="0.72">
      <stop offset="0" stop-color="#0a0e15" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#0a0e15" stop-opacity="0"/>
      <stop offset="0.8" stop-color="#0a0e15" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#0a0e15" stop-opacity="0.95"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0d1117"/>
  <circle cx="224" cy="115" r="104" fill="url(#sca_yj_glow)" opacity="0.9"/>
  <circle cx="226" cy="115" r="26" fill="#f2d795" opacity="0.18"/>
  <ellipse cx="198" cy="194" rx="118" ry="24" fill="url(#sca_yj_pool)" opacity="0.6"/>
  <circle cx="197" cy="105" r="6.4" fill="#0a0e15"/>
  <path d="M197,111 C188,114 184,122 183,132 C182,144 178,158 170,170 C164,178 160,184 159,190 L192,190 C196,183 203,181 208,184 L212,190 C210,180 208,168 207,156 L206,144 C206,130 204,117 199,112 Z" fill="#0a0e15"/>
  <path d="M199,116 C206,120 212,124 218,126 L227,124 L228,129 L218,131 C210,131 202,127 196,123 Z" fill="#0a0e15"/>
  <path d="M201,99 C205,101 206,107 203,111" stroke="#f2d795" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M200,112 C204,118 206,128 206,140 C206,156 209,172 213,186" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M201,118 C209,123 216,126 223,127" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.85"/>
  <g transform="rotate(10 226 116)">
    <rect x="222" y="108" width="8" height="16" rx="1.5" fill="#f2d795"/>
    <path d="M226,110 L226,122" stroke="#a9853f" stroke-width="1"/>
  </g>
  <circle cx="226" cy="116" r="15" stroke="#f2d795" stroke-width="1" fill="none" opacity="0.35"/>
  <circle cx="226" cy="116" r="23" stroke="#f2d795" stroke-width="0.8" fill="none" opacity="0.16"/>
  <path d="M224,120 C216,128 206,130 199,127 C194,124 193,119 196,114 C199,110 202,106 203,103" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.95"/>
  <path d="M227,112 C222,128 210,134 200,131 C193,128 190,121 194,115" stroke="#f2d795" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M222,118 C214,117 208,112 205,106" stroke="#f2d795" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.45"/>
  <circle cx="203" cy="103" r="5.5" fill="#f2d795" opacity="0.22"/>
  <circle cx="203" cy="103" r="2.1" fill="#f2d795"/>
  <circle cx="244" cy="96" r="1.1" fill="#f2d795" opacity="0.55"/>
  <circle cx="252" cy="132" r="0.9" fill="#f2d795" opacity="0.4"/>
  <circle cx="186" cy="86" r="0.9" fill="#f2d795" opacity="0.45"/>
  <circle cx="238" cy="148" r="0.8" fill="#d9b36a" opacity="0.4"/>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_yj_vig)"/>
</svg>`,evt_waimen_qiangling:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_wm_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.65" stop-color="#101624"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="sca_wm_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_wm_path" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_wm_sky)"/>
  <circle cx="296" cy="52" r="42" fill="url(#sca_wm_moon)" opacity="0.5"/>
  <circle cx="296" cy="52" r="15" fill="#f2d795" opacity="0.85"/>
  <path d="M250,38 C280,32 320,34 352,40 L352,46 C320,44 284,46 254,46 Z" fill="#131a28" opacity="0.7"/>
  <path d="M230,52 C258,44 300,46 330,54 C356,60 372,56 390,60 L390,72 C350,74 310,70 270,72 C248,72 236,66 230,60 Z" fill="#131a28" opacity="0.92"/>
  <path d="M0,96 C50,84 90,92 140,80 C190,68 240,86 290,78 C330,72 360,82 390,74 L390,240 H0 Z" fill="#101624"/>
  <path d="M0,130 C60,118 110,128 170,116 C230,106 300,122 390,110 L390,240 H0 Z" fill="#0d1117"/>
  <path d="M0,178 C80,164 160,172 250,160 C300,154 350,162 390,154 L390,240 H0 Z" fill="#0a0e15"/>
  <path d="M108,240 C132,212 156,192 186,178 L200,174 C216,186 220,212 226,240 Z" fill="url(#sca_wm_path)" opacity="0.95"/>
  <path d="M200,174 C226,164 254,158 282,154 L292,157 C264,162 238,170 214,184 C209,180 204,177 200,174 Z" fill="url(#sca_wm_path)" opacity="0.85"/>
  <path d="M186,178 C166,172 146,170 126,168 L120,172 C142,175 162,180 176,188 C179,184 182,181 186,178 Z" fill="url(#sca_wm_path)" opacity="0.75"/>
  <ellipse cx="204" cy="182" rx="80" ry="16" fill="#f2d795" opacity="0.05"/>
  <path d="M264,162 L273,124" stroke="#0a0e15" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="251" cy="121" r="4.6" fill="#0a0e15"/>
  <path d="M251,126 C246,128 244,133 244,139 C243,145 244,151 243,161 L249,161 L250,148 L253,148 L255,162 L261,162 C259,152 258,144 258,137 C258,130 256,127 251,126 Z" fill="#0a0e15"/>
  <path d="M256,130 C260,128 266,126 271,124 L272,127 C267,129 262,132 258,134 Z" fill="#0a0e15"/>
  <path d="M247,129 C242,131 240,135 242,139 L245,138 C244,135 246,132 249,131 Z" fill="#0a0e15"/>
  <path d="M247,117 C249,115 253,115 255,118" stroke="#f2d795" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M257,128 C260,130 262,133 263,137" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
  <circle cx="276" cy="116" r="4" fill="#0a0e15"/>
  <path d="M276,121 C271,123 270,128 269,134 L269,156 L283,156 L282,134 C282,127 280,122 276,121 Z" fill="#0a0e15"/>
  <path d="M270,136 L261,146" stroke="#0a0e15" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M272,113 C274,111 278,111 280,114" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
  <circle cx="238" cy="120" r="4" fill="#0a0e15"/>
  <path d="M238,125 C234,127 233,132 232,138 L231,158 L245,158 L244,138 C244,131 242,126 238,125 Z" fill="#0a0e15"/>
  <path d="M234,117 C236,115 240,115 242,118" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.35"/>
  <circle cx="158" cy="152" r="6" fill="#0a0e15"/>
  <path d="M158,158 C150,160 146,168 145,177 C144,190 143,204 140,216 L174,216 C171,204 170,190 169,177 C168,168 165,160 158,158 Z" fill="#0a0e15"/>
  <path d="M162,147 C165,149 166,153 165,156" stroke="#f2d795" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.55"/>
  <path d="M164,160 C168,166 169,174 169,182 C169,194 171,206 174,215" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M0,240 L0,218 C30,214 60,222 90,218 L96,240 Z" fill="#0a0e15"/>
  <path d="M300,240 L306,224 C336,218 364,226 390,220 L390,240 Z" fill="#0a0e15"/>
  <path d="M60,218 C62,212 61,208 58,204 M74,220 C77,214 77,210 75,206 M320,226 C322,220 321,216 318,212" stroke="#131a28" stroke-width="1.2" fill="none" stroke-linecap="round"/>
</svg>`,evt_dingdao:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_dd_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.6" stop-color="#101624"/>
      <stop offset="0.88" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#a9853f"/>
    </linearGradient>
    <radialGradient id="sca_dd_hor" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#a9853f" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_dd_floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="192" fill="url(#sca_dd_sky)"/>
  <ellipse cx="268" cy="142" rx="150" ry="42" fill="url(#sca_dd_hor)" opacity="0.85"/>
  <path d="M0,150 C50,138 90,146 130,136 C180,124 220,140 260,128 C300,118 350,134 390,124 L390,192 H0 Z" fill="#1a2334" opacity="0.85"/>
  <path d="M0,162 C60,150 120,160 180,148 C240,138 310,154 390,142 L390,192 H0 Z" fill="#131a28"/>
  <ellipse cx="220" cy="158" rx="190" ry="10" fill="#8d97a9" opacity="0.12"/>
  <path d="M0,176 C70,166 150,174 230,162 C290,155 350,166 390,158 L390,192 H0 Z" fill="#0d1117"/>
  <path d="M0,190 L390,182 L390,240 L0,240 Z" fill="url(#sca_dd_floor)"/>
  <path d="M0,202 L390,196 M0,216 L390,212 M0,230 L390,228" stroke="#0a0e15" stroke-width="1" opacity="0.5"/>
  <rect x="246" y="174" width="144" height="3" fill="#0a0e15"/>
  <rect x="258" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="294" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="330" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="366" y="177" width="3" height="13" fill="#0a0e15"/>
  <circle cx="152" cy="114" r="2.4" fill="#0a0e15"/>
  <path d="M147,114 L159,111" stroke="#d9b36a" stroke-width="1.2" stroke-linecap="round" opacity="0.9"/>
  <circle cx="152" cy="122" r="6.5" fill="#0a0e15"/>
  <path d="M152,128 C144,130 140,138 139,147 C138,162 137,180 133,196 L169,196 C166,180 165,162 164,147 C163,138 159,130 152,128 Z" fill="#0a0e15"/>
  <ellipse cx="137" cy="151" rx="3.6" ry="5.2" fill="#0a0e15"/>
  <path d="M156,116 C160,119 161,124 158,128" stroke="#f2d795" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M158,130 C163,136 164,146 164,156 C165,172 166,186 169,195" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.8"/>
  <circle cx="240" cy="166" r="5.6" fill="#0a0e15"/>
  <path d="M241,171 C248,172 255,176 260,181 C264,186 265,192 265,199 C265,205 264,211 263,216 L249,216 C250,209 250,201 249,194 C245,189 240,184 236,178 C236,174 238,171 241,171 Z" fill="#0a0e15"/>
  <path d="M238,176 C234,180 233,184 236,187 C239,188 242,186 243,183 Z" fill="#0a0e15"/>
  <path d="M244,172 C252,174 258,179 262,184" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.55"/>
  <ellipse cx="182" cy="204" rx="3" ry="1.4" fill="#d9b36a" opacity="0.7" transform="rotate(-20 182 204)"/>
  <ellipse cx="194" cy="214" rx="3" ry="1.3" fill="#a9853f" opacity="0.6" transform="rotate(15 194 214)"/>
  <ellipse cx="204" cy="199" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.5" transform="rotate(40 204 199)"/>
  <ellipse cx="214" cy="220" rx="3.2" ry="1.5" fill="#d9b36a" opacity="0.75" transform="rotate(-35 214 220)"/>
  <ellipse cx="224" cy="206" rx="2.8" ry="1.3" fill="#a9853f" opacity="0.55" transform="rotate(10 224 206)"/>
  <ellipse cx="188" cy="224" rx="3" ry="1.4" fill="#d9b36a" opacity="0.6" transform="rotate(30 188 224)"/>
  <ellipse cx="232" cy="216" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.5" transform="rotate(-15 232 216)"/>
  <ellipse cx="176" cy="215" rx="2.4" ry="1.1" fill="#a9853f" opacity="0.5" transform="rotate(50 176 215)"/>
  <ellipse cx="210" cy="209" rx="2.8" ry="1.3" fill="#d9b36a" opacity="0.65" transform="rotate(-45 210 209)"/>
  <ellipse cx="206" cy="168" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.7" transform="rotate(20 206 168)"/>
  <ellipse cx="220" cy="180" rx="2.4" ry="1.1" fill="#d9b36a" opacity="0.6" transform="rotate(-30 220 180)"/>
  <path d="M390,18 C358,24 334,34 318,52 C336,52 356,46 372,38 C380,34 386,28 390,30 Z" fill="#0a0e15"/>
  <path d="M348,44 C338,50 330,52 322,52 M366,34 C356,40 348,44 340,46" stroke="#0d1117" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`,evt_jiedan_qianye:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_jd_wall" cx="0.33" cy="0.72" r="0.85">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.5" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </radialGradient>
    <radialGradient id="sca_jd_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.25" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.6" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_jd_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0a0e15"/>
  <rect x="0" y="0" width="390" height="200" fill="url(#sca_jd_wall)"/>
  <path d="M200,40 C208,70 202,104 210,134" stroke="#0a0e15" stroke-width="1.4" fill="none" opacity="0.5"/>
  <path d="M300,50 C294,80 302,110 296,140" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M70,60 C76,90 70,118 78,148" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.4"/>
  <path d="M0,0 H390 V30 C340,44 300,22 250,38 C200,50 150,26 100,40 C60,48 24,30 0,42 Z" fill="#0a0e15"/>
  <path d="M0,0 L40,0 C30,60 34,120 24,180 L0,190 Z" fill="#0a0e15" opacity="0.92"/>
  <path d="M390,0 L344,0 C352,70 348,140 360,200 L390,208 Z" fill="#0a0e15" opacity="0.92"/>
  <path d="M0,192 C80,186 200,190 300,186 C340,184 370,186 390,184 L390,240 H0 Z" fill="#0d1117"/>
  <ellipse cx="152" cy="200" rx="142" ry="38" fill="url(#sca_jd_pool)"/>
  <circle cx="118" cy="158" r="68" fill="url(#sca_jd_glow)" opacity="0.95"/>
  <ellipse cx="300" cy="146" rx="46" ry="58" fill="#0a0e15" opacity="0.5"/>
  <circle cx="290" cy="92" r="17" fill="#0a0e15" opacity="0.45"/>
  <path d="M104,178 L132,178 L128,190 L108,190 Z" fill="#0a0e15"/>
  <rect x="114" y="162" width="7" height="16" rx="1.5" fill="#d9b36a"/>
  <path d="M117.5,149 C113.5,155 113.5,159 117.5,163 C121.5,159 121.5,155 117.5,149 Z" fill="#d9b36a"/>
  <path d="M117.5,153 C115.5,156 115.5,159 117.5,161 C119.5,159 119.5,156 117.5,153 Z" fill="#f2d795"/>
  <circle cx="117.5" cy="156" r="9" fill="#f2d795" opacity="0.3"/>
  <circle cx="150" cy="184" r="4" fill="#0a0e15"/>
  <circle cx="150" cy="192" r="6" fill="#0a0e15"/>
  <path d="M146,186 C144,189 144,193 146,196" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.7"/>
  <rect x="165" y="170" width="3" height="8" fill="#0a0e15"/>
  <rect x="163" y="177" width="7" height="19" rx="2" fill="#0a0e15"/>
  <path d="M164,179 L164,194" stroke="#d9b36a" stroke-width="1" stroke-linecap="round" opacity="0.65"/>
  <ellipse cx="182" cy="192" rx="7" ry="6" fill="#0a0e15"/>
  <path d="M177,189 C176,191 176,194 178,196" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6"/>
  <rect x="194" y="184" width="16" height="11" rx="1" fill="#0a0e15"/>
  <path d="M194,187 L210,187" stroke="#a9853f" stroke-width="0.9" opacity="0.6"/>
  <path d="M195,185 L195,194" stroke="#d9b36a" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <rect x="216" y="187" width="5" height="9" rx="1" fill="#0a0e15"/>
  <rect x="223" y="189" width="4" height="7" rx="1" fill="#0a0e15"/>
  <g transform="rotate(-8 206 201)">
    <rect x="198" y="199" width="16" height="4" rx="2" fill="#0a0e15"/>
    <path d="M199,199.5 L213,199.5" stroke="#a9853f" stroke-width="0.8" opacity="0.5"/>
  </g>
  <circle cx="171" cy="200" r="1.3" fill="#d9b36a" opacity="0.85"/>
  <circle cx="176" cy="203" r="1.1" fill="#d9b36a" opacity="0.7"/>
  <circle cx="188" cy="201" r="1.2" fill="#f2d795" opacity="0.6"/>
  <circle cx="242" cy="130" r="6.5" fill="#0a0e15"/>
  <path d="M246,136 C238,138 234,144 232,152 C230,162 230,170 231,177 L272,177 C273,168 272,158 269,150 C266,141 258,136 246,136 Z" fill="#0a0e15"/>
  <path d="M226,178 C230,172 246,169 256,170 C268,170 276,174 278,180 C279,185 274,188 264,189 L238,189 C230,188 224,184 226,178 Z" fill="#0a0e15"/>
  <path d="M237,124 C234,127 233,132 235,136 C236,133 236,129 238,125 Z" fill="#d9b36a" opacity="0.75"/>
  <path d="M238,123 C241,121 245,121 248,124" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M241,137 C235,140 233,146 232,154 C231,162 230,170 231,176" stroke="#d9b36a" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.8"/>
  <path d="M228,178 C232,173 240,170 250,170" stroke="#d9b36a" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M0,240 L0,222 C60,226 120,222 180,226 C250,230 320,224 390,228 L390,240 Z" fill="#0a0e15" opacity="0.75"/>
</svg>`},ks={evt_diyitiao_renming:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_yp_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="0.72" stop-color="#101624"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="scb_yp_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/>
      <stop offset="0.42" stop-color="#f2d795" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_yp_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e2940"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="scb_yp_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.11"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_yp_sky)"/>
  <circle cx="40" cy="30" r="0.8" fill="#f2d795" opacity="0.35"/>
  <circle cx="92" cy="18" r="0.6" fill="#f2d795" opacity="0.25"/>
  <circle cx="150" cy="36" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="208" cy="22" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="252" cy="40" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="358" cy="24" r="0.8" fill="#f2d795" opacity="0.34"/>
  <circle cx="306" cy="46" r="46" fill="url(#scb_yp_moon)"/>
  <circle cx="306" cy="46" r="17" fill="#f2d795" opacity="0.92"/>
  <circle cx="311" cy="41" r="3" fill="#d9b36a" opacity="0.28"/>
  <circle cx="301" cy="51" r="2" fill="#d9b36a" opacity="0.2"/>
  <path d="M0,132 C50,120 110,127 160,117 C220,105 280,123 330,113 C352,109 372,113 390,109 L390,155 L0,155 Z" fill="#0f1626"/>
  <path d="M0,150 C60,142 140,148 210,140 C280,132 340,144 390,136 L390,175 L0,175 Z" fill="#131a28"/>
  <path d="M0,166 C90,158 200,164 300,158 C335,155 365,158 390,154 L390,240 L0,240 Z" fill="url(#scb_yp_ground)"/>
  <ellipse cx="220" cy="192" rx="155" ry="48" fill="url(#scb_yp_pool)"/>
  <path d="M14,176 q6,-6 12,0 M40,175 q6,-6 12,0 M66,175 q6,-6 12,0 M92,174 q6,-6 12,0 M232,173 q6,-6 12,0 M258,172 q6,-6 12,0 M284,172 q6,-6 12,0" fill="none" stroke="#0b111c" stroke-width="2.2"/>
  <path d="M10,196 q8,-8 16,0 M42,195 q8,-8 16,0 M74,195 q8,-8 16,0 M232,192 q8,-8 16,0 M264,191 q8,-8 16,0" fill="none" stroke="#0a0f1a" stroke-width="2.6"/>
  <path d="M26,214 q10,-10 20,0 M66,213 q10,-10 20,0 M250,210 q10,-10 20,0 M292,210 q10,-10 20,0 M336,212 q10,-10 20,0" fill="none" stroke="#080d16" stroke-width="3"/>
  <path d="M34,208 l3,-6 M42,208 l0,-7 M74,207 l3,-6 M258,204 l3,-6 M266,204 l0,-7 M300,204 l3,-6" stroke="#7fd4b2" stroke-opacity="0.22" stroke-width="1"/>
  <path d="M390,146 C348,150 306,156 274,162 C254,166 240,172 228,180 C222,186 218,196 216,240 L390,240 Z" fill="#0e1524"/>
  <path d="M390,146 C348,150 306,156 274,162 C254,166 240,172 229,179" fill="none" stroke="#f2d795" stroke-opacity="0.14" stroke-width="1.4"/>
  <ellipse cx="238" cy="216" rx="42" ry="9" fill="#05070b" opacity="0.55"/>
  <ellipse cx="112" cy="205" rx="30" ry="6" fill="#05070b" opacity="0.5"/>
  <ellipse cx="118" cy="202" rx="17" ry="5.5" fill="#05070b"/>
  <path d="M101,200 C106,197.5 112,196.5 118,196.5 C124,196.5 130,197.5 135,200" fill="none" stroke="#7fd4b2" stroke-opacity="0.14" stroke-width="1.2"/>
  <path d="M98,199 q5,-4 10,0 M132,198 q5,-4 10,0" fill="none" stroke="#0a0f1a" stroke-width="2.4"/>
  <circle cx="150" cy="161" r="1.9" fill="#06080c"/>
  <circle cx="152" cy="166" r="5.2" fill="#06080c"/>
  <path d="M147,171 C145,178 144,185 143.5,191 C143.5,193 145,194.5 148,195 L160,195.5 C160,188 158,178 155.5,170.5 Z" fill="#06080c"/>
  <path d="M143.5,191 C138,193 133.5,196 131,198.5 L147,200 L148.5,194.5 Z" fill="#06080c"/>
  <path d="M154,172 C160,168 166,164.5 172,162.5" fill="none" stroke="#06080c" stroke-width="3" stroke-linecap="round"/>
  <path d="M153,177 C160,174 167,171 173.5,169.5" fill="none" stroke="#06080c" stroke-width="3" stroke-linecap="round"/>
  <circle cx="173" cy="162" r="1.7" fill="#06080c"/>
  <circle cx="174.5" cy="169.3" r="1.7" fill="#06080c"/>
  <path d="M150.5,161.5 C152.5,159.5 155,158.5 157.5,159" fill="none" stroke="#f2d795" stroke-opacity="0.4" stroke-width="1"/>
  <circle cx="269" cy="110" r="2.1" fill="#06080c"/>
  <circle cx="270" cy="117" r="5.5" fill="#06080c"/>
  <path d="M270,123 C264,125 261.5,131 260.5,139 C259.5,149 258.5,155 256.5,161 L284.5,161 C281.5,151 279.5,139 278.5,129 C277.5,124.5 274.5,123 270,123 Z" fill="#06080c"/>
  <path d="M262,132 C259,137 257.5,143 257,148" fill="none" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M278.5,128 C281,132 283,136 284,141" fill="none" stroke="#f2d795" stroke-opacity="0.32" stroke-width="1.1"/>
  <path d="M272.5,112.5 C274.5,111 276.5,110.5 278.5,111" fill="none" stroke="#f2d795" stroke-opacity="0.42" stroke-width="1"/>
  <path d="M256.5,161 C245,175 236,192 231,212 L258,206 C262,190 270,175 281,163 Z" fill="#05070b" opacity="0.5"/>
  <path d="M190,206 L212,199" stroke="#06080c" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M212,199 C219,194 223,188 224.5,181 C220.5,186.5 214.5,192 209.5,195.5 Z" fill="#06080c"/>
  <path d="M212,198 C218,193.5 222,188.5 223.6,182.5" fill="none" stroke="#f2d795" stroke-opacity="0.55" stroke-width="0.9"/>
</svg>`,evt_ob_chengnianli:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_jl_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#182238"/>
    </linearGradient>
    <radialGradient id="scb_jl_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.5"/>
      <stop offset="0.45" stop-color="#e7e0cf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_jl_snow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#33405e"/>
      <stop offset="1" stop-color="#1f2940"/>
    </linearGradient>
    <linearGradient id="scb_jl_bone" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0.55"/>
    </linearGradient>
    <radialGradient id="scb_jl_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_jl_sky)"/>
  <circle cx="95" cy="40" r="40" fill="url(#scb_jl_moon)"/>
  <circle cx="95" cy="40" r="13" fill="#e7e0cf" opacity="0.88"/>
  <circle cx="210" cy="26" r="0.7" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="264" cy="16" r="0.6" fill="#e7e0cf" opacity="0.26"/>
  <circle cx="318" cy="34" r="0.8" fill="#e7e0cf" opacity="0.32"/>
  <circle cx="356" cy="18" r="0.55" fill="#e7e0cf" opacity="0.24"/>
  <path d="M0,142 C70,136 150,140 230,136 C300,133 350,138 390,134 L390,240 L0,240 Z" fill="url(#scb_jl_snow)"/>
  <ellipse cx="195" cy="180" rx="160" ry="50" fill="url(#scb_jl_pool)"/>
  <path d="M0,158 C60,154 130,158 200,155 M120,172 C190,168 260,172 330,168 M40,196 C120,191 210,196 300,191" fill="none" stroke="#8d97a9" stroke-opacity="0.14" stroke-width="1.4"/>
  <path d="M58,136 l0,-8 M64,131 a3,3 0 1 1 0.1,0 M74,131 a3.4,3.4 0 1 1 0.1,0 M84,132 a3,3 0 1 1 0.1,0 M96,131 a3.2,3.2 0 1 1 0.1,0 M108,132 a3,3 0 1 1 0.1,0" fill="#0a0f1a" stroke="#0a0f1a" stroke-width="1"/>
  <path d="M56,140 L114,140 L114,136 C104,133 94,132 84,132.5 C74,133 64,135 56,137 Z" fill="#0a0f1a"/>
  <path d="M282,135 l0,-9 M290,130 a3.2,3.2 0 1 1 0.1,0 M300,130 a3,3 0 1 1 0.1,0 M310,131 a3.4,3.4 0 1 1 0.1,0 M322,130 a3,3 0 1 1 0.1,0 M332,131 a3.2,3.2 0 1 1 0.1,0 M342,132 a2.8,2.8 0 1 1 0.1,0" fill="#0a0f1a" stroke="#0a0f1a" stroke-width="1"/>
  <path d="M284,139 L348,139 L348,135 C337,132 326,131 315,131.5 C304,132 293,134 284,136 Z" fill="#0a0f1a"/>
  <path d="M152,152 C149,120 159,92 188,77 C171,95 163,121 166,150 Z" fill="url(#scb_jl_bone)"/>
  <path d="M238,152 C241,120 231,92 202,77 C219,95 227,121 224,150 Z" fill="url(#scb_jl_bone)"/>
  <path d="M154,132 l11,-2 M153,116 l11,-3 M158,100 l10,-5 M236,132 l-11,-2 M237,116 l-11,-3 M232,100 l-10,-5" stroke="#0f1626" stroke-opacity="0.6" stroke-width="1.4"/>
  <path d="M195,80 l0,6" stroke="#e7e0cf" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="195" cy="88.5" r="2" fill="none" stroke="#e7e0cf" stroke-opacity="0.4" stroke-width="1.1"/>
  <ellipse cx="147" cy="181" rx="26" ry="5" fill="#0a0f1a" opacity="0.45"/>
  <ellipse cx="242" cy="182" rx="34" ry="5.5" fill="#0a0f1a" opacity="0.45"/>
  <circle cx="154" cy="150" r="4.8" fill="#0a0f1a"/>
  <path d="M151,146 C148,144 146,144 144,145 C146,147 148,148 150,149 Z" fill="#0a0f1a"/>
  <path d="M154,155 L146,168" stroke="#0a0f1a" stroke-width="7" stroke-linecap="round"/>
  <path d="M150,160 L166,166" stroke="#0a0f1a" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M166,166 L177,163.5" stroke="#e7e0cf" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
  <path d="M149,161 L138,156" stroke="#0a0f1a" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M146,168 L153,173 L153,180" fill="none" stroke="#0a0f1a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M146,168 L134,174 L131,180" fill="none" stroke="#0a0f1a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M152,156 C147,153 142,152 137,153 C141,156 146,158 150,159 Z" fill="#0a0f1a"/>
  <path d="M156.5,147 C158.5,145.5 160.5,145 162.5,145.5" fill="none" stroke="#e7e0cf" stroke-opacity="0.4" stroke-width="1"/>
  <path d="M214,158 C209,149 210,140 217,133 C214,141 214,150 217,157 Z" fill="#0a0f1a"/>
  <path d="M220,157 C217,149 219,141 226,136 C222,143 222,151 224,157 Z" fill="#0a0f1a"/>
  <path d="M203,168 C208,163 214,159.5 221,159 C232,155 247,154.5 257,158.5 C263,161 266,165.5 265.5,170.5 C263,175 258,177.5 251,178 L221,178 C213,177 207,174 203,170.5 Z" fill="#0a0f1a"/>
  <path d="M203,168 C199,169.5 196,171.5 194,174 L206,174.5 Z" fill="#0a0f1a"/>
  <path d="M222,160 l3,-4 M230,158 l3,-4 M238,157 l3,-4" stroke="#0a0f1a" stroke-width="2" stroke-linecap="round"/>
  <path d="M264,167 C269,162 272,156 271,149 C274,156 273,164 268,170 Z" fill="#0a0f1a"/>
  <path d="M225,178 L223,183 M237,178 L236,183 M251,178 L250,183" stroke="#0a0f1a" stroke-width="3.6" stroke-linecap="round"/>
  <circle cx="207" cy="166" r="1.1" fill="#f07a66" opacity="0.9"/>
  <ellipse cx="186" cy="163" rx="6" ry="2.4" fill="#e7e0cf" opacity="0.13"/>
  <ellipse cx="197" cy="167" rx="5" ry="2" fill="#e7e0cf" opacity="0.1"/>
  <circle cx="60" cy="70" r="1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="140" cy="52" r="0.8" fill="#e7e0cf" opacity="0.35"/>
  <circle cx="230" cy="60" r="1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="300" cy="80" r="0.8" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="90" cy="120" r="1" fill="#e7e0cf" opacity="0.35"/>
  <circle cx="330" cy="110" r="0.9" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="170" cy="200" r="1.1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="280" cy="215" r="1" fill="#e7e0cf" opacity="0.32"/>
  <circle cx="50" cy="190" r="1" fill="#e7e0cf" opacity="0.32"/>
</svg>`,evt_a4c_xinmo_dajie:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="scb_xm_bg" cx="0.5" cy="0.5" r="0.75">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#07090f"/>
    </radialGradient>
    <radialGradient id="scb_xm_fog" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="scb_xm_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
    <g id="scb_xm_fig">
      <circle cx="151" cy="84" r="2.4"/>
      <circle cx="153" cy="92" r="6.5"/>
      <path d="M153,99 C147,101 144,108 143,118 C142,136 141,156 138,176 L166,176 C163,158 162,138 161,118 C160,106 158,100 153,99 Z"/>
      <path d="M146,112 C143,120 142,130 141.5,140 M160,112 C162,120 163,130 163.5,140" fill="none" stroke-width="1.2"/>
    </g>
  </defs>
  <rect width="390" height="240" fill="url(#scb_xm_bg)"/>
  <ellipse cx="100" cy="52" rx="130" ry="34" fill="url(#scb_xm_fog)"/>
  <ellipse cx="300" cy="40" rx="120" ry="30" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="118" rx="115" ry="80" fill="url(#scb_xm_glow)"/>
  <path d="M163,121 C180,114 210,114 227,121" fill="none" stroke="#f07a66" stroke-opacity="0.28" stroke-width="1" stroke-dasharray="3 4"/>
  <use href="#scb_xm_fig" fill="#06080c" stroke="#06080c"/>
  <path d="M155,86 C157.5,84.5 160,84 162.5,84.6" fill="none" stroke="#e7e0cf" stroke-opacity="0.3" stroke-width="1"/>
  <g transform="translate(386,0) scale(-1,1)" opacity="0.13">
    <use href="#scb_xm_fig" fill="#f07a66" stroke="#f07a66"/>
  </g>
  <g transform="translate(394,0) scale(-1,1)" opacity="0.13">
    <use href="#scb_xm_fig" fill="#f07a66" stroke="#f07a66"/>
  </g>
  <g transform="translate(390,0) scale(-1,1)">
    <use href="#scb_xm_fig" fill="#06080c" opacity="0.42" stroke="#06080c"/>
    <use href="#scb_xm_fig" fill="none" stroke="#f07a66" stroke-opacity="0.5" stroke-width="1"/>
  </g>
  <ellipse cx="140" cy="182" rx="70" ry="18" fill="url(#scb_xm_fog)"/>
  <ellipse cx="250" cy="184" rx="70" ry="18" fill="url(#scb_xm_fog)"/>
  <ellipse cx="150" cy="176" rx="45" ry="12" fill="url(#scb_xm_fog)"/>
  <ellipse cx="240" cy="176" rx="45" ry="12" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="205" rx="185" ry="34" fill="url(#scb_xm_fog)"/>
  <ellipse cx="60" cy="150" rx="80" ry="24" fill="url(#scb_xm_fog)"/>
  <ellipse cx="335" cy="146" rx="85" ry="26" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="232" rx="200" ry="26" fill="url(#scb_xm_fog)"/>
</svg>`,evt_zongmen_dabi:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_db_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_db_beam" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0.04"/>
    </linearGradient>
    <radialGradient id="scb_db_spark" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.85"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_db_stage" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#243252"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_db_sky)"/>
  <circle cx="52" cy="26" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="118" cy="16" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="292" cy="14" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="348" cy="30" r="0.6" fill="#f2d795" opacity="0.24"/>
  <path d="M70,110 L84,84 L110,78 L120,64 L195,58 L270,64 L280,78 L306,84 L320,110 Z" fill="#0f1626"/>
  <path d="M60,112 L330,112 L322,104 L68,104 Z" fill="#0c1220"/>
  <path d="M66,168 L66,96" stroke="#0a0f1a" stroke-width="2"/>
  <path d="M66,96 L92,102 L66,110 Z" fill="#a9853f" opacity="0.85"/>
  <path d="M324,168 L324,90" stroke="#0a0f1a" stroke-width="2"/>
  <path d="M324,90 L298,96 L324,104 Z" fill="#d9b36a" opacity="0.8"/>
  <path d="M85,146 L305,146 L350,168 L40,168 Z" fill="url(#scb_db_stage)"/>
  <path d="M40,168 L350,168 L350,196 L40,196 Z" fill="#131a28"/>
  <path d="M40,168 L350,168" stroke="#d9b36a" stroke-opacity="0.4" stroke-width="1.4"/>
  <path d="M92,168 L88,196 M195,168 L195,196 M298,168 L302,196" stroke="#0d1117" stroke-width="1.4"/>
  <path d="M85,146 L305,146" stroke="#8d97a9" stroke-opacity="0.18" stroke-width="1"/>
  <circle cx="172" cy="120" r="4.6" fill="#06080c"/>
  <circle cx="171" cy="114.5" r="1.8" fill="#06080c"/>
  <path d="M172,125 L182,140" stroke="#06080c" stroke-width="7" stroke-linecap="round"/>
  <path d="M178,131 L196,127.5" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M176,133 L163,140" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M182,140 L192,150 L193,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M182,140 L169,152 L164,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M175,128 C169,131 164,135 161,140 C166,138 171,135 175,132 Z" fill="#06080c"/>
  <path d="M196,127.5 L213,122" stroke="#f2d795" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round"/>
  <circle cx="232" cy="114" r="4.6" fill="#06080c"/>
  <circle cx="234" cy="108.6" r="1.8" fill="#06080c"/>
  <path d="M233,119 L240,137" stroke="#06080c" stroke-width="7" stroke-linecap="round"/>
  <path d="M230,126 L212,130" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M234,124 L246,113" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M240,137 L228,150 L226,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M240,137 L250,152 L253,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M238,124 C244,126 249,130 252,135 C247,133 242,130 238,127 Z" fill="#06080c"/>
  <path d="M212,130 L199,133.6" stroke="#f2d795" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round"/>
  <polygon points="365,22 378,34 55,196 42,184" fill="url(#scb_db_beam)"/>
  <path d="M372,28 L48,190" stroke="#f2d795" stroke-opacity="0.85" stroke-width="1.5"/>
  <circle cx="206" cy="128" r="22" fill="url(#scb_db_spark)"/>
  <path d="M206,128 l10,-4 M206,128 l-10,4 M206,128 l3,-10 M206,128 l-3,10 M206,128 l9,6 M206,128 l-9,-6" stroke="#f2d795" stroke-opacity="0.9" stroke-width="1.2"/>
  <ellipse cx="182" cy="163" rx="18" ry="3" fill="#05070b" opacity="0.5"/>
  <ellipse cx="240" cy="163" rx="18" ry="3" fill="#05070b" opacity="0.5"/>
  <rect x="0" y="206" width="390" height="34" fill="#0a0f1a"/>
  <circle cx="16" cy="204" r="5" fill="#0a0f1a"/><circle cx="38" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="59" cy="205" r="5.2" fill="#0a0f1a"/><circle cx="81" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="103" cy="205" r="5" fill="#0a0f1a"/><circle cx="125" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="147" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="169" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="191" cy="205" r="5" fill="#0a0f1a"/><circle cx="213" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="235" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="257" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="279" cy="205" r="5" fill="#0a0f1a"/><circle cx="301" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="323" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="345" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="367" cy="205" r="5" fill="#0a0f1a"/><circle cx="384" cy="203" r="4.6" fill="#0a0f1a"/>
  <path d="M125,201 l-4,-9 M235,203 l5,-9" stroke="#0a0f1a" stroke-width="2.6" stroke-linecap="round"/>
  <rect x="0" y="226" width="390" height="14" fill="#05070b"/>
  <circle cx="8" cy="224" r="7" fill="#05070b"/><circle cx="36" cy="222" r="6.4" fill="#05070b"/><circle cx="64" cy="225" r="7.2" fill="#05070b"/><circle cx="92" cy="223" r="6.6" fill="#05070b"/><circle cx="120" cy="225" r="7" fill="#05070b"/><circle cx="148" cy="222" r="6.4" fill="#05070b"/><circle cx="176" cy="224" r="7.2" fill="#05070b"/><circle cx="204" cy="223" r="6.6" fill="#05070b"/><circle cx="232" cy="225" r="7" fill="#05070b"/><circle cx="260" cy="222" r="6.4" fill="#05070b"/><circle cx="288" cy="224" r="7.2" fill="#05070b"/><circle cx="316" cy="223" r="6.6" fill="#05070b"/><circle cx="344" cy="225" r="7" fill="#05070b"/><circle cx="372" cy="222" r="6.4" fill="#05070b"/>
</svg>`,evt_a5_dujie_qianye:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_dj_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_dj_gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0"/>
      <stop offset="0.3" stop-color="#f2d795" stop-opacity="0.75"/>
      <stop offset="0.7" stop-color="#f2d795" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scb_dj_goldsoft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scb_dj_cliff" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#06080c"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_dj_sky)"/>
  <path d="M0,0 L390,0 L390,52 C350,66 316,58 284,68 C252,78 216,66 184,76 C150,86 110,74 76,82 C48,88 20,80 0,86 Z" fill="#06080c"/>
  <path d="M0,86 C24,80 52,90 82,84 C116,77 152,90 188,80 C222,71 256,84 288,74 C320,65 356,74 390,60 L390,84 C352,96 314,88 280,97 C246,106 208,94 174,103 C142,111 104,100 72,107 C46,112 20,105 0,110 Z" fill="#0e1424"/>
  <path d="M0,110 C22,105 48,112 74,108 C106,102 144,112 178,104 C212,97 248,107 282,99 C316,92 354,98 390,84 L390,101 C354,112 318,105 284,113 C250,121 212,110 178,118 C146,125 108,115 76,121 C48,126 22,120 0,124 Z" fill="#16203a"/>
  <path d="M12,44 l10,10 -7,4 9,10 M330,30 l-9,12 8,3 -7,12" fill="none" stroke="#d9b36a" stroke-opacity="0.24" stroke-width="1.1"/>
  <rect x="0" y="99" width="390" height="18" fill="url(#scb_dj_goldsoft)"/>
  <path d="M0,108 L390,108" stroke="url(#scb_dj_gold)" stroke-width="1.6"/>
  <path d="M0,124 C50,120 110,126 170,121 C240,116 310,124 390,117 L390,152 L0,152 Z" fill="#101828"/>
  <path d="M0,144 C70,139 150,146 230,141 C290,137 345,143 390,138 L390,175 L0,175 Z" fill="#0d1420"/>
  <path d="M0,240 L0,172 C22,166 46,163 70,158 C100,152 130,148 152,150 C176,152 196,158 210,166 C224,175 231,196 233,240 Z" fill="url(#scb_dj_cliff)"/>
  <path d="M0,172 C22,166 46,163 70,158 C100,152 130,148 152,150 C176,152 196,158 209,165" fill="none" stroke="#f2d795" stroke-opacity="0.22" stroke-width="1.3"/>
  <path d="M50,178 C64,186 74,198 80,214 M120,164 C130,174 137,188 140,204" fill="none" stroke="#0a0f1a" stroke-width="1.6"/>
  <circle cx="167" cy="105" r="2.1" fill="#06080c"/>
  <circle cx="168" cy="112" r="5.6" fill="#06080c"/>
  <path d="M168,119 C162,121 159,128 158,138 C157,148 156,152 155,155 L182,155 C180,147 179,137 178,127 C177,121 173,119 168,119 Z" fill="#06080c"/>
  <path d="M160,128 C158,134 157,140 156.5,146 M177,126 C178.5,132 179.5,139 180,146" fill="none" stroke="#06080c" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M164,106.5 C166,104 169,102.5 172,102.8 M162,118 C165,116.5 168.5,116 172,116.5" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.1"/>
  <path d="M158,138 C156,143 154,148 152,152" fill="none" stroke="#f2d795" stroke-opacity="0.18" stroke-width="1"/>
  <path d="M122,146 C122,142 125,140 129,140 C133,140 136,142 136,146 C136,149 133,151 129,151 C125,151 122,149 122,146 Z" fill="#0b1220"/>
  <path d="M126,140 L124,135 M132,140 L134,135 M124,135 C127,133 131,133 134,135" fill="none" stroke="#0b1220" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M123,143 C126,141.5 131,141.5 135,143" fill="none" stroke="#f2d795" stroke-opacity="0.3" stroke-width="0.9"/>
  <path d="M240,190 C270,186 300,187 330,190 M255,214 C285,210 320,211 355,214" fill="none" stroke="#8d97a9" stroke-opacity="0.1" stroke-width="1.4"/>
</svg>`,evt_sd_mudu_dujie:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_md_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_md_pillar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#f2d795" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="scb_md_impact" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.8"/>
      <stop offset="0.45" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_md_fore" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16203a"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_md_sky)"/>
  <circle cx="48" cy="28" r="0.7" fill="#f2d795" opacity="0.28"/>
  <circle cx="110" cy="18" r="0.6" fill="#f2d795" opacity="0.24"/>
  <circle cx="170" cy="34" r="0.7" fill="#f2d795" opacity="0.28"/>
  <path d="M226,0 L390,0 L390,44 C362,52 336,44 314,50 C334,38 336,24 322,14 C300,4 264,8 226,0 Z" fill="#0c1220"/>
  <path d="M238,14 C260,10 286,14 300,24 C312,34 308,46 292,52 C310,52 328,46 336,36" fill="none" stroke="#1a2334" stroke-width="4" opacity="0.8"/>
  <path d="M252,30 C268,26 286,30 294,38" fill="none" stroke="#0a0f1a" stroke-width="5"/>
  <rect x="272" y="0" width="46" height="120" fill="url(#scb_md_pillar)"/>
  <rect x="284" y="0" width="22" height="120" fill="url(#scb_md_pillar)"/>
  <path d="M295,0 L291,34 L298,52 L292,84 L296,118" fill="none" stroke="#f2d795" stroke-opacity="0.95" stroke-width="3" stroke-linejoin="round"/>
  <path d="M295,0 L291,34 L298,52 L292,84 L296,118" fill="none" stroke="#e7e0cf" stroke-opacity="0.9" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M291,34 L282,44 M298,52 L307,64 M292,84 L284,94" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.1"/>
  <circle cx="296" cy="118" r="24" fill="url(#scb_md_impact)"/>
  <path d="M296,118 l12,-5 M296,118 l-12,5 M296,118 l4,-12 M296,118 l-4,12 M296,118 l11,7 M296,118 l-11,-7" stroke="#f2d795" stroke-opacity="0.8" stroke-width="1.1"/>
  <path d="M234,132 L268,112 L296,118 L322,108 L356,126 L390,120 L390,150 L234,150 Z" fill="#0d1524"/>
  <path d="M282,116 L296,118 L308,113" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.2"/>
  <path d="M0,140 L40,126 L86,136 L130,122 L176,134 L220,124 L256,134 L234,150 L0,150 Z M234,150 L390,150 L390,158 L0,158 Z" fill="#101a2c"/>
  <path d="M0,158 C80,152 180,156 260,150 C310,146 355,150 390,146 L390,240 L0,240 Z" fill="url(#scb_md_fore)"/>
  <path d="M30,240 C62,216 96,200 138,190 C170,183 202,180 232,178" fill="none" stroke="#2c3a58" stroke-width="9" stroke-linecap="round"/>
  <path d="M30,240 C62,216 96,200 138,190 C170,183 202,180 232,178" fill="none" stroke="#8d97a9" stroke-opacity="0.14" stroke-width="1.2"/>
  <path d="M70,216 l6,-2 M108,200 l6,-2 M196,183 l6,-1" stroke="#0a0f1a" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="128" cy="192" rx="26" ry="4" fill="#05070b" opacity="0.5"/>
  <circle cx="152" cy="148" r="5" fill="#06080c"/>
  <circle cx="149.5" cy="142.6" r="2" fill="#06080c"/>
  <path d="M150,155 L147,170" stroke="#06080c" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M150,157 L156,169" stroke="#06080c" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M149,158 L142,168" stroke="#06080c" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M147,170 L141,180 L140,188" fill="none" stroke="#06080c" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M147,170 L154,179 L156,188" fill="none" stroke="#06080c" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M147,158 C142,161 138,165 136,170 C140,167 144,163 147,161 Z" fill="#06080c"/>
  <path d="M155.5,145 C157.5,143.5 159.5,143 161.5,143.6 M154,153 C156,155.5 157.5,158.5 158.5,161.5" fill="none" stroke="#f2d795" stroke-opacity="0.55" stroke-width="1.1"/>
  <path d="M158,190 C158,186.5 161,184.5 165,184.5 C169,184.5 172,186.5 172,190 C172,192.5 169,194 165,194 C161,194 158,192.5 158,190 Z" fill="#0b1220"/>
  <path d="M161,185 L159,181 M169,185 L171,181" stroke="#0b1220" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M159,187.5 C162,186 168,186 171,187.5" fill="none" stroke="#f2d795" stroke-opacity="0.3" stroke-width="0.8"/>
  <path d="M140,190 C128,193 116,197 106,202 L142,199 Z" fill="#05070b" opacity="0.45"/>
  <path d="M20,228 l4,-8 M34,232 l3,-7 M350,196 l4,-7 M366,200 l3,-6" stroke="#0f1626" stroke-width="1.8" stroke-linecap="round"/>
</svg>`},As={...Os,...ks},js={CRIT_SUCCESS:{label:`大成`,cls:`s-crit`},SUCCESS:{label:`成`,cls:`s-ok`},FAIL:{label:`败`,cls:`s-fail`},CRIT_FAIL:{label:`大凶`,cls:`s-cfail`}},Ms=[{m:`打坐吐纳`,label:`稳修`,hint:`不快不慢，不出错`},{m:`悟道`,label:`悟道`,hint:`慢，但根基更纯，圆满度更高`},{m:`历练突破`,label:`历练`,hint:`快，有伤病之险`},{m:`丹药速成`,label:`服丹`,hint:`最快，但积丹毒（丹毒过深会锁死上限）`}];function Ns(e){let t=Math.round(e*100);return t>=80?`八九成`:t>=60?`六七成`:t>=40?`四五成`:t>=20?`两三成`:`一线`}function Ps(e){let t=e.session.ctx.actor,n=[],r=t.lifespanYears-t.ageMonths/12;r<15&&n.push({text:`寿余${Math.max(0,r).toFixed(0)}`,cls:`hot`}),t.僭越>=51&&n.push({text:`僭越${Math.round(t.僭越)}`,cls:t.僭越>=101?`hot`:`warn`}),t.堕度>=46&&n.push({text:`堕度${Math.round(t.堕度)}`,cls:t.堕度>=76?`hot`:`warn`}),t.丹毒>=50&&n.push({text:`丹毒${Math.round(t.丹毒)}`,cls:t.丹毒>=80?`hot`:`warn`});let i=t.souls.find(e=>!e.dissipated&&e.possession>=60);return i&&n.push({text:`魂扰${Math.round(i.possession)}`,cls:i.possession>=85?`hot`:`warn`}),n.slice(0,2)}function Fs(e){let{session:t,pov:n,name:r}=e.game,i=e=>Nn(e,n,r),a=Pn(n,r),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(`event`),[d,f]=(0,l.useState)(null),[p,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(!1),[x,S]=(0,l.useState)(null),[C,w]=(0,l.useState)(null),[,ee]=(0,l.useState)(0),te=(0,l.useRef)(0),ne=(0,l.useRef)(!1),re=(0,l.useRef)(null),ie=e=>{let n=t.beats.slice(te.current);te.current=t.beats.length,t.notices.length=0;let r=t.lastOutcome?js[t.lastOutcome]??null:null,i=[...t.lastDeltas];return t.lastOutcome=null,t.lastDeltas=[],{stamp:r,chips:i,beats:n,fromYear:e,toYear:Math.floor(t.ctx.year)}},ae=(r,i)=>{w(null),b(!1);let a=ie(i);if(r.kind===`gameover`){a.beats.length||a.stamp?(f(a),u(`between`),s(r)):e.onOver(r.result);return}s(r),a.beats.length||a.stamp||a.chips.length?(f(a),u(`between`)):u(`event`);let o=t.snapshot();o&&gs(o,n)};(0,l.useEffect)(()=>{if(ne.current)return;if(ne.current=!0,t.beats.length>0){te.current=t.beats.length;let n=t.currentPrompt();if(n){if(n.kind===`gameover`){e.onOver(n.result);return}s(n),u(`event`);return}}let n=Math.floor(t.ctx.year);ae(t.advance(),n)},[]),(0,l.useEffect)(()=>{window.scrollTo({top:0})},[c,o]);let oe=e=>{if(!o||o.kind!==`event`)return;let n=Math.floor(t.ctx.year),r=t.choose(e);ae(r,n)},se=e=>{if(!o||o.kind!==`event`||y)return;let t=o.choices[e];if(t){if(qn(o.card,t)&&C!==e){w(e);return}w(null),t.check?(b(!0),setTimeout(()=>oe(e),520)):oe(e)}},ce=(e,n)=>{if(!o||o.kind!==`breakthrough`)return;let r=Math.floor(t.ctx.year),i=t.decideBreakthrough(e,n);t.lastBreakthrough&&e&&(S(t.lastBreakthrough),setTimeout(()=>S(null),2e3)),ae(i,r)},le=()=>{if(o?.kind===`gameover`){e.onOver(o.result);return}u(`event`)},ue=e=>{if(!e)return null;let t=e===`命关`?Ss.命关:As[e];return t?(0,U.jsx)(`div`,{className:`card-art scene-art`,dangerouslySetInnerHTML:{__html:t}},e):null},T=()=>{if(!d)return null;let e=d.toYear-d.fromYear;return(0,U.jsxs)(`div`,{className:`page-card`,ref:re,children:[(0,U.jsxs)(`div`,{className:`between-head`,children:[(0,U.jsx)(`div`,{className:`year-mark`,children:e>1?`第 ${d.fromYear} — ${d.toYear} 年`:`第 ${d.toYear} 年`}),e>3&&(0,U.jsx)(`div`,{className:`passage`,children:In(e,t.ctx.actor.tier,a)??``})]}),(0,U.jsxs)(`div`,{className:`between-body`,children:[d.stamp&&(0,U.jsx)(`div`,{className:`stamp-row`,children:(0,U.jsx)(`span`,{className:`stamp ${d.stamp.cls}`,children:d.stamp.label})}),d.chips.length>0&&(0,U.jsx)(`div`,{className:`delta-chips`,children:d.chips.map((e,t)=>(0,U.jsx)(`span`,{className:`dchip d-${e.kind}`,children:e.text},t))}),d.beats.map((e,t)=>e.kind===`scene`?(0,U.jsxs)(`div`,{className:`mini-scene`,children:[e.title&&(0,U.jsxs)(`span`,{className:`mini-t`,children:[`【`,e.title,`】`]}),(0,U.jsxs)(`span`,{className:`mini-x`,children:[i(e.text).split(`
`)[0],`…`]})]},t):e.kind===`choice`?(0,U.jsx)(`div`,{className:`choice-line`,children:i(e.text)},t):e.kind===`outcome`?(0,U.jsx)(`div`,{className:`outcome`,children:i(e.text)},t):e.kind===`milestone`?(0,U.jsxs)(`div`,{className:`milestone`,children:[`◈ `,i(e.text)]},t):(0,U.jsx)(`div`,{className:`notice`,children:i(e.text)},t))]}),(0,U.jsx)(`div`,{className:`page-foot`,children:(0,U.jsx)(`button`,{className:`primary-btn`,onClick:le,children:o?.kind===`gameover`?`盖 棺`:`继 续`})})]})},E=()=>{if(!o)return null;if(o.kind===`event`){let e=o.card.tags?.includes(`岔路`),t=i(o.text).split(`
`).filter(e=>e.trim()!==``),n=.1,r=Math.min(t.length*n+.2,1.3);return(0,U.jsxs)(`div`,{className:`page-card`,ref:re,children:[ue(o.card.id),(0,U.jsxs)(`div`,{className:`page-body`,children:[e&&(0,U.jsx)(`div`,{className:`fork-badge rv`,children:`岔 · 人生节点`}),(0,U.jsxs)(`div`,{className:`t rv`,children:[`【`,o.card.title,`】`]}),t.map((e,t)=>(0,U.jsx)(`p`,{className:`rv`,style:{animationDelay:`${Math.min(t*n,1.1)}s`},children:e},t))]}),(0,U.jsx)(`div`,{className:`page-foot`,children:y?(0,U.jsx)(`div`,{className:`roll`,children:`天 机 演 算`}):(0,U.jsx)(`div`,{className:`inline-choices rv`,style:{animationDelay:`${r}s`},children:o.choices.map((e,t)=>{if(C===t){let n=Kn(o.card,e);return(0,U.jsxs)(`div`,{className:`confirm-block`,children:[(0,U.jsx)(`div`,{className:`confirm-choice`,children:i(e.text)}),(0,U.jsx)(`div`,{className:`risk-tags`,children:n.map((e,t)=>(0,U.jsx)(`span`,{className:`risk-tag r-${e.level}`,children:e.text},t))}),(0,U.jsxs)(`div`,{className:`confirm-row`,children:[(0,U.jsx)(`button`,{className:`ghost-btn`,onClick:()=>w(null),children:`再想想`}),(0,U.jsx)(`button`,{className:`confirm-go`,onClick:()=>se(t),children:`依此而行`})]})]},t)}return(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>se(t),children:[(0,U.jsx)(`span`,{className:`idx`,children:t+1}),i(e.text),qn(o.card,e)&&(0,U.jsx)(`span`,{className:`grave-mark`,children:`重`}),e.check&&(0,U.jsx)(`span`,{className:`check-mark`,children:`占`})]},t)})})})]},o.card.id)}if(o.kind!==`breakthrough`)return null;let e=t.ctx.actor;return(0,U.jsxs)(`div`,{className:`page-card`,ref:re,children:[ue(`命关`),(0,U.jsxs)(`div`,{className:`page-body`,children:[(0,U.jsx)(`div`,{className:`t rv`,children:`【命关】`}),(0,U.jsx)(`p`,{className:`rv`,style:{animationDelay:`0.1s`},children:i(`灵气已满，可冲击【${Rt(t.ctx.actor.path,o.toTier)}】。\n你掂量了一下 —— 约莫${Ns(o.estimate)}把握。`)})]}),(0,U.jsx)(`div`,{className:`page-foot`,children:(0,U.jsxs)(`div`,{className:`inline-choices rv`,style:{animationDelay:`0.4s`},children:[(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>ce(!0,!1),children:[(0,U.jsx)(`span`,{className:`idx`,children:`1`}),`冲关`]}),(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>ce(!0,!0),children:[(0,U.jsx)(`span`,{className:`idx`,children:`2`}),`稳中求进，兼冲隐藏之境`,e.道心>58?``:`（道心尚浅，凶险）`]}),(0,U.jsxs)(`button`,{className:`choice-btn`,onClick:()=>ce(!1,!1),children:[(0,U.jsx)(`span`,{className:`idx`,children:`3`}),`再温养几年`]})]})})]},`bt-${t.ctx.tick}`)},D=t.ctx.actor,de=Rt(D.path,D.tier);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`topbar`,children:[(0,U.jsx)(`span`,{className:`tb-name`,onClick:()=>m(!0),children:r}),(0,U.jsxs)(`span`,{className:`tb-sub`,onClick:()=>m(!0),children:[de,D.tier<10?` ${Math.round(D.sublevel*100)}%`:``,` · `,Math.floor(t.ctx.year),`年`]}),(0,U.jsx)(`span`,{className:`grow`}),Ps(e.game).map((e,t)=>(0,U.jsx)(`span`,{className:`chip ${e.cls}`,children:e.text},t)),(0,U.jsx)(`button`,{className:`linklike`,onClick:()=>v(!0),children:`回顾`}),(0,U.jsx)(`button`,{className:`linklike`,onClick:()=>m(!0),children:`人物`}),(0,U.jsx)(`button`,{className:`linklike`,onClick:e.onQuit,children:`搁笔`})]}),(0,U.jsx)(`div`,{className:`realm-bar`,children:(0,U.jsx)(`i`,{style:{width:`${Math.round(D.sublevel*100)}%`}})}),c===`between`?T():E(),x&&(0,U.jsxs)(`div`,{className:`bt-overlay ${x.ok?`bt-ok`:`bt-fail`}`,onClick:()=>S(null),children:[(0,U.jsx)(`div`,{className:`bt-word`,children:x.ok?x.name:`劫`}),(0,U.jsx)(`div`,{className:`bt-sub`,children:x.ok?x.hidden?`且入隐秘之境`:`境界已成`:`未过 · ${x.name}`})]}),t.ctx.systems.includes(`签到`)&&(0,U.jsxs)(`button`,{className:`sys-pill`,onClick:()=>g(!0),children:[(0,U.jsx)(`span`,{className:`sys-dot`}),`系统`]}),h&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>g(!1)}),(0,U.jsxs)(`div`,{className:`sys-panel fade-in`,children:[(0,U.jsx)(`div`,{className:`sys-title`,children:`— 修 仙 辅 助 系 统 v1.0 —`}),(0,U.jsx)(`div`,{className:`sys-line`,children:`尊贵的宿主，欢迎回来！`}),(0,U.jsx)(`button`,{className:`sys-btn`,onClick:()=>{t.signIn(),te.current=t.beats.length,t.notices.length=0,ee(e=>e+1)},children:`今 日 签 到`}),t.beats.length>0&&t.beats[t.beats.length-1].text.includes(`签到`)&&(0,U.jsx)(`div`,{className:`sys-line sys-log`,children:t.beats[t.beats.length-1].text}),(0,U.jsx)(`div`,{className:`sys-line sys-fine`,children:`* 签到即留痕。系统提醒宿主：天机可循，慎用。`}),t.ctx.systems.filter(e=>e!==`签到`).map(e=>(0,U.jsxs)(`div`,{className:`sys-line sys-locked`,children:[`「`,e,`」模块 · 面板权限暂未开放`]},e)),(0,U.jsx)(`button`,{className:`linklike`,style:{marginTop:10},onClick:()=>g(!1),children:`关闭`})]})]}),_&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>v(!1)}),(0,U.jsxs)(`div`,{className:`sheet fade-in`,children:[(0,U.jsxs)(`div`,{className:`sheet-head`,children:[(0,U.jsx)(`span`,{className:`sheet-title`,children:`回顾`}),(0,U.jsx)(`span`,{className:`sheet-sub`,children:`此生至今 · 亦即将来书上的正文`}),(0,U.jsx)(`button`,{className:`linklike`,onClick:()=>v(!1),children:`收起`})]}),(0,U.jsxs)(`div`,{className:`history-scroll`,children:[t.beats.map((e,t)=>e.kind===`scene`?(0,U.jsxs)(`div`,{className:`scene past`,style:{margin:`14px 0 4px`},children:[e.title&&(0,U.jsxs)(`div`,{className:`t`,children:[`【`,e.title,`】`]}),(0,U.jsx)(`div`,{className:`x`,children:i(e.text)})]},t):e.kind===`choice`?(0,U.jsx)(`div`,{className:`choice-line past`,children:i(e.text)},t):e.kind===`outcome`?(0,U.jsx)(`div`,{className:`outcome`,children:i(e.text)},t):e.kind===`milestone`?(0,U.jsxs)(`div`,{className:`milestone`,children:[`◈ `,i(e.text)]},t):(0,U.jsx)(`div`,{className:`notice`,children:i(e.text)},t)),t.beats.length===0&&(0,U.jsx)(`div`,{className:`notice`,children:`故事才刚要开始。`})]})]})]}),p&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>m(!1)}),(0,U.jsxs)(`div`,{className:`sheet fade-in`,children:[(0,U.jsxs)(`div`,{className:`sheet-head`,children:[(0,U.jsx)(`span`,{className:`sheet-title`,children:r}),(0,U.jsxs)(`span`,{className:`sheet-sub`,children:[D.path,` · `,D.talent.root,` · `,D.originRevealed?`身负「${D.origin}」`:`身世未明`]}),(0,U.jsx)(`button`,{className:`linklike`,onClick:()=>m(!1),children:`收起`})]}),(0,U.jsxs)(`div`,{className:`kv`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`境界`}),(0,U.jsxs)(`b`,{children:[de,`（`,Math.round(D.sublevel*100),`%）`]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`寿元`}),(0,U.jsxs)(`b`,{children:[Math.floor(D.ageMonths/12),` / `,D.lifespanYears]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`道心`}),(0,U.jsx)(`b`,{children:Math.round(D.道心)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`气运`}),(0,U.jsx)(`b`,{children:Math.round(D.气运)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`功德`}),(0,U.jsx)(`b`,{children:Math.round(D.功德)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`业障`}),(0,U.jsx)(`b`,{children:Math.round(D.业障)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`僭越`}),(0,U.jsx)(`b`,{children:Math.round(D.僭越)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`堕度`}),(0,U.jsx)(`b`,{children:Math.round(D.堕度)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`丹毒`}),(0,U.jsx)(`b`,{children:Math.round(D.丹毒)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`名望`}),(0,U.jsx)(`b`,{children:Math.round(D.名望)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`悟性`}),(0,U.jsx)(`b`,{children:D.talent.悟性})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`根骨`}),(0,U.jsx)(`b`,{children:D.talent.根骨})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`神魂`}),(0,U.jsx)(`b`,{children:D.talent.神魂})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`纯度`}),(0,U.jsx)(`b`,{children:Math.round(D.talent.purity)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`真实战力`}),(0,U.jsx)(`b`,{children:xe(D).toFixed(2)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`i`,{children:`藏拙`}),(0,U.jsxs)(`b`,{children:[Math.round(Se(D)*100),`%`]})]})]}),(t.ctx.systems.length>0||D.souls.some(e=>!e.dissipated))&&(0,U.jsxs)(`div`,{className:`sheet-sec`,children:[t.ctx.systems.length>0&&(0,U.jsxs)(`div`,{className:`sheet-line`,children:[`金手指：`,t.ctx.systems.join(`、`)]}),D.souls.filter(e=>!e.dissipated).map(e=>(0,U.jsxs)(`div`,{className:`sheet-line`,children:[`残魂 `,e.name,` —— 好感 `,Math.round(e.favor),` · 夺舍 `,Math.round(e.possession),`%`]},e.id))]}),(0,U.jsxs)(`div`,{className:`sheet-sec`,children:[(0,U.jsxs)(`div`,{className:`sheet-line`,children:[`未了因果：恶 `,t.ctx.karmaLedger.filter(e=>!e.resolved&&e.polarity<0).length,`· 善 `,t.ctx.karmaLedger.filter(e=>!e.resolved&&e.polarity>0).length,t.ctx.knowers.length?` · 知情者 ${t.ctx.knowers.length} 人`:``]}),[`金手指`,`残魂`,`真实修为`,`杀过某人`,`身世`].filter(e=>D.secrets[e]>=25).map(e=>(0,U.jsxs)(`div`,{className:`sheet-line`,children:[`暴露 · `,e,`：`,Math.round(D.secrets[e])]},e))]}),(0,U.jsxs)(`div`,{className:`sheet-sec`,children:[(0,U.jsx)(`div`,{className:`sheet-line`,style:{marginBottom:8},children:`修行之姿`}),(0,U.jsx)(`div`,{className:`row`,children:Ms.map(e=>(0,U.jsx)(`button`,{className:`ghost-btn ${t.stance===e.m?`on`:``}`,onClick:()=>{t.stance=e.m,ee(e=>e+1)},children:e.label},e.m))}),(0,U.jsx)(`div`,{className:`sheet-hint`,children:Ms.find(e=>e.m===t.stance)?.hint})]}),(0,U.jsxs)(`div`,{className:`sheet-sec`,children:[(0,U.jsx)(`div`,{className:`sheet-line`,style:{marginBottom:8},children:`问事之权`}),(0,U.jsxs)(`div`,{className:`row`,children:[(0,U.jsx)(`button`,{className:`ghost-btn ${t.autoResolveMinor?`on`:``}`,onClick:()=>{t.autoResolveMinor=!0,ee(e=>e+1)},children:`大事亲断`}),(0,U.jsx)(`button`,{className:`ghost-btn ${t.autoResolveMinor?``:`on`}`,onClick:()=>{t.autoResolveMinor=!1,ee(e=>e+1)},children:`事必躬亲`})]}),(0,U.jsx)(`div`,{className:`sheet-hint`,children:t.autoResolveMinor?`小事自行流转，只有影响走向的事才来问你`:`每一件事都亲自过目定夺`})]})]})]})]})}function Is(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ls(e){return Is(e).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`).replace(/\*([^*]+)\*/g,`<em>$1</em>`).replace(/`([^`]+)`/g,`<code>$1</code>`)}function Rs(e){let t=[],n=!1,r=[],i=[],a=[],o=()=>{a.length&&(t.push(`<p>${a.map(Ls).join(`
`)}</p>`),a=[])},s=()=>{i.length&&(t.push(`<blockquote>${i.map(Ls).join(`
`)}</blockquote>`),i=[])};for(let c of e.split(`
`)){if(c.startsWith("```")){o(),s(),n&&(t.push(`<pre class="mono">${Is(r.join(`
`))}</pre>`),r.length=0),n=!n;continue}if(n){r.push(c);continue}if(c.startsWith(`### `)){o(),s(),t.push(`<h3>${Ls(c.slice(4))}</h3>`);continue}if(c.startsWith(`## `)){o(),s(),t.push(`<h2>${Ls(c.slice(3))}</h2>`);continue}if(c.startsWith(`# `)){o(),s(),t.push(`<h1>${Ls(c.slice(2))}</h1>`);continue}if(c.trim()===`---`){o(),s(),t.push(`<hr/>`);continue}if(c.startsWith(`> `)||c===`>`){o(),i.push(c.replace(/^> ?/,``));continue}if(c.startsWith(`- `)){o(),s(),t.push(`<li>${Ls(c.slice(2))}</li>`);continue}if(c.trim()===``){o(),s();continue}s(),a.push(c)}return o(),s(),n&&r.length&&t.push(`<pre class="mono">${Is(r.join(`
`))}</pre>`),t.join(`
`)}function zs(e){let{game:t,result:n}=e,[r,i]=(0,l.useState)(`成书`),[a,o]=(0,l.useState)(t.pov===`我`?`我`:`他`),s=(0,l.useMemo)(()=>a===`他`?n.novel:Un({daoName:t.name,seed:t.seed,beats:t.session.beats,chronicle:n.chronicle,stele:n.stele,signature:t.session.signature(),pov:`我`}),[a,t,n]);return(0,U.jsxs)(`div`,{className:`over fade-in`,children:[(0,U.jsxs)(`div`,{className:`ending-grade`,children:[n.stele.grade,` · `,n.stele.serial]}),(0,U.jsx)(`div`,{className:`ending-name`,children:n.ending.name}),(0,U.jsx)(`div`,{className:`ending-text`,children:n.ending.text}),(0,U.jsxs)(`div`,{className:`ending-text`,style:{marginTop:4},children:[`道果 +`,n.daoFruit,`（累计 `,e.save.registry.daoFruit,`）`]}),(0,U.jsx)(`div`,{className:`tabs`,children:[`成书`,`一生录`,`道碑`].map(e=>(0,U.jsx)(`button`,{className:`tab ${r===e?`on`:``}`,onClick:()=>i(e),children:e},e))}),r===`成书`&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`row`,children:[(0,U.jsx)(`button`,{className:`ghost-btn ${a===`他`?`on`:``}`,onClick:()=>o(`他`),children:`传记体`}),(0,U.jsx)(`button`,{className:`ghost-btn ${a===`我`?`on`:``}`,onClick:()=>o(`我`),children:`自述体`}),(0,U.jsx)(`span`,{className:`grow`}),(0,U.jsx)(`button`,{className:`ghost-btn`,onClick:()=>{let e=new Blob([s],{type:`text/markdown;charset=utf-8`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`藏锋录·${t.name}${a===`我`?`自述`:`卷`}.md`,n.click(),URL.revokeObjectURL(n.href)},children:`下载此书`})]}),(0,U.jsx)(`div`,{className:`book`,dangerouslySetInnerHTML:{__html:Rs(s)}})]}),r===`一生录`&&(0,U.jsx)(`pre`,{className:`mono`,children:Ft(n.chronicle)}),r===`道碑`&&(0,U.jsx)(`pre`,{className:`mono`,children:Jt(n.stele)}),(0,U.jsx)(`div`,{className:`row`,style:{justifyContent:`center`,marginTop:10},children:(0,U.jsx)(`button`,{className:`primary-btn`,style:{flex:1},onClick:e.onRestart,children:`再 入 轮 回`})}),(0,U.jsx)(`div`,{className:`row`,style:{justifyContent:`center`},children:(0,U.jsx)(`button`,{className:`linklike`,onClick:e.onGallery,children:`去碑林看看`})})]})}function Bs(e){let[t,n]=(0,l.useState)(null),r=[...e.save.steles].reverse(),i=ds(e.save);return(0,U.jsxs)(`div`,{className:`gallery fade-in`,children:[(0,U.jsx)(`h2`,{children:`碑 林`}),(0,U.jsxs)(`div`,{className:`row`,style:{justifyContent:`center`,color:`var(--dim)`,fontSize:`0.85rem`},children:[Object.entries(i).map(([e,t])=>(0,U.jsxs)(`span`,{children:[e,`×`,t]},e)),r.length===0&&(0,U.jsx)(`span`,{children:`（空山无碑。去走一遭吧。）`})]}),r.map(e=>(0,U.jsxs)(`div`,{className:`stele-item`,onClick:()=>n(t===e.serial?null:e.serial),children:[(0,U.jsxs)(`div`,{className:`sh`,children:[(0,U.jsx)(`span`,{className:`grade`,children:e.grade}),(0,U.jsx)(`span`,{className:`nm`,children:e.daoName}),(0,U.jsxs)(`span`,{className:`meta`,children:[e.ending,` · `,e.finalRealm,` · 寿`,e.lifespan,`载 · 完满度`,e.perfection]}),(0,U.jsx)(`span`,{className:`meta`,children:`★`.repeat(e.rarity)})]}),t===e.serial&&(0,U.jsx)(`pre`,{className:`mono`,style:{marginTop:10},children:Jt(e)})]},e.serial)),(0,U.jsx)(`div`,{className:`row`,style:{justifyContent:`center`,marginTop:12},children:(0,U.jsx)(`button`,{className:`ghost-btn`,onClick:e.onBack,children:`回到入口`})})]})}function Vs(){let e=(0,l.useMemo)(()=>cs(),[]),[t]=(0,l.useState)(()=>ps()),[n,r]=(0,l.useState)(`cover`),[i,a]=(0,l.useState)(null),[o,s]=(0,l.useState)(null),c=n=>{vs();let i=new Jn({seed:n.seed,db:e,registry:t.registry,name:n.name,birthplace:n.birthplace});a({session:i,seed:n.seed,name:n.name,pov:n.pov,birthplace:n.birthplace}),s(null),r(`play`)},u=()=>{let n=_s();if(n)try{let i=new Jn({seed:n.snap.seed,db:e,registry:t.registry,restore:n.snap});a({session:i,seed:n.snap.seed,name:n.snap.name,pov:n.pov}),s(null),r(`play`)}catch{vs()}};return(0,U.jsxs)(`div`,{className:`shell`,children:[n===`cover`&&(0,U.jsx)(Ds,{save:t,onEnter:()=>r(`start`),onResume:u,onGallery:()=>r(`gallery`)}),n===`start`&&(0,U.jsx)(Es,{save:t,onStart:c,onResume:u,onGallery:()=>r(`gallery`)}),n===`play`&&i&&(0,U.jsx)(Fs,{game:i,onOver:e=>{vs(),t.steles.push(e.stele),ms(t),s(e),r(`over`)},onQuit:()=>r(`start`)}),n===`over`&&i&&o&&(0,U.jsx)(zs,{game:i,result:o,save:t,onRestart:()=>r(`start`),onGallery:()=>r(`gallery`)}),n===`gallery`&&(0,U.jsx)(Bs,{save:t,onBack:()=>r(`cover`)})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,U.jsx)(Vs,{}));