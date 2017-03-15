<body>
    <form class="form" data-validator-option="{timely:2, focusCleanup:true}">
        <div class="form-item">
            <label class="label">Username</label>
            <input type="text" name="username"
                data-rule="required;username;"
                data-rule-username="[/^[\w\d]{3,12}$/, 'Please enter 3-12 digits, letters, underscores']"
                data-tip="You can use letters, numbers and periods"
            >
            <input name="demo" 
            data-rule="required; abc" 
            data-rule-abc="[/^\d{6}$/, '请输入6位数字']"
            data-tip="6位数字备注信息">
         </div>
        <div class="form-item">
        <button type="submit">Submit</button>
    </div>
    </form>
 </body>