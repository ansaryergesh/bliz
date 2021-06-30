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
          console.log(res);
          window.open(res.data[0] + "?" + res.data[1]);
        }
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
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_7__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
                lineNumber: 65,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
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
                  lineNumber: 76,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return onPayment();
                },
                className: "btn green",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJvblBheW1lbnQiLCJ0eXBlIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImNvb2tpZSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib3BlbiIsImRhdGEiLCJwYXlsb2FkIiwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwicGFyYW1zIiwidG9rZW4iLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG9CLGtCQUVVQyxzREFBUSxDQUFDLEdBQUQsQ0FGbEI7QUFBQSxNQUViQyxPQUZhO0FBQUEsTUFFSkMsVUFGSTs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxTQUFELENBSFg7QUFBQSxNQUdiRyxJQUhhO0FBQUEsTUFHUkMsT0FIUTs7QUFBQSxtQkFJU0osc0RBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJYkssT0FKYTtBQUFBLE1BSUxDLFVBSks7O0FBQUEsbUJBS09OLHNEQUFRLENBQUMsRUFBRCxDQUxmO0FBQUEsTUFLYk8sTUFMYTtBQUFBLE1BS05DLFNBTE07O0FBT3BCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJYLFlBQVEsQ0FBQztBQUFDWSxVQUFJ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VUFDYUUsdUQ7OztLQURiRixPO0FBa0dTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2JhbGFuY2UuZGE4YWFjYzk4NjU0MzJiZWRiNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJyZWFkQ3VtYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0JyZWFkQ3VtYnNDb25maWd1cmVcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEJhbGFuY2VQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvQmFsYW5jZSdcclxuaW1wb3J0IFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ2FiaW5ldC9UcmFuc2FjdGlvbkhpc3RvcnlcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgQmFsYW5jZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnMCcpXHJcbiAgY29uc3QgW3BhZ2Usc2V0UGFnZV0gPSB1c2VTdGF0ZSgnYmFsYW5jZScpXHJcbiAgY29uc3QgW2hpc3Rvcnksc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbYW1vdW50LHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qgb25QYXltZW50ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdDTE9TRV9NRVNTQUdFJ30pXHJcbiAgICBpZihhbW91bnQ+MCkge1xyXG4gICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9tYWtlUGF5bWVudD91c2VyX2lkPSR7Y29va2llLmdldCgnYWN0aXZlX3VzZXInKX0mYW1vdW50PSR7YW1vdW50fWApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBpZihyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKHJlcy5kYXRhWzBdICsgXCI/XCIgKyByZXMuZGF0YVsxXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiAn0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyd9KVxyXG4gICAgfVxyXG5cclxuICBcclxuICB9XHJcbiAgY29uc3QgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9wYXltZW50SGlzdG9yeScsIHtwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJylcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0SGlzdG9yeShyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUcmFuc2FjdGlvbkhpc3RvcnkoKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlIHBhZGRpbmdzIGxpdHRsZV9wYWRcIj5cclxuICAgICAgICAgIDxCcmVhZEN1bWJzIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic21hbGxlcl9mb250XCI+0JzQvtC5INCx0LDQu9Cw0L3RgTwvaDE+XHJcbiAgICAgICAgICB7cGFnZSA9PT0gJ2JhbGFuY2UnID9cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZSgndHJhbnNhY3Rpb24nKX0gY2xhc3NOYW1lPSdidG4gZ3JlZW4nPtCe0YLQutGA0YvRgtGMINC40YHRgtC+0YDQuNGOINGC0YDQsNC90LfQsNC60YbQuNC5PC9idXR0b24+IDogXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZSgnYmFsYW5jZScpfSBjbGFzc05hbWU9J2J0biBncmVlbic+0J/RgNC+0LLQtdGA0LrQsCDQsdCw0LvQsNC90YHQsDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cGFnZSA9PT0gJ2JhbGFuY2UnID8gXHJcbiAgICAgICAgPEJhbGFuY2VQYWdlIGJhbGFuY2U9e2JhbGFuY2V9IC8+IDogPFRyYW5zYWN0aW9uSGlzdG9yeSBoaXN0b3J5PXtoaXN0b3J5fSAvPn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICAgICAgPGgxPtCf0L7Qv9C+0LvQvdC40YLRjCDRgdGH0LXRgjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvYmFsYW5jZTEucG5nXCIgYWx0Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtCe0L3Qu9Cw0LnQvSDQu9GO0LHRi9C8INGB0L/QvtGB0L7QsdC+0Lw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QkdCw0L3QutC+0LLRgdC60L7QuSDQutCw0YDRgtC+0LksINC+0L3Qu9Cw0LnQvS3Qv9C70LDRgtC10LbQuCDQuFxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAg0LrQvtGI0LXQu9GM0LrQuCDRh9C10YDQtdC3INGB0LXRgNCy0LjRgSDQv9C70LDRgtC10LbQtVxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgUGF5Ym94Lmt6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybV9ncm91cCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMnIG9uQ2hhbmdlPXtlPT5zZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YW1vdW50fSBjbGFzc05hbWU9J2Ftb3VudF9pbnB1dCcgbmFtZT0nYW1vdW50JyB0eXBlPSdudW1iZXInPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uUGF5bWVudCgpfSBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIiAgPtCf0L7Qv9C+0LvQvdC40YLRjCDQvtC90LvQsNC50L08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9iYWxhbmNlMi5wbmdcIiBhbHQvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0JfQsNC/0YDQvtGB0LjRgtGMINGB0YfQtdGCINC90LAg0L7Qv9C70LDRgtGDPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+0JLRiyDRgdC80L7QttC10YLQtSDQv9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YIg0LrQsNC6INGO0YAuINC70LjRhtC+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDRgdC+INCy0YHQtdC80Lgg0L3QtdC+0LHRhdC+0LTQuNC80YvQvNC4INC00L7QutGD0LzQtdC90YLQsNC80LhcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINC4INCy0YvQv9C40YHQutCw0LzQuC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uUGF5bWVudCgpfSBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIiAgPtCf0L7Qv9C+0LvQvdC40YLRjCDQvtC90LvQsNC50L08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZTsiXSwic291cmNlUm9vdCI6IiJ9