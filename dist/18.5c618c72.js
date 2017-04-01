webpackJsonp([18],{

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
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/defaultValidateRules-14.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports = "<section><h2>Validate 验证</h2>\n<blockquote>\n<p>用于校验表单，检查试图页面数据的合规性。</p>\n</blockquote>\n<hr>\n<h3>Validate 介绍</h3>\n<p>Validate 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API。所有的捆绑方法默认使用英语作为错误信息，且已翻译成其他 37 种语言。<br>\n<br></p>\n<h3>默认校验规则</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>序号</th>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>required:true</td>\n<td>必须输入的字段。</td>\n</tr>\n<tr>\n<td>2</td>\n<td>remote:&quot;check.php&quot;</td>\n<td>使用 ajax 方法调用 check.php 验证输入值。</td>\n</tr>\n<tr>\n<td>3</td>\n<td>email:true</td>\n<td>必须输入正确格式的电子邮件。</td>\n</tr>\n<tr>\n<td>4</td>\n<td>url:true</td>\n<td>必须输入正确格式的网址。</td>\n</tr>\n<tr>\n<td>5</td>\n<td>date:true</td>\n<td>必须输入正确格式的日期。日期校验 ie6 出错，慎用。</td>\n</tr>\n<tr>\n<td>6</td>\n<td>dateISO:true</td>\n<td>必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。</td>\n</tr>\n<tr>\n<td>7</td>\n<td>number:true</td>\n<td>必须输入合法的数字（负数，小数）。</td>\n</tr>\n<tr>\n<td>8</td>\n<td>digits:true</td>\n<td>必须输入整数。</td>\n</tr>\n<tr>\n<td>9</td>\n<td>creditcard:</td>\n<td>必须输入合法的信用卡号。</td>\n</tr>\n<tr>\n<td>10</td>\n<td>equalTo:&quot;#field&quot;</td>\n<td>输入值必须和 #field 相同。</td>\n</tr>\n<tr>\n<td>11</td>\n<td>accept:</td>\n<td>输入拥有合法后缀名的字符串（上传文件的后缀）。</td>\n</tr>\n<tr>\n<td>12</td>\n<td>maxlength:5</td>\n<td>输入长度最多是 5 的字符串（汉字算一个字符）。</td>\n</tr>\n<tr>\n<td>13</td>\n<td>minlength:10</td>\n<td>输入长度最小是 10 的字符串（汉字算一个字符）。</td>\n</tr>\n<tr>\n<td>14</td>\n<td>rangelength:[5,10]</td>\n<td>输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。</td>\n</tr>\n<tr>\n<td>15</td>\n<td>range:[5,10]</td>\n<td>输入值必须介于 5 和 10 之间。</td>\n</tr>\n<tr>\n<td>16</td>\n<td>max:5</td>\n<td>输入值不能大于 5。</td>\n</tr>\n<tr>\n<td>17</td>\n<td>min:10</td>\n<td>输入值不能小于 10。</td>\n</tr>\n</tbody>\n</table></div><br>\n</section>";

/***/ }

});