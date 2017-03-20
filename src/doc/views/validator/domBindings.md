## DOM 绑定（DOM Bindings）
---

### 针对表单的绑定
<br/>

<b>示例：</b>在form 上绑定 data-validator-option 来配置参数
```html
<form data-validator-option='{stopOnError:false, timely:2, theme:"yellow_right"}'>
    ......
</form>
```
<b>示例：</b>在 form 上绑定 novalidate，使其不要自动初始化
```html
<form novalidate>
    ......
</form>
```

### 针对表单元素的绑定
<br/>

#### 配置在字段元素上
<ol>
  <li>data-rule - 给字段配置规则</li>
  <li>data-rule-* - 给字段自定义规则</li>
  <li>data-msg - 字段验证不通过时的提示</li>
  <li>data-msg-* - 字段具体规则验证不通过时的提示</li>
  <li>data-tip - 字段填写帮助</li>
  <li>data-ok - 字段验证通过时的提示</li>
  <li>data-target - 配置提示消息的显示位置</li>
  <li>data-timely - 配置验证的实时性 (v0.8.0+)</li>
  <li>data-must - 是否强制验证 (v0.8.0+)</li>
  <li>novalidate - 如果配置则停止验证该字段</li>
</ol>

<br/>

<b>示例：</b>

```html
<input type="password" name="pwd" 
    data-rule="required; password"
    data-rule-password="[/^\d{6}$/, '请填写6位数字']"
    data-msg-required="请填写密码"
    data-tip="密码由6位数字组成"
    data-ok="别担心，稍后您还可以更改"
    data-target="#msg_holder"
>
<span class="msg-box" id="msg_holder"></span>
```

#### 配置在 submit 按钮

formnovalidate - 点击配置了该属性后的按钮不会验证表单 

<b>示例：</b>
```html
<form>
    <!-- some fields -->
    ........
    <button type="submit" formnovalidate>提交</button>
</form>
```
