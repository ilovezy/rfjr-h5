<template>
  <layout class='reset-login-pwd-page'>
    <navbar slot="navbar">
      <span slot="center">银行卡</span>
    </navbar>

    <bank-card :logo='"/static/images/account/bank-logo.png"'
               :name='"恒丰银行电子账户"'
               :openEnter='openEnter'
               :bankNum='123189239147917397122'/>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        loginName: '',
        password: '',
        showPassword: false,
      }
    },
    created() {

    },
    methods: {
      doConfirm() {

      },
      openEnter() {
        const self = this
        this.$dialog.confirm({
          mes: '请补充支行信息',
          prompt: 'yes',
          align: 'align-center',
          noTitle: true,
          opts(val) {
            self.inviteCode = val
          }
        })
      },
      togglePassword() {
        this.showPassword = !this.showPassword
      },

    }
  }
</script>
<style lang="less">
  @import "../../../assets/styles/common/variables";

  .reset-login-pwd-page {
    .notice {
      padding: 0.4rem;
      color: @color-sub;
      .font24();
    }
    .btn-wrap {
      padding: 0.4rem;
      padding-top: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>
