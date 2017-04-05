webpackJsonp([25],{

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/briefIntroduction-17.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/briefIntroduction-17.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 203:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>简介</h2>
	// <blockquote>
	// <p>validator 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API</p>
	// </blockquote>
	// <hr>
	// <h3>(1)、常用内置规则以及提示</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>规则</th>
	// <th>描述（验证信息）</th>
	// <th>示例</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>required</td>
	// <td>此处不能为空</td>
	// <td>data-rule=&quot;required;&quot;</td>
	// </tr>
	// <tr>
	// <td>digits</td>
	// <td>请填写数字</td>
	// <td>data-rule=&quot;digits;&quot;</td>
	// </tr>
	// <tr>
	// <td>letters</td>
	// <td>请填写字母</td>
	// <td>data-rule=&quot;letters&quot;</td>
	// </tr>
	// <tr>
	// <td>date</td>
	// <td>请填写有效的日期，格式:yyyy-mm-dd</td>
	// <td>data-rule=&quot;date&quot;</td>
	// </tr>
	// <tr>
	// <td>time</td>
	// <td>请填写有效的时间，00:00到23:59之间</td>
	// <td>data-rule=&quot;time&quot;</td>
	// </tr>
	// <tr>
	// <td>email</td>
	// <td>请填写有效的邮箱</td>
	// <td>data-rule=&quot;email&quot;</td>
	// </tr>
	// <tr>
	// <td>url</td>
	// <td>请填写有效的网址</td>
	// <td>data-rule=&quot;url&quot;</td>
	// </tr>
	// <tr>
	// <td>qq</td>
	// <td>请填写有效的QQ号</td>
	// <td>data-rule=&quot;qq&quot;</td>
	// </tr>
	// <tr>
	// <td>IDcard</td>
	// <td>请填写正确的身份证号码</td>
	// <td>data-rule=&quot;IDcard&quot;</td>
	// </tr>
	// <tr>
	// <td>tel</td>
	// <td>请填写有效的电话号码</td>
	// <td>data-rule=&quot;tel&quot;</td>
	// </tr>
	// <tr>
	// <td>mobile</td>
	// <td>请填写有效的手机号</td>
	// <td>data-rule=&quot;mobile&quot;</td>
	// </tr>
	// <tr>
	// <td>zipcode</td>
	// <td>请检查邮政编码格式</td>
	// <td>data-rule=&quot;zipcode&quot;</td>
	// </tr>
	// <tr>
	// <td>chinese</td>
	// <td>请填写中文字符</td>
	// <td>data-rule=&quot;chinese&quot;</td>
	// </tr>
	// <tr>
	// <td>username</td>
	// <td>请填写3-12位数字、字母、下划线</td>
	// <td>data-rule=&quot;username&quot;</td>
	// </tr>
	// <tr>
	// <td>password</td>
	// <td>请填写6-16位字符，不能包含空格</td>
	// <td>data-rule=&quot;password&quot;</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <p><b>示例表单</b></p>
	// <form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
	//     <div class="form-group">
	//         <label class="control-label">required</label>
	//         <input type="text" class="form-control" name="required" data-rule="required;" data-tip="必填">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">digits</label>
	//         <input type="text" class="form-control" name="digits" data-rule="required;digits;" data-tip="只能是数字">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">letters</label>
	//         <input type="text" class="form-control" name="letters" data-rule="required;letters;" data-tip="只能是字母">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">date</label>
	//         <input type="text" class="form-control" name="date" data-rule="required;date;" data-tip="只能是真确的日期格式">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">time</label>
	//         <input type="text" class="form-control" name="time" data-rule="required;time;" data-tip="只能是真确的时间格式">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">email</label>
	//         <input type="text" class="form-control" name="email" data-rule="required;email;" data-tip="只能是真确的邮箱格式">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">url</label>
	//         <input type="text" class="form-control" name="url" data-rule="required;url;" data-tip="只能是真确的url">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">qq</label>
	//         <input type="text" class="form-control" name="qq" data-rule="required;qq;" data-tip="只能是真确的qq号">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">IDcard</label>
	//         <input type="text" class="form-control" name="IDcard" data-rule="required;IDcard;" data-tip="只能是真确的身份证号">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">tel</label>
	//         <input type="text" class="form-control" name="tel" data-rule="required;tel;" data-tip="只能是真确的电话号码">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">mobile</label>
	//         <input type="text" class="form-control" name="mobile" data-rule="required;mobile;" data-tip="只能是真确的手机号">
	//     </div>
	//      <div class="form-group">
	//         <label class="control-label">zipcode</label>
	//         <input type="text" class="form-control" name="zipcode" data-rule="required;zipcode;" data-tip="只能是真确的邮政编码">
	//     </div>
	//      <div class="form-group">
	//         <label class="control-label">chinese</label>
	//         <input type="text" class="form-control" name="chinese" data-rule="required;chinese;" data-tip="只能是中文字符">
	//     </div>
	//      <div class="form-group">
	//         <label class="control-label">username</label>
	//         <input type="text" class="form-control" name="username" data-rule="required;username;" data-tip="请填写3-12位数字、字母、下划线">
	//     </div>
	//     <div class="form-group">
	//         <label class="control-label">password</label>
	//         <input type="text" class="form-control" name="password" data-rule="required;password;" data-tip="请填写6-16位字符，不能包含空格">
	//     </div>
	//     <div class="form-group">
	//         <button type="submit" class="btn btn-primary" v-on:click="onSubmit">Submit</button>
	//         <button type="reset" class="btn btn-default">reset</button>
	//     </div>
	// </form>
	// <br>
	//
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	  data: function data() {
	    return {
	      hello: '你好！'
	    };
	  },

	  methods: {
	    onSubmit: function onSubmit() {
	      console.log('?????--');
	      $('#form').trigger("validate");
	    }
	  },

	  created: function created() {},
	  ready: function ready() {
	    // 在键盘按下并释放及提交后验证提交表单

	  }
	};
	// </script>

/***/ },

