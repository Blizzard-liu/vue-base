import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import common from '@/utils/common' // 全局方法

import { initTheme } from "@utils/theme";

Vue.use(common)


initTheme(true);







Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
