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
          console.log(res.data.amount); // cookie.set('balance', res.data.amount)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWRlVXAiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJjbGljayIsImZhZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJoaWRlIiwiZSIsInRhcmdldCIsImFsdCIsImF0dHIiLCJodG1sIiwic2xpZGVUb2dnbGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJUb2tlbiIsImNvb2tpZSIsImdldCIsInByb3BzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbW91bnQiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImF1dGhlbnRpY2F0aW5nVXNlciIsIkFwcCIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2dnZWRJbiIsInVzZXJzUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtB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QUFBLGtCQURELGVBR0MscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBSUMscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRDtBQUFBO0FBSEQsdUJBREY7QUFjRDs7OztFQXhQaUJHLCtDOztBQTJQcEIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNSCxxREFBTjtBQUFBLENBQWxCOztBQUNBLElBQU1JLE9BQU8sR0FBR0MseUVBQWEsQ0FBQ0YsU0FBRCxDQUE3Qjs7QUFDQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDQyxZQUFRLEVBQUVELEtBQUssQ0FBQ0UsWUFBTixDQUFtQkQsUUFERztBQUVoQ1Asc0JBQWtCLEVBQUVNLEtBQUssQ0FBQ0UsWUFBTixDQUFtQlI7QUFGUCxHQUFMO0FBQUEsQ0FBN0I7O0FBS0EsSUFBTVMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxRQUFRO0FBQUEsU0FBSztBQUN0Q3pCLG9CQUFnQixFQUFFO0FBQUEsYUFBTXlCLFFBQVEsQ0FBQ3pCLG1GQUFnQixFQUFqQixDQUFkO0FBQUE7QUFEb0IsR0FBTDtBQUFBLENBQW5DOztBQUdBbkMsS0FBSyxHQUFHb0MsNERBQU8sQ0FBQ21CLGVBQUQsRUFBaUJJLGtCQUFqQixDQUFQLENBQTRDM0QsS0FBNUMsQ0FBUjtBQUVlLG9FQUFBcUQsT0FBTyxDQUFDUSxTQUFSLENBQWtCN0QsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI1NTg3NDJjMTE2NDNmMzQ3MzIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdi9OYXYnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0Zvb3RlcidcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IHthdXRofSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tICcuLi9jdXN0b20taG9va3MvdXNlQXV0aCc7XHJcbmltcG9ydCB7ZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuaW1wb3J0IHtzYXZlVG9EYXRhYmFzZX0gZnJvbSAnLi4vZmJkYXRhYmFzZS9kYXRhYmFzZSdcclxuLy8gaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZUNvbXBvbmVudHMvRmlyZWJhc2VMb2dpbic7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2ZpcmViYXNlY29uZmlnJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gY29uc3QgW3VzZXJJZCwgdXNlcnMsIGNvbm5lY3RdID0gdXNlQXV0aCgpO1xyXG4gICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zZXQgPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi5jb250ZW50XCIpXHJcbiAgICAgICAgICAgICAgLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgJChcIi5zZXQgPiBhIGlcIilcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuc2V0ID4gYSBpXCIpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAuZmluZChcImlcIilcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2V0ID4gYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcIi5jb250ZW50XCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi5jb250ZW50XCIpXHJcbiAgICAgICAgICAgICAgLnNsaWRlRG93bigyMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcuaGVhZGVyX190b3BfX2l0ZW0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bl9faXRlbXMnKS5mYWRlVG9nZ2xlKDIwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5nb29kc19fbmF2X19vcGVuZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcuZ29vZHNfX25hdi5nb29kcycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICQoJy5nb29kc19fbmF2LmVxdWlwbWVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmVxdWlwbWVudF9fb3BlbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCgnLmdvb2RzX19uYXYuZXF1aXBtZW50JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnLmdvb2RzX19uYXYuZ29vZHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5jYWJpbmV0X2NvbmZpZ19vcGVuZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcuZ29vZHNfX25hdi5jb25maWcnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5zaG93X251bScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5oaWRkZW5fbnVtJykuc2hvdygpO1xyXG4gICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICQoJy5maWx0ZXJfX2l0ZW1fX2Zvcm0gYScpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLm9wZW5fY2FsY19tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5tb2RhbF9fY2FsY3VsYXRvcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwtd2luZG93LWNhbGMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgJCgnLmNsb3NlX19jYWxjX19tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5tb2RhbF9fY2FsY3VsYXRvcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwtd2luZG93LWNhbGMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBcclxuICAgICAgICAkKCcjY2FydXNlbC1pdGVtMiBpbWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmFsdCA9PT0gJ3NtYWxsLXN0b3JhZ2UtaXRlbS0xJykge1xyXG4gICAgICAgICAgICAkKFwiI2NhcnVzZWwtaXRlbTFcIikuYXR0cihcInNyY1wiLCBcImFzc2V0cy9pbWcvc3RvcmFnZS9zdG9yYWdlLW5hdi1pdGVtL3N0b3JlLWl0ZW0xLnBuZ1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjY2FydXNlbC1pdGVtMVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ltZy9zdG9yYWdlL3N0b3JhZ2UyLnBuZ1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICAkKCcucGluaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJy5tb2RhbF9fdXBncmFkZV90b190b3AnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tb2RhbF9fdXBncmFkZV90b190b3BfX2lubmVyIGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKCcubW9kYWxfX3VwZ3JhZGVfdG9fdG9wJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAkKCcjZmlyc3RfX3N0ZXBfX2RvbmUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQoJyNmaXJzdF9fc3RlcCcpLmhpZGUoKTtcclxuICAgICAgICAgICQoJyNzZWNvbmRfX3N0ZXAnKS5zaG93KCk7XHJcbiAgICAgICAgICAkKCcuZ3JhcGhpY19fY2lyY2xlOm50aC1jaGlsZCgzKScpLmFkZENsYXNzKCdibHVlJyk7XHJcbiAgICAgICAgICAkKCcuaGw6bnRoLWNoaWxkKDQpJykuYWRkQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAgICQoJyNzZWNvbmRfc3RlcF9fZGVzYycpLmhpZGUoKTtcclxuICAgICAgICAgICQoJyNyZXF1c2V0X3RpdGxlMScpLnJlbW92ZUNsYXNzKCdibHVlJyk7XHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTInKS5hZGRDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICAgJCgnLmJsdWVfc3Bhbl90aXRsZScpLmh0bWwoJ9CSINCg0JDQkdCe0KLQlTog0JPQoNCj0Jcg0JIg0J/Qo9Ci0JgnKVxyXG4gICAgICAgICAgJCgnLnJlcXVlc3RfaXRlbV9fc2VjdGlvbl9faXRlbS5lbmQnKS5oaWRlKClcclxuICAgICAgICAgICQoJyNvcGVuX2RyaXZlcl9tb2RhbCcpLmhpZGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgICQoJyNzZWNvbmRfX3N0ZXBfX2RvbmUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykuaGlkZSgpXHJcbiAgICAgICAgICAkKCcjcmVxdXNldF9zcGFuJykuaHRtbCgn0JLRgNC10LzRjyDQsiDQv9GD0YLQuDonKVxyXG4gICAgICAgICAgJCgnI3JlcXVlc3RfX3RpbWUnKS5odG1sKCc5INGHIDM1INC80LjQvScpXHJcbiAgICAgICAgICAkKCcjcmVxdWVzdF9idG4nKS5hZGRDbGFzcygnYXZlcmFnZScpXHJcbiAgICAgICAgICAkKCcuZ3JhcGhpY19fY2lyY2xlJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKVxyXG4gICAgICAgICAgJCgnLmdyYXBoaWNfX2NpcmNsZScpLmFkZENsYXNzKCdncmVlbicpXHJcbiAgICAgICAgICAkKCcuaGwnKS5hZGRDbGFzcygnZ3JlZW4nKVxyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUxJykuYWRkQ2xhc3MoJ2dyZWVuJyk7XHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTInKS5yZW1vdmVDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUyJykuYWRkQ2xhc3MoJ2dyZWVuJyk7XHJcbiAgICAgICAgICAkKCcjcmVxdXNldF90aXRsZTMnKS5hZGRDbGFzcygnZ3JlZW4nKTtcclxuICAgICAgICAgICQoJy5ibHVlX3NwYW5fdGl0bGUnKS5odG1sKCfQk9Cg0KPQlyDQlNCe0KHQotCQ0JLQm9CV0J0nKVxyXG4gICAgICAgICAgJCgnLmJsdWVfc3Bhbl90aXRsZScpLmFkZENsYXNzKCdncmVlbicpXHJcbiAgICAgICAgICAkKCcjcmVxdWVzdF9kZXNjX2VuZCcpLmh0bWwoJ9Cf0L7Qt9C00YDQsNCy0LvRj9C10LwhINCS0Ysg0LTQvtGB0YLQsNCy0LjQu9C4INCz0YDRg9C3ISA8YnI+INCh0LLRj9C20LjRgtC10YHRjCDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCA8YnI+INC00LvRjyDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC00LXQudGB0YLQstC40LkuJylcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICAkKCcjb3Blbl9kcml2ZXJfbW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5kcml2ZXInKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjb3Blbl9tYXBfbW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5tYXAnKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcub3Blbl9yZWplY3Rpb25fbW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5yZWplY3Rpb24nKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjb3Blbl9lZGl0X3Bob3RvJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwuZWRpdF9waG90bycpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNjbG9zZV9lZGl0X3Bob3RvJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsLmVkaXRfcGhvdG8nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAkKCcjY2hvb3NlX2RyaXZlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKCcjb3Blbl9kcml2ZXJfbW9kYWwnKS5odG1sKCfQmNC30LzQtdC90LjRgtGMINCy0L7QtNC40YLQtdC70Y8nKVxyXG4gICAgICAgICAgJCgnLnJlcXVlc3RfaXRlbV9fc2VjdGlvbl9faW5uZXInKS5oaWRlKClcclxuICAgICAgICAgICQoJy5yZXF1ZXN0X2l0ZW1fX3NlY3Rpb25fX2RyaXZlcicpLnNob3coKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fYnRucyBhJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuZHJpdmVyX3RpbWVzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjZHJpdmVyX3R5cGUyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWxfX3dyYXBwZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyMicpLnNob3coKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNkcml2ZXJfdHlwZTEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcicpLnNob3coKTtcclxuICAgICAgICAgICQoJy5kcml2ZXJfbW9kYWxfX3dyYXBwZXIyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAkKCcjcmVnaXN0ZXJfdHlwZTInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvbXBhbnlfX3JlZ2lzdGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgJCgnI3JlZ2lzdGVyX3RpdGxlJykuaHRtbCgn0JrQvtC90YLQsNC60L3Ri9C1INC00LDQvdC90YvQtScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcjcmVnaXN0ZXJfdHlwZTEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnLmNvbXBhbnlfX3JlZ2lzdGVyJykuc2hvdygpO1xyXG4gICAgICAgICAgJCgnI3JlZ2lzdGVyX3RpdGxlJykuaHRtbCgn0JrQvtC90YLQsNC60L3QvtC1INC70LjRhtC+JylcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgIFxyXG4gICAgICAkKCcubW9iaWxlX2JhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmhlYWRlcl9fdG9wX19tb2JpbGUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbG9jaycpO1xyXG4gICAgICB9KVxyXG4gICAgICAkKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuZmluZCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXInKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLmZpbmQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX3RleHQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lcicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMjApe1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyX190b3AnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAkKCcuaGVhZGVyX190b3AnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKT09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgJ3J1JylcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJUb2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJylcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlcigpKVxyXG4gICAgICAvLyBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldFByb2ZpbGU/dG9rZW49JHt1c2VyVG9rZW59YClcclxuICAgICAgLy8gLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAvLyAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDdXJyZW50VXNlcih7dHlwZTonU0VUX0NVUlJFTlRfVVNFUicsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgLy8gICAgIH1lbHNlIHtcclxuICAgICAgLy8gICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyApIFxyXG4gICAgICBcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEN1cnJlbnRVc2VyKGNvbm5lY3QpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHVzZXJUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QmFsYW5jZT90b2tlbj0ke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5hbW91bnQpXHJcbiAgICAgICAgICAvLyBjb29raWUuc2V0KCdiYWxhbmNlJywgcmVzLmRhdGEuYW1vdW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIDxIZWFkPlxyXG4gICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QXBsS2lQOUFPTHVVYldkSDY1NUFwRk1sMW5uZlh3Y3drJmxpYnJhcmllcz1wbGFjZXNgIH19IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCxwYWdlUHJvcHMsc3RvcmV9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgey8qIHtjb29raWUuZ2V0KCd0b2tlbicpICYmIHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyICE9PSAnZG9uZScgJiYgPEZpcmViYXNlTG9naW4gLz59ICovfVxyXG4gICAgICB7KGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5hdXRoZW50aWNhdGluZ1VzZXIgIT09ICdkb25lJykgPyA8TG9hZGluZ1NwaW5uZXIgLz4gOlxyXG4gICAgICAgPD4gXHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIHsvKiA8RmlyZWJhc2UgLz4gKi99XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gIGxvZ2dlZEluOiBzdGF0ZS51c2Vyc1JlZHVjZXIubG9nZ2VkSW4sXHJcbiAgYXV0aGVudGljYXRpbmdVc2VyOiBzdGF0ZS51c2Vyc1JlZHVjZXIuYXV0aGVudGljYXRpbmdVc2VyXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpLFxyXG59KTtcclxuTXlBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKE15QXBwKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9