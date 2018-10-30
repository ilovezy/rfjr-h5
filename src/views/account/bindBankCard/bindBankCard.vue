<template>
  <layout class="bindBankCard-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">绑定银行卡</span>
    </navbar>

    <div class='title'>
      绑定银行卡
      <p style='font-size: 14px; color: #ff4426;margin-top: 5px;'>注释：请您务必填写与户名一致的银行卡号，如果身份信息与出金银行账户名字不一致，可能会导致无法出金。</p>
    </div>
    <div v-if='loading'>
      <p style="text-align:center; margin-top: 100px; ">
        <span style="color: #999;vertical-align:middle;display:inline-block;font-size: 18px;">加载中&nbsp;&nbsp;</span>
        <inline-loading></inline-loading>
      </p>
    </div>

    <div v-else>
      <div class='form-body'
           style='margin-top: 0.3rem;'>
        <div class='input-spe-wrap'
             style=' background: #eaeaea; margin-bottom: 0.2rem; padding: 0.2rem;'>
          <div class='label'
               style='margin-bottom: 0.2rem;'>开户人: {{trueName}}
          </div>
          <div class='label'
               style='margin-bottom: 0.2rem;'>身份证号: {{identityNo}}
          </div>
          <div style='color: orangered'>(认证已完成不可更改)</div>
        </div>

        <div class='input-spe-wrap'>
          <div class='label'
               style='margin-bottom: 0.5rem;'>银行名称
          </div>
          <div class='form-item'>
            <input class='form-control'
                   placeholder="请输入银行名称"
                   v-model="bankName">
          </div>
        </div>

        <div class='input-spe-wrap'>
          <div class='label'
               style='margin-bottom: 0.5rem;'>开户支行
          </div>
          <div class='form-item'>
            <input class='form-control'
                   placeholder="请输入开户支行"
                   v-model="bankBranch">
          </div>
        </div>

        <div class='input-spe-wrap'>
          <div class='label'
               style='margin-bottom: 0.2rem;'>开户地址
          </div>
          <v-distpicker :province='provinceName'
                        :city='cityName'
                        :area='areaName'
                        @province='changeProvince'
                        @city='changeCity'
                        @area='changeArea'></v-distpicker>
        </div>

        <div class='input-spe-wrap'>
          <div class='label'
               style='margin-bottom: 0.5rem;'>开户银行卡号
          </div>
          <div class='form-item'>
            <input type="number"
                   class='form-control'
                   placeholder="请输入开户银行卡号"
                   v-model="cardNo">
          </div>
        </div>
      </div>
      <div class='btn btn-primary btn-block'
           @click="validForm">确定
      </div>
    </div>
  </layout>
</template>
<script>
  import {InlineLoading} from 'vux'
  import VDistpicker from 'v-distpicker'

  export default {
    components: {
      InlineLoading, VDistpicker
    },
    data() {
      return {
        trueName: '',
        identityNo: '',

        cardNo: '',
        loading: true,
        bindCardFlag: false,
        provinceCode: '',
        provinceName: '',
        cityCode: 0,
        cityName: '',
        areaCode: 0,
        areaName: '',
        bankName: '',
        bankBranch: '',
      }
    },
    computed: {
      address() {
        return this.provinceName + this.cityName + this.areaName
      }
    },
    created() {
      this.getToken()
    },
    methods: {
      changeProvince(data) {
        this.provinceCode = data.code
        this.provinceName = data.value
      },
      changeCity(data) {
        this.cityCode = data.code
        this.cityName = data.value
      },
      changeArea(data) {
        this.areaCode = data.code
        this.areaName = data.value
      },
      goBack() {
        this.$router.back()
      },

      getToken() {
        if (USER.isLogin()) {
          this.getAccount()
        } else {
          USER.logout()
          this.$router.push('/login')
        }
      },

      getAccount() {
        this.axios.post('/api/member/center').then(res => {
          this.bindCardFlag = res.bindCardFlag
          this.realNameFlag = res.realNameFlag
          this.cardNo = res.cardNo
          this.trueName = res.trueName
          this.identityNo = res.identityNo
          this.bankName = res.cardBankName
          this.bankBranch = res.cardBankBranch
          this.provinceCode = res.cardProvinceCode
          this.provinceName = res.cardProvinceName
          this.cityCode = res.cardCityCode
          this.cityName = res.cardCityName
          this.areaCode = res.cardDictCode
          this.areaName = res.cardDictName
          this.loading = false
        })
      },
      validForm() {
        if (!this.bankName) {
          this.$dialog.toast({mes: '请填写银行名称'});
          return
        }
        if (!this.bankBranch) {
          this.$dialog.toast({mes: '请填写开户支行'});
          return
        }
        if (!this.provinceCode) {
          this.$dialog.toast({mes: '请选择开户地址'});
          return
        }
        if (!isValidCardNumber(this.cardNo)) {
          this.$dialog.toast({mes: '请输入正确的开户银行卡号'});
          return
        }
        this.doRegister()
      },

      //提交注册
      doRegister() {
        const self = this
        this.$dialog.loading.open('绑卡中，请稍后...')
        this.axios.post('/api/member/bindCard', {
          cardNo: this.cardNo,
          provinceCode: this.provinceCode,
          provinceName: this.provinceName,
          cityCode: this.cityCode,
          cityName: this.cityName,
          dictCode: this.areaCode, // 后天区的字段为 dictCode
          dictName: this.areaName, // 后天区的字段为 dictCode
          address: this.address,
          bankName: this.bankName,
          bankBranch: this.bankBranch,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        this.$dialog.toast({mes: '绑卡成功！'});
        setTimeout(() => {
          this.goBack()
        }, 1000)
      }
    }
  }
</script>
<style lang="less">
  @import "bindBankCard";
  .distpicker-address-wrapper {
    margin-bottom: 0.5rem;
  }
  .distpicker-address-wrapper select {
    width: 100%;
    border: none !important;
    border-bottom: 1px solid #e2e2e2 !important;
    font-size: 14px!important;
    height: 40px!important;
    padding: 5px!important;
    border-radius: 0!important;
  }
</style>
