webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items/BrandItem/index.js":
/*!*********************************************!*\
  !*** ./components/items/BrandItem/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/items/BrandItem/styles.js");
var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/components/items/BrandItem/index.js";





var BrandItem = function BrandItem(_ref) {
  var item = _ref.item,
      isShowArrow = _ref.isShowArrow;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["BrandItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    className: "icInfo",
    type: item.icon || 'reddit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "txtTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "txtValue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, item.value), item.suffix)), isShowArrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    className: "vRight",
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

BrandItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isShowArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
BrandItem.defaultProps = {
  isShowArrow: true
};
/* harmony default export */ __webpack_exports__["default"] = (BrandItem);

/***/ })

})
//# sourceMappingURL=index.js.2d0d001917597318e69a.hot-update.js.map