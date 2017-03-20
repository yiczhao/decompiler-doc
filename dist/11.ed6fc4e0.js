webpackJsonp([11],{

/***/ 134:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170);

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(173)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/usageMode-6.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(174)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/decompiler-doc/node_modules/vue-markdown-loader/_cache/usageMode-6.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(135)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js!./../../vue-loader/lib/selector.js?type=style&index=0!./usageMode-6.vue", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js!./../../vue-loader/lib/selector.js?type=style&index=0!./usageMode-6.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(134)();
	// imports


	// module
	exports.push([module.id, "\n.error{\n  color:red;\n}\n", ""]);

	// exports


/***/ },

/***/ 173:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h3>使用方式</h3>
	// <br>
	// <h4>1、将校验规则写到控件中</h4>
	// <br>
	// <form class="cmxform" id="commentForm" method="get" action="">
	//   <fieldset>
	//     <legend>输入您的名字，邮箱，URL，备注。</legend>
	//     <p>
	//       <label for="cname">Name (必需, 最小两个字母)</label>
	//       <input id="cname" name="name" minlength="2" type="text" required>
	//     </p>
	//     <p>
	//       <label for="cemail">E-Mail (必需)</label>
	//       <input id="cemail" type="email" name="email" required>
	//     </p>
	//     <p>
	//       <label for="curl">URL (可选)</label>
	//       <input id="curl" type="url" name="url">
	//     </p>
	//     <p>
	//       <label for="ccomment">备注 (必需)</label>
	//       <textarea id="ccomment" name="comment" required></textarea>
	//     </p>
	//     <p>
	//       <input class="submit" type="submit" value="Submit">
	//     </p>
	//   </fieldset>
	// </form>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cmxform"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"commentForm"</span> <span class="hljs-attr">method</span>=<span class="hljs-string">"get"</span> <span class="hljs-attr">action</span>=<span class="hljs-string">""</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>输入您的名字，邮箱，URL，备注。<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"cname"</span>&gt;</span>Name (必需, 最小两个字母)<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cname"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">minlength</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">required</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"cemail"</span>&gt;</span>E-Mail (必需)<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cemail"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">required</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"curl"</span>&gt;</span>URL (可选)<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"curl"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"url"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"url"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"ccomment"</span>&gt;</span>备注 (必需)<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"ccomment"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"comment"</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Submit"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
	// </code></pre>
	// <br>
	// <h4>2、 将校验规则写到 js 代码中</h4>
	// <br>
	// <form class="cmxform" id="signupForm" method="get" action="">
	//   <fieldset>
	//     <legend>验证完整的表单</legend>
	//     <p>
	//       <label for="firstname">名字</label>
	//       <input id="firstname" name="firstname" type="text">
	//     </p>
	//     <p>
	//       <label for="lastname">姓氏</label>
	//       <input id="lastname" name="lastname" type="text">
	//     </p>
	//     <p>
	//       <label for="username">用户名</label>
	//       <input id="username" name="username" type="text">
	//     </p>
	//     <p>
	//       <label for="password">密码</label>
	//       <input id="password" name="password" type="password">
	//     </p>
	//     <p>
	//       <label for="confirm_password">验证密码</label>
	//       <input id="confirm_password" name="confirm_password" type="password">
	//     </p>
	//     <p>
	//       <label for="email">Email</label>
	//       <input id="email" name="email" type="email">
	//     </p>
	//     <p>
	//       <label for="agree">请同意我们的声明</label>
	//       <input type="checkbox" class="checkbox" id="agree" name="agree">
	//     </p>
	//     <p>
	//       <label for="newsletter">我乐意接收新信息</label>
	//       <input type="checkbox" class="checkbox" id="newsletter" name="newsletter">
	//     </p>
	//     <fieldset id="newsletter_topics">
	//       <legend>主题 (至少选择两个) - 注意：如果没有勾选“我乐意接收新信息”以下选项会隐藏，但我们这里作为演示让它可见</legend>
	//       <label for="topic_marketflash">
	//         <input type="checkbox" id="topic_marketflash" value="marketflash" name="topic[]">Marketflash
	//       </label>
	//       <label for="topic_fuzz">
	//         <input type="checkbox" id="topic_fuzz" value="fuzz" name="topic[]">Latest fuzz
	//       </label>
	//       <label for="topic_digester">
	//         <input type="checkbox" id="topic_digester" value="digester" name="topic[]">Mailing list digester
	//       </label>
	//       <label for="topic" class="error" style="display:none">至少选择两个</label>
	//     </fieldset>
	//     <p>
	//       <input class="submit" type="submit" value="submit">
	//     </p>
	//   </fieldset>
	// </form>
	// <pre class="ks-hljs"><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	// $.validator.setDefaults({
	//     <span class="hljs-attr">submitHandler</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
	//       alert(<span class="hljs-string">"提交事件!"</span>);
	//     }
	// });
	// ready:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
	// <span class="hljs-comment">// 在键盘按下并释放及提交后验证提交表单</span>
	//   $(<span class="hljs-string">"#signupForm"</span>).validate({
	//       <span class="hljs-attr">rules</span>: {
	//         <span class="hljs-attr">firstname</span>: <span class="hljs-string">"required"</span>,
	//         <span class="hljs-attr">lastname</span>: <span class="hljs-string">"required"</span>,
	//         <span class="hljs-attr">username</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-number">2</span>
	//         },
	//         <span class="hljs-attr">password</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-number">5</span>
	//         },
	//         <span class="hljs-attr">confirm_password</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-number">5</span>,
	//           <span class="hljs-attr">equalTo</span>: <span class="hljs-string">"#password"</span>
	//         },
	//         <span class="hljs-attr">email</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
	//           <span class="hljs-attr">email</span>: <span class="hljs-literal">true</span>
	//         },
	//         <span class="hljs-string">"topic[]"</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-string">"#newsletter:checked"</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-number">2</span>
	//         },
	//         <span class="hljs-attr">agree</span>: <span class="hljs-string">"required"</span>
	//       },
	//       <span class="hljs-attr">messages</span>: {
	//         <span class="hljs-attr">firstname</span>: <span class="hljs-string">"请输入您的名字"</span>,
	//         <span class="hljs-attr">lastname</span>: <span class="hljs-string">"请输入您的姓氏"</span>,
	//         <span class="hljs-attr">username</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-string">"请输入用户名"</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-string">"用户名必需由两个字母组成"</span>
	//         },
	//         <span class="hljs-attr">password</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-string">"请输入密码"</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-string">"密码长度不能小于 5 个字母"</span>
	//         },
	//         <span class="hljs-attr">confirm_password</span>: {
	//           <span class="hljs-attr">required</span>: <span class="hljs-string">"请输入密码"</span>,
	//           <span class="hljs-attr">minlength</span>: <span class="hljs-string">"密码长度不能小于 5 个字母"</span>,
	//           <span class="hljs-attr">equalTo</span>: <span class="hljs-string">"两次密码输入不一致"</span>
	//         },
	//         <span class="hljs-attr">email</span>: <span class="hljs-string">"请输入一个正确的邮箱"</span>,
	//         <span class="hljs-attr">agree</span>: <span class="hljs-string">"请接受我们的声明"</span>,
	//         <span class="hljs-attr">topic</span>: <span class="hljs-string">"请选择两个主题"</span>
	//       }
	//   });
	// });
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
	// <span class="hljs-selector-class">.error</span>{
	//   <span class="hljs-attribute">color</span>:red;
	// }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cmxform"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"signupForm"</span> <span class="hljs-attr">method</span>=<span class="hljs-string">"get"</span> <span class="hljs-attr">action</span>=<span class="hljs-string">""</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>验证完整的表单<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"firstname"</span>&gt;</span>名字<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"firstname"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"firstname"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"3~10位"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"lastname"</span>&gt;</span>姓氏<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"lastname"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"lastname"</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"username"</span>&gt;</span>用户名<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span>&gt;</span>密码<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"confirm_password"</span>&gt;</span>验证密码<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"confirm_password"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"confirm_password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"email"</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"agree"</span>&gt;</span>请同意我们的声明<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"agree"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"agree"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"newsletter"</span>&gt;</span>我乐意接收新信息<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"newsletter"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"newsletter"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"newsletter_topics"</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>主题 (至少选择两个) - 注意：如果没有勾选“我乐意接收新信息”以下选项会隐藏，但我们这里作为演示让它可见<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"topic_marketflash"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topic_marketflash"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"marketflash"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"topic[]"</span>&gt;</span>Marketflash
	//       <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"topic_fuzz"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topic_fuzz"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fuzz"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"topic[]"</span>&gt;</span>Latest fuzz
	//       <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"topic_digester"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topic_digester"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"digester"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"topic[]"</span>&gt;</span>Mailing list digester
	//       <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"topic"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"error"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display:none"</span>&gt;</span>至少选择两个<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"提交"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	//
	// </section></template>
	// <style>
	// .error{
	//   color:red;
	// }
	// </style>
	// <script lang="babel">
	exports.default = {
	  data: function data() {
	    return {
	      hello: '你好！'
	    };
	  },

	  methods: {},

	  created: function created() {},
	  ready: function ready() {
	    // 在键盘按下并释放及提交后验证提交表单
	    $("#signupForm").validate({
	      rules: {
	        // firstname: "required",
	        lastname: "required",
	        username: {
	          required: true,
	          minlength: 2
	        },
	        password: {
	          required: true,
	          minlength: 5
	        },
	        confirm_password: {
	          required: true,
	          minlength: 5,
	          equalTo: "#password"
	        },
	        email: {
	          required: true,
	          email: true
	        },
	        "topic[]": {
	          required: "#newsletter:checked",
	          minlength: 2
	        },
	        agree: "required"
	      },
	      messages: {
	        // firstname: "请输入您的名字",
	        lastname: "请输入您的姓氏",
	        username: {
	          required: "请输入用户名",
	          minlength: "用户名必需由两个字母组成"
	        },
	        password: {
	          required: "请输入密码",
	          minlength: "密码长度不能小于 5 个字母"
	        },
	        confirm_password: {
	          required: "请输入密码",
	          minlength: "密码长度不能小于 5 个字母",
	          equalTo: "两次密码输入不一致"
	        },
	        email: {
	          email: "请输入一个正确的邮箱",
	          required: "必填"
	        },
	        agree: "请接受我们的声明",
	        topic: "请选择两个主题"
	      }
	    });
	  }
	};
	// </script>

