_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{Cche:function(e,t,c){"use strict";var n=c("nKUr"),a=(c("q1tI"),c("/MKj")),s=c("p46w"),i=c.n(s),r=c("vDqi"),l=c.n(r);t.a=Object(a.b)((function(e){return{user:e.usersReducer.user}}),null)((function(e){var t=e.user,c=Object(a.c)();return Object(n.jsx)("div",{className:"aside",children:Object(n.jsxs)("div",{className:"aside__contactCard",children:[Object(n.jsxs)("div",{className:"contactCard__content",children:[Object(n.jsx)("img",{src:"/img/widgets/company_icon.png",alt:!0}),Object(n.jsxs)("div",{className:"contactCard__title",children:[Object(n.jsx)("h3",{children:t.companyDetails?t.companyDetails[0].companyName:t.fullName}),Object(n.jsxs)("p",{children:[t.fullName," "]})]})]}),Object(n.jsxs)("div",{className:"contactCard__details",children:[Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(n.jsx)("h3",{children:"\u041b\u0438\u043c\u0438\u0442\u0435\u0434"})]}),Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"}),Object(n.jsxs)("div",{className:"contactCard__detail__item__inner",children:[Object(n.jsx)("i",{className:"far fa-star"}),Object(n.jsx)("h3",{children:"0"})]})]}),Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441:"}),Object(n.jsxs)("div",{className:"contactCard__detail__item__inner",children:[Object(n.jsx)("img",{src:"assets/img/widgets/tenge.svg",alt:!0}),Object(n.jsx)("h3",{className:"green",children:"0 \u20b8"})]})]})]}),Object(n.jsx)("a",{className:"btn btn--white green",href:"#",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441"}),!t.subscription&&Object(n.jsx)("a",{className:"btn btn--white blue",onClick:function(){l.a.get("".concat("https://test.money-men.kz/api","/buySubscription?token=").concat(i.a.get("token"))).then((function(e){console.log(e),e.data.success?c({type:"SUCCESS_MESSAGE",payload:"\u0412\u044b \u0431\u0440\u0430\u043b\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"}):c({type:"ERROR_MESSAGE",payload:"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"})}))},href:"#",children:"\u0412\u0437\u044f\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443"}),t.subscription&&Object(n.jsxs)("a",{className:"btn btn--white blue",children:["\u0423 \u0432\u0430\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0434\u043e ",t.end_subscription_date]})]})})}))},"Np+6":function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return s}));var n=c("rePB"),a=Object(n.a)({"\u041b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"/cabinet","\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c":"/cabinet/password","\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":"/cabinet/posts","\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438":"/cabinet/workers","\u0417\u0430\u044f\u0432\u043a\u0438":"/cabinet/requests","\u0411\u0430\u043b\u0430\u043d\u0441":"/cabinet/balance","\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"/cabinet/favourites","\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f":"/cabinet/message","\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"/cabinet/delete","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":"/cabinet/notification","\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b":"/cabinet/documents","\u0413\u0440\u0443\u0437\u044b":"/cargo","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"/cargo/transport","\u0410\u0443\u043a\u0446\u0438\u043e\u043d":"/cargo/auction","\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0439":"/cargo/distance","\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439":"/cargo/check","\u0421\u043a\u043b\u0430\u0434\u044b":"/cargo","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435":"/cargo/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435","/addposts"),s=function(e,t){return e=a,Object.keys(e).find((function(c){return e[c]===t}))}},iARe:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/delete",function(){return c("lMu3")}])},lMu3:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),a=c("1OyB"),s=c("vuIU"),i=c("Ji7U"),r=c("md7G"),l=c("foSv"),o=c("q1tI"),d=c.n(o),j=c("GUC0"),u=c.n(j),b=c("rCcS"),h=c("Cche"),O=c("vDqi"),f=c.n(O),p=c("p46w"),m=c.n(p),_=c("/MKj"),x=c("20a2"),v=c.n(x),N=function(){var e=Object(o.useState)(!1),t=e[0],c=e[1],a=Object(o.useState)(""),s=a[0],i=a[1],r=Object(o.useState)(""),l=(r[0],r[1]),d=Object(o.useState)(!1),j=d[0],b=d[1],h=Object(_.c)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"user__profile border-none",children:[Object(n.jsxs)("div",{className:"user__profile__title",children:[Object(n.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(n.jsx)("p",{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(n.jsxs)("div",{className:"change__password__wrapper",children:[Object(n.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(n.jsx)("input",{type:"password",value:s,onFocus:function(){return b(!0)},className:"password__input",onChange:function(e){return function(e){i(e.target.value)}(e)}})]})]}),j?Object(n.jsxs)("div",{className:"user__data__btns",children:[t?Object(n.jsx)("span",{className:"btn",disabled:!0,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f..."}):Object(n.jsx)("span",{className:"btn",onClick:function(){u()({title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",buttons:{catch:{text:"\u0414\u0430",value:"yes"},cancel:"\u041d\u0435\u0442"}}).then((function(e){switch(e){case"yes":c(!0),f.a.get("".concat("https://test.money-men.kz/api","/deleteAccount"),{params:{password:s,token:m.a.get("token")}}).then((function(e){e.data.success?(c(!1),h({type:"SUCCESS_MESSAGE",payload:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d"}),v.a.push("/register"),m.a.remove("token")):(c(!1),h({type:"ERROR_MESSAGE",payload:e.data.message}))}))}}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(n.jsx)("span",{className:"btn btn--white",onClick:function(){return i(""),b(!1),l(""),void c(!1)},children:"\u041e\u0422\u041c\u0415\u041d\u0418\u0422\u042c"})]}):""]})},g=c("krZT"),y=c("sk3R");function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;c=Reflect.construct(n,arguments,a)}else c=n.apply(this,arguments);return Object(r.a)(this,c)}}var C=function(e){Object(i.a)(c,e);var t=w(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{bin:!!this.props.usersReducer.user.companyDetails,activeLink:"delete"}),Object(n.jsxs)("div",{className:"grid-container container",children:[Object(n.jsxs)("div",{className:"section",children:[Object(n.jsxs)("div",{className:"products__title paddings",children:[Object(n.jsx)(y.a,{}),Object(n.jsx)("h1",{class:"smaller_font",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(n.jsx)(N,{})]}),Object(n.jsx)(h.a,{})]})]})}}]),c}(d.a.Component);t.default=Object(g.a)(Object(_.b)((function(e){return{usersReducer:e.usersReducer}}),null)(C))},rCcS:function(e,t,c){"use strict";var n=c("nKUr"),a=(c("q1tI"),c("20a2"));t.a=function(e){var t=e.bin,c=e.activeLink;Object(a.useRouter)();return Object(n.jsx)("div",{className:"goods__nav config active",children:Object(n.jsxs)("div",{className:"goods__nav__links container",children:[Object(n.jsx)("a",{className:"index"===c?"active":"",href:"/cabinet",children:"\u041b\u0438\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),t?Object(n.jsx)("a",{href:"/cabinet/documents",className:"documents"===c?"active":"",children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}):"",t?Object(n.jsx)("a",{href:"/cabinet/companyProfile",className:"companyProfile"===c?"active":"",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}):"",Object(n.jsx)("a",{href:"/cabinet/password",className:"password"===c?"active":"",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(n.jsx)("a",{href:"/cabinet/notification",className:"notification"===c?"active":"",children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"}),Object(n.jsx)("a",{href:"/cabinet/delete",className:"delete"===c?"active":"",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})})}},rePB:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))},sk3R:function(e,t,c){"use strict";var n=c("nKUr"),a=c("20a2"),s=(c("q1tI"),c("Np+6"));t.a=function(){var e=Object(a.useRouter)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:"/cabinet",className:"",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),"/ ",Object(n.jsx)("a",{href:"/cabinet",className:"",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"})," /",Object(n.jsx)("a",{href:e.pathname,className:"gray_font",children:" "+Object(s.b)(s.a,e.pathname)})]})})}}},[["iARe",0,1,6,7,8,2,3,4,5,9,11]]]);