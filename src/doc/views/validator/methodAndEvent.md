## 方法 & 事件
---
### validator()
<br/>

#### .validator( options )
<br/>

<B> 描述：</B> 根据参数初始化验证，验证 jQuery 选中的表单
<B> 参数：</B> {Object} options - 可选，参考配置选项
<B> 示例：</B> 
```javascript
$('#form1').validator({
    timely: 2,
    stopOnError: true,
    fields: {
        email: "required;email",
        password: "required;length(6~16)",
        mobile: "required;mobile"
    },
    valid: function(form) {
        $.post("path/to/server", $(form).serialize())
            .done(function(){
                // some code
            });
    }
});
```
#### validator( validCallback )
<br/>

<B>描述：</B>初始化验证，验证 jQuery 选中的表单，验证通过后执行回调
<B>参数：</B>{Function} validCallback - 表单验证通过的回调
<B>示例：</B>

```javascript
$('#form1').validator(validCallback);
// 等同于
$('#form1').validator({
    valid: validCallback
});
```

#### validator( instanceMethod, arg1, arg2... )
<br/>

<b>描述：</b>通过.validator() 方法调用实例方法
<b>参数：</b>{String} instanceMethod - 实例方法名称
<b>参数：</b>{Arguments} argn - 调用实例方法时的参数
<b>示例：</b>

```javascript
// 清空表单验证消息
$('#form1').validator("cleanUp");
// 销毁表单验证
$('#form1').validator("destroy");
```

#### trigger("validate")
<br/>

<b>描述：</b>触发字段执行验证
<b>示例：</b>

```javascript
// Verify the selected field.
$('#username').trigger("validate");
// Verify the selected form.
$('#form').trigger("validate");
// Verify the selected area.
$('#area').trigger("validate");
```

#### trigger("showmsg", [type, message])
<br/>

<b>描述：</b>触发字段提示消息
<b>示例：</b>
```javascript
// Tips ok message
$("#username").trigger("showmsg", ["ok", "Great name"]);
// Tips error message
$("#username").trigger("showmsg", ["error", "Name is already taken"]);
// Tips general message
$("#username").trigger("showmsg", ["tip", "Others make a good name for you impressed"]);
// Tips tip message has been bound (data-tip)
$("#username").trigger("showmsg", ["tip"]);
// Tips all tip message
$("#form").trigger("showmsg", ["tip"]);
```

#### trigger("hidemsg")
<br/>

<b>描述：</b>触发字段隐藏消息
<b>示例：</b>
```javascript
// Hide field message
$("#username").trigger("hidemsg");
// Hide all messages form the form
$("#form").trigger("hidemsg");
```
