<template>
  <layout class="login-page user-form">
    <navbar :large='true' slot="navbar">
      <router-link to='/register'
                   slot="right">注册
      </router-link>
    </navbar>

    <div class='title'>
      登录
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <input type="tel"
               class='form-control'
               maxlength="11"
               placeholder="注册手机号"
               v-model="loginName">
      </div>

      <div class='form-item'>
        <input :type="showPassword ? 'text' : 'password'"
               class='form-control'
               maxlength="16"
               placeholder="登录密码"
               v-model.trim="password">
        <img class='pwd-icon'
             @click='togglePassword'
             :src="showPassword ? '/static/images/common/icon-eye.png' : '/static/images/common/icon-eye-close.png'"/>
      </div>

      <div class="forget-password">
        <router-link to="forget">忘记密码</router-link>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         :class='btnDisabled && "btn-disabled"'
         @click="doLogin">登录
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        loginName: '',
        password: '',
        showPassword: false,
        channel: ''
      }
    },
    computed: {
      btnDisabled() {
        return isNaN(this.loginName) || this.loginName.length !== 11 || this.password.length < 6 || this.password.length > 16
      }
    },
    created() {
      this.getChannel()
      this.islogin()
    },
    methods: {
      getChannel() {
        let temp = urlParse()
        this.channel = temp.channel || 'h5'
      },

      togglePassword() {
        this.showPassword = !this.showPassword
      },

      goBack() {
        this.$router.back()
      },

      islogin() {
        if (localStorage.getItem('token') !== null) {
          this.$router.push('/account')
        }
      },

      validForm() {
        if (!isValidPhone(this.loginName)) {
          this.$dialog.toast({mes: '输入的手机号码格式不正确'});
          return false
        } else if (!isValidPassword(this.password)) {
          this.$dialog.toast({mes: '密码格式不正确,为6-16位的字母和数字组合'});
          return false
        }
        return true
      },

      doLogin() {
        const self = this
        if (this.validForm()) {
          // this.$dialog.loading.open('正在登录...');
          this.$dialog.toast({mes: '正在登录...'})

          this.loginSuccess('fuck todo')
          // this.axios.post('/security/token', {
          //   loginName: this.loginName,
          //   password: this.password
          // }).then(res => {
          //   if (res.token) {
          //     self.loginSuccess(res.token)
          //   }
          // })
        }
      },

      loginSuccess(token){
        const self = this
        USER.setToken(token)
        USER.setLoginName(this.loginName)
        this.$dialog.toast({mes: '登录成功'})
        setTimeout(() => {
          self.$router.replace({path: '/account'})
          // self.$router.back()
        }, 1000)
      }
    }
  }
</script>
<style lang="less">
  @import "./login.less";
</style>
