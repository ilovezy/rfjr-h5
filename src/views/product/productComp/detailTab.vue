<template>
  <div class='detail-tab'>
    <div class='btn-close'
         @click='close'>
      <span class='icon-searchclose'></span>
    </div>
    <tab :line-width=2
         active-color='#E0634E'
         custom-bar-width="0.55rem"
         class='tab-sm tab-justify'
         v-model="index">
      <tab-item>持有中</tab-item>
      <tab-item>已完成</tab-item>
      <tab-item>已完成</tab-item>
    </tab>

    <swiper v-model="index"
            class='tab-panel-sm'
            :show-dots="false">
      <swiper-item :key="0">
        <div class='swiper-content'>
          <div class='simple-panel'>
            <div class='panel-title'>标的介绍</div>
            <div class='panel-body'>
              本标的是个人小额借贷业务。借款人为浙江杭州户籍人士，在一互联网公司就职目前收入稳定。因个人消费需要，缺少部分资金，现借款人民币10万元。经查询该借款人的银行征信流水，个人消费记录，工作证明，收入证明等材料，并且有第三方公司提供担保经风控中心严格审查，同意在平台进行借贷撮合。
            </div>
          </div>

          <div class='simple-panel'>
            <div class='panel-title'>标的介绍</div>
            <div class='panel-body'>
              本标的是个人小额借贷业务。借款人为浙江杭州户籍人士，在一互联网公司就职目前收入稳定。因个人消费需要，缺少部分资金，现借款人民币10万元。经查询该借款人的银行征信流水，个人消费记录，工作证明，收入证明等材料，并且有第三方公司提供担保经风控中心严格审查，同意在平台进行借贷撮合。
            </div>
          </div>
        </div>
      </swiper-item>

      <swiper-item :key="1">
        <div class='swiper-content'>
          <div class='img-list-wrap'>
            <div class='img-list-item'>
              <span class='img-list-item-title'>
                身份证正面
              </span>
              <img src='/static/images/home/slider/slider1.png'
                   class='item-img'
                   alt=''>
            </div>
            <div class='img-list-item'>
              <span class='img-list-item-title'>
                身份证正面
              </span>
              <img src='/static/images/home/slider/slider1.png'
                   class='item-img'
                   alt=''>
            </div>

          </div>
        </div>
      </swiper-item>

      <swiper-item :key="2">
        <div class='swiper-content'>
          <div class='record-list-wrap'>
            <div class='record-list-item'>
              <div class='left'>
                <div class='top'>
                  150****3225
                </div>
                <div class='bottom'>
                  2017/07/12 13:38:27
                </div>
              </div>
              <div class='right'>1,000元</div>
            </div>

            <div class='record-list-item'>
              <div class='left'>
                <div class='top'>
                  150****3225
                </div>
                <div class='bottom'>
                  2017/07/12 13:38:27
                </div>
              </div>
              <div class='right'>1,000元</div>
            </div>

            <div class='record-list-item'>
              <div class='left'>
                <div class='top'>
                  150****3225
                </div>
                <div class='bottom'>
                  2017/07/12 13:38:27
                </div>
              </div>
              <div class='right'>1,000元</div>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'detailTab',
    data() {
      return {
        index: 0
      }
    },
    props: {
      close: Function,
      show: Boolean
    },
    methods: {
      sayFuck() {
        alert('TODO')
      },
      goOpen() {
        alert('TODO')
      }
    }
  }
</script>
<style lang="less">
  @import "../../../assets/styles/common/variables";

  .detail-tab {
    height: 100%;
    background: #fff;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: slideUp 0.5s ease forwards;

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    .vux-slider > .vux-swiper > .vux-swiper-item {
      padding-bottom: 0.88rem;
    }
    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000;
      width: 0.88rem;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      /*background: orange;*/
      color: @color-sub-main;
    }

    .tab-sm .vux-tab-container {
      padding: 0 0.5rem !important;
    }
    .tab-sm {
      top: 0;

      .vue-tab-container {
        padding: 0 0.5rem !important;
      }
    }
    .tab-panel-sm {
      background: #fff;
    }

    .swiper-content {
      border-top: 0.2rem solid #FFF5F7;
      box-sizing: border-box;
      padding-bottom: 0.5rem;
      .simple-panel {
        margin-top: 0;

        .panel-body {
          padding: 0 0.4rem;
          color:rgba(50,54,60,1);
          line-height: 0.44rem;
        }
      }

      .img-list-wrap {
        padding: 0.4rem;
        .img-list-item {
          margin-bottom: 0.4rem;
          border: 0.2rem solid #FFF5F7;
          box-sizing: border-box;
          position: relative;

          .img-list-item-title {
            position: absolute;
            background: @color-primary;
            top: 0.1rem;
            left: -0.25rem;
            padding: 0.1rem 0.35rem;
            color: #fff;
            .font24();
            border-radius: 0 100rem 100rem 0;
          }
        }
      }

      .record-list-wrap {
        .record-list-item {
          padding: 0.3rem 0.4rem;
          border-bottom: 0.02rem solid #FFF5F7;
          .flex-between();
          .font32();
          color: @color-main;
          .left {
            .top {
              margin-bottom: 0.3rem;
            }
            .bottom {
              .font28();
              color: @color-sub;
            }
          }

          .right {
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
