/*
 * @Date: 2020-09-22 19:30:00
 * @information: 工具函数
 */
import Vue from 'vue'

export default {
  /**
   * @author: ypf
   * @Date: 2020-09-22 19:40:15
   * @information: 消息提示
   */
  setMessage(type:string, message:string, showClose:boolean = true):void {
    Vue.prototype.$message({
        showClose: showClose,
        message: message,
        type: type,
    });
  }



}
