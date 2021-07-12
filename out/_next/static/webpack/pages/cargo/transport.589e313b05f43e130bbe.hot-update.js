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
    };

    var onFilterMobile = function onFilterMobile() {
      if (!mobileFilter) {
        document.querySelector('.main_filter').style.display = 'inherit'; // document.body.style.overflow='hidden'
      } else {
        document.querySelector('.main_filter').style.display = 'none'; // document.body.style.overflow='auto'
      }

      if (window.screen.width >= 796) {
        document.querySelector('.main_filter').style.display = 'inherit';
      }

      setFilterMobile(!mobileFilter);
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
          lineNumber: 148,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 8
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 154,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
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
        lineNumber: 174,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vdHJhbnNwb3J0LmpzIl0sIm5hbWVzIjpbIkNhcmdvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyIiwicXVlcnkiLCJpZCIsImZyb21fc3RyaW5nIiwiZnJvbV9pZCIsInRvX3N0cmluZyIsInRvX2lkIiwicGFnZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidG9wcyIsInNldFRvcHMiLCJnZXRUb3BzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInRvcCIsInVzZUVmZmVjdCIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJwYWdlVmFsIiwidW5kZWZpbmVkIiwidHlwZVRyYW5zcG9ydCIsImZyb21JRCIsInRvSUQiLCJvbkZpbHRlck1vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInNjcmVlbiIsIndpZHRoIiwib25DaGFuZ2VDYXRlZ29yeSIsImNhdE5hbWUiLCJjYXRJZCIsImZyb21TdHJpbmciLCJ0b1N0cmluZyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0eXBlX3RyYW5zcG9ydCIsImZyb20iLCJ0byIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGFnaW5hdGlvbiIsIm1heF9wYWdlIiwib25TZWFyY2giLCJmaWx0ZXJWYWwiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RnBCO0FBR0UsZ0JBQVUsRUFBSTVDLFdBSGhCO0FBSUUsZ0JBQVUsRUFBSU8sVUFKaEI7QUFLRSxZQUFNLEVBQUlOLE9BTFo7QUFNRSxjQUFRLEVBQUVRLFFBTlo7QUFPRSxvQkFBYyxFQUFFRSxjQVBsQjtBQVFFLGNBQVEsRUFBRUUsUUFSWjtBQVNFLGdCQUFVLEVBQUVFLFVBVGQ7QUFVRSxjQUFRLEVBQUliLFNBVmQ7QUFXRSxVQUFJLEVBQUlDLEtBWFY7QUFZRSxrQkFBWSxFQUFFZSxZQVpoQjtBQWFFLG9CQUFjLEVBQUVrQixjQWJsQjtBQWNFLGNBQVEsRUFBRXVCO0FBZFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBMkJBO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsaUJBQ0NyRCxPQUFPLGdCQUFHLHFFQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFnQixFQUR4QixlQUVFLHFFQUFDLGlFQUFEO0FBQ0ksWUFBSSxFQUFFRSxLQURWO0FBRUksYUFBSyxFQUFFSSxLQUZYO0FBR0ksZUFBTyxFQUFFRSxPQUhiO0FBSUksbUJBQVcsRUFBRUosV0FKakI7QUFLSSxvQkFBWSxFQUFFbUQsWUFMbEI7QUFNSSxnQkFBUSxFQUFFbEUsTUFBTSxDQUFDdUUsUUFOckI7QUFPSSxZQUFJLEVBQUU5QztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVdJLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUE4Q0QsQ0FsTEQ7O0dBQU0xQixLO1VBQ1lFLHFEOzs7S0FEWkYsSztBQW9MU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZ28vdHJhbnNwb3J0LjU4OWUzMTNiMDVmNDNlMTMwYmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvb3RoZXJzL0xvYWRpbmdTcGlubmVyJ1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9GaWx0ZXInXHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvUG9zdEl0ZW0nXHJcbmltcG9ydCBTaWRlQmFyQ3VycmVuY3kgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeSc7XHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9nb29nbGVNYXBEZWZhdWx0cyc7XHJcblxyXG5jb25zdCBDYXJnbyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7ZmlsdGVyfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Zyb21faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RvX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbe31dKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUocGFnZSB8fCAnMScpXHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttYXhQYWdlLHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbG9hZE1hcFNjcmlwdCwgc2V0TG9hZE1hcFNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbW9iaWxlRmlsdGVyLHNldEZpbHRlck1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9wcyxzZXRUb3BzXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICBjb25zdCBnZXRUb3BzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9uZXdHZXRQb3N0P2NhdGVnb3J5X2lkPTInKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0VG9wcyhyZXMuZGF0YS50b3ApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUb3BzKClcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgcGFnZVZhbCA9ICgpID0+IHBhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogcGFnZTtcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiBpZCA9PT0gdW5kZWZpbmVkIHx8IGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnN0IGZyb21JRCA9ICgpID0+IGZyb21faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogZnJvbV9pZFxyXG4gICAgY29uc3QgdG9JRCA9ICgpID0+IHRvX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IHRvX2lkXHJcblxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgICBpZighbW9iaWxlRmlsdGVyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0naW5oZXJpdCc7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz0naGlkZGVuJ1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSdcclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93PSdhdXRvJ1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGg+PTc5Nikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEZpbHRlck1vYmlsZSghbW9iaWxlRmlsdGVyKVxyXG4gICAgfVxyXG4gICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgIC8vICAgcGFnZTogcGFnZVZhbCgpLFxyXG4gICAgLy8gICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgLy8gICBmcm9tOiBmcm9tSUQoKSxcclxuICAgIC8vICAgdG86IHRvSUQoKSxcclxuICAgIC8vIH19KVxyXG4gICAgLy8gICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgLy8gICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAvLyAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgIC8vICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAvLyAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgLy8gICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0TmFtZSxjYXRJZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgZnJvbUlEID0gKCkgPT4gZnJvbV9pZCA9PT0gdW5kZWZpbmVkID8gJycgOiBmcm9tX2lkXHJcbiAgICBjb25zdCB0b0lEID0gKCkgPT4gdG9faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogdG9faWRcclxuICAgIGNvbnN0IGZyb21TdHJpbmcgPSAoKSA9PiBmcm9tX3N0cmluZyA/IGZyb21fc3RyaW5nIDogJycgXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHRvX3N0cmluZyA/IHRvX3N0cmluZyA6ICcnXHJcbiAgXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyQ2FyZ29gLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IGNhdElkPT09MCA/ICcnIDogY2F0SWQsXHJcbiAgICAgICAgZnJvbTogZnJvbUlEKCksXHJcbiAgICAgICAgdG86IHRvSUQoKSxcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9jYXJnby90cmFuc3BvcnQ/ZmlsdGVyPSR7Y2F0TmFtZX0maWQ9JHtjYXRJZH0mZnJvbV9pZD0ke2Zyb21JRCgpfSZ0b19pZD0ke3RvSUQoKX0mZnJvbV9zdHJpbmc9JHtmcm9tU3RyaW5nKCl9JnRvX3N0cmluZz0ke3RvU3RyaW5nKCl9YClcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG5cclxuICB9XHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoZnJvbSx0bywgZnJvbVN0cmluZyx0b1N0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdHlwZVRyYW5zcG9ydCA9ICgpID0+IGlkID09PSB1bmRlZmluZWQgfHwgaWQ9PT0nMCcgPyAnJyA6IGlkO1xyXG4gICAgY29uc3QgZmlsdGVyVmFsID0gKCkgPT4gZmlsdGVyID09PSB1bmRlZmluZWQgPyAnJyA6IGZpbHRlclxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnbz90eXBlX3RyYW5zcG9ydD0ke3R5cGVUcmFuc3BvcnQoKX0mZnJvbT0ke2Zyb219JnRvPSR7dG99YClcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhcmdvL3RyYW5zcG9ydD9maWx0ZXI9JHtmaWx0ZXJWYWwoKX0maWQ9JHt0eXBlVHJhbnNwb3J0KCl9JmZyb21faWQ9JHtmcm9tfSZ0b19pZD0ke3RvfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmd9JnRvX3N0cmluZz0ke3RvU3RyaW5nfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlID0gKHBhZ2VOdW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiBpZCA9PT0gdW5kZWZpbmVkIHx8IGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnN0IGZyb21JRCA9ICgpID0+IGZyb21faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogZnJvbV9pZFxyXG4gICAgY29uc3QgdG9JRCA9ICgpID0+IHRvX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IHRvX2lkXHJcbiAgICBjb25zdCBmaWx0ZXJWYWwgPSAoKSA9PiBmaWx0ZXIgPT09IHVuZGVmaW5lZCA/ICcnIDogZmlsdGVyXHJcbiAgICBjb25zdCBmcm9tU3RyaW5nID0gKCkgPT4gZnJvbV9zdHJpbmcgPyBmcm9tX3N0cmluZyA6ICcnIFxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB0b19zdHJpbmcgPyB0b19zdHJpbmcgOiAnJ1xyXG4gICAgY29uc29sZS5sb2cocGFnZU51bSlcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgICAgICB0eXBlX3RyYW5zcG9ydDogdHlwZVRyYW5zcG9ydCgpLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2VOdW0sXHJcbiAgICAgICAgZnJvbTogZnJvbUlEKCksXHJcbiAgICAgICAgdG86IHRvSUQoKSxcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goYD9wYWdlPSR7cGFnZU51bX0maWQ9JHt0eXBlVHJhbnNwb3J0KCl9JmZpbHRlcj0ke2ZpbHRlclZhbCgpfSZmcm9tX2lkPSR7ZnJvbUlEKCl9JmZyb21fc3RyaW5nPSR7ZnJvbVN0cmluZygpfSZ0b19pZD0ke3RvSUQoKX0mdG9fc3RyaW5nPSR7dG9TdHJpbmcoKX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyX2ljb24nPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25GaWx0ZXJNb2JpbGUoKX0+ICAgXHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zbGlkZXJzLWggXCI+PC9pPlxyXG4gICAgIFxyXG4gICAgICAgICAgPHA+0KTQuNC70YzRgtGAIHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCE9PTAgJiYgYCgke09iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RofSlgfSA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IWxvYWRNYXBTY3JpcHQgPyA8ZGl2PiDQl9Cw0LPRgNGD0LfQutCwIC4uLiA8L2Rpdj4gOlxyXG4gICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICBxdWVyeUZpbHRlcj17ZmlsdGVyID8gZmlsdGVyIDogJ9CS0YHQtSd9XHJcbiAgICAgICAgICBvbkNoYW5nZUNhdGVnb3J5PXtvbkNoYW5nZUNhdGVnb3J5fVxyXG4gICAgICAgICAgZnJvbVN0cmluZyA9IHtmcm9tX3N0cmluZ31cclxuICAgICAgICAgIHNldExvYWRpbmcgPSB7c2V0TG9hZGluZ31cclxuICAgICAgICAgIGZyb21JZCA9IHtmcm9tX2lkfVxyXG4gICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgc2V0VG90YWw9e3NldFRvdGFsfVxyXG4gICAgICAgICAgc2V0TWF4UGFnZT17c2V0TWF4UGFnZX1cclxuICAgICAgICAgIHRvU3RyaW5nPSAge3RvX3N0cmluZ31cclxuICAgICAgICAgIHRvSWQgPSB7dG9faWR9XHJcbiAgICAgICAgICBtb2JpbGVGaWx0ZXI9e21vYmlsZUZpbHRlcn1cclxuICAgICAgICAgIG9uRmlsdGVyTW9iaWxlPXtvbkZpbHRlck1vYmlsZX1cclxuICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiAnJ31cclxuICAgICAgPFBvc3RJdGVtIFxyXG4gICAgICAgICAgcG9zdD17cG9zdHN9XHJcbiAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgICBtYXhQYWdlPXttYXhQYWdlfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICBwYXRoTmFtZT17cm91dGVyLnBhdGhuYW1lfVxyXG4gICAgICAgICAgdG9wcz17dG9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZ28iXSwic291cmNlUm9vdCI6IiJ9