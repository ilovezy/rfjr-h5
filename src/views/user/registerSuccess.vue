<template>
  <layout class="register-success-page user-form">
    <div class='title'>
      注册成功
    </div>

    <div class='welcome'>
      恭喜获得 <span class='text-danger'>888现金礼包</span>
    </div>

    <img src='/static/images/user/registerSuccess/Bitmap@3x.png'
         class='img-success1'
         alt=''>

    <div class='text'>
      为保证资金安全 请开通银行存管账户
    </div>

    <img src='/static/images/user/registerSuccess/regsiter_img_cunguan@3x.png'
         class='img-success2'
         alt=''>

    <div class='btn btn-primary btn-block'>
      <router-link replace to="./registerSuccess">
        前往开通
      </router-link>
    </div>
    <div class="cell-protocol">
      <router-link replace to="/">
        暂不开通，去首页看看
      </router-link>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        totalLenderNum: ''
      }
    },
    created() {
      this.getTotalNum()
    },
    methods: {
      goBack() {
        this.$router.back()
      },

      getTotalNum(){
        let query = this.$route.query || {}
        this.totalLenderNum = query.totalLenderNum
      }
    }
  }
</script>
<style lang="less">
  @import "registerSuccess";
</style>
