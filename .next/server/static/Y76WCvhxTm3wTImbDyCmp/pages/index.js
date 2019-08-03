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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1Ak":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/eR3":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("inCO");

var assertThisInitialized = __webpack_require__("qHmy");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

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

/***/ "0TPh":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "1x4D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("l79E");

var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpolate = exports.InterpolateComponent = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("EuvS"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

var InterpolateComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InterpolateComponent, _Component);

  function InterpolateComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InterpolateComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InterpolateComponent).call(this, props));
    (0, _utils.deprecated)('Interpolate is deprecated and will be removed in the next major version (v9.0.0). Usage can be replaced by the "Trans" component');
    return _this;
  }

  (0, _createClass2.default)(InterpolateComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          i18n = _this$props.i18n,
          t = _this$props.t,
          i18nKey = _this$props.i18nKey,
          options = _this$props.options,
          className = _this$props.className,
          style = _this$props.style;
      var parent = this.props.parent || 'span';
      var REGEXP = this.props.regexp || i18n.services.interpolator.regexp; // Set to true if you want to use raw HTML in translation values
      // See https://github.com/i18next/react-i18next/issues/189

      var useDangerouslySetInnerHTML = this.props.useDangerouslySetInnerHTML || false;
      var dangerouslySetInnerHTMLPartElement = this.props.dangerouslySetInnerHTMLPartElement || 'span';
      var tOpts = (0, _objectSpread2.default)({}, {}, options, {
        interpolation: {
          prefix: '#$?',
          suffix: '?$#'
        }
      });
      var format = t(i18nKey, tOpts);
      if (!format || typeof format !== 'string') return _react.default.createElement('noscript', null);
      var children = [];

      var handleFormat = function handleFormat(key, props) {
        if (key.indexOf(i18n.options.interpolation.formatSeparator) < 0) {
          if (props[key] === undefined) i18n.services.logger.warn("interpolator: missed to pass in variable ".concat(key, " for interpolating ").concat(format));
          return props[key];
        }

        var p = key.split(i18n.options.interpolation.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(i18n.options.interpolation.formatSeparator).trim();
        if (props[k] === undefined) i18n.services.logger.warn("interpolator: missed to pass in variable ".concat(k, " for interpolating ").concat(format));
        return i18n.options.interpolation.format(props[k], f, i18n.language);
      };

      format.split(REGEXP).reduce(function (memo, match, index) {
        var child;

        if (index % 2 === 0) {
          if (match.length === 0) return memo;

          if (useDangerouslySetInnerHTML) {
            child = _react.default.createElement(dangerouslySetInnerHTMLPartElement, {
              dangerouslySetInnerHTML: {
                __html: match
              }
            });
          } else {
            child = match;
          }
        } else {
          child = handleFormat(match, _this2.props);
        }

        memo.push(child);
        return memo;
      }, children);
      var additionalProps = {};

      if (i18n.options.react && i18n.options.react.exposeNamespace) {
        var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];

        if (i18nKey && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
          var parts = i18nKey.split(i18n.options.nsSeparator);
          ns = parts[0];
        }

        if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({
          ns: ns
        });
      }

      if (className) additionalProps.className = className;
      if (style) additionalProps.style = style;
      return _react.default.createElement.apply(this, [parent, additionalProps].concat(children));
    }
  }]);
  return InterpolateComponent;
}(_react.Component);

exports.InterpolateComponent = InterpolateComponent;
var Interpolate = (0, _context.withI18n)()(InterpolateComponent);
exports.Interpolate = Interpolate;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "45CA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(__webpack_require__("inCO"));
var _objectSpread = _interopDefault(__webpack_require__("iVCM"));
var _classCallCheck = _interopDefault(__webpack_require__("bTiK"));
var _createClass = _interopDefault(__webpack_require__("C1Yy"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__("/eR3"));
var _getPrototypeOf = _interopDefault(__webpack_require__("YytY"));
var _assertThisInitialized = _interopDefault(__webpack_require__("qHmy"));
var _inherits = _interopDefault(__webpack_require__("ba+5"));
var _toConsumableArray = _interopDefault(__webpack_require__("bQ9w"));
var _slicedToArray = _interopDefault(__webpack_require__("C+yZ"));

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger =
/*#__PURE__*/
function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      var _this2 = this;

      if (!this.observers[event]) {
        return;
      }

      this.observers[event].forEach(function () {
        if (!listener) {
          delete _this2.observers[event];
        } else {
          var index = _this2.observers[event].indexOf(listener);

          if (index > -1) {
            _this2.observers[event].splice(index, 1);
          }
        }
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

// http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */

  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/* eslint-disable */

var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}

var ResourceStore =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck(this, ResourceStore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceStore).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  _createClass(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      /* eslint no-restricted-syntax: 0 */
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

      if (this.options.compatibilityAPI === 'v1') return _objectSpread({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var Translator =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Translator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Translator).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        /* eslint prefer-rest-params: 0 */
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {}; // non valid keys handling

      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)]; // separators

      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator; // get namespace(s)

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      } // resolve from store


      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays; // object

      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        } // if we got a separator we loop over children - else we just return object as is
        // as having it set to false means no hierarchy so no lookup for nested values


        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

          /* eslint no-restricted-syntax: 0 */

          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, _objectSpread({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        // array special treatment
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        // string, empty or null
        var usedDefault = false;
        var usedKey = false; // fallback value

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        } // save missing


        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        } // extend


        res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key); // parseMissingKeyHandler

        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      } // return


      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        // i18next.parsing
        if (options.interpolation) this.interpolator.init(_objectSpread({}, options, {
          interpolation: _objectSpread({}, this.options.interpolation, options.interpolation)
        })); // interpolate

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options); // nesting

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      } // post process


      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey; // plain key

      var exactUsedKey; // key with context / plural

      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys]; // forEach possible key

      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;
          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count); // fallback for plural if context not found

              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context)); // get key for plural if needed

              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only


            var possibleKey;
            /* eslint no-cond-assign: 0 */

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil =
/*#__PURE__*/
function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      // http://www.iana.org/assignments/language-tags/language-tags.xhtml
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || []; // asume we have an object defining fallbacks

      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this.isWhitelisted(c)) {
          codes.push(c);
        } else {
          _this.logger.warn("rejecting non-whitelisted language code: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

/* eslint-disable */

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver =
/*#__PURE__*/
function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  _createClass(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        // if (rule.numbers.length === 1) return ''; // only singular
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        }; // COMPATIBILITY JSON
        // v1


        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (
        /* v2 */
        this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (
        /* v3 - gettext index */
        this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator =
/*#__PURE__*/
function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.init(options, true);
  }
  /* eslint no-param-reassign: 0 */


  _createClass(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var reset = arguments.length > 1 ? arguments[1] : undefined;

      if (reset) {
        this.options = options;

        this.format = options.interpolation && options.interpolation.format || function (value) {
          return value;
        };
      }

      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      // the regexp
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) return getPath(data, key);
        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPath(data, k), f, lng);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0; // unescape if has unescapePrefix/Suffix

      /* eslint no-cond-assign: 0 */

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());
        str = str.replace(match[0], value);
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0; // regular escape on demand

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread({}, options);

      clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup
      // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

      function handleHasOptions(key, inheritedOptions) {
        if (key.indexOf(',') < 0) return key;
        var p = key.split(',');
        key = p.shift();
        var optionsString = p.join(',');
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.error("failed parsing options string in nesting for key ".concat(key), e);
        }

        return key;
      } // regular escape on demand


      while (match = this.nestingRegexp.exec(str)) {
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions); // is only the nesting key (key1 = '$(key2)') return the value without stringify

        if (value && match[0] === str && typeof value !== 'string') return value; // no string to include or empty

        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        } // Nested keys should not be escaped by default #854
        // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);


        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Connector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.backend = backend;
    _this.store = store;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      // find what needs to be loaded
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2; // loaded
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1; // pending

            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var _name$split = name.split('|'),
          _name$split2 = _slicedToArray(_name$split, 2),
          lng = _name$split2[0],
          ns = _name$split2[1];

      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      } // set loaded


      this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

      var loaded = {}; // callback if ready

      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          // only do once per loaded -> this.emit('loaded', q.loaded);
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          /* eslint no-param-reassign: 0 */

          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      }); // emit consolidated loaded event

      this.emit('loaded', loaded); // remove done load requests

      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {}); // noting to load

      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data
        /* = retryFlag */
        && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

        return null; // pendings will trigger callback
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _name$split3 = name.split('|'),
          _name$split4 = _slicedToArray(_name$split3, 2),
          lng = _name$split4[0],
          ns = _name$split4[1];

      this.read(lng, ns, 'read', null, null, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null
        /* unused callback */
        , _objectSpread({}, options, {
          isUpdate: isUpdate
        }));
      } // write to store to avoid resending


      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    // string or array of namespaces
    whitelist: false,
    // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all',
    // | currentOnly | languageOnly
    preload: false,
    // array with preload languages
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    // allow bundling certain languages that are not remotely fetched
    saveMissing: false,
    // enable to send missing values
    updateMissing: false,
    // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback',
    // 'current' || 'all'
    saveMissingPlurals: true,
    // will save all forms not only singular key
    missingKeyHandler: false,
    // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false,
    // function(str, match)
    postProcess: false,
    // string or array of postProcessor names
    returnNull: true,
    // allows null value as valid translation
    returnEmptyString: true,
    // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false,
    // or string to join array
    returnedObjectHandler: false,
    // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false,
    // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop

    }
  };
}
/* eslint no-param-reassign: 0 */

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, I18n);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = _objectSpread({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      } // init services


      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options); // pipe events from backendConnector

        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options); // pipe events from translator

        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      } // append api


      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "loadResources",
    value: function loadResources() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!this.language) {
          // at least load fallbacks in this case
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(this.language);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, callback);
      } else {
        callback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        _this4.translator.changeLanguage(l);

        if (l) {
          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options = _objectSpread({}, opts);

        if (_typeof(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this6 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      }); // Exit early if all given languages are already preloaded

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this7 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this7[m];
      });
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options; // sync options

      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

