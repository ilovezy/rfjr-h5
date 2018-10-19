<template>
  <div class='redpackage-card'
       :class='isActive ? "" : "card-disabled"'>
    <img v-if='!isActive'
         src='/static/images/account/myRedPackage/over.png'
         class='img-over'
         alt=''>

    <div class='top'>
      <div class='left'>
        <div v-if='item.type == "money"'>
          <span class='unit'>￥</span>{{item.money}}
        </div>
        <div v-else>
          {{item.rate}}<span class='unit'>%</span>
        </div>
      </div>

      <div class='right'>
        <div class='has-mb'>剩余{{item.leftDay}}天过期</div>
        <div class='has-mb'>出借期限 > {{item.borrowLimit}}天可用</div>
        <div>出借金额 >{{item.borrowMoney | formatThousands}}元可用</div>
      </div>
    </div>

    <div class='bottom'>
      <span>{{item.name}}</span>
      <span class='text-danger'
            v-if='isActive'>
        前往使用 >
      </span>
    </div>

    <img src='/static/images/account/myRedPackage/redpackage-bottom.png'
         class='bottom-img'
         alt=''>
  </div>

</template>
<script>
  export default {
    components: {},
    props: {
      item: {
        type: Object,
        default: {}
      },
      isActive: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    created() {
    },

    methods: {}
  }
</script>
<style lang="less"
       scoped>
  @import "../../../assets/styles/common/variables";

  .redpackage-card {
    box-sizing: border-box;
    border-top: 0.04rem solid @color-primary;
    margin-bottom: 0.4rem;
    padding: 0 0.4rem;
    background: #fff;
    position: relative;

    .img-over {
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      display: inline-block;
      top: 0.5rem;
      right: 0.6rem;
    }

    &.card-disabled {
      border-top: 0.04rem solid @btn-disabled-bg !important;
      color: @btn-disabled-bg !important;

      .top {
        .left {
          color: @btn-disabled-bg !important;
        }
      }
    }

    .top {
      padding: 0.4rem 0;
      .flex-between();
      .left {
        font-size: 0.8rem;
        line-height: 0.8rem;
        width: 2.1rem;
        padding-left: 0.3rem;
        color: @color-primary;
        border-right: 1px dashed @body-bg;
        font-weight: bold;
        .unit {
          font-weight: 500;
          font-size: 0.4rem;
          line-height: 0.4rem;
          display: inline-block;
        }
      }

      .right {
        flex: 1;
        padding-left: 0.8rem;
        color: @color-sub;
        .font24();
        .has-mb {
          margin-bottom: 0.2rem;
        }
      }
    }

    .bottom {
      border-top: 1px dashed @body-bg;
      .flex-between();
      padding: 0.16rem 0;
      color: @color-sub;
    }

    .bottom-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(80%);
    }
  }
</style>
