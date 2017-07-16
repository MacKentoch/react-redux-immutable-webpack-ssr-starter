webpackJsonp([0],{

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),

/***/ 1036:
/***/ (function(module, exports) {

module.exports = {
	"brand": "React Redux Immutable Starter",
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

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackToTop = exports.NavigationBar = exports.Jumbotron = exports.AnimatedView = undefined;

var _Jumbotron = __webpack_require__(522);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _NavigationBar = __webpack_require__(523);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _BackToTop = __webpack_require__(518);

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _AnimatedView = __webpack_require__(517);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

exports.AnimatedView = _AnimatedView2.default;
exports.Jumbotron = _Jumbotron2.default;
exports.NavigationBar = _NavigationBar2.default;
exports.BackToTop = _BackToTop2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterHome = enterHome;
exports.leaveHome = leaveHome;
exports.enterAbout = enterAbout;
exports.leaveAbout = leaveAbout;

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _immutable = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';

// /////////////////////
// reducer
// /////////////////////
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
      // can't enter if you are already inside
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
      // can't leave if you aren't already inside
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

// /////////////////////
// action creators
// /////////////////////

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

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/views.js');
}();

;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.connect = exports.Provider = undefined;

var _Provider = __webpack_require__(980);

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = __webpack_require__(981);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.Provider = _Provider2["default"];
exports.connect = _connect2["default"];

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFound = exports.Home = exports.About = undefined;

var _About = __webpack_require__(539);

var _About2 = _interopRequireDefault(_About);

var _Home = __webpack_require__(540);

var _Home2 = _interopRequireDefault(_Home);

var _PageNotFound = __webpack_require__(541);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.About = _About2.default;
exports.Home = _Home2.default;
exports.PageNotFound = _PageNotFound2.default; //  weak

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(121);

var _navigation = __webpack_require__(1036);

var _navigation2 = _interopRequireDefault(_navigation);

var _redux = __webpack_require__(87);

var _reactRedux = __webpack_require__(153);

var _views = __webpack_require__(122);

var viewsActions = _interopRequireWildcard(_views);

var _immutable = __webpack_require__(48);

var _MainRoutes = __webpack_require__(538);

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

var _reactRouter = __webpack_require__(30);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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


      return _react2.default.createElement(
        'div',
        { id: 'appContainer' },
        _react2.default.createElement(_components.NavigationBar, {
          brand: navModel.get('brand'),
          navModel: navModel,
          handleLeftNavItemClick: this.handleLeftNavItemClick,
          handleRightNavItemClick: this.handleRightNavItemClick
        }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(_MainRoutes2.default, null)
        ),
        _react2.default.createElement(_components.BackToTop, {
          minScrollY: 40,
          scrollTo: 'appContainer'
        })
      );
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      // something to do here?
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      // something to do here?
    }
  }]);

  return App;
}(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, viewsActions), dispatch)
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/app/App.js');
}();

;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(819);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _propTypes2["default"].shape({
  subscribe: _propTypes2["default"].func.isRequired,
  dispatch: _propTypes2["default"].func.isRequired,
  getState: _propTypes2["default"].func.isRequired
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(107);

var _reactRedux = __webpack_require__(153);

var _reactRouterRedux = __webpack_require__(156);

var _configureStore = __webpack_require__(537);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _history = __webpack_require__(241);

var _immutable = __webpack_require__(48);

var _App = __webpack_require__(250);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

/* eslint-disable no-process-env */


var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

var history = (0, _history.createBrowserHistory)();
var store = (0, _configureStore2.default)((0, _immutable.fromJS)(preloadedState));
var syncedHistory = (0, _reactRouterRedux.syncHistoryWithStore)(history, store, {
  selectLocationState: function selectLocationState(state) {
    return state.get('routing').toJS();
  }
});

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            { history: syncedHistory },
            _react2.default.createElement(_App2.default, null)
          )
        )
      );
    }
  }]);

  return Root;
}(_react.Component);

var _default = Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(preloadedState, 'preloadedState', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(history, 'history', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(syncedHistory, 'syncedHistory', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/Root.js');
}();

;

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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


      return _react2.default.createElement(
        'section',
        {
          className: (0, _classnames2.default)({
            'content': true,
            'invisible': !viewEnters && animated,
            'view-enter': viewEnters && animated
          }) },
        children
      );
    }
  }]);

  return AnimatedView;
}(_react.PureComponent);

