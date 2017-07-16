module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/docs/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Jumbotron = __webpack_require__(22);

Object.defineProperty(exports, 'Jumbotron', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Jumbotron).default;
  }
});

var _NavigationBar = __webpack_require__(23);

Object.defineProperty(exports, 'NavigationBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationBar).default;
  }
});

var _BackToTop = __webpack_require__(18);

Object.defineProperty(exports, 'BackToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BackToTop).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterHome = enterHome;
exports.leaveHome = leaveHome;
exports.enterAbout = enterAbout;
exports.leaveAbout = leaveAbout;

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _immutable = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'DD/MM/YYYY HH:mm';

var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';

var initialState = (0, _immutable.fromJS)({
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case ENTER_HOME_VIEW:
    case ENTER_ABOUT_VIEW:
      if (state.get('currentView') !== action.currentView) {
        return state.merge({
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    case LEAVE_HOME_VIEW:
    case LEAVE_ABOUT_VIEW:
      if (state.get('currentView') === action.currentView) {
        return state.merge({
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    default:
      return state;
  }
};

exports.default = _default;
function enterHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

function leaveHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}

function enterAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_ABOUT_VIEW,
    currentView: 'about',
    enterTime: time,
    leaveTime: null
  };
}

function leaveAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_ABOUT_VIEW,
    currentView: 'about',
    enterTime: null,
    leaveTime: time
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMATION_DELAY_MS = 500;

var AnimatedView = function (_PureComponent) {
  _inherits(AnimatedView, _PureComponent);

  function AnimatedView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnimatedView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).call.apply(_ref, [this].concat(args))), _this), _this.enterAnimationTimer = null, _this.state = {
      animated: true,
      viewEnters: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnimatedView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;


      this.enterAnimationTimer = setTimeout(function () {
        return _this2.setState({ viewEnters: true });
      }, delay);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterAnimationTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          animated = _state.animated,
          viewEnters = _state.viewEnters;
      var children = this.props.children;


      return _jsx('section', {
        className: (0, _classnames2.default)({
          'content': true,
          'invisible': !viewEnters && animated,
          'view-enter': viewEnters && animated
        })
      }, void 0, children);
    }
  }]);

  return AnimatedView;
}(_react.PureComponent);

AnimatedView.defaultProps = {
  delay: ANIMATION_DELAY_MS
};
var _default = AnimatedView;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ANIMATION_DELAY_MS, 'ANIMATION_DELAY_MS', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/animatedView/AnimatedView.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH = exports.FETCH_MOCK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(42);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_MOCK = exports.FETCH_MOCK = 'FETCH_MOCK';
var FETCH = exports.FETCH = 'FETCH';


var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }

      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult;

        store.dispatch({ type: request });

        return Promise.resolve(store.dispatch({
          type: success,
          payload: mockResult
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            options = _action$fetch2.options;

        store.dispatch({ type: _request, url: url, method: method });

        return _axios2.default.request(_extends({
          method: method,
          url: url,
          withCredentials: true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }, options)).then(function (data) {
          return store.dispatch({ type: _success, payload: data.data });
        }).catch(function (err) {
          return store.dispatch({ type: fail, error: err });
        });
      }
      return next(action);
    };
  };
};

var _default = fetchMiddleware;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FETCH_MOCK, 'FETCH_MOCK', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(FETCH, 'FETCH', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(fetchMiddleware, 'fetchMiddleware', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = undefined;

var _reduxImmutable = __webpack_require__(55);

var _immutableRoute = __webpack_require__(30);

var _immutableRoute2 = _interopRequireDefault(_immutableRoute);

var _views = __webpack_require__(5);

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.views = _views2.default;

var _default = (0, _reduxImmutable.combineReducers)({
  views: _views2.default,
  routing: _immutableRoute2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/reducers.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isBrowserSide = isBrowserSide;
function isBrowserSide() {
  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isBrowserSide, 'isBrowserSide', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/universal.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {



var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var serverRender = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var location, context, store, response, info, currentTime, currentState, currentViewsState, updatedViewState, preWarmedState, InitialView, html, preloadedState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            location = req.url;
            context = {};
            store = (0, _configureStore2.default)();
            _context.prev = 3;
            _context.next = 6;
            return fakeFetch();

          case 6:
            response = _context.sent;
            info = response.info;
            currentTime = (0, _moment2.default)().format();
            currentState = store.getState();
            currentViewsState = currentState.get('views');
            updatedViewState = currentViewsState.set('somePropFromServer', info).set('serverTime', currentTime);
            preWarmedState = currentState.set('views', updatedViewState);

            store = (0, _configureStore2.default)(preWarmedState);

            InitialView = _jsx(_reactRedux.Provider, {
              store: store
            }, void 0, _jsx(_reactRouter.StaticRouter, {
              location: location,
              context: context
            }, void 0, _ref2));
            html = '';

            try {
              html = (0, _server.renderToString)(InitialView);
            } catch (error) {
              console.error('error: renderToString failed: ', error);
            }

            if (!context.url) {
              _context.next = 19;
              break;
            }

            return _context.abrupt('return', res.status.end({ location: context.url }));

          case 19:
            preloadedState = serialize(store.getState().toJS());
            return _context.abrupt('return', res.status(200).set('content-type', 'text/html').send(renderFullPage(html, preloadedState)));

          case 23:
            _context.prev = 23;
            _context.t0 = _context['catch'](3);
            return _context.abrupt('return', res.status(500).end('Internal server error: ', _context.t0));

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 23]]);
  }));

  return function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(52);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouter = __webpack_require__(7);

