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

// 状态码
const successCode = [200]


const env: string = process.env.NODE_ENV

axios.defaults.baseURL = Reflect.get(path, env)
axios.defaults.timeout = 60000
// 请求拦截
axios.interceptors.request.use(requestFun, errorFun)
// 响应拦截
axios.interceptors.response.use(responseFun, errorFun)

/**
 * @author: ypf
 * @Date: 2020-09-24 13:43:42
 * @information: 请求拦截
 */
function requestFun(request: any): any {
  return request
}

/**
 * @author: ypf
 * @Date: 2020-09-24 13:43:51
 * @information: 响应拦截
 */
function responseFun(response: any): any {
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
function errorFun(): any {
  util.setMessage('error', '网络连接异常')
  return Promise.reject()
}
