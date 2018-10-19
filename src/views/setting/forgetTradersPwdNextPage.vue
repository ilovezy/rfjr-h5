<template>
  <layout class='forget-traders-pwd-next-page'>
    <navbar slot="navbar">
      <span slot="center">交易密码</span>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>重置交易密码</div>
      <div class='form-body-simple'>
        <div class='form-item'>
          <input :type="showPassword ? 'text' : 'password'"
                 style='width: 80%'
                 class='form-control'
                 maxlength="11"
                 placeholder="请输入新密码（密码长度为6位，纯数字）"
                 v-model="password">
          <img class='pwd-icon'
               @click='togglePassword'
               :src="showPassword ? '/static/images/common/icon-eye.png' : '/static/images/common/icon-eye-close.png'"/>
        </div>

        <div class='form-item'>
          <input class='form-control'
                 maxlength="16"
                 placeholder="短信验证码"
                 v-model.trim="captchaContent">
          <button class="btn-cell-special -disabled"
                  disabled
                  v-if="mobile.length !== 11">获取验证码
          </button>
          <sendcode v-model="sendCodeStart"
                    @click.native="sendCode"
                    :second="second"
                    type="warning"
                    v-else></sendcode>
        </div>
      </div>
    </div>
    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              @click='doConfirm'>确认修改
      </button>
    </div>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    components: {},
    data() {
      return {
        password: '',
        captchaCode: '', // 验证码code
        captchaContent: '', // 正式验证码
        sendCodeStart: false,
        second: 60,
        mobile: '',
        identityNumber: '',
        showPassword: false,

      }
    },
    created() {
      this.mobile = USER.getLoginName()
      let query = this.$route.query || {}
      this.identityNumber = query.identityNumber
    },

    computed: {
      loginName() {
        return USER.getLoginName()
      }
    },

    methods: {

      togglePassword() {
        this.showPassword = !this.showPassword
      },

      /**
       * 获取验证码 & 验证
       */
      sendCode() {
        this.sendSmsCode()
      },

      sendSmsCode() {
        const self = this
        self.$dialog.loading.open('验证码发送中...');
        self.axios.post('/auth/memeber/sms/resetTransactionPwd', {
          mobile: self.mobile,
          identityNumber: self.identityNumber
        }).then(res => {
          self.$dialog.toast({mes: '验证码发送成功'});
          self.sendCodeStart = true
          self.captchaCode = res
        }).catch(err => {
          debugger
        })
      },

      validForm() {
        if (!isValidTransactionPwd(this.password)) {
          this.$dialog.toast({mes: '密码格式不正确，长度为6的纯数字'})
          return false
        }
        if (!this.captchaCode) {
          this.$dialog.toast({mes: '请先获取短信验证码'})
          return false
        }
        if (!this.captchaContent || !isValidSmsCode(this.captchaContent)) {
          this.$dialog.toast({mes: '请输入正确的短信验证码'})
          return false
        }
        return true
      },

      doConfirm() {
        if (this.validForm()) {
          this.axios.post('/auth/memeber/save/resetTransactionPwd', {
            password: this.password,
            captchaCode: this.captchaCode,
            captchaContent: this.captchaContent
          }).then(res => {
            this.$dialog.toast({mes: '交易密码设置成功'})
            setTimeout(() => {
              this.$router.push('/setting')
            }, 2000)
          })
        }
      },
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common/variables";

  .forget-traders-pwd-next-page {
    .btn-wrap {
      padding: 0.4rem;
      bottom: 0;
      width: 100%;
    }
  }
</style>
