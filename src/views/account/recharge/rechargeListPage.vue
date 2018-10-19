<template>
  <layout class='recharge-list-page'>
    <navbar slot="navbar">
      <span slot="center">充值记录</span>
    </navbar>

    <div class='simple-panel-with-title'>
      <div class='title'>
        2018/07
      </div>

      <div class='list-item-spe'>
        <div class='top'>
          <div class='left'>充值</div>
          <div class='right'>1,000</div>
        </div>
        <div class='bottom'>
          <div class='left'>2017/07/04 13:38:27</div>
          <div class='right'>充值成功</div>
        </div>
      </div>
      <div class='list-item-spe'>
        <div class='top'>
          <div class='left'>充值</div>
          <div class='right'>1,000</div>
        </div>
        <div class='bottom'>
          <div class='left'>2017/07/04 13:38:27</div>
          <div class='right'>充值成功</div>
        </div>
      </div>
      <div class='list-item-spe'>
        <div class='top'>
          <div class='left'>充值</div>
          <div class='right'>1,000</div>
        </div>
        <div class='bottom'>
          <div class='left'>2017/07/04 13:38:27</div>
          <div class='right'>充值成功</div>
        </div>
      </div>
    </div>
    <div class='simple-panel-with-title'>
      <div class='title'>
        2018/07
      </div>

      <div class='list-item-spe'>
        <div class='top'>
          <div class='left'>充值</div>
          <div class='right'>1,000</div>
        </div>
        <div class='bottom'>
          <div class='left'>2017/07/04 13:38:27</div>
          <div class='right'>充值成功</div>
        </div>
      </div>
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
  @import "rechargeListPage";
</style>
