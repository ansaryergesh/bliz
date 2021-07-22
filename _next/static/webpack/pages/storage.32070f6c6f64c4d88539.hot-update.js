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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var page = router.query.page;
  var from_string = router.query.from_string;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    place_id: currentPlace_id,
    formatted_address: currentPlace_name
  }),
      geoLoc = _useState2[0],
      setGeoLoc = _useState2[1];

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
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
          from_string: from_string,
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

_s(Storage, "oCBt4117jnE7EgpxUM9aBCdk5DA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwiY3VycmVudFBsYWNlX2lkIiwiY29va2llIiwiZ2V0IiwidW5kZWZpbmVkIiwiY3VycmVudFBsYWNlX25hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGFnZSIsImZyb21fc3RyaW5nIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYWNlX2lkIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9Mb2MiLCJzZXRHZW9Mb2MiLCJzdG9yYWdlcyIsInNldFN0b3JhZ2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsIm1pbkFyZWEiLCJzZXRNaW5BcmVhIiwibWF4QXJlYSIsInNldE1heEFyZWEiLCJjaXR5UmVnaW9uUmVmIiwidXNlUmVmIiwibG9hZE1hcCIsInNldExvYWRNYXAiLCJuYW1lIiwiY2l0eVJlZ2lvbiIsInNldENpdHlSZWdpb24iLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsImluaXRQbGFjZUFQSSIsImF1dG9jb21wbGV0ZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJwbGFjZXMiLCJBdXRvY29tcGxldGUiLCJjdXJyZW50IiwidHlwZXMiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJhZGRyZXNzIiwib25GaWx0ZXJNb2JpbGUiLCJzY3JlZW4iLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwicHVzaCIsImRhdGEiLCJhbGwiLCJtYXhfcGFnZSIsImN1cnJlbnRfcGFnZSIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxlQUFlLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLE1BQTJCQyxTQUEzQixHQUF1Q0YsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsQ0FBdkMsR0FBZ0UsRUFBeEY7QUFDQSxNQUFNRSxpQkFBaUIsR0FBR0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLE1BQW9DQyxTQUFwQyxHQUFnREYsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLENBQWhELEdBQWtGLEVBQTVHO0FBQ0EsTUFBTUcsTUFBTSxHQUFJQyw2REFBUyxFQUF6QjtBQUhvQixNQUliQyxFQUphLEdBSVBGLE1BQU0sQ0FBQ0csS0FKQSxDQUliRCxFQUphO0FBQUEsTUFLYkUsSUFMYSxHQUtMSixNQUFNLENBQUNHLEtBTEYsQ0FLYkMsSUFMYTtBQUFBLE1BTWJDLFdBTmEsR0FNRUwsTUFBTSxDQUFDRyxLQU5ULENBTWJFLFdBTmE7O0FBQUEsa0JBT1VDLHNEQUFRLENBQUMsSUFBRCxDQVBsQjtBQUFBLE1BT2JDLE9BUGE7QUFBQSxNQU9KQyxVQVBJOztBQUFBLG1CQVFRRixzREFBUSxDQUFDO0FBQUNHLFlBQVEsRUFBRWQsZUFBWDtBQUE0QmUscUJBQWlCLEVBQUVYO0FBQS9DLEdBQUQsQ0FSaEI7QUFBQSxNQVFiWSxNQVJhO0FBQUEsTUFRTEMsU0FSSzs7QUFBQSxtQkFTWU4sc0RBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQVRwQjtBQUFBLE1BU2JPLFFB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QWtCLEVBQWxCLGdCQUF3QixxRUFBQyx3RUFBRDtBQUFjLHFCQUFXLEVBQUVSLFdBQTNCO0FBQXdDLGVBQUssRUFBRWMsS0FBL0M7QUFBc0Qsa0JBQVEsRUFBRU4sUUFBaEU7QUFBMEUsaUJBQU8sRUFBRVEsT0FBbkY7QUFBNEYsc0JBQVksRUFBRXNDLFlBQTFHO0FBQXdILHFCQUFXLEVBQUU1QyxXQUFySTtBQUFrSixpQkFBTyxFQUFFUjtBQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVNBLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkYsZUFrQ0kscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDSjtBQUFBLGtCQURGO0FBNkNELENBN0dEOztHQUFNYixPO1VBR1lPLHFEOzs7S0FIWlAsTztBQStHU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcmFnZS4zMjA3MGY2YzZmNjRjNGQ4ODUzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvRmlsdGVyU3RvcmFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU3RvcmFnZUl0ZW1zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RvcmFnZS9TdG9yYWdlSXRlbXMnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU3RvcmFnZUNhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUNhbGN1bGF0b3InO1xyXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwU2NyaXB0IH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHMnO1xyXG5pbXBvcnQgU2lkZUJhckN1cnJlbmN5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9TaWRlQmFyQ3VycmVuY3knO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgU3RvcmFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfaWQgPSBjb29raWUuZ2V0KCdwbGFjZV9pZCcpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdwbGFjZV9pZCcpIDogXCJcIjtcclxuICBjb25zdCBjdXJyZW50UGxhY2VfbmFtZSA9IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ2Zvcm1hdHRlZF9hZGRyZXNzJykgOiBcIlwiO1xyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZ2VvTG9jLCBzZXRHZW9Mb2NdID0gdXNlU3RhdGUoe3BsYWNlX2lkOiBjdXJyZW50UGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBjdXJyZW50UGxhY2VfbmFtZX0pXHJcbiAgY29uc3QgW3N0b3JhZ2VzLCBzZXRTdG9yYWdlc10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbbW9iaWxlRmlsdGVyLHNldEZpbHRlck1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttaW5BcmVhLCBzZXRNaW5BcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttYXhBcmVhLCBzZXRNYXhBcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGNpdHlSZWdpb25SZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbbG9hZE1hcCwgc2V0TG9hZE1hcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY2l0eVJlZ2lvbiwgc2V0Q2l0eVJlZ2lvbl0gPSB1c2VTdGF0ZSh7aWQ6ICcnLCBuYW1lOiAnJ30pXHJcbiAgY29uc3QgW2xvYWRNYXBTY3JpcHQsIHNldExvYWRNYXBTY3JpcHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ29vZ2xlIHBsYWNlIGF1dG9jb21wbGV0ZVxyXG4gICBjb25zdCBpbml0UGxhY2VBUEkgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV0b2NvbXBsZXRlID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGNpdHlSZWdpb25SZWYuY3VycmVudCxcclxuICAgICAgeyB0eXBlczogW1wiKGNpdGllcylcIl0sIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBbXCJrelwiLCBcInJ1XCJdIH0gfSk7XHJcbiAgICBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgXCJwbGFjZV9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBsYWNlID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcbiAgICAgIHNldENpdHlSZWdpb24oe1xyXG4gICAgICAgIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgIGlkOiBwbGFjZS5wbGFjZV9pZFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgaWYoIW1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgfVxyXG4gICAgaWYobW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0naW5oZXJpdCdcclxuICAgIH1cclxuICAgIHNldEZpbHRlck1vYmlsZSghbW9iaWxlRmlsdGVyKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlID0gKHBhZ2VOdW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsU3RvcmFnZT9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zdG9yYWdlP3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRTdG9yYWdlcyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmFsbClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkR29vZ2xlTWFwU2NyaXB0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZE1hcFNjcmlwdCh0cnVlKVxyXG4gICAgfSlcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9kaXY+IDpcclxuICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgc2V0UG9zdHM9e3NldFN0b3JhZ2VzfVxyXG4gICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgY3VycmVudFBsYWNlX2lkPXtnZW9Mb2MucGxhY2VfaWR9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfbmFtZT17Z2VvTG9jLmZvcm1hdHRlZF9hZGRyZXNzfVxyXG4gICAgICAgLy8gb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgIC8+XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RpdGxlXCI+XHJcbiAgICAgICAgPGg0PjxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPScnPtCT0LvQsNCy0L3QsNGPPC9hPntcIiBcIiArIFwiL1wiICsgXCIgXCJ9PGEgaHJlZj0nL3N0b3JhZ2UnID7QodC60LvQsNC00YsgPC9hPi88YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nZ3JheV9mb250Jz57XCIgXCIgKyBcItCh0LrQu9Cw0LTRiyDQsiDQkNC70LzQsNGC0YtcIn08L2E+PC9oND5cclxuICAgICAgICAgIDxoMT7QodC60LvQsNC00Ysg0Lgg0YHQutC70LDQtNGB0LrQuNC1INC/0L7QvNC10YnQtdC90LjRjyB7ZnJvbV9zdHJpbmcgJiYgJ9CyJyArIFwiIFwiICsgZnJvbV9zdHJpbmd9PC9oMT5cclxuICAgICAgICAgIDxoMz7QndCw0LnQtNC10L3QviB7dG90YWx9INC+0LHRitGP0LLQu9C10L3QuNC5PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAge3N0b3JhZ2VzID09PSBbXSA/ICcnIDogIDxTdG9yYWdlSXRlbXMgZnJvbV9zdHJpbmc9e2Zyb21fc3RyaW5nfSB0b3RhbD17dG90YWx9IHN0b3JhZ2VzPXtzdG9yYWdlc30gbWF4UGFnZT17bWF4UGFnZX0gb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gbG9hZGluZz17bG9hZGluZ30vPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgICA8L2Rpdj5cclxuICAgICAgICA8U3RvcmFnZUNhbCAvPlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgey8qIDxGYWNlYm9va1NoYXJlQ291bnQgdXJsPXtwcm9jZXNzLmVudi5QUk9EX1VSTC9wYXRoTmFtZX0+XHJcbiAge3NoYXJlQ291bnQgPT4gPHNwYW4gY2xhc3NOYW1lPVwibXlTaGFyZUNvdW50V3JhcHBlclwiPntzaGFyZUNvdW50fTwvc3Bhbj59XHJcbjwvRmFjZWJvb2tTaGFyZUNvdW50PiAqL31cclxuICAgIDwvPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==