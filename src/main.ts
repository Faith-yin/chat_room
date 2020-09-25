/*
 * @Date: 2020-09-22 18:41:21
 * @information: main
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import util from '@/assets/js/utils'
import '@/config/axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
