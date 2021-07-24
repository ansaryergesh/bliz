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
/* harmony import */ var _components_post_FilterEquipment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/FilterEquipment */ "./components/post/FilterEquipment.js");
/* harmony import */ var _components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/equipment/EquipmentItem */ "./components/equipment/EquipmentItem.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");
/* harmony import */ var _defaults_eqCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/eqCategories */ "./defaults/eqCategories.js");


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
  var from_string = router.query.from_string;
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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      mobileFilter = _useState8[0],
      setFilterMobile = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
    });
    setLoading(true);
  }, []);

  var onFilterMobile = function onFilterMobile() {
    if (!mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'none';
    }

    if (mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'inherit';
    }

    setFilterMobile(!mobileFilter);
  };

  var pageFinal = page ? page : 1;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/getAllEquipment?page=").concat(pageFinal)).then(function (res) {
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
      className: "filter_icon",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return onFilterMobile();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          "class": "fas fa-sliders-h "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_FilterEquipment__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setLoading: setLoading,
      setPosts: setEquipments,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile,
      currentPlace_id: geoLoc.place_id,
      currentPlace_name: geoLoc.formatted_address // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 ", from_string && "в " + from_string]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(Equipment, "wEESTjOrpF5KPLrnuqV+qIn5TwM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXF1aXBtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwbWVudCIsImN1cnJlbnRQbGFjZV9pZCIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImN1cnJlbnRQbGFjZV9uYW1lIiwidXNlU3RhdGUiLCJwbGFjZV9pZCIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ2VvTG9jIiwic2V0R2VvTG9jIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImZyb21fc3RyaW5nIiwicGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXF1aXBtZW50cyIsInNldEVxdWlwbWVudHMiLCJ0b3RhbCIsInNldFRvdGFsIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1heFBhZ2UiLCJzZXRNYXhQYWdlIiwibG9hZE1hcFNjcmlwdCIsInNldExvYWRNYXBTY3JpcHQiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ1c2VFZmZlY3QiLCJsb2FkR29vZ2xlTWFwU2NyaXB0Iiwib25GaWx0ZXJNb2JpbGUiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInBhZ2VGaW5hbCIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvdW50IiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsZUFBZSxHQUFH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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTBCQSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQWhIRDs7R0FBTWpCLFM7VUFJV1kscUQ7OztLQUpYWixTO0FBa0hTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcXVpcG1lbnQuOTFlNjE2MjViOGRkYmMyOTQ2NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC9TaWRlQmFyQ3VycmVuY3lcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBGaWx0ZXJFcXVpcG1lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlckVxdWlwbWVudCdcclxuaW1wb3J0IEVxdWlwbWVudEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXF1aXBtZW50L0VxdWlwbWVudEl0ZW1cIlxyXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwU2NyaXB0IH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzXCJcclxuaW1wb3J0IHsgZXFDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2VxQ2F0ZWdvcmllc1wiXHJcbmNvbnN0IEVxdWlwbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfaWQgPSBjb29raWUuZ2V0KCdwbGFjZV9pZCcpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdwbGFjZV9pZCcpIDogXCJcIjtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfbmFtZSA9IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgOiBcIlwiO1xyXG4gIGNvbnN0IFtnZW9Mb2MsIHNldEdlb0xvY10gPSB1c2VTdGF0ZSh7cGxhY2VfaWQ6IGN1cnJlbnRQbGFjZV9pZCwgZm9ybWF0dGVkX2FkZHJlc3M6IGN1cnJlbnRQbGFjZV9uYW1lfSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZXF1aXBtZW50cyxzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW3RvdGFsLHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZihtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdpbmhlcml0J1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyTW9iaWxlKCFtb2JpbGVGaWx0ZXIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwYWdlRmluYWwgPSBwYWdlID8gcGFnZSA6IDFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2VGaW5hbH1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXF1aXBtZW50cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmNvdW50KVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZT0ocGFnZU51bSkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvZXF1aXBtZW50P3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRFcXVpcG1lbnRzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuY291bnQpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgIFxyXG4gICAgICA8RmlsdGVyRXF1aXBtZW50IFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRFcXVpcG1lbnRzfVxyXG4gICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgY3VycmVudFBsYWNlX2lkPXtnZW9Mb2MucGxhY2VfaWR9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfbmFtZT17Z2VvTG9jLmZvcm1hdHRlZF9hZGRyZXNzfVxyXG4gICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoND7Qk9C70LDQstC90LDRjyAvINCh0L/QtdGG0YLQtdGF0L3QuNC60LAgLyDQl9C10LzQu9C10YDQvtC50L3QsNGPINGC0LXRhdC90LjQutCwIC8g0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lg8L2g0PlxyXG4gICAgICAgICAgICA8aDE+0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lgge2Zyb21fc3RyaW5nICYmIFwi0LIgXCIgKyBmcm9tX3N0cmluZ308L2gxPlxyXG4gICAgICAgICAgICA8aDM+0J3QsNC50LTQtdC90L4ge3RvdGFsfSDQvtCx0YrRj9Cy0LvQtdC90LjQuTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFcXVpcG1lbnRJdGVtIGVxdWlwbWVudHM9e2VxdWlwbWVudHN9IG1heFBhZ2U9e21heFBhZ2V9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RleHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDM+0JDRgNC10L3QtNCwINGB0LrQu9Cw0LTQvtCyINC4INGB0LrQu9Cw0LTRgdC60LjRhSDQv9C+0LzQtdGJ0LXQvdC40Lkg0LIg0JrQsNC30LDRhdGB0YLQsNC90LU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPtCY0YHRhdC+0LTRjyDQuNC3INC90LDQsdC+0YDQsCDQuCDQutCw0YfQtdGB0YLQstCwINGN0YLQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyINGB0LrQu9Cw0LTRgyDQv9GA0LjRgdCy0LDQuNCy0LDQtdGC0YHRjyDQutC70LDRgdGBOiBBLFxyXG4gICAgICAgICAgICAgICAgQissIEIg0LjQu9C4IEMuINCh0YLQvtC40YIg0L7QsdGA0LDRgtC40YLRjCDQstC90LjQvNCw0L3QuNC1INC90LAg0YHQutC70LDQtNGLIEIg0LggQyDQutC70LDRgdGB0L7Qsiwg0LPQtNC1INCw0YDQtdC90LTQvdCw0Y9cclxuICAgICAgICAgICAgICAgINGB0YLQsNCy0LrQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSAyIDAwMCDRgtC10L3Qs9C1INC30LAg0LrQsi4g0LwuINCn0YLQvtCx0Ysg0YHQvdGP0YLRjCDRgdC60LvQsNC0INCyINCx0LjQt9C90LXRgS3RhtC10L3RgtGA0LDRhSBBXHJcbiAgICAgICAgICAgICAgICDQuNC70LggQisg0LrQu9Cw0YHRgdCwLCDRgdGC0L7QuNGCINC30LDQu9C+0LbQuNGC0Ywg0LIg0LHRjtC00LbQtdGCINC+0YIgMyA1MDAg0LTQviAyMCAwMDAg0YLQtdC90LPQtSDQt9CwINC60LIuINC8LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RleHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDM+0J7RgtCy0LXRgtGF0YDQsNC90LXQvdC40LUg0Lgg0YHQutC70LDQtNGLINCyINCQ0LvQvNCw0YLRizwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+0KEg0L/QvtC80L7RidGM0Y4g0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdC+0Lkg0LrQvtC90YHQsNC70YLQuNC90LPQvtCy0L7QuSDQutC+0LzQv9Cw0L3QuNC4IEJsaXoua3og0LzQvtC20L3QviDQvdCw0LnRgtC4INGB0LrQu9Cw0LRcclxuICAgICAgICAgICAgICAgINCyINCw0YDQtdC90LTRgyDQsiDQkNC70LzQsNGC0Ysg0L/QviDQstGL0LPQvtC00L3QvtC5INGG0LXQvdC1INCx0LXQtyDQutC+0LzQuNGB0YHQuNC4INC4INC/0L7RgdGA0LXQtNC90LjQutC+0LIuINCh0L/QtdGG0LjQsNC70LjRgdGC0YtcclxuICAgICAgICAgICAgICAgINC60L7QvNC/0LDQvdC40Lgg0L/QvtC80L7Qs9GD0YIg0L/QvtC00L7QsdGA0LDRgtGMINC/0L7QvNC10YnQtdC90LjQtSwg0YPRh9C40YLRi9Cy0LDRjyDQv9C+0LbQtdC70LDQvdC40Y8g0Lgg0LHRjtC00LbQtdGCINC30LDQutCw0LfRh9C40LrQsCxcclxuICAgICAgICAgICAgICAgINC+0YDQs9Cw0L3QuNC30YPRjtGCINC/0YDQvtGB0LzQvtGC0YAg0Lgg0L/QvtC00L/QuNGB0LDQvdC40LUg0LTQvtCz0L7QstC+0YDQsCDRgSDRgdC+0LHRgdGC0LLQtdC90L3QuNC60L7QvC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==