##  查看图片组件调用

---

<button class="ks-btn-primary" @click="imageShow = true">呼出 ksImage 组件</button>

<ks-image 
    v-bind:show.sync="imageShow" 
    v-bind:url="imgUrl"
    ></ks-image>


<script>
    export default{
        data () {
            return {
                imageShow:false,
                imgUrl:"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg"
            }
        },
        methods: {
            // close(staut){
            //     this.imageShow = staut
            //     console.log('close',staut)
            // }
        }
    }
</script>