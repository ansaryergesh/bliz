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
                className: router.pathname === '/storage' ? "goods__nav__opener active" : "goods__nav__opener",
                href: "/storage",
                children: "\u0421\u043A\u043B\u0430\u0434\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdnVzZXIuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlcnNSZWR1Y2VyIiwidXNlciIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdWNjZXNzTWVzc2FnZSIsIm1zZyIsImRpc3BhdGNoIiwibXNnYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZmV0Y2hDdXJyZW50VXNlciIsImhhbmRsZUxvZ291dCIsInZhbCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsImNvb2tpZSIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25uZWN0IiwiTmF2dXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLG1DQUN0QkMsWUFEc0IsQ0FDUEMsSUFETztBQUFBLE1BQ0FDLEtBREEseUJBQ0FBLEtBREE7QUFBQSxNQUNNQyxRQUROLHlCQUNNQSxRQUROO0FBQUEsU0FFakI7QUFDTEQsU0FBSyxFQUFMQSxLQURLO0FBQ0VDLFlBQVEsRUFBUkE7QUFERixHQUZpQjtBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFrQixHQUFJO0FBQzFCQyxnQkFBYyxFQUFDLHdCQUFDQyxHQUFEO0FBQUEsV0FBT0MsUUFBUSxDQUFDQywyRUFBQSxDQUF5QkYsR0FBekIsQ0FBRCxDQUFmO0FBQUEsR0FEVztBQUUxQkcsY0FBWSxFQUFDLHNCQUFDSCxHQUFEO0FBQUEsV0FBT0MsUUFBUSxD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LEtBQW9CLGNBQXBCLEdBQXFDLFFBQXJDLEdBQWdELEVBQTlEO0FBQW1FLGdCQUFJLEVBQUMsY0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCQyxlQTZCRDtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxrQ0FDRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFPRTtBQUFHLGdCQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Rkw7QUFBQSxrQkFERjtBQXlJRCxDQTVJZTtBQUFBLFVBRUNELHFEQUZEO0FBQUEsR0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZjU1YzYwMTRmMGE1MWI1MzlkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZsYXNoIGZyb20gJy4uL290aGVycy9GbGFzaE1lc3NhZ2UnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIG1zZ2FjdGlvbiBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21lc3NhZ2VBY3Rpb24nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gIHVzZXJzUmVkdWNlcjoge3VzZXI6IHtlbWFpbCxmdWxsTmFtZX19XHJcbn0pID0+ICh7XHJcbiAgZW1haWwsIGZ1bGxOYW1lXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoe1xyXG4gIHN1Y2Nlc3NNZXNzYWdlOihtc2cpPT5kaXNwYXRjaChtc2dhY3Rpb24uc3VjY2Vzc01lc3NhZ2UobXNnKSksXHJcbiAgZXJyb3JNZXNzYWdlOihtc2cpPT5kaXNwYXRjaChtc2dhY3Rpb24uZXJyb3JNZXNzYWdlKG1zZykpLFxyXG4gIGZldGNoQ3VycmVudFVzZXI6KCk9PmRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSlcclxufSlcclxuXHJcbmNvbnN0IGhhbmRsZUxvZ291dCA9KHZhbCkgPT4ge1xyXG4gIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2xvZ291dGAsIHtlbWFpbDoge3ZhbH19KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0sMjAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIC8vIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAvLyBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9sb2dvdXRgLCB7ZW1haWw6IHtlbWFpbH19KVxyXG4gIC8vIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAvLyAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAvLyAgICAgdGhpcy5wcm9wcy5zdWNjZXNzTWVzc2FnZSgn0JLRiyDRg9GB0L/QtdGI0L3QviDQstGL0YjQu9C4INC40Lcg0LDQutC60LDRg9C90YLQsCcpXHJcbiAgLy8gICAgIC8vIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAvLyAgIH1cclxuICAvLyB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKGZ1bmN0aW9uIE5hdnVzZXIoe2VtYWlsLCBmdWxsTmFtZX0pIHtcclxuICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEZsYXNoIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiAgLz5cclxuICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0LvQvNCw0YLRizwvcD5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvS1ouc3ZnXCIgIC8+XHJcbiAgICAgICAgICAgIDxwPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDRgdGC0LDQvdCwPC9wPlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiAgLz5cclxuICAgICAgICAgICAgPHA+0JrQsNC30LDRhdGB0YLQsNC9LCDQkNC60YLQsNGDPC9wPlxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL2xhbmd1YWdlX2xvZ28ucG5nXCIgIC8+XHJcbiAgICAgICAgPHA+0J3QsCDRgNGD0YHRgdC60L7QvDwvcD5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHA+0J3QsCDQutCw0LfQsNGF0YHQutC+0Lw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwPtCd0LAg0LDQvdCz0LvQuNC50YHQutC+0Lw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW1fX25vdGlmaWNhdGlvblwiPjI8L2Rpdj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xpcGJvYXJkXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCX0LDRj9Cy0LrQuDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiIC8+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtIG1hcmdpbl9yaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtX19ub3RpZmljYXRpb25cIj4yPC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWJlbGxcIiAvPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+0KPQstC10LTQvtC80LvQtdC90LjRjzwvYT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCh0L7QvtCx0YnQtdC90LjRjzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9wZXJzb25hbF9jYWJpbmV0X2xvZ28ucG5nXCIgIC8+XHJcbiAgICAgICAgey8qICsgc2Vjb25kTmFtZS5jaGFyQXQoMCkgKyBcIi5cIiAqL31cclxuICAgICAgICA8YT57ZnVsbE5hbWUgKyBcIiBcIiB9PC9hPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0XCI+PHA+0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9wPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9zdG9yYWdlX2FkZFwiPjxwPtCU0L7QsdCw0LLQuNGC0Ywg0YHQutC70LDQtDwvcD48L2E+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTG9nb3V0KGVtYWlsKX0+XHJcbiAgICAgICAgICAgIDxwPtCS0YvQudGC0Lg8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG57cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYWJpbmV0JykgP1xyXG48bmF2IGNsYXNzTmFtZT1cImNhYmluZXRfbmF2XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3dyYXBwZXIgY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9faXRlbXNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2xvZ29cIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPkJMSVouS1o8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbGlua3NcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjYWJpbmV0X2NvbmZpZ19vcGVuZXIgYWN0aXZlXCIgaHJlZj1cIiNcIj7QndCw0YHRgtGA0L7QudC60Lg8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj7Ql9Cw0Y/QstC60Lg8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImNhYmluZXQtYWQuaHRtbFwiPtCe0LHRitGP0LLQu9C10L3QuNGPPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJjYWJpbmV0LXdvcmtlcnMuaHRtbFwiPtCh0L7RgtGA0YPQtNC90LjQutC4PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJjYWJpbmV0LWJhbGFuY2UuaHRtbFwiPtCR0LDQu9Cw0L3RgTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPtCh0L7QvtCx0YnQtdC90LjRjzwvYT5cclxuICAgICAgICA8YSBocmVmPVwiY2FiaW5ldC1pemJyYW5ub2UuaHRtbFwiPtCY0LfQsdGA0LDQvdC90L7QtTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uYXY+IDogPGhlYWRlcj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3dyYXBwZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkJMSVouS1o8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2xpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NhcmdvJykgPyBcImdvb2RzX19uYXZfX29wZW5lciBhY3RpdmVcIiA6IFwiZ29vZHNfX25hdl9fb3BlbmVyXCJ9IGhyZWY9XCIjXCI+0JPRgNGD0LfQvtC/0LXRgNC10LLQvtC30LrQuDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9zdG9yYWdlJyA/IFwiZ29vZHNfX25hdl9fb3BlbmVyIGFjdGl2ZVwiIDogXCJnb29kc19fbmF2X19vcGVuZXJcIn0gaHJlZj1cIi9zdG9yYWdlXCI+0KHQutC70LDQtNGLPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZXF1aXBtZW50X19vcGVuZXJcIiBocmVmPVwiI1wiPtCh0L/QtdGG0YLQtdGF0L3QuNC60LA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCe0L3Qu9Cw0LnQvS3QutGD0YDRgdGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX251bXNcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzA3MzczNDEyNFwiPis3ICg3MDcpIDM3MyA0MSAyNDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzI3Mzk1Njk4M1wiPis3ICg3MjcpIDM5NSA2OSA4MzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXJnbycpID8gJ2dvb2RzX19uYXYgZ29vZHMgYWN0aXZlJyA6ICdnb29kc19fbmF2IGdvb2RzJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzX19uYXZfX2xpbmtzIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJnbycgPyAnYWN0aXZlJyA6ICcnfSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfRizwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vdHJhbnNwb3J0JyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL3RyYW5zcG9ydFwiPtCi0YDQsNC90YHQv9C+0YDRgjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vYXVjdGlvbicgPyAnYWN0aXZlJyA6ICcnfSAgaHJlZj1cIi9jYXJnby9hdWN0aW9uXCI+0JDRg9C60YbQuNC+0L08L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL2Rpc3RhbmNlJyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL2Rpc3RhbmNlXCI+0KDQsNGB0YfQtdGCINGA0LDRgdGC0L7Rj9C90LjQuTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vY2hlY2snID8gJ2FjdGl2ZScgOiAnJ30gIGhyZWY9XCIvY2FyZ28vY2hlY2tcIj7Qn9GA0L7QstC10YDQutCwINC60L7QvNC/0LDQvdC40Lk8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzX19uYXYgZXF1aXBtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzX19uYXZfX2xpbmtzIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZXF1aXBtZW50LW5hdi0xLmh0bWxcIj7QktGB0LU8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCX0LXQvNC70LXRgNC+0LnQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCh0YLRgNC+0LjRgtC10LvRjNC90LDRjzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImVxdWlwbWVudC1uYXYtMS5odG1sXCI+0JHQtdGC0L7QvdC90YvQtSDRgNCw0LHQvtGC0Ys8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCT0YDRg9C30L7Qv9C10YDQtdCy0L7Qt9C60Lg8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlcXVpcG1lbnQtbmF2LTEuaHRtbFwiPtCa0L7QvNC80YPQvdCw0LvRjNC90LDRjzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImVxdWlwbWVudC1uYXYtMS5odG1sXCI+0J/RgNC+0YfQtdC1PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPn1cclxuICAgIDwvPlxyXG5cclxuICApXHJcbn0pKSAiXSwic291cmNlUm9vdCI6IiJ9