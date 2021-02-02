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
      cities: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "register__container",
          children: [this.state.loading || this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 59
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
                lineNumber: 88,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "total_area",
                placeholder: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "name",
                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "type_storage",
                placeholder: "\u0422\u0438\u043F \u0441\u043A\u043B\u0430\u0434\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "rental_type",
                as: "select",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "0",
                  children: "\u0422\u0438\u043F \u0430\u0440\u0435\u043D\u0434\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, this), _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["rentalType"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 23
                  }, _this4);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning",
                placeholder: "\u043F\u043E\u0436\u0430\u0440\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u043E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "warning_area",
                placeholder: "\u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0441\u0442\u043E\u044F \u0438 \u043C\u0430\u043D\u0435\u0432\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "country_id",
                as: "select",
                children: _defaults_defaults__WEBPACK_IMPORTED_MODULE_15__["countries"].map(function (sub) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: sub.id,
                    children: sub.name
                  }, sub.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
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
                    lineNumber: 109,
                    columnNumber: 23
                  }, _this4);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "address",
                placeholder: "\u0410\u0434\u0440\u0435\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "class",
                placeholder: "\u041A\u043B\u0430\u0441\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
                name: "price",
                placeholder: "\u0426\u0435\u043D\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this), this.state.loading === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                type: "submit",
                children: "\u0420\u0410\u0417\u041C\u0415\u0421\u0422\u0418\u0422\u042C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 49
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn",
                disabled: true,
                children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 108
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZV9hZGQuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJlcnJvck1lc3NhZ2UiLCJtc2ciLCJtc2dhY3Rpb24iLCJzdWNjZXNzTWVzc2FnZSIsIkFkZFBvc3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwiZGF0YSIsInN1YmNhdGVnb3JpZXMiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImNpdGllcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJ2YWx1ZXMiLCJwb3N0IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFyZWEiLCJ0b3RhbF9hcmVhIiwiaW1hZ2UiLCJuYW1lIiwiY291bnRyeV9pZCIsImNpdHlfaWQiLCJhZGRyZXNzIiwidHlwZV9zdG9yYWdlIiwidG9rZW4iLCJjb29raWUiLCJ3YXJuaW5nIiwid2FybmluZ19hcmVhIiwicmVudFR5cGVJRCIsInByaWNlIiwicmVudGFsVHlwZSIsIm1hcCIsInN1YiIsImlkIiwiY291bnRyaWVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWM7QUFDdkNDLGdCQUFZLEVBQUMsc0JBQUNDLEdBQUQsRUFBUztBQUFDRixjQUFRLENBQUNHLDBFQUFBLENBQXVCRCxHQUF2QixDQUFELENBQVI7QUFBc0MsS0FEdEI7QUFFdkNFLGtCQUFjLEVBQUMsd0JBQUNGLEdBQUQsRUFBUztBQUFD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QyxPQUFaO0FBQXFCLDJCQUFXLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQkYsRUFnQ0csS0FBSzlCLEtBQUwsQ0FBV0MsT0FBWCxLQUFxQixLQUFyQixnQkFBNkI7QUFBUSx5QkFBUyxFQUFDLEtBQWxCO0FBQXdCLG9CQUFJLEVBQUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTdCLGdCQUF3RjtBQUFRLHlCQUFTLEVBQUMsS0FBbEI7QUFBeUIsd0JBQVEsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEMzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFnRUg7Ozs7RUE1R2lCK0IsNENBQUssQ0FBQ0MsUzs7QUErR2JDLDhIQUFRLENBQUNDLDJEQUFPLENBQUMsSUFBRCxFQUFNcEQsa0JBQU4sQ0FBUCxDQUFpQ00sT0FBakMsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yYWdlX2FkZC45YThlNDQzY2ZjMDFhYWNhODMwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vaG9jcy93aXRoQXV0aCdcclxuaW1wb3J0ICogYXMgbXNnYWN0aW9uIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvbWVzc2FnZUFjdGlvbidcclxuaW1wb3J0IHsgY291bnRyaWVzLCByZW50YWxUeXBlIH0gZnJvbSAnLi4vZGVmYXVsdHMvZGVmYXVsdHMnO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9Pih7XHJcbiAgZXJyb3JNZXNzYWdlOihtc2cpID0+IHtkaXNwYXRjaChtc2dhY3Rpb24uZXJyb3JNZXNzYWdlKG1zZykpfSxcclxuICBzdWNjZXNzTWVzc2FnZToobXNnKSA9PiB7ZGlzcGF0Y2gobXNnYWN0aW9uLnN1Y2Nlc3NNZXNzYWdlKG1zZykpfVxyXG59KVxyXG5cclxuY2xhc3MgQWRkUG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRDYXRlZ29yeWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHJlcy5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0U3ViY2F0ZWdvcmllc2ApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHN1YmNhdGVnb3JpZXM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNpdGllczogW11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2FkZFN0b3JhZ2VgLCB2YWx1ZXMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYoIXJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmVycm9yTWVzc2FnZShyZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwn0KfRgtC+INGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnN1Y2Nlc3NNZXNzYWdlKCfQo9GB0L/QtdGI0L3QviDQtNC+0LHQsNCy0LvQtdC9JylcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCBtZXNzYWdlOiAn0J7RiNC40LHQutCwJ30pXHJcbiAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZ2lzdGVyJz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgfHx0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZ1NwaW5uZXIgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxoMj7QlNC+0LHQsNCy0LjRgtGMINGB0LrQu9Cw0LQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgYXJlYTogJzUwJyxcclxuICAgICAgICAgICAgICAgICAgdG90YWxfYXJlYTogJzU1JyxcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgY291bnRyeV9pZDogMSxcclxuICAgICAgICAgICAgICAgICAgY2l0eV9pZDogMSxcclxuICAgICAgICAgICAgICAgICAgYWRkcmVzczonYWRyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdjbGFzcyBiJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZV9zdG9yYWdlOiAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgICAgICAgICAgICB3YXJuaW5nOiAneWVzJyxcclxuICAgICAgICAgICAgICAgICAgd2FybmluZ19hcmVhOiAneWVzJyxcclxuICAgICAgICAgICAgICAgICAgcmVudFR5cGVJRDogMSxcclxuICAgICAgICAgICAgICAgICAgcHJpY2U6ICcxMDAwMCcsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7dGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzKX19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPSdyZWdpc3Rlcl9mb3JtJz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nYXJlYScgcGxhY2Vob2xkZXI9J9Cf0LvQvtGJ0LDQtNGMINGB0LrQu9Cw0LTQsCcvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ndG90YWxfYXJlYScgcGxhY2Vob2xkZXI9J9Ce0LHRidC40Lkg0L/Qu9C+0YnQsNC00Ywg0YHQutC70LDQtNCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd0eXBlX3N0b3JhZ2UnIHBsYWNlaG9sZGVyPSfQotC40L8g0YHQutC70LDQtNCwJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncmVudGFsX3R5cGUnIGFzPSdzZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnPtCi0LjQvyDQsNGA0LXQvdC00Ys8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVudGFsVHlwZS5tYXAoc3ViPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N1Yi5pZH0gdmFsdWU9e3N1Yi5pZH0+e3N1Yi5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nd2FybmluZycgcGxhY2Vob2xkZXI9J9C/0L7QttCw0YDQvdCw0Y8g0YHQuNCz0L3QsNC70LjQt9Cw0YbQuNGPLCDQvtGF0YDQsNC90L3QsNGPINGB0LjQs9C90LDQu9C40LfQsNGG0LjRjycgLz5cclxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3dhcm5pbmdfYXJlYScgIHBsYWNlaG9sZGVyPSfQv9C70L7RidCw0LTQutCwINC00LvRjyDQvtGC0YHRgtC+0Y8g0Lgg0LzQsNC90LXQstGA0LjRgNC+0LLQsNC90LjRjyDRgtGA0LDQvdGB0L/QvtGA0YLQsCcgLz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdjb3VudHJ5X2lkJyBhcz0nc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRyaWVzLm1hcChzdWI9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3ViLmlkfSB2YWx1ZT17c3ViLmlkfT57c3ViLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nY2l0eV9pZCcgYXM9J3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2l0aWVzLm1hcChzdWI9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3ViLmlkfSB2YWx1ZT17c3ViLmlkfT57c3ViLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nYWRkcmVzcycgcGxhY2Vob2xkZXI9J9CQ0LTRgNC10YEnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdjbGFzcycgcGxhY2Vob2xkZXI9J9Ca0LvQsNGB0YEnIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncHJpY2UnICBwbGFjZWhvbGRlcj0n0KbQtdC90LAnIC8+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmc9PT1mYWxzZSA/IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPtCg0JDQl9Cc0JXQodCi0JjQotCsPC9idXR0b24+OiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiICBkaXNhYmxlZD7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG51bGwsbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRQb3N0KSkiXSwic291cmNlUm9vdCI6IiJ9