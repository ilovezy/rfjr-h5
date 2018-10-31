<template>
  <layout class="forget-page user-form">
    <navbar :large='true'
            slot="navbar">
    </navbar>
    <div class='title'>
      忘记密码
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <input class='form-control'
               placeholder="用户名"
               v-model="name">
      </div>

      <div class='form-item'>
        <input type="tel"
               class='form-control'
               placeholder="手机号"
               v-model="mobile">
      </div>

      <div class='form-item'>
        <input class='form-control'
               placeholder="真实姓名"
               v-model="trueName">
      </div>

      <div class='form-item'>
        <input class='form-control'
               placeholder="身份证号码"
               v-model="identityNo">
      </div>
      <div class='form-item'>
        <input class='form-control'
               placeholder="交易账号"
               v-model="account">
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         @click="validForm">确定
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        mobile: '',
        trueName: '',
        identityNo: '',
        account: '',
      }
    },
    computed: {},
    methods: {
      goBack() {
        this.$router.back()
      },

      validForm() {
        if (!isValidUserName(this.name)) {
          this.$message.warning('用户名不正确，长度为2-18位');
          return
        }
        if (!isValidPhone(this.mobile)) {
          this.$message.warning('手机号码格式不正确');
          return
        }
        if (!this.trueName) {
          this.$message.warning('请输入真实名称');
          return
        }
        if (!isValidIdentityNum(this.identityNo)) {
          this.$message.warning('身份证号码格式不正确');
          return
        }
        if (!this.account) {
          this.$message.warning('请输入交易账号');
          return
        }
        this.doNext()
      },

      doNext() {
        const self = this
        this.axios.post('/security/api/member/forget/password', {
          name: this.name,
          mobile: this.mobile,
          trueName: this.trueName,
          identityNo: this.identityNo,
          account: this.account,
        }).then(res => {
          this.$dialog.toast({mes: '提交申请成功,等待受理'})
          USER.logout()
          setTimeout(() => {
            self.goBack()
          }, 2000)
        })
      }
    }
  }
</script>
<style lang="less">
  @import "forget.less";

  .forget-page {

    .form-control {
      width: 100%;

    }
  }
</style>
