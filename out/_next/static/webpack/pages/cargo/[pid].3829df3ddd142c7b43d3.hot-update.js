webpackHotUpdate_N_E("pages/cargo/[pid]",{

/***/ "./components/post/PostAside.js":
/*!**************************************!*\
  !*** ./components/post/PostAside.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_extraFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/extraFunctions */ "./defaults/extraFunctions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_ShareSocial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ShareSocial */ "./components/shared/ShareSocial.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\post\\PostAside.js",
    _this = undefined,
    _s = $RefreshSig$();











var PostAside = function PostAside(_ref) {
  _s();

  var postinfo = _ref.postinfo,
      sendRequest = _ref.sendRequest,
      user = _ref.user,
      setModal = _ref.setModal;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var pid = router.query.pid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      share = _useState[0],
      setShare = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    $('.show_num').click(function () {
      $('.hidden_num').show();
      $(this).hide();
    });
  }, []);

  var closeModal = function closeModal(e) {
    e.preventDefault();

    if (e.target.className !== 'modal_bg') {
      setShare(false);
    }
  };

  var onDelete = function onDelete() {
    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
      title: 'Вы уверены, что хотите удалить пост',
      buttons: {
        "catch": {
          text: 'Да',
          value: 'yes'
        },
        cancel: 'Нет'
      }
    }).then(function (value) {
      switch (value) {
        case 'yes':
          console.log(pid);
          router.push('/cargo');
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat("https://test.money-men.kz/api", "/deletePost"), {
            params: {
              token: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'),
              post_id: pid
            }
          }).then(function (response) {
            console.log(response);

            if (response.data.success) {
              dispatch({
                type: 'SUCCESS_MESSAGE',
                payload: 'Успешно удален'
              });
            } else {
              dispatch({
                type: 'ERROR_MESSAGE',
                payload: res.data.message
              });
            }
          });
      }
    });
  };

  var pgCategory = router.pathname.includes('cargo') ? 'cargo' : 'transport';

  var AsideButtons = function AsideButtons() {
    if (user && postinfo.user && postinfo.user.id == user.id) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: function onClick() {
            return router.push("/cargo/edit?id=".concat(pid, "&category=").concat(pgCategory));
          },
          className: "btn",
          href: "#",
          children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn",
          href: "#",
          onClick: function onClick() {
            return onDelete();
          },
          children: " \u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }, _this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [!router.pathname.includes('storage') ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn",
          onClick: sendRequest,
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 51
        }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: function onClick() {
            return setModal(true);
          },
          className: "btn",
          href: "#",
          children: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var addFavour = function addFavour() {
    if (router.pathname.includes('/cargo')) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://test.money-men.kz/api/addPostFavourites?token=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'), "&post_id=").concat(pid, "&category_id=1")).then(function (res) {
        console.log(res);

        if (res.data.success) {
          dispatch({
            type: 'SUCCESS_MESSAGE',
            payload: 'Добавлен в избранные'
          });
        } else {
          dispatch({
            type: 'ERROR_MESSAGE',
            payload: 'Уже добавлен'
          });
        }
      });
    }

    if (router.pathname.includes('/transport')) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://test.money-men.kz/api/addPostFavourites?token=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'), "&post_id=").concat(pid, "&category_id=2")).then(function (res) {
        console.log(res);

        if (res.data.success) {
          dispatch({
            type: 'SUCCESS_MESSAGE',
            payload: 'Добавлен в избранные'
          });
        } else {
          dispatch({
            type: 'ERROR_MESSAGE',
            payload: 'Уже добавлен'
          });
        }
      });
    }

    if (router.pathname.includes('/storage')) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://test.money-men.kz/api/addStorageFavourites?token=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'), "&storage_id=").concat(pid)).then(function (res) {
        console.log(res);

        if (res.data.success) {
          dispatch({
            type: 'SUCCESS_MESSAGE',
            payload: 'Добавлен в избранные'
          });
        } else {
          dispatch({
            type: 'ERROR_MESSAGE',
            payload: 'Уже добавлен'
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [share ? '' : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: "aside",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "aside__contactCard",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/company_icon.png",
            alt: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contactCard__title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: postinfo.user.companyDetails.companyName !== '' ? postinfo.user.companyDetails.companyName : postinfo.user.fullName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433: 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contactCard__num",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [Object(_defaults_extraFunctions__WEBPACK_IMPORTED_MODULE_3__["formatPhoneNumber"])(postinfo.user.phone), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "hidden_num",
              children: Object(_defaults_extraFunctions__WEBPACK_IMPORTED_MODULE_3__["formatPhoneNumberHidden"])(postinfo.user.phone)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "show_num",
            children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AsideButtons, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "aside__functions__wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "aside__functions",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "izbrannoe",
            onClick: addFavour,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 60
            }, _this), "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this), share ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "download",
            onClick: function onClick() {
              return setShare(!share);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/aside_function1.png",
              alt: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 82
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 24
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick() {
              return setShare(!share);
            },
            className: "download",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/aside_function1.png",
              alt: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 205
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 138
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "print",
            href: "javascript:(print());",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/aside_function2.png",
              alt: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "someShit",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/aside_function3.png",
              alt: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 48
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "aside__changed_date",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E:  ", Object(_defaults_extraFunctions__WEBPACK_IMPORTED_MODULE_3__["parseDateTime"])(postinfo.updated_at)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, _this), share ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sharing",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }, _this), "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u043E\u0446 \u0441\u0435\u0442\u044F\u0445", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_ShareSocial__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 22
        }, _this) : '']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(PostAside, "lUJxOYDoPhSKH/ibs+0Mdf64B+U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostAside;
/* harmony default export */ __webpack_exports__["default"] = (PostAside);

var _c;

$RefreshReg$(_c, "PostAside");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RBc2lkZS5qcyJdLCJuYW1lcyI6WyJQb3N0QXNpZGUiLCJwb3N0aW5mbyIsInNlbmRSZXF1ZXN0IiwidXNlciIsInNldE1vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInBpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzaGFyZSIsInNldFNoYXJlIiwidXNlRWZmZWN0IiwiJCIsImNsaWNrIiwic2hvdyIsImhpZGUiLCJjbG9zZU1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwib25EZWxldGUiLCJzd2FsIiwidGl0bGUiLCJidXR0b25zIiwidGV4dCIsInZhbHVlIiwiY2FuY2VsIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwicGFyYW1zIiwidG9rZW4iLCJjb29raWUiLCJwb3N0X2lkIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsInR5cGUiLCJwYXlsb2FkIiwicmVzIiwibWVzc2FnZSIsInBnQ2F0ZWdvcnkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiQXNpZGVCdXR0b25zIiwiaWQiLCJhZGRGYXZvdXIiLCJjb21wYW55RGV0YWlscyIsImNvbXBhbnlOYW1lIiwiZnVsbE5hbWUiLCJmb3JtYXRQaG9uZU51bWJlciIsInBob25lIiwiZm9ybWF0UGhvbmVOdW1iZXJIaWRkZW4iLCJwYXJzZURhdGVUaW1lIiwidXBkYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTZDO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQzdELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRjZELE1BR3REQyxHQUhzRCxHQUcvQ0osTUFBTSxDQUFDSyxLQUh3QyxDQUd0REQsR0FIc0Q7O0FBQUEsa0JBSW5DRSxzREFBUSxDQUFDLEtBQUQsQ0FKMkI7QUFBQSxNQUl0REMsS0FKc0Q7QUFBQSxNQUkvQ0MsUUFKK0M7O0FBTTdEQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxLQUFmLENBQXFCLFlBQVk7QUFDL0JELE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJFLElBQWpCO0FBQ0FGLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUjtBQUNELEtBSEQ7QUFJRCxHQUxRLEVBS1AsRUFMTyxDQUFUOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFULEtBQXVCLFVBQTNCLEVBQXVDO0FBQ3JDVixjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1XLFFBQVEsR0FBRSxTQUFWQSxRQUFVLEdBQU07QUFDcEJDLHFEQUFJLENBQUM7QUFDSEMsV0FBSyxFQUFFLHFDQURKO0FBRUhDLGFBQU8sRUFBQztBQUNOLGlCQUFNO0FBQ0pDLGNBQUksRUFBRSxJQURGO0FBRUpDLGVBQUssRUFBRTtBQUZILFNBREE7QUFLTkMsY0FBTSxFQUFFO0FBTEY7QUFGTCxLQUFELENBQUosQ0FTR0MsSUFUSCxDQVNRLFVBQUFGLEtBQUssRUFBRTtBQUNiLGNBQVFBLEtBQVI7QUFDRSxhQUFLLEtBQUw7QUFDRUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZeEIsR0FBWjtBQUVBSixnQkFBTSxDQUFDNkIsSUFBUCxDQUFZLFFBQVo7QUFFQUMsc0RBQUssQ0FBQ0MsR0FBTixXQUFhQywrQkFBYixrQkFBZ0Q7QUFBQ0Msa0JBQU0sRUFBQztBQUN0REMsbUJBQUssRUFBRUMsZ0RBQU0sQ0FBQ0osR0FBUCxDQUFXLE9BQVgsQ0FEK0M7QUFFdERLLHFCQUFPLEVBQUVoQztBQUY2QztBQUFSLFdBQWhELEVBSUNzQixJQUpELENBSU0sVUFBQVcsUUFBUSxFQUFJO0FBQ2hCVixtQkFBTyxDQUFDQyxHQUFSLENBQVlTLFFBQVo7O0FBQ0EsZ0JBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFqQixFQUEwQjtBQUN4QnJDLHNCQUFRLENBQUM7QUFBQ3NDLG9CQUFJLEVBQUUsaUJBQVA7QUFBMEJDLHVCQUFPLEVBQUU7QUFBbkMsZUFBRCxDQUFSO0FBQ0QsYUFGRCxNQUVNO0FBQ0p2QyxzQkFBUSxDQUFDO0FBQUNzQyxvQkFBSSxFQUFFLGVBQVA7QUFBd0JDLHVCQUFPLEVBQUVDLEdBQUcsQ0FBQ0osSUFBSixDQUFTSztBQUExQyxlQUFELENBQVI7QUFDRDtBQUNGLFdBWEQ7QUFOSjtBQW1CRCxLQTdCRDtBQThCRCxHQS9CRDs7QUFnQ0EsTUFBTUMsVUFBVSxHQUFHNUMsTUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUIsT0FBekIsSUFBb0MsT0FBcEMsR0FBOEMsV0FBakU7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFHakQsSUFBSSxJQUFJRixRQUFRLENBQUNFLElBQWpCLElBQXlCRixRQUFRLENBQUNFLElBQVQsQ0FBY2tELEVBQWQsSUFBb0JsRCxJQUFJLENBQUNrRCxFQUFyRCxFQUF5RDtBQUN2RCwwQkFDQTtBQUFBLGdDQUNBO0FBQUcsaUJBQU8sRUFBRTtBQUFBLG1CQUFJaEQsTUFBTSxDQUFDNkIsSUFBUCwwQkFBOEJ6QixHQUE5Qix1QkFBOEN3QyxVQUE5QyxFQUFKO0FBQUEsV0FBWjtBQUE2RSxtQkFBUyxFQUFDLEtBQXZGO0FBQTZGLGNBQUksRUFBQyxHQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBO0FBQUcsbUJBQVMsRUFBQyxLQUFiO0FBQW9CLGNBQUksRUFBQyxHQUF6QjtBQUE2QixpQkFBTyxFQUFFO0FBQUEsbUJBQU16QixRQUFRLEVBQWQ7QUFBQSxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBLHNCQURBO0FBS0QsS0FORCxNQU1NO0FBQ0osMEJBQ0U7QUFBQSxtQkFDRyxDQUFDbkIsTUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUIsU0FBekIsQ0FBRCxnQkFBdUM7QUFBRyxtQkFBUyxFQUFDLEtBQWI7QUFBbUIsaUJBQU8sRUFBRWpELFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2QyxHQUF1RyxFQUQxRyxlQUVFO0FBQUcsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRSxRQUFRLENBQUMsSUFBRCxDQUFkO0FBQUEsV0FBWjtBQUFrQyxtQkFBUyxFQUFDLEtBQTVDO0FBQWtELGNBQUksRUFBQyxHQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLHNCQURGO0FBT0Q7QUFDRixHQWhCRDs7QUFpQkEsTUFBTWtELFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSWpELE1BQU0sQ0FBQzZDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCLFFBQXpCLENBQUosRUFBd0M7QUFDdENoQixrREFBSyxDQUFDQyxHQUFOLGlFQUFtRUksZ0RBQU0sQ0FBQ0osR0FBUCxDQUFXLE9BQVgsQ0FBbkUsc0JBQWtHM0IsR0FBbEcscUJBQXVIc0IsSUFBdkgsQ0FBNEgsVUFBQWdCLEdBQUcsRUFBSTtBQUNqSWYsZUFBTyxDQUFDQyxHQUFSLENBQVljLEdBQVo7O0FBQ0EsWUFBSUEsR0FBRyxDQUFDSixJQUFKLENBQVNDLE9BQWIsRUFBc0I7QUFDcEJyQyxrQkFBUSxDQUFDO0FBQUNzQyxnQkFBSSxFQUFFLGlCQUFQO0FBQTBCQyxtQkFBTyxFQUFFO0FBQW5DLFdBQUQsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMdkMsa0JBQVEsQ0FBQztBQUFDc0MsZ0JBQUksRUFBRSxlQUFQO0FBQXdCQyxtQkFBTyxFQUFFO0FBQWpDLFdBQUQsQ0FBUjtBQUNEO0FBQ0YsT0FQRDtBQVFEOztBQUNELFFBQUl6QyxNQUFNLENBQUM2QyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QixZQUF6QixDQUFKLEVBQTRDO0FBQzFDaEIsa0RBQUssQ0FBQ0MsR0FBTixpRUFBbUVJLGdEQUFNLENBQUNKLEdBQVAsQ0FBVyxPQUFYLENBQW5FLHNCQUFrRzNCLEdBQWxHLHFCQUF1SHNCLElBQXZILENBQTRILFVBQUFnQixHQUFHLEVBQUk7QUFDaklmLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYyxHQUFaOztBQUNBLFlBQUlBLEdBQUcsQ0FBQ0osSUFBSixDQUFTQyxPQUFiLEVBQXNCO0FBQ3BCckMsa0JBQVEsQ0FBQztBQUFDc0MsZ0JBQUksRUFBRSxpQkFBUDtBQUEwQkMsbUJBQU8sRUFBRTtBQUFuQyxXQUFELENBQVI7QUFDRCxTQUZELE1BRU87QUFDTHZDLGtCQUFRLENBQUM7QUFBQ3NDLGdCQUFJLEVBQUUsZUFBUDtBQUF3QkMsbUJBQU8sRUFBRTtBQUFqQyxXQUFELENBQVI7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7QUFDRCxRQUFJekMsTUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUIsVUFBekIsQ0FBSixFQUEwQztBQUN4Q2hCLGtEQUFLLENBQUNDLEdBQU4sb0VBQXNFSSxnREFBTSxDQUFDSixHQUFQLENBQVcsT0FBWCxDQUF0RSx5QkFBd0czQixHQUF4RyxHQUErR3NCLElBQS9HLENBQW9ILFVBQUFnQixHQUFHLEVBQUk7QUFDekhmLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYyxHQUFaOztBQUNBLFlBQUlBLEdBQUcsQ0FBQ0osSUFBSixDQUFTQyxPQUFiLEVBQXNCO0FBQ3BCckMsa0JBQVEsQ0FBQztBQUFDc0MsZ0JBQUksRUFBRSxpQkFBUDtBQUEwQkMsbUJBQU8sRUFBRTtBQUFuQyxXQUFELENBQVI7QUFDRCxTQUZELE1BRU87QUFDTHZDLGtCQUFRLENBQUM7QUFBQ3NDLGdCQUFJLEVBQUUsZUFBUDtBQUF3QkMsbUJBQU8sRUFBRTtBQUFqQyxXQUFELENBQVI7QUFDRDtBQUNGLE9BUEQ7QUFRRDtBQUNGLEdBL0JEOztBQWlDQSxzQkFDRTtBQUFBLGVBQ0NsQyxLQUFLLEdBQUcsRUFBSCxHQUFRLEVBRGQsZUFFQTtBQUFPLGVBQVMsRUFBQyxPQUFqQjtBQUFBLDhCQUNNO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUMsK0JBQVQ7QUFBeUMsZUFBRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS1gsUUFBUSxDQUFDRSxJQUFULENBQWNvRCxjQUFkLENBQTZCQyxXQUE3QixLQUEyQyxFQUEzQyxHQUFnRHZELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjb0QsY0FBZCxDQUE2QkMsV0FBN0UsR0FBMkZ2RCxRQUFRLENBQUNFLElBQVQsQ0FBY3NEO0FBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBU0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBQSx1QkFBSUMsa0ZBQWlCLENBQUN6RCxRQUFRLENBQUNFLElBQVQsQ0FBY3dELEtBQWYsQ0FBckIsZUFDRTtBQUFNLHVCQUFTLEVBQUMsWUFBaEI7QUFBQSx3QkFDREMsd0ZBQXVCLENBQUMzRCxRQUFRLENBQUNFLElBQVQsQ0FBY3dELEtBQWY7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBZ0JFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE4sZUFxQk07QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFBeUIsbUJBQU8sRUFBRUwsU0FBbEM7QUFBQSxvQ0FBNkM7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUcxQyxLQUFLLGdCQUFHO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQXlCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsUUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBZDtBQUFBLGFBQWxDO0FBQUEsbUNBQTBEO0FBQUssaUJBQUcsRUFBQyxrQ0FBVDtBQUE0QyxpQkFBRztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUgsZ0JBQXFIO0FBQUcsbUJBQU8sRUFBRTtBQUFBLHFCQUFNQyxRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFkO0FBQUEsYUFBWjtBQUFvQyxxQkFBUyxFQUFDLFVBQTlDO0FBQXlELGdCQUFJLEVBQUMsR0FBOUQ7QUFBQSxtQ0FBbUU7QUFBSyxpQkFBRyxFQUFDLGtDQUFUO0FBQTRDLGlCQUFHO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGN0gsZUFHRTtBQUFHLHFCQUFTLEVBQUMsT0FBYjtBQUFxQixnQkFBSSxFQUFDLHVCQUExQjtBQUFBLG1DQUFrRDtBQUFLLGlCQUFHLEVBQUMsa0NBQVQ7QUFBNEMsaUJBQUc7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBRyxxQkFBUyxFQUFDLFVBQWI7QUFBd0IsZ0JBQUksRUFBQyxHQUE3QjtBQUFBLG1DQUFpQztBQUFLLGlCQUFHLEVBQUMsa0NBQVQ7QUFBNEMsaUJBQUc7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBLGlDQUNFO0FBQUEsOEVBQWVpRCw4RUFBYSxDQUFDNUQsUUFBUSxDQUFDNkQsVUFBVixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLEVBV0dsRCxLQUFLLGdCQUFHO0FBQUssbUJBQVMsRUFBRyxTQUFqQjtBQUFBLGtDQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREssd0lBRUwscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FHSyxFQWRiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBLGtCQURGO0FBMkNELENBakpEOztHQUFNWixTO1VBQ1dNLHFELEVBQ0VFLHVEOzs7S0FGYlIsUztBQW1KU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZ28vW3BpZF0uMzgyOWRmM2RkZDE0MmM3YjQzZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Zm9ybWF0UGhvbmVOdW1iZXIsIGZvcm1hdFBob25lTnVtYmVySGlkZGVuLCBwYXJzZURhdGVUaW1lfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTaGFyZSBmcm9tIFwiLi4vc2hhcmVkL1NoYXJlU29jaWFsXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5cclxuY29uc3QgUG9zdEFzaWRlID0gKHtwb3N0aW5mbywgc2VuZFJlcXVlc3QsIHVzZXIsIHNldE1vZGFsfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7cGlkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtzaGFyZSwgc2V0U2hhcmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAkKCcuc2hvd19udW0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoJy5oaWRkZW5fbnVtJykuc2hvdygpO1xyXG4gICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gIH0sW10pXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgIT09ICdtb2RhbF9iZycpIHtcclxuICAgICAgc2V0U2hhcmUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IG9uRGVsZXRlID0oKSA9PiB7XHJcbiAgICBzd2FsKHtcclxuICAgICAgdGl0bGU6ICfQktGLINGD0LLQtdGA0LXQvdGLLCDRh9GC0L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC/0L7RgdGCJyxcclxuICAgICAgYnV0dG9uczp7XHJcbiAgICAgICAgY2F0Y2g6e1xyXG4gICAgICAgICAgdGV4dDogJ9CU0LAnLFxyXG4gICAgICAgICAgdmFsdWU6ICd5ZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4odmFsdWU9PntcclxuICAgICAgc3dpdGNoICh2YWx1ZSl7XHJcbiAgICAgICAgY2FzZSAneWVzJzpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBpZClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9jYXJnbycpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9kZWxldGVQb3N0YCwge3BhcmFtczp7XHJcbiAgICAgICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgICAgICBwb3N0X2lkOiBwaWQsXHJcbiAgICAgICAgICB9fSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogJ9Cj0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvSd9KVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdFUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IHBnQ2F0ZWdvcnkgPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NhcmdvJykgPyAnY2FyZ28nIDogJ3RyYW5zcG9ydCdcclxuICBjb25zdCBBc2lkZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBpZih1c2VyICYmIHBvc3RpbmZvLnVzZXIgJiYgcG9zdGluZm8udXNlci5pZCA9PSB1c2VyLmlkKSB7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgPGEgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKGAvY2FyZ28vZWRpdD9pZD0ke3BpZH0mY2F0ZWdvcnk9JHtwZ0NhdGVnb3J5fWApfSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiI1wiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiAgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZSgpfT4g0KPQtNCw0LvQuNGC0Yw8L2E+XHJcbiAgICAgIDwvPilcclxuICAgIH1lbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgeyFyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ3N0b3JhZ2UnKSA/IDxhIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3NlbmRSZXF1ZXN0fT7QntGC0L/RgNCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDPC9hPiA6ICcnfVxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TW9kYWwodHJ1ZSl9IGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIjXCI+0J3QsNC/0LjRgdCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40LU8L2E+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuIFxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBhZGRGYXZvdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvY2FyZ28nKSkge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdGVzdC5tb25leS1tZW4ua3ovYXBpL2FkZFBvc3RGYXZvdXJpdGVzP3Rva2VuPSR7Y29va2llLmdldCgndG9rZW4nKX0mcG9zdF9pZD0ke3BpZH0mY2F0ZWdvcnlfaWQ9MWApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogJ9CU0L7QsdCw0LLQu9C10L0g0LIg0LjQt9Cx0YDQsNC90L3Ri9C1J30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6ICfQo9C20LUg0LTQvtCx0LDQstC70LXQvSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy90cmFuc3BvcnQnKSkge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdGVzdC5tb25leS1tZW4ua3ovYXBpL2FkZFBvc3RGYXZvdXJpdGVzP3Rva2VuPSR7Y29va2llLmdldCgndG9rZW4nKX0mcG9zdF9pZD0ke3BpZH0mY2F0ZWdvcnlfaWQ9MmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogJ9CU0L7QsdCw0LLQu9C10L0g0LIg0LjQt9Cx0YDQsNC90L3Ri9C1J30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRVJST1JfTUVTU0FHRScsIHBheWxvYWQ6ICfQo9C20LUg0LTQvtCx0LDQstC70LXQvSd9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9zdG9yYWdlJykpIHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9hZGRTdG9yYWdlRmF2b3VyaXRlcz90b2tlbj0ke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9JnN0b3JhZ2VfaWQ9JHtwaWR9YCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiAn0JTQvtCx0LDQstC70LXQvSDQsiDQuNC30LHRgNCw0L3QvdGL0LUnfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdFUlJPUl9NRVNTQUdFJywgcGF5bG9hZDogJ9Cj0LbQtSDQtNC+0LHQsNCy0LvQtdC9J30pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7c2hhcmUgPyAnJyAgOicnfVxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImFzaWRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlX19jb250YWN0Q2FyZFwiPlxyXG4gICAgICAgICAgICA8cD7QmtC+0L3RgtCw0LrRgtC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENhcmRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9jb21wYW55X2ljb24ucG5nXCIgYWx0Lz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RDYXJkX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPntwb3N0aW5mby51c2VyLmNvbXBhbnlEZXRhaWxzLmNvbXBhbnlOYW1lIT09JycgPyBwb3N0aW5mby51c2VyLmNvbXBhbnlEZXRhaWxzLmNvbXBhbnlOYW1lIDogcG9zdGluZm8udXNlci5mdWxsTmFtZSB9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPtCg0LXQudGC0LjQvdCzOiAwPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Q2FyZF9fbnVtXCI+XHJcbiAgICAgICAgICAgICAgPHA+e2Zvcm1hdFBob25lTnVtYmVyKHBvc3RpbmZvLnVzZXIucGhvbmUpfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuX251bVwiPlxyXG4gICAgICAgICAgICAgIHtmb3JtYXRQaG9uZU51bWJlckhpZGRlbihwb3N0aW5mby51c2VyLnBob25lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hvd19udW1cIj7Qn9C+0LrQsNC30LDRgtGMINGC0LXQu9C10YTQvtC9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QXNpZGVCdXR0b25zIC8+XHJcbiAgICAgICAgICAgIHsvKiB7IXJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnc3RvcmFnZScpID8gPGEgY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17c2VuZFJlcXVlc3R9PtCe0YLQv9GA0LDQstC40YLRjCDQt9Cw0Y/QstC60YM8L2E+IDogJyd9XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIjXCI+0J3QsNC/0LjRgdCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40LU8L2E+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlX19mdW5jdGlvbnNfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZV9fZnVuY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXpicmFubm9lXCIgb25DbGljaz17YWRkRmF2b3VyfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiLz7QkiDQuNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgICAgICAgICAge3NoYXJlID8gPGEgIGNsYXNzTmFtZT0nZG93bmxvYWQnIG9uQ2xpY2s9eygpID0+IHNldFNoYXJlKCFzaGFyZSl9PjxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2FzaWRlX2Z1bmN0aW9uMS5wbmdcIiBhbHQvPjwvYT4gOiA8YSBvbkNsaWNrPXsoKSA9PiBzZXRTaGFyZSghc2hhcmUpfSBjbGFzc05hbWU9XCJkb3dubG9hZFwiIGhyZWY9XCIjXCIgPjxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2FzaWRlX2Z1bmN0aW9uMS5wbmdcIiBhbHQvPjwvYT59XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJpbnRcIiBocmVmPVwiamF2YXNjcmlwdDoocHJpbnQoKSk7XCI+PGltZyBzcmM9XCIvaW1nL3dpZGdldHMvYXNpZGVfZnVuY3Rpb24yLnBuZ1wiIGFsdC8+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNvbWVTaGl0XCIgaHJlZj1cIiNcIj48aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9hc2lkZV9mdW5jdGlvbjMucG5nXCIgYWx0Lz48L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZV9fY2hhbmdlZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgPHA+0JjQt9C80LXQvdC10L3QvjogIHtwYXJzZURhdGVUaW1lKHBvc3RpbmZvLnVwZGF0ZWRfYXQpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaGFyZSA/IDxkaXYgY2xhc3NOYW1lID0gJ3NoYXJpbmcnPlxyXG4gICAgICAgICAgICAgICAgPGJyLz7Qn9C+0LTQtdC70LjRgtGM0YHRjyDQsiDRgdC+0YYg0YHQtdGC0Y/RhVxyXG4gICAgICAgICAgICAgICAgPFNoYXJlIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogJyd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEFzaWRlOyJdLCJzb3VyY2VSb290IjoiIn0=