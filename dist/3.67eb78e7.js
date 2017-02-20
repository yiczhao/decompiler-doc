webpackJsonp([3],{

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(85);

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/install-2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = "<section><h1>安装</h1>\n<blockquote>\n<p><code class=\"ks-code-inline\">actions</code> 属性绑定一个由对象组成的数组，每个对象有 <code class=\"ks-code-inline\">name</code> 和 <code class=\"ks-code-inline\">method</code> 两个键，<code class=\"ks-code-inline\">name</code> 为菜单项的文本，<code class=\"ks-code-inline\">method</code> 为点击该菜单项的回调函数。<br>\n将 <code class=\"ks-code-inline\">v-model</code> 绑定到一个本地变量，通过操作这个变量即可控制 <code class=\"ks-code-inline\">actionsheet</code> 的显示与隐藏。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { Actionsheet } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mint-ui'</span>;\n\nVue.component(Actionsheet.name, Actionsheet);\n</code></pre>\n<h2>例子</h2>\n<p><code class=\"ks-code-inline\">actions</code> 属性绑定一个由对象组成的数组，每个对象有 <code class=\"ks-code-inline\">name</code> 和 <code class=\"ks-code-inline\">method</code> 两个键，<code class=\"ks-code-inline\">name</code> 为菜单项的文本，<code class=\"ks-code-inline\">method</code> 为点击该菜单项的回调函数。</p>\n<p>将 <code class=\"ks-code-inline\">v-model</code> 绑定到一个本地变量，通过操作这个变量即可控制 <code class=\"ks-code-inline\">actionsheet</code> 的显示与隐藏。</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">mt-actionsheet</span>\n  <span class=\"hljs-attr\">:actions</span>=<span class=\"hljs-string\">\"actions\"</span>\n  <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"sheetVisible\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">mt-actionsheet</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actions</td>\n<td>菜单项数组</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮的文本。若设为空字符串，则不显示取消按钮</td>\n<td>String</td>\n<td></td>\n<td>'取消'</td>\n</tr>\n<tr>\n<td>closeOnClickModal</td>\n<td>是否可以通过点击 modal 层来关闭 <code class=\"ks-code-inline\">actionsheet</code></td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});