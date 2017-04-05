webpackJsonp([11],{

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(151);

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(152)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/table-manage-9.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(153)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/table-manage-9.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 152:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>表格管理页面布局</h2>
	// <hr>
	// <div class="ks-search-criteria">
	//     <div class="right">
	//         <div>
	//             <span>name:</span><input type="text">
	//         </div>
	//         <div>
	//             <span>name:</span><input type="text">
	//         </div>
	//         <div>
	//             <button class="ks-btn-primary">查询</button>
	//         </div>
	//     </div>
	// </div>
	// <div class="ks-search-criteria">
	//     <button class="ks-btn-success">新建</button>
	//     <button class="ks-btn-primary">设置</button>
	//     <div class="right">
	//         <div>
	//             <span>name:</span><input type="text">
	//         </div>
	//         <div>
	//             <span>name:</span><input type="text">
	//         </div>
	//         <div>
	//             <button class="ks-btn-primary">查询</button>
	//         </div>
	//     </div>
	// </div>
	// <div class="table-striped">
	//     <table>
	//         <tr>
	//             <th v-for="1 in 12">第{{$index+1}}列</th>
	//         </tr>
	//         <tr>
	//             <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
	//         </tr>
	//         <tr>
	//             <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
	//         </tr>
	//         <tr>
	//             <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
	//         </tr>
	//         <tr>
	//             <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
	//         </tr>
	//     </table>
	// </div>
	// <p><ks-page-group :current.sync="page_current2" :length="7" :total="100" :sizes="[10,17,30]" :on-change="change2"></ks-page-group></p>
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {
	            page_current: 4,
	            page_current2: 4
	        };
	    },

	    methods: {
	        change: function change(val) {
	            console.log(val);
	        },
	        change2: function change2(val, type) {
	            console.log(val, type);
	        }
	    }

	};
	// </script>

/***/ },

/***/ 153:
/***/ function(module, exports) {

	module.exports = "<section><h2>表格管理页面布局</h2>\n<hr>\n<div class=\"ks-search-criteria\">\n    <div class=\"right\">\n        <div>\n            <span>name:</span><input type=\"text\">\n        </div>\n        <div>\n            <span>name:</span><input type=\"text\">\n        </div>\n        <div>\n            <button class=\"ks-btn-primary\">查询</button>\n        </div>\n    </div>\n</div>\n<div class=\"ks-search-criteria\">\n    <button class=\"ks-btn-success\">新建</button>\n    <button class=\"ks-btn-primary\">设置</button>\n    <div class=\"right\">\n        <div>\n            <span>name:</span><input type=\"text\">\n        </div>\n        <div>\n            <span>name:</span><input type=\"text\">\n        </div>\n        <div>\n            <button class=\"ks-btn-primary\">查询</button>\n        </div>\n    </div>\n</div>\n<div class=\"table-striped\">\n    <table>\n        <tr>\n            <th v-for=\"1 in 12\">第{{$index+1}}列</th>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n        <tr>\n            <td v-for=\"1 in 12\">第1行,第{{$index+1}}列</td>\n        </tr>\n    </table>\n</div>\n<p><ks-page-group :current.sync=\"page_current2\" :length=\"7\" :total=\"100\" :sizes=\"[10,17,30]\" :on-change=\"change2\"></ks-page-group></p>\n</section>";

/***/ }

});