/***/ 204:
/***/ function(module, exports) {

	module.exports = "<section><h2>简介</h2>\n<blockquote>\n<p>validator 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API</p>\n</blockquote>\n<hr>\n<h3>(1)、常用内置规则以及提示</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述（验证信息）</th>\n<th>示例</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>required</td>\n<td>此处不能为空</td>\n<td>data-rule=&quot;required;&quot;</td>\n</tr>\n<tr>\n<td>digits</td>\n<td>请填写数字</td>\n<td>data-rule=&quot;digits;&quot;</td>\n</tr>\n<tr>\n<td>letters</td>\n<td>请填写字母</td>\n<td>data-rule=&quot;letters&quot;</td>\n</tr>\n<tr>\n<td>date</td>\n<td>请填写有效的日期，格式:yyyy-mm-dd</td>\n<td>data-rule=&quot;date&quot;</td>\n</tr>\n<tr>\n<td>time</td>\n<td>请填写有效的时间，00:00到23:59之间</td>\n<td>data-rule=&quot;time&quot;</td>\n</tr>\n<tr>\n<td>email</td>\n<td>请填写有效的邮箱</td>\n<td>data-rule=&quot;email&quot;</td>\n</tr>\n<tr>\n<td>url</td>\n<td>请填写有效的网址</td>\n<td>data-rule=&quot;url&quot;</td>\n</tr>\n<tr>\n<td>qq</td>\n<td>请填写有效的QQ号</td>\n<td>data-rule=&quot;qq&quot;</td>\n</tr>\n<tr>\n<td>IDcard</td>\n<td>请填写正确的身份证号码</td>\n<td>data-rule=&quot;IDcard&quot;</td>\n</tr>\n<tr>\n<td>tel</td>\n<td>请填写有效的电话号码</td>\n<td>data-rule=&quot;tel&quot;</td>\n</tr>\n<tr>\n<td>mobile</td>\n<td>请填写有效的手机号</td>\n<td>data-rule=&quot;mobile&quot;</td>\n</tr>\n<tr>\n<td>zipcode</td>\n<td>请检查邮政编码格式</td>\n<td>data-rule=&quot;zipcode&quot;</td>\n</tr>\n<tr>\n<td>chinese</td>\n<td>请填写中文字符</td>\n<td>data-rule=&quot;chinese&quot;</td>\n</tr>\n<tr>\n<td>username</td>\n<td>请填写3-12位数字、字母、下划线</td>\n<td>data-rule=&quot;username&quot;</td>\n</tr>\n<tr>\n<td>password</td>\n<td>请填写6-16位字符，不能包含空格</td>\n<td>data-rule=&quot;password&quot;</td>\n</tr>\n</tbody>\n</table></div><br>\n<p><b>示例表单</b></p>\n<form id=\"form1\" data-validator-option=\"{theme:'bootstrap', timely:2, stopOnError:true}\">\n    <div class=\"form-group\">\n        <label class=\"control-label\">required</label>\n        <input type=\"text\" class=\"form-control\" name=\"required\" data-rule=\"required;\" data-tip=\"必填\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">digits</label>\n        <input type=\"text\" class=\"form-control\" name=\"digits\" data-rule=\"required;digits;\" data-tip=\"只能是数字\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">letters</label>\n        <input type=\"text\" class=\"form-control\" name=\"letters\" data-rule=\"required;letters;\" data-tip=\"只能是字母\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">date</label>\n        <input type=\"text\" class=\"form-control\" name=\"date\" data-rule=\"required;date;\" data-tip=\"只能是真确的日期格式\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">time</label>\n        <input type=\"text\" class=\"form-control\" name=\"time\" data-rule=\"required;time;\" data-tip=\"只能是真确的时间格式\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" data-rule=\"required;email;\" data-tip=\"只能是真确的邮箱格式\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">url</label>\n        <input type=\"text\" class=\"form-control\" name=\"url\" data-rule=\"required;url;\" data-tip=\"只能是真确的url\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">qq</label>\n        <input type=\"text\" class=\"form-control\" name=\"qq\" data-rule=\"required;qq;\" data-tip=\"只能是真确的qq号\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">IDcard</label>\n        <input type=\"text\" class=\"form-control\" name=\"IDcard\" data-rule=\"required;IDcard;\" data-tip=\"只能是真确的身份证号\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">tel</label>\n        <input type=\"text\" class=\"form-control\" name=\"tel\" data-rule=\"required;tel;\" data-tip=\"只能是真确的电话号码\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">mobile</label>\n        <input type=\"text\" class=\"form-control\" name=\"mobile\" data-rule=\"required;mobile;\" data-tip=\"只能是真确的手机号\">\n    </div>\n     <div class=\"form-group\">\n        <label class=\"control-label\">zipcode</label>\n        <input type=\"text\" class=\"form-control\" name=\"zipcode\" data-rule=\"required;zipcode;\" data-tip=\"只能是真确的邮政编码\">\n    </div>\n     <div class=\"form-group\">\n        <label class=\"control-label\">chinese</label>\n        <input type=\"text\" class=\"form-control\" name=\"chinese\" data-rule=\"required;chinese;\" data-tip=\"只能是中文字符\">\n    </div>\n     <div class=\"form-group\">\n        <label class=\"control-label\">username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" data-rule=\"required;username;\" data-tip=\"请填写3-12位数字、字母、下划线\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">password</label>\n        <input type=\"text\" class=\"form-control\" name=\"password\" data-rule=\"required;password;\" data-tip=\"请填写6-16位字符，不能包含空格\">\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" v-on:click=\"onSubmit\">Submit</button>\n        <button type=\"reset\" class=\"btn btn-default\">reset</button>\n    </div>\n</form>\n<br>\n\n</section>";

/***/ }

});