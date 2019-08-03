module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/SNS.js":
/*!********************!*\
  !*** ./api/SNS.js ***!
  \********************/
/*! exports provided: fbSignIn, googleSignIn, signIn, signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbSignIn", function() { return fbSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSignIn", function() { return googleSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./api/utils.js");

const fbSignIn = ({
  accessToken
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["post"])('auth/loginFacebook', {
  accessToken
});
const googleSignIn = ({
  accessToken
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["post"])('auth/loginGoogle', {
  accessToken
});
/**
 * Sign in with email
 * @param {*} email, password
 */

const signIn = ({
  email,
  password
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["post"])('auth/login', {
  email,
  password
});
/**
 *
 * @param {*} email, password, sex, firstName, lastName, birthday,notice,
 */

const signUp = ({
  email,
  password,
  firstName,
  lastName
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["post"])('auth/register', {
  email,
  password,
  firstName,
  lastName
});

/***/ }),

/***/ "./api/user.js":
/*!*********************!*\
  !*** ./api/user.js ***!
  \*********************/
/*! exports provided: getAccountInfo, updateAccountInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfo", function() { return getAccountInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountInfo", function() { return updateAccountInfo; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./api/utils.js");

const getAccountInfo = () => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["get"])('users/me');
const updateAccountInfo = ({
  avatar,
  firstName,
  lastName
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["put"])('users/me', {
  avatar,
  firstName,
  lastName
});

/***/ }),

/***/ "./api/utils.js":
/*!**********************!*\
  !*** ./api/utils.js ***!
  \**********************/
/*! exports provided: default, get, post, put, patch, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cookies */ "./utils/cookies.js");







const checkIfErrorOccurs = res => ( // console.log('res', res);
{
  code: res.status,
  res
});

const TIME_OUT = 30000;

const timeoutPromise = function timeoutPromise(ms, promise) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(res => {
      clearTimeout(timeoutId);
      resolve(res);
    }, err => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
};

async function xFetch(path, headerOptions, ops = {
  noParse: false
}) {
  const normalFetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(path, headerOptions);

  if (ops.noParse) {
    return timeoutPromise(TIME_OUT, normalFetch);
  }

  const res = await timeoutPromise(TIME_OUT, normalFetch.then(checkIfErrorOccurs));

  if (res.code < 300) {
    if (res.code === 204) {
      return {
        success: true
      };
    }

    const response = await res.res.json();
    return response;
  }

  try {
    const response = await res.res.json();
    const err = {
      code: res.code,
      message: response.message
    };
    throw err;
  } catch (e) {
    if (res.code === 426) {
      const err = {
        code: res.code,
        message: 'We have had some significant upgrades for the app. Please click below to upgrade your app!'
      };
      throw err;
    } else {
      const err = {
        code: res.code,
        message: e.message ? e.message : 'Something wrong. Please try again.'
      };
      throw err;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (xFetch);

function getQueryString(params) {
  const esc = encodeURIComponent;
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&');
}

function requestWrapper(method) {
  return async (_url, _data = null, _params = {}, context) => {
    let url = _url;
    let data = _data;
    let params = _params;
    url = "https://eventmaster.lateamapp.co/api/v1/" + url;

    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      params = data;

      if (params !== null) {
        url = `${url}?${getQueryString(params)}`;
      }

      data = null;
    } else if (data === Object(data)) {
      // (data === Object(data)) === _.isObject(data)
      data = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data);
    } // default params for fetch = method + (Content-Type)


    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }; // TODO: No need context in case browser

    const token = Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_5__["getToken"])(context);

    if (token) {
      defaults.headers.Authorization = `${token}`;
    }

    if (data) {
      defaults.body = data;
    }

    const paramsObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaults, {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, defaults.headers)
    });

    return xFetch(url, paramsObj);
  };
}

const get = requestWrapper('GET');
const post = requestWrapper('POST');
const put = requestWrapper('PUT');
const patch = requestWrapper('PATCH');
const del = requestWrapper('DELETE');

/***/ }),

