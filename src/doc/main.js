/**
 * @description application main logic file.
 * @author pkeros
 * @data 16/6/1
 * @email pkeros@vip.qq.com
 */
require('./styles/app.scss')



import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import  Z from 'vue-validator'
import $validate from './utils/validate'
import RouterMap from './router'
import Utils from './utils'


import Directives from './directives'
import Filter from './filters'




// Vue configure
Vue.config.debug = process.env.NODE_ENV !== 'production'

// attach plugin.
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueValidator)

// attach utils
Vue.use(Utils)
Vue.use(Filter)
Vue.use(Directives)




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
