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
      <div class='form-item'
           style='margin-bottom: 0.2rem;'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="输入入金金额"
               v-model.number="amount">
      </div>
      <p style='margin-bottom: 0.4rem;'>(USD) : {{usdAmount}}</p>
      <p style='margin-bottom: 0.4rem;'>
        汇率：<span style='color: orangered;'>7.75</span>
        <span style='color: #999'>（入金时间：周一至周五9:00-24:00）</span>
      </p>
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
          <div class='item'>户名：王萃</div>
          <div class='item'>开户银行：中国银行杭州文晖支行</div>
          <div class='item'>开户银行卡号：6216696200004027992</div>
        </div>
        <div style='color: orangered; text-align: center; margin-top: 5px;'>(转账备注交易账号+姓名)</div>
      </div>
    </div>

    <div class='notice-container '
         style='padding: 15px;background: rgb(248, 248, 248); margin-top: 15px; margin-bottom: 15px;'>
      <div style='margin-bottom: 10px;'>1.支付时请务必填写页面显示附言，若没有填写则会导致入金无法到账，请及时联系客服人员，支付过程中请附言上您的交易账号，以便我们查询</div>
      <div style='margin-bottom: 10px;'>2.转账后，发送转账明细截图至您的专属客户经理或本司客服</div>
      <div style='margin-bottom: 10px;'>3.为确保资金及时到账，请选择“实时转账”，我方收款后，15分钟内办理</div>
      <div style='margin-bottom: 10px;'>4.花呗、信用卡入金通道费用千8/笔</div>
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
      usdAmount() {
        return Number(parseFloat(this.amount / 7.75).toFixed(3).slice(0,-1))
      }
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
