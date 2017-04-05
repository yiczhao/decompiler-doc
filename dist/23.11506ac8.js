webpackJsonp([23],{

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(196);

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(197)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/validate_api-18.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports = "<section><h3>validate API</h3>\n<br>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>名称</th>\n<th>返回类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>validate(options)</td>\n<td>Validator</td>\n<td>验证所选的 FORM。</td>\n</tr>\n<tr>\n<td>alid()</td>\n<td>Boolean</td>\n<td>检查是否验证通过。</td>\n</tr>\n<tr>\n<td>rules()</td>\n<td>Options</td>\n<td>返回元素的验证规则。</td>\n</tr>\n<tr>\n<td>rules(&quot;add&quot;,rules)</td>\n<td>Options</td>\n<td>增加验证规则。</td>\n</tr>\n<tr>\n<td>rules(&quot;remove&quot;,rules)</td>\n<td>Options</td>\n<td>删除验证规则。</td>\n</tr>\n<tr>\n<td>removeAttrs(attributes)</td>\n<td>Options</td>\n<td>删除特殊属性并且返回它们。</td>\n</tr>\n<tr>\n<td>自定义选择器</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>:blank</td>\n<td>Validator</td>\n<td>没有值的筛选器。</td>\n</tr>\n<tr>\n<td>:filled</td>\n<td>Array <Element></Element></td>\n<td>有值的筛选器。</td>\n</tr>\n<tr>\n<td>:unchecked</td>\n<td>Array <Element></Element></td>\n<td>没选择的元素的筛选器。</td>\n</tr>\n<tr>\n<td>实用工具</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>jQuery.format(template,argument,argumentN...)</td>\n<td>String</td>\n<td>用参数代替模板中的</td>\n</tr>\n</tbody>\n</table></div><br>\n<h4>Validator</h4>\n<p>validate 方法返回一个 Validator 对象。Validator 对象有很多方法可以用来引发校验程序或者改变 form 的内容，下面列出几个常用的方法。</p>\n<br>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>名称</th>\n<th>返回类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>form()</td>\n<td>Boolean</td>\n<td>验证 form 返回成功还是失败。</td>\n</tr>\n<tr>\n<td>element(element)</td>\n<td>Boolean</td>\n<td>验证单个元素是成功还是失败。</td>\n</tr>\n<tr>\n<td>resetForm()</td>\n<td>undefined</td>\n<td>把前面验证的 FORM 恢复到验证前原来的状态。</td>\n</tr>\n<tr>\n<td>showErrors(errors)</td>\n<td>undefined</td>\n<td>显示特定的错误信息。</td>\n</tr>\n<tr>\n<td>Validator 函数</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>setDefaults(defaults)</td>\n<td>undefined</td>\n<td>改变默认的设置。</td>\n</tr>\n<tr>\n<td>addMethod(name,method,message)</td>\n<td>undefined</td>\n<td>添加一个新的验证方法。必须包括一个独一无二的名字，一个 JAVASCRIPT 的方法和一个默认的信息。</td>\n</tr>\n<tr>\n<td>addClassRules(name,rules)</td>\n<td>undefined</td>\n<td>增加组合验证类型，在一个类里面用多种验证方法时比较有用。</td>\n</tr>\n<tr>\n<td>addClassRules(rules)</td>\n<td>undefined</td>\n<td>增加组合验证类型，在一个类里面用多种验证方</td>\n</tr>\n</tbody>\n</table></div><br></section>";

/***/ }

});