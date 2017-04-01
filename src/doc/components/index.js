// import arrow from './arrow'
// // import { vAnimate , align }  from './base'
// import checkboxbtn from './checkboxbtn'
// import clipboard from './clipboard'
// import datepicker from './datepicker'
// import dialog from './dialog'
// import {
//     linkageContainer,
//     linkageItem,
//     linkageCity
// } from './future'
// import noData from './no-data'
// import Notify from './notify'
import ksPage from '../../min/ks/components/kspage/index.js'
import ksPageGroup from '../../min/ks/components/kspagegroup/index.js'
import ksRadio from '../../min/ks/components/ksradio/index.js'

import ksImage from '../../min/ks/components/ksimage/index.js'


import ksDatePicker from '../../min/ks/components/ksdatepicker/index.js'
// import phone from './phone'
// import tableStatus from './table-status'
// import {
//     headr,
//     tab,
//     tabs
// } from './tabs'
// import timepicker from './timepicker'
// import timer from './timer'
// import upload from './upload'
// import ksDialogEntity from './ks-dialog-entity/index.js'
// import switchbtn from './switchbtn'

// import floor from './floor'
// import storechoose from './storechoose'




// const VERSION = '0.0.1'
const components = {

    ksPage,
    ksPageGroup,
    ksRadio,
    ksImage,
    ksDatePicker

}

// export default components
export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(components).forEach(k => Vue.component(k, components[k]))
}

// import vue_merge_component from 'vue-merge-component'
// // Vue.use(vue_merge_component)
// Vue.merge_component(['datepicker','timepicker','clipboard'], (resolve) =>{
//    require(['./components/datepicker.vue','./components/timepicker/hms-pair.vue','./components/clipboard.vue'], (datepicker,timepicker,clipboard) => {
//      resolve([datepicker,timepicker,clipboard])
//    })
// })