module.exports = i18next;


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

/***/ "6zdr":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "8ZCr":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "9GeX":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "BAi7":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "C+yZ":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("Qb//");

var iterableToArrayLimit = __webpack_require__("fccC");

var nonIterableRest = __webpack_require__("F7au");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "C1Yy":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Dhwx":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E9fk":
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "EuvS":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("PW5K");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F7au":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "Ff/l":
/***/ (function(module) {

module.exports = JSON.parse("{\"appInfo\":{\"footer\":\"RAA ©2018 Created by Anh Doan\",\"name\":\"Cashbag\"},\"navs\":{\"home\":\"Home\",\"contact\":\"Contact\",\"faq\":\"FAQ\"},\"footer\":{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\"},\"home\":{\"shopping\":\"Shopping\",\"all\":\"All\",\"refunds\":\"Refunds\",\"coupons\":\"Coupons\",\"account\":\"Account\",\"ranking\":\"Ranking\",\"appStore\":{\"title\":\"Cashbag App\",\"description\":\"got more refund money with app.\",\"tryItNow\":\"try it now!\"}},\"user\":{\"waitingConfirmMoney\":\"Waiting Confirm Money\"},\"settings\":{\"logout\":\"Logout\",\"notification\":\"Notification\",\"history\":\"Order History\",\"support\":\"Support\",\"ratting\":\"Ratting\"},\"refunds\":{\"refunded\":\"Refunded\"}}");

/***/ }),

/***/ "H1no":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("l79E");

var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18n = exports.NamespacesConsumer = exports.NamespacesConsumerComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("8ZCr"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

var removedIsInitialSSR = false;

var NamespacesConsumerComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NamespacesConsumerComponent, _Component);

  function NamespacesConsumerComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NamespacesConsumerComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NamespacesConsumerComponent).call(this, props));

    if (!props.i18n) {
      _this.state = {
        i18nLoadedAt: null,
        ready: false
      };
      return (0, _possibleConstructorReturn2.default)(_this, (0, _utils.warnOnce)('You will need pass in an i18next instance either by props, using I18nextProvider or by using i18nextReactModule. Learn more https://react.i18next.com/components/overview#getting-the-i-18-n-function-into-the-flow'));
    }

    if (typeof props.i18n.then === 'function') {
      _this.state = {
        i18nLoadedAt: null,
        ready: false
      };
      return (0, _possibleConstructorReturn2.default)(_this, (0, _utils.warnOnce)('Detected a promise instead of an i18next instance. Probably you passed the return value of the i18next.init() function, this is not possible anymore with v13 of i18next. Just pass in the i18next instance directly.'));
    } // nextjs / SSR: getting data from next.js or other ssr stack


    (0, _utils.initSSR)(props); // provider SSR: data was set in provider and ssr flag was set

    if (props.i18n.options && props.i18n.options.isInitialSSR) {
      props.i18nOptions.wait = false;
    } // reportNS if needed for SSR


    var namespaces = _this.getNamespaces();

    if (props.reportNS) {
      namespaces.forEach(props.reportNS);
    } // check if we could flag this ready already as all is loaded


    var language = props.i18n.languages && props.i18n.languages[0];
    var ready = !!language && namespaces.every(function (ns) {
      return props.i18n.hasResourceBundle(language, ns);
    });
    _this.state = {
      i18nLoadedAt: null,
      ready: ready
    };
    _this.t = _this.getI18nTranslate();
    _this.onI18nChanged = _this.onI18nChanged.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.getI18nTranslate = _this.getI18nTranslate.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.namespaces = _this.getNamespaces.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(NamespacesConsumerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadNamespaces();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Note that dynamically loading additional namespaces after the initial mount will not block rendering – even if the `wait` option is true.
      if (this.props.ns && prevProps.ns !== this.props.ns) this.loadNamespaces();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      var _this$props = this.props,
          i18n = _this$props.i18n,
          i18nOptions = _this$props.i18nOptions;
      this.mounted = false;

      if (this.onI18nChanged) {
        if (i18nOptions.bindI18n) {
          var p = i18nOptions.bindI18n.split(' ');
          p.forEach(function (f) {
            return i18n.off(f, _this2.onI18nChanged);
          });
        }

        if (i18nOptions.bindStore) {
          var _p = i18nOptions.bindStore.split(' ');

          _p.forEach(function (f) {
            return i18n.store && i18n.store.off(f, _this2.onI18nChanged);
          });
        }
      }
    }
  }, {
    key: "onI18nChanged",
    value: function onI18nChanged() {
      var i18nOptions = this.props.i18nOptions;
      var ready = this.state.ready;
      if (!this.mounted) return;
      if (!ready && i18nOptions.omitBoundRerender) return;
      this.t = this.getI18nTranslate();
      this.setState({
        i18nLoadedAt: new Date()
      }); // rerender
    }
  }, {
    key: "getI18nTranslate",
    value: function getI18nTranslate() {
      var _this$props2 = this.props,
          i18n = _this$props2.i18n,
          i18nOptions = _this$props2.i18nOptions;
      var namespaces = this.getNamespaces();
      return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces && namespaces.length ? namespaces[0] : 'translation');
    }
  }, {
    key: "getNamespaces",
    value: function getNamespaces() {
      var _this$props3 = this.props,
          i18n = _this$props3.i18n,
          ns = _this$props3.ns,
          defaultNS = _this$props3.defaultNS;
      var namespaces = typeof ns === 'function' ? ns(this.props) : ns || defaultNS || i18n.options && i18n.options.defaultNS;
      return typeof namespaces === 'string' ? [namespaces] : namespaces || [];
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces() {
      var _this3 = this;

      var _this$props4 = this.props,
          i18n = _this$props4.i18n,
          i18nOptions = _this$props4.i18nOptions;
      var ready = this.state.ready;

      var bind = function bind() {
        if (i18nOptions.bindI18n && i18n) i18n.on(i18nOptions.bindI18n, _this3.onI18nChanged);
        if (i18nOptions.bindStore && i18n.store) i18n.store.on(i18nOptions.bindStore, _this3.onI18nChanged);
      };

      this.mounted = true;
      i18n.loadNamespaces(this.getNamespaces(), function () {
        var handleReady = function handleReady() {
          if (_this3.mounted && !ready) {
            _this3.setState({
              ready: true
            }, function () {
              if (!i18nOptions.wait) _this3.onI18nChanged();
            });
          }

          if (i18nOptions.wait && _this3.mounted) bind();
        };

        if (i18n.isInitialized) {
          handleReady();
        } else {
          var initialized = function initialized() {
            // due to emitter removing issue in i18next we need to delay remove
            setTimeout(function () {
              i18n.off('initialized', initialized);
            }, 1000);
            handleReady();
          };

          i18n.on('initialized', initialized);
        }
      });
      if (!i18nOptions.wait) bind();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          i18n = _this$props5.i18n,
          defaultNS = _this$props5.defaultNS,
          reportNS = _this$props5.reportNS,
          i18nOptions = _this$props5.i18nOptions;

      var _ref = this.state || {
        ready: false
      },
          ready = _ref.ready; // fallback if state is null...unknown edge case https://github.com/i18next/react-i18next/issues/615


      var t = this.t;
      if (!ready && i18nOptions.wait) return null; // remove ssr flag set by provider - first render was done from now on wait if set to wait

      if (i18n.options && i18n.options.isInitialSSR && !removedIsInitialSSR) {
        removedIsInitialSSR = true;
        setTimeout(function () {
          delete i18n.options.isInitialSSR;
        }, 100);
      }

      return _react.default.createElement(_context.I18nContext.Provider, {
        value: {
          i18n: i18n,
          t: t,
          defaultNS: defaultNS,
          reportNS: reportNS,
          lng: i18n && i18n.language
        }
      }, children(this.t, {
        i18n: i18n,
        t: t,
        lng: i18n.language,
        ready: ready
      }));
    }
  }]);
  return NamespacesConsumerComponent;
}(_react.Component);

