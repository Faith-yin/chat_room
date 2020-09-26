/*
 * @Date: 2020-09-22 18:59:13
 * @information: 扫描配置
 */
import Vue from 'vue'

/**
 * @author: ypf
 * @Date: 2020-09-26 11:03:40
 * @information: 组件扫描类
 */
export default class ScanComponents {
  components: __WebpackModuleApi.RequireContext
  constructor() {
    this.components = require.context('@/components', true, /\.vue$/)
  }
  // 注册组件
  init() {
    let {components} = this
    components.keys().forEach(el => {
      let item = el.split('/').pop()?.replace(/\.vue$/, '')
      if(typeof(item) === 'string') {
        Vue.component(item, components(el).default)
      }
    })
  }
}





