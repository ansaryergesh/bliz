_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"20a2":function(e,t,s){e.exports=s("nOHt")},"8/ag":function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),i=function(){return Object(c.jsx)("div",{className:"driver_modal rejection",children:Object(c.jsxs)("div",{className:"driver_modal__inner",children:[Object(c.jsx)("h2",{children:"\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(c.jsx)("i",{className:"fas fa-times driver_times"}),Object(c.jsx)("textarea",{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043e\u0442\u043a\u0430\u0437\u0430\u2026",cols:30,rows:10,defaultValue:""}),Object(c.jsxs)("div",{className:"driver_modal__btns",children:[Object(c.jsx)("a",{id:"choose_driver",className:"btn tablet",href:"#",children:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c"}),Object(c.jsx)("a",{className:"btn btn--white tablet gray",href:"#",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})},n=function(e){var t=e.details;return Object(c.jsx)("div",{class:"driver_modal map",children:Object(c.jsxs)("div",{class:"driver_modal__inner",children:[Object(c.jsx)("h2",{children:"\u0413\u0440\u0443\u0437 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"}),Object(c.jsx)("i",{class:"fas fa-times driver_times"}),Object(c.jsx)("div",{class:"modal__map",children:Object(c.jsx)("iframe",{src:"https://www.google.com/maps/embed/v1/directions?key=".concat("AIzaSyD-kk951XgVXsv3b0yqJntwbxDslSP2Oxo","&origin=","place_id:".concat(t.from),"&destination=","place_id:".concat(t.to),"&avoid=tolls|highways"),width:600,height:450,frameBorder:0,style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:0})}),Object(c.jsx)("h3",{class:"driver_online",children:"\u0412\u041e\u0414\u0418\u0422\u0415\u041b\u042c \u041e\u041d\u041b\u0410\u0419\u041d"}),Object(c.jsxs)("div",{class:"modal__map__wrapper",children:[Object(c.jsxs)("div",{class:"modal__map__item",children:[Object(c.jsx)("span",{children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0434\u043e \u043a\u043e\u043d\u0446\u0430:"}),Object(c.jsxs)("p",{children:["~",t.duration,", ",t.distance]})]}),Object(c.jsx)("div",{class:"modal__map__item",children:Object(c.jsx)("span",{children:"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435:"})})]})]})})},r=s("20a2"),a=s("q1tI"),d=s("p46w"),l=s.n(d),o=s("vDqi"),_=s.n(o),j=s("/MKj"),m=s("ejtQ"),u=function(e){var t=e.participants,s=e.onAccept;return Object(c.jsxs)("div",{className:"request_item",children:[Object(c.jsx)("h3",{children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u043e\u0432:"}),t.map((function(e){return Object(c.jsxs)("div",{className:"request_item__section first",children:[Object(c.jsxs)("div",{className:"requset__item__name",children:[Object(c.jsx)("div",{className:"requset__item__name__img",children:Object(c.jsx)("img",{src:"/img/widgets/user.png",alt:!0})}),Object(c.jsxs)("div",{className:"requset__item__name__title",children:[Object(c.jsx)("h4",{children:e.fullName}),Object(c.jsx)("span",{children:e.type})]})]}),Object(c.jsx)("div",{className:"request_item__date",children:Object(c.jsx)("p",{children:void 0!==e.created_at?Object(m.b)(e.created_at):""})}),Object(c.jsx)("div",{className:"request_item__price",children:Object(c.jsxs)("h2",{children:[e.price," ",(t=e.currency,1===t?"\u20b8":2===t?"\u0440":"$")]})}),Object(c.jsxs)("div",{className:"request_item__btns",children:[Object(c.jsx)("a",{name:e.user_id,className:"btn tablet inherit",onClick:function(e){return s(e)},href:"#",children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(c.jsx)("a",{name:e.user_id,className:"btn btn--white tablet gray open_rejection_modal",href:"#",children:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439"})]})]});var t}))]})};t.default=function(){var e=Object(j.c)(),t=Object(r.useRouter)(),s=t.query.request_id,d=Object(a.useState)([]),o=d[0],h=d[1],b=Object(a.useState)([]),p=b[0],x=b[1],O=Object(a.useState)(!0),f=(O[0],O[1]);return Object(a.useEffect)((function(){s||t.push("/cabinet/requests"),_.a.get("".concat("https://test.money-men.kz/api","/detailOffer"),{params:{token:l.a.get("token"),order_id:s}}).then((function(e){f(!1),e.data.success&&e.data.data!==[]?(h(e.data.details[0]),x(e.data.data)):t.push("/cabinet/requests")}))}),[]),Object(c.jsxs)("section",{className:"request_items_body",children:[Object(c.jsxs)("div",{className:"grid-container container done",children:[Object(c.jsxs)("div",{className:"section",children:[Object(c.jsxs)("p",{className:"request_items__breadcrumbs",children:[Object(c.jsx)("a",{href:"/cabinet",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})," / ",Object(c.jsx)("a",{href:"/cabinet/request",children:"\u0417\u0430\u044f\u0432\u043a\u0438"})," / \u0417\u0430\u044f\u0432\u043a\u0430 \u2116",s]}),Object(c.jsxs)("span",{className:"blue_span_title yellow",children:[p.length," \u041f\u0420\u0415\u0414\u041b\u041e\u0416\u0415\u041d\u0418\u042f"]}),Object(c.jsxs)("div",{className:"request_items__title",children:[Object(c.jsxs)("h1",{children:[o.title," ",o.net," \u0442\u043d / ",o.volume," \u043c\xb3"]}),Object(c.jsxs)("p",{children:[o.from_string," - ",o.to_string,", ",void 0!==o.start_date?Object(m.a)(o.start_date):""]})]}),Object(c.jsxs)("div",{className:"request_item",children:[Object(c.jsx)("h3",{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0433\u0440\u0443\u0437\u0435:"}),Object(c.jsxs)("div",{className:"request_item__section second",children:[Object(c.jsxs)("div",{className:"request_item__section__wrapper",children:[Object(c.jsxs)("div",{className:"goods__city",children:[Object(c.jsx)("img",{className:"signs__item",src:"/img/goods__nav1__item/a-sign.svg",alt:"a-sign"}),Object(c.jsx)("p",{className:"info__map__city",children:o.from_string}),Object(c.jsx)("img",{className:"goods__info__rectangle",src:"/img/goods__nav1__item/rectangle.png",alt:"rectangle"})]}),Object(c.jsxs)("div",{className:"info__map__content",children:[Object(c.jsxs)("div",{className:"info__map__row",children:[Object(c.jsxs)("div",{className:"map__row__item",children:[Object(c.jsx)("img",{src:"/img/goods__nav1__item/right-sign.svg",alt:"right-sign"}),Object(c.jsxs)("div",{className:"row__item__text",children:[Object(c.jsx)("p",{children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043e \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043c\u043a\u0440. \u041a\u043e\u043a-\u0442\u043e\u0431\u0435"}),Object(c.jsx)("p",{className:"descr__gray",children:"\u0414\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0438\u043c\u043e \u0418\u041f \u0413\u043e\u043b\u043e\u0432\u0430\u0446\u043a\u0438\u0439 \u042e.\u042e (\u0441\u043f\u0440\u0430\u0432\u0430)"})]})]}),Object(c.jsx)("div",{className:"map__row__item2",children:Object(c.jsx)("p",{children:"78 \u043c"})}),Object(c.jsx)("div",{className:"map__row__item3",children:Object(c.jsx)("p",{children:"2 \u043c\u0438\u043d"})})]}),Object(c.jsxs)("div",{className:"info__map__row",children:[Object(c.jsxs)("div",{className:"map__row__item",children:[Object(c.jsx)("img",{src:"/img/goods__nav1__item/right-sign.svg",alt:"right-sign"}),Object(c.jsx)("div",{className:"row__item__text",children:Object(c.jsx)("p",{className:"item__text__paragraph",children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043d\u0430\u043b\u0435\u0432\u043e \u043d\u0430 \u043f\u0435\u0440\u0435\u043a\u0440\u0435\u0441\u0442\u043a\u0435 \u043d\u0430 \u0443\u043b. \u0410\u0439\u0440\u0438\u0445\u0430"})})]}),Object(c.jsx)("div",{className:"map__row__item2",children:Object(c.jsx)("p",{children:"1.2 \u043a\u043c"})}),Object(c.jsx)("div",{className:"map__row__item3",children:Object(c.jsx)("p",{children:"10 \u043c\u0438\u043d"})})]}),Object(c.jsxs)("div",{className:"info__map__row",children:[Object(c.jsxs)("div",{className:"map__row__item",children:[Object(c.jsx)("img",{src:"/img/goods__nav1__item/right-sign.svg",alt:"right-sign"}),Object(c.jsxs)("div",{className:"row__item__text",children:[Object(c.jsx)("p",{className:"item__text__paragraph",children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u043f\u0435\u0440\u0435\u043a\u0440\u0435\u0441\u0442\u043a\u0435 \u043f\u0440. \u0423\u043b\u0443\u0433\u0431\u0435\u043a\u0430 \u043d\u0430 \u0443\u043b\u0438\u0446\u0430 \u0421\u0430\u0438\u043d\u0430"}),Object(c.jsx)("p",{className:"descr__gray",children:"\u0414\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0438\u043c\u043e \xab\u0421\u0422\u0410\u0422\u0423\u0421\xbb (\u0441\u043f\u0440\u0430\u0432\u0430)"})]})]}),Object(c.jsx)("div",{className:"map__row__item2",children:Object(c.jsx)("p",{children:"800 \u043c"})}),Object(c.jsx)("div",{className:"map__row__item3",children:Object(c.jsx)("p",{children:"15 \u043c\u0438\u043d"})})]})]})]}),Object(c.jsx)("a",{id:"open_map_modal",className:"btn btn--white tablet",href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e \u0433\u0440\u0443\u0437\u0435"})]})]}),Object(c.jsx)(u,{participants:p,onAccept:function(c){_.a.get("".concat("https://test.money-men.kz/api","/acceptPost"),{params:{token:l.a.get("token"),user_id:c.target.name,order_id:s}}).then((function(s){s.data.success?(t.push("/cabinet/requests"),e({type:"SUCCESS_MESSAGE",payload:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})):e({type:"ERROR_MESSAGE",payload:s.data.message})}))}})]}),Object(c.jsx)("div",{className:"aside"})]}),Object(c.jsx)(n,{details:o}),Object(c.jsx)(i,{})]})}},TEm4:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/request",function(){return s("8/ag")}])},ejtQ:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return i})),s.d(t,"d",(function(){return n})),s.d(t,"e",(function(){return r})),s.d(t,"g",(function(){return a})),s.d(t,"c",(function(){return d})),s.d(t,"f",(function(){return l}));var c=function(e){var t=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"];return"0"===e.slice(5,6)?e.slice(8,10)+" "+t[parseInt(e.slice(6,7))-1]:e.slice(8,10)+" "+t[parseInt(e.slice(5,7))-1]},i=function(e){var t=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"],s=e.slice(0,10),c=e.slice(11,e.length);return s.slice(0,2)+" "+("0"===e.slice(3,4)?t[e.slice(4,5)-1]:t[e.slice(3,5)-1])+" "+c},n=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);return t?"+"+t[1]+"("+t[2]+") ":null},r=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);return t?t[3]+" "+t[4]+" "+t[5]:null},a=function(e){if(e)return new Intl.DateTimeFormat("ru",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}).format(new Date(Date.parse(e)))},d=function(e){return e.forEach((function(t,s){!1===t&&e.delete(s)})),Array.from(e.keys()).join(",")},l=function(e){return!0===e?1:0}},p46w:function(e,t,s){var c,i;!function(n){if(void 0===(i="function"===typeof(c=n)?c.call(t,s,t,e):c)||(e.exports=i),!0,e.exports=n(),!!0){var r=window.Cookies,a=window.Cookies=n();a.noConflict=function(){return window.Cookies=r,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var s=arguments[e];for(var c in s)t[c]=s[c]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function s(c){function i(){}function n(t,s,n){if("undefined"!==typeof document){"number"===typeof(n=e({path:"/"},i.defaults,n)).expires&&(n.expires=new Date(1*new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var r=JSON.stringify(s);/^[\{\[]/.test(r)&&(s=r)}catch(l){}s=c.write?c.write(s,t):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var d in n)n[d]&&(a+="; "+d,!0!==n[d]&&(a+="="+n[d].split(";")[0]));return document.cookie=t+"="+s+a}}function r(e,s){if("undefined"!==typeof document){for(var i={},n=document.cookie?document.cookie.split("; "):[],r=0;r<n.length;r++){var a=n[r].split("="),d=a.slice(1).join("=");s||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var l=t(a[0]);if(d=(c.read||c)(d,l)||t(d),s)try{d=JSON.parse(d)}catch(o){}if(i[l]=d,e===l)break}catch(o){}}return e?i[e]:i}}return i.set=n,i.get=function(e){return r(e,!1)},i.getJSON=function(e){return r(e,!0)},i.remove=function(t,s){n(t,"",e(s,{expires:-1}))},i.defaults={},i.withConverter=s,i}((function(){}))}))}},[["TEm4",0,1,3,2,4]]]);