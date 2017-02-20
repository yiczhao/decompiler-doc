webpackJsonp([2],{

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/other/welcome.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/src/doc/views/other/welcome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 81:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="welcome-container tc">
	//     <img src="../../assets/logo/ks-logo.png" alt="welcome">
	//     <h4 class="p20">您好，欢迎访问查看卡说公用组件文档，在这里我将带领你走进新世界的大门！</h4>
	//   </div>
	// </template>
	//
	// <script lang="babel">
	exports.default = {
	  data: function data() {
	    return {};
	  }
	};
	// </script>

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"welcome-container tc\">\n  <img src=\"" + __webpack_require__(83) + "\" alt=\"welcome\">\n  <h4 class=\"p20\">您好，欢迎访问查看卡说公用组件文档，在这里我将带领你走进新世界的大门！</h4>\n</div>\n";

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "018f15a05623a3d02275058da95246ba.png";

/***/ }

});