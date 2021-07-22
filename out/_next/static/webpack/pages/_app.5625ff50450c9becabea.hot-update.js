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
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      } else {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
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
          lineNumber: 118,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, this);

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token') && this.props.authenticatingUser !== 'done' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 76
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Nav_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY29uZmlnIiwiTXlBcHAiLCIkIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNob3dQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJwYXJzZUZsb2F0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJmaWx0ZXIiLCJkYXRhIiwicmVzdWx0cyIsInIiLCJ0eXBlcyIsImluY2x1ZGVzIiwiY29va2llIiwicGxhY2VfaWQiLCJ1bmRlZmluZWQiLCJzZXQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicmVtb3ZlIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJUb2tlbiIsInByb3BzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbm5lY3QiLCJhbW91bnQiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImF1dGhlbnRpY2F0aW5nVXNlciIsIkFwcCIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2dnZWRJbiIsInVzZXJzUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUdDLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRCxlQUlDLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUhELHVCQURGO0FBY0Q7Ozs7RUExR2lCRywrQzs7QUE2R3BCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUgscURBQU47QUFBQSxDQUFsQjs7QUFDQSxJQUFNSSxPQUFPLEdBQUdDLHlFQUFhLENBQUNGLFNBQUQsQ0FBN0I7O0FBQ0EsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0MsWUFBUSxFQUFFRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFFBREc7QUFFaENQLHNCQUFrQixFQUFFTSxLQUFLLENBQUNFLFlBQU4sQ0FBbUJSO0FBRlAsR0FBTDtBQUFBLENBQTdCOztBQUtBLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDdENqQixvQkFBZ0IsRUFBRTtBQUFBLGFBQU1pQixRQUFRLENBQUNqQixtRkFBZ0IsRUFBakIsQ0FBZDtBQUFBO0FBRG9CLEdBQUw7QUFBQSxDQUFuQzs7QUFHQTNDLEtBQUssR0FBRzRDLDREQUFPLENBQUNXLGVBQUQsRUFBaUJJLGtCQUFqQixDQUFQLENBQTRDM0QsS0FBNUMsQ0FBUjtBQUVlLG9FQUFBcUQsT0FBTyxDQUFDUSxTQUFSLENBQWtCN0QsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2MjVmZjUwNDUwYzliZWNhYmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdi9OYXYnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0Zvb3RlcidcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IHthdXRofSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tICcuLi9jdXN0b20taG9va3MvdXNlQXV0aCc7XHJcbmltcG9ydCB7ZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuaW1wb3J0IHtzYXZlVG9EYXRhYmFzZX0gZnJvbSAnLi4vZmJkYXRhYmFzZS9kYXRhYmFzZSdcclxuLy8gaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZUNvbXBvbmVudHMvRmlyZWJhc2VMb2dpbic7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2ZpcmViYXNlY29uZmlnJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTIwKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgJCgnLmhlYWRlcl9fdG9wJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgIHZhciBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIHZhciBsbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICBjb25zb2xlLmxvZyhsYXQsIGxuZylcclxuICAgICAgLy8gdmFyIGxhdGxuZyA9IHBhcnNlRmxvYXQobGF0KSxwYXJzZUZsb2F0KGxuZyk7XHJcbiAgICAgIC8vIFxyXG5cclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke3BhcnNlRmxvYXQobGF0KX0sJHtwYXJzZUZsb2F0KGxuZyl9JmtleT0ke3Byb2Nlc3MuZW52LkdPT0dMRV9NQVBfQVBJX0tFWX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGxldCBmaWx0ZXIgPSByZXMuZGF0YS5yZXN1bHRzLmZpbHRlcihyPT4gci50eXBlcy5pbmNsdWRlcyhcImxvY2FsaXR5XCIpKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyWzBdKVxyXG4gICAgICAgICAgaWYoY29va2llLmdldCgncGxhY2VfaWQnKSAhPT0gZmlsdGVyWzBdLnBsYWNlX2lkIHx8IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdwbGFjZV9pZCcsIGZpbHRlclswXS5wbGFjZV9pZClcclxuICAgICAgICAgICAgY29va2llLnNldCgnZm9ybWF0dGVkX2FkZHJlc3MnLCBmaWx0ZXJbMF0uZm9ybWF0dGVkX2FkZHJlc3MpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgLy8gdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyO1xyXG5cclxuICAgICAgLy8gZ2VvY29kZXIuZ2VvY29kZSh7J2xvY2F0aW9uJzogbGF0bG5nfSwgZnVuY3Rpb24ocmVzdWx0cywgc3RhdHVzKSB7XHJcbiAgICAgIC8vICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcclxuICAgICAgLy8gICAgIGlmIChyZXN1bHRzWzFdKSB7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgd2luZG93LmFsZXJ0KCdObyByZXN1bHRzIGZvdW5kJyk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgIHdpbmRvdy5hbGVydCgnR2VvY29kZXIgZmFpbGVkIGR1ZSB0bzogJyArIHN0YXR1cyk7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHNob3dQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYScpXHJcbiAgICAgICAgY29va2llLnJlbW92ZSgncGxhY2VfaWQnKVxyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ2Zvcm1hdHRlZF9hZGRyZXNzJylcclxuICAgICAgICBhbGVydChcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiKTtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKT09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgJ3J1JylcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJUb2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJylcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlcigpKVxyXG4gICAgICAvLyBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldFByb2ZpbGU/dG9rZW49JHt1c2VyVG9rZW59YClcclxuICAgICAgLy8gLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAvLyAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDdXJyZW50VXNlcih7dHlwZTonU0VUX0NVUlJFTlRfVVNFUicsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgLy8gICAgIH1lbHNlIHtcclxuICAgICAgLy8gICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyApIFxyXG4gICAgICBcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEN1cnJlbnRVc2VyKGNvbm5lY3QpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHVzZXJUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QmFsYW5jZT90b2tlbj0ke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5hbW91bnQpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdiYWxhbmNlJywgcmVzLmRhdGEuYW1vdW50KVxyXG4gICAgICAgICAgLy8gY29va2llLnNldCgnYmFsYW5jZScsIHJlcy5kYXRhLmFtb3VudClcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdiYWxhbmNlJylcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUFwbEtpUDlBT0x1VWJXZEg2NTVBcEZNbDFubmZYd2N3ayZsaWJyYXJpZXM9cGxhY2VzYCB9fSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgY29uc3QgeyBDb21wb25lbnQscGFnZVByb3BzLHN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHsvKiB7Y29va2llLmdldCgndG9rZW4nKSAmJiB0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciAhPT0gJ2RvbmUnICYmIDxGaXJlYmFzZUxvZ2luIC8+fSAqL31cclxuICAgICAgeyhjb29raWUuZ2V0KCd0b2tlbicpICYmIHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyICE9PSAnZG9uZScpID8gPExvYWRpbmdTcGlubmVyIC8+IDpcclxuICAgICAgIDw+IFxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgICB7LyogPEZpcmViYXNlIC8+ICovfVxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBsb2dnZWRJbjogc3RhdGUudXNlcnNSZWR1Y2VyLmxvZ2dlZEluLFxyXG4gIGF1dGhlbnRpY2F0aW5nVXNlcjogc3RhdGUudXNlcnNSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlclxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgZmV0Y2hDdXJyZW50VXNlcjogKCkgPT4gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKSxcclxufSk7XHJcbk15QXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShNeUFwcClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==