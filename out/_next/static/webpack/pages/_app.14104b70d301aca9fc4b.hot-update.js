webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Nav/Navguest.js":
/*!*******************************************!*\
  !*** ./components/shared/Nav/Navguest.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _others_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/FlashMessage */ "./components/shared/others/FlashMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../firebase */ "./firebase.js");



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\shared\\Nav\\Navguest.js",
    _s = $RefreshSig$();










var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$usersReducer$use = _ref.usersReducer.user,
      email = _ref$usersReducer$use.email,
      fullName = _ref$usersReducer$use.fullName;
  return {
    email: email,
    fullName: fullName
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, null)(_s(function Navguest(_ref2) {
  _s();

  var email = _ref2.email,
      fullName = _ref2.fullName;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var isActiveUser = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');

  var handleLogout = function handleLogout(val) {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("https://test.money-men.kz/api", "/logout"), {
      email: {
        val: val
      }
    }).then(function (response) {
      if (response.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('token');
        _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().signOut().then(next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/'));
        setTimeout(function () {
          location.reload();
        }, 200);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_others_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header__top__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mobile_bar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/KZ.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u0441\u0442\u0430\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043A\u0442\u0430\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__mobile__item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mobile__logo",
            href: "/",
            children: "BLIZ.KZ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__item mobile_wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/mobile_globo.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/login",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/mobile_user.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 32
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/language_logo.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u043A\u0430\u0437\u0430\u0445\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), isActiveUser !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "far fa-clipboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/cabinet/requests",
                children: "\u0417\u0430\u044F\u0432\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "far fa-star"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/cabinet/favourites",
                children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item margin_right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "far fa-bell"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/cabinet/notification",
                children: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fas fa-angle-down"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "far fa-envelope"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/cabinet/message",
                children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/personal_cabinet_logo.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/cabinet",
                children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return handleLogout(email);
              },
              className: "header__top__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "\u0412\u044B\u0439\u0442\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 42
          }, this), isActiveUser === undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/register",
                children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/img/widgets/personal_cabinet_logo.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/login",
                children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 44
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header__top__mobile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__mobile__wrapper container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cargo",
                    children: "\u0413\u0440\u0443\u0437\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cargo/transport",
                    children: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cargo/auction",
                    children: "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cargo/distance",
                    children: "\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0439"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cargo/check",
                    children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u0421\u043A\u043B\u0430\u0434\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/storage",
                    children: "\u0421\u043A\u043B\u0430\u0434\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/storage/add",
                    children: "\u041F\u043E\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/equipment",
                    children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/equipment/add",
                    children: "\u041F\u043E\u0434\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this), isActiveUser !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 20
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 20
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 18
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet",
                    children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 22
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet/requests",
                    children: "\u0417\u0430\u044F\u0432\u043A\u0438"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 22
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet/posts",
                    children: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 22
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet/workers",
                    children: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 22
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet/message",
                    children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 22
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "/cabinet/favourites",
                    children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 22
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 18
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__login",
            children: isActiveUser !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 55
              }, this), "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__login__btns",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/cabinet/balance",
                  children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  onClick: function onClick() {
                    return handleLogout(email);
                  },
                  children: "\u0412\u044B\u0439\u0442\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 82
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 45
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: "\u0412\u0445\u043E\u0434 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 47
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__login__btns",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/login",
                  children: "\u0412\u043E\u0439\u0442\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/register",
                  children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__language",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0420\u0435\u0433\u0438\u043E\u043D \u0438 \u044F\u0437\u044B\u043A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__text__inner",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/img/widgets/KZ.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__nav__item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__text__inner",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/img/widgets/language_logo.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: "\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-angle-down"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__mobile__nav__item__inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "header__top__mobile__nav__item__inner__wrapper",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: "\u041D\u0430 \u043A\u0430\u0437\u0430\u0445\u0441\u043A\u043E\u043C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: "\u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__mobile__contacts",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77073734124",
              children: ["+7 (707) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "373 41 24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77273956983",
              children: ["+7 (727) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "395 69 83"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__top__mobile__contacts__icons",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/footer/Instagram.png",
                  alt: "instagram"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/footer/Telegram.png",
                  alt: "telegram"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/footer/VK.png",
                  alt: "vk"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav__wrapper container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__items",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "nav__logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/",
                children: "BLIZ.KZ"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "nav__links",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname.includes('cargo') ? "goods__nav__opener active" : "goods__nav__opener",
                href: "/cargo",
                children: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname === '/storage' ? 'goods__nav__opener active' : 'goods__nav__opener',
                href: "/storage",
                children: "\u0421\u043A\u043B\u0430\u0434\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname.includes('equipment') ? 'goods__nav__opener active' : 'goods__nav__opener',
                href: "/equipment",
                children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__nums",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77073734124",
              children: "+7 (707) 373 41 24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77273956983",
              children: "+7 (727) 395 69 83"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: router.pathname.includes('cargo') ? 'goods__nav goods active' : 'goods__nav goods',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "goods__nav__links container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo' ? 'active' : '',
            href: "/cargo",
            children: "\u0413\u0440\u0443\u0437\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/transport' ? 'active' : '',
            href: "/cargo/transport",
            children: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/auction' ? 'active' : '',
            href: "/cargo/auction",
            children: "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/distance' ? 'active' : '',
            href: "/cargo/distance",
            children: "\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/check' ? 'active' : '',
            href: "/cargo/check",
            children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
})));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdmd1ZXN0LmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJzUmVkdWNlciIsInVzZXIiLCJlbWFpbCIsImZ1bGxOYW1lIiwiY29ubmVjdCIsIk5hdmd1ZXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmVVc2VyIiwiY29va2llIiwiZ2V0IiwiaGFuZGxlTG9nb3V0IiwidmFsIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwicmVtb3ZlIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsIlJvdXRlciIsInB1c2giLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1bmRlZmluZWQiLCJwYXRobmFtZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxtQ0FDdEJDLFlBRHNCLENBQ1BDLElBRE87QUFBQSxNQUNBQyxLQURBLHlCQUNBQSxLQURBO0FBQUEsTUFDTUMsUUFETix5QkFDTUEsUUFETjtBQUFBLFNBRWpCO0FBQ0xELFNBQUssRUFBTEEsS0FESztBQUNFQyxZQUFRLEVBQVJBO0FBREYsR0FGaUI7QUFBQSxDQUF4Qjs7QUFLZ0JDLDBIQUFPLENBQUNMLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxJQUE4QixTQUFTTSxRQUFULFFBQW9DO0FBQUE7O0FBQUEsTUFBakJILEtBQWlCLFNBQWpCQSxLQUFpQjtBQUFBLE1BQVhDLFFBQVcsU0FBWEEsUUFBVztBQUNoRixNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyxnREFBTSxDQUFDQyxHQUFQLENB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QTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFeEIsTUFBTSxDQUFDd0IsUUFBUCxLQUFvQixnQkFBcEIsR0FBdUMsUUFBdkMsR0FBa0QsRUFBaEU7QUFBcUUsZ0JBQUksRUFBQyxnQkFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFHLHFCQUFTLEVBQUV4QixNQUFNLENBQUN3QixRQUFQLEtBQW9CLGlCQUFwQixHQUF3QyxRQUF4QyxHQUFtRCxFQUFqRTtBQUFzRSxnQkFBSSxFQUFDLGlCQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUcscUJBQVMsRUFBRXhCLE1BQU0sQ0FBQ3dCLFFBQVAsS0FBb0IsY0FBcEIsR0FBcUMsUUFBckMsR0FBZ0QsRUFBOUQ7QUFBbUUsZ0JBQUksRUFBQyxjQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhORjtBQUFBLGtCQURGO0FBOFBELENBalJlO0FBQUEsVUFDQ3ZCLHFEQUREO0FBQUEsR0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNDEwNGI3MGQzMDFhY2E5ZmM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGbGFzaCBmcm9tICcuLi9vdGhlcnMvRmxhc2hNZXNzYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gIHVzZXJzUmVkdWNlcjoge3VzZXI6IHtlbWFpbCxmdWxsTmFtZX19XHJcbn0pID0+ICh7XHJcbiAgZW1haWwsIGZ1bGxOYW1lXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShmdW5jdGlvbiBOYXZndWVzdCh7ZW1haWwsZnVsbE5hbWV9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpc0FjdGl2ZVVzZXIgPSBjb29raWUuZ2V0KCd0b2tlbicpXHJcblxyXG5cclxuICBcclxuY29uc3QgaGFuZGxlTG9nb3V0ID0odmFsKSA9PiB7XHJcbiAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbG9nb3V0YCwge2VtYWlsOiB7dmFsfX0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAgICAgICAudGhlbihSb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9LDIwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEZsYXNoIC8+XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX2JhclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDQu9C80LDRgtGLPC9wPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0YHRgtCw0L3QsDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0LrRgtCw0YM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9faXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtb2JpbGVfX2xvZ29cIiBocmVmPVwiL1wiPkJMSVouS1o8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9faXRlbSBtb2JpbGVfd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIvaW1nL3dpZGdldHMvbW9iaWxlX2dsb2JvLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj48aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9tb2JpbGVfdXNlci5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9sYW5ndWFnZV9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+0J3QsCDRgNGD0YHRgdC60L7QvDwvcD5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+0J3QsCDQutCw0LfQsNGF0YHQutC+0Lw8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+0J3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZVVzZXIhPT11bmRlZmluZWQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtX19ub3RpZmljYXRpb25cIj4yPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsaXBib2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvcmVxdWVzdHNcIj7Ql9Cw0Y/QstC60Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0L2Zhdm91cml0ZXNcIj7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbSBtYXJnaW5fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faXRlbV9fbm90aWZpY2F0aW9uXCI+MjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1iZWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FiaW5ldC9ub3RpZmljYXRpb25cIj7Qo9Cy0LXQtNC+0LzQu9C10L3QuNGPPC9hPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvbWVzc2FnZVwiPtCh0L7QvtCx0YnQtdC90LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvcGVyc29uYWxfY2FiaW5ldF9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0XCI+0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9nb3V0KGVtYWlsKX0gY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSAgaHJlZj1cIiNcIj7QktGL0LnRgtC4PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gfVxyXG4gICAgICAgICAgICB7aXNBY3RpdmVVc2VyID09PSB1bmRlZmluZWQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9wZXJzb25hbF9jYWJpbmV0X2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX193cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+0JPRgNGD0LfQvtC/0LXRgNC10LLQvtC30LrQuDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lcl9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ29cIj7Qk9GA0YPQt9GLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ28vdHJhbnNwb3J0XCI+0KLRgNCw0L3RgdC/0L7RgNGCPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ28vYXVjdGlvblwiPtCQ0YPQutGG0LjQvtC9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ28vZGlzdGFuY2VcIj7QoNCw0YHRh9C10YIg0YDQsNGB0YLQvtGP0L3QuNC5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ28vY2hlY2tcIj7Qn9GA0L7QstC10YDQutCwINC60L7QvNC/0LDQvdC40Lk8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7QodC60LvQsNC00Ys8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXJfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3N0b3JhZ2VcIj7QodC60LvQsNC00Ys8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL3N0b3JhZ2UvYWRkJz7Qn9C+0LTQsNGC0Ywg0L7QsdGK0Y/QstC70LXQvdC40LU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7QodC/0LXRhtGC0LXRhdC90LjQutCwPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9lcXVpcG1lbnRcIj7QodC/0LXRhtGC0LXRhdC90LjQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZXF1aXBtZW50L2FkZFwiPtCf0L7QtNCw0YLRjCDQvtCx0YrRj9Cy0LvQtdC90LjQtTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXNBY3RpdmVVc2VyICE9PSB1bmRlZmluZWQgJiYgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGgzPtCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXJfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0XCI+0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvcmVxdWVzdHNcIj7Ql9Cw0Y/QstC60Lg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FiaW5ldC9wb3N0c1wiPtCe0LHRitGP0LLQu9C10L3QuNGPPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvd29ya2Vyc1wiPtCh0L7RgtGA0YPQtNC90LjQutC4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvbWVzc2FnZVwiPtCh0L7QvtCx0YnQtdC90LjRjzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0L2Zhdm91cml0ZXNcIj7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19sb2dpblwiPlxyXG4gICAgICAgICAgICAgIHtpc0FjdGl2ZVVzZXIgIT09IHVuZGVmaW5lZCA/IDxGcmFnbWVudD48aDM+0J/QvtC/0L7Qu9C90LjRgtGMINCx0LDQu9Cw0L3RgTwvaDM+ICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX2xvZ2luX19idG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvYmFsYW5jZVwiPtCf0L7Qv9C+0LvQvdC40YLRjCDQsdCw0LvQsNC90YE8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoZW1haWwpfT7QktGL0LnRgtC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PjwvRnJhZ21lbnQ+IDo8RnJhZ21lbnQ+ICAgPGgzPtCS0YXQvtC0INC4INGA0LXQs9C40YHRgtGA0LDRhtC40Y88L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbG9naW5fX2J0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj7QktC+0LnRgtC4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+PC9GcmFnbWVudD59XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX2xhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCg0LXQs9C40L7QvSDQuCDRj9C30YvQujwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0X19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL0taLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDQu9C80LDRgtGLPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lcl9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQsNC30LDRhdGB0YLQsNC9LCDQkNC70LzQsNGC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0X19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2xhbmd1YWdlX2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+0J3QsCDRgNGD0YHRgdC60L7QvDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXJfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCd0LAg0LrQsNC30LDRhdGB0LrQvtC8PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0J3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX21vYmlsZV9fY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPSd0ZWw6Kzc3MDczNzM0MTI0Jz4rNyAoNzA3KSA8c3Bhbj4zNzMgNDEgMjQ8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorNzcyNzM5NTY5ODMnPis3ICg3MjcpIDxzcGFuPjM5NSA2OSA4Mzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19jb250YWN0c19faWNvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIvaW1nL2Zvb3Rlci9JbnN0YWdyYW0ucG5nXCIgYWx0PVwiaW5zdGFncmFtXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiL2ltZy9mb290ZXIvVGVsZWdyYW0ucG5nXCIgYWx0PVwidGVsZWdyYW1cIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIvaW1nL2Zvb3Rlci9WSy5wbmdcIiBhbHQ9XCJ2a1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2xvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+QkxJWi5LWjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXJnbycpID8gXCJnb29kc19fbmF2X19vcGVuZXIgYWN0aXZlXCIgOiBcImdvb2RzX19uYXZfX29wZW5lclwifSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfQvtC/0LXRgNC10LLQvtC30LrQuDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL3N0b3JhZ2UnID8gJ2dvb2RzX19uYXZfX29wZW5lciBhY3RpdmUnIDogJ2dvb2RzX19uYXZfX29wZW5lcid9IGhyZWY9Jy9zdG9yYWdlJz7QodC60LvQsNC00Ys8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnZXF1aXBtZW50JykgPyAnZ29vZHNfX25hdl9fb3BlbmVyIGFjdGl2ZScgOiAnZ29vZHNfX25hdl9fb3BlbmVyJ30gaHJlZj1cIi9lcXVpcG1lbnRcIj7QodC/0LXRhtGC0LXRhdC90LjQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCI+0J7QvdC70LDQudC9LdC60YPRgNGB0Ys8L2E+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX251bXNcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzA3MzczNDEyNFwiPis3ICg3MDcpIDM3MyA0MSAyNDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzI3Mzk1Njk4M1wiPis3ICg3MjcpIDM5NSA2OSA4MzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXJnbycpID8gJ2dvb2RzX19uYXYgZ29vZHMgYWN0aXZlJyA6ICdnb29kc19fbmF2IGdvb2RzJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzX19uYXZfX2xpbmtzIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJnbycgPyAnYWN0aXZlJyA6ICcnfSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfRizwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vdHJhbnNwb3J0JyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL3RyYW5zcG9ydFwiPtCi0YDQsNC90YHQv9C+0YDRgjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vYXVjdGlvbicgPyAnYWN0aXZlJyA6ICcnfSAgaHJlZj1cIi9jYXJnby9hdWN0aW9uXCI+0JDRg9C60YbQuNC+0L08L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL2Rpc3RhbmNlJyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL2Rpc3RhbmNlXCI+0KDQsNGB0YfQtdGCINGA0LDRgdGC0L7Rj9C90LjQuTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vY2hlY2snID8gJ2FjdGl2ZScgOiAnJ30gIGhyZWY9XCIvY2FyZ28vY2hlY2tcIj7Qn9GA0L7QstC10YDQutCwINC60L7QvNC/0LDQvdC40Lk8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnZXF1aXBtZW50JykgPyAnZ29vZHNfX25hdiBlcXVpcG1lbnQgYWN0aXZlJyA6ICdnb29kc19fbmF2IGVxdWlwbWVudCd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kc19fbmF2X19saW5rcyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9lcXVpcG1lbnRcIj7QktGB0LU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2VxdWlwbWVudCcgPyAnYWN0aXZlJyA6ICcnfSBocmVmPVwiI1wiPtCX0LXQvNC70LXRgNC+0LnQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCR0LXRgtC+0L3QvdGL0LUg0YDQsNCx0L7RgtGLPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCT0YDRg9C30L7Qv9C10YDQtdCy0L7Qt9C60Lg8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQvtC80LzRg9C90LDQu9GM0L3QsNGPPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCf0YDQvtGH0LXQtTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==