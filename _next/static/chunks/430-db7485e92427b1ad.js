(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{5487:function(t,e,r){"use strict";var n=r(9176),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(t){return n.isMemo(t)?a:o[t.$$typeof]||i}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(p){var i=h(r);i&&i!==p&&t(e,i,n)}var a=c(r);d&&(a=a.concat(d(r)));for(var o=l(e),m=l(r),y=0;y<a.length;++y){var g=a[y];if(!s[g]&&!(n&&n[g])&&!(m&&m[g])&&!(o&&o[g])){var v=f(r,g);try{u(e,g,v)}catch(t){}}}}return e}},3222:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return v}});let n=r(1024),i=r(8533),s=i._(r(2265)),a=r(4887),o=n._(r(2912)),l=r(2301),u=r(7709),c=r(9469);r(7873);let d=r(2706),f=n._(r(5033)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(t,e,r,n,i,s){let a=null==t?void 0:t.src;if(!t||t["data-loaded-src"]===a)return;t["data-loaded-src"]=a;let o="decode"in t?t.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("empty"!==e&&i(!0),null==r?void 0:r.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let n=!1,i=!1;r.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,e.preventDefault()},stopPropagation:()=>{i=!0,e.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(t)}})}function m(t){let[e,r]=s.version.split("."),n=parseInt(e,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:t}:{fetchpriority:t}}let y=(0,s.forwardRef)((t,e)=>{let{src:r,srcSet:n,sizes:i,height:a,width:o,decoding:l,className:u,style:c,fetchPriority:d,placeholder:f,loading:h,unoptimized:y,fill:g,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:w,onLoad:S,onError:P,...A}=t;return s.default.createElement("img",{...A,...m(d),loading:h,width:o,height:a,decoding:l,"data-nimg":g?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,s.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(P&&(t.src=t.src),t.complete&&p(t,f,v,b,x,y))},[r,f,v,b,x,P,y,e]),onLoad:t=>{let e=t.currentTarget;p(e,f,v,b,x,y)},onError:t=>{w(!0),"empty"!==f&&x(!0),P&&P(t)}})});function g(t){let{isAppRouter:e,imgAttributes:r}=t,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return e&&a.preload?((0,a.preload)(r.src,n),null):s.default.createElement(o.default,null,s.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let v=(0,s.forwardRef)((t,e)=>{let r=(0,s.useContext)(d.RouterContext),n=(0,s.useContext)(c.ImageConfigContext),i=(0,s.useMemo)(()=>{let t=h||n||u.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),r=t.deviceSizes.sort((t,e)=>t-e);return{...t,allSizes:e,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:o}=t,p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let m=(0,s.useRef)(o);(0,s.useEffect)(()=>{m.current=o},[o]);let[v,b]=(0,s.useState)(!1),[x,w]=(0,s.useState)(!1),{props:S,meta:P}=(0,l.getImgProps)(t,{defaultLoader:f.default,imgConf:i,blurComplete:v,showAltText:x});return s.default.createElement(s.default.Fragment,null,s.default.createElement(y,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:w,ref:e}),P.priority?s.default.createElement(g,{isAppRouter:!r,imgAttributes:S}):null)});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7555:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return s}});let n=r(1024),i=n._(r(2265)),s=i.default.createContext({})},8551:function(t,e){"use strict";function r(t){let{ampFirst:e=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===t?{}:t;return e||r&&n}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2301:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return o}}),r(7873);let n=r(9540),i=r(7709);function s(t){return void 0!==t.default}function a(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function o(t,e){var r;let o,l,u,{src:c,sizes:d,unoptimized:f=!1,priority:h=!1,loading:p,className:m,quality:y,width:g,height:v,fill:b=!1,style:x,onLoad:w,onLoadingComplete:S,placeholder:P="empty",blurDataURL:A,fetchPriority:k,layout:E,objectFit:C,objectPosition:V,lazyBoundary:T,lazyRoot:D,...M}=t,{imgConf:O,showAltText:_,blurComplete:j,defaultLoader:R}=e,F=O||i.imageConfigDefault;if("allSizes"in F)o=F;else{let t=[...F.deviceSizes,...F.imageSizes].sort((t,e)=>t-e),e=F.deviceSizes.sort((t,e)=>t-e);o={...F,allSizes:t,deviceSizes:e}}let L=M.loader||R;delete M.loader,delete M.srcSet;let $="__next_img_default"in L;if($){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=L;L=e=>{let{config:r,...n}=e;return t(n)}}if(E){"fill"===E&&(b=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];t&&(x={...x,...t});let e={responsive:"100vw",fill:"100vw"}[E];e&&!d&&(d=e)}let I="",B=a(g),N=a(v);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let t=s(c)?c.default:c;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(l=t.blurWidth,u=t.blurHeight,A=A||t.blurDataURL,I=t.src,!b){if(B||N){if(B&&!N){let e=B/t.width;N=Math.round(t.height*e)}else if(!B&&N){let e=N/t.height;B=Math.round(t.width*e)}}else B=t.width,N=t.height}}let z=!h&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:I)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,z=!1),o.unoptimized&&(f=!0),$&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),h&&(k="high");let U=a(y),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:V}:{},_?{}:{color:"transparent"},x),Y=j||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:N,blurWidth:l,blurHeight:u,blurDataURL:A||"",objectFit:W.objectFit})+'")':'url("'+P+'")',H=Y?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},X=function(t){let{config:e,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=t;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(t,e,r){let{deviceSizes:n,allSizes:i}=t;if(r){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let n;n=t.exec(r);n)e.push(parseInt(n[2]));if(e.length){let t=.01*Math.min(...e);return{widths:i.filter(e=>e>=n[0]*t),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof e)return{widths:n,kind:"w"};let s=[...new Set([e,2*e].map(t=>i.find(e=>e>=t)||i[i.length-1]))];return{widths:s,kind:"x"}}(e,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((t,n)=>o({config:e,src:r,quality:s,width:t})+" "+("w"===u?t:n+1)+u).join(", "),src:o({config:e,src:r,quality:s,width:l[c]})}}({config:o,src:c,unoptimized:f,width:B,quality:U,sizes:d,loader:L}),G={...M,loading:z?"lazy":p,fetchPriority:k,width:B,height:N,decoding:"async",className:m,style:{...W,...H},sizes:X.sizes,srcSet:X.srcSet,src:X.src},Z={unoptimized:f,priority:h,placeholder:P,fill:b};return{props:G,meta:Z}}},2912:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{defaultHead:function(){return c},default:function(){return p}});let n=r(1024),i=r(8533),s=i._(r(2265)),a=n._(r(2378)),o=r(7555),l=r(1330),u=r(8551);function c(t){void 0===t&&(t=!1);let e=[s.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"==typeof e||"number"==typeof e?t:e.type===s.default.Fragment?t.concat(s.default.Children.toArray(e.props.children).reduce((t,e)=>"string"==typeof e||"number"==typeof e?t:t.concat(e),[])):t.concat(e)}r(7873);let f=["name","httpEquiv","charSet","itemProp"];function h(t,e){let{inAmpMode:r}=e;return t.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let t=new Set,e=new Set,r=new Set,n={};return i=>{let s=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let e=i.key.slice(i.key.indexOf("$")+1);t.has(e)?s=!1:t.add(e)}switch(i.type){case"title":case"base":e.has(i.type)?s=!1:e.add(i.type);break;case"meta":for(let t=0,e=f.length;t<e;t++){let e=f[t];if(i.props.hasOwnProperty(e)){if("charSet"===e)r.has(e)?s=!1:r.add(e);else{let t=i.props[e],r=n[e]||new Set;("name"!==e||!a)&&r.has(t)?s=!1:(r.add(t),n[e]=r)}}}}return s}}()).reverse().map((t,e)=>{let n=t.key||e;if(!r&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))){let e={...t.props||{}};return e["data-href"]=e.href,e.href=void 0,e["data-optimized-fonts"]=!0,s.default.cloneElement(t,e)}return s.default.cloneElement(t,{key:n})})}let p=function(t){let{children:e}=t,r=(0,s.useContext)(o.AmpStateContext),n=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},e)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9540:function(t,e){"use strict";function r(t){let{widthInt:e,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=t,o=n?40*n:e,l=i?40*i:r,u=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9469:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(1024),i=n._(r(2265)),s=r(7709),a=i.default.createContext(s.imageConfigDefault)},7709:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1295:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return u},unstable_getImgProps:function(){return l}});let n=r(1024),i=r(2301),s=r(7873),a=r(3222),o=n._(r(5033)),l=t=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:e}=(0,i.getImgProps)(t,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}},u=a.Image},5033:function(t,e){"use strict";function r(t){let{config:e,src:r,width:n,quality:i}=t;return e.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2706:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return s}});let n=r(1024),i=n._(r(2265)),s=i.default.createContext(null)},2378:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}});let n=r(8533),i=n._(r(2265)),s=i.useLayoutEffect,a=i.useEffect;function o(t){let{headManager:e,reduceComponentsToState:r}=t;function n(){if(e&&e.mountedInstances){let n=i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(r(n,t))}}return s(()=>{var r;return null==e||null==(r=e.mountedInstances)||r.add(t.children),()=>{var r;null==e||null==(r=e.mountedInstances)||r.delete(t.children)}}),s(()=>(e&&(e._pendingUpdate=n),()=>{e&&(e._pendingUpdate=n)})),a(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}},7873:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return r}});let r=t=>{}},5971:function(t){t.exports={style:{fontFamily:"'__Orbitron_f8a07c', '__Orbitron_Fallback_f8a07c'",fontStyle:"normal"},className:"__className_f8a07c"}},622:function(t,e,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,r){var n,s={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,n)&&!l.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===s[n]&&(s[n]=e[n]);return{$$typeof:i,type:t,key:u,ref:c,props:s,_owner:o.current}}e.Fragment=s,e.jsx=u,e.jsxs=u},7437:function(t,e,r){"use strict";t.exports=r(622)},6691:function(t,e,r){t.exports=r(1295)},4463:function(t,e){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case i:case a:case s:case d:case f:return t;default:switch(t=t&&t.$$typeof){case u:case l:case c:case p:case h:case o:return t;default:return e}}case n:return e}}}(t)===i}},2772:function(t,e,r){"use strict";t.exports=r(4463)},8236:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case c:case d:case s:case o:case a:case h:return t;default:switch(t=t&&t.$$typeof){case u:case f:case y:case m:case l:return t;default:return e}}case i:return e}}}function S(t){return w(t)===d}e.AsyncMode=c,e.ConcurrentMode=d,e.ContextConsumer=u,e.ContextProvider=l,e.Element=n,e.ForwardRef=f,e.Fragment=s,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=o,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return S(t)||w(t)===c},e.isConcurrentMode=S,e.isContextConsumer=function(t){return w(t)===u},e.isContextProvider=function(t){return w(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return w(t)===f},e.isFragment=function(t){return w(t)===s},e.isLazy=function(t){return w(t)===y},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===i},e.isProfiler=function(t){return w(t)===o},e.isStrictMode=function(t){return w(t)===a},e.isSuspense=function(t){return w(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===d||t===o||t===a||t===h||t===p||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===l||t.$$typeof===u||t.$$typeof===f||t.$$typeof===v||t.$$typeof===b||t.$$typeof===x||t.$$typeof===g)},e.typeOf=w},9176:function(t,e,r){"use strict";t.exports=r(8236)},2400:function(t,e,r){"use strict";r.d(e,{e:function(){return d}});var n=r(2265);function i(t,e,r,n){return new(r||(r=Promise))(function(i,s){function a(t){try{l(n.next(t))}catch(t){s(t)}}function o(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(a,o)}l((n=n.apply(t,e||[])).next())})}function s(t,e){var r,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}function a(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,s=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=s.next()).done;)a.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return a}function l(t,e,r){if(r||2==arguments.length)for(var n,i=0,s=e.length;i<s;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))}function u(t,e,r,n){for(var u=[],d=4;d<arguments.length;d++)u[d-4]=arguments[d];return i(this,void 0,void 0,function(){var d,f,h,p,m;return s(this,function(y){switch(y.label){case 0:y.trys.push([0,12,13,14]),f=(d=a(u)).next(),y.label=1;case 1:if(f.done)return[3,11];switch(typeof(h=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(t,e,r,n,u){return i(this,void 0,void 0,function(){var d;return s(this,function(f){switch(f.label){case 0:var h,p;return h=t.textContent,p=o(e).slice(0),d=l(l([],o(h),!1),[NaN],!1).findIndex(function(t,e){return p[e]!==t}),[4,function(t,e,r,n,l){return i(this,void 0,void 0,function(){var i,u,d,f,h,p,m,y,g,v,b,x;return s(this,function(w){switch(w.label){case 0:if(i=e,l){for(u=0,d=1;d<e.length;d++)if(h=(f=o([e[d-1],e[d]],2))[0],(p=f[1]).length>h.length||""===p){u=d;break}i=e.slice(u,e.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),y=(m=a(function(t){var e,r,n,i,o;return s(this,function(l){switch(l.label){case 0:e=function(t){return s(this,function(e){switch(e.label){case 0:return[4,{op:function(e){return requestAnimationFrame(function(){return e.textContent=t})},opCode:function(e){return""===t||e.textContent.length>t.length?"DELETE":"WRITING"}}];case 1:return e.sent(),[2]}})},l.label=1;case 1:l.trys.push([1,6,7,8]),n=(r=a(t)).next(),l.label=2;case 2:return n.done?[3,5]:[5,e(n.value)];case 3:l.sent(),l.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return i={error:l.sent()},[3,8];case 7:try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(i)throw i.error}return[7];case 8:return[2]}})}(i))).next(),w.label=2;case 2:return y.done?[3,5]:(v="WRITING"===(g=y.value).opCode(t)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),g.op(t),[4,c(v)]);case 3:w.sent(),w.label=4;case 4:return y=m.next(),[3,2];case 5:return[3,8];case 6:return b={error:w.sent()},[3,8];case 7:try{y&&!y.done&&(x=m.return)&&x.call(m)}finally{if(b)throw b.error}return[7];case 8:return[2]}})})}(t,l(l([],o(function(t,e,r){var n=o(t).slice(0);return void 0===e&&(e=0),void 0===r&&(r=n.length),s(this,function(t){switch(t.label){case 0:return r>e?[4,n.slice(0,--r).join("")]:[3,2];case 1:return t.sent(),[3,0];case 2:return[2]}})}(t.textContent,d)),!1),o(function(t,e,r){var n=o(t).slice(0);return void 0===e&&(e=0),void 0===r&&(r=n.length),s(this,function(t){switch(t.label){case 0:return e<r?[4,n.slice(0,++e).join("")]:[3,2];case 1:return t.sent(),[3,0];case 2:return[2]}})}(e,d)),!1),r,n,u)];case 1:return f.sent(),[2]}})})}(t,h,e,r,n)];case 3:case 5:case 7:return y.sent(),[3,10];case 4:return[4,c(h)];case 6:return[4,h.apply(void 0,l([t,e,r,n],o(u),!1))];case 8:return[4,h];case 9:y.sent(),y.label=10;case 10:return f=d.next(),[3,1];case 11:return[3,14];case 12:return p={error:y.sent()},[3,14];case 13:try{f&&!f.done&&(m=d.return)&&m.call(d)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function c(t){return i(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,new Promise(function(e){return setTimeout(e,t)})];case 1:return e.sent(),[2]}})})}!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var d=(0,n.memo)((0,n.forwardRef)(function(t,e){var r=t.sequence,i=t.repeat,s=t.className,a=t.speed,c=void 0===a?40:a,d=t.deletionSpeed,f=t.omitDeletionAnimation,h=void 0!==f&&f,p=t.preRenderFirstString,m=t.wrapper,y=t.cursor,g=void 0===y||y,v=t.style,b=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)0>e.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),x=b["aria-label"],w=b["aria-hidden"];d||(d=c);var S=[,,].fill(40);[c,d].forEach(function(t,e){switch(typeof t){case"number":S[e]=Math.abs(t-100);break;case"object":var r=t.type,n=t.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(S[e]=n)}});var P,A,k,E,C,V,T,D,M=S[0],O=S[1],_=(void 0===P&&(P=null),A=(0,n.useRef)(P),(0,n.useEffect)(function(){e&&("function"==typeof e?e(A.current):e.current=A.current)},[e]),A),j="index-module_type__E-SaG";k=s?"".concat(g?j+" ":"").concat(s):g?j:"",E=(0,n.useRef)(function(){var t,e=r;return i===1/0?t=u:"number"==typeof i&&(e=Array(1+i).fill(r).flat()),u.apply(void 0,l(l([_.current,M,O,h],o(e),!1),[t],!1)),function(){_.current}}),C=(0,n.useRef)(),V=(0,n.useRef)(!1),T=(0,n.useRef)(!1),D=o((0,n.useState)(0),2)[1],V.current&&(T.current=!0),(0,n.useEffect)(function(){return V.current||(C.current=E.current(),V.current=!0),D(function(t){return t+1}),function(){T.current&&C.current&&C.current()}},[]);var R=void 0!==p&&p?r.find(function(t){return"string"==typeof t})||"":null;return n.createElement(void 0===m?"span":m,{"aria-hidden":w,"aria-label":x,style:v,className:k,children:x?n.createElement("span",{"aria-hidden":"true",ref:_,children:R}):R,ref:x?void 0:_})}),function(t,e){return!0})},7042:function(t,e,r){"use strict";e.Z=function(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=function t(e){var r,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(i&&(i+=" "),i+=n);else for(r in e)e[r]&&(i&&(i+=" "),i+=r)}return i}(t))&&(n&&(n+=" "),n+=e);return n}},2167:function(t,e,r){"use strict";r.d(e,{M:function(){return y}});var n=r(2265),i=r(538);function s(){let t=(0,n.useRef)(!1);return(0,i.L)(()=>(t.current=!0,()=>{t.current=!1}),[]),t}var a=r(3041),o=r(8243),l=r(961);class u extends n.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){let t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:t,isPresent:e}){let r=(0,n.useId)(),i=(0,n.useRef)(null),s=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:t,height:n,top:a,left:o}=s.current;if(e||!i.current||!t||!n)return;i.current.dataset.motionPopId=r;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[e]),n.createElement(u,{isPresent:e,childRef:i,sizeRef:s},n.cloneElement(t,{ref:i}))}let d=({children:t,initial:e,isPresent:r,onExitComplete:i,custom:s,presenceAffectsLayout:a,mode:u})=>{let d=(0,l.h)(f),h=(0,n.useId)(),p=(0,n.useMemo)(()=>({id:h,initial:e,isPresent:r,custom:s,onExitComplete:t=>{for(let e of(d.set(t,!0),d.values()))if(!e)return;i&&i()},register:t=>(d.set(t,!1),()=>d.delete(t))}),a?void 0:[r]);return(0,n.useMemo)(()=>{d.forEach((t,e)=>d.set(e,!1))},[r]),n.useEffect(()=>{r||d.size||!i||i()},[r]),"popLayout"===u&&(t=n.createElement(c,{isPresent:r},t)),n.createElement(o.O.Provider,{value:p},t)};function f(){return new Map}var h=r(781),p=r(6567);let m=t=>t.key||"",y=({children:t,custom:e,initial:r=!0,onExitComplete:o,exitBeforeEnter:l,presenceAffectsLayout:u=!0,mode:c="sync"})=>{var f;(0,p.k)(!l,"Replace exitBeforeEnter with mode='wait'");let y=(0,n.useContext)(h.p).forceRender||function(){let t=s(),[e,r]=(0,n.useState)(0),i=(0,n.useCallback)(()=>{t.current&&r(e+1)},[e]),o=(0,n.useCallback)(()=>a.Wi.postRender(i),[i]);return[o,e]}()[0],g=s(),v=function(t){let e=[];return n.Children.forEach(t,t=>{(0,n.isValidElement)(t)&&e.push(t)}),e}(t),b=v,x=(0,n.useRef)(new Map).current,w=(0,n.useRef)(b),S=(0,n.useRef)(new Map).current,P=(0,n.useRef)(!0);if((0,i.L)(()=>{P.current=!1,function(t,e){t.forEach(t=>{let r=m(t);e.set(r,t)})}(v,S),w.current=b}),f=()=>{P.current=!0,S.clear(),x.clear()},(0,n.useEffect)(()=>()=>f(),[]),P.current)return n.createElement(n.Fragment,null,b.map(t=>n.createElement(d,{key:m(t),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:u,mode:c},t)));b=[...b];let A=w.current.map(m),k=v.map(m),E=A.length;for(let t=0;t<E;t++){let e=A[t];-1!==k.indexOf(e)||x.has(e)||x.set(e,void 0)}return"wait"===c&&x.size&&(b=[]),x.forEach((t,r)=>{if(-1!==k.indexOf(r))return;let i=S.get(r);if(!i)return;let s=A.indexOf(r),a=t;a||(a=n.createElement(d,{key:m(i),isPresent:!1,onExitComplete:()=>{S.delete(r),x.delete(r);let t=w.current.findIndex(t=>t.key===r);if(w.current.splice(t,1),!x.size){if(w.current=v,!1===g.current)return;y(),o&&o()}},custom:e,presenceAffectsLayout:u,mode:c},i),x.set(r,a)),b.splice(s,0,a)}),b=b.map(t=>{let e=t.key;return x.has(e)?t:n.createElement(d,{key:m(t),isPresent:!0,presenceAffectsLayout:u,mode:c},t)}),n.createElement(n.Fragment,null,x.size?b:b.map(t=>(0,n.cloneElement)(t)))}},781:function(t,e,r){"use strict";r.d(e,{p:function(){return i}});var n=r(2265);let i=(0,n.createContext)({})},8243:function(t,e,r){"use strict";r.d(e,{O:function(){return i}});var n=r(2265);let i=(0,n.createContext)(null)},3041:function(t,e,r){"use strict";r.d(e,{Pn:function(){return o},Wi:function(){return a},frameData:function(){return l},S6:function(){return u}});var n=r(6977);class i{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){let e=this.order.indexOf(t);-1!==e&&(this.order.splice(e,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}let s=["prepare","read","update","preRender","render","postRender"],{schedule:a,cancel:o,state:l,steps:u}=function(t,e){let r=!1,n=!0,a={delta:0,timestamp:0,isProcessing:!1},o=s.reduce((t,e)=>(t[e]=function(t){let e=new i,r=new i,n=0,s=!1,a=!1,o=new WeakSet,l={schedule:(t,i=!1,a=!1)=>{let l=a&&s,u=l?e:r;return i&&o.add(t),u.add(t)&&l&&s&&(n=e.order.length),t},cancel:t=>{r.remove(t),o.delete(t)},process:i=>{if(s){a=!0;return}if(s=!0,[e,r]=[r,e],r.clear(),n=e.order.length)for(let r=0;r<n;r++){let n=e.order[r];n(i),o.has(n)&&(l.schedule(n),t())}s=!1,a&&(a=!1,l.process(i))}};return l}(()=>r=!0),t),{}),l=t=>o[t].process(a),u=()=>{let i=performance.now();r=!1,a.delta=n?1e3/60:Math.max(Math.min(i-a.timestamp,40),1),a.timestamp=i,a.isProcessing=!0,s.forEach(l),a.isProcessing=!1,r&&e&&(n=!1,t(u))},c=()=>{r=!0,n=!0,a.isProcessing||t(u)},d=s.reduce((t,e)=>{let n=o[e];return t[e]=(t,e=!1,i=!1)=>(r||c(),n.schedule(t,e,i)),t},{});return{schedule:d,cancel:t=>s.forEach(e=>o[e].cancel(t)),state:a,steps:o}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:n.Z,!0)},7870:function(t,e,r){"use strict";let n;r.d(e,{E:function(){return iF}});var i,s,a=r(2265);let o=(0,a.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),l=(0,a.createContext)({});var u=r(8243),c=r(538);let d=(0,a.createContext)({strict:!1});function f(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function h(t){return"string"==typeof t||Array.isArray(t)}function p(t){return"object"==typeof t&&"function"==typeof t.start}let m=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],y=["initial",...m];function g(t){return p(t.animate)||y.some(e=>h(t[e]))}function v(t){return!!(g(t)||t.variants)}function b(t){return Array.isArray(t)?t.join(" "):t}let x={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},w={};for(let t in x)w[t]={isEnabled:e=>x[t].some(t=>!!e[t])};var S=r(6613),P=r(781);let A=(0,a.createContext)({}),k=Symbol.for("motionComponentSymbol"),E=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function C(t){if("string"!=typeof t||t.includes("-"));else if(E.indexOf(t)>-1||/[A-Z]/.test(t))return!0;return!1}let V={},T=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],D=new Set(T);function M(t,{layout:e,layoutId:r}){return D.has(t)||t.startsWith("origin")||(e||void 0!==r)&&(!!V[t]||"opacity"===t)}let O=t=>!!(t&&t.getVelocity),_={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j=T.length,R=t=>e=>"string"==typeof e&&e.startsWith(t),F=R("--"),L=R("var(--"),$=(t,e)=>e&&"number"==typeof t?e.transform(t):t,I=(t,e,r)=>Math.min(Math.max(r,t),e),B={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},N={...B,transform:t=>I(0,1,t)},z={...B,default:1},U=t=>Math.round(1e5*t)/1e5,W=/(-)?([\d]*\.?[\d])+/g,Y=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,H=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function X(t){return"string"==typeof t}let G=t=>({test:e=>X(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Z=G("deg"),q=G("%"),K=G("px"),J=G("vh"),Q=G("vw"),tt={...q,parse:t=>q.parse(t)/100,transform:t=>q.transform(100*t)},te={...B,transform:Math.round},tr={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:Z,rotateX:Z,rotateY:Z,rotateZ:Z,scale:z,scaleX:z,scaleY:z,scaleZ:z,skew:Z,skewX:Z,skewY:Z,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:N,originX:tt,originY:tt,originZ:K,zIndex:te,fillOpacity:N,strokeOpacity:N,numOctaves:te};function tn(t,e,r,n){let{style:i,vars:s,transform:a,transformOrigin:o}=t,l=!1,u=!1,c=!0;for(let t in e){let r=e[t];if(F(t)){s[t]=r;continue}let n=tr[t],d=$(r,n);if(D.has(t)){if(l=!0,a[t]=d,!c)continue;r!==(n.default||0)&&(c=!1)}else t.startsWith("origin")?(u=!0,o[t]=d):i[t]=d}if(!e.transform&&(l||n?i.transform=function(t,{enableHardwareAcceleration:e=!0,allowTransformNone:r=!0},n,i){let s="";for(let e=0;e<j;e++){let r=T[e];if(void 0!==t[r]){let e=_[r]||r;s+=`${e}(${t[r]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,n?"":s):r&&n&&(s="none"),s}(t.transform,r,c,n):i.transform&&(i.transform="none")),u){let{originX:t="50%",originY:e="50%",originZ:r=0}=o;i.transformOrigin=`${t} ${e} ${r}`}}let ti=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ts(t,e,r){for(let n in e)O(e[n])||M(n,r)||(t[n]=e[n])}function ta(t,e,r){let n={},i=function(t,e,r){let n=t.style||{},i={};return ts(i,n,t),Object.assign(i,function({transformTemplate:t},e,r){return(0,a.useMemo)(()=>{let n=ti();return tn(n,e,{enableHardwareAcceleration:!r},t),Object.assign({},n.vars,n.style)},[e])}(t,e,r)),t.transformValues?t.transformValues(i):i}(t,e,r);return t.drag&&!1!==t.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}let to=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function tl(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||to.has(t)}let tu=t=>!tl(t);try{(i=require("@emotion/is-prop-valid").default)&&(tu=t=>t.startsWith("on")?!tl(t):i(t))}catch(t){}function tc(t,e,r){return"string"==typeof t?t:K.transform(e+r*t)}let td={offset:"stroke-dashoffset",array:"stroke-dasharray"},tf={offset:"strokeDashoffset",array:"strokeDasharray"};function th(t,{attrX:e,attrY:r,attrScale:n,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},c,d,f){if(tn(t,u,c,f),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:h,style:p,dimensions:m}=t;h.transform&&(m&&(p.transform=h.transform),delete h.transform),m&&(void 0!==i||void 0!==s||p.transform)&&(p.transformOrigin=function(t,e,r){let n=tc(e,t.x,t.width),i=tc(r,t.y,t.height);return`${n} ${i}`}(m,void 0!==i?i:.5,void 0!==s?s:.5)),void 0!==e&&(h.x=e),void 0!==r&&(h.y=r),void 0!==n&&(h.scale=n),void 0!==a&&function(t,e,r=1,n=0,i=!0){t.pathLength=1;let s=i?td:tf;t[s.offset]=K.transform(-n);let a=K.transform(e),o=K.transform(r);t[s.array]=`${a} ${o}`}(h,a,o,l,!1)}let tp=()=>({...ti(),attrs:{}}),tm=t=>"string"==typeof t&&"svg"===t.toLowerCase();function ty(t,e,r,n){let i=(0,a.useMemo)(()=>{let r=tp();return th(r,e,{enableHardwareAcceleration:!1},tm(n),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){let e={};ts(e,t.style,t),i.style={...e,...i.style}}return i}let tg=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function tv(t,{style:e,vars:r},n,i){for(let s in Object.assign(t.style,e,i&&i.getProjectionStyles(n)),r)t.style.setProperty(s,r[s])}let tb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tx(t,e,r,n){for(let r in tv(t,e,void 0,n),e.attrs)t.setAttribute(tb.has(r)?r:tg(r),e.attrs[r])}function tw(t,e){let{style:r}=t,n={};for(let i in r)(O(r[i])||e.style&&O(e.style[i])||M(i,t))&&(n[i]=r[i]);return n}function tS(t,e){let r=tw(t,e);for(let n in t)if(O(t[n])||O(e[n])){let e=-1!==T.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[e]=t[n]}return r}function tP(t,e,r,n={},i={}){return"function"==typeof e&&(e=e(void 0!==r?r:t.custom,n,i)),"string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e&&(e=e(void 0!==r?r:t.custom,n,i)),e}var tA=r(961);let tk=t=>Array.isArray(t),tE=t=>!!(t&&"object"==typeof t&&t.mix&&t.toValue),tC=t=>tk(t)?t[t.length-1]||0:t;function tV(t){let e=O(t)?t.get():t;return tE(e)?e.toValue():e}let tT=t=>(e,r)=>{let n=(0,a.useContext)(l),i=(0,a.useContext)(u.O),s=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:r},n,i,s){let a={latestValues:function(t,e,r,n){let i={},s=n(t,{});for(let t in s)i[t]=tV(s[t]);let{initial:a,animate:o}=t,l=g(t),u=v(t);e&&u&&!l&&!1!==t.inherit&&(void 0===a&&(a=e.initial),void 0===o&&(o=e.animate));let c=!!r&&!1===r.initial;c=c||!1===a;let d=c?o:a;if(d&&"boolean"!=typeof d&&!p(d)){let e=Array.isArray(d)?d:[d];e.forEach(e=>{let r=tP(t,e);if(!r)return;let{transitionEnd:n,transition:s,...a}=r;for(let t in a){let e=a[t];if(Array.isArray(e)){let t=c?e.length-1:0;e=e[t]}null!==e&&(i[t]=e)}for(let t in n)i[t]=n[t]})}return i}(n,i,s,t),renderState:e()};return r&&(a.mount=t=>r(n,t,a)),a})(t,e,n,i);return r?s():(0,tA.h)(s)};var tD=r(3041);let tM={useVisualState:tT({scrapeMotionValuesFromProps:tS,createRenderState:tp,onMount:(t,e,{renderState:r,latestValues:n})=>{tD.Wi.read(()=>{try{r.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){r.dimensions={x:0,y:0,width:0,height:0}}}),tD.Wi.render(()=>{th(r,n,{enableHardwareAcceleration:!1},tm(e.tagName),t.transformTemplate),tx(e,r)})}})},tO={useVisualState:tT({scrapeMotionValuesFromProps:tw,createRenderState:ti})};function t_(t,e,r,n={passive:!0}){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r)}let tj=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function tR(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}let tF=t=>e=>tj(e)&&t(e,tR(e));function tL(t,e,r,n){return t_(t,e,tF(r),n)}let t$=(t,e)=>r=>e(t(r)),tI=(...t)=>t.reduce(t$);function tB(t){let e=null;return()=>null===e&&(e=t,()=>{e=null})}let tN=tB("dragHorizontal"),tz=tB("dragVertical");function tU(t){let e=!1;if("y"===t)e=tz();else if("x"===t)e=tN();else{let t=tN(),r=tz();t&&r?e=()=>{t(),r()}:(t&&t(),r&&r())}return e}function tW(){let t=tU(!0);return!t||(t(),!1)}class tY{constructor(t){this.isMounted=!1,this.node=t}update(){}}function tH(t,e){let r="pointer"+(e?"enter":"leave"),n="onHover"+(e?"Start":"End");return tL(t.current,r,(r,i)=>{if("touch"===r.type||tW())return;let s=t.getProps();t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",e),s[n]&&tD.Wi.update(()=>s[n](r,i))},{passive:!t.getProps()[n]})}let tX=(t,e)=>!!e&&(t===e||tX(t,e.parentElement));var tG=r(6977);function tZ(t,e){if(!e)return;let r=new PointerEvent("pointer"+t);e(r,tR(r))}let tq=new WeakMap,tK=new WeakMap,tJ=t=>{let e=tq.get(t.target);e&&e(t)},tQ=t=>{t.forEach(tJ)},t0={some:0,all:1};function t1(t,e){if(!Array.isArray(e))return!1;let r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function t3(t,e,r){let n=t.getProps();return tP(n,e,void 0!==r?r:n.custom,function(t){let e={};return t.values.forEach((t,r)=>e[r]=t.get()),e}(t),function(t){let e={};return t.values.forEach((t,r)=>e[r]=t.getVelocity()),e}(t))}let t5="data-"+tg("framerAppearId");var t2=r(6567);let t4=t=>1e3*t,t6=t=>t/1e3,t7={current:!1},t9=t=>Array.isArray(t)&&"number"==typeof t[0],t8=([t,e,r,n])=>`cubic-bezier(${t}, ${e}, ${r}, ${n})`,et={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:t8([0,.65,.55,1]),circOut:t8([.55,0,1,.45]),backIn:t8([.31,.01,.66,-.59]),backOut:t8([.33,1.53,.69,.99])},ee=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t;function er(t,e,r,n){if(t===e&&r===n)return tG.Z;let i=e=>(function(t,e,r,n,i){let s,a;let o=0;do(s=ee(a=e+(r-e)/2,n,i)-t)>0?r=a:e=a;while(Math.abs(s)>1e-7&&++o<12);return a})(e,0,1,t,r);return t=>0===t||1===t?t:ee(i(t),e,n)}let en=er(.42,0,1,1),ei=er(0,0,.58,1),es=er(.42,0,.58,1),ea=t=>Array.isArray(t)&&"number"!=typeof t[0],eo=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,el=t=>e=>1-t(1-e),eu=t=>1-Math.sin(Math.acos(t)),ec=el(eu),ed=eo(ec),ef=er(.33,1.53,.69,.99),eh=el(ef),ep=eo(eh),em={linear:tG.Z,easeIn:en,easeInOut:es,easeOut:ei,circIn:eu,circInOut:ed,circOut:ec,backIn:eh,backInOut:ep,backOut:ef,anticipate:t=>(t*=2)<1?.5*eh(t):.5*(2-Math.pow(2,-10*(t-1)))},ey=t=>{if(Array.isArray(t)){(0,t2.k)(4===t.length,"Cubic bezier arrays must contain four numerical values.");let[e,r,n,i]=t;return er(e,r,n,i)}return"string"==typeof t?((0,t2.k)(void 0!==em[t],`Invalid easing type '${t}'`),em[t]):t},eg=(t,e)=>r=>!!(X(r)&&H.test(r)&&r.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(r,e)),ev=(t,e,r)=>n=>{if(!X(n))return n;let[i,s,a,o]=n.match(W);return{[t]:parseFloat(i),[e]:parseFloat(s),[r]:parseFloat(a),alpha:void 0!==o?parseFloat(o):1}},eb=t=>I(0,255,t),ex={...B,transform:t=>Math.round(eb(t))},ew={test:eg("rgb","red"),parse:ev("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:n=1})=>"rgba("+ex.transform(t)+", "+ex.transform(e)+", "+ex.transform(r)+", "+U(N.transform(n))+")"},eS={test:eg("#"),parse:function(t){let e="",r="",n="",i="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),n=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),n=t.substring(3,4),i=t.substring(4,5),e+=e,r+=r,n+=n,i+=i),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:ew.transform},eP={test:eg("hsl","hue"),parse:ev("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:n=1})=>"hsla("+Math.round(t)+", "+q.transform(U(e))+", "+q.transform(U(r))+", "+U(N.transform(n))+")"},eA={test:t=>ew.test(t)||eS.test(t)||eP.test(t),parse:t=>ew.test(t)?ew.parse(t):eP.test(t)?eP.parse(t):eS.parse(t),transform:t=>X(t)?t:t.hasOwnProperty("red")?ew.transform(t):eP.transform(t)},ek=(t,e,r)=>-r*t+r*e+t;function eE(t,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(e-t)*6*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}let eC=(t,e,r)=>{let n=t*t;return Math.sqrt(Math.max(0,r*(e*e-n)+n))},eV=[eS,ew,eP],eT=t=>eV.find(e=>e.test(t));function eD(t){let e=eT(t);(0,t2.k)(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`);let r=e.parse(t);return e===eP&&(r=function({hue:t,saturation:e,lightness:r,alpha:n}){t/=360,r/=100;let i=0,s=0,a=0;if(e/=100){let n=r<.5?r*(1+e):r+e-r*e,o=2*r-n;i=eE(o,n,t+1/3),s=eE(o,n,t),a=eE(o,n,t-1/3)}else i=s=a=r;return{red:Math.round(255*i),green:Math.round(255*s),blue:Math.round(255*a),alpha:n}}(r)),r}let eM=(t,e)=>{let r=eD(t),n=eD(e),i={...r};return t=>(i.red=eC(r.red,n.red,t),i.green=eC(r.green,n.green,t),i.blue=eC(r.blue,n.blue,t),i.alpha=ek(r.alpha,n.alpha,t),ew.transform(i))},eO={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:tG.Z},e_={regex:Y,countKey:"Colors",token:"${c}",parse:eA.parse},ej={regex:W,countKey:"Numbers",token:"${n}",parse:B.parse};function eR(t,{regex:e,countKey:r,token:n,parse:i}){let s=t.tokenised.match(e);s&&(t["num"+r]=s.length,t.tokenised=t.tokenised.replace(e,n),t.values.push(...s.map(i)))}function eF(t){let e=t.toString(),r={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&eR(r,eO),eR(r,e_),eR(r,ej),r}function eL(t){return eF(t).values}function e$(t){let{values:e,numColors:r,numVars:n,tokenised:i}=eF(t),s=e.length;return t=>{let e=i;for(let i=0;i<s;i++)e=i<n?e.replace(eO.token,t[i]):i<n+r?e.replace(e_.token,eA.transform(t[i])):e.replace(ej.token,U(t[i]));return e}}let eI=t=>"number"==typeof t?0:t,eB={test:function(t){var e,r;return isNaN(t)&&X(t)&&((null===(e=t.match(W))||void 0===e?void 0:e.length)||0)+((null===(r=t.match(Y))||void 0===r?void 0:r.length)||0)>0},parse:eL,createTransformer:e$,getAnimatableNone:function(t){let e=eL(t),r=e$(t);return r(e.map(eI))}},eN=(t,e)=>r=>`${r>0?e:t}`;function ez(t,e){return"number"==typeof t?r=>ek(t,e,r):eA.test(t)?eM(t,e):t.startsWith("var(")?eN(t,e):eY(t,e)}let eU=(t,e)=>{let r=[...t],n=r.length,i=t.map((t,r)=>ez(t,e[r]));return t=>{for(let e=0;e<n;e++)r[e]=i[e](t);return r}},eW=(t,e)=>{let r={...t,...e},n={};for(let i in r)void 0!==t[i]&&void 0!==e[i]&&(n[i]=ez(t[i],e[i]));return t=>{for(let e in n)r[e]=n[e](t);return r}},eY=(t,e)=>{let r=eB.createTransformer(e),n=eF(t),i=eF(e),s=n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers;return s?tI(eU(n.values,i.values),r):((0,t2.K)(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),eN(t,e))},eH=(t,e,r)=>{let n=e-t;return 0===n?1:(r-t)/n},eX=(t,e)=>r=>ek(t,e,r);function eG(t,e,{clamp:r=!0,ease:n,mixer:i}={}){let s=t.length;if((0,t2.k)(s===e.length,"Both input and output ranges must be the same length"),1===s)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());let a=function(t,e,r){let n=[],i=r||function(t){if("number"==typeof t);else if("string"==typeof t)return eA.test(t)?eM:eY;else if(Array.isArray(t))return eU;else if("object"==typeof t)return eW;return eX}(t[0]),s=t.length-1;for(let r=0;r<s;r++){let s=i(t[r],t[r+1]);if(e){let t=Array.isArray(e)?e[r]||tG.Z:e;s=tI(t,s)}n.push(s)}return n}(e,n,i),o=a.length,l=e=>{let r=0;if(o>1)for(;r<t.length-2&&!(e<t[r+1]);r++);let n=eH(t[r],t[r+1],e);return a[r](n)};return r?e=>l(I(t[0],t[s-1],e)):l}function eZ({duration:t=300,keyframes:e,times:r,ease:n="easeInOut"}){let i=ea(n)?n.map(ey):ey(n),s={done:!1,value:e[0]},a=(r&&r.length===e.length?r:function(t){let e=[0];return function(t,e){let r=t[t.length-1];for(let n=1;n<=e;n++){let i=eH(0,e,n);t.push(ek(r,1,i))}}(e,t.length-1),e}(e)).map(e=>e*t),o=eG(a,e,{ease:Array.isArray(i)?i:e.map(()=>i||es).splice(0,e.length-1)});return{calculatedDuration:t,next:e=>(s.value=o(e),s.done=e>=t,s)}}function eq(t,e,r){var n,i;let s=Math.max(e-5,0);return n=r-t(s),(i=e-s)?n*(1e3/i):0}function eK(t,e){return t*Math.sqrt(1-e*e)}let eJ=["duration","bounce"],eQ=["stiffness","damping","mass"];function e0(t,e){return e.some(e=>void 0!==t[e])}function e1({keyframes:t,restDelta:e,restSpeed:r,...n}){let i;let s=t[0],a=t[t.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:c,velocity:d,duration:f,isResolvedFromDuration:h}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!e0(t,eQ)&&e0(t,eJ)){let r=function({duration:t=800,bounce:e=.25,velocity:r=0,mass:n=1}){let i,s;(0,t2.K)(t<=t4(10),"Spring duration must be 10 seconds or less");let a=1-e;a=I(.05,1,a),t=I(.01,10,t6(t)),a<1?(i=e=>{let n=e*a,i=n*t,s=eK(e,a);return .001-(n-r)/s*Math.exp(-i)},s=e=>{let n=e*a,s=n*t,o=Math.pow(a,2)*Math.pow(e,2)*t,l=eK(Math.pow(e,2),a),u=-i(e)+.001>0?-1:1;return u*((s*r+r-o)*Math.exp(-s))/l}):(i=e=>{let n=Math.exp(-e*t),i=(e-r)*t+1;return -.001+n*i},s=e=>{let n=Math.exp(-e*t),i=(r-e)*(t*t);return n*i});let o=5/t,l=function(t,e,r){let n=r;for(let r=1;r<12;r++)n-=t(n)/e(n);return n}(i,s,o);if(t=t4(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{let e=Math.pow(l,2)*n;return{stiffness:e,damping:2*a*Math.sqrt(n*e),duration:t}}}(t);(e={...e,...r,velocity:0,mass:1}).isResolvedFromDuration=!0}return e}(n),p=d?-t6(d):0,m=u/(2*Math.sqrt(l*c)),y=a-s,g=t6(Math.sqrt(l/c)),v=5>Math.abs(y);if(r||(r=v?.01:2),e||(e=v?.005:.5),m<1){let t=eK(g,m);i=e=>{let r=Math.exp(-m*g*e);return a-r*((p+m*g*y)/t*Math.sin(t*e)+y*Math.cos(t*e))}}else if(1===m)i=t=>a-Math.exp(-g*t)*(y+(p+g*y)*t);else{let t=g*Math.sqrt(m*m-1);i=e=>{let r=Math.exp(-m*g*e),n=Math.min(t*e,300);return a-r*((p+m*g*y)*Math.sinh(n)+t*y*Math.cosh(n))/t}}return{calculatedDuration:h&&f||null,next:t=>{let n=i(t);if(h)o.done=t>=f;else{let s=p;0!==t&&(s=m<1?eq(i,t,n):0);let l=Math.abs(s)<=r,u=Math.abs(a-n)<=e;o.done=l&&u}return o.value=o.done?a:n,o}}}function e3({keyframes:t,velocity:e=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:c}){let d,f;let h=t[0],p={done:!1,value:h},m=t=>void 0!==o&&t<o||void 0!==l&&t>l,y=t=>void 0===o?l:void 0===l?o:Math.abs(o-t)<Math.abs(l-t)?o:l,g=r*e,v=h+g,b=void 0===a?v:a(v);b!==v&&(g=b-h);let x=t=>-g*Math.exp(-t/n),w=t=>b+x(t),S=t=>{let e=x(t),r=w(t);p.done=Math.abs(e)<=u,p.value=p.done?b:r},P=t=>{m(p.value)&&(d=t,f=e1({keyframes:[p.value,y(p.value)],velocity:eq(w,t,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:t=>{let e=!1;return(f||void 0!==d||(e=!0,S(t),P(t)),void 0!==d&&t>d)?f.next(t-d):(e||S(t),p)}}}let e5=t=>{let e=({timestamp:e})=>t(e);return{start:()=>tD.Wi.update(e,!0),stop:()=>(0,tD.Pn)(e),now:()=>tD.frameData.isProcessing?tD.frameData.timestamp:performance.now()}};function e2(t){let e=0,r=t.next(e);for(;!r.done&&e<2e4;)e+=50,r=t.next(e);return e>=2e4?1/0:e}let e4={decay:e3,inertia:e3,tween:eZ,keyframes:eZ,spring:e1};function e6({autoplay:t=!0,delay:e=0,driver:r=e5,keyframes:n,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:o="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let h,p,m,y,g,v=1,b=!1,x=()=>{p=new Promise(t=>{h=t})};x();let w=e4[i]||eZ;w!==eZ&&"number"!=typeof n[0]&&(y=eG([0,100],n,{clamp:!1}),n=[0,100]);let S=w({...f,keyframes:n});"mirror"===o&&(g=w({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let P="idle",A=null,k=null,E=null;null===S.calculatedDuration&&s&&(S.calculatedDuration=e2(S));let{calculatedDuration:C}=S,V=1/0,T=1/0;null!==C&&(T=(V=C+a)*(s+1)-a);let D=0,M=t=>{if(null===k)return;v>0&&(k=Math.min(k,t)),v<0&&(k=Math.min(t-T/v,k)),D=null!==A?A:Math.round(t-k)*v;let r=D-e*(v>=0?1:-1),i=v>=0?r<0:r>T;D=Math.max(r,0),"finished"===P&&null===A&&(D=T);let l=D,u=S;if(s){let t=D/V,e=Math.floor(t),r=t%1;!r&&t>=1&&(r=1),1===r&&e--,e=Math.min(e,s+1);let n=!!(e%2);n&&("reverse"===o?(r=1-r,a&&(r-=a/V)):"mirror"===o&&(u=g));let i=I(0,1,r);D>T&&(i="reverse"===o&&n?1:0),l=i*V}let c=i?{done:!1,value:n[0]}:u.next(l);y&&(c.value=y(c.value));let{done:f}=c;i||null===C||(f=v>=0?D>=T:D<=0);let h=null===A&&("finished"===P||"running"===P&&f);return d&&d(c.value),h&&j(),c},O=()=>{m&&m.stop(),m=void 0},_=()=>{P="idle",O(),h(),x(),k=E=null},j=()=>{P="finished",c&&c(),O(),h()},R=()=>{if(b)return;m||(m=r(M));let t=m.now();l&&l(),null!==A?k=t-A:k&&"finished"!==P||(k=t),"finished"===P&&x(),E=k,A=null,P="running",m.start()};t&&R();let F={then:(t,e)=>p.then(t,e),get time(){return t6(D)},set time(newTime){D=newTime=t4(newTime),null===A&&m&&0!==v?k=m.now()-newTime/v:A=newTime},get duration(){let t=null===S.calculatedDuration?e2(S):S.calculatedDuration;return t6(t)},get speed(){return v},set speed(newSpeed){if(newSpeed===v||!m)return;v=newSpeed,F.time=t6(D)},get state(){return P},play:R,pause:()=>{P="paused",A=D},stop:()=>{b=!0,"idle"!==P&&(P="idle",u&&u(),_())},cancel:()=>{null!==E&&M(E),_()},complete:()=>{P="finished"},sample:t=>(k=0,M(t))};return F}let e7=(s=()=>Object.hasOwnProperty.call(Element.prototype,"animate"),()=>(void 0===n&&(n=s()),n)),e9=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),e8=(t,e)=>"spring"===e.type||"backgroundColor"===t||!function t(e){return!!(!e||"string"==typeof e&&et[e]||t9(e)||Array.isArray(e)&&e.every(t))}(e.ease),rt={type:"spring",stiffness:500,damping:25,restSpeed:10},re=t=>({type:"spring",stiffness:550,damping:0===t?2*Math.sqrt(550):30,restSpeed:10}),rr={type:"keyframes",duration:.8},rn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ri=(t,{keyframes:e})=>e.length>2?rr:D.has(t)?t.startsWith("scale")?re(e[1]):rt:rn,rs=(t,e)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(eB.test(e)||"0"===e)&&!e.startsWith("url(")),ra=new Set(["brightness","contrast","saturate","opacity"]);function ro(t){let[e,r]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;let[n]=r.match(W)||[];if(!n)return t;let i=r.replace(n,""),s=ra.has(e)?1:0;return n!==r&&(s*=100),e+"("+s+i+")"}let rl=/([a-z-]*)\(.*?\)/g,ru={...eB,getAnimatableNone:t=>{let e=t.match(rl);return e?e.map(ro).join(" "):t}},rc={...tr,color:eA,backgroundColor:eA,outlineColor:eA,fill:eA,stroke:eA,borderColor:eA,borderTopColor:eA,borderRightColor:eA,borderBottomColor:eA,borderLeftColor:eA,filter:ru,WebkitFilter:ru},rd=t=>rc[t];function rf(t,e){let r=rd(t);return r!==ru&&(r=eB),r.getAnimatableNone?r.getAnimatableNone(e):void 0}let rh=t=>/^0[^.\s]+$/.test(t);function rp(t,e){return t[e]||t.default||t}let rm=(t,e,r,n={})=>i=>{let s=rp(n,t)||{},a=s.delay||n.delay||0,{elapsed:o=0}=n;o-=t4(a);let l=function(t,e,r,n){let i,s;let a=rs(e,r);i=Array.isArray(r)?[...r]:[null,r];let o=void 0!==n.from?n.from:t.get(),l=[];for(let t=0;t<i.length;t++){var u;null===i[t]&&(i[t]=0===t?o:i[t-1]),("number"==typeof(u=i[t])?0===u:null!==u?"none"===u||"0"===u||rh(u):void 0)&&l.push(t),"string"==typeof i[t]&&"none"!==i[t]&&"0"!==i[t]&&(s=i[t])}if(a&&l.length&&s)for(let t=0;t<l.length;t++){let r=l[t];i[r]=rf(e,s)}return i}(e,t,r,s),u=l[0],c=l[l.length-1],d=rs(t,u),f=rs(t,c);(0,t2.K)(d===f,`You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let h={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-o,onUpdate:t=>{e.set(t),s.onUpdate&&s.onUpdate(t)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(!function({when:t,delay:e,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(s)&&(h={...h,...ri(t,h)}),h.duration&&(h.duration=t4(h.duration)),h.repeatDelay&&(h.repeatDelay=t4(h.repeatDelay)),!d||!f||t7.current||!1===s.type)return function({keyframes:t,delay:e,onUpdate:r,onComplete:n}){let i=()=>(r&&r(t[t.length-1]),n&&n(),{time:0,speed:1,duration:0,play:tG.Z,pause:tG.Z,stop:tG.Z,then:t=>(t(),Promise.resolve()),cancel:tG.Z,complete:tG.Z});return e?e6({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}(t7.current?{...h,delay:0}:h);if(e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){let r=function(t,e,{onUpdate:r,onComplete:n,...i}){let s,a;let o=e7()&&e9.has(e)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type;if(!o)return!1;let l=!1,u=()=>{a=new Promise(t=>{s=t})};u();let{keyframes:c,duration:d=300,ease:f,times:h}=i;if(e8(e,i)){let t=e6({...i,repeat:0,delay:0}),e={done:!1,value:c[0]},r=[],n=0;for(;!e.done&&n<2e4;)r.push((e=t.sample(n)).value),n+=10;h=void 0,c=r,d=n-10,f="linear"}let p=function(t,e,r,{delay:n=0,duration:i,repeat:s=0,repeatType:a="loop",ease:o,times:l}={}){let u={[e]:r};l&&(u.offset=l);let c=function t(e){if(e)return t9(e)?t8(e):Array.isArray(e)?e.map(t):et[e]}(o);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:n,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:"reverse"===a?"alternate":"normal"})}(t.owner.current,e,c,{...i,duration:d,ease:f,times:h});i.syncStart&&(p.startTime=tD.frameData.isProcessing?tD.frameData.timestamp:document.timeline?document.timeline.currentTime:performance.now());let m=()=>p.cancel(),y=()=>{tD.Wi.update(m),s(),u()};return p.onfinish=()=>{t.set(function(t,{repeat:e,repeatType:r="loop"}){let n=e&&"loop"!==r&&e%2==1?0:t.length-1;return t[n]}(c,i)),n&&n(),y()},{then:(t,e)=>a.then(t,e),attachTimeline:t=>(p.timeline=t,p.onfinish=null,tG.Z),get time(){return t6(p.currentTime||0)},set time(newTime){p.currentTime=t4(newTime)},get speed(){return p.playbackRate},set speed(newSpeed){p.playbackRate=newSpeed},get duration(){return t6(d)},play:()=>{l||(p.play(),(0,tD.Pn)(m))},pause:()=>p.pause(),stop:()=>{if(l=!0,"idle"===p.playState)return;let{currentTime:e}=p;if(e){let r=e6({...i,autoplay:!1});t.setWithVelocity(r.sample(e-10).value,r.sample(e).value,10)}y()},complete:()=>p.finish(),cancel:y}}(e,t,h);if(r)return r}return e6(h)};function ry(t){return!!(O(t)&&t.add)}let rg=t=>/^\-?\d*\.?\d+$/.test(t);function rv(t,e){-1===t.indexOf(e)&&t.push(e)}function rb(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}class rx{constructor(){this.subscriptions=[]}add(t){return rv(this.subscriptions,t),()=>rb(this.subscriptions,t)}notify(t,e,r){let n=this.subscriptions.length;if(n){if(1===n)this.subscriptions[0](t,e,r);else for(let i=0;i<n;i++){let n=this.subscriptions[i];n&&n(t,e,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let rw=t=>!isNaN(parseFloat(t)),rS={current:void 0};class rP{constructor(t,e={}){this.version="10.16.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(t,e=!0)=>{this.prev=this.current,this.current=t;let{delta:r,timestamp:n}=tD.frameData;this.lastUpdated!==n&&(this.timeDelta=r,this.lastUpdated=n,tD.Wi.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>tD.Wi.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=rw(this.current),this.owner=e.owner}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new rx);let r=this.events[t].add(e);return"change"===t?()=>{r(),tD.Wi.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,r){this.set(e),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return rS.current&&rS.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var t,e;return this.canTrackVelocity?(t=parseFloat(this.current)-parseFloat(this.prev),(e=this.timeDelta)?t*(1e3/e):0):0}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rA(t,e){return new rP(t,e)}let rk=t=>e=>e.test(t),rE=[B,K,q,Z,Q,J,{test:t=>"auto"===t,parse:t=>t}],rC=t=>rE.find(rk(t)),rV=[...rE,eA,eB],rT=t=>rV.find(rk(t));function rD(t,e,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:a,...o}=t.makeTargetAnimatable(e),l=t.getValue("willChange");n&&(s=n);let u=[],c=i&&t.animationState&&t.animationState.getState()[i];for(let e in o){let n=t.getValue(e),i=o[e];if(!n||void 0===i||c&&function({protectedKeys:t,needsAnimating:e},r){let n=t.hasOwnProperty(r)&&!0!==e[r];return e[r]=!1,n}(c,e))continue;let a={delay:r,elapsed:0,...s};if(window.HandoffAppearAnimations&&!n.hasAnimated){let r=t.getProps()[t5];r&&(a.elapsed=window.HandoffAppearAnimations(r,e,n,tD.Wi),a.syncStart=!0)}n.start(rm(e,n,i,t.shouldReduceMotion&&D.has(e)?{type:!1}:a));let d=n.animation;ry(l)&&(l.add(e),d.then(()=>l.remove(e))),u.push(d)}return a&&Promise.all(u).then(()=>{a&&function(t,e){let r=t3(t,e),{transitionEnd:n={},transition:i={},...s}=r?t.makeTargetAnimatable(r,!1):{};for(let e in s={...s,...n}){let r=tC(s[e]);t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,rA(r))}}(t,a)}),u}function rM(t,e,r={}){let n=t3(t,e,r.custom),{transition:i=t.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);let s=n?()=>Promise.all(rD(t,n,r)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(n=0)=>{let{delayChildren:s=0,staggerChildren:a,staggerDirection:o}=i;return function(t,e,r=0,n=0,i=1,s){let a=[],o=(t.variantChildren.size-1)*n,l=1===i?(t=0)=>t*n:(t=0)=>o-t*n;return Array.from(t.variantChildren).sort(rO).forEach((t,n)=>{t.notify("AnimationStart",e),a.push(rM(t,e,{...s,delay:r+l(n)}).then(()=>t.notify("AnimationComplete",e)))}),Promise.all(a)}(t,e,s+n,a,o,r)}:()=>Promise.resolve(),{when:o}=i;if(!o)return Promise.all([s(),a(r.delay)]);{let[t,e]="beforeChildren"===o?[s,a]:[a,s];return t().then(()=>e())}}function rO(t,e){return t.sortNodePosition(e)}let r_=[...m].reverse(),rj=m.length;function rR(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let rF=0,rL=(t,e)=>Math.abs(t-e);class r${constructor(t,e,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let t=rN(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,r=function(t,e){let r=rL(t.x,e.x),n=rL(t.y,e.y);return Math.sqrt(r**2+n**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!r)return;let{point:n}=t,{timestamp:i}=tD.frameData;this.history.push({...n,timestamp:i});let{onStart:s,onMove:a}=this.handlers;e||(s&&s(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=rI(e,this.transformPagePoint),tD.Wi.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let{onEnd:r,onSessionEnd:n}=this.handlers,i=rN("pointercancel"===t.type?this.lastMoveEventInfo:rI(e,this.transformPagePoint),this.history);this.startEvent&&r&&r(t,i),n&&n(t,i)},!tj(t))return;this.handlers=e,this.transformPagePoint=r;let n=tR(t),i=rI(n,this.transformPagePoint),{point:s}=i,{timestamp:a}=tD.frameData;this.history=[{...s,timestamp:a}];let{onSessionStart:o}=e;o&&o(t,rN(i,this.history)),this.removeListeners=tI(tL(window,"pointermove",this.handlePointerMove),tL(window,"pointerup",this.handlePointerUp),tL(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),(0,tD.Pn)(this.updatePoint)}}function rI(t,e){return e?{point:e(t.point)}:t}function rB(t,e){return{x:t.x-e.x,y:t.y-e.y}}function rN({point:t},e){return{point:t,delta:rB(t,rz(e)),offset:rB(t,e[0]),velocity:function(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,n=null,i=rz(t);for(;r>=0&&(n=t[r],!(i.timestamp-n.timestamp>t4(.1)));)r--;if(!n)return{x:0,y:0};let s=t6(i.timestamp-n.timestamp);if(0===s)return{x:0,y:0};let a={x:(i.x-n.x)/s,y:(i.y-n.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(e,0)}}function rz(t){return t[t.length-1]}function rU(t){return t.max-t.min}function rW(t,e=0,r=.01){return Math.abs(t-e)<=r}function rY(t,e,r,n=.5){t.origin=n,t.originPoint=ek(e.min,e.max,t.origin),t.scale=rU(r)/rU(e),(rW(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=ek(r.min,r.max,t.origin)-t.originPoint,(rW(t.translate)||isNaN(t.translate))&&(t.translate=0)}function rH(t,e,r,n){rY(t.x,e.x,r.x,n?n.originX:void 0),rY(t.y,e.y,r.y,n?n.originY:void 0)}function rX(t,e,r){t.min=r.min+e.min,t.max=t.min+rU(e)}function rG(t,e,r){t.min=e.min-r.min,t.max=t.min+rU(e)}function rZ(t,e,r){rG(t.x,e.x,r.x),rG(t.y,e.y,r.y)}function rq(t,e,r){return{min:void 0!==e?t.min+e:void 0,max:void 0!==r?t.max+r-(t.max-t.min):void 0}}function rK(t,e){let r=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,n]=[n,r]),{min:r,max:n}}function rJ(t,e,r){return{min:rQ(t,e),max:rQ(t,r)}}function rQ(t,e){return"number"==typeof t?t:t[e]||0}let r0=()=>({translate:0,scale:1,origin:0,originPoint:0}),r1=()=>({x:r0(),y:r0()}),r3=()=>({min:0,max:0}),r5=()=>({x:r3(),y:r3()});function r2(t){return[t("x"),t("y")]}function r4({top:t,left:e,right:r,bottom:n}){return{x:{min:e,max:r},y:{min:t,max:n}}}function r6(t){return void 0===t||1===t}function r7({scale:t,scaleX:e,scaleY:r}){return!r6(t)||!r6(e)||!r6(r)}function r9(t){return r7(t)||r8(t)||t.z||t.rotate||t.rotateX||t.rotateY}function r8(t){var e,r;return(e=t.x)&&"0%"!==e||(r=t.y)&&"0%"!==r}function nt(t,e,r,n,i){return void 0!==i&&(t=n+i*(t-n)),n+r*(t-n)+e}function ne(t,e=0,r=1,n,i){t.min=nt(t.min,e,r,n,i),t.max=nt(t.max,e,r,n,i)}function nr(t,{x:e,y:r}){ne(t.x,e.translate,e.scale,e.originPoint),ne(t.y,r.translate,r.scale,r.originPoint)}function nn(t){return Number.isInteger(t)?t:t>1.0000000000001||t<.999999999999?t:1}function ni(t,e){t.min=t.min+e,t.max=t.max+e}function ns(t,e,[r,n,i]){let s=void 0!==e[i]?e[i]:.5,a=ek(t.min,t.max,s);ne(t,e[r],e[n],a,e.scale)}let na=["x","scaleX","originX"],no=["y","scaleY","originY"];function nl(t,e){ns(t.x,e,na),ns(t.y,e,no)}function nu(t,e){return r4(function(t,e){if(!e)return t;let r=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(t.getBoundingClientRect(),e))}let nc=new WeakMap;class nd{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=r5(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){let{presenceContext:r}=this.visualElement;r&&!1===r.isPresent||(this.panSession=new r$(t,{onSessionStart:t=>{this.stopAnimation(),e&&this.snapToCursor(tR(t,"page").point)},onStart:(t,e)=>{let{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=tU(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),r2(t=>{let e=this.getAxisMotionValue(t).get()||0;if(q.test(e)){let{projection:r}=this.visualElement;if(r&&r.layout){let n=r.layout.layoutBox[t];if(n){let t=rU(n);e=t*(parseFloat(e)/100)}}}this.originPoint[t]=e}),i&&tD.Wi.update(()=>i(t,e),!1,!0);let{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{let{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:s}=this.getProps();if(!r&&!this.openGlobalLock)return;let{offset:a}=e;if(n&&null===this.currentDirection){this.currentDirection=function(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}(a),null!==this.currentDirection&&i&&i(this.currentDirection);return}this.updateAxis("x",e.point,a),this.updateAxis("y",e.point,a),this.visualElement.render(),s&&s(t,e)},onSessionEnd:(t,e)=>this.stop(t,e)},{transformPagePoint:this.visualElement.getTransformPagePoint()}))}stop(t,e){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:n}=e;this.startAnimation(n);let{onDragEnd:i}=this.getProps();i&&tD.Wi.update(()=>i(t,e))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,r){let{drag:n}=this.getProps();if(!r||!nf(t,n,this.currentDirection))return;let i=this.getAxisMotionValue(t),s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=function(t,{min:e,max:r},n){return void 0!==e&&t<e?t=n?ek(e,t,n.min):Math.max(t,e):void 0!==r&&t>r&&(t=n?ek(r,t,n.max):Math.min(t,r)),t}(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){let{dragConstraints:t,dragElastic:e}=this.getProps(),{layout:r}=this.visualElement.projection||{},n=this.constraints;t&&f(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=function(t,{top:e,left:r,bottom:n,right:i}){return{x:rq(t.x,r,i),y:rq(t.y,e,n)}}(r.layoutBox,t):this.constraints=!1,this.elastic=function(t=.35){return!1===t?t=0:!0===t&&(t=.35),{x:rJ(t,"left","right"),y:rJ(t,"top","bottom")}}(e),n!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&r2(t=>{this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){let r={};return void 0!==e.min&&(r.min=e.min-t.min),void 0!==e.max&&(r.max=e.max-t.min),r}(r.layoutBox[t],this.constraints[t]))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!f(e))return!1;let n=e.current;(0,t2.k)(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;if(!i||!i.layout)return!1;let s=function(t,e,r){let n=nu(t,r),{scroll:i}=e;return i&&(ni(n.x,i.offset.x),ni(n.y,i.offset.y)),n}(n,i.root,this.visualElement.getTransformPagePoint()),a={x:rK((t=i.layout.layoutBox).x,s.x),y:rK(t.y,s.y)};if(r){let t=r(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(a));this.hasMutatedConstraints=!!t,t&&(a=r4(t))}return a}startAnimation(t){let{drag:e,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),o=this.constraints||{},l=r2(a=>{if(!nf(a,e,this.currentDirection))return;let l=o&&o[a]||{};s&&(l={min:0,max:0});let u={type:"inertia",velocity:r?t[a]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,u)});return Promise.all(l).then(a)}startAxisValueAnimation(t,e){let r=this.getAxisMotionValue(t);return r.start(rm(t,r,0,e))}stopAnimation(){r2(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){let e="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),n=r[e];return n||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){r2(e=>{let{drag:r}=this.getProps();if(!nf(e,r,this.currentDirection))return;let{projection:n}=this.visualElement,i=this.getAxisMotionValue(e);if(n&&n.layout){let{min:r,max:s}=n.layout.layoutBox[e];i.set(t[e]-ek(r,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:r}=this.visualElement;if(!f(e)||!r||!this.constraints)return;this.stopAnimation();let n={x:0,y:0};r2(t=>{let e=this.getAxisMotionValue(t);if(e){let r=e.get();n[t]=function(t,e){let r=.5,n=rU(t),i=rU(e);return i>n?r=eH(e.min,e.max-n,t.min):n>i&&(r=eH(t.min,t.max-i,e.min)),I(0,1,r)}({min:r,max:r},this.constraints[t])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),r2(e=>{if(!nf(e,t,null))return;let r=this.getAxisMotionValue(e),{min:i,max:s}=this.constraints[e];r.set(ek(i,s,n[e]))})}addListeners(){if(!this.visualElement.current)return;nc.set(this.visualElement,this);let t=this.visualElement.current,e=tL(t,"pointerdown",t=>{let{drag:e,dragListener:r=!0}=this.getProps();e&&r&&this.start(t)}),r=()=>{let{dragConstraints:t}=this.getProps();f(t)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",r);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),r();let s=t_(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(r2(e=>{let r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))}),this.visualElement.render())});return()=>{s(),e(),i(),a&&a()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:s=.35,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function nf(t,e,r){return(!0===e||e===t)&&(null===r||r===t)}let nh=t=>(e,r)=>{t&&tD.Wi.update(()=>t(e,r))},np={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nm(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}let ny={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!K.test(t))return t;t=parseFloat(t)}let r=nm(t,e.target.x),n=nm(t,e.target.y);return`${r}% ${n}%`}};class ng extends a.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=t;Object.assign(V,nb),i&&(e.group&&e.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),np.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:r,drag:n,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,n||t.layoutDependency!==e||void 0===e?s.willUpdate():this.safeToRemove(),t.isPresent===i||(i?s.promote():s.relegate()||tD.Wi.postRender(()=>{let t=s.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r}=this.props,{projection:n}=t;n&&(n.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function nv(t){let[e,r]=function(){let t=(0,a.useContext)(u.O);if(null===t)return[!0,null];let{isPresent:e,onExitComplete:r,register:n}=t,i=(0,a.useId)();return(0,a.useEffect)(()=>n(i),[]),!e&&r?[!1,()=>r&&r(i)]:[!0]}(),n=(0,a.useContext)(P.p);return a.createElement(ng,{...t,layoutGroup:n,switchLayoutGroup:(0,a.useContext)(A),isPresent:e,safeToRemove:r})}let nb={borderRadius:{...ny,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ny,borderTopRightRadius:ny,borderBottomLeftRadius:ny,borderBottomRightRadius:ny,boxShadow:{correct:(t,{treeScale:e,projectionDelta:r})=>{let n=eB.parse(t);if(n.length>5)return t;let i=eB.createTransformer(t),s="number"!=typeof n[0]?1:0,a=r.x.scale*e.x,o=r.y.scale*e.y;n[0+s]/=a,n[1+s]/=o;let l=ek(a,o,.5);return"number"==typeof n[2+s]&&(n[2+s]/=l),"number"==typeof n[3+s]&&(n[3+s]/=l),i(n)}}},nx=["TopLeft","TopRight","BottomLeft","BottomRight"],nw=nx.length,nS=t=>"string"==typeof t?parseFloat(t):t,nP=t=>"number"==typeof t||K.test(t);function nA(t,e){return void 0!==t[e]?t[e]:t.borderRadius}let nk=nC(0,.5,ec),nE=nC(.5,.95,tG.Z);function nC(t,e,r){return n=>n<t?0:n>e?1:r(eH(t,e,n))}function nV(t,e){t.min=e.min,t.max=e.max}function nT(t,e){nV(t.x,e.x),nV(t.y,e.y)}function nD(t,e,r,n,i){return t-=e,t=n+1/r*(t-n),void 0!==i&&(t=n+1/i*(t-n)),t}function nM(t,e,[r,n,i],s,a){!function(t,e=0,r=1,n=.5,i,s=t,a=t){if(q.test(e)){e=parseFloat(e);let t=ek(a.min,a.max,e/100);e=t-a.min}if("number"!=typeof e)return;let o=ek(s.min,s.max,n);t===s&&(o-=e),t.min=nD(t.min,e,r,o,i),t.max=nD(t.max,e,r,o,i)}(t,e[r],e[n],e[i],e.scale,s,a)}let nO=["x","scaleX","originX"],n_=["y","scaleY","originY"];function nj(t,e,r,n){nM(t.x,e,nO,r?r.x:void 0,n?n.x:void 0),nM(t.y,e,n_,r?r.y:void 0,n?n.y:void 0)}function nR(t){return 0===t.translate&&1===t.scale}function nF(t){return nR(t.x)&&nR(t.y)}function nL(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function n$(t){return rU(t.x)/rU(t.y)}class nI{constructor(){this.members=[]}add(t){rv(this.members,t),t.scheduleRender()}remove(t){if(rb(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){let e;let r=this.members.findIndex(e=>t===e);if(0===r)return!1;for(let t=r;t>=0;t--){let r=this.members[t];if(!1!==r.isPresent){e=r;break}}return!!e&&(this.promote(e),!0)}promote(t,e){let r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,e&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);let{crossfade:n}=t.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{let{options:e,resumingFrom:r}=t;e.onExitComplete&&e.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function nB(t,e,r){let n="",i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(n=`translate3d(${i}px, ${s}px, 0) `),(1!==e.x||1!==e.y)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),r){let{rotate:t,rotateX:e,rotateY:i}=r;t&&(n+=`rotate(${t}deg) `),e&&(n+=`rotateX(${e}deg) `),i&&(n+=`rotateY(${i}deg) `)}let a=t.x.scale*e.x,o=t.y.scale*e.y;return(1!==a||1!==o)&&(n+=`scale(${a}, ${o})`),n||"none"}let nN=(t,e)=>t.depth-e.depth;class nz{constructor(){this.children=[],this.isDirty=!1}add(t){rv(this.children,t),this.isDirty=!0}remove(t){rb(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(nN),this.isDirty=!1,this.children.forEach(t)}}let nU=["","X","Y","Z"],nW=0,nY={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function nH({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(t={},r=null==e?void 0:e()){this.id=nW++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{nY.totalNodes=nY.resolvedTargetDeltas=nY.recalculatedProjection=0,this.nodes.forEach(nZ),this.nodes.forEach(n3),this.nodes.forEach(n5),this.nodes.forEach(nq),window.MotionDebug&&window.MotionDebug.record(nY)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new nz)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new rx),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){let r=this.eventHandlers.get(t);r&&r.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=e instanceof SVGElement&&"svg"!==e.tagName,this.instance=e;let{layoutId:n,layout:i,visualElement:s}=this.options;if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(i||n)&&(this.isLayoutDirty=!0),t){let r;let n=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(t,e){let r=performance.now(),n=({timestamp:i})=>{let s=i-r;s>=e&&((0,tD.Pn)(n),t(s-e))};return tD.Wi.read(n,!0),()=>(0,tD.Pn)(n)}(n,250),np.hasAnimatedSinceResize&&(np.hasAnimatedSinceResize=!1,this.nodes.forEach(n1))})}n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&s&&(n||i)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:r,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let i=this.options.transition||s.getDefaultTransition()||n8,{onLayoutAnimationStart:a,onLayoutAnimationComplete:o}=s.getProps(),l=!this.targetLayout||!nL(this.targetLayout,n)||r,u=!e&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);let e={...rp(i,"layout"),onPlay:a,onComplete:o};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||n1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,(0,tD.Pn)(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(n2),this.animationId++)}getTransformTemplate(){let{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){let e=this.path[t];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}let{layoutId:e,layout:r}=this.options;if(void 0===e&&!r)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let t=this.isUpdateBlocked();if(t){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nJ);return}this.isUpdating||this.nodes.forEach(nQ),this.isUpdating=!1,this.nodes.forEach(n0),this.nodes.forEach(nX),this.nodes.forEach(nG),this.clearAllSnapshots();let e=performance.now();tD.frameData.delta=I(0,1e3/60,e-tD.frameData.timestamp),tD.frameData.timestamp=e,tD.frameData.isProcessing=!0,tD.S6.update.process(tD.frameData),tD.S6.preRender.process(tD.frameData),tD.S6.render.process(tD.frameData),tD.frameData.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(nK),this.sharedNodes.forEach(n4)}scheduleUpdateProjection(){tD.Wi.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){tD.Wi.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++){let e=this.path[t];e.updateScroll()}let t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=r5(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;let t=this.isLayoutDirty||this.shouldResetTransform,e=this.projectionDelta&&!nF(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,s=n!==this.prevTransformTemplateValue;t&&(e||r9(this.latestValues)||s)&&(i(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){var e;let r=this.measurePageBox(),n=this.removeElementScroll(r);return t&&(n=this.removeTransform(n)),ir((e=n).x),ir(e.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:t}=this.options;if(!t)return r5();let e=t.measureViewportBox(),{scroll:r}=this.root;return r&&(ni(e.x,r.offset.x),ni(e.y,r.offset.y)),e}removeElementScroll(t){let e=r5();nT(e,t);for(let r=0;r<this.path.length;r++){let n=this.path[r],{scroll:i,options:s}=n;if(n!==this.root&&i&&s.layoutScroll){if(i.isRoot){nT(e,t);let{scroll:r}=this.root;r&&(ni(e.x,-r.offset.x),ni(e.y,-r.offset.y))}ni(e.x,i.offset.x),ni(e.y,i.offset.y)}}return e}applyTransform(t,e=!1){let r=r5();nT(r,t);for(let t=0;t<this.path.length;t++){let n=this.path[t];!e&&n.options.layoutScroll&&n.scroll&&n!==n.root&&nl(r,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),r9(n.latestValues)&&nl(r,n.latestValues)}return r9(this.latestValues)&&nl(r,this.latestValues),r}removeTransform(t){let e=r5();nT(e,t);for(let t=0;t<this.path.length;t++){let r=this.path[t];if(!r.instance||!r9(r.latestValues))continue;r7(r.latestValues)&&r.updateSnapshot();let n=r5(),i=r.measurePageBox();nT(n,i),nj(e,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,n)}return r9(this.latestValues)&&nj(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tD.frameData.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var e,r,n,i;let s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);let a=!!this.resumingFrom||this!==s,o=!(t||a&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(o)return;let{layout:l,layoutId:u}=this.options;if(this.layout&&(l||u)){if(this.resolvedRelativeTargetAt=tD.frameData.timestamp,!this.targetDelta&&!this.relativeTarget){let t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=r5(),this.relativeTargetOrigin=r5(),rZ(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),nT(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=r5(),this.targetWithTransforms=r5()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,n=this.relativeTarget,i=this.relativeParent.target,rX(r.x,n.x,i.x),rX(r.y,n.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nT(this.target,this.layout.layoutBox),nr(this.target,this.targetDelta)):nT(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let t=this.getClosestProjectingParent();t&&!!t.resumingFrom==!!this.resumingFrom&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=r5(),this.relativeTargetOrigin=r5(),rZ(this.relativeTargetOrigin,this.target,t.target),nT(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}nY.resolvedTargetDeltas++}}}getClosestProjectingParent(){return!this.parent||r7(this.parent.latestValues)||r8(this.parent.latestValues)?void 0:this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t;let e=this.getLead(),r=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===tD.frameData.timestamp&&(n=!1),n)return;let{layout:i,layoutId:s}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||s))return;nT(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;!function(t,e,r,n=!1){let i,s;let a=r.length;if(a){e.x=e.y=1;for(let o=0;o<a;o++){s=(i=r[o]).projectionDelta;let a=i.instance;(!a||!a.style||"contents"!==a.style.display)&&(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&nl(t,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,nr(t,s)),n&&r9(i.latestValues)&&nl(t,i.latestValues))}e.x=nn(e.x),e.y=nn(e.y)}}(this.layoutCorrected,this.treeScale,this.path,r),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox);let{target:l}=e;if(!l){this.projectionTransform&&(this.projectionDelta=r1(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=r1(),this.projectionDeltaWithTransform=r1());let u=this.projectionTransform;rH(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=nB(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==a||this.treeScale.y!==o)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),nY.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),t){let t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,e=!1){let r;let n=this.snapshot,i=n?n.latestValues:{},s={...this.latestValues},a=r1();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;let o=r5(),l=n?n.source:void 0,u=this.layout?this.layout.source:void 0,c=l!==u,d=this.getStack(),f=!d||d.members.length<=1,h=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(n9));this.animationProgress=0,this.mixTargetDelta=e=>{let n=e/1e3;if(n6(a.x,t.x,n),n6(a.y,t.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var l,u,d,p;rZ(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d=this.relativeTarget,p=this.relativeTargetOrigin,n7(d.x,p.x,o.x,n),n7(d.y,p.y,o.y,n),r&&(l=this.relativeTarget,u=r,l.x.min===u.x.min&&l.x.max===u.x.max&&l.y.min===u.y.min&&l.y.max===u.y.max)&&(this.isProjectionDirty=!1),r||(r=r5()),nT(r,this.relativeTarget)}c&&(this.animationValues=s,function(t,e,r,n,i,s){i?(t.opacity=ek(0,void 0!==r.opacity?r.opacity:1,nk(n)),t.opacityExit=ek(void 0!==e.opacity?e.opacity:1,0,nE(n))):s&&(t.opacity=ek(void 0!==e.opacity?e.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let i=0;i<nw;i++){let s=`border${nx[i]}Radius`,a=nA(e,s),o=nA(r,s);if(void 0===a&&void 0===o)continue;a||(a=0),o||(o=0);let l=0===a||0===o||nP(a)===nP(o);l?(t[s]=Math.max(ek(nS(a),nS(o),n),0),(q.test(o)||q.test(a))&&(t[s]+="%")):t[s]=o}(e.rotate||r.rotate)&&(t.rotate=ek(e.rotate||0,r.rotate||0,n))}(s,i,this.latestValues,n,h,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&((0,tD.Pn)(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tD.Wi.update(()=>{np.hasAnimatedSinceResize=!0,this.currentAnimation=function(t,e,r){let n=O(t)?t:rA(t);return n.start(rm("",n,1e3,r)),n.animation}(0,0,{...t,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let t=this.getLead(),{targetWithTransforms:e,target:r,layout:n,latestValues:i}=t;if(e&&r&&n){if(this!==t&&this.layout&&n&&ii(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||r5();let e=rU(this.layout.layoutBox.x);r.x.min=t.target.x.min,r.x.max=r.x.min+e;let n=rU(this.layout.layoutBox.y);r.y.min=t.target.y.min,r.y.max=r.y.min+n}nT(e,r),nl(e,i),rH(this.projectionDeltaWithTransform,this.layoutCorrected,e,i)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new nI);let r=this.sharedNodes.get(t);r.add(e);let n=e.options.initialPromotionConfig;e.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(e):void 0})}isLead(){let t=this.getStack();return!t||t.lead===this}getLead(){var t;let{layoutId:e}=this.options;return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t;let{layoutId:e}=this.options;return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){let{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:r}={}){let n=this.getStack();n&&n.promote(this,r),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){let t=this.getStack();return!!t&&t.relegate(this)}resetRotation(){let{visualElement:t}=this.options;if(!t)return;let e=!1,{latestValues:r}=t;if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(e=!0),!e)return;let n={};for(let e=0;e<nU.length;e++){let i="rotate"+nU[e];r[i]&&(n[i]=r[i],t.setStaticValue(i,0))}for(let e in t.render(),n)t.setStaticValue(e,n[e]);t.scheduleRender()}getProjectionStyles(t={}){var e,r;let n={};if(!this.instance||this.isSVG)return n;if(!this.isVisible)return{visibility:"hidden"};n.visibility="";let i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=tV(t.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;let s=this.getLead();if(!this.projectionDelta||!this.layout||!s.target){let e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=tV(t.pointerEvents)||""),this.hasProjected&&!r9(this.latestValues)&&(e.transform=i?i({},""):"none",this.hasProjected=!1),e}let a=s.animationValues||s.latestValues;this.applyTransformsToTarget(),n.transform=nB(this.projectionDeltaWithTransform,this.treeScale,a),i&&(n.transform=i(a,n.transform));let{x:o,y:l}=this.projectionDelta;for(let t in n.transformOrigin=`${100*o.origin}% ${100*l.origin}% 0`,s.animationValues?n.opacity=s===this?null!==(r=null!==(e=a.opacity)&&void 0!==e?e:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:n.opacity=s===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,V){if(void 0===a[t])continue;let{correct:e,applyTo:r}=V[t],i="none"===n.transform?a[t]:e(a[t],s);if(r){let t=r.length;for(let e=0;e<t;e++)n[r[e]]=i}else n[t]=i}return this.options.layoutId&&(n.pointerEvents=s===this?tV(t.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>{var e;return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()}),this.root.nodes.forEach(nJ),this.root.sharedNodes.clear()}}}function nX(t){t.updateLayout()}function nG(t){var e;let r=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){let{layoutBox:e,measuredBox:n}=t.layout,{animationType:i}=t.options,s=r.source!==t.layout.source;"size"===i?r2(t=>{let n=s?r.measuredBox[t]:r.layoutBox[t],i=rU(n);n.min=e[t].min,n.max=n.min+i}):ii(i,r.layoutBox,e)&&r2(n=>{let i=s?r.measuredBox[n]:r.layoutBox[n],a=rU(e[n]);i.max=i.min+a,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[n].max=t.relativeTarget[n].min+a)});let a=r1();rH(a,e,r.layoutBox);let o=r1();s?rH(o,t.applyTransform(n,!0),r.measuredBox):rH(o,e,r.layoutBox);let l=!nF(a),u=!1;if(!t.resumeFrom){let n=t.getClosestProjectingParent();if(n&&!n.resumeFrom){let{snapshot:i,layout:s}=n;if(i&&s){let a=r5();rZ(a,r.layoutBox,i.layoutBox);let o=r5();rZ(o,e,s.layoutBox),nL(a,o)||(u=!0),n.options.layoutRoot&&(t.relativeTarget=o,t.relativeTargetOrigin=a,t.relativeParent=n)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:r,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(t.isLead()){let{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function nZ(t){nY.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function nq(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function nK(t){t.clearSnapshot()}function nJ(t){t.clearMeasurements()}function nQ(t){t.isLayoutDirty=!1}function n0(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function n1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function n3(t){t.resolveTargetDelta()}function n5(t){t.calcProjection()}function n2(t){t.resetRotation()}function n4(t){t.removeLeadSnapshot()}function n6(t,e,r){t.translate=ek(e.translate,0,r),t.scale=ek(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function n7(t,e,r,n){t.min=ek(e.min,r.min,n),t.max=ek(e.max,r.max,n)}function n9(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}let n8={duration:.45,ease:[.4,0,.1,1]},it=t=>"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes(t),ie=it("applewebkit/")&&!it("chrome/")?Math.round:tG.Z;function ir(t){t.min=ie(t.min),t.max=ie(t.max)}function ii(t,e,r){return"position"===t||"preserve-aspect"===t&&!rW(n$(e),n$(r),.2)}let is=nH({attachResizeListener:(t,e)=>t_(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ia={current:void 0},io=nH({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ia.current){let t=new is({});t.mount(window),t.setOptions({layoutScroll:!0}),ia.current=t}return ia.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>"fixed"===window.getComputedStyle(t).position}),il=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function iu(t,e,r=1){(0,t2.k)(r<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[n,i]=function(t){let e=il.exec(t);if(!e)return[,];let[,r,n]=e;return[r,n]}(t);if(!n)return;let s=window.getComputedStyle(e).getPropertyValue(n);if(s){let t=s.trim();return rg(t)?parseFloat(t):t}return L(i)?iu(i,e,r+1):i}let ic=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),id=t=>ic.has(t),ih=t=>Object.keys(t).some(id),ip=t=>t===B||t===K,im=(t,e)=>parseFloat(t.split(", ")[e]),iy=(t,e)=>(r,{transform:n})=>{if("none"===n||!n)return 0;let i=n.match(/^matrix3d\((.+)\)$/);if(i)return im(i[1],e);{let e=n.match(/^matrix\((.+)\)$/);return e?im(e[1],t):0}},ig=new Set(["x","y","z"]),iv=T.filter(t=>!ig.has(t)),ib={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:iy(4,13),y:iy(5,14)};ib.translateX=ib.x,ib.translateY=ib.y;let ix=(t,e,r)=>{let n=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:a}=s,o={};"none"===a&&e.setStaticValue("display",t.display||"block"),r.forEach(t=>{o[t]=ib[t](n,s)}),e.render();let l=e.measureViewportBox();return r.forEach(r=>{let n=e.getValue(r);n&&n.jump(o[r]),t[r]=ib[r](l,s)}),t},iw=(t,e,r={},n={})=>{e={...e},n={...n};let i=Object.keys(e).filter(id),s=[],a=!1,o=[];if(i.forEach(i=>{let l;let u=t.getValue(i);if(!t.hasValue(i))return;let c=r[i],d=rC(c),f=e[i];if(tk(f)){let t=f.length,e=null===f[0]?1:0;d=rC(c=f[e]);for(let r=e;r<t&&null!==f[r];r++)l?(0,t2.k)(rC(f[r])===l,"All keyframes must be of the same type"):(l=rC(f[r]),(0,t2.k)(l===d||ip(d)&&ip(l),"Keyframes must be of the same dimension as the current value"))}else l=rC(f);if(d!==l){if(ip(d)&&ip(l)){let t=u.get();"string"==typeof t&&u.set(parseFloat(t)),"string"==typeof f?e[i]=parseFloat(f):Array.isArray(f)&&l===K&&(e[i]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==l?void 0:l.transform)&&(0===c||0===f)?0===c?u.set(l.transform(c)):e[i]=d.transform(f):(a||(s=function(t){let e=[];return iv.forEach(r=>{let n=t.getValue(r);void 0!==n&&(e.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),e.length&&t.render(),e}(t),a=!0),o.push(i),n[i]=void 0!==n[i]?n[i]:e[i],u.jump(f))}}),!o.length)return{target:e,transitionEnd:n};{let r=o.indexOf("height")>=0?window.pageYOffset:null,i=ix(e,t,o);return s.length&&s.forEach(([e,r])=>{t.getValue(e).set(r)}),t.render(),S.j&&null!==r&&window.scrollTo({top:r}),{target:i,transitionEnd:n}}},iS=(t,e,r,n)=>{var i,s;let a=function(t,{...e},r){let n=t.current;if(!(n instanceof Element))return{target:e,transitionEnd:r};for(let i in r&&(r={...r}),t.values.forEach(t=>{let e=t.get();if(!L(e))return;let r=iu(e,n);r&&t.set(r)}),e){let t=e[i];if(!L(t))continue;let s=iu(t,n);s&&(e[i]=s,r||(r={}),void 0===r[i]&&(r[i]=t))}return{target:e,transitionEnd:r}}(t,e,n);return e=a.target,n=a.transitionEnd,i=e,s=n,ih(i)?iw(t,i,r,s):{target:i,transitionEnd:s}},iP={current:null},iA={current:!1},ik=new WeakMap,iE=Object.keys(w),iC=iE.length,iV=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],iT=y.length;class iD{constructor({parent:t,props:e,presenceContext:r,reducedMotionConfig:n,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>tD.Wi.render(this.render,!1,!0);let{latestValues:a,renderState:o}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=o,this.parent=t,this.props=e,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=n,this.options=s,this.isControllingVariants=g(e),this.isVariantNode=v(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(e,{});for(let t in u){let e=u[t];void 0!==a[t]&&O(e)&&(e.set(a[t],!1),ry(l)&&l.add(t))}}scrapeMotionValuesFromProps(t,e){return{}}mount(t){this.current=t,ik.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),iA.current||function(){if(iA.current=!0,S.j){if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>iP.current=t.matches;t.addListener(e),e()}else iP.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||iP.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let t in ik.delete(this.current),this.projection&&this.projection.unmount(),(0,tD.Pn)(this.notifyUpdate),(0,tD.Pn)(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[t].clear();for(let t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,e){let r=D.has(t),n=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&tD.Wi.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=e.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{n(),i()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}loadFeatures({children:t,...e},r,n,i){let s,a;for(let t=0;t<iC;t++){let r=iE[t],{isEnabled:n,Feature:i,ProjectionNode:o,MeasureLayout:l}=w[r];o&&(s=o),n(e)&&(!this.features[r]&&i&&(this.features[r]=new i(this)),l&&(a=l))}if(!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);let{layoutId:t,layout:r,drag:n,dragConstraints:a,layoutScroll:o,layoutRoot:l}=e;this.projection.setOptions({layoutId:t,layout:r,alwaysMeasureLayout:!!n||a&&f(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof r?r:"both",initialPromotionConfig:i,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(let t in this.features){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):r5()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}makeTargetAnimatable(t,e=!0){return this.makeTargetAnimatableFromInstance(t,this.props,e)}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<iV.length;e++){let r=iV[e];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let n=t["on"+r];n&&(this.propEventSubscriptions[r]=this.on(r,n))}this.prevMotionValues=function(t,e,r){let{willChange:n}=e;for(let i in e){let s=e[i],a=r[i];if(O(s))t.addValue(i,s),ry(n)&&n.add(i);else if(O(a))t.addValue(i,rA(s,{owner:t})),ry(n)&&n.remove(i);else if(a!==s){if(t.hasValue(i)){let e=t.getValue(i);e.hasAnimated||e.set(s)}else{let e=t.getStaticValue(i);t.addValue(i,rA(void 0!==e?e:s,{owner:t}))}}}for(let n in r)void 0===e[n]&&t.removeValue(n);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let t=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(t.initial=this.props.initial),t}let e={};for(let t=0;t<iT;t++){let r=y[t],n=this.props[r];(h(n)||!1===n)&&(e[r]=n)}return e}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){e!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,e)),this.values.set(t,e),this.latestValues[t]=e.get()}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return void 0===r&&void 0!==e&&(r=rA(e,{owner:this}),this.addValue(t,r)),r}readValue(t){var e;return void 0===this.latestValues[t]&&this.current?null!==(e=this.getBaseTargetFromProps(this.props,t))&&void 0!==e?e:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;let{initial:r}=this.props,n="string"==typeof r||"object"==typeof r?null===(e=tP(this.props,r))||void 0===e?void 0:e[t]:void 0;if(r&&void 0!==n)return n;let i=this.getBaseTargetFromProps(this.props,t);return void 0===i||O(i)?void 0!==this.initialValues[t]&&void 0===n?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new rx),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class iM extends iD{sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:r}){delete e[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:e,...r},{transformValues:n},i){let s=function(t,e,r){let n={};for(let i in t){let t=function(t,e){if(!e)return;let r=e[t]||e.default||e;return r.from}(i,e);if(void 0!==t)n[i]=t;else{let t=r.getValue(i);t&&(n[i]=t.get())}}return n}(r,t||{},this);if(n&&(e&&(e=n(e)),r&&(r=n(r)),s&&(s=n(s))),i){!function(t,e,r){var n,i;let s=Object.keys(e).filter(e=>!t.hasValue(e)),a=s.length;if(a)for(let o=0;o<a;o++){let a=s[o],l=e[a],u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(n=r[a])&&void 0!==n?n:t.readValue(a))&&void 0!==i?i:e[a]),null!=u&&("string"==typeof u&&(rg(u)||rh(u))?u=parseFloat(u):!rT(u)&&eB.test(l)&&(u=rf(a,l)),t.addValue(a,rA(u,{owner:t})),void 0===r[a]&&(r[a]=u),null!==u&&t.setBaseTarget(a,u))}}(this,r,s);let t=iS(this,r,s,e);e=t.transitionEnd,r=t.target}return{transition:t,transitionEnd:e,...r}}}class iO extends iM{readValueFromInstance(t,e){if(D.has(e)){let t=rd(e);return t&&t.default||0}{let r=window.getComputedStyle(t),n=(F(e)?r.getPropertyValue(e):r[e])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(t,{transformPagePoint:e}){return nu(t,e)}build(t,e,r,n){tn(t,e,r,n.transformTemplate)}scrapeMotionValuesFromProps(t,e){return tw(t,e)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;O(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}renderInstance(t,e,r,n){tv(t,e,r,n)}}class i_ extends iM{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(D.has(e)){let t=rd(e);return t&&t.default||0}return e=tb.has(e)?e:tg(e),t.getAttribute(e)}measureInstanceViewportBox(){return r5()}scrapeMotionValuesFromProps(t,e){return tS(t,e)}build(t,e,r,n){th(t,e,r,this.isSVGTag,n.transformTemplate)}renderInstance(t,e,r,n){tx(t,e,r,n)}mount(t){this.isSVGTag=tm(t.tagName),super.mount(t)}}let ij=(t,e)=>C(t)?new i_(e,{enableHardwareAcceleration:!1}):new iO(e,{enableHardwareAcceleration:!0}),iR={animation:{Feature:class extends tY{constructor(t){super(t),t.animationState||(t.animationState=function(t){let e=e=>Promise.all(e.map(({animation:e,options:r})=>(function(t,e,r={}){let n;if(t.notify("AnimationStart",e),Array.isArray(e)){let i=e.map(e=>rM(t,e,r));n=Promise.all(i)}else if("string"==typeof e)n=rM(t,e,r);else{let i="function"==typeof e?t3(t,e,r.custom):e;n=Promise.all(rD(t,i,r))}return n.then(()=>t.notify("AnimationComplete",e))})(t,e,r))),r={animate:rR(!0),whileInView:rR(),whileHover:rR(),whileTap:rR(),whileDrag:rR(),whileFocus:rR(),exit:rR()},n=!0,i=(e,r)=>{let n=t3(t,r);if(n){let{transition:t,transitionEnd:r,...i}=n;e={...e,...i,...r}}return e};function s(s,a){let o=t.getProps(),l=t.getVariantContext(!0)||{},u=[],c=new Set,d={},f=1/0;for(let e=0;e<rj;e++){var m;let y=r_[e],g=r[y],v=void 0!==o[y]?o[y]:l[y],b=h(v),x=y===a?g.isActive:null;!1===x&&(f=e);let w=v===l[y]&&v!==o[y]&&b;if(w&&n&&t.manuallyAnimateOnMount&&(w=!1),g.protectedKeys={...d},!g.isActive&&null===x||!v&&!g.prevProp||p(v)||"boolean"==typeof v)continue;let S=(m=g.prevProp,"string"==typeof v?v!==m:!!Array.isArray(v)&&!t1(v,m)),P=S||y===a&&g.isActive&&!w&&b||e>f&&b,A=Array.isArray(v)?v:[v],k=A.reduce(i,{});!1===x&&(k={});let{prevResolvedValues:E={}}=g,C={...E,...k},V=t=>{P=!0,c.delete(t),g.needsAnimating[t]=!0};for(let t in C){let e=k[t],r=E[t];d.hasOwnProperty(t)||(e!==r?tk(e)&&tk(r)?!t1(e,r)||S?V(t):g.protectedKeys[t]=!0:void 0!==e?V(t):c.add(t):void 0!==e&&c.has(t)?V(t):g.protectedKeys[t]=!0)}g.prevProp=v,g.prevResolvedValues=k,g.isActive&&(d={...d,...k}),n&&t.blockInitialAnimation&&(P=!1),P&&!w&&u.push(...A.map(t=>({animation:t,options:{type:y,...s}})))}if(c.size){let e={};c.forEach(r=>{let n=t.getBaseTarget(r);void 0!==n&&(e[r]=n)}),u.push({animation:e})}let y=!!u.length;return n&&!1===o.initial&&!t.manuallyAnimateOnMount&&(y=!1),n=!1,y?e(u):Promise.resolve()}return{animateChanges:s,setActive:function(e,n,i){var a;if(r[e].isActive===n)return Promise.resolve();null===(a=t.variantChildren)||void 0===a||a.forEach(t=>{var r;return null===(r=t.animationState)||void 0===r?void 0:r.setActive(e,n)}),r[e].isActive=n;let o=s(i,e);for(let t in r)r[t].protectedKeys={};return o},setAnimateFunction:function(r){e=r(t)},getState:()=>r}}(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();this.unmount(),p(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends tY{constructor(){super(...arguments),this.id=rF++}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;let i=this.node.animationState.setActive("exit",!t,{custom:null!=r?r:this.node.getProps().custom});e&&!t&&i.then(()=>e(this.id))}mount(){let{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}},inView:{Feature:class extends tY{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:t={}}=this.node.getProps(),{root:e,margin:r,amount:n="some",once:i}=t,s={root:e?e.current:void 0,rootMargin:r,threshold:"number"==typeof n?n:t0[n]};return function(t,e,r){let n=function({root:t,...e}){let r=t||document;tK.has(r)||tK.set(r,{});let n=tK.get(r),i=JSON.stringify(e);return n[i]||(n[i]=new IntersectionObserver(tQ,{root:t,...e})),n[i]}(e);return tq.set(t,r),n.observe(t),()=>{tq.delete(t),n.unobserve(t)}}(this.node.current,s,t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,i&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),s=e?r:n;s&&s(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node,r=["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}(t,e));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends tY{constructor(){super(...arguments),this.removeStartListeners=tG.Z,this.removeEndListeners=tG.Z,this.removeAccessibleListeners=tG.Z,this.startPointerPress=(t,e)=>{if(this.removeEndListeners(),this.isPressing)return;let r=this.node.getProps(),n=tL(window,"pointerup",(t,e)=>{if(!this.checkPressEnd())return;let{onTap:r,onTapCancel:n}=this.node.getProps();tD.Wi.update(()=>{tX(this.node.current,t.target)?r&&r(t,e):n&&n(t,e)})},{passive:!(r.onTap||r.onPointerUp)}),i=tL(window,"pointercancel",(t,e)=>this.cancelPress(t,e),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=tI(n,i),this.startPress(t,e)},this.startAccessiblePress=()=>{let t=t_(this.node.current,"keydown",t=>{"Enter"!==t.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=t_(this.node.current,"keyup",t=>{"Enter"===t.key&&this.checkPressEnd()&&tZ("up",(t,e)=>{let{onTap:r}=this.node.getProps();r&&tD.Wi.update(()=>r(t,e))})}),tZ("down",(t,e)=>{this.startPress(t,e)}))}),e=t_(this.node.current,"blur",()=>{this.isPressing&&tZ("cancel",(t,e)=>this.cancelPress(t,e))});this.removeAccessibleListeners=tI(t,e)}}startPress(t,e){this.isPressing=!0;let{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&tD.Wi.update(()=>r(t,e))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let t=this.node.getProps();return t.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!tW()}cancelPress(t,e){if(!this.checkPressEnd())return;let{onTapCancel:r}=this.node.getProps();r&&tD.Wi.update(()=>r(t,e))}mount(){let t=this.node.getProps(),e=tL(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=t_(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=tI(e,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends tY{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tI(t_(this.node.current,"focus",()=>this.onFocus()),t_(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends tY{mount(){this.unmount=tI(tH(this.node,!0),tH(this.node,!1))}unmount(){}}},pan:{Feature:class extends tY{constructor(){super(...arguments),this.removePointerDownListener=tG.Z}onPointerDown(t){this.session=new r$(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:nh(t),onStart:nh(e),onMove:r,onEnd:(t,e)=>{delete this.session,n&&tD.Wi.update(()=>n(t,e))}}}mount(){this.removePointerDownListener=tL(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends tY{constructor(t){super(t),this.removeGroupControls=tG.Z,this.removeListeners=tG.Z,this.controls=new nd(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tG.Z}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:io,MeasureLayout:nv},layout:{ProjectionNode:io,MeasureLayout:nv}},iF=function(t){function e(e,r={}){return function({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:n,Component:i}){t&&function(t){for(let e in t)w[e]={...w[e],...t[e]}}(t);let s=(0,a.forwardRef)(function(s,p){var m;let y;let v={...(0,a.useContext)(o),...s,layoutId:function({layoutId:t}){let e=(0,a.useContext)(P.p).id;return e&&void 0!==t?e+"-"+t:t}(s)},{isStatic:x}=v,w=function(t){let{initial:e,animate:r}=function(t,e){if(g(t)){let{initial:e,animate:r}=t;return{initial:!1===e||h(e)?e:void 0,animate:h(r)?r:void 0}}return!1!==t.inherit?e:{}}(t,(0,a.useContext)(l));return(0,a.useMemo)(()=>({initial:e,animate:r}),[b(e),b(r)])}(s),k=n(s,x);if(!x&&S.j){w.visualElement=function(t,e,r,n){let{visualElement:i}=(0,a.useContext)(l),s=(0,a.useContext)(d),f=(0,a.useContext)(u.O),h=(0,a.useContext)(o).reducedMotion,p=(0,a.useRef)();n=n||s.renderer,!p.current&&n&&(p.current=n(t,{visualState:e,parent:i,props:r,presenceContext:f,blockInitialAnimation:!!f&&!1===f.initial,reducedMotionConfig:h}));let m=p.current;(0,a.useInsertionEffect)(()=>{m&&m.update(r,f)});let y=(0,a.useRef)(!!window.HandoffAppearAnimations);return(0,c.L)(()=>{m&&(m.render(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,a.useEffect)(()=>{m&&(m.updateFeatures(),!y.current&&m.animationState&&m.animationState.animateChanges(),window.HandoffAppearAnimations=void 0,y.current=!1)}),m}(i,k,v,e);let r=(0,a.useContext)(A),n=(0,a.useContext)(d).strict;w.visualElement&&(y=w.visualElement.loadFeatures(v,n,t,r))}return a.createElement(l.Provider,{value:w},y&&w.visualElement?a.createElement(y,{visualElement:w.visualElement,...v}):null,r(i,s,(m=w.visualElement,(0,a.useCallback)(t=>{t&&k.mount&&k.mount(t),m&&(t?m.mount(t):m.unmount()),p&&("function"==typeof p?p(t):f(p)&&(p.current=t))},[m])),k,x,w.visualElement))});return s[k]=i,s}(t(e,r))}if("undefined"==typeof Proxy)return e;let r=new Map;return new Proxy(e,{get:(t,n)=>(r.has(n)||r.set(n,e(n)),r.get(n))})}((t,e)=>(function(t,{forwardMotionProps:e=!1},r,n){let i=C(t)?tM:tO;return{...i,preloadedFeatures:r,useRender:function(t=!1){return(e,r,n,{latestValues:i},s)=>{let o=C(e)?ty:ta,l=o(r,i,s,e),u=function(t,e,r){let n={};for(let i in t)("values"!==i||"object"!=typeof t.values)&&(tu(i)||!0===r&&tl(i)||!e&&!tl(i)||t.draggable&&i.startsWith("onDrag"))&&(n[i]=t[i]);return n}(r,"string"==typeof e,t),c={...u,...l,ref:n},{children:d}=r,f=(0,a.useMemo)(()=>O(d)?d.get():d,[d]);return(0,a.createElement)(e,{...c,children:f})}}(e),createVisualElement:n,Component:t}})(t,e,iR,ij))},6567:function(t,e,r){"use strict";r.d(e,{K:function(){return i},k:function(){return s}});var n=r(6977);let i=n.Z,s=n.Z},6613:function(t,e,r){"use strict";r.d(e,{j:function(){return n}});let n="undefined"!=typeof document},6977:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});let n=t=>t},961:function(t,e,r){"use strict";r.d(e,{h:function(){return i}});var n=r(2265);function i(t){let e=(0,n.useRef)(null);return null===e.current&&(e.current=t()),e.current}},538:function(t,e,r){"use strict";r.d(e,{L:function(){return s}});var n=r(2265),i=r(6613);let s=i.j?n.useLayoutEffect:n.useEffect},6705:function(t,e,r){"use strict";r.d(e,{pT:function(){return t4},Mi:function(){return ei}});var n,i,s=r(7437),a=r(2265),o=r.t(a,2),l=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{n.insertRule(t,n.cssRules.length)}catch(t){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},t}(),u=Math.abs,c=String.fromCharCode,d=Object.assign;function f(t,e,r){return t.replace(e,r)}function h(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function m(t,e,r){return t.slice(e,r)}function y(t){return t.length}function g(t,e){return e.push(t),t}var v=1,b=1,x=0,w=0,S=0,P="";function A(t,e,r,n,i,s,a){return{value:t,root:e,parent:r,type:n,props:i,children:s,line:v,column:b,length:a,return:""}}function k(t,e){return d(A("",null,null,"",null,null,0),t,{length:-t.length},e)}function E(){return S=w<x?p(P,w++):0,b++,10===S&&(b=1,v++),S}function C(){return p(P,w)}function V(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(t){return v=b=1,x=y(P=t),w=0,[]}function D(t){var e,r;return(e=w-1,r=function t(e){for(;E();)switch(S){case e:return w;case 34:case 39:34!==e&&39!==e&&t(S);break;case 40:41===e&&t(e);break;case 92:E()}return w}(91===t?t+2:40===t?t+1:t),m(P,e,r)).trim()}var M="-ms-",O="-moz-",_="-webkit-",j="comm",R="rule",F="decl",L="@keyframes";function $(t,e){for(var r="",n=t.length,i=0;i<n;i++)r+=e(t[i],i,t,e)||"";return r}function I(t,e,r,n){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case F:return t.return=t.return||t.value;case j:return"";case L:return t.return=t.value+"{"+$(t.children,n)+"}";case R:t.value=t.props.join(",")}return y(r=$(t.children,n))?t.return=t.value+"{"+r+"}":""}function B(t,e,r,n,i,s,a,o,l,c,d){for(var h=i-1,p=0===i?s:[""],y=p.length,g=0,v=0,b=0;g<n;++g)for(var x=0,w=m(t,h+1,h=u(v=a[g])),S=t;x<y;++x)(S=(v>0?p[x]+" "+w:f(w,/&\f/g,p[x])).trim())&&(l[b++]=S);return A(t,e,r,0===i?R:o,l,c,d)}function N(t,e,r,n){return A(t,e,r,F,m(t,0,n),m(t,n+1,-1),n)}var z=function(t,e,r){for(var n=0,i=0;n=i,i=C(),38===n&&12===i&&(e[r]=1),!V(i);)E();return m(P,t,w)},U=function(t,e){var r=-1,n=44;do switch(V(n)){case 0:38===n&&12===C()&&(e[r]=1),t[r]+=z(w-1,e,r);break;case 2:t[r]+=D(n);break;case 4:if(44===n){t[++r]=58===C()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=c(n)}while(n=E());return t},W=function(t,e){var r;return r=U(T(t),e),P="",r},Y=new WeakMap,H=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,n=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||Y.get(r))&&!n){Y.set(t,!0);for(var i=[],s=W(e,i),a=r.props,o=0,l=0;o<s.length;o++)for(var u=0;u<a.length;u++,l++)t.props[l]=i[o]?s[o].replace(/&\f/g,a[u]):a[u]+" "+s[o]}}},X=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},G=[function(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case F:t.return=function t(e,r){switch(45^p(e,0)?(((r<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3):0){case 5103:return _+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _+e+O+e+M+e+e;case 6828:case 4268:return _+e+M+e+e;case 6165:return _+e+M+"flex-"+e+e;case 5187:return _+e+f(e,/(\w+).+(:[^]+)/,_+"box-$1$2"+M+"flex-$1$2")+e;case 5443:return _+e+M+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return _+e+M+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return _+e+M+f(e,"shrink","negative")+e;case 5292:return _+e+M+f(e,"basis","preferred-size")+e;case 6060:return _+"box-"+f(e,"-grow","")+_+e+M+f(e,"grow","positive")+e;case 4554:return _+f(e,/([^-])(transform)/g,"$1"+_+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,_+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(e)-1-r>6)switch(p(e,r+1)){case 109:if(45!==p(e,r+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+O+(108==p(e,r+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?t(f(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==p(e,r+1))break;case 6444:switch(p(e,y(e)-3-(~h(e,"!important")&&10))){case 107:return f(e,":",":"+_)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+_+(45===p(e,14)?"inline-":"")+"box$3$1"+_+"$2$3$1"+M+"$2box$3")+e}break;case 5936:switch(p(e,r+11)){case 114:return _+e+M+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _+e+M+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _+e+M+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return _+e+M+e+e}return e}(t.value,t.length);break;case L:return $([k(t,{value:f(t.value,"@","@"+_)})],n);case R:if(t.length)return t.props.map(function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return $([k(t,{props:[f(e,/:(read-\w+)/,":"+O+"$1")]})],n);case"::placeholder":return $([k(t,{props:[f(e,/:(plac\w+)/,":"+_+"input-$1")]}),k(t,{props:[f(e,/:(plac\w+)/,":"+O+"$1")]}),k(t,{props:[f(e,/:(plac\w+)/,M+"input-$1")]})],n)}return""}).join("")}}];function Z(t,e,r){var n="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):n+=r+" "}),n}var q=function(t,e,r){var n=t.key+"-"+e.name;!1===r&&void 0===t.registered[n]&&(t.registered[n]=e.styles)},K=function(t,e,r){q(t,e,r);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var i=e;do t.insert(e===i?"."+n:"",i,t.sheet,!0),i=i.next;while(void 0!==i)}},J={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q=/[A-Z]|^ms/g,tt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,te=function(t){return 45===t.charCodeAt(1)},tr=function(t){return null!=t&&"boolean"!=typeof t},tn=(n=Object.create(null),function(t){return void 0===n[t]&&(n[t]=te(t)?t:t.replace(Q,"-$&").toLowerCase()),n[t]}),ti=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(tt,function(t,e,r){return i={name:e,styles:r,next:i},e})}return 1===J[t]||te(t)||"number"!=typeof e||0===e?e:e+"px"};function ts(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return i={name:r.name,styles:r.styles,next:i},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)i={name:n.name,styles:n.styles,next:i},n=n.next;return r.styles+";"}return function(t,e,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=ts(t,e,r[i])+";";else for(var s in r){var a=r[s];if("object"!=typeof a)null!=e&&void 0!==e[a]?n+=s+"{"+e[a]+"}":tr(a)&&(n+=tn(s)+":"+ti(s,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==e||void 0===e[a[0]]))for(var o=0;o<a.length;o++)tr(a[o])&&(n+=tn(s)+":"+ti(s,a[o])+";");else{var l=ts(t,e,a);switch(s){case"animation":case"animationName":n+=tn(s)+":"+l+";";break;default:n+=s+"{"+l+"}"}}}return n}(t,e,r);case"function":if(void 0!==t){var s=i,a=r(t);return i=s,ts(t,e,a)}}if(null==e)return r;var o=e[r];return void 0!==o?o:r}var ta=/label:\s*([^\s;\n{]+)\s*(;|$)/g,to=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n,s=!0,a="";i=void 0;var o=t[0];null==o||void 0===o.raw?(s=!1,a+=ts(r,e,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=ts(r,e,t[l]),s&&(a+=o[l]);ta.lastIndex=0;for(var u="";null!==(n=ta.exec(a));)u+="-"+n[1];return{name:function(t){for(var e,r=0,n=0,i=t.length;i>=4;++n,i-=4)e=(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*1540483477+((e>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(255&t.charCodeAt(n+2))<<16;case 2:r^=(255&t.charCodeAt(n+1))<<8;case 1:r^=255&t.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+u,styles:a,next:i}},tl=!!o.useInsertionEffect&&o.useInsertionEffect,tu=tl||function(t){return t()};tl||a.useLayoutEffect;var tc={}.hasOwnProperty,td=a.createContext("undefined"!=typeof HTMLElement?function(t){var e,r,n,i,s,a=t.key;if("css"===a){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var u=t.stylisPlugins||G,d={},x=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)d[e[r]]=!0;x.push(t)});var k=(r=(e=[H,X].concat(u,[I,(n=function(t){s.insert(t)},function(t){!t.root&&(t=t.return)&&n(t)})])).length,function(t,n,i,s){for(var a="",o=0;o<r;o++)a+=e[o](t,n,i,s)||"";return a}),M=function(t){var e,r;return $((r=function t(e,r,n,i,s,a,o,l,u){for(var d,x=0,k=0,T=o,M=0,O=0,_=0,R=1,F=1,L=1,$=0,I="",z=s,U=a,W=i,Y=I;F;)switch(_=$,$=E()){case 40:if(108!=_&&58==p(Y,T-1)){-1!=h(Y+=f(D($),"&","&\f"),"&\f")&&(L=-1);break}case 34:case 39:case 91:Y+=D($);break;case 9:case 10:case 13:case 32:Y+=function(t){for(;S=C();)if(S<33)E();else break;return V(t)>2||V(S)>3?"":" "}(_);break;case 92:Y+=function(t,e){for(var r;--e&&E()&&!(S<48)&&!(S>102)&&(!(S>57)||!(S<65))&&(!(S>70)||!(S<97)););return r=w+(e<6&&32==C()&&32==E()),m(P,t,r)}(w-1,7);continue;case 47:switch(C()){case 42:case 47:g(A(d=function(t,e){for(;E();)if(t+S===57)break;else if(t+S===84&&47===C())break;return"/*"+m(P,e,w-1)+"*"+c(47===t?t:E())}(E(),w),r,n,j,c(S),m(d,2,-2),0),u);break;default:Y+="/"}break;case 123*R:l[x++]=y(Y)*L;case 125*R:case 59:case 0:switch($){case 0:case 125:F=0;case 59+k:-1==L&&(Y=f(Y,/\f/g,"")),O>0&&y(Y)-T&&g(O>32?N(Y+";",i,n,T-1):N(f(Y," ","")+";",i,n,T-2),u);break;case 59:Y+=";";default:if(g(W=B(Y,r,n,x,k,s,l,I,z=[],U=[],T),a),123===$){if(0===k)t(Y,r,W,W,z,a,T,l,U);else switch(99===M&&110===p(Y,3)?100:M){case 100:case 108:case 109:case 115:t(e,W,W,i&&g(B(e,W,W,0,0,s,l,I,s,z=[],T),U),s,U,T,l,i?z:U);break;default:t(Y,W,W,W,[""],U,0,l,U)}}}x=k=O=0,R=L=1,I=Y="",T=o;break;case 58:T=1+y(Y),O=_;default:if(R<1){if(123==$)--R;else if(125==$&&0==R++&&125==(S=w>0?p(P,--w):0,b--,10===S&&(b=1,v--),S))continue}switch(Y+=c($),$*R){case 38:L=k>0?1:(Y+="\f",-1);break;case 44:l[x++]=(y(Y)-1)*L,L=1;break;case 64:45===C()&&(Y+=D(E())),M=C(),k=T=y(I=Y+=function(t){for(;!V(C());)E();return m(P,t,w)}(w)),$++;break;case 45:45===_&&2==y(Y)&&(R=0)}}return a}("",null,null,null,[""],e=T(e=t),0,[0],e),P="",r),k)},O={key:a,sheet:new l({key:a,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:d,registered:{},insert:function(t,e,r,n){s=r,M(t?t+"{"+e.styles+"}":e.styles),n&&(O.inserted[e.name]=!0)}};return O.sheet.hydrate(x),O}({key:"css"}):null);td.Provider;var tf=function(t){return(0,a.forwardRef)(function(e,r){return t(e,(0,a.useContext)(td),r)})},th=a.createContext({}),tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tm=function(t,e){var r={};for(var n in e)tc.call(e,n)&&(r[n]=e[n]);return r[tp]=t,r},ty=function(t){var e=t.cache,r=t.serialized,n=t.isStringTag;return q(e,r,n),tu(function(){return K(e,r,n)}),null},tg=tf(function(t,e,r){var n=t.css;"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var i=t[tp],s=[n],o="";"string"==typeof t.className?o=Z(e.registered,s,t.className):null!=t.className&&(o=t.className+" ");var l=to(s,void 0,a.useContext(th));o+=e.key+"-"+l.name;var u={};for(var c in t)tc.call(t,c)&&"css"!==c&&c!==tp&&(u[c]=t[c]);return u.ref=r,u.className=o,a.createElement(a.Fragment,null,a.createElement(ty,{cache:e,serialized:l,isStringTag:"string"==typeof i}),a.createElement(i,u))});r(5487);var tv=s.Fragment;function tb(t,e,r){return tc.call(e,"css")?s.jsx(tg,tm(t,e),r):s.jsx(t,e,r)}function tx(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return to(e)}var tw=function(){var t=tx.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tS=function t(e){for(var r=e.length,n=0,i="";n<r;n++){var s=e[n];if(null!=s){var a=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=t(s);else for(var o in a="",s)s[o]&&o&&(a&&(a+=" "),a+=o);break;default:a=s}a&&(i&&(i+=" "),i+=a)}}return i},tP=function(t){var e=t.cache,r=t.serializedArr;return tu(function(){for(var t=0;t<r.length;t++)K(e,r[t],!1)}),null},tA=tf(function(t,e){var r=[],n=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=to(n,e.registered);return r.push(s),q(e,s,!1),e.key+"-"+s.name},i={css:n,cx:function(){for(var t,r,i,s=arguments.length,a=Array(s),o=0;o<s;o++)a[o]=arguments[o];return i=Z(e.registered,r=[],t=tS(a)),r.length<2?t:i+n(r)},theme:a.useContext(th)},s=t.children(i);return a.createElement(a.Fragment,null,a.createElement(tP,{cache:e,serializedArr:r}),s)}),tk=r(4327),tE=r(2772);tw`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tw`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tw`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tw`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tw`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tw`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let tC=tw`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tV=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tT=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tD=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tM=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tO=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t_=tw`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tj=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tR=tw`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tF=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tL=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t$=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tI=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function tB(t){var e;return e=()=>null,r=>r?t():e()}function tN(t){return tB(()=>({opacity:0}))(t)}let tz=t=>{let{cascade:e=!1,damping:r=.5,delay:n=0,duration:i=1e3,fraction:s=0,keyframes:o=tO,triggerOnce:l=!1,className:u,style:c,childClassName:d,childStyle:f,children:h,onVisibilityChange:p}=t,m=(0,a.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=tO,iterationCount:i=1}){return tx`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:o,duration:i}),[i,o]);return void 0==h?null:"string"==typeof h||"number"==typeof h||"boolean"==typeof h?tb(tW,{...t,animationStyles:m,children:String(h)}):(0,tE.isFragment)(h)?tb(tY,{...t,animationStyles:m}):tb(tv,{children:a.Children.map(h,(o,h)=>{if(!(0,a.isValidElement)(o))return null;let y=n+(e?h*i*r:0);switch(o.type){case"ol":case"ul":return tb(tA,{children:({cx:e})=>tb(o.type,{...o.props,className:e(u,o.props.className),style:Object.assign({},c,o.props.style),children:tb(tz,{...t,children:o.props.children})})});case"li":return tb(tk.df,{threshold:s,triggerOnce:l,onChange:p,children:({inView:t,ref:e})=>tb(tA,{children:({cx:r})=>tb(o.type,{...o.props,ref:e,className:r(d,o.props.className),css:tB(()=>m)(t),style:Object.assign({},f,o.props.style,tN(!t),{animationDelay:y+"ms"})})})});default:return tb(tk.df,{threshold:s,triggerOnce:l,onChange:p,children:({inView:t,ref:e})=>tb("div",{ref:e,className:u,css:tB(()=>m)(t),style:Object.assign({},c,tN(!t),{animationDelay:y+"ms"}),children:tb(tA,{children:({cx:t})=>tb(o.type,{...o.props,className:t(d,o.props.className),style:Object.assign({},f,o.props.style)})})})})}})})},tU={display:"inline-block",whiteSpace:"pre"},tW=t=>{var e,r;let{animationStyles:n,cascade:i=!1,damping:s=.5,delay:a=0,duration:o=1e3,fraction:l=0,triggerOnce:u=!1,className:c,style:d,children:f,onVisibilityChange:h}=t,{ref:p,inView:m}=(0,tk.YD)({triggerOnce:u,threshold:l,onChange:h});return(e=()=>tb("div",{ref:p,className:c,style:Object.assign({},d,tU),children:f.split("").map((t,e)=>tb("span",{css:tB(()=>n)(m),style:{animationDelay:a+e*o*s+"ms"},children:t},e))}),r=()=>tb(tY,{...t,children:f}),r=>r?e():r())(i)},tY=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:i,style:s,children:a,onVisibilityChange:o}=t,{ref:l,inView:u}=(0,tk.YD)({triggerOnce:n,threshold:r,onChange:o});return tb("div",{ref:l,className:i,css:tB(()=>e)(u),style:Object.assign({},s,tN(!u)),children:a})};tw`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tw`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let tH=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,tX=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,tG=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,tZ=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,tq=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,tK=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tJ=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,tQ=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,t0=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,t1=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,t3=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,t5=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,t2=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,t4=t=>{let{big:e=!1,direction:r,reverse:n=!1,...i}=t,s=(0,a.useMemo)(()=>(function(t,e,r){switch(r){case"bottom-left":return e?tX:tV;case"bottom-right":return e?tG:tT;case"down":return t?e?tq:tM:e?tZ:tD;case"left":return t?e?tJ:t_:e?tK:tO;case"right":return t?e?t0:tR:e?tQ:tj;case"top-left":return e?t1:tF;case"top-right":return e?t3:tL;case"up":return t?e?t2:tI:e?t5:t$;default:return e?tH:tC}})(e,n,r),[e,r,n]);return tb(tz,{keyframes:s,...i})};tw`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,tw`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;let t6=tw`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t7=tw`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t9=tw`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t8=tw`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,ee=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,er=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,en=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,ei=t=>{let{direction:e,reverse:r=!1,...n}=t,i=(0,a.useMemo)(()=>(function(t,e){switch(e){case"down":return t?et:t6;case"right":return t?er:t9;case"up":return t?en:t8;default:return t?ee:t7}})(r,e),[e,r]);return tb(tz,{keyframes:i,...n})};tw`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`},1865:function(t,e,r){"use strict";r.d(e,{cI:function(){return tm}});var n=r(2265),i=t=>"checkbox"===t.type,s=t=>t instanceof Date,a=t=>null==t;let o=t=>"object"==typeof t;var l=t=>!a(t)&&!Array.isArray(t)&&o(t)&&!s(t),u=t=>l(t)&&t.target?i(t.target)?t.target.checked:t.target.value:t,c=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,d=(t,e)=>t.has(c(e)),f=t=>{let e=t.constructor&&t.constructor.prototype;return l(e)&&e.hasOwnProperty("isPrototypeOf")},h="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function p(t){let e;let r=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(!(h&&(t instanceof Blob||t instanceof FileList))&&(r||l(t))))return t;else if(e=r?[]:{},r||f(t))for(let r in t)t.hasOwnProperty(r)&&(e[r]=p(t[r]));else e=t;return e}var m=t=>Array.isArray(t)?t.filter(Boolean):[],y=t=>void 0===t,g=(t,e,r)=>{if(!e||!l(t))return r;let n=m(e.split(/[,[\].]+?/)).reduce((t,e)=>a(t)?t:t[e],t);return y(n)||n===t?y(t[e])?r:t[e]:n},v=t=>"boolean"==typeof t;let b={BLUR:"blur",FOCUS_OUT:"focusout"},x={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},w={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};n.createContext(null);var S=(t,e,r,n=!0)=>{let i={defaultValues:e._defaultValues};for(let s in t)Object.defineProperty(i,s,{get:()=>(e._proxyFormState[s]!==x.all&&(e._proxyFormState[s]=!n||x.all),r&&(r[s]=!0),t[s])});return i},P=t=>l(t)&&!Object.keys(t).length,A=(t,e,r,n)=>{r(t);let{name:i,...s}=t;return P(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(t=>e[t]===(!n||x.all))},k=t=>Array.isArray(t)?t:[t],E=t=>"string"==typeof t,C=(t,e,r,n,i)=>E(t)?(n&&e.watch.add(t),g(r,t,i)):Array.isArray(t)?t.map(t=>(n&&e.watch.add(t),g(r,t))):(n&&(e.watchAll=!0),r),V=t=>/^\w*$/.test(t),T=t=>m(t.replace(/["|']|\]/g,"").split(/\.|\[/)),D=(t,e,r)=>{let n=-1,i=V(e)?[e]:T(e),s=i.length,a=s-1;for(;++n<s;){let e=i[n],s=r;if(n!==a){let r=t[e];s=l(r)||Array.isArray(r)?r:isNaN(+i[n+1])?{}:[]}t[e]=s,t=t[e]}return t},M=(t,e,r,n,i)=>e?{...r[t],types:{...r[t]&&r[t].types?r[t].types:{},[n]:i||!0}}:{},O=t=>({isOnSubmit:!t||t===x.onSubmit,isOnBlur:t===x.onBlur,isOnChange:t===x.onChange,isOnAll:t===x.all,isOnTouch:t===x.onTouched}),_=(t,e,r)=>!r&&(e.watchAll||e.watch.has(t)||[...e.watch].some(e=>t.startsWith(e)&&/^\.\w+/.test(t.slice(e.length))));let j=(t,e,r,n)=>{for(let i of r||Object.keys(t)){let r=g(t,i);if(r){let{_f:t,...s}=r;if(t){if(t.refs&&t.refs[0]&&e(t.refs[0],i)&&!n||t.ref&&e(t.ref,t.name)&&!n)break;j(s,e)}else l(s)&&j(s,e)}}};var R=(t,e,r)=>{let n=m(g(t,r));return D(n,"root",e[r]),D(t,r,n),t},F=t=>"file"===t.type,L=t=>"function"==typeof t,$=t=>{if(!h)return!1;let e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},I=t=>E(t),B=t=>"radio"===t.type,N=t=>t instanceof RegExp;let z={value:!1,isValid:!1},U={value:!0,isValid:!0};var W=t=>{if(Array.isArray(t)){if(t.length>1){let e=t.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!y(t[0].attributes.value)?y(t[0].value)||""===t[0].value?U:{value:t[0].value,isValid:!0}:U:z}return z};let Y={isValid:!1,value:null};var H=t=>Array.isArray(t)?t.reduce((t,e)=>e&&e.checked&&!e.disabled?{isValid:!0,value:e.value}:t,Y):Y;function X(t,e,r="validate"){if(I(t)||Array.isArray(t)&&t.every(I)||v(t)&&!t)return{type:r,message:I(t)?t:"",ref:e}}var G=t=>l(t)&&!N(t)?t:{value:t,message:""},Z=async(t,e,r,n,s)=>{let{ref:o,refs:u,required:c,maxLength:d,minLength:f,min:h,max:p,pattern:m,validate:b,name:x,valueAsNumber:S,mount:A,disabled:k}=t._f,C=g(e,x);if(!A||k)return{};let V=u?u[0]:o,T=t=>{n&&V.reportValidity&&(V.setCustomValidity(v(t)?"":t||""),V.reportValidity())},D={},O=B(o),_=i(o),j=(S||F(o))&&y(o.value)&&y(C)||$(o)&&""===o.value||""===C||Array.isArray(C)&&!C.length,R=M.bind(null,x,r,D),z=(t,e,r,n=w.maxLength,i=w.minLength)=>{let s=t?e:r;D[x]={type:t?n:i,message:s,ref:o,...R(t?n:i,s)}};if(s?!Array.isArray(C)||!C.length:c&&(!(O||_)&&(j||a(C))||v(C)&&!C||_&&!W(u).isValid||O&&!H(u).isValid)){let{value:t,message:e}=I(c)?{value:!!c,message:c}:G(c);if(t&&(D[x]={type:w.required,message:e,ref:V,...R(w.required,e)},!r))return T(e),D}if(!j&&(!a(h)||!a(p))){let t,e;let n=G(p),i=G(h);if(a(C)||isNaN(C)){let r=o.valueAsDate||new Date(C),s=t=>new Date(new Date().toDateString()+" "+t),a="time"==o.type,l="week"==o.type;E(n.value)&&C&&(t=a?s(C)>s(n.value):l?C>n.value:r>new Date(n.value)),E(i.value)&&C&&(e=a?s(C)<s(i.value):l?C<i.value:r<new Date(i.value))}else{let r=o.valueAsNumber||(C?+C:C);a(n.value)||(t=r>n.value),a(i.value)||(e=r<i.value)}if((t||e)&&(z(!!t,n.message,i.message,w.max,w.min),!r))return T(D[x].message),D}if((d||f)&&!j&&(E(C)||s&&Array.isArray(C))){let t=G(d),e=G(f),n=!a(t.value)&&C.length>+t.value,i=!a(e.value)&&C.length<+e.value;if((n||i)&&(z(n,t.message,e.message),!r))return T(D[x].message),D}if(m&&!j&&E(C)){let{value:t,message:e}=G(m);if(N(t)&&!C.match(t)&&(D[x]={type:w.pattern,message:e,ref:o,...R(w.pattern,e)},!r))return T(e),D}if(b){if(L(b)){let t=await b(C,e),n=X(t,V);if(n&&(D[x]={...n,...R(w.validate,n.message)},!r))return T(n.message),D}else if(l(b)){let t={};for(let n in b){if(!P(t)&&!r)break;let i=X(await b[n](C,e),V,n);i&&(t={...i,...R(n,i.message)},T(i.message),r&&(D[x]=t))}if(!P(t)&&(D[x]={ref:V,...t},!r))return D}}return T(!0),D};function q(t,e){let r=Array.isArray(e)?e:V(e)?[e]:T(e),n=1===r.length?t:function(t,e){let r=e.slice(0,-1).length,n=0;for(;n<r;)t=y(t)?n++:t[e[n++]];return t}(t,r),i=r.length-1,s=r[i];return n&&delete n[s],0!==i&&(l(n)&&P(n)||Array.isArray(n)&&function(t){for(let e in t)if(t.hasOwnProperty(e)&&!y(t[e]))return!1;return!0}(n))&&q(t,r.slice(0,-1)),t}var K=()=>{let t=[];return{get observers(){return t},next:e=>{for(let r of t)r.next&&r.next(e)},subscribe:e=>(t.push(e),{unsubscribe:()=>{t=t.filter(t=>t!==e)}}),unsubscribe:()=>{t=[]}}},J=t=>a(t)||!o(t);function Q(t,e){if(J(t)||J(e))return t===e;if(s(t)&&s(e))return t.getTime()===e.getTime();let r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(let i of r){let r=t[i];if(!n.includes(i))return!1;if("ref"!==i){let t=e[i];if(s(r)&&s(t)||l(r)&&l(t)||Array.isArray(r)&&Array.isArray(t)?!Q(r,t):r!==t)return!1}}return!0}var tt=t=>"select-multiple"===t.type,te=t=>B(t)||i(t),tr=t=>$(t)&&t.isConnected,tn=t=>{for(let e in t)if(L(t[e]))return!0;return!1};function ti(t,e={}){let r=Array.isArray(t);if(l(t)||r)for(let r in t)Array.isArray(t[r])||l(t[r])&&!tn(t[r])?(e[r]=Array.isArray(t[r])?[]:{},ti(t[r],e[r])):a(t[r])||(e[r]=!0);return e}var ts=(t,e)=>(function t(e,r,n){let i=Array.isArray(e);if(l(e)||i)for(let i in e)Array.isArray(e[i])||l(e[i])&&!tn(e[i])?y(r)||J(n[i])?n[i]=Array.isArray(e[i])?ti(e[i],[]):{...ti(e[i])}:t(e[i],a(r)?{}:r[i],n[i]):n[i]=!Q(e[i],r[i]);return n})(t,e,ti(e)),ta=(t,{valueAsNumber:e,valueAsDate:r,setValueAs:n})=>y(t)?t:e?""===t?NaN:t?+t:t:r&&E(t)?new Date(t):n?n(t):t;function to(t){let e=t.ref;return(t.refs?t.refs.every(t=>t.disabled):e.disabled)?void 0:F(e)?e.files:B(e)?H(t.refs).value:tt(e)?[...e.selectedOptions].map(({value:t})=>t):i(e)?W(t.refs).value:ta(y(e.value)?t.ref.value:e.value,t)}var tl=(t,e,r,n)=>{let i={};for(let r of t){let t=g(e,r);t&&D(i,r,t._f)}return{criteriaMode:r,names:[...t],fields:i,shouldUseNativeValidation:n}},tu=t=>y(t)?t:N(t)?t.source:l(t)?N(t.value)?t.value.source:t.value:t,tc=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function td(t,e,r){let n=g(t,r);if(n||V(r))return{error:n,name:r};let i=r.split(".");for(;i.length;){let n=i.join("."),s=g(e,n),a=g(t,n);if(s&&!Array.isArray(s)&&r!==n)break;if(a&&a.type)return{name:n,error:a};i.pop()}return{name:r}}var tf=(t,e,r,n,i)=>!i.isOnAll&&(!r&&i.isOnTouch?!(e||t):(r?n.isOnBlur:i.isOnBlur)?!t:(r?!n.isOnChange:!i.isOnChange)||t),th=(t,e)=>!m(g(t,e)).length&&q(t,e);let tp={mode:x.onSubmit,reValidateMode:x.onChange,shouldFocusError:!0};function tm(t={}){let e=n.useRef(),r=n.useRef(),[o,c]=n.useState({isDirty:!1,isValidating:!1,isLoading:L(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:t.errors||{},disabled:!1,defaultValues:L(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...function(t={},e){let r,n={...tp,...t},o={submitCount:0,isDirty:!1,isLoading:L(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},c={},f=(l(n.defaultValues)||l(n.values))&&p(n.defaultValues||n.values)||{},w=n.shouldUnregister?{}:p(f),S={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V=0,T={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},M={values:K(),array:K(),state:K()},I=t.resetOptions&&t.resetOptions.keepDirtyValues,B=O(n.mode),N=O(n.reValidateMode),z=n.criteriaMode===x.all,U=t=>e=>{clearTimeout(V),V=setTimeout(t,e)},W=async t=>{if(T.isValid||t){let t=n.resolver?P((await ti()).errors):await ty(c,!0);t!==o.isValid&&M.state.next({isValid:t})}},Y=t=>T.isValidating&&M.state.next({isValidating:t}),H=(t,e)=>{D(o.errors,t,e),M.state.next({errors:o.errors})},X=(t,e,r,n)=>{let i=g(c,t);if(i){let s=g(w,t,y(r)?g(f,t):r);y(s)||n&&n.defaultChecked||e?D(w,t,e?s:to(i._f)):tb(t,s),S.mount&&W()}},G=(t,e,r,n,i)=>{let s=!1,a=!1,l={name:t};if(!r||n){T.isDirty&&(a=o.isDirty,o.isDirty=l.isDirty=tg(),s=a!==l.isDirty);let r=Q(g(f,t),e);a=g(o.dirtyFields,t),r?q(o.dirtyFields,t):D(o.dirtyFields,t,!0),l.dirtyFields=o.dirtyFields,s=s||T.dirtyFields&&!r!==a}if(r){let e=g(o.touchedFields,t);e||(D(o.touchedFields,t,r),l.touchedFields=o.touchedFields,s=s||T.touchedFields&&e!==r)}return s&&i&&M.state.next(l),s?l:{}},tn=(e,n,i,s)=>{let a=g(o.errors,e),l=T.isValid&&v(n)&&o.isValid!==n;if(t.delayError&&i?(r=U(()=>H(e,i)))(t.delayError):(clearTimeout(V),r=null,i?D(o.errors,e,i):q(o.errors,e)),(i?!Q(a,i):a)||!P(s)||l){let t={...s,...l&&v(n)?{isValid:n}:{},errors:o.errors,name:e};o={...o,...t},M.state.next(t)}Y(!1)},ti=async t=>n.resolver(w,n.context,tl(t||A.mount,c,n.criteriaMode,n.shouldUseNativeValidation)),tm=async t=>{let{errors:e}=await ti(t);if(t)for(let r of t){let t=g(e,r);t?D(o.errors,r,t):q(o.errors,r)}else o.errors=e;return e},ty=async(t,e,r={valid:!0})=>{for(let i in t){let s=t[i];if(s){let{_f:t,...i}=s;if(t){let i=A.array.has(t.name),a=await Z(s,w,z,n.shouldUseNativeValidation&&!e,i);if(a[t.name]&&(r.valid=!1,e))break;e||(g(a,t.name)?i?R(o.errors,a,t.name):D(o.errors,t.name,a[t.name]):q(o.errors,t.name))}i&&await ty(i,e,r)}}return r.valid},tg=(t,e)=>(t&&e&&D(w,t,e),!Q(tk(),f)),tv=(t,e,r)=>C(t,A,{...S.mount?w:y(e)?f:E(t)?{[t]:e}:e},r,e),tb=(t,e,r={})=>{let n=g(c,t),s=e;if(n){let r=n._f;r&&(r.disabled||D(w,t,ta(e,r)),s=$(r.ref)&&a(e)?"":e,tt(r.ref)?[...r.ref.options].forEach(t=>t.selected=s.includes(t.value)):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach(t=>(!t.defaultChecked||!t.disabled)&&(t.checked=Array.isArray(s)?!!s.find(e=>e===t.value):s===t.value)):r.refs[0]&&(r.refs[0].checked=!!s):r.refs.forEach(t=>t.checked=t.value===s):F(r.ref)?r.ref.value="":(r.ref.value=s,r.ref.type||M.values.next({name:t,values:{...w}})))}(r.shouldDirty||r.shouldTouch)&&G(t,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&tA(t)},tx=(t,e,r)=>{for(let n in e){let i=e[n],a=`${t}.${n}`,o=g(c,a);!A.array.has(t)&&J(i)&&(!o||o._f)||s(i)?tb(a,i,r):tx(a,i,r)}},tw=(t,r,n={})=>{let i=g(c,t),s=A.array.has(t),l=p(r);D(w,t,l),s?(M.array.next({name:t,values:{...w}}),(T.isDirty||T.dirtyFields)&&n.shouldDirty&&M.state.next({name:t,dirtyFields:ts(f,w),isDirty:tg(t,l)})):!i||i._f||a(l)?tb(t,l,n):tx(t,l,n),_(t,A)&&M.state.next({...o}),M.values.next({name:t,values:{...w}}),S.mount||e()},tS=async t=>{let e=t.target,i=e.name,s=!0,a=g(c,i),l=t=>{s=Number.isNaN(t)||t===g(w,i,t)};if(a){let d,f;let h=e.type?to(a._f):u(t),p=t.type===b.BLUR||t.type===b.FOCUS_OUT,m=!tc(a._f)&&!n.resolver&&!g(o.errors,i)&&!a._f.deps||tf(p,g(o.touchedFields,i),o.isSubmitted,N,B),y=_(i,A,p);D(w,i,h),p?(a._f.onBlur&&a._f.onBlur(t),r&&r(0)):a._f.onChange&&a._f.onChange(t);let v=G(i,h,p,!1),x=!P(v)||y;if(p||M.values.next({name:i,type:t.type,values:{...w}}),m)return T.isValid&&W(),x&&M.state.next({name:i,...y?{}:v});if(!p&&y&&M.state.next({...o}),Y(!0),n.resolver){let{errors:t}=await ti([i]);if(l(h),s){let e=td(o.errors,c,i),r=td(t,c,e.name||i);d=r.error,i=r.name,f=P(t)}}else d=(await Z(a,w,z,n.shouldUseNativeValidation))[i],l(h),s&&(d?f=!1:T.isValid&&(f=await ty(c,!0)));s&&(a._f.deps&&tA(a._f.deps),tn(i,f,d,v))}},tP=(t,e)=>{if(g(o.errors,e)&&t.focus)return t.focus(),1},tA=async(t,e={})=>{let r,i;let s=k(t);if(Y(!0),n.resolver){let e=await tm(y(t)?t:s);r=P(e),i=t?!s.some(t=>g(e,t)):r}else t?((i=(await Promise.all(s.map(async t=>{let e=g(c,t);return await ty(e&&e._f?{[t]:e}:e)}))).every(Boolean))||o.isValid)&&W():i=r=await ty(c);return M.state.next({...!E(t)||T.isValid&&r!==o.isValid?{}:{name:t},...n.resolver||!t?{isValid:r}:{},errors:o.errors,isValidating:!1}),e.shouldFocus&&!i&&j(c,tP,t?s:A.mount),i},tk=t=>{let e={...f,...S.mount?w:{}};return y(t)?e:E(t)?g(e,t):t.map(t=>g(e,t))},tE=(t,e)=>({invalid:!!g((e||o).errors,t),isDirty:!!g((e||o).dirtyFields,t),isTouched:!!g((e||o).touchedFields,t),error:g((e||o).errors,t)}),tC=(t,e,r)=>{let n=(g(c,t,{_f:{}})._f||{}).ref;D(o.errors,t,{...e,ref:n}),M.state.next({name:t,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},tV=(t,e={})=>{for(let r of t?k(t):A.mount)A.mount.delete(r),A.array.delete(r),e.keepValue||(q(c,r),q(w,r)),e.keepError||q(o.errors,r),e.keepDirty||q(o.dirtyFields,r),e.keepTouched||q(o.touchedFields,r),n.shouldUnregister||e.keepDefaultValue||q(f,r);M.values.next({values:{...w}}),M.state.next({...o,...e.keepDirty?{isDirty:tg()}:{}}),e.keepIsValid||W()},tT=({disabled:t,name:e,field:r,fields:n,value:i})=>{if(v(t)){let s=t?void 0:y(i)?to(r?r._f:g(n,e)._f):i;D(w,e,s),G(e,s,!1,!1,!0)}},tD=(t,e={})=>{let r=g(c,t),i=v(e.disabled);return D(c,t,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:t}},name:t,mount:!0,...e}}),A.mount.add(t),r?tT({field:r,disabled:e.disabled,name:t}):X(t,!0,e.value),{...i?{disabled:e.disabled}:{},...n.progressive?{required:!!e.required,min:tu(e.min),max:tu(e.max),minLength:tu(e.minLength),maxLength:tu(e.maxLength),pattern:tu(e.pattern)}:{},name:t,onChange:tS,onBlur:tS,ref:i=>{if(i){tD(t,e),r=g(c,t);let n=y(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,s=te(n),a=r._f.refs||[];(s?a.find(t=>t===n):n===r._f.ref)||(D(c,t,{_f:{...r._f,...s?{refs:[...a.filter(tr),n,...Array.isArray(g(f,t))?[{}]:[]],ref:{type:n.type,name:t}}:{ref:n}}}),X(t,!1,void 0,n))}else(r=g(c,t,{}))._f&&(r._f.mount=!1),(n.shouldUnregister||e.shouldUnregister)&&!(d(A.array,t)&&S.action)&&A.unMount.add(t)}}},tM=()=>n.shouldFocusError&&j(c,tP,A.mount),tO=(t,e)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let i=p(w);if(M.state.next({isSubmitting:!0}),n.resolver){let{errors:t,values:e}=await ti();o.errors=t,i=e}else await ty(c);q(o.errors,"root"),P(o.errors)?(M.state.next({errors:{}}),await t(i,r)):(e&&await e({...o.errors},r),tM(),setTimeout(tM)),M.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(o.errors),submitCount:o.submitCount+1,errors:o.errors})},t_=(r,n={})=>{let i=r?p(r):f,s=p(i),a=r&&!P(r)?s:f;if(n.keepDefaultValues||(f=i),!n.keepValues){if(n.keepDirtyValues||I)for(let t of A.mount)g(o.dirtyFields,t)?D(a,t,g(w,t)):tw(t,g(a,t));else{if(h&&y(r))for(let t of A.mount){let e=g(c,t);if(e&&e._f){let t=Array.isArray(e._f.refs)?e._f.refs[0]:e._f.ref;if($(t)){let e=t.closest("form");if(e){e.reset();break}}}}c={}}w=t.shouldUnregister?n.keepDefaultValues?p(f):{}:p(a),M.array.next({values:{...a}}),M.values.next({values:{...a}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},S.mount||e(),S.mount=!T.isValid||!!n.keepIsValid,S.watch=!!t.shouldUnregister,M.state.next({submitCount:n.keepSubmitCount?o.submitCount:0,isDirty:n.keepDirty?o.isDirty:!!(n.keepDefaultValues&&!Q(r,f)),isSubmitted:!!n.keepIsSubmitted&&o.isSubmitted,dirtyFields:n.keepDirtyValues?o.dirtyFields:n.keepDefaultValues&&r?ts(f,r):{},touchedFields:n.keepTouched?o.touchedFields:{},errors:n.keepErrors?o.errors:{},isSubmitSuccessful:!!n.keepIsSubmitSuccessful&&o.isSubmitSuccessful,isSubmitting:!1})},tj=(t,e)=>t_(L(t)?t(w):t,e);return{control:{register:tD,unregister:tV,getFieldState:tE,handleSubmit:tO,setError:tC,_executeSchema:ti,_getWatch:tv,_getDirty:tg,_updateValid:W,_removeUnmounted:()=>{for(let t of A.unMount){let e=g(c,t);e&&(e._f.refs?e._f.refs.every(t=>!tr(t)):!tr(e._f.ref))&&tV(t)}A.unMount=new Set},_updateFieldArray:(t,e=[],r,n,i=!0,s=!0)=>{if(n&&r){if(S.action=!0,s&&Array.isArray(g(c,t))){let e=r(g(c,t),n.argA,n.argB);i&&D(c,t,e)}if(s&&Array.isArray(g(o.errors,t))){let e=r(g(o.errors,t),n.argA,n.argB);i&&D(o.errors,t,e),th(o.errors,t)}if(T.touchedFields&&s&&Array.isArray(g(o.touchedFields,t))){let e=r(g(o.touchedFields,t),n.argA,n.argB);i&&D(o.touchedFields,t,e)}T.dirtyFields&&(o.dirtyFields=ts(f,w)),M.state.next({name:t,isDirty:tg(t,e),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else D(w,t,e)},_updateDisabledField:tT,_getFieldArray:e=>m(g(S.mount?w:f,e,t.shouldUnregister?g(f,e,[]):[])),_reset:t_,_resetDefaultValues:()=>L(n.defaultValues)&&n.defaultValues().then(t=>{tj(t,n.resetOptions),M.state.next({isLoading:!1})}),_updateFormState:t=>{o={...o,...t}},_disableForm:t=>{v(t)&&(M.state.next({disabled:t}),j(c,(e,r)=>{let n=t,i=g(c,r);i&&v(i._f.disabled)&&(n||(n=i._f.disabled)),e.disabled=n},0,!1))},_subjects:M,_proxyFormState:T,_setErrors:t=>{o.errors=t,M.state.next({errors:o.errors,isValid:!1})},get _fields(){return c},get _formValues(){return w},get _state(){return S},set _state(value){S=value},get _defaultValues(){return f},get _names(){return A},set _names(value){A=value},get _formState(){return o},set _formState(value){o=value},get _options(){return n},set _options(value){n={...n,...value}}},trigger:tA,register:tD,handleSubmit:tO,watch:(t,e)=>L(t)?M.values.subscribe({next:r=>t(tv(void 0,e),r)}):tv(t,e,!0),setValue:tw,getValues:tk,reset:tj,resetField:(t,e={})=>{g(c,t)&&(y(e.defaultValue)?tw(t,g(f,t)):(tw(t,e.defaultValue),D(f,t,e.defaultValue)),e.keepTouched||q(o.touchedFields,t),e.keepDirty||(q(o.dirtyFields,t),o.isDirty=e.defaultValue?tg(t,g(f,t)):tg()),!e.keepError&&(q(o.errors,t),T.isValid&&W()),M.state.next({...o}))},clearErrors:t=>{t&&k(t).forEach(t=>q(o.errors,t)),M.state.next({errors:t?o.errors:{}})},unregister:tV,setError:tC,setFocus:(t,e={})=>{let r=g(c,t),n=r&&r._f;if(n){let t=n.refs?n.refs[0]:n.ref;t.focus&&(t.focus(),e.shouldSelect&&t.select())}},getFieldState:tE}}(t,()=>c(t=>({...t}))),formState:o});let f=e.current.control;return f._options=t,!function(t){let e=n.useRef(t);e.current=t,n.useEffect(()=>{let r=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{r&&r.unsubscribe()}},[t.disabled])}({subject:f._subjects.state,next:t=>{A(t,f._proxyFormState,f._updateFormState,!0)&&c({...f._formState})}}),n.useEffect(()=>f._disableForm(t.disabled),[f,t.disabled]),n.useEffect(()=>{if(f._proxyFormState.isDirty){let t=f._getDirty();t!==o.isDirty&&f._subjects.state.next({isDirty:t})}},[f,o.isDirty]),n.useEffect(()=>{t.values&&!Q(t.values,r.current)?(f._reset(t.values,f._options.resetOptions),r.current=t.values,c(t=>({...t}))):f._resetDefaultValues()},[t.values,f]),n.useEffect(()=>{t.errors&&f._setErrors(t.errors)},[t.errors,f]),n.useEffect(()=>{f._state.mount||(f._updateValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),e.current.formState=S(o,f),e.current}},5925:function(t,e,r){"use strict";let n,i;r.r(e),r.d(e,{CheckmarkIcon:function(){return W},ErrorIcon:function(){return z},LoaderIcon:function(){return U},ToastBar:function(){return tt},ToastIcon:function(){return G},Toaster:function(){return ti},default:function(){return ts},resolveValue:function(){return A},toast:function(){return $},useToaster:function(){return N},useToasterStore:function(){return R}});var s,a=r(2265);let o={data:""},l=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||o,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,f=(t,e)=>{let r="",n="",i="";for(let s in t){let a=t[s];"@"==s[0]?"i"==s[1]?r=s+" "+a+";":n+="f"==s[1]?f(a,s):s+"{"+f(a,"k"==s[1]?"":e)+"}":"object"==typeof a?n+=f(a,e?e.replace(/([^,])+/g,t=>s.replace(/(^:.*)|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):s):null!=a&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=f.p?f.p(s,a):s+":"+a+";")}return r+(e&&i?e+"{"+i+"}":i)+n},h={},p=t=>{if("object"==typeof t){let e="";for(let r in t)e+=r+p(t[r]);return e}return t},m=(t,e,r,n,i)=>{var s;let a=p(t),o=h[a]||(h[a]=(t=>{let e=0,r=11;for(;e<t.length;)r=101*r+t.charCodeAt(e++)>>>0;return"go"+r})(a));if(!h[o]){let e=a!==t?t:(t=>{let e,r,n=[{}];for(;e=u.exec(t.replace(c,""));)e[4]?n.shift():e[3]?(r=e[3].replace(d," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][e[1]]=e[2].replace(d," ").trim();return n[0]})(t);h[o]=f(i?{["@keyframes "+o]:e}:e,r?"":"."+o)}let l=r&&h.g?h.g:null;return r&&(h.g=h[o]),s=h[o],l?e.data=e.data.replace(l,s):-1===e.data.indexOf(s)&&(e.data=n?s+e.data:e.data+s),o},y=(t,e,r)=>t.reduce((t,n,i)=>{let s=e[i];if(s&&s.call){let t=s(r),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;s=e?"."+e:t&&"object"==typeof t?t.props?"":f(t,""):!1===t?"":t}return t+n+(null==s?"":s)},"");function g(t){let e=this||{},r=t.call?t(e.p):t;return m(r.unshift?r.raw?y(r,[].slice.call(arguments,1),e.p):r.reduce((t,r)=>Object.assign(t,r&&r.call?r(e.p):r),{}):r,l(e.target),e.g,e.o,e.k)}g.bind({g:1});let v,b,x,w=g.bind({k:1});function S(t,e){let r=this||{};return function(){let n=arguments;function i(s,a){let o=Object.assign({},s),l=o.className||i.className;r.p=Object.assign({theme:b&&b()},o),r.o=/ *go\d+/.test(l),o.className=g.apply(r,n)+(l?" "+l:""),e&&(o.ref=a);let u=t;return t[0]&&(u=o.as||t,delete o.as),x&&u[0]&&x(o),v(u,o)}return e?e(i):i}}var P=t=>"function"==typeof t,A=(t,e)=>P(t)?t(e):t,k=(n=0,()=>(++n).toString()),E=()=>{if(void 0===i&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");i=!t||t.matches}return i},C=new Map,V=t=>{if(C.has(t))return;let e=setTimeout(()=>{C.delete(t),_({type:4,toastId:t})},1e3);C.set(t,e)},T=t=>{let e=C.get(t);e&&clearTimeout(e)},D=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return e.toast.id&&T(e.toast.id),{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:r}=e;return t.toasts.find(t=>t.id===r.id)?D(t,{type:1,toast:r}):D(t,{type:0,toast:r});case 3:let{toastId:n}=e;return n?V(n):t.toasts.forEach(t=>{V(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===n||void 0===n?{...t,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+i}))}}},M=[],O={toasts:[],pausedAt:void 0},_=t=>{O=D(O,t),M.forEach(t=>{t(O)})},j={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(t={})=>{let[e,r]=(0,a.useState)(O);(0,a.useEffect)(()=>(M.push(r),()=>{let t=M.indexOf(r);t>-1&&M.splice(t,1)}),[e]);let n=e.toasts.map(e=>{var r,n;return{...t,...t[e.type],...e,duration:e.duration||(null==(r=t[e.type])?void 0:r.duration)||(null==t?void 0:t.duration)||j[e.type],style:{...t.style,...null==(n=t[e.type])?void 0:n.style,...e.style}}});return{...e,toasts:n}},F=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),L=t=>(e,r)=>{let n=F(e,t,r);return _({type:2,toast:n}),n.id},$=(t,e)=>L("blank")(t,e);$.error=L("error"),$.success=L("success"),$.loading=L("loading"),$.custom=L("custom"),$.dismiss=t=>{_({type:3,toastId:t})},$.remove=t=>_({type:4,toastId:t}),$.promise=(t,e,r)=>{let n=$.loading(e.loading,{...r,...null==r?void 0:r.loading});return t.then(t=>($.success(A(e.success,t),{id:n,...r,...null==r?void 0:r.success}),t)).catch(t=>{$.error(A(e.error,t),{id:n,...r,...null==r?void 0:r.error})}),t};var I=(t,e)=>{_({type:1,toast:{id:t,height:e}})},B=()=>{_({type:5,time:Date.now()})},N=t=>{let{toasts:e,pausedAt:r}=R(t);(0,a.useEffect)(()=>{if(r)return;let t=Date.now(),n=e.map(e=>{if(e.duration===1/0)return;let r=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(r<0){e.visible&&$.dismiss(e.id);return}return setTimeout(()=>$.dismiss(e.id),r)});return()=>{n.forEach(t=>t&&clearTimeout(t))}},[e,r]);let n=(0,a.useCallback)(()=>{r&&_({type:6,time:Date.now()})},[r]),i=(0,a.useCallback)((t,r)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:s}=r||{},a=e.filter(e=>(e.position||s)===(t.position||s)&&e.height),o=a.findIndex(e=>e.id===t.id),l=a.filter((t,e)=>e<o&&t.visible).length;return a.filter(t=>t.visible).slice(...n?[l+1]:[0,l]).reduce((t,e)=>t+(e.height||0)+i,0)},[e]);return{toasts:e,handlers:{updateHeight:I,startPause:B,endPause:n,calculateOffset:i}}},z=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=S("div")`
  position: absolute;
`,H=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:t})=>{let{icon:e,type:r,iconTheme:n}=t;return void 0!==e?"string"==typeof e?a.createElement(X,null,e):e:"blank"===r?null:a.createElement(H,null,a.createElement(U,{...n}),"loading"!==r&&a.createElement(Y,null,"error"===r?a.createElement(z,{...n}):a.createElement(W,{...n})))},Z=t=>`
0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,q=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}
`,K=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(t,e)=>{let r=t.includes("top")?1:-1,[n,i]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(r),q(r)];return{animation:e?`${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tt=a.memo(({toast:t,position:e,style:r,children:n})=>{let i=t.height?Q(t.position||e||"top-center",t.visible):{opacity:0},s=a.createElement(G,{toast:t}),o=a.createElement(J,{...t.ariaProps},A(t.message,t));return a.createElement(K,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof n?n({icon:s,message:o}):a.createElement(a.Fragment,null,s,o))});s=a.createElement,f.p=void 0,v=s,b=void 0,x=void 0;var te=({id:t,className:e,style:r,onHeightUpdate:n,children:i})=>{let s=a.useCallback(e=>{if(e){let r=()=>{n(t,e.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return a.createElement("div",{ref:s,className:e,style:r},i)},tr=(t,e)=>{let r=t.includes("top"),n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},tn=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ti=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:n,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=N(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let s=r.position||e,o=tr(s,u.calculateOffset(r,{reverseOrder:t,gutter:n,defaultPosition:e}));return a.createElement(te,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?tn:"",style:o},"custom"===r.type?A(r.message,r):i?i(r):a.createElement(tt,{toast:r,position:s}))}))},ts=$},4327:function(t,e,r){"use strict";r.d(e,{YD:function(){return h},df:function(){return f}});var n=r(2265),i=Object.defineProperty,s=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,a=(t,e,r)=>(s(t,"symbol"!=typeof e?e+"":e,r),r),o=new Map,l=new WeakMap,u=0,c=void 0;function d(t,e,r={},n=c){if(void 0===window.IntersectionObserver&&void 0!==n){let i=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:s,elements:a}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(l.has(r)||(u+=1,l.set(r,u.toString())),l.get(r)):"0":t[e]}`}).toString(),r=o.get(e);if(!r){let n;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{var r;let s=e.isIntersecting&&n.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(r=i.get(e.target))||r.forEach(t=>{t(s,e)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:i},o.set(e,r)}return r}(r),d=a.get(t)||[];return a.has(t)||a.set(t,d),d.push(e),s.observe(t),function(){d.splice(d.indexOf(e),1),0===d.length&&(a.delete(t),s.unobserve(t)),0===a.size&&(s.disconnect(),o.delete(i))}}var f=class extends n.Component{constructor(t){super(t),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),a(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:i,fallbackInView:s}=this.props;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:i},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:i,root:s,rootMargin:a,onChange:o,skip:l,trackVisibility:u,delay:c,initialInView:d,fallbackInView:f,...h}=this.props;return n.createElement(e||"div",{ref:this.handleNode,...h},t)}};function h({threshold:t,delay:e,trackVisibility:r,rootMargin:i,root:s,triggerOnce:a,skip:o,initialInView:l,fallbackInView:u,onChange:c}={}){var f;let[h,p]=n.useState(null),m=n.useRef(),[y,g]=n.useState({inView:!!l,entry:void 0});m.current=c,n.useEffect(()=>{let n;if(!o&&h)return n=d(h,(t,e)=>{g({inView:t,entry:e}),m.current&&m.current(t,e),e.isIntersecting&&a&&n&&(n(),n=void 0)},{root:s,rootMargin:i,threshold:t,trackVisibility:r,delay:e},u),()=>{n&&n()}},[Array.isArray(t)?t.toString():t,h,s,i,a,o,r,u,e]);let v=null==(f=y.entry)?void 0:f.target,b=n.useRef();h||!v||a||o||b.current===v||(b.current=v,g({inView:!!l,entry:void 0}));let x=[p,y.inView,y.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}}}]);