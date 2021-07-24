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
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 77,
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
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXF1aXBtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwbWVudCIsImN1cnJlbnRQbGFjZV9pZCIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImN1cnJlbnRQbGFjZV9uYW1lIiwidXNlU3RhdGUiLCJwbGFjZV9pZCIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ2VvTG9jIiwic2V0R2VvTG9jIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVxdWlwbWVudHMiLCJzZXRFcXVpcG1lbnRzIiwidG90YWwiLCJzZXRUb3RhbCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidXNlRWZmZWN0IiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsIm9uRmlsdGVyTW9iaWxlIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJwYWdlRmluYWwiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb3VudCIsIm1heF9wYWdlIiwiY3VycmVudF9wYWdlIiwib25DaGFuZ2VQYWdlIiwicGFnZU51bSIsInB1c2giLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLGVBQWUsR0FBR0MsZ0RBQU0sQ0FBQ0Ms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Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUEwQkEscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0EvR0Q7O0dBQU1oQixTO1VBSVdZLHFEOzs7S0FKWFosUztBQWlIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXF1aXBtZW50LmJkNDg3Njk5ZWIwM2VhYzAwMTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZUJhckN1cnJlbmN5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgRmlsdGVyRXF1aXBtZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXJFcXVpcG1lbnQnXHJcbmltcG9ydCBFcXVpcG1lbnRJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VxdWlwbWVudC9FcXVpcG1lbnRJdGVtXCJcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0c1wiXHJcbmltcG9ydCB7IGVxQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9lcUNhdGVnb3JpZXNcIlxyXG5jb25zdCBFcXVpcG1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX2lkID0gY29va2llLmdldCgncGxhY2VfaWQnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgncGxhY2VfaWQnKSA6IFwiXCI7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX25hbWUgPSBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpIDogXCJcIjtcclxuICBjb25zdCBbZ2VvTG9jLCBzZXRHZW9Mb2NdID0gdXNlU3RhdGUoe3BsYWNlX2lkOiBjdXJyZW50UGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBjdXJyZW50UGxhY2VfbmFtZX0pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZXF1aXBtZW50cyxzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW3RvdGFsLHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZihtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdpbmhlcml0J1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyTW9iaWxlKCFtb2JpbGVGaWx0ZXIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwYWdlRmluYWwgPSBwYWdlID8gcGFnZSA6IDFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2VGaW5hbH1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXF1aXBtZW50cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmNvdW50KVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZT0ocGFnZU51bSkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvZXF1aXBtZW50P3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRFcXVpcG1lbnRzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuY291bnQpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgIFxyXG4gICAgICA8RmlsdGVyRXF1aXBtZW50IFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRFcXVpcG1lbnRzfVxyXG4gICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgY3VycmVudFBsYWNlX2lkPXtnZW9Mb2MucGxhY2VfaWR9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfbmFtZT17Z2VvTG9jLmZvcm1hdHRlZF9hZGRyZXNzfVxyXG4gICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoND7Qk9C70LDQstC90LDRjyAvINCh0L/QtdGG0YLQtdGF0L3QuNC60LAgLyDQl9C10LzQu9C10YDQvtC50L3QsNGPINGC0LXRhdC90LjQutCwIC8g0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lg8L2g0PlxyXG4gICAgICAgICAgICA8aDE+0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60LggPC9oMT5cclxuICAgICAgICAgICAgPGgzPtCd0LDQudC00LXQvdC+IHt0b3RhbH0g0L7QsdGK0Y/QstC70LXQvdC40Lk8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RXF1aXBtZW50SXRlbSBlcXVpcG1lbnRzPXtlcXVpcG1lbnRzfSBtYXhQYWdlPXttYXhQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCQ0YDQtdC90LTQsCDRgdC60LvQsNC00L7QsiDQuCDRgdC60LvQsNC00YHQutC40YUg0L/QvtC80LXRidC10L3QuNC5INCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1PC9oMz5cclxuICAgICAgICAgICAgICA8cD7QmNGB0YXQvtC00Y8g0LjQtyDQvdCw0LHQvtGA0LAg0Lgg0LrQsNGH0LXRgdGC0LLQsCDRjdGC0LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDRgdC60LvQsNC00YMg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LrQu9Cw0YHRgTogQSxcclxuICAgICAgICAgICAgICAgIEIrLCBCINC40LvQuCBDLiDQodGC0L7QuNGCINC+0LHRgNCw0YLQuNGC0Ywg0LLQvdC40LzQsNC90LjQtSDQvdCwINGB0LrQu9Cw0LTRiyBCINC4IEMg0LrQu9Cw0YHRgdC+0LIsINCz0LTQtSDQsNGA0LXQvdC00L3QsNGPXHJcbiAgICAgICAgICAgICAgICDRgdGC0LDQstC60LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgMiAwMDAg0YLQtdC90LPQtSDQt9CwINC60LIuINC8LiDQp9GC0L7QsdGLINGB0L3Rj9GC0Ywg0YHQutC70LDQtCDQsiDQsdC40LfQvdC10YEt0YbQtdC90YLRgNCw0YUgQVxyXG4gICAgICAgICAgICAgICAg0LjQu9C4IEIrINC60LvQsNGB0YHQsCwg0YHRgtC+0LjRgiDQt9Cw0LvQvtC20LjRgtGMINCyINCx0Y7QtNC20LXRgiDQvtGCIDMgNTAwINC00L4gMjAgMDAwINGC0LXQvdCz0LUg0LfQsCDQutCyLiDQvC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCe0YLQstC10YLRhdGA0LDQvdC10L3QuNC1INC4INGB0LrQu9Cw0LTRiyDQsiDQkNC70LzQsNGC0Ys8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPtChINC/0L7QvNC+0YnRjNGOINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC60L7QvdGB0LDQu9GC0LjQvdCz0L7QstC+0Lkg0LrQvtC80L/QsNC90LjQuCBCbGl6Lmt6INC80L7QttC90L4g0L3QsNC50YLQuCDRgdC60LvQsNC0XHJcbiAgICAgICAgICAgICAgICDQsiDQsNGA0LXQvdC00YMg0LIg0JDQu9C80LDRgtGLINC/0L4g0LLRi9Cz0L7QtNC90L7QuSDRhtC10L3QtSDQsdC10Lcg0LrQvtC80LjRgdGB0LjQuCDQuCDQv9C+0YHRgNC10LTQvdC40LrQvtCyLiDQodC/0LXRhtC40LDQu9C40YHRgtGLXHJcbiAgICAgICAgICAgICAgICDQutC+0LzQv9Cw0L3QuNC4INC/0L7QvNC+0LPRg9GCINC/0L7QtNC+0LHRgNCw0YLRjCDQv9C+0LzQtdGJ0LXQvdC40LUsINGD0YfQuNGC0YvQstCw0Y8g0L/QvtC20LXQu9Cw0L3QuNGPINC4INCx0Y7QtNC20LXRgiDQt9Cw0LrQsNC30YfQuNC60LAsXHJcbiAgICAgICAgICAgICAgICDQvtGA0LPQsNC90LjQt9GD0Y7RgiDQv9GA0L7RgdC80L7RgtGAINC4INC/0L7QtNC/0LjRgdCw0L3QuNC1INC00L7Qs9C+0LLQvtGA0LAg0YEg0YHQvtCx0YHRgtCy0LXQvdC90LjQutC+0LwuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=