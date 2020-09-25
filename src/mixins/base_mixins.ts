/*
 * @Date: 2020-09-24 18:12:59
 * @information: 基础混入
 */
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import md5 from 'js-md5'

@Component
export default class BaseMixins extends Vue {
  /**
   * @author: ypf
   * @Date: 2020-09-25 09:38:03
   * @information: md5
   */
  encryptInfo(val: (string | number)):string {
    return md5(val)
  }

  
}

