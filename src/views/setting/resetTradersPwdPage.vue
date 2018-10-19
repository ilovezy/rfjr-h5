<template>
  <layout class='reset-traders-pwd-page'>
    <navbar slot="navbar">
      <span slot="center">交易密码</span>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>修改交易密码</div>
      <div class='form-body-simple'>
        <div class='form-item'>
          <input type="number"
                 class='form-control'
                 maxlength="6"
                 placeholder="请输入原密码"
                 v-model="originalPwd">
        </div>

        <div class='form-item'>
          <input :type="showPassword ? 'text' : 'password'"
                 class='form-control'
                 maxlength="6"
                 placeholder="请输入新密码"
                 v-model.trim="newPwd">
          <img class='pwd-icon'
               @click='togglePassword'
               :src="showPassword ? '/static/images/common/icon-eye.png' : '/static/images/common/icon-eye-close.png'"/>
        </div>
      </div>
    </div>

    <div class='notice'>
      密码长度6位，纯数字
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              @click='doConfirm'>确认修改
      </button>
    </div>

    <div class='forget-password'>
      <router-link to="forgetTradersPwd">忘记交易密码</router-link>
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
        newPwd: '', showPassword: false,

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
      togglePassword() {
        this.showPassword = !this.showPassword
      },

      validForm() {
        if (!isValidTransactionPwd(this.originalPwd)) {
          this.$dialog.toast({mes: '请输入正确的原密码，长度为6位'})
          return false
        }
        if (!isValidTransactionPwd(this.newPwd)) {
          this.$dialog.toast({mes: '请输入正确的新密码，长度为6位'})
          return false
        }
        if (this.newPwd == this.originalPwd) {
          this.$dialog.toast({mes: '新交易密码不能与老密码相同'})
          return false
        }
        return true
      },
      doConfirm() {
        if (this.validForm()) {
          this.axios.post('/auth/memeber/modify/transactionPwd', {
            originalPwd: this.originalPwd,
            newPwd: this.newPwd,
          }).then(res => {
            this.$dialog.toast({mes: '交易密码修改成功'})
            setTimeout(() => {
              this.$router.back()
            }, 2000)
          })
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common/variables";

  .reset-traders-pwd-page {
    .notice {
      padding: 0.4rem;
      color: @color-sub;
      .font24();
    }
    .btn-wrap {
      padding: 0.4rem;
      bottom: 0;
      width: 100%;
    }
    .forget-password {
      text-align: right;
      color: @color-primary;
      margin-bottom: 0.85rem;
      padding-right: 0.4rem;
    }
  }
</style>
