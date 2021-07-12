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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      selectType = _useState9[0],
      setSelectType = _useState9[1];

  var getTops = function getTops() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://test.money-men.kz/api/newGetPost?category_id=2').then(function (res) {
      setTops(res.data.top);
    });
  };

  var onSelectType = function onSelectType(e) {
    setLoading(true);
    setSelectType(e.target.value);
    onChangeCategory(e.target.name, e.target.value);
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
      document.querySelector('.main_filter').style.display = 'none'; // document.body.style.overflow='hidden'
    }

    if (mobileFilter && window.screen.width <= 796) {
      document.querySelector('.main_filter').style.display = 'inherit';
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
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      onSearch: onSearch,
      onSelectType: onSelectType,
      selectType: selectType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
        lineNumber: 181,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }, _this);
};

_s(Cargo, "89JNyKYvIUJMMjGQXyaRs/GYARM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZ28vdHJhbnNwb3J0LmpzIl0sIm5hbWVzIjpbIkNhcmdvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyIiwicXVlcnkiLCJpZCIsImZyb21fc3RyaW5nIiwiZnJvbV9pZCIsInRvX3N0cmluZyIsInRvX2lkIiwicGFnZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsIiwic2V0VG90YWwiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsImxvYWRNYXBTY3JpcHQiLCJzZXRMb2FkTWFwU2NyaXB0IiwibW9iaWxlRmlsdGVyIiwic2V0RmlsdGVyTW9iaWxlIiwidG9wcyIsInNldFRvcHMiLCJzZWxlY3RUeXBlIiwic2V0U2VsZWN0VHlwZSIsImdldFRvcHMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidG9wIiwib25TZWxlY3RUeXBlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDYXRlZ29yeSIsIm5hbWUiLCJ1c2VFZmZlY3QiLCJsb2FkR29vZ2xlTWFwU2NyaXB0IiwicGFnZVZhbCIsInVuZGVmaW5lZCIsInR5cGVUcmFuc3BvcnQiLCJmcm9tSUQiLCJ0b0lEIiwiY2F0TmFtZSIsImNhdElkIiwiZnJvbVN0cmluZyIsInRvU3RyaW5nIiwicHJvY2VzcyIsInBhcmFtcyIsInR5cGVfdHJhbnNwb3J0IiwiZnJvbSIsInRvIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYWdpbmF0aW9uIiwibWF4X3BhZ2UiLCJvblNlYXJjaCIsImZpbHRlclZhbCIsIm9uRmlsdGVyTW9iaWxlIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiT2JqZWN0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LGdCQUFRLEVBQUV6RSxNQUFNLENBQUM4RSxRQU5yQjtBQU9JLFlBQUksRUFBRXJEO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0kscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQWdERCxDQXpMRDs7R0FBTTFCLEs7VUFDWUUscUQ7OztLQURaRixLO0FBMkxTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJnby90cmFuc3BvcnQuMzM3MjkwNThjNDdiNGU3N2U1ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L0ZpbHRlcidcclxuaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9Qb3N0SXRlbSdcclxuaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvU2lkZUJhckN1cnJlbmN5JztcclxuaW1wb3J0IHsgbG9hZEdvb2dsZU1hcFNjcmlwdCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2dvb2dsZU1hcERlZmF1bHRzJztcclxuXHJcbmNvbnN0IENhcmdvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtmaWx0ZXJ9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtmcm9tX3N0cmluZ30gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9fc3RyaW5nfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b19pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShwYWdlIHx8ICcxJylcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b3BzLHNldFRvcHNdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3NlbGVjdFR5cGUsc2V0U2VsZWN0VHlwZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBnZXRUb3BzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3Rlc3QubW9uZXktbWVuLmt6L2FwaS9uZXdHZXRQb3N0P2NhdGVnb3J5X2lkPTInKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0VG9wcyhyZXMuZGF0YS50b3ApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblNlbGVjdFR5cGUgPSAoZSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0U2VsZWN0VHlwZShlLnRhcmdldC52YWx1ZSlcclxuICAgIG9uQ2hhbmdlQ2F0ZWdvcnkoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUb3BzKClcclxuICAgIGxvYWRHb29nbGVNYXBTY3JpcHQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkTWFwU2NyaXB0KHRydWUpXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgcGFnZVZhbCA9ICgpID0+IHBhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogcGFnZTtcclxuICAgIGNvbnN0IHR5cGVUcmFuc3BvcnQgPSAoKSA9PiBpZCA9PT0gdW5kZWZpbmVkIHx8IGlkPT09JzAnID8gJycgOiBpZDtcclxuICAgIGNvbnN0IGZyb21JRCA9ICgpID0+IGZyb21faWQgPT09IHVuZGVmaW5lZCA/ICcnIDogZnJvbV9pZFxyXG4gICAgY29uc3QgdG9JRCA9ICgpID0+IHRvX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IHRvX2lkXHJcblxyXG5cclxuXHJcbiAgICAvLyBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZpbHRlckNhcmdvYCwge3BhcmFtczoge1xyXG4gICAgLy8gICBwYWdlOiBwYWdlVmFsKCksXHJcbiAgICAvLyAgIHR5cGVfdHJhbnNwb3J0OiB0eXBlVHJhbnNwb3J0KCksXHJcbiAgICAvLyAgIGZyb206IGZyb21JRCgpLFxyXG4gICAgLy8gICB0bzogdG9JRCgpLFxyXG4gICAgLy8gfX0pXHJcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAvLyAgICAgc2V0UG9zdHMocmVzLmRhdGEuZGF0YSlcclxuICAgIC8vICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgLy8gICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgIC8vICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ubWF4X3BhZ2UpXHJcbiAgICAvLyAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDYXRlZ29yeSA9IChjYXROYW1lLGNhdElkKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBmcm9tSUQgPSAoKSA9PiBmcm9tX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IGZyb21faWRcclxuICAgIGNvbnN0IHRvSUQgPSAoKSA9PiB0b19pZCA9PT0gdW5kZWZpbmVkID8gJycgOiB0b19pZFxyXG4gICAgY29uc3QgZnJvbVN0cmluZyA9ICgpID0+IGZyb21fc3RyaW5nID8gZnJvbV9zdHJpbmcgOiAnJyBcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gdG9fc3RyaW5nID8gdG9fc3RyaW5nIDogJydcclxuICBcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJDYXJnb2AsIHtwYXJhbXM6IHtcclxuICAgICAgICB0eXBlX3RyYW5zcG9ydDogY2F0SWQ9PT0wID8gJycgOiBjYXRJZCxcclxuICAgICAgICBmcm9tOiBmcm9tSUQoKSxcclxuICAgICAgICB0bzogdG9JRCgpLFxyXG4gICAgICB9fSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICByb3V0ZXIucHVzaChgL2NhcmdvL3RyYW5zcG9ydD9maWx0ZXI9JHtjYXROYW1lfSZpZD0ke2NhdElkfSZmcm9tX2lkPSR7ZnJvbUlEKCl9JnRvX2lkPSR7dG9JRCgpfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmcoKX0mdG9fc3RyaW5nPSR7dG9TdHJpbmcoKX1gKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLnBhZ2UpXHJcbiAgICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5wYWdpbmF0aW9uLnRvdGFsKVxyXG4gICAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gIH1cclxuICBjb25zdCBvblNlYXJjaCA9IChmcm9tLHRvLCBmcm9tU3RyaW5nLHRvU3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gaWQgPT09IHVuZGVmaW5lZCB8fCBpZD09PScwJyA/ICcnIDogaWQ7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWwgPSAoKSA9PiBmaWx0ZXIgPT09IHVuZGVmaW5lZCA/ICcnIDogZmlsdGVyXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZpbHRlckNhcmdvP3R5cGVfdHJhbnNwb3J0PSR7dHlwZVRyYW5zcG9ydCgpfSZmcm9tPSR7ZnJvbX0mdG89JHt0b31gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2FyZ28vdHJhbnNwb3J0P2ZpbHRlcj0ke2ZpbHRlclZhbCgpfSZpZD0ke3R5cGVUcmFuc3BvcnQoKX0mZnJvbV9pZD0ke2Zyb219JnRvX2lkPSR7dG99JmZyb21fc3RyaW5nPSR7ZnJvbVN0cmluZ30mdG9fc3RyaW5nPSR7dG9TdHJpbmd9YClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLnBhZ2luYXRpb24udG90YWwpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBpZighbW9iaWxlRmlsdGVyICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggPD03OTYpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fZmlsdGVyJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9J2hpZGRlbidcclxuICAgIH1cclxuICAgIGlmKG1vYmlsZUZpbHRlciAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9Nzk2KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2ZpbHRlcicpLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJNb2JpbGUoIW1vYmlsZUZpbHRlcilcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFnZSA9IChwYWdlTnVtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB0eXBlVHJhbnNwb3J0ID0gKCkgPT4gaWQgPT09IHVuZGVmaW5lZCB8fCBpZD09PScwJyA/ICcnIDogaWQ7XHJcbiAgICBjb25zdCBmcm9tSUQgPSAoKSA9PiBmcm9tX2lkID09PSB1bmRlZmluZWQgPyAnJyA6IGZyb21faWRcclxuICAgIGNvbnN0IHRvSUQgPSAoKSA9PiB0b19pZCA9PT0gdW5kZWZpbmVkID8gJycgOiB0b19pZFxyXG4gICAgY29uc3QgZmlsdGVyVmFsID0gKCkgPT4gZmlsdGVyID09PSB1bmRlZmluZWQgPyAnJyA6IGZpbHRlclxyXG4gICAgY29uc3QgZnJvbVN0cmluZyA9ICgpID0+IGZyb21fc3RyaW5nID8gZnJvbV9zdHJpbmcgOiAnJyBcclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gdG9fc3RyaW5nID8gdG9fc3RyaW5nIDogJydcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VOdW0pXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZmlsdGVyQ2FyZ29gLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZV90cmFuc3BvcnQ6IHR5cGVUcmFuc3BvcnQoKSxcclxuICAgICAgICBwYWdlOiBwYWdlTnVtLFxyXG4gICAgICAgIGZyb206IGZyb21JRCgpLFxyXG4gICAgICAgIHRvOiB0b0lEKCksXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKGA/cGFnZT0ke3BhZ2VOdW19JmlkPSR7dHlwZVRyYW5zcG9ydCgpfSZmaWx0ZXI9JHtmaWx0ZXJWYWwoKX0mZnJvbV9pZD0ke2Zyb21JRCgpfSZmcm9tX3N0cmluZz0ke2Zyb21TdHJpbmcoKX0mdG9faWQ9JHt0b0lEKCl9JnRvX3N0cmluZz0ke3RvU3RyaW5nKCl9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgc2V0Q3VycmVudFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5wYWdlKVxyXG4gICAgICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgICAgIHNldE1heFBhZ2UocmVzLmRhdGEucGFnaW5hdGlvbi5tYXhfcGFnZSlcclxuICAgICAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj4g0JfQsNCz0YDRg9C30LrQsCAuLi4gPC9kaXY+IDpcclxuICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgcXVlcnlGaWx0ZXI9e2ZpbHRlciA/IGZpbHRlciA6ICfQktGB0LUnfVxyXG4gICAgICAgICAgb25DaGFuZ2VDYXRlZ29yeT17b25DaGFuZ2VDYXRlZ29yeX1cclxuICAgICAgICAgIGZyb21TdHJpbmcgPSB7ZnJvbV9zdHJpbmd9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nID0ge3NldExvYWRpbmd9XHJcbiAgICAgICAgICBmcm9tSWQgPSB7ZnJvbV9pZH1cclxuICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgIHNldFRvdGFsPXtzZXRUb3RhbH1cclxuICAgICAgICAgIHNldE1heFBhZ2U9e3NldE1heFBhZ2V9XHJcbiAgICAgICAgICB0b1N0cmluZz0gIHt0b19zdHJpbmd9XHJcbiAgICAgICAgICB0b0lkID0ge3RvX2lkfVxyXG4gICAgICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICBvblNlbGVjdFR5cGU9e29uU2VsZWN0VHlwZX1cclxuICAgICAgICAgIHNlbGVjdFR5cGU9e3NlbGVjdFR5cGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAge2xvYWRpbmcgPyA8TG9hZGVyIC8+IDogJyd9XHJcbiAgICAgIDxQb3N0SXRlbSBcclxuICAgICAgICAgIHBvc3Q9e3Bvc3RzfVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgbWF4UGFnZT17bWF4UGFnZX1cclxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAgIHRvcHM9e3RvcHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZUJhckN1cnJlbmN5IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmdvIl0sInNvdXJjZVJvb3QiOiIifQ==