exports.NamespacesConsumerComponent = NamespacesConsumerComponent;
var NamespacesConsumer = (0, _context.withI18n)()(NamespacesConsumerComponent);
exports.NamespacesConsumer = NamespacesConsumer;
var I18n = NamespacesConsumer;
exports.I18n = I18n;

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

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "NTP8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trans = exports.TransComponent = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("pdkE"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("EuvS"));

var _typeof2 = _interopRequireDefault(__webpack_require__("Dhwx"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__("YD+2"));

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  return node && node.children ? node.children : node.props && node.props.children;
}

function nodesToString(mem, children, index) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];
  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      mem = "".concat(mem).concat(child);
    } else if (hasChildren(child)) {
      mem = "".concat(mem, "<").concat(elementKey, ">").concat(nodesToString('', getChildren(child), i + 1), "</").concat(elementKey, ">");
    } else if (_react.default.isValidElement(child)) {
      mem = "".concat(mem, "<").concat(elementKey, "></").concat(elementKey, ">");
    } else if ((0, _typeof2.default)(child) === 'object') {
      var clone = (0, _objectSpread2.default)({}, child);
      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return mem;
}

function renderNodes(children, targetString, i18n) {
  if (targetString === '') return [];
  if (!children) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    if (Object.prototype.toString.call(childs) !== '[object Array]') childs = [childs];
    childs.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2.default)(child) === 'object' && !_react.default.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  targetString = i18n.services.interpolator.interpolate(targetString, data, i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify.default.parse("<0>".concat(targetString, "</0>"));

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];
    return astNodes.reduce(function (mem, node, i) {
      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react.default.isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var inner = mapAST(getChildren(child), node.children);
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), inner));
        } else if ((0, _typeof2.default)(child) === 'object' && !isElement) {
          var content = node.children[0] ? node.children[0].content : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else {
          mem.push(child);
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

var TransComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TransComponent, _React$Component);

  function TransComponent() {
    (0, _classCallCheck2.default)(this, TransComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TransComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(TransComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          count = _this$props.count,
          parent = _this$props.parent,
          i18nKey = _this$props.i18nKey,
          tOptions = _this$props.tOptions,
          values = _this$props.values,
          defaults = _this$props.defaults,
          components = _this$props.components,
          namespace = _this$props.ns,
          i18n = _this$props.i18n,
          tFromContextAndProps = _this$props.t,
          defaultNS = _this$props.defaultNS,
          reportNS = _this$props.reportNS,
          lng = _this$props.lng,
          i18nOptions = _this$props.i18nOptions,
          additionalProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "defaultNS", "reportNS", "lng", "i18nOptions"]);
      var t = tFromContextAndProps || i18n.t.bind(i18n);
      var reactI18nextOptions = i18n.options && i18n.options.react || {};
      var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
      var defaultValue = defaults || nodesToString('', children, 0) || reactI18nextOptions.transEmptyNodeValue;
      var hashTransKey = reactI18nextOptions.hashTransKey;
      var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
      var interpolationOverride = values ? {} : {
        interpolation: {
          prefix: '#$?',
          suffix: '?$#'
        }
      };
      var translation = key ? t(key, (0, _objectSpread2.default)({}, tOptions, values, interpolationOverride, {
        defaultValue: defaultValue,
        count: count,
        ns: namespace
      })) : defaultValue;

      if (reactI18nextOptions.exposeNamespace) {
        var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];

        if (i18nKey && i18n.options && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
          var parts = i18nKey.split(i18n.options.nsSeparator);
          ns = parts[0];
        }

        if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({
          ns: ns
        });
      }

      if (!useAsParent) return renderNodes(components || children, translation, i18n);
      return _react.default.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n));
    }
  }]);
  return TransComponent;
}(_react.default.Component);

exports.TransComponent = TransComponent;
var Trans = (0, _context.withI18n)()(TransComponent);
exports.Trans = Trans;

/***/ }),

/***/ "PW5K":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "PsK4":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ "Qb//":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "QgrP":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "QhKH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.deprecated = deprecated;
exports.initSSR = initSSR;
exports.loadNamespaces = loadNamespaces;
exports.shallowEqual = shallowEqual;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("X3oD"));

var _typeof2 = _interopRequireDefault(__webpack_require__("Dhwx"));

function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
    console.warn.apply(null, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}

function deprecated() {
  if (process && process.env && ( false || "production" === 'development')) {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (typeof args[0] === 'string') args[0] = "deprecation warning -> ".concat(args[0]);
    warnOnce.apply(void 0, args);
  }
}

var initializedLanguageOnce = false;
var initializedStoreOnce = false;

function initSSR(props, setIsInitialSSR) {
  // nextjs / SSR: getting data from next.js or other ssr stack
  if (!initializedStoreOnce && props.initialI18nStore) {
    props.i18n.services.resourceStore.data = props.initialI18nStore;
    if (setIsInitialSSR) props.i18n.options.isInitialSSR = true;
    if (props.i18nOptions) props.i18nOptions.wait = false; // we got all passed down already

    initializedStoreOnce = true;
  }

  if (!initializedLanguageOnce && props.initialLanguage) {
    props.i18n.changeLanguage(props.initialLanguage);
    initializedLanguageOnce = true;
  }
} // --------------
// loadNamespaces


var objectEntries = Object.entries || function (obj) {
  var ownProps = Object.keys(obj);
  var i = ownProps.length;
  var resArray = new Array(i); // preallocate the Array

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
}; // Borrowed from https://github.com/Rezonans/redux-async-connect/blob/master/modules/ReduxAsyncConnect.js#L16


function eachComponents(components, iterator) {
  for (var i = 0, l = components.length; i < l; i++) {
    // eslint-disable-line id-length
    if ((0, _typeof2.default)(components[i]) === 'object') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = objectEntries(components[i])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          iterator(value, i, key);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      iterator(components[i], i);
    }
  }
}

function filterAndFlattenComponents(components) {
  var flattened = [];
  eachComponents(components, function (Component) {
    if (Component && Component.namespaces) {
      Component.namespaces.forEach(function (namespace) {
        if (flattened.indexOf(namespace) === -1) {
          flattened.push(namespace);
        }
      });
    }
  });
  return flattened;
}

function loadNamespaces(_ref) {
  var components = _ref.components,
      i18n = _ref.i18n;
  var allNamespaces = filterAndFlattenComponents(components);
  return new Promise(function (resolve) {
    i18n.loadNamespaces(allNamespaces, resolve);
  });
} // -------------
// shallowEqual

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */

/* eslint-disable no-self-compare */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } // Step 6.a: NaN == NaN


  return x !== x && y !== y;
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((0, _typeof2.default)(objA) !== 'object' || objA === null || (0, _typeof2.default)(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/placeholder/actions.js
var actions = __webpack_require__("IDGl");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/layout/MobileTabBar/styles.js

const MobileTabBarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MobileTabBarWrapper",
  componentId: "sc-1dlp7vk-0"
})(["flex:1;background:", ";& > .ant-tabs{background:", ";& > .ant-tabs-bar{background:", ";position:fixed;left:0;right:0;bottom:-60px;transition:all 0.3s ease-in-out;@media (max-width:577px){bottom:0px;.ant-tabs-nav-container{display:flex;width:100vh;}.ant-tabs-tab{flex:1;}.ant-tabs-nav{width:100vw;> div{width:100%;display:flex;text-align:center;}.tabIcon{font-size:20px;}}}}@media (max-width:577px){height:100%;padding-bottom:40px;}}@media (max-width:577px){footer{display:none;}}"], ({
  theme
}) => theme.background.content, ({
  theme
}) => theme.background.content, ({
  theme
}) => theme.background.container);
// CONCATENATED MODULE: ./components/layout/MobileTabBar/index.js




const MobileTabBar = ({
  tabs
}) => external_react_default.a.createElement(MobileTabBarWrapper, null, external_react_default.a.createElement(external_antd_["Tabs"], {
  tabPosition: "bottom",
  defaultActiveKey: tabs[0].key
}, tabs.map(tab => external_react_default.a.createElement(external_antd_["Tabs"].TabPane, {
  tab: external_react_default.a.createElement(external_antd_["Icon"], {
    className: "tabIcon",
    type: tab.icon
  }),
  key: tab.key
}, tab.component))));

/* harmony default export */ var layout_MobileTabBar = (MobileTabBar);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.less
var antd = __webpack_require__("k/c8");

// CONCATENATED MODULE: ./components/layout/Header/styles.js


