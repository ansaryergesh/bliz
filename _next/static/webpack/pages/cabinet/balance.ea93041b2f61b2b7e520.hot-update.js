webpackHotUpdate_N_E("pages/cabinet/balance",{

/***/ "./pages/cabinet/balance.js":
/*!**********************************!*\
  !*** ./pages/cabinet/balance.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_BreadCumbsConfigure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/BreadCumbsConfigure */ "./components/shared/BreadCumbsConfigure.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/userCabinet/Balance */ "./components/userCabinet/Balance.js");
/* harmony import */ var _components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/userCabinet/TransactionHistory */ "./components/userCabinet/TransactionHistory.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\cabinet\\balance.js",
    _this = undefined,
    _s = $RefreshSig$();









var Balance = function Balance() {
  _s();

  var _jsxDEV2;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('0'),
      balance = _useState[0],
      setBalance = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('balance'),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      history = _useState3[0],
      setHistory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      amount = _useState4[0],
      setAmount = _useState4[1];

  var onPayment = function onPayment() {
    dispatch({
      type: 'CLOSE_MESSAGE'
    });

    if (amount > 0) {
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("https://test.money-men.kz/api", "/makePayment?user_id=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('active_user'), "&amount=").concat(amount)).then(function (res) {
        console.log(res);
      });
    } else {
      console.log('ok');
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'Введите сумму'
      });
    }
  };

  var getTransactionHistory = function getTransactionHistory() {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://test.money-men.kz/api/paymentHistory', {
      params: {
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token')
      }
    }).then(function (res) {
      setHistory(res.data.data);
      console.log(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getTransactionHistory();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "grid-container container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "products__title paddings little_pad",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_shared_BreadCumbsConfigure__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_7__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "balance__top-up__wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "balance__top-up__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "balance__top-up__item__img",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                src: "/img/widgets/balance1.png",
                alt: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", (_jsxDEV2 = {
                  className: "form_group",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443",
                  onChange: function onChange(e) {
                    return setAmount(e.target.value);
                  },
                  value: amount
                }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "amount_input"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "name", "amount"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "type", "number"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return onPayment();
                },
                className: "btn green",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(Balance, "EIDFIzPYhLmZHIj2MYuQgOJfh2w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]];
});

_c = Balance;
/* harmony default export */ __webpack_exports__["default"] = (Balance);

var _c;

