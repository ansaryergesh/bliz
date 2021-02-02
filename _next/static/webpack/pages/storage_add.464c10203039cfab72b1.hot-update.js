webpackHotUpdate_N_E("pages/storage_add",{

/***/ "./pages/storage_add.js":
/*!******************************!*\
  !*** ./pages/storage_add.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hocs_withAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hocs/withAuth */ "./hocs/withAuth.js");
/* harmony import */ var _store_actions_messageAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/actions/messageAction */ "./store/actions/messageAction.js");
/* harmony import */ var _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../defaults/defaults */ "./defaults/defaults.js");







var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\storage_add.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    errorMessage: function errorMessage(msg) {
      dispatch(_store_actions_messageAction__WEBPACK_IMPORTED_MODULE_14__["errorMessage"](msg));
    },
    successMessage: function successMessage(msg) {
      dispatch(_store_actions_messageAction__WEBPACK_IMPORTED_MODULE_14__["successMessage"](msg));
    }
  };
};

var AddPost = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddPost, _React$Component);

  var _super = _createSuper(AddPost);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddPost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat("https://test.money-men.kz/api", "/getCategory")).then(function (res) {
        _this2.setState({
          categories: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat("https://test.money-men.kz/api", "/getSubcategories")).then(function (res) {
        _this2.setState({
          subcategories: res.data
        });
      });
    }
  }]);

  function AddPost(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddPost);

    _this = _super.call(this, props);
    _this.state = {
      loading: false,
      cities: [],
      input: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCity = _this.handleCity.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddPost, [{
    key: "handleSubmit",
    value: function handleSubmit(values) {
      var _this3 = this;

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat("https://test.money-men.kz/api", "/addStorage"), values).then(function (response) {
        if (!response.data.success) {
          _this3.setState({
            loading: false
          });

          _this3.props.errorMessage(response.data.message || 'Что то пошло не так');
        } else {
          _this3.setState({
            loading: false
          });

          _this3.props.successMessage('Успешно добавлен');
        }
      })["catch"](function (error) {
        console.log(error);

        _this3.setState({
          loading: false,
          message: 'Ошибка'
        });
      });
    }
  }, {
    key: "handleCity",
    value: function handleCity(event) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://test.money-men.kz/api/city?countryID=1").then(function (res) {
        console.log(res);

        _this4.setState({
          cities: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "register__container",
          children: [this.state.loading || this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 59
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
            initialValues: {
              area: '50',
              total_area: '55',
              image: 0,
              name: 'name',
              country_id: 0,
              city_id: 1,
              address: 'adress',
              "class": 'class b',
              type_storage: 'type',
              token: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('token'),
              warning: 'yes',
              warning_area: 'yes',
              rentTypeID: 1,
              price: '10000'
            },
            onSubmit: function onSubmit(values) {
              _this5.handleSubmit(values);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
              className: "register_form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "area",
                placeholder: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "total_area",
                placeholder: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "name",
                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "type_storage",
                placeholder: "\u0422\u0438\u043F \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "rentTypeID",
                as: "select",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "\u0422\u0438\u043F \u0430\u0440\u0435\u043D\u0434\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, this), _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["rentalType"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 23
                  }, _this5);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning",
                placeholder: "\u043F\u043E\u0436\u0430\u0440\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u043E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning_area",
                placeholder: "\u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0441\u0442\u043E\u044F \u0438 \u043C\u0430\u043D\u0435\u0432\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "country_id",
                as: "select",
                onChange: this.handleCity,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 21
                }, this), _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["countries"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 23
                  }, _this5);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "city_id",
                as: "select",
                children: this.state.cities.map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 23
                  }, _this5);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "address",
                placeholder: "\u0410\u0434\u0440\u0435\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "class",
                placeholder: "\u041A\u043B\u0430\u0441\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "price",
                placeholder: "\u0426\u0435\u043D\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, this), this.state.loading === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                type: "submit",
                children: "\u0420\u0410\u0417\u041C\u0415\u0421\u0422\u0418\u0422\u042C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 49
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                disabled: true,
                children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 108
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this);
    }
  }]);

  return AddPost;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_withAuth__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(AddPost)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZV9hZGQuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlcnJvck1lc3NhZ2UiLCJtc2ciLCJtc2dhY3Rpb24iLCJzdWNjZXNzTWVzc2FnZSIsIkFkZFBvc3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwiZGF0YSIsInN1YmNhdGVnb3JpZXMiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImNpdGllcyIsImlucHV0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNpdHkiLCJ2YWx1ZXMiLCJwb3N0IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiYXJlYSIsInRvdGFsX2FyZWEiLCJpbWFnZSIsIm5hbWUiLCJjb3VudHJ5X2lkIiwiY2l0eV9pZCIsImFkZHJlc3MiLCJ0eXBlX3N0b3JhZ2UiLCJ0b2tlbiIsImNvb2tpZSIsIndhcm5pbmciLCJ3YXJuaW5nX2FyZWEiLCJyZW50VHlwZUlEIiwicHJpY2UiLCJyZW50YWxUeXBlIiwibWFwIiwic3ViIiwiaWQiLCJjb3VudHJpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBYztBQUN2Q0MsZ0JBQVksRUFBQyxzQkFBQ0MsR0FBRCxFQUFTO0FBQUNGLGNBQVEsQ0FBQ0csMEVBQUEsQ0FBdUJELEdBQXZCLENBQUQsQ0FBUjtBQUFzQyxLQUR0QjtBQUV2Q0Usa0JB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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2VfYWRkLjQ2NGMxMDIwMzAzOWNmYWI3MmIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9ob2NzL3dpdGhBdXRoJ1xyXG5pbXBvcnQgKiBhcyBtc2dhY3Rpb24gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9tZXNzYWdlQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb3VudHJpZXMsIHJlbnRhbFR5cGUgfSBmcm9tICcuLi9kZWZhdWx0cy9kZWZhdWx0cyc7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+KHtcclxuICBlcnJvck1lc3NhZ2U6KG1zZykgPT4ge2Rpc3BhdGNoKG1zZ2FjdGlvbi5lcnJvck1lc3NhZ2UobXNnKSl9LFxyXG4gIHN1Y2Nlc3NNZXNzYWdlOihtc2cpID0+IHtkaXNwYXRjaChtc2dhY3Rpb24uc3VjY2Vzc01lc3NhZ2UobXNnKSl9XHJcbn0pXHJcblxyXG5jbGFzcyBBZGRQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldENhdGVnb3J5YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogcmVzLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRTdWJjYXRlZ29yaWVzYClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3ViY2F0ZWdvcmllczogcmVzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2l0aWVzOiBbXSxcclxuICAgICAgICBpbnB1dDoge30sXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5oYW5kbGVDaXR5ID0gdGhpcy5oYW5kbGVDaXR5LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KHZhbHVlcykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vYWRkU3RvcmFnZWAsIHZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZighcmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSB8fCfQp9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6JylcclxuICAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIHRoaXMucHJvcHMuc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L0nKVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIG1lc3NhZ2U6ICfQntGI0LjQsdC60LAnfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2l0eShldmVudCkge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdGVzdC5tb25leS1tZW4ua3ovYXBpL2NpdHk/Y291bnRyeUlEPTFgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaXRpZXM6IHJlcy5kYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyB8fHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nU3Bpbm5lciAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGgyPtCU0L7QsdCw0LLQuNGC0Ywg0YHQutC70LDQtDwvaDI+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICBhcmVhOiAnNTAnLFxyXG4gICAgICAgICAgICAgICAgICB0b3RhbF9hcmVhOiAnNTUnLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAwLFxyXG4gICAgICAgICAgICAgICAgICBjaXR5X2lkOiAxLFxyXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOidhZHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2NsYXNzIGInLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlX3N0b3JhZ2U6ICd0eXBlJyxcclxuICAgICAgICAgICAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgICAgICAgICAgIHdhcm5pbmc6ICd5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICB3YXJuaW5nX2FyZWE6ICd5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICByZW50VHlwZUlEOiAxLFxyXG4gICAgICAgICAgICAgICAgICBwcmljZTogJzEwMDAwJyxcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHt0aGlzLmhhbmRsZVN1Ym1pdCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9J3JlZ2lzdGVyX2Zvcm0nPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhcmVhJyBwbGFjZWhvbGRlcj0n0J/Qu9C+0YnQsNC00Ywg0YHQutC70LDQtNCwJy8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd0b3RhbF9hcmVhJyBwbGFjZWhvbGRlcj0n0J7QsdGJ0LjQuSDQv9C70L7RidCw0LTRjCDRgdC60LvQsNC00LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSduYW1lJyBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtScgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3R5cGVfc3RvcmFnZScgcGxhY2Vob2xkZXI9J9Ci0LjQvyDRgdC60LvQsNC00LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdyZW50VHlwZUlEJyBhcz0nc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJz7QotC40L8g0LDRgNC10L3QtNGLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbnRhbFR5cGUubWFwKHN1Yj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdWIuaWR9IHZhbHVlPXtzdWIuaWR9PntzdWIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3dhcm5pbmcnIHBsYWNlaG9sZGVyPSfQv9C+0LbQsNGA0L3QsNGPINGB0LjQs9C90LDQu9C40LfQsNGG0LjRjywg0L7RhdGA0LDQvdC90LDRjyDRgdC40LPQvdCw0LvQuNC30LDRhtC40Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd3YXJuaW5nX2FyZWEnICBwbGFjZWhvbGRlcj0n0L/Qu9C+0YnQsNC00LrQsCDQtNC70Y8g0L7RgtGB0YLQvtGPINC4INC80LDQvdC10LLRgNC40YDQvtCy0LDQvdC40Y8g0YLRgNCw0L3RgdC/0L7RgNGC0LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nY291bnRyeV9pZCcgYXM9J3NlbGVjdCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+0JLRi9Cx0LXRgNC40YLQtSDRgdGC0YDQsNC90YM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRyaWVzLm1hcChzdWI9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3ViLmlkfSB2YWx1ZT17c3ViLmlkfT57c3ViLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nY2l0eV9pZCcgYXM9J3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2l0aWVzLm1hcChzdWI9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3ViLmlkfSB2YWx1ZT17c3ViLmlkfT57c3ViLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nYWRkcmVzcycgcGxhY2Vob2xkZXI9J9CQ0LTRgNC10YEnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdjbGFzcycgcGxhY2Vob2xkZXI9J9Ca0LvQsNGB0YEnIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncHJpY2UnICBwbGFjZWhvbGRlcj0n0KbQtdC90LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmc9PT1mYWxzZSA/IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCg0JDQl9Cc0JXQodCi0JjQotCsPC9idXR0b24+OiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiICBkaXNhYmxlZD7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG51bGwsbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRQb3N0KSkiXSwic291cmNlUm9vdCI6IiJ9