webpackHotUpdate_N_E("pages/storage",{

/***/ "./pages/storage/index.js":
/*!********************************!*\
  !*** ./pages/storage/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_FilterStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post/FilterStorage */ "./components/post/FilterStorage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_storage_StorageItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/storage/StorageItems */ "./components/storage/StorageItems.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/storage/StorageCalculator */ "./components/storage/StorageCalculator.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");
/* harmony import */ var _components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/SideBarCurrency */ "./components/post/SideBarCurrency.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\storage\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Storage = function Storage() {
  _s();

  var currentPlace_id = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('place_id') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('place_id') : "";
  var currentPlace_name = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('formatted_address') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('formatted_address') : "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    place_id: currentPlace_id,
    formatted_address: currentPlace_name
  }),
      geoLoc = _useState[0],
      setGeoLoc = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var page = router.query.page;
  var from_string = router.query.from_string;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{}]),
      storages = _useState3[0],
      setStorages = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobileFilter = _useState5[0],
      setFilterMobile = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      maxPage = _useState7[0],
      setMaxPage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      minArea = _useState8[0],
      setMinArea = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      maxArea = _useState9[0],
      setMaxArea = _useState9[1];

  var cityRegionRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadMap = _useState10[0],
      setLoadMap = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    id: '',
    name: ''
  }),
      cityRegion = _useState11[0],
      setCityRegion = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadMapScript = _useState12[0],
      setLoadMapScript = _useState12[1]; // initialize the google place autocomplete


  var initPlaceAPI = function initPlaceAPI() {
    var autocomplete = new window.google.maps.places.Autocomplete(cityRegionRef.current, {
      types: ["(cities)"],
      componentRestrictions: {
        country: ["kz", "ru"]
      }
    });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      var place = autocomplete.getPlace();
      setCityRegion({
        address: place.formatted_address,
        id: place.place_id
      });
    });
  };

  var onFilterMobile = function onFilterMobile() {
    if (!mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'none';
    }

    if (mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'inherit';
    }

    setFilterMobile(!mobileFilter);
  };

  var onChangePage = function onChangePage(pageNum) {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat("https://test.money-men.kz/api", "/getAllStorage?page=").concat(pageNum)).then(function (res) {
      router.push("/storage?page=".concat(pageNum));
      setLoading(false);
      setStorages(res.data.data);
      setTotal(res.data.all);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_7__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
    });
    setLoading(true);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_FilterStorage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setLoading: setLoading,
      setPosts: setStorages,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile,
      currentPlace_id: geoLoc.place_id,
      currentPlace_name: geoLoc.formatted_address // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 8
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "products__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/",
              className: "",
              children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, _this), " " + "/" + " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/storage",
              children: "\u0421\u043A\u043B\u0430\u0434\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 66
            }, _this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "gray_font",
              children: " " + "Склады в Алматы"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F ", from_string && 'в' + " " + from_string]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, _this), storages === [] ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
          from_string: from_string,
          total: total,
          storages: storages,
          maxPage: maxPage,
          onChangePage: onChangePage,
          currentPage: currentPage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Storage, "hTpYLEQa5pdClUmelQ4NmseGPH4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Storage;
/* harmony default export */ __webpack_exports__["default"] = (Storage);

var _c;