AnimatedView.propTypes = {
  children: _propTypes2.default.node,
  delay: _propTypes2.default.number
};
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

  __REACT_HOT_LOADER__.register(ANIMATION_DELAY_MS, 'ANIMATION_DELAY_MS', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/animatedView/AnimatedView.js');
}();

;

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _smoothScroll = __webpack_require__(521);

var _BackToTopButton = __webpack_require__(519);

var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);

var _reactMotion = __webpack_require__(242);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
/* global $:true */

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
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var showBackButton = this.state.showBackButton;

      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { x: (0, _reactMotion.spring)(showBackButton ? 0 : 120, _reactMotion.presets.stiff) } },
        function (_ref2) {
          var x = _ref2.x;
          return _react2.default.createElement(_BackToTopButton2.default, {
            position: 'bottom-right',
            onClick: _this5.handlesOnBackButtonClick,
            motionStyle: {
              WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
              transform: 'translate3d(' + x + 'px, 0, 0)'
            }
          });
        }
      );
    }
  }, {
    key: '__handleWindowScroll__REACT_HOT_LOADER__',
    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
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
        /* eslint-disable no-throw-literal*/
        throw 'BackToTop component requires jQuery';
        /* eslint-enable no-throw-literal*/
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

BackToTop.propTypes = {
  minScrollY: _propTypes2.default.number,
  scrollTo: _propTypes2.default.string.isRequired,
  onScrollDone: _propTypes2.default.func
};
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

  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/BackToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/BackToTop.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)))

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _UpIcon = __webpack_require__(520);

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

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return _react2.default.createElement(
    'button',
    {
      style: buttonStyle,
      className: (0, _classnames2.default)({
        'btn': true
      }),
      onClick: onClick },
    !children && _react2.default.createElement(
      'div',
      { style: { marginRight: '10px' } },
      _react2.default.createElement(_UpIcon2.default, { color: '#F1F1F1' })
    ),
    !!children && children
  );
};

BackToTopButton.propTypes = {
  position: _propTypes2.default.oneOf(['bottom-left', 'bottom-right']),
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node,
  motionStyle: _propTypes2.default.object
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

  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
}();

;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      width: '24px',
      height: '24px',
      viewBox: '0 0 512 512',
      fill: '' + color },
    _react2.default.createElement('path', { d: 'M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z' })
  );
};

UpIcon.propTypes = {
  color: _propTypes2.default.string
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

  __REACT_HOT_LOADER__.register(UpIcon, 'UpIcon', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/UpIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/backToTopButton/UpIcon.js');
}();

;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var smoothScroll = exports.smoothScroll = {
  timer: null,

  stop: function stop() {
    clearTimeout(this.timer);
  },
  scrollTo: function scrollTo(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function outQuint(x, t, b, c, d) {
          /* eslint-disable no-param-reassign*/
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          /* eslint-enable no-param-reassign*/
        }
      }
    };
    var percentage = void 0;
    var node = document.getElementById(id);
    var nodeTop = node && node.offsetTop ? node.offsetTop : 0;
    var nodeHeight = node && node.offsetHeight ? node.offsetHeight : 0;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body && body.scrollHeight ? body.scrollHeight : 0, body && body.offsetHeight ? body.offsetHeight : 0, html && html.clientHeight ? html.clientHeight : 0, html && html.scrollHeight ? html.scrollHeight : 0, html && html.offsetHeight ? html.offsetHeight : 0);
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

  __REACT_HOT_LOADER__.register(smoothScroll, "smoothScroll", "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/backToTop/lib/smoothScroll.js");
}();

;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var Jumbotron = function Jumbotron(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jumbotron' },
    props.children
  );
};

Jumbotron.propTypes = {
  children: _propTypes2.default.node
};

var _default = Jumbotron;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Jumbotron, 'Jumbotron', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/jumbotron/Jumbotron.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/jumbotron/Jumbotron.js');
}();

;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Humburger = __webpack_require__(524);

var _Humburger2 = _interopRequireDefault(_Humburger);

var _LeftNav = __webpack_require__(525);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _RightNav = __webpack_require__(527);

var _RightNav2 = _interopRequireDefault(_RightNav);

