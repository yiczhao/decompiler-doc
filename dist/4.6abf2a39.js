webpackJsonp([4],{

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130);

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/layout-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = "<section><h2>基础布局</h2>\n<blockquote>\n<p>底层的样式模板，公用头尾菜单正问布局。</p>\n</blockquote>\n<hr>\n<h3>样式展示</h3>\n<p>参照当前页面的布局样式</p>\n<br>\n<h3>基础使用</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"app\"</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- 页头 --&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-header\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-name\"</span>&gt;</span>这里是头部标题logo<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-user-info\"</span>&gt;</span>用户名<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- 中部 --&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-center\"</span>&gt;</span>\n        <span class=\"hljs-comment\">&lt;!-- 左侧导航 --&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-menu\"</span>&gt;</span>\n            <span class=\"hljs-comment\">&lt;!-- 一级导航 --&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"menu-once\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">v-link</span>=<span class=\"hljs-string\">\"{name:'home'}\"</span>&gt;</span>首页<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>内容布局<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                    <span class=\"hljs-comment\">&lt;!-- 二级导航 --&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"menu-second\"</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">v-link</span>=<span class=\"hljs-string\">\"{name:'table'}\"</span>&gt;</span>二级导航<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-comment\">&lt;!-- 主体内容 --&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-content\"</span>&gt;</span>\n            <span class=\"hljs-comment\">&lt;!-- 面包屑 --&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-breadcrumb\"</span>&gt;</span>\n                面包屑\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-comment\">&lt;!-- 右侧内容区 --&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-container-fluid\"</span>&gt;</span>\n                正文内容\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-comment\">&lt;!-- 页脚 --&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-footer\"</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"company\"</span>&gt;</span> \n                    底部右侧内容 \n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span> \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"about-us\"</span>&gt;</span> \n                    底部左侧内容\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n</section>";

/***/ }

});