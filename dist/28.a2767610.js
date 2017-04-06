webpackJsonp([28],{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(212);

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/methodAndEvent-21.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/methodAndEvent-21.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 213:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>方法 &amp; 事件</h2>
	// <hr>
	// <h3>validator()</h3>
	// <br>
	// <h4>.validator( options )</h4>
	// <br>
	// <p><B> 描述：</B> 根据参数初始化验证，验证 jQuery 选中的表单<br>
	// <B> 参数：</B> {Object} options - 可选，参考配置选项<br>
	// <B> 示例：</B></p>
	// <pre class="ks-hljs"><code>$(<span class="hljs-string">'#form1'</span>).validator({
	//     <span class="hljs-attr">timely</span>: <span class="hljs-number">2</span>,
	//     <span class="hljs-attr">stopOnError</span>: <span class="hljs-literal">true</span>,
	//     <span class="hljs-attr">fields</span>: {
	//         <span class="hljs-attr">email</span>: <span class="hljs-string">"required;email"</span>,
	//         <span class="hljs-attr">password</span>: <span class="hljs-string">"required;length(6~16)"</span>,
	//         <span class="hljs-attr">mobile</span>: <span class="hljs-string">"required;mobile"</span>
	//     },
	//     <span class="hljs-attr">valid</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">form</span>) </span>{
	//         $.post(<span class="hljs-string">"path/to/server"</span>, $(form).serialize())
	//             .done(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
	//                 <span class="hljs-comment">// some code</span>
	//             });
	//     }
	// });
	// </code></pre>
	// <h4>validator( validCallback )</h4>
	// <br>
	// <p><B>描述：</B>初始化验证，验证 jQuery 选中的表单，验证通过后执行回调<br>
	// <B>参数：</B>{Function} validCallback - 表单验证通过的回调<br>
	// <B>示例：</B></p>
	// <pre class="ks-hljs"><code>$(<span class="hljs-string">'#form1'</span>).validator(validCallback);
	// <span class="hljs-comment">// 等同于</span>
	// $(<span class="hljs-string">'#form1'</span>).validator({
	//     <span class="hljs-attr">valid</span>: validCallback
	// });
	// </code></pre>
	// <h4>validator( instanceMethod, arg1, arg2... )</h4>
	// <br>
	// <p><b>描述：</b>通过.validator() 方法调用实例方法<br>
	// <b>参数：</b>{String} instanceMethod - 实例方法名称<br>
	// <b>参数：</b>{Arguments} argn - 调用实例方法时的参数<br>
	// <b>示例：</b></p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// 清空表单验证消息</span>
	// $(<span class="hljs-string">'#form1'</span>).validator(<span class="hljs-string">"cleanUp"</span>);
	// <span class="hljs-comment">// 销毁表单验证</span>
	// $(<span class="hljs-string">'#form1'</span>).validator(<span class="hljs-string">"destroy"</span>);
	// </code></pre>
	// <h4>trigger(&quot;validate&quot;)</h4>
	// <br>
	// <p><b>描述：</b>触发字段执行验证<br>
	// <b>示例：</b></p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// Verify the selected field.</span>
	// $(<span class="hljs-string">'#username'</span>).trigger(<span class="hljs-string">"validate"</span>);
	// <span class="hljs-comment">// Verify the selected form.</span>
	// $(<span class="hljs-string">'#form'</span>).trigger(<span class="hljs-string">"validate"</span>);
	// <span class="hljs-comment">// Verify the selected area.</span>
	// $(<span class="hljs-string">'#area'</span>).trigger(<span class="hljs-string">"validate"</span>);
	// </code></pre>
	// <h4>trigger(&quot;showmsg&quot;, [type, message])</h4>
	// <br>
	// <p><b>描述：</b>触发字段提示消息<br>
	// <b>示例：</b></p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// Tips ok message</span>
	// $(<span class="hljs-string">"#username"</span>).trigger(<span class="hljs-string">"showmsg"</span>, [<span class="hljs-string">"ok"</span>, <span class="hljs-string">"Great name"</span>]);
	// <span class="hljs-comment">// Tips error message</span>
	// $(<span class="hljs-string">"#username"</span>).trigger(<span class="hljs-string">"showmsg"</span>, [<span class="hljs-string">"error"</span>, <span class="hljs-string">"Name is already taken"</span>]);
	// <span class="hljs-comment">// Tips general message</span>
	// $(<span class="hljs-string">"#username"</span>).trigger(<span class="hljs-string">"showmsg"</span>, [<span class="hljs-string">"tip"</span>, <span class="hljs-string">"Others make a good name for you impressed"</span>]);
	// <span class="hljs-comment">// Tips tip message has been bound (data-tip)</span>
	// $(<span class="hljs-string">"#username"</span>).trigger(<span class="hljs-string">"showmsg"</span>, [<span class="hljs-string">"tip"</span>]);
	// <span class="hljs-comment">// Tips all tip message</span>
	// $(<span class="hljs-string">"#form"</span>).trigger(<span class="hljs-string">"showmsg"</span>, [<span class="hljs-string">"tip"</span>]);
	// </code></pre>
	// <h4>trigger(&quot;hidemsg&quot;)</h4>
	// <br>
	// <p><b>描述：</b>触发字段隐藏消息<br>
	// <b>示例：</b></p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// Hide field message</span>
	// $(<span class="hljs-string">"#username"</span>).trigger(<span class="hljs-string">"hidemsg"</span>);
	// <span class="hljs-comment">// Hide all messages form the form</span>
	// $(<span class="hljs-string">"#form"</span>).trigger(<span class="hljs-string">"hidemsg"</span>);
	// </code></pre>
	// <h4>dataFilter - 转换ajax返回数据为插件支持的格式</h4>
	// <p><b>类型：</b>Function(data)<br>
	// <b>默认：</b>null<br>
	// <b>示例：</b>如果服务端返回格式无法更改，可以用 dataFilter 参数转换</p>
	// <form id="form3" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
	//     <div class="ks-form-group">
	//         <label>Username</label>
	//         <div class="has-error">
	//             <input type="text" name="username" data-rule="required;username;dataFilter;" data-rule-username="[/[\w\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']" data-tip="You can use letters, numbers and periods">
	//         </div>
	//     </div>
	//    <div class="ks-form-group">
	//         <label></label>
	//         <button class="ks-btn-primary" @click="sub">Submit</button>
	//     </div>
	// </form>
	// <pre class="ks-hljs"><code><span class="hljs-comment">/* 假设服务端返回结果为： {"status":600, "msg":"名字已被占用"}
	//  */</span>
	// $(<span class="hljs-string">'#form3'</span>).validator({
	//     <span class="hljs-attr">dataFilter</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{
	//         <span class="hljs-keyword">if</span> (data.status === <span class="hljs-number">200</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">""</span>;
	//         <span class="hljs-keyword">else</span> <span class="hljs-keyword">return</span> data.msg;
	//     },
	//     <span class="hljs-attr">fields</span>: {
	//         <span class="hljs-attr">name</span>: <span class="hljs-string">"required; length(4~12); remote(/user/check/name)"</span>
	//     }
	// });
	// </code></pre>
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	  data: function data() {
	    return {};
	  },

	  methods: {
	    //提交按钮
	    sub: function sub() {
	      console.log('loding……');
	    }
	  },

	  created: function created() {},
	  ready: function ready() {}
	};
	// </script>

/***/ },

