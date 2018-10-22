<template>
  <layout class="recharge-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">会员提现</span>
    </navbar>
    <div class='title'>
      会员提现
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="提现金额"
               v-model.number="amount">
      </div>
    </div>
    <div class='btn btn-primary btn-block'
         @click="validForm">确定提现
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
        if (!this.amount) {
          this.$dialog.toast({mes: '请输入提现金额'});
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('提现中，请稍后...')
        this.axios.post('/api/member/withdraw', {
          amount: this.amount,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '提现成功'});
          setTimeout(() => {this.goBack()}, 1000)

        }
      }
    }
  }
</script>
<style lang="less">
  @import "withdrawPage";
</style>