var _immutable = __webpack_require__(48);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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


      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        _react2.default.createElement(
          'div',
          { className: 'containersCustom' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(_Humburger2.default, null),
            _react2.default.createElement(
              'a',
              { className: 'navbar-brand' },
              brand
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'collapse navbar-collapse',
              id: 'bs-example-navbar-collapse-1' },
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              _react2.default.createElement(_LeftNav2.default, {
                leftLinks: navModel.get('leftLinks'),
                onLeftNavButtonClick: handleLeftNavItemClick
              })
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-right' },
              _react2.default.createElement(_RightNav2.default, {
                rightLinks: navModel.get('rightLinks'),
                onRightNavButtonClick: handleRightNavItemClick
              })
            )
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react.PureComponent);

NavigationBar.propTypes = {
  brand: _propTypes2.default.string,
  handleLeftNavItemClick: _propTypes2.default.func,
  handleRightNavItemClick: _propTypes2.default.func,

  navModel: _propTypes2.default.instanceOf(Immutable.Map)
  // not immutable version of navModel would be described like:
  // navModel:  PropTypes.shape({
  //   leftLinks:  PropTypes.arrayOf(
  //     PropTypes.shape({
  //       label: PropTypes.string.isRequired,
  //       link : PropTypes.string.isRequired
  //     })
  //   ).isRequired,
  //   rightLinks:  PropTypes.arrayOf(
  //     PropTypes.shape({
  //       label: PropTypes.string.isRequired,
  //       link : PropTypes.string.isRequired
  //     })
  //   ).isRequired
  // })
};
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

  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/NavigationBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/NavigationBar.js');
}();

;

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Humburger = function Humburger() {
  return _react2.default.createElement(
    "button",
    {
      className: "navbar-toggle collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1" },
    _react2.default.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    ),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" })
  );
}; //  weak

var _default = Humburger;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/humburger/Humburger.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/humburger/Humburger.js");
}();

;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LeftNavButton = __webpack_require__(526);

var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);

var _immutable = __webpack_require__(48);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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

      return _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav' },
        leftLinks.map(function (aLinkBtn, index) {
          return _react2.default.createElement(_LeftNavButton2.default, {
            key: index,
            link: aLinkBtn.get('link'),
            label: aLinkBtn.get('label'),
            viewName: aLinkBtn.get('view'),
            onClick: onLeftNavButtonClick
          });
        })
      );
    }
  }]);

  return LeftNav;
}(_react.PureComponent);

LeftNav.propTypes = {
  leftLinks: _propTypes2.default.instanceOf(Immutable.List),
  onLeftNavButtonClick: _propTypes2.default.func
};
var _default = LeftNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/leftNav/LeftNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/leftNav/LeftNav.js');
}();

;

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleLeftNavItemClick },
          label
        )
      );
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

LeftNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = LeftNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
}();

;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RightNavButton = __webpack_require__(528);

var _RightNavButton2 = _interopRequireDefault(_RightNavButton);

var _immutable = __webpack_require__(48);

var Immutable = _interopRequireWildcard(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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

      return _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav navbar-right' },
        rightLinks.map(function (aLinkBtn, index) {
          return _react2.default.createElement(_RightNavButton2.default, {
            key: index,
            link: aLinkBtn.get('link'),
            label: aLinkBtn.get('label'),
            viewName: aLinkBtn.get('view'),
            onClick: onRightNavButtonClick
          });
        })
      );
    }
  }]);

  return RightNav;
}(_react.PureComponent);

RightNav.propTypes = {
  rightLinks: _propTypes2.default.instanceOf(Immutable.List),
  onRightNavButtonClick: _propTypes2.default.func
};
var _default = RightNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/rightNav/RightNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/rightNav/RightNav.js');
}();

;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleRightNavItemClick },
          label
        )
      );
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

RightNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = RightNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
}();

;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(153);

var _redux = __webpack_require__(87);

var _views = __webpack_require__(122);

var viewsActions = _interopRequireWildcard(_views);

var _views2 = __webpack_require__(162);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.About);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/about/About.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/about/About.js');
}();

;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(153);

var _redux = __webpack_require__(87);

var _views = __webpack_require__(122);

var viewsActions = _interopRequireWildcard(_views);

var _views2 = __webpack_require__(162);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.Home);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/containers/home/Home.js');
}();