/***/ 214:
/***/ function(module, exports) {

	module.exports = "<section><h2>方法 &amp; 事件</h2>\n<hr>\n<h3>validator()</h3>\n<br>\n<h4>.validator( options )</h4>\n<br>\n<p><B> 描述：</B> 根据参数初始化验证，验证 jQuery 选中的表单<br>\n<B> 参数：</B> {Object} options - 可选，参考配置选项<br>\n<B> 示例：</B></p>\n<pre class=\"ks-hljs\"><code>$(<span class=\"hljs-string\">'#form1'</span>).validator({\n    <span class=\"hljs-attr\">timely</span>: <span class=\"hljs-number\">2</span>,\n    <span class=\"hljs-attr\">stopOnError</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">fields</span>: {\n        <span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">\"required;email\"</span>,\n        <span class=\"hljs-attr\">password</span>: <span class=\"hljs-string\">\"required;length(6~16)\"</span>,\n        <span class=\"hljs-attr\">mobile</span>: <span class=\"hljs-string\">\"required;mobile\"</span>\n    },\n    <span class=\"hljs-attr\">valid</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">form</span>) </span>{\n        $.post(<span class=\"hljs-string\">\"path/to/server\"</span>, $(form).serialize())\n            .done(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n                <span class=\"hljs-comment\">// some code</span>\n            });\n    }\n});\n</code></pre>\n<h4>validator( validCallback )</h4>\n<br>\n<p><B>描述：</B>初始化验证，验证 jQuery 选中的表单，验证通过后执行回调<br>\n<B>参数：</B>{Function} validCallback - 表单验证通过的回调<br>\n<B>示例：</B></p>\n<pre class=\"ks-hljs\"><code>$(<span class=\"hljs-string\">'#form1'</span>).validator(validCallback);\n<span class=\"hljs-comment\">// 等同于</span>\n$(<span class=\"hljs-string\">'#form1'</span>).validator({\n    <span class=\"hljs-attr\">valid</span>: validCallback\n});\n</code></pre>\n<h4>validator( instanceMethod, arg1, arg2... )</h4>\n<br>\n<p><b>描述：</b>通过.validator() 方法调用实例方法<br>\n<b>参数：</b>{String} instanceMethod - 实例方法名称<br>\n<b>参数：</b>{Arguments} argn - 调用实例方法时的参数<br>\n<b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 清空表单验证消息</span>\n$(<span class=\"hljs-string\">'#form1'</span>).validator(<span class=\"hljs-string\">\"cleanUp\"</span>);\n<span class=\"hljs-comment\">// 销毁表单验证</span>\n$(<span class=\"hljs-string\">'#form1'</span>).validator(<span class=\"hljs-string\">\"destroy\"</span>);\n</code></pre>\n<h4>trigger(&quot;validate&quot;)</h4>\n<br>\n<p><b>描述：</b>触发字段执行验证<br>\n<b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// Verify the selected field.</span>\n$(<span class=\"hljs-string\">'#username'</span>).trigger(<span class=\"hljs-string\">\"validate\"</span>);\n<span class=\"hljs-comment\">// Verify the selected form.</span>\n$(<span class=\"hljs-string\">'#form'</span>).trigger(<span class=\"hljs-string\">\"validate\"</span>);\n<span class=\"hljs-comment\">// Verify the selected area.</span>\n$(<span class=\"hljs-string\">'#area'</span>).trigger(<span class=\"hljs-string\">\"validate\"</span>);\n</code></pre>\n<h4>trigger(&quot;showmsg&quot;, [type, message])</h4>\n<br>\n<p><b>描述：</b>触发字段提示消息<br>\n<b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// Tips ok message</span>\n$(<span class=\"hljs-string\">\"#username\"</span>).trigger(<span class=\"hljs-string\">\"showmsg\"</span>, [<span class=\"hljs-string\">\"ok\"</span>, <span class=\"hljs-string\">\"Great name\"</span>]);\n<span class=\"hljs-comment\">// Tips error message</span>\n$(<span class=\"hljs-string\">\"#username\"</span>).trigger(<span class=\"hljs-string\">\"showmsg\"</span>, [<span class=\"hljs-string\">\"error\"</span>, <span class=\"hljs-string\">\"Name is already taken\"</span>]);\n<span class=\"hljs-comment\">// Tips general message</span>\n$(<span class=\"hljs-string\">\"#username\"</span>).trigger(<span class=\"hljs-string\">\"showmsg\"</span>, [<span class=\"hljs-string\">\"tip\"</span>, <span class=\"hljs-string\">\"Others make a good name for you impressed\"</span>]);\n<span class=\"hljs-comment\">// Tips tip message has been bound (data-tip)</span>\n$(<span class=\"hljs-string\">\"#username\"</span>).trigger(<span class=\"hljs-string\">\"showmsg\"</span>, [<span class=\"hljs-string\">\"tip\"</span>]);\n<span class=\"hljs-comment\">// Tips all tip message</span>\n$(<span class=\"hljs-string\">\"#form\"</span>).trigger(<span class=\"hljs-string\">\"showmsg\"</span>, [<span class=\"hljs-string\">\"tip\"</span>]);\n</code></pre>\n<h4>trigger(&quot;hidemsg&quot;)</h4>\n<br>\n<p><b>描述：</b>触发字段隐藏消息<br>\n<b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// Hide field message</span>\n$(<span class=\"hljs-string\">\"#username\"</span>).trigger(<span class=\"hljs-string\">\"hidemsg\"</span>);\n<span class=\"hljs-comment\">// Hide all messages form the form</span>\n$(<span class=\"hljs-string\">\"#form\"</span>).trigger(<span class=\"hljs-string\">\"hidemsg\"</span>);\n</code></pre>\n<h4>dataFilter - 转换ajax返回数据为插件支持的格式</h4>\n<p><b>类型：</b>Function(data)<br>\n<b>默认：</b>null<br>\n<b>示例：</b>如果服务端返回格式无法更改，可以用 dataFilter 参数转换</p>\n<form id=\"form3\" data-validator-option=\"{theme:'bootstrap', timely:2, stopOnError:true}\">\n    <div class=\"ks-form-group\">\n        <label>Username</label>\n        <div class=\"has-error\">\n            <input type=\"text\" name=\"username\" data-rule=\"required;username;dataFilter;\" data-rule-username=\"[/[\\w\\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']\" data-tip=\"You can use letters, numbers and periods\">\n        </div>\n    </div>\n   <div class=\"ks-form-group\">\n        <label></label>\n        <button class=\"ks-btn-primary\" @click=\"sub\">Submit</button>\n    </div>\n</form>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">/* 假设服务端返回结果为： {\"status\":600, \"msg\":\"名字已被占用\"}\n */</span>\n$(<span class=\"hljs-string\">'#form3'</span>).validator({\n    <span class=\"hljs-attr\">dataFilter</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n        <span class=\"hljs-keyword\">if</span> (data.status === <span class=\"hljs-number\">200</span>) <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"\"</span>;\n        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">return</span> data.msg;\n    },\n    <span class=\"hljs-attr\">fields</span>: {\n        <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\"required; length(4~12); remote(/user/check/name)\"</span>\n    }\n});\n</code></pre>\n</section>";

/***/ }

});