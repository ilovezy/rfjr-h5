<template>
  <layout class="forget-page user-form">
    <navbar :large='true'
            slot="navbar">
    </navbar>

    <div class='title'>
      找回登录密码
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
               placeholder="新密码"
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
    </div>

    <div class='btn btn-primary btn-block'
         :class='btnDisabled && "btn-disabled"'
         @click="doNext">确定
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        mobile: '',
        password: '',
        showPassword: false,
        captchaCode: '', // 验证码code
        captchaContent: '', // 正式验证码
        sendCodeStart: false,
        second: 60,
      }
    },
    computed: {
      btnDisabled() {
        return isNaN(this.mobile) || this.mobile.length !== 11
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },

      // doNext() {
      //   this.axios.post('/security/check/resetLoginPwd', {
      //     mobile: this.mobile
      //   }).then(res => {
      //     this.$router.push({
      //       path: '/forgetNext',
      //       query: {
      //         mobile: this.mobile
      //       }
      //     })
      //   })
      // },

      /**
       * 获取验证码 & 验证
       */
      sendCode() {
        this.sendSmsCode()
      },

      sendSmsCode() {
        const self = this
        self.$dialog.loading.open('验证码发送中...');
        self.axios.post('/security/sms/resetLoginPwd', {
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
        if (!this.password) {
          this.$dialog.toast({mes: '请输入新密码'})
          return false
        }
        if (!isValidPassword(this.password)) {
          this.$dialog.toast({mes: '新密码格式不正确，长度为6-16位的字母和数字组合'})
          return false
        }
        if (!this.captchaCode) {
          this.$dialog.toast({mes: '请先获取短信验证码'})
          return false
        }
        if (!this.captchaContent || !isValidSmsCode(this.captchaContent)) {
          this.$dialog.toast({mes: '请输入正确的短信验证码'})
          return
        }
        return true
      },

      doNext() {
        if (this.validForm()) {
          this.axios.post('/security/save/resetLoginPwd', {
            mobile: this.mobile,
            password: this.password,
            captchaCode: this.captchaCode,
            captchaContent: this.captchaContent,
          }).then(res => {
            this.$dialog.toast({mes: '已成功找回密码，快去登录吧'})
            USER.logout()
            setTimeout(() =>{
              this.$router.push('/login')
            }, 2000)
          })
        }
      }
    }
  }
</script>
<style lang="less">
  @import "forget.less";
</style>
