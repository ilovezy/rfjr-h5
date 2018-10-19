<template>
  <header v-if='large'
          class="navbar navbar-large"
          :class="classes">
    <div class="navbar-item"
         @click='goBack'>
      <img class="back-icon"
           src='/static/images/common/arrow-back-2.png'
           alt=''>
    </div>
    <div class="navbar-center">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="navbar-item navbar-item-right">
      <slot name="right"></slot>
    </div>
  </header>

  <header v-else
          class="navbar"
          :class="classes">
    <div class="navbar-item"
         v-if='!noBack'
         @click='goBack'>
      <img class="back-icon"
           src='/static/images/common/arrow-back-1.png'
           alt=''>
    </div>
    <div class="navbar-center">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="navbar-item navbar-item-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/babel">
  export default {
    name: 'navbar',
    props: {
      title: String,
      fixed: Boolean,
      noBack: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      backLink: String,
    },
    computed: {
      classes() {
        return this.fixed ? 'navbar-fixed' : '';
      }
    },
    methods: {
      goBack() {
        if(this.backLink){
          this.$router.push(this.backLink)
        } else {
          this.$router.back()
        }
      },
    }
  }
</script>
<style lang="less">
  @import './navbar.less';
</style>
