<template>
  <layout class="changePassword-page user-form">
    <navbar :large='true'
            slot="navbar">
      <span slot="center">修改登录密码</span>
    </navbar>
    <div class='title'>
      修改登录密码
    </div>

    <div class='form-body'>
      <div class='form-item'>
        <input class='form-control'
               style='width: 100%;'
               maxlength="18"
               placeholder="老密码"
               v-model="oldPassword">
      </div>

      <div class='form-item'>
        <input class='form-control'
               style='width: 100%;'
               placeholder="新密码"
               v-model="newPassword">
      </div>
    </div>
    <div class='btn btn-primary btn-block'
         style='margin-top: 1.5rem;'
         @click="validForm">确定
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
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
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (!isValidPassword(this.oldPassword)) {
          this.$dialog.toast({mes: '老密码格式不正确，长度为6-16位'});
          return
        }
        if (!isValidPassword(this.newPassword)) {
          this.$dialog.toast({mes: '新密码格式不正确，长度为6-16位'});
          return
        }
        if (this.oldPassword == this.newPassword) {
          this.$dialog.toast({mes: '新,老密码不能一样'});
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('登录密码修改中，请稍后...')
        this.axios.post('/api/member/password/change', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '修改成功'});
          setTimeout(() => {this.goBack()}, 1000)

        }
      }
    }
  }
</script>
<style lang="less">
  @import "changePassword";
</style>
