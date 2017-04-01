## 表格管理页面布局 

---

<div class="ks-search-criteria">
    <div class="right">
        <div>
            <span>name:</span><input type="text">
        </div>
        <div>
            <span>name:</span><input type="text">
        </div>
        <div>
            <button class="ks-btn-primary">查询</button>
        </div>
    </div>
</div>

<div class="ks-search-criteria">
    <button class="ks-btn-success">新建</button>
    <button class="ks-btn-primary">设置</button>
    <div class="right">
        <div>
            <span>name:</span><input type="text">
        </div>
        <div>
            <span>name:</span><input type="text">
        </div>
        <div>
            <button class="ks-btn-primary">查询</button>
        </div>
    </div>
</div>

<div class="table-striped">
    <table>
        <tr>
            <th v-for="1 in 12">第{{$index+1}}列</th>
        </tr>
        <tr>
            <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
        </tr>
        <tr>
            <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
        </tr>
        <tr>
            <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
        </tr>
        <tr>
            <td v-for="1 in 12">第1行,第{{$index+1}}列</td>
        </tr>
    </table>
</div>

<ks-page-group
    :current.sync="page_current2" 
    :length="7"
    :total="100"
    :sizes="[10,17,30]"
    :on-change="change2"></ks-page-group>

<script lang="babel">
    export default {
        data(){
            return {
                page_current:4,
                page_current2:4
            }
        },
        methods:{
            change(val){
                console.log(val);
            },
            change2(val,type){
                console.log(val,type);
            }
            
           
        }

    }
</script>