/***/ "./config/theme.js":
/*!*************************!*\
  !*** ./config/theme.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const theme = {
  primary: '#cc3366',
  secondary: '#FEAC01',
  color: {
    orange: '#FEAC01',
    // 0: Orange
    purple: '#42299a',
    // 1: Purple
    pink: '#F75D81',
    // 2: Pink
    red: '#e74c3c',
    // 14: red
    limeGreen: '#4cd964',
    // 3: LimeGreen
    blueShade: '#39435f',
    // 4: BlueShade
    yellow: '#FFCA28',
    // 5: Yellow
    yellowDark: '#F2BD1B',
    // 6: Yellow Darken 5%
    facebook: '#3b5998',
    // 7: Facebook
    facebookDark: '#344e86',
    // 8: Facebook Darken 5%
    google: '#dd4b39',
    // 9: Google Plus
    googleDark: '#d73925',
    // 10: Google Plus Darken 5%
    auth0: '#e14615' // 11: Auth0

  },
  status: {
    warning: '#ffbf00',
    success: '#00b16a',
    error: '#f64744',
    errorDark: '#EC3D3A',
    // 1: Darken 4%
    errorLight: '#FF5B58' // 2: Lighten 8%

  },
  grayscale: '#bababa',
  grayscaleDark: '#bababa',
  grayscaleLight: '#F3F3F3',
  text: {
    primary: "#000",
    title: '#7f7f7f',
    heading: '#3a393d',
    headingLight: '#474b68',
    text: '#7f7f7f',
    textDark: '#15171a',
    textLight: '#a0a2a6',
    textSuperLight: '#738a94',
    textSuperDark: '#262626'
  },
  border: {
    default: '#e9e9e9',
    dark: '#d8d8d8',
    light: '#ebebeb'
  },
  calendar: ['#905', // 0:
  '#690', // 1:
  '#a67f59', // 2:
  '#07a', // 3:
  '#dd4a68', // 4:
  '#e90'],
  shadow: {
    dark: 'rgba(20,20,20,0.05)',
    heavyDark: 'rgba(20,20,20,0.5)',
    light: 'rgba(242, 118, 99, 0.35)'
  },
  button: {
    background: '#ffffff',
    text: '#d1d1d1'
  },
  background: {
    container: '#fff',
    content: '#f0f2f5'
  }
};
module.exports = theme;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    })));
  }

} // @deprecated noop for now until removal


exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

function Container(p) {
  return p.children;
}

const warnUrl = (0, _utils.execOnce)(() => {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: () => {
      warnUrl();
      router.back();
    },
    push: (url, as) => {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/Auth/actions */ "./redux/Auth/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/cookies */ "./utils/cookies.js");
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/theme */ "./config/theme.js");
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_theme__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/apple/Work/myproject/base/base-nextjs/pages/_app.js";











class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    } // TODO: Sharing isAuthenticated state all of application


    const isAuth = Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_9__["isAuthenticated"])(ctx);
    ctx.store.dispatch(_redux_Auth_actions__WEBPACK_IMPORTED_MODULE_7__["default"].setAuth(isAuth));
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _config_theme__WEBPACK_IMPORTED_MODULE_10___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_redux_store__WEBPACK_IMPORTED_MODULE_8__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(MyApp)));

/***/ }),

/***/ "./redux/Auth/actions.js":
/*!*******************************!*\
  !*** ./redux/Auth/actions.js ***!
  \*******************************/
/*! exports provided: IGNORE_ACTIONS, Types, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_ACTIONS", function() { return IGNORE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/redux */ "./utils/redux.js");

 // TODO: Model name
// export const MODEL = 'todos';
// TODO: Add actions you don't want to use here

const IGNORE_ACTIONS = []; // TODO: Create constant types for model

const Types = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeConstantCreator"])('SIGN_IN', 'SIGN_IN_SUCCESS', 'SIGN_IN_FAILURE', 'SIGN_UP', 'SIGN_UP_SUCCESS', 'SIGN_UP_FAILURE', 'GOOGLE_SIGN_IN', 'GOOGLE_SIGN_IN_SUCCESS', 'GOOGLE_SIGN_IN_FAILURE', 'FB_SIGN_IN', 'FB_SIGN_IN_SUCCESS', 'FB_SIGN_IN_FAILURE', 'SIGN_OUT', 'CHANGE_PASSWORD', 'GET_USE', 'EDIT_USER', 'UPDATE_USER_SUCCESS', 'UPDATE_USER_FAILURE', 'SET_AUTH', 'SHOW_AUTH_DRAWER', 'GET_ACCOUNT_INFO', 'GET_ACCOUNT_INFO_SUCCESS', 'GET_ACCOUNT_INFO_FAILURE', 'UPDATE_ACCOUNT_INFO', 'UPDATE_ACCOUNT_INFO_SUCCESS', 'UPDATE_ACCOUNT_INFO_FAILURE')); // const CRUDActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
// TODO: Custom actions