var _reactRedux = __webpack_require__(6);

var _configureStore = __webpack_require__(32);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = __webpack_require__(47);
var path = __webpack_require__(50);
var chalk = __webpack_require__(45);
var bodyParser = __webpack_require__(44);
var helmet = __webpack_require__(48);
var compression = __webpack_require__(46);
var PrettyError = __webpack_require__(51);
var Promise = __webpack_require__(43);
var serialize = __webpack_require__(57);
var morgan = __webpack_require__(49);

var DOCS_PATH = '../../../../docs';
var PORT = 8083;
var IP_ADRESS = 'localhost';

var app = express();

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

var pe = new PrettyError();
pe.start();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/assets', express.static(path.resolve(__dirname, DOCS_PATH, 'public/assets/')));

app.get('/*', serverRender);

app.use(function (req, res, next) {
  console.log('req.url: ', req.url);
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send('Sorry nothing here for now...');
  }
  console.error(err);
  res.status(500).send('internal server error');
});

app.listen(PORT, IP_ADRESS, function () {
  return console.log('\n    =====================================================\n    -> Server (' + chalk.bgBlue('SSR') + ') \uD83C\uDFC3 (running) on ' + chalk.green(IP_ADRESS) + ':' + chalk.green(PORT) + '\n    =====================================================\n  ');
});

module.exports = app;
var _ref2 = _jsx(_App2.default, {});

function fakeFetch() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve({ info: 'whats up?' });
    }, 200);
  });
}

