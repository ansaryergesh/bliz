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
      console.log(router.query);
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
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
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
              lineNumber: 112,
              columnNumber: 13
            }, _this), " " + "/" + " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/storage",
              children: "\u0421\u043A\u043B\u0430\u0434\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 66
            }, _this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "gray_font",
              children: " " + "Склады в Алматы"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
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
          lineNumber: 116,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RvcmFnZXMiLCJzZXRTdG9yYWdlcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwibWF4UGFnZSIsInNldE1heFBhZ2UiLCJtaW5BcmVhIiwic2V0TWluQXJlYSIsIm1heEFyZWEiLCJzZXRNYXhBcmVhIiwiY2l0eVJlZ2lvblJlZiIsInVzZVJlZiIsImxvYWRNYXAiLCJzZXRMb2FkTWFwIiwibmFtZSIsImNpdHlSZWdpb24iLCJzZXRDaXR5UmVnaW9uIiwibG9hZE1hcFNjcmlwdCIsInNldExvYWRNYXBTY3JpcHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFsbCIsIm1heF9wYWdlIiwiY3VycmVudF9wYWdlIiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJwbGFjZV9pZCIsIm9uRmlsdGVyTW9iaWxlIiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwicHVzaCIsImNvbnNvbGUi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S0FBckI7QUFBNEIsa0JBQVEsRUFBRU4sUUFBdEM7QUFBZ0QsaUJBQU8sRUFBRVEsT0FBekQ7QUFBa0Usc0JBQVksRUFBRW1ELFlBQWhGO0FBQThGLHFCQUFXLEVBQUV6RCxXQUEzRztBQUF3SCxpQkFBTyxFQUFFSjtBQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVNBLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkYsZUFnQ0kscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDSjtBQUFBLGtCQURGO0FBMkNELENBeEhEOztHQUFNUCxPO1VBRVlFLHFEOzs7S0FGWkYsTztBQTBIU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcmFnZS44NDk1OTU4YzAzNmVhMGE5MmQ2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvRmlsdGVyU3RvcmFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU3RvcmFnZUl0ZW1zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RvcmFnZS9TdG9yYWdlSXRlbXMnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU3RvcmFnZUNhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUNhbGN1bGF0b3InO1xyXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwU2NyaXB0IH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHMnO1xyXG5pbXBvcnQgU2lkZUJhckN1cnJlbmN5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9TaWRlQmFyQ3VycmVuY3knO1xyXG5cclxuY29uc3QgU3RvcmFnZSA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCByb3V0ZXIgID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc3RvcmFnZXMsIHNldFN0b3JhZ2VzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWF4UGFnZSxzZXRNYXhQYWdlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21pbkFyZWEsIHNldE1pbkFyZWFdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21heEFyZWEsIHNldE1heEFyZWFdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgY2l0eVJlZ2lvblJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFtsb2FkTWFwLCBzZXRMb2FkTWFwXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjaXR5UmVnaW9uLCBzZXRDaXR5UmVnaW9uXSA9IHVzZVN0YXRlKHtpZDogJycsIG5hbWU6ICcnfSlcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbFN0b3JhZ2U/cGFnZT0ke3BhZ2V9YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0U3RvcmFnZXMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5hbGwpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRNYXAodHJ1ZSksKCkgPT4gaW5pdFBsYWNlQVBJKClcclxuICAgICAgfSlcclxuICB9LFtdKVxyXG5cclxuICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ29vZ2xlIHBsYWNlIGF1dG9jb21wbGV0ZVxyXG4gICBjb25zdCBpbml0UGxhY2VBUEkgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV0b2NvbXBsZXRlID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGNpdHlSZWdpb25SZWYuY3VycmVudCxcclxuICAgICAgeyB0eXBlczogW1wiKGNpdGllcylcIl0sIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBbXCJrelwiLCBcInJ1XCJdIH0gfSk7XHJcbiAgICBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgXCJwbGFjZV9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBsYWNlID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcbiAgICAgIHNldENpdHlSZWdpb24oe1xyXG4gICAgICAgIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgIGlkOiBwbGFjZS5wbGFjZV9pZFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgaWYoIW1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgfVxyXG4gICAgaWYobW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0naW5oZXJpdCdcclxuICAgIH1cclxuICAgIHNldEZpbHRlck1vYmlsZSghbW9iaWxlRmlsdGVyKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlID0gKHBhZ2VOdW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsU3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zdG9yYWdlP3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRTdG9yYWdlcyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmFsbClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkR29vZ2xlTWFwU2NyaXB0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZE1hcFNjcmlwdCh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyX2ljb24nPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25GaWx0ZXJNb2JpbGUoKX0+ICAgXHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zbGlkZXJzLWggXCI+PC9pPlxyXG4gICAgIFxyXG4gICAgICAgICAgPHA+0KTQuNC70YzRgtGAIHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCE9PTAgJiYgYCgke09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RofSlgfSA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IWxvYWRNYXBTY3JpcHQgPyA8ZGl2PtCX0LDQs9GA0YPQt9C60LAuLi48L2Rpdj4gOlxyXG4gICAgICAgPEZpbHRlciBcclxuICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XHJcbiAgICAgICBzZXRQb3N0cz17c2V0U3RvcmFnZXN9XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICBzZXRUb3RhbD17c2V0VG90YWx9XHJcbiAgICAgICBzZXRNYXhQYWdlPXtzZXRNYXhQYWdlfVxyXG4gICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICAvLyBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgLz5cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNfX2NvbnRhaW5lciBjb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICA8aDQ+PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9Jyc+0JPQu9Cw0LLQvdCw0Y88L2E+e1wiIFwiICsgXCIvXCIgKyBcIiBcIn08YSBocmVmPScvc3RvcmFnZScgPtCh0LrQu9Cw0LTRiyA8L2E+LzxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdncmF5X2ZvbnQnPntcIiBcIiArIFwi0KHQutC70LDQtNGLINCyINCQ0LvQvNCw0YLRi1wifTwvYT48L2g0PlxyXG4gICAgICAgICAgPGgxPtCh0LrQu9Cw0LTRiyDQuCDRgdC60LvQsNC00YHQutC40LUg0L/QvtC80LXRidC10L3QuNGPINCyINCQ0LvQvNCw0YLRizwvaDE+XHJcbiAgICAgICAgICA8aDM+0J3QsNC50LTQtdC90L4ge3RvdGFsfSDQvtCx0YrRj9Cy0LvQtdC90LjQuTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdG9yYWdlcyA9PT0gW10gPyAnJyA6ICA8U3RvcmFnZUl0ZW1zIHRvdGFsPXt0b3RhbH0gc3RvcmFnZXM9e3N0b3JhZ2VzfSBtYXhQYWdlPXttYXhQYWdlfSBvbkNoYW5nZVBhZ2U9e29uQ2hhbmdlUGFnZX0gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfS8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNpZGVCYXJDdXJyZW5jeSAvPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgICAgIDxTdG9yYWdlQ2FsIC8+XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICB7LyogPEZhY2Vib29rU2hhcmVDb3VudCB1cmw9e3Byb2Nlc3MuZW52LlBST0RfVVJML3BhdGhOYW1lfT5cclxuICB7c2hhcmVDb3VudCA9PiA8c3BhbiBjbGFzc05hbWU9XCJteVNoYXJlQ291bnRXcmFwcGVyXCI+e3NoYXJlQ291bnR9PC9zcGFuPn1cclxuPC9GYWNlYm9va1NoYXJlQ291bnQ+ICovfVxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiXSwic291cmNlUm9vdCI6IiJ9