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
          console.log(res); // cookie.set('balance', res.data.amount)
        });
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
          lineNumber: 260,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 5
      }, this);

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token') && this.props.authenticatingUser !== 'done' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 76
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWRlVXAiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJjbGljayIsImZhZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJoaWRlIiwiZSIsInRhcmdldCIsImFsdCIsImF0dHIiLCJodG1sIiwic2xpZGVUb2dnbGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJUb2tlbiIsImNvb2tpZSIsImdldCIsInByb3BzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIl9faHRtbCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiQXBwIiwibWFrZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZ2dlZEluIiwidXNlcnNSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtB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QTtBQUFBO0FBQUE7QUFBQSxrQkFIRCxlQUlDLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUhELHVCQURGO0FBY0Q7Ozs7RUF4UGlCRywrQzs7QUEyUHBCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUgscURBQU47QUFBQSxDQUFsQjs7QUFDQSxJQUFNSSxPQUFPLEdBQUdDLHlFQUFhLENBQUNGLFNBQUQsQ0FBN0I7O0FBQ0EsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0MsWUFBUSxFQUFFRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFFBREc7QUFFaENQLHNCQUFrQixFQUFFTSxLQUFLLENBQUNFLFlBQU4sQ0FBbUJSO0FBRlAsR0FBTDtBQUFBLENBQTdCOztBQUtBLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDdEN2QixvQkFBZ0IsRUFBRTtBQUFBLGFBQU11QixRQUFRLENBQUN2QixtRkFBZ0IsRUFBakIsQ0FBZDtBQUFBO0FBRG9CLEdBQUw7QUFBQSxDQUFuQzs7QUFHQW5DLEtBQUssR0FBR29DLDREQUFPLENBQUNpQixlQUFELEVBQWlCSSxrQkFBakIsQ0FBUCxDQUE0Q3pELEtBQTVDLENBQVI7QUFFZSxvRUFBQW1ELE9BQU8sQ0FBQ1EsU0FBUixDQUFrQjNELEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hOGY3N2E4ZTA2NWJlMDJkZDM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYvTmF2J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXInXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCB7YXV0aH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSAnLi4vY3VzdG9tLWhvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQge2ZldGNoQ3VycmVudFVzZXJ9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcbmltcG9ydCB7c2F2ZVRvRGF0YWJhc2V9IGZyb20gJy4uL2ZiZGF0YWJhc2UvZGF0YWJhc2UnXHJcbi8vIGltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2VDb21wb25lbnRzL0ZpcmViYXNlTG9naW4nO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9maXJlYmFzZWNvbmZpZyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIGNvbnN0IFt1c2VySWQsIHVzZXJzLCBjb25uZWN0XSA9IHVzZUF1dGgoKTtcclxuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc2V0ID4gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoXCIuY29udGVudFwiKVxyXG4gICAgICAgICAgICAgIC5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgICAgICQoXCIuc2V0ID4gYSBpXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLnNldCA+IGEgaVwiKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgLmZpbmQoXCJpXCIpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNldCA+IGFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuY29udGVudFwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoXCIuY29udGVudFwiKVxyXG4gICAgICAgICAgICAgIC5zbGlkZURvd24oMjAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmhlYWRlcl9fdG9wX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd25fX2l0ZW1zJykuZmFkZVRvZ2dsZSgyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuZ29vZHNfX25hdl9fb3BlbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLmdvb2RzX19uYXYuZ29vZHMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcuZ29vZHNfX25hdi5lcXVpcG1lbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5lcXVpcG1lbnRfX29wZW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5nb29kc19fbmF2LmVxdWlwbWVudCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICQoJy5nb29kc19fbmF2Lmdvb2RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuY2FiaW5ldF9jb25maWdfb3BlbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLmdvb2RzX19uYXYuY29uZmlnJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuc2hvd19udW0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcuaGlkZGVuX251bScpLnNob3coKTtcclxuICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuZmlsdGVyX19pdGVtX19mb3JtIGEnKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5vcGVuX2NhbGNfbW9kYWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcubW9kYWxfX2NhbGN1bGF0b3InKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsLXdpbmRvdy1jYWxjJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5jbG9zZV9fY2FsY19fbW9kYWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcubW9kYWxfX2NhbGN1bGF0b3InKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsLXdpbmRvdy1jYWxjJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgJCgnI2NhcnVzZWwtaXRlbTIgaW1nJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChlLnRhcmdldC5hbHQgPT09ICdzbWFsbC1zdG9yYWdlLWl0ZW0tMScpIHtcclxuICAgICAgICAgICAgJChcIiNjYXJ1c2VsLWl0ZW0xXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvaW1nL3N0b3JhZ2Uvc3RvcmFnZS1uYXYtaXRlbS9zdG9yZS1pdGVtMS5wbmdcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2NhcnVzZWwtaXRlbTFcIikuYXR0cihcInNyY1wiLCBcImFzc2V0cy9pbWcvc3RvcmFnZS9zdG9yYWdlMi5wbmdcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICAgJCgnLnBpbmsnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcubW9kYWxfX3VwZ3JhZGVfdG9fdG9wJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubW9kYWxfX3VwZ3JhZGVfdG9fdG9wX19pbm5lciBpJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLm1vZGFsX191cGdyYWRlX3RvX3RvcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnI2ZpcnN0X19zdGVwX19kb25lJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKCcjZmlyc3RfX3N0ZXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcjc2Vjb25kX19zdGVwJykuc2hvdygpO1xyXG4gICAgICAgICAgJCgnLmdyYXBoaWNfX2NpcmNsZTpudGgtY2hpbGQoMyknKS5hZGRDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICAgJCgnLmhsOm50aC1jaGlsZCg0KScpLmFkZENsYXNzKCdibHVlJyk7XHJcbiAgICAgICAgICAkKCcjc2Vjb25kX3N0ZXBfX2Rlc2MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTEnKS5yZW1vdmVDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUyJykuYWRkQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAgICQoJy5ibHVlX3NwYW5fdGl0bGUnKS5odG1sKCfQkiDQoNCQ0JHQntCi0JU6INCT0KDQo9CXINCSINCf0KPQotCYJylcclxuICAgICAgICAgICQoJy5yZXF1ZXN0X2l0ZW1fX3NlY3Rpb25fX2l0ZW0uZW5kJykuaGlkZSgpXHJcbiAgICAgICAgICAkKCcjb3Blbl9kcml2ZXJfbW9kYWwnKS5oaWRlKClcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICAkKCcjc2Vjb25kX19zdGVwX19kb25lJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLmhpZGUoKVxyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfc3BhbicpLmh0bWwoJ9CS0YDQtdC80Y8g0LIg0L/Rg9GC0Lg6JylcclxuICAgICAgICAgICQoJyNyZXF1ZXN0X190aW1lJykuaHRtbCgnOSDRhyAzNSDQvNC40L0nKVxyXG4gICAgICAgICAgJCgnI3JlcXVlc3RfYnRuJykuYWRkQ2xhc3MoJ2F2ZXJhZ2UnKVxyXG4gICAgICAgICAgJCgnLmdyYXBoaWNfX2NpcmNsZScpLnJlbW92ZUNsYXNzKCdibHVlJylcclxuICAgICAgICAgICQoJy5ncmFwaGljX19jaXJjbGUnKS5hZGRDbGFzcygnZ3JlZW4nKVxyXG4gICAgICAgICAgJCgnLmhsJykuYWRkQ2xhc3MoJ2dyZWVuJylcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMScpLmFkZENsYXNzKCdncmVlbicpO1xyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUyJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMicpLmFkZENsYXNzKCdncmVlbicpO1xyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUzJykuYWRkQ2xhc3MoJ2dyZWVuJyk7XHJcbiAgICAgICAgICAkKCcuYmx1ZV9zcGFuX3RpdGxlJykuaHRtbCgn0JPQoNCj0Jcg0JTQntCh0KLQkNCS0JvQldCdJylcclxuICAgICAgICAgICQoJy5ibHVlX3NwYW5fdGl0bGUnKS5hZGRDbGFzcygnZ3JlZW4nKVxyXG4gICAgICAgICAgJCgnI3JlcXVlc3RfZGVzY19lbmQnKS5odG1sKCfQn9C+0LfQtNGA0LDQstC70Y/QtdC8ISDQktGLINC00L7RgdGC0LDQstC40LvQuCDQs9GA0YPQtyEgPGJyPiDQodCy0Y/QttC40YLQtdGB0Ywg0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgPGJyPiDQtNC70Y8g0L/QvtGB0LvQtdC00YPRjtGJ0LjRhSDQtNC10LnRgdGC0LLQuNC5LicpXHJcbiAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICAgJCgnI29wZW5fZHJpdmVyX21vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwuZHJpdmVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI29wZW5fbWFwX21vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwubWFwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLm9wZW5fcmVqZWN0aW9uX21vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwucmVqZWN0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI29wZW5fZWRpdF9waG90bycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsLmVkaXRfcGhvdG8nKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjY2xvc2VfZWRpdF9waG90bycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5lZGl0X3Bob3RvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnI2Nob29zZV9kcml2ZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnI29wZW5fZHJpdmVyX21vZGFsJykuaHRtbCgn0JjQt9C80LXQvdC40YLRjCDQstC+0LTQuNGC0LXQu9GPJylcclxuICAgICAgICAgICQoJy5yZXF1ZXN0X2l0ZW1fX3NlY3Rpb25fX2lubmVyJykuaGlkZSgpXHJcbiAgICAgICAgICAkKCcucmVxdWVzdF9pdGVtX19zZWN0aW9uX19kcml2ZXInKS5zaG93KClcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5kcml2ZXJfbW9kYWxfX2J0bnMgYScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmRyaXZlcl90aW1lcycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI2RyaXZlcl90eXBlMicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcjInKS5zaG93KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjZHJpdmVyX3R5cGUxJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWxfX3dyYXBwZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyMicpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgJCgnI3JlZ2lzdGVyX3R5cGUyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb21wYW55X19yZWdpc3RlcicpLmhpZGUoKTtcclxuICAgICAgICAgICQoJyNyZWdpc3Rlcl90aXRsZScpLmh0bWwoJ9Ca0L7QvdGC0LDQutC90YvQtSDQtNCw0L3QvdGL0LUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI3JlZ2lzdGVyX3R5cGUxJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5jb21wYW55X19yZWdpc3RlcicpLnNob3coKTtcclxuICAgICAgICAgICQoJyNyZWdpc3Rlcl90aXRsZScpLmh0bWwoJ9Ca0L7QvdGC0LDQutC90L7QtSDQu9C40YbQvicpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgICAgJCgnLm1vYmlsZV9iYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xvY2snKTtcclxuICAgICAgfSlcclxuICAgICAgJCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLmZpbmQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXInKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9fdGV4dCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTIwKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsICdydScpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyVG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpXHJcbiAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGguY3VycmVudFVzZXIoKSlcclxuICAgICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRQcm9maWxlP3Rva2VuPSR7dXNlclRva2VufWApXHJcbiAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAvLyAgICAgICB0aGlzLnByb3BzLmZldGNoQ3VycmVudFVzZXIoe3R5cGU6J1NFVF9DVVJSRU5UX1VTRVInLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgIC8vICAgICB9ZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKSBcclxuICAgICAgXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hDdXJyZW50VXNlcihjb25uZWN0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih1c2VyVG9rZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEJhbGFuY2U/dG9rZW49JHtjb29raWUuZ2V0KCd0b2tlbicpfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgLy8gY29va2llLnNldCgnYmFsYW5jZScsIHJlcy5kYXRhLmFtb3VudClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUFwbEtpUDlBT0x1VWJXZEg2NTVBcEZNbDFubmZYd2N3ayZsaWJyYXJpZXM9cGxhY2VzYCB9fSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgY29uc3QgeyBDb21wb25lbnQscGFnZVByb3BzLHN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHsvKiB7Y29va2llLmdldCgndG9rZW4nKSAmJiB0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciAhPT0gJ2RvbmUnICYmIDxGaXJlYmFzZUxvZ2luIC8+fSAqL31cclxuICAgICAgeyhjb29raWUuZ2V0KCd0b2tlbicpICYmIHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyICE9PSAnZG9uZScpID8gPExvYWRpbmdTcGlubmVyIC8+IDpcclxuICAgICAgIDw+IFxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgICB7LyogPEZpcmViYXNlIC8+ICovfVxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBsb2dnZWRJbjogc3RhdGUudXNlcnNSZWR1Y2VyLmxvZ2dlZEluLFxyXG4gIGF1dGhlbnRpY2F0aW5nVXNlcjogc3RhdGUudXNlcnNSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlclxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgZmV0Y2hDdXJyZW50VXNlcjogKCkgPT4gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKSxcclxufSk7XHJcbk15QXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShNeUFwcClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==