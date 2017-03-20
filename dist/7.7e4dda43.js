webpackJsonp([7],{

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(157);

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/page-12.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/page-12.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 158:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsPager</h2>
	// <blockquote>
	// <p>常用的日期组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用 （分类）</h3>
	// <h3>page</h3>
	// <p>page_current:{{page_current}}<br>
	// <ks-page :page_current.sync="page_current" :pages="7" :total="100" :page_size="13" v-on:current_change="current_change"></ks-page></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">:page_current.sync</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">:pages</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">:page_size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-on:current_change</span>=<span class="hljs-string">"current_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
	// </code></pre>
	// <h3>pageGroup</h3>
	// <p><ks-page-group :page_current.sync="page_current" :pages="7" :total="100" :page_sizes="[10,17,30]" v-on:size_change="size_change" v-on:current_change="current_change"></ks-page-group></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page-group</span>
	//     <span class="hljs-attr">:page_current</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">:pages</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">:page_sizes</span>=<span class="hljs-string">"[10,17,30]"</span>
	//     <span class="hljs-attr">v-on:size_change</span>=<span class="hljs-string">"size_change"</span>
	//     <span class="hljs-attr">v-on:current_change</span>=<span class="hljs-string">"current_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page-group</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code>&lt;script lang=<span class="hljs-string">"babel"</span>&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">page_current</span>:<span class="hljs-number">1</span>
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             current_change(val){
	//
	//             },
	//             size_change(val){},
	//
	//         }
	//
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {
	            page_current: 1
	        };
	    },

	    methods: {
	        current_change: function current_change(val) {},
	        size_change: function size_change(val) {}
	    }

	};
	// </script>

/***/ },

/***/ 159:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsPager</h2>\n<blockquote>\n<p>常用的日期组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<h3>page</h3>\n<p>page_current:{{page_current}}<br>\n<ks-page :page_current.sync=\"page_current\" :pages=\"7\" :total=\"100\" :page_size=\"13\" v-on:current_change=\"current_change\"></ks-page></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page</span> \n    <span class=\"hljs-attr\">:page_current.sync</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">:pages</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">:page_size</span>=<span class=\"hljs-string\">\"13\"</span>\n    <span class=\"hljs-attr\">v-on:current_change</span>=<span class=\"hljs-string\">\"current_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page</span>&gt;</span>\n</code></pre>\n<h3>pageGroup</h3>\n<p><ks-page-group :page_current.sync=\"page_current\" :pages=\"7\" :total=\"100\" :page_sizes=\"[10,17,30]\" v-on:size_change=\"size_change\" v-on:current_change=\"current_change\"></ks-page-group></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page-group</span>\n    <span class=\"hljs-attr\">:page_current</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">:pages</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">:page_sizes</span>=<span class=\"hljs-string\">\"[10,17,30]\"</span>\n    <span class=\"hljs-attr\">v-on:size_change</span>=<span class=\"hljs-string\">\"size_change\"</span>\n    <span class=\"hljs-attr\">v-on:current_change</span>=<span class=\"hljs-string\">\"current_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page-group</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>&lt;script lang=<span class=\"hljs-string\">\"babel\"</span>&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">page_current</span>:<span class=\"hljs-number\">1</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            current_change(val){\n                \n            },\n            size_change(val){},\n           \n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});