const HeaderWrapper = external_styled_components_default()(external_antd_["Layout"].Header).withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "qta7kw-0"
})(["display:flex;width:100%;margin-top:0px;.logo{height:40px;}@media (max-width:577px){margin-top:-64px;}"]);
// CONCATENATED MODULE: ./components/layout/LeftHeader/styles.js

const LeftHeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__LeftHeaderWrapper",
  componentId: "sc-1cq6mm0-0"
})(["flex:1;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/LogoImage.js



function LogoImage({
  isHighlight
}) {
  return external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("img", {
    style: {
      height: 40
    },
    src: isHighlight ? '/static/assets/icon/logoHighlight.png' : '/static/assets/icon/logo.png',
    alt: "",
    className: "logo"
  }));
}

/* harmony default export */ var components_LogoImage = (LogoImage);
// CONCATENATED MODULE: ./components/layout/LeftHeader/index.js




const LeftHeader = props => external_react_default.a.createElement(LeftHeaderWrapper, null, external_react_default.a.createElement(components_LogoImage, null));

/* harmony default export */ var layout_LeftHeader = (LeftHeader);
// EXTERNAL MODULE: ./node_modules/i18next/dist/cjs/i18next.js
var i18next = __webpack_require__("45CA");
var i18next_default = /*#__PURE__*/__webpack_require__.n(i18next);

// CONCATENATED MODULE: ./components/layout/CenterHeader/styles.js

const CenterHeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CenterHeaderWrapper",
  componentId: "sc-1g277dg-0"
})(["flex:1;display:flex;align-items:center;justify-content:center;"]);
// CONCATENATED MODULE: ./components/layout/CenterHeader/index.js




const NAVS = [{
  key: 'home',
  title: 'navs.home',
  href: '/'
}, {
  key: 'contact',
  title: 'navs.contact',
  href: '/contact'
}, {
  key: 'faq',
  title: 'navs.faq',
  href: '/faq'
}];

const CenterHeader = props => external_react_default.a.createElement(CenterHeaderWrapper, null, external_react_default.a.createElement(external_antd_["Menu"], {
  theme: "dark",
  mode: "horizontal",
  defaultSelectedKeys: [NAVS[0].key],
  style: {
    lineHeight: '64px'
  }
}, NAVS.map(data => external_react_default.a.createElement(external_antd_["Menu"].Item, {
  key: data.key
}, i18next_default.a.t(data.title)))));

/* harmony default export */ var layout_CenterHeader = (CenterHeader);
// CONCATENATED MODULE: ./components/layout/RightHeader/styles.js

const RightHeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__RightHeaderWrapper",
  componentId: "q600qg-0"
})(["flex:1;text-align:right;"]);
// CONCATENATED MODULE: ./components/layout/RightHeader/index.js



const RightHeader = props => external_react_default.a.createElement(RightHeaderWrapper, null, "asdsadas");

/* harmony default export */ var layout_RightHeader = (RightHeader);
// CONCATENATED MODULE: ./components/layout/Header/index.js
 // Import custom components

 // import store from '../../../store';
// import { changeCurrency } from '../../../actions';






const Header = () => external_react_default.a.createElement(HeaderWrapper, null, external_react_default.a.createElement(layout_LeftHeader, null), external_react_default.a.createElement(layout_CenterHeader, null), external_react_default.a.createElement(layout_RightHeader, null));

Header.defaultProps = {};
/* harmony default export */ var layout_Header = (Object(external_react_redux_["connect"])(null // { changeCurrency },
)(Header));
// CONCATENATED MODULE: ./components/layout/Container/styles.js


const ContainerWrapper = external_styled_components_default()(external_antd_["Layout"]).withConfig({
  displayName: "styles__ContainerWrapper",
  componentId: "sc-1jqphng-0"
})(["& > *{transition:all 0.3s ease-in-out;}.ant-layout-content{overflow-y:auto;overflow-x:hidden;}ul{padding-inline-start:0px;& > li{list-style:none;}}.sectionTitle{font-size:24px;padding:20px;margin-top:10px;font-weight:bold;color:", ";display:none;@media (max-width:577px){display:block;}}.ant-card{&.noPadding{.ant-card-body{padding:0px;}}}.ant-tabs-ink-bar{height:5px;}.row{display:flex;}"], ({
  theme
}) => theme.text.title);
// EXTERNAL MODULE: external "i18next-xhr-backend"
var external_i18next_xhr_backend_ = __webpack_require__("E9fk");
var external_i18next_xhr_backend_default = /*#__PURE__*/__webpack_require__.n(external_i18next_xhr_backend_);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__("fhoN");
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/commonjs/index.js
var commonjs = __webpack_require__("pH5e");

// EXTERNAL MODULE: ./i18n/locales/en.json
var en = __webpack_require__("Ff/l");

// EXTERNAL MODULE: ./i18n/locales/vi.json
var vi = __webpack_require__("zdCU");

// CONCATENATED MODULE: ./i18n/index.js






i18next_default.a.use(external_i18next_xhr_backend_default.a).use(external_i18next_browser_languagedetector_default.a).use(commonjs["reactI18nextModule"]) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});
// CONCATENATED MODULE: ./components/layout/Container/index.js





const Container = ({
  children
}) => external_react_default.a.createElement(ContainerWrapper, null, children);

/* harmony default export */ var layout_Container = (Container);
// CONCATENATED MODULE: ./components/layout/Footer/styles.js


const FooterWrapper = external_styled_components_default()(external_antd_["Layout"].Footer).withConfig({
  displayName: "styles__FooterWrapper",
  componentId: "sc-193ad2w-0"
})(["margin-top:20px;.copyright{text-align:center;color:", ";}.footerContent{padding:20px 0px;}.socialView{display:flex;padding-inline-start:0px;& > li{list-style:none;font-size:30px;margin-right:10px;color:", ";}}.footer-title{color:", ";text-transform:uppercase;font-weight:700;}.contact-list{li{a{position:relative;display:inherit;padding-top:13px;text-transform:capitalize;font-size:14px;color:", ";&:before{position:absolute;top:35px;content:'';height:2px;width:0;background-color:", ";-webkit-transition:0.5s ease;transition:0.5s ease;}&:hover{&:before{width:50px;}}}}}"], ({
  theme
}) => theme.text.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.text.primary, ({
  theme
}) => theme.text.text, ({
  theme
}) => theme.primary);
// CONCATENATED MODULE: ./components/layout/FooterSubscribe/styles.js

const FooterSubscribeWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__FooterSubscribeWrapper",
  componentId: "sc-54chez-0"
})(["padding:20px 0px;border-bottom:1px solid ", ";.form-inline{display:flex;}.btnSubscribe{}.space{width:20px;height:20px;}.formInput{display:flex;}"], ({
  theme
}) => theme.border.default);
// CONCATENATED MODULE: ./components/layout/FooterSubscribe/index.js



const FOOTER_INFO = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  copyright: ' 2018-19 themeforest powered by pixelstrap',
  subcribeDescription: 'Never Miss Anything From Multikart By Signing Up To Our Newsletter. ',
  subcribeTitle: 'KNOW IT ALL FIRST!'
};

const FooterSubscribe = props => external_react_default.a.createElement(FooterSubscribeWrapper, null, external_react_default.a.createElement(external_antd_["Row"], {
  gutter: 16
}, external_react_default.a.createElement(external_antd_["Col"], {
  sm: 12,
  xs: 24
}, external_react_default.a.createElement("div", {
  className: "subscribe"
}, external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", null, FOOTER_INFO.subcribeTitle), external_react_default.a.createElement("p", null, FOOTER_INFO.subcribeDescription)))), external_react_default.a.createElement(external_antd_["Col"], {
  className: "formInput",
  sm: 12,
  xs: 24
}, external_react_default.a.createElement(external_antd_["Input"], {
  id: "#",
  placeholder: "Enter your email"
}), external_react_default.a.createElement("span", {
  className: "space"
}), external_react_default.a.createElement(external_antd_["Button"], {
  className: "btnSubscribe",
  type: "primary"
}, "subscribe"))));

/* harmony default export */ var layout_FooterSubscribe = (FooterSubscribe);
// CONCATENATED MODULE: ./components/layout/Footer/index.js







