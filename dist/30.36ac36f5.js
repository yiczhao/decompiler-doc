webpackJsonp([30],{

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(219);

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/remote-23.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/remote-23.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 220:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	// <template><section><h2>remote 远程验证</h2>
	// <hr>
	// <blockquote>
	// <p>服务端验证并返回结果，URL 为必传参数，默认 POST 请求</p>
	// </blockquote>
	// <br>
	// <h3>使用参数</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>规则</th>
	// <th>描述</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>remote(URL)</td>
	// <td>请求服务端验证</td>
	// </tr>
	// <tr>
	// <td>remote(get:URL)</td>
	// <td>使用 GET 方式请求服务端验证</td>
	// </tr>
	// <tr>
	// <td>remote(URL, name1, #id2 ...)</td>
	// <td>传递额外动态参数</td>
	// </tr>
	// <tr>
	// <td>remote(URL, foo=value1&amp;bar=value2, name3 ...)</td>
	// <td>传递额外固定参数 (v0.8.0+)</td>
	// </tr>
	// <tr>
	// <td>remote(URL, foo:name1, bar:#id2, name3 ...)</td>
	// <td>代理参数名称（实际服务器接收的参数为 foo 和 bar）</td>
	// </tr>
	// <tr>
	// <td>remote(jsonpURL)</td>
	// <td>跨域地址自动采用 JSONP 请求方式</td>
	// </tr>
	// <tr>
	// <td>remote([cors:</td>
	// <td>jsonp:][get:</td>
	// </tr>
	// </tbody>
	// </table></div><p><B>示例：</B>跨域请求</p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// 强制 jsonp 请求</span>
	// <span class="hljs-string">"remote(jsonp:/user/checkName)"</span>
	// <span class="hljs-comment">// 强制 CORS, 请求类型为 POST </span>
	// <span class="hljs-string">"remote(cors:post:/user/checkName)"</span>
	// </code></pre>
	// <br>
	// <h3>服务端返回结果格式</h3>
	// <p>1.直接返回字符串结果</p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// 为空代表通过</span>
	// <span class="hljs-string">""</span>
	// <span class="hljs-comment">// 不为空则代表错误</span>
	// <span class="hljs-string">"名字已被占用"</span>
	// </code></pre>
	// <p>2.返回 JSON 格式</p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">// 验证通过</span>
	// {<span class="hljs-string">"ok"</span>: <span class="hljs-string">"名字很棒"</span>}
	// <span class="hljs-comment">// 验证不通过</span>
	// {<span class="hljs-string">"error"</span>: <span class="hljs-string">"名字已被占用"</span>}
	//
	// <span class="hljs-comment">// 结果在第二级 data</span>
	// {<span class="hljs-string">"status"</span>: <span class="hljs-number">200</span>, <span class="hljs-string">"data"</span>: {<span class="hljs-string">"error"</span>: <span class="hljs-string">"名字已被占用"</span>}}
	// </code></pre>
	// <p><B>示例：</B><br>
	// <br></p>
	// <form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
	//     <div class="ks-form-group">
	//         <label>Username</label>
	//         <div class="has-error">
	//             <input type="text" name="username" v-model="username" data-rule="required;username;remote(cors:post:http://172.21.0.206:3000/aaa);" data-rule-username="[/[\w\d]{4,30}/, '请输入 3-12位 英文字母或数字']">
	//         </div>
	//     </div>
	//     <div class="ks-form-group">
	//         <label>Password</label>
	//         <div class="has-error">
	//             <input type="password" name="pwd" data-rule="Password: required; length(8~16)" data-tip="Please fill in at least eight characters">
	//         </div>
	//     </div>
	//     <div class="ks-form-group">
	//         <label></label>
	//         <button class="ks-btn-primary">Submit</button>
	//         <button class="ks-btn-default">reset</button>
	//     </div>
	// </form>
	//
	// <p><B>代码：</B><br>
	// <br></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"form1"</span> <span class="hljs-attr">data-validator-option</span>=<span class="hljs-string">"{theme:'bootstrap', timely:2, stopOnError:true}"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-form-group"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Username<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"has-error"</span>&gt;</span>
	//             <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> 
	//                 <span class="hljs-attr">data-rule</span>=<span class="hljs-string">"required;remote(cors:post:http://172.21.0.206:3000/aaa);"</span>
	//                 &gt;</span>
	//         <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-form-group"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"has-error"</span>&gt;</span>
	//             <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"pwd"</span> 
	//                 <span class="hljs-attr">data-rule</span>=<span class="hljs-string">"Password: required; length(8~16)"</span> 
	//                 <span class="hljs-attr">data-tip</span>=<span class="hljs-string">"Please fill in at least eight characters"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-form-group"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-btn-primary"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"reset"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-btn-default"</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
	// </code></pre>
	// <h3>前端转换服务端返回的结果格式</h3>
	// <p><b>示例：</b>如果服务端返回格式无法更改，可以用 dataFilter 参数转换</p>
	// <pre class="ks-hljs"><code>$(<span class="hljs-string">'#form1'</span>).validator({
	//     <span class="hljs-comment">/* 假设服务端返回结果为： {"code":400, "msg":"名字已被占用"}
	//     */</span>
	//     dataFilter:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>)</span>{
	//          <span class="hljs-keyword">if</span> (data.code === <span class="hljs-number">200</span>){
	//             <span class="hljs-keyword">return</span> <span class="hljs-string">""</span>;
	//          } <span class="hljs-keyword">else</span> {
	//             <span class="hljs-keyword">return</span> data.message;
	//          }
	//     },
	//     <span class="hljs-comment">//当验证通过后提交表单</span>
	//     valid:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">form</span>)</span>{
	//         form.submit();
	//     },
	//  });
	// </code></pre>
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	   data: function data() {
	      return {
	         username: ''
	      };
	   },

	   methods: {},
	   created: function created() {},
	   //remote(check/userName)
	   ready: function ready() {
	      $('#form1').validator({
	         /* 假设服务端返回结果为： {"code":400, "msg":"名字已被占用"}
	         */
	         dataFilter: function dataFilter(data) {
	            console.log('????', data);
	            if (data.code === 200) {
	               return "";
	            } else {
	               return data.message;
	            }
	         },
	         //当验证通过后提交表单
	         valid: function valid(form) {
	            form.submit();
	         }
	      });
	   }
	};
	// </script>

/***/ },

