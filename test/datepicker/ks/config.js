/**
 * 模块配置
 */

 define(function(){
    return function(kspath,ksroot){

        var kspath = kspath ||'/src/min/ks'
        return {

            'Vue': ksroot+'ks/util/vue.min',
            'jquery': ksroot+'ks/util/jquery.min',
            'CSS': ksroot+'ks/util/require-css',
            'validator': {
                js:[ksroot+'ks/util/validator/index'],
                css:ksroot+'ks/util/validator/style.css'
            },
            'validator-cn':ksroot+'ks/util/validator/cn',
            'component-KsDatePicker':{ 
                js:kspath+'/components/ksdatepicker/index',
                css:kspath+'/components/ksdatepicker/style.css'
            },
            'component-KsPage': {
                js:kspath+'/components/kspage/index',
                css:kspath+'/components/kspage/style.css'
            },
            'component-KsDialog': {
                js:kspath+'/components/ksdialog/index',
                css:kspath+'/components/ksdialog/style.css'
            },
            'directive-KsLimitNumberFixed':kspath+'/directives/kslimitnumberfixed/index'
            
        }    

    }
 })