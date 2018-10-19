<template>
  <layout class='open-bank-page'>
    <navbar slot="navbar">
      <span slot="center">开通银行存管</span>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>
        实名信息
      </div>
      <div class='panel-body'>
        <div class='form-item-ghost'>
          <input type='text'
                 placeholder='姓名'
                 class='form-control'>
        </div>
        <div class='form-item-ghost'>
          <input type='text'
                 placeholder='身份证号'
                 class='form-control'>
        </div>
      </div>
    </div>


    <div class='simple-panel'>
      <div class='panel-title'>
        银行卡信息
      </div>
      <div class='panel-body'>
        <div class='form-item-ghost select-item'>
          <span class='title'>开户银行</span>
          <img src='/static/images/common/arrow-down-2.png'
               class='img-arrow-down'
               alt=''>
        </div>
        <div class='form-item-ghost'>
          <input type='text'
                 placeholder='卡号'
                 class='form-control'>
        </div>
        <div class='form-item-ghost select-item'>
          <span class='title'>开户省份</span>
          <img src='/static/images/common/arrow-down-2.png'
               class='img-arrow-down'
               alt=''>
        </div>
        <div class='form-item-ghost select-item'>
          <span class='title'>开户城市</span>
          <img src='/static/images/common/arrow-down-2.png'
               class='img-arrow-down'
               alt=''>
        </div>
      </div>
    </div>


    <div class='simple-panel'>
      <div class='panel-title'>
        交易密码

      </div>
      <div class='panel-body'>
        <div class='form-item-ghost'>
          <input type='password'
                 placeholder='交易密码'
                 class='form-control'>
        </div>
      </div>
    </div>

    <div class='bottom-tips'>
      开通代表你已阅读并同意 <span class='text-main'>《用户授权协议》</span>
      <br> <span class='text-main'>《网贷客户交易结算资金账户三方协议》</span>
    </div>

    <div>
      <button class='btn btn-primary'
              @click='openPopup'>open popup
      </button>
    </div>

    <popup :value='showPopup'
           @input='closePopup'>
      <div class='select-item-wrap bank-select'>
        <div class='select-item'>
          <div class='top'>
            <img src='/static/images/common/icon-select-bank.png'
                 class='img-select-bank'
                 alt=''>
            <span class='name'>中国人民银行</span>
          </div>
          <div class='bottom'>
            单笔X元，单日X元
          </div>
        </div>
      </div>
    </popup>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        navList: [{
          label: 'fuck'
        }],
        showPopup: false
      }
    },
    created() {
    },

    methods: {
      openPopup() {
        this.showPopup = true
      },
      closePopup(val) {
        this.showPopup = false
        console.log('fuck', val)
      }
    }
  }
</script>
<style lang="less">
  @import "openBankPage";
</style>
