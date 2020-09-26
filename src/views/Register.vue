<!--
 * @Date: 2020-09-24 15:51:24
 * @information: 注册页面
-->
<template>
  <div id="register">
    <!-- 标题 -->
    <base-title titleText="Welcome to Register Chat_Room_On_Line !"></base-title>
    <!-- 表单容器 -->
    <div class="form-container">
      <el-form :model="loginForm" :rules="registerRuleForm" ref="formRef" label-width="0px" class="login-form">
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
        <el-form-item prop="rePassword">
          <el-input v-model="loginForm.rePassword" 
                    type="password" 
                    prefix-icon="el-icon-lock"
                    placeholder="请再次输入用户密码"
                    show-password
                    :maxlength="12"
                    @keyup.enter.native="onSubmit"></el-input>
        </el-form-item>
        <!-- 按钮组 -->
        <el-form-item class="btn-box">
          <el-button  type="primary" 
                      :loading="registerBtnLoading"
                      @click="onSubmit()">注册</el-button>
          <el-button @click="onToLogin()">去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {register} from '@/interface'
import baseApi from '@/api/base_api'
import {validForm} from '@/model'
import {baseMixins} from '@/mixins'

@Component({
  mixins: [validForm, baseMixins],
})
export default class Register extends Vue {
  // 表单
  loginForm: register.RegisterInter = {
    username: '',
    password: '',
    rePassword: '',
  }
  // 注册按钮loading
  registerBtnLoading: boolean = false


  /**
   * @author: ypf
   * @Date: 2020-09-24 16:58:54
   * @information: 注册提交
   */
  async onSubmit(): Promise<void> {
    // 校验表单
    let valid = await (this.$refs.formRef as HTMLFormElement).validate()
    if(!valid) return;
  }

  /**
   * @author: ypf
   * @Date: 2020-09-24 16:59:40
   * @information: 去登陆
   */
  onToLogin(): void {
    this.$router.push({name: 'login'})
  }


}
</script>

<style lang="scss">
@import '@/style/register.scss';
</style>