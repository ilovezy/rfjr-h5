<template>
  <layout class="bindBankCard-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">绑定银行卡</span>
    </navbar>

    <div class='form-body'>
      <div class='input-spe-wrap'>
        <div class='label'>开户银行</div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="请输入开户银行"
                 v-model="mobile">
        </div>
      </div>
      <div class='input-spe-wrap'>
        <div class='label' style='margin-bottom: 0;'>开户地址</div>
        <group class='select-address'>
          <x-address v-model="addressValue"
                     :list="addressData"
                     @on-shadow-change="onShadowChange"
                     :show.sync="showAddress"></x-address>
        </group>
      </div>
      <div class='input-spe-wrap'>
        <div class='label'>支行名称</div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="请输入支行名称"
                 v-model="mobile">
        </div>
      </div>
      <div class='input-spe-wrap'>
        <div class='label'>开户人</div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="开户人"
                 v-model="mobile">
        </div>
      </div>
      <div class='input-spe-wrap'>
        <div class='label'>身份证号</div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="身份证号"
                 v-model="mobile">
        </div>
      </div>
      <div class='input-spe-wrap'>
        <div class='label'>储蓄卡卡号 *</div>
        <div class='form-item'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="请输入储蓄卡卡号"
                 v-model="mobile">
        </div>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         :class='btnDisabled && "btn-disabled"'
         @click="validForm">确定
    </div>
  </layout>
</template>
<script>
  import {Group, XAddress} from 'vux'
  import AddressData from './CityData.js'

  export default {
    components: {
      Group,
      XAddress,
    },
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
        showReference: false,


        addressValue: [],
        provinceId: '',
        cityId: '',
        districtId: '',
        addressData: AddressData,
        showAddress: false,

      }
    },
    computed: {
      btnDisabled() {
        return isNaN(this.mobile) || this.mobile.length !== 11 || this.password.length < 6 || this.password.length > 16
      }
    },
    created() {
      // this.islogin()
    },
    methods: {
      onShadowChange(ids, names) {
        this.provinceId = ids[0]
        this.cityId = ids[1]
        this.districtId = ids[2]
        this.provinceName = names[0]
        this.cityName = names[1]
        this.districtName = names[2]
        this.addressValue = ids
      },

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
  @import "bindBankCard";
</style>
