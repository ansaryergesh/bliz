_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"/Gn1":function(e,t,c){"use strict";c.r(t);var n=c("rePB"),a=c("nKUr"),s=c("q1tI"),i=c("9n94"),r=c("p46w"),o=c.n(r),l=c("vDqi"),d=c.n(l),b=function(e){var t=e.balance;return Object(a.jsxs)("div",{className:"balance__details",children:[Object(a.jsxs)("div",{className:"balance__detail__item",children:[Object(a.jsx)("p",{children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(a.jsx)("div",{className:"balance__detail__item__inner",children:Object(a.jsx)("h3",{children:"\u041b\u0438\u043c\u0438\u0442\u0435\u0434"})})]}),Object(a.jsxs)("div",{className:"balance__detail__item",children:[Object(a.jsx)("p",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"}),Object(a.jsxs)("div",{className:"balance__detail__item__inner",children:[Object(a.jsx)("i",{className:"far fa-star"}),Object(a.jsx)("h3",{className:"blue",children:"0"})]})]}),Object(a.jsxs)("div",{className:"balance__detail__item",children:[Object(a.jsx)("p",{children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),Object(a.jsxs)("div",{className:"balance__detail__item__inner",children:[Object(a.jsx)("img",{src:"/img/widgets/tenge.svg",alt:!0}),Object(a.jsxs)("h3",{className:"green",children:[t,"\u20b8"]})]})]})]})},j=function(e){var t=e.history;return Object(a.jsxs)("div",{children:[!t.length>0&&"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442\u0443 \u0438\u0441\u0442\u043e\u0440\u0438\u0438",Object(a.jsx)("div",{className:t.length>0?"historyContainer":"d-none",children:Object(a.jsxs)("ul",{className:"responsive-table",children:[Object(a.jsxs)("li",{className:"table-header",children:[Object(a.jsx)("div",{className:"col col-1",children:"#"}),Object(a.jsx)("div",{className:"col col-2",children:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"}),Object(a.jsx)("div",{className:"col col-3",children:"\u0421\u0443\u043c\u043c\u0430"})]}),t.map((function(e,t){return Object(a.jsxs)("li",{className:"table-row",children:[Object(a.jsx)("div",{className:"col col-1","data-label":"Job Id",children:t+1}),Object(a.jsx)("div",{className:"col col-2","data-label":"Customer Name",children:e.type}),Object(a.jsx)("div",{className:"col col-3","data-label":"Amount",children:e.summa})]})}))]})})]})},u=c("/MKj");t.default=function(){var e,t=Object(u.c)(),c=Object(s.useState)(void 0!==o.a.get("balance")?o.a.get("balance"):0),r=c[0],l=(c[1],Object(s.useState)("balance")),m=l[0],p=l[1],h=Object(s.useState)({}),_=h[0],O=h[1],f=Object(s.useState)(""),x=f[0],v=f[1];return Object(s.useEffect)((function(){d.a.get("https://test.money-men.kz/api/paymentHistory",{params:{token:o.a.get("token")}}).then((function(e){O(e.data.data),console.log(e.data.data)}))}),[]),Object(a.jsxs)("div",{className:"grid-container container",children:[Object(a.jsxs)("div",{className:"section",children:[Object(a.jsxs)("div",{className:"products__title paddings little_pad",children:[Object(a.jsx)(i.a,{}),Object(a.jsx)("h1",{className:"smaller_font",children:"\u041c\u043e\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),"balance"===m?Object(a.jsx)("button",{onClick:function(){return p("transaction")},className:"btn green",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439"}):Object(a.jsx)("button",{onClick:function(){return p("balance")},className:"btn green",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0430"})]}),"balance"===m?Object(a.jsx)(b,{balance:r}):Object(a.jsx)(j,{history:_}),Object(a.jsxs)("div",{className:"balance__top-up",children:[Object(a.jsx)("div",{className:"products__title",children:Object(a.jsx)("h1",{children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u0447\u0435\u0442"})}),Object(a.jsx)("div",{className:"balance__top-up__wrapper",children:Object(a.jsxs)("div",{className:"balance__top-up__item",children:[Object(a.jsx)("div",{className:"balance__top-up__item__img",children:Object(a.jsx)("img",{src:"/img/widgets/balance1.png",alt:!0})}),Object(a.jsxs)("div",{className:"balance__top-up__item__content",children:[Object(a.jsxs)("div",{className:"balance__top-up__item__content__text",children:[Object(a.jsx)("h3",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u043b\u044e\u0431\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c"}),Object(a.jsxs)("p",{children:["\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439, \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043b\u0430\u0442\u0435\u0436\u0438 \u0438",Object(a.jsx)("br",{}),"\u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0435",Object(a.jsx)("br",{}),"Paybox.kz"]}),Object(a.jsx)("input",(e={className:"form_group",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:function(e){return v(e.target.value)},value:x},Object(n.a)(e,"className","amount_input"),Object(n.a)(e,"name","amount"),Object(n.a)(e,"type","number"),e))]}),Object(a.jsx)("a",{onClick:function(){return t({type:"CLOSE_MESSAGE"}),void(x>0?d.a.post("".concat("https://test.money-men.kz/api","/makePayment?user_id=").concat(o.a.get("active_user"),"&amount=").concat(x)).then((function(e){e?(v(""),console.log(e),window.open(e.data[0]+"?"+e.data[1])):t({type:"ERROR_MESSAGE",payload:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})})).catch((function(e){t({type:"ERROR_MESSAGE",payload:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})})):(console.log("ok"),t({type:"ERROR_MESSAGE",payload:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443"})))},className:"btn green",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d"})]})]})})]})]}),Object(a.jsx)("div",{className:"aside"})]})}},"20a2":function(e,t,c){e.exports=c("nOHt")},"2Fx+":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/balance",function(){return c("/Gn1")}])},"9n94":function(e,t,c){"use strict";var n=c("nKUr"),a=c("20a2"),s=(c("q1tI"),c("Np+6"));t.a=function(){var e=Object(a.useRouter)();return e.pathname.includes("cabinet")?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:"/cabinet",className:"",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),"/",Object(n.jsx)("a",{href:"#",className:"gray_font",children:" "+Object(s.b)(s.a,e.pathname)})]})}):e.pathname.includes("cargo")?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:"/",className:"",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," / ",Object(n.jsx)("a",{href:"/cargo",children:"\u0413\u0440\u0443\u0437\u043e\u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438 /"}),Object(n.jsx)("a",{href:"#",className:"gray_font",children:" "+Object(s.b)(s.a,e.pathname)})]})}):void 0}},"Np+6":function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return s}));var n=c("rePB"),a=Object(n.a)({"\u041b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"/cabinet","\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c":"/cabinet/password","\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":"/cabinet/posts","\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438":"/cabinet/workers","\u0417\u0430\u044f\u0432\u043a\u0438":"/cabinet/requests","\u0411\u0430\u043b\u0430\u043d\u0441":"/cabinet/balance","\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"/cabinet/favourites","\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f":"/cabinet/message","\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"/cabinet/delete","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":"/cabinet/notification","\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b":"/cabinet/documents","\u0413\u0440\u0443\u0437\u044b":"/cargo","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"/cargo/transport","\u0410\u0443\u043a\u0446\u0438\u043e\u043d":"/cargo/auction","\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0439":"/cargo/distance","\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439":"/cargo/check","\u0421\u043a\u043b\u0430\u0434\u044b":"/cargo","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435":"/cargo/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435","/addposts"),s=function(e,t){return e=a,Object.keys(e).find((function(c){return e[c]===t}))}},p46w:function(e,t,c){var n,a;!function(s){if(void 0===(a="function"===typeof(n=s)?n.call(t,c,t,e):n)||(e.exports=a),!0,e.exports=s(),!!0){var i=window.Cookies,r=window.Cookies=s();r.noConflict=function(){return window.Cookies=i,r}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var c=arguments[e];for(var n in c)t[n]=c[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function c(n){function a(){}function s(t,c,s){if("undefined"!==typeof document){"number"===typeof(s=e({path:"/"},a.defaults,s)).expires&&(s.expires=new Date(1*new Date+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var i=JSON.stringify(c);/^[\{\[]/.test(i)&&(c=i)}catch(l){}c=n.write?n.write(c,t):encodeURIComponent(String(c)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var o in s)s[o]&&(r+="; "+o,!0!==s[o]&&(r+="="+s[o].split(";")[0]));return document.cookie=t+"="+c+r}}function i(e,c){if("undefined"!==typeof document){for(var a={},s=document.cookie?document.cookie.split("; "):[],i=0;i<s.length;i++){var r=s[i].split("="),o=r.slice(1).join("=");c||'"'!==o.charAt(0)||(o=o.slice(1,-1));try{var l=t(r[0]);if(o=(n.read||n)(o,l)||t(o),c)try{o=JSON.parse(o)}catch(d){}if(a[l]=o,e===l)break}catch(d){}}return e?a[e]:a}}return a.set=s,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(t,c){s(t,"",e(c,{expires:-1}))},a.defaults={},a.withConverter=c,a}((function(){}))}))},rePB:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))}},[["2Fx+",0,1,2,3,4]]]);