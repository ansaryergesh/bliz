webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/Nav/Nav */ "./components/shared/Nav/Nav.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");
/* harmony import */ var _components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/shared/others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _custom_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../custom-hooks/useAuth */ "./custom-hooks/useAuth.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _fbdatabase_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../fbdatabase/database */ "./fbdatabase/database.js");
/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../firebaseconfig */ "./firebaseconfig.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_24__);








var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










 // import {auth} from '../firebase'





 // import FirebaseLogin from '../components/firebaseComponents/FirebaseLogin';





if (!firebase__WEBPACK_IMPORTED_MODULE_20__["default"].apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_20__["default"].initializeApp(_firebaseconfig__WEBPACK_IMPORTED_MODULE_22__["config"]);
}

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // const [userId, users, connect] = useAuth();
      jquery__WEBPACK_IMPORTED_MODULE_23___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(".set > a").on("click", function (event) {
          event.preventDefault();

          if (jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).hasClass("active")) {
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).siblings(".content").slideUp(200);
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(".set > a i").removeClass("active");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(".set > a i").removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).find("i").addClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(".set > a").removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).addClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(".content").slideUp(200);
            jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).siblings(".content").slideDown(200);
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.header__top__item').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).find('.dropdown__items').fadeToggle(200);
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav__opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav.goods').toggleClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav.equipment').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.equipment__opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav.equipment').toggleClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav.goods').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.cabinet_config_opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.goods__nav.config').toggleClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.show_num').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.hidden_num').show();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.filter__item__form a').click(function (event) {
          event.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).siblings().removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.open_calc_modal').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.modal__calculator').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').addClass('modal-window-calc');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.close__calc__modal').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.modal__calculator').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').removeClass('modal-window-calc');
        }); // 

        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#carusel-item2 img').click(function (e) {
          if (e.target.alt === 'small-storage-item-1') {
            jquery__WEBPACK_IMPORTED_MODULE_23___default()("#carusel-item1").attr("src", "assets/img/storage/storage-nav-item/store-item1.png");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_23___default()("#carusel-item1").attr("src", "assets/img/storage/storage2.png");
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.pink').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.modal__upgrade_to_top').addClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.modal__upgrade_to_top__inner i').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.modal__upgrade_to_top').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#first__step__done').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#first__step').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#second__step').show();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.graphic__circle:nth-child(3)').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.hl:nth-child(4)').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#second_step__desc').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title1').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title2').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.blue_span_title').html('В РАБОТЕ: ГРУЗ В ПУТИ');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.request_item__section__item.end').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#open_driver_modal').hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#second__step__done').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_span').html('Время в пути:');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#request__time').html('9 ч 35 мин');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#request_btn').addClass('average');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.graphic__circle').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.graphic__circle').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.hl').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title1').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title2').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title2').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#requset_title3').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.blue_span_title').html('ГРУЗ ДОСТАВЛЕН');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.blue_span_title').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#request_desc_end').html('Поздравляем! Вы доставили груз! <br> Свяжитесь с заказчиком <br> для последующих действий.');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#open_driver_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal.driver').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#open_map_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal.map').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.open_rejection_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal.rejection').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#open_edit_photo').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal.edit_photo').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#close_edit_photo').click(function (e) {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal.edit_photo').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#choose_driver').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#open_driver_modal').html('Изменить водителя');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.request_item__section__inner').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.request_item__section__driver').show();
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal__btns a').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_times').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#driver_type2').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal__wrapper').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal__wrapper2').show();
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#driver_type1').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal__wrapper').show();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.driver_modal__wrapper2').hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#register_type2').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.company__register').hide();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#register_title').html('Контакные данные');
        });
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('#register_type1').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.company__register').show();
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('#register_title').html('Контакное лицо');
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_23___default()('.mobile_bar').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).toggleClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('.header__top__mobile').slideToggle();
        jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').toggleClass('lock');
      });
      jquery__WEBPACK_IMPORTED_MODULE_23___default()('.header__top__mobile__nav__item').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).siblings().find('.header__top__mobile__nav__item__inner').slideUp();
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).siblings().find('.header__top__mobile__nav__item__text').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).find('.header__top__mobile__nav__item__inner').slideToggle();
        jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).find('.header__top__mobile__nav__item__text').toggleClass('active');
      });
      jquery__WEBPACK_IMPORTED_MODULE_23___default()(window).scroll(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).scrollTop() > 120) {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.header__top').addClass('fixed');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_23___default()('.header__top').removeClass('fixed');
        }
      });

      if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'ru');
      }

      var userToken = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token');

      if (js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token')) {
        // console.log(auth.currentUser())
        // axios.get(`${process.env.BASE_URL}/getProfile?token=${userToken}`)
        // .then(response => {
        //     if(response.data.success) {
        //       this.props.fetchCurrentUser({type:'SET_CURRENT_USER', payload: response.data});
        //     }else {
        //       cookie.remove('token');
        //     }
        // })
        // .catch(err => {
        //   console.log(err)
        //   }
        // ) 
        this.props.fetchCurrentUser(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"]);
      }

      if (userToken !== undefined) {
        axios__WEBPACK_IMPORTED_MODULE_24___default.a.get("".concat("https://test.money-men.kz/api", "/getBalance?token=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token'))).then(function (res) {
          console.log(res.data.amount);
          js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('balance', res.data.amount); // cookie.set('balance', res.data.amount)
        });
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('balance');
      }
    }
  }, {
    key: "render",
    value: function render() {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          dangerouslySetInnerHTML: {
            __html: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAplKiP9AOLuUbWdH655ApFMl1nnfXwcwk&libraries=places"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 5
      }, this);

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token') && this.props.authenticatingUser !== 'done' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 76
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 9
          }, this)]
        }, void 0, true)
      }, void 0, false);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

