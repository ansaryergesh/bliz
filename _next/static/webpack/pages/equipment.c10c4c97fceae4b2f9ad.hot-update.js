webpackHotUpdate_N_E("pages/equipment",{

/***/ "./pages/equipment/index.js":
/*!**********************************!*\
  !*** ./pages/equipment/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post/SideBarCurrency */ "./components/post/SideBarCurrency.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/equipment/EquipmentItem */ "./components/equipment/EquipmentItem.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");


var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\equipment\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Equipment = function Equipment() {
  _s();

  var currentPlace_id = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('place_id') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('place_id') : "";
  var currentPlace_name = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('formatted_address') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('formatted_address') : "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    place_id: currentPlace_id,
    formatted_address: currentPlace_name
  }),
      geoLoc = _useState[0],
      setGeoLoc = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var page = router.query.page;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{}]),
      equipments = _useState3[0],
      setEquipments = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      maxPage = _useState6[0],
      setMaxPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadMapScript = _useState7[0],
      setLoadMapScript = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_7__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
    });
    setLoading(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/getAllEquipment?page=").concat(page)).then(function (res) {
      console.log(res);
      setLoading(false);
      setEquipments(res.data.data);
      setTotal(res.data.count);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
    });
  }, []);

  var onChangePage = function onChangePage(pageNum) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/getAllEquipment?page=").concat(pageNum)).then(function (res) {
      router.push("/equipment?page=".concat(pageNum));
      setLoading(false);
      setEquipments(res.data.data);
      setTotal(res.data.count);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main_filter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main_filter__content container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__top flex_end",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__top__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "filter__item__title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: "\u0413\u043E\u0440\u043E\u0434, \u0440\u0435\u0433\u0438\u043E\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "filter__item__form",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  className: "storage__city_filter",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u0441\u0442\u0430\u043D\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__top__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "filter__item__title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: "\u0422\u0435\u0445\u043D\u0438\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                className: "filter__item__form",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  className: "storage__city_filter",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: "\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__top__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "filter__item__title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                children: "\u0426\u0435\u043D\u0430, \u20B8 \u0437\u0430 \u0447\u0430\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "filter__item__form",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "mini_input",
                  type: "text",
                  placeholder: "\u043E\u0442"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "hr"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "mini_input",
                  type: "text",
                  placeholder: "\u0434\u043E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__top__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "filter__item__form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: "big_filter_btn",
                children: "\u0412\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__bottom__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D, \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__bottom__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u043E\u0442 100 \u043C2 \u0434\u043E 1 200 \u043C2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "products__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430 / \u0417\u0435\u043C\u043B\u0435\u0440\u043E\u0439\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 / \u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(Equipment, "v3jHQdxQzl+dy9yhqTcIrfghacI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Equipment;
/* harmony default export */ __webpack_exports__["default"] = (Equipment);

var _c;

$RefreshReg$(_c, "Equipment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXF1aXBtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwbWVudCIsImN1cnJlbnRQbGFjZV9pZCIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImN1cnJlbnRQbGFjZV9uYW1lIiwidXNlU3RhdGUiLCJwbGFjZV9pZCIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ2VvTG9jIiwic2V0R2VvTG9jIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVxdWlwbWVudHMiLCJzZXRFcXVpcG1lbnRzIiwidG90YWwiLCJzZXRUb3RhbCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwidXNlRWZmZWN0IiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvdW50IiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxlQUFlLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLE1BQTJCQyxTQUEzQixHQUF1Q0YsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsQ0FBdkMsR0FBZ0UsRUFBeEY7QUFDQSxNQUFNRSxpQkFBaUIsR0FBR0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLE1BQW9DQyxTQUFwQyxHQUFnREYsZ0RBQU0sQ0FBQ0MsR0FBUCxD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REYsZUEwQkEscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvSUQsQ0FoTEQ7O0dBQU1oQixTO1VBSVdZLHFEOzs7S0FKWFosUztBQWtMU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXF1aXBtZW50LmMxMGM0Yzk3ZmNlYWU0YjJmOWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZUJhckN1cnJlbmN5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgRXF1aXBtZW50SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lcXVpcG1lbnQvRXF1aXBtZW50SXRlbVwiXHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHNcIlxyXG5jb25zdCBFcXVpcG1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX2lkID0gY29va2llLmdldCgncGxhY2VfaWQnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgncGxhY2VfaWQnKSA6IFwiXCI7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX25hbWUgPSBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpIDogXCJcIjtcclxuICBjb25zdCBbZ2VvTG9jLCBzZXRHZW9Mb2NdID0gdXNlU3RhdGUoe3BsYWNlX2lkOiBjdXJyZW50UGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBjdXJyZW50UGxhY2VfbmFtZX0pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZXF1aXBtZW50cyxzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW3RvdGFsLHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2V9YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEVxdWlwbWVudHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5jb3VudClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zdCBvbkNoYW5nZVBhZ2U9KHBhZ2VOdW0pID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsRXF1aXBtZW50P3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2VxdWlwbWVudD9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXF1aXBtZW50cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmNvdW50KVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2NvbnRlbnQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX190b3AgZmxleF9lbmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJfX2l0ZW1fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+0JPQvtGA0L7QtCwg0YDQtdCz0LjQvtC9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyX19pdGVtX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic3RvcmFnZV9fY2l0eV9maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPtCa0LDQt9Cw0YXRgdGC0LDQvSwg0JDQu9C80LDRgtGLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0YHRgtCw0L3QsDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJfX2l0ZW1fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+0KLQtdGF0L3QuNC60LA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmlsdGVyX19pdGVtX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic3RvcmFnZV9fY2l0eV9maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPtCt0YHQutC+0LLQsNGC0L7RgNGLLdC/0L7Qs9GA0YPQt9GH0LjQutC4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fdG9wX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJfX2l0ZW1fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+0KbQtdC90LAsIOKCuCDQt9CwINGH0LDRgTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcl9faXRlbV9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWluaV9pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQvtGCXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWluaV9pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQtNC+XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX190b3BfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcl9faXRlbV9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj7QodCx0YDQvtGB0LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiaWdfZmlsdGVyX2J0blwiPtCS0YHQtSDRhNC40LvRjNGC0YDRizwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxmb3JtIGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19iaWdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fYmlnX19pdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QpNC40LvRjNGC0YA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QpNC40LvRjNGC0YA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QpNC40LvRjNGC0YA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QpNC40LvRjNGC0YA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7QpNC40LvRjNGC0YA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fYmlnX19pdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQlNCw0YLQsCDQstGL0LPRgNGD0LfQutC4XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktC10YFcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fYmlnX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCk0LjQu9GM0YLRgFwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19iaWdfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KTQuNC70YzRgtGAXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQpNC40LvRjNGC0YBcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19ib3R0b21fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8cD7QmtCw0LfQsNGF0YHRgtCw0L0sINCQ0LvQvNCw0YLRizwvcD5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19ib3R0b21fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8cD7QvtGCIDEwMCDQvDIg0LTQviAxIDIwMCDQvDI8L3A+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoND7Qk9C70LDQstC90LDRjyAvINCh0L/QtdGG0YLQtdGF0L3QuNC60LAgLyDQl9C10LzQu9C10YDQvtC50L3QsNGPINGC0LXRhdC90LjQutCwIC8g0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lg8L2g0PlxyXG4gICAgICAgICAgICA8aDE+0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lgg0LIg0JDQu9C80LDRgtGLPC9oMT5cclxuICAgICAgICAgICAgPGgzPtCd0LDQudC00LXQvdC+IHt0b3RhbH0g0L7QsdGK0Y/QstC70LXQvdC40Lk8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RXF1aXBtZW50SXRlbSBlcXVpcG1lbnRzPXtlcXVpcG1lbnRzfSBtYXhQYWdlPXttYXhQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCQ0YDQtdC90LTQsCDRgdC60LvQsNC00L7QsiDQuCDRgdC60LvQsNC00YHQutC40YUg0L/QvtC80LXRidC10L3QuNC5INCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1PC9oMz5cclxuICAgICAgICAgICAgICA8cD7QmNGB0YXQvtC00Y8g0LjQtyDQvdCw0LHQvtGA0LAg0Lgg0LrQsNGH0LXRgdGC0LLQsCDRjdGC0LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDRgdC60LvQsNC00YMg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LrQu9Cw0YHRgTogQSxcclxuICAgICAgICAgICAgICAgIEIrLCBCINC40LvQuCBDLiDQodGC0L7QuNGCINC+0LHRgNCw0YLQuNGC0Ywg0LLQvdC40LzQsNC90LjQtSDQvdCwINGB0LrQu9Cw0LTRiyBCINC4IEMg0LrQu9Cw0YHRgdC+0LIsINCz0LTQtSDQsNGA0LXQvdC00L3QsNGPXHJcbiAgICAgICAgICAgICAgICDRgdGC0LDQstC60LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgMiAwMDAg0YLQtdC90LPQtSDQt9CwINC60LIuINC8LiDQp9GC0L7QsdGLINGB0L3Rj9GC0Ywg0YHQutC70LDQtCDQsiDQsdC40LfQvdC10YEt0YbQtdC90YLRgNCw0YUgQVxyXG4gICAgICAgICAgICAgICAg0LjQu9C4IEIrINC60LvQsNGB0YHQsCwg0YHRgtC+0LjRgiDQt9Cw0LvQvtC20LjRgtGMINCyINCx0Y7QtNC20LXRgiDQvtGCIDMgNTAwINC00L4gMjAgMDAwINGC0LXQvdCz0LUg0LfQsCDQutCyLiDQvC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCe0YLQstC10YLRhdGA0LDQvdC10L3QuNC1INC4INGB0LrQu9Cw0LTRiyDQsiDQkNC70LzQsNGC0Ys8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPtChINC/0L7QvNC+0YnRjNGOINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC60L7QvdGB0LDQu9GC0LjQvdCz0L7QstC+0Lkg0LrQvtC80L/QsNC90LjQuCBCbGl6Lmt6INC80L7QttC90L4g0L3QsNC50YLQuCDRgdC60LvQsNC0XHJcbiAgICAgICAgICAgICAgICDQsiDQsNGA0LXQvdC00YMg0LIg0JDQu9C80LDRgtGLINC/0L4g0LLRi9Cz0L7QtNC90L7QuSDRhtC10L3QtSDQsdC10Lcg0LrQvtC80LjRgdGB0LjQuCDQuCDQv9C+0YHRgNC10LTQvdC40LrQvtCyLiDQodC/0LXRhtC40LDQu9C40YHRgtGLXHJcbiAgICAgICAgICAgICAgICDQutC+0LzQv9Cw0L3QuNC4INC/0L7QvNC+0LPRg9GCINC/0L7QtNC+0LHRgNCw0YLRjCDQv9C+0LzQtdGJ0LXQvdC40LUsINGD0YfQuNGC0YvQstCw0Y8g0L/QvtC20LXQu9Cw0L3QuNGPINC4INCx0Y7QtNC20LXRgiDQt9Cw0LrQsNC30YfQuNC60LAsXHJcbiAgICAgICAgICAgICAgICDQvtGA0LPQsNC90LjQt9GD0Y7RgiDQv9GA0L7RgdC80L7RgtGAINC4INC/0L7QtNC/0LjRgdCw0L3QuNC1INC00L7Qs9C+0LLQvtGA0LAg0YEg0YHQvtCx0YHRgtCy0LXQvdC90LjQutC+0LwuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=