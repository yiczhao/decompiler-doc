/**
 * @description application main logic file.
 * @author pkeros
 * @data 16/6/1
 * @email pkeros@vip.qq.com
 */
require('./sass/ks.scss')



import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import  Z from 'vue-validator'
import $validate from './utils/validate'
import RouterMap from './router'


// 公共组件
import components  from './components'








// Vue configure
Vue.config.debug = process.env.NODE_ENV !== 'production'

// attach plugin.
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(components)






// router configure.
let router = new VueRouter({
  history: false,
  hashbang: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
RouterMap(router)

let app = Vue.extend(App)
router.start(app, '#app')