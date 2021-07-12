webpackHotUpdate_N_E("pages/cargo/transport",{

/***/ "./pages/cargo/transport.js":
/*!**********************************!*\
  !*** ./pages/cargo/transport.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var _components_post_Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post/Filter */ "./components/post/Filter.js");
/* harmony import */ var _components_post_PostItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/PostItem */ "./components/post/PostItem.js");
/* harmony import */ var _components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/SideBarCurrency */ "./components/post/SideBarCurrency.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");


var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\cargo\\transport.js",
    _this = undefined,
    _s = $RefreshSig$();










var Cargo = function Cargo() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var filter = router.query.filter;
  var id = router.query.id;
  var from_string = router.query.from_string;
  var from_id = router.query.from_id;
  var to_string = router.query.to_string;
  var to_id = router.query.to_id;
  var page = router.query.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{}]),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(page || '1'),
      currentPage = _useState3[0],
      setCurrentPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      maxPage = _useState5[0],
      setMaxPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadMapScript = _useState6[0],
      setLoadMapScript = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mobileFilter = _useState7[0],
      setFilterMobile = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      tops = _useState8[0],
      setTops = _useState8[1];

  var getTops = function getTops() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://test.money-men.kz/api/newGetPost?category_id=2').then(function (res) {
      setTops(res.data.top);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getTops();
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
    });
    setLoading(true);

    var pageVal = function pageVal() {
      return page === undefined ? '' : page;
    };

    var typeTransport = function typeTransport() {
      return id === undefined || id === '0' ? '' : id;
    };

    var fromID = function fromID() {
      return from_id === undefined ? '' : from_id;
    };

    var toID = function toID() {
      return to_id === undefined ? '' : to_id;
    }; // axios.get(`${process.env.BASE_URL}/filterCargo`, {params: {
    //   page: pageVal(),
    //   type_transport: typeTransport(),
    //   from: fromID(),
    //   to: toID(),
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

    var fromID = function fromID() {
      return from_id === undefined ? '' : from_id;
    };

    var toID = function toID() {
      return to_id === undefined ? '' : to_id;
    };

    var fromString = function fromString() {
      return from_string ? from_string : '';
    };

    var toString = function toString() {
      return to_string ? to_string : '';
    };

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("https://test.money-men.kz/api", "/filterCargo"), {
      params: {
        type_transport: catId === 0 ? '' : catId,
        from: fromID(),
        to: toID()
      }
    }).then(function (res) {
      console.log(res);
      router.push("/cargo/transport?filter=".concat(catName, "&id=").concat(catId, "&from_id=").concat(fromID(), "&to_id=").concat(toID(), "&from_string=").concat(fromString(), "&to_string=").concat(toString()));
      setLoading(false);
      setPosts(res.data.data);
      setCurrentPage(res.data.pagination.page);
      setTotal(res.data.pagination.total);
      setMaxPage(res.data.pagination.max_page);
    });
  };

  var onSearch = function onSearch(from, to, fromString, toString) {
    var typeTransport = function typeTransport() {
      return id === undefined || id === '0' ? '' : id;
    };

    var filterVal = function filterVal() {
      return filter === undefined ? '' : filter;
    };

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("https://test.money-men.kz/api", "/filterCargo?type_transport=").concat(typeTransport(), "&from=").concat(from, "&to=").concat(to)).then(function (res) {
      console.log(res);
      router.push("/cargo/transport?filter=".concat(filterVal(), "&id=").concat(typeTransport(), "&from_id=").concat(from, "&to_id=").concat(to, "&from_string=").concat(fromString, "&to_string=").concat(toString));
      setLoading(false);
      setPosts(res.data.data);
      setCurrentPage(res.data.pagination.page);
      setTotal(res.data.pagination.total);
      setMaxPage(res.data.pagination.max_page);
    });
  };

  var onFilterMobile = function onFilterMobile() {
    if (!mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'inherit'; // document.body.style.overflow='hidden'
    }

    if (mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'none';
    }

    setFilterMobile(!mobileFilter);
  };

  var onChangePage = function onChangePage(pageNum) {
    setLoading(true);

    var typeTransport = function typeTransport() {
      return id === undefined || id === '0' ? '' : id;
    };

    var fromID = function fromID() {
      return from_id === undefined ? '' : from_id;
    };

    var toID = function toID() {
      return to_id === undefined ? '' : to_id;
    };

    var filterVal = function filterVal() {
      return filter === undefined ? '' : filter;
    };

    var fromString = function fromString() {
      return from_string ? from_string : '';
    };

    var toString = function toString() {
      return to_string ? to_string : '';
    };

    console.log(pageNum);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("https://test.money-men.kz/api", "/filterCargo"), {
      params: {
        type_transport: typeTransport(),
        page: pageNum,
        from: fromID(),
        to: toID()
      }
    }).then(function (res) {
      router.push("?page=".concat(pageNum, "&id=").concat(typeTransport(), "&filter=").concat(filterVal(), "&from_id=").concat(fromID(), "&from_string=").concat(fromString(), "&to_id=").concat(toID(), "&to_string=").concat(toString()));
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
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 8
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_Filter__WEBPACK_IMPORTED_MODULE_5__["default"], {
      queryFilter: filter ? filter : 'Все',
      onChangeCategory: onChangeCategory,
      fromString: from_string,
      setLoading: setLoading,
      fromId: from_id,
      setPosts: setPosts,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      toString: to_string,
      toId: to_id,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile,
      onSearch: onSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 16
      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_PostItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: posts,
        total: total,
        maxPage: maxPage,
        currentPage: currentPage,
        onChangePage: onChangePage,
        pathName: router.pathname,
        tops: tops
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 5
  }, _this);
};