/** Facebook Sign In */

const fbSignIn = (accessToken, info) => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.FB_SIGN_IN, {
  accessToken,
  info
});

const fbSignInSuccess = token => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.FB_SIGN_IN_SUCCESS, {
  token
});

const fbSignInFailure = error => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.FB_SIGN_IN_FAILURE, {
  error
});
/** Google Sign In */


const googleSignIn = accessToken => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GOOGLE_SIGN_IN, {
  accessToken
});

const googleSignInSuccess = token => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GOOGLE_SIGN_IN_SUCCESS, {
  token
});

const googleSignInFailure = error => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GOOGLE_SIGN_IN_FAILURE, {
  error
});
/** Email Sign In */


const signIn = ({
  email,
  password
}) => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_IN, {
  email,
  password
});

const signInSuccess = token => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_IN_SUCCESS, {
  token
});

const signInFailure = error => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_IN_FAILURE, {
  error
});
/** Email Sign Up */


const signUp = ({
  email,
  password,
  firstName,
  lastName
}) => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_UP, {
  email,
  password,
  firstName,
  lastName
});

const signUpSuccess = token => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_UP_SUCCESS, {
  token
});

const signUpFailure = error => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_UP_FAILURE, {
  error
});

const signOut = () => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SIGN_OUT);
/**
 * Set Authentication Status
 * @param {*} status
 */


const setAuth = status => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SET_AUTH, {
  status
});
/**
 * Show authentication drawer
 * @param {*} status
 */


const showAuthDrawer = status => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.SHOW_AUTH_DRAWER, {
  status
});
/**
 * Get account info
 * @param {*} status
 */


const getAccountInfo = () => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GET_ACCOUNT_INFO);

const getAccountInfoSuccess = data => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GET_ACCOUNT_INFO_SUCCESS, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data));

const getAccountInfoFailure = error => Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeActionCreator"])(Types.GET_ACCOUNT_INFO_SUCCESS, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, error)); // TODO: Auto generated actions will be like this


/* harmony default export */ __webpack_exports__["default"] = ({
  fbSignIn,
  fbSignInSuccess,
  fbSignInFailure,
  googleSignIn,
  googleSignInSuccess,
  googleSignInFailure,
  signIn,
  signInSuccess,
  signInFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
  setAuth,
  showAuthDrawer,
  signOut,
  getAccountInfo,
  getAccountInfoSuccess,
  getAccountInfoFailure
});

/***/ }),

/***/ "./redux/Auth/reducers.js":
/*!********************************!*\
  !*** ./redux/Auth/reducers.js ***!
  \********************************/
/*! exports provided: INITIAL_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seamless-immutable */ "seamless-immutable");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/redux */ "./utils/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./redux/Auth/actions.js");



const INITIAL_STATE = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({
  isAuth: false,
  drawerVisible: false
});

const setAuth = (state, {
  status
}) => state.merge({
  isAuth: status
});
/**
 * Email Sign Reducers
 * @param {*} state
 */


const signInSuccess = state => state.merge({
  isAuth: true
});
/**
 * Facebook Sign Reducers
 * @param {*} state
 */


const fbSignInSuccess = state => state.merge({
  isAuth: true
});
/**
 * Google Sign Reducers
 * @param {*} state
 */


const googleSignInSuccess = state => state.merge({
  isAuth: true
});

const signOut = state => state.merge({
  isAuth: false
});

const showAuthDrawer = (state, {
  status
}) => state.merge({
  drawerVisible: status
});

const getUserInfoSuccess = (state, {
  email,
  firstName,
  lastName
}) => state.merge({
  email,
  firstName,
  lastName
});

const ACTION_HANDLERS = {
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].SET_AUTH]: setAuth,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].SIGN_IN_SUCCESS]: signInSuccess,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].FB_SIGN_IN_SUCCESS]: fbSignInSuccess,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].GOOGLE_SIGN_IN_SUCCESS]: googleSignInSuccess,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].SIGN_OUT]: signOut,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].SHOW_AUTH_DRAWER]: showAuthDrawer,
  [_actions__WEBPACK_IMPORTED_MODULE_2__["Types"].GET_ACCOUNT_INFO_SUCCESS]: getUserInfoSuccess
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_redux__WEBPACK_IMPORTED_MODULE_1__["makeReducerCreator"])(INITIAL_STATE, ACTION_HANDLERS));

/***/ }),

/***/ "./redux/Auth/sagas.js":
/*!*****************************!*\
  !*** ./redux/Auth/sagas.js ***!
  \*****************************/
/*! exports provided: fbSignIn, googleSignIn, signIn, signUp, getAccountInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbSignIn", function() { return fbSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSignIn", function() { return googleSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfo", function() { return getAccountInfo; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/Auth/actions.js");
/* harmony import */ var _api_SNS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/SNS */ "./api/SNS.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/user */ "./api/user.js");
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cookies */ "./utils/cookies.js");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exceptions */ "./redux/exceptions.js");






function* fbSignIn(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_SNS__WEBPACK_IMPORTED_MODULE_2__["fbSignIn"], payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].fbSignInSuccess(response));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].showAuthDrawer(false)); // TODO: Set token in cookies

    Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_4__["setToken"])(token);
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].fbSignInFailure(err));
    Object(_exceptions__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
  }
}
function* googleSignIn(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_SNS__WEBPACK_IMPORTED_MODULE_2__["googleSignIn"], payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].googleSignInSuccess(response));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].showAuthDrawer(false)); // TODO: Set token in cookies

    Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_4__["setToken"])(token);
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].googleSignInFailure(err));
    Object(_exceptions__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
  }
}
function* signIn(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_SNS__WEBPACK_IMPORTED_MODULE_2__["signIn"], payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].signInSuccess(response));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].showAuthDrawer(false)); // // TODO: Set token in cookies

    Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_4__["setToken"])(token);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].getAccountInfo());
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].signInFailure(err));
    Object(_exceptions__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
  }
}
function* signUp(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_SNS__WEBPACK_IMPORTED_MODULE_2__["signUp"], payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].signUpSuccess(response));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].showAuthDrawer(false)); // TODO: Set token in cookies

    Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_4__["setToken"])(token);
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].signUpFailure(err));
    Object(_exceptions__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
  }
}
function* getAccountInfo(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_user__WEBPACK_IMPORTED_MODULE_3__["getAccountInfo"], payload); // TODO: Set token in cookies

    if (!response) {
      throw response;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].getAccountInfoSuccess(response));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].getAccountInfoFailure(err));
    Object(_exceptions__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
  }
} // export function* updateUser(payload) { }

/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].FB_SIGN_IN, fbSignIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].GOOGLE_SIGN_IN, googleSignIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].SIGN_IN, signIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].SIGN_UP, signUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].GET_ACCOUNT_INFO, getAccountInfo)]);

/***/ }),

/***/ "./redux/exceptions.js":
/*!*****************************!*\
  !*** ./redux/exceptions.js ***!
  \*****************************/
/*! exports provided: showError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const exception = {
  SomethingWentWrong: 'Something went wrong',
  NotAuthorizedException: 'Incorrect email or password.',
  UserNotFoundException: 'This email does not exist.',
  UsernameExistsException: 'This email already exists.',
  LimitExceededException: 'Attempt limit exceeded, please try after some time.',
  CodeMismatchException: 'Invalid verification code provided, please try again.'
};
const showError = error => {
  const keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(exception);

  const index = keys.findIndex(key => error.exception === key);

  if (index < 0) {
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].error({
      message: 'Notification',
      description: exception.SomethingWentWrong
    });
  } else {
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].error({
      message: 'Notification',
      description: exception[keys[index]]
    });
  }
};

/***/ }),

