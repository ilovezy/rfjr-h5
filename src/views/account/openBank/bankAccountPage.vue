<template>
  <layout class='bank-account-page'>
    <navbar slot="navbar">
      <span slot="center">银行存管账户</span>
    </navbar>

    <bank-card :logo='"/static/images/account/bank-logo.png"'
               :name='"恒丰银行电子账户"'
               :isOpen='true'
               :bankNum='123189239147917397122'/>

    <div class='simple-panel'>
      <simple-list-item title='姓名'
                        :disabled='true'
                        right-text-sub='请开通'/>
      <simple-list-item title='身份证号'
                        :disabled='true'
                        right-text-sub='请开通'/>
      <simple-list-item title='预留手机号'
                        :disabled='true'
                        right-text-sub='请开通'/>
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
        showPassword: false,
      }
    },
    created() {

    },
    methods: {
      doConfirm() {

      },

      togglePassword() {
        this.showPassword = !this.showPassword
      },
    }
  }
</script>
<style lang="less">
</style>
