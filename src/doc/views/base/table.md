##  表格布局

---

####  基础样式

<br>

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

<br>

```html
<div class="table-striped">
    <table>
        <tr>
            <th v-for="1 in 12">第{{$index+1}}列</th> 
        </tr>
        <tr>
            <td v-for="1 in 12">第1行,第{{$index+1}}列</td> 
        </tr>
    </table>
</div>
```

> 标题用\<th\>，普通单元格用\<td\>