;

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedAbout = exports.ConnectedHome = exports.App = undefined;

var _App = __webpack_require__(250);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(530);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(529);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _App2.default;
exports.ConnectedHome = _Home2.default;
exports.ConnectedAbout = _About2.default; //  weak

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactTapEventPlugin = __webpack_require__(160);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _reactHotLoader = __webpack_require__(159);

var _Root = __webpack_require__(492);

var _Root2 = _interopRequireDefault(_Root);

__webpack_require__(157);

__webpack_require__(493);

__webpack_require__(108);

__webpack_require__(495);

__webpack_require__(494);

__webpack_require__(158);

__webpack_require__(496);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var ELEMENT_TO_BOOTSTRAP = 'root';
var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

(0, _reactTapEventPlugin2.default)();

var renderApp = function renderApp(RootComponent) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(RootComponent, null)
  ), BootstrapedElement);
};

renderApp(_Root2.default);

if (false) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/index.js');

  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/index.js');

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/index.js');
}();

;

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH = exports.FETCH_MOCK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _axios = __webpack_require__(240);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_MOCK = exports.FETCH_MOCK = 'FETCH_MOCK';
var FETCH = exports.FETCH = 'FETCH';
// //////////////////////////////////////////////////////////////
//          fetch middleware:
// //////////////////////////////////////////////////////////////
// - no more use redux thunk in your actions creators = less code
// - have a FETCH_MOCK mode (no backend need just json or js mocks supplied) for nearly no effort
// - returns promises
// //////////////////////////////////////////////////////////////

// USAGE: FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//

// Usage: FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get', // lower case, one of 'get', 'post'...
//    options: {} // OPTIONAL
//  }
// }
//
//

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

      /**
       * fetch mock
       * @type {[type]}
       */
      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult;

        // request

        store.dispatch({ type: request });

        // received successful for mock
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

        // request

        store.dispatch({ type: _request, url: url, method: method });

        // fetch server (success or fail)
        // returns a Promise
        return _axios2.default.request(_extends({
          method: method,
          url: url,
          withCredentials: true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Acces-Control-Allow-Origin': '*'
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

  __REACT_HOT_LOADER__.register(FETCH_MOCK, 'FETCH_MOCK', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(FETCH, 'FETCH', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(fetchMiddleware, 'fetchMiddleware', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
}();

;

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(48);

var _reactRouterRedux = __webpack_require__(156);

// /////////////////
// reducer
// /////////////////
//  weak

var initialState = (0, _immutable.fromJS)({
  locationBeforeTransitions: null
});

// this constant comes from react-redux-router (we are just overriding the reducer)

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

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/immutableRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/immutableRoute.js');
}();

;

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = undefined;

var _reduxImmutable = __webpack_require__(243);

var _immutableRoute = __webpack_require__(534);

var _immutableRoute2 = _interopRequireDefault(_immutableRoute);

var _views = __webpack_require__(122);

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.views = _views2.default; //  weak

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

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/modules/reducers.js');
}();

;

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //  weak

exports.default = configureStore;

var _redux = __webpack_require__(87);

var _reduxLogger = __webpack_require__(1024);

var _reduxThunk = __webpack_require__(244);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(535);

var _reducers2 = _interopRequireDefault(_reducers);

var _fetchMiddleware = __webpack_require__(533);

var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true,
  stateTransformer: function stateTransformer(state) {
    return state.toJS();
  }
});

// createStore : enhancer
// NOTE: if redux devtools extension is not installed, we just keep using Redux compose
var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && // for universal ("isomorphic") apps
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  // see: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
}) : _redux.compose;

var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default, loggerMiddleware) // logger after thunk to avoid undefined actions
);

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  // checks if webpack HMR:
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

  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/redux/store/configureStore.dev.js');
}();

;

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-process-env:0 */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(536);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(30);

var _containers = __webpack_require__(531);

var _views = __webpack_require__(162);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var MainRoutes = function MainRoutes() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _containers.ConnectedHome }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _containers.ConnectedAbout }),
    _react2.default.createElement(_reactRouter.Route, { component: _views.PageNotFound })
  );
};

var _default = MainRoutes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainRoutes, 'MainRoutes', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/routes/MainRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/routes/MainRoutes.js');
}();

