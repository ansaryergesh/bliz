webpackHotUpdate_N_E("pages/equipment",{

/***/ "./components/post/FilterEquipment.js":
/*!********************************************!*\
  !*** ./components/post/FilterEquipment.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/defaults */ "./defaults/defaults.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defaults_eqCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/eqCategories */ "./defaults/eqCategories.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\post\\FilterEquipment.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Filter = function Filter(_ref) {
  _s();

  var onChangeCategory = _ref.onChangeCategory,
      setPosts = _ref.setPosts,
      setTotal = _ref.setTotal,
      setCurrentPage = _ref.setCurrentPage,
      setLoading = _ref.setLoading,
      queryFilter = _ref.queryFilter,
      fromString = _ref.fromString,
      setMaxPage = _ref.setMaxPage,
      fromId = _ref.fromId,
      mobileFilter = _ref.mobileFilter,
      selectType = _ref.selectType,
      onSelectType = _ref.onSelectType,
      toString = _ref.toString,
      onFilterMobile = _ref.onFilterMobile,
      currentPlace_id = _ref.currentPlace_id,
      currentPlace_name = _ref.currentPlace_name,
      toId = _ref.toId;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var pathname = router.pathname;
  var id = router.query.id;
  var from_string = router.query.from_string;
  var from_id = router.query.from_id;
  var to_string = router.query.to_string;
  var area_start = router.query.area_start;
  var area_end = router.query.area_end;
  var price_start = router.query.price_start;
  var price_end = router.query.price_end;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      fromInput = _useState[0],
      setFromInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    areaStart: '',
    areaEnd: ''
  }),
      area = _useState2[0],
      setArea = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    priceStart: '',
    priceEnd: ''
  }),
      price = _useState3[0],
      setPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      toInput = _useState4[0],
      setToInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    address_string: fromString || from_string || currentPlace_name || '',
    address_id: fromId || from_id || currentPlace_id || ''
  }),
      addressFrom = _useState5[0],
      setAddressFrom = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    address_string: toString || '',
    address_id: toId || ''
  }),
      addressTo = _useState6[0],
      setAddressTo = _useState6[1];

  var fromRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var toRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var currentPath = router.pathname;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    initPlaceAPI();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('.big_filter_btn').click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('.main_filter__big').toggleClass('active');
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onSearch(addressFrom.address_id, addressTo.address_id, addressFrom.address_string, addressTo.address_string, area.areaStart, area.areaEnd, price.priceStart, price.priceEnd);
  }, [addressFrom, addressTo]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (area.areaStart === '' && area.areaEnd === '') {
      onSearch(addressFrom.address_id, addressTo.address_id, addressFrom.address_string, addressTo.address_string, area.areaStart, area.areaEnd, price.priceStart, price.priceEnd);
    }
  }, [area]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (price.priceStart === '' && price.priceEnd === '') {
      onSearch(addressFrom.address_id, addressTo.address_id, addressFrom.address_string, addressTo.address_string, area.areaStart, area.areaEnd, price.priceStart, price.priceEnd);
    }
  }, [price]);

  var fixPath = function fixPath(queries, newQueries) {
    delete queries.page;

    if (!addressFrom.address_id) {
      delete queries.from_id;
      delete queries.from_string;
    }

    if (!addressTo.address_id) {
      delete queries.to_id;
      delete queries.to_string;
    }

    if (!area.areaStart) {
      delete queries.area_start;
    }

    if (!area.areaEnd) {
      delete queries.area_end;
    }

    if (!price.priceStart) {
      delete queries.price_start;
    }

    if (!price.priceEnd) {
      delete queries.price_end;
    }

    if (addressFrom.address_id) {
      newQueries.from_id = addressFrom.address_id;
      newQueries.from_string = addressFrom.address_string;
    }

    if (addressTo.address_id) {
      newQueries.to_id = addressTo.address_id;
      newQueries.to_string = addressTo.address_string;
    }

    if (area.areaStart) {
      newQueries.area_start = area.areaStart;
    }

    if (area.areaEnd) {
      newQueries.area_end = area.areaEnd;
    }

    if (price.priceStart) {
      newQueries.price_start = price.priceStart;
    }

    if (price.priceEnd) {
      newQueries.price_end = price.priceEnd;
    }

    setLoading(true);

    var filterPath = function filterPath() {
      var pathname = router.pathname;

      if (pathname === '/cargo/transport') {
        return "filterCargo";
      }

      if (pathname === '/cargo') {
        return "filterPost";
      }
    };

    var finalPath = filterPath();
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat("https://test.money-men.kz/api", "/filterStorage"), {
      params: {
        city_id: addressFrom.address_id,
        area_start: area.areaStart,
        area_end: area.areaEnd,
        price_start: price.priceStart,
        price_end: price.priceEnd
      }
    }).then(function (res) {
      setLoading(false);
      setPosts(res.data.data);
      setCurrentPage(res.data.pagination.page);
      setTotal(res.data.pagination.total);
      setMaxPage(res.data.pagination.max_page);
      router.push({
        path: pathname,
        query: _objectSpread(_objectSpread({}, queries), newQueries)
      });
    });
  };

  var onSearch = function onSearch() {
    var queries = router.query;
    var newQueries = {};
    fixPath(queries, newQueries);
    onFilterMobile(); // 
  };

  var onClearFilter = function onClearFilter() {
    setTimeout(function () {
      location.reload();
    }, 200);

    if (currentPath === '/cargo') {
      router.push('/cargo');
    } else {
      router.push('/cargo/transport');
    }
  };

  function clearAddressInput(e) {
    var name = e.target.id;

    if (name === "from") {
      setFromInput("");
      setAddressFrom({
        address_string: "",
        address_id: ""
      });
    }

    if (name === "area") {
      setArea({
        areaStart: "",
        areaEnd: ""
      });
    }

    if (name === "price") {
      setPrice({
        priceStart: "",
        priceEnd: ""
      });
    }

    if (name === "to") {
      setAddressTo({
        address_string: "",
        address_id: ""
      });
    }
  }

  var initPlaceAPI = function initPlaceAPI() {
    var autocomplete = new window.google.maps.places.Autocomplete(fromRef.current, {
      types: ["(cities)"]
    });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      var place = autocomplete.getPlace();
      setFromInput('');
      setAddressFrom({
        address_string: place.formatted_address,
        address_id: place.place_id
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "main_filter filter_mobile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "close_filter",
      onClick: function onClick() {
        return onFilterMobile();
      },
      children: "\u2716"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main_filter__content container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main_filter__top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__top__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "filter__item__title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: "\u0413\u043E\u0440\u043E\u0434"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "filter__item__form address_input",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: fromInput,
                onChange: function onChange(e) {
                  return setFromInput(e.target.value);
                },
                placeholder: addressFrom.address_string || 'Город',
                ref: fromRef
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hr"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "margin_val",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return onClearFilter();
                  },
                  children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "big_filter_btn",
                  children: "\u0412\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "filter__item__form select_transports",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              value: selectType,
              onChange: function onChange(e) {
                return onSelectType(e);
              },
              children: _defaults_eqCategories__WEBPACK_IMPORTED_MODULE_7__["eqCategories"].map(function (cat) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  name: cat.name,
                  value: cat.id,
                  children: cat.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "main_filter__big",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__big__items",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__big__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "main_filter__big__item_inputs",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                value: area.areaStart,
                onChange: function onChange(e) {
                  setArea({
                    areaStart: e.target.value,
                    areaEnd: area.areaEnd
                  });
                },
                placeholder: "\u043E\u0442"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                value: area.areaEnd,
                onChange: function onChange(e) {
                  setArea({
                    areaStart: area.areaStart,
                    areaEnd: e.target.value
                  });
                },
                placeholder: "\u0434\u043E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "main_filter__big__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "\u0426\u0435\u043D\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "main_filter__big__item_inputs",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                value: price.priceStart,
                onChange: function onChange(e) {
                  return setPrice({
                    priceStart: e.target.value,
                    priceEnd: price.priceEnd
                  });
                },
                placeholder: " \u043E\u0442"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                value: price.priceEnd,
                placeholder: " \u0434\u043E",
                onChange: function onChange(e) {
                  return setPrice({
                    priceStart: price.priceStart,
                    priceEnd: e.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "filter__item__form showbtn",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return onSearch();
          },
          children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main_filter__bottom",
        children: [area_start || area_end ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__bottom__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["\u041F\u043B\u043E\u0449\u0430\u0434\u044C: ", area_start ? area_start : '∞', " \u0442\u043D - ", area_end ? area_end : '∞', " \u043C2"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            id: "area",
            className: "fas fa-times",
            onClick: function onClick(e) {
              return clearAddressInput(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 13
        }, _this) : '', price_start || price_end ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__bottom__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["\u0426\u0435\u043D\u0430: ", price_start ? price_start : '∞', " - ", price_end ? price_end : '∞']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            id: "price",
            className: "fas fa-times",
            onClick: function onClick(e) {
              return clearAddressInput(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 13
        }, _this) : '', from_string ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__bottom__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" ".concat(from_string, " "), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            id: "from",
            className: "fas fa-times",
            onClick: function onClick(e) {
              return clearAddressInput(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 13
        }, _this) : '', to_string ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main_filter__bottom__item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["\u0434\u043E: ".concat(to_string, " "), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            id: "to",
            className: "fas fa-times",
            onClick: function onClick(e) {
              return clearAddressInput(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, _this) : '']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 5
  }, _this);
};

_s(Filter, "JYrOqfGqP6X5K/XKpT6OrZBqgNM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c;

$RefreshReg$(_c, "Filter");

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

/***/ }),

/***/ "./defaults/eqCategories.js":
/*!**********************************!*\
  !*** ./defaults/eqCategories.js ***!
  \**********************************/
/*! exports provided: eqCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eqCategories", function() { return eqCategories; });
var eqCategories = [{
  "id": 1,
  "name": "Землеройная"
}, {
  "id": 2,
  "name": "Строительная"
}, {
  "id": 3,
  "name": "Бетонные работы"
}, {
  "id": 4,
  "name": "Грузоперевозки"
}, {
  "id": 5,
  "name": "Коммунальная"
}, {
  "id": 6,
  "name": "Прочее"
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/equipment/index.js":
/*!**********************************!*\
  !*** ./pages/equipment/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/post/SideBarCurrency */ "./components/post/SideBarCurrency.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_post_FilterEquipment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/FilterEquipment */ "./components/post/FilterEquipment.js");
/* harmony import */ var _components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/equipment/EquipmentItem */ "./components/equipment/EquipmentItem.js");
/* harmony import */ var _defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/googleMapDefaults */ "./defaults/googleMapDefaults.js");
/* harmony import */ var _defaults_eqCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/eqCategories */ "./defaults/eqCategories.js");


var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\pages\\equipment\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Equipment = function Equipment() {
  _s();

  var currentPlace_id = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('place_id') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('place_id') : "";
  var currentPlace_name = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('formatted_address') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('formatted_address') : "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    place_id: currentPlace_id,
    formatted_address: currentPlace_name
  }),
      geoLoc = _useState[0],
      setGeoLoc = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var page = router.query.page;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{}]),
      equipments = _useState3[0],
      setEquipments = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      maxPage = _useState6[0],
      setMaxPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadMapScript = _useState7[0],
      setLoadMapScript = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      mobileFilter = _useState8[0],
      setFilterMobile = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_defaults_googleMapDefaults__WEBPACK_IMPORTED_MODULE_8__["loadGoogleMapScript"])(function () {
      setLoadMapScript(true);
    });
    setLoading(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/getAllEquipment?page=").concat(page)).then(function (res) {
      console.log(res);
      setLoading(false);
      setEquipments(res.data.data);
      setTotal(res.data.count);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
    });
  }, []);

  var onChangePage = function onChangePage(pageNum) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("https://test.money-men.kz/api", "/getAllEquipment?page=").concat(pageNum)).then(function (res) {
      router.push("/equipment?page=".concat(pageNum));
      setLoading(false);
      setEquipments(res.data.data);
      setTotal(res.data.count);
      setMaxPage(res.data.max_page);
      setCurrentPage(res.data.current_page);
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
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\u0424\u0438\u043B\u044C\u0442\u0440 ", Object.keys(router.query).length !== 0 && "(".concat(Object.keys(router.query).length, ")"), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), !loadMapScript ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_FilterEquipment__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setLoading: setLoading,
      setPosts: setEquipments,
      setCurrentPage: setCurrentPage,
      setTotal: setTotal,
      setMaxPage: setMaxPage,
      mobileFilter: mobileFilter,
      onFilterMobile: onFilterMobile,
      currentPlace_id: geoLoc.place_id,
      currentPlace_name: geoLoc.formatted_address // onSearch={onSearch}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "products__container container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "products__content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u0421\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0430 / \u0417\u0435\u043C\u043B\u0435\u0440\u043E\u0439\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 / \u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u042D\u0441\u043A\u043E\u0432\u0430\u0442\u043E\u0440\u044B-\u043F\u043E\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", total, " \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_equipment_EquipmentItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          equipments: equipments,
          maxPage: maxPage,
          currentPage: currentPage,
          onChangePage: onChangePage,
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "products__text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u0410\u0440\u0435\u043D\u0434\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0418\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043A\u043B\u0430\u0434\u0443 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441: A, B+, B \u0438\u043B\u0438 C. \u0421\u0442\u043E\u0438\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u044B B \u0438 C \u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0433\u0434\u0435 \u0430\u0440\u0435\u043D\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 2 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u0441\u043A\u043B\u0430\u0434 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u0430\u0445 A \u0438\u043B\u0438 B+ \u043A\u043B\u0430\u0441\u0441\u0430, \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442 3 500 \u0434\u043E 20 000 \u0442\u0435\u043D\u0433\u0435 \u0437\u0430 \u043A\u0432. \u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "products__text__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "\u041E\u0442\u0432\u0435\u0442\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043A\u043B\u0430\u0434\u044B \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Bliz.kz \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0431\u0435\u0437 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0442 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u043C."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_post_SideBarCurrency__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(Equipment, "wEESTjOrpF5KPLrnuqV+qIn5TwM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Equipment;
/* harmony default export */ __webpack_exports__["default"] = (Equipment);

var _c;

$RefreshReg$(_c, "Equipment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0L0ZpbHRlckVxdWlwbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvZXFDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9lcXVpcG1lbnQvaW5kZXguanMiXSwibmFtZXMiOlsiRmlsdGVyIiwib25DaGFuZ2VDYXRlZ29yeSIsInNldFBvc3RzIiwic2V0VG90YWwiLCJzZXRDdXJyZW50UGFnZSIsInNldExvYWRpbmciLCJxdWVyeUZpbHRlciIsImZyb21TdHJpbmciLCJzZXRNYXhQYWdlIiwiZnJvbUlkIiwibW9iaWxlRmlsdGVyIiwic2VsZWN0VHlwZSIsIm9uU2VsZWN0VHlwZSIsInRvU3RyaW5nIiwib25GaWx0ZXJNb2JpbGUiLCJjdXJyZW50UGxhY2VfaWQiLCJjdXJyZW50UGxhY2VfbmFtZSIsInRvSWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJmcm9tX3N0cmluZyIsImZyb21faWQiLCJ0b19zdHJpbmciLCJhcmVhX3N0YXJ0IiwiYXJlYV9lbmQiLCJwcmljZV9zdGFydCIsInByaWNlX2VuZCIsInVzZVN0YXRlIiwiZnJvbUlucHV0Iiwic2V0RnJvbUlucHV0IiwiYXJlYVN0YXJ0IiwiYXJlYUVuZCIsImFyZWEiLCJzZXRBcmVhIiwicHJpY2VTdGFydCIsInByaWNlRW5kIiwicHJpY2UiLCJzZXRQcmljZSIsInRvSW5wdXQiLCJzZXRUb0lucHV0IiwiYWRkcmVzc19zdHJpbmciLCJhZGRyZXNzX2lkIiwiYWRkcmVzc0Zyb20iLCJzZXRBZGRyZXNzRnJvbSIsImFkZHJlc3NUbyIsInNldEFkZHJlc3NUbyIsImZyb21SZWYiLCJ1c2VSZWYiLCJ0b1JlZiIsImN1cnJlbnRQYXRoIiwidXNlRWZmZWN0IiwiaW5pdFBsYWNlQVBJIiwiJCIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJvblNlYXJjaCIsImZpeFBhdGgiLCJxdWVyaWVzIiwibmV3UXVlcmllcyIsInBhZ2UiLCJ0b19pZCIsImZpbHRlclBhdGgiLCJmaW5hbFBhdGgiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJwYXJhbXMiLCJjaXR5X2lkIiwidGhlbiIsInJlcyIsImRhdGEiLCJwYWdpbmF0aW9uIiwidG90YWwiLCJtYXhfcGFnZSIsInB1c2giLCJwYXRoIiwib25DbGVhckZpbHRlciIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNsZWFyQWRkcmVzc0lucHV0IiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJhdXRvY29tcGxldGUiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwicGxhY2VzIiwiQXV0b2NvbXBsZXRlIiwiY3VycmVudCIsInR5cGVzIiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInBsYWNlIiwiZ2V0UGxhY2UiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsInBsYWNlX2lkIiwidmFsdWUiLCJlcUNhdGVnb3JpZXMiLCJtYXAiLCJjYXQiLCJFcXVpcG1lbnQiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJnZW9Mb2MiLCJzZXRHZW9Mb2MiLCJsb2FkaW5nIiwiZXF1aXBtZW50cyIsInNldEVxdWlwbWVudHMiLCJjdXJyZW50UGFnZSIsIm1heFBhZ2UiLCJsb2FkTWFwU2NyaXB0Iiwic2V0TG9hZE1hcFNjcmlwdCIsInNldEZpbHRlck1vYmlsZSIsImxvYWRHb29nbGVNYXBTY3JpcHQiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJjdXJyZW50X3BhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BaUJIO0FBQUE7O0FBQUEsTUFoQlZDLGdCQWdCVSxRQWhCVkEsZ0JBZ0JVO0FBQUEsTUFmVkMsUUFlVSxRQWZWQSxRQWVVO0FBQUEsTUFkVkMsUUFjVSxRQWRWQSxRQWNVO0FBQUEsTUFiVkMsY0FhVSxRQWJWQSxjQWFVO0FBQUEsTUFaVkMsVUFZVSxRQVpWQSxVQVlVO0FBQUEsTUFYVkMsV0FXVSxRQVhWQSxXQVdVO0FBQUEsTUFWVkMsVUFVVSxRQVZWQSxVQVVVO0FBQUEsTUFUVkMsVUFTVSxRQVRWQSxVQVNVO0FBQUEsTUFSVkMsTUFRVSxRQVJWQSxNQVFVO0FBQUEsTUFQVkMsWUFPVSxRQVBWQSxZQU9VO0FBQUEsTUFOVkMsVUFNVSxRQU5WQSxVQU1VO0FBQUEsTUFMVkMsWUFLVSxRQUxWQSxZQUtVO0FBQUEsTUFKVkMsUUFJVSxRQUpWQSxRQUlVO0FBQUEsTUFIVkMsY0FHVSxRQUhWQSxjQUdVO0FBQUEsTUFGVkMsZUFFVSxRQUZWQSxlQUVVO0FBQUEsTUFEVkMsaUJBQ1UsUUFEVkEsaUJBQ1U7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDVixNQUFNQyxNQUFNLEdBQUlDLDZEQUFTLEVBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQXhCO0FBRlUsTUFHSEMsRUFIRyxHQUdHSCxNQUFNLENBQUNJLEtBSFYsQ0FHSEQsRUFIRztBQUFBLE1BSUhFLFdBSkcsR0FJWUwsTUFBTSxDQUFDSSxLQUpuQixDQUlIQyxXQUpHO0FBQUEsTUFLSEMsT0FMRyxHQUtRTixNQUFNLENBQUNJLEtBTGYsQ0FLSEUsT0FMRztBQUFBLE1BTUhDLFNBTkcsR0FNVVAsTUFBTSxDQUFDSSxLQU5qQixDQU1IRyxTQU5HO0FBQUEsTUFPSEMsVUFQRyxHQU9XUixNQUFNLENBQUNJLEtBUGxCLENBT0hJLFVBUEc7QUFBQSxNQVFIQyxRQVJHLEdBUVNULE1BQU0sQ0FBQ0ksS0FSaEIsQ0FRSEssUUFSRztBQUFBLE1BU0hDLFdBVEcsR0FTWVYsTUFBTSxDQUFDSSxLQVRuQixDQVNITSxXQVRHO0FBQUEsTUFVSEMsU0FWRyxHQVVVWCxNQUFNLENBQUNJLEtBVmpCLENBVUhPLFNBVkc7O0FBQUEsa0JBV3dCQyxzREFBUSxDQUFDLEVBQUQsQ0FYaEM7QUFBQSxNQVdIQyxTQVhHO0FBQUEsTUFXUUMsWUFYUjs7QUFBQSxtQkFZYUYsc0RBQVEsQ0FBQztBQUFDRyxhQUFTLEVBQUUsRUFBWjtBQUFlQyxXQUFPLEVBQUM7QUFBdkIsR0FBRCxDQVpyQjtBQUFBLE1BWUhDLElBWkc7QUFBQSxNQVlFQyxPQVpGOztBQUFBLG1CQWFlTixzREFBUSxDQUFDO0FBQUNPLGNBQVUsRUFBRSxFQUFiO0FBQWdCQyxZQUFRLEVBQUM7QUFBekIsR0FBRCxDQWJ2QjtBQUFBLE1BYUhDLEtBYkc7QUFBQSxNQWFHQyxRQWJIOztBQUFBLG1CQWNtQlYsc0RBQVEsQ0FBQyxFQUFELENBZDNCO0FBQUEsTUFjSFcsT0FkRztBQUFBLE1BY0tDLFVBZEw7O0FBQUEsbUJBZTJCWixzREFBUSxDQUFDO0FBQUNhLGtCQUFjLEVBQUVwQyxVQUFVLElBQUlnQixXQUFkLElBQTZCUCxpQkFBN0IsSUFBbUQsRUFBcEU7QUFBd0U0QixjQUFVLEVBQUVuQyxNQUFNLElBQUllLE9BQVYsSUFBcUJULGVBQXJCLElBQXdDO0FBQTVILEdBQUQsQ0FmbkM7QUFBQSxNQWVIOEIsV0FmRztBQUFBLE1BZVNDLGNBZlQ7O0FBQUEsbUJBZ0J1QmhCLHNEQUFRLENBQUM7QUFBQ2Esa0JBQWMsRUFBRTlCLFFBQVEsSUFBSSxFQUE3QjtBQUFpQytCLGNBQVUsRUFBRTNCLElBQUksSUFBSTtBQUFyRCxHQUFELENBaEIvQjtBQUFBLE1BZ0JIOEIsU0FoQkc7QUFBQSxNQWdCT0MsWUFoQlA7O0FBaUJWLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNRSxXQUFXLEdBQUdsQyxNQUFNLENBQUNFLFFBQTNCO0FBQ0FpQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0JBQVk7QUFDWkMsaURBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxLQUFyQixDQUEyQixZQUFVO0FBQ25DRCxtREFBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJFLFdBQXZCLENBQW1DLFFBQW5DO0FBQ0QsS0FGRDtBQUlELEdBTlEsRUFNUCxFQU5PLENBQVQ7QUFRQUoseURBQVMsQ0FBQyxZQUFNO0FBQ2RLLFlBQVEsQ0FDTmIsV0FBVyxDQUFDRCxVQUROLEVBRU5HLFNBQVMsQ0FBQ0gsVUFGSixFQUdOQyxXQUFXLENBQUNGLGNBSE4sRUFJTkksU0FBUyxDQUFDSixjQUpKLEVBS05SLElBQUksQ0FBQ0YsU0FMQyxFQU1ORSxJQUFJLENBQUNELE9BTkMsRUFPTkssS0FBSyxDQUFDRixVQVBBLEVBUU5FLEtBQUssQ0FBQ0QsUUFSQSxDQUFSO0FBVUQsR0FYUSxFQVdQLENBQUNPLFdBQUQsRUFBYUUsU0FBYixDQVhPLENBQVQ7QUFhQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR2xCLElBQUksQ0FBQ0YsU0FBTCxLQUFtQixFQUFuQixJQUF5QkUsSUFBSSxDQUFDRCxPQUFMLEtBQWdCLEVBQTVDLEVBQWdEO0FBQzlDd0IsY0FBUSxDQUNOYixXQUFXLENBQUNELFVBRE4sRUFFTkcsU0FBUyxDQUFDSCxVQUZKLEVBR05DLFdBQVcsQ0FBQ0YsY0FITixFQUlOSSxTQUFTLENBQUNKLGNBSkosRUFLTlIsSUFBSSxDQUFDRixTQUxDLEVBTU5FLElBQUksQ0FBQ0QsT0FOQyxFQU9OSyxLQUFLLENBQUNGLFVBUEEsRUFRTkUsS0FBSyxDQUFDRCxRQVJBLENBQVI7QUFVRDtBQUNGLEdBYlEsRUFhUCxDQUFDSCxJQUFELENBYk8sQ0FBVDtBQWdCQWtCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdkLEtBQUssQ0FBQ0YsVUFBTixLQUFxQixFQUFyQixJQUEyQkUsS0FBSyxDQUFDRCxRQUFOLEtBQWtCLEVBQWhELEVBQW9EO0FBQ2xEb0IsY0FBUSxDQUNOYixXQUFXLENBQUNELFVBRE4sRUFFTkcsU0FBUyxDQUFDSCxVQUZKLEVBR05DLFdBQVcsQ0FBQ0YsY0FITixFQUlOSSxTQUFTLENBQUNKLGNBSkosRUFLTlIsSUFBSSxDQUFDRixTQUxDLEVBTU5FLElBQUksQ0FBQ0QsT0FOQyxFQU9OSyxLQUFLLENBQUNGLFVBUEEsRUFRTkUsS0FBSyxDQUFDRCxRQVJBLENBQVI7QUFVRDtBQUNGLEdBYlEsRUFhUCxDQUFDQyxLQUFELENBYk8sQ0FBVDs7QUFlQSxNQUFNb0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLEVBQXlCO0FBQ3ZDLFdBQU9ELE9BQU8sQ0FBQ0UsSUFBZjs7QUFDQSxRQUFHLENBQUNqQixXQUFXLENBQUNELFVBQWhCLEVBQTRCO0FBQzFCLGFBQU9nQixPQUFPLENBQUNwQyxPQUFmO0FBQ0EsYUFBT29DLE9BQU8sQ0FBQ3JDLFdBQWY7QUFDRDs7QUFDRCxRQUFHLENBQUN3QixTQUFTLENBQUNILFVBQWQsRUFBMEI7QUFDeEIsYUFBT2dCLE9BQU8sQ0FBQ0csS0FBZjtBQUNBLGFBQU9ILE9BQU8sQ0FBQ25DLFNBQWY7QUFDRDs7QUFDRCxRQUFHLENBQUNVLElBQUksQ0FBQ0YsU0FBVCxFQUFvQjtBQUNsQixhQUFPMkIsT0FBTyxDQUFDbEMsVUFBZjtBQUNEOztBQUNELFFBQUcsQ0FBQ1MsSUFBSSxDQUFDRCxPQUFULEVBQWtCO0FBQ2hCLGFBQU8wQixPQUFPLENBQUNqQyxRQUFmO0FBQ0Q7O0FBQ0QsUUFBRyxDQUFDWSxLQUFLLENBQUNGLFVBQVYsRUFBc0I7QUFDcEIsYUFBT3VCLE9BQU8sQ0FBQ2hDLFdBQWY7QUFDRDs7QUFDRCxRQUFHLENBQUNXLEtBQUssQ0FBQ0QsUUFBVixFQUFvQjtBQUNsQixhQUFPc0IsT0FBTyxDQUFDL0IsU0FBZjtBQUNEOztBQUVELFFBQUdnQixXQUFXLENBQUNELFVBQWYsRUFBMkI7QUFDekJpQixnQkFBVSxDQUFDckMsT0FBWCxHQUFxQnFCLFdBQVcsQ0FBQ0QsVUFBakM7QUFDQWlCLGdCQUFVLENBQUN0QyxXQUFYLEdBQXlCc0IsV0FBVyxDQUFDRixjQUFyQztBQUNEOztBQUNELFFBQUdJLFNBQVMsQ0FBQ0gsVUFBYixFQUF5QjtBQUN2QmlCLGdCQUFVLENBQUNFLEtBQVgsR0FBbUJoQixTQUFTLENBQUNILFVBQTdCO0FBQ0FpQixnQkFBVSxDQUFDcEMsU0FBWCxHQUF1QnNCLFNBQVMsQ0FBQ0osY0FBakM7QUFDRDs7QUFDRCxRQUFHUixJQUFJLENBQUNGLFNBQVIsRUFBbUI7QUFDakI0QixnQkFBVSxDQUFDbkMsVUFBWCxHQUF3QlMsSUFBSSxDQUFDRixTQUE3QjtBQUNEOztBQUNELFFBQUdFLElBQUksQ0FBQ0QsT0FBUixFQUFpQjtBQUNmMkIsZ0JBQVUsQ0FBQ2xDLFFBQVgsR0FBc0JRLElBQUksQ0FBQ0QsT0FBM0I7QUFDRDs7QUFDRCxRQUFHSyxLQUFLLENBQUNGLFVBQVQsRUFBcUI7QUFDbkJ3QixnQkFBVSxDQUFDakMsV0FBWCxHQUF5QlcsS0FBSyxDQUFDRixVQUEvQjtBQUNEOztBQUNELFFBQUdFLEtBQUssQ0FBQ0QsUUFBVCxFQUFtQjtBQUNqQnVCLGdCQUFVLENBQUNoQyxTQUFYLEdBQXVCVSxLQUFLLENBQUNELFFBQTdCO0FBQ0Q7O0FBQ0RqQyxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQU0yRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFVBQUk1QyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBdEI7O0FBQ0EsVUFBR0EsUUFBUSxLQUFLLGtCQUFoQixFQUFvQztBQUNsQyxlQUFPLGFBQVA7QUFDRDs7QUFDRCxVQUFHQSxRQUFRLEtBQUssUUFBaEIsRUFBMEI7QUFDeEIsZUFBTyxZQUFQO0FBQ0Q7QUFDRixLQVJEOztBQVNBLFFBQU02QyxTQUFTLEdBQUdELFVBQVUsRUFBNUI7QUFDQUUsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhQywrQkFBYixxQkFBbUQ7QUFBQ0MsWUFBTSxFQUFFO0FBQzFEQyxlQUFPLEVBQUV6QixXQUFXLENBQUNELFVBRHFDO0FBRTFEbEIsa0JBQVUsRUFBRVMsSUFBSSxDQUFDRixTQUZ5QztBQUcxRE4sZ0JBQVEsRUFBRVEsSUFBSSxDQUFDRCxPQUgyQztBQUkxRE4sbUJBQVcsRUFBRVcsS0FBSyxDQUFDRixVQUp1QztBQUsxRFIsaUJBQVMsRUFBRVUsS0FBSyxDQUFDRDtBQUx5QztBQUFULEtBQW5ELEVBT0NpQyxJQVBELENBT00sVUFBQUMsR0FBRyxFQUFHO0FBQ1ZuRSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBSCxjQUFRLENBQUNzRSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0FyRSxvQkFBYyxDQUFDb0UsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFVBQVQsQ0FBb0JaLElBQXJCLENBQWQ7QUFDQTNELGNBQVEsQ0FBQ3FFLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxVQUFULENBQW9CQyxLQUFyQixDQUFSO0FBQ0FuRSxnQkFBVSxDQUFDZ0UsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFVBQVQsQ0FBb0JFLFFBQXJCLENBQVY7QUFDQTFELFlBQU0sQ0FBQzJELElBQVAsQ0FBWTtBQUFDQyxZQUFJLEVBQUUxRCxRQUFQO0FBQWlCRSxhQUFLLGtDQUFNc0MsT0FBTixHQUFrQkMsVUFBbEI7QUFBdEIsT0FBWjtBQUNELEtBZEQ7QUFlRCxHQXJFRDs7QUF1RUEsTUFBTUgsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNRSxPQUFPLEdBQUcxQyxNQUFNLENBQUNJLEtBQXZCO0FBQ0EsUUFBTXVDLFVBQVUsR0FBRyxFQUFuQjtBQUNBRixXQUFPLENBQUNDLE9BQUQsRUFBU0MsVUFBVCxDQUFQO0FBQ0EvQyxrQkFBYyxHQUpPLENBS3JCO0FBQ0QsR0FORDs7QUFRQSxNQUFNaUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCQyxjQUFVLENBQUMsWUFBTTtBQUNmQyxjQUFRLENBQUNDLE1BQVQ7QUFDRCxLQUZTLEVBRVAsR0FGTyxDQUFWOztBQUdBLFFBQUc5QixXQUFXLEtBQUssUUFBbkIsRUFBNkI7QUFDM0JsQyxZQUFNLENBQUMyRCxJQUFQLENBQVksUUFBWjtBQUNELEtBRkQsTUFFTTtBQUNKM0QsWUFBTSxDQUFDMkQsSUFBUCxDQUFZLGtCQUFaO0FBQ0Q7QUFFRixHQVZEOztBQVdDLFdBQVNNLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUM3QixRQUFJQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTakUsRUFBcEI7O0FBQ0EsUUFBR2dFLElBQUksS0FBRyxNQUFWLEVBQWtCO0FBQ2hCckQsa0JBQVksQ0FBQyxFQUFELENBQVo7QUFDQWMsb0JBQWMsQ0FBQztBQUFDSCxzQkFBYyxFQUFFLEVBQWpCO0FBQXFCQyxrQkFBVSxFQUFFO0FBQWpDLE9BQUQsQ0FBZDtBQUNEOztBQUNELFFBQUd5QyxJQUFJLEtBQUssTUFBWixFQUFvQjtBQUNsQmpELGFBQU8sQ0FBQztBQUFDSCxpQkFBUyxFQUFFLEVBQVo7QUFBZ0JDLGVBQU8sRUFBRTtBQUF6QixPQUFELENBQVA7QUFDRDs7QUFDRCxRQUFHbUQsSUFBSSxLQUFLLE9BQVosRUFBcUI7QUFDbkI3QyxjQUFRLENBQUM7QUFBQ0gsa0JBQVUsRUFBRSxFQUFiO0FBQWlCQyxnQkFBUSxFQUFFO0FBQTNCLE9BQUQsQ0FBUjtBQUNEOztBQUNELFFBQUcrQyxJQUFJLEtBQUcsSUFBVixFQUFnQjtBQUNkckMsa0JBQVksQ0FBQztBQUFDTCxzQkFBYyxFQUFFLEVBQWpCO0FBQXFCQyxrQkFBVSxFQUFFO0FBQWpDLE9BQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJaUMsWUFBWSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxNQUFuQixDQUEwQkMsWUFBOUIsQ0FBMkMzQyxPQUFPLENBQUM0QyxPQUFuRCxFQUNqQjtBQUFFQyxXQUFLLEVBQUUsQ0FBQyxVQUFEO0FBQVQsS0FEaUIsQ0FBbkI7QUFHQSxRQUFJTixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkssS0FBbkIsQ0FBeUJDLFdBQTdCLENBQXlDVCxZQUF6QyxFQUF1RCxlQUF2RCxFQUF3RSxZQUFZO0FBQ2xGLFVBQUlVLEtBQUssR0FBR1YsWUFBWSxDQUFDVyxRQUFiLEVBQVo7QUFDQWxFLGtCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FjLG9CQUFjLENBQUM7QUFBQ0gsc0JBQWMsRUFBRXNELEtBQUssQ0FBQ0UsaUJBQXZCO0FBQTBDdkQsa0JBQVUsRUFBRXFELEtBQUssQ0FBQ0c7QUFBNUQsT0FBRCxDQUFkO0FBQ0QsS0FKRDtBQU1ELEdBVkQ7O0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU10RixjQUFjLEVBQXBCO0FBQUEsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsa0NBQWY7QUFBQSxzQ0FDRTtBQUFPLG9CQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBSyxFQUFFaUIsU0FBMUI7QUFBcUMsd0JBQVEsRUFBRSxrQkFBQ3FELENBQUQ7QUFBQSx5QkFBT3BELFlBQVksQ0FBQ29ELENBQUMsQ0FBQ0UsTUFBRixDQUFTZSxLQUFWLENBQW5CO0FBQUEsaUJBQS9DO0FBQW9GLDJCQUFXLEVBQUV4RCxXQUFXLENBQUNGLGNBQVosSUFBOEIsT0FBL0g7QUFBd0ksbUJBQUcsRUFBRU07QUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNBO0FBQVEseUJBQU8sRUFBRTtBQUFBLDJCQUFNOEIsYUFBYSxFQUFuQjtBQUFBLG1CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxlQUVBO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLDJCQUFTLEVBQUMsZ0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBWUU7QUFBSyxxQkFBUyxFQUFDLHNDQUFmO0FBQUEsbUNBQ0k7QUFBUSxtQkFBSyxFQUFFcEUsVUFBZjtBQUEyQixzQkFBUSxFQUFFLGtCQUFBeUUsQ0FBQztBQUFBLHVCQUFHeEUsWUFBWSxDQUFDd0UsQ0FBRCxDQUFmO0FBQUEsZUFBdEM7QUFBQSx3QkFDR2tCLG1FQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQUMsR0FBRztBQUFBLG9DQUNuQjtBQUFRLHNCQUFJLEVBQUVBLEdBQUcsQ0FBQ25CLElBQWxCO0FBQXdCLHVCQUFLLEVBQUVtQixHQUFHLENBQUNuRixFQUFuQztBQUFBLDRCQUF3Q21GLEdBQUcsQ0FBQ25CO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRG1CO0FBQUEsZUFBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUF1QkU7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLCtCQUFmO0FBQUEsc0NBQ0E7QUFBTyxvQkFBSSxFQUFDLFFBQVo7QUFBcUIscUJBQUssRUFBRWxELElBQUksQ0FBQ0YsU0FBakM7QUFBNEMsd0JBQVEsRUFBRSxrQkFBQ21ELENBQUQsRUFBSztBQUFDaEQseUJBQU8sQ0FBQztBQUFDSCw2QkFBUyxFQUFFbUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNlLEtBQXJCO0FBQTRCbkUsMkJBQU8sRUFBQ0MsSUFBSSxDQUFDRDtBQUF6QyxtQkFBRCxDQUFQO0FBQTJELGlCQUF2SDtBQUF5SCwyQkFBVyxFQUFDO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQSxlQUdBO0FBQU8sb0JBQUksRUFBQyxRQUFaO0FBQXFCLHFCQUFLLEVBQUVDLElBQUksQ0FBQ0QsT0FBakM7QUFBMEMsd0JBQVEsRUFBRSxrQkFBQ2tELENBQUQsRUFBTztBQUFDaEQseUJBQU8sQ0FBQztBQUFDSCw2QkFBUyxFQUFFRSxJQUFJLENBQUNGLFNBQWpCO0FBQTRCQywyQkFBTyxFQUFFa0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNlO0FBQTlDLG1CQUFELENBQVA7QUFBOEQsaUJBQTFIO0FBQTRILDJCQUFXLEVBQUM7QUFBeEk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsK0JBQWY7QUFBQSxzQ0FDQTtBQUFPLG9CQUFJLEVBQUMsUUFBWjtBQUFxQixxQkFBSyxFQUFFOUQsS0FBSyxDQUFDRixVQUFsQztBQUE4Qyx3QkFBUSxFQUFFLGtCQUFDK0MsQ0FBRDtBQUFBLHlCQUFPNUMsUUFBUSxDQUFDO0FBQUNILDhCQUFVLEVBQUUrQyxDQUFDLENBQUNFLE1BQUYsQ0FBU2UsS0FBdEI7QUFBNkIvRCw0QkFBUSxFQUFFQyxLQUFLLENBQUNEO0FBQTdDLG1CQUFELENBQWY7QUFBQSxpQkFBeEQ7QUFBaUksMkJBQVcsRUFBQztBQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkEsZUFHQTtBQUFPLG9CQUFJLEVBQUMsUUFBWjtBQUFxQixxQkFBSyxFQUFFQyxLQUFLLENBQUNELFFBQWxDO0FBQTRDLDJCQUFXLEVBQUMsZUFBeEQ7QUFBOEQsd0JBQVEsRUFBRSxrQkFBQzhDLENBQUQ7QUFBQSx5QkFBTzVDLFFBQVEsQ0FBQztBQUFDSCw4QkFBVSxFQUFFRSxLQUFLLENBQUNGLFVBQW5CO0FBQStCQyw0QkFBUSxFQUFFOEMsQ0FBQyxDQUFDRSxNQUFGLENBQVNlO0FBQWxELG1CQUFELENBQWY7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQTRDRTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFDRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTTNDLFFBQVEsRUFBZDtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVDRixlQWdERTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxtQkFDR2hDLFVBQVUsSUFBSUMsUUFBZCxnQkFDQztBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxrQ0FDRTtBQUFBLHVFQUFhRCxVQUFVLEdBQUdBLFVBQUgsR0FBZ0IsR0FBdkMsc0JBQWtEQyxRQUFRLEdBQUdBLFFBQUgsR0FBYyxHQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLGNBQUUsRUFBQyxNQUFOO0FBQWEscUJBQVMsRUFBQyxjQUF2QjtBQUFzQyxtQkFBTyxFQUFFLGlCQUFDeUQsQ0FBRDtBQUFBLHFCQUFNRCxpQkFBaUIsQ0FBQ0MsQ0FBRCxDQUF2QjtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBS0MsRUFOSixFQVFDeEQsV0FBVyxJQUFJQyxTQUFmLGdCQUNHO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUNFO0FBQUEscURBQVVELFdBQVcsR0FBR0EsV0FBSCxHQUFpQixHQUF0QyxTQUE4Q0MsU0FBUyxHQUFHQSxTQUFILEdBQWUsR0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxjQUFFLEVBQUMsT0FBTjtBQUFjLHFCQUFTLEVBQUMsY0FBeEI7QUFBdUMsbUJBQU8sRUFBRSxpQkFBQ3VELENBQUQ7QUFBQSxxQkFBTUQsaUJBQWlCLENBQUNDLENBQUQsQ0FBdkI7QUFBQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxHQUtHLEVBYkosRUFlRzdELFdBQVcsZ0JBQ1Y7QUFBSyxtQkFBUyxFQUFDLDJCQUFmO0FBQUEsa0NBQ0U7QUFBQSxrQ0FBUUEsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLGNBQUUsRUFBQyxNQUFOO0FBQWEscUJBQVMsRUFBQyxjQUF2QjtBQUFzQyxtQkFBTyxFQUFFLGlCQUFDNkQsQ0FBRDtBQUFBLHFCQUFNRCxpQkFBaUIsQ0FBQ0MsQ0FBRCxDQUF2QjtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVLEdBTVosRUFyQkYsRUF1QkczRCxTQUFTLGdCQUNSO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUNFO0FBQUEsK0NBQVdBLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxjQUFFLEVBQUMsSUFBTjtBQUFXLHFCQUFTLEVBQUMsY0FBckI7QUFBb0MsbUJBQU8sRUFBRSxpQkFBQzJELENBQUQ7QUFBQSxxQkFBTUQsaUJBQWlCLENBQUNDLENBQUQsQ0FBdkI7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxHQU1WLEVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFGRCxDQXBTRDs7R0FBTXBGLE07VUFrQlltQixxRDs7O0tBbEJabkIsTTtBQXNTU0EscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5U0E7QUFBQTtBQUFPLElBQU1zRyxZQUFZLEdBQUUsQ0FDekI7QUFDRSxRQUFNLENBRFI7QUFFRSxVQUFRO0FBRlYsQ0FEeUIsRUFLekI7QUFDRSxRQUFNLENBRFI7QUFFRSxVQUFRO0FBRlYsQ0FMeUIsRUFTekI7QUFDRSxRQUFNLENBRFI7QUFFRSxVQUFRO0FBRlYsQ0FUeUIsRUFhekI7QUFDRSxRQUFNLENBRFI7QUFFRSxVQUFRO0FBRlYsQ0FieUIsRUFpQnpCO0FBQ0UsUUFBTSxDQURSO0FBRUUsVUFBUTtBQUZWLENBakJ5QixFQXFCekI7QUFDRSxRQUFNLENBRFI7QUFFRSxVQUFRO0FBRlYsQ0FyQnlCLENBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTTFGLGVBQWUsR0FBRzJGLGdEQUFNLENBQUN2QyxHQUFQLENBQVcsVUFBWCxNQUEyQndDLFNBQTNCLEdBQXVDRCxnREFBTSxDQUFDdkMsR0FBUCxDQUFXLFVBQVgsQ0FBdkMsR0FBZ0UsRUFBeEY7QUFDQSxNQUFNbkQsaUJBQWlCLEdBQUcwRixnREFBTSxDQUFDdkMsR0FBUCxDQUFXLG1CQUFYLE1BQW9Dd0MsU0FBcEMsR0FBZ0RELGdEQUFNLENBQUN2QyxHQUFQLENBQVcsbUJBQVgsQ0FBaEQsR0FBa0YsRUFBNUc7O0FBRnNCLGtCQUdNckMsc0RBQVEsQ0FBQztBQUFDc0UsWUFBUSxFQUFFckYsZUFBWDtBQUE0Qm9GLHFCQUFpQixFQUFFbkY7QUFBL0MsR0FBRCxDQUhkO0FBQUEsTUFHZjRGLE1BSGU7QUFBQSxNQUdQQyxTQUhPOztBQUl0QixNQUFNM0YsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUpzQixNQUtmRSxFQUxlLEdBS1RILE1BQU0sQ0FBQ0ksS0FMRSxDQUtmRCxFQUxlO0FBQUEsTUFNZnlDLElBTmUsR0FNUDVDLE1BQU0sQ0FBQ0ksS0FOQSxDQU1md0MsSUFOZTs7QUFBQSxtQkFPUWhDLHNEQUFRLENBQUMsSUFBRCxDQVBoQjtBQUFBLE1BT2ZnRixPQVBlO0FBQUEsTUFPTnpHLFVBUE07O0FBQUEsbUJBUWF5QixzREFBUSxDQUFDLENBQUMsRUFBRCxDQUFELENBUnJCO0FBQUEsTUFRZmlGLFVBUmU7QUFBQSxNQVFKQyxhQVJJOztBQUFBLG1CQVNHbEYsc0RBQVEsQ0FBQyxDQUFELENBVFg7QUFBQSxNQVNmNkMsS0FUZTtBQUFBLE1BU1R4RSxRQVRTOztBQUFBLG1CQVVlMkIsc0RBQVEsQ0FBQyxDQUFELENBVnZCO0FBQUEsTUFVZm1GLFdBVmU7QUFBQSxNQVVIN0csY0FWRzs7QUFBQSxtQkFXTzBCLHNEQUFRLENBQUMsQ0FBRCxDQVhmO0FBQUEsTUFXZm9GLE9BWGU7QUFBQSxNQVdQMUcsVUFYTzs7QUFBQSxtQkFZb0JzQixzREFBUSxDQUFDLEtBQUQsQ0FaNUI7QUFBQSxNQVlmcUYsYUFaZTtBQUFBLE1BWUFDLGdCQVpBOztBQUFBLG1CQWFpQnRGLHNEQUFRLENBQUMsS0FBRCxDQWJ6QjtBQUFBLE1BYWZwQixZQWJlO0FBQUEsTUFhRjJHLGVBYkU7O0FBZXRCaEUseURBQVMsQ0FBQyxZQUFNO0FBQ2RpRSwyRkFBbUIsQ0FBQyxZQUFNO0FBQ3hCRixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsS0FGa0IsQ0FBbkI7QUFHQS9HLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUxRLEVBS1AsRUFMTyxDQUFUO0FBT0FnRCx5REFBUyxDQUFDLFlBQU07QUFDZGhELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQTZELGdEQUFLLENBQUNDLEdBQU4sV0FBYUMsK0JBQWIsbUNBQTBETixJQUExRCxHQUNHUyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1YrQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWhELEdBQVo7QUFDQW5FLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EyRyxtQkFBYSxDQUFDeEMsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBYjtBQUNBdEUsY0FBUSxDQUFDcUUsR0FBRyxDQUFDQyxJQUFKLENBQVNnRCxLQUFWLENBQVI7QUFDQWpILGdCQUFVLENBQUNnRSxHQUFHLENBQUNDLElBQUosQ0FBU0csUUFBVixDQUFWO0FBQ0F4RSxvQkFBYyxDQUFDb0UsR0FBRyxDQUFDQyxJQUFKLENBQVNpRCxZQUFWLENBQWQ7QUFDRCxLQVJIO0FBU0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDs7QUFZQSxNQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUIxRCxnREFBSyxDQUFDQyxHQUFOLFdBQWFDLCtCQUFiLG1DQUEwRHdELE9BQTFELEdBQ0dyRCxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1Z0RCxZQUFNLENBQUMyRCxJQUFQLDJCQUErQitDLE9BQS9CO0FBQ0F2SCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBMkcsbUJBQWEsQ0FBQ3hDLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQWI7QUFDQXRFLGNBQVEsQ0FBQ3FFLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZ0QsS0FBVixDQUFSO0FBQ0FqSCxnQkFBVSxDQUFDZ0UsR0FBRyxDQUFDQyxJQUFKLENBQVNHLFFBQVYsQ0FBVjtBQUNBeEUsb0JBQWMsQ0FBQ29FLEdBQUcsQ0FBQ0MsSUFBSixDQUFTaUQsWUFBVixDQUFkO0FBQ0QsS0FSSDtBQVNELEdBVkQ7O0FBV0Esc0JBQ0U7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0E7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBTTVHLGNBQWMsRUFBcEI7QUFBQSxTQUFkO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFBLDhEQUFXK0csTUFBTSxDQUFDQyxJQUFQLENBQVk1RyxNQUFNLENBQUNJLEtBQW5CLEVBQTBCeUcsTUFBMUIsS0FBbUMsQ0FBbkMsZUFBNENGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNUcsTUFBTSxDQUFDSSxLQUFuQixFQUEwQnlHLE1BQXRFLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQVFHLENBQUNaLGFBQUQsZ0JBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCLGdCQUVELHFFQUFDLHdFQUFEO0FBQ0MsZ0JBQVUsRUFBRTlHLFVBRGI7QUFFQyxjQUFRLEVBQUUyRyxhQUZYO0FBR0Msb0JBQWMsRUFBRTVHLGNBSGpCO0FBSUMsY0FBUSxFQUFFRCxRQUpYO0FBS0MsZ0JBQVUsRUFBRUssVUFMYjtBQU1DLGtCQUFZLEVBQUVFLFlBTmY7QUFPQyxvQkFBYyxFQUFFSSxjQVBqQjtBQVFDLHFCQUFlLEVBQUU4RixNQUFNLENBQUNSLFFBUnpCO0FBU0MsdUJBQWlCLEVBQUVRLE1BQU0sQ0FBQ1QsaUJBVDNCLENBVUM7O0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBdUJFO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsc0VBQWF4QixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSxxRUFBQywyRUFBRDtBQUFlLG9CQUFVLEVBQUVvQyxVQUEzQjtBQUF1QyxpQkFBTyxFQUFFRyxPQUFoRDtBQUF5RCxxQkFBVyxFQUFFRCxXQUF0RTtBQUFtRixzQkFBWSxFQUFFVSxZQUFqRztBQUErRyxpQkFBTyxFQUFFYjtBQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUEwQkEscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0FwR0Q7O0dBQU1MLFM7VUFJV3RGLHFEOzs7S0FKWHNGLFM7QUFzR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VxdWlwbWVudC4xOGE4MzBmM2FhOTY5YzUxMTAzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzdWJDYXRlZ29yaWVzfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9kZWZhdWx0cydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtlcUNhdGVnb3JpZXN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2VxQ2F0ZWdvcmllcydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IEZpbHRlciA9ICh7XHJcbiAgb25DaGFuZ2VDYXRlZ29yeSxcclxuICBzZXRQb3N0cyxcclxuICBzZXRUb3RhbCxcclxuICBzZXRDdXJyZW50UGFnZSxcclxuICBzZXRMb2FkaW5nLFxyXG4gIHF1ZXJ5RmlsdGVyLFxyXG4gIGZyb21TdHJpbmcsXHJcbiAgc2V0TWF4UGFnZSxcclxuICBmcm9tSWQsXHJcbiAgbW9iaWxlRmlsdGVyLFxyXG4gIHNlbGVjdFR5cGUsXHJcbiAgb25TZWxlY3RUeXBlLFxyXG4gIHRvU3RyaW5nLFxyXG4gIG9uRmlsdGVyTW9iaWxlLFxyXG4gIGN1cnJlbnRQbGFjZV9pZCxcclxuICBjdXJyZW50UGxhY2VfbmFtZSxcclxuICB0b0lkfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciAgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7ZnJvbV9zdHJpbmd9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHtmcm9tX2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7dG9fc3RyaW5nfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7YXJlYV9zdGFydH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge2FyZWFfZW5kfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7cHJpY2Vfc3RhcnR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3ByaWNlX2VuZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW2Zyb21JbnB1dCwgc2V0RnJvbUlucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFthcmVhLHNldEFyZWFdID0gdXNlU3RhdGUoe2FyZWFTdGFydDogJycsYXJlYUVuZDonJ30pXHJcbiAgY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKHtwcmljZVN0YXJ0OiAnJyxwcmljZUVuZDonJ30pXHJcbiAgY29uc3QgW3RvSW5wdXQsc2V0VG9JbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYWRkcmVzc0Zyb20sc2V0QWRkcmVzc0Zyb21dID0gdXNlU3RhdGUoe2FkZHJlc3Nfc3RyaW5nOiBmcm9tU3RyaW5nIHx8IGZyb21fc3RyaW5nIHx8IGN1cnJlbnRQbGFjZV9uYW1lIHx8ICAnJywgYWRkcmVzc19pZDogZnJvbUlkIHx8IGZyb21faWQgfHwgY3VycmVudFBsYWNlX2lkIHx8ICcnLH0pXHJcbiAgY29uc3QgW2FkZHJlc3NUbyxzZXRBZGRyZXNzVG9dID0gdXNlU3RhdGUoe2FkZHJlc3Nfc3RyaW5nOiB0b1N0cmluZyB8fCAnJywgYWRkcmVzc19pZDogdG9JZCB8fCAnJyx9KVxyXG4gIGNvbnN0IGZyb21SZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCB0b1JlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0UGxhY2VBUEkoKVxyXG4gICAgJCgnLmJpZ19maWx0ZXJfYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLm1haW5fZmlsdGVyX19iaWcnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICBcclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25TZWFyY2goXHJcbiAgICAgIGFkZHJlc3NGcm9tLmFkZHJlc3NfaWQsXHJcbiAgICAgIGFkZHJlc3NUby5hZGRyZXNzX2lkLFxyXG4gICAgICBhZGRyZXNzRnJvbS5hZGRyZXNzX3N0cmluZyxcclxuICAgICAgYWRkcmVzc1RvLmFkZHJlc3Nfc3RyaW5nLFxyXG4gICAgICBhcmVhLmFyZWFTdGFydCxcclxuICAgICAgYXJlYS5hcmVhRW5kLFxyXG4gICAgICBwcmljZS5wcmljZVN0YXJ0LFxyXG4gICAgICBwcmljZS5wcmljZUVuZCxcclxuICAgIClcclxuICB9LFthZGRyZXNzRnJvbSxhZGRyZXNzVG9dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoYXJlYS5hcmVhU3RhcnQgPT09ICcnICYmIGFyZWEuYXJlYUVuZD09PSAnJykge1xyXG4gICAgICBvblNlYXJjaChcclxuICAgICAgICBhZGRyZXNzRnJvbS5hZGRyZXNzX2lkLFxyXG4gICAgICAgIGFkZHJlc3NUby5hZGRyZXNzX2lkLFxyXG4gICAgICAgIGFkZHJlc3NGcm9tLmFkZHJlc3Nfc3RyaW5nLFxyXG4gICAgICAgIGFkZHJlc3NUby5hZGRyZXNzX3N0cmluZyxcclxuICAgICAgICBhcmVhLmFyZWFTdGFydCxcclxuICAgICAgICBhcmVhLmFyZWFFbmQsXHJcbiAgICAgICAgcHJpY2UucHJpY2VTdGFydCxcclxuICAgICAgICBwcmljZS5wcmljZUVuZCxcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0sW2FyZWFdKVxyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYocHJpY2UucHJpY2VTdGFydCA9PT0gJycgJiYgcHJpY2UucHJpY2VFbmQ9PT0gJycpIHtcclxuICAgICAgb25TZWFyY2goXHJcbiAgICAgICAgYWRkcmVzc0Zyb20uYWRkcmVzc19pZCxcclxuICAgICAgICBhZGRyZXNzVG8uYWRkcmVzc19pZCxcclxuICAgICAgICBhZGRyZXNzRnJvbS5hZGRyZXNzX3N0cmluZyxcclxuICAgICAgICBhZGRyZXNzVG8uYWRkcmVzc19zdHJpbmcsXHJcbiAgICAgICAgYXJlYS5hcmVhU3RhcnQsXHJcbiAgICAgICAgYXJlYS5hcmVhRW5kLFxyXG4gICAgICAgIHByaWNlLnByaWNlU3RhcnQsXHJcbiAgICAgICAgcHJpY2UucHJpY2VFbmQsXHJcbiAgICAgIClcclxuICAgIH0gXHJcbiAgfSxbcHJpY2VdKVxyXG4gIFxyXG4gIGNvbnN0IGZpeFBhdGggPSAocXVlcmllcywgbmV3UXVlcmllcykgPT4ge1xyXG4gICAgZGVsZXRlIHF1ZXJpZXMucGFnZVxyXG4gICAgaWYoIWFkZHJlc3NGcm9tLmFkZHJlc3NfaWQpIHtcclxuICAgICAgZGVsZXRlIHF1ZXJpZXMuZnJvbV9pZDtcclxuICAgICAgZGVsZXRlIHF1ZXJpZXMuZnJvbV9zdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZighYWRkcmVzc1RvLmFkZHJlc3NfaWQpIHtcclxuICAgICAgZGVsZXRlIHF1ZXJpZXMudG9faWQ7XHJcbiAgICAgIGRlbGV0ZSBxdWVyaWVzLnRvX3N0cmluZztcclxuICAgIH1cclxuICAgIGlmKCFhcmVhLmFyZWFTdGFydCkge1xyXG4gICAgICBkZWxldGUgcXVlcmllcy5hcmVhX3N0YXJ0XHJcbiAgICB9XHJcbiAgICBpZighYXJlYS5hcmVhRW5kKSB7XHJcbiAgICAgIGRlbGV0ZSBxdWVyaWVzLmFyZWFfZW5kXHJcbiAgICB9XHJcbiAgICBpZighcHJpY2UucHJpY2VTdGFydCkge1xyXG4gICAgICBkZWxldGUgcXVlcmllcy5wcmljZV9zdGFydDtcclxuICAgIH1cclxuICAgIGlmKCFwcmljZS5wcmljZUVuZCkge1xyXG4gICAgICBkZWxldGUgcXVlcmllcy5wcmljZV9lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWRkcmVzc0Zyb20uYWRkcmVzc19pZCkge1xyXG4gICAgICBuZXdRdWVyaWVzLmZyb21faWQgPSBhZGRyZXNzRnJvbS5hZGRyZXNzX2lkO1xyXG4gICAgICBuZXdRdWVyaWVzLmZyb21fc3RyaW5nID0gYWRkcmVzc0Zyb20uYWRkcmVzc19zdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZihhZGRyZXNzVG8uYWRkcmVzc19pZCkge1xyXG4gICAgICBuZXdRdWVyaWVzLnRvX2lkID0gYWRkcmVzc1RvLmFkZHJlc3NfaWQ7XHJcbiAgICAgIG5ld1F1ZXJpZXMudG9fc3RyaW5nID0gYWRkcmVzc1RvLmFkZHJlc3Nfc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgaWYoYXJlYS5hcmVhU3RhcnQpIHtcclxuICAgICAgbmV3UXVlcmllcy5hcmVhX3N0YXJ0ID0gYXJlYS5hcmVhU3RhcnRcclxuICAgIH1cclxuICAgIGlmKGFyZWEuYXJlYUVuZCkge1xyXG4gICAgICBuZXdRdWVyaWVzLmFyZWFfZW5kID0gYXJlYS5hcmVhRW5kXHJcbiAgICB9XHJcbiAgICBpZihwcmljZS5wcmljZVN0YXJ0KSB7XHJcbiAgICAgIG5ld1F1ZXJpZXMucHJpY2Vfc3RhcnQgPSBwcmljZS5wcmljZVN0YXJ0XHJcbiAgICB9XHJcbiAgICBpZihwcmljZS5wcmljZUVuZCkge1xyXG4gICAgICBuZXdRdWVyaWVzLnByaWNlX2VuZCA9IHByaWNlLnByaWNlRW5kXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZmlsdGVyUGF0aCA9ICgpID0+IHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICAgIGlmKHBhdGhuYW1lID09PSAnL2NhcmdvL3RyYW5zcG9ydCcpIHtcclxuICAgICAgICByZXR1cm4gXCJmaWx0ZXJDYXJnb1wiXHJcbiAgICAgIH1cclxuICAgICAgaWYocGF0aG5hbWUgPT09ICcvY2FyZ28nKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiZmlsdGVyUG9zdFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZpbmFsUGF0aCA9IGZpbHRlclBhdGgoKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9maWx0ZXJTdG9yYWdlYCwge3BhcmFtczoge1xyXG4gICAgICBjaXR5X2lkOiBhZGRyZXNzRnJvbS5hZGRyZXNzX2lkLFxyXG4gICAgICBhcmVhX3N0YXJ0OiBhcmVhLmFyZWFTdGFydCxcclxuICAgICAgYXJlYV9lbmQ6IGFyZWEuYXJlYUVuZCxcclxuICAgICAgcHJpY2Vfc3RhcnQ6IHByaWNlLnByaWNlU3RhcnQsXHJcbiAgICAgIHByaWNlX2VuZDogcHJpY2UucHJpY2VFbmQsXHJcbiAgICB9fSlcclxuICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLnBhZ2luYXRpb24ucGFnZSlcclxuICAgICAgc2V0VG90YWwocmVzLmRhdGEucGFnaW5hdGlvbi50b3RhbClcclxuICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5wYWdpbmF0aW9uLm1heF9wYWdlKVxyXG4gICAgICByb3V0ZXIucHVzaCh7cGF0aDogcGF0aG5hbWUsIHF1ZXJ5OiB7Li4ucXVlcmllcywgLi4ubmV3UXVlcmllc319KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcmllcyA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IG5ld1F1ZXJpZXMgPSB7fTtcclxuICAgIGZpeFBhdGgocXVlcmllcyxuZXdRdWVyaWVzKTtcclxuICAgIG9uRmlsdGVyTW9iaWxlKClcclxuICAgIC8vIFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DbGVhckZpbHRlciA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfSwgMjAwKVxyXG4gICAgaWYoY3VycmVudFBhdGggPT09ICcvY2FyZ28nKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvY2FyZ28nKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2NhcmdvL3RyYW5zcG9ydCcpXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgIGZ1bmN0aW9uIGNsZWFyQWRkcmVzc0lucHV0KGUpIHtcclxuICAgIGxldCBuYW1lID0gZS50YXJnZXQuaWQ7XHJcbiAgICBpZihuYW1lPT09XCJmcm9tXCIpIHtcclxuICAgICAgc2V0RnJvbUlucHV0KFwiXCIpXHJcbiAgICAgIHNldEFkZHJlc3NGcm9tKHthZGRyZXNzX3N0cmluZzogXCJcIiwgYWRkcmVzc19pZDogXCJcIn0pXHJcbiAgICB9XHJcbiAgICBpZihuYW1lID09PSBcImFyZWFcIikge1xyXG4gICAgICBzZXRBcmVhKHthcmVhU3RhcnQ6IFwiXCIsIGFyZWFFbmQ6IFwiXCJ9KVxyXG4gICAgfVxyXG4gICAgaWYobmFtZSA9PT0gXCJwcmljZVwiKSB7XHJcbiAgICAgIHNldFByaWNlKHtwcmljZVN0YXJ0OiBcIlwiLCBwcmljZUVuZDogXCJcIn0pXHJcbiAgICB9XHJcbiAgICBpZihuYW1lPT09XCJ0b1wiKSB7XHJcbiAgICAgIHNldEFkZHJlc3NUbyh7YWRkcmVzc19zdHJpbmc6IFwiXCIsIGFkZHJlc3NfaWQ6IFwiXCJ9KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBpbml0UGxhY2VBUEkgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXV0b2NvbXBsZXRlID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGZyb21SZWYuY3VycmVudCxcclxuICAgICAgeyB0eXBlczogW1wiKGNpdGllcylcIl0sIH0pO1xyXG5cclxuICAgIG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoYXV0b2NvbXBsZXRlLCBcInBsYWNlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgICAgc2V0RnJvbUlucHV0KCcnKVxyXG4gICAgICBzZXRBZGRyZXNzRnJvbSh7YWRkcmVzc19zdHJpbmc6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLCBhZGRyZXNzX2lkOiBwbGFjZS5wbGFjZV9pZH0pXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXIgZmlsdGVyX21vYmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2VfZmlsdGVyJyBvbkNsaWNrPXsoKSA9PiBvbkZpbHRlck1vYmlsZSgpfT7inJY8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fY29udGVudCBjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX190b3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX3RvcF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcl9faXRlbV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDQ+0JPQvtGA0L7QtDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJfX2l0ZW1fX2Zvcm0gYWRkcmVzc19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zyb21JbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj17YWRkcmVzc0Zyb20uYWRkcmVzc19zdHJpbmcgfHwgJ9CT0L7RgNC+0LQnfSByZWY9e2Zyb21SZWZ9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luX3ZhbCc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xlYXJGaWx0ZXIoKX0+0KHQsdGA0L7RgdC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYmlnX2ZpbHRlcl9idG5cIj7QktGB0LUg0YTQuNC70YzRgtGA0Ys8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9faXRlbV9fZm9ybSBzZWxlY3RfdHJhbnNwb3J0cyc+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RUeXBlfSBvbkNoYW5nZT17ZT0+IG9uU2VsZWN0VHlwZShlKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlcUNhdGVnb3JpZXMubWFwKGNhdD0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9e2NhdC5uYW1lfSB2YWx1ZT17Y2F0LmlkfT57Y2F0Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JpZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fYmlnX19pdGVtc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19iaWdfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+0J/Qu9C+0YnQsNC00Yw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluX2ZpbHRlcl9fYmlnX19pdGVtX2lucHV0cyc+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YXJlYS5hcmVhU3RhcnR9IG9uQ2hhbmdlPXsoZSk9PntzZXRBcmVhKHthcmVhU3RhcnQ6IGUudGFyZ2V0LnZhbHVlLCBhcmVhRW5kOmFyZWEuYXJlYUVuZH0pfX0gcGxhY2Vob2xkZXI9XCLQvtGCXCIgLz5cclxuICAgICAgICAgICAgICA8cD4tPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2FyZWEuYXJlYUVuZH0gb25DaGFuZ2U9eyhlKSA9PiB7c2V0QXJlYSh7YXJlYVN0YXJ0OiBhcmVhLmFyZWFTdGFydCwgYXJlYUVuZDogZS50YXJnZXQudmFsdWV9KX19IHBsYWNlaG9sZGVyPVwi0LTQvlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19iaWdfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+0KbQtdC90LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluX2ZpbHRlcl9fYmlnX19pdGVtX2lucHV0cyc+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cHJpY2UucHJpY2VTdGFydH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZSh7cHJpY2VTdGFydDogZS50YXJnZXQudmFsdWUsIHByaWNlRW5kOiBwcmljZS5wcmljZUVuZH0pfSBwbGFjZWhvbGRlcj1cIiDQvtGCXCIgLz5cclxuICAgICAgICAgICAgICA8cD4tPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3ByaWNlLnByaWNlRW5kfSBwbGFjZWhvbGRlcj1cIiDQtNC+XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZSh7cHJpY2VTdGFydDogcHJpY2UucHJpY2VTdGFydCwgcHJpY2VFbmQ6IGUudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyX19pdGVtX19mb3JtIHNob3didG5cIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TZWFyY2goKX0+XHJcbiAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXHJcbiAgICAgICAgICA8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19ib3R0b21cIj5cclxuICAgICAgICAgIHthcmVhX3N0YXJ0IHx8IGFyZWFfZW5kID8gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JvdHRvbV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxwPtCf0LvQvtGJ0LDQtNGMOiB7YXJlYV9zdGFydCA/IGFyZWFfc3RhcnQgOiAn4oieJ30g0YLQvSAtIHthcmVhX2VuZCA/IGFyZWFfZW5kIDogJ+KInid9INC8MjwvcD5cclxuICAgICAgICAgICAgICA8aSBpZD0nYXJlYScgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCIgb25DbGljaz17KGUpPT4gY2xlYXJBZGRyZXNzSW5wdXQoZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6ICcnfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHtwcmljZV9zdGFydCB8fCBwcmljZV9lbmQgPyBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ZpbHRlcl9fYm90dG9tX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHA+0KbQtdC90LA6IHtwcmljZV9zdGFydCA/IHByaWNlX3N0YXJ0IDogJ+KInid9IC0ge3ByaWNlX2VuZCA/IHByaWNlX2VuZCA6ICfiiJ4nfTwvcD5cclxuICAgICAgICAgICAgICA8aSBpZD0ncHJpY2UnIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiIG9uQ2xpY2s9eyhlKT0+IGNsZWFyQWRkcmVzc0lucHV0KGUpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgICBcclxuICAgICAgICAgIHtmcm9tX3N0cmluZyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9maWx0ZXJfX2JvdHRvbV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxwPntgICR7ZnJvbV9zdHJpbmd9IGB9IDwvcD5cclxuICAgICAgICAgICAgICA8aSBpZD0nZnJvbScgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCIgb25DbGljaz17KGUpPT4gY2xlYXJBZGRyZXNzSW5wdXQoZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICcnfVxyXG5cclxuICAgICAgICAgIHt0b19zdHJpbmcgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fZmlsdGVyX19ib3R0b21fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8cD57YNC00L46ICR7dG9fc3RyaW5nfSBgfSA8L3A+XHJcbiAgICAgICAgICAgICAgPGkgaWQ9J3RvJyBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIiBvbkNsaWNrPXsoZSk9PiBjbGVhckFkZHJlc3NJbnB1dChlKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgJyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiZXhwb3J0IGNvbnN0IGVxQ2F0ZWdvcmllcyA9W1xyXG4gIHtcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwibmFtZVwiOiBcItCX0LXQvNC70LXRgNC+0LnQvdCw0Y9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAyLFxyXG4gICAgXCJuYW1lXCI6IFwi0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogMyxcclxuICAgIFwibmFtZVwiOiBcItCR0LXRgtC+0L3QvdGL0LUg0YDQsNCx0L7RgtGLXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogNCxcclxuICAgIFwibmFtZVwiOiBcItCT0YDRg9C30L7Qv9C10YDQtdCy0L7Qt9C60LhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiA1LFxyXG4gICAgXCJuYW1lXCI6IFwi0JrQvtC80LzRg9C90LDQu9GM0L3QsNGPXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogNixcclxuICAgIFwibmFtZVwiOiBcItCf0YDQvtGH0LXQtVwiXHJcbiAgfVxyXG5dIiwiaW1wb3J0IFNpZGVCYXJDdXJyZW5jeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0L1NpZGVCYXJDdXJyZW5jeVwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IEZpbHRlckVxdWlwbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvRmlsdGVyRXF1aXBtZW50J1xyXG5pbXBvcnQgRXF1aXBtZW50SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lcXVpcG1lbnQvRXF1aXBtZW50SXRlbVwiXHJcbmltcG9ydCB7IGxvYWRHb29nbGVNYXBTY3JpcHQgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZ29vZ2xlTWFwRGVmYXVsdHNcIlxyXG5pbXBvcnQgZXFDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi9kZWZhdWx0cy9lcUNhdGVnb3JpZXNcIlxyXG5jb25zdCBFcXVpcG1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX2lkID0gY29va2llLmdldCgncGxhY2VfaWQnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgncGxhY2VfaWQnKSA6IFwiXCI7XHJcbiAgY29uc3QgY3VycmVudFBsYWNlX25hbWUgPSBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdmb3JtYXR0ZWRfYWRkcmVzcycpIDogXCJcIjtcclxuICBjb25zdCBbZ2VvTG9jLCBzZXRHZW9Mb2NdID0gdXNlU3RhdGUoe3BsYWNlX2lkOiBjdXJyZW50UGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBjdXJyZW50UGxhY2VfbmFtZX0pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZXF1aXBtZW50cyxzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFt7fV0pXHJcbiAgY29uc3QgW3RvdGFsLHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW21heFBhZ2Usc2V0TWF4UGFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtsb2FkTWFwU2NyaXB0LCBzZXRMb2FkTWFwU2NyaXB0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2JpbGVGaWx0ZXIsc2V0RmlsdGVyTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEdvb2dsZU1hcFNjcmlwdCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRNYXBTY3JpcHQodHJ1ZSlcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0QWxsRXF1aXBtZW50P3BhZ2U9JHtwYWdlfWApXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRFcXVpcG1lbnRzKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuY291bnQpXHJcbiAgICAgICAgc2V0TWF4UGFnZShyZXMuZGF0YS5tYXhfcGFnZSlcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50X3BhZ2UpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3Qgb25DaGFuZ2VQYWdlPShwYWdlTnVtKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldEFsbEVxdWlwbWVudD9wYWdlPSR7cGFnZU51bX1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9lcXVpcG1lbnQ/cGFnZT0ke3BhZ2VOdW19YClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEVxdWlwbWVudHMocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5jb3VudClcclxuICAgICAgICBzZXRNYXhQYWdlKHJlcy5kYXRhLm1heF9wYWdlKVxyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHJlcy5kYXRhLmN1cnJlbnRfcGFnZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcl9pY29uJz5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyTW9iaWxlKCl9PiAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oIFwiPjwvaT5cclxuICAgICBcclxuICAgICAgICAgIDxwPtCk0LjQu9GM0YLRgCB7T2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGghPT0wICYmIGAoJHtPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aH0pYH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFsb2FkTWFwU2NyaXB0ID8gPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9kaXY+IDpcclxuICAgICAgXHJcbiAgICAgIDxGaWx0ZXJFcXVpcG1lbnQgXHJcbiAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgc2V0UG9zdHM9e3NldEVxdWlwbWVudHN9XHJcbiAgICAgICBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9XHJcbiAgICAgICBzZXRUb3RhbD17c2V0VG90YWx9XHJcbiAgICAgICBzZXRNYXhQYWdlPXtzZXRNYXhQYWdlfVxyXG4gICAgICAgbW9iaWxlRmlsdGVyPXttb2JpbGVGaWx0ZXJ9XHJcbiAgICAgICBvbkZpbHRlck1vYmlsZT17b25GaWx0ZXJNb2JpbGV9XHJcbiAgICAgICBjdXJyZW50UGxhY2VfaWQ9e2dlb0xvYy5wbGFjZV9pZH1cclxuICAgICAgIGN1cnJlbnRQbGFjZV9uYW1lPXtnZW9Mb2MuZm9ybWF0dGVkX2FkZHJlc3N9XHJcbiAgICAgICAvLyBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgLz5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX19jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19fdGl0bGVcIj5cclxuICAgICAgICAgICAgPGg0PtCT0LvQsNCy0L3QsNGPIC8g0KHQv9C10YbRgtC10YXQvdC40LrQsCAvINCX0LXQvNC70LXRgNC+0LnQvdCw0Y8g0YLQtdGF0L3QuNC60LAgLyDQrdGB0LrQvtCy0LDRgtC+0YDRiy3Qv9C+0LPRgNGD0LfRh9C40LrQuDwvaDQ+XHJcbiAgICAgICAgICAgIDxoMT7QrdGB0LrQvtCy0LDRgtC+0YDRiy3Qv9C+0LPRgNGD0LfRh9C40LrQuCDQsiDQkNC70LzQsNGC0Ys8L2gxPlxyXG4gICAgICAgICAgICA8aDM+0J3QsNC50LTQtdC90L4ge3RvdGFsfSDQvtCx0YrRj9Cy0LvQtdC90LjQuTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxFcXVpcG1lbnRJdGVtIGVxdWlwbWVudHM9e2VxdWlwbWVudHN9IG1heFBhZ2U9e21heFBhZ2V9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gb25DaGFuZ2VQYWdlPXtvbkNoYW5nZVBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX190ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RleHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDM+0JDRgNC10L3QtNCwINGB0LrQu9Cw0LTQvtCyINC4INGB0LrQu9Cw0LTRgdC60LjRhSDQv9C+0LzQtdGJ0LXQvdC40Lkg0LIg0JrQsNC30LDRhdGB0YLQsNC90LU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPtCY0YHRhdC+0LTRjyDQuNC3INC90LDQsdC+0YDQsCDQuCDQutCw0YfQtdGB0YLQstCwINGN0YLQuNGFINC/0LDRgNCw0LzQtdGC0YDQvtCyINGB0LrQu9Cw0LTRgyDQv9GA0LjRgdCy0LDQuNCy0LDQtdGC0YHRjyDQutC70LDRgdGBOiBBLFxyXG4gICAgICAgICAgICAgICAgQissIEIg0LjQu9C4IEMuINCh0YLQvtC40YIg0L7QsdGA0LDRgtC40YLRjCDQstC90LjQvNCw0L3QuNC1INC90LAg0YHQutC70LDQtNGLIEIg0LggQyDQutC70LDRgdGB0L7Qsiwg0LPQtNC1INCw0YDQtdC90LTQvdCw0Y9cclxuICAgICAgICAgICAgICAgINGB0YLQsNCy0LrQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSAyIDAwMCDRgtC10L3Qs9C1INC30LAg0LrQsi4g0LwuINCn0YLQvtCx0Ysg0YHQvdGP0YLRjCDRgdC60LvQsNC0INCyINCx0LjQt9C90LXRgS3RhtC10L3RgtGA0LDRhSBBXHJcbiAgICAgICAgICAgICAgICDQuNC70LggQisg0LrQu9Cw0YHRgdCwLCDRgdGC0L7QuNGCINC30LDQu9C+0LbQuNGC0Ywg0LIg0LHRjtC00LbQtdGCINC+0YIgMyA1MDAg0LTQviAyMCAwMDAg0YLQtdC90LPQtSDQt9CwINC60LIuINC8LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfX3RleHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDM+0J7RgtCy0LXRgtGF0YDQsNC90LXQvdC40LUg0Lgg0YHQutC70LDQtNGLINCyINCQ0LvQvNCw0YLRizwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+0KEg0L/QvtC80L7RidGM0Y4g0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdC+0Lkg0LrQvtC90YHQsNC70YLQuNC90LPQvtCy0L7QuSDQutC+0LzQv9Cw0L3QuNC4IEJsaXoua3og0LzQvtC20L3QviDQvdCw0LnRgtC4INGB0LrQu9Cw0LRcclxuICAgICAgICAgICAgICAgINCyINCw0YDQtdC90LTRgyDQsiDQkNC70LzQsNGC0Ysg0L/QviDQstGL0LPQvtC00L3QvtC5INGG0LXQvdC1INCx0LXQtyDQutC+0LzQuNGB0YHQuNC4INC4INC/0L7RgdGA0LXQtNC90LjQutC+0LIuINCh0L/QtdGG0LjQsNC70LjRgdGC0YtcclxuICAgICAgICAgICAgICAgINC60L7QvNC/0LDQvdC40Lgg0L/QvtC80L7Qs9GD0YIg0L/QvtC00L7QsdGA0LDRgtGMINC/0L7QvNC10YnQtdC90LjQtSwg0YPRh9C40YLRi9Cy0LDRjyDQv9C+0LbQtdC70LDQvdC40Y8g0Lgg0LHRjtC00LbQtdGCINC30LDQutCw0LfRh9C40LrQsCxcclxuICAgICAgICAgICAgICAgINC+0YDQs9Cw0L3QuNC30YPRjtGCINC/0YDQvtGB0LzQvtGC0YAg0Lgg0L/QvtC00L/QuNGB0LDQvdC40LUg0LTQvtCz0L7QstC+0YDQsCDRgSDRgdC+0LHRgdGC0LLQtdC90L3QuNC60L7QvC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxTaWRlQmFyQ3VycmVuY3kgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==