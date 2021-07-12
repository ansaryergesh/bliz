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
      setLoadMapScript = _useState11[1]; // initialize the google place autocomplete


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
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
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
              lineNumber: 97,
              columnNumber: 13
            }, _this), " " + "/" + " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/storage",
              children: "\u0421\u043A\u043B\u0430\u0434\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 66
            }, _this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "gray_font",
              children: " " + "Склады в Алматы"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F ", from_string && 'в' + " " + from_string]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
          lineNumber: 101,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_storage_StorageCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Storage, "i2xenErAjNDjqxFLUKyiwETExb4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJmcm9tX3N0cmluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdG9yYWdlcyIsInNldFN0b3JhZ2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsIm1pbkFyZWEiLCJzZXRNaW5BcmVhIiwibWF4QXJlYSIsInNldE1heEFyZWEiLCJjaXR5UmVnaW9uUmVmIiwidXNlUmVmIiwibG9hZE1hcCIsInNldExvYWRNYXAiLCJuYW1lIiwiY2l0eVJlZ2lvbiIsInNldENpdHlSZWdpb24iLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJwbGFjZV9pZCIsIm9uRmlsdGVyTW9iaWxlIiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsInB1c2giLCJkYXRhIiwiYWxsIiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJ1c2VFZmZlY3QiLCJsb2FkR29vZ2xlTWFwU2Ny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QXlEO0FBQUcsa0JBQUksRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF6RCxvQkFBeUY7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSx1QkFBUyxFQUFDLFdBQXRCO0FBQUEsd0JBQW1DLE1BQU07QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUU7QUFBQSxxTEFBa0M3QyxXQUFXLElBQUksTUFBTSxHQUFOLEdBQVlBLFdBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsc0VBQWFVLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU1DTixRQUFRLEtBQUssRUFBYixHQUFrQixFQUFsQixnQkFBd0IscUVBQUMsd0VBQUQ7QUFBYyxlQUFLLEVBQUVNLEtBQXJCO0FBQTRCLGtCQUFRLEVBQUVOLFFBQXRDO0FBQWdELGlCQUFPLEVBQUVRLE9BQXpEO0FBQWtFLHNCQUFZLEVBQUV3QyxZQUFoRjtBQUE4RixxQkFBVyxFQUFFOUMsV0FBM0c7QUFBd0gsaUJBQU8sRUFBRUo7QUFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFTQSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBZ0NJLHFFQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQSxrQkFERjtBQTJDRCxDQXpHRDs7R0FBTVIsTztVQUVZRSxxRDs7O0tBRlpGLE87QUEyR1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2UuY2YxNGMyZDA4Zjg3NDY3ZDkyMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlclN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN0b3JhZ2VJdGVtcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUl0ZW1zJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFN0b3JhZ2VDYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdG9yYWdlL1N0b3JhZ2VDYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuXHJcbmNvbnN0IFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzdG9yYWdlcywgc2V0U3RvcmFnZXNdID0gdXNlU3RhdGUoW3t9XSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWluQXJlYSwgc2V0TWluQXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWF4QXJlYSwgc2V0TWF4QXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBjaXR5UmVnaW9uUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2xvYWRNYXAsIHNldExvYWRNYXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NpdHlSZWdpb24sIHNldENpdHlSZWdpb25dID0gdXNlU3RhdGUoe2lkOiAnJywgbmFtZTogJyd9KVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgIC8vIGluaXRpYWxpemUgdGhlIGdvb2dsZSBwbGFjZSBhdXRvY29tcGxldGVcclxuICAgY29uc3QgaW5pdFBsYWNlQVBJID0gKCkgPT4ge1xyXG4gICAgbGV0IGF1dG9jb21wbGV0ZSA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShjaXR5UmVnaW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgIHsgdHlwZXM6IFtcIihjaXRpZXMpXCJdLCBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogW1wia3pcIiwgXCJydVwiXSB9IH0pO1xyXG4gICAgbmV3IHdpbmRvdy5nb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihhdXRvY29tcGxldGUsIFwicGxhY2VfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG4gICAgICBzZXRDaXR5UmVnaW9uKHtcclxuICAgICAgICBhZGRyZXNzOiBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICBpZDogcGxhY2UucGxhY2VfaWRcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbHRlck1vYmlsZSA9ICgpID0+IHtcclxuICAgIGlmKCFtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH1cclxuICAgIGlmKG1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbFN0b3JhZ2U/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvc3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0U3RvcmFnZXMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5hbGwpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+0JfQsNCz0YDRg9C30LrQsC4uLjwvZGl2PiA6XHJcbiAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgIHNldFBvc3RzPXtzZXRTdG9yYWdlc31cclxuICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190aXRsZVwiPlxyXG4gICAgICAgIDxoND48YSBocmVmPVwiL1wiIGNsYXNzTmFtZT0nJz7Qk9C70LDQstC90LDRjzwvYT57XCIgXCIgKyBcIi9cIiArIFwiIFwifTxhIGhyZWY9Jy9zdG9yYWdlJyA+0KHQutC70LDQtNGLIDwvYT4vPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2dyYXlfZm9udCc+e1wiIFwiICsgXCLQodC60LvQsNC00Ysg0LIg0JDQu9C80LDRgtGLXCJ9PC9hPjwvaDQ+XHJcbiAgICAgICAgICA8aDE+0KHQutC70LDQtNGLINC4INGB0LrQu9Cw0LTRgdC60LjQtSDQv9C+0LzQtdGJ0LXQvdC40Y8ge2Zyb21fc3RyaW5nICYmICfQsicgKyBcIiBcIiArIGZyb21fc3RyaW5nfTwvaDE+XHJcbiAgICAgICAgICA8aDM+0J3QsNC50LTQtdC90L4ge3RvdGFsfSDQvtCx0YrRj9Cy0LvQtdC90LjQuTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdG9yYWdlcyA9PT0gW10gPyAnJyA6ICA8U3RvcmFnZUl0ZW1zIHRvdGFsPXt0b3RhbH0gc3RvcmFnZXM9e3N0b3JhZ2VzfSBtYXhQYWdlPXttYXhQYWdlfSBvbkNoYW5nZVBhZ2U9e29uQ2hhbmdlUGFnZX0gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfS8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNpZGVCYXJDdXJyZW5jeSAvPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgICAgIDxTdG9yYWdlQ2FsIC8+XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICB7LyogPEZhY2Vib29rU2hhcmVDb3VudCB1cmw9e3Byb2Nlc3MuZW52LlBST0RfVVJML3BhdGhOYW1lfT5cclxuICB7c2hhcmVDb3VudCA9PiA8c3BhbiBjbGFzc05hbWU9XCJteVNoYXJlQ291bnRXcmFwcGVyXCI+e3NoYXJlQ291bnR9PC9zcGFuPn1cclxuPC9GYWNlYm9va1NoYXJlQ291bnQ+ICovfVxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiXSwic291cmNlUm9vdCI6IiJ9