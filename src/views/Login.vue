<!--
 * @Date: 2020-09-24 13:55:45
 * @information: 登录页面
-->
<template>
  <div id="login">
    <!-- 标题 -->
    <base-title titleText="Welcome to Login Chat_Room_On_Line !"></base-title>
    <!-- 表单容器 -->
    <div class="form-container">
      <el-form :model="loginForm" :rules="ruleForm" ref="loginFormRef" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    prefix-icon="el-icon-user"
                    placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" 
                    type="password" 
                    prefix-icon="el-icon-lock"
                    placeholder="请输入用户密码"
                    show-password
                    :maxlength="12"
                    @keyup.enter.native="onSubmit"></el-input>
        </el-form-item>
        <!-- 按钮组 -->
        <el-form-item class="btn-box">
          <el-button  type="primary" 
                      :loading="loginBtnLoading"
                      @click="onSubmit()">登录</el-button>
          <el-button @click="onToRegister()">去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {login} from '@/interface'
import BaseTitle from '@/components/base/BaseTitle.vue'

@Component({
  components: {
    BaseTitle
  }
})
export default class  extends Vue {
  // 校验规则
  ruleForm:any = {
    username: [
      {required: true, message: '请输入用户名称', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '请输入用户密码', trigger: 'blur'},
    ],
  }
  // 表单
  loginForm: login.LoginInter = {
    username: '',
    password: '',
  }
  // 登录按钮loading
  loginBtnLoading: boolean = false


  /**
   * @author: ypf
   * @Date: 2020-09-24 14:39:38
   * @information: 登录
   */
  async onSubmit(): Promise<void> {
    // 校验表单
    let valid = await (this.$refs.loginFormRef as HTMLFormElement).validate()
    if(!valid) return;
  }
  /**
   * @author: ypf
   * @Date: 2020-09-24 14:39:57
   * @information: 去注册
   */
  onToRegister(): void {
    this.$router.push({name: 'register'})
  }




}
</script>

<style lang="scss">
@import '@/style/login.scss';
</style>
