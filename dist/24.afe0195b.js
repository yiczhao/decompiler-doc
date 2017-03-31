webpackJsonp([24],{

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(198);

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/domBindings-18.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 199:
/***/ function(module, exports) {

	module.exports = "<section><h2>DOM 绑定（DOM Bindings）</h2>\n<hr>\n<h3>针对表单的绑定</h3>\n<br>\n<p><b>示例：</b>在form 上绑定 data-validator-option 来配置参数</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">'{stopOnError:false, timely:2, theme:\"yellow_right\"}'</span>&gt;</span>\n    ......\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<p><b>示例：</b>在 form 上绑定 novalidate，使其不要自动初始化</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">novalidate</span>&gt;</span>\n    ......\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<h3>针对表单元素的绑定</h3>\n<br>\n<h4>配置在字段元素上</h4>\n<ol>\n  <li>data-rule - 给字段配置规则</li>\n  <li>data-rule-* - 给字段自定义规则</li>\n  <li>data-msg - 字段验证不通过时的提示</li>\n  <li>data-msg-* - 字段具体规则验证不通过时的提示</li>\n  <li>data-tip - 字段填写帮助</li>\n  <li>data-ok - 字段验证通过时的提示</li>\n  <li>data-target - 配置提示消息的显示位置</li>\n  <li>data-timely - 配置验证的实时性 (v0.8.0+)</li>\n  <li>data-must - 是否强制验证 (v0.8.0+)</li>\n  <li>novalidate - 如果配置则停止验证该字段</li>\n</ol>\n<br>\n<p><b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwd\"</span> \n    <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required; password\"</span>\n    <span class=\"hljs-attr\">data-rule-password</span>=<span class=\"hljs-string\">\"[/^\\d{6}$/, '请填写6位数字']\"</span>\n    <span class=\"hljs-attr\">data-msg-required</span>=<span class=\"hljs-string\">\"请填写密码\"</span>\n    <span class=\"hljs-attr\">data-tip</span>=<span class=\"hljs-string\">\"密码由6位数字组成\"</span>\n    <span class=\"hljs-attr\">data-ok</span>=<span class=\"hljs-string\">\"别担心，稍后您还可以更改\"</span>\n    <span class=\"hljs-attr\">data-target</span>=<span class=\"hljs-string\">\"#msg_holder\"</span>\n&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"msg-box\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"msg_holder\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n</code></pre>\n<h4>配置在 submit 按钮</h4>\n<p>formnovalidate - 点击配置了该属性后的按钮不会验证表单</p>\n<p><b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- some fields --&gt;</span>\n    ........\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">formnovalidate</span>&gt;</span>提交<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n</section>";

/***/ }

});