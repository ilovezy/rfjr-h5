<template>
  <layout class="register-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span @click="goBack"
            slot="right">登录</span>
    </navbar>

    <div class='title'>
      注册
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <input class='form-control'
               maxlength="18"
               placeholder="账户名"
               v-model="loginName">
      </div>

      <div class='form-item'>
        <input :type="showPassword ? 'text' : 'password'"
               class='form-control'
               autocomplete="off"
               maxlength="16"
               placeholder="登录密码"
               v-model.trim="password">
        <img class='pwd-icon'
             @click='togglePassword'
             :src="showPassword ? '/static/images/common/icon-eye.png' : '/static/images/common/icon-eye-close.png'"/>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         @click="validForm">注册
    </div>
    <div class="cell-protocol">注册即代表同意
      <router-link to="/protocol/register">《用户协议》</router-link>
    </div>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    data() {
      return {
        loginName: '',
        password: '',
        showPassword: false,
      }
    },
    computed: {
      // btnDisabled() {
      //   return isNaN(this.loginName) || this.password.length < 6 || this.password.length > 16
      // }
    },
    created() {
      this.islogin()
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword
      },

      goBack() {
        this.$router.back()
      },

      islogin() {
        if (USER.isLogin()) {
          this.$router.push('/account')
        }
      },

      validForm() {
        if (!isValidUserName(this.loginName)) {
          this.$dialog.toast({mes: '账号格式不正确，2-18位之间'});
          return
        }
        if (!isValidPassword(this.password)) {
          this.$dialog.toast({mes: '密码格式不正确，长度为6-16位的字母和数字组合'})
          return
        }
        this.doRegister()
      },

      //提交注册
      doRegister() {
        const self = this
        this.$dialog.loading.open('注册中请稍后...')
        this.axios.post('/security/api/member/register', {
          loginName: this.loginName,
          password: this.password,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '注册成功'});
          USER.setToken(res)
          this.$router.replace('/account')
        }
      }
    }
  }
</script>
<style lang="less">
  @import "register";
</style>
