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
        if (res) {
          setAmount('');
          console.log(res);
          window.open(res.data[0] + "?" + res.data[1]);
        } else {
          dispatch({
            type: 'ERROR_MESSAGE',
            payload: 'Что то пошло не так'
          });
        }
      })["catch"](function (err) {
        dispatch({
          type: 'ERROR_MESSAGE',
          payload: 'Что то пошло не так'
        });
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
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_7__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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
                lineNumber: 71,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
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
                  lineNumber: 82,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return onPayment();
                },
                className: "btn green",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJvblBheW1lbnQiLCJ0eXBlIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImNvb2tpZSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib3BlbiIsImRhdGEiLCJwYXlsb2FkIiwiZXJyIiwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwicGFyYW1zIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG9CLGtCQUVVQyxzREFBUSxDQUFDLEdBQUQsQ0FGbEI7QUFBQSxNQUViQyxPQUZhO0FBQUEsTUFFSkMsVUFGSTs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxTQUFELENBSFg7QUFBQSxNQUdiRyxJQUhhO0FBQUEsTUFHUkMsT0FIUTs7QUFBQSxtQkFJU0osc0RBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJYkssT0FKYTtBQUFBLE1BSUxDLFVBSks7O0FBQUEsbUJBS09OLHNEQUFRLENBQUMsRUFBRCxDQUxmO0FBQUEsTUFLYk8sTUFMYTtBQUFBLE1BS05DLFNBTE07O0FBT3BCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJYLFlBQVEsQ0FBQztBQUFD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LHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFzREU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkRELENBdEdEOztHQUFNWixPO1VBQ2FFLHVEOzs7S0FEYkYsTztBQXdHU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9iYWxhbmNlLjRmMjJlNjQxNDM5Y2Q4N2EzNzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCcmVhZEN1bWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9CcmVhZEN1bWJzQ29uZmlndXJlXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYWxhbmNlUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJDYWJpbmV0L0JhbGFuY2UnXHJcbmltcG9ydCBUcmFuc2FjdGlvbkhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvVHJhbnNhY3Rpb25IaXN0b3J5XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJzAnKVxyXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoJ2JhbGFuY2UnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LHNldEhpc3RvcnldID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2Ftb3VudCxzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IG9uUGF5bWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xPU0VfTUVTU0FHRSd9KVxyXG4gICAgaWYoYW1vdW50PjApIHtcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbWFrZVBheW1lbnQ/dXNlcl9pZD0ke2Nvb2tpZS5nZXQoJ2FjdGl2ZV91c2VyJyl9JmFtb3VudD0ke2Ftb3VudH1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgaWYocmVzKSB7XHJcbiAgICAgICAgICBzZXRBbW91bnQoJycpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB3aW5kb3cub3BlbihyZXMuZGF0YVswXSArIFwiP1wiICsgcmVzLmRhdGFbMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdFUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogJ9Cn0YLQviDRgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LonfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdFUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogJ9Cn0YLQviDRgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LonfSlcclxuICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ29rJylcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdFUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMnfSlcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgfVxyXG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly90ZXN0Lm1vbmV5LW1lbi5rei9hcGkvcGF5bWVudEhpc3RvcnknLCB7cGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpXHJcbiAgICB9fSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldEhpc3RvcnkocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KClcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZSBwYWRkaW5ncyBsaXR0bGVfcGFkXCI+XHJcbiAgICAgICAgICA8QnJlYWRDdW1icyAvPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtYWxsZXJfZm9udFwiPtCc0L7QuSDQsdCw0LvQsNC90YE8L2gxPlxyXG4gICAgICAgICAge3BhZ2UgPT09ICdiYWxhbmNlJyA/XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoJ3RyYW5zYWN0aW9uJyl9IGNsYXNzTmFtZT0nYnRuIGdyZWVuJz7QntGC0LrRgNGL0YLRjCDQuNGB0YLQvtGA0LjRjiDRgtGA0LDQvdC30LDQutGG0LjQuTwvYnV0dG9uPiA6IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoJ2JhbGFuY2UnKX0gY2xhc3NOYW1lPSdidG4gZ3JlZW4nPtCf0YDQvtCy0LXRgNC60LAg0LHQsNC70LDQvdGB0LA8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3BhZ2UgPT09ICdiYWxhbmNlJyA/IFxyXG4gICAgICAgIDxCYWxhbmNlUGFnZSBiYWxhbmNlPXtiYWxhbmNlfSAvPiA6IDxUcmFuc2FjdGlvbkhpc3RvcnkgaGlzdG9yeT17aGlzdG9yeX0gLz59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMT7Qn9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YI8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2JhbGFuY2UxLnBuZ1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50X190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7QntC90LvQsNC50L0g0LvRjtCx0YvQvCDRgdC/0L7RgdC+0LHQvtC8PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+0JHQsNC90LrQvtCy0YHQutC+0Lkg0LrQsNGA0YLQvtC5LCDQvtC90LvQsNC50L0t0L/Qu9Cw0YLQtdC20Lgg0LhcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINC60L7RiNC10LvRjNC60Lgg0YfQtdGA0LXQtyDRgdC10YDQstC40YEg0L/Qu9Cw0YLQtdC20LVcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFBheWJveC5rejwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fZ3JvdXAnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDJyBvbkNoYW5nZT17ZT0+c2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2Ftb3VudH0gY2xhc3NOYW1lPSdhbW91bnRfaW5wdXQnIG5hbWU9J2Ftb3VudCcgdHlwZT0nbnVtYmVyJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvblBheW1lbnQoKX0gY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCIgID7Qn9C+0L/QvtC70L3QuNGC0Ywg0L7QvdC70LDQudC9PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvYmFsYW5jZTIucG5nXCIgYWx0Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtCX0LDQv9GA0L7RgdC40YLRjCDRgdGH0LXRgiDQvdCwINC+0L/Qu9Cw0YLRgzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPtCS0Ysg0YHQvNC+0LbQtdGC0LUg0L/QvtC/0L7Qu9C90LjRgtGMINGB0YfQtdGCINC60LDQuiDRjtGALiDQu9C40YbQvlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAg0YHQviDQstGB0LXQvNC4INC90LXQvtCx0YXQvtC00LjQvNGL0LzQuCDQtNC+0LrRg9C80LXQvdGC0LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDQuCDQstGL0L/QuNGB0LrQsNC80LguPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvblBheW1lbnQoKX0gY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCIgID7Qn9C+0L/QvtC70L3QuNGC0Ywg0L7QvdC70LDQudC9PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==