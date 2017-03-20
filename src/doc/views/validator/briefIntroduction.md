## 简介
>validator 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API
---
### (1)、常用内置规则以及提示

|规则 | 描述（验证信息） |  示例|
|---|---|----|
|  required |  此处不能为空 | data-rule=“required;”  |
| digits | 请填写数字  | | 
| letters | 请填写字母 |  | 
| date  | 请填写有效的日期，格式:yyyy-mm-dd |  | 
| time | 请填写有效的时间，00:00到23:59之间 |  | 
| email  | 请填写有效的邮箱 |  | 
| url | 请填写有效的网址 |  | 
| qq   | 请填写有效的QQ号 |  | 
| IDcard | 请填写正确的身份证号码 |  | 
| tel | 请填写有效的电话号码 |  | 
| mobile  | 请填写有效的手机号 |  | 
| zipcode |   请检查邮政编码格式 |  | 
| chinese  |  请填写中文字符 |  | 
| username  |  请填写3-12位数字、字母、下划线 |  | 
| password | 请填写6-16位字符，不能包含空格 |  | 

<br/>


<b>示例表单</b>

<form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="form-group">
        <label class="control-label">required</label>
        <input type="text" class="form-control" name="required"
        data-rule="required;"
        data-tip="必填"
        >
    </div>
    <div class="form-group">
        <label class="control-label">digits</label>
        <input type="text" class="form-control" name="digits"
        data-rule="required;digits;"
        data-tip="只能是数字"
        >
    </div>
    <div class="form-group">
        <label class="control-label">letters</label>
        <input type="text" class="form-control" name="letters"
        data-rule="required;letters;"
         data-tip="只能是字母"
        >
    </div>
    <div class="form-group">
        <label class="control-label">date</label>
        <input type="text" class="form-control" name="date"
        data-rule="required;date;"
        data-tip="只能是真确的日期格式"
        >
    </div>
    <div class="form-group">
        <label class="control-label">time</label>
        <input type="text" class="form-control" name="time"
        data-rule="required;time;"
        data-tip="只能是真确的时间格式"
        >
    </div>
    <div class="form-group">
        <label class="control-label">email</label>
        <input type="text" class="form-control" name="email"
        data-rule="required;email;"
        data-tip="只能是真确的邮箱格式"
        >
    </div>
    <div class="form-group">
        <label class="control-label">url</label>
        <input type="text" class="form-control" name="url"
        data-rule="required;url;"
        data-tip="只能是真确的url"
        >
    </div>
    <div class="form-group">
        <label class="control-label">qq</label>
        <input type="text" class="form-control" name="qq"
        data-rule="required;qq;"
        data-tip="只能是真确的qq号"
        >
    </div>
    <div class="form-group">
        <label class="control-label">IDcard</label>
        <input type="text" class="form-control" name="IDcard"
        data-rule="required;IDcard;"
        data-tip="只能是真确的身份证号"
        >
    </div>
    <div class="form-group">
        <label class="control-label">tel</label>
        <input type="text" class="form-control" name="tel"
        data-rule="required;tel;"
        data-tip="只能是真确的电话号码"
        >
    </div>
    <div class="form-group">
        <label class="control-label">mobile</label>
        <input type="text" class="form-control" name="mobile"
        data-rule="required;mobile;"
        data-tip="只能是真确的手机号"
        >
    </div>
     <div class="form-group">
        <label class="control-label">zipcode</label>
        <input type="text" class="form-control" name="zipcode"
        data-rule="required;zipcode;"
        data-tip="只能是真确的邮政编码"
        >
    </div>
     <div class="form-group">
        <label class="control-label">chinese</label>
        <input type="text" class="form-control" name="chinese"
        data-rule="required;chinese;"
        data-tip="只能是中文字符"
        >
    </div>
     <div class="form-group">
        <label class="control-label">username</label>
        <input type="text" class="form-control" name="username"
        data-rule="required;username;"
        data-tip="请填写3-12位数字、字母、下划线"
        >
    </div>
    <div class="form-group">
        <label class="control-label">password</label>
        <input type="text" class="form-control" name="password"
        data-rule="required;password;"
        data-tip="请填写6-16位字符，不能包含空格"
        >
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-default">reset</button>
    </div>
</form>
<br/>

