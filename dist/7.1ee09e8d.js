webpackJsonp([7],{

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(139);

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(140)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/multiple-table-4.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 140:
/***/ function(module, exports) {

	module.exports = "<section><h2>多标题表格布局</h2>\n<hr>\n<h4>基础样式</h4>\n<br>\n<div class=\"multiple-table\">\n    <table>  \n        <thead>    \n            <tr>      \n                <th rowspan=\"2\">表头一</th>      \n                <th rowspan=\"2\">表头二</th>      \n                <th colspan=\"2\"><div>表头三</div></th>      \n                <th colspan=\"3\"><div>表头四</div></th>\n                <th rowspan=\"2\">表头五</th>     \n            </tr>    \n            <tr>      \n                <th>当月</th>      \n                <th>上月</th>      \n                <th>当月</th>      \n                <th>上月</th>      \n                <th>其他</th>      \n            </tr>  \n        </thead>  \n        <tbody>    \n            <tr>      \n                <td v-for=\"1 in 8\">第1行,第{{$index+1}}列</td> \n            </tr>    \n            <tr> \n                <td v-for=\"1 in 8\">第2行,第{{$index+1}}列</td> \n            </tr>    \n            <tr>      \n                <td v-for=\"1 in 8\">第3行,第{{$index+1}}列</td>   \n            </tr> \n        </tbody>\n    </table>\n</div>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"multiple-table\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span>&gt;</span>  \n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>    \n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">rowspan</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span>表头一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">rowspan</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span>表头二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">colspan</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>表头三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">colspan</span>=<span class=\"hljs-string\">\"3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>表头四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">rowspan</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span>表头五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>     \n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>    \n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span> // 此行中添加的是 向右合并的单元格的表头     \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span>&gt;</span>当月<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span>&gt;</span>上月<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span>&gt;</span>当月<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span>&gt;</span>上月<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span>&gt;</span>其他<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>      \n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>  \n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>  \n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>    \n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>      \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span> \n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>    \n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n            ...... 添加多行    \n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<p>rowspan=&quot;2&quot;  意思是向下合并两个单元格<br>\ncolspan=&quot;2&quot;  意思是向右合并两个单元格</p>\n</section>";

/***/ }

});