function renderFullPage(html) {
  var preloadedState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var indexHtml = {
    template: '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>React redux router SSR Starter</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="description" content="react redux router SSR">\n        <meta name="author" content="Erwan DATIN">\n        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">\n        <link rel="stylesheet" href="/assets/app.styles.css">\n      </head>\n      <body class="skin-black" style="background-color:#f1f2f7">\n        <section id="root"><div>' + html + '</div></section>\n        <script type="text/javascript">window.__PRELOADED_STATE__ = ' + preloadedState + '</script>\n        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>\n        <script type="text/javascript" src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  '
  };
  return indexHtml.template;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DOCS_PATH, 'DOCS_PATH', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(IP_ADRESS, 'IP_ADRESS', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(pe, 'pe', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(serverRender, 'serverRender', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(fakeFetch, 'fakeFetch', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "src/server/SSR/src"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _smoothScroll = __webpack_require__(21);

var _BackToTopButton = __webpack_require__(19);

var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);

var _reactMotion = __webpack_require__(53);

var _universal = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowScrollY: 0,
      showBackButton: false
    }, _this.handleWindowScroll = function () {
      var _this2;

      return (_this2 = _this).__handleWindowScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.scrollDone = function () {
      var _this3;

      return (_this3 = _this).__scrollDone__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnBackButtonClick = function () {
      var _this4;

      return (_this4 = _this).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if ((0, _universal.isBrowserSide)()) {
        window.addEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if ((0, _universal.isBrowserSide)()) {
        window.removeEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var showBackButton = this.state.showBackButton;

      return _jsx(_reactMotion.Motion, {
        style: { x: (0, _reactMotion.spring)(showBackButton ? 0 : 120, _reactMotion.presets.stiff) }
      }, void 0, function (_ref2) {
        var x = _ref2.x;
        return _jsx(_BackToTopButton2.default, {
          position: 'bottom-right',
          onClick: _this5.handlesOnBackButtonClick,
          motionStyle: {
            WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
            transform: 'translate3d(' + x + 'px, 0, 0)'
          }
        });
      });
    }
  }, {
    key: '__handleWindowScroll__REACT_HOT_LOADER__',
    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
      if (!(0, _universal.isBrowserSide)()) {
        return;
      }
      if ($) {
        var windowScrollY = this.state.windowScrollY;
        var minScrollY = this.props.minScrollY;

        var currentWindowScrollY = $(window).scrollTop();

        if (windowScrollY !== currentWindowScrollY) {
          var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

          this.setState({
            windowScrollY: currentWindowScrollY,
            showBackButton: shouldShowBackButton
          });
        }
      } else {
        throw 'BackToTop component requires jQuery';
      }
    }
  }, {
    key: '__scrollDone__REACT_HOT_LOADER__',
    value: function __scrollDone__REACT_HOT_LOADER__() {
      var onScrollDone = this.props.onScrollDone;

      if (onScrollDone) {
        onScrollDone();
      }
    }
  }, {
    key: '__handlesOnBackButtonClick__REACT_HOT_LOADER__',
    value: function __handlesOnBackButtonClick__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      var _props = this.props,
          scrollTo = _props.scrollTo,
          minScrollY = _props.minScrollY;
      var windowScrollY = this.state.windowScrollY;


      if (windowScrollY && windowScrollY > minScrollY) {
        _smoothScroll.smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    }
  }]);

  return BackToTop;
}(_react.Component);

BackToTop.defaultProps = {
  minScrollY: 120
};
var _default = BackToTop;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

var _UpIcon = __webpack_require__(20);

var _UpIcon2 = _interopRequireDefault(_UpIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
};

var _ref2 = _jsx(_UpIcon2.default, {
  color: '#F1F1F1'
});

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return _jsx('button', {
    style: buttonStyle,
    className: (0, _classnames2.default)({
      'btn': true
    }),
    onClick: onClick
  }, void 0, !children && _jsx('div', {
    style: { marginRight: '10px' }
  }, void 0, _ref2), !!children && children);
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _extends({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}

var _default = BackToTopButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = _jsx('path', {
  d: 'M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n    c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z'
});

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;
  return _jsx('svg', {
    width: '24px',
    height: '24px',
    viewBox: '0 0 512 512',
    fill: '' + color
  }, void 0, _ref2);
};

UpIcon.defaultProps = {
  color: '#F1F1F1'
};

var _default = UpIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UpIcon, 'UpIcon', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoothScroll = undefined;

var _universal = __webpack_require__(12);

var smoothScroll = exports.smoothScroll = {
  timer: null,

  stop: function stop() {
    clearTimeout(this.timer);
  },
  scrollTo: function scrollTo(id, callback) {
    if ((0, _universal.isBrowserSide)()) {
      return;
    }

    var settings = {
      duration: 1000,
      easing: {
        outQuint: function outQuint(x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    var percentage = void 0;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    var startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll = void 0;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(smoothScroll, 'smoothScroll', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/lib/smoothScroll.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return _jsx('div', {
    className: 'jumbotron'
  }, void 0, children);
};

var _default = Jumbotron;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Jumbotron, 'Jumbotron', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Humburger = __webpack_require__(24);

var _Humburger2 = _interopRequireDefault(_Humburger);

var _LeftNav = __webpack_require__(25);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _RightNav = __webpack_require__(27);

var _RightNav2 = _interopRequireDefault(_RightNav);

var _immutable = __webpack_require__(2);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Humburger2.default, {});

var NavigationBar = function (_PureComponent) {
  _inherits(NavigationBar, _PureComponent);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          brand = _props.brand,
          navModel = _props.navModel,
          handleLeftNavItemClick = _props.handleLeftNavItemClick,
          handleRightNavItemClick = _props.handleRightNavItemClick;


      return _jsx('nav', {
        className: 'navbar navbar-default'
      }, void 0, _jsx('div', {
        className: 'containersCustom'
      }, void 0, _jsx('div', {
        className: 'navbar-header'
      }, void 0, _ref, _jsx('a', {
        className: 'navbar-brand'
      }, void 0, brand)), _jsx('div', {
        className: 'collapse navbar-collapse',
        id: 'bs-example-navbar-collapse-1'
      }, void 0, _jsx('ul', {
        className: 'nav navbar-nav'
      }, void 0, _jsx(_LeftNav2.default, {
        leftLinks: navModel.get('leftLinks'),
        onLeftNavButtonClick: handleLeftNavItemClick
      })), _jsx('ul', {
        className: 'nav navbar-nav navbar-right'
      }, void 0, _jsx(_RightNav2.default, {
        rightLinks: navModel.get('rightLinks'),
        onRightNavButtonClick: handleRightNavItemClick
      })))));
    }
  }]);

  return NavigationBar;
}(_react.PureComponent);

NavigationBar.defaultProps = {
  brand: 'brand'
};
var _default = NavigationBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx("button", {
  className: "navbar-toggle collapsed",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#bs-example-navbar-collapse-1"
}, void 0, _jsx("span", {
  className: "sr-only"
}, void 0, "Toggle navigation"), _jsx("span", {
  className: "icon-bar"
}), _jsx("span", {
  className: "icon-bar"
}), _jsx("span", {
  className: "icon-bar"
}));

var Humburger = function Humburger() {
  return _ref;
};

var _default = Humburger;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js");
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LeftNavButton = __webpack_require__(26);

var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);

var _immutable = __webpack_require__(2);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftNav = function (_PureComponent) {
  _inherits(LeftNav, _PureComponent);

  function LeftNav() {
    _classCallCheck(this, LeftNav);

    return _possibleConstructorReturn(this, (LeftNav.__proto__ || Object.getPrototypeOf(LeftNav)).apply(this, arguments));
  }

  _createClass(LeftNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          leftLinks = _props.leftLinks,
          onLeftNavButtonClick = _props.onLeftNavButtonClick;

      return _jsx('ul', {
        className: 'nav navbar-nav'
      }, void 0, leftLinks.map(function (aLinkBtn, index) {
        return _jsx(_LeftNavButton2.default, {
          link: aLinkBtn.get('link'),
          label: aLinkBtn.get('label'),
          viewName: aLinkBtn.get('view'),
          onClick: onLeftNavButtonClick
        }, index);
      }));
    }
  }]);

  return LeftNav;
}(_react.PureComponent);

