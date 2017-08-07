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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.enterHome=enterHome,exports.leaveHome=leaveHome,exports.enterAbout=enterAbout,exports.leaveAbout=leaveAbout,exports.enterLogin=enterLogin,exports.leaveLogin=leaveLogin,exports.enterProtected=enterProtected,exports.leaveProtected=leaveProtected;var _moment=__webpack_require__(4),_moment2=_interopRequireDefault(_moment),_immutable=__webpack_require__(2);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var dateFormat='DD/MM/YYYY HH:mm',ENTER_LOGIN_VIEW='ENTER_LOGIN_VIEW',LEAVE_LOGIN_VIEW='LEAVE_LOGIN_VIEW',ENTER_HOME_VIEW='ENTER_HOME_VIEW',LEAVE_HOME_VIEW='LEAVE_HOME_VIEW',ENTER_ABOUT_VIEW='ENTER_ABOUT_VIEW',LEAVE_ABOUT_VIEW='LEAVE_ABOUT_VIEW',ENTER_PROTECTED_VIEW='ENTER_PROTECTED_VIEW',LEAVE_PROTECTED_VIEW='LEAVE_PROTECTED_VIEW',initialState=(0,_immutable.fromJS)({currentView:'not set',enterTime:null,leaveTime:null}),_default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,b=arguments[1];switch(b.type){case ENTER_HOME_VIEW:case ENTER_ABOUT_VIEW:case ENTER_LOGIN_VIEW:case ENTER_PROTECTED_VIEW:return a.get('currentView')===b.currentView?a:a.merge({currentView:b.currentView,enterTime:b.enterTime,leaveTime:b.leaveTime});case LEAVE_HOME_VIEW:case LEAVE_ABOUT_VIEW:case LEAVE_LOGIN_VIEW:case LEAVE_PROTECTED_VIEW:return a.get('currentView')===b.currentView?a.merge({currentView:b.currentView,enterTime:b.enterTime,leaveTime:b.leaveTime}):a;default:return a;}};exports.default=_default;function enterHome(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format(dateFormat);return{type:ENTER_HOME_VIEW,currentView:'home',enterTime:a,leaveTime:null}}function leaveHome(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format(dateFormat);return{type:LEAVE_HOME_VIEW,currentView:'home',enterTime:null,leaveTime:a}}function enterAbout(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format(dateFormat);return{type:ENTER_ABOUT_VIEW,currentView:'about',enterTime:a,leaveTime:null}}function leaveAbout(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format(dateFormat);return{type:LEAVE_ABOUT_VIEW,currentView:'about',enterTime:null,leaveTime:a}}function enterLogin(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format();return{type:ENTER_LOGIN_VIEW,currentView:'Login',enterTime:a,leaveTime:null}}function leaveLogin(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format();return{type:LEAVE_LOGIN_VIEW,currentView:'Login',enterTime:null,leaveTime:a}}function enterProtected(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format();return{type:ENTER_PROTECTED_VIEW,currentView:'Protected',enterTime:a,leaveTime:null}}function leaveProtected(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:(0,_moment2.default)().format();return{type:LEAVE_PROTECTED_VIEW,currentView:'Protected',enterTime:null,leaveTime:a}}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(dateFormat,'dateFormat','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(ENTER_LOGIN_VIEW,'ENTER_LOGIN_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(LEAVE_LOGIN_VIEW,'LEAVE_LOGIN_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(ENTER_HOME_VIEW,'ENTER_HOME_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW,'LEAVE_HOME_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW,'ENTER_ABOUT_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW,'LEAVE_ABOUT_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(ENTER_PROTECTED_VIEW,'ENTER_PROTECTED_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(LEAVE_PROTECTED_VIEW,'LEAVE_PROTECTED_VIEW','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(initialState,'initialState','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(enterHome,'enterHome','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(leaveHome,'leaveHome','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(enterAbout,'enterAbout','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(leaveAbout,'leaveAbout','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(enterLogin,'enterLogin','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(leaveLogin,'leaveLogin','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(enterProtected,'enterProtected','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(leaveProtected,'leaveProtected','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/views.js'))}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_reduxImmutable=__webpack_require__(22),_immutableRoute=__webpack_require__(23),_immutableRoute2=_interopRequireDefault(_immutableRoute),_views=__webpack_require__(6),_views2=_interopRequireDefault(_views),_userAuth=__webpack_require__(25),_userAuth2=_interopRequireDefault(_userAuth);Object.defineProperty(exports,'__esModule',{value:!0}),exports.reducers=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var reducers=exports.reducers={views:_views2.default,userAuth:_userAuth2.default},_default=(0,_reduxImmutable.combineReducers)(_extends({},reducers,{routing:_immutableRoute2.default}));exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(reducers,'reducers','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/reducers.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/reducers.js'))}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _Jumbotron=__webpack_require__(37);Object.defineProperty(exports,'Jumbotron',{enumerable:!0,get:function get(){return _interopRequireDefault(_Jumbotron).default}});var _NavigationBar=__webpack_require__(38);Object.defineProperty(exports,'NavigationBar',{enumerable:!0,get:function get(){return _interopRequireDefault(_NavigationBar).default}});var _BackToTop=__webpack_require__(44);Object.defineProperty(exports,'BackToTop',{enumerable:!0,get:function get(){return _interopRequireDefault(_BackToTop).default}});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_classnames=__webpack_require__(15),_classnames2=_interopRequireDefault(_classnames);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var AnimatedView=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.animated,c=a.children;return _jsx('section',{className:(0,_classnames2.default)({content:!0,"view-enter":b})},void 0,c)}}]),b}(_react.Component);AnimatedView.defaultProps={animated:!0};var _default=AnimatedView;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(AnimatedView,'AnimatedView','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/animatedView/AnimatedView.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/animatedView/AnimatedView.js'))}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_axios=__webpack_require__(31),_axios2=_interopRequireDefault(_axios);Object.defineProperty(exports,'__esModule',{value:!0}),exports.FETCH=exports.FETCH_MOCK=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var FETCH_MOCK=exports.FETCH_MOCK='FETCH_MOCK',FETCH=exports.FETCH='FETCH',fetchMiddleware=function(a){return function(b){return function(c){if(!c.fetch)return b(c);if(!c.fetch.type||!c.fetch.type===FETCH_MOCK||!c.fetch.type===FETCH)return b(c);if(!c.fetch.actionTypes)return b(c);if(c.fetch.type===FETCH_MOCK){if(!c.fetch.mockResult)throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');var d=c.fetch,e=d.actionTypes,f=e.request,g=e.success,h=d.mockResult;return a.dispatch({type:f}),Promise.resolve(a.dispatch({type:g,payload:{status:200,data:h}}))}if(c.fetch.type===FETCH){var i=c.fetch,j=i.actionTypes,k=j.request,l=j.success,m=j.fail,n=i.url,o=i.method,p=i.headers,q=i.options;return a.dispatch({type:k}),_axios2.default.request(_extends({method:o,url:n,withCredentials:!0,headers:_extends({Accept:'application/json',"Content-Type":'application/json',"Acces-Control-Allow-Origin":'*'},p)},q)).then(function(b){return a.dispatch({type:l,payload:b})}).catch(function(b){return a.dispatch({type:m,error:b}),Promise.reject(b)})}return b(c)}}},_default=fetchMiddleware;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(FETCH_MOCK,'FETCH_MOCK','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js'),__REACT_HOT_LOADER__.register(FETCH,'FETCH','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js'),__REACT_HOT_LOADER__.register(fetchMiddleware,'fetchMiddleware','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/middleware/fetchMiddleware.js'))}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};Object.defineProperty(exports,'__esModule',{value:!0});exports.isBrowserSide=isBrowserSide;function isBrowserSide(){return'object'===('undefined'==typeof window?'undefined':_typeof(window))}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||__REACT_HOT_LOADER__.register(isBrowserSide,'isBrowserSide','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/universal.js')}();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),serverRender=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=b.url,e={},f=(0,_configureStore2.default)(),a.prev=3,a.next=6,fakeFetch();case 6:g=a.sent,h=g.info,i=(0,_moment2.default)().format(),j=f.getState(),k=j.get('views'),l=k.set('somePropFromServer',h).set('serverTime',i),m=j.set('views',l),f=(0,_configureStore2.default)(m),n=_jsx(_reactRedux.Provider,{store:f},void 0,_jsx(_reactRouter.StaticRouter,{location:d,context:e},void 0,_ref2)),o='';try{o=(0,_server.renderToString)(n)}catch(a){console.error('error: renderToString failed: ',a)}if(!e.url){a.next=19;break}return a.abrupt('return',c.status.end({location:e.url}));case 19:return p=serialize(f.getState().toJS()),a.abrupt('return',c.status(200).set('content-type','text/html').send(renderFullPage(o,p)));case 23:return a.prev=23,a.t0=a['catch'](3),a.abrupt('return',c.status(500).end('Internal server error: ',a.t0));case 26:case'end':return a.stop();}},a,this,[[3,23]])}));return function(){return a.apply(this,arguments)}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_server=__webpack_require__(19),_moment=__webpack_require__(4),_moment2=_interopRequireDefault(_moment),_reactRouter=__webpack_require__(8),_reactRedux=__webpack_require__(5),_configureStore=__webpack_require__(20),_configureStore2=_interopRequireDefault(_configureStore),_App=__webpack_require__(36),_App2=_interopRequireDefault(_App);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}var express=__webpack_require__(58),path=__webpack_require__(59),chalk=__webpack_require__(60),bodyParser=__webpack_require__(61),helmet=__webpack_require__(62),compression=__webpack_require__(63),PrettyError=__webpack_require__(64),Promise=__webpack_require__(65),serialize=__webpack_require__(66),morgan=__webpack_require__(67),DOCS_PATH='../../../../docs',PORT=8083,IP_ADRESS='localhost',app=express();app.set('port',PORT),app.set('ipAdress',IP_ADRESS);var pe=new PrettyError;pe.start(),app.use(helmet()),app.use(compression()),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use(morgan('combined')),app.use('/assets',express.static(path.resolve(__dirname,DOCS_PATH,'public/assets/'))),app.get('/*',serverRender),app.use(function(a,b,c){console.log('req.url: ',a.url);var d=new Error('Not found');d.status=404,c(d)}),app.use(function(a,b,c){404===a.status&&c.status(404).send('Sorry nothing here for now...'),console.error(a),c.status(500).send('internal server error')}),app.listen(PORT,IP_ADRESS,function(){return console.log('\n    =====================================================\n    -> Server ('+chalk.bgBlue('SSR')+') \uD83C\uDFC3 (running) on '+chalk.green(IP_ADRESS)+':'+chalk.green(PORT)+'\n    =====================================================\n  ')}),module.exports=app;var _ref2=_jsx(_App2.default,{});function fakeFetch(){return new Promise(function(a){return setTimeout(function(){return a({info:'whats up?'})},200)})}function renderFullPage(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'';return{template:'\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>React redux router SSR Starter</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="description" content="react redux router SSR">\n        <meta name="author" content="Erwan DATIN">\n        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">\n        <link rel="stylesheet" href="/assets/app.styles.css">\n      </head>\n      <body class="skin-black" style="background-color:#f1f2f7">\n        <section id="root"><div>'+a+'</div></section>\n        <script type="text/javascript">window.__PRELOADED_STATE__ = '+b+'</script>\n        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>\n        <script type="text/javascript" src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  '}.template}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(DOCS_PATH,'DOCS_PATH','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(PORT,'PORT','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(IP_ADRESS,'IP_ADRESS','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(app,'app','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(pe,'pe','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(serverRender,'serverRender','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(fakeFetch,'fakeFetch','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'),__REACT_HOT_LOADER__.register(renderFullPage,'renderFullPage','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/server/SSR/src/server.js'))}();
/* WEBPACK VAR INJECTION */}.call(exports, "src/server/SSR/src"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports='production'===process.env.NODE_ENV?__webpack_require__(21):__webpack_require__(32);var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=configureStore;var _redux=__webpack_require__(3),_reduxThunk=__webpack_require__(12),_reduxThunk2=_interopRequireDefault(_reduxThunk),_reducers=__webpack_require__(9),_reducers2=_interopRequireDefault(_reducers),_fetchMiddleware=__webpack_require__(13),_fetchMiddleware2=_interopRequireDefault(_fetchMiddleware);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var enhancer=(0,_redux.compose)((0,_redux.applyMiddleware)(_reduxThunk2.default,_fetchMiddleware2.default));function configureStore(a){return(0,_redux.createStore)(_reducers2.default,a,enhancer)}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(enhancer,'enhancer','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.prod.js'),__REACT_HOT_LOADER__.register(configureStore,'configureStore','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.prod.js'))}();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _immutable=__webpack_require__(2),_reactRouterRedux=__webpack_require__(24),initialState=(0,_immutable.fromJS)({locationBeforeTransitions:null}),_default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,b=arguments[1];return b.type===_reactRouterRedux.LOCATION_CHANGE?a.set('locationBeforeTransitions',b.payload):a};exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(initialState,'initialState','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/immutableRoute.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/immutableRoute.js'))}();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.disconnectUser=disconnectUser,exports.checkUserIsConnected=checkUserIsConnected,exports.logUserIfNeeded=logUserIfNeeded,exports.fetchUserInfoDataIfNeeded=fetchUserInfoDataIfNeeded;var _moment=__webpack_require__(4),_moment2=_interopRequireDefault(_moment),_config=__webpack_require__(26),_userInfosMock=__webpack_require__(27),_userInfosMock2=_interopRequireDefault(_userInfosMock),_getLocationOrigin=__webpack_require__(28),_getLocationOrigin2=_interopRequireDefault(_getLocationOrigin),_auth=__webpack_require__(29),_auth2=_interopRequireDefault(_auth),_immutable=__webpack_require__(2);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}var REQUEST_USER_INFOS_DATA='REQUEST_USER_INFOS_DATA',RECEIVED_USER_INFOS_DATA='RECEIVED_USER_INFOS_DATA',ERROR_USER_INFOS_DATA='ERROR_USER_INFOS_DATA',REQUEST_LOG_USER='REQUEST_LOG_USER',RECEIVED_LOG_USER='RECEIVED_LOG_USER',ERROR_LOG_USER='ERROR_LOG_USER',CHECK_IF_USER_IS_AUTHENTICATED='CHECK_IF_USER_IS_AUTHENTICATED',DISCONNECT_USER='DISCONNECT_USER',initialState=(0,_immutable.fromJS)({isFetching:!1,isLogging:!1,time:'',id:'',login:'',firstname:'',lastname:'',token:null,isAuthenticated:!1}),_default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,b=arguments[1],c=(0,_moment2.default)().format();switch(b.type){case CHECK_IF_USER_IS_AUTHENTICATED:return a.merge({actionTime:c,isAuthenticated:b.isAuthenticated,token:b.token||initialState.get('token'),id:b.user&&b.user.id?b.user.id:initialState.get('id'),login:b.user&&b.user.login?b.user.login:initialState.get('login'),firstname:b.user&&b.user.firstname?b.user.firstname:initialState.get('firstname'),lastname:b.user&&b.user.lastname?b.user.lastname:initialState.get('firstname')});case DISCONNECT_USER:return a.merge({actionTime:c,isAuthenticated:!1,token:initialState.get('token'),id:initialState.get('id'),login:initialState.get('login'),firstname:initialState.get('firstname'),lastname:initialState.get('lastname')});case REQUEST_LOG_USER:return a.merge({actionTime:c,isLogging:!0});case RECEIVED_LOG_USER:var d=b.payload.data;return a.merge({actionTime:c,isAuthenticated:!0,token:d.token,id:d.id,login:d.login,firstname:d.firstname,lastname:d.lastname,isLogging:!1});case ERROR_LOG_USER:return a.merge({actionTime:c,isAuthenticated:!1,isLogging:!1});case REQUEST_USER_INFOS_DATA:return a.merge({actionTime:c,isFetching:!0});case RECEIVED_USER_INFOS_DATA:var e=b.payload.data;return a.merge({actionTime:c,isFetching:!1,id:e.id,login:e.login,firstname:e.firstname,lastname:e.lastname});case ERROR_USER_INFOS_DATA:return a.merge({actionTime:c,isFetching:!1});default:return a;}};exports.default=_default;function disconnectUser(){return _auth2.default.clearAllAppStorage(),{type:DISCONNECT_USER}}function checkUserIsConnected(){var a=_auth2.default.getToken(),b=_auth2.default.getUserInfo(),c=a&&function checkUserHasId(a){return a&&a._id}(b);return _extends({type:CHECK_IF_USER_IS_AUTHENTICATED,token:a},b,{isAuthenticated:c})}function logUser(a,b){var c=this;return function(){var d=_asyncToGenerator(regeneratorRuntime.mark(function d(e){var f,g,h,i,j,k,l;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return f=_config.appConfig.DEV_MODE?'FETCH_MOCK':'FETCH',g='login',h=_userInfosMock2.default,i=(0,_getLocationOrigin2.default)()+'/'+g,j='post',k={},l={credentials:'same-origin',data:{login:a,password:b}},c.abrupt('return',e({type:'FETCH_MIDDLEWARE',fetch:{type:f,actionTypes:{request:REQUEST_LOG_USER,success:RECEIVED_LOG_USER,fail:ERROR_LOG_USER},mockResult:h,url:i,method:j,headers:k,options:l}}));case 8:case'end':return c.stop();}},d,c)}));return function(){return d.apply(this,arguments)}}()}function logUserIfNeeded(a,b){return function(c,d){return shouldLogUser(d())?c(logUser(a,b)):Promise.resolve()}}function shouldLogUser(a){var b=a.get('isLogging');return console.log('should log user: ',b),!b}function fetchUserInfosData(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'';return function(b){var c=_auth2.default.getToken(),d=_config.appConfig.DEV_MODE?'FETCH_MOCK':'FETCH',e=_userInfosMock2.default,f=(0,_getLocationOrigin2.default)()+'/'+_config.appConfig.API.users+'/'+a;return b({type:'FETCH_MIDDLEWARE',fetch:{type:d,actionTypes:{request:REQUEST_USER_INFOS_DATA,success:RECEIVED_USER_INFOS_DATA,fail:ERROR_USER_INFOS_DATA},mockResult:e,url:f,method:'get',headers:{authorization:'Bearer '+c},options:{credentials:'same-origin'}}})}}function fetchUserInfoDataIfNeeded(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'';return function(b,c){return shouldFetchUserInfoData(c())?b(fetchUserInfosData(a)):Promise.resolve()}}function shouldFetchUserInfoData(a){var b=a.get('isFetching');return!b}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(REQUEST_USER_INFOS_DATA,'REQUEST_USER_INFOS_DATA','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(RECEIVED_USER_INFOS_DATA,'RECEIVED_USER_INFOS_DATA','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(ERROR_USER_INFOS_DATA,'ERROR_USER_INFOS_DATA','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(REQUEST_LOG_USER,'REQUEST_LOG_USER','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(RECEIVED_LOG_USER,'RECEIVED_LOG_USER','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(ERROR_LOG_USER,'ERROR_LOG_USER','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(CHECK_IF_USER_IS_AUTHENTICATED,'CHECK_IF_USER_IS_AUTHENTICATED','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(DISCONNECT_USER,'DISCONNECT_USER','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(initialState,'initialState','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(disconnectUser,'disconnectUser','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(checkUserIsConnected,'checkUserIsConnected','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(logUser,'logUser','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(logUserIfNeeded,'logUserIfNeeded','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(shouldLogUser,'shouldLogUser','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(fetchUserInfosData,'fetchUserInfosData','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(fetchUserInfoDataIfNeeded,'fetchUserInfoDataIfNeeded','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(shouldFetchUserInfoData,'shouldFetchUserInfoData','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/modules/userAuth.js'))}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var appConfig=exports.appConfig={DEV_MODE:!0,api:{fakeEndPoint:'api/somewhere'}};var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||__REACT_HOT_LOADER__.register(appConfig,'appConfig','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/config/index.js')}();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"token":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var getLocationOrigin=exports.getLocationOrigin=function(){return window.location.origin||(window.location.origin=window.location.protocol+'//'+window.location.hostname+(window.location.port?':'+window.location.port:'')),window.location.origin},_default=getLocationOrigin;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(getLocationOrigin,'getLocationOrigin','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/utils/getLocationOrigin.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/utils/getLocationOrigin.js'))}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.auth=void 0;var _jwtDecode=__webpack_require__(30),_jwtDecode2=_interopRequireDefault(_jwtDecode),_moment=__webpack_require__(4),_moment2=_interopRequireDefault(_moment);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var TOKEN_KEY='token',USER_INFO='userInfo',APP_PERSIST_STORES_TYPES=['localStorage','sessionStorage'],parse=JSON.parse,stringify=JSON.stringify,auth=exports.auth={getToken:function getToken(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:APP_PERSIST_STORES_TYPES[0],b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:TOKEN_KEY;return a===APP_PERSIST_STORES_TYPES[0]?localStorage&&localStorage.getItem(b)||null:a===APP_PERSIST_STORES_TYPES[1]?sessionStorage&&sessionStorage.getItem(b)||null:null},setToken:function setToken(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:APP_PERSIST_STORES_TYPES[0],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:TOKEN_KEY;!a||0>=a.length||(b===APP_PERSIST_STORES_TYPES[0]&&localStorage&&localStorage.setItem(c,a),b===APP_PERSIST_STORES_TYPES[1]&&sessionStorage&&sessionStorage.setItem(c,a))},isAuthenticated:function isAuthenticated(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:APP_PERSIST_STORES_TYPES[0],b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:TOKEN_KEY;return a===APP_PERSIST_STORES_TYPES[0]?localStorage&&localStorage.getItem(b):!(a!==APP_PERSIST_STORES_TYPES[1])&&sessionStorage&&sessionStorage.getItem(b)},getTokenExpirationDate:function getTokenExpirationDate(a){var b=(0,_jwtDecode2.default)(a);if(!b.exp)return null;var c=(0,_moment2.default)(b.exp);return c},clearToken:function clearToken(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:TOKEN_KEY;return localStorage&&localStorage[a]?(localStorage.removeItem(a),!0):sessionStorage&&sessionStorage[a]&&(sessionStorage.removeItem(a),!0)},getUserInfo:function getUserInfo(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:APP_PERSIST_STORES_TYPES[0],b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:USER_INFO;return a===APP_PERSIST_STORES_TYPES[0]?localStorage&&parse(localStorage.getItem(b))||null:a===APP_PERSIST_STORES_TYPES[1]?sessionStorage&&parse(sessionStorage.getItem(b))||null:null},setUserInfo:function setUserInfo(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:APP_PERSIST_STORES_TYPES[0],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:USER_INFO;!a||0>=a.length||(b===APP_PERSIST_STORES_TYPES[0]&&localStorage&&localStorage.setItem(c,stringify(a)),b===APP_PERSIST_STORES_TYPES[1]&&sessionStorage&&sessionStorage.setItem(c,stringify(a)))},clearUserInfo:function clearUserInfo(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:USER_INFO;localStorage&&localStorage[a]&&localStorage.removeItem(a),sessionStorage&&sessionStorage[a]&&sessionStorage.removeItem(a)},clearAllAppStorage:function clearAllAppStorage(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()}},_default=auth;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(TOKEN_KEY,'TOKEN_KEY','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(USER_INFO,'USER_INFO','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(APP_PERSIST_STORES_TYPES,'APP_PERSIST_STORES_TYPES','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(parse,'parse','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(stringify,'stringify','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(auth,'auth','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/services/auth/index.js'))}();

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=configureStore;var _redux=__webpack_require__(3),_reduxLogger=__webpack_require__(34),_reduxThunk=__webpack_require__(12),_reduxThunk2=_interopRequireDefault(_reduxThunk),_reducers=__webpack_require__(9),_reducers2=_interopRequireDefault(_reducers),_fetchMiddleware=__webpack_require__(13),_fetchMiddleware2=_interopRequireDefault(_fetchMiddleware),_reduxDevtoolsExtension=__webpack_require__(35);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var loggerMiddleware=(0,_reduxLogger.createLogger)({level:'info',collapsed:!0,stateTransformer:function stateTransformer(a){return a.toJS()}}),enhancer=(0,_reduxDevtoolsExtension.composeWithDevTools)((0,_redux.applyMiddleware)(_reduxThunk2.default,_fetchMiddleware2.default,loggerMiddleware));function configureStore(a){var b=(0,_redux.createStore)(_reducers2.default,a,enhancer);return module.hot&&module.hot.accept('../modules/reducers',function(){return b.replaceReducer(__webpack_require__(9).default)}),b}var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(loggerMiddleware,'loggerMiddleware','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js'),__REACT_HOT_LOADER__.register(enhancer,'enhancer','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js'),__REACT_HOT_LOADER__.register(configureStore,'configureStore','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/redux/store/configureStore.dev.js'))}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_components=__webpack_require__(10),_navigation=__webpack_require__(49),_navigation2=_interopRequireDefault(_navigation),_immutable=__webpack_require__(2),_MainRoutes=__webpack_require__(50),_MainRoutes2=_interopRequireDefault(_MainRoutes),_reactRouter=__webpack_require__(8);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _ref2=_jsx('div',{className:'container-fluid'},void 0,_jsx(_MainRoutes2.default,{})),_ref3=_jsx(_components.BackToTop,{minScrollY:40,scrollTo:'appContainer'}),App=function(a){function b(){var a,c,d,e;_classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.state={navModel:(0,_immutable.fromJS)(_navigation2.default)},d.handleLeftNavItemClick=function(){var a;return(a=d).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(a,arguments)},d.handleRightNavItemClick=function(){var a;return(a=d).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(a,arguments)},c),_possibleConstructorReturn(d,e)}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.state.navModel,b=this.props.match.url;return _jsx('div',{id:'appContainer'},void 0,_jsx(_components.NavigationBar,{brand:a.get('brand'),navModel:a,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),_ref2,_ref3)}},{key:'__handleLeftNavItemClick__REACT_HOT_LOADER__',value:function __handleLeftNavItemClick__REACT_HOT_LOADER__(){}},{key:'__handleRightNavItemClick__REACT_HOT_LOADER__',value:function __handleRightNavItemClick__REACT_HOT_LOADER__(){}}]),b}(_react.PureComponent),_default=(0,_reactRouter.withRouter)(App);exports.default=_default;var _temp2=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(App,'App','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/app/App.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/containers/app/App.js'))}();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Jumbotron=function(a){var b=a.children;return _jsx('div',{className:'jumbotron'},void 0,b)},_default=Jumbotron;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(Jumbotron,'Jumbotron','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/jumbotron/Jumbotron.js'))}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_Humburger=__webpack_require__(39),_Humburger2=_interopRequireDefault(_Humburger),_LeftNav=__webpack_require__(40),_LeftNav2=_interopRequireDefault(_LeftNav),_RightNav=__webpack_require__(42),_RightNav2=_interopRequireDefault(_RightNav),_immutable=__webpack_require__(2),Immutable=_interopRequireWildcard(_immutable);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _ref=_jsx(_Humburger2.default,{}),NavigationBar=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.brand,c=a.navModel,d=a.handleLeftNavItemClick,e=a.handleRightNavItemClick;return _jsx('nav',{className:'navbar navbar-default'},void 0,_jsx('div',{className:'containersCustom'},void 0,_jsx('div',{className:'navbar-header'},void 0,_ref,_jsx('a',{className:'navbar-brand'},void 0,b)),_jsx('div',{className:'collapse navbar-collapse',id:'bs-example-navbar-collapse-1'},void 0,_jsx('ul',{className:'nav navbar-nav'},void 0,_jsx(_LeftNav2.default,{leftLinks:c.get('leftLinks'),onLeftNavButtonClick:d})),_jsx('ul',{className:'nav navbar-nav navbar-right'},void 0,_jsx(_RightNav2.default,{rightLinks:c.get('rightLinks'),onRightNavButtonClick:e})))))}}]),b}(_react.PureComponent);NavigationBar.defaultProps={brand:'brand'};var _default=NavigationBar;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(NavigationBar,'NavigationBar','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/NavigationBar.js'))}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:""+d,ref:null,props:c,_owner:null}}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react);Object.defineProperty(exports,"__esModule",{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _ref=_jsx("button",{className:"navbar-toggle collapsed",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},void 0,_jsx("span",{className:"sr-only"},void 0,"Toggle navigation"),_jsx("span",{className:"icon-bar"}),_jsx("span",{className:"icon-bar"}),_jsx("span",{className:"icon-bar"})),Humburger=function(){return _ref},_default=Humburger;exports.default=_default;var _temp=function(){"undefined"==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(Humburger,"Humburger","/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js"),__REACT_HOT_LOADER__.register(_default,"default","/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/humburger/Humburger.js"))}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_LeftNavButton=__webpack_require__(41),_LeftNavButton2=_interopRequireDefault(_LeftNavButton),_immutable=__webpack_require__(2),Immutable=_interopRequireWildcard(_immutable);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var LeftNav=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.leftLinks,c=a.onLeftNavButtonClick;return _jsx('ul',{className:'nav navbar-nav'},void 0,b.map(function(a,b){return _jsx(_LeftNavButton2.default,{link:a.get('link'),label:a.get('label'),viewName:a.get('view'),onClick:c},b)}))}}]),b}(_react.PureComponent),_default=LeftNav;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(LeftNav,'LeftNav','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/LeftNav.js'))}();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_reactRouterDom=__webpack_require__(7);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var LeftNavButton=function(a){function b(){var a,c,d,e;_classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.handleLeftNavItemClick=function(){var a;return(a=d).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(a,arguments)},c),_possibleConstructorReturn(d,e)}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.link,c=a.label;return _jsx('li',{},void 0,_jsx(_reactRouterDom.Link,{to:b,onClick:this.handleLeftNavItemClick},void 0,c))}},{key:'__handleLeftNavItemClick__REACT_HOT_LOADER__',value:function __handleLeftNavItemClick__REACT_HOT_LOADER__(a){var b=this.props,c=b.onClick,d=b.viewName;c(a,d)}}]),b}(_react.PureComponent),_default=LeftNavButton;exports.default=_default;var _temp2=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(LeftNavButton,'LeftNavButton','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js'))}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_RightNavButton=__webpack_require__(43),_RightNavButton2=_interopRequireDefault(_RightNavButton),_immutable=__webpack_require__(2),Immutable=_interopRequireWildcard(_immutable);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var RightNav=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.rightLinks,c=a.onRightNavButtonClick;return _jsx('ul',{className:'nav navbar-nav navbar-right'},void 0,b.map(function(a,b){return _jsx(_RightNavButton2.default,{link:a.get('link'),label:a.get('label'),viewName:a.get('view'),onClick:c},b)}))}}]),b}(_react.PureComponent),_default=RightNav;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(RightNav,'RightNav','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/RightNav.js'))}();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_reactRouterDom=__webpack_require__(7);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var RightNavButton=function(a){function b(){var a,c,d,e;_classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.handleRightNavItemClick=function(){var a;return(a=d).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(a,arguments)},c),_possibleConstructorReturn(d,e)}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.link,c=a.label;return _jsx('li',{},void 0,_jsx(_reactRouterDom.Link,{to:b,onClick:this.handleRightNavItemClick},void 0,c))}},{key:'__handleRightNavItemClick__REACT_HOT_LOADER__',value:function __handleRightNavItemClick__REACT_HOT_LOADER__(a){var b=this.props,c=b.onClick,d=b.viewName;c(a,d)}}]),b}(_react.PureComponent),_default=RightNavButton;exports.default=_default;var _temp2=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(RightNavButton,'RightNavButton','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js'))}();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_smoothScroll=__webpack_require__(45),_BackToTopButton=__webpack_require__(46),_BackToTopButton2=_interopRequireDefault(_BackToTopButton),_reactMotion=__webpack_require__(48),_universal=__webpack_require__(14);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var BackToTop=function(a){function b(){var a,c,d,e;_classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.state={windowScrollY:0,showBackButton:!1},d.handleWindowScroll=function(){var a;return(a=d).__handleWindowScroll__REACT_HOT_LOADER__.apply(a,arguments)},d.scrollDone=function(){var a;return(a=d).__scrollDone__REACT_HOT_LOADER__.apply(a,arguments)},d.handlesOnBackButtonClick=function(){var a;return(a=d).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(a,arguments)},c),_possibleConstructorReturn(d,e)}return _inherits(b,a),_createClass(b,[{key:'componentWillMount',value:function componentWillMount(){(0,_universal.isBrowserSide)()&&window.addEventListener('scroll',this.handleWindowScroll)}},{key:'componentWillUnmount',value:function componentWillUnmount(){(0,_universal.isBrowserSide)()&&window.removeEventListener('scroll',this.handleWindowScroll)}},{key:'render',value:function render(){var a=this,b=this.state.showBackButton;return _jsx(_reactMotion.Motion,{style:{x:(0,_reactMotion.spring)(b?0:120,_reactMotion.presets.stiff)}},void 0,function(b){var c=b.x;return _jsx(_BackToTopButton2.default,{position:'bottom-right',onClick:a.handlesOnBackButtonClick,motionStyle:{WebkitTransform:'translate3d('+c+'px, 0, 0)',transform:'translate3d('+c+'px, 0, 0)'}})})}},{key:'__handleWindowScroll__REACT_HOT_LOADER__',value:function __handleWindowScroll__REACT_HOT_LOADER__(){if((0,_universal.isBrowserSide)())if($){var a=this.state.windowScrollY,b=this.props.minScrollY,c=$(window).scrollTop();if(a!==c){this.setState({windowScrollY:c,showBackButton:!!(c>=b)})}}else throw'BackToTop component requires jQuery'}},{key:'__scrollDone__REACT_HOT_LOADER__',value:function __scrollDone__REACT_HOT_LOADER__(){var a=this.props.onScrollDone;a&&a()}},{key:'__handlesOnBackButtonClick__REACT_HOT_LOADER__',value:function __handlesOnBackButtonClick__REACT_HOT_LOADER__(a){a.preventDefault();var b=this.props,c=b.scrollTo,d=b.minScrollY,e=this.state.windowScrollY;e&&e>d&&_smoothScroll.smoothScroll.scrollTo(c,this.scrollDone)}}]),b}(_react.Component);BackToTop.defaultProps={minScrollY:120};var _default=BackToTop;exports.default=_default;var _temp2=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(BackToTop,'BackToTop','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/BackToTop.js'))}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.smoothScroll=void 0;var _universal=__webpack_require__(14),smoothScroll=exports.smoothScroll={timer:null,stop:function stop(){clearTimeout(this.timer)},scrollTo:function scrollTo(a,b){function c(){var a,f=Date.now()-q;f>e.duration&&clearTimeout(this.timer),d=f/e.duration,1<d?(clearTimeout(this.timer),b&&b()):(a=e.easing.outQuint(0,f,m,p,e.duration),window.scrollTo(0,a),this.timer=setTimeout(c,10))}if(!(0,_universal.isBrowserSide)()){var d,e={duration:1e3,easing:{outQuint:function outQuint(a,e,f,b,c){return b*((e=e/c-1)*e*e*e*e+1)+f}}},f=document.getElementById(a),g=f.offsetTop,h=f.offsetHeight,i=document.body,j=document.documentElement,k=Math.max(i.scrollHeight,i.offsetHeight,j.clientHeight,j.scrollHeight,j.offsetHeight),l=window.innerHeight,m=window.pageYOffset,n=g-m,o=k-l,p=o<n?o-(k-g-h+m):n,q=Date.now();d=0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(c,10)}}};var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||__REACT_HOT_LOADER__.register(smoothScroll,'smoothScroll','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/lib/smoothScroll.js')}();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_classnames=__webpack_require__(15),_classnames2=_interopRequireDefault(_classnames),_UpIcon=__webpack_require__(47),_UpIcon2=_interopRequireDefault(_UpIcon);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var defaultBackGroundColor='#4A4A4A',sideOffset='-10px',bottomOffset='40px',defaultWidth='100px',defaultZindex=10,defaultOpacity=0.5,defaultStyle={position:'fixed',right:sideOffset,left:'',bottom:bottomOffset,width:defaultWidth,zIndex:defaultZindex,opacity:defaultOpacity,backgroundColor:defaultBackGroundColor},_ref2=_jsx(_UpIcon2.default,{color:'#F1F1F1'}),BackToTopButton=function(a){var b=a.onClick,c=a.position,d=a.children,e=a.motionStyle,f=setPosition(c,_extends({},e,defaultStyle));return _jsx('button',{style:f,className:(0,_classnames2.default)({btn:!0}),onClick:b},void 0,!d&&_jsx('div',{style:{marginRight:'10px'}},void 0,_ref2),!!d&&d)};BackToTopButton.defaultProps={position:'bottom-right'};function setPosition(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'bottom-right',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultStyle,c=_extends({},b);return'bottom-right'===a?(c.right=sideOffset,c.left='',c):'bottom-left'===a?(c.right='',c.left=sideOffset,c):b}var _default=BackToTopButton;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(defaultBackGroundColor,'defaultBackGroundColor','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(sideOffset,'sideOffset','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(bottomOffset,'bottomOffset','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(defaultWidth,'defaultWidth','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(defaultZindex,'defaultZindex','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(defaultOpacity,'defaultOpacity','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(defaultStyle,'defaultStyle','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(BackToTopButton,'BackToTopButton','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(setPosition,'setPosition','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js'))}();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _ref2=_jsx('path',{d:'M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n    c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z'}),UpIcon=function(a){var b=a.color;return _jsx('svg',{width:'24px',height:'24px',viewBox:'0 0 512 512',fill:''+b},void 0,_ref2)};UpIcon.defaultProps={color:'#F1F1F1'};var _default=UpIcon;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(UpIcon,'UpIcon','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/backToTop/backToTopButton/UpIcon.js'))}();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {"brand":"React Redux Immutable webpack ssr Starter","leftLinks":[],"rightLinks":[{"label":"Home","link":"/","view":"home","isRouteBtn":true},{"label":"Protected","link":"/protected","view":"protected","isRouteBtn":true},{"label":"About","link":"/about","view":"about","isRouteBtn":true},{"label":"Disconnect","link":"/login","view":"login","isRouteBtn":true}]}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactRouter=__webpack_require__(8),_home=__webpack_require__(51),_home2=_interopRequireDefault(_home),_about=__webpack_require__(53),_about2=_interopRequireDefault(_about),_protected=__webpack_require__(55),_protected2=_interopRequireDefault(_protected),_PrivateRoute=__webpack_require__(57),_PrivateRoute2=_interopRequireDefault(_PrivateRoute);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _ref=_jsx(_reactRouter.Route,{exact:true,path:'/',component:_home2.default}),_ref2=_jsx(_reactRouter.Route,{path:'/about',component:_about2.default}),_ref3=_jsx(_PrivateRoute2.default,{path:'/protected',component:_protected2.default}),MainRoutes=function(){return _jsx(_reactRouter.Switch,{},void 0,_ref,_ref2,_ref3)},_default=MainRoutes;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(MainRoutes,'MainRoutes','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/routes/MainRoutes.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/routes/MainRoutes.js'))}();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _reactRedux=__webpack_require__(5),_redux=__webpack_require__(3),_views=__webpack_require__(6),viewsActions=_interopRequireWildcard(_views),_Home=__webpack_require__(52),_Home2=_interopRequireDefault(_Home);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}var mapStateToProps=function(a){return{currentView:a.getIn(['views','currentView'])}},mapDispatchToProps=function(a){return(0,_redux.bindActionCreators)({enterHome:viewsActions.enterHome,leaveHome:viewsActions.leaveHome},a)},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Home2.default);exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js'),__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/index.js'))}();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_components=__webpack_require__(10),_AnimatedView=__webpack_require__(11),_AnimatedView2=_interopRequireDefault(_AnimatedView),_reactRouterDom=__webpack_require__(7);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function testTime(){return new Promise(function(a){return setTimeout(function(){return a('async-await works')},200)})}var _ref2=_jsx(_AnimatedView2.default,{},void 0,_jsx(_components.Jumbotron,{},void 0,_jsx('h1',{},void 0,'React + Redux + Immutable + Bootstrap'),_jsx('h2',{},void 0,'with Hot Reload!!!'),_jsx('h2',{},void 0,'and React Router v4'),_jsx('h2',{},void 0,'and webpack 3.x'),_jsx('h1',{},void 0,'Starter'),_jsx('p',{},void 0,_jsx(_reactRouterDom.Link,{className:'btn btn-success btn-lg',to:'/about'},void 0,_jsx('i',{className:'fa fa-info'}),'\xA0 go to about')))),Home=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=this.props.enterHome,b(),a.next=4,testTime();case 4:c=a.sent,console.log('valid async await: ',c);case 6:case'end':return a.stop();}},a,this)}));return function componentDidMount(){return a.apply(this,arguments)}}()},{key:'componentWillUnmount',value:function componentWillUnmount(){var a=this.props.leaveHome;a()}},{key:'render',value:function render(){return _ref2}}]),b}(_react.PureComponent),_default=Home;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(testTime,'testTime','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js'),__REACT_HOT_LOADER__.register(Home,'Home','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/home/Home.js'))}();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _reactRedux=__webpack_require__(5),_redux=__webpack_require__(3),_views=__webpack_require__(6),viewsActions=_interopRequireWildcard(_views),_About=__webpack_require__(54),_About2=_interopRequireDefault(_About);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}var mapStateToProps=function(a){return{currentView:a.getIn(['views','currentView'])}},mapDispatchToProps=function(a){return(0,_redux.bindActionCreators)({enterAbout:viewsActions.enterAbout,leaveAbout:viewsActions.leaveAbout},a)},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_About2.default);exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js'),__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/index.js'))}();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_components=__webpack_require__(10),_AnimatedView=__webpack_require__(11),_AnimatedView2=_interopRequireDefault(_AnimatedView),_reactRouterDom=__webpack_require__(7);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _ref=_jsx(_AnimatedView2.default,{},void 0,_jsx(_components.Jumbotron,{},void 0,_jsx('h1',{},void 0,'About'),_jsx('p',{},void 0,_jsx(_reactRouterDom.Link,{className:'btn btn-success btn-lg',to:'/'},void 0,_jsx('i',{className:'fa fa-info'}),'\xA0 go to home')))),About=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){var a=this.props.enterAbout;a()}},{key:'componentWillUnmount',value:function componentWillUnmount(){var a=this.props.leaveAbout;a()}},{key:'render',value:function render(){return _ref}}]),b}(_react.PureComponent),_default=About;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(About,'About','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/About.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/about/About.js'))}();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _reactRedux=__webpack_require__(5),_redux=__webpack_require__(3),_views=__webpack_require__(6),viewsActions=_interopRequireWildcard(_views),_Protected=__webpack_require__(56),_Protected2=_interopRequireDefault(_Protected);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}var mapStateToProps=function(a){return{currentView:a.getIn(['views','currentView'])}},mapDispatchToProps=function(a){return(0,_redux.bindActionCreators)({enterProtected:viewsActions.enterProtected,leaveProtected:viewsActions.leaveProtected},a)},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Protected2.default);exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(mapStateToProps,'mapStateToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/protected/index.js'),__REACT_HOT_LOADER__.register(mapDispatchToProps,'mapDispatchToProps','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/protected/index.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/protected/index.js'))}();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_AnimatedView=__webpack_require__(11),_AnimatedView2=_interopRequireDefault(_AnimatedView);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var _ref=_jsx(_AnimatedView2.default,{},void 0,_jsx('h1',{},void 0,'Protected view'),_jsx('h3',{},void 0,'If you can read, it means you are authenticated')),Protected=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){var a=this.props.enterProtected;a()}},{key:'componentWillUnmount',value:function componentWillUnmount(){var a=this.props.leaveProtected;a()}},{key:'render',value:function render(){return _ref}}]),b}(_react.PureComponent),_default=Protected;exports.default=_default;var _temp=function(){'undefined'==typeof __REACT_HOT_LOADER__||(__REACT_HOT_LOADER__.register(Protected,'Protected','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/protected/Protected.js'),__REACT_HOT_LOADER__.register(_default,'default','/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/views/protected/Protected.js'))}();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: /Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/src/app/components/privateRoute/PrivateRoute.js: Cannot read property 'add' of undefined\n    at ScopeTracker.addReference (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/scope-tracker.js:55:36)\n    at ReferencedIdentifier (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/index.js:190:28)\n    at newFn (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/visitors.js:318:17)\n    at bfsTraverse (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/bfs-traverse.js:34:43)\n    at Mangler.collect (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/index.js:269:9)\n    at Mangler.run (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/index.js:70:14)\n    at PluginPass.exit (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-plugin-minify-mangle-names/lib/index.js:589:19)\n    at newFn (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/visitors.js:276:21)\n    at NodePath._call (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/path/context.js:76:18)\n    at NodePath.call (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/path/context.js:48:17)\n    at NodePath.visit (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/path/context.js:117:8)\n    at TraversalContext.visitQueue (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/context.js:150:16)\n    at TraversalContext.visitSingle (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/context.js:108:19)\n    at TraversalContext.visit (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/context.js:192:19)\n    at Function.traverse.node (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/index.js:114:17)\n    at traverse (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-traverse/lib/index.js:79:12)\n    at File.transform (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-core/lib/transformation/file/index.js:548:35)\n    at /Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-core/lib/transformation/pipeline.js:50:19\n    at File.wrap (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-core/lib/transformation/file/index.js:564:16)\n    at Pipeline.transform (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-core/lib/transformation/pipeline.js:47:17)\n    at transpile (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-loader/lib/index.js:49:20)\n    at Object.module.exports (/Users/mackentoch/GitProjects/react-redux-immutable-webpack-ssr-starter/node_modules/babel-loader/lib/index.js:174:20)");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ })
/******/ ]);