/***/ 221:
/***/ function(module, exports) {

	module.exports = "<section><h2>remote 远程验证</h2>\n<hr>\n<blockquote>\n<p>服务端验证并返回结果，URL 为必传参数，默认 POST 请求</p>\n</blockquote>\n<br>\n<h3>使用参数</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>remote(URL)</td>\n<td>请求服务端验证</td>\n</tr>\n<tr>\n<td>remote(get:URL)</td>\n<td>使用 GET 方式请求服务端验证</td>\n</tr>\n<tr>\n<td>remote(URL, name1, #id2 ...)</td>\n<td>传递额外动态参数</td>\n</tr>\n<tr>\n<td>remote(URL, foo=value1&amp;bar=value2, name3 ...)</td>\n<td>传递额外固定参数 (v0.8.0+)</td>\n</tr>\n<tr>\n<td>remote(URL, foo:name1, bar:#id2, name3 ...)</td>\n<td>代理参数名称（实际服务器接收的参数为 foo 和 bar）</td>\n</tr>\n<tr>\n<td>remote(jsonpURL)</td>\n<td>跨域地址自动采用 JSONP 请求方式</td>\n</tr>\n<tr>\n<td>remote([cors:</td>\n<td>jsonp:][get:</td>\n</tr>\n</tbody>\n</table></div><p><B>示例：</B>跨域请求</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 强制 jsonp 请求</span>\n<span class=\"hljs-string\">\"remote(jsonp:/user/checkName)\"</span>\n<span class=\"hljs-comment\">// 强制 CORS, 请求类型为 POST </span>\n<span class=\"hljs-string\">\"remote(cors:post:/user/checkName)\"</span>\n</code></pre>\n<br>\n<h3>服务端返回结果格式</h3>\n<p>1.直接返回字符串结果</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 为空代表通过</span>\n<span class=\"hljs-string\">\"\"</span>\n<span class=\"hljs-comment\">// 不为空则代表错误</span>\n<span class=\"hljs-string\">\"名字已被占用\"</span>\n</code></pre>\n<p>2.返回 JSON 格式</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 验证通过</span>\n{<span class=\"hljs-string\">\"ok\"</span>: <span class=\"hljs-string\">\"名字很棒\"</span>}\n<span class=\"hljs-comment\">// 验证不通过</span>\n{<span class=\"hljs-string\">\"error\"</span>: <span class=\"hljs-string\">\"名字已被占用\"</span>}\n\n<span class=\"hljs-comment\">// 结果在第二级 data</span>\n{<span class=\"hljs-string\">\"status\"</span>: <span class=\"hljs-number\">200</span>, <span class=\"hljs-string\">\"data\"</span>: {<span class=\"hljs-string\">\"error\"</span>: <span class=\"hljs-string\">\"名字已被占用\"</span>}}\n</code></pre>\n<p><B>示例：</B><br>\n<br></p>\n<form id=\"form1\" data-validator-option=\"{theme:'bootstrap', timely:2, stopOnError:true}\">\n    <div class=\"ks-form-group\">\n        <label>Username</label>\n        <div class=\"has-error\">\n            <input type=\"text\" name=\"username\" v-model=\"username\" data-rule=\"required;username;remote(cors:post:http://172.21.0.206:3000/aaa);\" data-rule-username=\"[/[\\w\\d]{4,30}/, '请输入 3-12位 英文字母或数字']\">\n        </div>\n    </div>\n    <div class=\"ks-form-group\">\n        <label>Password</label>\n        <div class=\"has-error\">\n            <input type=\"password\" name=\"pwd\" data-rule=\"Password: required; length(8~16)\" data-tip=\"Please fill in at least eight characters\">\n        </div>\n    </div>\n    <div class=\"ks-form-group\">\n        <label></label>\n        <button class=\"ks-btn-primary\">Submit</button>\n        <button class=\"ks-btn-default\">reset</button>\n    </div>\n</form>\n\n<p><B>代码：</B><br>\n<br></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"form1\"</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">\"{theme:'bootstrap', timely:2, stopOnError:true}\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>Username<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"has-error\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"username\"</span> \n                <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;remote(cors:post:http://172.21.0.206:3000/aaa);\"</span>\n                &gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>Password<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"has-error\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwd\"</span> \n                <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"Password: required; length(8~16)\"</span> \n                <span class=\"hljs-attr\">data-tip</span>=<span class=\"hljs-string\">\"Please fill in at least eight characters\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-btn-primary\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"reset\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-btn-default\"</span>&gt;</span>reset<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<h3>前端转换服务端返回的结果格式</h3>\n<p><b>示例：</b>如果服务端返回格式无法更改，可以用 dataFilter 参数转换</p>\n<pre class=\"ks-hljs\"><code>$(<span class=\"hljs-string\">'#form1'</span>).validator({\n    <span class=\"hljs-comment\">/* 假设服务端返回结果为： {\"code\":400, \"msg\":\"名字已被占用\"}\n    */</span>\n    dataFilter:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>)</span>{\n         <span class=\"hljs-keyword\">if</span> (data.code === <span class=\"hljs-number\">200</span>){\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"\"</span>;\n         } <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">return</span> data.message;\n         }\n    },\n    <span class=\"hljs-comment\">//当验证通过后提交表单</span>\n    valid:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">form</span>)</span>{\n        form.submit();\n    },\n });\n</code></pre>\n</section>";

/***/ }

});