## 基础布局

> 底层的样式模板，公用头尾菜单正问布局。

---

### 样式展示

参照当前页面的布局样式

<br>

### 基础使用

```html
<div id="app">
    <!-- 页头 -->
    <div class="ks-header">
        <div class="ks-name">这里是头部标题logo</div>
        <div class="ks-user-info">用户名</div>
    </div>
    <!-- 中部 -->
    <div class="ks-center">
        <!-- 左侧导航 -->
        <div class="ks-menu">
            <!-- 一级导航 -->
            <ul class="menu-once">
                <li><a v-link="{name:'home'}">首页</a></li>
                <li>
                    <span>内容布局</span>
                    <!-- 二级导航 -->
                    <ul class="menu-second">
                        <li><a v-link="{name:'table'}">二级导航</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 主体内容 -->
        <div class="ks-content">
            <!-- 面包屑 -->
            <div class="ks-breadcrumb">
                面包屑
            </div>
            <!-- 右侧内容区 -->
            <div class="ks-container-fluid">
                正文内容
            </div>
            <!-- 页脚 -->
            <div class="ks-footer">
                <div class="company"> 
                    底部右侧内容 
                </div> 
                <div class="about-us"> 
                    底部左侧内容
                </div>
            </div>
        </div>
    </div>
</div>
```