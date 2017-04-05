##  search搜索条件布局

---

####  仅有左侧

<br>

<div class="ks-search-criteria">
	<button class="ks-btn-success">新建</button>
	<button class="ks-btn-primary">设置</button>
</div>

```html
<div class="ks-search-criteria">
	<button class="ks-btn-success">新建</button>
	<button class="ks-btn-primary">设置</button>
</div>
```

####  仅有右侧

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

```html
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
```
#### 左右都有

<div class="ks-search-criteria">
	<button class="ks-btn-success">新建</button>
	<button class="ks-btn-primary">设置</button>
	<div class="right">
		<div>
			<ks-date-picker></ks-date-picker>
		</div>
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

```html
<div class="ks-search-criteria">
	<button class="ks-btn-success">新建</button>
	<button class="ks-btn-primary">设置</button>
	<div class="right">
		<div>
			<ks-date-picker></ks-date-picker>
		</div>
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
```