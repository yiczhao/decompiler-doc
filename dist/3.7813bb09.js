webpackJsonp([3],{

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144);

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/install-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = "<section><h1>简介</h1>\n<blockquote>\n<p><code class=\"ks-code-inline\">KS</code>库针是对前端<code class=\"ks-code-inline\">非编译型模式</code>开发的，提供了<code class=\"ks-code-inline\">loads</code>、 <code class=\"ks-code-inline\">component</code>、<code class=\"ks-code-inline\">directive</code>、<code class=\"ks-code-inline\">filter</code>等常用功能</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre class=\"ks-hljs\"><code>&lt;script src=<span class=\"hljs-string\">\"./ks/index.js\"</span>&gt;<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>    KS({\n        <span class=\"hljs-attr\">loads</span>:{\n            <span class=\"hljs-attr\">i18n</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/require-i18n/2.0.6/i18n'</span>,\n            <span class=\"hljs-attr\">bootstrap</span>:{\n                <span class=\"hljs-attr\">js</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.js'</span>,\n                <span class=\"hljs-attr\">css</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.css'</span>,\n            }\n        },\n        <span class=\"hljs-comment\">// kspath:'aa',</span>\n        components:[<span class=\"hljs-string\">'KsDatePicker'</span>,<span class=\"hljs-string\">'KsPage'</span>],\n        <span class=\"hljs-attr\">directives</span>:[<span class=\"hljs-string\">'KsLimitNumberFixed'</span>],\n        <span class=\"hljs-attr\">validator</span>:[<span class=\"hljs-string\">'#signupForm'</span>],\n        <span class=\"hljs-comment\">// filters:['cc'],</span>\n        data:{\n            <span class=\"hljs-attr\">max</span>:<span class=\"hljs-number\">10000</span>,\n            <span class=\"hljs-attr\">datepicker</span>:<span class=\"hljs-string\">'2011-10-10'</span>\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            <span class=\"hljs-attr\">sublime</span>:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n                alert(<span class=\"hljs-string\">'lll'</span>)\n            }\n        },\n        <span class=\"hljs-attr\">ready</span>:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n\n        }\n    })\n</code></pre>\n<h2>例子</h2>\n<p><code class=\"ks-code-inline\">actions</code> 属性绑定一个由对象组成的数组，每个对象有 <code class=\"ks-code-inline\">name</code> 和 <code class=\"ks-code-inline\">method</code> 两个键，<code class=\"ks-code-inline\">name</code> 为菜单项的文本，<code class=\"ks-code-inline\">method</code> 为点击该菜单项的回调函数。</p>\n<p>将 <code class=\"ks-code-inline\">v-model</code> 绑定到一个本地变量，通过操作这个变量即可控制 <code class=\"ks-code-inline\">actionsheet</code> 的显示与隐藏。</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">mt-actionsheet</span>\n  <span class=\"hljs-attr\">:actions</span>=<span class=\"hljs-string\">\"actions\"</span>\n  <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"sheetVisible\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">mt-actionsheet</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actions</td>\n<td>菜单项数组</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮的文本。若设为空字符串，则不显示取消按钮</td>\n<td>String</td>\n<td></td>\n<td>'取消'</td>\n</tr>\n<tr>\n<td>closeOnClickModal</td>\n<td>是否可以通过点击 modal 层来关闭 <code class=\"ks-code-inline\">actionsheet</code></td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});