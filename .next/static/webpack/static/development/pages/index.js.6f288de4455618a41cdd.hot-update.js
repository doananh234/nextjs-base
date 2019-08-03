webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items/BrandSection/index.js":
/*!************************************************!*\
  !*** ./components/items/BrandSection/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/items/BrandSection/styles.js");
/* harmony import */ var _BrandItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BrandItem */ "./components/items/BrandItem/index.js");
/* harmony import */ var _CouponItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CouponItem */ "./components/items/CouponItem/index.js");

var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/components/items/BrandSection/index.js";







var SETTING = {
  dots: false,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 5
};

var BrandSection = function BrandSection(_ref) {
  var item = _ref.item,
      isShowArrow = _ref.isShowArrow,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["BrandSectionWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, SETTING, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BrandItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: item,
    suffix: i18next__WEBPACK_IMPORTED_MODULE_4__["default"].t('refunds.refunded'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), data.map(function (e) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CouponItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  })));
};

BrandSection.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  isShowArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
BrandSection.defaultProps = {
  isShowArrow: true
};
/* harmony default export */ __webpack_exports__["default"] = (BrandSection);

/***/ })

})
//# sourceMappingURL=index.js.6f288de4455618a41cdd.hot-update.js.map