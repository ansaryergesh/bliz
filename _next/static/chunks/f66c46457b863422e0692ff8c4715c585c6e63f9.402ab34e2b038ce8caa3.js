(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{ILIa:function(e,t,s){"use strict";s.r(t);var a=s("nKUr"),c=s("rePB"),n=s("1OyB"),i=s("JX7q"),_=s("vuIU"),r=s("Ji7U"),d=s("md7G"),l=s("foSv"),o=s("q1tI"),p=s.n(o),h=s("vDqi"),j=s.n(h),u=s("p46w"),m=s.n(u),b=s("395j"),x=s("/LDy"),O=s("CobJ"),v=s("/MKj"),f=s("XqpU"),g=s("IrUY"),N=s("3d9w"),y=s("BdL6"),k=s("20a2"),C=s.n(k),w=s("jzL/");s("ejtQ");function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return Object(d.a)(this,s)}}var S=function(e){Object(r.a)(s,e);var t=D(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).placeInputRef=Object(o.createRef)(),a.placeInputRef2=Object(o.createRef)(),a.state={loadMap:!1,loadingDisDur:!1,title:"",from:"",to:"",volume:"22",net:"86",startDate:Object(f.e)(),endDate:Object(f.e)(),price:"100",priceType:1,paymentType:1,type_transport:1,docs:new Map,pogruzki:new Map,condition:new Map,extra:new Map,distance:"",duration:"",fromString:"",toString:"",quantity:"",width:"",height:"",length:"",subType:"1",subTypeLists:w.a.filter((function(e){return 1===e.id}))[0]},a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.handleChange=a.handleChange.bind(Object(i.a)(a)),a.handleCheckBox=a.handleCheckBox.bind(Object(i.a)(a)),a.initPlaceAPI=a.initPlaceAPI.bind(Object(i.a)(a)),a}return Object(_.a)(s,[{key:"componentDidMount",value:function(){var e=this;Object(g.a)((function(){e.setState({loadMap:!0},(function(){return e.initPlaceAPI()}))}))}}]),Object(_.a)(s,[{key:"initPlaceAPI",value:function(){var e=this,t=new window.google.maps.places.Autocomplete(this.placeInputRef.current,{types:["(cities)"]}),s=new window.google.maps.places.Autocomplete(this.placeInputRef2.current,{types:["(cities)"]});new window.google.maps.event.addListener(t,"place_changed",(function(){var s=t.getPlace();console.log(s);var a=new Map;s.address_components.forEach((function(e){(e.types.includes("locality")||e.types.includes("country"))&&a.set(e.short_name,e.short_name)})),e.setState({from:s.place_id,fromString:Array.from(a.keys()).join(",")},(function(){e.getDistanceDuration(e.state.from,e.state.to)}))})),new window.google.maps.event.addListener(s,"place_changed",(function(){var t=s.getPlace(),a=new Map;t.address_components.forEach((function(e){(e.types.includes("locality")||e.types.includes("country"))&&a.set(e.short_name,e.short_name)})),e.setState({to:t.place_id,toString:Array.from(a.keys()).join(",")},(function(){e.getDistanceDuration(e.state.from,e.state.to)}))}))}},{key:"getDistanceDuration",value:function(e,t){var s=this;e.length>0&&t.length>0?(this.setState({loadingDisDur:!0}),j.a.get("".concat("https://test.money-men.kz/api","/distance?from=").concat(e,"&to=").concat(t),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, PUT","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"}}).then((function(e){200===e.status&&s.setState({loadingDisDur:!1,distance:e.data.distance,duration:e.data.duration}),400===e.status&&(s.setState({loadingDisDur:!1}),console.log(e))}))):this.setState({loadingDisDur:!1})}},{key:"handleChange",value:function(e){var t=e.target,s=t.value,a=t.name;this.setState(Object(c.a)({},a,s)),"type_transport"===a&&this.setState({subTypeLists:w.a.filter((function(e){return e.id===parseInt(s)}))[0],subType:"1"})}},{key:"handleCheckBox",value:function(e){var t=e.target.value,s=e.target.checked;b.b.some((function(t){return t.name===e.target.name}))&&this.setState((function(e){return{docs:e.docs.set(t,s)}})),b.a.some((function(t){return t.name===e.target.name}))&&this.setState((function(e){return{condition:e.condition.set(t,s)}})),b.e.some((function(t){return t.name===e.target.name}))&&this.setState((function(e){return{pogruzki:e.pogruzki.set(t,s)}})),b.c.some((function(t){return t.name===e.target.name}))&&this.setState((function(e){return{extra:e.extra.set(t,s)}}))}},{key:"handleSubmit",value:function(e){var t=this;this.props.closeMessage();var s=this.state.docs;s.forEach((function(e,t){!1===e&&s.delete(t)}));var a=Array.from(s.keys()).join(",");j.a.get("".concat("https://test.money-men.kz/api","/newAddPost?documents[]=").concat(a,"&type_sub_transport[]=").concat(this.state.subType),{params:{token:m.a.get("token"),category_id:2,sub_id:1,title:this.state.title,from:this.state.from,to:this.state.to,volume:this.state.volume,net:this.state.net,start_date:this.state.startDate,end_date:this.state.endDate,price_type:this.state.priceType,payment_type:this.state.paymentType,price:this.state.price,type_transport:this.state.type_transport,duration:this.state.duration,distance:this.state.distance,from_string:this.state.fromString,to_string:this.state.toString,height:this.state.height,quantity:this.state.quantity,length:this.state.length,width:this.state.width}}).then((function(e){e.data.success?(t.props.successMessage("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043f\u043e\u0441\u0442"),C.a.push("/cargo/transport")):t.props.errorMessage(e.data.message)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.state.loadMap?Object(a.jsxs)("section",{className:"post_ad__body",children:[this.state.loadingDisDur?Object(a.jsx)(N.a,{}):"",Object(a.jsxs)("div",{className:"products__container container",children:[Object(a.jsxs)("div",{className:"products__content",children:[Object(a.jsxs)("div",{className:"products__title",children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," / ",Object(a.jsx)("a",{href:"/cargo/transportAdd",children:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442"})," / ",Object(a.jsx)("a",{href:"#",className:"gray_font",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044c\u044f\u0432\u043b\u0435\u043d\u0438\u0435"})]}),Object(a.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442"}),Object(a.jsxs)("p",{className:"post_ad__title",children:["\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0435 \u043f\u0443\u043d\u043a\u0442\u044b \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",Object(a.jsx)("br",{}),"\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"]})]}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:"post_ad__adress no_topBorder",children:Object(a.jsx)("div",{className:"post_ad__adress__wrapper",children:Object(a.jsxs)("div",{className:"post_ad__adress__items",children:[Object(a.jsxs)("div",{className:"post_ad__adress__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("div",{className:"post_ad__adress__item__input",children:Object(a.jsx)("input",{className:"post_ad__input",name:"title",value:this.state.title,onChange:this.handleChange,type:"text",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"})})]}),Object(a.jsxs)("div",{className:"post_ad__adress__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u041e\u0442\u043a\u0443\u0434\u0430"}),Object(a.jsxs)("div",{className:"post_ad__adress__item__input",children:[Object(a.jsx)("input",{className:"post_ad__input",ref:this.placeInputRef,name:"from",type:"text",placeholder:""}),Object(a.jsx)("i",{className:"fas fa-map-marker-alt"})]})]}),Object(a.jsxs)("div",{className:"post_ad__adress__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u041a\u0443\u0434\u0430"}),Object(a.jsxs)("div",{className:"post_ad__adress__item__input",children:[Object(a.jsx)("input",{className:"post_ad__input",type:"text",name:"to",ref:this.placeInputRef2,placeholder:""}),Object(a.jsx)("i",{className:"fas fa-map-marker-alt"})]})]}),Object(a.jsxs)("div",{className:"post_ad__adress__select__wrappers",children:[Object(a.jsxs)("div",{className:"post_ad__adress__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0414\u0430\u0442\u0430 \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(a.jsx)("div",{className:"post_ad__adress__item__input",children:Object(a.jsx)("input",{className:"post_ad__input",type:"date",value:this.state.startDate,name:"startDate",onChange:this.handleChange,placeholder:""})})]}),Object(a.jsxs)("div",{className:"post_ad__adress__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(a.jsx)("div",{className:"post_ad__adress__item__input",children:Object(a.jsx)("input",{className:"post_ad__input",type:"date",value:this.state.endDate,name:"endDate",onChange:this.handleChange,placeholder:""})})]})]})]})})}),Object(a.jsxs)("div",{className:"post_ad__chars",children:[Object(a.jsx)("h2",{className:"post_ad__section_title",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"}),Object(a.jsxs)("div",{className:"post_ad__chars__wrapper",children:[Object(a.jsxs)("div",{className:"post_ad__chars__items",children:[Object(a.jsxs)("div",{className:"post_ad__chars__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"}),Object(a.jsx)("input",{className:"post_ad__input",type:"text",placeholder:""})]}),Object(a.jsxs)("div",{className:"post_ad__chars__items__inputs",children:[Object(a.jsxs)("div",{className:"post_ad__chars__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0412\u0435\u0441 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430, \u0442\u043d"}),Object(a.jsx)("input",{className:"post_ad__input",type:"text",value:this.state.net,name:"net",onChange:this.handleChange,placeholder:""})]}),Object(a.jsxs)("div",{className:"post_ad__chars__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u041e\u0431\u044a\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430, \u043c\xb3"}),Object(a.jsx)("input",{className:"post_ad__input",value:this.state.volume,name:"volume",onChange:this.handleChange,type:"text",placeholder:""})]})]})]}),Object(a.jsxs)("div",{className:"post_ad__chars__items",children:[Object(a.jsxs)("div",{className:"post_ad__chars__items__selects",children:[Object(a.jsxs)("div",{className:"post_ad__chars__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"}),Object(a.jsx)("select",{className:"post_ad__input",value:this.state.type_transport,name:"type_transport",onChange:this.handleChange,children:f.f.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name})}))})]}),Object(a.jsxs)("div",{className:"post_ad__price__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0421\u0443\u0431 \u0442\u0438\u043f\u044b"}),Object(a.jsx)("select",{className:"post_ad__input",value:this.state.subType,name:"subType",onChange:this.handleChange,children:this.state.subTypeLists.date.map((function(e){return Object(a.jsx)("option",{value:e.sub_id,children:e.name})}))})]})]}),Object(a.jsxs)("div",{className:"post_ad__chars__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u041a\u043e\u043b-\u0432\u043e"}),Object(a.jsx)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"post_ad__chars__items__inputs__container",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430, \u043c"}),Object(a.jsxs)("div",{className:"post_ad__chars__items__inputs__wrapper",children:[Object(a.jsx)("input",{className:"post_ad__input",value:this.state.width,name:"width",type:"text",onChange:this.handleChange,placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430, \u043c"}),Object(a.jsx)("input",{className:"post_ad__input",value:this.state.length,name:"length",type:"text",onChange:this.handleChange,placeholder:"\u0414\u043b\u0438\u043d\u0430, \u043c"}),Object(a.jsx)("input",{className:"post_ad__input",value:this.state.height,name:"height",type:"text",onChange:this.handleChange,placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430, \u043c"})]})]})]})]})]}),Object(a.jsxs)("div",{className:"post_ad__price",children:[Object(a.jsx)("h2",{className:"post_ad__section_title",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438"}),Object(a.jsxs)("div",{className:"post_ad__price__inputs",children:[Object(a.jsxs)("div",{className:"post_ad__price__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0426\u0435\u043d\u0430"}),Object(a.jsx)("input",{className:"post_ad__input",value:this.state.price,name:"price",onChange:this.handleChange,type:"text",placeholder:""})]}),Object(a.jsxs)("div",{className:"post_ad__price__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(a.jsx)("select",{className:"post_ad__input",value:this.state.priceType,name:"priceType",onChange:this.handleChange,children:Object(a.jsx)("option",{value:"1",children:"\u0422\u0435\u043d\u0433\u0435, KZT"})})]}),Object(a.jsxs)("div",{className:"post_ad__price__item",children:[Object(a.jsx)("p",{className:"post_ad__par",children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b"}),Object(a.jsx)("select",{className:"post_ad__input",value:this.state.paymentType,name:"paymentType",onChange:this.handleChange,children:Object(a.jsx)("option",{value:"1",children:"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0439"})})]})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox"}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u0426\u0435\u043d\u0430 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043d\u0430\u044f"})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox__wrapper",children:[Object(a.jsxs)("div",{className:"post_ad__price__checkbox__items",children:[Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u041d\u0414\u0421"})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u041f\u0440\u0438 \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0435"})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u041d\u0430 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0435"})]})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox__items",children:[Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0446\u0435\u043d\u044b"})]}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox",defaultChecked:!0}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u0422\u043e\u0440\u0433"})]})]})]})]}),Object(a.jsxs)("div",{className:"post_ad__aditional",children:[Object(a.jsx)("h2",{className:"post_ad__section_title",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(a.jsx)("p",{className:"post_ad__aditional__title",children:"\u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(a.jsx)("div",{className:"post_ad__aditional__text",children:Object(a.jsx)("textarea",{rows:5,defaultValue:""})}),Object(a.jsxs)("div",{className:"post_ad__aditional__checkbox__wrapper",children:[Object(a.jsxs)("div",{className:"post_ad__aditional__checkbox__items",children:[Object(a.jsx)("h3",{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}),b.b.map((function(t){return Object(a.jsx)(x.a,{name:t.name,value:t.value,checked:e.state.docs.get(t.value),handleCheckBox:e.handleCheckBox})}))]}),Object(a.jsxs)("div",{className:"post_ad__aditional__checkbox__items",children:[Object(a.jsx)("h3",{children:"\u041f\u043e\u0433\u0440\u0443\u0437\u043a\u0430"}),b.e.map((function(t){return Object(a.jsx)(x.a,{name:t.name,value:t.value,checked:e.state.pogruzki.get(t.value),handleCheckBox:e.handleCheckBox})}))]}),Object(a.jsxs)("div",{className:"post_ad__aditional__checkbox__items",children:[Object(a.jsx)("h3",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f "}),b.a.map((function(t){return Object(a.jsx)(x.a,{name:t.name,value:t.value,checked:e.state.condition.get(t.value),handleCheckBox:e.handleCheckBox})})),Object(a.jsx)("h3",{class:"margin",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"}),b.c.map((function(t){return Object(a.jsx)(x.a,{name:t.name,value:t.value,checked:e.state.extra.get(t.value),handleCheckBox:e.handleCheckBox})}))]})]})]}),Object(a.jsx)(y.a,{}),Object(a.jsxs)("div",{className:"post_ad__btns",children:[Object(a.jsx)("button",{className:"btn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(a.jsxs)("div",{className:"post_ad__price__checkbox",children:[Object(a.jsx)("input",{type:"checkbox"}),Object(a.jsx)("p",{className:"post_ad__par",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u0442\u043e\u043f"})]})]})]})]}),Object(a.jsx)("div",{className:"products__aside"})]})]}):Object(a.jsx)(N.a,{})})}}]),s}(p.a.Component);t.default=Object(v.b)(null,(function(e){return{successMessage:function(t){e(Object(O.c)(t))},errorMessage:function(t){e(Object(O.b)(t))},closeMessage:function(){e(O.a)}}}))(S)}}]);