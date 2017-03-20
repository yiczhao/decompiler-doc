# 简介

>`KS`库针是对前端`非编译型模式`开发的，提供了`loads`、 `component`、`directive`、`filter`等常用功能
>`KS`库集成了`requirejs`的`AMD`模块加载机制，`VUE`双向绑定功能
>参数中的`data`、`methods`、`created`、`ready`、`component`、`directive`、`filter`使用方式和`VUE`也保持一致
>【`component`、`directive`、`filter`注入方式稍有不同】

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
        kspath:'./kspath',
        components:['KsDatePicker','KsPage'],
        directives:['KsLimitNumberFixed'],
        validator:['#signupForm'],
        filters:['addPrefix'],
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


## API
| 参数 | 说明 | 类型 | 必选 | 默认值 |
|------|-------|---------|-------|--------|
| loads | 加载外部库  | Object | 否|无 |
| kspath |  KS组件模块路径 | String | 是| /src/min/ks |
| components | 页面中需要的组件（注入组件，会加载此库）| Array | 否 | | 无 |
| directives | 页面中需要的指令（注入指令，会加载此库） | Array | 否 | | 无 |
| filters | 页面中需要的过滤器（注入过滤器，会加载此库） | Array | 否 | | 无 |
| data | 双向绑定到页面的值 | Object | 否 | | 无 |
| methods | 绑定到页面的方法 | Object | 否 | | 无 |
| ready | 页面渲染后调用 | Function | 否 | | 无 |

## 属性例子

### `data` 属性（双向绑定到页面的值）
##### 举个🌰 获取input的值：

传统方式：

-------------

```html
<input type="text" name="" id="theInput">
```
```javascript
document.getElementById('theInput').value
or
$('#theInput')[0].value
```

VUE方式：

-------------

```html
<input type="text" name="" v-model="theInput">
```
```javascript
...
data:{
    theInput:''
}
...
```
此时 theInput 就绑定在VUE实例的scope中了，即可以在scope中调用
```javascript
...
methods:{
    getInputValue:function(){
        console.log(this.theInput)
    }
}
...
```

#### 如果想在页面内调用到VUE实例的scope 
```javascript
KS({
...
methods:{
    getInputValue:function(){
        console.log(this.theInput)
        outGetValue(this)
    }
}
...
})

function outGetValue(vm){
    console.log(vm.theInput)
}
```
### `methods`属性（上面已涉及）

methods：顾名思义，属性中的值为注入到scope上的方法
有可以在scope中调用
```javascript
...
ready:function{
    this.getInputValue()
}
...
```
可以以类似于DOM0级事件调用
```html
    <a href="javascript:;" onclick="getInputValue()">获取input的值</a>
```
VUE绑定用方式
```html
    <a href="javascript:;" v-on:click="getInputValue">获取input的值</a>
```


>##### 刚刚用到的 `v-model` 与 `v-on:click` 均为Vue内置指令
>##### 公共组件API地址 <a href="http://fed.dev.kashuo.net/compiler-doc" target="_blank">http://fed.dev.kashuo.net/compiler-doc</a>
>##### 关于Vue更多使用方式：<a href="https://cn.vuejs.org" target="_blank">https://cn.vuejs.org</a> API 为1.0版本 



