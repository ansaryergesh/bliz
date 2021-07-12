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
    children: [!loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
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
        lineNumber: 152,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vdHJhbnNwb3J0LmpzIl0sIm5hbWVzIjpbIkNhcmdvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyIiwicXVlcnkiLCJpZCIsImZyb21fc3RyaW5nIiwiZnJvbV9pZCIsInRvX3N0cmluZyIsInRvX2lkIiwicGFnZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidG9wcyIsInNldFRvcHMiLCJnZXRUb3BzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInRvcCIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJwYWdlVmFsIiwidW5kZWZpbmVkIiwidHlwZVRyYW5zcG9ydCIsImZyb21JRCIsInRvSUQiLCJvbkNoYW5nZUNhdGVnb3J5IiwiY2F0TmFtZSIsImNhdElkIiwiZnJvbVN0cmluZyIsInRvU3RyaW5nIiwicHJvY2VzcyIsInBhcmFtcyIsInR5cGVfdHJhbnNwb3J0IiwiZnJvbSIsInRvIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYWdpbmF0aW9uIiwibWF4X3BhZ2UiLCJvblNlYXJjaCIsImZpbHRlclZhbCIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJvbkZpbHRlck1vYmlsZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMs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QUhoQjtBQUlFLGdCQUFVLEVBQUlPLFVBSmhCO0FBS0UsWUFBTSxFQUFJTixPQUxaO0FBTUUsY0FBUSxFQUFFUSxRQU5aO0FBT0Usb0JBQWMsRUFBRUUsY0FQbEI7QUFRRSxjQUFRLEVBQUVFLFFBUlo7QUFTRSxnQkFBVSxFQUFFRSxVQVRkO0FBVUUsY0FBUSxFQUFJYixTQVZkO0FBV0UsVUFBSSxFQUFJQyxLQVhWO0FBWUUsa0JBQVksRUFBRWUsWUFaaEI7QUFhRSxvQkFBYyxFQUFFcUMsY0FibEI7QUFjRSxjQUFRLEVBQUVKO0FBZFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBb0JBO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsaUJBQ0M3QyxPQUFPLGdCQUFHLHFFQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFnQixFQUR4QixlQUVFLHFFQUFDLGlFQUFEO0FBQ0ksWUFBSSxFQUFFRSxLQURWO0FBRUksYUFBSyxFQUFFSSxLQUZYO0FBR0ksZUFBTyxFQUFFRSxPQUhiO0FBSUksbUJBQVcsRUFBRUosV0FKakI7QUFLSSxvQkFBWSxFQUFFMkMsWUFMbEI7QUFNSSxnQkFBUSxFQUFFMUQsTUFBTSxDQUFDNkQsUUFOckI7QUFPSSxZQUFJLEVBQUVwQztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVdJLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUF1Q0QsQ0E1SkQ7O0dBQU0xQixLO1VBQ1lFLHFEOzs7S0FEWkYsSztBQThKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZ28vdHJhbnNwb3J0LmEzZTExMWUwYTVlYzZlYmRlODMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXInXHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvUG9zdEl0ZW0nXHJcbmltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeSc7XHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0cyc7XHJcblxyXG5jb25zdCBDYXJnbyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7ZmlsdGVyfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RvX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUocGFnZSB8fCAnMScpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbW9iaWxlRmlsdGVyLHNldEZpbHRlck1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9wcyxzZXRUb3BzXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICBjb25zdCBnZXRUb3BzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9uZXdHZXRQb3N0P2NhdGVnb3J5X2lkPTInKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0VG9wcyhyZXMuZGF0YS50b3ApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUb3BzKClcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgcGFnZVZhbCA9ICgpID0+IHBhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogcGFnZTtcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiBpZCA9PT0gdW5kZWZpbmVkIHx8IGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnN0IGZyb21JRCA9ICgpID0+IGZyb21faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogZnJvbV9pZFxyXG4gICAgY29uc3QgdG9JRCA9ICgpID0+IHRvX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IHRvX2lkXHJcblxyXG4gICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgIC8vICAgcGFnZTogcGFnZVZhbCgpLFxyXG4gICAgLy8gICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgLy8gICBmcm9tOiBmcm9tSUQoKSxcclxuICAgIC8vICAgdG86IHRvSUQoKSxcclxuICAgIC8vIH19KVxyXG4gICAgLy8gICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgLy8gICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAvLyAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgIC8vICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAvLyAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgLy8gICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0TmFtZSxjYXRJZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgZnJvbUlEID0gKCkgPT4gZnJvbV9pZCA9PT0gdW5kZWZpbmVkID8gJycgOiBmcm9tX2lkXHJcbiAgICBjb25zdCB0b0lEID0gKCkgPT4gdG9faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogdG9faWRcclxuICAgIGNvbnN0IGZyb21TdHJpbmcgPSAoKSA9PiBmcm9tX3N0cmluZyA/IGZyb21fc3RyaW5nIDogJycgXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHRvX3N0cmluZyA/IHRvX3N0cmluZyA6ICcnXHJcbiAgXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyQ2FyZ29gLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IGNhdElkPT09MCA/ICcnIDogY2F0SWQsXHJcbiAgICAgICAgZnJvbTogZnJvbUlEKCksXHJcbiAgICAgICAgdG86IHRvSUQoKSxcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9jYXJnby90cmFuc3BvcnQ/ZmlsdGVyPSR7Y2F0TmFtZX0maWQ9JHtjYXRJZH0mZnJvbV9pZD0ke2Zyb21JRCgpfSZ0b19pZD0ke3RvSUQoKX0mZnJvbV9zdHJpbmc9JHtmcm9tU3RyaW5nKCl9JnRvX3N0cmluZz0ke3RvU3RyaW5nKCl9YClcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG5cclxuICB9XHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoZnJvbSx0bywgZnJvbVN0cmluZyx0b1N0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdHlwZVRyYW5zcG9ydCA9ICgpID0+IGlkID09PSB1bmRlZmluZWQgfHwgaWQ9PT0nMCcgPyAnJyA6IGlkO1xyXG4gICAgY29uc3QgZmlsdGVyVmFsID0gKCkgPT4gZmlsdGVyID09PSB1bmRlZmluZWQgPyAnJyA6IGZpbHRlclxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnbz90eXBlX3RyYW5zcG9ydD0ke3R5cGVUcmFuc3BvcnQoKX0mZnJvbT0ke2Zyb219JnRvPSR7dG99YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhcmdvL3RyYW5zcG9ydD9maWx0ZXI9JHtmaWx0ZXJWYWwoKX0maWQ9JHt0eXBlVHJhbnNwb3J0KCl9JmZyb21faWQ9JHtmcm9tfSZ0b19pZD0ke3RvfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmd9JnRvX3N0cmluZz0ke3RvU3RyaW5nfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlID0gKHBhZ2VOdW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiBpZCA9PT0gdW5kZWZpbmVkIHx8IGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnN0IGZyb21JRCA9ICgpID0+IGZyb21faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogZnJvbV9pZFxyXG4gICAgY29uc3QgdG9JRCA9ICgpID0+IHRvX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IHRvX2lkXHJcbiAgICBjb25zdCBmaWx0ZXJWYWwgPSAoKSA9PiBmaWx0ZXIgPT09IHVuZGVmaW5lZCA/ICcnIDogZmlsdGVyXHJcbiAgICBjb25zdCBmcm9tU3RyaW5nID0gKCkgPT4gZnJvbV9zdHJpbmcgPyBmcm9tX3N0cmluZyA6ICcnIFxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB0b19zdHJpbmcgPyB0b19zdHJpbmcgOiAnJ1xyXG4gICAgY29uc29sZS5sb2cocGFnZU51bSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgICAgICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2VOdW0sXHJcbiAgICAgICAgZnJvbTogZnJvbUlEKCksXHJcbiAgICAgICAgdG86IHRvSUQoKSxcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goYD9wYWdlPSR7cGFnZU51bX0maWQ9JHt0eXBlVHJhbnNwb3J0KCl9JmZpbHRlcj0ke2ZpbHRlclZhbCgpfSZmcm9tX2lkPSR7ZnJvbUlEKCl9JmZyb21fc3RyaW5nPSR7ZnJvbVN0cmluZygpfSZ0b19pZD0ke3RvSUQoKX0mdG9fc3RyaW5nPSR7dG9TdHJpbmcoKX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgIHshbG9hZE1hcFNjcmlwdCA/IDxkaXY+INCX0LDQs9GA0YPQt9C60LAgLi4uIDwvZGl2PiA6XHJcbiAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgIHF1ZXJ5RmlsdGVyPXtmaWx0ZXIgPyBmaWx0ZXIgOiAn0JLRgdC1J31cclxuICAgICAgICAgIG9uQ2hhbmdlQ2F0ZWdvcnk9e29uQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICBmcm9tU3RyaW5nID0ge2Zyb21fc3RyaW5nfVxyXG4gICAgICAgICAgc2V0TG9hZGluZyA9IHtzZXRMb2FkaW5nfVxyXG4gICAgICAgICAgZnJvbUlkID0ge2Zyb21faWR9XHJcbiAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICAgICBzZXRUb3RhbD17c2V0VG90YWx9XHJcbiAgICAgICAgICBzZXRNYXhQYWdlPXtzZXRNYXhQYWdlfVxyXG4gICAgICAgICAgdG9TdHJpbmc9ICB7dG9fc3RyaW5nfVxyXG4gICAgICAgICAgdG9JZCA9IHt0b19pZH1cclxuICAgICAgICAgIG1vYmlsZUZpbHRlcj17bW9iaWxlRmlsdGVyfVxyXG4gICAgICAgICAgb25GaWx0ZXJNb2JpbGU9e29uRmlsdGVyTW9iaWxlfVxyXG4gICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX2NvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgIHtsb2FkaW5nID8gPExvYWRlciAvPiA6ICcnfVxyXG4gICAgICA8UG9zdEl0ZW0gXHJcbiAgICAgICAgICBwb3N0PXtwb3N0c31cclxuICAgICAgICAgIHRvdGFsPXt0b3RhbH1cclxuICAgICAgICAgIG1heFBhZ2U9e21heFBhZ2V9XHJcbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e29uQ2hhbmdlUGFnZX1cclxuICAgICAgICAgIHBhdGhOYW1lPXtyb3V0ZXIucGF0aG5hbWV9XHJcbiAgICAgICAgICB0b3BzPXt0b3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpZGVCYXJDdXJyZW5jeSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJnbyJdLCJzb3VyY2VSb290IjoiIn0=