/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = "<section><h3>使用方式</h3>\n<br>\n<h4>1、将校验规则写到控件中</h4>\n<br>\n<form class=\"cmxform\" id=\"commentForm\" method=\"get\" action=\"\">\n  <fieldset>\n    <legend>输入您的名字，邮箱，URL，备注。</legend>\n    <p>\n      <label for=\"cname\">Name (必需, 最小两个字母)</label>\n      <input id=\"cname\" name=\"name\" minlength=\"2\" type=\"text\" required>\n    </p>\n    <p>\n      <label for=\"cemail\">E-Mail (必需)</label>\n      <input id=\"cemail\" type=\"email\" name=\"email\" required>\n    </p>\n    <p>\n      <label for=\"curl\">URL (可选)</label>\n      <input id=\"curl\" type=\"url\" name=\"url\">\n    </p>\n    <p>\n      <label for=\"ccomment\">备注 (必需)</label>\n      <textarea id=\"ccomment\" name=\"comment\" required></textarea>\n    </p>\n    <p>\n      <input class=\"submit\" type=\"submit\" value=\"Submit\">\n    </p>\n  </fieldset>\n</form>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"cmxform\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"commentForm\"</span> <span class=\"hljs-attr\">method</span>=<span class=\"hljs-string\">\"get\"</span> <span class=\"hljs-attr\">action</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">fieldset</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">legend</span>&gt;</span>输入您的名字，邮箱，URL，备注。<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">legend</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"cname\"</span>&gt;</span>Name (必需, 最小两个字母)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"cname\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"name\"</span> <span class=\"hljs-attr\">minlength</span>=<span class=\"hljs-string\">\"2\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">required</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"cemail\"</span>&gt;</span>E-Mail (必需)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"cemail\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">required</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"curl\"</span>&gt;</span>URL (可选)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"curl\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"url\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"url\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"ccomment\"</span>&gt;</span>备注 (必需)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"ccomment\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"comment\"</span> <span class=\"hljs-attr\">required</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Submit\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">fieldset</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n</code></pre>\n<br>\n<h4>2、 将校验规则写到 js 代码中</h4>\n<br>\n<form class=\"cmxform\" id=\"signupForm\" method=\"get\" action=\"\">\n  <fieldset>\n    <legend>验证完整的表单</legend>\n    <p>\n      <label for=\"firstname\">名字</label>\n      <input id=\"firstname\" name=\"firstname\" type=\"text\">\n    </p>\n    <p>\n      <label for=\"lastname\">姓氏</label>\n      <input id=\"lastname\" name=\"lastname\" type=\"text\">\n    </p>\n    <p>\n      <label for=\"username\">用户名</label>\n      <input id=\"username\" name=\"username\" type=\"text\">\n    </p>\n    <p>\n      <label for=\"password\">密码</label>\n      <input id=\"password\" name=\"password\" type=\"password\">\n    </p>\n    <p>\n      <label for=\"confirm_password\">验证密码</label>\n      <input id=\"confirm_password\" name=\"confirm_password\" type=\"password\">\n    </p>\n    <p>\n      <label for=\"email\">Email</label>\n      <input id=\"email\" name=\"email\" type=\"email\">\n    </p>\n    <p>\n      <label for=\"agree\">请同意我们的声明</label>\n      <input type=\"checkbox\" class=\"checkbox\" id=\"agree\" name=\"agree\">\n    </p>\n    <p>\n      <label for=\"newsletter\">我乐意接收新信息</label>\n      <input type=\"checkbox\" class=\"checkbox\" id=\"newsletter\" name=\"newsletter\">\n    </p>\n    <fieldset id=\"newsletter_topics\">\n      <legend>主题 (至少选择两个) - 注意：如果没有勾选“我乐意接收新信息”以下选项会隐藏，但我们这里作为演示让它可见</legend>\n      <label for=\"topic_marketflash\">\n        <input type=\"checkbox\" id=\"topic_marketflash\" value=\"marketflash\" name=\"topic[]\">Marketflash\n      </label>\n      <label for=\"topic_fuzz\">\n        <input type=\"checkbox\" id=\"topic_fuzz\" value=\"fuzz\" name=\"topic[]\">Latest fuzz\n      </label>\n      <label for=\"topic_digester\">\n        <input type=\"checkbox\" id=\"topic_digester\" value=\"digester\" name=\"topic[]\">Mailing list digester\n      </label>\n      <label for=\"topic\" class=\"error\" style=\"display:none\">至少选择两个</label>\n    </fieldset>\n    <p>\n      <input class=\"submit\" type=\"submit\" value=\"submit\">\n    </p>\n  </fieldset>\n</form>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-meta\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">html</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">charset</span>=<span class=\"hljs-string\">\"utf-8\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n$.validator.setDefaults({\n    <span class=\"hljs-attr\">submitHandler</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      alert(<span class=\"hljs-string\">\"提交事件!\"</span>);\n    }\n});\nready:<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>)</span>{\n<span class=\"hljs-comment\">// 在键盘按下并释放及提交后验证提交表单</span>\n  $(<span class=\"hljs-string\">\"#signupForm\"</span>).validate({\n      <span class=\"hljs-attr\">rules</span>: {\n        <span class=\"hljs-attr\">firstname</span>: <span class=\"hljs-string\">\"required\"</span>,\n        <span class=\"hljs-attr\">lastname</span>: <span class=\"hljs-string\">\"required\"</span>,\n        <span class=\"hljs-attr\">username</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-number\">2</span>\n        },\n        <span class=\"hljs-attr\">password</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-number\">5</span>\n        },\n        <span class=\"hljs-attr\">confirm_password</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-number\">5</span>,\n          <span class=\"hljs-attr\">equalTo</span>: <span class=\"hljs-string\">\"#password\"</span>\n        },\n        <span class=\"hljs-attr\">email</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">email</span>: <span class=\"hljs-literal\">true</span>\n        },\n        <span class=\"hljs-string\">\"topic[]\"</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-string\">\"#newsletter:checked\"</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-number\">2</span>\n        },\n        <span class=\"hljs-attr\">agree</span>: <span class=\"hljs-string\">\"required\"</span>\n      },\n      <span class=\"hljs-attr\">messages</span>: {\n        <span class=\"hljs-attr\">firstname</span>: <span class=\"hljs-string\">\"请输入您的名字\"</span>,\n        <span class=\"hljs-attr\">lastname</span>: <span class=\"hljs-string\">\"请输入您的姓氏\"</span>,\n        <span class=\"hljs-attr\">username</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-string\">\"请输入用户名\"</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-string\">\"用户名必需由两个字母组成\"</span>\n        },\n        <span class=\"hljs-attr\">password</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-string\">\"请输入密码\"</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-string\">\"密码长度不能小于 5 个字母\"</span>\n        },\n        <span class=\"hljs-attr\">confirm_password</span>: {\n          <span class=\"hljs-attr\">required</span>: <span class=\"hljs-string\">\"请输入密码\"</span>,\n          <span class=\"hljs-attr\">minlength</span>: <span class=\"hljs-string\">\"密码长度不能小于 5 个字母\"</span>,\n          <span class=\"hljs-attr\">equalTo</span>: <span class=\"hljs-string\">\"两次密码输入不一致\"</span>\n        },\n        <span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">\"请输入一个正确的邮箱\"</span>,\n        <span class=\"hljs-attr\">agree</span>: <span class=\"hljs-string\">\"请接受我们的声明\"</span>,\n        <span class=\"hljs-attr\">topic</span>: <span class=\"hljs-string\">\"请选择两个主题\"</span>\n      }\n  });\n});\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span>&gt;</span><span class=\"css\">\n<span class=\"hljs-selector-class\">.error</span>{\n  <span class=\"hljs-attribute\">color</span>:red;\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">form</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"cmxform\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"signupForm\"</span> <span class=\"hljs-attr\">method</span>=<span class=\"hljs-string\">\"get\"</span> <span class=\"hljs-attr\">action</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">fieldset</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">legend</span>&gt;</span>验证完整的表单<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">legend</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"firstname\"</span>&gt;</span>名字<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"firstname\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"firstname\"</span> <span class=\"hljs-attr\">required</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"3~10位\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"lastname\"</span>&gt;</span>姓氏<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"lastname\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"lastname\"</span>  <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"username\"</span>&gt;</span>用户名<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"username\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"username\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"password\"</span>&gt;</span>密码<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"password\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"confirm_password\"</span>&gt;</span>验证密码<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"confirm_password\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"confirm_password\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"password\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"email\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"email\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"email\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"agree\"</span>&gt;</span>请同意我们的声明<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"agree\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"agree\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"newsletter\"</span>&gt;</span>我乐意接收新信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"newsletter\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"newsletter\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">fieldset</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"newsletter_topics\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">legend</span>&gt;</span>主题 (至少选择两个) - 注意：如果没有勾选“我乐意接收新信息”以下选项会隐藏，但我们这里作为演示让它可见<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">legend</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"topic_marketflash\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"topic_marketflash\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"marketflash\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"topic[]\"</span>&gt;</span>Marketflash\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"topic_fuzz\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"topic_fuzz\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"fuzz\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"topic[]\"</span>&gt;</span>Latest fuzz\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"topic_digester\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"topic_digester\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"digester\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"topic[]\"</span>&gt;</span>Mailing list digester\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"topic\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"error\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"display:none\"</span>&gt;</span>至少选择两个<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">fieldset</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"submit\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"提交\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">fieldset</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">form</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">html</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n\n</section>";

/***/ }

});