const SOCIALS = [{
  url: 'https://www.facebook.com/',
  icon: 'facebook'
}, {
  url: 'https://www.twitter.com/',
  icon: 'twitter'
}, {
  url: 'https://www.instagram.com/',
  icon: 'instagram'
}];
const DATA = [{
  title: 'my account',
  subMenu: [{
    url: '/left-sidebar/collection',
    title: 'womens'
  }, {
    url: '/left-sidebar/collection',
    title: 'clothing'
  }, {
    url: '/left-sidebar/collection',
    title: 'featured'
  }, {
    url: '/left-sidebar/collection',
    title: 'accessories'
  }]
}, {
  title: 'why we choose',
  subMenu: [{
    url: '#',
    title: 'shipping & return'
  }, {
    url: '#',
    title: 'secure shopping'
  }, {
    url: '#',
    title: 'gallary'
  }, {
    url: '#',
    title: 'affiliates'
  }, {
    url: '#',
    title: 'contacts'
  }]
}, {
  title: 'store information',
  subMenu: [{
    url: '#',
    title: 'Multikart Demo Store, Demo store \nIndia 345-659',
    icon: 'fa fa-map-marker'
  }, {
    url: '#',
    title: 'Call Us: 123-456-7898',
    icon: 'fa fa-phone'
  }, {
    url: '#',
    title: 'Email Us: Support@Fiot.com',
    icon: 'fa fa-envelope-o'
  }, {
    url: '#',
    title: 'Fax: 123456',
    icon: 'fa fa-fax'
  }]
}];

const Footer = () => external_react_default.a.createElement(FooterWrapper, {
  className: "footer-light"
}, external_react_default.a.createElement(layout_FooterSubscribe, null), external_react_default.a.createElement(external_antd_["Row"], {
  className: "footerContent",
  gutter: 16
}, external_react_default.a.createElement(external_antd_["Col"], {
  md: 6
}, external_react_default.a.createElement("div", {
  className: "footer-contant"
}, external_react_default.a.createElement("div", {
  className: "footer-logo"
}, external_react_default.a.createElement(components_LogoImage, {
  isHighlight: true
})), external_react_default.a.createElement("br", null), external_react_default.a.createElement("p", null, i18next_default.a.t('footer.description')), external_react_default.a.createElement("ul", {
  className: "socialView"
}, SOCIALS.map(social => external_react_default.a.createElement("li", {
  key: social.url
}, external_react_default.a.createElement(link_default.a, {
  href: social.url
}, external_react_default.a.createElement(external_antd_["Icon"], {
  type: social.icon,
  className: social.icon,
  "aria-hidden": "true"
}))))))), DATA.map(item => external_react_default.a.createElement(external_antd_["Col"], {
  key: item.title,
  md: 6,
  sm: 12
}, external_react_default.a.createElement("div", {
  className: "sub-title"
}, external_react_default.a.createElement("div", {
  className: "footer-title"
}, external_react_default.a.createElement("h4", null, item.title)), external_react_default.a.createElement("div", {
  className: "footer-contant"
}, external_react_default.a.createElement("ul", {
  className: "contact-list"
}, item.subMenu.map(e => external_react_default.a.createElement("li", {
  key: e.title
}, e.icon && external_react_default.a.createElement("i", {
  className: e.icon
}), external_react_default.a.createElement("a", null, e.title))))))))), external_react_default.a.createElement("div", {
  className: "copyright"
}, i18next_default.a.t('appInfo.footer')));

/* harmony default export */ var layout_Footer = (Footer);
// CONCATENATED MODULE: ./components/layout/BasicLayout/styles.js


const LayoutWrapper = external_styled_components_default()(external_antd_["Layout"]).withConfig({
  displayName: "styles__LayoutWrapper",
  componentId: "sc-1kadb0y-0"
})(["height:100vh;overflow:hidden;@media (max-width:577px){height:100%;}"]);
// CONCATENATED MODULE: ./components/layout/BasicLayout/index.js









const BasicLayout = ({
  children
}) => external_react_default.a.createElement(layout_Container, null, external_react_default.a.createElement(LayoutWrapper, null, external_react_default.a.createElement(layout_Header, null), external_react_default.a.createElement(external_antd_["Layout"].Content, null, children, external_react_default.a.createElement(layout_Footer, null))));

/* harmony default export */ var layout_BasicLayout = (BasicLayout);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// CONCATENATED MODULE: ./containers/Home/Banner/styles.js

const BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__BannerWrapper",
  componentId: "sc-14zox0f-0"
})([".ant-carousel{.slick-dots{li{button{background:", ";}&.slick-active{button{opacity:1;background:", ";}}}}}.sectionTitle{display:none;}@media (max-width:577px){margin-bottom:20px;.sectionTitle{display:block;}}"], ({
  theme
}) => theme.shadow.heavyDark, ({
  theme
}) => theme.primary);
// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__("PsK4");
var Title_default = /*#__PURE__*/__webpack_require__.n(Title_);

// CONCATENATED MODULE: ./components/items/BannerItem/styles.js

const BannerItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BannerItemWrapper",
  componentId: "sc-15ez6f8-0"
})([".bannerContainer{flex:1;padding:10%;background-repeat:no-repeat;background-size:cover;display:flex;align-items:center;width:100%;height:500px;}.content{h1{font-size:40px;font-weight:600;@media (max-width:577px){font-size:20px;width:80%;}}p{font-size:20px;@media (max-width:577px){font-size:14px;}}}@media (max-width:577px){.bannerContainer{border-radius:15px;height:200px;}padding:7.5px;}"]);
// CONCATENATED MODULE: ./components/items/BannerItem/index.js





const BannerItem = ({
  item
}) => external_react_default.a.createElement(BannerItemWrapper, null, external_react_default.a.createElement("div", {
  className: "bannerContainer",
  style: {
    backgroundImage: `url(${item.image})`
  }
}, external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement(external_antd_["Col"], {
  lg: 18,
  md: 24
}, external_react_default.a.createElement("div", {
  className: "content"
}, external_react_default.a.createElement(Title_default.a, null, "Connect the physical and the digital world"), external_react_default.a.createElement("p", null, item.description))))));

/* harmony default export */ var items_BannerItem = (BannerItem);
// CONCATENATED MODULE: ./containers/Home/Banner/index.js






const Banner_DATA = [{
  title: 'welcome to fashion',
  description: 'men fashion',
  url: '/left-sidebar/collection',
  image: 'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-2.jpg'
}, {
  title: 'welcome to fashion',
  description: 'women fashion',
  url: '/left-sidebar/collection',
  image: 'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-3.jpg'
}, {
  title: 'welcome to fashion',
  description: 'men fashion',
  url: '/left-sidebar/collection',
  image: 'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-1.jpg'
}];

const Banner = () => {
  const settings = {
    swipeToSlide: true,
    // centerMode: true,
    draggable: true,
    // centerPadding: '60px',
    responsive: [{
      breakpoint: 577,
      settings: {
        centerMode: true,
        dots: false,
        centerPadding: '20px'
      }
    }]
  };
  return external_react_default.a.createElement(BannerWrapper, null, external_react_default.a.createElement("h1", {
    className: "sectionTitle"
  }, i18next_default.a.t('home.shopping')), external_react_default.a.createElement(external_antd_["Carousel"], _extends({}, settings, {
    autoplay: true
  }), Banner_DATA.map((e, index) => external_react_default.a.createElement(items_BannerItem, {
    item: e,
    key: String(index)
  }))));
};

/* harmony default export */ var Home_Banner = (Banner);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./components/items/CategoryItem/styles.js

const CategoryItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CategoryItemWrapper",
  componentId: "q7a3dn-0"
})(["text-align:center;padding:10px;.icCategory{font-size:40px;}.txtName{margin-top:15px;}@media (max-width:577px){}"]);
// CONCATENATED MODULE: ./components/items/CategoryItem/index.js




const CategoryItem = ({
  item
}) => external_react_default.a.createElement(CategoryItemWrapper, null, external_react_default.a.createElement(external_antd_["Icon"], {
  theme: "twoTone",
  twoToneColor: "#cc3366",
  className: "icCategory",
  type: item.icon
}), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
  className: "txtName"
}, item.title));

/* harmony default export */ var items_CategoryItem = (CategoryItem);
// CONCATENATED MODULE: ./containers/Home/Categories/styles.js

const CategoriesWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__CategoriesWrapper",
  componentId: "m5tn6o-0"
})(["padding:0px 20px;@media (max-width:768px){background:transparent;width:auto;.categoryGroup{padding:0px 5px;height:260px;.ant-card{height:100%;padding:10px 0px;}}}"]);
// CONCATENATED MODULE: ./containers/Home/Categories/index.js





const CATEGORIES = [{
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}, {
  key: 'a',
  title: 'Chợ điện tử',
  icon: 'skin'
}];

const Categories = props => {
  const settings = {
    swipeToSlide: true,
    infinite: false,
    // centerMode: true,
    draggable: true,
    // centerPadding: '60px',
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true,
        dots: false,
        centerPadding: '20px'
      }
    }]
  };
  return external_react_default.a.createElement(CategoriesWrapper, null, external_react_default.a.createElement(external_antd_["Carousel"], settings, Object(external_lodash_["chunk"])(CATEGORIES, 9).map((group, index) => external_react_default.a.createElement("div", {
    className: "categoryGroup"
  }, external_react_default.a.createElement(external_antd_["Card"], {
    className: "noPadding",
    bordered: false,
    key: String(`group${index}`)
  }, external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex"
  }, group.map((e, index2) => external_react_default.a.createElement(external_antd_["Col"], {
    key: String(`category${index2}`),
    span: 8
  }, external_react_default.a.createElement(items_CategoryItem, {
    item: e
  })))))))));
};

