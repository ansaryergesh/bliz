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
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../firebase */ "./firebase.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/actions/userAction */ "./store/actions/userAction.js");



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
    return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__["fetchCurrentUser"])());
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
      _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().signOut().then(next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/'));
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
      lineNumber: 49,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header__top__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            classNamr: "header__top__mobile__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mobile_bar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/KZ.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u0441\u0442\u0430\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/img/widgets/KZ.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043A\u0442\u0430\u0443"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/language_logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dropdown__items",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u043A\u0430\u0437\u0430\u0445\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "\u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header__top__items mobile_none",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-clipboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/requests",
              children: "\u0417\u0430\u044F\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/favourites",
              children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item margin_right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-bell"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/notification",
              children: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-envelope"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/message",
              children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return router.push('/cabinet');
            },
            className: "header__top__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/img/widgets/personal_cabinet_logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: fullName + " "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-angle-down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
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
                    lineNumber: 114,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "header__top__item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/storage_add",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u043B\u0430\u0434"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 34
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
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
                  lineNumber: 120,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
              lineNumber: 134,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "cabinet_config_opener",
              href: "/cabinet",
              children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/requests",
              className: router.pathname === '/cabinet/requests' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u0417\u0430\u044F\u0432\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/posts",
              className: router.pathname === '/cabinet/posts' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/workers",
              className: router.pathname === '/cabinet/workers' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/balance",
              className: router.pathname === '/cabinet/balance' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u0411\u0430\u043B\u0430\u043D\u0441"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/message",
              className: router.pathname === '/cabinet/message' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/cabinet/favourites",
              className: router.pathname === '/cabinet/favourites' ? "cabinet_config_opener active" : "cabinet_config_opener",
              children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "nav__links",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname.includes('cargo') ? "goods__nav__opener active" : "goods__nav__opener",
                href: "/cargo",
                children: "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname === '/storage' ? "goods__nav__opener active" : "goods__nav__opener",
                href: "/storage",
                children: "\u0421\u043A\u043B\u0430\u0434\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: router.pathname.includes('equipment') ? 'goods__nav__opener active' : 'goods__nav__opener',
                href: "/equipment",
                children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav__nums",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77073734124",
              children: "+7 (707) 373 41 24"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "tel:+77273956983",
              children: "+7 (727) 395 69 83"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/transport' ? 'active' : '',
            href: "/cargo/transport",
            children: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/auction' ? 'active' : '',
            href: "/cargo/auction",
            children: "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/distance' ? 'active' : '',
            href: "/cargo/distance",
            children: "\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: router.pathname === '/cargo/check' ? 'active' : '',
            href: "/cargo/check",
            children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
      lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdnVzZXIuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlcnNSZWR1Y2VyIiwidXNlciIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdWNjZXNzTWVzc2FnZSIsIm1zZyIsImRpc3BhdGNoIiwibXNnYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZmV0Y2hDdXJyZW50VXNlciIsImhhbmRsZUxvZ291dCIsInZhbCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsImNvb2tpZSIsInJlbW92ZSIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJSb3V0ZXIiLCJwdXNoIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29ubmVjdCIsIk5hdnVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxtQ0FDdEJDLFlBRHNCLENBQ1BDLElBRE87QUFBQSxNQUNBQyxLQURBLHlCQUNBQSxLQURBO0FBQUEsTUFDTUMsUUFETix5QkFDTUEsUUFETjtBQUFBLFNBRWpCO0FBQ0xELFNBQUssRUFBTEEsS0FESztBQUNFQyxZQUFRLEVBQVJBO0FBREYsR0FGaUI7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBSTtBQUMxQkMsZ0JBQWMsRUFBQyx3QkFBQ0MsR0FBRDtBQUFBLFdBQU9DLFFBQVEsQ0FBQ0MsMkVBQUEsQ0FBeUJGLEdBQXpCLENBQUQsQ0FBZjtBQUFBLEdBRFc7QUFFMUJHLGNBQVks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MmVhY2RlNzliYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZsYXNoIGZyb20gJy4uL290aGVycy9GbGFzaE1lc3NhZ2UnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIG1zZ2FjdGlvbiBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21lc3NhZ2VBY3Rpb24nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi8uLi9maXJlYmFzZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgdXNlcnNSZWR1Y2VyOiB7dXNlcjoge2VtYWlsLGZ1bGxOYW1lfX1cclxufSkgPT4gKHtcclxuICBlbWFpbCwgZnVsbE5hbWVcclxufSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6KG1zZyk9PmRpc3BhdGNoKG1zZ2FjdGlvbi5zdWNjZXNzTWVzc2FnZShtc2cpKSxcclxuICBlcnJvck1lc3NhZ2U6KG1zZyk9PmRpc3BhdGNoKG1zZ2FjdGlvbi5lcnJvck1lc3NhZ2UobXNnKSksXHJcbiAgZmV0Y2hDdXJyZW50VXNlcjooKT0+ZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKVxyXG59KVxyXG5cclxuY29uc3QgaGFuZGxlTG9nb3V0ID0odmFsKSA9PiB7XHJcbiAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbG9nb3V0YCwge2VtYWlsOiB7dmFsfX0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAgICAgICAudGhlbihSb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9LDIwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAvLyBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgLy8gYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vbG9nb3V0YCwge2VtYWlsOiB7ZW1haWx9fSlcclxuICAvLyAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgLy8gICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgLy8gICAgIHRoaXMucHJvcHMuc3VjY2Vzc01lc3NhZ2UoJ9CS0Ysg0YPRgdC/0LXRiNC90L4g0LLRi9GI0LvQuCDQuNC3INCw0LrQutCw0YPQvdGC0LAnKVxyXG4gIC8vICAgICAvLyBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShmdW5jdGlvbiBOYXZ1c2VyKHtlbWFpbCwgZnVsbE5hbWV9KSB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxGbGFzaCAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX3dyYXBwZXIgY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtc1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbXI9XCJoZWFkZXJfX3RvcF9fbW9iaWxlX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlX2JhclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL0taLnN2Z1wiICAvPlxyXG4gICAgICAgIDxwPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDQu9C80LDRgtGLPC9wPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9LWi5zdmdcIiAgLz5cclxuICAgICAgICAgICAgPHA+0JrQsNC30LDRhdGB0YLQsNC9LCDQkNGB0YLQsNC90LA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL0taLnN2Z1wiICAvPlxyXG4gICAgICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0LrRgtCw0YM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvbGFuZ3VhZ2VfbG9nby5wbmdcIiAgLz5cclxuICAgICAgICA8cD7QndCwINGA0YPRgdGB0LrQvtC8PC9wPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8cD7QndCwINC60LDQt9Cw0YXRgdC60L7QvDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHA+0J3QsCDQsNC90LPQu9C40LnRgdC60L7QvDwvcD5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1zIG1vYmlsZV9ub25lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW1fX25vdGlmaWNhdGlvblwiPjI8L2Rpdj4gKi99XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsaXBib2FyZFwiIC8+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9jYWJpbmV0L3JlcXVlc3RzXCI+0JfQsNGP0LLQutC4PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvZmF2b3VyaXRlc1wiPtCY0LfQsdGA0LDQvdC90L7QtTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW0gbWFyZ2luX3JpZ2h0XCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtX19ub3RpZmljYXRpb25cIj4yPC9kaXY+ICovfVxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1iZWxsXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvbm90aWZpY2F0aW9uXCI+0KPQstC10LTQvtC80LvQtdC90LjRjzwvYT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCIgLz5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvbWVzc2FnZVwiPtCh0L7QvtCx0YnQtdC90LjRjzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYWJpbmV0Jyl9IGNsYXNzTmFtZT1cImhlYWRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvcGVyc29uYWxfY2FiaW5ldF9sb2dvLnBuZ1wiICAvPlxyXG4gICAgICAgIHsvKiArIHNlY29uZE5hbWUuY2hhckF0KDApICsgXCIuXCIgKi99XHJcbiAgICAgICAgPGE+e2Z1bGxOYW1lICsgXCIgXCIgfTwvYT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvY2FiaW5ldFwiPjxwPtCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvcD48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvc3RvcmFnZV9hZGRcIj48cD7QlNC+0LHQsNCy0LjRgtGMINGB0LrQu9Cw0LQ8L3A+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3RvcF9faXRlbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dChlbWFpbCl9PlxyXG4gICAgICAgICAgICA8cD7QktGL0LnRgtC4PC9wPlxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICA8L2Rpdj5cclxuICBcclxuPC9kaXY+XHJcbntyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NhYmluZXQnKSA/XHJcbjxuYXYgY2xhc3NOYW1lPVwiY2FiaW5ldF9uYXZcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fd3JhcHBlciBjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbG9nb1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+QkxJWi5LWjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19saW5rc1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNhYmluZXRfY29uZmlnX29wZW5lclwiIGhyZWY9XCIvY2FiaW5ldFwiPtCd0LDRgdGC0YDQvtC50LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvcmVxdWVzdHNcIiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09PScvY2FiaW5ldC9yZXF1ZXN0cycgPyBcImNhYmluZXRfY29uZmlnX29wZW5lciBhY3RpdmVcIiA6IFwiY2FiaW5ldF9jb25maWdfb3BlbmVyXCJ9PtCX0LDRj9Cy0LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvcG9zdHNcIiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09PScvY2FiaW5ldC9wb3N0cycgPyBcImNhYmluZXRfY29uZmlnX29wZW5lciBhY3RpdmVcIiA6IFwiY2FiaW5ldF9jb25maWdfb3BlbmVyXCJ9PtCe0LHRitGP0LLQu9C10L3QuNGPPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY2FiaW5ldC93b3JrZXJzXCIgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lPT09Jy9jYWJpbmV0L3dvcmtlcnMnID8gXCJjYWJpbmV0X2NvbmZpZ19vcGVuZXIgYWN0aXZlXCIgOiBcImNhYmluZXRfY29uZmlnX29wZW5lclwifT7QodC+0YLRgNGD0LTQvdC40LrQuDwvYT5cclxuICAgICAgICA8YSAgaHJlZj1cIi9jYWJpbmV0L2JhbGFuY2VcIiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09PScvY2FiaW5ldC9iYWxhbmNlJyA/IFwiY2FiaW5ldF9jb25maWdfb3BlbmVyIGFjdGl2ZVwiIDogXCJjYWJpbmV0X2NvbmZpZ19vcGVuZXJcIn0gPtCR0LDQu9Cw0L3RgTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL2NhYmluZXQvbWVzc2FnZVwiICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09PScvY2FiaW5ldC9tZXNzYWdlJyA/IFwiY2FiaW5ldF9jb25maWdfb3BlbmVyIGFjdGl2ZVwiIDogXCJjYWJpbmV0X2NvbmZpZ19vcGVuZXJcIn0+0KHQvtC+0LHRidC10L3QuNGPPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY2FiaW5ldC9mYXZvdXJpdGVzXCIgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lPT09Jy9jYWJpbmV0L2Zhdm91cml0ZXMnID8gXCJjYWJpbmV0X2NvbmZpZ19vcGVuZXIgYWN0aXZlXCIgOiBcImNhYmluZXRfY29uZmlnX29wZW5lclwifT7QmNC30LHRgNCw0L3QvdC+0LU8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmF2PiA6IDxoZWFkZXI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X193cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9faXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5CTElaLktaPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19saW5rc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXJnbycpID8gXCJnb29kc19fbmF2X19vcGVuZXIgYWN0aXZlXCIgOiBcImdvb2RzX19uYXZfX29wZW5lclwifSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfQvtC/0LXRgNC10LLQvtC30LrQuDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9zdG9yYWdlJyA/IFwiZ29vZHNfX25hdl9fb3BlbmVyIGFjdGl2ZVwiIDogXCJnb29kc19fbmF2X19vcGVuZXJcIn0gaHJlZj1cIi9zdG9yYWdlXCI+0KHQutC70LDQtNGLPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdlcXVpcG1lbnQnKSA/ICdnb29kc19fbmF2X19vcGVuZXIgYWN0aXZlJyA6ICdnb29kc19fbmF2X19vcGVuZXInfSBocmVmPVwiL2VxdWlwbWVudFwiPtCh0L/QtdGG0YLQtdGF0L3QuNC60LA8L2E+XHJcbiAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCI+0J7QvdC70LDQudC9LdC60YPRgNGB0Ys8L2E+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX251bXNcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzA3MzczNDEyNFwiPis3ICg3MDcpIDM3MyA0MSAyNDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis3NzI3Mzk1Njk4M1wiPis3ICg3MjcpIDM5NSA2OSA4MzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCdjYXJnbycpID8gJ2dvb2RzX19uYXYgZ29vZHMgYWN0aXZlJyA6ICdnb29kc19fbmF2IGdvb2RzJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2RzX19uYXZfX2xpbmtzIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJnbycgPyAnYWN0aXZlJyA6ICcnfSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfRizwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vdHJhbnNwb3J0JyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL3RyYW5zcG9ydFwiPtCi0YDQsNC90YHQv9C+0YDRgjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vYXVjdGlvbicgPyAnYWN0aXZlJyA6ICcnfSAgaHJlZj1cIi9jYXJnby9hdWN0aW9uXCI+0JDRg9C60YbQuNC+0L08L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NhcmdvL2Rpc3RhbmNlJyA/ICdhY3RpdmUnIDogJyd9ICBocmVmPVwiL2NhcmdvL2Rpc3RhbmNlXCI+0KDQsNGB0YfQtdGCINGA0LDRgdGC0L7Rj9C90LjQuTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZ28vY2hlY2snID8gJ2FjdGl2ZScgOiAnJ30gIGhyZWY9XCIvY2FyZ28vY2hlY2tcIj7Qn9GA0L7QstC10YDQutCwINC60L7QvNC/0LDQvdC40Lk8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnZXF1aXBtZW50JykgPyAnZ29vZHNfX25hdiBlcXVpcG1lbnQgYWN0aXZlJyA6ICdnb29kc19fbmF2IGVxdWlwbWVudCd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kc19fbmF2X19saW5rcyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9lcXVpcG1lbnRcIj7QktGB0LU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2VxdWlwbWVudCcgPyAnYWN0aXZlJyA6ICcnfSBocmVmPVwiI1wiPtCX0LXQvNC70LXRgNC+0LnQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCR0LXRgtC+0L3QvdGL0LUg0YDQsNCx0L7RgtGLPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCT0YDRg9C30L7Qv9C10YDQtdCy0L7Qt9C60Lg8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQvtC80LzRg9C90LDQu9GM0L3QsNGPPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCf0YDQvtGH0LXQtTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9oZWFkZXI+fVxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufSkpICJdLCJzb3VyY2VSb290IjoiIn0=