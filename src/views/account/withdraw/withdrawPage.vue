<template>
  <layout class="recharge-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">我要出金</span>
    </navbar>
    <div class='title'>
      我要出金
    </div>

    <div class='form-body'>
      <!--<div class='form-item' style='border-bottom: none'>-->
        <!--可用资金(USD): ${{availableBalance}}-->
      <!--</div>-->
      <div class='form-item'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="出金金额"
               v-model.number="amount">
      </div>
      <div style='margin-bottom: 0.4rem;'>￥{{rmbAmount}}</div>
      <p style='margin-bottom: 0.4rem;'>
        汇率：<span style='color: orangered;'>7.75</span>
      </p>
    </div>

    <div class='notice-container '
         style='padding: 15px;background: rgb(248, 248, 248); margin-bottom: 15px;'>
      <div style='margin-bottom: 10px;'>1.出金申请提交时间为交易日9:00-16:30，超过时段提交无效</div>
      <div style='margin-bottom: 10px;'>2.出金办理时间为1个交易日内，一般2个小时内办理，以银行处理为准</div>
    </div>
    <div class='btn btn-primary btn-block'
         @click="validForm">确定出金
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        amount: '',
        availableBalance: 0,
      }
    },
    computed: {
      rmbAmount() {
        return Number(parseFloat(this.amount * 7.75).toFixed(3).slice(0,-1))
      }
    },
    created() {
      this.getToken()
    },
    methods: {
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
          this.availableBalance = res.availableBalance
        })
      },

      validForm() {
        if (!this.amount) {
          this.$dialog.toast({mes: '请输入出金金额'});
          return
        }
        // if (this.amount > this.availableBalance) {
        //   this.$dialog.toast({mes: '可用资金不足'});
        //   return
        // }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('出金中，请稍后...')
        this.axios.post('/api/member/withdraw', {
          amount: this.amount,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '出金成功'});
          setTimeout(() => {this.goBack()}, 1000)

        }
      }
    }
  }
</script>
<style lang="less">
  @import "withdrawPage";
</style>
