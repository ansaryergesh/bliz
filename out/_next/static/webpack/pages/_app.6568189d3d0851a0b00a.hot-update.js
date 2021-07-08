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
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.mobile_bar').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).toggleClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header__top__mobile').slideToggle();
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').toggleClass('lock');
      });
    }
  }, {
    key: "render",
    value: function render() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdi5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoQ3VycmVudFVzZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZ2dlZEluIiwidXNlcnNSZWR1Y2VyIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiTmF2IiwiJCIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsInByb3BzIiwiY29va2llIiwiZ2V0IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxRQUFRO0FBQUEsU0FBSztBQUN0Q0Msb0JBQWdCLEVBQUUsNEJBQU07QUFBQ0QsY0FBUSxDQUFDQyxtRkFBZ0IsRUFBakIsQ0FBUjtBQUE2QjtBQURoQixHQUFMO0FBQUEsQ0FBbkM7O0FBSUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0MsWUFBUSxFQUFFRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJELFFBREc7QUFFaENFLHNCQUFrQixFQUFFSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDO0FBRlAsR0FBTDtBQUFBLENBQTdCOztJQUlNQyxHOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQkMsb0RBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVU7QUFDL0JELHNEQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQUYsc0RBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRyxXQUExQjtBQUNBSCxzREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCO0FBQ0QsT0FKRDtBQUtEOzs7NkJBQ1U7QUFFTCxVQUFHLEtBQUtFLEtBQUwsQ0FBV04sa0JBQWQsRUFBa0MsQ0FDaEM7QUFDRDs7QUFDRCxVQUFHTyxnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxLQUF1QixLQUFLRixLQUFMLENBQVdSLFFBQXJDLEVBQStDO0FBQzNDLDRCQUFPLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDSDs7QUFBQSxVQUFHUyxnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxNQUF3QixLQUFLRixLQUFMLENBQVdOLGtCQUFYLElBQWlDLENBQUMsS0FBS00sS0FBTCxDQUFXUixRQUFyRSxDQUFILEVBQW1GLENBQ2xGO0FBQ0Q7O0FBQ0QsVUFBR1MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsS0FBdUJDLFNBQXZCLElBQW9DLENBQUMsS0FBS0gsS0FBTCxDQUFXUixRQUFuRCxFQUE2RDtBQUMzRDtBQUFBLDZFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxPQUZELE1BRU07QUFDSiw0QkFBTyxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0Q7O0FBQ0QsMEJBQU8scUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBRUg7Ozs7RUF6QmFZLDRDQUFLLENBQUNDLFM7O0FBNkJSQywySEFBTyxDQUFDaEIsZUFBRCxFQUFpQkgsa0JBQWpCLENBQVAsQ0FBNENRLEdBQTVDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjU2ODE4OWQzZDA4NTFhMGIwMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBOYXZndWVzdCBmcm9tICcuL05hdmd1ZXN0J1xyXG5pbXBvcnQgTmF2dXNlciBmcm9tICcuL05hdnVzZXInXHJcbmltcG9ydCB7ZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTG9hZGluZ05hdiBmcm9tICcuL0xvYWRpbmdOYXYnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiB7ZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKX1cclxufSlcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgbG9nZ2VkSW46IHN0YXRlLnVzZXJzUmVkdWNlci5sb2dnZWRJbixcclxuICBhdXRoZW50aWNhdGluZ1VzZXI6IHN0YXRlLnVzZXJzUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXJcclxufSlcclxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoJy5tb2JpbGVfYmFyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdsb2NrJyk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyKSB7XHJcbiAgICAgICAgICAvLyByZXR1cm4oPExvYWRpbmdTcGlubmVyLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5sb2dnZWRJbikge1xyXG4gICAgICAgICAgICByZXR1cm4oPE5hdmd1ZXN0Lz4pXHJcbiAgICAgICAgfWlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgKHRoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyIHx8ICF0aGlzLnByb3BzLmxvZ2dlZEluKSkge1xyXG4gICAgICAgICAgLy8gPExvYWRpbmdOYXYgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29va2llLmdldCgndG9rZW4nKSA9PSB1bmRlZmluZWQgJiYgIXRoaXMucHJvcHMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIDxOYXZndWVzdCAvPlxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHJldHVybig8TmF2Z3Vlc3QvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKDxOYXZndWVzdC8+KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdikpIl0sInNvdXJjZVJvb3QiOiIifQ==