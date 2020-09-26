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
      <el-form :model="loginForm" :rules="loginRuleForm" ref="formRef" label-width="0px" class="login-form">
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
import baseApi from '@/api/base_api'
import {validForm} from '@/model'
import {baseMixins} from '@/mixins'

@Component({
  mixins: [validForm, baseMixins],
})
export default class Login extends Vue {
  // 表单
  loginForm: login.LoginInter = {
    username: '',
    password: '',
  }
  // 登录按钮loading
  loginBtnLoading: boolean = false
  $util: any


  /**
   * @author: ypf
   * @Date: 2020-09-24 14:39:38
   * @information: 登录
   */
  async onSubmit(): Promise<void> {
    // 校验表单
    let valid = await (this.$refs.formRef as HTMLFormElement).validate()
    if(!valid) return;
    this.loginBtnLoading = true
    setTimeout(() => {
      this.loginBtnLoading = false
      this.$router.push({name: 'home'})
      this.$util.setMessage('success', '登录成功')
    }, 1000);
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
