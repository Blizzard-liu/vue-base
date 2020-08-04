import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import '@assets/font/iconfont.css'
import 'animate.css'

import filters from '@/utils/filters' // 全局过滤器
import '@utils/directives.js' //防多次点击，重复提交
import '@utils/permission'
import { initTheme } from "@utils/theme";
import {EventEmitter} from 'events';
import api from "@/api";

initTheme(true);
Vue.prototype.$api = api
Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})
Vue.prototype.$bus = new EventEmitter();


// 注册过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
