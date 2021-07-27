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
        children: ["\u0411\u0438\u0440\u0436\u0430 \u0433\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
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
        }, this), "  \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }, this), "  \u0413\u0440\u0443\u0437\u0430 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 73
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 79
        }, this), "  \u0421\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0438", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 138
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "far fa-check-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 143
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInp2b25vayIsInNldFp2b25vayIsImZpbyIsInNldEZpbyIsInBob25lIiwic2V0UGhvbmUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwib2siLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDZCLGtCQUVEQyxzREFBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRXRCQyxNQUZzQjtBQUFBLE1BRWRDLFNBRmM7O0FBQUEsbUJBR1BGLHNEQUFRLENBQUMsRUFBRCxDQUhEO0FBQUEsTUFHdEJHLEdBSHNCO0FBQUEsTUFHakJDLE1BSGlCOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLEVBQUQsQ0FKSjtBQUFBLE1BSXRCSyxLQUpzQjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFLN0IsTUFBTUMsU0FBUSxHQUFFLFNBQVZBLFFBQVUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxPQUFPLGdIQUNEUCxHQURDLHdFQUVHRSxLQUZILGVBQWI7O0FBSUEsUUFBR0EsS0FBSyxJQUFHRixHQUFYLEVBQWdCO0FBQ2RRLGtEQUFLLENBQUNDLEdBQU4sNklBQWdJVCxHQUFHLEdBQUMsT0FBcEksMERBQXdKRSxLQUF4Six1QkFDR1EsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWLFlBQUdBLEdBQUcsQ0FB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QSxlQUE1QztBQUE0RSx5QkFBVyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVHQTtBQUFBLG9CQXJKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlSRDs7R0EzU3VCMUIsSTtVQUNMRSx1RDs7O0tBREtGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDNiYWYyNTQ3MjIwZWIzZTljMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCBbenZvbm9rLCBzZXRadm9ub2tdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmaW8sIHNldEZpb10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bob25lLHNldFBob25lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBvblN1Ym1pdD0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBtZXNzYWdlID1g0JfQsNC60LDQtyDQt9Cy0L7QvdC60LA6XG4gICAgICA8Yj7QmNC80Y86ICR7ZmlvfTwvYj5cbiAgICAgIDxiPtCi0LXQu9C10YTQvtC9OiAke3Bob25lfTwvYj5cbiAgICBgXG4gICAgaWYocGhvbmUmJiBmaW8pIHtcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE3NjM5MDQyNzk6QUFHMnVseFcxVXd6cHlBc2VjRjBxOFFfN2ViYjkzNEVaMzAvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0tNDQwMjQ4NzMwJnRleHQ90JjQvNGPOiR7ZmlvK1wiICAgXFxuXCJ9INCi0LXQu9C10YTQvtC9OiAke3Bob25lfSZwYXJzZV9tb2RlPUhUTUxgKVxuICAgICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgICAgaWYocmVzLmRhdGEub2spIHtcbiAgICAgICAgICAgIHNldFp2b25vayhmYWxzZSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1VDQ0VTU19NRVNTQUdFJywgcGF5bG9hZDogJ9CW0LTQuNGC0LUg0LfQstC+0L3QutCwJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyPT57Y29uc29sZS5sb2coZXJyKX0pXG4gICAgfWVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICB9XG4gIFxuICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CTElaLktaPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyX2hlYWRlciBjb250YWluZXJcIj5cbiAgICAgICAgPGgyPtCR0LjRgNC20LAg0LPRgNGD0LfQvtC/0LXRgNC10LLQvtC30L7QulxuICAgICAgICAgIDxici8+PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+ICDQkdGL0YHRgtGA0YvQuSDQuCDRg9C00L7QsdC90YvQuSDQv9C+0LjRgdC6OlxuICAgICAgICAgIDxici8+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiLz4gINCT0YDRg9C30LAg0Lgg0YLRgNCw0L3RgdC/0L7RgNGC0LAgPGJyIC8+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiLz4gINCh0LrQu9Cw0LTQvtCyINC4INGB0L/QtdGG0YLQtdGF0L3QuNC60Lg8YnIvPjxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+ICDQkiDQu9GO0LHQvtC5INGC0L7Rh9C60LUg0LzQuNGA0LAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcl9oZWFkZXJfX2J0bnNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiL2NhcmdvXCI+0J3QkNCZ0KLQmCDQk9Cg0KPQl9CrINCYINCi0KDQkNCd0KHQn9Ce0KDQojwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLS13aGl0ZVwiIGhyZWY9XCIvYWRkcG9zdHNcIj7QoNCQ0JfQnNCV0KHQotCY0KLQrCDQntCR0KrQr9CS0JvQldCd0JjQlTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMgY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9faXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9faXRlbV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9zZXJ2aWNlMS5wbmdcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jYXJnb1wiPtCT0YDRg9C30LAg0Lgg0YLRgNCw0L3RgdC/0L7RgNGC0LA8L2E+XG4gICAgICAgICAgPHA+0J/QvtC40YHQuiDQs9GA0YPQt9C+0LLQu9Cw0LTQtdC70YzRhtC10LIg0LhcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICDQv9C10YDQtdCy0L7Qt9GH0LjQutC+0LI8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1fX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvc2VydmljZTIucG5nXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIvc3RvcmFnZVwiPtCh0LrQu9Cw0LTRgdC60LjQtSDQv9C+0LzQtdGJ0LXQvdC40Y88L2E+XG4gICAgICAgICAgPHA+0J/QvtC00LHQvtGAINGB0LrQu9Cw0LTQvtCyINC+0YLQstC10YLRgdGC0LLQtdC90L3QvtCz0L5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICDRhdGA0LDQvdC10L3QuNGPINC/0L4g0JrQsNC30LDRhdGB0YLQsNC90YM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1fX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dpZGdldHMvc2VydmljZTMucG5nXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIvZXF1aXBtZW50XCI+0KHQv9C10YbRgtC10YXQvdC40LrQsDwvYT5cbiAgICAgICAgICA8cD7QotC10YXQvdC40LrQsCDQtNC70Y8g0YHQv9C10YbRgNCw0LHQvtGCXG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAg0L/QviDQu9GO0LHRi9C8INC90LDQv9GA0LLQu9C10L3QuNGP0Lw8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX19pdGVtX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL3NlcnZpY2U0LnBuZ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2NhcmdvXCI+0JPRgNGD0LfRiyDQuCDRgtGA0LDQvdGB0L/QvtGA0YI8L2E+XG4gICAgICAgICAgPHA+0J/QvtCy0YvRiNC10L3QuNC1INC60LLQsNC70LjRhNC40LrQsNGG0LjQuFxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgINC00LvRjyDQu9C+0LPQuNGB0YLQvtCyINC4INC80LXQvdC10LTQttC10YDQvtCyINC/0YDQvtC00LDQtjwvcD5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlbmVmaXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdHNfX3dyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0X19pdGVtXCI+XG4gICAgICAgICAgICA8aDI+NSAwMDA8L2gyPlxuICAgICAgICAgICAgPHA+0LDQutGC0YPQsNC70YzQvdGL0YUg0L7QsdGK0Y/QstC70LXQvdC40Lk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0X19pdGVtXCI+XG4gICAgICAgICAgICA8aDI+NTcwPC9oMj5cbiAgICAgICAgICAgIDxwPtC60L7QvNC/0LDQvdC40Lkt0L/QsNGA0YLQvdC10YDQvtCyPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdF9faXRlbVwiPlxuICAgICAgICAgICAgPGgyPjIyMCs8L2gyPlxuICAgICAgICAgICAgPHA+0YHQtNC10LvQvtC6INC30LDQutC70Y7Rh9Cw0LXRgtGB0Y8g0LIg0LTQtdC90Yw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fd3JhcHBlciBjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fdGV4dFwiPlxuICAgICAgICAgICAgPGgyPtCi0YDQsNC90YHQv9C+0YDRgtC90YvQvFxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICDQutC+0LzQv9Cw0L3QuNGP0Lw8L2gyPlxuICAgICAgICAgICAgPGg0PtCj0L3QuNC60LDQu9GM0L3Ri9C1INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LTQu9GPINCy0LDRgTo8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiLz5cbiAgICAgICAgICAgICAgPHA+0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQuSDQv9C+0YLQvtC6INCz0YDRg9C30L7QstC70LDQtNC10LvRjNGG0LXQsjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiLz5cbiAgICAgICAgICAgICAgPHA+0JLQvtC30LzQvtC20L3QvtGB0YLRjCDRgNCw0LHQvtGC0Ysg0LrQsNC6INGBINGB0L7QsdGB0YLQstC10L3QvdGL0LwsINGC0LDQuiDQuCDRgSDQv9GA0LjQstC70LXRh9C10L3QvdGL0Lwg0YLRgNCw0L3RgdC/0L7RgNGC0L7QvCDRgtCw0Log0Lgg0YEg0L/RgNC40LLQu9C10YfQtdC90L3Ri9C8INGC0YDQsNC90YHQv9C+0YDRgtC+0Lwg0JTQu9GPINCy0LDRiNC40YUg0LvQvtCz0LjRgdGC0L7Qsjog0LLQtdC00LXQvdC40LUg0YHRgtCw0YLQuNGB0YLQuNC60LgsXG4gICAgICAgICAgICAgICAg0LDQvdCw0LvQuNGC0LjQutC4LCDQuCDQvtGC0YfQtdGC0L3QvtGB0YLQuCDQsiDQu9C40YfQvdGL0YU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+XG4gICAgICAgICAgICAgIDxwPtCU0LvRjyDQstCw0YjQuNGFINC70L7Qs9C40YHRgtC+0LI6INCy0LXQtNC10L3QuNC1INGB0YLQsNGC0LjRgdGC0LjQutC4LCDQsNC90LDQu9C40YLQuNC60LgsINC4INC+0YLRh9C10YLQvdC+0YHRgtC4INCyINC70LjRh9C90YvRhSDQutCw0LHQuNC90LXRgtCw0YVcbtGB0LDQudGC0LA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIi8+XG4gICAgICAgICAgICAgIDxwPtCc0LPQvdC+0LLQtdC90L3QvtC1IFNNUyDQuNC70LggZS1tYWlsINGD0LLQtdC00L7QvNC70LXQvdC40LUg0LrQu9C40LXQvdGC0LAg0L4g0YHRgNC+0LrQsNGFINC/0YDQuNCx0YvRgtC40Y8g0JLQsNGI0LXQs9C+INCw0LLRgtC+0LzQvtCx0LjQu9GPXG7QvdCwINC80LXRgdGC0L4g0YDQsNC30LPRgNGD0LfQutC4LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2J0bnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIi9yZWdpc3RlclwiPtCX0JDQoNCV0JPQmNCh0KLQoNCY0KDQntCS0JDQotCs0KHQrzwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eV9idG5cIiBocmVmPVwiI1wiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvd2lkZ2V0cy9vZmZlcjEucG5nXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjJfX2ltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL29mZmVyMi5wbmdcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMl9fdGV4dFwiPlxuICAgICAgICAgIDxoMj7Qp9Cw0YHRgtC90YvQvFxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgINC/0LXRgNC10LLQvtC30YfQuNC60LDQvDwvaDI+XG4gICAgICAgICAgPHA+0JzRiyDQv9GA0LXQtNC70LDQs9Cw0LXQvCDRgNCw0LHQvtGC0LDRgtGMINC+0YTQuNGG0LjQsNC70YzQvdC+INC/0L7QtCDRjdCz0LjQtNC+0LkgwqtNeSBQcm92aWRlciBCTElaLktawrsuPC9wPlxuICAgICAgICAgIDxwPtCU0LvRjyDRjdGC0L7Qs9C+INC90LXQvtCx0YXQvtC00LjQvNC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDQvdCwINGB0LXRgNCy0LjRgSwg0L/QvtC00L/QuNGB0LDRgtGMINC00L7Qs9C+0LLQvtGALiDQn9C+0YHQu9C1XG4gICAgICAgICAgICDQstGB0LUg0L7Qv9C70LDRgtGLINC30LAg0L/QtdGA0LXQstC+0LfQutGDINCx0YPQtNGD0YIg0L/RgNC+0YXQvtC00LjRgtGMINGH0LXRgNC10Lcg0YHQtdGA0LLQuNGBIEJMSVouPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19idG5zXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiL3JlZ2lzdGVyXCI+0JfQkNCg0JXQk9CY0KHQotCg0JjQoNCe0JLQkNCi0KzQodCvPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eV9idG5cIiBocmVmPVwiI1wiPtCj0LfQvdCw0YLRjCDQv9C+0LTRgNC+0LHQvdC10LU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fd3JhcHBlciBjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fdGV4dFwiPlxuICAgICAgICAgICAgPGgyPtCS0LvQsNC00LXQu9GM0YbQsNC8XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgINGB0LrQu9Cw0LTRgdC60LjRhVxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICDQv9C+0LzQtdGJ0LXQvdC40Lk8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlcjFfX2l0ZW0gb2ZmZXIyX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxwPtCt0YTRhNC10LrRgtC40LLQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgdC10YDQstC40YEg0YHQvNC+0LPRg9GCINC4INC60YDRg9C/0L3Ri9C1INC70L7Qs9C40YHRgtC40YfQtdGB0LrQuNC1INGG0LXQvdGC0YDRiywg0LrQvtGC0L7RgNGL0LVcbiAgICAgICAgICAgICAgICDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0Y7Rgiwg0YHQutC70LDQtNGB0LrQuNC1INC/0L7QvNC10YnQtdC90LjRjyDQsiDQsNGA0LXQvdC00YMuINChINC/0L7QvNC+0YnRjNGOINGA0LDQt9C00LXQu9CwIMKr0KHQutC70LDQtMK7INC60L7QvNC/0LDQvdC40Lgg0LzQvtCz0YPRglxuICAgICAgICAgICAgICAgINC/0L7QtNCw0LLQsNGC0Ywg0L7QsdGK0Y/QstC70LXQvdC40Y8sINC+INC90LDQu9C40YfQuNC4INGB0LLQvtCx0L7QtNC90YvRhSDRgdC60LvQsNC00YHQutC40YUg0L/QvtC80LXRidC10L3QuNC5LCDQsCDRgtCw0LrQttC1INC+0YHQvdCw0YnQtdC90L3QvtGB0YLQtdC5INGB0LrQu9Cw0LTQsC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyMV9fYnRuc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiL3JlZ2lzdGVyXCI+0JfQkNCg0JXQk9CY0KHQotCg0JjQoNCe0JLQkNCi0KzQodCvPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGFjaXR5X2J0blwiIGhyZWY9XCIjXCI+0KPQt9C90LDRgtGMINC/0L7QtNGA0L7QsdC90LXQtTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXIxX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy93aWRnZXRzL29mZmVyMy5wbmdcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8PiA8ZGl2IGNsYXNzTmFtZT1cImZhcVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhcV9fY29udGVudCBjb250YWluZXJcIj5cbiAgICAgICAgICA8aDI+0JLQvtC/0YDQvtGB0Ysg0Lgg0L7RgtCy0LXRgtGLPC9oMj5cbiAgICAgICAgICA8aDQ+0JfQtNC10YHRjCDQstGLINC90LDQudC00LXRgtC1INC+0YLQstC10YLRiywg0L3QsCDRh9Cw0YHRgtC+INCy0L7Qt9C90LjQutCw0Y7RidC40LUg0LLQvtC/0YDQvtGB0YsuPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhcV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdC10YDQstC40YHQtT9cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAg0JrQsNC6INC00L7QsdCw0LLQuNGC0Ywg0YHQvtGC0YDRg9C00L3QuNC60LA/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQWxpcXVhbSBjdXJzdXMgdml0YWUgbnVsbGEgbm9uIHJob25jdXMuIE51bmMgY29uZGltZW50dW0gZXJhdCBuZWMgZGljdHVtIHRlbXB1cy5cbiAgICAgICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgYWxpcXVhbSBlcmF0IGhlbmRyZXJpdCB2ZWhpY3VsYSB2ZXN0aWJ1bHVtLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDQtNC+0LHQsNCy0LjRgtGMINGB0L7RgtGA0YPQtNC90LjQutCwP1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+UGVsbGVudGVzcXVlIGFsaXF1YW0gbGlndWxhIGxpYmVybywgdml0YWUgaW1wZXJkaWV0IGRpYW0gcG9ydGEgdml0YWUuIHNlZCBkb1xuICAgICAgICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAg0JrQsNC6INC00L7QsdCw0LLQuNGC0Ywg0YHQvtGC0YDRg9C00L3QuNC60LA/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRG9uZWMgdGluY2lkdW50IGNvbnNlY3RldHVyIG9yY2kgYXQgZGlnbmlzc2ltLiBQcm9pbiBhdWN0b3IgYWxpcXVhbSBqdXN0bywgdml0YWVcbiAgICAgICAgICAgICAgICAgICAgbHVjdHVzIG9kaW8gcHJldGl1bSBzY2VsZXJpc3F1ZS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXJcbiAgICAgICAgICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwgYWNjdXNhbnRpdW0gdml0YWUgYWIgc2FwaWVudGUgcHJvdmlkZW50IHF1YWVyYXRcbiAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlcyByZWN1c2FuZGFlIHBsYWNlYXQgbWludXMgbWFpb3JlcyBxdWFzaSB0b3RhbSBlcnJvciwgdGVtcG9yZSB2b2x1cHRhc1xuICAgICAgICAgICAgICAgICAgICBub24sIGFyY2hpdGVjdG8gZXhwbGljYWJvIHNlcXVpIHNpdCFcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICDQmtCw0Log0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjD9cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAg0JrQsNC6INGB0YLQsNGC0Ywg0L/Qu9Cw0YLQvdGL0Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lw/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQWxpcXVhbSBjdXJzdXMgdml0YWUgbnVsbGEgbm9uIHJob25jdXMuIE51bmMgY29uZGltZW50dW0gZXJhdCBuZWMgZGljdHVtIHRlbXB1cy5cbiAgICAgICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgYWxpcXVhbSBlcmF0IGhlbmRyZXJpdCB2ZWhpY3VsYSB2ZXN0aWJ1bHVtLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgINCa0LDQuiDRgdGC0LDRgtGMINC/0LvQsNGC0L3Ri9C8INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8P1xuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHA+UGVsbGVudGVzcXVlIGFsaXF1YW0gbGlndWxhIGxpYmVybywgdml0YWUgaW1wZXJkaWV0IGRpYW0gcG9ydGEgdml0YWUuIHNlZCBkb1xuICAgICAgICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAg0JrQsNC6INGB0YLQsNGC0Ywg0L/Qu9Cw0YLQvdGL0Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lw/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRG9uZWMgdGluY2lkdW50IGNvbnNlY3RldHVyIG9yY2kgYXQgZGlnbmlzc2ltLiBQcm9pbiBhdWN0b3IgYWxpcXVhbSBqdXN0bywgdml0YWVcbiAgICAgICAgICAgICAgICAgICAgbHVjdHVzIG9kaW8gcHJldGl1bSBzY2VsZXJpc3F1ZS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpbGxfcXVlc3Rpb25zXCI+XG4gICAgICAgIDxoMj7QntGB0YLQsNC70LjRgdGMINCy0L7Qv9GA0L7RgdGLPzwvaDI+XG4gICAgICAgIDxwPtCe0YHRgtCw0LLRjNGC0LUg0LfQsNGP0LLQutGDINGBINCy0LDRiNC40LzQuCDQutC+0L3RgtCw0LrRgtC90YvQvNC4INC00LDQvdC90YvQvNC4LDwvcD5cbiAgICAgICAgPHA+0Lgg0L3QsNGI0Lgg0LzQtdC90LXQtNC20LXRgNGLINC70Y7QsdC10LfQvdC+INC/0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0YPRjtGCINCy0LDRgTwvcD5cbiAgICAgICAgPHA+0L/QviDQu9GO0LHRi9C8INCy0L7Qt9C90LjQutGI0LjQvCDQstC+0L/RgNC+0YHQsNC8LjwvcD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzZXRadm9ub2sodHJ1ZSl9PtCX0JDQmtCQ0JfQkNCi0Kwg0J7QkdCg0JDQotCd0KvQmSDQl9CS0J7QndCe0Jo8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt6dm9ub2sgPT09IGZhbHNlID8gXCJkcml2ZXJfbW9kYWwgZWRpdF9waG90b1wiIDogXCJkcml2ZXJfbW9kYWwgZWRpdF9waG90byBhY3RpdmVcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXJfbW9kYWxfX2lubmVyIFwiPlxuICAgICAgICAgICAgPGgyPtCe0LHRgNCw0YLQvdGL0Lkg0LfQstC+0L3QvtC6PC9oMj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBkcml2ZXJfdGltZXNcIiBvbkNsaWNrPXsoKSA9PiBzZXRadm9ub2soZmFsc2UpfS8+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J25hbWUnIHZhbHVlPXtmaW99IG9uQ2hhbmdlPXsoZSkgPT5zZXRGaW8oZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj0n0JjQvNGPJy8+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdwaG9uZScgdmFsdWU9e3Bob25lfSBvbkNoYW5nZT17KGUpID0+c2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0nLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==