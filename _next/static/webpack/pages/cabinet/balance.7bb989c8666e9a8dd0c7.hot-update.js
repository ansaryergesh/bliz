webpackHotUpdate_N_E("pages/cabinet/balance",{

/***/ "./pages/cabinet/balance.js":
/*!**********************************!*\
  !*** ./pages/cabinet/balance.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_BreadCumbsConfigure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/BreadCumbsConfigure */ "./components/shared/BreadCumbsConfigure.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/userCabinet/Balance */ "./components/userCabinet/Balance.js");
/* harmony import */ var _components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/userCabinet/TransactionHistory */ "./components/userCabinet/TransactionHistory.js");


var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\cabinet\\balance.js",
    _this = undefined,
    _s = $RefreshSig$();








var Balance = function Balance() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('0'),
      balance = _useState[0],
      setBalance = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('balance'),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      history = _useState3[0],
      setHistory = _useState3[1];

  var onPayment = function onPayment() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat("https://test.money-men.kz/api", "/makePayment"));
  };

  var getTransactionHistory = function getTransactionHistory() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://test.money-men.kz/api/paymentHistory', {
      params: {
        token: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token')
      }
    }).then(function (res) {
      setHistory(res.data.data);
      console.log(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getTransactionHistory();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "grid-container container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "products__title paddings little_pad",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_BreadCumbsConfigure__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_5__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_6__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "balance__top-up__wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "balance__top-up__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__img",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/balance1.png",
                alt: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "btn green",
                href: "#",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "balance__top-up__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__img",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/balance2.png",
                alt: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043A\u0430\u043A \u044E\u0440. \u043B\u0438\u0446\u043E", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, _this), "\u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, _this), "\u0438 \u0432\u044B\u043F\u0438\u0441\u043A\u0430\u043C\u0438."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "btn green",
                href: "#",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Balance, "DBzDW8QmtCHlwACjnwxuSLhPVjU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJ1c2VTdGF0ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwicGFnZSIsInNldFBhZ2UiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsIm9uUGF5bWVudCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJnZXRUcmFuc2FjdGlvbkhpc3RvcnkiLCJnZXQiLCJwYXJhbXMiLCJ0b2tlbiIsImNvb2tpZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsR0FBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLFNBQUQsQ0FGWDtBQUFBLE1BRWJHLElBRmE7QUFBQSxNQUVSQyxPQUZROztBQUFBLG1CQUdTSixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdiSyxPQUhhO0FBQUEsTUFHTEMsVUFISzs7QUFNcEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkMsZ0RBQUssQ0FBQ0MsSUFBTixXQUFjQywrQkFBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDSCxnREFBSyxDQUFDSSxHQUFOLENBQVUsOENBQVYsRUFBMEQ7QUFBQ0MsWUFBTSxFQUFFO0FBQ2pFQyxhQUFLLEVBQUVDLGdEQUFNLENBQUNILEdBQVAsQ0FBVyxPQUFYO0FBRDBEO0FBQVQsS0FBMUQsRUFHR0ksSUFISCxDQUdRLFVBQUFDLEdBQUcsRUFBRztBQUNW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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSwrT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLDBNQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVNFO0FBQUcseUJBQVMsRUFBQyxXQUFiO0FBQXlCLG9CQUFJLEVBQUMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBb0RFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQTlFRDs7R0FBTU4sTzs7S0FBQUEsTztBQWdGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9iYWxhbmNlLjdiYjk4OWM4NjY2ZTlhOGRkMGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCcmVhZEN1bWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9CcmVhZEN1bWJzQ29uZmlndXJlXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYWxhbmNlUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJDYWJpbmV0L0JhbGFuY2UnXHJcbmltcG9ydCBUcmFuc2FjdGlvbkhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvVHJhbnNhY3Rpb25IaXN0b3J5XCI7XHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJzAnKVxyXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoJ2JhbGFuY2UnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LHNldEhpc3RvcnldID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuICBjb25zdCBvblBheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9tYWtlUGF5bWVudGApXHJcbiAgfVxyXG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly90ZXN0Lm1vbmV5LW1lbi5rei9hcGkvcGF5bWVudEhpc3RvcnknLCB7cGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpXHJcbiAgICB9fSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldEhpc3RvcnkocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KClcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZSBwYWRkaW5ncyBsaXR0bGVfcGFkXCI+XHJcbiAgICAgICAgICA8QnJlYWRDdW1icyAvPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtYWxsZXJfZm9udFwiPtCc0L7QuSDQsdCw0LvQsNC90YE8L2gxPlxyXG4gICAgICAgICAge3BhZ2UgPT09ICdiYWxhbmNlJyA/XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoJ3RyYW5zYWN0aW9uJyl9IGNsYXNzTmFtZT0nYnRuIGdyZWVuJz7QntGC0LrRgNGL0YLRjCDQuNGB0YLQvtGA0LjRjiDRgtGA0LDQvdC30LDQutGG0LjQuTwvYnV0dG9uPiA6IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoJ2JhbGFuY2UnKX0gY2xhc3NOYW1lPSdidG4gZ3JlZW4nPtCf0YDQvtCy0LXRgNC60LAg0LHQsNC70LDQvdGB0LA8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3BhZ2UgPT09ICdiYWxhbmNlJyA/IFxyXG4gICAgICAgIDxCYWxhbmNlUGFnZSBiYWxhbmNlPXtiYWxhbmNlfSAvPiA6IDxUcmFuc2FjdGlvbkhpc3RvcnkgaGlzdG9yeT17aGlzdG9yeX0gLz59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMT7Qn9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YI8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2JhbGFuY2UxLnBuZ1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50X190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7QntC90LvQsNC50L0g0LvRjtCx0YvQvCDRgdC/0L7RgdC+0LHQvtC8PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+0JHQsNC90LrQvtCy0YHQutC+0Lkg0LrQsNGA0YLQvtC5LCDQvtC90LvQsNC50L0t0L/Qu9Cw0YLQtdC20Lgg0LhcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINC60L7RiNC10LvRjNC60Lgg0YfQtdGA0LXQtyDRgdC10YDQstC40YEg0L/Qu9Cw0YLQtdC20LVcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFBheWJveC5rejwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCIgaHJlZj1cIiNcIj7Qn9C+0L/QvtC70L3QuNGC0Ywg0L7QvdC70LDQudC9PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9iYWxhbmNlMi5wbmdcIiBhbHQvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0JfQsNC/0YDQvtGB0LjRgtGMINGB0YfQtdGCINC90LAg0L7Qv9C70LDRgtGDPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+0JLRiyDRgdC80L7QttC10YLQtSDQv9C+0L/QvtC70L3QuNGC0Ywg0YHRh9C10YIg0LrQsNC6INGO0YAuINC70LjRhtC+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDRgdC+INCy0YHQtdC80Lgg0L3QtdC+0LHRhdC+0LTQuNC80YvQvNC4INC00L7QutGD0LzQtdC90YLQsNC80LhcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINC4INCy0YvQv9C40YHQutCw0LzQuC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBncmVlblwiIGhyZWY9XCIjXCIgPtCf0L7Qv9C+0LvQvdC40YLRjCDQvtC90LvQsNC50L08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=