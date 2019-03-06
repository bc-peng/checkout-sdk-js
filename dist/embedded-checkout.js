module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=190)}({0:function(t,e){t.exports=require("tslib")},103:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(48);function o(t){if(!/^(https?:)?\/\//.test(t))throw new i.a("The provided URL must be absolute.");var e=document.createElement("a");return e.href=t,{hash:e.hash,hostname:e.hostname,href:e.href,origin:e.origin,pathname:e.pathname,port:e.port,protocol:e.protocol,search:e.search}}},13:function(t,e,n){"use strict";var i=n(0),o=n(74),r=function(t){function e(e){var n=this.constructor,i=t.call(this,e||"An unexpected error has occurred.")||this;return i.type="standard",Object(o.a)(i,n.prototype),"function"==typeof Error.captureStackTrace?Error.captureStackTrace(i,n):i.stack=new Error(i.message).stack,i}return i.__extends(e,t),e}(Error);e.a=r},190:function(t,e,n){"use strict";n.r(e);var i=n(87);n.d(e,"embedCheckout",function(){return i.a})},22:function(t,e,n){"use strict";var i;n.d(e,"a",function(){return i}),function(t){t.CheckoutComplete="CHECKOUT_COMPLETE",t.CheckoutError="CHECKOUT_ERROR",t.CheckoutLoaded="CHECKOUT_LOADED",t.FrameError="FRAME_ERROR",t.FrameLoaded="FRAME_LOADED",t.SignedOut="SIGNED_OUT"}(i||(i={}))},26:function(t,e,n){"use strict";var i=n(0),o=n(13),r={body:{},headers:{},status:0},s=function(t){function e(e,n){var i=void 0===n?{}:n,o=i.message,s=i.errors,a=this,c=e||r,u=c.body,d=c.headers,l=c.status;return(a=t.call(this,o||"An unexpected error has occurred.")||this).type="request",a.body=u,a.headers=d,a.status=l,a.errors=s||[],a}return i.__extends(e,t),e}(o.a);e.a=s},33:function(t,e){t.exports=require("@bigcommerce/request-sender")},48:function(t,e,n){"use strict";var i=n(0),o=function(t){function e(e){var n=t.call(this,e||"Invalid arguments have been provided.")||this;return n.type="invalid_argument",n}return i.__extends(e,t),e}(n(13).a);e.a=o},54:function(t,e,n){"use strict";function i(t,e){return t.type===e}n.d(e,"a",function(){return i})},61:function(t,e){t.exports=require("local-storage-fallback")},66:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(0);function o(t,e,n){return e&&n?r(t,e,n):function(t){var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e}(t);return Object.getOwnPropertyNames(t.prototype).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t.prototype,n);i&&"constructor"!==n&&Object.defineProperty(e.prototype,n,r(t.prototype,n,i))}),e}(t)}function r(t,e,n){if("function"!=typeof n.value)return n;var o=n.value;return{get:function(){var t=o.bind(this);return Object.defineProperty(this,e,i.__assign({},n,{value:t})),t},set:function(t){o=t}}}},67:function(t,e,n){"use strict";var i=n(103),o=function(){function t(t,e){this._targetWindow=e,this._targetOrigin="*"===t?"*":Object(i.a)(t).origin}return t.prototype.post=function(t){if(window!==this._targetWindow){if(!this._targetWindow)throw new Error("Unable to post message becauset target window is not set.");this._targetWindow.postMessage(t,this._targetOrigin)}},t.prototype.setTarget=function(t){this._targetWindow=t},t}();e.a=o},74:function(t,e,n){"use strict";function i(t,e){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}n.d(e,"a",function(){return i})},80:function(t,e,n){"use strict";var i;n.d(e,"a",function(){return i}),function(t){t.StyleConfigured="STYLE_CONFIGURED"}(i||(i={}))},81:function(t,e,n){"use strict";var i=n(0),o=n(103),r=n(66),s=n(54),a=function(){function t(t){this._sourceOrigin=Object(o.a)(t).origin,this._isListening=!1,this._listeners={}}return t.prototype.listen=function(){this._isListening||(this._isListening=!0,window.addEventListener("message",this._handleMessage))},t.prototype.stopListen=function(){this._isListening&&(this._isListening=!1,window.removeEventListener("message",this._handleMessage))},t.prototype.addListener=function(t,e){var n=this._listeners[t];n||(this._listeners[t]=n=[]),n.push(e)},t.prototype.removeListener=function(t,e){var n=this._listeners[t];if(n){var i=n.indexOf(e);i>=0&&n.splice(i,1)}},t.prototype.trigger=function(t){var e=this._listeners[t.type];e&&e.forEach(function(e){return e(t)})},t.prototype._handleMessage=function(t){t.origin===this._sourceOrigin&&Object(s.a)(t.data,t.data.type)&&this.trigger(t.data)},i.__decorate([r.a],t.prototype,"_handleMessage",null),t}();e.a=a},87:function(t,e,n){"use strict";var i,o=n(33),r=n(61),s=n.n(r),a=function(){function t(t){this._namespace=t}return t.prototype.getItem=function(t){var e=s.a.getItem(this.withNamespace(t));if(null===e)return null;try{return JSON.parse(e)}catch(e){return this.removeItem(this.withNamespace(t)),null}},t.prototype.getItemOnce=function(t){var e=this.getItem(t);return this.removeItem(t),e},t.prototype.setItem=function(t,e){return s.a.setItem(this.withNamespace(t),JSON.stringify(e))},t.prototype.removeItem=function(t){return s.a.removeItem(this.withNamespace(t))},t.prototype.withNamespace=function(t){return this._namespace+"."+t},t}(),c=n(103),u=n(22),d=n(0),l=function(t){function e(e){var n=t.call(this,e,{message:e.body.title})||this;return n.type="invalid_login_token",n}return d.__extends(e,t),e}(n(26).a),h=n(13);!function(t){t.MissingContainer="missing_container",t.MissingContent="missing_content",t.UnknownError="unknown_error"}(i||(i={}));var p=function(t){function e(e,n){void 0===n&&(n=i.UnknownError);var o=t.call(this,e||"Unable to embed the checkout form.")||this;return o.subtype=n,o.type="not_embeddable",o}return d.__extends(e,t),e}(h.a),f=n(80),_=function(){function t(t,e,n,i,o,r,s,a){var c=this;this._iframeCreator=t,this._messageListener=e,this._messagePoster=n,this._loadingIndicator=i,this._requestSender=o,this._storage=r,this._location=s,this._options=a,this._isAttached=!1,this._options.onComplete&&this._messageListener.addListener(u.a.CheckoutComplete,this._options.onComplete),this._options.onError&&this._messageListener.addListener(u.a.CheckoutError,this._options.onError),this._options.onLoad&&this._messageListener.addListener(u.a.CheckoutLoaded,this._options.onLoad),this._options.onFrameLoad&&this._messageListener.addListener(u.a.FrameLoaded,this._options.onFrameLoad),this._options.onSignOut&&this._messageListener.addListener(u.a.SignedOut,this._options.onSignOut),this._messageListener.addListener(u.a.FrameLoaded,function(){return c._configureStyles()})}return t.prototype.attach=function(){var t=this;return this._isAttached?Promise.resolve(this):(this._isAttached=!0,this._messageListener.listen(),this._loadingIndicator.show(this._options.containerId),this._allowCookie().then(function(){return t._attemptLogin()}).then(function(e){return t._iframeCreator.createFrame(e,t._options.containerId)}).then(function(e){t._iframe=e,t._configureStyles(),t._loadingIndicator.hide()}).catch(function(e){return t._isAttached=!1,t._retryAllowCookie(e).catch(function(){throw t._messageListener.trigger({type:u.a.FrameError,payload:e}),t._loadingIndicator.hide(),e})}).then(function(){return t}))},t.prototype.detach=function(){this._isAttached&&(this._isAttached=!1,this._messageListener.stopListen(),this._iframe&&this._iframe.parentNode&&(this._iframe.parentNode.removeChild(this._iframe),this._iframe.iFrameResizer.close()))},t.prototype._configureStyles=function(){this._iframe&&this._iframe.contentWindow&&this._options.styles&&(this._messagePoster.setTarget(this._iframe.contentWindow),this._messagePoster.post({type:f.a.StyleConfigured,payload:this._options.styles}))},t.prototype._attemptLogin=function(){return/^\/login\/token/.test(Object(c.a)(this._options.url).pathname)?this._requestSender.post(this._options.url).then(function(t){return t.body.redirectUrl}).catch(function(t){return Promise.reject(new l(t))}):Promise.resolve(this._options.url)},t.prototype._allowCookie=function(){if(this._storage.getItem("isCookieAllowed"))return this._storage.setItem("canRetryAllowCookie",!0),Promise.resolve();this._storage.removeItem("canRetryAllowCookie"),this._storage.setItem("isCookieAllowed",!0);var t=Object(c.a)(this._options.url).origin+"/embedded-checkout/allow-cookie?returnUrl="+encodeURIComponent(this._location.href);return document.body.style.visibility="hidden",this._location.replace(t),new Promise(function(){})},t.prototype._retryAllowCookie=function(t){return this._storage.getItem("canRetryAllowCookie")&&t instanceof p&&t.subtype===i.MissingContent?(this._storage.removeItem("canRetryAllowCookie"),this._storage.removeItem("isCookieAllowed"),this._allowCookie()):Promise.reject()},t}(),m=n(81),y=n(67),g={size:70,color:"#d9d9d9",backgroundColor:"#ffffff"},v="embedded-checkout-loading-indicator-rotation",b=function(){function t(t){this._styles=d.__assign({},g,t&&t.styles),this._defineAnimation(),this._container=this._buildContainer(),this._indicator=this._buildIndicator(),this._container.appendChild(this._indicator)}return t.prototype.show=function(t){if(t){var e=document.getElementById(t);if(!e)throw new Error("Unable to attach the loading indicator because the parent ID is not valid.");e.appendChild(this._container)}this._container.style.visibility="visible",this._container.style.opacity="1"},t.prototype.hide=function(){var t=this,e=function(){t._container.style.visibility="hidden",t._container.removeEventListener("transitionend",e)};this._container.addEventListener("transitionend",e),this._container.style.opacity="0"},t.prototype._buildContainer=function(){var t=document.createElement("div");return t.style.display="block",t.style.bottom="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.right="0",t.style.top="0",t.style.transition="all 250ms ease-out",t.style.opacity="0",t},t.prototype._buildIndicator=function(){var t=document.createElement("div");return t.style.display="block",t.style.width=this._styles.size+"px",t.style.height=this._styles.size+"px",t.style.borderRadius=this._styles.size+"px",t.style.border="solid 1px",t.style.borderColor=this._styles.backgroundColor+" "+this._styles.backgroundColor+" "+this._styles.color+" "+this._styles.color,t.style.margin="0 auto",t.style.position="absolute",t.style.left="0",t.style.right="0",t.style.top="50%",t.style.transform="translateY(-50%) rotate(0deg)",t.style.transformStyle="preserve-3d",t.style.animation=v+" 500ms infinite cubic-bezier(0.69, 0.31, 0.56, 0.83)",t},t.prototype._defineAnimation=function(){if(!document.getElementById(v)){var t=document.createElement("style");t.id=v,document.head.appendChild(t),t.sheet instanceof CSSStyleSheet&&t.sheet.insertRule("\n                @keyframes "+v+" {\n                    0% { transform: translateY(-50%) rotate(0deg); }\n                    100% { transform: translateY(-50%) rotate(360deg); }\n                }\n            ")}},t}(),w=n(99),C=n(54),O=function(){function t(t){this._options=t}return t.prototype.createFrame=function(t,e){var n=document.getElementById(e),o=(this._options||{}).timeout,r=void 0===o?6e4:o;if(!n)throw new p("Unable to embed the iframe because the container element could not be found.",i.MissingContainer);var s=document.createElement("iframe");return s.src=t,s.style.border="none",s.style.display="none",s.style.width="100%",s.allowPaymentRequest=!0,n.appendChild(s),this._toResizableFrame(s,r).catch(function(t){throw n.removeChild(s),t})},t.prototype._toResizableFrame=function(t,e){return new Promise(function(n,o){var r=window.setTimeout(function(){o(new p("Unable to embed the iframe because the content could not be loaded."))},e),s=function(e){if(e.origin===Object(c.a)(t.src).origin&&(Object(C.a)(e.data,u.a.FrameError)&&(a(),o(new p(e.data.payload.message,i.MissingContent))),Object(C.a)(e.data,u.a.FrameLoaded))){t.style.display="";var r=e.data.payload&&e.data.payload.contentId,s=Object(w.iframeResizer)({scrolling:!1,sizeWidth:!1,heightCalculationMethod:r?"taggedElement":"lowestElement"},t);a(),n(s[s.length-1])}},a=function(){window.removeEventListener("message",s),window.clearTimeout(r)};window.addEventListener("message",s)})},t}(),E="BigCommerce.EmbeddedCheckout";function L(t){var e=Object(c.a)(t.url).origin;return new _(new O,new m.a(e),new y.a(e),new b({styles:t.styles&&t.styles.loadingIndicator}),Object(o.createRequestSender)(),new a(E),window.location,t).attach()}n.d(e,"a",function(){return L})},99:function(t,e){t.exports=require("iframe-resizer")}});
//# sourceMappingURL=embedded-checkout.js.map