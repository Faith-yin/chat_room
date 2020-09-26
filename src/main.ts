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
import install from '@/config'
import util from '@/assets/js/utils'
import '@/style/base.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(install)

Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