var _default = LeftNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return _jsx('li', {}, void 0, _jsx(_reactRouterDom.Link, {
        to: link,
        onClick: this.handleLeftNavItemClick
      }, void 0, label));
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return LeftNavButton;
}(_react.PureComponent);

var _default = LeftNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RightNavButton = __webpack_require__(28);

var _RightNavButton2 = _interopRequireDefault(_RightNavButton);

var _immutable = __webpack_require__(2);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightNav = function (_PureComponent) {
  _inherits(RightNav, _PureComponent);

  function RightNav() {
    _classCallCheck(this, RightNav);

    return _possibleConstructorReturn(this, (RightNav.__proto__ || Object.getPrototypeOf(RightNav)).apply(this, arguments));
  }

  _createClass(RightNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rightLinks = _props.rightLinks,
          onRightNavButtonClick = _props.onRightNavButtonClick;

      return _jsx('ul', {
        className: 'nav navbar-nav navbar-right'
      }, void 0, rightLinks.map(function (aLinkBtn, index) {
        return _jsx(_RightNavButton2.default, {
          link: aLinkBtn.get('link'),
          label: aLinkBtn.get('label'),
          viewName: aLinkBtn.get('view'),
          onClick: onRightNavButtonClick
        }, index);
      }));
    }
  }]);

  return RightNav;
}(_react.PureComponent);

var _default = RightNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;

      return _jsx('li', {}, void 0, _jsx(_reactRouterDom.Link, {
        to: link,
        onClick: this.handleRightNavItemClick
      }, void 0, label));
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return RightNavButton;
}(_react.PureComponent);

var _default = RightNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

var _navigation = __webpack_require__(41);

var _navigation2 = _interopRequireDefault(_navigation);

var _immutable = __webpack_require__(2);

var _MainRoutes = __webpack_require__(34);

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

var _reactRouter = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('div', {
  className: 'container-fluid'
}, void 0, _jsx(_MainRoutes2.default, {}));

var _ref3 = _jsx(_components.BackToTop, {
  minScrollY: 40,
  scrollTo: 'appContainer'
});

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navModel: (0, _immutable.fromJS)(_navigation2.default)
    }, _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRightNavItemClick = function () {
      var _this3;

      return (_this3 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var navModel = this.state.navModel;


      return _jsx('div', {
        id: 'appContainer'
      }, void 0, _jsx(_components.NavigationBar, {
        brand: navModel.get('brand'),
        navModel: navModel,
        handleLeftNavItemClick: this.handleLeftNavItemClick,
        handleRightNavItemClick: this.handleRightNavItemClick
      }), _ref2, _ref3);
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {}
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {}
  }]);

  return App;
}(_react.PureComponent);

