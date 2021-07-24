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
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 56,
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
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 ", from_string && "в " + from_string]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Equipment, "d9/WGAJo9lSYr04Egx+vHt1DPUE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXF1aXBtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwbWVudCIsImN1cnJlbnRQbGFjZV9pZCIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImN1cnJlbnRQbGFjZV9uYW1lIiwidXNlU3RhdGUiLCJwbGFjZV9pZCIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ2VvTG9jIiwic2V0R2VvTG9jIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImZyb21fc3RyaW5nIiwicGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXF1aXBtZW50cyIsInNldEVxdWlwbWVudHMiLCJ0b3RhbCIsInNldFRvdGFsIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1heFBhZ2UiLCJzZXRNYXhQYWdlIiwibG9hZE1hcFNjcmlwdCIsInNldExvYWRNYXBTY3JpcHQiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ1c2VFZmZlY3QiLCJsb2FkR29vZ2xlTWFwU2NyaXB0Iiwib25GaWx0ZXJNb2JpbGUiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInBhZ2VGaW5hbCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvbkNoYW5nZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsZUFBZSxHQUFHQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsVUFBWCxNQUEyQkMsU0FBM0IsR0FBdUNGLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLENBQXZDLEdBQWdFLEVBQXhGO0FBQ0EsTUFBTUUs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QUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTBCQSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQTFGRDs7R0FBTWpCLFM7VUFJV1kscUQ7OztLQUpYWixTO0FBNEZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcXVpcG1lbnQuN2JlNTgyYmY5MTk3ZGJlYzVmNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdC9TaWRlQmFyQ3VycmVuY3lcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBGaWx0ZXJFcXVpcG1lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlckVxdWlwbWVudCdcclxuaW1wb3J0IEVxdWlwbWVudEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXF1aXBtZW50L0VxdWlwbWVudEl0ZW1cIlxyXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwU2NyaXB0IH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzXCJcclxuaW1wb3J0IHsgZXFDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2VxQ2F0ZWdvcmllc1wiXHJcbmNvbnN0IEVxdWlwbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfaWQgPSBjb29raWUuZ2V0KCdwbGFjZV9pZCcpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdwbGFjZV9pZCcpIDogXCJcIjtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfbmFtZSA9IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgOiBcIlwiO1xyXG4gIGNvbnN0IFtnZW9Mb2MsIHNldEdlb0xvY10gPSB1c2VTdGF0ZSh7cGxhY2VfaWQ6IGN1cnJlbnRQbGFjZV9pZCwgZm9ybWF0dGVkX2FkZHJlc3M6IGN1cnJlbnRQbGFjZV9uYW1lfSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZXF1aXBtZW50cyxzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW3RvdGFsLHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZihtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdpbmhlcml0J1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyTW9iaWxlKCFtb2JpbGVGaWx0ZXIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwYWdlRmluYWwgPSBwYWdlID8gcGFnZSA6IDFcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9kaXY+IDpcclxuICAgICAgXHJcbiAgICAgIDxGaWx0ZXJFcXVpcG1lbnQgXHJcbiAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgc2V0UG9zdHM9e3NldEVxdWlwbWVudHN9XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICBzZXRUb3RhbD17c2V0VG90YWx9XHJcbiAgICAgICBzZXRNYXhQYWdlPXtzZXRNYXhQYWdlfVxyXG4gICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfaWQ9e2dlb0xvYy5wbGFjZV9pZH1cclxuICAgICAgIGN1cnJlbnRQbGFjZV9uYW1lPXtnZW9Mb2MuZm9ybWF0dGVkX2FkZHJlc3N9XHJcbiAgICAgICAvLyBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgLz5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICAgICAgPGg0PtCT0LvQsNCy0L3QsNGPIC8g0KHQv9C10YbRgtC10YXQvdC40LrQsCAvINCX0LXQvNC70LXRgNC+0LnQvdCw0Y8g0YLQtdGF0L3QuNC60LAgLyDQrdGB0LrQvtCy0LDRgtC+0YDRiy3Qv9C+0LPRgNGD0LfRh9C40LrQuDwvaDQ+XHJcbiAgICAgICAgICAgIDxoMT7QrdGB0LrQvtCy0LDRgtC+0YDRiy3Qv9C+0LPRgNGD0LfRh9C40LrQuCB7ZnJvbV9zdHJpbmcgJiYgXCLQsiBcIiArIGZyb21fc3RyaW5nfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMz7QndCw0LnQtNC10L3QviB7dG90YWx9INC+0LHRitGP0LLQu9C10L3QuNC5PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEVxdWlwbWVudEl0ZW0gZXF1aXBtZW50cz17ZXF1aXBtZW50c30gbWF4UGFnZT17bWF4UGFnZX0gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBvbkNoYW5nZVBhZ2U9e29uQ2hhbmdlUGFnZX0gbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGV4dF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMz7QkNGA0LXQvdC00LAg0YHQutC70LDQtNC+0LIg0Lgg0YHQutC70LDQtNGB0LrQuNGFINC/0L7QvNC10YnQtdC90LjQuSDQsiDQmtCw0LfQsNGF0YHRgtCw0L3QtTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+0JjRgdGF0L7QtNGPINC40Lcg0L3QsNCx0L7RgNCwINC4INC60LDRh9C10YHRgtCy0LAg0Y3RgtC40YUg0L/QsNGA0LDQvNC10YLRgNC+0LIg0YHQutC70LDQtNGDINC/0YDQuNGB0LLQsNC40LLQsNC10YLRgdGPINC60LvQsNGB0YE6IEEsXHJcbiAgICAgICAgICAgICAgICBCKywgQiDQuNC70LggQy4g0KHRgtC+0LjRgiDQvtCx0YDQsNGC0LjRgtGMINCy0L3QuNC80LDQvdC40LUg0L3QsCDRgdC60LvQsNC00YsgQiDQuCBDINC60LvQsNGB0YHQvtCyLCDQs9C00LUg0LDRgNC10L3QtNC90LDRj1xyXG4gICAgICAgICAgICAgICAg0YHRgtCw0LLQutCwINC90LDRh9C40L3QsNC10YLRgdGPINGBIDIgMDAwINGC0LXQvdCz0LUg0LfQsCDQutCyLiDQvC4g0KfRgtC+0LHRiyDRgdC90Y/RgtGMINGB0LrQu9Cw0LQg0LIg0LHQuNC30L3QtdGBLdGG0LXQvdGC0YDQsNGFIEFcclxuICAgICAgICAgICAgICAgINC40LvQuCBCKyDQutC70LDRgdGB0LAsINGB0YLQvtC40YIg0LfQsNC70L7QttC40YLRjCDQsiDQsdGO0LTQttC10YIg0L7RgiAzIDUwMCDQtNC+IDIwIDAwMCDRgtC10L3Qs9C1INC30LAg0LrQsi4g0LwuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGV4dF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoMz7QntGC0LLQtdGC0YXRgNCw0L3QtdC90LjQtSDQuCDRgdC60LvQsNC00Ysg0LIg0JDQu9C80LDRgtGLPC9oMz5cclxuICAgICAgICAgICAgICA8cD7QoSDQv9C+0LzQvtGJ0YzRjiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90L7QuSDQutC+0L3RgdCw0LvRgtC40L3Qs9C+0LLQvtC5INC60L7QvNC/0LDQvdC40LggQmxpei5reiDQvNC+0LbQvdC+INC90LDQudGC0Lgg0YHQutC70LDQtFxyXG4gICAgICAgICAgICAgICAg0LIg0LDRgNC10L3QtNGDINCyINCQ0LvQvNCw0YLRiyDQv9C+INCy0YvQs9C+0LTQvdC+0Lkg0YbQtdC90LUg0LHQtdC3INC60L7QvNC40YHRgdC40Lgg0Lgg0L/QvtGB0YDQtdC00L3QuNC60L7Qsi4g0KHQv9C10YbQuNCw0LvQuNGB0YLRi1xyXG4gICAgICAgICAgICAgICAg0LrQvtC80L/QsNC90LjQuCDQv9C+0LzQvtCz0YPRgiDQv9C+0LTQvtCx0YDQsNGC0Ywg0L/QvtC80LXRidC10L3QuNC1LCDRg9GH0LjRgtGL0LLQsNGPINC/0L7QttC10LvQsNC90LjRjyDQuCDQsdGO0LTQttC10YIg0LfQsNC60LDQt9GH0LjQutCwLFxyXG4gICAgICAgICAgICAgICAg0L7RgNCz0LDQvdC40LfRg9GO0YIg0L/RgNC+0YHQvNC+0YLRgCDQuCDQv9C+0LTQv9C40YHQsNC90LjQtSDQtNC+0LPQvtCy0L7RgNCwINGBINGB0L7QsdGB0YLQstC10L3QvdC40LrQvtC8LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPFNpZGVCYXJDdXJyZW5jeSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudDsiXSwic291cmNlUm9vdCI6IiJ9