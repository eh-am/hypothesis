!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(n){return e[n]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/hypothesis",n(n.s="mdyV")}({MV5A:function(){},QRet:function(e,n,t){"use strict";function o(e,n){var t=function(e,n){s.options.__h&&s.options.__h(i,e,f||n),f=0;var t=i.__H||(i.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}(l++,3);!s.options.__s&&function(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e,t.__H=n,i.__H.__h.push(t))}function r(){a.some((function(e){if(e.__P)try{e.__H.__h.forEach(_),e.__H.__h.forEach(u),e.__H.__h=[]}catch(n){return e.__H.__h=[],s.options.__e(n,e.__v),!0}})),a=[]}function _(e){"function"==typeof e.u&&e.u()}function u(e){e.u=e.__()}t.d(n,"a",(function(){return o}));var l,i,c,s=t("hosL"),f=0,a=[],p=s.options.__r,d=s.options.diffed,h=s.options.__c,v=s.options.unmount;s.options.__r=function(e){p&&p(e),l=0;var n=(i=e.__c).__H;n&&(n.__h.forEach(_),n.__h.forEach(u),n.__h=[])},s.options.diffed=function(e){d&&d(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==a.push(n)&&c===s.options.requestAnimationFrame||((c=s.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(r))},s.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(_),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],s.options.__e(t,e.__v)}})),h&&h(e,n)},s.options.unmount=function(e){v&&v(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(_)}catch(e){s.options.__e(e,n.__v)}}},QfWi:function(e,n,t){"use strict";t.r(n),function(e,o){t("MV5A");var r=t("QRet");const _="https://via.hypothes.is/";n.default=function(){return Object(r.a)(()=>{let e=new URL(window.location.href),n=e.searchParams.get("text"),t=e.searchParams.get("url");t?window.open(_+t):n&&window.open(_+n)},[]),e(o,null)}}.call(this,t("hosL").h,t("hosL").Fragment)},hosL:function(e,n,t){"use strict";function o(e,n){for(var t in n)e[t]=n[t];return e}function r(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var o,r=arguments,_={};for(o in n)"key"!==o&&"ref"!==o&&(_[o]=n[o]);if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(_.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===_[o]&&(_[o]=e.defaultProps[o]);return u(e,_,n&&n.key,n&&n.ref,null)}function u(e,n,t,o,r){var _={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(_.__v=_),T.vnode&&T.vnode(_),_}function l(){return{}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!D++||M!==T.debounceRendering)&&((M=T.debounceRendering)||N)(p)}function p(){for(var e;D=L.length;)e=L.sort((function(e,n){return e.__v.__b-n.__v.__b})),L=[],e.some((function(e){var n,t,r,_,u,l,i;e.__d&&(l=(u=(n=e).__v).__e,(i=n.__P)&&(t=[],(r=o({},u)).__v=r,_=g(i,u,r,n.__n,void 0!==i.ownerSVGElement,null,t,null==l?s(u):l),k(t,u),_!=l&&f(u)))}))}function d(e,n,t,o,_,l,c,f,a,p){var d,h,v,y,m,k,b,C,P,S=o&&o.__k||O,A=S.length;for(a==F&&(a=null!=c?c[0]:A?s(o,0):null),t.__k=[],d=0;d<n.length;d++)if(null!=(y=t.__k[d]=null==(y=n[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(i,{children:y},null,null,null):null!=y.__e||null!=y.__c?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(v=S[d])||v&&y.key==v.key&&y.type===v.type)S[d]=void 0;else for(h=0;h<A;h++){if((v=S[h])&&y.key==v.key&&y.type===v.type){S[h]=void 0;break}v=null}if(m=g(e,y,v=v||F,_,l,c,f,a,p),(h=y.ref)&&v.ref!=h&&(C||(C=[]),v.ref&&C.push(v.ref,null,y),C.push(h,y.__c||m,y)),null!=m){if(null==b&&(b=m),P=void 0,void 0!==y.__d)P=y.__d,y.__d=void 0;else if(c==v||m!=a||null==m.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(m),P=null;else{for(k=a,h=0;(k=k.nextSibling)&&h<A;h+=2)if(k==m)break e;e.insertBefore(m,a),P=a}"option"==t.type&&(e.value="")}a=void 0!==P?P:m.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&v.__e==a&&a.parentNode!=e&&(a=s(v))}if(t.__e=b,null!=c&&"function"!=typeof t.type)for(d=c.length;d--;)null!=c[d]&&r(c[d]);for(d=A;d--;)null!=S[d]&&x(S[d],S[d]);if(C)for(d=0;d<C.length;d++)w(C[d],C[++d],C[++d])}function h(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?O.concat.apply([],e.map(h)):[e]}function v(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===R.test(n)?t+"px":null==t?"":t}function y(e,n,t,o,r){var _,u,l,i,c;if(r?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(_=e.style,"string"==typeof t)_.cssText=t;else{if("string"==typeof o&&(_.cssText="",o=null),o)for(i in o)t&&i in t||v(_,i,"");if(t)for(c in t)o&&t[c]===o[c]||v(_,c,t[c])}else"o"===n[0]&&"n"===n[1]?(u=n!==(n=n.replace(/Capture$/,"")),l=n.toLowerCase(),n=(l in e?l:n).slice(2),t?(o||e.addEventListener(n,m,u),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,m,u)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function m(e){this.l[e.type](T.event?T.event(e):e)}function g(e,n,t,r,_,u,l,s,f){var a,p,h,v,y,m,g,k,w,x,P,S=n.type;if(void 0!==n.constructor)return null;(a=T.__b)&&a(n);try{e:if("function"==typeof S){if(k=n.props,w=(a=S.contextType)&&r[a.__c],x=a?w?w.props.value:a.__:r,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in S&&S.prototype.render?n.__c=p=new S(k,x):(n.__c=p=new c(k,x),p.constructor=S,p.render=C),w&&w.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,S.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||n.__v===t.__v){for(p.props=k,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,p.__h.length&&l.push(p),a=0;a<n.__k.length;a++)n.__k[a]&&(n.__k[a].__=n);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=x,p.props=k,p.state=p.__s,(a=T.__r)&&a(n),p.__d=!1,p.__v=n,p.__P=e,a=p.render(p.props,p.state,p.context),null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),P=null!=a&&a.type==i&&null==a.key?a.props.children:a,d(e,Array.isArray(P)?P:[P],n,t,r,_,u,l,s,f),p.base=n.__e,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=b(t.__e,n,t,r,_,u,l,f);(a=T.diffed)&&a(n)}catch(e){n.__v=null,T.__e(e,n,t)}return n.__e}function k(e,n){T.__c&&T.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){T.__e(e,n.__v)}}))}function b(e,n,t,o,r,_,u,l){var i,c,s,f,a,p=t.props,h=n.props;if(r="svg"===n.type||r,null!=_)for(i=0;i<_.length;i++)if(null!=(c=_[i])&&((null===n.type?3===c.nodeType:c.localName===n.type)||e==c)){e=c,_[i]=null;break}if(null==e){if(null===n.type)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,h.is&&{is:h.is}),_=null,l=!1}if(null===n.type)p!==h&&e.data!=h&&(e.data=h);else{if(null!=_&&(_=O.slice.call(e.childNodes)),s=(p=t.props||F).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=_)for(p={},a=0;a<e.attributes.length;a++)p[e.attributes[a].name]=e.attributes[a].value;(f||s)&&(f&&s&&f.__html==s.__html||(e.innerHTML=f&&f.__html||""))}(function(e,n,t,o,r){var _;for(_ in t)"children"===_||"key"===_||_ in n||y(e,_,null,t[_],o);for(_ in n)r&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||y(e,_,n[_],t[_],o)})(e,h,p,r,l),f?n.__k=[]:(i=n.props.children,d(e,Array.isArray(i)?i:[i],n,t,o,"foreignObject"!==n.type&&r,_,u,F,l)),l||("value"in h&&void 0!==(i=h.value)&&i!==e.value&&y(e,"value",i,p.value,!1),"checked"in h&&void 0!==(i=h.checked)&&i!==e.checked&&y(e,"checked",i,p.checked,!1))}return e}function w(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){T.__e(e,t)}}function x(e,n,t){var o,_,u;if(T.unmount&&T.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||w(o,null,n)),t||"function"==typeof e.type||(t=null!=(_=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){T.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&x(o[u],n,t);null!=_&&r(_)}function C(e,n,t){return this.constructor(e,t)}function P(e,n,t){var o,r,u;T.__&&T.__(e,n),r=(o=t===U)?null:t&&t.__k||n.__k,e=_(i,null,[e]),u=[],g(n,(o?n:t||n).__k=e,r||F,F,void 0!==n.ownerSVGElement,t&&!o?[t]:r?null:n.childNodes.length?O.slice.call(n.childNodes):null,u,t||F,o),k(u,e)}function S(e,n){P(e,n,U)}function A(e,n){var t,r;for(r in n=o(o({},e.props),n),arguments.length>2&&(n.children=O.slice.call(arguments,2)),t={},n)"key"!==r&&"ref"!==r&&(t[r]=n[r]);return u(e.type,t,n.key||e.key,n.ref||e.ref,null)}function E(e){var n={},t={__c:"__cC"+W++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return n[t.__c]=r,n},this.shouldComponentUpdate=function(e){r.props.value!==e.value&&o.some((function(n){n.context=e.value,a(n)}))},this.sub=function(e){o.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t.Provider.__=t,t}t.r(n),t.d(n,"render",(function(){return P})),t.d(n,"hydrate",(function(){return S})),t.d(n,"createElement",(function(){return _})),t.d(n,"h",(function(){return _})),t.d(n,"Fragment",(function(){return i})),t.d(n,"createRef",(function(){return l})),t.d(n,"isValidElement",(function(){return H})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return A})),t.d(n,"createContext",(function(){return E})),t.d(n,"toChildArray",(function(){return h})),t.d(n,"_unmount",(function(){return x})),t.d(n,"options",(function(){return T}));var T,H,L,D,N,M,U,W,F={},O=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T={__e:function(e,n){for(var t,o;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(o=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(o=!0,t.componentDidCatch(e)),o)return a(t.__E=t)}catch(n){e=n}throw e}},H=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&o(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=i,L=[],D=0,N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U=F,W=0},mdyV:function(e,n,t){"use strict";t.r(n);var o=t("hosL");const{h:r,render:_,hydrate:u}=o,l=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw-esm.js"),"function"==typeof l(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let n=l(t("QfWi")),o={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(o=JSON.parse(i.innerHTML).preRenderData||o);const c=o.url?"/"===(s=o.url)[s.length-1]?s:s+"/":"";var s;const f=u&&c===location.pathname;e=(f?u:_)(r(n,{CLI_DATA:{preRenderData:o}}),document.body,e)})()}}});
//# sourceMappingURL=bundle.18c01.esm.js.map