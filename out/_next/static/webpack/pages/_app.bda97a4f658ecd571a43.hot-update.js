webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Nav/Nav.js":
/*!**************************************!*\
  !*** ./components/shared/Nav/Nav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navguest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navguest */ "./components/shared/Nav/Navguest.js");
/* harmony import */ var _Navuser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navuser */ "./components/shared/Nav/Navuser.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoadingNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoadingNav */ "./components/shared/Nav/LoadingNav.js");
/* harmony import */ var _others_LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../others/LoadingSpinner */ "./components/shared/others/LoadingSpinner.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\Ansar\\Desktop\\bliz\\front-bliz\\components\\shared\\Nav\\Nav.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_10__["fetchCurrentUser"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.usersReducer.loggedIn,
    authenticatingUser: state.usersReducer.authenticatingUser
  };
};

var Nav = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav, _React$Component);

  var _super = _createSuper(Nav);

  function Nav() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Nav);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(".set > a").on("click", function (event) {
          event.preventDefault();

          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass("active")) {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).siblings(".content").slideUp(200);
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(".set > a i").removeClass("active");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(".set > a i").removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find("i").addClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(".set > a").removeClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).addClass("active");
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(".content").slideUp(200);
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).siblings(".content").slideDown(200);
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header__top__item').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('.dropdown__items').fadeToggle(200);
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav__opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav.goods').toggleClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav.equipment').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.equipment__opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav.equipment').toggleClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav.goods').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.cabinet_config_opener').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.goods__nav.config').toggleClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.show_num').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.hidden_num').show();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.filter__item__form a').click(function (event) {
          event.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).siblings().removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.open_calc_modal').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.modal__calculator').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('modal-window-calc');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.close__calc__modal').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.modal__calculator').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('modal-window-calc');
        }); // 

        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#carusel-item2 img').click(function (e) {
          if (e.target.alt === 'small-storage-item-1') {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()("#carusel-item1").attr("src", "assets/img/storage/storage-nav-item/store-item1.png");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()("#carusel-item1").attr("src", "assets/img/storage/storage2.png");
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.pink').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.modal__upgrade_to_top').addClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.modal__upgrade_to_top__inner i').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.modal__upgrade_to_top').removeClass('active');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#first__step__done').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#first__step').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#second__step').show();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.graphic__circle:nth-child(3)').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.hl:nth-child(4)').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#second_step__desc').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title1').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title2').addClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.blue_span_title').html('В РАБОТЕ: ГРУЗ В ПУТИ');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.request_item__section__item.end').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#open_driver_modal').hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#second__step__done').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_span').html('Время в пути:');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#request__time').html('9 ч 35 мин');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#request_btn').addClass('average');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.graphic__circle').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.graphic__circle').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.hl').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title1').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title2').removeClass('blue');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title2').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#requset_title3').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.blue_span_title').html('ГРУЗ ДОСТАВЛЕН');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.blue_span_title').addClass('green');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#request_desc_end').html('Поздравляем! Вы доставили груз! <br> Свяжитесь с заказчиком <br> для последующих действий.');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#open_driver_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal.driver').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#open_map_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal.map').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.open_rejection_modal').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal.rejection').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#open_edit_photo').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal.edit_photo').addClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#close_edit_photo').click(function (e) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal.edit_photo').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#choose_driver').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#open_driver_modal').html('Изменить водителя');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.request_item__section__inner').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.request_item__section__driver').show();
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal__btns a').click(function (e) {
          e.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_times').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('lock');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#driver_type2').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal__wrapper').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal__wrapper2').show();
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#driver_type1').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal__wrapper').show();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.driver_modal__wrapper2').hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#register_type2').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.company__register').hide();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#register_title').html('Контакные данные');
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#register_type1').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.company__register').show();
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#register_title').html('Контакное лицо');
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.mobile_bar').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).toggleClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header__top__mobile').slideToggle();
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').toggleClass('lock');
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header__top__mobile__nav__item').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).siblings().find('.header__top__mobile__nav__item__inner').slideUp();
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).siblings().find('.header__top__mobile__nav__item__text').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('.header__top__mobile__nav__item__inner').slideToggle();
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('.header__top__mobile__nav__item__text').toggleClass('active');
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.authenticatingUser) {// return(<LoadingSpinner/>)
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') && this.props.loggedIn) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 20
        }, this);
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {// <LoadingNav />
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('token') == undefined && !this.props.loggedIn) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 18
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navguest__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 16
      }, this);
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Nav));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2L05hdi5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoQ3VycmVudFVzZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZ2dlZEluIiwidXNlcnNSZWR1Y2VyIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiTmF2IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwic2libGluZ3MiLCJzbGlkZVVwIiwiZmluZCIsImFkZENsYXNzIiwic2xpZGVEb3duIiwiY2xpY2siLCJmYWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJzaG93IiwiaGlkZSIsImUiLCJ0YXJnZXQiLCJhbHQiLCJhdHRyIiwiaHRtbCIsInNsaWRlVG9nZ2xlIiwicHJvcHMiLCJjb29raWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDQyxvQkFBZ0IsRUFBRSw0QkFBTTtBQUFDRCxjQUFRLENBQUNDLG1GQUFnQixFQUFqQixDQUFSO0FBQTZCO0FBRGhCLEdBQUw7QUFBQSxDQUFuQzs7QUFJQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDQyxZQUFRLEVBQUVELEtBQUssQ0FBQ0UsWUFBTixDQUFtQkQsUUFERztBQUVoQ0Usc0JBQWtCLEVBQUVILEtBQUssQ0FBQ0UsWUFBTixDQUFtQkM7QUFGUCxH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QTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BRkQsTUFFTTtBQUNKLDRCQUFPLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRDs7QUFDRCwwQkFBTyxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFFSDs7OztFQTVNYWdDLDRDQUFLLENBQUNDLFM7O0FBZ05SQywySEFBTyxDQUFDcEMsZUFBRCxFQUFpQkgsa0JBQWpCLENBQVAsQ0FBNENRLEdBQTVDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmRhOTdhNGY2NThlY2Q1NzFhNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBOYXZndWVzdCBmcm9tICcuL05hdmd1ZXN0J1xyXG5pbXBvcnQgTmF2dXNlciBmcm9tICcuL05hdnVzZXInXHJcbmltcG9ydCB7ZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTG9hZGluZ05hdiBmcm9tICcuL0xvYWRpbmdOYXYnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9vdGhlcnMvTG9hZGluZ1NwaW5uZXInXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiB7ZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKX1cclxufSlcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgbG9nZ2VkSW46IHN0YXRlLnVzZXJzUmVkdWNlci5sb2dnZWRJbixcclxuICBhdXRoZW50aWNhdGluZ1VzZXI6IHN0YXRlLnVzZXJzUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXJcclxufSlcclxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5zZXQgPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLnNpYmxpbmdzKFwiLmNvbnRlbnRcIilcclxuICAgICAgICAgICAgLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICAgICQoXCIuc2V0ID4gYSBpXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLnNldCA+IGEgaVwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLmZpbmQoXCJpXCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICQoXCIuc2V0ID4gYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAkKFwiLmNvbnRlbnRcIikuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAuc2libGluZ3MoXCIuY29udGVudFwiKVxyXG4gICAgICAgICAgICAuc2xpZGVEb3duKDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAkKCcuaGVhZGVyX190b3BfX2l0ZW0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd25fX2l0ZW1zJykuZmFkZVRvZ2dsZSgyMDApO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAkKCcuZ29vZHNfX25hdl9fb3BlbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5nb29kc19fbmF2Lmdvb2RzJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5nb29kc19fbmF2LmVxdWlwbWVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgJCgnLmVxdWlwbWVudF9fb3BlbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5nb29kc19fbmF2LmVxdWlwbWVudCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ29vZHNfX25hdi5nb29kcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgJCgnLmNhYmluZXRfY29uZmlnX29wZW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZ29vZHNfX25hdi5jb25maWcnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICQoJy5zaG93X251bScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuaGlkZGVuX251bScpLnNob3coKTtcclxuICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgJCgnLmZpbHRlcl9faXRlbV9fZm9ybSBhJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAkKCcub3Blbl9jYWxjX21vZGFsJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tb2RhbF9fY2FsY3VsYXRvcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsLXdpbmRvdy1jYWxjJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICQoJy5jbG9zZV9fY2FsY19fbW9kYWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLm1vZGFsX19jYWxjdWxhdG9yJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwtd2luZG93LWNhbGMnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIFxyXG4gICAgICAkKCcjY2FydXNlbC1pdGVtMiBpbWcnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5hbHQgPT09ICdzbWFsbC1zdG9yYWdlLWl0ZW0tMScpIHtcclxuICAgICAgICAgICQoXCIjY2FydXNlbC1pdGVtMVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ltZy9zdG9yYWdlL3N0b3JhZ2UtbmF2LWl0ZW0vc3RvcmUtaXRlbTEucG5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiI2NhcnVzZWwtaXRlbTFcIikuYXR0cihcInNyY1wiLCBcImFzc2V0cy9pbWcvc3RvcmFnZS9zdG9yYWdlMi5wbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgICQoJy5waW5rJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tb2RhbF9fdXBncmFkZV90b190b3AnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgfSk7XHJcbiAgICAgICQoJy5tb2RhbF9fdXBncmFkZV90b190b3BfX2lubmVyIGknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLm1vZGFsX191cGdyYWRlX3RvX3RvcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgJCgnI2ZpcnN0X19zdGVwX19kb25lJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJyNmaXJzdF9fc3RlcCcpLmhpZGUoKTtcclxuICAgICAgICAkKCcjc2Vjb25kX19zdGVwJykuc2hvdygpO1xyXG4gICAgICAgICQoJy5ncmFwaGljX19jaXJjbGU6bnRoLWNoaWxkKDMpJykuYWRkQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAkKCcuaGw6bnRoLWNoaWxkKDQpJykuYWRkQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAkKCcjc2Vjb25kX3N0ZXBfX2Rlc2MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUxJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAkKCcjcmVxdXNldF90aXRsZTInKS5hZGRDbGFzcygnYmx1ZScpO1xyXG4gICAgICAgICQoJy5ibHVlX3NwYW5fdGl0bGUnKS5odG1sKCfQkiDQoNCQ0JHQntCi0JU6INCT0KDQo9CXINCSINCf0KPQotCYJylcclxuICAgICAgICAkKCcucmVxdWVzdF9pdGVtX19zZWN0aW9uX19pdGVtLmVuZCcpLmhpZGUoKVxyXG4gICAgICAgICQoJyNvcGVuX2RyaXZlcl9tb2RhbCcpLmhpZGUoKVxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgICQoJyNzZWNvbmRfX3N0ZXBfX2RvbmUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAkKCcjcmVxdXNldF9zcGFuJykuaHRtbCgn0JLRgNC10LzRjyDQsiDQv9GD0YLQuDonKVxyXG4gICAgICAgICQoJyNyZXF1ZXN0X190aW1lJykuaHRtbCgnOSDRhyAzNSDQvNC40L0nKVxyXG4gICAgICAgICQoJyNyZXF1ZXN0X2J0bicpLmFkZENsYXNzKCdhdmVyYWdlJylcclxuICAgICAgICAkKCcuZ3JhcGhpY19fY2lyY2xlJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKVxyXG4gICAgICAgICQoJy5ncmFwaGljX19jaXJjbGUnKS5hZGRDbGFzcygnZ3JlZW4nKVxyXG4gICAgICAgICQoJy5obCcpLmFkZENsYXNzKCdncmVlbicpXHJcbiAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUxJykuYWRkQ2xhc3MoJ2dyZWVuJyk7XHJcbiAgICAgICAgJCgnI3JlcXVzZXRfdGl0bGUyJykucmVtb3ZlQ2xhc3MoJ2JsdWUnKTtcclxuICAgICAgICAkKCcjcmVxdXNldF90aXRsZTInKS5hZGRDbGFzcygnZ3JlZW4nKTtcclxuICAgICAgICAkKCcjcmVxdXNldF90aXRsZTMnKS5hZGRDbGFzcygnZ3JlZW4nKTtcclxuICAgICAgICAkKCcuYmx1ZV9zcGFuX3RpdGxlJykuaHRtbCgn0JPQoNCj0Jcg0JTQntCh0KLQkNCS0JvQldCdJylcclxuICAgICAgICAkKCcuYmx1ZV9zcGFuX3RpdGxlJykuYWRkQ2xhc3MoJ2dyZWVuJylcclxuICAgICAgICAkKCcjcmVxdWVzdF9kZXNjX2VuZCcpLmh0bWwoJ9Cf0L7Qt9C00YDQsNCy0LvRj9C10LwhINCS0Ysg0LTQvtGB0YLQsNCy0LjQu9C4INCz0YDRg9C3ISA8YnI+INCh0LLRj9C20LjRgtC10YHRjCDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCA8YnI+INC00LvRjyDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC00LXQudGB0YLQstC40LkuJylcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgICAkKCcjb3Blbl9kcml2ZXJfbW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsLmRyaXZlcicpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpXHJcbiAgICAgIH0pXHJcbiAgICAgICQoJyNvcGVuX21hcF9tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICQoJy5kcml2ZXJfbW9kYWwubWFwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgfSlcclxuICAgICAgJCgnLm9wZW5fcmVqZWN0aW9uX21vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5yZWplY3Rpb24nKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcjb3Blbl9lZGl0X3Bob3RvJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgJCgnLmRyaXZlcl9tb2RhbC5lZGl0X3Bob3RvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJylcclxuICAgICAgfSlcclxuICAgICAgJCgnI2Nsb3NlX2VkaXRfcGhvdG8nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsLmVkaXRfcGhvdG8nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICQoJyNjaG9vc2VfZHJpdmVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjb3Blbl9kcml2ZXJfbW9kYWwnKS5odG1sKCfQmNC30LzQtdC90LjRgtGMINCy0L7QtNC40YLQtdC70Y8nKVxyXG4gICAgICAgICQoJy5yZXF1ZXN0X2l0ZW1fX3NlY3Rpb25fX2lubmVyJykuaGlkZSgpXHJcbiAgICAgICAgJCgnLnJlcXVlc3RfaXRlbV9fc2VjdGlvbl9fZHJpdmVyJykuc2hvdygpXHJcbiAgICAgIH0pXHJcbiAgICAgICQoJy5kcml2ZXJfbW9kYWxfX2J0bnMgYScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICQoJy5kcml2ZXJfbW9kYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcuZHJpdmVyX3RpbWVzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJylcclxuICAgICAgfSlcclxuICAgICAgJCgnI2RyaXZlcl90eXBlMicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcicpLmhpZGUoKTtcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyMicpLnNob3coKTtcclxuICAgICAgfSlcclxuICAgICAgJCgnI2RyaXZlcl90eXBlMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmRyaXZlcl9tb2RhbF9fd3JhcHBlcicpLnNob3coKTtcclxuICAgICAgICAkKCcuZHJpdmVyX21vZGFsX193cmFwcGVyMicpLmhpZGUoKTtcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICQoJyNyZWdpc3Rlcl90eXBlMicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmNvbXBhbnlfX3JlZ2lzdGVyJykuaGlkZSgpO1xyXG4gICAgICAgICQoJyNyZWdpc3Rlcl90aXRsZScpLmh0bWwoJ9Ca0L7QvdGC0LDQutC90YvQtSDQtNCw0L3QvdGL0LUnKVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcjcmVnaXN0ZXJfdHlwZTEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5jb21wYW55X19yZWdpc3RlcicpLnNob3coKTtcclxuICAgICAgICAkKCcjcmVnaXN0ZXJfdGl0bGUnKS5odG1sKCfQmtC+0L3RgtCw0LrQvdC+0LUg0LvQuNGG0L4nKVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gXHJcbiAgICAkKCcubW9iaWxlX2JhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuaGVhZGVyX190b3BfX21vYmlsZScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbG9jaycpO1xyXG4gICAgfSlcclxuICAgICQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuZmluZCgnLmhlYWRlcl9fdG9wX19tb2JpbGVfX25hdl9faXRlbV9faW5uZXInKS5zbGlkZVVwKCk7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5oZWFkZXJfX3RvcF9fbW9iaWxlX19uYXZfX2l0ZW1fX2lubmVyJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuaGVhZGVyX190b3BfX21vYmlsZV9fbmF2X19pdGVtX190ZXh0JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlcikge1xyXG4gICAgICAgICAgLy8gcmV0dXJuKDxMb2FkaW5nU3Bpbm5lci8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpICYmIHRoaXMucHJvcHMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuKDxOYXZndWVzdC8+KVxyXG4gICAgICAgIH1pZihjb29raWUuZ2V0KCd0b2tlbicpICYmICh0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW5nVXNlciB8fCAhdGhpcy5wcm9wcy5sb2dnZWRJbikpIHtcclxuICAgICAgICAgIC8vIDxMb2FkaW5nTmF2IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT0gdW5kZWZpbmVkICYmICF0aGlzLnByb3BzLmxvZ2dlZEluKSB7XHJcbiAgICAgICAgICA8TmF2Z3Vlc3QgLz5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4oPE5hdmd1ZXN0Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybig8TmF2Z3Vlc3QvPilcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShOYXYpKSJdLCJzb3VyY2VSb290IjoiIn0=