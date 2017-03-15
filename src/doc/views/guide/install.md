# 简介

>`KS`库针是对前端`非编译型开发模式`的，提供了loads、 component、directive、filter等常用功能


-------------

## 引入

```javascript
<script src="./ks/index.js"></script>
```
```javascript
    KS({
        loads:{
            i18n:'//cdn.bootcss.com/require-i18n/2.0.6/i18n',
            bootstrap:{
                js:'//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.js',
                css:'//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.css',
            }
        },
        // kspath:'aa',
        components:['KsDatePicker','KsPage'],
        directives:['KsLimitNumberFixed'],
        validator:['#signupForm'],
        // filters:['cc'],
        data:{
            max:10000,
            datepicker:'2011-10-10'
        },
        methods:{
            sublime:function(){
                alert('lll')
            }
        },
        ready:function(){

        }
    })
```

## 例子

`actions` 属性绑定一个由对象组成的数组，每个对象有 `name` 和 `method` 两个键，`name` 为菜单项的文本，`method` 为点击该菜单项的回调函数。

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 `actionsheet` 的显示与隐藏。

```html
<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| actions | 菜单项数组 | Array | | |
| cancelText | 取消按钮的文本。若设为空字符串，则不显示取消按钮 | String | | '取消' |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 `actionsheet` | Boolean | | true |
