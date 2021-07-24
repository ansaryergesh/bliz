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
      className: "filter_icon",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return onFilterMobile();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          "class": "fas fa-sliders-h "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 66,
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
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXF1aXBtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwbWVudCIsImN1cnJlbnRQbGFjZV9pZCIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImN1cnJlbnRQbGFjZV9uYW1lIiwidXNlU3RhdGUiLCJwbGFjZV9pZCIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ2VvTG9jIiwic2V0R2VvTG9jIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVxdWlwbWVudHMiLCJzZXRFcXVpcG1lbnRzIiwidG90YWwiLCJzZXRUb3RhbCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidXNlRWZmZWN0IiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvdW50IiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwicHVzaCIsIm9uRmlsdGVyTW9iaWxlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxlQUFlLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLE1BQTJCQyxTQUEzQixHQUF1Q0YsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsQ0FBdkMsR0FBZ0UsRUFBeEY7QUFD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MjRiNTI0ZDY4NWVjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeVwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IEZpbHRlckVxdWlwbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvRmlsdGVyRXF1aXBtZW50J1xyXG5pbXBvcnQgRXF1aXBtZW50SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lcXVpcG1lbnQvRXF1aXBtZW50SXRlbVwiXHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHNcIlxyXG5pbXBvcnQgeyBlcUNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXFDYXRlZ29yaWVzXCJcclxuY29uc3QgRXF1aXBtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRQbGFjZV9pZCA9IGNvb2tpZS5nZXQoJ3BsYWNlX2lkJykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ3BsYWNlX2lkJykgOiBcIlwiO1xyXG4gIGNvbnN0IGN1cnJlbnRQbGFjZV9uYW1lID0gY29va2llLmdldCgnZm9ybWF0dGVkX2FkZHJlc3MnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgnZm9ybWF0dGVkX2FkZHJlc3MnKSA6IFwiXCI7XHJcbiAgY29uc3QgW2dlb0xvYywgc2V0R2VvTG9jXSA9IHVzZVN0YXRlKHtwbGFjZV9pZDogY3VycmVudFBsYWNlX2lkLCBmb3JtYXR0ZWRfYWRkcmVzczogY3VycmVudFBsYWNlX25hbWV9KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2VxdWlwbWVudHMsc2V0RXF1aXBtZW50c10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFt0b3RhbCxzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSxzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbW9iaWxlRmlsdGVyLHNldEZpbHRlck1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbEVxdWlwbWVudD9wYWdlPSR7cGFnZX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXF1aXBtZW50cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmNvdW50KVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZT0ocGFnZU51bSkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxFcXVpcG1lbnQ/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvZXF1aXBtZW50P3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRFcXVpcG1lbnRzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuY291bnQpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgIFxyXG4gICAgICA8RmlsdGVyRXF1aXBtZW50IFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRFcXVpcG1lbnRzfVxyXG4gICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgY3VycmVudFBsYWNlX2lkPXtnZW9Mb2MucGxhY2VfaWR9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfbmFtZT17Z2VvTG9jLmZvcm1hdHRlZF9hZGRyZXNzfVxyXG4gICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoND7Qk9C70LDQstC90LDRjyAvINCh0L/QtdGG0YLQtdGF0L3QuNC60LAgLyDQl9C10LzQu9C10YDQvtC50L3QsNGPINGC0LXRhdC90LjQutCwIC8g0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lg8L2g0PlxyXG4gICAgICAgICAgICA8aDE+0K3RgdC60L7QstCw0YLQvtGA0Yst0L/QvtCz0YDRg9C30YfQuNC60Lgg0LIg0JDQu9C80LDRgtGLPC9oMT5cclxuICAgICAgICAgICAgPGgzPtCd0LDQudC00LXQvdC+IHt0b3RhbH0g0L7QsdGK0Y/QstC70LXQvdC40Lk8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RXF1aXBtZW50SXRlbSBlcXVpcG1lbnRzPXtlcXVpcG1lbnRzfSBtYXhQYWdlPXttYXhQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCQ0YDQtdC90LTQsCDRgdC60LvQsNC00L7QsiDQuCDRgdC60LvQsNC00YHQutC40YUg0L/QvtC80LXRidC10L3QuNC5INCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1PC9oMz5cclxuICAgICAgICAgICAgICA8cD7QmNGB0YXQvtC00Y8g0LjQtyDQvdCw0LHQvtGA0LAg0Lgg0LrQsNGH0LXRgdGC0LLQsCDRjdGC0LjRhSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDRgdC60LvQsNC00YMg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LrQu9Cw0YHRgTogQSxcclxuICAgICAgICAgICAgICAgIEIrLCBCINC40LvQuCBDLiDQodGC0L7QuNGCINC+0LHRgNCw0YLQuNGC0Ywg0LLQvdC40LzQsNC90LjQtSDQvdCwINGB0LrQu9Cw0LTRiyBCINC4IEMg0LrQu9Cw0YHRgdC+0LIsINCz0LTQtSDQsNGA0LXQvdC00L3QsNGPXHJcbiAgICAgICAgICAgICAgICDRgdGC0LDQstC60LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgMiAwMDAg0YLQtdC90LPQtSDQt9CwINC60LIuINC8LiDQp9GC0L7QsdGLINGB0L3Rj9GC0Ywg0YHQutC70LDQtCDQsiDQsdC40LfQvdC10YEt0YbQtdC90YLRgNCw0YUgQVxyXG4gICAgICAgICAgICAgICAg0LjQu9C4IEIrINC60LvQsNGB0YHQsCwg0YHRgtC+0LjRgiDQt9Cw0LvQvtC20LjRgtGMINCyINCx0Y7QtNC20LXRgiDQvtGCIDMgNTAwINC00L4gMjAgMDAwINGC0LXQvdCz0LUg0LfQsCDQutCyLiDQvC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGgzPtCe0YLQstC10YLRhdGA0LDQvdC10L3QuNC1INC4INGB0LrQu9Cw0LTRiyDQsiDQkNC70LzQsNGC0Ys8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPtChINC/0L7QvNC+0YnRjNGOINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC60L7QvdGB0LDQu9GC0LjQvdCz0L7QstC+0Lkg0LrQvtC80L/QsNC90LjQuCBCbGl6Lmt6INC80L7QttC90L4g0L3QsNC50YLQuCDRgdC60LvQsNC0XHJcbiAgICAgICAgICAgICAgICDQsiDQsNGA0LXQvdC00YMg0LIg0JDQu9C80LDRgtGLINC/0L4g0LLRi9Cz0L7QtNC90L7QuSDRhtC10L3QtSDQsdC10Lcg0LrQvtC80LjRgdGB0LjQuCDQuCDQv9C+0YHRgNC10LTQvdC40LrQvtCyLiDQodC/0LXRhtC40LDQu9C40YHRgtGLXHJcbiAgICAgICAgICAgICAgICDQutC+0LzQv9Cw0L3QuNC4INC/0L7QvNC+0LPRg9GCINC/0L7QtNC+0LHRgNCw0YLRjCDQv9C+0LzQtdGJ0LXQvdC40LUsINGD0YfQuNGC0YvQstCw0Y8g0L/QvtC20LXQu9Cw0L3QuNGPINC4INCx0Y7QtNC20LXRgiDQt9Cw0LrQsNC30YfQuNC60LAsXHJcbiAgICAgICAgICAgICAgICDQvtGA0LPQsNC90LjQt9GD0Y7RgiDQv9GA0L7RgdC80L7RgtGAINC4INC/0L7QtNC/0LjRgdCw0L3QuNC1INC00L7Qs9C+0LLQvtGA0LAg0YEg0YHQvtCx0YHRgtCy0LXQvdC90LjQutC+0LwuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=