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
            children: ["\u0421\u043A\u043B\u0430\u0434\u044B \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F ", from_string && 'в' + from_string]
          }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdG9yYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhZ2UiLCJmcm9tX3N0cmluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdG9yYWdlcyIsInNldFN0b3JhZ2VzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsIm1pbkFyZWEiLCJzZXRNaW5BcmVhIiwibWF4QXJlYSIsInNldE1heEFyZWEiLCJjaXR5UmVnaW9uUmVmIiwidXNlUmVmIiwibG9hZE1hcCIsInNldExvYWRNYXAiLCJuYW1lIiwiY2l0eVJlZ2lvbiIsInNldENpdHlSZWdpb24iLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWxsIiwibWF4X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJsb2FkR29vZ2xlTWFwU2NyaXB0IiwiaW5pdFBsYWNlQVBJIiwiYXV0b2NvbXBsZXRlIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsInBsYWNlcyIsIkF1dG9jb21wbGV0ZSIsImN1cnJlbnQiLCJ0eXBlcyIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImNvdW50cnkiLCJldmVudCIsImFkZExpc3RlbmVyIiwicGxhY2UiLCJnZXRQbGFjZSIsImFkZHJlc3MiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInBsYWNlX2lkIiwib25GaWx0ZXJNb2JpbGUiLCJzY3JlZW4iLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVwQixNQUFNQyxNQUFNLEdBQUlDLDZEQUFTLEVBQXpCO0FBRm9CLE1BR2JDLEVBSGEsR0FHUEYsTUFBTSxDQUFDRyxLQUhBLENBR2JELEVBSGE7QUFBQSxNQUliRSxJQUphLEdBSUxKLE1BQU0sQ0FBQ0csS0FKRixDQUliQyxJQUphO0FBQUEsTUFLYkMsV0FMYSxHQUtFTCxNQUFNLENBQUNHLEtBTFQsQ0FLYkUsV0FMYTs7QUFBQSxrQkFNVUMsc0RBQVEsQ0FBQyxJQUFELENBTmxCO0FBQUEsTUFNYkMsT0FOYTtBQUFBLE1BTUpDLFVBTkk7O0FBQUEsbUJBT1lGLHNEQUFRLENBQUMsQ0FBQyxFQUFELENBQUQsQ0FQcEI7QUFBQSxNQU9iRyxRQVBhO0FBQUEsTUFPSEMsV0FQRzs7QUFBQSxtQkFRa0JKLHNEQUFRLENBQUMsQ0FBRCxDQVIxQjtBQUFBLE1BUWJLLFdBUmE7QUFBQSxNQVFBQyxjQVJBOztBQUFBLG1CQVNtQk4sc0RBQVEsQ0FBQyxLQUFELENBVDNCO0FBQUEsTUFTYk8sWUFUYTtBQUFBLE1BU0FDLGVBVEE7O0FBQUEsbUJBVU1SLHNEQUFRLENBQUMsQ0FBRCxDQVZkO0FBQUEsTUFVYlMsS0FWYTtBQUFBLE1BVU5DLFFBVk07O0FBQUEsbUJBV1NWLHNEQUFRLENBQUMsQ0FBRCxDQVhqQjtBQUFBLE1BV2JXLE9BWGE7QUFBQSxNQVdMQyxVQVhLOztBQUFBLG1CQVlVWixzREFBUSxDQUFDLEVBQUQsQ0FabEI7QUFBQSxNQVliYSxPQVphO0FBQUEsTUFZSkMsVUFaSTs7QUFBQSxtQkFhVWQsc0RBQVEsQ0FBQyxFQUFELENBYmxCO0FBQUEsTUFhYmUsT0FiYTtBQUFBLE1BYUpDLFVBYkk7O0FBY3BCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTVCOztBQWRvQixtQkFlVWxCLHNEQUFRLENBQUMsS0FBRCxDQWZsQjtBQUFBLE1BZWJtQixPQWZhO0FBQUEsTUFlSkMsVUFmSTs7QUFBQSxvQkFnQmdCcEIsc0RBQVEsQ0FBQztBQUFDSixNQUFFLEVBQUUsRUFBTDtBQUFTeUIsUUFBSSxFQUFFO0FBQWYsR0FBRCxDQWhCeEI7QUFBQSxNQWdCYkMsVUFoQmE7QUFBQSxNQWdCREMsYUFoQkM7O0FBQUEsb0JBaUJzQnZCLHNEQUFRLENBQUMsS0FBRCxDQWpCOUI7QUFBQSxNQWlCYndCLGFBakJhO0FBQUEsTUFpQkVDLGdCQWpCRjs7QUFtQnBCQyx5REFBUyxDQUFDLFlBQU07QUFFZHhCLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXlCLGdEQUFLLENBQUNDLEdBQU4sV0FBYUMsK0JBQWIsaUNBQXdEL0IsSUFBeEQsR0FDR2dDLElBREgsQ0FDUSxVQUFBQyxHQUFHLEVBQUc7QUFDVjdCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLGlCQUFXLENBQUMyQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFYO0FBQ0F0QixjQUFRLENBQUNxQixHQUFHLENBQUNDLElBQUosQ0FBU0MsR0FBVixDQUFSO0FBQ0FyQixnQkFBVSxDQUFDbUIsR0FBRyxDQUFDQyxJQUFKLENBQVNFLFFBQVYsQ0FBVjtBQUNBNUIsb0JBQWMsQ0FBQ3lCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRyxZQUFWLENBQWQ7QUFDRCxLQVBIO0FBUUVDLDJGQUFtQixDQUFDLFlBQU07QUFDeEJoQixnQkFBVSxDQUFDLElBQUQsQ0FBVixFQUFpQjtBQUFBLGVBQU1pQixZQUFZLEVBQWxCO0FBQUEsT0FBakI7QUFDRCxLQUZrQixDQUFuQjtBQUdILEdBZFEsRUFjUCxFQWRPLENBQVQsQ0FuQm9CLENBbUNuQjs7QUFDQSxNQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLFFBQUlDLFlBQVksR0FBRyxJQUFJQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsTUFBbkIsQ0FBMEJDLFlBQTlCLENBQTJDMUIsYUFBYSxDQUFDMkIsT0FBekQsRUFDakI7QUFBRUMsV0FBSyxFQUFFLENBQUMsVUFBRCxDQUFUO0FBQXVCQywyQkFBcUIsRUFBRTtBQUFFQyxlQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUDtBQUFYO0FBQTlDLEtBRGlCLENBQW5CO0FBRUEsUUFBSVIsTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJPLEtBQW5CLENBQXlCQyxXQUE3QixDQUF5Q1gsWUFBekMsRUFBdUQsZUFBdkQsRUFBd0UsWUFBWTtBQUNsRixVQUFJWSxLQUFLLEdBQUdaLFlBQVksQ0FBQ2EsUUFBYixFQUFaO0FBQ0E1QixtQkFBYSxDQUFDO0FBQ1o2QixlQUFPLEVBQUVGLEtBQUssQ0FBQ0csaUJBREg7QUFFWnpELFVBQUUsRUFBRXNELEtBQUssQ0FBQ0k7QUFGRSxPQUFELENBQWI7QUFJRCxLQU5EO0FBT0QsR0FWQTs7QUFZRCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBRyxDQUFDaEQsWUFBRCxJQUFpQmdDLE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBY0MsS0FBZCxJQUFzQixHQUExQyxFQUErQztBQUM3Q0MsY0FBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBcUQsTUFBckQ7QUFDRDs7QUFDRCxRQUFHdEQsWUFBWSxJQUFJZ0MsTUFBTSxDQUFDaUIsTUFBUCxDQUFjQyxLQUFkLElBQXNCLEdBQXpDLEVBQThDO0FBQzVDQyxjQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNDLEtBQXZDLENBQTZDQyxPQUE3QyxHQUFxRCxTQUFyRDtBQUNEOztBQUNEckQsbUJBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQWY7QUFDRCxHQVJEOztBQVVBLE1BQU11RCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQWE7QUFDaEM3RCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0F5QixnREFBSyxDQUFDQyxHQUFOLFdBQWFDLCtCQUFiLGlDQUF3RGtDLE9BQXhELEdBQ0dqQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZyQyxZQUFNLENBQUNzRSxJQUFQLHlCQUE2QkQsT0FBN0I7QUFDQTdELGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLGlCQUFXLENBQUMyQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFYO0FBQ0F0QixjQUFRLENBQUNxQixHQUFHLENBQUNDLElBQUosQ0FBU0MsR0FBVixDQUFSO0FBQ0FyQixnQkFBVSxDQUFDbUIsR0FBRyxDQUFDQyxJQUFKLENBQVNFLFFBQVYsQ0FBVjtBQUNBNUIsb0JBQWMsQ0FBQ3lCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRyxZQUFWLENBQWQ7QUFDRCxLQVJIO0FBU0QsR0FYRDs7QUFhQVQseURBQVMsQ0FBQyxZQUFNO0FBQ2RVLDJGQUFtQixDQUFDLFlBQU07QUFDeEJYLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRCxLQUZrQixDQUFuQjtBQUdBdkIsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBTFEsRUFLUCxFQUxPLENBQVQ7QUFNQSxzQkFDRTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFNcUQsY0FBYyxFQUFwQjtBQUFBLFNBQWQ7QUFBQSxnQ0FDRTtBQUFHLG1CQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFO0FBQUEsOERBQVdVLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeEUsTUFBTSxDQUFDRyxLQUFuQixFQUEwQnNFLE1BQTFCLEtBQW1DLENBQW5DLGVBQTRDRixNQUFNLENBQUNDLElBQVAsQ0FBWXhFLE1BQU0sQ0FBQ0csS0FBbkIsRUFBMEJzRSxNQUF0RSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFRRyxDQUFDM0MsYUFBRCxnQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBakIsZ0JBQ0EscUVBQUMsc0VBQUQ7QUFDQSxnQkFBVSxFQUFFdEIsVUFEWjtBQUVBLGNBQVEsRUFBRUUsV0FGVjtBQUdBLG9CQUFjLEVBQUVFLGNBSGhCO0FBSUEsY0FBUSxFQUFFSSxRQUpWO0FBS0EsZ0JBQVUsRUFBRUUsVUFMWjtBQU1BLGtCQUFZLEVBQUVMLFlBTmQ7QUFPQSxvQkFBYyxFQUFFZ0QsY0FQaEIsQ0FRQTs7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEgsZUFxQkU7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDQTtBQUFBLG9DQUFJO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQVksdUJBQVMsRUFBQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSixFQUF5QyxNQUFNLEdBQU4sR0FBWSxHQUFyRCxlQUF5RDtBQUFHLGtCQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBekQsb0JBQXlGO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQVksdUJBQVMsRUFBQyxXQUF0QjtBQUFBLHdCQUFtQyxNQUFNO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVFO0FBQUEscUxBQWtDeEQsV0FBVyxJQUFJLE1BQU1BLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsc0VBQWFVLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU1DTixRQUFRLEtBQUssRUFBYixHQUFrQixFQUFsQixnQkFBd0IscUVBQUMsd0VBQUQ7QUFBYyxlQUFLLEVBQUVNLEtBQXJCO0FBQTRCLGtCQUFRLEVBQUVOLFFBQXRDO0FBQWdELGlCQUFPLEVBQUVRLE9BQXpEO0FBQWtFLHNCQUFZLEVBQUVtRCxZQUFoRjtBQUE4RixxQkFBVyxFQUFFekQsV0FBM0c7QUFBd0gsaUJBQU8sRUFBRUo7QUFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFTQSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBZ0NJLHFFQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQSxrQkFERjtBQTJDRCxDQXhIRDs7R0FBTVIsTztVQUVZRSxxRDs7O0tBRlpGLE87QUEwSFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JhZ2UuNjA0MmMxY2I0NzY2YjdkNzAwMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlclN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN0b3JhZ2VJdGVtcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0b3JhZ2UvU3RvcmFnZUl0ZW1zJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFN0b3JhZ2VDYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdG9yYWdlL1N0b3JhZ2VDYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuXHJcbmNvbnN0IFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzdG9yYWdlcywgc2V0U3RvcmFnZXNdID0gdXNlU3RhdGUoW3t9XSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWluQXJlYSwgc2V0TWluQXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWF4QXJlYSwgc2V0TWF4QXJlYV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBjaXR5UmVnaW9uUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2xvYWRNYXAsIHNldExvYWRNYXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NpdHlSZWdpb24sIHNldENpdHlSZWdpb25dID0gdXNlU3RhdGUoe2lkOiAnJywgbmFtZTogJyd9KVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsU3RvcmFnZT9wYWdlPSR7cGFnZX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRTdG9yYWdlcyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmFsbClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICAgICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZE1hcCh0cnVlKSwoKSA9PiBpbml0UGxhY2VBUEkoKVxyXG4gICAgICB9KVxyXG4gIH0sW10pXHJcblxyXG4gICAvLyBpbml0aWFsaXplIHRoZSBnb29nbGUgcGxhY2UgYXV0b2NvbXBsZXRlXHJcbiAgIGNvbnN0IGluaXRQbGFjZUFQSSA9ICgpID0+IHtcclxuICAgIGxldCBhdXRvY29tcGxldGUgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoY2l0eVJlZ2lvblJlZi5jdXJyZW50LFxyXG4gICAgICB7IHR5cGVzOiBbXCIoY2l0aWVzKVwiXSwgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7IGNvdW50cnk6IFtcImt6XCIsIFwicnVcIl0gfSB9KTtcclxuICAgIG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoYXV0b2NvbXBsZXRlLCBcInBsYWNlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgICAgc2V0Q2l0eVJlZ2lvbih7XHJcbiAgICAgICAgYWRkcmVzczogcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3MsXHJcbiAgICAgICAgaWQ6IHBsYWNlLnBsYWNlX2lkXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZihtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdpbmhlcml0J1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyTW9iaWxlKCFtb2JpbGVGaWx0ZXIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhZ2UgPSAocGFnZU51bSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRBbGxTdG9yYWdlP3BhZ2U9JHtwYWdlTnVtfWApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3N0b3JhZ2U/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldFN0b3JhZ2VzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuYWxsKVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEubWF4X3BhZ2UpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEuY3VycmVudF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyX2ljb24nPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25GaWx0ZXJNb2JpbGUoKX0+ICAgXHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zbGlkZXJzLWggXCI+PC9pPlxyXG4gICAgIFxyXG4gICAgICAgICAgPHA+0KTQuNC70YzRgtGAIHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCE9PTAgJiYgYCgke09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RofSlgfSA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IWxvYWRNYXBTY3JpcHQgPyA8ZGl2PtCX0LDQs9GA0YPQt9C60LAuLi48L2Rpdj4gOlxyXG4gICAgICAgPEZpbHRlciBcclxuICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XHJcbiAgICAgICBzZXRQb3N0cz17c2V0U3RvcmFnZXN9XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICBzZXRUb3RhbD17c2V0VG90YWx9XHJcbiAgICAgICBzZXRNYXhQYWdlPXtzZXRNYXhQYWdlfVxyXG4gICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICAvLyBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgLz5cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNfX2NvbnRhaW5lciBjb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICA8aDQ+PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9Jyc+0JPQu9Cw0LLQvdCw0Y88L2E+e1wiIFwiICsgXCIvXCIgKyBcIiBcIn08YSBocmVmPScvc3RvcmFnZScgPtCh0LrQu9Cw0LTRiyA8L2E+LzxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdncmF5X2ZvbnQnPntcIiBcIiArIFwi0KHQutC70LDQtNGLINCyINCQ0LvQvNCw0YLRi1wifTwvYT48L2g0PlxyXG4gICAgICAgICAgPGgxPtCh0LrQu9Cw0LTRiyDQuCDRgdC60LvQsNC00YHQutC40LUg0L/QvtC80LXRidC10L3QuNGPIHtmcm9tX3N0cmluZyAmJiAn0LInICsgZnJvbV9zdHJpbmd9PC9oMT5cclxuICAgICAgICAgIDxoMz7QndCw0LnQtNC10L3QviB7dG90YWx9INC+0LHRitGP0LLQu9C10L3QuNC5PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAge3N0b3JhZ2VzID09PSBbXSA/ICcnIDogIDxTdG9yYWdlSXRlbXMgdG90YWw9e3RvdGFsfSBzdG9yYWdlcz17c3RvcmFnZXN9IG1heFBhZ2U9e21heFBhZ2V9IG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9Lz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICAgPFN0b3JhZ2VDYWwgLz5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHsvKiA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD17cHJvY2Vzcy5lbnYuUFJPRF9VUkwvcGF0aE5hbWV9PlxyXG4gIHtzaGFyZUNvdW50ID0+IDxzcGFuIGNsYXNzTmFtZT1cIm15U2hhcmVDb3VudFdyYXBwZXJcIj57c2hhcmVDb3VudH08L3NwYW4+fVxyXG48L0ZhY2Vib29rU2hhcmVDb3VudD4gKi99XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=