/* harmony default export */ var Home_Categories = (Categories);
// CONCATENATED MODULE: ./containers/Home/UserInfo/styles.js

const UserInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserInfoWrapper",
  componentId: "sc-3aefvt-0"
})(["margin:20px;@media (max-width:577px){margin-top:50px;display:", ";}.settings{margin-top:20px;@media (max-width:577px){margin-top:0px;}}.btnLogout{margin:20px 0px 0px 0px;.ant-btn{width:100%;height:60px;border:none;border-radius:15px;font-weight:600px;font-size:17px;.anticon{color:", ";}}}"], ({
  isHiddenMobile
}) => isHiddenMobile ? 'none' : 'block', ({
  theme
}) => theme.primary);
// CONCATENATED MODULE: ./components/items/InfoItem/styles.js

const InfoItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__InfoItemWrapper",
  componentId: "sc-1f57785-0"
})(["display:flex;padding:20px;border-top:1px solid ", ";align-items:center;&:first-child{border-top:none;}.vLeft{width:55px;text-align:center;.icInfo{font-size:50px;}}.vCenter{flex:1;padding-left:10px;.txtTitle{font-size:16px;font-weight:600;color:", ";}.txtValue{font-size:20px;font-weight:bold;color:", ";}}.vRight{font-size:20px;}@media (max-width:577px){}"], ({
  theme
}) => theme.border.default, ({
  theme
}) => theme.text.title, ({
  theme
}) => theme.primary);
// CONCATENATED MODULE: ./components/items/InfoItem/index.js




const InfoItem = ({
  item,
  isShowArrow
}) => external_react_default.a.createElement(InfoItemWrapper, null, external_react_default.a.createElement("div", {
  className: "vLeft"
}, external_react_default.a.createElement(external_antd_["Icon"], {
  className: "icInfo",
  type: item.icon
})), external_react_default.a.createElement("div", {
  className: "vCenter"
}, external_react_default.a.createElement("div", {
  className: "txtTitle"
}, item.title), external_react_default.a.createElement("div", {
  className: "txtValue"
}, item.value)), isShowArrow && external_react_default.a.createElement(external_antd_["Icon"], {
  className: "vRight",
  type: "right"
}));

InfoItem.defaultProps = {
  isShowArrow: true
};
/* harmony default export */ var items_InfoItem = (InfoItem);
// CONCATENATED MODULE: ./containers/Home/UserInfo/index.js







const UserInfo = props => external_react_default.a.createElement(layout_Container, null, external_react_default.a.createElement(UserInfoWrapper, props, external_react_default.a.createElement(external_antd_["Card"], {
  bordered: false,
  className: "noPadding"
}, external_react_default.a.createElement(items_InfoItem, {
  item: {
    title: 'Anh Doan',
    value: '10,000',
    icon: 'aliwangwang'
  }
}), external_react_default.a.createElement(items_InfoItem, {
  isShowArrow: false,
  item: {
    title: i18next_default.a.t('user.waitingConfirmMoney'),
    value: '500,000',
    icon: 'dollar'
  }
})), external_react_default.a.createElement("h1", {
  className: "sectionTitle"
}, i18next_default.a.t('home.account')), external_react_default.a.createElement(external_antd_["Card"], {
  bordered: false,
  className: "noPadding settings"
}, external_react_default.a.createElement(items_InfoItem, {
  item: {
    title: i18next_default.a.t('settings.notification'),
    value: '3',
    icon: 'bell'
  }
}), external_react_default.a.createElement(items_InfoItem, {
  item: {
    title: i18next_default.a.t('settings.history'),
    value: '4',
    icon: 'history'
  }
}), external_react_default.a.createElement(items_InfoItem, {
  item: {
    title: i18next_default.a.t('settings.support'),
    icon: 'customer-service'
  }
}), external_react_default.a.createElement(items_InfoItem, {
  item: {
    title: i18next_default.a.t('settings.ratting'),
    icon: 'star'
  }
})), external_react_default.a.createElement("div", {
  className: "btnLogout"
}, external_react_default.a.createElement(external_antd_["Button"], {
  icon: "logout"
}, i18next_default.a.t('settings.logout')))));

/* harmony default export */ var Home_UserInfo = (UserInfo);
// CONCATENATED MODULE: ./components/items/BrandSection/styles.js

const BrandSectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BrandSectionWrapper",
  componentId: "sc-1ncjntc-0"
})(["@media (max-width:577px){}"]);
// CONCATENATED MODULE: ./components/items/BrandItem/styles.js

const BrandItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BrandItemWrapper",
  componentId: "sc-1qthy50-0"
})(["display:flex;padding:10px;border-radius:15px;margin:0px 15px 15px 0px;width:250px;min-width:250px;height:120px;background:", ";align-items:center;.vCenter{flex:1;padding-left:10px;.icInfo{font-size:50px;color:", ";}.txtTitle{font-size:16px;padding-top:20px;font-weight:300;color:", ";}.txtValue{font-size:16px;font-weight:bold;color:", ";}}.vRight{font-size:20px;}@media (max-width:577px){}"], ({
  theme
}) => theme.background.container, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.text.text, ({
  theme
}) => theme.text.title);
// CONCATENATED MODULE: ./components/items/BrandItem/index.js





const BrandItem = ({
  item,
  suffix,
  isShowArrow
}) => external_react_default.a.createElement(BrandItemWrapper, null, external_react_default.a.createElement("div", {
  className: "vCenter"
}, external_react_default.a.createElement(external_antd_["Icon"], {
  className: "icInfo",
  type: item.icon || 'reddit'
}), external_react_default.a.createElement("div", {
  className: "txtTitle"
}, external_react_default.a.createElement("span", {
  className: "txtValue"
}, item.value), ` ${suffix}`)), external_react_default.a.createElement(external_antd_["Icon"], {
  className: "vRight",
  type: "right"
}));

BrandItem.defaultProps = {};
/* harmony default export */ var items_BrandItem = (BrandItem);
// CONCATENATED MODULE: ./components/items/CouponItem/styles.js

const CouponItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CouponItemWrapper",
  componentId: "apdt6i-0"
})(["display:flex;flex-direction:column;padding:10px;border-radius:15px;margin:0px 15px 15px 0px;height:120px;min-width:120px;width:120px;background:", ";.txtTitle{flex:1;font-size:13px;font-weight:300;color:", ";}.lbDescription{color:", ";}.txtValue{font-size:17px;font-weight:bold;color:", ";}@media (max-width:577px){}"], ({
  theme
}) => theme.background.container, ({
  theme
}) => theme.text.title, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary);
// CONCATENATED MODULE: ./components/items/CouponItem/index.js




const CouponItem = ({
  item,
  prefix,
  isShowArrow
}) => external_react_default.a.createElement(CouponItemWrapper, null, external_react_default.a.createElement("div", {
  className: "txtTitle"
}, item.name), external_react_default.a.createElement("div", {
  className: "lbDescription"
}, prefix || 'Hoàn tiền'), external_react_default.a.createElement("span", {
  className: "txtValue"
}, item.value, " ", item.unit));

CouponItem.defaultProps = {};
/* harmony default export */ var items_CouponItem = (CouponItem);
// CONCATENATED MODULE: ./components/items/BrandSection/index.js






const SETTING = {
  dots: false,
  infinite: false,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 3,
  variableWidth: true
};

const BrandSection = ({
  item,
  isShowArrow,
  data
}) => external_react_default.a.createElement(BrandSectionWrapper, null, external_react_default.a.createElement(external_antd_["Carousel"], SETTING, external_react_default.a.createElement(items_BrandItem, {
  item: item,
  suffix: i18next_default.a.t('refunds.refunded')
}), data.map(e => external_react_default.a.createElement(items_CouponItem, {
  item: item
}))));

BrandSection.defaultProps = {
  isShowArrow: true
};
/* harmony default export */ var items_BrandSection = (BrandSection);
// CONCATENATED MODULE: ./containers/Home/ListRefundBrands/index.js




