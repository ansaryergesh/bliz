webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\index.js",
    _s = $RefreshSig$();





function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      zvonok = _useState[0],
      setZvonok = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      fio = _useState2[0],
      setFio = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      phone = _useState3[0],
      setPhone = _useState3[1];

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    var message = "\u0417\u0430\u043A\u0430\u0437 \u0437\u0432\u043E\u043D\u043A\u0430:\n      <b>\u0418\u043C\u044F: ".concat(fio, "</b>\n      <b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(phone, "</b>\n    ");

    if (phone && fio) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.telegram.org/bot1763904279:AAG2ulxW1UwzpyAsecF0q8Q_7ebb934EZ30/sendMessage?chat_id=-440248730&text=\u0418\u043C\u044F:".concat(fio + "   \n", " \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(phone, "&parse_mode=HTML")).then(function (res) {
        if (res.data.ok) {
          setZvonok(false);
          dispatch({
            type: 'SUCCESS_MESSAGE',
            payload: 'Ждите звонка'
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      console.log('error');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "BLIZ.KZ"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "under_header container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["\u041F\u043E\u0440\u0442\u0430\u043B ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", "\u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 20
        }, this), " \u0438 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", "\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 50
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, this), " \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }, this), " \u0413\u0440\u0443\u0437\u0430 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 72
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 78
        }, this), " \u0421\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 136
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 141
        }, this), "  \u0412 \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 \u043C\u0438\u0440\u0430."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "under_header__btns",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn",
          href: "/cargo",
          children: "\u041D\u0410\u0419\u0422\u0418 \u0413\u0420\u0423\u0417\u042B \u0418 \u0422\u0420\u0410\u041D\u0421\u041F\u041E\u0420\u0422"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn--white",
          href: "/addposts",
          children: "\u0420\u0410\u0417\u041C\u0415\u0421\u0422\u0418\u0422\u042C \u041E\u0411\u042A\u042F\u0412\u041B\u0415\u041D\u0418\u0415"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "services container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service__item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service__item__img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/service1.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/cargo",
          children: "\u0413\u0440\u0443\u0437\u0430 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u0437\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), "\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u043E\u0432"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service__item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service__item__img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/service2.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/storage",
          children: "\u0421\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u041F\u043E\u0434\u0431\u043E\u0440 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), "\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0443"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service__item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service__item__img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/service3.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/equipment",
          children: "\u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0434\u043B\u044F \u0441\u043F\u0435\u0446\u0440\u0430\u0431\u043E\u0442", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), "\u043F\u043E \u043B\u044E\u0431\u044B\u043C \u043D\u0430\u043F\u0440\u0432\u043B\u0435\u043D\u0438\u044F\u043C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "benefits",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "benefits__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "benefit__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "5 000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "benefit__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "570"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439-\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "benefit__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "220+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0441\u0434\u0435\u043B\u043E\u043A \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0434\u0435\u043D\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "offer1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "offer1__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "offer1__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u043C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0432\u0430\u0441:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-check-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0442\u043E\u043A \u0433\u0440\u0443\u0437\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-check-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043A\u0430\u043A \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C, \u0442\u0430\u043A \u0438 \u0441 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C \u0442\u0430\u043A \u0438 \u0441 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C \u0414\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043B\u043E\u0433\u0438\u0441\u0442\u043E\u0432: \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0438 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0445"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-check-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0414\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043B\u043E\u0433\u0438\u0441\u0442\u043E\u0432: \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0438 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0445 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430\u0445 \u0441\u0430\u0439\u0442\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "far fa-check-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 SMS \u0438\u043B\u0438 e-mail \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043E \u0441\u0440\u043E\u043A\u0430\u0445 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0438."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__btns",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn",
              href: "/register",
              children: "\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041E\u0412\u0410\u0422\u042C\u0421\u042F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "opacity_btn",
              href: "#",
              children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "offer1__img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/offer1.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "offer2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "offer2__img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/img/widgets/offer2.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "offer2__text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["\u0427\u0430\u0441\u0442\u043D\u044B\u043C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), "\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430\u043C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434 \u044D\u0433\u0438\u0434\u043E\u0439 \xABMy Provider BLIZ.KZ\xBB."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0438\u0441, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440. \u041F\u043E\u0441\u043B\u0435 \u0432\u0441\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 BLIZ."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "offer1__btns",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn",
            href: "/register",
            children: "\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041E\u0412\u0410\u0422\u042C\u0421\u042F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "opacity_btn",
            href: "#",
            children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "offer1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "offer1__wrapper container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "offer1__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["\u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this), "\u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, this), "\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__item offer2__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u043C\u043E\u0433\u0443\u0442 \u0438 \u043A\u0440\u0443\u043F\u043D\u044B\u0435 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0446\u0435\u043D\u0442\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442, \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432 \u0430\u0440\u0435\u043D\u0434\u0443. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \xAB\u0421\u043A\u043B\u0430\u0434\xBB \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u043E \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0441\u043A\u043B\u0430\u0434\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "offer1__btns",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn",
              href: "/register",
              children: "\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041E\u0412\u0410\u0422\u042C\u0421\u042F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "opacity_btn",
              href: "#",
              children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "offer1__img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/img/widgets/offer3.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "faq",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "faq__content container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\u044B, \u043D\u0430 \u0447\u0430\u0441\u0442\u043E \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "faq__wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "accordion-container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0435?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus. Suspendisse aliquam erat hendrerit vehicula vestibulum."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Pellentesque aliquam ligula libero, vitae imperdiet diam porta vitae. sed do eiusmod tempor incididunt ut labore et dolore magna."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium vitae ab sapiente provident quaerat voluptates recusandae placeat minus maiores quasi totam error, tempore voluptas non, architecto explicabo sequi sit!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "accordion-container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0441\u0442\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus. Suspendisse aliquam erat hendrerit vehicula vestibulum."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0441\u0442\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Pellentesque aliquam ligula libero, vitae imperdiet diam porta vitae. sed do eiusmod tempor incididunt ut labore et dolore magna."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "set",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: ["\u041A\u0430\u043A \u0441\u0442\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-angle-down"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "still_questions",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438,"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u0438 \u043D\u0430\u0448\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u043B\u044E\u0431\u0435\u0437\u043D\u043E \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442 \u0432\u0430\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u043F\u043E \u043B\u044E\u0431\u044B\u043C \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn",
          href: "#",
          onClick: function onClick() {
            return setZvonok(true);
          },
          children: "\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C \u041E\u0411\u0420\u0410\u0422\u041D\u042B\u0419 \u0417\u0412\u041E\u041D\u041E\u041A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: zvonok === false ? "driver_modal edit_photo" : "driver_modal edit_photo active",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "driver_modal__inner ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-times driver_times",
            onClick: function onClick() {
              return setZvonok(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: function onSubmit(e) {
              return _onSubmit(e);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "name",
              value: fio,
              onChange: function onChange(e) {
                return setFio(e.target.value);
              },
              placeholder: "\u0418\u043C\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "phone",
              value: phone,
              onChange: function onChange(e) {
                return setPhone(e.target.value);
              },
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 7
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(Home, "AhCuptxF/WaULN2yrmYMLsHd7AM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInp2b25vayIsInNldFp2b25vayIsImZpbyIsInNldEZpbyIsInBob25lIiwic2V0UGhvbmUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwib2siLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDZCLGtCQUVEQyxzREFBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRXRCQyxNQUZzQjtBQUFBLE1BRWRDLFNBRmM7O0FBQUEsbUJBR1BGLHNEQUFRLENBQUMsRUFBRCxDQUhEO0FBQUEsTUFHdEJHLEdBSHNCO0FBQUEsTUFHakJDLE1BSGlCOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLEVBQUQsQ0FKSjtBQUFBLE1BSXRCSyxLQUpzQjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFLN0IsTUFBTUMsU0FBUSxHQUFFLFNBQVZBLFFBQVUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxPQUFPLGdIQUNEUCxHQURDLHdFQUVHRSxLQUZILGVBQWI7O0FBSUEsUUFBR0EsS0FBSyxJQUFHRixHQUFYLEVBQWdCO0FBQ2RRLGtEQUFLLENBQUNDLEdBQU4sNklBQWdJVCxHQUFHLEdBQUMsT0FBcEksMERBQXdKRSxLQUF4Six1QkFDR1EsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWLFlBQUdBLEdBQUcsQ0FB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LG1CQUFLLEVBQUVsQixLQUEzQjtBQUFrQyxzQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsdUJBQU1GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLGVBQTVDO0FBQTRFLHlCQUFXLEVBQUM7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUdBO0FBQUEsb0JBckpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaVJEOztHQTNTdUIxQixJO1VBQ0xFLHVEOzs7S0FES0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTAyNzZkYjU2ZDQ2ZGQwNmIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IFt6dm9ub2ssIHNldFp2b25va10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zpbywgc2V0RmlvXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGhvbmUsc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IG9uU3VibWl0PSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG1lc3NhZ2UgPWDQl9Cw0LrQsNC3INC30LLQvtC90LrQsDpcbiAgICAgIDxiPtCY0LzRjzogJHtmaW99PC9iPlxuICAgICAgPGI+0KLQtdC70LXRhNC+0L06ICR7cGhvbmV9PC9iPlxuICAgIGBcbiAgICBpZihwaG9uZSYmIGZpbykge1xuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTc2MzkwNDI3OTpBQUcydWx4VzFVd3pweUFzZWNGMHE4UV83ZWJiOTM0RVozMC9zZW5kTWVzc2FnZT9jaGF0X2lkPS00NDAyNDg3MzAmdGV4dD3QmNC80Y86JHtmaW8rXCIgICBcXG5cIn0g0KLQtdC70LXRhNC+0L06ICR7cGhvbmV9JnBhcnNlX21vZGU9SFRNTGApXG4gICAgICAgIC50aGVuKHJlcz0+IHtcbiAgICAgICAgICBpZihyZXMuZGF0YS5vaykge1xuICAgICAgICAgICAgc2V0WnZvbm9rKGZhbHNlKVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTVUNDRVNTX01FU1NBR0UnLCBwYXlsb2FkOiAn0JbQtNC40YLQtSDQt9Cy0L7QvdC60LAnfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnI9Pntjb25zb2xlLmxvZyhlcnIpfSlcbiAgICB9ZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgIH1cbiAgXG4gICBcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJMSVouS1o8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJfaGVhZGVyIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+0J/QvtGA0YLQsNC7IDxzcGFuPntcIiBcIn3Qu9C+0LPQuNGB0YLQuNC60Lg8L3NwYW4+INC4IDxzcGFuPntcIiBcIn3RgtGA0LDQvdGB0L/QvtGA0YLQsDwvc3Bhbj5cbiAgICAgICAgICA8YnIvPjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCIvPiDQkdGL0YHRgtGA0YvQuSDQuCDRg9C00L7QsdC90YvQuSDQv9C+0LjRgdC6OlxuICAgICAgICAgIDxici8+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiLz4g0JPRgNGD0LfQsCDQuCDRgtGA0LDQvdGB0L/QvtGA0YLQsCA8YnIgLz48aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCIvPiDQodC60LvQsNC00L7QsiDQuCDRgdC/0LXRhtGC0LXRhdC90LjQutC4PGJyLz48aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCIvPiAg0JIg0LvRjtCx0L7QuSDRgtC+0YfQutC1INC80LjRgNCwLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJfaGVhZGVyX19idG5zXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIi9jYXJnb1wiPtCd0JDQmdCi0Jgg0JPQoNCj0JfQqyDQmCDQotCg0JDQndCh0J/QntCg0KI8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi0td2hpdGVcIiBocmVmPVwiL2FkZHBvc3RzXCI+0KDQkNCX0JzQldCh0KLQmNCi0Kwg0J7QkdCq0K/QktCb0JXQndCY0JU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzIGNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1fX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvc2VydmljZTEucG5nXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIvY2FyZ29cIj7Qk9GA0YPQt9CwINC4INGC0YDQsNC90YHQv9C+0YDRgtCwPC9hPlxuICAgICAgICAgIDxwPtCf0L7QuNGB0Log0LPRgNGD0LfQvtCy0LvQsNC00LXQu9GM0YbQtdCyINC4XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAg0L/QtdGA0LXQstC+0LfRh9C40LrQvtCyPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL3NlcnZpY2UyLnBuZ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL3N0b3JhZ2VcIj7QodC60LvQsNC00YHQutC40LUg0L/QvtC80LXRidC10L3QuNGPPC9hPlxuICAgICAgICAgIDxwPtCf0L7QtNCx0L7RgCDRgdC60LvQsNC00L7QsiDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90L7Qs9C+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAg0YXRgNCw0L3QtdC90LjRjyDQv9C+INCa0LDQt9Cw0YXRgdGC0LDQvdGDPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL3NlcnZpY2UzLnBuZ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2VxdWlwbWVudFwiPtCh0L/QtdGG0YLQtdGF0L3QuNC60LA8L2E+XG4gICAgICAgICAgPHA+0KLQtdGF0L3QuNC60LAg0LTQu9GPINGB0L/QtdGG0YDQsNCx0L7RglxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgINC/0L4g0LvRjtCx0YvQvCDQvdCw0L/RgNCy0LvQtdC90LjRj9C8PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9faXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9faXRlbV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9zZXJ2aWNlNC5wbmdcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jYXJnb1wiPtCT0YDRg9C30Ysg0Lgg0YLRgNCw0L3RgdC/0L7RgNGCPC9hPlxuICAgICAgICAgIDxwPtCf0L7QstGL0YjQtdC90LjQtSDQutCy0LDQu9C40YTQuNC60LDRhtC40LhcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICDQtNC70Y8g0LvQvtCz0LjRgdGC0L7QsiDQuCDQvNC10L3QtdC00LbQtdGA0L7QsiDQv9GA0L7QtNCw0LY8L3A+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmVmaXRzX193cmFwcGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdF9faXRlbVwiPlxuICAgICAgICAgICAgPGgyPjUgMDAwPC9oMj5cbiAgICAgICAgICAgIDxwPtCw0LrRgtGD0LDQu9GM0L3Ri9GFINC+0LHRitGP0LLQu9C10L3QuNC5PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdF9faXRlbVwiPlxuICAgICAgICAgICAgPGgyPjU3MDwvaDI+XG4gICAgICAgICAgICA8cD7QutC+0LzQv9Cw0L3QuNC5LdC/0LDRgNGC0L3QtdGA0L7QsjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmVmaXRfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxoMj4yMjArPC9oMj5cbiAgICAgICAgICAgIDxwPtGB0LTQtdC70L7QuiDQt9Cw0LrQu9GO0YfQsNC10YLRgdGPINCyINC00LXQvdGMPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX3dyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX3RleHRcIj5cbiAgICAgICAgICAgIDxoMj7QotGA0LDQvdGB0L/QvtGA0YLQvdGL0LxcbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAg0LrQvtC80L/QsNC90LjRj9C8PC9oMj5cbiAgICAgICAgICAgIDxoND7Qo9C90LjQutCw0LvRjNC90YvQtSDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INC00LvRjyDQstCw0YE6PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+XG4gICAgICAgICAgICAgIDxwPtCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0L/QvtGC0L7QuiDQs9GA0YPQt9C+0LLQu9Cw0LTQtdC70YzRhtC10LI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+XG4gICAgICAgICAgICAgIDxwPtCS0L7Qt9C80L7QttC90L7RgdGC0Ywg0YDQsNCx0L7RgtGLINC60LDQuiDRgSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C8LCDRgtCw0Log0Lgg0YEg0L/RgNC40LLQu9C10YfQtdC90L3Ri9C8INGC0YDQsNC90YHQv9C+0YDRgtC+0Lwg0YLQsNC6INC4INGBINC/0YDQuNCy0LvQtdGH0LXQvdC90YvQvCDRgtGA0LDQvdGB0L/QvtGA0YLQvtC8INCU0LvRjyDQstCw0YjQuNGFINC70L7Qs9C40YHRgtC+0LI6INCy0LXQtNC10L3QuNC1INGB0YLQsNGC0LjRgdGC0LjQutC4LFxuICAgICAgICAgICAgICAgINCw0L3QsNC70LjRgtC40LrQuCwg0Lgg0L7RgtGH0LXRgtC90L7RgdGC0Lgg0LIg0LvQuNGH0L3Ri9GFPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9faXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCIvPlxuICAgICAgICAgICAgICA8cD7QlNC70Y8g0LLQsNGI0LjRhSDQu9C+0LPQuNGB0YLQvtCyOiDQstC10LTQtdC90LjQtSDRgdGC0LDRgtC40YHRgtC40LrQuCwg0LDQvdCw0LvQuNGC0LjQutC4LCDQuCDQvtGC0YfQtdGC0L3QvtGB0YLQuCDQsiDQu9C40YfQvdGL0YUg0LrQsNCx0LjQvdC10YLQsNGFXG7RgdCw0LnRgtCwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9faXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCIvPlxuICAgICAgICAgICAgICA8cD7QnNCz0L3QvtCy0LXQvdC90L7QtSBTTVMg0LjQu9C4IGUtbWFpbCDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INC60LvQuNC10L3RgtCwINC+INGB0YDQvtC60LDRhSDQv9GA0LjQsdGL0YLQuNGPINCS0LDRiNC10LPQviDQsNCy0YLQvtC80L7QsdC40LvRj1xu0L3QsCDQvNC10YHRgtC+INGA0LDQt9Cz0YDRg9C30LrQuC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19idG5zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIvcmVnaXN0ZXJcIj7Ql9CQ0KDQldCT0JjQodCi0KDQmNCg0J7QktCQ0KLQrNCh0K88L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9wYWNpdHlfYnRuXCIgaHJlZj1cIiNcIj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvb2ZmZXIxLnBuZ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIyX19pbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9vZmZlcjIucG5nXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjJfX3RleHRcIj5cbiAgICAgICAgICA8aDI+0KfQsNGB0YLQvdGL0LxcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICDQv9C10YDQtdCy0L7Qt9GH0LjQutCw0Lw8L2gyPlxuICAgICAgICAgIDxwPtCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lwg0YDQsNCx0L7RgtCw0YLRjCDQvtGE0LjRhtC40LDQu9GM0L3QviDQv9C+0LQg0Y3Qs9C40LTQvtC5IMKrTXkgUHJvdmlkZXIgQkxJWi5LWsK7LjwvcD5cbiAgICAgICAgICA8cD7QlNC70Y8g0Y3RgtC+0LPQviDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdC10YDQstC40YEsINC/0L7QtNC/0LjRgdCw0YLRjCDQtNC+0LPQvtCy0L7RgC4g0J/QvtGB0LvQtVxuICAgICAgICAgICAg0LLRgdC1INC+0L/Qu9Cw0YLRiyDQt9CwINC/0LXRgNC10LLQvtC30LrRgyDQsdGD0LTRg9GCINC/0YDQvtGF0L7QtNC40YLRjCDRh9C10YDQtdC3INGB0LXRgNCy0LjRgSBCTElaLjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fYnRuc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIi9yZWdpc3RlclwiPtCX0JDQoNCV0JPQmNCh0KLQoNCY0KDQntCS0JDQotCs0KHQrzwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9wYWNpdHlfYnRuXCIgaHJlZj1cIiNcIj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX3dyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX3RleHRcIj5cbiAgICAgICAgICAgIDxoMj7QktC70LDQtNC10LvRjNGG0LDQvFxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICDRgdC60LvQsNC00YHQutC40YVcbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAg0L/QvtC80LXRidC10L3QuNC5PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pdGVtIG9mZmVyMl9faXRlbVwiPlxuICAgICAgICAgICAgICA8cD7QrdGE0YTQtdC60YLQuNCy0L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YHQtdGA0LLQuNGBINGB0LzQvtCz0YPRgiDQuCDQutGA0YPQv9C90YvQtSDQu9C+0LPQuNGB0YLQuNGH0LXRgdC60LjQtSDRhtC10L3RgtGA0YssINC60L7RgtC+0YDRi9C1XG4gICAgICAgICAgICAgICAg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9GO0YIsINGB0LrQu9Cw0LTRgdC60LjQtSDQv9C+0LzQtdGJ0LXQvdC40Y8g0LIg0LDRgNC10L3QtNGDLiDQoSDQv9C+0LzQvtGJ0YzRjiDRgNCw0LfQtNC10LvQsCDCq9Ch0LrQu9Cw0LTCuyDQutC+0LzQv9Cw0L3QuNC4INC80L7Qs9GD0YJcbiAgICAgICAgICAgICAgICDQv9C+0LTQsNCy0LDRgtGMINC+0LHRitGP0LLQu9C10L3QuNGPLCDQviDQvdCw0LvQuNGH0LjQuCDRgdCy0L7QsdC+0LTQvdGL0YUg0YHQutC70LDQtNGB0LrQuNGFINC/0L7QvNC10YnQtdC90LjQuSwg0LAg0YLQsNC60LbQtSDQvtGB0L3QsNGJ0LXQvdC90L7RgdGC0LXQuSDRgdC60LvQsNC00LAuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2J0bnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIi9yZWdpc3RlclwiPtCX0JDQoNCV0JPQmNCh0KLQoNCY0KDQntCS0JDQotCs0KHQrzwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eV9idG5cIiBocmVmPVwiI1wiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9vZmZlcjMucG5nXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPD4gPGRpdiBjbGFzc05hbWU9XCJmYXFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXFfX2NvbnRlbnQgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyPtCS0L7Qv9GA0L7RgdGLINC4INC+0YLQstC10YLRizwvaDI+XG4gICAgICAgICAgPGg0PtCX0LTQtdGB0Ywg0LLRiyDQvdCw0LnQtNC10YLQtSDQvtGC0LLQtdGC0YssINC90LAg0YfQsNGB0YLQviDQstC+0LfQvdC40LrQsNGO0YnQuNC1INCy0L7Qv9GA0L7RgdGLLjwvaDQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXFfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICDQmtCw0Log0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YHQtdGA0LLQuNGB0LU/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDQtNC+0LHQsNCy0LjRgtGMINGB0L7RgtGA0YPQtNC90LjQutCwP1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFsaXF1YW0gY3Vyc3VzIHZpdGFlIG51bGxhIG5vbiByaG9uY3VzLiBOdW5jIGNvbmRpbWVudHVtIGVyYXQgbmVjIGRpY3R1bSB0ZW1wdXMuXG4gICAgICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIGFsaXF1YW0gZXJhdCBoZW5kcmVyaXQgdmVoaWN1bGEgdmVzdGlidWx1bS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICDQmtCw0Log0LTQvtCx0LDQstC40YLRjCDRgdC+0YLRgNGD0LTQvdC40LrQsD9cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlBlbGxlbnRlc3F1ZSBhbGlxdWFtIGxpZ3VsYSBsaWJlcm8sIHZpdGFlIGltcGVyZGlldCBkaWFtIHBvcnRhIHZpdGFlLiBzZWQgZG9cbiAgICAgICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDQtNC+0LHQsNCy0LjRgtGMINGB0L7RgtGA0YPQtNC90LjQutCwP1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIERvbmVjIHRpbmNpZHVudCBjb25zZWN0ZXR1ciBvcmNpIGF0IGRpZ25pc3NpbS4gUHJvaW4gYXVjdG9yIGFsaXF1YW0ganVzdG8sIHZpdGFlXG4gICAgICAgICAgICAgICAgICAgIGx1Y3R1cyBvZGlvIHByZXRpdW0gc2NlbGVyaXNxdWUuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyXG4gICAgICAgICAgICAgICAgICAgIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGFjY3VzYW50aXVtIHZpdGFlIGFiIHNhcGllbnRlIHByb3ZpZGVudCBxdWFlcmF0XG4gICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZXMgcmVjdXNhbmRhZSBwbGFjZWF0IG1pbnVzIG1haW9yZXMgcXVhc2kgdG90YW0gZXJyb3IsIHRlbXBvcmUgdm9sdXB0YXNcbiAgICAgICAgICAgICAgICAgICAgbm9uLCBhcmNoaXRlY3RvIGV4cGxpY2FibyBzZXF1aSBzaXQhXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAg0JrQsNC6INCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQv9Cw0YDQvtC70Yw/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDRgdGC0LDRgtGMINC/0LvQsNGC0L3Ri9C8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8P1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFsaXF1YW0gY3Vyc3VzIHZpdGFlIG51bGxhIG5vbiByaG9uY3VzLiBOdW5jIGNvbmRpbWVudHVtIGVyYXQgbmVjIGRpY3R1bSB0ZW1wdXMuXG4gICAgICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIGFsaXF1YW0gZXJhdCBoZW5kcmVyaXQgdmVoaWN1bGEgdmVzdGlidWx1bS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICDQmtCw0Log0YHRgtCw0YLRjCDQv9C70LDRgtC90YvQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvD9cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlBlbGxlbnRlc3F1ZSBhbGlxdWFtIGxpZ3VsYSBsaWJlcm8sIHZpdGFlIGltcGVyZGlldCBkaWFtIHBvcnRhIHZpdGFlLiBzZWQgZG9cbiAgICAgICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDRgdGC0LDRgtGMINC/0LvQsNGC0L3Ri9C8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8P1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIERvbmVjIHRpbmNpZHVudCBjb25zZWN0ZXR1ciBvcmNpIGF0IGRpZ25pc3NpbS4gUHJvaW4gYXVjdG9yIGFsaXF1YW0ganVzdG8sIHZpdGFlXG4gICAgICAgICAgICAgICAgICAgIGx1Y3R1cyBvZGlvIHByZXRpdW0gc2NlbGVyaXNxdWUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWxsX3F1ZXN0aW9uc1wiPlxuICAgICAgICA8aDI+0J7RgdGC0LDQu9C40YHRjCDQstC+0L/RgNC+0YHRiz88L2gyPlxuICAgICAgICA8cD7QntGB0YLQsNCy0YzRgtC1INC30LDRj9Cy0LrRgyDRgSDQstCw0YjQuNC80Lgg0LrQvtC90YLQsNC60YLQvdGL0LzQuCDQtNCw0L3QvdGL0LzQuCw8L3A+XG4gICAgICAgIDxwPtC4INC90LDRiNC4INC80LXQvdC10LTQttC10YDRiyDQu9GO0LHQtdC30L3QviDQv9GA0L7QutC+0L3RgdGD0LvRjNGC0LjRgNGD0Y7RgiDQstCw0YE8L3A+XG4gICAgICAgIDxwPtC/0L4g0LvRjtCx0YvQvCDQstC+0LfQvdC40LrRiNC40Lwg0LLQvtC/0YDQvtGB0LDQvC48L3A+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2V0WnZvbm9rKHRydWUpfT7Ql9CQ0JrQkNCX0JDQotCsINCe0JHQoNCQ0KLQndCr0Jkg0JfQktCe0J3QntCaPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17enZvbm9rID09PSBmYWxzZSA/IFwiZHJpdmVyX21vZGFsIGVkaXRfcGhvdG9cIiA6IFwiZHJpdmVyX21vZGFsIGVkaXRfcGhvdG8gYWN0aXZlXCJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmVyX21vZGFsX19pbm5lciBcIj5cbiAgICAgICAgICAgIDxoMj7QntCx0YDQsNGC0L3Ri9C5INC30LLQvtC90L7QujwvaDI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZHJpdmVyX3RpbWVzXCIgb25DbGljaz17KCkgPT4gc2V0WnZvbm9rKGZhbHNlKX0vPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSduYW1lJyB2YWx1ZT17ZmlvfSBvbkNoYW5nZT17KGUpID0+c2V0RmlvKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9J9CY0LzRjycvPlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0ncGhvbmUnIHZhbHVlPXtwaG9uZX0gb25DaGFuZ2U9eyhlKSA9PnNldFBob25lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9Jy8+XG4gICAgICAgICAgICAgIDxidXR0b24+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=