## 了解规则

---
### (1)、定义规则语句

```javascript
// 单个规则
"required"
// 多个规则
"required; email; remote(/server/check/email)"
// 范围参数
"range(1~100)"
// 规则有多个参数
"match(neq, oldPassword)"
// 定义显示替换名称
"邮箱: required; email"
```
### (2)、配置规则
>a. 在 DOM 中配置规则，使用 data-rule
>b. 在 JS 中配置规则，使用 fields 参数

<br/>

<B>示例：</B> DOM 配置规则
```html
<input name="email" data-rule="required;email;remote(/path/to/server)">
```
<B>示例：</B>JS 配置规则
```javascript
$("#form").validator({
    fields: {
        email: "required;email;remote(/path/to/server)"
    }
});
```
### (3)、内置规则
>内置规则为插件核心自带，在自定义规则的时候如果重名，则自定义的规则优先

nice-validator 内置 8 个规则，包括：

<ol>
    <li>required - 使字段必填</li>
    <li>checked - 必选，还可以控制选择项目的数量</li>
    <li>match - 当前字段与另一个字段比较</li>
    <li>remote - 获取服务器端验证的结果</li>
    <li>integer - 只能填写整数</li>
    <li>range - 只能填写指定范围的数</li>
    <li>length - 字段值必须符合指定长度</li>
    <li>filter - 过滤当前字段的值，不做验证</li>
</ol>

<br/>

### (4)、自定义规则

>a. 可以使用正则表达式或者函数
>b. DOM 方式使用 data-rule-* = "[RegExp, 'errorMessage']"
>c. JS 方式使用 rules 参数配置规则

<br/>

### required - 必填
>适用于 input、textarea、select 输入框。（checkbox 与 radio 请使用 checked 规则）
>字段必填，则值不能为空。字段非必填，则值为空的时候直接验证通过
>nice-validator 扩展了选择器 :filled，选择填写了的字段


|规则 | 描述 |  示例|
|---|---|----|
| required  |  字段必填  |  required |
| required(ruleName) | 满足规则 ruleName 则字段必填 | required(isCompany)|
| required(jqSelector)  |  满足 jqSelector 则字段必填    | required(#id:filled)、required(#id:checked)、required(#id:enabled) |
|required(from, class, count)  |   在一组字段中至少填写一个或多个   |required(from, .contact) |
|required(not, value)   |  字段必填，但是排除值为 value 的情况  |  required(not, -1) |

<br/>

<b> 示例：</b>如果满足规则 "isCompany"，则字段必填
```html
<form id="form1">
    <input type="checkbox" name="isCompany" id="isCompany">
    <input type="text" name="companyName">
</form>
```

```javascript
$('#form1').validator({
    rules: {
        isCompany: function() {
            return $('#isCompany').prop('checked');
        }
    },
    fields: {
        companyName: 'required(isCompany)'
    }
});
```


### checked - 必选
>match 可以用于比较两个字段值是否相同，或是否不同，或大小关系，也可以用于比较日期或者时间

<br/>

| 规则 | 描述 |
|---|---|
| match(name) |  当前字段值必须和 name 字段的值匹配| 
| match(eq, name) |  同上| 
| match(neq, name)  |   当前字段值必须和 name 字段值不同| 
| match(lt, name) | 当前字段值必须小于 name 字段值| 
| match(gt, name) | 当前字段值必须大于 name 字段值| 
| match(lte, name)    | 当前字段值必须小于等于 name 字段值| 
| match(gte, name)   | 当前字段值必须大于等于 name 字段值| 
| match(gte, name, date)  | 当前日期值必须大于等于 name 字段日期值| 
| match(gte, name, datetime)  | 当前时间值必须大于等于 name 字段时间值| 

<BR/>

<B>示例：</B>确认密码要与密码一致
```HTML
<label>密码：</label>
<input name="pwd" data-rule="密码: required;password;">
<label>确认密码：</label>
<input name="confirmPwd" data-rule="确认密码: match(pwd);">
```

<B>示例：</B>结束日期必须大于开始日期
```HTML
<label>开始日期：</label>
<input name="startDate" data-rule="开始日期: required;date;">
<label>结束日期：</label>
<input name="endDate" data-rule="结束日期: required;date;match(gt, startDate, date)">
```


### remote - 远程验证

>服务端验证并返回结果，URL 为必传参数，默认 POST 请求

<br/>

|规则 | 描述|
|---|---|
| remote(URL) | 请求服务端验证
| remote(get:URL) | 使用 GET 方式请求服务端验证
| remote(URL, name1, #id2 ...)    | 传递额外动态参数
| remote(URL, foo=value1&bar=value2, name3 ...)   | 传递额外固定参数 (v0.8.0+)
| remote(URL, foo:name1, bar:#id2, name3 ...) | 代理参数名称（实际服务器接收的参数为 foo 和 bar）| 
| remote(jsonpURL)   |  跨域地址自动采用 JSONP 请求方式| 
| remote([cors:|jsonp:][get:|post:]URL)  |  强制 CORS 请求或者 JSONP 请求，强制 GET 或者 POST 请求 (v0.10.8+)| 

<br/>

示例：跨域请求

```javascript
// 强制 jsonp 请求
"remote(jsonp:/user/checkName)"
// 强制 CORS, 请求类型为 POST （0.10.8+）
"remote(cors:post:/user/checkName)"
```


### integer - 整数
>整数或者整数范围

| 规则  | 描述| 
| ---  | --- | 
| integer | 整数| 
| integer(+)  | 正整数| 
| integer(+0) | 正整数和零| 
| integer(-)  | 负整数| 
| integer(-0) | 负整数和零| 

<br/>

### range - 数值范围
>如果传第二个参数 “true”，则全角字符（汉子）计算为两个字符

| 规则 |  描述| 
| --| --| 
| length(n)   | 请填写 n 个字符| 
| length(n~)  | 请至少填写 n 个字符| 
| length(~n)  | 请最多填写 n 个字符| 
| length(n1~n2)   | 请填写 n1 到 n2 个字符| 
| length(n~, true)    | 请至少填写 n 个字符（全角字符计算双字符）| 

<br/>

<b/>示例：</b>
```html
<!-- 密码为 6 到 16 位 -->
<input type="password" name="pwd" data-rule="required;length(6~16)">
<!-- 内容不超过 140 个字符 -->
<textarea name="content" data-rule="length(~140)"></textarea>
```


### ilter - 过滤字符

>注意：只过滤字符，不验证

| 规则 |  描述| 
| --| --| 
| filter  | 过滤 <>`"'\ 和字符实体编码的字符| 
| filter(RegExp) |  自定义过滤正则| 

<br/>

<b>示例：</b>
```javascript
// 过滤非数字字符
"filter(\D)"
// 过滤非中文
"filter(^\u0391-\uFFE5)"
```