var _default = (0, _reactRouter.withRouter)(App);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/app/App.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(2);

var _reactRouterRedux = __webpack_require__(54);

var initialState = (0, _immutable.fromJS)({
  locationBeforeTransitions: null
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === _reactRouterRedux.LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }

  return state;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/immutableRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/immutableRoute.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configureStore;

var _redux = __webpack_require__(3);

var _reduxLogger = __webpack_require__(56);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

var _fetchMiddleware = __webpack_require__(10);

var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true,
  stateTransformer: function stateTransformer(state) {
    return state.toJS();
  }
});

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default, loggerMiddleware));

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);

  if (false) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }

  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(33);
} else {
  module.exports = __webpack_require__(31);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

var _fetchMiddleware = __webpack_require__(10);

var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default));

function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.prod.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.prod.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(7);

var _home = __webpack_require__(38);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(36);

var _about2 = _interopRequireDefault(_about);

var _pageNotFound = __webpack_require__(40);

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_reactRouter.Switch, {}, void 0, _jsx(_reactRouter.Route, {
  exact: true,
  path: '/',
  component: _home2.default
}), _jsx(_reactRouter.Route, {
  path: '/about',
  component: _about2.default
}), _jsx(_reactRouter.Route, {
  component: _pageNotFound2.default
}));

var MainRoutes = function MainRoutes() {
  return _ref;
};

var _default = MainRoutes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainRoutes, 'MainRoutes', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/routes/MainRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/routes/MainRoutes.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(9);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AnimatedView2.default, {}, void 0, _jsx('h1', {}, void 0, 'About'));

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterAbout = this.props.enterAbout;

      enterAbout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveAbout = this.props.leaveAbout;

      leaveAbout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return About;
}(_react.PureComponent);

var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/About.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _redux = __webpack_require__(3);

var _views = __webpack_require__(5);

var viewsActions = _interopRequireWildcard(_views);

var _About = __webpack_require__(35);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    enterAbout: viewsActions.enterAbout,
    leaveAbout: viewsActions.leaveAbout
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_About2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(4);

var _AnimatedView = __webpack_require__(9);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function testTime() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve('async-await works');
    }, 200);
  });
}

var _ref2 = _jsx(_AnimatedView2.default, {}, void 0, _jsx(_components.Jumbotron, {}, void 0, _jsx('h1', {}, void 0, 'React + Redux + Immutable + Bootstrap'), _jsx('h2', {}, void 0, 'with Hot Reload!!!'), _jsx('h2', {}, void 0, 'and React Router v4'), _jsx('h2', {}, void 0, 'and webpack 2.x'), _jsx('h1', {}, void 0, 'Starter'), _jsx('p', {}, void 0, _jsx(_reactRouterDom.Link, {
  className: 'btn btn-success btn-lg',
  to: '/about'
}, void 0, _jsx('i', {
  className: 'fa fa-info'
}), '\xA0 go to about'))));

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var enterHome, message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                enterHome = this.props.enterHome;

                enterHome();
                _context.next = 4;
                return testTime();

              case 4:
                message = _context.sent;

                console.log('valid async await: ', message);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return _ref2;
    }
  }]);

  return Home;
}(_react.PureComponent);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(testTime, 'testTime', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _redux = __webpack_require__(3);

var _views = __webpack_require__(5);

var viewsActions = _interopRequireWildcard(_views);

var _Home = __webpack_require__(37);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    enterHome: viewsActions.enterHome,
    leaveHome: viewsActions.leaveHome
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, _jsx(_components.Jumbotron, {}, void 0, _jsx('h1', {}, void 0, 'Sorry this page does not exists...')));

var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return PageNotFound;
}(_react.PureComponent);

var _default = PageNotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/pageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/pageNotFound/PageNotFound.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PageNotFound = __webpack_require__(39);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _PageNotFound2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/pageNotFound/index.js');
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
	"brand": "React Redux Immutable webpack ssr Starter",
	"leftLinks": [],
	"rightLinks": [
		{
			"label": "Home",
			"link": "/",
			"view": "home",
			"isRouteBtn": true
		},
		{
			"label": "About",
			"link": "/about",
			"view": "about",
			"isRouteBtn": true
		}
	]
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(16);


/***/ })
/******/ ]);