_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"6eaq":function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),s=c("1OyB"),a=c("vuIU"),i=c("Ji7U"),r=c("md7G"),o=c("foSv"),l=c("q1tI"),d=c.n(l),u=(c("GUC0"),c("rCcS")),j=c("Cche"),b=c("p46w"),h=c.n(b),p=c("vDqi"),m=c.n(p),f=c("/MKj"),O=function(e){var t=e.bin,c=e.fetchCurrentUser,s=Object(l.useState)(!1),a=s[0],i=s[1],r=Object(l.useState)(!1),o=r[0],d=r[1],u=Object(l.useState)(t),j=u[0],b=u[1],p=Object(f.c)(),O=function(){i(!1),d(!1),c()};return Object(n.jsxs)("div",{className:"user__profile",children:[Object(n.jsxs)("div",{className:"user__profile__title",children:[Object(n.jsx)("h3",{children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(n.jsx)("p",{children:"\u0414\u043b\u044f \u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u043e\u0432 \u0420\u041a \u0411\u0418\u041d"})]}),Object(n.jsx)("div",{className:"user__profile__picture",children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"documents__input",type:"number",value:j,onChange:function(e){return function(e){b(e.target.value)}(e)}}),o?Object(n.jsx)("button",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):Object(n.jsx)("button",{onClick:function(){return d(!0),void m.a.get("".concat("https://test.money-men.kz/api","/updateBin"),{params:{token:h.a.get("token"),bin:j}}).then((function(e){d(!1),e.data.success?(O(),p({type:"SUCCESS_MESSAGE",payload:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d BIN"})):(p({type:"ERROR_MESSAGE",payload:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),O())}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(n.jsx)("button",{onClick:function(){return O()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"documents__input",value:j,disabled:!0}),Object(n.jsx)("button",{onClick:function(){i(!0)},class:"fa fa-pencil","aria-hidden":"true",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})]})},_=function(e){var t=e.registration,c=e.fetchCurrentUser,s=Object(l.useState)(null),a=s[0],i=s[1],r=Object(l.useState)(!1),o=r[0],d=r[1],u=Object(f.c)(),j=function(e){e.preventDefault(),d(!0),function(e){var t="".concat("https://test.money-men.kz/api","/updateRegistration"),c=new FormData;return c.append("register",e),c.append("token",h.a.get("token")),m.a.post(t,c,{headers:{"content-type":"multipart/form-data"}})}(a).then((function(e){d(!1),u({type:"SUCCESS_MESSAGE",payload:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d"}),i(null),c()}))};return Object(n.jsxs)("div",{class:"cabinet__document__item",children:[Object(n.jsxs)("div",{class:"user__profile__title withMargins",children:[Object(n.jsx)("h3",{children:"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0438\u043b\u0438 \u044d\u043a\u0441\u043f\u0435\u0434\u0438\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"}),Object(n.jsx)("p",{children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u0441\u043a\u0430\u043d-\u043a\u043e\u043f\u0438\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 .jpg, .png, .pdf"})]}),t?Object(n.jsx)("img",{className:"user_docs",src:"".concat("https://test.money-men.kz/","/images/company/").concat(t)}):Object(n.jsxs)("div",{className:"fileUpload",children:[Object(n.jsx)("input",{type:"file",className:"upload",onChange:function(e){return function(e){e.preventDefault(),i(e.target.files[0])}(e)},accept:"image/*"}),Object(n.jsxs)("span",{className:"",children:[" ",Object(n.jsx)("i",{class:"fas fa-upload"}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"]})]}),Object(n.jsx)("div",{className:null===a?"driver_modal edit_photo":"driver_modal edit_photo active",children:Object(n.jsxs)("div",{className:"driver_modal__inner ",children:[Object(n.jsx)("h2",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0442\u043e"}),Object(n.jsx)("i",{className:"fas fa-times driver_times",onClick:function(){return i(null)}}),Object(n.jsx)("div",{className:"edit_photo__img",children:null!==a?Object(n.jsx)("img",{src:URL.createObjectURL(a),alt:!0}):"no photo"}),o?Object(n.jsx)("button",{id:"close_edit_photo",className:"btn block inherit",disabled:!0,children:"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f..."}):Object(n.jsx)("button",{type:"submit",id:"close_edit_photo",className:"btn block inherit",onClick:function(e){return j(e)},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})})]})},x=function(e){var t=e.license,c=e.fetchCurrentUser,s=Object(l.useState)(null),a=s[0],i=s[1],r=Object(l.useState)(!1),o=r[0],d=r[1],u=Object(f.c)(),j=function(e){e.preventDefault(),d(!0),function(e){var t="".concat("https://test.money-men.kz/api","/updateLicense"),c=new FormData;return c.append("license",e),c.append("token",h.a.get("token")),m.a.post(t,c,{headers:{"content-type":"multipart/form-data"}})}(a).then((function(e){d(!1),u({type:"SUCCESS_MESSAGE",payload:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d"}),i(null),c()}))};return Object(n.jsxs)("div",{class:"cabinet__document__item",children:[Object(n.jsxs)("div",{class:"user__profile__title withMargins",children:[Object(n.jsx)("h3",{children:"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0438\u043b\u0438 \u044d\u043a\u0441\u043f\u0435\u0434\u0438\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"}),Object(n.jsx)("p",{children:"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u0441\u043a\u0430\u043d-\u043a\u043e\u043f\u0438\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 .jpg, .png, .pdf"})]}),t?Object(n.jsx)("img",{className:"user_docs",src:"".concat("https://test.money-men.kz/","/images/company/").concat(t)}):Object(n.jsxs)("div",{className:"fileUpload",children:[Object(n.jsx)("input",{type:"file",className:"upload",onChange:function(e){return function(e){e.preventDefault(),i(e.target.files[0])}(e)},accept:"image/*"}),Object(n.jsxs)("span",{className:"",children:[" ",Object(n.jsx)("i",{class:"fas fa-upload"}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"]})]}),Object(n.jsx)("div",{className:null===a?"driver_modal edit_photo":"driver_modal edit_photo active",children:Object(n.jsxs)("div",{className:"driver_modal__inner ",children:[Object(n.jsx)("h2",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0442\u043e"}),Object(n.jsx)("i",{className:"fas fa-times driver_times",onClick:function(){return i(null)}}),Object(n.jsx)("div",{className:"edit_photo__img",children:null!==a?Object(n.jsx)("img",{src:URL.createObjectURL(a),alt:!0}):"no photo"}),o?Object(n.jsx)("button",{id:"close_edit_photo",className:"btn block inherit",disabled:!0,children:"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f..."}):Object(n.jsx)("button",{type:"submit",id:"close_edit_photo",className:"btn block inherit",onClick:function(e){return j(e)},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})})]})},v=c("krZT"),N=c("w18f"),g=c("sk3R");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=Object(o.a)(e);if(t){var s=Object(o.a)(this).constructor;c=Reflect.construct(n,arguments,s)}else c=n.apply(this,arguments);return Object(r.a)(this,c)}}var C=function(e){Object(i.a)(c,e);var t=y(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{bin:this.props.usersReducer.user.companyDetails[0].bin,activeLink:"documents"}),Object(n.jsxs)("div",{className:"grid-container container",children:[Object(n.jsxs)("div",{className:"section",children:[Object(n.jsxs)("div",{className:"products__title paddings",children:[Object(n.jsx)(g.a,{}),Object(n.jsx)("h1",{className:"smaller_font",children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"})]}),Object(n.jsx)(O,{bin:this.props.usersReducer.user.companyDetails[0].bin,fetchCurrentUser:this.props.fetchCurrentUser}),Object(n.jsx)(_,{registration:this.props.usersReducer.user.companyDetails[0].registration,fetchCurrentUser:this.props.fetchCurrentUser}),Object(n.jsx)(x,{license:this.props.usersReducer.user.companyDetails[0].license,fetchCurrentUser:this.props.fetchCurrentUser})]}),Object(n.jsx)(j.a,{})]})]})}}]),c}(d.a.Component);t.default=Object(v.a)(Object(f.b)((function(e){return{usersReducer:e.usersReducer}}),(function(e){return{fetchCurrentUser:function(){return e(Object(N.fetchCurrentUser)())}}}))(C))},Cche:function(e,t,c){"use strict";var n=c("nKUr"),s=(c("q1tI"),c("/MKj")),a=c("p46w"),i=c.n(a),r=c("vDqi"),o=c.n(r);t.a=Object(s.b)((function(e){return{user:e.usersReducer.user}}),null)((function(e){var t=e.user,c=Object(s.c)();return Object(n.jsx)("div",{className:"aside",children:Object(n.jsxs)("div",{className:"aside__contactCard",children:[Object(n.jsxs)("div",{className:"contactCard__content",children:[Object(n.jsx)("img",{src:"/img/widgets/company_icon.png",alt:!0}),Object(n.jsxs)("div",{className:"contactCard__title",children:[Object(n.jsx)("h3",{children:t.companyDetails?t.companyDetails[0].companyName:t.fullName}),Object(n.jsxs)("p",{children:[t.fullName," "]})]})]}),Object(n.jsxs)("div",{className:"contactCard__details",children:[Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(n.jsx)("h3",{children:"\u041b\u0438\u043c\u0438\u0442\u0435\u0434"})]}),Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"}),Object(n.jsxs)("div",{className:"contactCard__detail__item__inner",children:[Object(n.jsx)("i",{className:"far fa-star"}),Object(n.jsx)("h3",{children:"0"})]})]}),Object(n.jsxs)("div",{className:"contactCard__detail__item",children:[Object(n.jsx)("p",{children:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441:"}),Object(n.jsxs)("div",{className:"contactCard__detail__item__inner",children:[Object(n.jsx)("img",{src:"assets/img/widgets/tenge.svg",alt:!0}),Object(n.jsx)("h3",{className:"green",children:"0 \u20b8"})]})]})]}),Object(n.jsx)("a",{className:"btn btn--white green",href:"#",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441"}),!t.subscription&&Object(n.jsx)("a",{className:"btn btn--white blue",onClick:function(){o.a.get("".concat("https://test.money-men.kz/api","/buySubscription?token=").concat(i.a.get("token"))).then((function(e){console.log(e),e.data.success?c({type:"SUCCESS_MESSAGE",payload:"\u0412\u044b \u0431\u0440\u0430\u043b\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"}):c({type:"ERROR_MESSAGE",payload:"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"})}))},href:"#",children:"\u0412\u0437\u044f\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443"}),t.subscription&&Object(n.jsxs)("a",{className:"btn btn--white blue",children:["\u0423 \u0432\u0430\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0434\u043e ",t.end_subscription_date]})]})})}))},"Np+6":function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return a}));var n=c("rePB"),s=Object(n.a)({"\u041b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"/cabinet","\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c":"/cabinet/password","\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":"/cabinet/posts","\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438":"/cabinet/workers","\u0417\u0430\u044f\u0432\u043a\u0438":"/cabinet/requests","\u0411\u0430\u043b\u0430\u043d\u0441":"/cabinet/balance","\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"/cabinet/favourites","\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f":"/cabinet/message","\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"/cabinet/delete","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f":"/cabinet/notification","\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b":"/cabinet/documents","\u0413\u0440\u0443\u0437\u044b":"/cargo","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"/cargo/transport","\u0410\u0443\u043a\u0446\u0438\u043e\u043d":"/cargo/auction","\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0439":"/cargo/distance","\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439":"/cargo/check","\u0421\u043a\u043b\u0430\u0434\u044b":"/cargo","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435":"/cargo/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435","/addposts"),a=function(e,t){return e=s,Object.keys(e).find((function(c){return e[c]===t}))}},bHjL:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/documents",function(){return c("6eaq")}])},rCcS:function(e,t,c){"use strict";var n=c("nKUr"),s=(c("q1tI"),c("20a2"));t.a=function(e){var t=e.bin,c=e.activeLink;Object(s.useRouter)();return Object(n.jsx)("div",{className:"goods__nav config active",children:Object(n.jsxs)("div",{className:"goods__nav__links container",children:[Object(n.jsx)("a",{className:"index"===c?"active":"",href:"/cabinet",children:"\u041b\u0438\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),t?Object(n.jsx)("a",{href:"/cabinet/documents",className:"documents"===c?"active":"",children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}):"",t?Object(n.jsx)("a",{href:"/cabinet/companyProfile",className:"companyProfile"===c?"active":"",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}):"",Object(n.jsx)("a",{href:"/cabinet/password",className:"password"===c?"active":"",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(n.jsx)("a",{href:"/cabinet/notification",className:"notification"===c?"active":"",children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"}),Object(n.jsx)("a",{href:"/cabinet/delete",className:"delete"===c?"active":"",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})})}},rePB:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))},sk3R:function(e,t,c){"use strict";var n=c("nKUr"),s=c("20a2"),a=(c("q1tI"),c("Np+6"));t.a=function(){var e=Object(s.useRouter)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:"/cabinet",className:"",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),"/ ",Object(n.jsx)("a",{href:"/cabinet",className:"",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"})," /",Object(n.jsx)("a",{href:e.pathname,className:"gray_font",children:" "+Object(a.b)(a.a,e.pathname)})]})})}}},[["bHjL",0,1,6,7,8,2,3,4,5,9,11]]]);