<template>
  <layout class='account-page'
          :showTabbar="true">
    <div class='main-container'>
      <div class='account-basic-container'>
        <div class='avatar'>
          <img src='./img/avatar.jpeg'
               alt=''>
        </div>

        <div class='basic-info'>
          <div class='basic-info-item'>登录账户：18768143328</div>
          <div class='basic-info-item'>用户编号：18768143328</div>
          <div class='basic-info-item'>交易账户：18768143328</div>
        </div>
      </div>

      <div class='bottom-container'>
        <div class='bottom-item'>
          <div class='number'>0</div>
          <div class='text'>劣后金额（USD）</div>
        </div>

        <div class='bottom-item'>
          <div class='number'>0</div>
          <div class='text'>优先资金（USD）</div>
        </div>

        <div class='bottom-item'>
          <div class='number'>0</div>
          <div class='text'>当前权益（USD）</div>
        </div>
      </div>
    </div>

    <div class='simple-panel'>
      <simple-list-item
        link='/loanRecord'
        icon='icon-brorrow.png'
        title='我要出金'/>
      <simple-list-item
        link='/moneyRecord'
        icon='icon-record.png'
        title='入金记录'/>
      <simple-list-item
        link='/myRedPackage'
        icon='icon-redpackage.png'
        title='出金记录'/>
    </div>

    <div class='simple-panel'>
      <simple-list-item
        link='/article/about'
        icon='icon-about.png'
        title='实名认证'/>
      <simple-list-item
        link='/setting'
        icon='icon-setting.png'
        title='设置登录密码'/>
      <simple-list-item
        link='/bindBankCard'
        icon='icon-setting.png'
        title='绑定银行卡'/>
      <simple-list-item
        link='/landing/inviteFriend'
        icon='icon-setting.png'
        title='出入金密码'/>
      <simple-list-item
        @click.native='logout'
        icon='icon-brorrow.png'
        title='退出登录'/>
    </div>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    data() {
      return {
        openBank: true,
        loginName: '',
        showNum: true
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      getToken() {
        if (USER.isLogin()) {
          this.getAccount()
          this.loginName = USER.getLoginName()
        } else {
          USER.logout()
          this.$router.push('/login')
        }
      },

      logout() {
        USER.logout()
        this.$dialog.toast({mes: '退出登录成功！请重新登录'})
        setTimeout(() =>{
          this.$router.push('/login')
        }, 2000)
      },

      toggleShowNum() {
        this.showNum = !this.showNum
      },

      sayFuck() {
        this.$dialog.toast({mes: 'fuclk TODO'})
      },

      getAccount() {
      }
    }
  }
</script>
<style lang="less">
  @import "index";
</style>
