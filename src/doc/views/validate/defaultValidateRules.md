## Validate 验证

> 用于校验表单，检查试图页面数据的合规性。

---
### Validate 介绍
Validate 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API。所有的捆绑方法默认使用英语作为错误信息，且已翻译成其他 37 种语言。
<br/>
### 默认校验规则
| 序号 | 规则 | 描述 |
|------|-------|----------|
| 1 | required:true | 必须输入的字段。 |
| 2 | remote:"check.php" | 使用 ajax 方法调用 check.php 验证输入值。 | 
| 3 | email:true | 必须输入正确格式的电子邮件。 | 
| 4 | url:true | 必须输入正确格式的网址。 |
| 5 | date:true | 必须输入正确格式的日期。日期校验 ie6 出错，慎用。  |
| 6 | dateISO:true | 必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。 |
| 7 | number:true | 必须输入合法的数字（负数，小数）。 |
| 8 | digits:true | 必须输入整数。 |
| 9 | creditcard: | 必须输入合法的信用卡号。 |
| 10 | equalTo:"#field" | 输入值必须和 #field 相同。 |
| 11 | accept: | 输入拥有合法后缀名的字符串（上传文件的后缀）。 |
| 12 | maxlength:5 | 输入长度最多是 5 的字符串（汉字算一个字符）。 |
| 13 | minlength:10 | 输入长度最小是 10 的字符串（汉字算一个字符）。 |
| 14 | rangelength:[5,10] | 输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。 |
| 15 | range:[5,10] | 输入值必须介于 5 和 10 之间。 |
| 16 | max:5 | 输入值不能大于 5。 |
| 17 | min:10 | 输入值不能小于 10。 |


<br/>

### 默认提示

```html
<script>
  $.extend($.validator.messages, {
      required: "这是必填字段",
      remote: "请修正此字段",
      email: "请输入有效的电子邮件地址",
      url: "请输入有效的网址",
      date: "请输入有效的日期",
      dateISO: "请输入有效的日期 (YYYY-MM-DD)",
      number: "请输入有效的数字",
      digits: "只能输入数字",
      creditcard: "请输入有效的信用卡号码",
      equalTo: "你的输入不相同",
      extension: "请输入有效的后缀",
      maxlength: $.validator.format("最多可以输入 {0} 个字符"),
      minlength: $.validator.format("最少要输入 {0} 个字符"),
      rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
      range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
      max: $.validator.format("请输入不大于 {0} 的数值"),
      min: $.validator.format("请输入不小于 {0} 的数值")
  });
</script>
```


<br/>

### 使用方式
```html
<script>
  $.validator.setDefaults({
      submitHandler: function() {
        alert("提交事件!");
      }
  });
  $().ready(function() {
      $("#commentForm").validate();
  });
</script>

<form class="cmxform" id="commentForm" method="get" action="">
  <fieldset>
    <legend>输入您的名字，邮箱，URL，备注。</legend>
    <p>
      <label for="cname">Name (必需, 最小两个字母)</label>
      <input id="cname" name="name" minlength="2" type="text" required>
    </p>
    <p>
      <label for="cemail">E-Mail (必需)</label>
      <input id="cemail" type="email" name="email" required>
    </p>
    <p>
      <label for="curl">URL (可选)</label>
      <input id="curl" type="url" name="url">
    </p>
    <p>
      <label for="ccomment">备注 (必需)</label>
      <textarea id="ccomment" name="comment" required></textarea>
    </p>
    <p>
      <input class="submit" type="submit" value="Submit">
    </p>
  </fieldset>
</form>
```

<form class="cmxform" id="commentForm" method="get" action="">
  <fieldset>
    <legend>输入您的名字，邮箱，URL，备注。</legend>
    <p>
      <label for="cname">Name (必需, 最小两个字母)</label>
      <input id="cname" name="name" minlength="2" type="text" required>
    </p>
    <p>
      <label for="cemail">E-Mail (必需)</label>
      <input id="cemail" type="email" name="email" required>
    </p>
    <p>
      <label for="curl">URL (可选)</label>
      <input id="curl" type="url" name="url">
    </p>
    <p>
      <label for="ccomment">备注 (必需)</label>
      <textarea id="ccomment" name="comment" required></textarea>
    </p>
    <p>
      <input class="submit" type="submit" value="Submit">
    </p>
  </fieldset>
</form>