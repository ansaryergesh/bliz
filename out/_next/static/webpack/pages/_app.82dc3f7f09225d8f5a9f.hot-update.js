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

      function showPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat, lng); // var latlng = parseFloat(lat),parseFloat(lng);
        // 

        axios__WEBPACK_IMPORTED_MODULE_24___default.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(parseFloat(lat), ",").concat(parseFloat(lng), "&key=").concat("AIzaSyDwgq_3mUoJkLm7aTUbH2Z44y6RVm92DV0")).then(function (res) {
          console.log(res);
          var filter = res.data.results.filter(function (r) {
            return r.types.includes("locality");
          });
          console.log(filter[0]);

          if (js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('place_id') !== filter[0].place_id || js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('formatted_address') === undefined) {
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('place_id', filter[0].place_id);
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('formatted_address', filter[0].formatted_address);
          }
        }); // var geocoder = new google.maps.Geocoder;
        // geocoder.geocode({'location': latlng}, function(results, status) {
        //   if (status === google.maps.GeocoderStatus.OK) {
        //     if (results[1]) {
        //       console.log(results);
        //     } else {
        //       window.alert('No results found');
        //     }
        //   } else {
        //     window.alert('Geocoder failed due to: ' + status);
        //   }
        // });
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('place_id');
        js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('formatted_address');
        alert("Geolocation is not supported by this browser.");
      }

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
          lineNumber: 116,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }, this);

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token') && this.props.authenticatingUser !== 'done' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 76
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNob3dQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJwYXJzZUZsb2F0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJmaWx0ZXIiLCJkYXRhIiwicmVzdWx0cyIsInIiLCJ0eXBlcyIsImluY2x1ZGVzIiwiY29va2llIiwicGxhY2VfaWQiLCJ1bmRlZmluZWQiLCJzZXQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicmVtb3ZlIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJUb2tlbiIsInByb3BzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbm5lY3QiLCJhbW91bnQiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImF1dGhlbnRpY2F0aW5nVXNlciIsIkFwcCIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2dnZWRJbiIsInVzZXJzUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEQsZUFJQyxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpEO0FBQUE7QUFIRCx1QkFERjtBQWNEOzs7O0VBeEdpQkcsK0M7O0FBMkdwQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ILHFEQUFOO0FBQUEsQ0FBbEI7O0FBQ0EsSUFBTUksT0FBTyxHQUFHQyx5RUFBYSxDQUFDRixTQUFELENBQTdCOztBQUNBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENDLFlBQVEsRUFBRUQsS0FBSyxDQUFDRSxZQUFOLENBQW1CRCxRQURHO0FBRWhDUCxzQkFBa0IsRUFBRU0sS0FBSyxDQUFDRSxZQUFOLENBQW1CUjtBQUZQLEdBQUw7QUFBQSxDQUE3Qjs7QUFLQSxJQUFNUyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDakIsb0JBQWdCLEVBQUU7QUFBQSxhQUFNaUIsUUFBUSxDQUFDakIsbUZBQWdCLEVBQWpCLENBQWQ7QUFBQTtBQURvQixHQUFMO0FBQUEsQ0FBbkM7O0FBR0EzQyxLQUFLLEdBQUc0Qyw0REFBTyxDQUFDVyxlQUFELEVBQWlCSSxrQkFBakIsQ0FBUCxDQUE0QzNELEtBQTVDLENBQVI7QUFFZSxvRUFBQXFELE9BQU8sQ0FBQ1EsU0FBUixDQUFrQjdELEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MmRjM2Y3ZjA5MjI1ZDhmNWE5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYvTmF2J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXInXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCB7YXV0aH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSAnLi4vY3VzdG9tLWhvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQge2ZldGNoQ3VycmVudFVzZXJ9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcbmltcG9ydCB7c2F2ZVRvRGF0YWJhc2V9IGZyb20gJy4uL2ZiZGF0YWJhc2UvZGF0YWJhc2UnXHJcbi8vIGltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2VDb21wb25lbnRzL0ZpcmViYXNlTG9naW4nO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9maXJlYmFzZWNvbmZpZyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEyMCl7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX3RvcCcpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICQoJy5oZWFkZXJfX3RvcCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIHNob3dQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICB2YXIgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICB2YXIgbG5nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgY29uc29sZS5sb2cobGF0LCBsbmcpXHJcbiAgICAgIC8vIHZhciBsYXRsbmcgPSBwYXJzZUZsb2F0KGxhdCkscGFyc2VGbG9hdChsbmcpO1xyXG4gICAgICAvLyBcclxuXHJcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtwYXJzZUZsb2F0KGxhdCl9LCR7cGFyc2VGbG9hdChsbmcpfSZrZXk9JHtwcm9jZXNzLmVudi5HT09HTEVfTUFQX0FQSV9LRVl9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBsZXQgZmlsdGVyID0gcmVzLmRhdGEucmVzdWx0cy5maWx0ZXIocj0+IHIudHlwZXMuaW5jbHVkZXMoXCJsb2NhbGl0eVwiKSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlclswXSlcclxuICAgICAgICAgIGlmKGNvb2tpZS5nZXQoJ3BsYWNlX2lkJykgIT09IGZpbHRlclswXS5wbGFjZV9pZCB8fCBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29va2llLnNldCgncGxhY2VfaWQnLCBmaWx0ZXJbMF0ucGxhY2VfaWQpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJywgZmlsdGVyWzBdLmZvcm1hdHRlZF9hZGRyZXNzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIC8vIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcjtcclxuXHJcbiAgICAgIC8vIGdlb2NvZGVyLmdlb2NvZGUoeydsb2NhdGlvbic6IGxhdGxuZ30sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xyXG4gICAgICAvLyAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgIC8vICAgICBpZiAocmVzdWx0c1sxXSkge1xyXG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIHdpbmRvdy5hbGVydCgnTm8gcmVzdWx0cyBmb3VuZCcpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgICB3aW5kb3cuYWxlcnQoJ0dlb2NvZGVyIGZhaWxlZCBkdWUgdG86ICcgKyBzdGF0dXMpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93UG9zaXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ3BsYWNlX2lkJylcclxuICAgICAgICBjb29raWUucmVtb3ZlKCdmb3JtYXR0ZWRfYWRkcmVzcycpXHJcbiAgICAgICAgYWxlcnQoXCJHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIik7XHJcbiAgICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsICdydScpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyVG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpXHJcbiAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dGguY3VycmVudFVzZXIoKSlcclxuICAgICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRQcm9maWxlP3Rva2VuPSR7dXNlclRva2VufWApXHJcbiAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAvLyAgICAgICB0aGlzLnByb3BzLmZldGNoQ3VycmVudFVzZXIoe3R5cGU6J1NFVF9DVVJSRU5UX1VTRVInLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgIC8vICAgICB9ZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKSBcclxuICAgICAgXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hDdXJyZW50VXNlcihjb25uZWN0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih1c2VyVG9rZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEJhbGFuY2U/dG9rZW49JHtjb29raWUuZ2V0KCd0b2tlbicpfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuYW1vdW50KVxyXG4gICAgICAgICAgY29va2llLnNldCgnYmFsYW5jZScsIHJlcy5kYXRhLmFtb3VudClcclxuICAgICAgICAgIC8vIGNvb2tpZS5zZXQoJ2JhbGFuY2UnLCByZXMuZGF0YS5hbW91bnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29va2llLnJlbW92ZSgnYmFsYW5jZScpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lBcGxLaVA5QU9MdVViV2RINjU1QXBGTWwxbm5mWHdjd2smbGlicmFyaWVzPXBsYWNlc2AgfX0gLz5cclxuICAgIDwvSGVhZD5cclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LHBhZ2VQcm9wcyxzdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICB7Lyoge2Nvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5hdXRoZW50aWNhdGluZ1VzZXIgIT09ICdkb25lJyAmJiA8RmlyZWJhc2VMb2dpbiAvPn0gKi99XHJcbiAgICAgIHsoY29va2llLmdldCgndG9rZW4nKSAmJiB0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciAhPT0gJ2RvbmUnKSA/IDxMb2FkaW5nU3Bpbm5lciAvPiA6XHJcbiAgICAgICA8PiBcclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgey8qIDxGaXJlYmFzZSAvPiAqL31cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgbG9nZ2VkSW46IHN0YXRlLnVzZXJzUmVkdWNlci5sb2dnZWRJbixcclxuICBhdXRoZW50aWNhdGluZ1VzZXI6IHN0YXRlLnVzZXJzUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXJcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gIGZldGNoQ3VycmVudFVzZXI6ICgpID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSksXHJcbn0pO1xyXG5NeUFwcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTXlBcHApXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=