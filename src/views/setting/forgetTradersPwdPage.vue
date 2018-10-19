<template>
  <layout class='forget-traders-pwd-page'>
    <navbar slot="navbar">
      <span slot="center">交易密码</span>
    </navbar>

    <div class='simple-panel'>
      <div class='panel-title'>重置交易密码</div>
      <div class='form-body-simple'>
        <div class='form-item'>
          <input class='form-control'
                 placeholder="请输入身份证号"
                 v-model="identityNumber">
        </div>
      </div>
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              :class='btnDisabled && "btn-disabled"'
              @click='doConfirm'>下一步
      </button>
    </div>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        identityNumber: '',
      }
    },
    created() {

    },

    computed: {
      btnDisabled() {
        return !this.identityNumber
      }
    },

    methods: {
      validForm(){
        if(!isValidIdentityNum(this.identityNumber)){
          this.$dialog.toast({mes: '请输入正确的身份证号'});
          return false
        }
        return true
      },
      doConfirm() {
        if (this.validForm()){
          this.axios.post('/auth/memeber/check/resetTransactionPwd', {
            identityNumber: this.identityNumber
          }).then(res => {
            this.$router.push({
              path:'/forgetTradersPwdNext',
              query: {identityNumber: this.identityNumber}
            })
          })
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common/variables";

  .forget-traders-pwd-page {
    .btn-wrap {
      padding: 0.4rem;
      bottom: 0;
      width: 100%;
    }
  }
</style>
