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
    if (!amount && parseInt(amount) <= 0) {
      dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'Введите сумму'
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("https://test.money-men.kz/api", "/makePayment?user_id=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('active_user'), "&amount=1000")).then(function (res) {
      console.log(res);
    });
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
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "smaller_font",
          children: "\u041C\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('transaction');
          },
          className: "btn green",
          children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setPage('balance');
          },
          className: "btn green",
          children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), page === 'balance' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_Balance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        balance: balance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_userCabinet_TransactionHistory__WEBPACK_IMPORTED_MODULE_7__["default"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 45
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "balance__top-up",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "products__title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
                lineNumber: 56,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "balance__top-up__item__content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "balance__top-up__item__content__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  children: "\u041E\u043D\u043B\u0430\u0439\u043D \u043B\u044E\u0431\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439, \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, _this), "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043B\u0430\u0442\u0435\u0436\u0435", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, _this), "Paybox.kz"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
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
                  lineNumber: 67,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: function onClick() {
                  return onPayment();
                },
                className: "btn green",
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "aside"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9iYWxhbmNlLmpzIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJvblBheW1lbnQiLCJwYXJzZUludCIsInR5cGUiLCJwYXlsb2FkIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsImNvb2tpZSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwicGFyYW1zIiwidG9rZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURvQixrQkFFVUMsc0RBQVEsQ0FBQyxHQUFELENBRmxCO0FBQUEsTUFFYkMsT0FGYTtBQUFBLE1BRUpDLFVBRkk7O0FBQUEsbUJBR0dGLHNEQUFRLENBQUMsU0FBRCxDQUhYO0FBQUEsTUFHYkcsSUFIYTtBQUFBLE1BR1JDLE9BSFE7O0FBQUEsbUJBSVNKLHNEQUFRLENBQUMsRUFBRCxDQUpqQjtBQUFBLE1BSWJLLE9BSmE7QUFBQSxNQUlMQyxVQUpLOztBQUFBLG1CQUtPTixzREFBUSxDQUFDLEVBQUQsQ0FMZjtBQUFBLE1BS2JPLE1BTGE7QUFBQSxNQUtOQyxTQUxNOztBQU9wQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUcsQ0FBQ0YsTUFBRCxJQUFXRyxRQUFRLENBQUNILE1BQUQsQ0FBUixJQUFrQixDQUFoQyxFQUFtQztBQUNqQ1QsY0FBUSxDQUFDO0FBQUNhLFlBQUksRUFBRSxlQUFQO0FBQXdCQyxlQUFPLEVBQUU7QUFBakMsT0FBRCxDQUFSO0FBQ0Q7O0FBQ0RDLGdEQUFLLENBQUNDLElBQU4sV0FBY0MsK0JBQWQsa0NBQTBEQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxDQUExRCxtQkFDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBSEg7QUFJRCxHQVJEOztBQVNBLE1BQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQ1QsZ0RBQUssQ0FBQ0ksR0FBTixDQUFVLDhDQUFWLEVBQTBEO0FBQUNNLFlBQU0sRUFBRTtBQUNqRUMsYUFBSyxFQUFFUixnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWDtBQUQwRDtBQUFULEtBQTFELEVBR0dDLElBSEgsQ0FHUSxVQUFBQyxHQUFHLEVBQUc7QUFDVmIsZ0JBQVUsQ0FBQ2EsR0FBRyxDQUFDTSxJQUFKLENBQVNBLElBQVYsQ0FBVjtBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDTSxJQUFKLENBQVNBLElBQXJCO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7O0FBU0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkSix5QkFBcUI7QUFDdEIsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxQ0FBZjtBQUFBLGdDQUNFLHFFQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHbkIsSUFBSSxLQUFLLFNBQVQsZ0JBQ0Q7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLE9BQU8sQ0FBQyxhQUFELENBQWI7QUFBQSxXQUFqQjtBQUErQyxtQkFBUyxFQUFDLFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDLGdCQUdEO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQSxPQUFPLENBQUMsU0FBRCxDQUFiO0FBQUEsV0FBakI7QUFBMkMsbUJBQVMsRUFBQyxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVNHRCxJQUFJLEtBQUssU0FBVCxnQkFDRCxxRUFBQyx1RUFBRDtBQUFhLGVBQU8sRUFBRUY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDLGdCQUNtQyxxRUFBQyxrRkFBRDtBQUFvQixlQUFPLEVBQUVJO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWdEMsZUFXRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsMkJBQVQ7QUFBcUMsbUJBQUc7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFLLHVCQUFTLEVBQUMsZ0NBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsc0NBQWY7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsdU9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixrTEFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQVFBO0FBQU8sMkJBQVMsRUFBQyxZQUFqQjtBQUE4Qiw2QkFBVyxFQUFDLDJFQUExQztBQUEwRCwwQkFBUSxFQUFFLGtCQUFBc0IsQ0FBQztBQUFBLDJCQUFFbkIsU0FBUyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUFBLG1CQUFyRTtBQUFrRyx1QkFBSyxFQUFFdEI7QUFBekcsb0lBQTJILGNBQTNILCtHQUErSSxRQUEvSSwrR0FBNkosUUFBN0o7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFXRTtBQUFHLHVCQUFPLEVBQUU7QUFBQSx5QkFBTUUsU0FBUyxFQUFmO0FBQUEsaUJBQVo7QUFBK0IseUJBQVMsRUFBQyxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXNERTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyREQsQ0F2RkQ7O0dBQU1aLE87VUFDYUUsdUQ7OztLQURiRixPO0FBeUZTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2JhbGFuY2UuMDBmN2Q3Mjk3NDU2NDhiOTNlYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJyZWFkQ3VtYnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0JyZWFkQ3VtYnNDb25maWd1cmVcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEJhbGFuY2VQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlckNhYmluZXQvQmFsYW5jZSdcclxuaW1wb3J0IFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ2FiaW5ldC9UcmFuc2FjdGlvbkhpc3RvcnlcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgQmFsYW5jZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnMCcpXHJcbiAgY29uc3QgW3BhZ2Usc2V0UGFnZV0gPSB1c2VTdGF0ZSgnYmFsYW5jZScpXHJcbiAgY29uc3QgW2hpc3Rvcnksc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbYW1vdW50LHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qgb25QYXltZW50ID0gKCkgPT4ge1xyXG4gICAgaWYoIWFtb3VudCAmJiBwYXJzZUludChhbW91bnQpPD0wKSB7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6ICfQktCy0LXQtNC40YLQtSDRgdGD0LzQvNGDJ30pXHJcbiAgICB9XHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9tYWtlUGF5bWVudD91c2VyX2lkPSR7Y29va2llLmdldCgnYWN0aXZlX3VzZXInKX0mYW1vdW50PTEwMDBgKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBnZXRUcmFuc2FjdGlvbkhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vdGVzdC5tb25leS1tZW4ua3ovYXBpL3BheW1lbnRIaXN0b3J5Jywge3BhcmFtczoge1xyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKVxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRIaXN0b3J5KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFRyYW5zYWN0aW9uSGlzdG9yeSgpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGUgcGFkZGluZ3MgbGl0dGxlX3BhZFwiPlxyXG4gICAgICAgICAgPEJyZWFkQ3VtYnMgLz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbWFsbGVyX2ZvbnRcIj7QnNC+0Lkg0LHQsNC70LDQvdGBPC9oMT5cclxuICAgICAgICAgIHtwYWdlID09PSAnYmFsYW5jZScgP1xyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKCd0cmFuc2FjdGlvbicpfSBjbGFzc05hbWU9J2J0biBncmVlbic+0J7RgtC60YDRi9GC0Ywg0LjRgdGC0L7RgNC40Y4g0YLRgNCw0L3Qt9Cw0LrRhtC40Lk8L2J1dHRvbj4gOiBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKCdiYWxhbmNlJyl9IGNsYXNzTmFtZT0nYnRuIGdyZWVuJz7Qn9GA0L7QstC10YDQutCwINCx0LDQu9Cw0L3RgdCwPC9idXR0b24+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwYWdlID09PSAnYmFsYW5jZScgPyBcclxuICAgICAgICA8QmFsYW5jZVBhZ2UgYmFsYW5jZT17YmFsYW5jZX0gLz4gOiA8VHJhbnNhY3Rpb25IaXN0b3J5IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+0J/QvtC/0L7Qu9C90LjRgtGMINGB0YfQtdGCPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9iYWxhbmNlMS5wbmdcIiBhbHQvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbV9fY29udGVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0J7QvdC70LDQudC9INC70Y7QsdGL0Lwg0YHQv9C+0YHQvtCx0L7QvDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPtCR0LDQvdC60L7QstGB0LrQvtC5INC60LDRgNGC0L7QuSwg0L7QvdC70LDQudC9LdC/0LvQsNGC0LXQttC4INC4XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICDQutC+0YjQtdC70YzQutC4INGH0LXRgNC10Lcg0YHQtdGA0LLQuNGBINC/0LvQsNGC0LXQttC1XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBQYXlib3gua3o8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX2dyb3VwJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgycgb25DaGFuZ2U9e2U9PnNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXthbW91bnR9IGNsYXNzTmFtZT0nYW1vdW50X2lucHV0JyBuYW1lPSdhbW91bnQnIHR5cGU9J251bWJlcic+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gb25QYXltZW50KCl9IGNsYXNzTmFtZT1cImJ0biBncmVlblwiICA+0J/QvtC/0L7Qu9C90LjRgtGMINC+0L3Qu9Cw0LnQvTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VfX3RvcC11cF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2JhbGFuY2UyLnBuZ1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlX190b3AtdXBfX2l0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZV9fdG9wLXVwX19pdGVtX19jb250ZW50X190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7Ql9Cw0L/RgNC+0YHQuNGC0Ywg0YHRh9C10YIg0L3QsCDQvtC/0LvQsNGC0YM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QktGLINGB0LzQvtC20LXRgtC1INC/0L7Qv9C+0LvQvdC40YLRjCDRgdGH0LXRgiDQutCw0Log0Y7RgC4g0LvQuNGG0L5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgINGB0L4g0LLRgdC10LzQuCDQvdC10L7QsdGF0L7QtNC40LzRi9C80Lgg0LTQvtC60YPQvNC10L3RgtCw0LzQuFxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAg0Lgg0LLRi9C/0LjRgdC60LDQvNC4LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gb25QYXltZW50KCl9IGNsYXNzTmFtZT1cImJ0biBncmVlblwiICA+0J/QvtC/0L7Qu9C90LjRgtGMINC+0L3Qu9Cw0LnQvTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=