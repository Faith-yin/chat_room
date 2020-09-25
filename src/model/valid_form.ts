/*
 * @Date: 2020-09-24 18:30:00
 * @information: 表单校验
 */
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class  extends Vue {
  // 登录表单校验
  loginRuleForm:any = {
    username: [
      {required: true, message: '请输入用户名称', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '请输入用户密码', trigger: 'blur'},
    ],
  }

  // 注册表单校验
  validRepeat = (rule: any, value: string, callback: any) => {
    if(value !== this.registerRuleForm.passwordf) {
      callback(new Error('两次密码输入不一致'))
    } else {
      callback()
    }
  }
  registerRuleForm: any = {
    username: [
      {required: true, message: '请输入用户名称', trigger: 'blur'},
      {min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '请输入用户密码', trigger: 'blur'},
      {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'},
    ],
    rePassword: [
      {required: true, message: '请再次输入用户密码', trigger: 'blur'},
      {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'},
      {validator: this.validRepeat, trigger: 'blur'},
    ],
  }


}