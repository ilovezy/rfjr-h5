<template>
  <div class='not-login'>
    <div class='account-basic-container '>
      <div class='logo'>
        注册即送888现金礼包
      </div>
      <router-link to='/login'
                   class='special-btn'>
        登录/注册
      </router-link>
    </div>

    <div class='grid-btns-wrap'>
      <div class='item item-first'
           @click='goLogin'>提现
      </div>
      <div class='item text-primary'
           @click='goLogin'>充值
      </div>
    </div>

    <div class='simple-panel'>
      <simple-list-item
        @click.native='login'
        icon='icon-brorrow.png'
        title='假登录TODO'/>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-brorrow.png'
        title='出借记录'/>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-record.png'
        title='资金记录'/>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-redpackage.png'
        title='我的红包'/>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-reward.png'
        title='邀请奖励'/>
    </div>

    <div class='simple-panel'>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-about.png'
        title='关于我们'/>
      <simple-list-item
        @click.native='goLogin'
        icon='icon-setting.png'
        title='设置'/>
    </div>
  </div>
</template>

<script>
  import USER from '../../../global/USER';

  export default {
    created() {
    },

    methods: {
      login() {
        USER.setToken('fuck TODO')// TODO delete
        USER.setLoginName(18768143328)// TODO delete
      },
      goLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang='less'>
  @import "notLoginPage";
</style>
