### validate API

<br/>

| 名称 | 返回类型 | 描述 |
|------|-------|----------|
| validate(options) | Validator | 验证所选的 FORM。 |
|alid() | Boolean| 检查是否验证通过。
|rules()| Options |返回元素的验证规则。
|rules("add",rules) | Options |增加验证规则。
|rules("remove",rules) |  Options |删除验证规则。
|removeAttrs(attributes)| Options |删除特殊属性并且返回它们。
|自定义选择器|
|:blank|  Validator |  没有值的筛选器。
|:filled| Array <Element> |有值的筛选器。
|:unchecked|  Array <Element> |没选择的元素的筛选器。
实用工具|
|jQuery.format(template,argument,argumentN...)  | String | 用参数代替模板中的 |{n}。

<br/>

#### Validator

 validate 方法返回一个 Validator 对象。Validator 对象有很多方法可以用来引发校验程序或者改变 form 的内容，下面列出几个常用的方法。
 
<br/>

|名称 | 返回类型|描述|
|------|-------|----------|
|form()|  Boolean| 验证 form 返回成功还是失败。
|element(element)|    Boolean| 验证单个元素是成功还是失败。
|resetForm()| undefined|   把前面验证的 FORM 恢复到验证前原来的状态。
|showErrors(errors)|  undefined |  显示特定的错误信息。
|Validator 函数|
|setDefaults(defaults)|   undefined|   改变默认的设置。
|addMethod(name,method,message)|  undefined | 添加一个新的验证方法。必须包括一个独一无二的名字，一个 JAVASCRIPT 的方法和一个默认的信息。|
|addClassRules(name,rules)|   undefined |增加组合验证类型，在一个类里面用多种验证方法时比较有用。|
|addClassRules(rules) |   undefined |  增加组合验证类型，在一个类里面用多种验证方|法时比较有用。这个是同时加多个验证方法。|


<br/>