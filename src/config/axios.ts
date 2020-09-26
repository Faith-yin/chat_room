/*
 * @Date: 2020-09-22 18:58:31
 * @information: axios配置
 */
import axios from 'axios'
import {config} from '@/interface'
import util from '@/assets/js/utils'


let path: config.PathInter = {
  development: ``,
  production: ``,
}

const env: string = process.env.NODE_ENV
export default class Axios {
  baseURL: string
  timeout: number
  successCode: number[]
  constructor() {
    this.baseURL = Reflect.get(path, env)
    this.timeout = 60000
    this.successCode = [200]
  }
  /**
   * @author: ypf
   * @Date: 2020-09-24 13:43:42
   * @information: 请求拦截
   */
  requestFun(request: any): any {
    return request
  }
  /**
   * @author: ypf
   * @Date: 2020-09-24 13:43:51
   * @information: 响应拦截
   */
  responseFun(response: any): any {
    let {successCode} = this
    let {data} = response
    let {code, msg} = data
    if(successCode.includes(code)) {
      return Promise.resolve(data)
    }
    util.setMessage('error', msg || '接口连接异常')
    return Promise.reject(data)
  }
  /**
   * @author: ypf
   * @Date: 2020-09-24 13:43:59
   * @information: 失败回调
   */
  errorFun(): any {
    util.setMessage('error', '网络连接异常')
    return Promise.reject()
  }
  /**
   * @author: ypf
   * @Date: 2020-09-26 11:51:51
   * @information: 注册axios
   */  
  init() {
    let {baseURL, timeout, requestFun, responseFun, errorFun} = this
    // 基础url
    axios.defaults.baseURL = baseURL
    // 默认时间
    axios.defaults.timeout = timeout
    // 请求拦截
    axios.interceptors.request.use(requestFun.bind(this), errorFun)
    // 响应拦截
    axios.interceptors.response.use(responseFun.bind(this), errorFun)
  }
}

