(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"20a2":function(e,t,n){e.exports=n("nOHt")},"3d9w":function(e,t,n){"use strict";var r=n("nKUr");n("q1tI");t.a=function(e){e.position;return Object(r.jsx)("div",{className:"modelLoader"})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&u||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},Bjk4:function(e,t,n){"use strict";const r="src/index.tsx";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return null!=e?e:t()}function u(e){let t,n=e[0],r=1;for(;r<e.length;){const o=e[r],a=e[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(t=n,n=a(n)):"call"!==o&&"optionalCall"!==o||(n=a(((...e)=>n.call(t,...e))),t=void 0)}return n}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("q1tI")),c=o(n("20a2")),s=o(n("g4pe"));t.default=(e,t)=>class extends i.default.Component{static async getInitialProps({res:n}){return u([n,"optionalAccess",e=>e.writeHead])&&(n.writeHead(a(u([t,"optionalAccess",e=>e.statusCode]),(()=>301)),{Location:e}),n.end()),{}}componentDidMount(){null!=u([t,"optionalAccess",e=>e.asUrl])?c.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?c.default.push(e):window.location.href=e}render(){const n=a(u([t,"optionalAccess",e=>e.asUrl]),(()=>e));return i.default.createElement(i.default.Fragment,null,i.default.createElement(s.default,{__self:this,__source:{fileName:r,lineNumber:35}},i.default.createElement("noscript",{__self:this,__source:{fileName:r,lineNumber:37}},i.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:r,lineNumber:38}})),(void 0===u([t,"optionalAccess",e=>e.statusCode])||301===u([t,"optionalAccess",e=>e.statusCode]))&&i.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:r,lineNumber:42}})),this.props.children?this.props.children:i.default.createElement("p",{__self:this,__source:{fileName:r,lineNumber:49}},"Redirecting to ",i.default.createElement("a",{href:n,__self:this,__source:{fileName:r,lineNumber:50}},n),"\u2026"))}}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CobJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var r=function(){return{type:"CLOSE_MESSAGE"}},o=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},a=function(e){return{type:"ERROR_MESSAGE",payload:e}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},Z7AQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("JZFu"),o=function(e,t){r.a.database().ref(e).on("value",(function(e){e.val()&&t(e.val())}))},a=function(e,t){r.a.database().ref(e).set(t)}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},krZT:function(e,t,n){"use strict";var r=n("nKUr"),o=n("1OyB"),a=n("vuIU"),u=n("Ji7U"),i=n("md7G"),c=n("foSv"),s=n("q1tI"),f=n.n(s),l=n("/MKj"),p=n("Bjk4"),d=n.n(p),h=n("w18f"),y=(n("CobJ"),n("p46w")),m=n.n(y),v=n("3d9w");function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var g=d()("/register");t.a=function(e){var t=function(t){Object(u.a)(i,t);var n=b(i);function i(){return Object(o.a)(this,i),n.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){m.a.get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser()}},{key:"render",value:function(){return m.a.get("token")&&this.props.loggedIn?Object(r.jsx)(e,{}):!m.a.get("token")||!this.props.authenticatingUser&&this.props.loggedIn?Object(r.jsx)(g,{}):Object(r.jsx)(v.a,{})}}]),i}(f.a.Component);return Object(l.b)((function(e){return{loggedIn:e.usersReducer.loggedIn,authenticatingUser:e.usersReducer.authenticatingUser}}),h)(t)}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var o=n("JX7q");function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},p46w:function(e,t,n){var r,o;!function(a){if(void 0===(o="function"===typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var u=window.Cookies,i=window.Cookies=a();i.noConflict=function(){return window.Cookies=u,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var u=JSON.stringify(n);/^[\{\[]/.test(u)&&(n=u)}catch(s){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=t+"="+n+i}}function u(e,n){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],u=0;u<a.length;u++){var i=a[u].split("="),c=i.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=t(i[0]);if(c=(r.read||r)(c,s)||t(c),n)try{c=JSON.parse(c)}catch(f){}if(o[s]=c,e===s)break}catch(f){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return u(e,!1)},o.getJSON=function(e){return u(e,!0)},o.remove=function(t,n){a(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},w18f:function(e,t,n){"use strict";n.r(t),n.d(t,"userAuthentication",(function(){return c})),n.d(t,"fetchCurrentUser",(function(){return s})),n.d(t,"logoutUser",(function(){return f}));var r=n("p46w"),o=n.n(r),a=n("20a2"),u=n.n(a),i=n("Z7AQ");var c=function(e,t){return function(n){var r;t.phone=(r=t.phone,String(r).replace(/[^A-Z0-9]/g,"")),console.log(t),n({type:"AUTHENTICATING_USER"}),n({type:"CLOSE_MESSAGE"}),fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){e.success?(o.a.set("token",e.token,{expires:7}),n({type:"SUCCESS_MESSAGE",payload:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}),n({type:"SET_CURRENT_USER",payload:e}),console.log(e),setTimeout((function(){n({type:"CLOSE_MESSAGE"})}),3500),u.a.push("/")):(n({type:"FAILED_LOGIN",payload:e.message}),n({type:"ERROR_MESSAGE",payload:e.message}))})).catch((function(e){console.log(e),n({type:"FAILED_LOGIN",payload:e}),n({type:"ERROR_MESSAGE",payload:e})}))}},s=function(){return function(e){e({type:"AUTHENTICATING_USER"}),fetch("".concat("https://test.money-men.kz/api","/getProfile?token=").concat(o.a.get("token")),{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(console.log(t),t.data.length){e({type:"SET_CURRENT_USER",payload:t.data[0]});var n=t.data[0].id,r=t.data[0].fullName;Object(i.b)("/users/".concat(n),!0),o.a.set("active_user",n),o.a.set("active_fullname",r)}else e({type:"FAILED_LOGIN"}),o.a.remove("token"),setTimeout((function(){location.reload()}),100)}))}},f=function(){return{type:"LOGOUT_USER"}}}}]);