webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _vue = __webpack_require__(5);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(30);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(31);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _vueValidator = __webpack_require__(55);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	var _router = __webpack_require__(56);

	var _router2 = _interopRequireDefault(_router);

	var _utils = __webpack_require__(111);

	var _utils2 = _interopRequireDefault(_utils);

	var _directives = __webpack_require__(135);

	var _directives2 = _interopRequireDefault(_directives);

	var _filters = __webpack_require__(147);

	var _filters2 = _interopRequireDefault(_filters);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description application main logic file.
	 * @author pkeros
	 * @data 16/6/1
	 * @email pkeros@vip.qq.com
	 */
	__webpack_require__(150);


	// Vue configure
	_vue2.default.config.debug = process.env.NODE_ENV !== 'production';

	// attach plugin.
	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueValidator2.default);

	// attach utils
	_vue2.default.use(_utils2.default);
	_vue2.default.use(_filters2.default);
	_vue2.default.use(_directives2.default);

	// router configure.
	var router = new _vueRouter2.default({
	  history: false,
	  hashbang: true,
	  saveScrollPosition: true,
	  suppressTransitionError: true
	});
	(0, _router2.default)(router);

	var app = _vue2.default.extend(_App2.default);
	router.start(app, '#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(3)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/App.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(4);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {};
	  },

	  store: _store2.default
	};
	// </script>
	// <script lang="babel">

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(5);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(6);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _middlewares = __webpack_require__(7);

	var _middlewares2 = _interopRequireDefault(_middlewares);

	var _ajax = __webpack_require__(9);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author: pkeros.
	 * @date: 2016/6/6.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	_vue2.default.use(_vuex2.default);

	exports.default = new _vuex2.default.Store({
	  strict: _vue2.default.config.debug,
	  modules: {
	    ajax: _ajax2.default
	  },
	  middlewares: [_middlewares2.default]
	});

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logger = __webpack_require__(8);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = (0, _logger2.default)({
	  collapsed: false,
	  transformer: function transformer(state) {
	    return state.subTree;
	  },
	  mutationTransformer: function mutationTransformer(mutation) {
	    return mutation.type;
	  }
	}); /**
	     * @author: pkeros.
	     * @date: 2016/6/7.
	     * @mail: pkeros@vip.qq.com
	     * @see: https://www.github.com/pkeros/
	     */

	exports.default = process.env.NODE_ENV !== 'production' ? [logger] : [];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	// Credits: borrowed code from fcomb/redux-logger

	function createLogger() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref$collapsed = _ref.collapsed;
	  var collapsed = _ref$collapsed === undefined ? true : _ref$collapsed;
	  var _ref$transformer = _ref.transformer;
	  var transformer = _ref$transformer === undefined ? function (state) {
	    return state;
	  } : _ref$transformer;
	  var _ref$mutationTransfor = _ref.mutationTransformer;
	  var mutationTransformer = _ref$mutationTransfor === undefined ? function (mut) {
	    return mut;
	  } : _ref$mutationTransfor;

	  return {
	    snapshot: true,
	    onMutation: function onMutation(mutation, nextState, prevState) {
	      if (typeof console === 'undefined') {
	        return;
	      }
	      var time = new Date();
	      var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
	      var formattedMutation = mutationTransformer(mutation);
	      var message = 'mutation ' + mutation.type + formattedTime;
	      var startMessage = collapsed ? console.groupCollapsed : console.group;

	      // render
	      try {
	        startMessage.call(console, message);
	      } catch (e) {
	        console.log(message);
	      }

	      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	      console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
	      console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

	      try {
	        console.groupEnd();
	      } catch (e) {
	        console.log('—— log end ——');
	      }
	    }
	  };
	}

	function repeat(str, times) {
	  return new Array(times + 1).join(str);
	}

	function pad(num, maxLength) {
	  return repeat('0', maxLength - num.toString().length) + num;
	}

	module.exports = createLogger;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mutations = undefined;

	var _defineProperty2 = __webpack_require__(10);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations; /**
	                 * @author: pkeros.
	                 * @date: 2016/6/7.
	                 * @mail: pkeros@vip.qq.com
	                 * @see: https://www.github.com/pkeros/
	                 */

	var _mutationTypes = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// initial state
	var state = {
	  waitRequest: 0
	};

	var mutations = exports.mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.AJAX_REQUEST, function (state) {
	  state.waitRequest += 1;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.AJAX_RESPONSE, function (state) {
	  state.waitRequest -= 1;
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(11);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author: pkeros.
	 * @date: 2016/6/6.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	// *** Ajax 部分
	var AJAX_REQUEST = exports.AJAX_REQUEST = 'AJAX_REQUEST';
	var AJAX_RESPONSE = exports.AJAX_RESPONSE = 'AJAX_RESPONSE';

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * @description application router file.
	 * @author pkeros
	 * @data 16/6/1
	 * @email pkeros@vip.qq.com
	 */

	exports.default = function (router) {

	  // 路由映射
	  router.map({

	    /* 主页 */
	    '/': {
	      name: 'index',
	      cnName: '主页',
	      component: function component(resolve) {
	        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(57)]; (function (res) {
	          resolve(res);
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	      },

	      subRoutes: {

	        /* 欢迎页面 */
	        '/': {
	          name: 'welcome',
	          cnName: '欢迎页面',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(80)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }
	        },

	        /* 开发指南-安装 */
	        '/install': {
	          name: 'install',
	          cnName: '安装',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(84)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }
	        },

	        /* 基础组件 */
	        '/base': {
	          name: 'base',
	          cnName: '基础组件',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(87)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-布局 */
	            '/layout': {
	              name: 'layout',
	              cnName: '布局',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(90)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-按钮 */
	            '/button': {
	              name: 'button',
	              cnName: '按钮',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(93)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },
	        /* form */
	        '/form': {
	          name: 'form',
	          cnName: '表单',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(97)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-布局 */
	            '/datepicker': {
	              name: 'datepicker',
	              cnName: '布局',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(100)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },
	        /* data */
	        '/data': {
	          name: 'data',
	          cnName: '数据展示',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(104)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-布局 */
	            '/page': {
	              name: 'page',
	              cnName: '分页',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(10, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(107)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        }

	      }
	    }
	  });
	};

/***/ },
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperties = __webpack_require__(112);

	var _defineProperties2 = _interopRequireDefault(_defineProperties);

	var _Cookie = __webpack_require__(131);

	var _Cookie2 = _interopRequireDefault(_Cookie);

	var _Util = __webpack_require__(134);

	var _Util2 = _interopRequireDefault(_Util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description 工具方法.
	 * @author pkeros
	 * @data 2016/12/8
	 * @email pkeros@vip.qq.com
	 */

	var install = function install(Vue) {
	  if (install.installed) {
	    return;
	  }

	  (0, _defineProperties2.default)(Vue.prototype, {
	    $cookie: {
	      get: function get() {
	        return _Cookie2.default;
	      }
	    },
	    $utils: {
	      get: function get() {
	        return _Util2.default;
	      }
	    }
	  });
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = install;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperties(T, D){
	  return $Object.defineProperties(T, D);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperties: __webpack_require__(115)});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(116);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(117)
	  , enumBugKeys = __webpack_require__(130);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(118)
	  , toIObject    = __webpack_require__(119)
	  , arrayIndexOf = __webpack_require__(123)(false)
	  , IE_PROTO     = __webpack_require__(127)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(120)
	  , defined = __webpack_require__(122);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(121);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(119)
	  , toLength  = __webpack_require__(124)
	  , toIndex   = __webpack_require__(126);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(125)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(125)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(128)('keys')
	  , uid    = __webpack_require__(129);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(132);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(133);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author: pkeros.
	 * @date: 2016/6/28.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	/**
	 * @description cookie operation class
	 */
	exports.default = function () {
	  var decode = decodeURIComponent;
	  var encode = encodeURIComponent;

	  // Helpers
	  function isString(o) {
	    return typeof o === 'string';
	  }

	  function isNonEmptyString(s) {
	    return isString(s) && s !== '';
	  }

	  function validateCookieName(name) {
	    if (!isNonEmptyString(name)) {
	      throw new TypeError('Cookie name must be a non-empty string');
	    }
	  }

	  function same(s) {
	    return s;
	  }

	  function parseCookieString(text, shouldDecode) {
	    var cookies = {};

	    if (isString(text) && text.length > 0) {
	      var decodeValue = shouldDecode ? decode : same;
	      var cookieParts = text.split(/;\s/g);
	      var cookieName = void 0;
	      var cookieValue = void 0;
	      var cookieNameValue = void 0;

	      for (var i = 0, len = cookieParts.length; i < len; i++) {
	        // Check for normally-formatted cookie (name-value)
	        cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
	        if (cookieNameValue instanceof Array) {
	          try {
	            cookieName = decode(cookieNameValue[1]);
	            cookieValue = decodeValue(cookieParts[i].substring(cookieNameValue[1].length + 1));
	          } catch (ex) {
	            // Intentionally ignore the cookie -
	            // the encoding is wrong
	          }
	        } else {
	          // Means the cookie does not have an "=", so treat it as
	          // a boolean flag
	          cookieName = decode(cookieParts[i]);
	          cookieValue = '';
	        }

	        if (cookieName) {
	          cookies[cookieName] = cookieValue;
	        }
	      }
	    }

	    return cookies;
	  }

	  return function () {
	    function Cookie() {
	      (0, _classCallCheck3.default)(this, Cookie);
	    }

	    (0, _createClass3.default)(Cookie, null, [{
	      key: 'get',

	      /**
	       * Returns the cookie value for the given name.
	       *
	       * @param {String} name The name of the cookie to retrieve.
	       *
	       * @param {Function|Object} options (Optional) An object containing one or
	       *     more cookie options: raw (true/false) and converter (a function).
	       *     The converter function is run on the value before returning it. The
	       *     function is not used if the cookie doesn't exist. The function can be
	       *     passed instead of the options object for conveniently. When raw is
	       *     set to true, the cookie value is not URI decoded.
	       *
	       * @return {*} If no converter is specified, returns a string or undefined
	       *     if the cookie doesn't exist. If the converter is specified, returns
	       *     the value returned from the converter.
	       */
	      value: function get(name, options) {
	        validateCookieName(name);

	        if (typeof options === 'function') {
	          options = { converter: options };
	        } else {
	          options = options || {};
	        }

	        var cookies = parseCookieString(document.cookie, !options['raw']);
	        return (options.converter || same)(cookies[name]);
	      }
	      /**
	       * Sets a cookie with a given name and value.
	       *
	       * @param {string} name The name of the cookie to set.
	       *
	       * @param {*} value The value to set for the cookie.
	       *
	       * @param {Object} options (Optional) An object containing one or more
	       *     cookie options: path (a string), domain (a string),
	       *     expires (number or a Date object), secure (true/false),
	       *     and raw (true/false). Setting raw to true indicates that the cookie
	       *     should not be URI encoded before being set.
	       *
	       * @return {string} The created cookie string.
	       */

	    }, {
	      key: 'set',
	      value: function set(name, value, options) {
	        validateCookieName(name);

	        options = options || {};
	        var expires = options['expires'];
	        var domain = options['domain'];
	        var path = options['path'];

	        if (!options['raw']) {
	          value = encode(String(value));
	        }

	        var text = name + '=' + value;

	        // expires
	        var date = expires;
	        if (typeof date === 'number') {
	          date = new Date();
	          date.setDate(date.getDate() + expires);
	        }
	        if (date instanceof Date) {
	          text += '; expires=' + date.toUTCString();
	        }

	        // domain
	        if (isNonEmptyString(domain)) {
	          text += '; domain=' + domain;
	        }

	        // path
	        if (isNonEmptyString(path)) {
	          text += '; path=' + path;
	        }

	        // secure
	        if (options['secure']) {
	          text += '; secure';
	        }

	        document.cookie = text;
	        return text;
	      }
	    }, {
	      key: 'remove',


	      /**
	       * Removes a cookie from the machine by setting its expiration date to
	       * sometime in the past.
	       *
	       * @param {string} name The name of the cookie to remove.
	       *
	       * @param {Object} options (Optional) An object containing one or more
	       *     cookie options: path (a string), domain (a string),
	       *     and secure (true/false). The expires option will be overwritten
	       *     by the method.
	       *
	       * @return {string} The created cookie string.
	       */
	      value: function remove(name, options) {
	        options = options || {};
	        options['expires'] = new Date(0);
	        return this.set(name, '', options);
	      }
	    }]);
	    return Cookie;
	  }();
	}();

/***/ },
/* 132 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(11);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author: pkeros.
	 * @date: 2016/7/4.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	exports.default = {
	  /**
	    * @description 生成 UUID
	    * @returns {string} 生成的 UUID
	    */
	  createUUID: function createUUID() {
	    var s = [];
	    var hexDigits = '0123456789abcdef';
	    for (var i = 0; i < 36; i++) {
	      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	    }
	    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
	    s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	    s[8] = s[13] = s[18] = s[23] = '-';

	    return s.join('');
	  },


	  /**
	   * @description 从 URL 上获取参数
	   * @param name 参数名
	   * @returns {String} 参数值
	   */
	  getQueryString: function getQueryString(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return decodeURIComponent(r[2]);return null;
	  },


	  /**
	   * @description 合并选项
	   * @param target 需要合并的目标
	   * @return {*} 目标
	   */
	  merge: function merge(target) {
	    for (var i = 1, j = arguments.length; i < j; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (source.hasOwnProperty(prop)) {
	          var value = source[prop];
	          if (value !== undefined) {
	            target[prop] = value;
	          }
	        }
	      }
	    }

	    return target;
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Directives = undefined;

	var _keys = __webpack_require__(136);

	var _keys2 = _interopRequireDefault(_keys);

	var _limitInputNumber = __webpack_require__(141);

	var _limitInputNumber2 = _interopRequireDefault(_limitInputNumber);

	var _limitNumberFixed = __webpack_require__(142);

	var _limitNumberFixed2 = _interopRequireDefault(_limitNumberFixed);

	var _clickOutside = __webpack_require__(146);

	var _clickOutside2 = _interopRequireDefault(_clickOutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Directives = {
	  limitInputNumber: _limitInputNumber2.default,
	  limitNumberFixed: _limitNumberFixed2.default,
	  clickOutside: _clickOutside2.default
	};

	var install = function install(Vue) {
	  if (install.installed) {
	    return;
	  }

	  // register components.
	  (0, _keys2.default)(Directives).forEach(function (k) {
	    Vue.directive(k, Directives[k]);
	  });
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = install;
	exports.Directives = Directives;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	module.exports = __webpack_require__(16).Object.keys;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(139)
	  , $keys    = __webpack_require__(116);

	__webpack_require__(140)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(122);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(16)
	  , fails   = __webpack_require__(25);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 限制只能输入为数字的指令
	 * @author: pkeros.
	 * @date: 2016/9/7.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	/**
	 * @summary 该指令可以限制输入只能为数字，以及范围的限制
	 * e.g: v-limit-input-number={min~max}
	 */

	exports.default = {
	  handle: function handle(e) {
	    // ASCII 32 以下都是特殊字符
	    if (e.keyCode < 32) {
	      return;
	    }

	    var _ZJArgs = this.ZJArgs,
	        min = _ZJArgs.min,
	        max = _ZJArgs.max;

	    var el = this.el;
	    var elValue = el.value << 0;

	    switch (true) {
	      case elValue < min:
	        el.value = min;
	        break;
	      case elValue > max:
	        el.value = max;
	        break;
	      default:
	        el.value = elValue;
	    }
	  },
	  bind: function bind() {
	    var el = this.el;
	    var args = this.expression.split('~');

	    this.ZJArgs = { min: args[0] << 0, max: args[1] << 0 };
	    el.setAttribute('maxlength', args[1].length);
	    el.addEventListener('keyup', this.handle.bind(this));
	  },
	  unbind: function unbind() {
	    this.el.removeEventListener('click', this.handle);
	  }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNan = __webpack_require__(143);

	var _isNan2 = _interopRequireDefault(_isNan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description 限制只能输入为数字的指令
	 * @author: pkeros.
	 * @date: 2016/9/7.
	 */

	/**
	 * @summary 该指令可以限制输入只能为数字，以及范围的限制
	 * e.g: v-limit-input-number={min~max}
	 */

	exports.default = {
	  handle: function handle(e) {
	    // ASCII 32 以下都是特殊字符
	    if (e.keyCode < 32) {
	      return;
	    }

	    var _ZJArgs = this.ZJArgs,
	        min = _ZJArgs.min,
	        max = _ZJArgs.max;

	    var el = this.el;
	    var parseValue = parseFloat(el.value);

	    if (el.value.toString().indexOf('.') === -1 || this.countChar(el.value.toString(), '.') > 1) {
	      if ((0, _isNan2.default)(parseValue)) {
	        el.value = '1.0';
	        parseValue = 1.0;
	      }

	      switch (true) {
	        case parseValue < min:
	          el.value = min;
	          break;
	        case parseValue > max:
	          el.value = max;
	          break;
	        default:
	          el.value = parseValue;
	      }
	    }
	  },
	  countChar: function countChar(string, char) {
	    var count = 0;
	    for (var i = 0; i < string.length; i++) {
	      if (string.charAt(i) === char) count++;
	    }
	    return count;
	  },
	  bind: function bind() {
	    var el = this.el;

	    this.ZJArgs = { min: 1.0, max: 9.9 };
	    el.addEventListener('keyup', this.handle.bind(this));
	  },
	  unbind: function unbind() {
	    this.el.removeEventListener('click', this.handle);
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	module.exports = __webpack_require__(16).Number.isNaN;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(14);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 点击元素外面才会触发的事件.
	 * @author pkeros.
	 * @date 2016/11/11.
	 * @example
	 * ```vue
	 * <div v-ks-click-outside="handleClose">
	 * ```
	 */

	var DomUtil = {
	  on: function on(el, event, cb, useCapture) {
	    el.addEventListener(event, cb, useCapture);
	  },
	  off: function off(el, event, cb) {
	    el.removeEventListener(event, cb);
	  }
	};
	var clickOutsideContext = '@@clickOutsideContext';

	exports.default = {
	  bind: function bind() {
	    var me = this;

	    var documentHandler = function documentHandler(e) {
	      var handler = me.vm[me[clickOutsideContext].methodName];

	      if (handler && !me.el.contains(e.target)) {
	        handler();
	      }
	    };

	    me[clickOutsideContext] = {
	      documentHandler: documentHandler,
	      methodName: me.expression
	    };
	    DomUtil.on(document, 'click', documentHandler);
	  },
	  update: function update() {
	    this[clickOutsideContext].methodName = this.expression;
	  },
	  unbind: function unbind() {
	    DomUtil.off(document, 'click', this[clickOutsideContext].documentHandler);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Filter = undefined;

	var _keys = __webpack_require__(136);

	var _keys2 = _interopRequireDefault(_keys);

	var _filterTrim = __webpack_require__(148);

	var _filterTrim2 = _interopRequireDefault(_filterTrim);

	var _toDate = __webpack_require__(149);

	var _toDate2 = _interopRequireDefault(_toDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Filter = {
	  filterTrim: _filterTrim2.default,
	  toDate: _toDate2.default
	};

	var install = function install(Vue) {
	  if (install.installed) {
	    return;
	  }

	  // register components.
	  (0, _keys2.default)(Filter).forEach(function (k) {
	    Vue.filter(k, Filter[k]);
	  });
	};

	// automation register filters.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = install;
	exports.Filter = Filter;

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author: pkeros.
	 * @date: 2016/5/24.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	exports.default = {
	  write: function write(val) {
	    return ('' + val).trim();
	  }
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 将时间戳转换为日期.
	 * @author pkeros
	 * @data 2016/12/14
	 * @email pkeros@vip.qq.com
	 */

	/**
	 * @description 时间戳不够补0
	 * @param time {String/Number}
	 * @return {String}
	 */
	function format(time) {
	  return time >= 10 ? time : '0' + time;
	}

	exports.default = {
	  read: function read(val) {
	    var date = new Date(val);

	    return format(date.getFullYear()) + '-' + format(date.getMonth() + 1) + '-' + format(date.getDate()) + ' \n            ' + format(date.getHours()) + ':' + format(date.getMinutes()) + ':' + format(date.getSeconds());
	  }
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);