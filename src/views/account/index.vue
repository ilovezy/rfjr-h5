<template>
  <layout class='account-page'
          :showTabbar="true">
    <div class='main-container'>
      <div class='account-basic-container'>
        <span class='iconfont avatar icon-ava12tar'></span>

        <div class='basic-info'>
          <div class='basic-info-item'>登录账户：{{name}}</div>
          <div class='basic-info-item'>交易账户：{{openAccountFlag ? account : '未开户'}}</div>
        </div>
      </div>

      <!--<div class='bottom-container'>-->
        <!--<div class='bottom-item'>-->
          <!--<div class='number'>$ {{balance | formatThousands}}</div>-->
          <!--<div class='text'>资金(USD)</div>-->
        <!--</div>-->

        <!--<div class='bottom-item'>-->
          <!--<div class='number'>$ {{availableBalance | formatThousands}}</div>-->
          <!--<div class='text'>可用资金(USD)</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <div class='simple-panel'>
      <simple-list-item
        link='/realName'
        icon='icon-s111himingrenzheng-copy'
        :success='realNameFlag'
        title="实名认证"/>
      <simple-list-item
        @click.native='goTarget("/openAccount")'
        icon='icon-kaihu'
        :success='openAccountFlag'
        title="在线开户"/>
      <simple-list-item
        @click.native='goTarget("/bindBankCard")'
        icon='icon-1malingshuxiangmuicon-'
        :success='bindCardFlag'
        title="绑定银行卡"/>
    </div>

    <div class='simple-panel'>
      <simple-list-item
        @click.native='goTarget("/recharge")'
        icon='icon-chongzhi2'
        title='我要入金'/>
      <simple-list-item
        @click.native='goTarget("/rechargeList")'
        icon='icon-jilu1-copy'
        title='入金记录'/>
      <simple-list-item
        @click.native='goTarget("/withdraw", "yes")'
        icon='icon-tixian3'
        title='我要出金'/>
      <simple-list-item
        @click.native='goTarget("/withdrawList", "yes")'
        icon='icon-jilu1-copy'
        title='出金记录'/>
      <!--<simple-list-item-->
        <!--link='/landing/inviteFriend'-->
        <!--icon='icon-setting.png'-->
        <!--title='出入金密码'/>-->
    </div>
    <div class='simple-panel'>
      <simple-list-item
        link='/download'
        icon='icon-xiazai1'
        title='我要下载'/>
    </div>
    <div class='simple-panel'>
      <simple-list-item
        link='/changePassword'
        icon='icon-xiugai-1'
        title='修改登录密码'/>
      <simple-list-item
        @click.native='logout'
        icon='icon-logout23'
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
        account: ''
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      formatThousands: function (num) {
        return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      },
      goTarget(link, needBandCard) {
        if (this.realNameFlag) {
          if (needBandCard && !this.bindCardFlag) {
            this.$dialog.confirm({
              title: '提示',
              mes: '<div style="line-height: 0.5rem">请先绑定银行卡再进行操作</div> ',
              opts: [
                {
                  txt: '取消',
                  color: false
                },
                {
                  txt: '前往绑卡',
                  color: true,
                  callback: () => {
                    this.$router.push('/bindBankCard')
                  }
                }
              ]
            })
          } else {
            this.$router.push(link)
          }
        } else {
          this.$dialog.confirm({
            title: '提示',
            mes: '<div style="line-height: 0.5rem">请先实名认证再进行操作</div> ',
            opts: [
              {
                txt: '取消',
                color: false
              },
              {
                txt: '前往实名',
                color: true,
                callback: () => {
                  this.$router.push('/realName')
                }
              }
            ]
          })
        }
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
          this.balance = res.balance
          this.bindCardFlag = res.bindCardFlag
          this.name = res.name
          this.openAccountFlag = res.openAccountFlag
          this.realNameFlag = res.realNameFlag
          this.account = res.account
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