_s(Cargo, "zqdUpq2l1R7Tqk4fgvZlDZHyI0Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vdHJhbnNwb3J0LmpzIl0sIm5hbWVzIjpbIkNhcmdvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyIiwicXVlcnkiLCJpZCIsImZyb21fc3RyaW5nIiwiZnJvbV9pZCIsInRvX3N0cmluZyIsInRvX2lkIiwicGFnZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidG9wcyIsInNldFRvcHMiLCJnZXRUb3BzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInRvcCIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJwYWdlVmFsIiwidW5kZWZpbmVkIiwidHlwZVRyYW5zcG9ydCIsImZyb21JRCIsInRvSUQiLCJvbkNoYW5nZUNhdGVnb3J5IiwiY2F0TmFtZSIsImNhdElkIiwiZnJvbVN0cmluZyIsInRvU3RyaW5nIiwicHJvY2VzcyIsInBhcmFtcyIsInR5cGVfdHJhbnNwb3J0IiwiZnJvbSIsInRvIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYWdpbmF0aW9uIiwibWF4X3BhZ2UiLCJvblNlYXJjaCIsImZpbHRlclZhbCIsIm9uRmlsdGVyTW9iaWxlIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUtFLFlBQU0sRUFBSU4sT0FMWjtBQU1FLGNBQVEsRUFBRVEsUUFOWjtBQU9FLG9CQUFjLEVBQUVFLGNBUGxCO0FBUUUsY0FBUSxFQUFFRSxRQVJaO0FBU0UsZ0JBQVUsRUFBRUUsVUFUZDtBQVVFLGNBQVEsRUFBSWIsU0FWZDtBQVdFLFVBQUksRUFBSUMsS0FYVjtBQVlFLGtCQUFZLEVBQUVlLFlBWmhCO0FBYUUsb0JBQWMsRUFBRW1DLGNBYmxCO0FBY0UsY0FBUSxFQUFFRjtBQWRaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQTJCQTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLGlCQUNDN0MsT0FBTyxnQkFBRyxxRUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBZ0IsRUFEeEIsZUFFRSxxRUFBQyxpRUFBRDtBQUNJLFlBQUksRUFBRUUsS0FEVjtBQUVJLGFBQUssRUFBRUksS0FGWDtBQUdJLGVBQU8sRUFBRUUsT0FIYjtBQUlJLG1CQUFXLEVBQUVKLFdBSmpCO0FBS0ksb0JBQVksRUFBRW1ELFlBTGxCO0FBTUksZ0JBQVEsRUFBRWxFLE1BQU0sQ0FBQ3VFLFFBTnJCO0FBT0ksWUFBSSxFQUFFOUM7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFXSSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBOENELENBakxEOztHQUFNMUIsSztVQUNZRSxxRDs7O0tBRFpGLEs7QUFtTFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcmdvL3RyYW5zcG9ydC4wMWJlMTY2ZGU3M2ZiYTg4MDlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL290aGVycy9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvRmlsdGVyJ1xyXG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1Bvc3RJdGVtJ1xyXG5pbXBvcnQgU2lkZUJhckN1cnJlbmN5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9TaWRlQmFyQ3VycmVuY3knO1xyXG5pbXBvcnQgeyBsb2FkR29vZ2xlTWFwU2NyaXB0IH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHMnO1xyXG5cclxuY29uc3QgQ2FyZ28gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2ZpbHRlcn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21fc3RyaW5nfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RvX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW3t9XSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKHBhZ2UgfHwgJzEnKVxyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWF4UGFnZSxzZXRNYXhQYWdlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2xvYWRNYXBTY3JpcHQsIHNldExvYWRNYXBTY3JpcHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21vYmlsZUZpbHRlcixzZXRGaWx0ZXJNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvcHMsc2V0VG9wc10gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgY29uc3QgZ2V0VG9wcyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly90ZXN0Lm1vbmV5LW1lbi5rei9hcGkvbmV3R2V0UG9zdD9jYXRlZ29yeV9pZD0yJylcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldFRvcHMocmVzLmRhdGEudG9wKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VG9wcygpXHJcbiAgICBsb2FkR29vZ2xlTWFwU2NyaXB0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZE1hcFNjcmlwdCh0cnVlKVxyXG4gICAgfSlcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHBhZ2VWYWwgPSAoKSA9PiBwYWdlID09PSB1bmRlZmluZWQgPyAnJyA6IHBhZ2U7XHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gaWQgPT09IHVuZGVmaW5lZCB8fCBpZD09PScwJyA/ICcnIDogaWQ7XHJcbiAgICBjb25zdCBmcm9tSUQgPSAoKSA9PiBmcm9tX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IGZyb21faWRcclxuICAgIGNvbnN0IHRvSUQgPSAoKSA9PiB0b19pZCA9PT0gdW5kZWZpbmVkID8gJycgOiB0b19pZFxyXG5cclxuXHJcblxyXG4gICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgIC8vICAgcGFnZTogcGFnZVZhbCgpLFxyXG4gICAgLy8gICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgLy8gICBmcm9tOiBmcm9tSUQoKSxcclxuICAgIC8vICAgdG86IHRvSUQoKSxcclxuICAgIC8vIH19KVxyXG4gICAgLy8gICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgLy8gICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAvLyAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgIC8vICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAvLyAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgLy8gICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0TmFtZSxjYXRJZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgZnJvbUlEID0gKCkgPT4gZnJvbV9pZCA9PT0gdW5kZWZpbmVkID8gJycgOiBmcm9tX2lkXHJcbiAgICBjb25zdCB0b0lEID0gKCkgPT4gdG9faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogdG9faWRcclxuICAgIGNvbnN0IGZyb21TdHJpbmcgPSAoKSA9PiBmcm9tX3N0cmluZyA/IGZyb21fc3RyaW5nIDogJycgXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHRvX3N0cmluZyA/IHRvX3N0cmluZyA6ICcnXHJcbiAgXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyQ2FyZ29gLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IGNhdElkPT09MCA/ICcnIDogY2F0SWQsXHJcbiAgICAgICAgZnJvbTogZnJvbUlEKCksXHJcbiAgICAgICAgdG86IHRvSUQoKSxcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9jYXJnby90cmFuc3BvcnQ/ZmlsdGVyPSR7Y2F0TmFtZX0maWQ9JHtjYXRJZH0mZnJvbV9pZD0ke2Zyb21JRCgpfSZ0b19pZD0ke3RvSUQoKX0mZnJvbV9zdHJpbmc9JHtmcm9tU3RyaW5nKCl9JnRvX3N0cmluZz0ke3RvU3RyaW5nKCl9YClcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG5cclxuICB9XHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoZnJvbSx0bywgZnJvbVN0cmluZyx0b1N0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdHlwZVRyYW5zcG9ydCA9ICgpID0+IGlkID09PSB1bmRlZmluZWQgfHwgaWQ9PT0nMCcgPyAnJyA6IGlkO1xyXG4gICAgY29uc3QgZmlsdGVyVmFsID0gKCkgPT4gZmlsdGVyID09PSB1bmRlZmluZWQgPyAnJyA6IGZpbHRlclxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnbz90eXBlX3RyYW5zcG9ydD0ke3R5cGVUcmFuc3BvcnQoKX0mZnJvbT0ke2Zyb219JnRvPSR7dG99YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhcmdvL3RyYW5zcG9ydD9maWx0ZXI9JHtmaWx0ZXJWYWwoKX0maWQ9JHt0eXBlVHJhbnNwb3J0KCl9JmZyb21faWQ9JHtmcm9tfSZ0b19pZD0ke3RvfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmd9JnRvX3N0cmluZz0ke3RvU3RyaW5nfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgaWYoIW1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnO1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93PSdoaWRkZW4nXHJcbiAgICB9XHJcbiAgICBpZihtb2JpbGVGaWx0ZXIgJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PTc5Nikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9maWx0ZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJ1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyTW9iaWxlKCFtb2JpbGVGaWx0ZXIpXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gaWQgPT09IHVuZGVmaW5lZCB8fCBpZD09PScwJyA/ICcnIDogaWQ7XHJcbiAgICBjb25zdCBmcm9tSUQgPSAoKSA9PiBmcm9tX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IGZyb21faWRcclxuICAgIGNvbnN0IHRvSUQgPSAoKSA9PiB0b19pZCA9PT0gdW5kZWZpbmVkID8gJycgOiB0b19pZFxyXG4gICAgY29uc3QgZmlsdGVyVmFsID0gKCkgPT4gZmlsdGVyID09PSB1bmRlZmluZWQgPyAnJyA6IGZpbHRlclxyXG4gICAgY29uc3QgZnJvbVN0cmluZyA9ICgpID0+IGZyb21fc3RyaW5nID8gZnJvbV9zdHJpbmcgOiAnJyBcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gdG9fc3RyaW5nID8gdG9fc3RyaW5nIDogJydcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VOdW0pXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyQ2FyZ29gLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IHR5cGVUcmFuc3BvcnQoKSxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtLFxyXG4gICAgICAgIGZyb206IGZyb21JRCgpLFxyXG4gICAgICAgIHRvOiB0b0lEKCksXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKGA/cGFnZT0ke3BhZ2VOdW19JmlkPSR7dHlwZVRyYW5zcG9ydCgpfSZmaWx0ZXI9JHtmaWx0ZXJWYWwoKX0mZnJvbV9pZD0ke2Zyb21JRCgpfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmcoKX0mdG9faWQ9JHt0b0lEKCl9JnRvX3N0cmluZz0ke3RvU3RyaW5nKCl9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj4g0JfQsNCz0YDRg9C30LrQsCAuLi4gPC9kaXY+IDpcclxuICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgcXVlcnlGaWx0ZXI9e2ZpbHRlciA/IGZpbHRlciA6ICfQktGB0LUnfVxyXG4gICAgICAgICAgb25DaGFuZ2VDYXRlZ29yeT17b25DaGFuZ2VDYXRlZ29yeX1cclxuICAgICAgICAgIGZyb21TdHJpbmcgPSB7ZnJvbV9zdHJpbmd9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nID0ge3NldExvYWRpbmd9XHJcbiAgICAgICAgICBmcm9tSWQgPSB7ZnJvbV9pZH1cclxuICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICAgICB0b1N0cmluZz0gIHt0b19zdHJpbmd9XHJcbiAgICAgICAgICB0b0lkID0ge3RvX2lkfVxyXG4gICAgICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAge2xvYWRpbmcgPyA8TG9hZGVyIC8+IDogJyd9XHJcbiAgICAgIDxQb3N0SXRlbSBcclxuICAgICAgICAgIHBvc3Q9e3Bvc3RzfVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgbWF4UGFnZT17bWF4UGFnZX1cclxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAgIHRvcHM9e3RvcHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmdvIl0sInNvdXJjZVJvb3QiOiIifQ==