;

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

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
      return _react2.default.createElement(
        _components.AnimatedView,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'About'
        )
      );
    }
  }]);

  return About;
}(_react.PureComponent);

About.propTypes = {
  currentView: _propTypes2.default.string.isRequired,
  enterAbout: _propTypes2.default.func.isRequired,
  leaveAbout: _propTypes2.default.func.isRequired
};
var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/about/About.js');
}();

;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(121);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterHome = this.props.enterHome;

      enterHome();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.AnimatedView,
        null,
        _react2.default.createElement(
          _components.Jumbotron,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'React + Redux + Immutable + Bootstrap'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'with Hot Reload!!!'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'and React Router v4'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'and webpack 2.x'
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Starter'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'btn btn-success btn-lg',
                to: '/about' },
              _react2.default.createElement('i', { className: 'fa fa-info' }),
              '\xA0 go to about'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

Home.propTypes = {
  currentView: _propTypes2.default.string.isRequired,
  enterHome: _propTypes2.default.func.isRequired,
  leaveHome: _propTypes2.default.func.isRequired
};
var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/home/Home.js');
}();

;

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _components.Jumbotron,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Sorry this page does not exists...'
          )
        )
      );
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

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-immutable-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');
}();

;

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(310),
    getRawTag = __webpack_require__(816),
    objectToString = __webpack_require__(817);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(818);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(310);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 817:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 818:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(814);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 820:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(813),
    getPrototype = __webpack_require__(815),
    isObjectLike = __webpack_require__(820);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = undefined;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeShape = __webpack_require__(477);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _warning = __webpack_require__(478);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return Provider;
}(_react.Component);

exports["default"] = Provider;


if (true) {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: _storeShape2["default"].isRequired,
  children: _propTypes2["default"].element.isRequired
};
Provider.childContextTypes = {
  store: _storeShape2["default"].isRequired
};

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = connect;

var _react = __webpack_require__(0);

var _storeShape = __webpack_require__(477);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _shallowEqual = __webpack_require__(982);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _wrapActionCreators = __webpack_require__(983);

var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

var _warning = __webpack_require__(478);

var _warning2 = _interopRequireDefault(_warning);

var _isPlainObject = __webpack_require__(821);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _hoistNonReactStatics = __webpack_require__(307);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(69);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMapStateToProps = function defaultMapStateToProps(state) {
  return {};
}; // eslint-disable-line no-unused-vars
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};
var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return _extends({}, parentProps, stateProps, dispatchProps);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var errorObject = { value: null };
function tryCatch(fn, ctx) {
  try {
    return fn.apply(ctx);
  } catch (e) {
    errorObject.value = e;
    return errorObject;
  }
}

// Helps track hot reloading.
var nextVersion = 0;

