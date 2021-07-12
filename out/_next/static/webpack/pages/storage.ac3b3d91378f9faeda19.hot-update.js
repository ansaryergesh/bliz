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



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\storage\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Storage = function Storage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var page = router.query.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{}]),
      storages = _useState2[0],
      setStorages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      currentPage = _useState3[0],
      setCurrentPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobileFilter = _useState4[0],
      setFilterMobile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      maxPage = _useState6[0],
      setMaxPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      minArea = _useState7[0],
      setMinArea = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      maxArea = _useState8[0],
      setMaxArea = _useState8[1];

  var cityRegionRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadMap = _useState9[0],
      setLoadMap = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    id: '',
    name: ''
  }),
      cityRegion = _useState10[0],
      setCityRegion = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadMapScript = _useState11[0],
      setLoadMapScript = _useState11[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat("https://test.money-men.kz/api", "/getAllStorage?page=").concat(page)).then(function (res) {
      setLoading(false);
      setStorages(res.data.data);
      setTotal(res.data.all);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
    });
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_7__["loadGoogleMapScript"])(function () {
      setLoadMap(true), function () {
        return initPlaceAPI();
      };
    });
  }, []); // initialize the google place autocomplete

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
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_FilterStorage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setLoading: setLoading,
      setPosts: setStorages,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
              lineNumber: 111,
              columnNumber: 13
            }, _this), " " + "/" + " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/storage",
              children: "\u0421\u043A\u043B\u0430\u0434\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 66
            }, _this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "gray_font",
              children: " " + "Склады в Алматы"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this), storages === [] ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
          total: total,
          storages: storages,
          maxPage: maxPage,
          onChangePage: onChangePage,
          currentPage: currentPage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Storage, "g1/0hVfoeBVdYjYM+5CuFXrtFCE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RvcmFnZXMiLCJzZXRTdG9yYWdlcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwibWF4UGFnZSIsInNldE1heFBhZ2UiLCJtaW5BcmVhIiwic2V0TWluQXJlYSIsIm1heEFyZWEiLCJzZXRNYXhBcmVhIiwiY2l0eVJlZ2lvblJlZiIsInVzZVJlZiIsImxvYWRNYXAiLCJzZXRMb2FkTWFwIiwibmFtZSIsImNpdHlSZWdpb24iLCJzZXRDaXR5UmVnaW9uIiwibG9hZE1hcFNjcmlwdCIsInNldExvYWRNYXBTY3JpcHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFsbCIsIm1heF9wYWdlIiwiY3VycmVudF9wYWdlIiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJwbGFjZV9pZCIsIm9uRmlsdGVyTW9iaWxlIiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwicHVzaCIsIk9iamVjdCIs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QUFZLEVBQUVtRCxZQUFoRjtBQUE4RixxQkFBVyxFQUFFekQsV0FBM0c7QUFBd0gsaUJBQU8sRUFBRUo7QUFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFTQSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBZ0NJLHFFQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQSxrQkFERjtBQTJDRCxDQXZIRDs7R0FBTVAsTztVQUVZRSxxRDs7O0tBRlpGLE87QUF5SFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2UuYWMzYjNkOTEzNzhmOWZhZWRhMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlclN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN0b3JhZ2VJdGVtcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUl0ZW1zJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFN0b3JhZ2VDYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdG9yYWdlL1N0b3JhZ2VDYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuXHJcbmNvbnN0IFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3N0b3JhZ2VzLCBzZXRTdG9yYWdlc10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbbW9iaWxlRmlsdGVyLHNldEZpbHRlck1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttaW5BcmVhLCBzZXRNaW5BcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttYXhBcmVhLCBzZXRNYXhBcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGNpdHlSZWdpb25SZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbbG9hZE1hcCwgc2V0TG9hZE1hcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY2l0eVJlZ2lvbiwgc2V0Q2l0eVJlZ2lvbl0gPSB1c2VTdGF0ZSh7aWQ6ICcnLCBuYW1lOiAnJ30pXHJcbiAgY29uc3QgW2xvYWRNYXBTY3JpcHQsIHNldExvYWRNYXBTY3JpcHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIFxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxTdG9yYWdlP3BhZ2U9JHtwYWdlfWApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldFN0b3JhZ2VzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuYWxsKVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gICAgICBsb2FkR29vZ2xlTWFwU2NyaXB0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2FkTWFwKHRydWUpLCgpID0+IGluaXRQbGFjZUFQSSgpXHJcbiAgICAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgIC8vIGluaXRpYWxpemUgdGhlIGdvb2dsZSBwbGFjZSBhdXRvY29tcGxldGVcclxuICAgY29uc3QgaW5pdFBsYWNlQVBJID0gKCkgPT4ge1xyXG4gICAgbGV0IGF1dG9jb21wbGV0ZSA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShjaXR5UmVnaW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgdHlwZXM6IFtcIihjaXRpZXMpXCJdLCBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogW1wia3pcIiwgXCJydVwiXSB9IH0pO1xyXG4gICAgbmV3IHdpbmRvdy5nb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihhdXRvY29tcGxldGUsIFwicGxhY2VfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG4gICAgICBzZXRDaXR5UmVnaW9uKHtcclxuICAgICAgICBhZGRyZXNzOiBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICBpZDogcGxhY2UucGxhY2VfaWRcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbHRlck1vYmlsZSA9ICgpID0+IHtcclxuICAgIGlmKCFtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH1cclxuICAgIGlmKG1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbFN0b3JhZ2U/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvc3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0U3RvcmFnZXMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5hbGwpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRTdG9yYWdlc31cclxuICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZVwiPlxyXG4gICAgICAgIDxoND48YSBocmVmPVwiL1wiIGNsYXNzTmFtZT0nJz7Qk9C70LDQstC90LDRjzwvYT57XCIgXCIgKyBcIi9cIiArIFwiIFwifTxhIGhyZWY9Jy9zdG9yYWdlJyA+0KHQutC70LDQtNGLIDwvYT4vPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2dyYXlfZm9udCc+e1wiIFwiICsgXCLQodC60LvQsNC00Ysg0LIg0JDQu9C80LDRgtGLXCJ9PC9hPjwvaDQ+XHJcbiAgICAgICAgICA8aDE+0KHQutC70LDQtNGLINC4INGB0LrQu9Cw0LTRgdC60LjQtSDQv9C+0LzQtdGJ0LXQvdC40Y8g0LIg0JDQu9C80LDRgtGLPC9oMT5cclxuICAgICAgICAgIDxoMz7QndCw0LnQtNC10L3QviB7dG90YWx9INC+0LHRitGP0LLQu9C10L3QuNC5PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAge3N0b3JhZ2VzID09PSBbXSA/ICcnIDogIDxTdG9yYWdlSXRlbXMgdG90YWw9e3RvdGFsfSBzdG9yYWdlcz17c3RvcmFnZXN9IG1heFBhZ2U9e21heFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9Lz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICAgPFN0b3JhZ2VDYWwgLz5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHsvKiA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD17cHJvY2Vzcy5lbnYuUFJPRF9VUkwvcGF0aE5hbWV9PlxyXG4gIHtzaGFyZUNvdW50ID0+IDxzcGFuIGNsYXNzTmFtZT1cIm15U2hhcmVDb3VudFdyYXBwZXJcIj57c2hhcmVDb3VudH08L3NwYW4+fVxyXG48L0ZhY2Vib29rU2hhcmVDb3VudD4gKi99XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=