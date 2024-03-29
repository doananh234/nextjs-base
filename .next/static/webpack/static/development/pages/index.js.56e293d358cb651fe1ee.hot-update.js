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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_4__);
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
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/Home/ListCoupons/index.js":
/*!**********************************************!*\
  !*** ./containers/Home/ListCoupons/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_items_BrandSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/items/BrandSection */ "./components/items/BrandSection/index.js");
var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/containers/Home/ListCoupons/index.js";



var RANKING = [{
  "id": 1,
  "avatar": "https://robohash.org/adipisciaperiamfacere.bmp?size=50x50&set=set1",
  "name": "Glenden Bonder",
  "value": 46,
  "unit": "BRL"
}, {
  "id": 2,
  "avatar": "https://robohash.org/fugaporroaliquid.png?size=50x50&set=set1",
  "name": "Rhonda Reddlesden",
  "value": 7,
  "unit": "SEK"
}, {
  "id": 3,
  "avatar": "https://robohash.org/repellatomnisest.png?size=50x50&set=set1",
  "name": "Effie Steward",
  "value": 83,
  "unit": "CNY"
}, {
  "id": 4,
  "avatar": "https://robohash.org/corruptideseruntpariatur.jpg?size=50x50&set=set1",
  "name": "Dario Readie",
  "value": 64,
  "unit": "MGA"
}, {
  "id": 5,
  "avatar": "https://robohash.org/aspernaturrerumet.png?size=50x50&set=set1",
  "name": "Ardeen Olivier",
  "value": 6,
  "unit": "CNY"
}, {
  "id": 6,
  "avatar": "https://robohash.org/etconsequunturvero.jpg?size=50x50&set=set1",
  "name": "Arvy Walch",
  "value": 35,
  "unit": "CNY"
}, {
  "id": 7,
  "avatar": "https://robohash.org/deseruntfacereet.jpg?size=50x50&set=set1",
  "name": "Ingelbert Blackney",
  "value": 60,
  "unit": "JPY"
}, {
  "id": 8,
  "avatar": "https://robohash.org/commoditeneturodio.png?size=50x50&set=set1",
  "name": "Barrie Allday",
  "value": 38,
  "unit": "NGN"
}, {
  "id": 9,
  "avatar": "https://robohash.org/nesciuntdeserunteos.png?size=50x50&set=set1",
  "name": "Cilka Shead",
  "value": 57,
  "unit": "IDR"
}, {
  "id": 10,
  "avatar": "https://robohash.org/sequiaperiamet.jpg?size=50x50&set=set1",
  "name": "Xever Wenham",
  "value": 15,
  "unit": "EUR"
}];

var ListCoupons = function ListCoupons(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    bordered: false,
    size: "small",
    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "txtHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, i18next.t('home.ranking')),
    dataSource: RANKING,
    renderItem: function renderItem(item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List.Item, {
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_items_BrandSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: item,
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  });
};

ListCoupons.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ListCoupons);

/***/ }),

/***/ "./containers/Home/ListRefundBrands/index.js":
/*!***************************************************!*\
  !*** ./containers/Home/ListRefundBrands/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_items_BrandSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/items/BrandSection */ "./components/items/BrandSection/index.js");
var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/containers/Home/ListRefundBrands/index.js";



var RANKING = [{
  "id": 1,
  "avatar": "https://robohash.org/adipisciaperiamfacere.bmp?size=50x50&set=set1",
  "name": "Glenden Bonder",
  "value": 46,
  "unit": "BRL"
}, {
  "id": 2,
  "avatar": "https://robohash.org/fugaporroaliquid.png?size=50x50&set=set1",
  "name": "Rhonda Reddlesden",
  "value": 7,
  "unit": "SEK"
}, {
  "id": 3,
  "avatar": "https://robohash.org/repellatomnisest.png?size=50x50&set=set1",
  "name": "Effie Steward",
  "value": 83,
  "unit": "CNY"
}, {
  "id": 4,
  "avatar": "https://robohash.org/corruptideseruntpariatur.jpg?size=50x50&set=set1",
  "name": "Dario Readie",
  "value": 64,
  "unit": "MGA"
}, {
  "id": 5,
  "avatar": "https://robohash.org/aspernaturrerumet.png?size=50x50&set=set1",
  "name": "Ardeen Olivier",
  "value": 6,
  "unit": "CNY"
}, {
  "id": 6,
  "avatar": "https://robohash.org/etconsequunturvero.jpg?size=50x50&set=set1",
  "name": "Arvy Walch",
  "value": 35,
  "unit": "CNY"
}, {
  "id": 7,
  "avatar": "https://robohash.org/deseruntfacereet.jpg?size=50x50&set=set1",
  "name": "Ingelbert Blackney",
  "value": 60,
  "unit": "JPY"
}, {
  "id": 8,
  "avatar": "https://robohash.org/commoditeneturodio.png?size=50x50&set=set1",
  "name": "Barrie Allday",
  "value": 38,
  "unit": "NGN"
}, {
  "id": 9,
  "avatar": "https://robohash.org/nesciuntdeserunteos.png?size=50x50&set=set1",
  "name": "Cilka Shead",
  "value": 57,
  "unit": "IDR"
}, {
  "id": 10,
  "avatar": "https://robohash.org/sequiaperiamet.jpg?size=50x50&set=set1",
  "name": "Xever Wenham",
  "value": 15,
  "unit": "EUR"
}];

var ListRefundBrands = function ListRefundBrands(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    bordered: false,
    size: "small",
    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "txtHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, i18next.t('home.ranking')),
    dataSource: RANKING,
    renderItem: function renderItem(item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List.Item, {
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_items_BrandSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: item,
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  });
};

ListRefundBrands.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ListRefundBrands);

/***/ })

})
//# sourceMappingURL=index.js.56e293d358cb651fe1ee.hot-update.js.map