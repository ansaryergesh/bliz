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
  var from_string = router.query.from_string;

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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, []); // initialize the google place autocomplete

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
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
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
              lineNumber: 101,
              columnNumber: 13
            }, _this), " " + "/" + " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/storage",
              children: "\u0421\u043A\u043B\u0430\u0434\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 66
            }, _this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "gray_font",
              children: " " + "Склады в Алматы"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F ", from_string && 'в' + " " + from_string]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 105,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJmcm9tX3N0cmluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdG9yYWdlcyIsInNldFN0b3JhZ2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsIm1pbkFyZWEiLCJzZXRNaW5BcmVhIiwibWF4QXJlYSIsInNldE1heEFyZWEiLCJjaXR5UmVnaW9uUmVmIiwidXNlUmVmIiwibG9hZE1hcCIsInNldExvYWRNYXAiLCJuYW1lIiwiY2l0eVJlZ2lvbiIsInNldENpdHlSZWdpb24iLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsInVzZUVmZmVjdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJwbGFjZV9pZCIsIm9uRmlsdGVyTW9iaWxlIiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsInB1c2giLCJkYXRhIiwiYWxsIiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJsb2FkR29vZ2xlTWFwU2Ny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OWY5YTU2OWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXJTdG9yYWdlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTdG9yYWdlSXRlbXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdG9yYWdlL1N0b3JhZ2VJdGVtcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBTdG9yYWdlQ2FsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RvcmFnZS9TdG9yYWdlQ2FsY3VsYXRvcic7XHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0cyc7XHJcbmltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeSc7XHJcblxyXG5jb25zdCBTdG9yYWdlID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc3RvcmFnZXMsIHNldFN0b3JhZ2VzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWF4UGFnZSxzZXRNYXhQYWdlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21pbkFyZWEsIHNldE1pbkFyZWFdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21heEFyZWEsIHNldE1heEFyZWFdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgY2l0eVJlZ2lvblJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFtsb2FkTWFwLCBzZXRMb2FkTWFwXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjaXR5UmVnaW9uLCBzZXRDaXR5UmVnaW9uXSA9IHVzZVN0YXRlKHtpZDogJycsIG5hbWU6ICcnfSlcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcbiAgICBcclxuICB9LFtdKVxyXG5cclxuICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ29vZ2xlIHBsYWNlIGF1dG9jb21wbGV0ZVxyXG4gICBjb25zdCBpbml0UGxhY2VBUEkgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV0b2NvbXBsZXRlID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGNpdHlSZWdpb25SZWYuY3VycmVudCxcclxuICAgICAgeyB0eXBlczogW1wiKGNpdGllcylcIl0sIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBbXCJrelwiLCBcInJ1XCJdIH0gfSk7XHJcbiAgICBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgXCJwbGFjZV9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBsYWNlID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcbiAgICAgIHNldENpdHlSZWdpb24oe1xyXG4gICAgICAgIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgIGlkOiBwbGFjZS5wbGFjZV9pZFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgaWYoIW1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgfVxyXG4gICAgaWYobW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0naW5oZXJpdCdcclxuICAgIH1cclxuICAgIHNldEZpbHRlck1vYmlsZSghbW9iaWxlRmlsdGVyKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlID0gKHBhZ2VOdW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsU3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zdG9yYWdlP3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRTdG9yYWdlcyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmFsbClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkR29vZ2xlTWFwU2NyaXB0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZE1hcFNjcmlwdCh0cnVlKVxyXG4gICAgfSlcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9kaXY+IDpcclxuICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgc2V0UG9zdHM9e3NldFN0b3JhZ2VzfVxyXG4gICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgIC8+XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgPGg0PjxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPScnPtCT0LvQsNCy0L3QsNGPPC9hPntcIiBcIiArIFwiL1wiICsgXCIgXCJ9PGEgaHJlZj0nL3N0b3JhZ2UnID7QodC60LvQsNC00YsgPC9hPi88YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nZ3JheV9mb250Jz57XCIgXCIgKyBcItCh0LrQu9Cw0LTRiyDQsiDQkNC70LzQsNGC0YtcIn08L2E+PC9oND5cclxuICAgICAgICAgIDxoMT7QodC60LvQsNC00Ysg0Lgg0YHQutC70LDQtNGB0LrQuNC1INC/0L7QvNC10YnQtdC90LjRjyB7ZnJvbV9zdHJpbmcgJiYgJ9CyJyArIFwiIFwiICsgZnJvbV9zdHJpbmd9PC9oMT5cclxuICAgICAgICAgIDxoMz7QndCw0LnQtNC10L3QviB7dG90YWx9INC+0LHRitGP0LLQu9C10L3QuNC5PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAge3N0b3JhZ2VzID09PSBbXSA/ICcnIDogIDxTdG9yYWdlSXRlbXMgdG90YWw9e3RvdGFsfSBzdG9yYWdlcz17c3RvcmFnZXN9IG1heFBhZ2U9e21heFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9Lz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICAgPFN0b3JhZ2VDYWwgLz5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHsvKiA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD17cHJvY2Vzcy5lbnYuUFJPRF9VUkwvcGF0aE5hbWV9PlxyXG4gIHtzaGFyZUNvdW50ID0+IDxzcGFuIGNsYXNzTmFtZT1cIm15U2hhcmVDb3VudFdyYXBwZXJcIj57c2hhcmVDb3VudH08L3NwYW4+fVxyXG48L0ZhY2Vib29rU2hhcmVDb3VudD4gKi99XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=