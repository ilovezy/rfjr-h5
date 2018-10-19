<template>
  <layout class='reset-login-pwd-page'>
    <navbar slot="navbar">
      <span slot="center">登录密码</span>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>
        修改登录密码
      </div>

      <div class='form-body-simple'>
        <div class='form-item'>
          <input type="text"
                 class='form-control'
                 maxlength="16"
                 placeholder="请输入原密码"
                 v-model="originalPwd">
        </div>

        <div class='form-item'>
          <input :type="showPassword ? 'text' : 'password'"
                 class='form-control'
                 maxlength="16"
                 placeholder="请输入新密码"
                 v-model.trim="newPwd">
          <img class='pwd-icon'
               @click='togglePassword'
               :src="showPassword ? '/static/images/common/icon-eye.png' : '/static/images/common/icon-eye-close.png'"/>
        </div>
      </div>
    </div>

    <div class='notice'>
      密码长度6-16位，数字与字母组合
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              :class='btnDisabled && "btn-disabled"'
              @click='doConfirm'>确认修改
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
        originalPwd: '',
        newPwd: '',
        showPassword: false,
      }
    },
    computed: {
      btnDisabled() {
        return !this.originalPwd || !this.newPwd
      }
    },
    methods: {
      validForm() {
        if (!isValidPassword(this.originalPwd)) {
          this.$dialog.toast({mes: '请输入正确的原密码，为6-16位字母与数字的组合'})
          return false
        }
        if (!isValidPassword(this.newPwd)) {
          this.$dialog.toast({mes: '请输入正确的新密码，为6-16位字母与数字的组合'})
          return false
        }
        if (this.originalPwd == this.newPwd){
          this.$dialog.toast({mes: '新密码不能与原密码相同'})
          return false
        }
        return true
      },

      doConfirm() {
        if (this.validForm()) {
          this.axios.post('/auth/memeber/modify/loginPwd', {
            originalPwd: this.originalPwd,
            newPwd: this.newPwd
          }).then(res => {
            this.$dialog.toast({mes: '密码修改成功，请重新登录'})
            USER.logout()
            setTimeout(() =>{
              this.$router.push('/login')
            }, 2000)
          })
        }
      },

      togglePassword() {
        this.showPassword = !this.showPassword
      },

    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common/variables";

  .reset-login-pwd-page {
    .notice {
      padding: 0.4rem;
      color: @color-sub;
      .font24();
    }
    .btn-wrap {
      padding: 0.4rem;
      padding-top: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>