var makeStore = function makeStore() {
  return _store_store__WEBPACK_IMPORTED_MODULE_13__["default"];
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__["createWrapper"])(makeStore);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.usersReducer.loggedIn,
    authenticatingUser: state.usersReducer.authenticatingUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_18__["fetchCurrentUser"])());
    }
  };
};

MyApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(MyApp);
/* harmony default export */ __webpack_exports__["default"] = (_c = wrapper.withRedux(MyApp));

var _c;

$RefreshReg$(_c, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWRlVXAiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJjbGljayIsImZhZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJoaWRlIiwiZSIsInRhcmdldCIsImFsdCIsImF0dHIiLCJodG1sIiwic2xpZGVUb2dnbGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJUb2tlbiIsImNvb2tpZSIsImdldCIsInByb3BzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbW91bnQiLCJzZXQiLCJyZW1vdmUiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImF1dGhlbnRpY2F0aW5nVXNlciIsIkFwcCIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2dnZWRJbiIsInVzZXJzUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztB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QXVCLEtBQUtDLEtBQUwsQ0FBV2tCLGtCQUFYLEtBQWtDLE1BQTFELGdCQUFvRSxxRUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFwRSxnQkFDQTtBQUFBLGtDQUNDLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFHQyxxRUFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEQsZUFJQyxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpEO0FBQUE7QUFIRCx1QkFERjtBQWNEOzs7O0VBM1BpQkcsK0M7O0FBOFBwQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ILHFEQUFOO0FBQUEsQ0FBbEI7O0FBQ0EsSUFBTUksT0FBTyxHQUFHQyx5RUFBYSxDQUFDRixTQUFELENBQTdCOztBQUNBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENDLFlBQVEsRUFBRUQsS0FBSyxDQUFDRSxZQUFOLENBQW1CRCxRQURHO0FBRWhDUCxzQkFBa0IsRUFBRU0sS0FBSyxDQUFDRSxZQUFOLENBQW1CUjtBQUZQLEdBQUw7QUFBQSxDQUE3Qjs7QUFLQSxJQUFNUyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDM0Isb0JBQWdCLEVBQUU7QUFBQSxhQUFNMkIsUUFBUSxDQUFDM0IsbUZBQWdCLEVBQWpCLENBQWQ7QUFBQTtBQURvQixHQUFMO0FBQUEsQ0FBbkM7O0FBR0FuQyxLQUFLLEdBQUdvQyw0REFBTyxDQUFDcUIsZUFBRCxFQUFpQkksa0JBQWpCLENBQVAsQ0FBNEM3RCxLQUE1QyxDQUFSO0FBRWUsb0VBQUF1RCxPQUFPLENBQUNRLFNBQVIsQ0FBa0IvRCxLQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWRmZDdhYWZmNzI0ZWU0ZWQ1MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyJ1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBpbXBvcnQge2F1dGh9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gJy4uL2N1c3RvbS1ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHtmZXRjaEN1cnJlbnRVc2VyfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xyXG5pbXBvcnQge3NhdmVUb0RhdGFiYXNlfSBmcm9tICcuLi9mYmRhdGFiYXNlL2RhdGFiYXNlJ1xyXG4vLyBpbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlQ29tcG9uZW50cy9GaXJlYmFzZUxvZ2luJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vZmlyZWJhc2Vjb25maWcnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBjb25zdCBbdXNlcklkLCB1c2VycywgY29ubmVjdF0gPSB1c2VBdXRoKCk7XHJcbiAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNldCA+IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiLmNvbnRlbnRcIilcclxuICAgICAgICAgICAgICAuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgICAgICAkKFwiLnNldCA+IGEgaVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5zZXQgPiBhIGlcIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgIC5maW5kKFwiaVwiKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5zZXQgPiBhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRlbnRcIikuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiLmNvbnRlbnRcIilcclxuICAgICAgICAgICAgICAuc2xpZGVEb3duKDIwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5oZWFkZXJfX3RvcF9faXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duX19pdGVtcycpLmZhZGVUb2dnbGUoMjAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmdvb2RzX19uYXZfX29wZW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5nb29kc19fbmF2Lmdvb2RzJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnLmdvb2RzX19uYXYuZXF1aXBtZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuZXF1aXBtZW50X19vcGVuZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcuZ29vZHNfX25hdi5lcXVpcG1lbnQnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcuZ29vZHNfX25hdi5nb29kcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmNhYmluZXRfY29uZmlnX29wZW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5nb29kc19fbmF2LmNvbmZpZycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLnNob3dfbnVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLmhpZGRlbl9udW0nKS5zaG93KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmZpbHRlcl9faXRlbV9fZm9ybSBhJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcub3Blbl9jYWxjX21vZGFsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLm1vZGFsX19jYWxjdWxhdG9yJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbC13aW5kb3ctY2FsYycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuY2xvc2VfX2NhbGNfX21vZGFsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLm1vZGFsX19jYWxjdWxhdG9yJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbC13aW5kb3ctY2FsYycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgICQoJyNjYXJ1c2VsLWl0ZW0yIGltZycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuYWx0ID09PSAnc21hbGwtc3RvcmFnZS1pdGVtLTEnKSB7XHJcbiAgICAgICAgICAgICQoXCIjY2FydXNlbC1pdGVtMVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ltZy9zdG9yYWdlL3N0b3JhZ2UtbmF2LWl0ZW0vc3RvcmUtaXRlbTEucG5nXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNjYXJ1c2VsLWl0ZW0xXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvaW1nL3N0b3JhZ2Uvc3RvcmFnZTIucG5nXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5waW5rJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLm1vZGFsX191cGdyYWRlX3RvX3RvcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1vZGFsX191cGdyYWRlX3RvX3RvcF9faW5uZXIgaScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5tb2RhbF9fdXBncmFkZV90b190b3AnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJyNmaXJzdF9fc3RlcF9fZG9uZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCgnI2ZpcnN0X19zdGVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI3NlY29uZF9fc3RlcCcpLnNob3coKTtcclxuICAgICAgICAgICQoJy5ncmFwaGljX19jaXJjbGU6bnRoLWNoaWxkKDMpJykuYWRkQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAgICQoJy5obDpudGgtY2hpbGQoNCknKS5hZGRDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICAgJCgnI3NlY29uZF9zdGVwX19kZXNjJykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUxJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMicpLmFkZENsYXNzKCdibHVlJyk7XHJcbiAgICAgICAgICAkKCcuYmx1ZV9zcGFuX3RpdGxlJykuaHRtbCgn0JIg0KDQkNCR0J7QotCVOiDQk9Cg0KPQlyDQkiDQn9Cj0KLQmCcpXHJcbiAgICAgICAgICAkKCcucmVxdWVzdF9pdGVtX19zZWN0aW9uX19pdGVtLmVuZCcpLmhpZGUoKVxyXG4gICAgICAgICAgJCgnI29wZW5fZHJpdmVyX21vZGFsJykuaGlkZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICAgJCgnI3NlY29uZF9fc3RlcF9fZG9uZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3NwYW4nKS5odG1sKCfQktGA0LXQvNGPINCyINC/0YPRgtC4OicpXHJcbiAgICAgICAgICAkKCcjcmVxdWVzdF9fdGltZScpLmh0bWwoJzkg0YcgMzUg0LzQuNC9JylcclxuICAgICAgICAgICQoJyNyZXF1ZXN0X2J0bicpLmFkZENsYXNzKCdhdmVyYWdlJylcclxuICAgICAgICAgICQoJy5ncmFwaGljX19jaXJjbGUnKS5yZW1vdmVDbGFzcygnYmx1ZScpXHJcbiAgICAgICAgICAkKCcuZ3JhcGhpY19fY2lyY2xlJykuYWRkQ2xhc3MoJ2dyZWVuJylcclxuICAgICAgICAgICQoJy5obCcpLmFkZENsYXNzKCdncmVlbicpXHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTEnKS5hZGRDbGFzcygnZ3JlZW4nKTtcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMicpLnJlbW92ZUNsYXNzKCdibHVlJyk7XHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTInKS5hZGRDbGFzcygnZ3JlZW4nKTtcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMycpLmFkZENsYXNzKCdncmVlbicpO1xyXG4gICAgICAgICAgJCgnLmJsdWVfc3Bhbl90aXRsZScpLmh0bWwoJ9CT0KDQo9CXINCU0J7QodCi0JDQktCb0JXQnScpXHJcbiAgICAgICAgICAkKCcuYmx1ZV9zcGFuX3RpdGxlJykuYWRkQ2xhc3MoJ2dyZWVuJylcclxuICAgICAgICAgICQoJyNyZXF1ZXN0X2Rlc2NfZW5kJykuaHRtbCgn0J/QvtC30LTRgNCw0LLQu9GP0LXQvCEg0JLRiyDQtNC+0YHRgtCw0LLQuNC70Lgg0LPRgNGD0LchIDxicj4g0KHQstGP0LbQuNGC0LXRgdGMINGBINC30LDQutCw0LfRh9C40LrQvtC8IDxicj4g0LTQu9GPINC/0L7RgdC70LXQtNGD0Y7RidC40YUg0LTQtdC50YHRgtCy0LjQuS4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgICQoJyNvcGVuX2RyaXZlcl9tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsLmRyaXZlcicpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNvcGVuX21hcF9tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsLm1hcCcpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5vcGVuX3JlamVjdGlvbl9tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsLnJlamVjdGlvbicpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNvcGVuX2VkaXRfcGhvdG8nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5lZGl0X3Bob3RvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI2Nsb3NlX2VkaXRfcGhvdG8nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwuZWRpdF9waG90bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJyNjaG9vc2VfZHJpdmVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJyNvcGVuX2RyaXZlcl9tb2RhbCcpLmh0bWwoJ9CY0LfQvNC10L3QuNGC0Ywg0LLQvtC00LjRgtC10LvRjycpXHJcbiAgICAgICAgICAkKCcucmVxdWVzdF9pdGVtX19zZWN0aW9uX19pbm5lcicpLmhpZGUoKVxyXG4gICAgICAgICAgJCgnLnJlcXVlc3RfaXRlbV9fc2VjdGlvbl9fZHJpdmVyJykuc2hvdygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsX19idG5zIGEnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5kcml2ZXJfdGltZXMnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNkcml2ZXJfdHlwZTInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcicpLmhpZGUoKTtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWxfX3dyYXBwZXIyJykuc2hvdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI2RyaXZlcl90eXBlMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyJykuc2hvdygpO1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcjInKS5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICQoJyNyZWdpc3Rlcl90eXBlMicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29tcGFueV9fcmVnaXN0ZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcjcmVnaXN0ZXJfdGl0bGUnKS5odG1sKCfQmtC+0L3RgtCw0LrQvdGL0LUg0LTQsNC90L3Ri9C1JylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNyZWdpc3Rlcl90eXBlMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuY29tcGFueV9fcmVnaXN0ZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAkKCcjcmVnaXN0ZXJfdGl0bGUnKS5odG1sKCfQmtC+0L3RgtCw0LrQvdC+0LUg0LvQuNGG0L4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgXHJcbiAgICAgICQoJy5tb2JpbGVfYmFyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuaGVhZGVyX190b3BfX21vYmlsZScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsb2NrJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgICQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lcicpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuZmluZCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9fdGV4dCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX3RleHQnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH0pXHJcbiAgICBcclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEyMCl7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX3RvcCcpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICQoJy5oZWFkZXJfX3RvcCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCAncnUnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlclRva2VuID0gY29va2llLmdldCgndG9rZW4nKVxyXG4gICAgaWYoY29va2llLmdldCgndG9rZW4nKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhdXRoLmN1cnJlbnRVc2VyKCkpXHJcbiAgICAgIC8vIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0UHJvZmlsZT90b2tlbj0ke3VzZXJUb2tlbn1gKVxyXG4gICAgICAvLyAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIC8vICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgLy8gICAgICAgdGhpcy5wcm9wcy5mZXRjaEN1cnJlbnRVc2VyKHt0eXBlOidTRVRfQ1VSUkVOVF9VU0VSJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pO1xyXG4gICAgICAvLyAgICAgfWVsc2Uge1xyXG4gICAgICAvLyAgICAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICkgXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnByb3BzLmZldGNoQ3VycmVudFVzZXIoY29ubmVjdClcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYodXNlclRva2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRCYWxhbmNlP3Rva2VuPSR7Y29va2llLmdldCgndG9rZW4nKX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmFtb3VudClcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ2JhbGFuY2UnLCByZXMuZGF0YS5hbW91bnQpXHJcbiAgICAgICAgICAvLyBjb29raWUuc2V0KCdiYWxhbmNlJywgcmVzLmRhdGEuYW1vdW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ2JhbGFuY2UnKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUFwbEtpUDlBT0x1VWJXZEg2NTVBcEZNbDFubmZYd2N3ayZsaWJyYXJpZXM9cGxhY2VzYCB9fSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgY29uc3QgeyBDb21wb25lbnQscGFnZVByb3BzLHN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHsvKiB7Y29va2llLmdldCgndG9rZW4nKSAmJiB0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciAhPT0gJ2RvbmUnICYmIDxGaXJlYmFzZUxvZ2luIC8+fSAqL31cclxuICAgICAgeyhjb29raWUuZ2V0KCd0b2tlbicpICYmIHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyICE9PSAnZG9uZScpID8gPExvYWRpbmdTcGlubmVyIC8+IDpcclxuICAgICAgIDw+IFxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgICB7LyogPEZpcmViYXNlIC8+ICovfVxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBsb2dnZWRJbjogc3RhdGUudXNlcnNSZWR1Y2VyLmxvZ2dlZEluLFxyXG4gIGF1dGhlbnRpY2F0aW5nVXNlcjogc3RhdGUudXNlcnNSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlclxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgZmV0Y2hDdXJyZW50VXNlcjogKCkgPT4gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKSxcclxufSk7XHJcbk15QXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShNeUFwcClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==