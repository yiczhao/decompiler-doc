webpackJsonp([58],{

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(206);

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(207)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/understandingRules-20.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 207:
/***/ function(module, exports) {

	module.exports = "<section><h2>了解规则</h2>\n<hr>\n<h3>(1)、定义规则语句</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 单个规则</span>\n<span class=\"hljs-string\">\"required\"</span>\n<span class=\"hljs-comment\">// 多个规则</span>\n<span class=\"hljs-string\">\"required; email; remote(/server/check/email)\"</span>\n<span class=\"hljs-comment\">// 范围参数</span>\n<span class=\"hljs-string\">\"range(1~100)\"</span>\n<span class=\"hljs-comment\">// 规则有多个参数</span>\n<span class=\"hljs-string\">\"match(neq, oldPassword)\"</span>\n<span class=\"hljs-comment\">// 定义显示替换名称</span>\n<span class=\"hljs-string\">\"邮箱: required; email\"</span>\n</code></pre>\n<h3>(2)、配置规则</h3>\n<blockquote>\n<p>a. 在 DOM 中配置规则，使用 data-rule<br>\nb. 在 JS 中配置规则，使用 fields 参数</p>\n</blockquote>\n<br>\n<p><B>示例：</B> DOM 配置规则</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;email;remote(/path/to/server)\"</span>&gt;</span>\n</code></pre>\n<p><B>示例：</B>JS 配置规则</p>\n<pre class=\"ks-hljs\"><code>$(<span class=\"hljs-string\">\"#form\"</span>).validator({\n    <span class=\"hljs-attr\">fields</span>: {\n        <span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">\"required;email;remote(/path/to/server)\"</span>\n    }\n});\n</code></pre>\n<h3>(3)、内置规则</h3>\n<blockquote>\n<p>内置规则为插件核心自带，在自定义规则的时候如果重名，则自定义的规则优先</p>\n</blockquote>\n<p>nice-validator 内置 8 个规则，包括：</p>\n<ol>\n    <li>required - 使字段必填</li>\n    <li>checked - 必选，还可以控制选择项目的数量</li>\n    <li>match - 当前字段与另一个字段比较</li>\n    <li>remote - 获取服务器端验证的结果</li>\n    <li>integer - 只能填写整数</li>\n    <li>range - 只能填写指定范围的数</li>\n    <li>length - 字段值必须符合指定长度</li>\n    <li>filter - 过滤当前字段的值，不做验证</li>\n</ol>\n<br>\n<h3>(4)、自定义规则</h3>\n<blockquote>\n<p>a. 可以使用正则表达式或者函数<br>\nb. DOM 方式使用 data-rule-* = &quot;[RegExp, 'errorMessage']&quot;<br>\nc. JS 方式使用 rules 参数配置规则</p>\n</blockquote>\n<br>\n<h3>required - 必填</h3>\n<blockquote>\n<p>适用于 input、textarea、select 输入框。（checkbox 与 radio 请使用 checked 规则）<br>\n字段必填，则值不能为空。字段非必填，则值为空的时候直接验证通过<br>\nnice-validator 扩展了选择器 :filled，选择填写了的字段</p>\n</blockquote>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n<th>示例</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>required</td>\n<td>字段必填</td>\n<td>required</td>\n</tr>\n<tr>\n<td>required(ruleName)</td>\n<td>满足规则 ruleName 则字段必填</td>\n<td>required(isCompany)</td>\n</tr>\n<tr>\n<td>required(jqSelector)</td>\n<td>满足 jqSelector 则字段必填</td>\n<td>required(#id:filled)、required(#id:checked)、required(#id:enabled)</td>\n</tr>\n<tr>\n<td>required(from, class, count)</td>\n<td>在一组字段中至少填写一个或多个</td>\n<td>required(from, .contact)</td>\n</tr>\n<tr>\n<td>required(not, value)</td>\n<td>字段必填，但是排除值为 value 的情况</td>\n<td>required(not, -1)</td>\n</tr>\n</tbody>\n</table></div><br>\n<p><b> 示例：</b>如果满足规则 &quot;isCompany&quot;，则字段必填</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"form1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"isCompany\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"isCompany\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"companyName\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>$(<span class=\"hljs-string\">'#form1'</span>).validator({\n    <span class=\"hljs-attr\">rules</span>: {\n        <span class=\"hljs-attr\">isCompany</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n            <span class=\"hljs-keyword\">return</span> $(<span class=\"hljs-string\">'#isCompany'</span>).prop(<span class=\"hljs-string\">'checked'</span>);\n        }\n    },\n    <span class=\"hljs-attr\">fields</span>: {\n        <span class=\"hljs-attr\">companyName</span>: <span class=\"hljs-string\">'required(isCompany)'</span>\n    }\n});\n</code></pre>\n<h3>checked - 必选</h3>\n<blockquote>\n<p>match 可以用于比较两个字段值是否相同，或是否不同，或大小关系，也可以用于比较日期或者时间</p>\n</blockquote>\n<br>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>match(name)</td>\n<td>当前字段值必须和 name 字段的值匹配</td>\n</tr>\n<tr>\n<td>match(eq, name)</td>\n<td>同上</td>\n</tr>\n<tr>\n<td>match(neq, name)</td>\n<td>当前字段值必须和 name 字段值不同</td>\n</tr>\n<tr>\n<td>match(lt, name)</td>\n<td>当前字段值必须小于 name 字段值</td>\n</tr>\n<tr>\n<td>match(gt, name)</td>\n<td>当前字段值必须大于 name 字段值</td>\n</tr>\n<tr>\n<td>match(lte, name)</td>\n<td>当前字段值必须小于等于 name 字段值</td>\n</tr>\n<tr>\n<td>match(gte, name)</td>\n<td>当前字段值必须大于等于 name 字段值</td>\n</tr>\n<tr>\n<td>match(gte, name, date)</td>\n<td>当前日期值必须大于等于 name 字段日期值</td>\n</tr>\n<tr>\n<td>match(gte, name, datetime)</td>\n<td>当前时间值必须大于等于 name 字段时间值</td>\n</tr>\n</tbody>\n</table></div><BR>\n<p><B>示例：</B>确认密码要与密码一致</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>密码：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwd\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"密码: required;password;\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>确认密码：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"confirmPwd\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"确认密码: match(pwd);\"</span>&gt;</span>\n</code></pre>\n<p><B>示例：</B>结束日期必须大于开始日期</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>开始日期：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"startDate\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"开始日期: required;date;\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span>结束日期：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"endDate\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"结束日期: required;date;match(gt, startDate, date)\"</span>&gt;</span>\n</code></pre>\n<h3>remote - 远程验证</h3>\n<blockquote>\n<p>服务端验证并返回结果，URL 为必传参数，默认 POST 请求</p>\n</blockquote>\n<br>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>remote(URL)</td>\n<td>请求服务端验证</td>\n</tr>\n<tr>\n<td>remote(get:URL)</td>\n<td>使用 GET 方式请求服务端验证</td>\n</tr>\n<tr>\n<td>remote(URL, name1, #id2 ...)</td>\n<td>传递额外动态参数</td>\n</tr>\n<tr>\n<td>remote(URL, foo=value1&amp;bar=value2, name3 ...)</td>\n<td>传递额外固定参数 (v0.8.0+)</td>\n</tr>\n<tr>\n<td>remote(URL, foo:name1, bar:#id2, name3 ...)</td>\n<td>代理参数名称（实际服务器接收的参数为 foo 和 bar）</td>\n</tr>\n<tr>\n<td>remote(jsonpURL)</td>\n<td>跨域地址自动采用 JSONP 请求方式</td>\n</tr>\n<tr>\n<td>remote([cors:</td>\n<td>jsonp:][get:</td>\n</tr>\n</tbody>\n</table></div><br>\n<p>示例：跨域请求</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 强制 jsonp 请求</span>\n<span class=\"hljs-string\">\"remote(jsonp:/user/checkName)\"</span>\n<span class=\"hljs-comment\">// 强制 CORS, 请求类型为 POST （0.10.8+）</span>\n<span class=\"hljs-string\">\"remote(cors:post:/user/checkName)\"</span>\n</code></pre>\n<h3>integer - 整数</h3>\n<blockquote>\n<p>整数或者整数范围</p>\n</blockquote>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>integer</td>\n<td>整数</td>\n</tr>\n<tr>\n<td>integer(+)</td>\n<td>正整数</td>\n</tr>\n<tr>\n<td>integer(+0)</td>\n<td>正整数和零</td>\n</tr>\n<tr>\n<td>integer(-)</td>\n<td>负整数</td>\n</tr>\n<tr>\n<td>integer(-0)</td>\n<td>负整数和零</td>\n</tr>\n</tbody>\n</table></div><br>\n<h3>range - 数值范围</h3>\n<blockquote>\n<p>如果传第二个参数 “true”，则全角字符（汉子）计算为两个字符</p>\n</blockquote>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>length(n)</td>\n<td>请填写 n 个字符</td>\n</tr>\n<tr>\n<td>length(n~)</td>\n<td>请至少填写 n 个字符</td>\n</tr>\n<tr>\n<td>length(~n)</td>\n<td>请最多填写 n 个字符</td>\n</tr>\n<tr>\n<td>length(n1~n2)</td>\n<td>请填写 n1 到 n2 个字符</td>\n</tr>\n<tr>\n<td>length(n~, true)</td>\n<td>请至少填写 n 个字符（全角字符计算双字符）</td>\n</tr>\n</tbody>\n</table></div><br>\n<p><b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 密码为 6 到 16 位 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwd\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;length(6~16)\"</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!-- 内容不超过 140 个字符 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"content\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"length(~140)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n</code></pre>\n<h3>ilter - 过滤字符</h3>\n<blockquote>\n<p>注意：只过滤字符，不验证</p>\n</blockquote>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>规则</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filter</td>\n<td>过滤 &lt;&gt;`&quot;'\\ 和字符实体编码的字符</td>\n</tr>\n<tr>\n<td>filter(RegExp)</td>\n<td>自定义过滤正则</td>\n</tr>\n</tbody>\n</table></div><br>\n<p><b>示例：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 过滤非数字字符</span>\n<span class=\"hljs-string\">\"filter(\\D)\"</span>\n<span class=\"hljs-comment\">// 过滤非中文</span>\n<span class=\"hljs-string\">\"filter(^\\u0391-\\uFFE5)\"</span>\n</code></pre>\n</BR></section>";

/***/ }

});