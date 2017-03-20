/**
 * 模块配置
 */

 define(function(){
    return function(kspath,ksroot){

        var kspath = kspath ||'/src/min/ks'
        return {

            'CSS': ksroot+'ks/util/require-css',
            'Vue': ksroot+'ks/util/vue.min',
            // iconfont 字体样式
            'iconfont':ksroot+'ks/font-icon/iconfont',
            'jquery': ksroot+'ks/util/jquery.min',
            'validator': {
                js:ksroot+'ks/util/validator/index',
                css:ksroot+'ks/util/validator/style'
            },
            'validator-cn':ksroot+'ks/util/validator/cn',
            
            'component-KsDatePicker':{ 
                js:kspath+'/components/ksdatepicker/index',
                css:kspath+'/components/ksdatepicker/style'
            },
            'component-KsPage': {
                js:kspath+'/components/kspage/index',
                css:kspath+'/components/kspage/style'
            },
            'component-KsDialog': {
                js:kspath+'/components/ksdialog/index',
                css:kspath+'/components/ksdialog/style'
            },
            'component-KsModal': {
                js:kspath+'/components/ksmodal/index',
                css:kspath+'/components/ksmodal/style'
            },
            'component-KsModalEntity': {
                js:kspath+'/components/ksmodalentity/index',
                css:kspath+'/components/ksmodalentity/style'
            },
            'directive-KsLimitNumberFixed':kspath+'/directives/kslimitnumberfixed/index'
            
        }    

    }
 })