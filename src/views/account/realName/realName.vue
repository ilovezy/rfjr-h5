<template>
  <layout class="realname-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">实名认证</span>
    </navbar>
    <div class='title'>
      实名认证
      <p style='font-size: 14px; color: #ff4426;margin-top: 5px;'>注释：请您务必填写真实身份信息，如果身份信息与出金银行账户名字不一致，可能会导致无法出金。</p>
    </div>

    <div v-if='loading'>
      <p style="text-align:center; margin-top: 100px; ">
        <span style="color: #999;vertical-align:middle;display:inline-block;font-size: 18px;">加载中&nbsp;&nbsp;</span>
        <inline-loading></inline-loading>
      </p>
    </div>

    <div v-else>
      <div class='info-wrap' v-if='realNameFlag'>
        <div class='info-item'>
          <span class='label'>真实姓名:</span> {{trueName}}
        </div>
        <div class='info-item'>
          <span class='label'>身份证号码:</span> {{identityNo}}
        </div>
      </div>

      <div v-else>
        <div class='form-body'>
          <div class='form-item'>
            <input class='form-control'
                   style='width: 100%;'
                   maxlength="18"
                   placeholder="真实姓名"
                   v-model="trueName">
          </div>

          <div class='form-item'>
            <input class='form-control'
                   style='width: 100%;'
                   placeholder="身份证号码"
                   v-model="identityNo">
          </div>
        </div>
        <div class='btn btn-primary btn-block'
             @click="validForm">确定
        </div>
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
        loading: true,
        realNameFlag: false
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
          this.realNameFlag = res.realNameFlag
          this.trueName = res.trueName
          this.identityNo = res.identityNo
          this.loading = false
        })
      },

      validForm() {
        if (!isValidUserName(this.trueName)) {
          this.$dialog.toast({mes: '真实姓名不正确，2-18位之间'});
          return
        }
        if (!isValidIdentityNum(this.identityNo)) {
          this.$dialog.toast({mes: '身份证号码格式不正确'})
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('实名认证中，请稍后...')
        this.axios.post('/api/member/realName', {
          trueName: this.trueName,
          identityNo: this.identityNo,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '实名认证成功'});
          setTimeout(() => {
            this.goBack()
          }, 1000)

        }
      }
    }
  }
</script>
<style lang="less">
  @import "realName";
</style>
