/*
 * @Date: 2020-09-24 17:14:12
 * @information: api
 */
import axios from 'axios'

export default {
  /**
   * @author: ypf
   * @Date: 2020-09-24 17:15:31
   * @information: 用户注册接口
   */
  registerApi(model: any): Promise<any> {
    return axios.post(`/login/register`, model)
  },
  /**
   * @author: ypf
   * @Date: 2020-09-24 17:15:31
   * @information: 用户登录接口
   */
  toLoginApi(model: any): Promise<any> {
    return axios.post(`/login/toLogin`, model)
  },
  /**
   * @author: ypf
   * @Date: 2020-09-24 17:15:31
   * @information: 退出登录接口
   */
  logoutApi(model: any): Promise<any> {
    return axios.post(`/login/logout`, model)
  },


}


