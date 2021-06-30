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
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat("https://test.money-men.kz/api", "/makePayment?user_id=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('active_user'), "&amount=1000")).then(function (res) {
      console.log(res);
    });
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
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_5__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_6__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
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
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "btn green",
                href: "#",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
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
                lineNumber: 67,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043A\u0430\u043A \u044E\u0440. \u043B\u0438\u0446\u043E", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this), "\u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this), "\u0438 \u0432\u044B\u043F\u0438\u0441\u043A\u0430\u043C\u0438."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return onPayment();
                },
                className: "btn green",
                href: "#",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJ1c2VTdGF0ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwicGFnZSIsInNldFBhZ2UiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsIm9uUGF5bWVudCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJjb29raWUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImdldFRyYW5zYWN0aW9uSGlzdG9yeSIsInBhcmFtcyIsInRva2VuIiwiZGF0YSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsR0FBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLFNBQUQsQ0FGWDtBQUFBLE1BRWJHLElBRmE7QUFBQSxNQUVSQyxPQUZROztBQUFBLG1CQUdTSixzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdiSyxPQUhhO0FBQUEsTUFHTEMsVUFISzs7QUFNcEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkMsZ0RBQUssQ0FBQ0MsSUFBTixXQUFjQywrQkFBZCxrQ0FBMERDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLENBQTFELG1CQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FISDtBQUlELEdBTEQ7O0FBTUEsTUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDVCxnREFBSyxDQUFDSSxHQUFOLENBQVUsOENBQVYsRUFB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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxzQ0FBZjtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSwrT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLDBNQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVNFO0FBQUcsdUJBQU8sRUFBRTtBQUFBLHlCQUFNRSxTQUFTLEVBQWY7QUFBQSxpQkFBWjtBQUErQix5QkFBUyxFQUFDLFdBQXpDO0FBQXFELG9CQUFJLEVBQUMsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBb0RFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQWpGRDs7R0FBTVIsTzs7S0FBQUEsTztBQW1GU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9iYWxhbmNlLjYyMDVlNmQzYmQ0NzFkYTQ5MjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCcmVhZEN1bWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9CcmVhZEN1bWJzQ29uZmlndXJlXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYWxhbmNlUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJDYWJpbmV0L0JhbGFuY2UnXHJcbmltcG9ydCBUcmFuc2FjdGlvbkhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvVHJhbnNhY3Rpb25IaXN0b3J5XCI7XHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJzAnKVxyXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoJ2JhbGFuY2UnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LHNldEhpc3RvcnldID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuICBjb25zdCBvblBheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9tYWtlUGF5bWVudD91c2VyX2lkPSR7Y29va2llLmdldCgnYWN0aXZlX3VzZXInKX0mYW1vdW50PTEwMDBgKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBnZXRUcmFuc2FjdGlvbkhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vdGVzdC5tb25leS1tZW4ua3ovYXBpL3BheW1lbnRIaXN0b3J5Jywge3BhcmFtczoge1xyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKVxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRIaXN0b3J5KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFRyYW5zYWN0aW9uSGlzdG9yeSgpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGUgcGFkZGluZ3MgbGl0dGxlX3BhZFwiPlxyXG4gICAgICAgICAgPEJyZWFkQ3VtYnMgLz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbWFsbGVyX2ZvbnRcIj7QnNC+0Lkg0LHQsNC70LDQvdGBPC9oMT5cclxuICAgICAgICAgIHtwYWdlID09PSAnYmFsYW5jZScgP1xyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKCd0cmFuc2FjdGlvbicpfSBjbGFzc05hbWU9J2J0biBncmVlbic+0J7RgtC60YDRi9GC0Ywg0LjRgdGC0L7RgNC40Y4g0YLRgNCw0L3Qt9Cw0LrRhtC40Lk8L2J1dHRvbj4gOiBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKCdiYWxhbmNlJyl9IGNsYXNzTmFtZT0nYnRuIGdyZWVuJz7Qn9GA0L7QstC10YDQutCwINCx0LDQu9Cw0L3RgdCwPC9idXR0b24+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwYWdlID09PSAnYmFsYW5jZScgPyBcclxuICAgICAgICA8QmFsYW5jZVBhZ2UgYmFsYW5jZT17YmFsYW5jZX0gLz4gOiA8VHJhbnNhY3Rpb25IaXN0b3J5IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+0J/QvtC/0L7Qu9C90LjRgtGMINGB0YfQtdGCPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9iYWxhbmNlMS5wbmdcIiBhbHQvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0J7QvdC70LDQudC9INC70Y7QsdGL0Lwg0YHQv9C+0YHQvtCx0L7QvDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPtCR0LDQvdC60L7QstGB0LrQvtC5INC60LDRgNGC0L7QuSwg0L7QvdC70LDQudC9LdC/0LvQsNGC0LXQttC4INC4XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDQutC+0YjQtdC70YzQutC4INGH0LXRgNC10Lcg0YHQtdGA0LLQuNGBINC/0LvQsNGC0LXQttC1XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBQYXlib3gua3o8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBncmVlblwiIGhyZWY9XCIjXCI+0J/QvtC/0L7Qu9C90LjRgtGMINC+0L3Qu9Cw0LnQvTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvYmFsYW5jZTIucG5nXCIgYWx0Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtCX0LDQv9GA0L7RgdC40YLRjCDRgdGH0LXRgiDQvdCwINC+0L/Qu9Cw0YLRgzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPtCS0Ysg0YHQvNC+0LbQtdGC0LUg0L/QvtC/0L7Qu9C90LjRgtGMINGB0YfQtdGCINC60LDQuiDRjtGALiDQu9C40YbQvlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAg0YHQviDQstGB0LXQvNC4INC90LXQvtCx0YXQvtC00LjQvNGL0LzQuCDQtNC+0LrRg9C80LXQvdGC0LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDQuCDQstGL0L/QuNGB0LrQsNC80LguPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvblBheW1lbnQoKX0gY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCIgaHJlZj1cIiNcIiA+0J/QvtC/0L7Qu9C90LjRgtGMINC+0L3Qu9Cw0LnQvTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==