function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}((e,t)=>{"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).LazyLoad=t()})(this,function(){function e(t,e){var n,o="LazyLoad::Initialized",t=new t(e);try{n=new CustomEvent(o,{detail:{instance:t}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:t})}window.dispatchEvent(n)}var a="undefined"!=typeof window,r=a&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),R=a&&"IntersectionObserver"in window,n=a&&"classList"in document.createElement("p"),H={elements_selector:"img",container:r||a?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1};function o(e){for(var t,n=[],o=0;t=e.children[o];o+=1)"SOURCE"===t.tagName&&n.push(t);return n}function i(e,t){_(e,"sizes",m(e,t.data_sizes)),_(e,"srcset",m(e,t.data_srcset)),_(e,"src",m(e,t.data_src))}function s(e,t,n){var o=t._settings;!n&&p(e)||(-1<G.indexOf(e.tagName)&&(Y(e,t),w(e,o.class_loading)),Q(e,t),U(e),y(o.callback_reveal,e,t),y(o.callback_set,e,t))}function c(e,t){return e=e||t.container.querySelectorAll(t.elements_selector),Array.prototype.slice.call(e).filter(function(e){return!p(e)})}function t(e,t){var n,o;this._settings=_extends({},H,e),this.loadingCount=0,n=this,R&&(n._observer=new IntersectionObserver(function(e){e.forEach(function(e){return(V(e)?K:$)(e.target,e,n)})},W(n._settings))),this.update(t),o=this,a&&window.addEventListener("online",function(e){Z(o)})}var l="data-",u="was-processed",d="ll-timeout",f="true",m=function(e,t){return e.getAttribute(l+t)},h=function(e,t,n){t=l+t;null===n?e.removeAttribute(t):e.setAttribute(t,n)},z=function(e){return h(e,u,null)},U=function(e){return h(e,u,f)},p=function(e){return m(e,u)===f},g=function(e,t){return h(e,d,t)},v=function(e){return m(e,d)},P=function(e,t){return e.filter(function(e){return e!==t})},y=function(e,t,n,o){e&&(void 0!==o?e(t,n,o):void 0!==n?e(t,n):e(t))},b=function(e,t){e.loadingCount+=t,0===e._elements.length&&0===e.loadingCount&&y(e._settings.callback_finish,e)},_=function(e,t,n){n&&e.setAttribute(t,n)},j=function(e,t){var n=m(e,t.data_src),t=m(e,t.data_bg);n&&(e.style.backgroundImage='url("'.concat(n,'")')),t&&(e.style.backgroundImage=t)},D={IMG:function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&o(n).forEach(function(e){i(e,t)}),i(e,t)},IFRAME:function(e,t){_(e,"src",m(e,t.data_src))},VIDEO:function(e,t){o(e).forEach(function(e){_(e,"src",m(e,t.data_src))}),_(e,"poster",m(e,t.data_poster)),_(e,"src",m(e,t.data_src)),e.load()}},Q=function(e,t){var n=t._settings,o=e.tagName,o=D[o];o?(o(e,n),b(t,1),t._elements=P(t._elements,e)):j(e,n)},w=function(e,t){n?e.classList.add(t):e.className+=(e.className?" ":"")+t},E=function(e,t){n?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},S="load",A="loadeddata",L="error",I=function(e,t,n){e.addEventListener(t,n)},C=function(e,t,n){e.removeEventListener(t,n)},J=function(e,t,n){I(e,S,t),I(e,A,t),I(e,L,n)},O=function(e,t,n){C(e,S,t),C(e,A,t),C(e,L,n)},x=function(e,t,n){var o=n._settings,a=t?o.class_loaded:o.class_error,t=t?o.callback_loaded:o.callback_error,e=e.target;E(e,o.class_loading),w(e,a),y(t,e,n),b(n,-1)},Y=function(n,o){function a(e){x(e,!1,o),O(n,t,a)}var t=function e(t){x(t,!0,o),O(n,e,a)};J(n,t,a)},G=["IMG","IFRAME","VIDEO"],K=function(e,t,n){var o=n._settings;y(o.callback_enter,e,t,n),(o.load_delay?B:M)(e,n)},M=function(e,t){var n=t._observer;s(e,t),n&&t._settings.auto_unobserve&&n.unobserve(e)},$=function(e,t,n){var o=n._settings;y(o.callback_exit,e,t,n),o.load_delay&&q(e)},q=function(e){var t=v(e);t&&(clearTimeout(t),g(e,null))},B=function(e,t){var n=t._settings.load_delay;v(e)||(n=setTimeout(function(){M(e,t),q(e)},n),g(e,n))},V=function(e){return e.isIntersecting||0<e.intersectionRatio},W=function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}},X=["IMG","IFRAME"],Z=function(e){var t=e._settings;t.container.querySelectorAll("."+t.class_error).forEach(function(e){E(e,t.class_error),z(e)}),e.update()};if(t.prototype={update:function(e){var t,n=this,o=this._settings;this._elements=c(e,o),r||!this._observer?this.loadAll():(o.use_native&&"loading"in HTMLImageElement.prototype&&((t=this)._elements.forEach(function(e){-1!==X.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),s(e,t))}),this._elements=c(e,o)),this._elements.forEach(function(e){n._observer.observe(e)}))},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(e,t){s(e,this,t)},loadAll:function(){var t=this;this._elements.forEach(function(e){M(e,t)})}},a){var F=t,N=window.lazyLoadOptions;if(N)if(N.length)for(var k,T=0;k=N[T];T+=1)e(F,k);else e(F,N)}return t}),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(()=>{function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)})(),(()=>{for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout(function(){e(n+o)},o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),((e,t)=>{"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(_){function w(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n}function i(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r}function E(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function S(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),_.scrollTo(0,t))}function A(e,t,n,o){t.emitEvents&&"function"==typeof _.CustomEvent&&(t=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}}),document.dispatchEvent(t))}var L={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0};return function(a,e){function t(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(r=e.target.closest(a))&&"a"===r.tagName.toLowerCase()&&!e.target.closest(g.ignore)&&r.hostname===_.location.hostname&&r.pathname===_.location.pathname&&/#/.test(r.href)){var t;try{n=i(decodeURIComponent(r.hash))}catch(e){n=i(r.hash)}if("#"===n){if(!g.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),n=g,history.replaceState&&n.updateURL&&!history.state&&(o=(o=_.location.hash)||"",history.replaceState({smoothScroll:JSON.stringify(n),anchor:o||_.pageYOffset},document.title,o||_.location.href)),b.animateScroll(t,r))}var n,o}function n(e){var t;null===history.state||!history.state.smoothScroll||history.state.smoothScroll!==JSON.stringify(g)||"string"==typeof(t=history.state.anchor)&&t&&!(t=document.querySelector(i(history.state.anchor)))||b.animateScroll(t,null,{updateURL:!1})}var g,r,v,y,b={cancelScroll:function(e){cancelAnimationFrame(y),y=null,e||A("scrollCancel",g)}};b.animateScroll=function(o,a,e){b.cancelScroll();var r,i,s,c,l,u,d,f,m,t,h=w(g||L,e||{}),p="[object Number]"===Object.prototype.toString.call(o),e=p||!o.tagName?null:o;(p||e)&&(r=_.pageYOffset,h.header&&!v&&(v=document.querySelector(h.header)),t=(t=v)?parseInt(_.getComputedStyle(t).height,10)+t.offsetTop:0,c=p?o:((e,t,n,o)=>{var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),a=o?Math.min(a,E()-_.innerHeight):a})(e,t,parseInt("function"==typeof h.offset?h.offset(o,a):h.offset,10),h.clip),l=c-r,u=E(),d=0,t=(e=h).speedAsDuration?e.speed:Math.abs(l/1e3*e.speed),f=e.durationMax&&t>e.durationMax?e.durationMax:e.durationMin&&t<e.durationMin?e.durationMin:parseInt(t,10),m=function(e){var t,n;d+=e-(i=i||e),s=r+l*(n=1<(s=0===f?0:d/f)?1:s,"easeInQuad"===h.easing&&(t=n*n),"easeOutQuad"===h.easing&&(t=n*(2-n)),"easeInOutQuad"===h.easing&&(t=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===h.easing&&(t=n*n*n),"easeOutCubic"===h.easing&&(t=--n*n*n+1),"easeInOutCubic"===h.easing&&(t=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===h.easing&&(t=n*n*n*n),"easeOutQuart"===h.easing&&(t=1- --n*n*n*n),"easeInOutQuart"===h.easing&&(t=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===h.easing&&(t=n*n*n*n*n),"easeOutQuint"===h.easing&&(t=1+--n*n*n*n*n),"easeInOutQuint"===h.easing&&(t=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),(t=h.customEasing?h.customEasing(n):t)||n),_.scrollTo(0,Math.floor(s)),t=c,n=_.pageYOffset,(!(s==t||n==t||(r<t&&_.innerHeight+n)>=u)||(b.cancelScroll(!0),S(o,t,p),A("scrollStop",h,o,a),y=i=null))&&(y=_.requestAnimationFrame(m),i=e)},0===_.pageYOffset&&_.scrollTo(0,0),e=o,p||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id),"matchMedia"in _&&_.matchMedia("(prefers-reduced-motion)").matches?S(o,Math.floor(c),!1):(A("scrollStart",h,o,a),b.cancelScroll(!0),_.requestAnimationFrame(m)))};if(b.destroy=function(){g&&(document.removeEventListener("click",t,!1),_.removeEventListener("popstate",n,!1),b.cancelScroll(),y=v=r=g=null)},"querySelector"in document&&"addEventListener"in _&&"requestAnimationFrame"in _&&"closest"in _.Element.prototype)return b.destroy(),g=w(L,e||{}),v=g.header?document.querySelector(g.header):null,document.addEventListener("click",t,!1),g.updateURL&&g.popstate&&_.addEventListener("popstate",n,!1),b;throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs."}}),document.addEventListener("DOMContentLoaded",function(){{var e=document.querySelectorAll(".js-fetchHTML");let c=0,t=e=>{e.preventDefault();let t=e.currentTarget,{fetchUrl:n,fetchContainer:o,fetchLimit:a,textFetching:r,textError:i}=t.dataset;a=parseInt(a,10);e=new URL(window.location.href),e.searchParams.has("page")&&(c=parseInt(e.searchParams.get("page"),10)),c++,e.searchParams.set("page",c),window.history.pushState({},"",e),e=window.location.search;n+=e,t.querySelector(".fw-medium").innerText=r,t.disabled=!0,t.style.pointerEvents="none";let s=document.querySelector(o);fetch(n).then(e=>{if(200<=e.status&&e.status<=299)return e.text();throw Error(e.status)}).then(e=>{e=document.createRange().createContextualFragment(e);s&&s.appendChild(e),c>=a?t.classList.add("d-none"):(t.disabled=!1,t.style.pointerEvents="all",t.querySelector(".fw-medium").innerText="Načíst další")}).catch(e=>{console.warn("Fetch failed:",e.message),s&&s.insertAdjacentHTML("afterend",`<p class="u-ta-center u-fs-big u-fw-bold u-c-red u-my-24">${i}</p>`),t.disabled=!1,t.style.pointerEvents="all",t.querySelector(".fw-medium").innerText="Načíst další"})};e.length&&e.forEach(e=>{e.addEventListener("click",t)})}var t,n=document.querySelectorAll(".content table");for(t=0;t<n.length;++t){n[t].classList.add("table");var o=document.createElement("div");o.classList.add("table-responsive"),n[t].parentNode.insertBefore(o,n[t]),o.appendChild(n[t])}var a,r=document.querySelectorAll(".content iframe");for(a=0;a<r.length;++a){r[a].removeAttribute("height"),r[a].removeAttribute("width");var i=document.createElement("div");i.classList.add("ratio"),i.classList.add("ratio-16x9"),r[a].parentNode.insertBefore(i,r[a]),i.appendChild(r[a])}new LazyLoad({elements_selector:"[data-bg]"}),new SmoothScroll(".js-scroll",{speed:300})});
//# sourceMappingURL=scripts.js.map
