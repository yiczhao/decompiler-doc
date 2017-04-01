## remote 远程验证
---
>服务端验证并返回结果，URL 为必传参数，默认 POST 请求

<br/>


### 使用参数
| 规则 | 描述 |
|--|--|
|remote(URL) |请求服务端验证|
|remote(get:URL) |使用 GET 方式请求服务端验证|
|remote(URL, name1, #id2 ...)    |传递额外动态参数|
|remote(URL, foo=value1&bar=value2, name3 ...)   |传递额外固定参数 (v0.8.0+)|
|remote(URL, foo:name1, bar:#id2, name3 ...)| 代理参数名称（实际服务器接收的参数为 foo 和 bar）|
|remote(jsonpURL)|    跨域地址自动采用 JSONP 请求方式|
|remote([cors:|jsonp:][get:|post:]URL)   | 强制 CORS 请求或者 JSONP 请求，强制 GET 或者 POST 请求 (v0.10.8+)|

<B>示例：</B>跨域请求

```javascript
// 强制 jsonp 请求
"remote(jsonp:/user/checkName)"
// 强制 CORS, 请求类型为 POST 
"remote(cors:post:/user/checkName)"
```
<br/>

### 服务端返回结果格式

1.直接返回字符串结果
```javascript
// 为空代表通过
""
// 不为空则代表错误
"名字已被占用"
```
2.返回 JSON 格式
```javascript
// 验证通过
{"ok": "名字很棒"}
// 验证不通过
{"error": "名字已被占用"}

// 结果在第二级 data
{"status": 200, "data": {"error": "名字已被占用"}}
```


<B>示例：</B>
<br/>

<form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="ks-form-group">
        <label>Username</label>
        <div class="has-error">
            <input type="text" name="username" 
                v-model="username"
                data-rule="required;username;remote(cors:post:http://172.21.0.206:3000/aaa);"         data-rule-username="[/[\w\d]{4,30}/, '请输入 3-12位 英文字母或数字']" 
                >
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
        <label></label>
        <button class="ks-btn-primary">Submit</button>
        <button class="ks-btn-default">reset</button>
    </div>
</form>

<script lang="babel">
  export default{
    data(){
      return {
        username:'',
      }
    },
    methods:{
        
    },
    created:function(){
    },
    //remote(check/userName)
    ready:function(){
         $('#form1').validator({
            /* 假设服务端返回结果为： {"code":400, "msg":"名字已被占用"}
            */
            dataFilter:function(data){
                console.log('????',data);
                 if (data.code === 200){
                    return "";
                 } else {
                    return data.message;
                 }
            },
            //当验证通过后提交表单
            valid:function(form){
                form.submit();
            },
         });
    },
  }
</script>

<B>代码：</B>
<br/>


```html
<form id="form1" data-validator-option="{theme:'bootstrap', timely:2, stopOnError:true}">
    <div class="ks-form-group">
        <label>Username</label>
        <div class="has-error">
            <input type="text" name="username" 
                data-rule="required;remote(cors:post:http://172.21.0.206:3000/aaa);"
                >
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
        <label></label>
        <button class="ks-btn-primary">Submit</button>
        <button type="reset" class="ks-btn-default">reset</button>
    </div>
</form>
```
### 前端转换服务端返回的结果格式

<b>示例：</b>如果服务端返回格式无法更改，可以用 dataFilter 参数转换

```javascript
$('#form1').validator({
    /* 假设服务端返回结果为： {"code":400, "msg":"名字已被占用"}
    */
    dataFilter:function(data){
        console.log('????',data);
         if (data.code === 200){
            return "";
         } else {
            return data.message;
         }
    },
    //当验证通过后提交表单
    valid:function(form){
        form.submit();
    },
 });
```
