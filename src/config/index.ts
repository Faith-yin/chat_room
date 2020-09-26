/*
 * @Date: 2020-09-26 11:54:26
 * @information: 注册
 */
import axios from './axios'
import scanComponent from './scan_component'

let scanArr = [axios, scanComponent]
let install = () => {
  scanArr.forEach(el => {
    new el().init()
  })
}

export default install
