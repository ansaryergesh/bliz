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
      console.log(event.target.value); // this.props.fetchRegions(event.target.value);

      this.setState({
        input: input
      });
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
            lineNumber: 71,
            columnNumber: 59
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
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
                lineNumber: 96,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "total_area",
                placeholder: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "name",
                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "type_storage",
                placeholder: "\u0422\u0438\u043F \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "rentTypeID",
                as: "select",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "\u0422\u0438\u043F \u0430\u0440\u0435\u043D\u0434\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, this), _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["rentalType"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 23
                  }, _this4);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning",
                placeholder: "\u043F\u043E\u0436\u0430\u0440\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u043E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning_area",
                placeholder: "\u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0441\u0442\u043E\u044F \u0438 \u043C\u0430\u043D\u0435\u0432\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
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
                    lineNumber: 111,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
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
                    lineNumber: 117,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "address",
                placeholder: "\u0410\u0434\u0440\u0435\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "class",
                placeholder: "\u041A\u043B\u0430\u0441\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "price",
                placeholder: "\u0426\u0435\u043D\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, this), this.state.loading === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                type: "submit",
                children: "\u0420\u0410\u0417\u041C\u0415\u0421\u0422\u0418\u0422\u042C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 49
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                disabled: true,
                children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 108
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZV9hZGQuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlcnJvck1lc3NhZ2UiLCJtc2ciLCJtc2dhY3Rpb24iLCJzdWNjZXNzTWVzc2FnZSIsIkFkZFBvc3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwiZGF0YSIsInN1YmNhdGVnb3JpZXMiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImNpdGllcyIsImlucHV0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNpdHkiLCJ2YWx1ZXMiLCJwb3N0IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhcmVhIiwidG90YWxfYXJlYSIsImltYWdlIiwibmFtZSIsImNvdW50cnlfaWQiLCJjaXR5X2lkIiwiYWRkcmVzcyIsInR5cGVfc3RvcmFnZSIsInRva2VuIiwiY29va2llIiwid2FybmluZyIsIndhcm5pbmdfYXJlYSIsInJlbnRUeXBlSUQiLCJwcmljZSIsInJlbnRhbFR5cGUiLCJtYXAiLCJzdWIiLCJpZCIsImNvdW50cmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFjO0FBQ3ZDQyxnQkFBWSxFQUFDLHNCQUFDQyxHQUFELEVBQVM7QUFBQ0YsY0FBUSxDQUFDRywwRUFBQSxDQUF1QkQsR0FBdkIsQ0FBRCxDQUFSO0FBQXND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QUcsQ0FBQ0MsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEd0I7QUFBQSxpQkFBekI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXRCRixlQTRCRSxxRUFBQyw0Q0FBRDtBQUFPLG9CQUFJLEVBQUMsU0FBWjtBQUFzQiwyQkFBVyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBNUJGLGVBNkJFLHFFQUFDLDRDQUFEO0FBQU8sb0JBQUksRUFBQyxPQUFaO0FBQW9CLDJCQUFXLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE3QkYsZUErQkUscUVBQUMsNENBQUQ7QUFBTyxvQkFBSSxFQUFDLE9BQVo7QUFBcUIsMkJBQVcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQS9CRixFQWdDRyxLQUFLbkMsS0FBTCxDQUFXQyxPQUFYLEtBQXFCLEtBQXJCLGdCQUE2QjtBQUFRLHlCQUFTLEVBQUMsS0FBbEI7QUFBd0Isb0JBQUksRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBN0IsZ0JBQXdGO0FBQVEseUJBQVMsRUFBQyxLQUFsQjtBQUF5Qix3QkFBUSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQzNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWdFSDs7OztFQXBIaUJvQyw0Q0FBSyxDQUFDQyxTOztBQXVIYkMsOEhBQVEsQ0FBQ0MsMkRBQU8sQ0FBQyxJQUFELEVBQU16RCxrQkFBTixDQUFQLENBQWlDTSxPQUFqQyxDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2VfYWRkLjY2OTEzNDdiYmFlZmQ3YzZmMDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9ob2NzL3dpdGhBdXRoJ1xyXG5pbXBvcnQgKiBhcyBtc2dhY3Rpb24gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9tZXNzYWdlQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb3VudHJpZXMsIHJlbnRhbFR5cGUgfSBmcm9tICcuLi9kZWZhdWx0cy9kZWZhdWx0cyc7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+KHtcclxuICBlcnJvck1lc3NhZ2U6KG1zZykgPT4ge2Rpc3BhdGNoKG1zZ2FjdGlvbi5lcnJvck1lc3NhZ2UobXNnKSl9LFxyXG4gIHN1Y2Nlc3NNZXNzYWdlOihtc2cpID0+IHtkaXNwYXRjaChtc2dhY3Rpb24uc3VjY2Vzc01lc3NhZ2UobXNnKSl9XHJcbn0pXHJcblxyXG5jbGFzcyBBZGRQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldENhdGVnb3J5YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogcmVzLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRTdWJjYXRlZ29yaWVzYClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3ViY2F0ZWdvcmllczogcmVzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2l0aWVzOiBbXSxcclxuICAgICAgICBpbnB1dDoge30sXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5oYW5kbGVDaXR5ID0gdGhpcy5oYW5kbGVDaXR5LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KHZhbHVlcykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vYWRkU3RvcmFnZWAsIHZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZighcmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSB8fCfQp9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6JylcclxuICAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIHRoaXMucHJvcHMuc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L0nKVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIG1lc3NhZ2U6ICfQntGI0LjQsdC60LAnfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2l0eShldmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuZmV0Y2hSZWdpb25zKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0fSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZ2lzdGVyJz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgfHx0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZ1NwaW5uZXIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxoMj7QlNC+0LHQsNCy0LjRgtGMINGB0LrQu9Cw0LQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgYXJlYTogJzUwJyxcclxuICAgICAgICAgICAgICAgICAgdG90YWxfYXJlYTogJzU1JyxcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgY291bnRyeV9pZDogMSxcclxuICAgICAgICAgICAgICAgICAgY2l0eV9pZDogMSxcclxuICAgICAgICAgICAgICAgICAgYWRkcmVzczonYWRyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdjbGFzcyBiJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZV9zdG9yYWdlOiAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgICAgICAgICAgICB3YXJuaW5nOiAneWVzJyxcclxuICAgICAgICAgICAgICAgICAgd2FybmluZ19hcmVhOiAneWVzJyxcclxuICAgICAgICAgICAgICAgICAgcmVudFR5cGVJRDogMSxcclxuICAgICAgICAgICAgICAgICAgcHJpY2U6ICcxMDAwMCcsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7dGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzKX19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPSdyZWdpc3Rlcl9mb3JtJz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nYXJlYScgcGxhY2Vob2xkZXI9J9Cf0LvQvtGJ0LDQtNGMINGB0LrQu9Cw0LTQsCcvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ndG90YWxfYXJlYScgcGxhY2Vob2xkZXI9J9Ce0LHRidC40Lkg0L/Qu9C+0YnQsNC00Ywg0YHQutC70LDQtNCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd0eXBlX3N0b3JhZ2UnIHBsYWNlaG9sZGVyPSfQotC40L8g0YHQutC70LDQtNCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncmVudFR5cGVJRCcgYXM9J3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+0KLQuNC/INCw0YDQtdC90LTRizwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZW50YWxUeXBlLm1hcChzdWI9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3ViLmlkfSB2YWx1ZT17c3ViLmlkfT57c3ViLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd3YXJuaW5nJyBwbGFjZWhvbGRlcj0n0L/QvtC20LDRgNC90LDRjyDRgdC40LPQvdCw0LvQuNC30LDRhtC40Y8sINC+0YXRgNCw0L3QvdCw0Y8g0YHQuNCz0L3QsNC70LjQt9Cw0YbQuNGPJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nd2FybmluZ19hcmVhJyAgcGxhY2Vob2xkZXI9J9C/0LvQvtGJ0LDQtNC60LAg0LTQu9GPINC+0YLRgdGC0L7RjyDQuCDQvNCw0L3QtdCy0YDQuNGA0L7QstCw0L3QuNGPINGC0YDQsNC90YHQv9C+0YDRgtCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2NvdW50cnlfaWQnIGFzPSdzZWxlY3QnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudHJpZXMubWFwKHN1Yj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdWIuaWR9IHZhbHVlPXtzdWIuaWR9PntzdWIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdjaXR5X2lkJyBhcz0nc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaXRpZXMubWFwKHN1Yj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzdWIuaWR9IHZhbHVlPXtzdWIuaWR9PntzdWIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhZGRyZXNzJyBwbGFjZWhvbGRlcj0n0JDQtNGA0LXRgScgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2NsYXNzJyBwbGFjZWhvbGRlcj0n0JrQu9Cw0YHRgScgLz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdwcmljZScgIHBsYWNlaG9sZGVyPSfQptC10L3QsCcgLz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZz09PWZhbHNlID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+0KDQkNCX0JzQldCh0KLQmNCi0Kw8L2J1dHRvbj46IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgIGRpc2FibGVkPtCX0LDQs9GA0YPQt9C60LAuLi48L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZFBvc3QpKSJdLCJzb3VyY2VSb290IjoiIn0=