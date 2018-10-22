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
          <div class='basic-info-item'>登录账户：{{name}}</div>
          <div class='basic-info-item'>交易账户：{{bindCardFlag ? '' : '未开户'}}</div>
        </div>
      </div>

      <div class='bottom-container'>
        <div class='bottom-item'>
          <div class='number'>{{balance}}</div>
          <div class='text'>金额</div>
        </div>

        <div class='bottom-item'>
          <div class='number'>{{availableBalance}}</div>
          <div class='text'>可用金额</div>
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
        link='/realName'
        icon='icon-about.png'
        :title="realNameFlag ? '实名认证 (已认证)' : '实名认证'"/>
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
        availableBalance: 0,
        balance: 0,
        bindCardFlag: false,
        name: '',
        openAccountFlag: false,
        realNameFlag: false,
      }
    },
    created() {
      this.getToken()
    },

    methods: {
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
          this.balance = res.balance
          this.bindCardFlag = res.bindCardFlag
          this.name = res.name
          this.openAccountFlag = res.openAccountFlag
          this.realNameFlag = res.realNameFlag
        })
      },

      logout() {
        USER.logout()
        this.$dialog.toast({mes: '退出登录成功！请重新登录'})
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      },
    }
  }
</script>
<style lang="less">
  @import "index";
</style>
