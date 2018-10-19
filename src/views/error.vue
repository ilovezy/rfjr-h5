<template>
  <layout class='error-page'>
    <div class="notavailable ">
      <img src="../../static/images/notavailable/not_error.png"
           alt="404 error~"
           class="not_icon">
      <ibutton type="hollow"
               @click.native="goHome()"
               class="btn-error">返回首页
      </ibutton>
    </div>
    <div class="warm-prompt">
      <p class="text-center">客服热线：<a href="tel:4000998799"> 400-099-8799</a></p>
    </div>
  </layout>
</template>
<script>
  export default {
    methods: {
      goHome() {
        if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          window.location.href = 'cflc://jsbridge?type=event&name=close'
        } else {
          this.$router.push('/')
        }
      }
    }
  }
</script>
<style lang="less"
       scoped>
  .error-page {
    .notavailable {
      height: 5rem;
      .btn-error {
        margin-top: .4rem;
      }
    }
  }
</style>
