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
      <div class='form-item'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="入金金额"
               v-model.number="amount">
      </div>
    </div>
    <div class='btn btn-primary btn-block'
         @click="validForm">确定入金
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        amount: ''
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
          this.$router.push({path: '/rechargeWay', query: {amount: this.amount}})
        } else {
          this.$dialog.toast({mes: '请输入入金金额'});
        }
      },
    }
  }
</script>
<style lang="less">
  @import "rechargePage";
</style>
