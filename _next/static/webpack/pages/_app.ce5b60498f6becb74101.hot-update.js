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
          lineNumber: 78,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, this);

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token') && this.props.authenticatingUser !== 'done' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 76
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwidXNlclRva2VuIiwiY29va2llIiwiZ2V0IiwicHJvcHMiLCJmZXRjaEN1cnJlbnRVc2VyIiwiY29ubmVjdCIsInVuZGVmaW5lZCIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFtb3VudCIsInNldCIsInJlbW92ZSIsIl9faHRtbCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiQXBwIiwibWFrZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZ2dlZEluIiwidXNlcnNSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxDQUFDQSxpREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRixtREFBUSxDQUFDRyxhQUFULENBQXVCQyx1REFBdkI7QUFDRDs7SUFLS0MsSzs7Ozs7Ozs7Ozs7Ozt3Q0FFZ0I7QUFHaEJDLG9EQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFV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Z0IsRUFBRTtBQUFBLGFBQU0yQixRQUFRLENBQUMzQixtRkFBZ0IsRUFBakIsQ0FBZDtBQUFBO0FBRG9CLEdBQUw7QUFBQSxDQUFuQzs7QUFHQWQsS0FBSyxHQUFHZSw0REFBTyxDQUFDcUIsZUFBRCxFQUFpQkksa0JBQWpCLENBQVAsQ0FBNEN4QyxLQUE1QyxDQUFSO0FBRWUsb0VBQUFrQyxPQUFPLENBQUNRLFNBQVIsQ0FBa0IxQyxLQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2U1YjYwNDk4ZjZiZWNiNzQxMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyJ1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBpbXBvcnQge2F1dGh9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gJy4uL2N1c3RvbS1ob29rcy91c2VBdXRoJztcclxuaW1wb3J0IHtmZXRjaEN1cnJlbnRVc2VyfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xyXG5pbXBvcnQge3NhdmVUb0RhdGFiYXNlfSBmcm9tICcuLi9mYmRhdGFiYXNlL2RhdGFiYXNlJ1xyXG4vLyBpbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlQ29tcG9uZW50cy9GaXJlYmFzZUxvZ2luJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vZmlyZWJhc2Vjb25maWcnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTIwKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsICdydScpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyVG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpXHJcbiAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGguY3VycmVudFVzZXIoKSlcclxuICAgICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRQcm9maWxlP3Rva2VuPSR7dXNlclRva2VufWApXHJcbiAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAvLyAgICAgICB0aGlzLnByb3BzLmZldGNoQ3VycmVudFVzZXIoe3R5cGU6J1NFVF9DVVJSRU5UX1VTRVInLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgIC8vICAgICB9ZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKSBcclxuICAgICAgXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hDdXJyZW50VXNlcihjb25uZWN0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih1c2VyVG9rZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEJhbGFuY2U/dG9rZW49JHtjb29raWUuZ2V0KCd0b2tlbicpfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuYW1vdW50KVxyXG4gICAgICAgICAgY29va2llLnNldCgnYmFsYW5jZScsIHJlcy5kYXRhLmFtb3VudClcclxuICAgICAgICAgIC8vIGNvb2tpZS5zZXQoJ2JhbGFuY2UnLCByZXMuZGF0YS5hbW91bnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29va2llLnJlbW92ZSgnYmFsYW5jZScpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lBcGxLaVA5QU9MdVViV2RINjU1QXBGTWwxbm5mWHdjd2smbGlicmFyaWVzPXBsYWNlc2AgfX0gLz5cclxuICAgIDwvSGVhZD5cclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LHBhZ2VQcm9wcyxzdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICB7Lyoge2Nvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5hdXRoZW50aWNhdGluZ1VzZXIgIT09ICdkb25lJyAmJiA8RmlyZWJhc2VMb2dpbiAvPn0gKi99XHJcbiAgICAgIHsoY29va2llLmdldCgndG9rZW4nKSAmJiB0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciAhPT0gJ2RvbmUnKSA/IDxMb2FkaW5nU3Bpbm5lciAvPiA6XHJcbiAgICAgICA8PiBcclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgey8qIDxGaXJlYmFzZSAvPiAqL31cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgbG9nZ2VkSW46IHN0YXRlLnVzZXJzUmVkdWNlci5sb2dnZWRJbixcclxuICBhdXRoZW50aWNhdGluZ1VzZXI6IHN0YXRlLnVzZXJzUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXJcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gIGZldGNoQ3VycmVudFVzZXI6ICgpID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSksXHJcbn0pO1xyXG5NeUFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTXlBcHApXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=