const ListRefundBrands_DATA = [{
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

const ListRefundBrands = () => ListRefundBrands_DATA.map((item, index) => external_react_default.a.createElement(items_BrandSection, {
  key: String(index),
  data: ListRefundBrands_DATA,
  item: item,
  index: index
}));

/* harmony default export */ var Home_ListRefundBrands = (ListRefundBrands);
// CONCATENATED MODULE: ./containers/Home/ListCoupons/index.js




const ListCoupons_DATA = [{
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

const ListCoupons = props => ListCoupons_DATA.map((item, index) => external_react_default.a.createElement(items_BrandSection, {
  data: ListCoupons_DATA,
  key: String(index),
  item: item,
  index: index
}));

/* harmony default export */ var Home_ListCoupons = (ListCoupons);
// CONCATENATED MODULE: ./containers/Home/HomeTabContent/styles.js

const HomeTabContentWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__HomeTabContentWrapper",
  componentId: "sc-1eybkzz-0"
})([".ant-tabs{padding:0px 20px;}@media (max-width:577px){}"]);
// CONCATENATED MODULE: ./containers/Home/HomeTabContent/index.js







const HomeTabContent = props => external_react_default.a.createElement(HomeTabContentWrapper, null, external_react_default.a.createElement("h1", {
  className: "sectionTitle"
}, i18next_default.a.t('home.all')), external_react_default.a.createElement(external_antd_["Tabs"], {
  defaultActiveKey: "1"
}, external_react_default.a.createElement(external_antd_["Tabs"].TabPane, {
  tab: i18next_default.a.t('home.refunds'),
  key: "1"
}, external_react_default.a.createElement(Home_ListRefundBrands, null)), external_react_default.a.createElement(external_antd_["Tabs"].TabPane, {
  tab: i18next_default.a.t('home.coupons'),
  key: "2"
}, external_react_default.a.createElement(Home_ListCoupons, null))));

/* harmony default export */ var Home_HomeTabContent = (HomeTabContent);
// CONCATENATED MODULE: ./components/items/RankingItem/styles.js

const RankingItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__RankingItemWrapper",
  componentId: "mj38tq-0"
})(["display:flex;width:100%;padding:0px 20px;align-items:center;&:first-child{border-top:none;}.vLeft{font-size:17px;font-weight:600;padding-right:10px;}.avatar{background:", ";width:50px;height:50px;}.vCenter{flex:1;padding-left:10px;}.vRight{text-align:right;.txtTitle{font-size:16px;font-weight:600;color:", ";}.txtValue{font-size:20px;font-weight:bold;color:", ";}}@media (max-width:577px){}"], ({
  theme
}) => theme.background.content, ({
  theme
}) => theme.text.title, ({
  theme
}) => theme.primary);
// CONCATENATED MODULE: ./components/items/RankingItem/index.js




const RankingItem = ({
  item,
  index
}) => external_react_default.a.createElement(RankingItemWrapper, null, external_react_default.a.createElement("div", {
  className: "vLeft"
}, "#", index), external_react_default.a.createElement(external_antd_["Avatar"], {
  className: "avatar",
  src: item.avatar
}), external_react_default.a.createElement("div", {
  className: "vCenter"
}, item.name), external_react_default.a.createElement("div", {
  className: "vRight"
}, external_react_default.a.createElement("div", {
  className: "txtValue"
}, item.value), external_react_default.a.createElement("div", {
  className: "txtUnit"
}, item.unit)));

RankingItem.defaultProps = {};
/* harmony default export */ var items_RankingItem = (RankingItem);
// CONCATENATED MODULE: ./containers/Home/Ranking/styles.js

const RankingWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__RankingWrapper",
  componentId: "pvdd6q-0"
})(["padding:20px 20px 0px 20px;.txtHeader{text-align:center;font-size:20px;font-weight:bold;color:", ";}@media (max-width:577px){display:", ";}"], ({
  theme
}) => theme.primary, ({
  isHiddenMobile
}) => isHiddenMobile ? 'none' : 'block');
// CONCATENATED MODULE: ./containers/Home/Ranking/index.js






const RANKING = [{
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

const Ranking = props => {
  return external_react_default.a.createElement(layout_Container, null, external_react_default.a.createElement(RankingWrapper, props, external_react_default.a.createElement(external_antd_["Card"], {
    bordered: false,
    className: "noPadding"
  }, external_react_default.a.createElement(external_antd_["List"], {
    bordered: false,
    size: "small",
    header: external_react_default.a.createElement("div", {
      className: "txtHeader"
    }, i18next_default.a.t('home.ranking')),
    dataSource: RANKING,
    renderItem: (item, index) => external_react_default.a.createElement(external_antd_["List"].Item, {
      key: item.id
    }, external_react_default.a.createElement(items_RankingItem, {
      item: item,
      index: index
    }))
  }))));
};

/* harmony default export */ var Home_Ranking = (Ranking);
// CONCATENATED MODULE: ./containers/Home/AppStore/styles.js

const styles_RankingWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__RankingWrapper",
  componentId: "sc-6swo2e-0"
})(["padding:20px;text-align:center;.txtTitle{font-size:34px;font-weight:bold;color:", ";}.txtDescription{font-size:17px;color:", ";margin-top:10px;}img{width:200px;height:200px;margin:auto;margin-top:20px;}@media (max-width:577px){}"], ({
  theme
}) => theme.primary, ({
  theme
}) => theme.text.textLight);
// CONCATENATED MODULE: ./containers/Home/AppStore/index.js





const AppStore_Ranking = props => {
  return external_react_default.a.createElement(styles_RankingWrapper, null, external_react_default.a.createElement(external_antd_["Card"], {
    bordered: false
  }, external_react_default.a.createElement("div", {
    className: "txtTitle"
  }, i18next_default.a.t('home.appStore.title')), external_react_default.a.createElement("div", {
    className: "txtDescription"
  }, i18next_default.a.t('home.appStore.description'), external_react_default.a.createElement("br", null), i18next_default.a.t('home.appStore.tryItNow')), external_react_default.a.createElement("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTzxXrgp5pzy-IrVz8MCHGs0CWdWmK4TquvzSajKxUI8ED6XJ",
    alt: ""
  })));
};

/* harmony default export */ var AppStore = (AppStore_Ranking);
// CONCATENATED MODULE: ./containers/Home/HomeTab/index.js










const HomeTab = props => external_react_default.a.createElement(layout_BasicLayout, null, external_react_default.a.createElement(Home_Banner, null), external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex"
}, external_react_default.a.createElement(external_antd_["Col"], {
  xs: 24,
  md: 12,
  lg: 6
}, external_react_default.a.createElement(Home_UserInfo, {
  isHiddenMobile: true
}), external_react_default.a.createElement(Home_Categories, null)), external_react_default.a.createElement(external_antd_["Col"], {
  xs: 24,
  md: 12,
  lg: 10
}, external_react_default.a.createElement(Home_HomeTabContent, null)), external_react_default.a.createElement(external_antd_["Col"], {
  xs: 24,
  md: 24,
  lg: 8
}, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex"
}, external_react_default.a.createElement(external_antd_["Col"], {
  xs: 24,
  md: 12,
  lg: 24
}, external_react_default.a.createElement(Home_Ranking, {
  isHiddenMobile: true
})), external_react_default.a.createElement(external_antd_["Col"], {
  xs: 24,
  md: 12,
  lg: 24
}, external_react_default.a.createElement(AppStore, null))))));

/* harmony default export */ var Home_HomeTab = (HomeTab);
// CONCATENATED MODULE: ./containers/Home/index.js
 // import PropTypes from 'prop-types';





function Home() {
  const TABS = [{
    key: 'home',
    component: external_react_default.a.createElement(Home_HomeTab, null),
    icon: 'home'
  }, {
    key: 'trophy',
    component: external_react_default.a.createElement(Home_Ranking, null),
    icon: 'trophy'
  }, {
    key: 'gift',
    component: 'gift',
    icon: 'gift'
  }, {
    key: 'user',
    component: external_react_default.a.createElement(Home_UserInfo, null),
    icon: 'user'
  }];
  return external_react_default.a.createElement(layout_MobileTabBar, {
    tabs: TABS
  });
}
// CONCATENATED MODULE: ./pages/index.js






function HomeIndex(props) {
  return external_react_default.a.createElement(Home, props);
}

const mapDispatchToProps = dispatch => ({});

HomeIndex.getInitialProps = async ({
  ctx: {
    store
  }
}) => {
  // store.dispatch(countIncrease());
  if (!store.getState().placeholder.data) {
    store.dispatch(Object(actions["b" /* loadData */])());
  }
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(HomeIndex));

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UrEu":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "V/yv":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "VKLI":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "X3oD":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("gvhb");

var iterableToArrayLimit = __webpack_require__("kgep");

var nonIterableRest = __webpack_require__("V/yv");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "XBjk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("l79E");

