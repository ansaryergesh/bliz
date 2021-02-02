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
      console.log(event.target.value);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat("https://test.money-men.kz/api", "/city?countryID")); // this.props.fetchRegions(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "register__container",
          children: [this.state.loading || this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 59
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
            initialValues: {
              area: '50',
              total_area: '55',
              image: 0,
              name: 'name',
              country_id: 1,
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
              _this4.handleSubmit(values);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
              className: "register_form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "area",
                placeholder: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "total_area",
                placeholder: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "name",
                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "type_storage",
                placeholder: "\u0422\u0438\u043F \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "rentTypeID",
                as: "select",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "\u0422\u0438\u043F \u0430\u0440\u0435\u043D\u0434\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, this), _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["rentalType"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, _this4);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning",
                placeholder: "\u043F\u043E\u0436\u0430\u0440\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u043E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning_area",
                placeholder: "\u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0441\u0442\u043E\u044F \u0438 \u043C\u0430\u043D\u0435\u0432\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "country_id",
                as: "select",
                onChange: this.handleCity,
                children: _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["countries"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
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
                    lineNumber: 118,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "address",
                placeholder: "\u0410\u0434\u0440\u0435\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "class",
                placeholder: "\u041A\u043B\u0430\u0441\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "price",
                placeholder: "\u0426\u0435\u043D\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this), this.state.loading === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                type: "submit",
                children: "\u0420\u0410\u0417\u041C\u0415\u0421\u0422\u0418\u0422\u042C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 49
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                disabled: true,
                children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 108
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZV9hZGQuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlcnJvck1lc3NhZ2UiLCJtc2ciLCJtc2dhY3Rpb24iLCJzdWNjZXNzTWVzc2FnZSIsIkFkZFBvc3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwiZGF0YSIsInN1YmNhdGVnb3JpZXMiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImNpdGllcyIsImlucHV0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNpdHkiLCJ2YWx1ZXMiLCJwb3N0IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhcmVhIiwidG90YWxfYXJlYSIsImltYWdlIiwibmFtZSIsImNvdW50cnlfaWQiLCJjaXR5X2lkIiwiYWRkcmVzcyIsInR5cGVfc3RvcmFnZSIsInRva2VuIiwiY29va2llIiwid2FybmluZyIsIndhcm5pbmdfYXJlYSIsInJlbnRUeXBlSUQiLCJwcmljZSIsInJlbnRhbFR5cGUiLCJtYXAiLCJzdWIiLCJpZCIsImNvdW50cmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFjO0FBQ3ZDQyxnQkFBWSxFQUFDLHNCQUFDQyxHQUFELEVBQVM7QUFBQ0YsY0FBUSxDQUFDRywwRUFBQSxDQUF1QkQsR0FBdkIsQ0FBRCxDQUFSO0FBQXND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QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUR3QjtBQUFBLGlCQUF6QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBdEJGLGVBNEJFLHFFQUFDLDRDQUFEO0FBQU8sb0JBQUksRUFBQyxTQUFaO0FBQXNCLDJCQUFXLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkYsZUE2QkUscUVBQUMsNENBQUQ7QUFBTyxvQkFBSSxFQUFDLE9BQVo7QUFBb0IsMkJBQVcsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTdCRixlQStCRSxxRUFBQyw0Q0FBRDtBQUFPLG9CQUFJLEVBQUMsT0FBWjtBQUFxQiwyQkFBVyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBL0JGLEVBZ0NHLEtBQUtuQyxLQUFMLENBQVdDLE9BQVgsS0FBcUIsS0FBckIsZ0JBQTZCO0FBQVEseUJBQVMsRUFBQyxLQUFsQjtBQUF3QixvQkFBSSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE3QixnQkFBd0Y7QUFBUSx5QkFBUyxFQUFDLEtBQWxCO0FBQXlCLHdCQUFRLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhDM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBZ0VIOzs7O0VBckhpQm9DLDRDQUFLLENBQUNDLFM7O0FBd0hiQyw4SEFBUSxDQUFDQywyREFBTyxDQUFDLElBQUQsRUFBTXpELGtCQUFOLENBQVAsQ0FBaUNNLE9BQWpDLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcmFnZV9hZGQuOGQxNWM5YjU0MGU5MTNkYzU2OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2hvY3Mvd2l0aEF1dGgnXHJcbmltcG9ydCAqIGFzIG1zZ2FjdGlvbiBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL21lc3NhZ2VBY3Rpb24nXHJcbmltcG9ydCB7IGNvdW50cmllcywgcmVudGFsVHlwZSB9IGZyb20gJy4uL2RlZmF1bHRzL2RlZmF1bHRzJztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4oe1xyXG4gIGVycm9yTWVzc2FnZToobXNnKSA9PiB7ZGlzcGF0Y2gobXNnYWN0aW9uLmVycm9yTWVzc2FnZShtc2cpKX0sXHJcbiAgc3VjY2Vzc01lc3NhZ2U6KG1zZykgPT4ge2Rpc3BhdGNoKG1zZ2FjdGlvbi5zdWNjZXNzTWVzc2FnZShtc2cpKX1cclxufSlcclxuXHJcbmNsYXNzIEFkZFBvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0Q2F0ZWdvcnlgKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiByZXMuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldFN1YmNhdGVnb3JpZXNgKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzdWJjYXRlZ29yaWVzOiByZXMuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBjaXRpZXM6IFtdLFxyXG4gICAgICAgIGlucHV0OiB7fSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZUNpdHkgPSB0aGlzLmhhbmRsZUNpdHkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQodmFsdWVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxyXG4gICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9hZGRTdG9yYWdlYCwgdmFsdWVzKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKCFyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8J9Cn0YLQviDRgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LonKVxyXG4gICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdWNjZXNzTWVzc2FnZSgn0KPRgdC/0LXRiNC90L4g0LTQvtCx0LDQstC70LXQvScpXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgbWVzc2FnZTogJ9Ce0YjQuNCx0LrQsCd9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaXR5KGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9jaXR5P2NvdW50cnlJRGApXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hSZWdpb25zKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyB8fHRoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nU3Bpbm5lciAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGgyPtCU0L7QsdCw0LLQuNGC0Ywg0YHQutC70LDQtDwvaDI+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICBhcmVhOiAnNTAnLFxyXG4gICAgICAgICAgICAgICAgICB0b3RhbF9hcmVhOiAnNTUnLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAxLFxyXG4gICAgICAgICAgICAgICAgICBjaXR5X2lkOiAxLFxyXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOidhZHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2NsYXNzIGInLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlX3N0b3JhZ2U6ICd0eXBlJyxcclxuICAgICAgICAgICAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgICAgICAgICAgIHdhcm5pbmc6ICd5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICB3YXJuaW5nX2FyZWE6ICd5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICByZW50VHlwZUlEOiAxLFxyXG4gICAgICAgICAgICAgICAgICBwcmljZTogJzEwMDAwJyxcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHt0aGlzLmhhbmRsZVN1Ym1pdCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9J3JlZ2lzdGVyX2Zvcm0nPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhcmVhJyBwbGFjZWhvbGRlcj0n0J/Qu9C+0YnQsNC00Ywg0YHQutC70LDQtNCwJy8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd0b3RhbF9hcmVhJyBwbGFjZWhvbGRlcj0n0J7QsdGJ0LjQuSDQv9C70L7RidCw0LTRjCDRgdC60LvQsNC00LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSduYW1lJyBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtScgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3R5cGVfc3RvcmFnZScgcGxhY2Vob2xkZXI9J9Ci0LjQvyDRgdC60LvQsNC00LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdyZW50VHlwZUlEJyBhcz0nc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJz7QotC40L8g0LDRgNC10L3QtNGLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbnRhbFR5cGUubWFwKHN1Yj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdWIuaWR9IHZhbHVlPXtzdWIuaWR9PntzdWIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3dhcm5pbmcnIHBsYWNlaG9sZGVyPSfQv9C+0LbQsNGA0L3QsNGPINGB0LjQs9C90LDQu9C40LfQsNGG0LjRjywg0L7RhdGA0LDQvdC90LDRjyDRgdC40LPQvdCw0LvQuNC30LDRhtC40Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd3YXJuaW5nX2FyZWEnICBwbGFjZWhvbGRlcj0n0L/Qu9C+0YnQsNC00LrQsCDQtNC70Y8g0L7RgtGB0YLQvtGPINC4INC80LDQvdC10LLRgNC40YDQvtCy0LDQvdC40Y8g0YLRgNCw0L3RgdC/0L7RgNGC0LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nY291bnRyeV9pZCcgYXM9J3NlbGVjdCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50cmllcy5tYXAoc3ViPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N1Yi5pZH0gdmFsdWU9e3N1Yi5pZH0+e3N1Yi5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2NpdHlfaWQnIGFzPSdzZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNpdGllcy5tYXAoc3ViPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N1Yi5pZH0gdmFsdWU9e3N1Yi5pZH0+e3N1Yi5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2FkZHJlc3MnIHBsYWNlaG9sZGVyPSfQkNC00YDQtdGBJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nY2xhc3MnIHBsYWNlaG9sZGVyPSfQmtC70LDRgdGBJyAvPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3ByaWNlJyAgcGxhY2Vob2xkZXI9J9Cm0LXQvdCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nPT09ZmFsc2UgPyA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj7QoNCQ0JfQnNCV0KHQotCY0KLQrDwvYnV0dG9uPjogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiAgZGlzYWJsZWQ+0JfQsNCz0YDRg9C30LrQsC4uLjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkUG9zdCkpIl0sInNvdXJjZVJvb3QiOiIifQ==