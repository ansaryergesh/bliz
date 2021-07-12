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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      selectType = _useState2[0],
      setSelectType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{}]),
      posts = _useState3[0],
      setPosts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(page || '1'),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobileFilter = _useState5[0],
      setFilterMobile = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      tops = _useState7[0],
      setTops = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      maxPage = _useState8[0],
      setMaxPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loadMapScript = _useState9[0],
      setLoadMapScript = _useState9[1];

  var getTops = function getTops() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://test.money-men.kz/api/newGetPost?category_id=1').then(function (res) {
      setTops(res.data.top);
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

  var onSelectType = function onSelectType(e) {
    setLoading(true);
    setSelectType(e.target.value);
    onChangeCategory(e.target.name, e.target.value);
  };

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
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      onFilterMobile: onFilterMobile,
      onSelectType: onSelectType,
      selectType: selectType // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
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
        lineNumber: 157,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, _this);
};

_s(Cargo, "3cdEN5vZYoJjP37NIxcxXEj+sgg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZ28iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImZpbHRlciIsInF1ZXJ5IiwiaWQiLCJjYXJnb0lkIiwiZnJvbV9zdHJpbmciLCJmcm9tX2lkIiwidG9fc3RyaW5nIiwibmV0X3N0YXJ0IiwibmV0X2VuZCIsInZvbHVtZV9zdGFydCIsInZvbHVtZV9lbmQiLCJ0b19pZCIsInBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0VHlwZSIsInNldFNlbGVjdFR5cGUiLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vYmlsZUZpbHRlciIsInNldEZpbHRlck1vYmlsZSIsInRvdGFsIiwic2V0VG90YWwiLCJ0b3BzIiwic2V0VG9wcyIsIm1heFBhZ2UiLCJzZXRNYXhQYWdlIiwibG9hZE1hcFNjcmlwdCIsInNldExvYWRNYXBTY3JpcHQiLCJnZXRUb3BzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInRvcCIsIm9uRmlsdGVyTW9iaWxlIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibG9hZEdvb2dsZU1hcFNjcmlwdCIsInR5cGVUcmFuc3BvcnQiLCJvblNlbGVjdFR5cGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNhdGVnb3J5IiwibmFtZSIsImNhdE5hbWUiLCJjYXRJZCIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0eXBlX3RyYW5zcG9ydCIsImZyb20iLCJ0byIsInF1ZXJpZXMiLCJwdXNoIiwicGF0aCIsInBhZ2luYXRpb24iLCJtYXhfcGFnZSIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJPYmplY3Qi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WUFBSSxFQUFFSSxLQURWO0FBRUksYUFBSyxFQUFFTSxLQUZYO0FBR0ksZUFBTyxFQUFFSSxPQUhiO0FBSUksbUJBQVcsRUFBRVIsV0FKakI7QUFLSSxvQkFBWSxFQUFFa0QsWUFMbEI7QUFNSSxZQUFJLEVBQUU1QyxJQU5WO0FBT0ksZ0JBQVEsRUFBRTdCLE1BQU0sQ0FBQ0U7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0kscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQWpLRDs7R0FBTUgsSztVQUNZRSxxRDs7O0tBRFpGLEs7QUFtS1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcmdvLmRlN2VkNDIzNTIzMzU2ZDQwYTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXInXHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvUG9zdEl0ZW0nXHJcbmltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeSc7XHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0cyc7XHJcbmNvbnN0IENhcmdvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2ZpbHRlcn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2NhcmdvSWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21fc3RyaW5nfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge25ldF9zdGFydH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7bmV0X2VuZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dm9sdW1lX3N0YXJ0fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt2b2x1bWVfZW5kfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RUeXBlLHNldFNlbGVjdFR5cGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUocGFnZSB8fCAnMScpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3BzLHNldFRvcHNdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBnZXRUb3BzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9uZXdHZXRQb3N0P2NhdGVnb3J5X2lkPTEnKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0VG9wcyhyZXMuZGF0YS50b3ApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbHRlck1vYmlsZSA9ICgpID0+IHtcclxuICAgIGlmKCFtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgIH1cclxuICAgIGlmKG1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXHJcbiAgICBnZXRUb3BzKClcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gIGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIC8vIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyUG9zdGAsIHtwYXJhbXM6IHtcclxuICAgIC8vICAgcGFnZTogcGFnZSxcclxuICAgIC8vICAgdHlwZV90cmFuc3BvcnQ6IHR5cGVUcmFuc3BvcnQoKSxcclxuICAgIC8vICAgZnJvbTogZnJvbV9pZCxcclxuICAgIC8vICAgdG86IHRvX2lkLFxyXG4gICAgLy8gICBuZXRfc3RhcnQ6bmV0X3N0YXJ0LFxyXG4gICAgLy8gICBuZXRfZW5kOiBuZXRfZW5kLFxyXG4gICAgLy8gICB2b2x1bWVfc3RhcnQ6IHZvbHVtZV9zdGFydCxcclxuICAgIC8vICAgdm9sdW1lX2VuZDogdm9sdW1lX2VuZFxyXG4gICAgLy8gfX0pXHJcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAvLyAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgIC8vICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgLy8gICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgIC8vICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAvLyAgIH0pXHJcbiAgfSxbXSlcclxuICBcclxuICBjb25zdCBvblNlbGVjdFR5cGUgPSAoZSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0U2VsZWN0VHlwZShlLnRhcmdldC52YWx1ZSlcclxuICAgIG9uQ2hhbmdlQ2F0ZWdvcnkoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0TmFtZSxjYXRJZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZpbHRlclBvc3RgLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IGNhdElkPT09MCA/ICcnIDogY2F0SWQsXHJcbiAgICAgICAgZnJvbTogZnJvbV9pZCxcclxuICAgICAgICB0bzogdG9faWQsXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnN0IHF1ZXJpZXMgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgICBkZWxldGUgcXVlcmllcy5wYWdlO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goe3BhdGg6IHBhdGhuYW1lLCBxdWVyeTogey4uLnF1ZXJpZXMsIGZpbHRlcjogY2F0TmFtZSwgaWQ6IGNhdElkfX0pXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLnBhZ2luYXRpb24udG90YWwpXHJcbiAgICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gIGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VOdW0pXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyUG9zdGAsIHtwYXJhbXM6IHtcclxuICAgICAgICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2VOdW0sXHJcbiAgICAgICAgZnJvbTogZnJvbV9pZCxcclxuICAgICAgICB0bzogdG9faWQsXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHtwYXRoOiBwYXRobmFtZSwgcXVlcnk6IHsuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IHBhZ2VOdW19fSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJfaWNvbic+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT4gICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNsaWRlcnMtaCBcIj48L2k+XHJcbiAgICAgXHJcbiAgICAgICAgICA8cD7QpNC40LvRjNGC0YAge09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoIT09MCAmJiBgKCR7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGh9KWB9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+INCX0LDQs9GA0YPQt9C60LAgLi4uIDwvZGl2PiA6XHJcbiAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgIHF1ZXJ5RmlsdGVyPXtmaWx0ZXIgPyBmaWx0ZXIgOiAn0JLRgdC1J31cclxuICAgICAgICAgIG9uQ2hhbmdlQ2F0ZWdvcnk9e29uQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICBmcm9tU3RyaW5nID0ge2Zyb21fc3RyaW5nfVxyXG4gICAgICAgICAgZnJvbUlkID0ge2Zyb21faWR9XHJcbiAgICAgICAgICB0b1N0cmluZz0gIHt0b19zdHJpbmd9XHJcbiAgICAgICAgICB0b0lkID0ge3RvX2lkfVxyXG4gICAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgICAgIG9uU2VsZWN0VHlwZT17b25TZWxlY3RUeXBlfVxyXG4gICAgICAgICAgc2VsZWN0VHlwZT17c2VsZWN0VHlwZX1cclxuICAgICAgICAgIC8vIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiAnJ31cclxuICAgICAgPFBvc3RJdGVtIFxyXG4gICAgICAgICAgcG9zdD17cG9zdHN9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgICBtYXhQYWdlPXttYXhQYWdlfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICB0b3BzPXt0b3BzfVxyXG4gICAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJnbyJdLCJzb3VyY2VSb290IjoiIn0=