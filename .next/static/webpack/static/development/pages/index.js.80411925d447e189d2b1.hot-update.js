webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items/BrandSection/index.js":
/*!************************************************!*\
  !*** ./components/items/BrandSection/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/items/BrandSection/styles.js");
var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/components/items/BrandSection/index.js";





var BrandSection = function BrandSection(_ref) {
  var item = _ref.item,
      isShowArrow = _ref.isShowArrow;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["BrandSectionWrapper"], {
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
    type: item.icon,
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
  }, item.value), item.title)), isShowArrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    className: "vRight",
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

BrandSection.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isShowArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
BrandSection.defaultProps = {
  isShowArrow: true
};
/* harmony default export */ __webpack_exports__["default"] = (BrandSection);

/***/ }),

/***/ "./components/items/BrandSection/styles.js":
/*!*************************************************!*\
  !*** ./components/items/BrandSection/styles.js ***!
  \*************************************************/
/*! exports provided: BrandSectionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSectionWrapper", function() { return BrandSectionWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BrandSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__BrandSectionWrapper",
  componentId: "sc-1ncjntc-0"
})(["display:flex;padding:20px;border-top:1px solid ", ";align-items:center;&:first-child{border-top:none;}.vCenter{flex:1;padding-left:10px;.icInfo{font-size:50px;}.txtTitle{font-size:16px;font-weight:600;padding-top:20px;color:", ";}.txtValue{font-size:16px;font-weight:bold;}}.vRight{font-size:20px;}@media (max-width:577px){}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border["default"];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.title;
});

/***/ })

})
//# sourceMappingURL=index.js.80411925d447e189d2b1.hot-update.js.map