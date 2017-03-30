## demo 示例
---
### 加载插件：一般方式
<br/>

<b>示例：</b>
<br/>

<form class="form" data-validator-option="{timely:2}">
    <div class="form-item">
        <input type="text" name="user[email]" data-rule="required;email" placeholder="Email">
    </div>
    <div class="form-item">
        <input type="password" name="password" data-rule="required;" placeholder="Password">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>

<br/>


<b>代码片段：</b>

```html
<form class="form" data-validator-option="{timely:2}">
    <div class="form-item">
        <input type="text" name="user[email]" data-rule="required;email" placeholder="Email">
    </div>
    <div class="form-item">
        <input type="password" name="password" data-rule="required;" placeholder="Password">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
```

### 满足某个条件才 required
<br/>

<b>示例：</b>

<form id="form1" class="form" data-validator-option="{timely:3,focusCleanup:true}">
    <h5>required( dependency-expression )</h5>
    <div class="form-item">
        <label for="isCompany"><input type="checkbox" id="isCompany" checked="">Company</label>
    </div>
    <div class="form-item">
        <input type="text" name="companyName" data-rule="required(#isCompany:checked)">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
<form id="form2" class="form nice-validator n-default" novalidate="novalidate">
    <h5>required( dependency-callback )</h5>
    <div class="form-item">
        <label><input type="checkbox" id="isPersonal" checked="">Personal</label>
    </div>
    <div class="form-item">
        <input type="text" name="email" aria-required="true">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
<br/>

<b>代码片段：</b>

```html
<form id="form1" class="form" data-validator-option="{timely:3,focusCleanup:true}">
    <h5>required( dependency-expression )</h5>
    <div class="form-item">
        <label for="isCompany"><input type="checkbox" id="isCompany" checked="">Company</label>
    </div>
    <div class="form-item">
        <input type="text" name="companyName" data-rule="required(#isCompany:checked)">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
<form id="form2" class="form nice-validator n-default" novalidate="novalidate">
    <h5>required( dependency-callback )</h5>
    <div class="form-item">
        <label><input type="checkbox" id="isPersonal" checked="">Personal</label>
    </div>
    <div class="form-item">
        <input type="text" name="email" aria-required="true">
    </div>
    <div class="form-item">
        <button type="submit">Submit</button>
    </div>
</form>
```

### 一组字段中至少填写一个或多个
<br/>

<b>示例：</b>

<form class="form" data-validator-option="{timely:2,showOk:''}">
    <div class="form-item">
        <input type="text" class="contact" name="mobile" placeholder="手机号" data-rule="required(from, .contact); mobile" data-msg-required="请至少填写一种联系方式">
    </div>
    <div class="form-item">
        <input type="text" class="contact" name="tel" placeholder="电话" data-rule="required(from, .contact); tel">
    </div>
    <div class="form-item">
        <input type="text" class="contact" name="email" placeholder="邮箱" data-rule="required(from, .contact); email">
    </div>
    <div class="form-item">
        <button type="submit">提交</button>
    </div>
</form>
<br/>

<b>代码片段：</b>

```html
<form class="form" data-validator-option="{timely:2,showOk:''}">
    <div class="form-item">
        <input type="text" class="contact" name="mobile" placeholder="手机号" data-rule="required(from, .contact); mobile" data-msg-required="请至少填写一种联系方式">
    </div>
    <div class="form-item">
        <input type="text" class="contact" name="tel" placeholder="电话" data-rule="required(from, .contact); tel">
    </div>
    <div class="form-item">
        <input type="text" class="contact" name="email" placeholder="邮箱" data-rule="required(from, .contact); email">
    </div>
    <div class="form-item">
        <button type="submit">提交</button>
    </div>
</form>
```

### 基本表单验证
<br/>

<b>示例：</b>

<form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="form-group">
        <label class="control-label">Username</label>
        <input type="text" class="form-control" name="username" data-rule="required;username;" data-rule-username="[/[\w\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']" data-tip="You can use letters, numbers and periods">
    </div>
    <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" class="form-control" name="pwd" data-rule="Password: required; length(8~16)" data-tip="Please fill in at least eight characters">
    </div>
    <div class="form-group">
        <label class="control-label">Verify Password</label>
        <input type="password" class="form-control" name="pwdAgain" data-rule="Verify Password: required; match(pwd)">
    </div>
    <div class="form-group">
        <label class="control-label">Gender</label>
        <select class="form-control" name="gender" data-rule="required">
            <option value="">select ...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>
    </div>
    <div class="form-group">
        <label class="control-label">Email</label>
        <input type="text" class="form-control" name="email" data-rule="required;email">
    </div>
    <div class="form-group">
        <label class="control-label">Interest</label>
        <div class="">
            <label class="checkbox-inline"><input type="checkbox" name="interest" data-rule="checked">sports</label>
            <label class="checkbox-inline"><input type="checkbox" name="interest">movie</label>
            <label class="checkbox-inline"><input type="checkbox" name="interest">game</label>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Note</label>
        <textarea class="form-control" data-rule="required;"></textarea>
    </div>
    <div class="form-group">
        <label class="checkbox-inline"><input type="checkbox" id="agree_arguments" data-rule="checked">I agree to the service agreement.</label>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-default">reset</button>
    </div>
</form>
<br/>

<B>代码片段：</B>

```html
<form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="form-group">
        <label class="control-label">Username</label>
        <input type="text" class="form-control" name="username" data-rule="required;username;" data-rule-username="[/[\w\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']" data-tip="You can use letters, numbers and periods">
    </div>
    <div class="form-group">
        <label class="control-label">Password</label>
        <input type="password" class="form-control" name="pwd" data-rule="Password: required; length(8~16)" data-tip="Please fill in at least eight characters">
    </div>
    <div class="form-group">
        <label class="control-label">Verify Password</label>
        <input type="password" class="form-control" name="pwdAgain" data-rule="Verify Password: required; match(pwd)">
    </div>
    <div class="form-group">
        <label class="control-label">Gender</label>
        <select class="form-control" name="gender" data-rule="required">
            <option value="">select ...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>
    </div>
    <div class="form-group">
        <label class="control-label">Email</label>
        <input type="text" class="form-control" name="email" data-rule="required;email">
    </div>
    <div class="form-group">
        <label class="control-label">Interest</label>
        <div class="">
            <label class="checkbox-inline"><input type="checkbox" name="interest" data-rule="checked">sports</label>
            <label class="checkbox-inline"><input type="checkbox" name="interest">movie</label>
            <label class="checkbox-inline"><input type="checkbox" name="interest">game</label>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">Note</label>
        <textarea class="form-control" data-rule="required;"></textarea>
    </div>
    <div class="form-group">
        <label class="checkbox-inline"><input type="checkbox" id="agree_arguments" data-rule="checked">I agree to the service agreement.</label>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-default">reset</button>
    </div>
</form>
```