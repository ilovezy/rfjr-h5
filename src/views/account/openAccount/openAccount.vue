<template>
  <layout class="realname-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">在线开户</span>
    </navbar>
    <div class='title'>
      在线开户
    </div>

    <div v-if='loading'>
      <p style="text-align:center; margin-top: 100px; ">
        <span style="color: #999;vertical-align:middle;display:inline-block;font-size: 18px;">加载中&nbsp;&nbsp;</span>
        <inline-loading></inline-loading>
      </p>
    </div>

    <div v-else>
      <div class='info-wrap'>
        <div class='info-item'>
          <span class='label'>真实姓名:</span> {{trueName}}
        </div>
        <div class='info-item'>
          <span class='label'>身份证号码:</span> {{identityNo}}
        </div>

        <div class='info-item' v-if='openAccountFlag'>
          <span class='label'>交易账户:</span> {{account}}
        </div>
      </div>

      <div class='form-body'>
        <div class='form-item'
             v-if='!openAccountFlag'>
          <input class='form-control'
                 style='width: 100%;'
                 maxlength="18"
                 placeholder="请输入邀请码"
                 v-model="inviteId">
        </div>
      </div>
      <div class='agreement-wrap'>
        <input type="checkbox"
               id='agg'
               class="checkbox"
               :disabled='openAccountFlag'
               v-model="agreement">
        <label for='agg'>我已阅读并同意</label>
        <router-link style='color: red;' to="/protocol/riskDisclosure">《风险揭示书》</router-link>
      </div>
      <div class='btn btn-primary btn-block'
           :class='!agreement && "btn-disabled"'
           v-if='!openAccountFlag'
           @click="validForm">确定
      </div>
    </div>

  </layout>
</template>
<script>
  import {InlineLoading} from 'vux'

  export default {
    components: {
      InlineLoading
    },
    data() {
      return {
        trueName: '',
        identityNo: '',
        account: '',
        inviteId: '',
        loading: true,
        realNameFlag: false,
        agreement: false
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
        if (USER.isLogin()) {
          this.getAccount()
        } else {
          USER.logout()
          this.$router.push('/login')
        }
      },

      getAccount() {
        this.axios.post('/api/member/center').then(res => {
          this.openAccountFlag =  res.openAccountFlag
          this.agreement = res.openAccountFlag
          this.trueName = res.trueName
          this.identityNo = res.identityNo
          this.loading = false
          this.account = res.account
        })
      },

      validForm() {
        if (!this.inviteId) {
          this.$dialog.toast({mes: '邀请码不正确'});
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('在线开户中，请稍后...')
        this.axios.post('/api/member/openAccount', {
          inviteId: this.inviteId,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '在线开户成功，实盘交易初始密码：888888'});
          setTimeout(() => {
            this.goBack()
          }, 1000)
        }
      }
    }
  }
</script>
<style lang="less">
  @import "openAccount";
</style>
