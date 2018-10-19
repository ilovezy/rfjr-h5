<template>
  <footer class="tabbar" :class="classes" :style="{color: activeColor}">
    <slot></slot>
  </footer>
</template>
<script type="text/babel">
  import {isColor} from '../../utils/assist';
  export default {
    name: 'tabbar',
    props: {
      fixed: Boolean,
      exact: {
        type: Boolean,
        default: true
      },
      activeClass: {
        type: String,
        default: 'router-link-active'
      },
      activeColor: {
        validator(value) {
          if (!value) return true;
          return isColor(value);
        },
        default: '#D82D2D'
      },
      bgcolor: {
        validator(value) {
          if (!value) return true;
          return isColor(value);
        },
        default: '#FFF'
      },
      color: {
        validator(value) {
          if (!value) return true;
          return isColor(value);
        },
        default: '#666'
      },
      fontsize: {
        validator(value) {
          return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
        },
        default: '.24rem'
      }
    },
    computed: {
      classes() {
        return this.fixed ? 'tabbar-fixed' : '';
      },
      styles() {
        return {
          color: this.activeColor,
          backgroundColor: this.bgcolor,
          fontSize: this.fontsize
        }
      }
    }
  }
</script>
<style lang="less">
  @import '../../../assets/styles/components/tabbar.less';
</style>
