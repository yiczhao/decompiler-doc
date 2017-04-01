## 基础布局

> 底层的样式模板，公用头尾菜单正问布局。

---

### 样式展示

参照当前页面的布局样式

<br>

### 基础使用

```html
<aside id="app">
    <div class="ks-app">
        <!-- 页头 -->
        <div class="ks-header">
            <div class="ks-name"><img class="logo" src="../../assets/logo/header-logo.png" alt="LOGO"></div>
            <div class="ks-user-info">用户名<a>退出</a></div>
        </div>
        <!-- 中部 -->
        <div class="ks-center">
            <!-- 左侧导航 -->
            <nav class="ks-menu">
                <!-- 一级导航 -->
                <ul class="menu-once">
                    <li v-for="mobj in Menu">
                        <span v-text="mobj.name"></span>
                        <!-- 二级导航 -->
                        <ul class="menu-second">
                            <li  v-for="smobj in mobj.subMenu">
                                <i class="icon" :class="smobj.icon"></i>
                                <a v-link="{name: smobj.link}" 
                                    :data-ksa="smobj.ksa"
                                    v-text="smobj.name"></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- 主体内容 -->
            <div class="ks-content" v-el:main-container>
                <!-- 面包屑 -->
                <div class="ks-breadcrumb">
                    <template v-for="path in routePath" track-by="$index">
                        <a v-text="path.cn"></a><span v-if="routePath.length - 1 !== $index">&nbsp;/&nbsp;</span>
                    </template>
                </div>
                <!-- 右侧内容区 -->
                <div class="ks-container-fluid">
                    <div class="container-box">
                        正文内容
                    </div> 
                </div>
            </div>
        </div>
    </div>
</aside>
```