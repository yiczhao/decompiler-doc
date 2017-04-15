/**
 * 模块配置
 */
var scope = KS.pathScope('config.js')

define(function(){
    return function(kspath,ksroot){

        var kspath = kspath || scope
        return {

            // iconfont 字体样式
            'iconfont':scope+'font-icon/iconfont',
            'CSS': scope+'util/require-css',
            'Vue': scope+'util/vue.min',
            // 'axios':scope+'util/axios',
            // 'qs':scope+'util/qs',
            'jquery': scope+'util/jquery.min',
            'validator':scope+'util/validator/index',
            'vue-prototype':{
                $notice:'KsNoticeCenter'
            },
            'component-KsDatePicker':{ 
                js:kspath+'components/ksdatepicker/index.1.0.0',
                css:kspath+'components/ksdatepicker/style.1.0.0'
            },
            'component-KsPage': {
                js:kspath+'components/kspage/index',
                css:kspath+'components/kspage/style'
            },
            'component-KsDialog': {
                js:kspath+'components/ksdialog/index',
                css:kspath+'components/ksdialog/style'
            },
            'component-KsModal': {
                js:kspath+'components/ksmodal/index',
                css:kspath+'components/ksmodal/style'
            },
            'component-KsModalEntity': {
                js:kspath+'components/ksmodalentity/index',
                css:kspath+'components/ksmodalentity/style'
            },
            'component-KsSwitch':{ 
                js:kspath+'components/ksswitch/index',
                css:kspath+'components/ksswitch/style'
            },
            'component-KsNoticeCenter':{ 
                js:kspath+'components/ksnoticecenter/index',
                css:kspath+'components/ksnoticecenter/style'
            },
            
            'directive-KsLimitNumberFixed':kspath+'directives/kslimitnumberfixed/index'
            
        }    

    }
 })