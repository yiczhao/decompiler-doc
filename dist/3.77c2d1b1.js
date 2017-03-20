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

	module.exports = "<section><h1>简介</h1>\n<blockquote>\n<p><code class=\"ks-code-inline\">KS</code>库针是对前端<code class=\"ks-code-inline\">非编译型模式</code>开发的，提供了<code class=\"ks-code-inline\">loads</code>、 <code class=\"ks-code-inline\">component</code>、<code class=\"ks-code-inline\">directive</code>、<code class=\"ks-code-inline\">filter</code>等常用功能<br>\n<code class=\"ks-code-inline\">KS</code>库集成了<code class=\"ks-code-inline\">requirejs</code>的<code class=\"ks-code-inline\">AMD</code>模块加载机制，<code class=\"ks-code-inline\">VUE</code>双向绑定功能<br>\n参数中的<code class=\"ks-code-inline\">data</code>、<code class=\"ks-code-inline\">methods</code>、<code class=\"ks-code-inline\">created</code>、<code class=\"ks-code-inline\">ready</code>、<code class=\"ks-code-inline\">component</code>、<code class=\"ks-code-inline\">directive</code>、<code class=\"ks-code-inline\">filter</code>使用方式和<code class=\"ks-code-inline\">VUE</code>也保持一致<br>\n【<code class=\"ks-code-inline\">component</code>、<code class=\"ks-code-inline\">directive</code>、<code class=\"ks-code-inline\">filter</code>注入方式稍有不同】</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre class=\"ks-hljs\"><code>&lt;script src=<span class=\"hljs-string\">\"./ks/index.js\"</span>&gt;<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>    KS({\n        <span class=\"hljs-attr\">loads</span>:{\n            <span class=\"hljs-attr\">i18n</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/require-i18n/2.0.6/i18n'</span>,\n            <span class=\"hljs-attr\">bootstrap</span>:{\n                <span class=\"hljs-attr\">js</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.js'</span>,\n                <span class=\"hljs-attr\">css</span>:<span class=\"hljs-string\">'//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.css'</span>,\n            }\n        },\n        <span class=\"hljs-attr\">kspath</span>:<span class=\"hljs-string\">'./kspath'</span>,\n        <span class=\"hljs-attr\">components</span>:[<span class=\"hljs-string\">'KsDatePicker'</span>,<span class=\"hljs-string\">'KsPage'</span>],\n        <span class=\"hljs-attr\">directives</span>:[<span class=\"hljs-string\">'KsLimitNumberFixed'</span>],\n        <span class=\"hljs-attr\">validator</span>:[<span class=\"hljs-string\">'#signupForm'</span>],\n        <span class=\"hljs-attr\">filters</span>:[<span class=\"hljs-string\">'addPrefix'</span>],\n        <span class=\"hljs-attr\">data</span>:{\n            <span class=\"hljs-attr\">max</span>:<span class=\"hljs-number\">10000</span>,\n            <span class=\"hljs-attr\">datepicker</span>:<span class=\"hljs-string\">'2011-10-10'</span>\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            <span class=\"hljs-attr\">sublime</span>:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n                alert(<span class=\"hljs-string\">'lll'</span>)\n            }\n        },\n        <span class=\"hljs-attr\">ready</span>:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n\n        }\n    })\n</code></pre>\n<h2>API</h2>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>必选</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>loads</td>\n<td>加载外部库</td>\n<td>Object</td>\n<td>否</td>\n<td>无</td>\n</tr>\n<tr>\n<td>kspath</td>\n<td>KS组件模块路径</td>\n<td>String</td>\n<td>是</td>\n<td>/src/min/ks</td>\n</tr>\n<tr>\n<td>components</td>\n<td>页面中需要的组件（注入组件，会加载此库）</td>\n<td>Array</td>\n<td>否</td>\n<td></td>\n</tr>\n<tr>\n<td>directives</td>\n<td>页面中需要的指令（注入指令，会加载此库）</td>\n<td>Array</td>\n<td>否</td>\n<td></td>\n</tr>\n<tr>\n<td>filters</td>\n<td>页面中需要的过滤器（注入过滤器，会加载此库）</td>\n<td>Array</td>\n<td>否</td>\n<td></td>\n</tr>\n<tr>\n<td>data</td>\n<td>双向绑定到页面的值</td>\n<td>Object</td>\n<td>否</td>\n<td></td>\n</tr>\n<tr>\n<td>methods</td>\n<td>绑定到页面的方法</td>\n<td>Object</td>\n<td>否</td>\n<td></td>\n</tr>\n<tr>\n<td>ready</td>\n<td>页面渲染后调用</td>\n<td>Function</td>\n<td>否</td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>属性例子</h2>\n<h3><code class=\"ks-code-inline\">data</code> 属性（双向绑定到页面的值）</h3>\n<p>举个🌰 获取input的值：</p>\n<p>传统方式：</p>\n<hr>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"theInput\"</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">'theInput'</span>).value\nor\n$(<span class=\"hljs-string\">'#theInput'</span>)[<span class=\"hljs-number\">0</span>].value\n</code></pre>\n<p>VUE方式：</p>\n<hr>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"theInput\"</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>...\ndata:{\n    <span class=\"hljs-attr\">theInput</span>:<span class=\"hljs-string\">''</span>\n}\n...\n</code></pre>\n<p>此时 theInput 就绑定在VUE实例的scope中了，即可以在scope中调用</p>\n<pre class=\"ks-hljs\"><code>...\nmethods:{\n    <span class=\"hljs-attr\">getInputValue</span>:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-keyword\">this</span>.theInput)\n    }\n}\n...\n</code></pre>\n<h3><code class=\"ks-code-inline\">methods</code>属性（上面用到了）</h3>\n<p>methods：顾名思义，属性中的值为注入到scope上的方法<br>\n有可以在scope中调用</p>\n<pre class=\"ks-hljs\"><code>...\nready:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span></span>{\n    <span class=\"hljs-keyword\">this</span>.getInputValue()\n}\n...\n</code></pre>\n<p>可以以类似于DOM0级事件调用</p>\n<pre class=\"ks-hljs\"><code>    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"javascript:;\"</span> <span class=\"hljs-attr\">onclick</span>=<span class=\"hljs-string\">\"getInputValue()\"</span>&gt;</span>获取input的值<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n</code></pre>\n<p>VUE绑定用方式</p>\n<pre class=\"ks-hljs\"><code>    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"javascript:;\"</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"getInputValue\"</span>&gt;</span>获取input的值<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4>刚刚用到的 <code class=\"ks-code-inline\">v-model</code> 与 <code class=\"ks-code-inline\">v-on:click</code> 均为Vue上的内置指令</h4>\n<p>关于Vue更多使用方式：https://cn.vuejs.org<br>\nAPI 为1.0版本</p>\n</blockquote>\n</section>";

/***/ }

});