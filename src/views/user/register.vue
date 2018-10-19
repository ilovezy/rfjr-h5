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

      <div class='form-item form-item-special'
           :class='!showReference && "form-sm"'>
        <input type="tel"
               class='form-control'
               maxlength="16"
               :placeholder="showReference ? '请输入邀请人手机号(非必填项)' : '邀请人' "
               @focus='toggleReference'
               v-model.trim="inviteCode">
        <img class='pwd-icon'
             v-if='!showReference'
             @click='toggleReference'
             src='/static/images/common/arrow-down.png'/>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         :class='btnDisabled && "btn-disabled"'
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
        mobile: '',
        password: '',
        captchaCode: '', // 验证码code
        captchaContent: '', // 正式验证码
        sendCodeStart: false,
        second: 60,

        inviteCode: '', // 邀请人手机号

        showPassword: false,
        showReference: false
      }
    },
    computed: {
      btnDisabled() {
        return isNaN(this.mobile) || this.mobile.length !== 11 || this.password.length < 6 || this.password.length > 16
      }
    },
    created() {
      this.islogin()
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword
      },

      toggleReference() {
        this.showReference = true
      },

      goBack() {
        this.$router.back()
      },

      islogin() {
        if (USER.isLogin()) {
          this.$router.push('/account')
        }
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
          this.$dialog.toast({mes: '密码格式不正确，长度为6-16位的字母和数字组合'})
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
        if (this.inviteCode && !isValidPhone(this.inviteCode)) {
          this.$dialog.toast({mes: '邀请人手机号格式不正确'});
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
  @import "register";
</style>