$RefreshReg$(_c, "Storage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwiY3VycmVudFBsYWNlX2lkIiwiY29va2llIiwiZ2V0IiwidW5kZWZpbmVkIiwiY3VycmVudFBsYWNlX25hbWUiLCJ1c2VTdGF0ZSIsInBsYWNlX2lkIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9Mb2MiLCJzZXRHZW9Mb2MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGFnZSIsImZyb21fc3RyaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdG9yYWdlcyIsInNldFN0b3JhZ2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsIm1pbkFyZWEiLCJzZXRNaW5BcmVhIiwibWF4QXJlYSIsInNldE1heEFyZWEiLCJjaXR5UmVnaW9uUmVmIiwidXNlUmVmIiwibG9hZE1hcCIsInNldExvYWRNYXAiLCJuYW1lIiwiY2l0eVJlZ2lvbiIsInNldENpdHlSZWdpb24iLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwib25GaWx0ZXJNb2JpbGUiLCJzY3JlZW4iLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwicHVzaCIsImRhdGEiLCJhbGwiLCJtYXhfcGFnZSIsImN1cnJlbnRfcGFnZSIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxlQUFlLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLE1BQTJCQyxTQUEzQixHQUF1Q0YsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsQ0FBdkMsR0FBZ0UsRUFBeEY7QUFDQSxNQUFNRSxpQkFBaUIsR0FBR0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLE1BQW9DQyxTQUFwQyxHQUFnREYsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLENBQWhELEdBQWtGLEVBQTVHOztBQUZvQixrQkFHUUcsc0RBQVEsQ0FBQztBQUFDQyxZQUFRLEVBQUVOLGVBQVg7QUFBNEJPLHFCQUFpQixFQUFFSDtBQUEvQyxHQUFELENBSGhCO0FBQUEsTUFHYkksTUFIYTtBQUFBLE1BR0xDLFNBSEs7O0FBSXBCLE1BQU1DLE1BQU0sR0FBSUMsNkRBQVMsRUFBekI7QUFKb0IsTUFLYkMsRUFMYSxHQUtQRixNQUFNLENBQUNHLEtBTEEsQ0FLYkQsRUFMYTtBQUFBLE1BTWJFLElBTmEsR0FNTEosTUFBTSxDQUFDRyxLQU5GLENBTWJDLElBTmE7QUFBQSxNQU9iQyxXQVBhLEdBT0VMLE1BQU0sQ0FBQ0csS0FQVCxDQU9iRSxXQVBhOztBQUFBLG1CQVFVVixzREFBUSxDQUFDLElBQUQsQ0FSbEI7QUFBQSxNQVFiVyxPQVJhO0FBQUEsTUFRSkMsVUFSSTs7QUFBQSxtQkFVWVosc0RBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQVZwQjtBQUFBLE1BVWJh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QVEsS0FBSyxFQUFiLEdBQWtCLEVBQWxCLGdCQUF3QixxRUFBQyx3RUFBRDtBQUFjLHFCQUFXLEVBQUVILFdBQTNCO0FBQXdDLGVBQUssRUFBRVMsS0FBL0M7QUFBc0Qsa0JBQVEsRUFBRU4sUUFBaEU7QUFBMEUsaUJBQU8sRUFBRVEsT0FBbkY7QUFBNEYsc0JBQVksRUFBRXNDLFlBQTFHO0FBQXdILHFCQUFXLEVBQUU1QyxXQUFySTtBQUFrSixpQkFBTyxFQUFFSjtBQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVNBLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkYsZUFrQ0kscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDSjtBQUFBLGtCQURGO0FBNkNELENBOUdEOztHQUFNakIsTztVQUlZWSxxRDs7O0tBSlpaLE87QUFnSFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2UuYzc3YWE0MzFlOWE2NzZiOWM4YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlclN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN0b3JhZ2VJdGVtcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUl0ZW1zJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFN0b3JhZ2VDYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdG9yYWdlL1N0b3JhZ2VDYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX2lkID0gY29va2llLmdldCgncGxhY2VfaWQnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgncGxhY2VfaWQnKSA6IFwiXCI7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX25hbWUgPSBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpIDogXCJcIjtcclxuICBjb25zdCBbZ2VvTG9jLCBzZXRHZW9Mb2NdID0gdXNlU3RhdGUoe3BsYWNlX2lkOiBjdXJyZW50UGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBjdXJyZW50UGxhY2VfbmFtZX0pXHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIFxyXG4gIGNvbnN0IFtzdG9yYWdlcywgc2V0U3RvcmFnZXNdID0gdXNlU3RhdGUoW3t9XSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWluQXJlYSwgc2V0TWluQXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWF4QXJlYSwgc2V0TWF4QXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBjaXR5UmVnaW9uUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2xvYWRNYXAsIHNldExvYWRNYXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NpdHlSZWdpb24sIHNldENpdHlSZWdpb25dID0gdXNlU3RhdGUoe2lkOiAnJywgbmFtZTogJyd9KVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgIC8vIGluaXRpYWxpemUgdGhlIGdvb2dsZSBwbGFjZSBhdXRvY29tcGxldGVcclxuICAgY29uc3QgaW5pdFBsYWNlQVBJID0gKCkgPT4ge1xyXG4gICAgbGV0IGF1dG9jb21wbGV0ZSA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShjaXR5UmVnaW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgdHlwZXM6IFtcIihjaXRpZXMpXCJdLCBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogW1wia3pcIiwgXCJydVwiXSB9IH0pO1xyXG4gICAgbmV3IHdpbmRvdy5nb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihhdXRvY29tcGxldGUsIFwicGxhY2VfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG4gICAgICBzZXRDaXR5UmVnaW9uKHtcclxuICAgICAgICBhZGRyZXNzOiBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICBpZDogcGxhY2UucGxhY2VfaWRcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbHRlck1vYmlsZSA9ICgpID0+IHtcclxuICAgIGlmKCFtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH1cclxuICAgIGlmKG1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbFN0b3JhZ2U/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvc3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0U3RvcmFnZXMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5hbGwpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRTdG9yYWdlc31cclxuICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgIGN1cnJlbnRQbGFjZV9pZD17Z2VvTG9jLnBsYWNlX2lkfVxyXG4gICAgICAgY3VycmVudFBsYWNlX25hbWU9e2dlb0xvYy5mb3JtYXR0ZWRfYWRkcmVzc31cclxuICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZVwiPlxyXG4gICAgICAgIDxoND48YSBocmVmPVwiL1wiIGNsYXNzTmFtZT0nJz7Qk9C70LDQstC90LDRjzwvYT57XCIgXCIgKyBcIi9cIiArIFwiIFwifTxhIGhyZWY9Jy9zdG9yYWdlJyA+0KHQutC70LDQtNGLIDwvYT4vPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2dyYXlfZm9udCc+e1wiIFwiICsgXCLQodC60LvQsNC00Ysg0LIg0JDQu9C80LDRgtGLXCJ9PC9hPjwvaDQ+XHJcbiAgICAgICAgICA8aDE+0KHQutC70LDQtNGLINC4INGB0LrQu9Cw0LTRgdC60LjQtSDQv9C+0LzQtdGJ0LXQvdC40Y8ge2Zyb21fc3RyaW5nICYmICfQsicgKyBcIiBcIiArIGZyb21fc3RyaW5nfTwvaDE+XHJcbiAgICAgICAgICA8aDM+0J3QsNC50LTQtdC90L4ge3RvdGFsfSDQvtCx0YrRj9Cy0LvQtdC90LjQuTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdG9yYWdlcyA9PT0gW10gPyAnJyA6ICA8U3RvcmFnZUl0ZW1zIGZyb21fc3RyaW5nPXtmcm9tX3N0cmluZ30gdG90YWw9e3RvdGFsfSBzdG9yYWdlcz17c3RvcmFnZXN9IG1heFBhZ2U9e21heFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9Lz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICAgPFN0b3JhZ2VDYWwgLz5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHsvKiA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD17cHJvY2Vzcy5lbnYuUFJPRF9VUkwvcGF0aE5hbWV9PlxyXG4gIHtzaGFyZUNvdW50ID0+IDxzcGFuIGNsYXNzTmFtZT1cIm15U2hhcmVDb3VudFdyYXBwZXJcIj57c2hhcmVDb3VudH08L3NwYW4+fVxyXG48L0ZhY2Vib29rU2hhcmVDb3VudD4gKi99XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=