function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var shouldSubscribe = Boolean(mapStateToProps);
  var mapState = mapStateToProps || defaultMapStateToProps;

  var mapDispatch = void 0;
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps;
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps;
  } else {
    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
  }

  var finalMergeProps = mergeProps || defaultMergeProps;
  var _options$pure = options.pure,
      pure = _options$pure === undefined ? true : _options$pure,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

  // Helps track hot reloading.
  var version = nextVersion++;

  return function wrapWithConnect(WrappedComponent) {
    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

    function checkStateShape(props, methodName) {
      if (!(0, _isPlainObject2["default"])(props)) {
        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
      }
    }

    function computeMergedProps(stateProps, dispatchProps, parentProps) {
      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
      if (true) {
        checkStateShape(mergedProps, 'mergeProps');
      }
      return mergedProps;
    }

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
      };

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.store = props.store || context.store;

        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

        var storeState = _this.store.getState();
        _this.state = { storeState: storeState };
        _this.clearCache();
        return _this;
      }

      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
        if (!this.finalMapStateToProps) {
          return this.configureFinalMapState(store, props);
        }

        var state = store.getState();
        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

        if (true) {
          checkStateShape(stateProps, 'mapStateToProps');
        }
        return stateProps;
      };

      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
        var mappedState = mapState(store.getState(), props);
        var isFactory = typeof mappedState === 'function';

        this.finalMapStateToProps = isFactory ? mappedState : mapState;
        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

        if (isFactory) {
          return this.computeStateProps(store, props);
        }

        if (true) {
          checkStateShape(mappedState, 'mapStateToProps');
        }
        return mappedState;
      };

      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
        if (!this.finalMapDispatchToProps) {
          return this.configureFinalMapDispatch(store, props);
        }

        var dispatch = store.dispatch;

        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

        if (true) {
          checkStateShape(dispatchProps, 'mapDispatchToProps');
        }
        return dispatchProps;
      };

      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
        var mappedDispatch = mapDispatch(store.dispatch, props);
        var isFactory = typeof mappedDispatch === 'function';

        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

        if (isFactory) {
          return this.computeDispatchProps(store, props);
        }

        if (true) {
          checkStateShape(mappedDispatch, 'mapDispatchToProps');
        }
        return mappedDispatch;
      };

      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
        var nextStateProps = this.computeStateProps(this.store, this.props);
        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
          return false;
        }

        this.stateProps = nextStateProps;
        return true;
      };

      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
          return false;
        }

        this.dispatchProps = nextDispatchProps;
        return true;
      };

      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
          return false;
        }

        this.mergedProps = nextMergedProps;
        return true;
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return typeof this.unsubscribe === 'function';
      };

      Connect.prototype.trySubscribe = function trySubscribe() {
        if (shouldSubscribe && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      };

      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        this.trySubscribe();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
          this.haveOwnPropsChanged = true;
        }
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        this.tryUnsubscribe();
        this.clearCache();
      };

      Connect.prototype.clearCache = function clearCache() {
        this.dispatchProps = null;
        this.stateProps = null;
        this.mergedProps = null;
        this.haveOwnPropsChanged = true;
        this.hasStoreStateChanged = true;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;
        this.renderedElement = null;
        this.finalMapDispatchToProps = null;
        this.finalMapStateToProps = null;
      };

      Connect.prototype.handleChange = function handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        var storeState = this.store.getState();
        var prevStoreState = this.state.storeState;
        if (pure && prevStoreState === storeState) {
          return;
        }

        if (pure && !this.doStatePropsDependOnOwnProps) {
          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
          if (!haveStatePropsChanged) {
            return;
          }
          if (haveStatePropsChanged === errorObject) {
            this.statePropsPrecalculationError = errorObject.value;
          }
          this.haveStatePropsBeenPrecalculated = true;
        }

        this.hasStoreStateChanged = true;
        this.setState({ storeState: storeState });
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

        return this.refs.wrappedInstance;
      };

      Connect.prototype.render = function render() {
        var haveOwnPropsChanged = this.haveOwnPropsChanged,
            hasStoreStateChanged = this.hasStoreStateChanged,
            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
            statePropsPrecalculationError = this.statePropsPrecalculationError,
            renderedElement = this.renderedElement;


        this.haveOwnPropsChanged = false;
        this.hasStoreStateChanged = false;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;

        if (statePropsPrecalculationError) {
          throw statePropsPrecalculationError;
        }

        var shouldUpdateStateProps = true;
        var shouldUpdateDispatchProps = true;
        if (pure && renderedElement) {
          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
        }

        var haveStatePropsChanged = false;
        var haveDispatchPropsChanged = false;
        if (haveStatePropsBeenPrecalculated) {
          haveStatePropsChanged = true;
        } else if (shouldUpdateStateProps) {
          haveStatePropsChanged = this.updateStatePropsIfNeeded();
        }
        if (shouldUpdateDispatchProps) {
          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
        }

        var haveMergedPropsChanged = true;
        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
        } else {
          haveMergedPropsChanged = false;
        }

        if (!haveMergedPropsChanged && renderedElement) {
          return renderedElement;
        }

        if (withRef) {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
            ref: 'wrappedInstance'
          }));
        } else {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
        }

        return this.renderedElement;
      };

      return Connect;
    }(_react.Component);

    Connect.displayName = connectDisplayName;
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      store: _storeShape2["default"]
    };
    Connect.propTypes = {
      store: _storeShape2["default"]
    };

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        if (this.version === version) {
          return;
        }

        // We are hot reloading!
        this.version = version;
        this.trySubscribe();
        this.clearCache();
      };
    }

    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = shallowEqual;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = wrapActionCreators;

var _redux = __webpack_require__(87);

function wrapActionCreators(actionCreators) {
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
  };
}

/***/ })

},[532]);
//# sourceMappingURL=app.bundle.js.map