_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"20a2":function(e,c,t){e.exports=t("nOHt")},"3d9w":function(e,c,t){"use strict";var a=t("nKUr");t("q1tI");c.a=function(e){e.position;return Object(a.jsx)("div",{className:"modelLoader"})}},"5wXc":function(e,c,t){"use strict";var a=t("nKUr");t("q1tI");c.a=function(e){var c=e.max_page,t=parseInt(e.current_page),s=(e.next_page,e.prev_page,10),l=[];if(c<=s)for(var i=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},n=0;n<c;n++)i(n);if(c>s&&t<5){for(var r=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},_=0;_<5;_++)r(_);l.push(Object(a.jsx)("a",{href:"#",disabled:!0,children:"..."}));for(var j=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},d=c-4;d<c;d++)j(d)}if(c>s&&t>=5&&t<=c-7&&t>4){l.push(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{onClick:function(){return e.onChangePage(1)},className:1===t?"active":"",disabled:!0,children:1}),Object(a.jsx)("a",{href:"#",children:"..."})]}));for(var o=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},m=t-2;m<t+5-2;m++)o(m);l.push(Object(a.jsx)("a",{href:"#",children:"..."}));for(var b=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},u=c-2;u<c;u++)b(u)}if(c>s&&t>c-7){for(var h=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},x=0;x<1;x++)h(x);l.push(Object(a.jsx)("a",{href:"#",disabled:!0,children:"..."}));for(var O=function(c){l.push(Object(a.jsx)("a",{onClick:function(){return e.onChangePage(c+1)},className:t===c+1?"active":"",disabled:!0,children:c+1}))},f=c-7-1;f<c;f++)O(f)}return Object(a.jsx)("div",{className:"product__items__list",children:l})}},IrUY:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var a=function(e){if("object"===typeof window.google&&"object"===typeof window.google.maps)e();else{var c=document.createElement("script");c.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDwgq_3mUoJkLm7aTUbH2Z44y6RVm92DV0","&libraries=places"),window.document.body.appendChild(c),c.addEventListener("load",e)}}},ejtQ:function(e,c,t){"use strict";t.d(c,"a",(function(){return a})),t.d(c,"b",(function(){return s})),t.d(c,"d",(function(){return l})),t.d(c,"e",(function(){return i})),t.d(c,"g",(function(){return n})),t.d(c,"c",(function(){return r})),t.d(c,"f",(function(){return _}));var a=function(e){var c=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"];return"0"===e.slice(5,6)?e.slice(8,10)+" "+c[parseInt(e.slice(6,7))-1]:e.slice(8,10)+" "+c[parseInt(e.slice(5,7))-1]},s=function(e){var c=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"],t=e.slice(0,10),a=e.slice(11,e.length);return t.slice(0,2)+" "+("0"===e.slice(3,4)?c[e.slice(4,5)-1]:c[e.slice(3,5)-1])+" "+a},l=function(e){var c=(""+e).replace(/\D/g,"").match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);return c?"+"+c[1]+"("+c[2]+") ":null},i=function(e){var c=(""+e).replace(/\D/g,"").match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);return c?c[3]+" "+c[4]+" "+c[5]:null},n=function(e){if(e)return new Intl.DateTimeFormat("ru",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}).format(new Date(Date.parse(e)))},r=function(e){return e.forEach((function(c,t){!1===c&&e.delete(t)})),Array.from(e.keys()).join(",")},_=function(e){return!0===e?1:0}},jLNj:function(e,c,t){"use strict";var a=t("nKUr"),s=t("ejtQ"),l=t("5wXc");t("DPTp");c.a=function(e){e.total;var c=e.storages,t=e.maxPage,i=e.currentPage,n=e.onChangePage,r=e.loading;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"products__items__wrapper",children:[r?Object(a.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(a.jsx)(a.Fragment,{children:c.map((function(e){return Object(a.jsxs)("div",{className:"storage__item",children:[Object(a.jsx)("div",{className:"storage__item__img",children:Object(a.jsx)("img",{src:(e.images&&e.images,"/img/no_post_image.jpg"),alt:!0})}),Object(a.jsxs)("div",{className:"storage__item__desc",children:[Object(a.jsxs)("div",{className:"storage__item__title",children:[Object(a.jsx)("a",{href:"/storage/".concat(e.id),children:'\u0421\u043a\u043b\u0430\u0434 ", \u0410\u043b\u043c\u0430\u0442\u044b'}),Object(a.jsx)("h3",{children:e.properties?e.properties[0].price:""})]}),Object(a.jsxs)("div",{className:"storage__item__details",children:[Object(a.jsxs)("div",{className:"table__row",children:[Object(a.jsxs)("div",{className:"table__column__1",children:[Object(a.jsx)("p",{className:"goods__info__gray small",children:"\u043f\u043b\u043e\u0449\u0430\u0434\u044c"}),Object(a.jsx)("div",{className:"table__dash__bord"})]}),Object(a.jsx)("div",{className:"table__column__2 small",children:Object(a.jsxs)("p",{children:[e.properties?e.properties[0].area:""," \u043c2"]})})]}),Object(a.jsxs)("div",{className:"table__row",children:[Object(a.jsxs)("div",{className:"table__column__1",children:[Object(a.jsx)("p",{className:"goods__info__gray small",children:"\u043e\u0431\u0449. \u043f\u043b\u043e\u0449\u0430\u0434\u044c"}),Object(a.jsx)("div",{className:"table__dash__bord"})]}),Object(a.jsx)("div",{className:"table__column__2 small",children:Object(a.jsxs)("p",{children:[e.properties?e.properties[0].total_area:""," \u043c2"]})})]}),Object(a.jsxs)("div",{className:"table__row",children:[Object(a.jsxs)("div",{className:"table__column__1",children:[Object(a.jsx)("p",{className:"goods__info__gray small",children:"\u043a\u043b\u0430\u0441\u0441 \u0438 \u0442\u0438\u043f"}),Object(a.jsx)("div",{className:"table__dash__bord"})]}),Object(a.jsx)("div",{className:"table__column__2 small",children:Object(a.jsx)("p",{children:"B+ / \u0441\u0443\u0445\u043e\u0439 (+14/+24)"})})]})]}),Object(a.jsxs)("div",{className:"storage__item__adress",children:[Object(a.jsxs)("div",{className:"storage__item__adress__item",children:[Object(a.jsx)("h4",{children:e.properties?e.properties[0].region:""}),Object(a.jsx)("a",{className:"opacity_btn",href:"#",children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"})]}),Object(a.jsxs)("div",{className:"storage__item__adress__item",children:[Object(a.jsx)("p",{children:e.user&&e.user[0].companyDetails?e.user[0].companyDetails[0].companyName:""}),Object(a.jsx)("span",{children:e.updated_at?Object(s.b)(e.updated_at):""})]})]})]})]})}))}),Object(a.jsx)(l.a,{max_page:t,current_page:i,onChangePage:n})]})})}},kA1A:function(e,c,t){"use strict";t.r(c);var a=t("nKUr"),s=t("q1tI"),l=function(e){var c=e.cityRegionRef,t=e.setMinArea,s=e.minArea,l=e.maxArea,i=e.setMaxArea,n=e.minPrice,r=(e.setMinPrice,e.maxPrice);e.setMaxPrice;return Object(a.jsx)("div",{className:"main_filter",children:Object(a.jsxs)("div",{className:"main_filter__content container",children:[Object(a.jsxs)("div",{className:"main_filter__top flex_end",children:[Object(a.jsx)("div",{className:"main_filter__top__item",children:Object(a.jsxs)("div",{className:"filter__item__title",children:[Object(a.jsx)("h4",{children:"\u0413\u043e\u0440\u043e\u0434, \u0440\u0435\u0433\u0438\u043e\u043d"}),Object(a.jsx)("div",{className:"filter__item__form",children:Object(a.jsx)("input",{ref:c,type:"text"})})]})}),Object(a.jsx)("div",{className:"main_filter__top__item",children:Object(a.jsxs)("div",{className:"filter__item__title",children:[Object(a.jsx)("h4",{children:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c, \u043c2"}),Object(a.jsxs)("div",{className:"filter__item__form",children:[Object(a.jsx)("input",{className:"mini_input",value:s,onChange:function(e){return t(e.target.value)},type:"number",placeholder:100}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("input",{className:"mini_input",type:"number",value:l,onChange:function(e){return i(e.target.value)},placeholder:"1 200"})]})]})}),Object(a.jsx)("div",{className:"main_filter__top__item",children:Object(a.jsxs)("div",{className:"filter__item__title",children:[Object(a.jsx)("h4",{children:"\u0426\u0435\u043d\u0430, \u20b8 \u0437\u0430 \u043c2"}),Object(a.jsxs)("div",{className:"filter__item__form",children:[Object(a.jsx)("input",{className:"mini_input",value:n,onChange:function(e){},type:"number",placeholder:"\u043e\u0442"}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("input",{className:"mini_input",value:r,onChange:function(e){},type:"number",placeholder:"\u0434\u043e"})]})]})}),Object(a.jsx)("div",{className:"main_filter__top__item",children:Object(a.jsxs)("div",{className:"filter__item__title",children:[Object(a.jsx)("h4",{children:"\u041a\u043b\u0430\u0441\u0441"}),Object(a.jsx)("form",{className:"filter__item__form",children:Object(a.jsx)("select",{className:"storage__city_filter",children:Object(a.jsx)("option",{children:"\u0412\u0441\u0435"})})})]})}),Object(a.jsx)("div",{className:"main_filter__top__item",children:Object(a.jsxs)("div",{className:"filter__item__form",children:[Object(a.jsx)("button",{children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(a.jsx)("select",{name:!0,id:!0,children:Object(a.jsx)("option",{value:!0,children:"\u0412\u0441\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b"})})]})})]}),Object(a.jsxs)("div",{className:"main_filter__bottom",children:[Object(a.jsxs)("div",{className:"main_filter__bottom__item",children:[Object(a.jsx)("p",{children:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d, \u0410\u043b\u043c\u0430\u0442\u044b"}),Object(a.jsx)("i",{className:"fas fa-times"})]}),Object(a.jsxs)("div",{className:"main_filter__bottom__item",children:[Object(a.jsx)("p",{children:"\u043e\u0442 100 \u043c2 \u0434\u043e 1 200 \u043c2"}),Object(a.jsx)("i",{className:"fas fa-times"})]})]})]})})},i=t("20a2"),n=t("jLNj"),r=t("vDqi"),_=t.n(r),j=function(){return Object(a.jsx)("div",{className:"modal__calculator",children:Object(a.jsxs)("div",{className:"calculator__content",children:[Object(a.jsx)("button",{className:"close__calc__modal",children:Object(a.jsx)("i",{className:"fas fa-times"})}),Object(a.jsxs)("h2",{className:"calculator__content__title",children:["\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",Object(a.jsx)("br",{}),"\u0438 \u043c\u044b \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043c \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u043b\u043e\u0449\u0430\u0434\u044c"]}),Object(a.jsxs)("div",{className:"calculator__table",children:[Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u0442\u0438\u043f \u0440\u0430\u0441\u0447\u0435\u0442\u0430"})}),Object(a.jsxs)("div",{className:"calculator__table__column2",children:[Object(a.jsxs)("div",{className:"filter__item__form filter__item__form--calc",children:[Object(a.jsx)("a",{href:"#",className:"active",children:"\u041f\u043e \u043a\u043e\u043b-\u0432\u0443 \u043f\u0430\u043b\u043b\u0435\u0442\u043e \u043c\u0435\u0441\u0442"}),Object(a.jsx)("a",{href:"#",children:"\u041f\u043e \u043f\u043b\u043e\u0449\u0430\u0434\u0438 \u0441\u043a\u043b\u0430\u0434\u0430"})]}),Object(a.jsx)("div",{className:"calc__column__item",children:Object(a.jsxs)("p",{children:["\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0434\u043b\u044f",Object(a.jsx)("br",{}),"\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0430\u043b\u043b\u0435\u0442\u043e \u043c\u0435\u0441\u0442"]})})]})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0430\u043b\u043b\u0435\u0442\u043e \u043c\u0435\u0441\u0442"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsx)("div",{className:"filter__item__form filter__item__form--calc",children:Object(a.jsx)("input",{type:"number",defaultValue:100,width:10})})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u041a\u043b\u0430\u0441\u0441 \u0441\u043a\u043b\u0430\u0434\u0430"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsxs)("div",{className:"filter__item__form filter__item__form--calc",children:[Object(a.jsx)("a",{href:"#",className:"calc__column__item2 active",children:"\u0410"}),Object(a.jsx)("a",{href:"#",className:"calc__column__item2",children:"B"}),Object(a.jsx)("a",{href:"#",className:"calc__column__item2",children:"C"})]})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u043a\u043b\u0430\u0434\u0430"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsx)("div",{className:"filter__item__form filter__item__form--calc",children:Object(a.jsx)("input",{type:"number",defaultValue:100,width:10})})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0430\u043b\u043b\u0435\u0442\u043e \u043c\u0435\u0441\u0442"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsx)("div",{className:"filter__item__form filter__item__form--calc",children:Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{value:6,children:"6"}),Object(a.jsx)("option",{value:7,children:"7"})]})})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u0417\u043e\u043d\u0430 \u044d\u043a\u0441\u043f\u0435\u0434\u0438\u0446\u0438\u0438"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsxs)("div",{className:"filter__item__form filter__item__form--calc mobile_wrap",children:[Object(a.jsx)("input",{type:"range",defaultValue:18,min:1,max:100,oninput:"this.nextElementSibling.value = this.value"}),Object(a.jsx)("input",{type:"text",defaultValue:"18%",readOnly:!0})]})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u0422\u0438\u043f \u043f\u0430\u043b\u043b\u0435\u0442\u044b"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsxs)("div",{className:"filter__item__form filter__item__form--calc",children:[Object(a.jsx)("a",{href:"#",className:"calc__column__item2 active",children:"EUR 1200X800"}),Object(a.jsx)("a",{href:"#",className:"calc__column__item2",children:"FIN 1200X1000"})]})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsx)("div",{className:"calculator__table__column1",children:Object(a.jsx)("p",{children:"\u041f\u0440\u043e\u0435\u0437\u0434 \u0434\u043b\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0438"})}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsxs)("div",{className:"filter__item__form filter__item__form--calc",children:[Object(a.jsx)("a",{href:"#",className:"calc__column__item2 active",children:"2.5 - 2.9 \u043c."}),Object(a.jsx)("a",{href:"#",className:"calc__column__item2",children:"3 - 3.2 \u043c."}),Object(a.jsx)("a",{href:"#",className:"calc__column__item2",children:"\u0431\u043e\u043b\u0435\u0435 3.3 \u043c."})]})})]}),Object(a.jsxs)("div",{className:"calculator__table__row",children:[Object(a.jsxs)("div",{className:"calculator__table__column1",children:[Object(a.jsx)("p",{className:"calc__column__item2",children:"46 - 49 \u043c2"}),Object(a.jsx)("div",{className:"calc__column__item",children:Object(a.jsxs)("p",{children:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f",Object(a.jsx)("br",{}),"\u043f\u043b\u043e\u0449\u0430\u0434\u044c \u0441\u043a\u043b\u0430\u0434\u0430"]})})]}),Object(a.jsx)("div",{className:"calculator__table__column2",children:Object(a.jsx)("div",{className:"calc__column__item",children:Object(a.jsxs)("p",{children:["* \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f",Object(a.jsx)("br",{}),"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438, \u0442\u0430\u043a \u043a\u0430\u043a \u0440\u0430\u0441\u0447\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0441\u0445\u043e\u0434\u044f \u0442\u043e\u043b\u044c\u043a\u043e",Object(a.jsx)("br",{}),"\u0438\u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0432\u0432\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 \u0440\u0430\u0441\u0447\u0435\u0442\u0435 \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f",Object(a.jsx)("br",{}),"\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441\u043a\u043b\u0430\u0434\u0430."]})})})]})]})]})})},d=t("IrUY"),o=t("DPTp");c.default=function(){var e=Object(i.useRouter)(),c=(e.query.id,e.query.page),t=Object(s.useState)(!0),r=t[0],m=t[1],b=Object(s.useState)([{}]),u=b[0],h=b[1],x=Object(s.useState)(1),O=x[0],f=x[1],p=Object(s.useState)(0),v=p[0],N=p[1],g=Object(s.useState)(0),w=g[0],y=g[1],C=Object(s.useState)(""),P=C[0],k=C[1],A=Object(s.useState)(""),S=A[0],D=A[1],E=Object(s.useRef)(null),I=Object(s.useState)(!1),U=(I[0],I[1]),R=Object(s.useState)({id:"",name:""});R[0],R[1];Object(s.useEffect)((function(){m(!0),_.a.get("".concat("https://test.money-men.kz/api","/getAllStorage?page=").concat(c)).then((function(e){m(!1),h(e.data.data),N(e.data.all),y(e.data.max_page),f(e.data.current_page)})),Object(d.a)((function(){U(!0)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{cityRegionRef:E,minArea:P,setMinArea:k,maxArea:S,setMaxArea:D}),Object(a.jsxs)("div",{className:"products__container container",children:[Object(a.jsxs)("div",{className:"products__content",children:[Object(a.jsxs)("div",{className:"products__title",children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:"/",className:"",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," / ",Object(a.jsx)("a",{href:"/storage",children:"\u0421\u043a\u043b\u0430\u0434\u044b "}),"/",Object(a.jsx)("a",{href:"#",className:"gray_font",children:" \u0421\u043a\u043b\u0430\u0434\u044b \u0432 \u0410\u043b\u043c\u0430\u0442\u044b"})]}),Object(a.jsx)("h1",{children:"\u0421\u043a\u043b\u0430\u0434\u044b \u0438 \u0441\u043a\u043b\u0430\u0434\u0441\u043a\u0438\u0435 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0410\u043b\u043c\u0430\u0442\u044b"}),Object(a.jsxs)("h3",{children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",v," \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439"]})]}),u===[]?"":Object(a.jsx)(n.a,{total:v,storages:u,maxPage:w,onChangePage:function(c){m(!0),_.a.get("".concat("https://test.money-men.kz/api","/getAllStorage?page=").concat(c)).then((function(t){e.push("/storage?page=".concat(c)),m(!1),h(t.data.data),N(t.data.all),y(t.data.max_page),f(t.data.current_page)}))},currentPage:O,loading:r})]}),Object(a.jsx)(o.a,{})]}),Object(a.jsx)(j,{})]})}},mhtv:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/storage",function(){return t("kA1A")}])},yLpj:function(e,c){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}e.exports=t}},[["mhtv",0,1,2,3,10]]]);