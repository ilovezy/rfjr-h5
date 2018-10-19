<template>
  <layout class='about-us-page'>
    <navbar title="关于我们 TODO"
            slot="navbar"></navbar>
    <div class='about-us-container'>

      <div class='about-panel'>
        <img src='./img/man.png'
             class='man'
             alt=''>
        <header>
          <img src='./img/icon1.png'
               class='icon'
               alt=''>
          <span class='text'>了解日发金融</span>
        </header>
        <section>
          日发金融成立于2015年，并于2015年5月6日正式上线运营，是一家专注于帮扶小微企业的网络借贷信息中介服务平台。目前，日发金融的运营主体为成都融证通互联网信息服务有限公司（简称“成都融证通”），致力于向借款人和出借人提供信息搜集、信息公布、信息交互、借贷撮合等优质服务。成都融证通互联网信息服务有限公司以先进的信息技术水平、严格的审核程序和完善的风险管控系统为基础，为有投融资需求的个人、机构或企业搭建一个稳健合规、高效便捷的信息中介服务平台。
        </section>
      </div>

      <div class='about-panel'>
        <header>
          <img src='./img/icon2.png'
               class='icon'
               alt=''>
          <span class='text'>为什么选择我们</span>
        </header>
        <section>
          日发金融成立于2015年，并于2015年5月6日正式上线运营，是一家专注于帮扶小微企业的网络借贷信息中介服务平台。目前，日发金融的运营主体为成都融证通互联网信息服务有限公司（简称“成都融证通”），致力于向借款人和出借人提供信息搜集、信息公布、信息交互、借贷撮合等优质服务。成都融证通互联网信息服务有限公司以先进的信息技术水平、严格的审核程序和完善的风险管控系统为基础，为有投融资需求的个人、机构或企业搭建一个稳健合规、高效便捷的信息中介服务平台。
        </section>
      </div>

      <div class='about-panel'>
        <header>
          <img src='./img/icon3.png'
               class='icon'
               alt=''>
          <span class='text'>我们的成长</span>
        </header>
        <section>
          日发金融成立于2015年，并于2015年5月6日正式上线运营，是一家专注于帮扶小微企业的网络借贷信息中介服务平台。目前，日发金融的运营主体为成都融证通互联网信息服务有限公司（简称“成都融证通”），致力于向借款人和出借人提供信息搜集、信息公布、信息交互、借贷撮合等优质服务。成都融证通互联网信息服务有限公司以先进的信息技术水平、严格的审核程序和完善的风险管控系统为基础，为有投融资需求的个人、机构或企业搭建一个稳健合规、高效便捷的信息中介服务平台。
        </section>
      </div>

      <div class='about-panel'>
        <header>
          <img src='./img/icon4.png'
               class='icon'
               alt=''>
          <span class='text'>联系我们</span>
        </header>
        <section>
          日发金融成立于2015年，并于2015年5月6日正式上线运营，是一家专注于帮扶小微企业的网络借贷信息中介服务平台。目前，日发金融的运营主体为成都融证通互联网信息服务有限公司（简称“成都融证通”），致力于向借款人和出借人提供信息搜集、信息公布、信息交互、借贷撮合等优质服务。成都融证通互联网信息服务有限公司以先进的信息技术水平、严格的审核程序和完善的风险管控系统为基础，为有投融资需求的个人、机构或企业搭建一个稳健合规、高效便捷的信息中介服务平台。
        </section>
      </div>

    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {
      this.isOsAccess()
    },
    methods: {
      isOsAccess() {
        if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          this.isNavbar = false
        }
      },
    }
  }
</script>
<style lang="less" scoped>
  @import "index.less";
</style>
