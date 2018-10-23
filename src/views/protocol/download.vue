<template>
  <layout class="download-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">我要下载</span>
    </navbar>
    <div class='download-container'>
      <div class='item-ios'>
        <div class='left-info'>
          <span class='iconfont icon-ios'></span>
          <div>苹果</div>
        </div>
        <span class='qrcode-wrap'>
          <img src='./downloadImg/ios.png'
               alt=''>
        </span>
      </div>
      <div class='item-android'>
        <div class='item-container'>
          <div class='left-info'>
            <span class='iconfont icon-anzhuo' style='color: green'></span>
            <div>安卓</div>
          </div>
          <span class='qrcode-wrap'>
            <img src='./downloadImg/android.jpg'
                 alt=''>
          </span>
        </div>
        <p>安卓版：使用手机浏览器扫描二维码（不支持微信扫描）</p>
      </div>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        amount: '',
        payType: 'ali'
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
      selectAli() {
        this.payType = 'ali'
      }, selectBank() {
        this.payType = 'bank'
      },
      goBack() {
        this.$router.back()
      },

      getToken() {
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (this.amount) {
          this.doConfirm()
        } else {
          this.$dialog.toast({mes: '请输入入金金额'});
        }
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('入金中，请稍后...')
        this.axios.post('/api/member/recharge', {
          amount: this.amount,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '入金成功'});
          setTimeout(() => {
            this.$router.replace('/account')
          }, 1000)
        }
      }
    }
  }
</script>
<style lang="less">
  @import "download";
</style>
