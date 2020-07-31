import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import Cookies from 'js-cookie'
import '@scss/element-variables.scss';
// import '@assets/font/iconfont.css'
import 'animate.css'

import common from '@/utils/common' // 全局方法
import filters from '@/utils/filters' // 全局过滤器
import '@utils/directives.js' //防多次点击，重复提交
import '@/utils/permission'
import {EventEmitter} from 'events';
import api from "@/api";

Vue.prototype.$api = api
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.prototype.$bus = new EventEmitter();


// 注册过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(common)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
