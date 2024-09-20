(function(Y,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],o):(Y=typeof globalThis<"u"?globalThis:Y||self,o(Y.resplit={},Y.React))})(this,function(Y,o){"use strict";var ze={exports:{}},fe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye;function st(){if(Ye)return fe;Ye=1;var s=o,l=Symbol.for("react.element"),f=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function A(O,C,P){var g,d={},I=null,y=null;P!==void 0&&(I=""+P),C.key!==void 0&&(I=""+C.key),C.ref!==void 0&&(y=C.ref);for(g in C)h.call(C,g)&&!T.hasOwnProperty(g)&&(d[g]=C[g]);if(O&&O.defaultProps)for(g in C=O.defaultProps,C)d[g]===void 0&&(d[g]=C[g]);return{$$typeof:l,type:O,key:I,ref:y,props:d,_owner:x.current}}return fe.Fragment=f,fe.jsx=A,fe.jsxs=A,fe}var de={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function lt(){return We||(We=1,process.env.NODE_ENV!=="production"&&function(){var s=o,l=Symbol.for("react.element"),f=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),G=Symbol.iterator,K="@@iterator";function W(e){if(e===null||typeof e!="object")return null;var t=G&&e[G]||e[K];return typeof t=="function"?t:null}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function j(e){{for(var t=arguments.length,r=new Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];te("error",e,r)}}function te(e,t,r){{var c=D.ReactDebugCurrentFrame,E=c.getStackAddendum();E!==""&&(t+="%s",r=r.concat([E]));var R=r.map(function(b){return String(b)});R.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,R)}}var $=!1,Se=!1,ne=!1,re=!1,me=!1,L;L=Symbol.for("react.module.reference");function oe(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===T||me||e===x||e===P||e===g||re||e===y||$||Se||ne||typeof e=="object"&&e!==null&&(e.$$typeof===I||e.$$typeof===d||e.$$typeof===A||e.$$typeof===O||e.$$typeof===C||e.$$typeof===L||e.getModuleId!==void 0))}function be(e,t,r){var c=e.displayName;if(c)return c;var E=t.displayName||t.name||"";return E!==""?r+"("+E+")":r}function he(e){return e.displayName||"Context"}function M(e){if(e==null)return null;if(typeof e.tag=="number"&&j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case f:return"Portal";case T:return"Profiler";case x:return"StrictMode";case P:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var t=e;return he(t)+".Consumer";case A:var r=e;return he(r._context)+".Provider";case C:return be(e,e.render,"ForwardRef");case d:var c=e.displayName||null;return c!==null?c:M(e.type)||"Memo";case I:{var E=e,R=E._payload,b=E._init;try{return M(b(R))}catch{return null}}}return null}var H=Object.assign,q=0,Ee,_e,we,xe,a,n,i;function p(){}p.__reactDisabledLog=!0;function v(){{if(q===0){Ee=console.log,_e=console.info,we=console.warn,xe=console.error,a=console.group,n=console.groupCollapsed,i=console.groupEnd;var e={configurable:!0,enumerable:!0,value:p,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function u(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:H({},e,{value:Ee}),info:H({},e,{value:_e}),warn:H({},e,{value:we}),error:H({},e,{value:xe}),group:H({},e,{value:a}),groupCollapsed:H({},e,{value:n}),groupEnd:H({},e,{value:i})})}q<0&&j("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var S=D.ReactCurrentDispatcher,z;function U(e,t,r){{if(z===void 0)try{throw Error()}catch(E){var c=E.stack.trim().match(/\n( *(at )?)/);z=c&&c[1]||""}return`
`+z+e}}var _=!1,Z;{var Te=typeof WeakMap=="function"?WeakMap:Map;Z=new Te}function ee(e,t){if(!e||_)return"";{var r=Z.get(e);if(r!==void 0)return r}var c;_=!0;var E=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var R;R=S.current,S.current=null,v();try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(X){c=X}Reflect.construct(e,[],b)}else{try{b.call()}catch(X){c=X}e.call(b.prototype)}}else{try{throw Error()}catch(X){c=X}e()}}catch(X){if(X&&c&&typeof X.stack=="string"){for(var m=X.stack.split(`
`),F=c.stack.split(`
`),w=m.length-1,k=F.length-1;w>=1&&k>=0&&m[w]!==F[k];)k--;for(;w>=1&&k>=0;w--,k--)if(m[w]!==F[k]){if(w!==1||k!==1)do if(w--,k--,k<0||m[w]!==F[k]){var V=`
`+m[w].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),typeof e=="function"&&Z.set(e,V),V}while(w>=1&&k>=0);break}}}finally{_=!1,S.current=R,u(),Error.prepareStackTrace=E}var ue=e?e.displayName||e.name:"",it=ue?U(ue):"";return typeof e=="function"&&Z.set(e,it),it}function N(e,t,r){return ee(e,!1)}function ie(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ae(e,t,r){if(e==null)return"";if(typeof e=="function")return ee(e,ie(e));if(typeof e=="string")return U(e);switch(e){case P:return U("Suspense");case g:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case C:return N(e.render);case d:return ae(e.type,t,r);case I:{var c=e,E=c._payload,R=c._init;try{return ae(R(E),t,r)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Pe={},ke=D.ReactDebugCurrentFrame;function se(e){if(e){var t=e._owner,r=ae(e.type,e._source,t?t.type:null);ke.setExtraStackFrame(r)}else ke.setExtraStackFrame(null)}function Ie(e,t,r,c,E){{var R=Function.call.bind(J);for(var b in e)if(R(e,b)){var m=void 0;try{if(typeof e[b]!="function"){var F=Error((c||"React class")+": "+r+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw F.name="Invariant Violation",F}m=e[b](t,b,c,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(w){m=w}m&&!(m instanceof Error)&&(se(E),j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,b,typeof m),se(null)),m instanceof Error&&!(m.message in Pe)&&(Pe[m.message]=!0,se(E),j("Failed %s type: %s",r,m.message),se(null))}}}var Oe=Array.isArray;function le(e){return Oe(e)}function je(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,r=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r}}function Ae(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function Re(e){if(Ae(e))return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",je(e)),ye(e)}var B=D.ReactCurrentOwner,St={key:!0,ref:!0,__self:!0,__source:!0},$e,qe,Ne;Ne={};function _t(e){if(J.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function wt(e){if(J.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function xt(e,t){if(typeof e.ref=="string"&&B.current&&t&&B.current.stateNode!==t){var r=M(B.current.type);Ne[r]||(j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',M(B.current.type),e.ref),Ne[r]=!0)}}function Tt(e,t){{var r=function(){$e||($e=!0,j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}}function Pt(e,t){{var r=function(){qe||(qe=!0,j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}}var kt=function(e,t,r,c,E,R,b){var m={$$typeof:l,type:e,key:t,ref:r,props:b,_owner:R};return m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:E}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};function Ot(e,t,r,c,E){{var R,b={},m=null,F=null;r!==void 0&&(Re(r),m=""+r),wt(t)&&(Re(t.key),m=""+t.key),_t(t)&&(F=t.ref,xt(t,E));for(R in t)J.call(t,R)&&!St.hasOwnProperty(R)&&(b[R]=t[R]);if(e&&e.defaultProps){var w=e.defaultProps;for(R in w)b[R]===void 0&&(b[R]=w[R])}if(m||F){var k=typeof e=="function"?e.displayName||e.name||"Unknown":e;m&&Tt(b,k),F&&Pt(b,k)}return kt(e,m,F,E,c,B.current,b)}}var Le=D.ReactCurrentOwner,et=D.ReactDebugCurrentFrame;function ce(e){if(e){var t=e._owner,r=ae(e.type,e._source,t?t.type:null);et.setExtraStackFrame(r)}else et.setExtraStackFrame(null)}var Me;Me=!1;function Ve(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function tt(){{if(Le.current){var e=M(Le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function jt(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),r=e.lineNumber;return`

Check your code at `+t+":"+r+"."}return""}}var nt={};function At(e){{var t=tt();if(!t){var r=typeof e=="string"?e:e.displayName||e.name;r&&(t=`

Check the top-level render call using <`+r+">.")}return t}}function rt(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var r=At(t);if(nt[r])return;nt[r]=!0;var c="";e&&e._owner&&e._owner!==Le.current&&(c=" It was passed a child from "+M(e._owner.type)+"."),ce(e),j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,c),ce(null)}}function at(e,t){{if(typeof e!="object")return;if(le(e))for(var r=0;r<e.length;r++){var c=e[r];Ve(c)&&rt(c,t)}else if(Ve(e))e._store&&(e._store.validated=!0);else if(e){var E=W(e);if(typeof E=="function"&&E!==e.entries)for(var R=E.call(e),b;!(b=R.next()).done;)Ve(b.value)&&rt(b.value,t)}}}function zt(e){{var t=e.type;if(t==null||typeof t=="string")return;var r;if(typeof t=="function")r=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===C||t.$$typeof===d))r=t.propTypes;else return;if(r){var c=M(t);Ie(r,e.props,"prop",c,e)}else if(t.PropTypes!==void 0&&!Me){Me=!0;var E=M(t);j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Dt(e){{for(var t=Object.keys(e.props),r=0;r<t.length;r++){var c=t[r];if(c!=="children"&&c!=="key"){ce(e),j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),ce(null);break}}e.ref!==null&&(ce(e),j("Invalid attribute `ref` supplied to `React.Fragment`."),ce(null))}}function ot(e,t,r,c,E,R){{var b=oe(e);if(!b){var m="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var F=jt(E);F?m+=F:m+=tt();var w;e===null?w="null":le(e)?w="array":e!==void 0&&e.$$typeof===l?(w="<"+(M(e.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):w=typeof e,j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",w,m)}var k=Ot(e,t,r,E,R);if(k==null)return k;if(b){var V=t.children;if(V!==void 0)if(c)if(le(V)){for(var ue=0;ue<V.length;ue++)at(V[ue],e);Object.freeze&&Object.freeze(V)}else j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else at(V,e)}return e===h?Dt(k):zt(k),k}}function Ft(e,t,r){return ot(e,t,r,!0)}function It(e,t,r){return ot(e,t,r,!1)}var Nt=It,Lt=Ft;de.Fragment=h,de.jsx=Nt,de.jsxs=Lt}()),de}process.env.NODE_ENV==="production"?ze.exports=st():ze.exports=lt();var ct=ze.exports;const pe=ct.jsx;function ge(){return ge=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var f=arguments[l];for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}return s},ge.apply(this,arguments)}function ut(s,l){typeof s=="function"?s(l):s!=null&&(s.current=l)}function ft(...s){return l=>s.forEach(f=>ut(f,l))}const Ce=o.forwardRef((s,l)=>{const{children:f,...h}=s,x=o.Children.toArray(f),T=x.find(pt);if(T){const A=T.props.children,O=x.map(C=>C===T?o.Children.count(A)>1?o.Children.only(null):o.isValidElement(A)?A.props.children:null:C);return o.createElement(De,ge({},h,{ref:l}),o.isValidElement(A)?o.cloneElement(A,void 0,O):null)}return o.createElement(De,ge({},h,{ref:l}),f)});Ce.displayName="Slot";const De=o.forwardRef((s,l)=>{const{children:f,...h}=s;return o.isValidElement(f)?o.cloneElement(f,{...vt(h,f.props),ref:l?ft(l,f.ref):f.ref}):o.Children.count(f)>1?o.Children.only(null):null});De.displayName="SlotClone";const dt=({children:s})=>o.createElement(o.Fragment,null,s);function pt(s){return o.isValidElement(s)&&s.type===dt}function vt(s,l){const f={...l};for(const h in l){const x=s[h],T=l[h];/^on[A-Z]/.test(h)?x&&T?f[h]=(...O)=>{T(...O),x(...O)}:x&&(f[h]=x):h==="style"?f[h]={...x,...T}:h==="className"&&(f[h]=[x,T].filter(Boolean).join(" "))}return{...s,...f}}const Ue=o.createContext(void 0),mt=()=>{const s=o.useContext(Ue);if(!s)throw new Error("useResplitContext must be used within a ResplitRoot");return s},Be=o.createContext(void 0),Ge=()=>{const s=o.useContext(Be);if(!s)throw new Error("useRootContext must be used within an RootContext.Provider");return s},bt={horizontal:"gridTemplateColumns",vertical:"gridTemplateRows"},He={horizontal:"col-resize",vertical:"row-resize"},ht="10px",Et="0fr",yt="0fr",Q=s=>Number(s.replace("fr","")),Je=s=>Number(s.replace("px","")),Rt=(s,l)=>`${s/l}fr`,Ke=s=>s.includes("px"),ve=(s,l)=>Ke(s)?Rt(Je(s),l):s,Fe=typeof window>"u"?o.useEffect:o.useLayoutEffect;function gt(s){return l=>{s.forEach(f=>{typeof f=="function"?f(l):f!=null&&(f.current=l)})}}const Ze=o.forwardRef(function({direction:l="horizontal",children:f,style:h,asChild:x=!1,...T},A){const O=o.useId(),C=x?Ce:"div",P=o.useRef(null),g=o.useRef(null),[d,I]=o.useState({}),y=o.useCallback(a=>{var n;return(n=g.current)==null?void 0:n.querySelector(`:scope > [data-resplit-order="${a}"]`)},[]),G=o.useCallback(a=>{var n;return(n=g.current)==null?void 0:n.style.getPropertyValue(`--resplit-${a}`)},[]),K=o.useCallback(a=>{const n=G(a);return n?Ke(n)?Je(n):Q(n):0},[G]),W=o.useCallback((a,n)=>{var p;if((p=g.current)==null||p.style.setProperty(`--resplit-${a}`,n),d[a].type==="pane"){const v=y(a+1);v==null||v.setAttribute("aria-valuenow",String(Q(n).toFixed(2)))}},[d,y]),D=o.useCallback(a=>{var n;return((n=y(a))==null?void 0:n.getAttribute("data-resplit-is-min"))==="true"},[y]),j=o.useCallback(a=>{var n;return((n=y(a))==null?void 0:n.getAttribute("data-resplit-default-collapsed"))==="true"},[y]),te=o.useCallback((a,n)=>{var i;return(i=y(a))==null?void 0:i.setAttribute("data-resplit-is-min",String(n))},[y]),$=o.useCallback(a=>{var n;return((n=y(a))==null?void 0:n.getAttribute("data-resplit-is-collapsed"))==="true"},[y]),Se=o.useCallback(a=>{var n;return((n=y(a))==null?void 0:n.getAttribute("data-resplit-is-collapsed"))==="false"},[y]),ne=o.useCallback((a,n)=>{var i;return(i=y(a))==null?void 0:i.setAttribute("data-resplit-is-collapsed",String(n))},[y]),re=o.useCallback(()=>{var a,n;return(l==="horizontal"?(a=g.current)==null?void 0:a.offsetWidth:(n=g.current)==null?void 0:n.offsetHeight)||0},[l]),me=o.useCallback((a,n)=>{let i=a,p=d[i];for(;i>=0&&i<Object.values(d).length;){const v=d[i];if(v.type==="splitter"||D(i)&&!v.collapsible||D(i)&&v.collapsible&&$(i))i+=n,p=null;else{p=v;break}}return{index:i,pane:p}},[d,$,D]),L=o.useCallback((a,n)=>{var Oe,le,je,Ae,ye,Re;const i=n>0,p=n<0,{index:v,pane:u}=p?me(a-1,-1):{index:a-1,pane:d[a-1]},{index:S,pane:z}=i?me(a+1,1):{index:a+1,pane:d[a+1]};if(!u||!z)return;const U=re();let _=K(v)+n;const Z=Q(ve(u.minSize,U)),Te=_<=Z,ee=!!u.collapsible&&_<=Z/1.5;let N=K(S)-n;const ie=Q(ve(z.minSize,U)),ae=N<=ie,J=!!z.collapsible&&N<=ie/1.5;if(ee||J){if(ee){const B=Q(ve(u.collapsedSize,U));N=N+_-B,_=B}if(J){const B=Q(ve(z.collapsedSize,U));_=_+N-B,N=B}}else Te&&(N=N+(_-Z),_=Z),ae&&(_=_+(N-ie),N=ie);W(v,`${_}fr`),te(v,Te);const Pe=Se(v)&&ee,ke=$(v)&&!ee;ne(v,ee),(Oe=u==null?void 0:u.onResize)==null||Oe.call(u,`${_}fr`),Pe?(le=u==null?void 0:u.onCollapse)==null||le.call(u,`${_}fr`):ke&&((je=u==null?void 0:u.onExpand)==null||je.call(u,`${_}fr`)),W(S,`${N}fr`),te(S,ae);const se=Se(S)&&J,Ie=$(S)&&!J;ne(S,J),(Ae=z==null?void 0:z.onResize)==null||Ae.call(z,`${N}fr`),se?(ye=u==null?void 0:u.onCollapse)==null||ye.call(u,`${_}fr`):Ie&&((Re=u==null?void 0:u.onExpand)==null||Re.call(u,`${_}fr`))},[d,me,K,re,W,te,ne]),oe=o.useCallback(a=>{if(P.current===null)return;const n=y(P.current);if(!n)return;const i=Object.entries(d).reduce((z,[U,_])=>z+(_.type==="splitter"?K(Number(U)):0),0),p=re()-i,v=n.getBoundingClientRect(),S=(l==="horizontal"?a.clientX-v.left:a.clientY-v.top)/p;S&&L(P.current,S)},[d,l,y,K,re,L]),be=o.useCallback(()=>{var p,v,u,S;const a=P.current;if(a===null)return;(p=g.current)==null||p.setAttribute("data-resplit-resizing","false"),a!==null&&((v=y(a))==null||v.setAttribute("data-resplit-active","false"));const n=d[a-1];n.type==="pane"&&((u=n.onResizeEnd)==null||u.call(n,G(a-1)));const i=d[a+1];i.type==="pane"&&((S=i.onResizeEnd)==null||S.call(i,G(a+1))),P.current=null,document.documentElement.style.cursor="",document.documentElement.style.pointerEvents="",document.documentElement.style.userSelect="",window.removeEventListener("mouseup",be),window.removeEventListener("mousemove",oe)},[d,y,G,oe]),he=o.useCallback(a=>()=>{var p,v,u,S;P.current=a,(p=g.current)==null||p.setAttribute("data-resplit-resizing","true"),P.current!==null&&((v=y(P.current))==null||v.setAttribute("data-resplit-active","true"));const n=d[a-1];n.type==="pane"&&((u=n.onResizeStart)==null||u.call(n));const i=d[a+1];i.type==="pane"&&((S=i.onResizeStart)==null||S.call(i)),document.documentElement.style.cursor=He[l],document.documentElement.style.pointerEvents="none",document.documentElement.style.userSelect="none",window.addEventListener("mouseup",be),window.addEventListener("mousemove",oe)},[l,d,y,be,oe]),M=o.useCallback(a=>n=>{const i=l==="horizontal",p=l==="vertical";if(n.key==="ArrowLeft"&&i||n.key==="ArrowUp"&&p)L(a,-.01);else if(n.key==="ArrowRight"&&i||n.key==="ArrowDown"&&p)L(a,.01);else if(n.key==="Home")L(a,-1);else if(n.key==="End")L(a,1);else if(n.key==="Enter")if(D(a-1)){const v=d[a-1].initialSize||"1fr";L(a,Q(v))}else L(a,-1)},[l,d,L,D]),H=o.useCallback((a,n)=>{I(i=>({...i,[a]:{type:"pane",...n}}))},[]),q=o.useCallback((a,n)=>{I(i=>({...i,[a]:{type:"splitter",...n}}))},[]),Ee=o.useCallback(a=>{try{a.forEach((n,i)=>{var u,S,z;const p=i*2;W(p,n),te(p,((u=d[p])==null?void 0:u.minSize)===n),ne(p,((S=d[p])==null?void 0:S.collapsedSize)===n);const v=d[p];(v==null?void 0:v.type)==="pane"&&((z=v==null?void 0:v.onResize)==null||z.call(v,n))})}catch{throw new Error("Error while setting pane sizes!")}},[d,W,te,ne]),_e=Object.keys(d).length;Fe(()=>{const a=Object.values(d).filter(n=>n.type==="pane").length;Object.keys(d).forEach(n=>{const i=Number(n),p=d[i];if(p.type==="pane"){let v;if(j(i)&&(p!=null&&p.collapsedSize))v=ve(p==null?void 0:p.collapsedSize,re());else{let u=`${1/a}fr`;p.initialSize!==void 0&&Q(p.initialSize)<1&&(u=p.initialSize),v=D(i)?"0fr":u}W(i,v)}else W(i,p.size)})},[_e]);const we=o.useMemo(()=>({id:O,direction:l,registerPane:H,registerSplitter:q,handleSplitterMouseDown:he,handleSplitterKeyDown:M}),[O,l,H,q,he,M]),xe=o.useMemo(()=>({isPaneMinSize:D,isPaneCollapsed:$,setPaneSizes:Ee}),[D,$,Ee]);return pe(Be.Provider,{value:we,children:pe(Ue.Provider,{value:xe,children:pe(C,{ref:gt([g,A]),"data-resplit-direction":l,"data-resplit-resizing":!1,style:{display:"grid",overflow:"hidden",[bt[l]]:Object.keys(d).reduce((a,n)=>{const i=`minmax(0, var(--resplit-${n}))`;return a?`${a} ${i}`:`${i}`},""),...h},...T,children:f})})})}),Xe=o.forwardRef(function({children:l,order:f,minSize:h=Et,collapsible:x=!1,defaultCollapsed:T=!1,collapsedSize:A=yt,initialSize:O,asChild:C=!1,onResize:P,onResizeStart:g,onResizeEnd:d,onCollapse:I,onExpand:y,...G},K){const W=C?Ce:"div",{id:D,registerPane:j}=Ge();return Fe(()=>{j(String(f),{minSize:h,initialSize:O,collapsedSize:A,collapsible:x,onResize:P,onResizeStart:g,onResizeEnd:d,onCollapse:I,onExpand:y})},[]),pe(W,{id:`resplit-${D}-${f}`,"data-resplit-order":f,"data-resplit-is-min":!1,"data-resplit-is-collapsed":T,"data-resplit-default-collapsed":T,ref:K,...G,children:l})}),Qe=o.forwardRef(function({children:l,order:f,size:h=ht,asChild:x=!1,...T},A){const O=x?Ce:"div",{id:C,direction:P,registerSplitter:g,handleSplitterMouseDown:d,handleSplitterKeyDown:I}=Ge();return Fe(()=>{g(String(f),{size:h})},[]),pe(O,{role:"separator",tabIndex:0,"aria-orientation":P,"aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":1,"aria-controls":`resplit-${C}-${f-1}`,"data-resplit-order":f,"data-resplit-active":!1,style:{cursor:He[P]},onMouseDown:d(f),onKeyDown:I(f),ref:A,...T,children:l})}),Ct={Root:Ze,Pane:Xe,Splitter:Qe};Y.Resplit=Ct,Y.ResplitPane=Xe,Y.ResplitRoot=Ze,Y.ResplitSplitter=Qe,Y.useResplitContext=mt,Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});
