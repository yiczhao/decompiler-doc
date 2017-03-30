## 基本表单验证

---

<br/>

<form data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="ks-form-group">
        <label>Username</label>
        <div class="has-error">
            <input type="text" name="username" 
                data-rule="required;username;" 
                data-rule-username="[/[\w\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']" 
                data-tip="You can use letters, numbers and periods">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Password</label>
        <div class="has-error">
            <input type="password" name="pwd" 
                data-rule="Password: required; length(8~16)" 
                data-tip="Please fill in at least eight characters">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Verify Password</label>
        <div class="has-error">
            <input type="password" name="pwdAgain" 
                data-rule="Verify Password: required; match(pwd)">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Gender</label>
        <select name="gender" data-rule="required">
            <option value="">select ...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>
    </div>
    <div class="ks-form-group">
        <label>Email</label>
        <div class="has-error">
            <input type="text" name="email" data-rule="required;email">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Validity</label>
        <div class="has-error">
            <input type="text"><span>小时</span>
        </div>
    </div>
    <div class="ks-form-group">
        <label>Interest</label>
        <div class="ks-line-box">
            <label><input type="checkbox" data-rule="checked">sports</label>
            <label><input type="checkbox">movie</label>
            <label><input type="checkbox">game</label>
        </div>
    </div>
    <div class="ks-form-group">
        <label>Interest</label>
        <div class="ks-line-box">
            <label><input type="radio" name="interest" data-rule="checked">sports</label>
            <label><input type="radio" name="interest">movie</label>
            <label><input type="radio" name="interest">game</label>
        </div>
    </div>
    <div class="ks-form-group">
        <label>Note</label>
        <textarea data-rule="required;"></textarea>
    </div>
    <div class="ks-form-group">
        <label></label>
        <div class="ks-line-box">
            <input type="checkbox" data-rule="checked">I agree to the service agreement.
        </div>
    </div>
    <div class="ks-form-group">
        <label></label>
        <button class="ks-btn-primary">Submit</button>
        <button class="ks-btn-default">reset</button>
    </div>
</form>

```html
<form data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="ks-form-group">
        <label>Username</label>
        <div class="has-error">
            <input type="text" name="username" 
                data-rule="required;username;" 
                data-rule-username="[/[\w\d]{4,30}/, 'Please enter 3-12 digits, letters, underscores']" 
                data-tip="You can use letters, numbers and periods">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Password</label>
        <div class="has-error">
            <input type="password" name="pwd" 
                data-rule="Password: required; length(8~16)" 
                data-tip="Please fill in at least eight characters">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Verify Password</label>
        <div class="has-error">
            <input type="password" name="pwdAgain" 
                data-rule="Verify Password: required; match(pwd)">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Gender</label>
        <select name="gender" data-rule="required">
            <option value="">select ...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>
    </div>
    <div class="ks-form-group">
        <label>Email</label>
        <div class="has-error">
            <input type="text" name="email" data-rule="required;email">
        </div>
    </div>
    <div class="ks-form-group">
        <label>Validity</label>
        <div class="has-error">
            <input type="text"><span>小时</span>
        </div>
    </div>
    <div class="ks-form-group">
        <label>Interest</label>
        <div class="ks-line-box">
            <input type="checkbox" data-rule="checked">sports
            <input type="checkbox">movie
            <input type="checkbox">game
        </div>
    </div>
    <div class="ks-form-group">
        <label>Interest</label>
        <div class="ks-line-box">
            <input type="radio" name="interest" data-rule="checked">sports
            <input type="radio" name="interest">movie
            <input type="radio" name="interest">game
        </div>
    </div>
    <div class="ks-form-group">
        <label>Note</label>
        <textarea data-rule="required;"></textarea>
    </div>
    <div class="ks-form-group">
        <label></label>
        <div class="ks-line-box">
            <input type="checkbox" data-rule="checked">I agree to the service agreement.
        </div>
    </div>
    <div class="ks-form-group">
        <label></label>
        <button class="ks-btn-primary">Submit</button>
        <button class="ks-btn-default">reset</button>
    </div>
</form>
```