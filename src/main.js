import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import common from '@/utils/common' // 全局方法

import { initTheme } from "@utils/theme";

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.use(common)


initTheme(true);







Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
