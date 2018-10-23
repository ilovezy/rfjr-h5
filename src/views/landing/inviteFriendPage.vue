<template>
  <layout class='invite-friend-page'>
    <navbar title="关于我们 TODO"
            slot="navbar"></navbar>
    <div class='invite-friend-wrap'>
      <div class='invite-text'>
        您的好友150****3224（赵先生）<br> 邀请你注册日发金融
      </div>

      <div class='form-body'>
        <div class='form-logo'>
          <img src='./img/form-logo.png'
               alt=''>
        </div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="注册手机号"
                 v-model="mobile">
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

        <div class='form-item'>
          <input type="number"
                 class='form-control'
                 maxlength="6"
                 placeholder="短信验证码"
                 v-model.trim="captchaContent">
          <button slot="right"
                  class="btn-cell-special -disabled"
                  disabled
                  v-if="mobile.length !== 11">获取验证码
          </button>
          <sendcode slot="right"
                    v-model="sendCodeStart"
                    @click.native="sendCode"
                    :second="second"
                    type="warning"
                    v-else></sendcode>
        </div>

        <div class='btn btn-block'
             :class='btnDisabled && "btn-disabled"'
             @click="validForm">注册
        </div>
        <div class="cell-protocol">注册即代表同意
          <router-link to="/protocol/register">《客户协议书》</router-link>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        mobile: '',
        password: '',
        captchaCode: '', // 验证码code
        captchaContent: '', // 正式验证码
        sendCodeStart: false,
        second: 60,
        showPassword: false,
      }
    },
    created() {
      this.isOsAccess()
    },
    computed: {
      btnDisabled() {
        return isNaN(this.mobile) || this.mobile.length !== 11 || this.password.length < 6 || this.password.length > 16
      }
    },
    methods: {
      isOsAccess() {
        if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          this.isNavbar = false
        }
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      /**
       * 获取验证码 & 验证
       */
      sendCode() {
        if (!this.mobile) {
          this.$dialog.toast({mes: '请输入注册手机号'});
          return
        } else if (!isValidPhone(this.mobile)) {
          this.$dialog.toast({mes: '手机号格式不正确'});
          return
        } else {
          this.sendSmsCode()
        }
      },

      sendSmsCode() {
        const self = this
        self.$dialog.loading.open('验证码发送中...');
        self.axios.post('/security/sms/register', {
          mobile: self.mobile
        }).then(res => {
          self.$dialog.toast({mes: '验证码发送成功'});
          self.sendCodeStart = true
          self.captchaCode = res
        }).catch(err => {
          debugger
        })
      },

      validForm() {
        if (!isValidPhone(this.mobile)) {
          this.$dialog.toast({mes: '手机号格式不正确'});
          return
        }
        if (!isValidPassword(this.password)) {
          this.$dialog.toast({mes: '密码格式不正确，长度为6-16位'})
          return
        }
        if (!this.captchaCode) {
          this.$dialog.toast({mes: '请先获取短信验证码'})
          return
        }
        if (!this.captchaContent || !isValidSmsCode(this.captchaContent)) {
          this.$dialog.toast({mes: '请输入正确的短信验证码'})
          return
        }
        this.doRegister()
      },

      //提交注册
      doRegister() {
        const self = this
        this.$dialog.loading.open('注册中请稍后...')
        this.axios.post('/security/register', {
          mobile: this.mobile,
          password: this.password,
          captchaCode: this.captchaCode,
          captchaContent: this.captchaContent,
          inviteCode: this.inviteCode
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res.token) {
          USER.setToken(res.token)
          USER.setLoginName(this.mobile)
          this.$router.replace({
            path: '/registerSuccess',
            query: {
              totalLenderNum: res.totalLenderNum
            }
          })
        }
      }
    }
  }
</script>
<style lang="less">
  @import "inviteFriendPage.less";
</style>
