webpackHotUpdate_N_E("pages/cabinet",{

/***/ "./components/company/CompanySideInfo.js":
/*!***********************************************!*\
  !*** ./components/company/CompanySideInfo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\company\\CompanySideInfo.js",
    _this = undefined,
    _s = $RefreshSig$();






var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.usersReducer.user;
  return {
    user: user
  };
};

var CompanySideInfo = function CompanySideInfo(_ref2) {
  _s();

  var user = _ref2.user;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var getSubscription = function getSubscription() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/buySubscription?token=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token'))).then(function (res) {
      console.log(res);

      if (res.data.success) {
        dispatch({
          type: 'SUCCESS_MESSAGE',
          payload: 'Вы брали подписку на объявление'
        });
      } else {
        dispatch({
          type: 'ERROR_MESSAGE',
          payload: 'У вас уже есть активная подписка'
        });
      }
    });
  };

  var nameOfUser = function nameOfUser() {
    return user.companyDetails ? user.companyDetails[0].companyName : user.fullName;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "aside",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "aside__contactCard",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contactCard__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/img/widgets/company_icon.png",
          alt: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: nameOfUser()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [user.fullName, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contactCard__details",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__detail__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0421\u0442\u0430\u0442\u0443\u0441:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u041B\u0438\u043C\u0438\u0442\u0435\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__detail__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contactCard__detail__item__inner",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__detail__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0412\u0430\u0448 \u0431\u0430\u043B\u0430\u043D\u0441:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contactCard__detail__item__inner",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "assets/img/widgets/tenge.svg",
              alt: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "green",
              children: [js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('balance'), " \u20B8"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "btn btn--white green",
        href: "#",
        children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this), !user.subscription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "btn btn--white blue",
        onClick: function onClick() {
          return getSubscription();
        },
        href: "#",
        children: "\u0412\u0437\u044F\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 34
      }, _this), user.subscription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "btn btn--white blue",
        children: ["\u0423 \u0432\u0430\u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0434\u043E ", user.end_subscription_date]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(CompanySideInfo, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = CompanySideInfo;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(CompanySideInfo));

var _c;

$RefreshReg$(_c, "CompanySideInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0NvbXBhbnlTaWRlSW5mby5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwidXNlcnNSZWR1Y2VyIiwiQ29tcGFueVNpZGVJbmZvIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImdldFN1YnNjcmlwdGlvbiIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImNvb2tpZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN1Y2Nlc3MiLCJ0eXBlIiwicGF5bG9hZCIsIm5hbWVPZlVzZXIiLCJjb21wYW55RGV0YWlscyIsImNvbXBhbnlOYW1lIiwiZnVsbE5hbWUiLCJzdWJzY3JpcHRpb24iLCJlbmRfc3Vic2NyaXB0aW9uX2RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUN0QkMsSUFEc0IsUUFBRUMsWUFBRixDQUN0QkQsSUFEc0I7QUFBQSxTQUVoQjtBQUFDQSxRQUFJLEVBQUpBO0FBQUQsR0FGZ0I7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQVk7QUFBQTs7QUFBQSxNQUFWRixJQUFVLFNBQVZBLElBQVU7QUFDbEMsTUFBTUcsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJDLGdEQUFLLENBQUNDLEdBQU4sV0FBYUMsK0JBQWIsb0NBQTJEQyxnREFBTSxDQUFDRixHQUFQLENBQVcsT0FBWCxDQUEzRCxHQUNHRyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNBLFVBQUdBLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFaLEVBQXFCO0FBQ25CWixnQkFBUSxDQUFDO0FBQUNhLGNBQUksRUFBRSxpQkFBUDtBQUEwQkMsaUJBQU8sRUFBRTtBQUFuQyxTQUFELENBQVI7QUFDRCxPQUZELE1BRU07QUFDSmQsZ0JBQVEsQ0FBQztBQUFDYSxjQUFJLEVBQUUsZUFBUDtBQUF3QkMsaUJBQU8sRUFBRTtBQUFqQyxTQUFELENBQVI7QUFDRDtBQUNGLEtBUkg7QUFTRCxHQVZEOztBQVdBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTWxCLElBQUksQ0FBQ21CLGNBQUwsR0FBc0JuQixJQUFJLENBQUNtQixjQUFMLENBQW9CLENBQXBCLEVBQXVCQyxXQUE3QyxHQUEyRHBCLElBQUksQ0FBQ3FCLFFBQXRFO0FBQUEsR0FBbkI7O0FBQ0Usc0JBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsK0JBQVQ7QUFBeUMsYUFBRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0gsVUFBVTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHVCQUFJbEIsSUFBSSxDQUFDcUIsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLDJCQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxrQ0FBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBWUU7QUFBSyxtQkFBUyxFQUFDLDJCQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsa0NBQWY7QUFBQSxvQ0FDRTtBQUFLLGlCQUFHLEVBQUMsOEJBQVQ7QUFBd0MsaUJBQUc7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksdUJBQVMsRUFBQyxPQUFkO0FBQUEseUJBQXVCWixnREFBTSxDQUFDRixHQUFQLENBQVcsU0FBWCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQTRCRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBb0MsWUFBSSxFQUFDLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGLEVBNkJHLENBQUNQLElBQUksQ0FBQ3NCLFlBQU4saUJBQXNCO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBTWpCLGVBQWUsRUFBckI7QUFBQSxTQUE1QztBQUFxRSxZQUFJLEVBQUMsR0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QnpCLEVBOEJHTCxJQUFJLENBQUNzQixZQUFMLGlCQUFxQjtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxnS0FBK0R0QixJQUFJLENBQUN1QixxQkFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0FsREQ7O0dBQU1yQixlO1VBQ2FFLHVEOzs7S0FEYkYsZTtBQW9EU3NCLDBIQUFPLENBQUN6QixlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JHLGVBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC5kNDBhZWIwN2JkYzMwMzM4OWJkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3QsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHt1c2Vyc1JlZHVjZXI6IHtcclxuICB1c2VyXHJcbn19KSA9PiAoe3VzZXJ9KVxyXG5cclxuY29uc3QgQ29tcGFueVNpZGVJbmZvID0gKHt1c2VyfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGdldFN1YnNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vYnV5U3Vic2NyaXB0aW9uP3Rva2VuPSR7Y29va2llLmdldCgndG9rZW4nKX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogJ9CS0Ysg0LHRgNCw0LvQuCDQv9C+0LTQv9C40YHQutGDINC90LAg0L7QsdGK0Y/QstC70LXQvdC40LUnfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0VSUk9SX01FU1NBR0UnLCBwYXlsb2FkOiAn0KMg0LLQsNGBINGD0LbQtSDQtdGB0YLRjCDQsNC60YLQuNCy0L3QsNGPINC/0L7QtNC/0LjRgdC60LAnfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG5hbWVPZlVzZXIgPSAoKSA9PiB1c2VyLmNvbXBhbnlEZXRhaWxzID8gdXNlci5jb21wYW55RGV0YWlsc1swXS5jb21wYW55TmFtZSA6IHVzZXIuZnVsbE5hbWVcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZV9fY29udGFjdENhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvY29tcGFueV9pY29uLnBuZ1wiIGFsdCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RDYXJkX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMz57bmFtZU9mVXNlcigpfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+e3VzZXIuZnVsbE5hbWV9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Q2FyZF9fZGV0YWlsX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHA+0KHRgtCw0YLRg9GBOjwvcD5cclxuICAgICAgICAgICAgICA8aDM+0JvQuNC80LjRgtC10LQ8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Q2FyZF9fZGV0YWlsX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHA+0KDQtdC50YLQuNC90LM6PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2RldGFpbF9faXRlbV9faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMz4wPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2RldGFpbF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxwPtCS0LDRiCDQsdCw0LvQsNC90YE6PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2RldGFpbF9faXRlbV9faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy93aWRnZXRzL3RlbmdlLnN2Z1wiIGFsdCAvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyZWVuXCI+e2Nvb2tpZS5nZXQoJ2JhbGFuY2UnKX0g4oK4PC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tLXdoaXRlIGdyZWVuXCIgaHJlZj1cIiNcIj7Qn9C+0L/QvtC70L3QuNGC0Ywg0LHQsNC70LDQvdGBPC9hPlxyXG4gICAgICAgICAgeyF1c2VyLnN1YnNjcmlwdGlvbiAmJiA8YSBjbGFzc05hbWU9XCJidG4gYnRuLS13aGl0ZSBibHVlXCIgb25DbGljaz17KCkgPT4gZ2V0U3Vic2NyaXB0aW9uKCl9IGhyZWY9XCIjXCI+0JLQt9GP0YLRjCDQv9C+0LTQv9C40YHQutGDPC9hPn1cclxuICAgICAgICAgIHt1c2VyLnN1YnNjcmlwdGlvbiAmJiA8YSBjbGFzc05hbWU9J2J0biBidG4tLXdoaXRlIGJsdWUnPtCjINCy0LDRgSDQtNC+0YHRgtGD0L/QvdC+INC/0L7QtNC/0LjRgdC60LAg0LTQviB7dXNlci5lbmRfc3Vic2NyaXB0aW9uX2RhdGV9PC9hPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShDb21wYW55U2lkZUluZm8pKTsiXSwic291cmNlUm9vdCI6IiJ9