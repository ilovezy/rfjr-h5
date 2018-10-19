<template>
  <router-link :to='link'
               class='list-item'
               :class='disabled && "no-hover"'
               v-if='link'>
    <div class='left'>
      <img :src='iconUrl'
           v-if='iconUrl'
           class='icon'
           alt=''>
      <span class='title'>{{title}}</span>
    </div>
    <span class='right-text'
          v-if='rightText'>
      {{rightText}}
    </span>
    <span v-else>
      <span v-if='arrowText'>
        <span class='arrow-text'>{{arrowText}}</span>
        <img class='arrow-right'
             src='/static/images/common/arrow-right.png'
             alt=''>
      </span>

      <img v-else
           class='arrow-right'
           src='/static/images/common/arrow-right.png'
           alt=''>
    </span>

  </router-link>

  <div class='list-item'
       :class='disabled && "no-hover"'
       v-else>
    <div class='left'>
      <img :src='iconUrl'
           v-if='iconUrl'
           class='icon'
           alt=''>
      <span class='title'>{{title}}</span>
    </div>
    <span class='right-text'
          v-if='rightText'>
      {{rightText}}
    </span>
    <span class='right-text-sub'
          v-else-if='rightTextSub'>
      {{rightTextSub}}
    </span>
    <span class='right-text-primary'
          v-else-if='rightTextPrimary'>
      {{rightTextPrimary}}
    </span>
    <span v-else
          class='arrow-right'>
      <img src='/static/images/common/arrow-right.png'
           alt=''>
    </span>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'SimpleListItem',
    props: {
      icon: '',
      title: '',
      rightText: '',
      rightTextSub: '',
      rightTextPrimary: '',
      link: '',
      disabled: false,
      arrowText: ''
    },

    computed: {
      iconUrl() {
        // TODO 这里的icon实际为了服务 account/index写死了
        return this.icon ? '/static/images/account/index/listIcon/' + this.icon : ''
      }
    },

    created() {
    },

    methods: {}
  }
</script>
<style lang="less">
  @import "../../../assets/styles/common/variables";

  .list-item {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.4rem;
    margin-bottom: 0.02rem;
    &:active {
      background: @link-active-bg;
    }

    &.no-hover {
      &:active {
        background: #fff;
      }
    }

    .left {
      display: flex;
      align-items: center;
      color: @color-main;
      font-size: 0.28rem;
      .icon {
        display: inline-block;
        width: 0.34rem;
        margin-right: 0.26rem;
      }
    }

    .right-text {
      color: @color-main;
      font-size: 0.28rem;
    }
    .right-text-sub {
      color: @color-sub;
      font-size: 0.28rem;
    }
    .right-text-primary {
      color: @color-primary;
      font-size: 0.28rem;
    }

    .arrow-text {
      color: @color-sub;
      display: inline-block;
      margin-right: 0.1rem;
    }
    .arrow-right {
      width: 0.12rem;
    }
  }
</style>
