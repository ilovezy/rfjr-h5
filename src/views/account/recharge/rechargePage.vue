<template>
  <layout class='recharge-page'>
    <navbar slot="navbar">
      <span slot="center">充值</span>
        <router-link to='/rechargeList'
                     slot='right'
                     class='navbar-right-sm'>
          充值记录
        </router-link>
    </navbar>

    <div class='bank-info'>
      <div class='bank-logo-wrap'>
        <img src='/static/images/account/bank-logo.png'
             class='bank-logo'
             alt=''>
      </div>
      <div class='bank-detail'>
        <div class='top'>
          <div class='name'>工商银行</div>
          <div class='code'>尾号1766</div>
        </div>
        <div class='bottom'>
          单笔5万元/单日5万元
        </div>
      </div>
    </div>

    <div class='form-body-simple with-label'>
      <div class='form-item'>
        <div class='label'>充值金额</div>
        <input type="tel"
               class='form-control'
               maxlength="11"
               placeholder="1,000元起"
               v-model="loginName">
      </div>
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-square btn-block btn-primary'>确认充值
      </button>
    </div>

    <div class='bottom-tips'>
      客服电话：400-150-8080 <br>
      （工作日 09:00-18:00）
    </div>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        loginName: '',
        password: '',
        sendCodeStart: false,
        second: 60,
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      sendCode() {

      },
      toggleShowNum() {
        this.showNum = !this.showNum
      },

      sayFuck() {
        this.$dialog.toast({mes: 'fuclk TODO'})
      },

      getToken() {
        if (USER.isLogin()) {
          this.isLogin = true
          this.getAccount()
          this.loginName = USER.getLoginName()
        } else {
          this.isLogin = false
        }
      },

      getAccount() {
      }
    }
  }
</script>
<style lang="less">
  @import "rechargePage";
</style>
