webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items/CouponItem/index.js":
/*!**********************************************!*\
  !*** ./components/items/CouponItem/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/items/CouponItem/styles.js");
var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/components/items/CouponItem/index.js";





var CouponItem = function CouponItem(_ref) {
  var item = _ref.item,
      prefix = _ref.prefix,
      isShowArrow = _ref.isShowArrow;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["CouponItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "txtTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lbDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, prefix || 'Hoàn tiền'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "txtValue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, item.value, " ", item.unit));
};

CouponItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
CouponItem.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (CouponItem);

/***/ })

})
//# sourceMappingURL=index.js.eb5bbff0eea1ccd0edea.hot-update.js.map