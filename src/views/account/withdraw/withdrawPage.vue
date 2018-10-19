<template>
  <layout class='withdraw-page'>
    <navbar slot="navbar">
      <span slot="center">提现</span>
      <router-link to='/withdrawList'
                   slot='right'
                   class='navbar-right-sm'>
        提现记录
      </router-link>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>
        提现至
      </div>
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
    </div>

    <div class='form-body-simple with-label'>
      <div class='form-item with-extra'>
        <div class='label'>充值金额</div>
        <div class='right'>
          <input type="tel"
                 class='form-control'
                 maxlength="11"
                 placeholder="1,000元起"
                 v-model="loginName">
          <div class='extra-text'>
            可提余额 <span class='text-main'>0.00</span>元，
            <span class='text-info'>全部提现</span>
          </div>
        </div>
      </div>

    </div>

    <div class='btn-wrap'>
      <button class='btn btn-square btn-block btn-primary'
              @click='openConfirm'>确认提现
      </button>
    </div>

    <withdraw-rule/>

    <div class='bottom-tips'>
      客服电话：400-150-8080 <br>
      （工作日 09:00-18:00）
    </div>

    <div class="mask-black-dialog"
         v-if='showConfirm'>
      <div class="confirm">
        <div class="confirm-bd">
          由于本次提现金额较大，为保障提现金额顺利到账请填写银行卡支行信息
        </div>
        <div class="confirm-ft">
          <a href="javascript:;"
             class="confirm-btn default"
             @click.stop="closeConfirm">取消</a>
          <a href="javascript:;"
             class="confirm-btn primary "
             @click.stop="closeConfirm">前往填写</a>
        </div>

      </div>
    </div>

  </layout>
</template>
<script>
  import withdrawRule from './withdrawRule'

  export default {
    components: {withdrawRule},
    data() {
      return {
        loginName: '',
        password: '',
        sendCodeStart: false,
        second: 60,
        showConfirm: false
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
      },

      openConfirm() {
        this.showConfirm = true
      },
      closeConfirm(){
        this.showConfirm = false
      }
    }
  }
</script>
<style lang="less">
  @import "withdrawPage";
</style>
