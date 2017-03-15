/**
 * 模块配置
 */

 define(function(){
    return function(kspath){

        var kspath = kspath || '/src/min/ks'
        return {

            'Vue': './vue.min',
            'component-KsDatePicker':{ 
                js:kspath+'/components/ksdatepicker/index',
                css:kspath+'/components/ksdatepicker/style.css'
            },
            'component-KsPage': {
                js:kspath+'/components/kspage/index',
                css:kspath+'/components/kspage/style.css'
            },
            'directive-KsLimitNumberFixed':kspath+'/directives/kslimitnumberfixed/index'
            
        }    

    }
 })