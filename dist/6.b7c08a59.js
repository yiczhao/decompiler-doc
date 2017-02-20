webpackJsonp([6],{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94);

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(95)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/button-3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/button-3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Button 按钮</h2>
	// <blockquote>
	// <p>常用的操作按钮，触发业务逻辑时使用。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>按钮类型</h4>
	// <select class="mr20" name="btnType" v-model="btnType">
	//   <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
	// </select><ks-button :type="btnType">按钮类型</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"btnType"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"btnType"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"type in btnTypeMapper"</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"type"</span> <span class="hljs-attr">v-text</span>=<span class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"btnType"</span>&gt;</span>按钮类型<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>按钮大小</h4>
	// <select class="mr20" name="btnSize" v-model="btnSize">
	//   <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
	// </select><ks-button :size="btnSize">按钮大小</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"btnSize"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"btnSize"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"size in btnSizeMapper"</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"size"</span> <span class="hljs-attr">v-text</span>=<span class="hljs-string">"size"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">"btnSize"</span>&gt;</span>按钮大小<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>幽灵按钮</h4>
	// <p><ks-button :ghost="true">幽灵按钮</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:ghost</span>=<span class="hljs-string">"true"</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>加载按钮</h4>
	// <p><ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch><ks-button :loading="btnSwitch">幽灵按钮</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"btnSwitch"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"btnSwitch"</span>&gt;</span>加载按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>按钮禁用</h4>
	// <p><ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch><ks-button :disable="btnDisable">按钮禁用</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"btnDisable"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:disable</span>=<span class="hljs-string">"btnDisable"</span>&gt;</span>按钮禁用<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"babel"</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">let</span> btnTypeMapper = [
	//     <span class="hljs-string">'primary'</span>,
	//     <span class="hljs-string">'success'</span>,
	//     <span class="hljs-string">'info'</span>,
	//     <span class="hljs-string">'warn'</span>,
	//     <span class="hljs-string">'danger'</span>,
	//     <span class="hljs-string">'other'</span>
	//   ];
	//
	//   <span class="hljs-keyword">let</span> btnSizeMapper = [
	//     <span class="hljs-string">'normal'</span>,
	//     <span class="hljs-string">'middle'</span>,
	//     <span class="hljs-string">'large'</span>
	//   ];
	//
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         btnTypeMapper,
	//         btnSizeMapper,
	//
	//         <span class="hljs-attr">btnSwitch</span>: <span class="hljs-literal">false</span>,
	//         <span class="hljs-attr">btnDisable</span>: <span class="hljs-literal">false</span>,
	//         <span class="hljs-attr">btnType</span>: <span class="hljs-string">'primary'</span>,
	//         <span class="hljs-attr">btnSize</span>: <span class="hljs-string">'normal'</span>
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>type</td>
	// <td>用来描述按钮的类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>primary</strong>, <strong>success</strong>, <strong>info</strong>, <strong>warn</strong>, <strong>danger</strong>, <strong>other</strong></td>
	// <td>primary</td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>用来描述按钮的大小</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>normal</strong>, <strong>middle</strong>, <strong>large</strong></td>
	// <td>normal</td>
	// </tr>
	// <tr>
	// <td>ghost</td>
	// <td>用来描述按钮是否是 <code class="ks-code-inline">幽灵</code> 类型按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>loading</td>
	// <td>同步属性，用来控制按钮是否是加载状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>disable</td>
	// <td>用来描述按钮是禁用</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>nativeType</td>
	// <td>用来描述按钮原生类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">button</code></td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script lang="babel">
	var btnTypeMapper = ['primary', 'success', 'info', 'warn', 'danger', 'other'];

	var btnSizeMapper = ['normal', 'middle', 'large'];

	exports.default = {
	  data: function data() {
	    return {
	      btnTypeMapper: btnTypeMapper,
	      btnSizeMapper: btnSizeMapper,

	      btnSwitch: false,
	      btnDisable: false,
	      btnType: 'primary',
	      btnSize: 'normal'
	    };
	  }
	};
	// </script>

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = "<section><h2>Button 按钮</h2>\n<blockquote>\n<p>常用的操作按钮，触发业务逻辑时使用。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>按钮类型</h4>\n<select class=\"mr20\" name=\"btnType\" v-model=\"btnType\">\n  <option v-for=\"type in btnTypeMapper\" :value=\"type\" v-text=\"type\"></option>\n</select><ks-button :type=\"btnType\">按钮类型</ks-button>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">select</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"btnType\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"btnType\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">\"type in btnTypeMapper\"</span> <span class=\"hljs-attr\">:value</span>=<span class=\"hljs-string\">\"type\"</span> <span class=\"hljs-attr\">v-text</span>=<span class=\"hljs-string\">\"type\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">:type</span>=<span class=\"hljs-string\">\"btnType\"</span>&gt;</span>按钮类型<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>按钮大小</h4>\n<select class=\"mr20\" name=\"btnSize\" v-model=\"btnSize\">\n  <option v-for=\"size in btnSizeMapper\" :value=\"size\" v-text=\"size\"></option>\n</select><ks-button :size=\"btnSize\">按钮大小</ks-button>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">select</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"btnSize\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"btnSize\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">\"size in btnSizeMapper\"</span> <span class=\"hljs-attr\">:value</span>=<span class=\"hljs-string\">\"size\"</span> <span class=\"hljs-attr\">v-text</span>=<span class=\"hljs-string\">\"size\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">:size</span>=<span class=\"hljs-string\">\"btnSize\"</span>&gt;</span>按钮大小<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>幽灵按钮</h4>\n<p><ks-button :ghost=\"true\">幽灵按钮</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">:ghost</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>幽灵按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>加载按钮</h4>\n<p><ks-switch class=\"mr20\" :checked.sync=\"btnSwitch\"></ks-switch><ks-button :loading=\"btnSwitch\">幽灵按钮</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"btnSwitch\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">:loading</span>=<span class=\"hljs-string\">\"btnSwitch\"</span>&gt;</span>加载按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>按钮禁用</h4>\n<p><ks-switch class=\"mr20\" :checked.sync=\"btnDisable\"></ks-switch><ks-button :disable=\"btnDisable\">按钮禁用</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"btnDisable\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">:disable</span>=<span class=\"hljs-string\">\"btnDisable\"</span>&gt;</span>按钮禁用<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"babel\"</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">let</span> btnTypeMapper = [\n    <span class=\"hljs-string\">'primary'</span>,\n    <span class=\"hljs-string\">'success'</span>,\n    <span class=\"hljs-string\">'info'</span>,\n    <span class=\"hljs-string\">'warn'</span>,\n    <span class=\"hljs-string\">'danger'</span>,\n    <span class=\"hljs-string\">'other'</span>\n  ];\n  \n  <span class=\"hljs-keyword\">let</span> btnSizeMapper = [\n    <span class=\"hljs-string\">'normal'</span>,\n    <span class=\"hljs-string\">'middle'</span>,\n    <span class=\"hljs-string\">'large'</span>\n  ];\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        btnTypeMapper,\n        btnSizeMapper,\n        \n        <span class=\"hljs-attr\">btnSwitch</span>: <span class=\"hljs-literal\">false</span>,\n        <span class=\"hljs-attr\">btnDisable</span>: <span class=\"hljs-literal\">false</span>,\n        <span class=\"hljs-attr\">btnType</span>: <span class=\"hljs-string\">'primary'</span>,\n        <span class=\"hljs-attr\">btnSize</span>: <span class=\"hljs-string\">'normal'</span>\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>用来描述按钮的类型</td>\n<td>props</td>\n<td>String</td>\n<td><strong>primary</strong>, <strong>success</strong>, <strong>info</strong>, <strong>warn</strong>, <strong>danger</strong>, <strong>other</strong></td>\n<td>primary</td>\n</tr>\n<tr>\n<td>size</td>\n<td>用来描述按钮的大小</td>\n<td>props</td>\n<td>String</td>\n<td><strong>normal</strong>, <strong>middle</strong>, <strong>large</strong></td>\n<td>normal</td>\n</tr>\n<tr>\n<td>ghost</td>\n<td>用来描述按钮是否是 <code class=\"ks-code-inline\">幽灵</code> 类型按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>同步属性，用来控制按钮是否是加载状态</td>\n<td>props</td>\n<td>Boolean</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>disable</td>\n<td>用来描述按钮是禁用</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>nativeType</td>\n<td>用来描述按钮原生类型</td>\n<td>props</td>\n<td>String</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">button</code></td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});