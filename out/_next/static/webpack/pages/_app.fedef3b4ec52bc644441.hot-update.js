webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Nav/Nav.js":
/*!**************************************!*\
  !*** ./components/shared/Nav/Nav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navguest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navguest */ "./components/shared/Nav/Navguest.js");
/* harmony import */ var _Navuser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navuser */ "./components/shared/Nav/Navuser.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoadingNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoadingNav */ "./components/shared/Nav/LoadingNav.js");
/* harmony import */ var _others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\shared\\Nav\\Nav.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_10__["fetchCurrentUser"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.usersReducer.loggedIn,
    authenticatingUser: state.usersReducer.authenticatingUser
  };
};

var Nav = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav, _React$Component);

  var _super = _createSuper(Nav);

  function Nav() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Nav);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, [{
    key: "render",
    value: function render() {
      componentDidMount(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.mobile_bar').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).toggleClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header__top__mobile').slideToggle();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').toggleClass('lock');
        });
      });

      if (this.props.authenticatingUser) {// return(<LoadingSpinner/>)
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') && this.props.loggedIn) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 20
        }, this);
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {// <LoadingNav />
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') == undefined && !this.props.loggedIn) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 18
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 16
      }, this);
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Nav));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdi5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoQ3VycmVudFVzZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZ2dlZEluIiwidXNlcnNSZWR1Y2VyIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiTmF2IiwiY29tcG9uZW50RGlkTW91bnQiLCIkIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwicHJvcHMiLCJjb29raWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDQyxvQkFBZ0IsRUFBRSw0QkFBTTtBQUFDRCxjQUFRLENBQUNDLG1GQUFnQixFQUFqQixDQUFSO0FBQTZCO0FBRGhCLEdBQUw7QUFBQSxDQUFuQzs7QUFJQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDQyxZQUFRLEVBQUVELEtBQUssQ0FBQ0UsWUFBTixDQUFtQkQsUUFERztBQUVoQ0Usc0JBQWtCLEVBQUVILEtBQUssQ0FBQ0UsWUFBTixDQUFtQkM7QUFGUCxHQUFMO0FBQUEsQ0FBN0I7O0lBSU1DLEc7Ozs7Ozs7Ozs7Ozs7NkJBRU87QUFDUEMsdUJBQWlCLENBQUMsWUFBTTtBQUN0QkMsc0RBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVU7QUFDL0JELHdEQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQUYsd0RBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRyxXQUExQjtBQUNBSCx3REFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCO0FBQ0QsU0FKRDtBQUtELE9BTmdCLENBQWpCOztBQU9FLFVBQUcsS0FBS0UsS0FBTCxDQUFXUCxrQkFBZCxFQUFrQyxDQUNoQztBQUNEOztBQUNELFVBQUdRLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEtBQXVCLEtBQUtGLEtBQUwsQ0FBV1QsUUFBckMsRUFBK0M7QUFDM0MsNEJBQU8scUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNIOztBQUFBLFVBQUdVLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLE1BQXdCLEtBQUtGLEtBQUwsQ0FBV1Asa0JBQVgsSUFBaUMsQ0FBQyxLQUFLTyxLQUFMLENBQVdULFFBQXJFLENBQUgsRUFBbUYsQ0FDbEY7QUFDRDs7QUFDRCxVQUFHVSxnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxLQUF1QkMsU0FBdkIsSUFBb0MsQ0FBQyxLQUFLSCxLQUFMLENBQVdULFFBQW5ELEVBQTZEO0FBQzNEO0FBQUEsNkVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BRkQsTUFFTTtBQUNKLDRCQUFPLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRDs7QUFDRCwwQkFBTyxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFFSDs7OztFQXpCYWEsNENBQUssQ0FBQ0MsUzs7QUE2QlJDLDJIQUFPLENBQUNqQixlQUFELEVBQWlCSCxrQkFBakIsQ0FBUCxDQUE0Q1EsR0FBNUMsQ0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZWRlZjNiNGVjNTJiYzY0NDQ0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IE5hdmd1ZXN0IGZyb20gJy4vTmF2Z3Vlc3QnXHJcbmltcG9ydCBOYXZ1c2VyIGZyb20gJy4vTmF2dXNlcidcclxuaW1wb3J0IHtmZXRjaEN1cnJlbnRVc2VyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMb2FkaW5nTmF2IGZyb20gJy4vTG9hZGluZ05hdidcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gIGZldGNoQ3VycmVudFVzZXI6ICgpID0+IHtkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpfVxyXG59KVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBsb2dnZWRJbjogc3RhdGUudXNlcnNSZWR1Y2VyLmxvZ2dlZEluLFxyXG4gIGF1dGhlbnRpY2F0aW5nVXNlcjogc3RhdGUudXNlcnNSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlclxyXG59KVxyXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb21wb25lbnREaWRNb3VudCgoKSA9PiB7XHJcbiAgICAgICAgJCgnLm1vYmlsZV9iYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcuaGVhZGVyX190b3BfX21vYmlsZScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xvY2snKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyKSB7XHJcbiAgICAgICAgICAvLyByZXR1cm4oPExvYWRpbmdTcGlubmVyLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5sb2dnZWRJbikge1xyXG4gICAgICAgICAgICByZXR1cm4oPE5hdmd1ZXN0Lz4pXHJcbiAgICAgICAgfWlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgKHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyIHx8ICF0aGlzLnByb3BzLmxvZ2dlZEluKSkge1xyXG4gICAgICAgICAgLy8gPExvYWRpbmdOYXYgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29va2llLmdldCgndG9rZW4nKSA9PSB1bmRlZmluZWQgJiYgIXRoaXMucHJvcHMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIDxOYXZndWVzdCAvPlxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHJldHVybig8TmF2Z3Vlc3QvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKDxOYXZndWVzdC8+KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdikpIl0sInNvdXJjZVJvb3QiOiIifQ==