var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNamespaces = withNamespaces;
exports.translate = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("pdkE"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("EuvS"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("0TPh"));

var _utils = __webpack_require__("QhKH");

var _context = __webpack_require__("xlah");

var _NamespacesConsumer = __webpack_require__("H1no");

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

function withNamespaces(namespaceArg) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Wrapper(WrappedComponent) {
    var LoadNamespace =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(LoadNamespace, _Component);

      function LoadNamespace() {
        (0, _classCallCheck2.default)(this, LoadNamespace);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadNamespace).apply(this, arguments));
      }

      (0, _createClass2.default)(LoadNamespace, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var i18nOptions = this.props.i18nOptions;

          if (!i18nOptions.usePureComponent && !options.usePureComponent) {
            return true;
          }

          return !(0, _utils.shallowEqual)(this.props, nextProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props = this.props,
              namespaces = _this$props.namespaces,
              i18nOptions = _this$props.i18nOptions;
          var mergedI18nOptions = (0, _objectSpread2.default)({}, i18nOptions, options);
          var extraProps = {};

          if (mergedI18nOptions.innerRef) {
            extraProps.ref = mergedI18nOptions.innerRef;
          }

          return _react.default.createElement(_NamespacesConsumer.NamespacesConsumer, (0, _objectSpread2.default)({
            ns: namespaces || namespaceArg
          }, this.props, {
            i18nOptions: Object.keys(mergedI18nOptions).length > 0 ? mergedI18nOptions : null
          }), function (t, _ref) {
            var ready = _ref.ready,
                rest = (0, _objectWithoutProperties2.default)(_ref, ["ready"]);
            return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({
              tReady: ready
            }, _this.props, extraProps, rest));
          });
        }
      }]);
      return LoadNamespace;
    }(_react.Component);

    var LoadNamespaceWithContext = (0, _context.withI18n)()(LoadNamespace);
    LoadNamespaceWithContext.WrappedComponent = WrappedComponent;
    LoadNamespaceWithContext.displayName = "LoadNamespace(".concat(getDisplayName(WrappedComponent), ")");
    LoadNamespaceWithContext.namespaces = namespaceArg;
    return (0, _hoistNonReactStatics.default)(LoadNamespaceWithContext, WrappedComponent);
  };
}

withNamespaces.setDefaults = _context.setDefaults;
withNamespaces.setI18n = _context.setI18n;
var translate = withNamespaces;
exports.translate = translate;

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YD+2":
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Yp/V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("l79E");

var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = __webpack_require__("xlah");

var _utils = __webpack_require__("QhKH");

var I18nextProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(I18nextProvider, _Component);

  function I18nextProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, I18nextProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(I18nextProvider).call(this, props)); // nextjs / SSR: getting data from next.js or other ssr stack

    (0, _utils.initSSR)(props, true);
    return _this;
  }

  (0, _createClass2.default)(I18nextProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          i18n = _this$props.i18n,
          defaultNS = _this$props.defaultNS,
          reportNS = _this$props.reportNS;
      return _react.default.createElement(_context.I18nContext.Provider, {
        value: {
          i18n: i18n,
          defaultNS: defaultNS,
          reportNS: reportNS,
          lng: i18n && i18n.language,
          t: i18n && i18n.t.bind(i18n)
        }
      }, children);
    }
  }]);
  return I18nextProvider;
}(_react.Component);

exports.I18nextProvider = I18nextProvider;

/***/ }),

/***/ "YytY":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bQ9w":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("m6vj");

var iterableToArray = __webpack_require__("QgrP");

var nonIterableSpread = __webpack_require__("u8z6");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "bTiK":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "ba+5":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("swM7");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eLHH":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("Dhwx");

var assertThisInitialized = __webpack_require__("8ZCr");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "fV0V":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("+1Ak");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "fccC":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "fhoN":
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "gvhb":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "iVCM":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9GeX");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "inCO":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k/c8":
/***/ (function(module, exports) {



/***/ }),

/***/ "kgep":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "l79E":
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
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

/***/ "m6vj":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ "pH5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "loadNamespaces", {
  enumerable: true,
  get: function get() {
    return _utils.loadNamespaces;
  }
});
Object.defineProperty(exports, "withNamespaces", {
  enumerable: true,
  get: function get() {
    return _withNamespaces.withNamespaces;
  }
});
Object.defineProperty(exports, "translate", {
  enumerable: true,
  get: function get() {
    return _withNamespaces.translate;
  }
});
Object.defineProperty(exports, "NamespacesConsumer", {
  enumerable: true,
  get: function get() {
    return _NamespacesConsumer.NamespacesConsumer;
  }
});
Object.defineProperty(exports, "I18n", {
  enumerable: true,
  get: function get() {
    return _NamespacesConsumer.I18n;
  }
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withI18n", {
  enumerable: true,
  get: function get() {
    return _context.withI18n;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "reactI18nextModule", {
  enumerable: true,
  get: function get() {
    return _context.reactI18nextModule;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "Interpolate", {
  enumerable: true,
  get: function get() {
    return _Interpolate.Interpolate;
  }
});

var _utils = __webpack_require__("QhKH");

var _withNamespaces = __webpack_require__("XBjk");

var _NamespacesConsumer = __webpack_require__("H1no");

var _Trans = __webpack_require__("NTP8");

var _I18nextProvider = __webpack_require__("Yp/V");

var _context = __webpack_require__("xlah");

var _Interpolate = __webpack_require__("1x4D");

/***/ }),

/***/ "pdkE":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("UrEu");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "qHmy":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

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

/***/ "swM7":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "tImR":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "u8z6":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "xlah":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("l79E");

var _interopRequireDefault = __webpack_require__("tImR");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.withContext = withContext;
exports.withI18n = withI18n;
exports.I18nContext = exports.reactI18nextModule = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("pdkE"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("BAi7"));

var _createClass2 = _interopRequireDefault(__webpack_require__("VKLI"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("eLHH"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("6zdr"));

var _inherits2 = _interopRequireDefault(__webpack_require__("fV0V"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("EuvS"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("0TPh"));

var defaultOptions = {
  wait: false,
  withRef: false,
  bindI18n: 'languageChanged loaded',
  bindStore: 'added removed',
  translateFuncName: 't',
  nsMode: 'default',
  usePureComponent: false,
  omitBoundRerender: true,
  transEmptyNodeValue: ''
};
var i18nInstance;

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = (0, _objectSpread2.default)({}, defaultOptions, options);
}

function getDefaults() {
  return defaultOptions;
}

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var reactI18nextModule = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.reactI18nextModule = reactI18nextModule;

var I18nContext = _react.default.createContext(); // hoc for context


exports.I18nContext = I18nContext;

function withContext() {
  return function Wrapper(WrappedComponent) {
    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(WithContext, _Component);

      function WithContext() {
        (0, _classCallCheck2.default)(this, WithContext);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithContext).apply(this, arguments));
      }

      (0, _createClass2.default)(WithContext, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              rest = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
          if (innerRef) rest.ref = innerRef;
          return _react.default.createElement(I18nContext.Consumer, null, function (ctx) {
            return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, ctx, rest));
          });
        }
      }]);
      return WithContext;
    }(_react.Component);

    return WithContext;
  };
}

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
/* eslint-disable react/no-multi-comp */


function withI18n() {
  return function Wrapper(WrappedComponent) {
    var WithMergedOptions =
    /*#__PURE__*/
    function (_Component2) {
      (0, _inherits2.default)(WithMergedOptions, _Component2);

      function WithMergedOptions() {
        (0, _classCallCheck2.default)(this, WithMergedOptions);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithMergedOptions).apply(this, arguments));
      }

      (0, _createClass2.default)(WithMergedOptions, [{
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props2 = this.props,
              innerRef = _this$props2.innerRef,
              rest = (0, _objectWithoutProperties2.default)(_this$props2, ["innerRef"]);
          if (innerRef) rest.ref = innerRef; // merged extra props

          var extraProps = {};
          var i18nOptions = this.props.i18nOptions || this.i18nOptions; // as default we add i18n, basic t function and i18nOptions from setI18n
          // those get overridden by values passed by I18nContext.Provider <- eg. set in I18nextProvider

          var i18n = this.props.i18n || getI18n();

          if (!i18nOptions) {
            var possibleI18nOptionsFromProps = Object.keys(defaultOptions).reduce(function (mem, k) {
              if (_this.props[k]) mem[k] = _this.props[k];
              return mem;
            }, {});
            i18nOptions = (0, _objectSpread2.default)({}, getDefaults(), i18n && i18n.options && i18n.options.react, possibleI18nOptionsFromProps);
            this.i18nOptions = i18nOptions;
          }

          if (i18n) {
            extraProps.i18n = i18n;
            extraProps.t = i18n.t.bind(i18n);
            extraProps.lng = i18n.language;
            extraProps.i18nOptions = i18nOptions;
          }

          return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, extraProps, rest));
        }
      }]);
      return WithMergedOptions;
    }(_react.Component);

    var WithMergedOptionsWithContext = withContext()(WithMergedOptions);
    WithMergedOptionsWithContext.WrappedComponent = WrappedComponent;
    WithMergedOptionsWithContext.displayName = "WithMergedOptions(".concat(getDisplayName(WrappedComponent), ")");
    return (0, _hoistNonReactStatics.default)(WithMergedOptionsWithContext, WrappedComponent);
  };
}

/***/ }),

/***/ "zdCU":
/***/ (function(module) {

module.exports = JSON.parse("{\"appInfo\":{\"footer\":\"RAA ©2018 được tạo bởi Anh Doan\",\"name\":\"NEXT JS\"}}");

/***/ })

/******/ });