/***/ "./redux/placeholder/actions.js":
/*!**************************************!*\
  !*** ./redux/placeholder/actions.js ***!
  \**************************************/
/*! exports provided: Types, loadData, loadDataSuccess, loadDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccess", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataError", function() { return loadDataError; });
const Types = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR'
};
function loadData() {
  return {
    type: Types.LOAD_DATA
  };
}
function loadDataSuccess(data) {
  return {
    type: Types.LOAD_DATA_SUCCESS,
    data
  };
}
function loadDataError(error) {
  return {
    type: Types.LOAD_DATA_ERROR,
    error
  };
}

/***/ }),

/***/ "./redux/placeholder/reducers.js":
/*!***************************************!*\
  !*** ./redux/placeholder/reducers.js ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seamless-immutable */ "seamless-immutable");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/placeholder/actions.js");


const initialState = seamless_immutable__WEBPACK_IMPORTED_MODULE_0___default()({
  data: null,
  error: false
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["Types"].LOAD_DATA_SUCCESS:
      return state.merge({
        data: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["Types"].LOAD_DATA_ERROR:
      return state.merge({
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/placeholder/sagas.js":
/*!************************************!*\
  !*** ./redux/placeholder/sagas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/placeholder/actions.js");



function* loadDataSaga() {
  try {
    const res = yield fetch(`${"https://eventmaster.lateamapp.co/api/v1/"}users`);
    const data = yield res.json();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadDataSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadDataError"])(err));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Types"].LOAD_DATA, loadDataSaga));

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _placeholder_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder/reducers */ "./redux/placeholder/reducers.js");
/* harmony import */ var _Auth_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth/reducers */ "./redux/Auth/reducers.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  placeholder: _placeholder_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _Auth_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./redux/sagas.js":
/*!************************!*\
  !*** ./redux/sagas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _placeholder_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder/sagas */ "./redux/placeholder/sagas.js");
/* harmony import */ var _Auth_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth/sagas */ "./redux/Auth/sagas.js");




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([..._Auth_sagas__WEBPACK_IMPORTED_MODULE_2__["default"], _placeholder_sagas__WEBPACK_IMPORTED_MODULE_1__["default"]]);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seamless-immutable */ "seamless-immutable");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./redux/sagas.js");






const bindMiddleware = middleware => {
  if (true) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()(initialState), bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./utils/cookies.js":
/*!**************************!*\
  !*** ./utils/cookies.js ***!
  \**************************/
/*! exports provided: setCookie, removeCookie, getCookie, getToken, setToken, removeToken, isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};

const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

const getCookie = (key, req) =>  false ? undefined : getCookieFromServer(key, req); // TODO: Token

const getToken = (ctx = {}) => getCookie('token', ctx.req);
const setToken = value => setCookie('token', value);
const removeToken = () => removeCookie('token');
/**
 * Get authenticated status
 * @param {*} ctx optional
 */

const isAuthenticated = ctx => !!getToken(ctx);

/***/ }),

/***/ "./utils/redux.js":
/*!************************!*\
  !*** ./utils/redux.js ***!
  \************************/
/*! exports provided: makeConstantCreator, makeActionCreator, makeReducerCreator, apiWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeConstantCreator", function() { return makeConstantCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return makeActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeReducerCreator", function() { return makeReducerCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiWrapper", function() { return apiWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


 // import LoginActions from '../Redux/LoginRedux/actions';

function makeConstantCreator(...params) {
  const constant = {};

  lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(params, param => {
    constant[param] = param;
  });

  return constant;
}
const makeActionCreator = (type, params = null) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  type
}, params);
const makeReducerCreator = (initialState = null, handlers = {}) => (state = initialState, action) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return handler && handler(state, action) || state;
};
function* apiWrapper(isHaveProgress = false, apiFunc, ...params) {
  try {
    // dismissInAppNoti();
    // isHaveProgress && showProgress();
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(apiFunc, ...params); // isHaveProgress && showProgress(false);
    // if (response?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }

    return response;
  } catch (error) {
    // isHaveProgress && showProgress(false);
    // if (error?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }
    return error;
  }
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "seamless-immutable":
/*!*************************************!*\
  !*** external "seamless-immutable" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map