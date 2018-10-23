<template>
  <layout class="recharge-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">我要入金</span>
    </navbar>
    <div class='title'>
      我要入金
    </div>

    <div class='form-body'>
      <div class='form-item' style='margin-bottom: 0.2rem;'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="输入入金金额"
               v-model.number="amount">
      </div>
      <p style='margin-bottom: 0.4rem;'>汇率：<span style='color: orangered;'>7.75</span></p>
    </div>

    <div class='select-pay-way-wrap'>
      <div class='title-sm'>选择支付方式</div>

      <div class='pay-way-container'>
        <span class='alipay-item'
              @click='selectAli'
              :class='type == "alipay" && "active"'>
          <span class='iconfont icon-umidd317 ali-icon'></span> 支付宝
        </span>
        <span class='bank-item'
              @click='selectBank'
              :class='type == "bank_card" && "active"'>
          <img src='./img/bank.png'
               class='bank-icon'
               alt=''>银联
        </span>
      </div>

      <div class='info-container'>
        <div v-if='type == "alipay"'>
          <div class='qrcode'>
            <img src='./img/qrcode.png'
                 alt=''>
          </div>
        </div>
        <div v-if='type == "bank_card"'
             class='bank-wrap'>
          <div class='item'>户名：{{'fhc'}}</div>
          <div class='item'>开户银行卡号：{{32131312321312}}</div>
        </div>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         @click="validForm">我已经确认支付，确认
    </div>


    <div class='btn btn-default btn-block'
         @click="goBack">支付遇到问题，关闭
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        amount: '',
        type: 'alipay'
      }
    },
    computed: {
      // btnDisabled() {
      //   return isNaN(this.identityNo) || this.identityNo.length < 6 || this.identityNo.length > 16
      // }
    },
    created() {
      this.getToken()
    },
    methods: {
      selectAli() {
        this.type = 'alipay'
      },
      selectBank() {
        this.type = 'bank_card'
      },
      goBack() {
        this.$router.back()
      },

      getToken() {
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (this.amount) {
          this.doConfirm()
        } else {
          this.$dialog.toast({mes: '请输入入金金额'});
        }
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('入金中，请稍后...')
        this.axios.post('/api/member/recharge', {
          amount: this.amount,
          type: this.type
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '入金成功'});
          setTimeout(() => {
            this.$router.replace('/account')
          }, 1000)
        }
      }
    }
  }
</script>
<style lang="less">
  @import "rechargePage";
</style>
