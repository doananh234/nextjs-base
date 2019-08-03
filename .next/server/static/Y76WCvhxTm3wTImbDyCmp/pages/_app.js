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

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./utils/redux.js


 // import LoginActions from '../Redux/LoginRedux/actions';

function makeConstantCreator(...params) {
  const constant = {};

  external_lodash_default.a.each(params, param => {
    constant[param] = param;
  });

  return constant;
}
const makeActionCreator = (type, params = null) => Object(objectSpread["a" /* default */])({
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
    const response = yield Object(effects_["call"])(apiFunc, ...params); // isHaveProgress && showProgress(false);
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
// CONCATENATED MODULE: ./redux/Auth/actions.js

 // TODO: Model name
// export const MODEL = 'todos';
// TODO: Add actions you don't want to use here

const IGNORE_ACTIONS = []; // TODO: Create constant types for model

const Types = Object(objectSpread["a" /* default */])({}, makeConstantCreator('SIGN_IN', 'SIGN_IN_SUCCESS', 'SIGN_IN_FAILURE', 'SIGN_UP', 'SIGN_UP_SUCCESS', 'SIGN_UP_FAILURE', 'GOOGLE_SIGN_IN', 'GOOGLE_SIGN_IN_SUCCESS', 'GOOGLE_SIGN_IN_FAILURE', 'FB_SIGN_IN', 'FB_SIGN_IN_SUCCESS', 'FB_SIGN_IN_FAILURE', 'SIGN_OUT', 'CHANGE_PASSWORD', 'GET_USE', 'EDIT_USER', 'UPDATE_USER_SUCCESS', 'UPDATE_USER_FAILURE', 'SET_AUTH', 'SHOW_AUTH_DRAWER', 'GET_ACCOUNT_INFO', 'GET_ACCOUNT_INFO_SUCCESS', 'GET_ACCOUNT_INFO_FAILURE', 'UPDATE_ACCOUNT_INFO', 'UPDATE_ACCOUNT_INFO_SUCCESS', 'UPDATE_ACCOUNT_INFO_FAILURE')); // const CRUDActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
// TODO: Custom actions

/** Facebook Sign In */

const fbSignIn = (accessToken, info) => makeActionCreator(Types.FB_SIGN_IN, {
  accessToken,
  info
});

const fbSignInSuccess = token => makeActionCreator(Types.FB_SIGN_IN_SUCCESS, {
  token
});

const fbSignInFailure = error => makeActionCreator(Types.FB_SIGN_IN_FAILURE, {
  error
});
/** Google Sign In */


const googleSignIn = accessToken => makeActionCreator(Types.GOOGLE_SIGN_IN, {
  accessToken
});

const googleSignInSuccess = token => makeActionCreator(Types.GOOGLE_SIGN_IN_SUCCESS, {
  token
});

const googleSignInFailure = error => makeActionCreator(Types.GOOGLE_SIGN_IN_FAILURE, {
  error
});
/** Email Sign In */


const signIn = ({
  email,
  password
}) => makeActionCreator(Types.SIGN_IN, {
  email,
  password
});

const signInSuccess = token => makeActionCreator(Types.SIGN_IN_SUCCESS, {
  token
});

const signInFailure = error => makeActionCreator(Types.SIGN_IN_FAILURE, {
  error
});
/** Email Sign Up */


const signUp = ({
  email,
  password,
  firstName,
  lastName
}) => makeActionCreator(Types.SIGN_UP, {
  email,
  password,
  firstName,
  lastName
});

const signUpSuccess = token => makeActionCreator(Types.SIGN_UP_SUCCESS, {
  token
});

const signUpFailure = error => makeActionCreator(Types.SIGN_UP_FAILURE, {
  error
});

const signOut = () => makeActionCreator(Types.SIGN_OUT);
/**
 * Set Authentication Status
 * @param {*} status
 */


const setAuth = status => makeActionCreator(Types.SET_AUTH, {
  status
});
/**
 * Show authentication drawer
 * @param {*} status
 */


const showAuthDrawer = status => makeActionCreator(Types.SHOW_AUTH_DRAWER, {
  status
});
/**
 * Get account info
 * @param {*} status
 */


const getAccountInfo = () => makeActionCreator(Types.GET_ACCOUNT_INFO);

const getAccountInfoSuccess = data => makeActionCreator(Types.GET_ACCOUNT_INFO_SUCCESS, Object(objectSpread["a" /* default */])({}, data));

const getAccountInfoFailure = error => makeActionCreator(Types.GET_ACCOUNT_INFO_SUCCESS, Object(objectSpread["a" /* default */])({}, error)); // TODO: Auto generated actions will be like this


/* harmony default export */ var actions = ({
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
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "seamless-immutable"
var external_seamless_immutable_ = __webpack_require__("5or1");
var external_seamless_immutable_default = /*#__PURE__*/__webpack_require__.n(external_seamless_immutable_);

// EXTERNAL MODULE: ./redux/placeholder/actions.js
var placeholder_actions = __webpack_require__("IDGl");

// CONCATENATED MODULE: ./redux/placeholder/reducers.js


const reducers_initialState = external_seamless_immutable_default()({
  data: null,
  error: false
});

function reducer(state = reducers_initialState, action) {
  switch (action.type) {
    case placeholder_actions["a" /* Types */].LOAD_DATA_SUCCESS:
      return state.merge({
        data: action.data
      });

    case placeholder_actions["a" /* Types */].LOAD_DATA_ERROR:
      return state.merge({
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var reducers = (reducer);
// CONCATENATED MODULE: ./redux/Auth/reducers.js



const INITIAL_STATE = external_seamless_immutable_default()({
  isAuth: false,
  drawerVisible: false
});

const reducers_setAuth = (state, {
  status
}) => state.merge({
  isAuth: status
});
/**
 * Email Sign Reducers
 * @param {*} state
 */


const reducers_signInSuccess = state => state.merge({
  isAuth: true
});
/**
 * Facebook Sign Reducers
 * @param {*} state
 */


const reducers_fbSignInSuccess = state => state.merge({
  isAuth: true
});
/**
 * Google Sign Reducers
 * @param {*} state
 */


const reducers_googleSignInSuccess = state => state.merge({
  isAuth: true
});

const reducers_signOut = state => state.merge({
  isAuth: false
});

const reducers_showAuthDrawer = (state, {
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
  [Types.SET_AUTH]: reducers_setAuth,
  [Types.SIGN_IN_SUCCESS]: reducers_signInSuccess,
  [Types.FB_SIGN_IN_SUCCESS]: reducers_fbSignInSuccess,
  [Types.GOOGLE_SIGN_IN_SUCCESS]: reducers_googleSignInSuccess,
  [Types.SIGN_OUT]: reducers_signOut,
  [Types.SHOW_AUTH_DRAWER]: reducers_showAuthDrawer,
  [Types.GET_ACCOUNT_INFO_SUCCESS]: getUserInfoSuccess
};
/* harmony default export */ var Auth_reducers = (makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS));
// CONCATENATED MODULE: ./redux/reducers.js



/* harmony default export */ var redux_reducers = (Object(external_redux_["combineReducers"])({
  placeholder: reducers,
  auth: Auth_reducers
}));
// CONCATENATED MODULE: ./redux/placeholder/sagas.js



function* loadDataSaga() {
  try {
    const res = yield fetch(`${"https://eventmaster.lateamapp.co/api/v1/"}users`);
    const data = yield res.json();
    yield Object(effects_["put"])(Object(placeholder_actions["d" /* loadDataSuccess */])(data));
  } catch (err) {
    yield Object(effects_["put"])(Object(placeholder_actions["c" /* loadDataError */])(err));
  }
}

/* harmony default export */ var sagas = (Object(effects_["takeLatest"])(placeholder_actions["a" /* Types */].LOAD_DATA, loadDataSaga));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var core_js_promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./utils/cookies.js

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};

const getCookieFromBrowser = key => external_js_cookie_default.a.get(key);

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
// CONCATENATED MODULE: ./api/utils.js







const checkIfErrorOccurs = res => ( // console.log('res', res);
{
  code: res.status,
  res
});

const TIME_OUT = 30000;

const utils_timeoutPromise = function timeoutPromise(ms, promise) {
  return new promise_default.a((resolve, reject) => {
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
  const normalFetch = external_isomorphic_unfetch_default()(path, headerOptions);

  if (ops.noParse) {
    return utils_timeoutPromise(TIME_OUT, normalFetch);
  }

  const res = await utils_timeoutPromise(TIME_OUT, normalFetch.then(checkIfErrorOccurs));

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

/* harmony default export */ var utils = (xFetch);

function getQueryString(params) {
  const esc = encodeURIComponent;
  return keys_default()(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&');
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
      data = stringify_default()(data);
    } // default params for fetch = method + (Content-Type)


    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }; // TODO: No need context in case browser

    const token = getToken(context);

    if (token) {
      defaults.headers.Authorization = `${token}`;
    }

    if (data) {
      defaults.body = data;
    }

    const paramsObj = Object(objectSpread["a" /* default */])({}, defaults, {
      headers: Object(objectSpread["a" /* default */])({}, params, defaults.headers)
    });

    return xFetch(url, paramsObj);
  };
}

const get = requestWrapper('GET');
const post = requestWrapper('POST');
const put = requestWrapper('PUT');
const patch = requestWrapper('PATCH');
const del = requestWrapper('DELETE');
// CONCATENATED MODULE: ./api/SNS.js

const SNS_fbSignIn = ({
  accessToken
}) => post('auth/loginFacebook', {
  accessToken
});
const SNS_googleSignIn = ({
  accessToken
}) => post('auth/loginGoogle', {
  accessToken
});
/**
 * Sign in with email
 * @param {*} email, password
 */

const SNS_signIn = ({
  email,
  password
}) => post('auth/login', {
  email,
  password
});
/**
 *
 * @param {*} email, password, sex, firstName, lastName, birthday,notice,
 */

const SNS_signUp = ({
  email,
  password,
  firstName,
  lastName
}) => post('auth/register', {
  email,
  password,
  firstName,
  lastName
});
// CONCATENATED MODULE: ./api/user.js

const user_getAccountInfo = () => get('users/me');
const updateAccountInfo = ({
  avatar,
  firstName,
  lastName
}) => put('users/me', {
  avatar,
  firstName,
  lastName
});
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./redux/exceptions.js


const exception = {
  SomethingWentWrong: 'Something went wrong',
  NotAuthorizedException: 'Incorrect email or password.',
  UserNotFoundException: 'This email does not exist.',
  UsernameExistsException: 'This email already exists.',
  LimitExceededException: 'Attempt limit exceeded, please try after some time.',
  CodeMismatchException: 'Invalid verification code provided, please try again.'
};
const showError = error => {
  const keys = keys_default()(exception);

  const index = keys.findIndex(key => error.exception === key);

  if (index < 0) {
    external_antd_["notification"].error({
      message: 'Notification',
      description: exception.SomethingWentWrong
    });
  } else {
    external_antd_["notification"].error({
      message: 'Notification',
      description: exception[keys[index]]
    });
  }
};
// CONCATENATED MODULE: ./redux/Auth/sagas.js






function* sagas_fbSignIn(payload) {
  try {
    const response = yield Object(effects_["call"])(SNS_fbSignIn, payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(effects_["put"])(actions.fbSignInSuccess(response));
    yield Object(effects_["put"])(actions.showAuthDrawer(false)); // TODO: Set token in cookies

    setToken(token);
  } catch (err) {
    yield Object(effects_["put"])(actions.fbSignInFailure(err));
    showError(err);
  }
}
function* sagas_googleSignIn(payload) {
  try {
    const response = yield Object(effects_["call"])(SNS_googleSignIn, payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(effects_["put"])(actions.googleSignInSuccess(response));
    yield Object(effects_["put"])(actions.showAuthDrawer(false)); // TODO: Set token in cookies

    setToken(token);
  } catch (err) {
    yield Object(effects_["put"])(actions.googleSignInFailure(err));
    showError(err);
  }
}
function* sagas_signIn(payload) {
  try {
    const response = yield Object(effects_["call"])(SNS_signIn, payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(effects_["put"])(actions.signInSuccess(response));
    yield Object(effects_["put"])(actions.showAuthDrawer(false)); // // TODO: Set token in cookies

    setToken(token);
    yield Object(effects_["put"])(actions.getAccountInfo());
  } catch (err) {
    yield Object(effects_["put"])(actions.signInFailure(err));
    showError(err);
  }
}
function* sagas_signUp(payload) {
  try {
    const response = yield Object(effects_["call"])(SNS_signUp, payload);
    const {
      token
    } = response || {};

    if (!token) {
      throw response;
    }

    yield Object(effects_["put"])(actions.signUpSuccess(response));
    yield Object(effects_["put"])(actions.showAuthDrawer(false)); // TODO: Set token in cookies

    setToken(token);
  } catch (err) {
    yield Object(effects_["put"])(actions.signUpFailure(err));
    showError(err);
  }
}
function* sagas_getAccountInfo(payload) {
  try {
    const response = yield Object(effects_["call"])(user_getAccountInfo, payload); // TODO: Set token in cookies

    if (!response) {
      throw response;
    }

    yield Object(effects_["put"])(actions.getAccountInfoSuccess(response));
  } catch (err) {
    yield Object(effects_["put"])(actions.getAccountInfoFailure(err));
    showError(err);
  }
} // export function* updateUser(payload) { }

/* harmony default export */ var Auth_sagas = ([Object(effects_["takeLatest"])(Types.FB_SIGN_IN, sagas_fbSignIn), Object(effects_["takeLatest"])(Types.GOOGLE_SIGN_IN, sagas_googleSignIn), Object(effects_["takeLatest"])(Types.SIGN_IN, sagas_signIn), Object(effects_["takeLatest"])(Types.SIGN_UP, sagas_signUp), Object(effects_["takeLatest"])(Types.GET_ACCOUNT_INFO, sagas_getAccountInfo)]);
// CONCATENATED MODULE: ./redux/sagas.js




function* rootSaga() {
  yield Object(effects_["all"])([...Auth_sagas, sagas]);
}

/* harmony default export */ var redux_sagas = (rootSaga);
// CONCATENATED MODULE: ./redux/store.js






const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

function configureStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(redux_reducers, external_seamless_immutable_default()(initialState), bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(redux_sagas);
  return store;
}

/* harmony default export */ var redux_store = (configureStore);
// EXTERNAL MODULE: ./config/theme.js
var theme = __webpack_require__("9xzA");
var theme_default = /*#__PURE__*/__webpack_require__.n(theme);

// CONCATENATED MODULE: ./pages/_app.js











class _app_MyApp extends app_default.a {
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


    const isAuth = isAuthenticated(ctx);
    ctx.store.dispatch(actions.setAuth(isAuth));
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
    return external_react_default.a.createElement(app["Container"], null, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
      theme: theme_default.a
    }, external_react_default.a.createElement(external_react_redux_["Provider"], {
      store: store
    }, external_react_default.a.createElement(Component, pageProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store)(external_next_redux_saga_default()(_app_MyApp)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "5or1":
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9xzA":
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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("p8BD");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
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
  if (false) {}
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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "IDGl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadDataError; });
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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });