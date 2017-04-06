webpackJsonp([34],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(107)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _KHeader = __webpack_require__(108);

	var _KHeader2 = _interopRequireDefault(_KHeader);

	var _KMenu = __webpack_require__(112);

	var _KMenu2 = _interopRequireDefault(_KMenu);

	var _KFooter = __webpack_require__(116);

	var _KFooter2 = _interopRequireDefault(_KFooter);

	var _KCrumbs = __webpack_require__(118);

	var _KCrumbs2 = _interopRequireDefault(_KCrumbs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="ks-app">
	//         <k-header></k-header>
	//         <div class="ks-center">
	//             <k-menu></k-menu>
	//             <div class="ks-content" v-el:main-container>
	//                 <k-crumbs></k-crumbs>
	//                 <!-- <loading-mask></loading-mask> -->
	//                 <div class="ks-container-fluid">
	//                     <div class="container-box">
	//                         <router-view></router-view>
	//                     </div>
	//                     <k-footer></k-footer>
	//
	//                 </div>
	//                 <!-- <k-footer></k-footer> -->
	//             </div>
	//         </div>
	//     </div>
	//
	//
	//     <!-- <div>
	//         <k-header></k-header>
	//         <div class="ks-center">
	//             <k-menu></k-menu>
	//             <div class="ks-content" v-el:main-container>
	//                 <k-crumbs></k-crumbs>
	//                 <div class="ks-container-fluid">
	//                     <div class="router-wrap">
	//                         <router-view class="p20"></router-view>
	//                     </div>
	//                 </div>
	//                 <k-footer></k-footer>
	//             </div>
	//         </div>
	//     </div> -->
	// </template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {};
	    },


	    events: {
	        /**
	         * @description 错误处理处理
	         * @param message {String} 错误信息
	         */
	        errHandle: function errHandle(message) {
	            // 创建一个 dialog 实例
	            var dialog = this.$KsDialog.create({ container: '.work-container' });

	            dialog.show(message, '信息', 'danger')(function () {
	                return dialog.close();
	            });
	        },


	        /**
	         * @description 主容器滚动条是否显示
	         * @param sw
	         */
	        scrollSwitch: function scrollSwitch(sw) {
	            var container = this.$els.mainContainer;

	            if (sw) {
	                container.style.overflow = 'hidden';
	                container.scrollTop = 0;
	            } else {
	                container.style.overflow = '';
	            }
	        }
	    },

	    components: { KHeader: _KHeader2.default, KMenu: _KMenu2.default, KFooter: _KFooter2.default, KCrumbs: _KCrumbs2.default }
	};
	// </script>

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(109)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/core/KHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 109:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="ks-header">
	//         <div class="ks-name"><img class="logo" src="../../assets/logo/header-logo.png" alt="LOGO"></div>
	//         <div class="ks-user-info">用户名<a>退出</a></div>
	//     </div>
	// </template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {};
	    }
	};
	// </script>

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"ks-header\">\n    <div class=\"ks-name\"><img class=\"logo\" src=\"" + __webpack_require__(111) + "\" alt=\"LOGO\"></div>\n    <div class=\"ks-user-info\">用户名<a>退出</a></div>\n</div>\n";

/***/ },

/***/ 111:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(113)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/core/KMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _menu = __webpack_require__(114);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return { Menu: _menu2.default };
	    }
	};
	// </script>
	// <template>
	//     <nav class="ks-menu">
	//         <ul class="menu-once">
	//             <li v-for="mobj in Menu">
	//                 <span v-text="mobj.name"></span>
	//                 <ul class="menu-second">
	//                     <li  v-for="smobj in mobj.subMenu">
	//                         <i class="icon" :class="smobj.icon"></i>
	//                         <a v-link="{name: smobj.link}" 
	//                             :data-ksa="smobj.ksa"
	//                             v-text="smobj.name"></a>
	//                     </li>
	//                 </ul>
	//             </li>
	//         </ul>
	//     </nav>
	// </template>
	//
	// <script lang="babel">

/***/ },

/***/ 114:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @author: pkeros.
	 * @date: 2016/6/21.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	exports.default = [{
	    name: '开发指南 Guide',
	    subMenu: [{ name: '简介', icon: 'icon', link: 'install' }, { name: '快速上手', icon: 'icon', link: '' }]
	}, {
	    name: '基础布局',
	    subMenu: [{ name: 'layout 布局', icon: 'icon', link: 'layout' }, { name: 'button组件样式', icon: 'icon', link: 'button' }, { name: 'Table 表格样式', icon: 'icon', link: 'table' }, { name: '多标题表格样式', icon: 'icon', link: 'multiple-table' }]
	}, {
	    name: '内容布局',
	    subMenu: [{ name: '整体表单样式', icon: 'icon', link: 'overall' }, { name: '表单验证样式', icon: 'icon', link: 'form-validate' }, { name: '搜索条件样式', icon: 'icon', link: 'search' }, { name: '表格管理页面布局', icon: 'icon', link: 'table-manage' }, { name: '查看图片组件调用', icon: 'icon', link: 'view-image' }]
	}, {
	    name: '验证 Validate',
	    subMenu: [{ name: '简介', icon: 'icon', link: 'briefIntroduction' }, { name: '了解规则', icon: 'icon', link: 'understandingRules' }, { name: 'DOM 绑定', icon: 'icon', link: 'domBindings' }, { name: '方法 & 事件', icon: 'icon', link: 'methodAndEvent' }, { name: 'demo 示例', icon: 'icon', link: 'validatorDemo' }]
	}, {
	    name: '日志 Log',
	    subMenu: [{ name: '更新日志', icon: 'icon', link: 'update' }]
	}];

/***/ },

/***/ 115:
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"ks-menu\">\n    <ul class=\"menu-once\">\n        <li v-for=\"mobj in Menu\">\n            <span v-text=\"mobj.name\"></span>\n            <ul class=\"menu-second\">\n                <li  v-for=\"smobj in mobj.subMenu\">\n                    <i class=\"icon\" :class=\"smobj.icon\"></i>\n                    <a v-link=\"{name: smobj.link}\" \n                        :data-ksa=\"smobj.ksa\"\n                        v-text=\"smobj.name\"></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</nav>\n";

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/core/KFooter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-footer\">\n\t<div class=\"company\"> \n\t\t<a class=\"a-t\" href=\"http://www.kashuo.com\">@kashuo.com</a> \n\t</div> \n\t<div class=\"about-us\"> \n\t\t<a href=\"http://www.kashuo.com/\">关于卡说</a><span>|</span>\n\t\t<a href=\"#\">服务协议</a><span>|</span> \n\t\t<a href=\"#\">使用教程</a><span>|</span> \n\t\t<a href=\"#\">客服中心</a><span>|</span> \n\t\t<a href=\"#\">联系我们</a>\n\t</div>\n</div>\n";

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(119)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KCrumbs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(120)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/core/KCrumbs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 119:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="ks-breadcrumb">
	//         <template v-for="path in routePath" track-by="$index">
	//             <a v-text="path.cn"></a><span v-if="routePath.length - 1 !== $index">&nbsp;/&nbsp;</span>
	//         </template>
	//     </div>
	// </template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {
	            routePath: []
	        };
	    },

	    methods: {
	        /**
	         * @description 路由变换处理函数
	         * @summary 负责监控路由变换更新 面包屑信息
	        */
	        hashChangeHandle: function hashChangeHandle() {
	            var _this = this;

	            setTimeout(function () {
	                var matched = _this.$route.matched;
	                var matchedLength = matched.length;
	                var arr = [];

	                for (var i = 0; i < matchedLength; i++) {
	                    arr.push({ cn: matched[i].handler.cnName, route: matched[i].handler.name });
	                }
	                _this.$set('routePath', arr);
	            }, 77);
	        }
	    },
	    created: function created() {
	        // 初始化面包屑
	        this.hashChangeHandle();

	        window.addEventListener('hashchange', this.hashChangeHandle.bind(this));
	    },
	    destroy: function destroy() {
	        window.removeEventListener('hashchange', this.hashChangeHandle);
	    }
	};
	// </script>

/***/ },

/***/ 120:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-breadcrumb\">\n    <template v-for=\"path in routePath\" track-by=\"$index\">\n        <a v-text=\"path.cn\"></a><span v-if=\"routePath.length - 1 !== $index\">&nbsp;/&nbsp;</span>\n    </template>\n</div>\n";

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-app\">\n    <k-header></k-header>\n    <div class=\"ks-center\">\n        <k-menu></k-menu>\n        <div class=\"ks-content\" v-el:main-container>\n            <k-crumbs></k-crumbs>\n            <!-- <loading-mask></loading-mask> -->\n            <div class=\"ks-container-fluid\">\n                <div class=\"container-box\">\n                    <router-view></router-view>\n                </div>\n                <k-footer></k-footer>\n                \n            </div>\n            <!-- <k-footer></k-footer> -->\n        </div>\n    </div>\n</div>\n\n\n<!-- <div>\n    <k-header></k-header>\n    <div class=\"ks-center\">\n        <k-menu></k-menu>\n        <div class=\"ks-content\" v-el:main-container>\n            <k-crumbs></k-crumbs>\n            <div class=\"ks-container-fluid\">\n                <div class=\"router-wrap\">\n                    <router-view class=\"p20\"></router-view>\n                </div>\n            </div>\n            <k-footer></k-footer>\n        </div>\n    </div>\n</div> -->\n";

/***/ }

});