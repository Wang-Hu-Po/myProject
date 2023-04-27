import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'


// 基础样式
import '@/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
