<template>
  <layout class="register-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span @click="goLogin"
            slot="right">登录</span>
    </navbar>

    <div class='title'>
      注册
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <div class='label'>账户名</div>
        <input class='form-control'
               maxlength="18"
               placeholder="账户名"
               v-model="loginName">
      </div>

      <div class='form-item'>
        <div class='label'>登录密码</div>
        <input :type="showPassword ? 'text' : 'password'"
               class='form-control'
               autocomplete="off"
               maxlength="16"
               placeholder="登录密码"
               v-model.trim="password">
        <img class='pwd-icon'
             @click='togglePassword'
             :src="showPassword ? '/h5/static/images/common/icon-eye.png' : '/h5/static/images/common/icon-eye-close.png'"/>
      </div>

      <div class='form-item'>
        <div class='label'>邀请码</div>
        <input class='form-control'
               maxlength="18"
               placeholder="邀请码"
               v-model="inviteId">
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         @click="validForm">注册
    </div>
    <div class="cell-protocol">注册即代表同意
      <router-link to="/protocol/register">《客户协议书》</router-link>
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
        inviteId: ''
      }
    },
    computed: {
      // btnDisabled() {
      //   return isNaN(this.loginName) || this.password.length < 6 || this.password.length > 16
      // }
    },
    created() {
      this.setInviteId()
      this.islogin()
    },
    methods: {
      setInviteId() {
        let query = this.$route.query || {}
        this.inviteId = query.inviteId || ''
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },

      goBack() {
        this.$router.back()
      },
      goLogin(){
        this.$router.push('/login')
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
          this.$dialog.toast({mes: '密码格式不正确，长度为6-16位'})
          return
        }
        if (!this.inviteId) {
          this.$dialog.toast({mes: '请输入邀请码'})
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
          inviteId: this.inviteId
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

  .register-page {
    .form-item {
      .label {
        width: 80px;
      }
      input {
        flex: 1;
      }
    }
  }
</style>
