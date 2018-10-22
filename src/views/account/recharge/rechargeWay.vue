<template>
  <layout class="recharge-way-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">我要入金</span>
    </navbar>
    <div class='title'>
      ￥{{amount | formatThousands}}
    </div>
    <div class='title2'>
      支付宝账号 {{18768143328}}
    </div>
    <img src='./img/qrcode.png'
         class='qrcode'
         alt=''>
    <div class='btn btn-primary btn-block'
         @click="validForm">确定入金
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        amount: 0
      }
    },
    computed: {
      // btnDisabled() {
      //   return isNaN(this.identityNo) || this.identityNo.length < 6 || this.identityNo.length > 16
      // }
    },
    created() {
      this.setAmount()
      this.getToken()
    },
    methods: {
      formatThousands: function (num) {
        return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      },
      setAmount() {
        let query = this.$route.query || {}
        this.amount = query.amount || 0
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
        if (!this.amount) {
          this.$dialog.toast({mes: '请输入入金金额'});
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('入金中，请稍后...')
        this.axios.post('/api/member/recharge', {
          amount: this.amount,
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
  @import "rechargeWay";
</style>
