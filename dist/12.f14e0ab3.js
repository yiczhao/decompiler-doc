webpackJsonp([12],{

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(176);

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/demo-7.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports = "<section><body>\n    <form class=\"form\" data-validator-option=\"{timely:2, focusCleanup:true}\">\n        <div class=\"form-item\">\n            <label class=\"label\">Username</label>\n            <input type=\"text\" name=\"username\" data-rule=\"required;username;\" data-rule-username=\"[/^[\\w\\d]{3,12}$/, 'Please enter 3-12 digits, letters, underscores']\" data-tip=\"You can use letters, numbers and periods\">\n            <input name=\"demo\" data-rule=\"required; abc\" data-rule-abc=\"[/^\\d{6}$/, '请输入6位数字']\" data-tip=\"6位数字备注信息\">\n         </div>\n        <div class=\"form-item\">\n        <button type=\"submit\">Submit</button>\n    </div>\n    </form>\n </body></section>";

/***/ }

});