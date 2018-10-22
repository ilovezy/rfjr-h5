<template>
  <layout class="bindBankCard-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">绑定银行卡</span>
    </navbar>

    <div class='title'>
      绑定银行卡
    </div>
    <div v-if='loading'>
      <p style="text-align:center; margin-top: 100px; ">
        <span style="color: #999;vertical-align:middle;display:inline-block;font-size: 18px;">加载中&nbsp;&nbsp;</span>
        <inline-loading></inline-loading>
      </p>
    </div>

    <div v-else>
      <div class='info-wrap'
           v-if='bindCardFlag'>

        <div class='info-item'>
          <span class='label'>开户银行卡号:</span> {{cardNo}}
        </div>
      </div>

      <div v-else>
        <div class='form-body'
             style='margin-top: 1rem;'>
          <div class='input-spe-wrap'>
            <div class='label'
                 style='margin-bottom: 0.5rem;'>户名: {{trueName}}
            </div>
          </div>

          <div class='input-spe-wrap'>
            <div class='label'
                 style='margin-bottom: 0.5rem;'>开户银行卡号
            </div>
            <div class='form-item'>
              <input type="number"
                     class='form-control'
                     placeholder="请输入开户银行卡号"
                     v-model="cardNo">
            </div>
          </div>
        </div>
        <div class='btn btn-primary btn-block'
             @click="validForm">确定
        </div>
      </div>
    </div>
  </layout>
</template>
<script>  import {InlineLoading} from 'vux'

export default {
  components: {
    InlineLoading
  },
  data() {
    return {
      cardNo: '',
      loading: true,
      bindCardFlag: false,
      trueName: ''
    }
  },
  computed: {},
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
        this.bindCardFlag = res.bindCardFlag
        this.cardNo = res.cardNo
        this.trueName = res.trueName
        this.loading = false
      })
    },
    validForm() {
      if (!isValidCardNumber(this.cardNo)) {
        this.$dialog.toast({mes: '请输入正确的开户银行卡号'});
        return
      }
      this.doRegister()
    },

    //提交注册
    doRegister() {
      const self = this
      this.$dialog.loading.open('绑卡中，请稍后...')
      this.axios.post('/api/member/bindCard', {
        cardNo: this.cardNo,
      }).then(res => {
        self.registerSuccess(res)
      })
    },

    registerSuccess(res) {
      this.$dialog.toast({mes: '绑卡成功！'});
      setTimeout(() => {this.goBack()}, 1000)

    }
  }
}
</script>
<style lang="less">
  @import "bindBankCard";
</style>
