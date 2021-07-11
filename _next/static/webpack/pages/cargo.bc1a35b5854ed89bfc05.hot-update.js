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
    console.log(router.query);
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
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440      ", Object.keys(router.query).length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["(", Object.keys(router.query).length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 67
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
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
        lineNumber: 150,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZ28iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImZpbHRlciIsInF1ZXJ5IiwiaWQiLCJjYXJnb0lkIiwiZnJvbV9zdHJpbmciLCJmcm9tX2lkIiwidG9fc3RyaW5nIiwibmV0X3N0YXJ0IiwibmV0X2VuZCIsInZvbHVtZV9zdGFydCIsInZvbHVtZV9lbmQiLCJ0b19pZCIsInBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJtb2JpbGVGaWx0ZXIiLCJzZXRGaWx0ZXJNb2JpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwidG9wcyIsInNldFRvcHMiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwiZ2V0VG9wcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJ0b3AiLCJvbkZpbHRlck1vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJvdmVyZmxvdyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkR29vZ2xlTWFwU2NyaXB0IiwidHlwZVRyYW5zcG9ydCIsIm9uQ2hhbmdlQ2F0ZWdvcnkiLCJjYXROYW1lIiwiY2F0SWQiLCJwcm9jZXNzIiwicGFyYW1zIiwidHlwZV90cmFuc3BvcnQiLCJmcm9tIiwidG8iLCJxdWVyaWVzIiwicHVzaCIsInBhdGgiLCJwYWdpbmF0aW9uIiwibWF4X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBSUMsNkRBQVMsRUFBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEI7QUFGa0IsTUFHWEMsTUFIVyxHQUdESCxNQUFNLENBQUNJLEtBSE4sQ0FHWEQsTUFIVztBQUFBLE1BSVhFLEVBSlcsR0FJTEwsTUFBTSxDQUFDSSxLQUpGLENBSVhDLEVBSlc7QUFBQSxNQUtYQyxPQUxXLEdBS0FOLE1BQU0sQ0FBQ0ksS0FMUCxDQUtYRSxPQUxXO0FBQUEsTUFNWEMsV0FOVyxHQU1JUCxNQUFNLENBQUNJLEtBTlgsQ0FNWEcsV0FOVztBQUFBLE1BT1hDLE9BUFcsR0FPQVIsTUFBTSxDQUFDSSxLQVBQLENBT1hJLE9BUFc7QUFBQSxNQVFYQyxTQVJXLEdBUUVULE1BQU0sQ0FBQ0ksS0FSVCxDQVFYSyxTQVJXO0FBQUEsTUFTWEMsU0FUVyxHQVNFVixNQUFNLENBQUNJLEtBVFQsQ0FTWE0sU0FUVztBQUFBLE1BVVhDLE9BVlcsR0FVQVgsTUFBTSxDQUFDSSxLQVZQLENBVVhPLE9BVlc7QUFBQSxNQVdYQyxZQVhXLEdBV0taLE1BQU0sQ0FBQ0ksS0FYWixDQVdYUSxZQVhXO0FBQUEsTUFZWEMsVUFaVyxHQVlHYixNQUFNLENBQUNJLEtBWlYsQ0FZWFMsVUFaVztBQUFBLE1BYVhDLEtBYlcsR0FhRmQsTUFBTSxDQUFDSSxLQWJMLENBYVhVLEtBYlc7QUFBQSxNQWNYQyxJQWRXLEdBY0hmLE1BQU0sQ0FBQ0ksS0FkSixDQWNYVyxJQWRXOztBQUFBLGtCQWVZQyxzREFBUSxDQUFDLElBQUQsQ0FmcEI7QUFBQSxNQWVYQyxPQWZXO0FBQUEsTUFlRkMsVUFmRTs7QUFBQSxtQkFnQlFGLHNEQUFRLENBQUMsQ0FBQyxFQUFELENBQUQsQ0FoQmhCO0FBQUEsTUFnQlhHLEtBaEJXO0FBQUEsTUFnQkpDLFFBaEJJOztBQUFBLG1CQWlCb0JKLHNEQUFRLENBQUNELElBQUksSUFBSSxHQUFULENBakI1QjtBQUFBLE1BaUJYTSxXQWpCVztBQUFBLE1BaUJFQyxjQWpCRjs7QUFBQSxtQkFrQnFCTixzREFBUSxDQUFDLEtBQUQsQ0FsQjdCO0FBQUEsTUFrQlhPLFlBbEJXO0FBQUEsTUFrQkVDLGVBbEJGOztBQUFBLG1CQW1CUVIsc0RBQVEsQ0FBQyxDQUFELENBbkJoQjtBQUFBLE1BbUJYUyxLQW5CVztBQUFBLE1BbUJKQyxRQW5CSTs7QUFBQSxtQkFvQktWLHNEQUFRLENBQUMsRUFBRCxDQXBCYjtBQUFBLE1Bb0JYVyxJQXBCVztBQUFBLE1Bb0JOQyxPQXBCTTs7QUFBQSxtQkFxQldaLHNEQUFRLENBQUMsQ0FBRCxDQXJCbkI7QUFBQSxNQXFCWGEsT0FyQlc7QUFBQSxNQXFCSEMsVUFyQkc7O0FBQUEsbUJBc0J3QmQsc0RBQVEsQ0FBQyxLQUFELENBdEJoQztBQUFBLE1Bc0JYZSxhQXRCVztBQUFBLE1Bc0JJQyxnQkF0Qko7O0FBd0JsQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsd0RBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWVCxhQUFPLENBQUNTLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFWLENBQVA7QUFDRCxLQUhIO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBRyxDQUFDakIsWUFBSixFQUFrQjtBQUNoQmtCLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0MsS0FBdkMsQ0FBNkNDLE9BQTdDLEdBQXFELFNBQXJEO0FBQ0FILGNBQVEsQ0FBQ0ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxRQUFwQixHQUE2QixRQUE3QjtBQUNELEtBSEQsTUFHTTtBQUNKTCxjQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNDLEtBQXZDLENBQTZDQyxPQUE3QyxHQUFxRCxNQUFyRDtBQUNBSCxjQUFRLENBQUNJLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsUUFBcEIsR0FBNkIsTUFBN0I7QUFDRDs7QUFDRHRCLG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0QsR0FURDs7QUFXQXdCLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWpELE1BQU0sQ0FBQ0ksS0FBbkI7QUFDQTZCLFdBQU87QUFDUGlCLDJGQUFtQixDQUFDLFlBQU07QUFDeEJsQixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FnQixhQUFPLENBQUNDLEdBQVIsQ0FBWWpELE1BQU0sQ0FBQ0ksS0FBbkI7QUFDRCxLQUhrQixDQUFuQjtBQUlBYyxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQU1pQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsYUFBTzlDLEVBQUUsS0FBRyxHQUFMLEdBQVcsRUFBWCxHQUFnQkEsRUFBdkI7QUFBQSxLQUF0QixDQVJjLENBU2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELEdBM0JRLEVBMkJQLEVBM0JPLENBQVQ7O0FBNkJBLE1BQU0rQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMxQ3BDLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRWdCLGdEQUFLLENBQUNDLEdBQU4sV0FBYW9CLCtCQUFiLGtCQUFnRDtBQUFDQyxZQUFNLEVBQUU7QUFDdkRDLHNCQUFjLEVBQUVILEtBQUssS0FBRyxDQUFSLEdBQVksRUFBWixHQUFpQkEsS0FEc0I7QUFFdkRJLFlBQUksRUFBRWxELE9BRmlEO0FBR3ZEbUQsVUFBRSxFQUFFN0M7QUFIbUQ7QUFBVCxLQUFoRCxFQUtHc0IsSUFMSCxDQUtRLFVBQUFDLEdBQUcsRUFBRztBQUNWLFVBQU11QixPQUFPLEdBQUc1RCxNQUFNLENBQUNJLEtBQXZCO0FBQ0EsYUFBT3dELE9BQU8sQ0FBQzdDLElBQWY7QUFDQWYsWUFBTSxDQUFDNkQsSUFBUCxDQUFZO0FBQUNDLFlBQUksRUFBRTVELFFBQVA7QUFBaUJFLGFBQUssa0NBQU13RCxPQUFOO0FBQWV6RCxnQkFBTSxFQUFFa0QsT0FBdkI7QUFBZ0NoRCxZQUFFLEVBQUVpRDtBQUFwQztBQUF0QixPQUFaO0FBQ0FwQyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxjQUFRLENBQUNpQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0FoQixvQkFBYyxDQUFDZSxHQUFHLENBQUNDLElBQUosQ0FBU3lCLFVBQVQsQ0FBb0JoRCxJQUFyQixDQUFkO0FBQ0FXLGNBQVEsQ0FBQ1csR0FBRyxDQUFDQyxJQUFKLENBQVN5QixVQUFULENBQW9CdEMsS0FBckIsQ0FBUjtBQUNBSyxnQkFBVSxDQUFDTyxHQUFHLENBQUNDLElBQUosQ0FBU3lCLFVBQVQsQ0FBb0JDLFFBQXJCLENBQVY7QUFDRCxLQWRIO0FBZ0JILEdBbEJEOztBQW1CQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQWE7QUFDaENoRCxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQU1pQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsYUFBTzlDLEVBQUUsS0FBRyxHQUFMLEdBQVcsRUFBWCxHQUFnQkEsRUFBdkI7QUFBQSxLQUF0Qjs7QUFDQTJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaUIsT0FBWjtBQUNFaEMsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhb0IsK0JBQWIsa0JBQWdEO0FBQUNDLFlBQU0sRUFBRTtBQUN2REMsc0JBQWMsRUFBRU4sYUFBYSxFQUQwQjtBQUV2RHBDLFlBQUksRUFBRW1ELE9BRmlEO0FBR3ZEUixZQUFJLEVBQUVsRCxPQUhpRDtBQUl2RG1ELFVBQUUsRUFBRTdDO0FBSm1EO0FBQVQsS0FBaEQsRUFNR3NCLElBTkgsQ0FNUSxVQUFBQyxHQUFHLEVBQUc7QUFDVnJDLFlBQU0sQ0FBQzZELElBQVAsQ0FBWTtBQUFDQyxZQUFJLEVBQUU1RCxRQUFQO0FBQWlCRSxhQUFLLGtDQUFNSixNQUFNLENBQUNJLEtBQWI7QUFBb0JXLGNBQUksRUFBRW1EO0FBQTFCO0FBQXRCLE9BQVo7QUFDQWxCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWixHQUFaO0FBQ0FuQixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxjQUFRLENBQUNpQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0FoQixvQkFBYyxDQUFDZSxHQUFHLENBQUNDLElBQUosQ0FBU3lCLFVBQVQsQ0FBb0JoRCxJQUFyQixDQUFkO0FBQ0FXLGNBQVEsQ0FBQ1csR0FBRyxDQUFDQyxJQUFKLENBQVN5QixVQUFULENBQW9CdEMsS0FBckIsQ0FBUjtBQUNBSyxnQkFBVSxDQUFDTyxHQUFHLENBQUNDLElBQUosQ0FBU3lCLFVBQVQsQ0FBb0JDLFFBQXJCLENBQVY7QUFDRCxLQWRIO0FBZUgsR0FuQkQ7O0FBcUJBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU14QixjQUFjLEVBQXBCO0FBQUEsU0FBZDtBQUFBLGdDQUNFO0FBQUcsbUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBQSxtRUFBZ0IyQixNQUFNLENBQUNDLElBQVAsQ0FBWXBFLE1BQU0sQ0FBQ0ksS0FBbkIsRUFBMEJpRSxNQUExQixLQUFtQyxDQUFuQyxpQkFBd0M7QUFBQSw0QkFBUUYsTUFBTSxDQUFDQyxJQUFQLENBQVlwRSxNQUFNLENBQUNJLEtBQW5CLEVBQTBCaUUsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUcsQ0FBQ3RDLGFBQUQsZ0JBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCLGdCQUNDLHFFQUFDLCtEQUFEO0FBQ0UsaUJBQVcsRUFBRTVCLE1BQU0sR0FBR0EsTUFBSCxHQUFZLEtBRGpDO0FBRUUsc0JBQWdCLEVBQUVpRCxnQkFGcEI7QUFHRSxnQkFBVSxFQUFJN0MsV0FIaEI7QUFJRSxZQUFNLEVBQUlDLE9BSlo7QUFLRSxjQUFRLEVBQUlDLFNBTGQ7QUFNRSxVQUFJLEVBQUlLLEtBTlY7QUFPRSxnQkFBVSxFQUFFSSxVQVBkO0FBUUUsY0FBUSxFQUFFRSxRQVJaO0FBU0Usb0JBQWMsRUFBRUUsY0FUbEI7QUFVRSxjQUFRLEVBQUVJLFFBVlo7QUFXRSxnQkFBVSxFQUFFSSxVQVhkO0FBWUUsa0JBQVksRUFBRVAsWUFaaEI7QUFhRSxvQkFBYyxFQUFFaUIsY0FibEIsQ0FjRTs7QUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosZUEyQkE7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBQSxpQkFDQ3ZCLE9BQU8sZ0JBQUcscUVBQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQWdCLEVBRHhCLGVBRUUscUVBQUMsaUVBQUQ7QUFDSSxZQUFJLEVBQUVFLEtBRFY7QUFFSSxhQUFLLEVBQUVNLEtBRlg7QUFHSSxlQUFPLEVBQUVJLE9BSGI7QUFJSSxtQkFBVyxFQUFFUixXQUpqQjtBQUtJLG9CQUFZLEVBQUU0QyxZQUxsQjtBQU1JLFlBQUksRUFBRXRDLElBTlY7QUFPSSxnQkFBUSxFQUFFM0IsTUFBTSxDQUFDRTtBQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFXSSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBMUpEOztHQUFNSCxLO1VBQ1lFLHFEOzs7S0FEWkYsSztBQTRKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZ28uYmMxYTM1YjU4NTRlZDg5YmZjMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlcidcclxuaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9Qb3N0SXRlbSdcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuY29uc3QgQ2FyZ28gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7ZmlsdGVyfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7Y2FyZ29JZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RvX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7bmV0X3N0YXJ0fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtuZXRfZW5kfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt2b2x1bWVfc3RhcnR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3ZvbHVtZV9lbmR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RvX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUocGFnZSB8fCAnMScpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3BzLHNldFRvcHNdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBnZXRUb3BzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9uZXdHZXRQb3N0P2NhdGVnb3J5X2lkPTEnKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0VG9wcyhyZXMuZGF0YS50b3ApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbHRlck1vYmlsZSA9ICgpID0+IHtcclxuICAgIGlmKCFtb2JpbGVGaWx0ZXIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0naW5oZXJpdCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9J2hpZGRlbidcclxuICAgIH1lbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSdcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz0nYXV0bydcclxuICAgIH1cclxuICAgIHNldEZpbHRlck1vYmlsZSghbW9iaWxlRmlsdGVyKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuICAgIGdldFRvcHMoKVxyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KVxyXG4gICAgfSlcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiAgaWQ9PT0nMCcgPyAnJyA6IGlkO1xyXG4gICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJQb3N0YCwge3BhcmFtczoge1xyXG4gICAgLy8gICBwYWdlOiBwYWdlLFxyXG4gICAgLy8gICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgLy8gICBmcm9tOiBmcm9tX2lkLFxyXG4gICAgLy8gICB0bzogdG9faWQsXHJcbiAgICAvLyAgIG5ldF9zdGFydDpuZXRfc3RhcnQsXHJcbiAgICAvLyAgIG5ldF9lbmQ6IG5ldF9lbmQsXHJcbiAgICAvLyAgIHZvbHVtZV9zdGFydDogdm9sdW1lX3N0YXJ0LFxyXG4gICAgLy8gICB2b2x1bWVfZW5kOiB2b2x1bWVfZW5kXHJcbiAgICAvLyB9fSlcclxuICAgIC8vICAgLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIC8vICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgLy8gICAgIHNldFRvdGFsKHJlcy5kYXRhLnBhZ2luYXRpb24udG90YWwpXHJcbiAgICAvLyAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgLy8gICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgIC8vICAgfSlcclxuICB9LFtdKVxyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0TmFtZSxjYXRJZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZpbHRlclBvc3RgLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IGNhdElkPT09MCA/ICcnIDogY2F0SWQsXHJcbiAgICAgICAgZnJvbTogZnJvbV9pZCxcclxuICAgICAgICB0bzogdG9faWQsXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnN0IHF1ZXJpZXMgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgICBkZWxldGUgcXVlcmllcy5wYWdlO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goe3BhdGg6IHBhdGhuYW1lLCBxdWVyeTogey4uLnF1ZXJpZXMsIGZpbHRlcjogY2F0TmFtZSwgaWQ6IGNhdElkfX0pXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLnBhZ2luYXRpb24udG90YWwpXHJcbiAgICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gIGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VOdW0pXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyUG9zdGAsIHtwYXJhbXM6IHtcclxuICAgICAgICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2VOdW0sXHJcbiAgICAgICAgZnJvbTogZnJvbV9pZCxcclxuICAgICAgICB0bzogdG9faWQsXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHtwYXRoOiBwYXRobmFtZSwgcXVlcnk6IHsuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IHBhZ2VOdW19fSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAgICAgICB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIDxzcGFuPih7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KTwvc3Bhbj59IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+INCX0LDQs9GA0YPQt9C60LAgLi4uIDwvZGl2PiA6XHJcbiAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgIHF1ZXJ5RmlsdGVyPXtmaWx0ZXIgPyBmaWx0ZXIgOiAn0JLRgdC1J31cclxuICAgICAgICAgIG9uQ2hhbmdlQ2F0ZWdvcnk9e29uQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICBmcm9tU3RyaW5nID0ge2Zyb21fc3RyaW5nfVxyXG4gICAgICAgICAgZnJvbUlkID0ge2Zyb21faWR9XHJcbiAgICAgICAgICB0b1N0cmluZz0gIHt0b19zdHJpbmd9XHJcbiAgICAgICAgICB0b0lkID0ge3RvX2lkfVxyXG4gICAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiAnJ31cclxuICAgICAgPFBvc3RJdGVtIFxyXG4gICAgICAgICAgcG9zdD17cG9zdHN9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgICBtYXhQYWdlPXttYXhQYWdlfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICB0b3BzPXt0b3BzfVxyXG4gICAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJnbyJdLCJzb3VyY2VSb290IjoiIn0=