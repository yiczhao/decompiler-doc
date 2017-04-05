webpackJsonp([12],{

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(155);

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(156)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/view-image-9.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/view-image-9.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 156:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>查看图片组件调用</h2>
	// <hr>
	// <p><button class="ks-btn-primary" @click="imageShow = true">呼出 ksImage 组件</button></p>
	// <p><ks-image v-bind:show.sync="imageShow" v-bind:url="imgUrl"></ks-image></p>
	// </section></template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            imageShow: false,
	            imgUrl: "http://img02.tooopen.com/images/20140504/sy_60294738471.jpg"
	        };
	    },

	    methods: {
	        // close(staut){
	        //     this.imageShow = staut
	        //     console.log('close',staut)
	        // }
	    }
	};
	// </script>

/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports = "<section><h2>查看图片组件调用</h2>\n<hr>\n<p><button class=\"ks-btn-primary\" @click=\"imageShow = true\">呼出 ksImage 组件</button></p>\n<p><ks-image v-bind:show.sync=\"imageShow\" v-bind:url=\"imgUrl\"></ks-image></p>\n</section>";

/***/ }

});