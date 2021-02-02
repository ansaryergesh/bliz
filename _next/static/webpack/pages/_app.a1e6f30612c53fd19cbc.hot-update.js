webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Nav/Navuser.js":
/*!******************************************!*\
  !*** ./components/shared/Nav/Navuser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _others_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/FlashMessage */ "./components/shared/others/FlashMessage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_messageAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/messageAction */ "./store/actions/messageAction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/userAction */ "./store/actions/userAction.js");



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\shared\\Nav\\Navuser.js",
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

var mapDispatchToProps = {
  successMessage: function successMessage(msg) {
    return dispatch(_store_actions_messageAction__WEBPACK_IMPORTED_MODULE_4__["successMessage"](msg));
  },
  errorMessage: function errorMessage(msg) {
    return dispatch(_store_actions_messageAction__WEBPACK_IMPORTED_MODULE_4__["errorMessage"](msg));
  },
  fetchCurrentUser: function fetchCurrentUser() {
    return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_8__["fetchCurrentUser"])());
  }
};

var handleLogout = function handleLogout(val) {
  axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat("https://test.money-men.kz/api", "/logout"), {
    email: {
      val: val
    }
  }).then(function (response) {
    if (response.data.success) {
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('token');
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
      setTimeout(function () {
        location.reload();
      }, 200);
    }
  }); // cookie.remove('token')
  // axios.post(`${process.env.BASE_URL}/logout`, {email: {email}})
  // .then(response => {
  //   if(response.success) {
  //     this.props.successMessage('Вы успешно вышли из аккаунта')
  //     // cookie.remove('token')
  //   }
  // })
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_s(function Navuser(_ref2) {
  _s();

  var email = _ref2.email,
      fullName = _ref2.fullName;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_others_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header__top__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/KZ.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u0441\u0442\u0430\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043A\u0442\u0430\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/language_logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u043A\u0430\u0437\u0430\u0445\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__item__notification",
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-clipboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0417\u0430\u044F\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item margin_right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "header__item__notification",
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-bell"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-envelope"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/personal_cabinet_logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: fullName + " "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/cabinet",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/storage_add",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 34
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                onClick: function onClick() {
                  return handleLogout(email);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u0412\u044B\u0439\u0442\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, this), router.pathname.includes('cabinet') ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "cabinet_nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "nav__wrapper container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/",
              children: "BLIZ.KZ"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "cabinet_config_opener active",
              href: "#",
              children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0417\u0430\u044F\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "cabinet-ad.html",
              children: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "cabinet-workers.html",
              children: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "cabinet-balance.html",
              children: "\u0411\u0430\u043B\u0430\u043D\u0441"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "cabinet-izbrannoe.html",
              children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 1
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
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
                lineNumber: 143,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "nav__links",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname.includes('cargo') ? "goods__nav__opener active" : "goods__nav__opener",
                href: "#",
                children: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "storage.html",
                children: "\u0421\u043A\u043B\u0430\u0434\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "equipment__opener",
                href: "#",
                children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "\u041E\u043D\u043B\u0430\u0439\u043D-\u043A\u0443\u0440\u0441\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__nums",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77073734124",
              children: "+7 (707) 373 41 24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77273956983",
              children: "+7 (727) 395 69 83"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/transport' ? 'active' : '',
            href: "/cargo/transport",
            children: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/auction' ? 'active' : '',
            href: "/cargo/auction",
            children: "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/distance' ? 'active' : '',
            href: "/cargo/distance",
            children: "\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/check' ? 'active' : '',
            href: "/cargo/check",
            children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "goods__nav equipment",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "goods__nav__links container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u0412\u0441\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u0417\u0435\u043C\u043B\u0435\u0440\u043E\u0439\u043D\u0430\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u0411\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u0430\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "equipment-nav-1.html",
            children: "\u041F\u0440\u043E\u0447\u0435\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }, this)]
  }, void 0, true);
}, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdnVzZXIuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlcnNSZWR1Y2VyIiwidXNlciIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdWNjZXNzTWVzc2FnZSIsIm1zZyIsImRpc3BhdGNoIiwibXNnYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZmV0Y2hDdXJyZW50VXNlciIsImhhbmRsZUxvZ291dCIsInZhbCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsImNvb2tpZSIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25uZWN0IiwiTmF2dXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLG1DQUN0QkMsWUFEc0IsQ0FDUEMsSUFETztBQUFBLE1BQ0FDLEtBREEseUJBQ0FBLEtBREE7QUFBQSxNQUNNQyxRQUROLHlCQUNNQSxRQUROO0FBQUEsU0FFakI7QUFDTEQsU0FBSyxFQUFMQSxLQURLO0FBQ0VDLFlBQVEsRUFBUkE7QUFERixHQUZpQjtBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFrQixHQUFJO0FBQzFCQyxnQkFBYyxFQUFDLHdCQUFDQyxHQUFEO0FBQUEsV0FBT0MsUUFBUSxDQUFDQywyRUFBQSxDQUF5QkYsR0FBekIsQ0FBRCxDQUFmO0FBQUEsR0FEVztBQUUxQkcsY0FBWSxFQUFDLHNCQUFDSCxHQUFEO0FBQUEsV0FBT0MsUUFBUSxD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QTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJDLGVBNkJEO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBLGtDQUNFO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FO0FBQUcsZ0JBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVGTDtBQUFBLGtCQURGO0FBeUlELENBNUllO0FBQUEsVUFFQ0QscURBRkQ7QUFBQSxHQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmExZTZmMzA2MTJjNTNmZDE5Y2JjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmxhc2ggZnJvbSAnLi4vb3RoZXJzL0ZsYXNoTWVzc2FnZSdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICogYXMgbXNnYWN0aW9uIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbWVzc2FnZUFjdGlvbidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgdXNlcnNSZWR1Y2VyOiB7dXNlcjoge2VtYWlsLGZ1bGxOYW1lfX1cclxufSkgPT4gKHtcclxuICBlbWFpbCwgZnVsbE5hbWVcclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6KG1zZyk9PmRpc3BhdGNoKG1zZ2FjdGlvbi5zdWNjZXNzTWVzc2FnZShtc2cpKSxcclxuICBlcnJvck1lc3NhZ2U6KG1zZyk9PmRpc3BhdGNoKG1zZ2FjdGlvbi5lcnJvck1lc3NhZ2UobXNnKSksXHJcbiAgZmV0Y2hDdXJyZW50VXNlcjooKT0+ZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKVxyXG59KVxyXG5cclxuY29uc3QgaGFuZGxlTG9nb3V0ID0odmFsKSA9PiB7XHJcbiAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbG9nb3V0YCwge2VtYWlsOiB7dmFsfX0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfSwyMDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgLy8gY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gIC8vIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2xvZ291dGAsIHtlbWFpbDoge2VtYWlsfX0pXHJcbiAgLy8gLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gIC8vICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gIC8vICAgICB0aGlzLnByb3BzLnN1Y2Nlc3NNZXNzYWdlKCfQktGLINGD0YHQv9C10YjQvdC+INCy0YvRiNC70Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwJylcclxuICAvLyAgICAgLy8gY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoZnVuY3Rpb24gTmF2dXNlcih7ZW1haWwsIGZ1bGxOYW1lfSkge1xyXG4gIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Rmxhc2ggLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX193cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbXNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL0taLnN2Z1wiICAvPlxyXG4gICAgICAgIDxwPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDQu9C80LDRgtGLPC9wPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiAgLz5cclxuICAgICAgICAgICAgPHA+0JrQsNC30LDRhdGB0YLQsNC9LCDQkNGB0YLQsNC90LA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL0taLnN2Z1wiICAvPlxyXG4gICAgICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0LrRgtCw0YM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvbGFuZ3VhZ2VfbG9nby5wbmdcIiAgLz5cclxuICAgICAgICA8cD7QndCwINGA0YPRgdGB0LrQvtC8PC9wPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8cD7QndCwINC60LDQt9Cw0YXRgdC60L7QvDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHA+0J3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvcD5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faXRlbV9fbm90aWZpY2F0aW9uXCI+MjwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jbGlwYm9hcmRcIiAvPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+0JfQsNGP0LLQutC4PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCY0LfQsdGA0LDQvdC90L7QtTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW0gbWFyZ2luX3JpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW1fX25vdGlmaWNhdGlvblwiPjI8L2Rpdj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtYmVsbFwiIC8+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7Qo9Cy0LXQtNC+0LzQu9C10L3QuNGPPC9hPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIiAvPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+0KHQvtC+0LHRidC10L3QuNGPPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL3BlcnNvbmFsX2NhYmluZXRfbG9nby5wbmdcIiAgLz5cclxuICAgICAgICB7LyogKyBzZWNvbmROYW1lLmNoYXJBdCgwKSArIFwiLlwiICovfVxyXG4gICAgICAgIDxhPntmdWxsTmFtZSArIFwiIFwiIH08L2E+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25fX2l0ZW1zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2NhYmluZXRcIj48cD7Qm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L3A+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL3N0b3JhZ2VfYWRkXCI+PHA+0JTQvtCx0LDQstC40YLRjCDRgdC60LvQsNC0PC9wPjwvYT5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoZW1haWwpfT5cclxuICAgICAgICAgICAgPHA+0JLRi9C50YLQuDwvcD5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgICBcclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbntyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NhYmluZXQnKSA/XHJcbjxuYXYgY2xhc3NOYW1lPVwiY2FiaW5ldF9uYXZcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbG9nb1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+QkxJWi5LWjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19saW5rc1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNhYmluZXRfY29uZmlnX29wZW5lciBhY3RpdmVcIiBocmVmPVwiI1wiPtCd0LDRgdGC0YDQvtC50LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCX0LDRj9Cy0LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiY2FiaW5ldC1hZC5odG1sXCI+0J7QsdGK0Y/QstC70LXQvdC40Y88L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImNhYmluZXQtd29ya2Vycy5odG1sXCI+0KHQvtGC0YDRg9C00L3QuNC60Lg8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImNhYmluZXQtYmFsYW5jZS5odG1sXCI+0JHQsNC70LDQvdGBPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+0KHQvtC+0LHRidC10L3QuNGPPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJjYWJpbmV0LWl6YnJhbm5vZS5odG1sXCI+0JjQt9Cx0YDQsNC90L3QvtC1PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25hdj4gOiA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2xvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+QkxJWi5LWjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbGlua3NcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnY2FyZ28nKSA/IFwiZ29vZHNfX25hdl9fb3BlbmVyIGFjdGl2ZVwiIDogXCJnb29kc19fbmF2X19vcGVuZXJcIn0gaHJlZj1cIiNcIj7Qk9GA0YPQt9C+0L/QtdGA0LXQstC+0LfQutC4PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInN0b3JhZ2UuaHRtbFwiPtCh0LrQu9Cw0LTRizwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVxdWlwbWVudF9fb3BlbmVyXCIgaHJlZj1cIiNcIj7QodC/0LXRhtGC0LXRhdC90LjQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QntC90LvQsNC50L0t0LrRg9GA0YHRizwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19udW1zXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNzcwNzM3MzQxMjRcIj4rNyAoNzA3KSAzNzMgNDEgMjQ8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNzcyNzM5NTY5ODNcIj4rNyAoNzI3KSAzOTUgNjkgODM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnY2FyZ28nKSA/ICdnb29kc19fbmF2IGdvb2RzIGFjdGl2ZScgOiAnZ29vZHNfX25hdiBnb29kcyd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kc19fbmF2X19saW5rcyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28nID8gJ2FjdGl2ZScgOiAnJ30gaHJlZj1cIi9jYXJnb1wiPtCT0YDRg9C30Ys8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL3RyYW5zcG9ydCcgPyAnYWN0aXZlJyA6ICcnfSAgaHJlZj1cIi9jYXJnby90cmFuc3BvcnRcIj7QotGA0LDQvdGB0L/QvtGA0YI8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL2F1Y3Rpb24nID8gJ2FjdGl2ZScgOiAnJ30gIGhyZWY9XCIvY2FyZ28vYXVjdGlvblwiPtCQ0YPQutGG0LjQvtC9PC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJnby9kaXN0YW5jZScgPyAnYWN0aXZlJyA6ICcnfSAgaHJlZj1cIi9jYXJnby9kaXN0YW5jZVwiPtCg0LDRgdGH0LXRgiDRgNCw0YHRgtC+0Y/QvdC40Lk8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL2NoZWNrJyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL2NoZWNrXCI+0J/RgNC+0LLQtdGA0LrQsCDQutC+0LzQv9Cw0L3QuNC5PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kc19fbmF2IGVxdWlwbWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kc19fbmF2X19saW5rcyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImVxdWlwbWVudC1uYXYtMS5odG1sXCI+0JLRgdC1PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZXF1aXBtZW50LW5hdi0xLmh0bWxcIj7Ql9C10LzQu9C10YDQvtC50L3QsNGPPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZXF1aXBtZW50LW5hdi0xLmh0bWxcIj7QodGC0YDQvtC40YLQtdC70YzQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCR0LXRgtC+0L3QvdGL0LUg0YDQsNCx0L7RgtGLPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZXF1aXBtZW50LW5hdi0xLmh0bWxcIj7Qk9GA0YPQt9C+0L/QtdGA0LXQstC+0LfQutC4PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZXF1aXBtZW50LW5hdi0xLmh0bWxcIj7QmtC+0LzQvNGD0L3QsNC70YzQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCf0YDQvtGH0LXQtTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj59XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59KSkgIl0sInNvdXJjZVJvb3QiOiIifQ==