<template>
  <layout class='setting-page'>
    <navbar slot="navbar"
            back-link='/account'>
      <span slot="center">设置</span>
    </navbar>

    <div class='simple-panel'>
      <simple-list-item title='注册手机号'
                        :disabled='true'
                        :right-text-sub='loginName'/>
      <simple-list-item title='修改登录密码'
                        link='/resetLoginPwd'/>
    </div>

    <div class='simple-panel'
         v-if='openBank'>
      <simple-list-item title='银行存管账户'
                        arrowText='已开通'
                        link='/bankAccount'/>
      <simple-list-item title='投标授权'
                        arrowText='请授权/已授权'
                        link='/bidAuth'/>
      <simple-list-item title='交易密码'
                        link='/resetTradersPwd'/>
      <simple-list-item title='银行卡'
                        link='/bankCard'/>
    </div>

    <div class='simple-panel'
         v-else>
      <simple-list-item title='银行存管账户'
                        right-text-primary='请开通'/>
      <simple-list-item title='投标授权'
                        right-text-sub='请先开通银行存管账户'/>
      <simple-list-item title='交易密码'
                        right-text-sub='请先开通银行存管账户'/>
      <simple-list-item title='银行卡'
                        right-text-sub='请先开通银行存管账户'/>
    </div>

    <div class='simple-panel'>
      <simple-list-item title='我的邀请人'
                        v-if='inviteCode'
                        :disabled='true'
                        :right-text-sub='inviteCode'/>
      <simple-list-item title='我的邀请人'
                        v-else
                        right-text-sub='请输入邀请人手机号'
                        @click.native='doEnterInvite'/>
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              @click='doLogout'>安全退出
      </button>
    </div>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    components: {},
    data() {
      return {
        openBank: true,
        inviteCode: ''
      }
    },
    created() {

    },

    computed: {
      loginName() {
        return USER.getLoginName()
      }
    },

    methods: {
      doEnterInvite() {
        const self = this
        this.$dialog.confirm({
          title: '填写后不可再更改',
          inputType: 'number',
          align: 'align-center',
          mes: '请输入',
          prompt: 'yes',
          opts(val) {
            self.inviteCode = val
          }
        })
      },
      doLogout() {
        const self = this
        this.$dialog.confirm({
          title: '温馨提示',
          mes: '确定要退出登录吗',
          opts() {
            USER.logout()
            self.$router.back()
          }
        })
      }
    }
  }
</script>
<style lang="less">
  @import "settingPage";

  .setting-page {
    .btn-wrap {
      padding: 0.4rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>
