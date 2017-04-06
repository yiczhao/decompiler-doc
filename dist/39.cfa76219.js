webpackJsonp([39],{

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136);

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/table-4.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 137:
/***/ function(module, exports) {

	module.exports = "<section><h2>表格布局</h2>\n<hr>\n<h4>基础样式</h4>\n<br>\n<div class=\"table-striped\">\n    <table>\n        <tr>\n            <th v-for=\"1 in 12\">第{{$index+1}}列</th>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n    </table>\n</div>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table-striped\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">\"1 in 12\"</span>&gt;</span>第{{$index+1}}列<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span> \n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">\"1 in 12\"</span>&gt;</span>第1行,第{{$index+1}}列<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span> \n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>标题用&lt;th&gt;，普通单元格用&lt;td&gt;</p>\n</blockquote>\n</section>";

/***/ }

});