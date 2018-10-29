<template>
  <section class="flexview">
    <div class="appdown" v-if="appdown" style="z-index: 2000">
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.cflc.hp">点击下载长富理财存管APP，玩转积分乐趣</a>
      <i class="icon-error-outline" @click="closeAppdown"></i>
    </div>
    <slot name="navbar" v-if="showNavbar">
      <navbar :title="title" v-if="!!title"/>
    </slot>
    <slot name="top">
    </slot>
    <section class="scrollview" ref="scrollView">
      <slot></slot>
    </section>
    <slot name="bottom"></slot>
  </section>
</template>
<script type="text/babel">
  export default {
    name: 'layout',
    data() {
      return {
        // appdown: true,
        appdown: false,
        isLogin: Boolean,
        isWeixinPlatform: false || isWeixinPlatform() // 暂时不管微信
      }
    },
    props: {
      link: String,
      title: String,
      showNavbar: {
        type: Boolean,
        default: true
      },
      showTabbar: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.isAppdown()
    },
    methods: {
      isAppdown() {
        if (sessionStorage.getItem('appdown') === 'false') {
          this.appdown = false
        } else if( this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          this.appdown = false
        }
      },
      closeAppdown() {
        this.appdown = false
        sessionStorage.setItem("appdown", "false")
      }
    }
  }
</script>
<style lang="less">
  @import "./layout.less";
</style>
