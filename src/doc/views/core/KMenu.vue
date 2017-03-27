<template>
    <nav class="ks-menu">
        <ul class="menu-once">
            <li v-for="mobj in Menu">
                <span v-text="mobj.name"></span>
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
</template>

<script lang="babel">
    import Menu from '../../data/menu'

    export default {
        data () {
            return { Menu }
        }
    }
</script>