$RefreshReg$(_c, "Balance");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJvblBheW1lbnQiLCJ0eXBlIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImNvb2tpZSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImdldFRyYW5zYWN0aW9uSGlzdG9yeSIsInBhcmFtcyIsInRva2VuIiwiZGF0YSIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEb0Isa0JBRVVDLHNEQUFRLENBQUMsR0FBRCxDQUZsQjtBQUFBLE1BRWJDLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUFBLG1CQUdHRixzREFBUSxDQUFDLFNBQUQsQ0FIWDtBQUFBLE1BR2JHLElBSGE7QUFBQSxNQUdSQyxPQUhROztBQUFBLG1CQUlTSixzREFBUSxDQUFDLEVBQUQsQ0FKakI7QUFBQSxNQUliSyxPQUphO0FBQUEsTUFJTEMsVUFKSzs7QUFBQSxtQkFLT04sc0RBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUtiTyxNQUxhO0FBQUEsTUFLTkMsU0FMTTs7QUFPcEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QlgsWUFBUSxDQUFDO0FBQUNZLFVBQUksRUFBRTtBQUFQLEtBQUQs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O0FBQUEseUJBREYsZUFFRTtBQUFBLHVPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsa0xBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFRQTtBQUFPLDJCQUFTLEVBQUMsWUFBakI7QUFBOEIsNkJBQVcsRUFBQywyRUFBMUM7QUFBMEQsMEJBQVEsRUFBRSxrQkFBQXFCLENBQUM7QUFBQSwyQkFBRWxCLFNBQVMsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxtQkFBckU7QUFBa0csdUJBQUssRUFBRXJCO0FBQXpHLG9JQUEySCxjQUEzSCwrR0FBK0ksUUFBL0ksK0dBQTZKLFFBQTdKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBV0U7QUFBRyx1QkFBTyxFQUFFO0FBQUEseUJBQU1FLFNBQVMsRUFBZjtBQUFBLGlCQUFaO0FBQStCLHlCQUFTLEVBQUMsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFzREU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkRELENBNUZEOztHQUFNWixPO1VBQ2FFLHVEOzs7S0FEYkYsTztBQThGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmVhOTMwNDFiMmY2MWIyYjdlNTIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCcmVhZEN1bWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9CcmVhZEN1bWJzQ29uZmlndXJlXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYWxhbmNlUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJDYWJpbmV0L0JhbGFuY2UnXHJcbmltcG9ydCBUcmFuc2FjdGlvbkhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvVHJhbnNhY3Rpb25IaXN0b3J5XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJzAnKVxyXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoJ2JhbGFuY2UnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LHNldEhpc3RvcnldID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2Ftb3VudCxzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IG9uUGF5bWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xPU0VfTUVTU0FHRSd9KVxyXG4gICAgaWYoYW1vdW50PjApIHtcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbWFrZVBheW1lbnQ/dXNlcl9pZD0ke2Nvb2tpZS5nZXQoJ2FjdGl2ZV91c2VyJyl9JmFtb3VudD0ke2Ftb3VudH1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyd9KVxyXG4gICAgfVxyXG5cclxuICBcclxuICB9XHJcbiAgY29uc3QgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9wYXltZW50SGlzdG9yeScsIHtwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJylcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0SGlzdG9yeShyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUcmFuc2FjdGlvbkhpc3RvcnkoKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlIHBhZGRpbmdzIGxpdHRsZV9wYWRcIj5cclxuICAgICAgICAgIDxCcmVhZEN1bWJzIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic21hbGxlcl9mb250XCI+0JzQvtC5INCx0LDQu9Cw0L3RgTwvaDE+XHJcbiAgICAgICAgICB7cGFnZSA9PT0gJ2JhbGFuY2UnID9cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZSgndHJhbnNhY3Rpb24nKX0gY2xhc3NOYW1lPSdidG4gZ3JlZW4nPtCe0YLQutGA0YvRgtGMINC40YHRgtC+0YDQuNGOINGC0YDQsNC90LfQsNC60YbQuNC5PC9idXR0b24+IDogXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZSgnYmFsYW5jZScpfSBjbGFzc05hbWU9J2J0biBncmVlbic+0J/RgNC+0LLQtdGA0LrQsCDQsdCw0LvQsNC90YHQsDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cGFnZSA9PT0gJ2JhbGFuY2UnID8gXHJcbiAgICAgICAgPEJhbGFuY2VQYWdlIGJhbGFuY2U9e2JhbGFuY2V9IC8+IDogPFRyYW5zYWN0aW9uSGlzdG9yeSBoaXN0b3J5PXtoaXN0b3J5fSAvPn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICAgICAgPGgxPtCf0L7Qv9C+0LvQvdC40YLRjCDRgdGH0LXRgjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvYmFsYW5jZTEucG5nXCIgYWx0Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtCe0L3Qu9Cw0LnQvSDQu9GO0LHRi9C8INGB0L/QvtGB0L7QsdC+0Lw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QkdCw0L3QutC+0LLRgdC60L7QuSDQutCw0YDRgtC+0LksINC+0L3Qu9Cw0LnQvS3Qv9C70LDRgtC10LbQuCDQuFxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAg0LrQvtGI0LXQu9GM0LrQuCDRh9C10YDQtdC3INGB0LXRgNCy0LjRgSDQv9C70LDRgtC10LbQtVxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgUGF5Ym94Lmt6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybV9ncm91cCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMnIG9uQ2hhbmdlPXtlPT5zZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YW1vdW50fSBjbGFzc05hbWU9J2Ftb3VudF9pbnB1dCcgbmFtZT0nYW1vdW50JyB0eXBlPSdudW1iZXInPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uUGF5bWVudCgpfSBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIiAgPtCf0L7Qv9C+0LvQvdC40YLRjCDQvtC90LvQsNC50L08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9iYWxhbmNlMi5wbmdcIiBhbHQvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0JfQsNC/0YDQvtGB0LjRgtGMINGB0YfQtdGCINC90LAg0L7Qv9C70LDRgtGDPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+0JLRiyDRgdC80L7QttC10YLQtSDQv9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YIg0LrQsNC6INGO0YAuINC70LjRhtC+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDRgdC+INCy0YHQtdC80Lgg0L3QtdC+0LHRhdC+0LTQuNC80YvQvNC4INC00L7QutGD0LzQtdC90YLQsNC80LhcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINC4INCy0YvQv9C40YHQutCw0LzQuC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uUGF5bWVudCgpfSBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIiAgPtCf0L7Qv9C+0LvQvdC40YLRjCDQvtC90LvQsNC50L08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZTsiXSwic291cmNlUm9vdCI6IiJ9