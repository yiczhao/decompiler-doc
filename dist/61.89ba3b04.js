webpackJsonp([61],{

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(216);

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/validatorDemo-23.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 217:
/***/ function(module, exports) {

	module.exports = "<section><h2>demo 示例</h2>\n<hr>\n<h3>加载插件：一般方式</h3>\n<br>\n<p><b>示例：</b><br>\n<br></p>\n<form class=\"form\" data-validator-option=\"{timely:2}\">\n    <div class=\"form-item\">\n        <input type=\"text\" name=\"user[email]\" data-rule=\"required;email\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-item\">\n        <input type=\"password\" name=\"password\" data-rule=\"required;\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-item\">\n        <button type=\"submit\">Submit</button>\n    </div>\n</form>\n<br>\n<p><b>代码片段：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form\"</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">\"{timely:2}\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"user[email]\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;email\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Email\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"Password\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<h3>满足某个条件才 required</h3>\n<br>\n<p><b>示例：</b></p>\n<form id=\"form1\" class=\"form\" data-validator-option=\"{timely:3,focusCleanup:true}\">\n    <h5>required( dependency-expression )</h5>\n    <div class=\"form-item\">\n        <label for=\"isCompany\"><input type=\"checkbox\" id=\"isCompany\" checked>Company</label>\n    </div>\n    <div class=\"form-item\">\n        <input type=\"text\" name=\"companyName\" data-rule=\"required(#isCompany:checked)\">\n    </div>\n    <div class=\"form-item\">\n        <button type=\"submit\">Submit</button>\n    </div>\n</form>\n<form id=\"form2\" class=\"form nice-validator n-default\" novalidate=\"novalidate\">\n    <h5>required( dependency-callback )</h5>\n    <div class=\"form-item\">\n        <label><input type=\"checkbox\" id=\"isPersonal\" checked>Personal</label>\n    </div>\n    <div class=\"form-item\">\n        <input type=\"text\" name=\"email\" aria-required=\"true\">\n    </div>\n    <div class=\"form-item\">\n        <button type=\"submit\">Submit</button>\n    </div>\n</form>\n<br>\n<p><b>代码片段：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"form1\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form\"</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">\"{timely:3,focusCleanup:true}\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h5</span>&gt;</span>required( dependency-expression )<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h5</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"isCompany\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"isCompany\"</span> <span class=\"hljs-attr\">checked</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>Company<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"companyName\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required(#isCompany:checked)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"form2\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form nice-validator n-default\"</span> <span class=\"hljs-attr\">novalidate</span>=<span class=\"hljs-string\">\"novalidate\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h5</span>&gt;</span>required( dependency-callback )<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h5</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"isPersonal\"</span> <span class=\"hljs-attr\">checked</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>Personal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">aria-required</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<h3>一组字段中至少填写一个或多个</h3>\n<br>\n<p><b>示例：</b></p>\n<form class=\"form\" data-validator-option=\"{timely:2,showOk:''}\">\n    <div class=\"form-item\">\n        <input type=\"text\" class=\"contact\" name=\"mobile\" placeholder=\"手机号\" data-rule=\"required(from, .contact); mobile\" data-msg-required=\"请至少填写一种联系方式\">\n    </div>\n    <div class=\"form-item\">\n        <input type=\"text\" class=\"contact\" name=\"tel\" placeholder=\"电话\" data-rule=\"required(from, .contact); tel\">\n    </div>\n    <div class=\"form-item\">\n        <input type=\"text\" class=\"contact\" name=\"email\" placeholder=\"邮箱\" data-rule=\"required(from, .contact); email\">\n    </div>\n    <div class=\"form-item\">\n        <button type=\"submit\">提交</button>\n    </div>\n</form>\n<br>\n<p><b>代码片段：</b></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form\"</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">\"{timely:2,showOk:''}\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"contact\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"mobile\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"手机号\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required(from, .contact); mobile\"</span> <span class=\"hljs-attr\">data-msg-required</span>=<span class=\"hljs-string\">\"请至少填写一种联系方式\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"contact\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"tel\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"电话\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required(from, .contact); tel\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"contact\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"邮箱\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required(from, .contact); email\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-item\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span>&gt;</span>提交<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<h3>基本表单验证</h3>\n<br>\n<p><b>示例：</b></p>\n<form id=\"form1\" data-validator-option=\"{theme:'bootstrap', timely:2, stopOnError:true}\">\n    <div class=\"form-group\">\n        <label class=\"control-label\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" data-rule=\"required;username;\" data-rule-username=\"[/[\\w\\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']\" data-tip=\"You can use letters, numbers and periods\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"pwd\" data-rule=\"Password: required; length(8~16)\" data-tip=\"Please fill in at least eight characters\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Verify Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"pwdAgain\" data-rule=\"Verify Password: required; match(pwd)\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Gender</label>\n        <select class=\"form-control\" name=\"gender\" data-rule=\"required\">\n            <option value=\"\">select ...</option>\n            <option value=\"1\">Male</option>\n            <option value=\"2\">Female</option>\n            <option value=\"3\">Other</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" data-rule=\"required;email\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Interest</label>\n        <div class=\"\">\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"interest\" data-rule=\"checked\">sports</label>\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"interest\">movie</label>\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"interest\">game</label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Note</label>\n        <textarea class=\"form-control\" data-rule=\"required;\"></textarea>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" id=\"agree_arguments\" data-rule=\"checked\">I agree to the service agreement.</label>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <button type=\"reset\" class=\"btn btn-default\">reset</button>\n    </div>\n</form>\n<br>\n<p><B>代码片段：</B></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"form1\"</span> <span class=\"hljs-attr\">data-validator-option</span>=<span class=\"hljs-string\">\"{theme:'bootstrap', timely:2, stopOnError:true}\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Username<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"username\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;username;\"</span> <span class=\"hljs-attr\">data-rule-username</span>=<span class=\"hljs-string\">\"[/[\\w\\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']\"</span> <span class=\"hljs-attr\">data-tip</span>=<span class=\"hljs-string\">\"You can use letters, numbers and periods\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Password<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwd\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"Password: required; length(8~16)\"</span> <span class=\"hljs-attr\">data-tip</span>=<span class=\"hljs-string\">\"Please fill in at least eight characters\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Verify Password<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"pwdAgain\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"Verify Password: required; match(pwd)\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Gender<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">select</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"gender\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>select ...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"1\"</span>&gt;</span>Male<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"2\"</span>&gt;</span>Female<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"3\"</span>&gt;</span>Other<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;email\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Interest<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox-inline\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"interest\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>sports<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox-inline\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"interest\"</span>&gt;</span>movie<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox-inline\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"interest\"</span>&gt;</span>game<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"control-label\"</span>&gt;</span>Note<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-control\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"required;\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox-inline\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"agree_arguments\"</span> <span class=\"hljs-attr\">data-rule</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>I agree to the service agreement.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"form-group\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn btn-primary\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"reset\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn btn-default\"</span>&gt;</span>reset<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n</section>";

/***/ }

});