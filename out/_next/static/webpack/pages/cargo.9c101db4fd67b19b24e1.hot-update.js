webpackHotUpdate_N_E("pages/cargo",{

/***/ "./pages/cargo/index.js":
/*!******************************!*\
  !*** ./pages/cargo/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var _components_post_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/Filter */ "./components/post/Filter.js");
/* harmony import */ var _components_post_PostItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/PostItem */ "./components/post/PostItem.js");
/* harmony import */ var _components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/SideBarCurrency */ "./components/post/SideBarCurrency.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\cargo\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Cargo = function Cargo() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var pathname = router.pathname;
  var filter = router.query.filter;
  var id = router.query.id;
  var cargoId = router.query.cargoId;
  var from_string = router.query.from_string;
  var from_id = router.query.from_id;
  var to_string = router.query.to_string;
  var net_start = router.query.net_start;
  var net_end = router.query.net_end;
  var volume_start = router.query.volume_start;
  var volume_end = router.query.volume_end;
  var to_id = router.query.to_id;
  var page = router.query.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{}]),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(page || '1'),
      currentPage = _useState3[0],
      setCurrentPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobileFilter = _useState4[0],
      setFilterMobile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      tops = _useState6[0],
      setTops = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      maxPage = _useState7[0],
      setMaxPage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loadMapScript = _useState8[0],
      setLoadMapScript = _useState8[1];

  var getTops = function getTops() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://test.money-men.kz/api/newGetPost?category_id=1').then(function (res) {
      setTops(res.data.top);
    });
  };

  var onFilterMobile = function onFilterMobile() {
    if (!mobileFilter) {
      document.querySelector('.main_filter').style.display = 'inherit';
      document.body.style.overflow = 'hidden';
    } else {
      document.querySelector('.main_filter').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    setFilterMobile(!mobileFilter);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getTops();
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_9__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
      console.log(router.query);
    });
    setLoading(true);

    var typeTransport = function typeTransport() {
      return id === '0' ? '' : id;
    }; // axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
    //   page: page,
    //   type_transport: typeTransport(),
    //   from: from_id,
    //   to: to_id,
    //   net_start:net_start,
    //   net_end: net_end,
    //   volume_start: volume_start,
    //   volume_end: volume_end
    // }})
    //   .then(res => {
    //     console.log(res)
    //     setLoading(false)
    //     setPosts(res.data.data)
    //     setTotal(res.data.pagination.total)
    //     setCurrentPage(res.data.pagination.page)
    //     setMaxPage(res.data.pagination.max_page)
    //   })

  }, []);

  var onChangeCategory = function onChangeCategory(catName, catId) {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat("https://test.money-men.kz/api", "/filterPost"), {
      params: {
        type_transport: catId === 0 ? '' : catId,
        from: from_id,
        to: to_id
      }
    }).then(function (res) {
      var queries = router.query;
      delete queries.page;
      router.push({
        path: pathname,
        query: _objectSpread(_objectSpread({}, queries), {}, {
          filter: catName,
          id: catId
        })
      });
      setLoading(false);
      setPosts(res.data.data);
      setCurrentPage(res.data.pagination.page);
      setTotal(res.data.pagination.total);
      setMaxPage(res.data.pagination.max_page);
    });
  };

  var onChangePage = function onChangePage(pageNum) {
    setLoading(true);

    var typeTransport = function typeTransport() {
      return id === '0' ? '' : id;
    };

    console.log(pageNum);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat("https://test.money-men.kz/api", "/filterPost"), {
      params: {
        type_transport: typeTransport(),
        page: pageNum,
        from: from_id,
        to: to_id
      }
    }).then(function (res) {
      router.push({
        path: pathname,
        query: _objectSpread(_objectSpread({}, router.query), {}, {
          page: pageNum
        })
      });
      console.log(res);
      setLoading(false);
      setPosts(res.data.data);
      setCurrentPage(res.data.pagination.page);
      setTotal(res.data.pagination.total);
      setMaxPage(res.data.pagination.max_page);
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
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u0424\u0438\u043B\u044C\u0442\u0440"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_Filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      queryFilter: filter ? filter : 'Все',
      onChangeCategory: onChangeCategory,
      fromString: from_string,
      fromId: from_id,
      toString: to_string,
      toId: to_id,
      setLoading: setLoading,
      setPosts: setPosts,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 16
      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_PostItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: posts,
        total: total,
        maxPage: maxPage,
        currentPage: currentPage,
        onChangePage: onChangePage,
        tops: tops,
        pathName: router.pathname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(Cargo, "YZYrskZC1blPSp1lOcdRRF5ezB8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Cargo;
/* harmony default export */ __webpack_exports__["default"] = (Cargo);

var _c;

$RefreshReg$(_c, "Cargo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZ28iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImZpbHRlciIsInF1ZXJ5IiwiaWQiLCJjYXJnb0lkIiwiZnJvbV9zdHJpbmciLCJmcm9tX2lkIiwidG9fc3RyaW5nIiwibmV0X3N0YXJ0IiwibmV0X2VuZCIsInZvbHVtZV9zdGFydCIsInZvbHVtZV9lbmQiLCJ0b19pZCIsInBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwidG9wcyIsInNldFRvcHMiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwiZ2V0VG9wcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJ0b3AiLCJvbkZpbHRlck1vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJvdmVyZmxvdyIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJjb25zb2xlIiwibG9nIiwidHlwZVRyYW5zcG9ydCIsIm9uQ2hhbmdlQ2F0ZWdvcnkiLCJjYXROYW1lIiwiY2F0SWQiLCJwcm9jZXNzIiwicGFyYW1zIiwidHlwZV90cmFuc3BvcnQiLCJmcm9tIiwidG8iLCJxdWVyaWVzIiwicHVzaCIsInBhdGgiLCJwYWdpbmF0aW9uIiwibWF4X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LG9CQUFjLEVBQUVFLGNBVGxCO0FBVUUsY0FBUSxFQUFFSSxRQVZaO0FBV0UsZ0JBQVUsRUFBRUksVUFYZDtBQVlFLGtCQUFZLEVBQUVQLFlBWmhCO0FBYUUsb0JBQWMsRUFBRWlCLGNBYmxCLENBY0U7O0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBMEJBO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsaUJBQ0N2QixPQUFPLGdCQUFHLHFFQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFnQixFQUR4QixlQUVFLHFFQUFDLGlFQUFEO0FBQ0ksWUFBSSxFQUFFRSxLQURWO0FBRUksYUFBSyxFQUFFTSxLQUZYO0FBR0ksZUFBTyxFQUFFSSxPQUhiO0FBSUksbUJBQVcsRUFBRVIsV0FKakI7QUFLSSxvQkFBWSxFQUFFNEMsWUFMbEI7QUFNSSxZQUFJLEVBQUV0QyxJQU5WO0FBT0ksZ0JBQVEsRUFBRTNCLE1BQU0sQ0FBQ0U7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0kscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQXhKRDs7R0FBTUgsSztVQUNZRSxxRDs7O0tBRFpGLEs7QUEwSlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcmdvLjljMTAxZGI0ZmQ2N2IxOWIyNGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXInXHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvUG9zdEl0ZW0nXHJcbmltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeSc7XHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0cyc7XHJcbmNvbnN0IENhcmdvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2ZpbHRlcn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2NhcmdvSWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21fc3RyaW5nfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge25ldF9zdGFydH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7bmV0X2VuZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dm9sdW1lX3N0YXJ0fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt2b2x1bWVfZW5kfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW3t9XSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKHBhZ2UgfHwgJzEnKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG9wcyxzZXRUb3BzXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgZ2V0VG9wcyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly90ZXN0Lm1vbmV5LW1lbi5rei9hcGkvbmV3R2V0UG9zdD9jYXRlZ29yeV9pZD0xJylcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldFRvcHMocmVzLmRhdGEudG9wKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93PSdoaWRkZW4nXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J25vbmUnXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9J2F1dG8nXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUb3BzKClcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gIGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIC8vIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyUG9zdGAsIHtwYXJhbXM6IHtcclxuICAgIC8vICAgcGFnZTogcGFnZSxcclxuICAgIC8vICAgdHlwZV90cmFuc3BvcnQ6IHR5cGVUcmFuc3BvcnQoKSxcclxuICAgIC8vICAgZnJvbTogZnJvbV9pZCxcclxuICAgIC8vICAgdG86IHRvX2lkLFxyXG4gICAgLy8gICBuZXRfc3RhcnQ6bmV0X3N0YXJ0LFxyXG4gICAgLy8gICBuZXRfZW5kOiBuZXRfZW5kLFxyXG4gICAgLy8gICB2b2x1bWVfc3RhcnQ6IHZvbHVtZV9zdGFydCxcclxuICAgIC8vICAgdm9sdW1lX2VuZDogdm9sdW1lX2VuZFxyXG4gICAgLy8gfX0pXHJcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAvLyAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgIC8vICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgLy8gICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgIC8vICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAvLyAgIH0pXHJcbiAgfSxbXSlcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUNhdGVnb3J5ID0gKGNhdE5hbWUsY2F0SWQpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJQb3N0YCwge3BhcmFtczoge1xyXG4gICAgICAgIHR5cGVfdHJhbnNwb3J0OiBjYXRJZD09PTAgPyAnJyA6IGNhdElkLFxyXG4gICAgICAgIGZyb206IGZyb21faWQsXHJcbiAgICAgICAgdG86IHRvX2lkLFxyXG4gICAgICB9fSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zdCBxdWVyaWVzID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgICAgZGVsZXRlIHF1ZXJpZXMucGFnZTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHtwYXRoOiBwYXRobmFtZSwgcXVlcnk6IHsuLi5xdWVyaWVzLCBmaWx0ZXI6IGNhdE5hbWUsIGlkOiBjYXRJZH19KVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZVBhZ2UgPSAocGFnZU51bSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgdHlwZVRyYW5zcG9ydCA9ICgpID0+ICBpZD09PScwJyA/ICcnIDogaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlTnVtKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZpbHRlclBvc3RgLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IHR5cGVUcmFuc3BvcnQoKSxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtLFxyXG4gICAgICAgIGZyb206IGZyb21faWQsXHJcbiAgICAgICAgdG86IHRvX2lkLFxyXG4gICAgICB9fSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCh7cGF0aDogcGF0aG5hbWUsIHF1ZXJ5OiB7Li4ucm91dGVyLnF1ZXJ5LCBwYWdlOiBwYWdlTnVtfX0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLnBhZ2luYXRpb24udG90YWwpXHJcbiAgICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyX2ljb24nPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25GaWx0ZXJNb2JpbGUoKX0+ICAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+INCX0LDQs9GA0YPQt9C60LAgLi4uIDwvZGl2PiA6XHJcbiAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgIHF1ZXJ5RmlsdGVyPXtmaWx0ZXIgPyBmaWx0ZXIgOiAn0JLRgdC1J31cclxuICAgICAgICAgIG9uQ2hhbmdlQ2F0ZWdvcnk9e29uQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICBmcm9tU3RyaW5nID0ge2Zyb21fc3RyaW5nfVxyXG4gICAgICAgICAgZnJvbUlkID0ge2Zyb21faWR9XHJcbiAgICAgICAgICB0b1N0cmluZz0gIHt0b19zdHJpbmd9XHJcbiAgICAgICAgICB0b0lkID0ge3RvX2lkfVxyXG4gICAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiAnJ31cclxuICAgICAgPFBvc3RJdGVtIFxyXG4gICAgICAgICAgcG9zdD17cG9zdHN9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgICBtYXhQYWdlPXttYXhQYWdlfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICB0b3BzPXt0b3BzfVxyXG4gICAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJnbyJdLCJzb3VyY2VSb290IjoiIn0=