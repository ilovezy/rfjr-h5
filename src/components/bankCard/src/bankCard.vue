<template>
  <div class='bank-card-wrap'>
    <div class='bank-card'>
      <div class='top'>
        <span class='bank-logo'
              v-if='logo'>
          <img :src="logo"
               alt=''>
        </span>
        <div class='is-open'
             v-if='isOpen'>
          <div class='right right-flex'>
            <div>
           <span class='bank-name'
                 v-if='name'>{{name}}</span>
              <div class='type'>开通日期: {{'2018-9-3'}}</div>
            </div>
            <div class='open-text'>已开通</div>
          </div>
        </div>

        <div class='right'
             v-else>
          <span class='bank-name'
                v-if='name'>{{name}}</span>
          <div class='type'>储蓄卡</div>

          <div class='bank-detail'>
            <div class='item'>尾号：{{1766}}</div>
            <div class='item'>
              <div>支行：未填写</div>
              <div class='recharg-btn'
                   @click='openEnter'>补充
              </div>
            </div>
          </div>
        </div>
      </div>

      <img class='bank-bg'
           :src="logo"
           v-if='logo && !isOpen'/>
    </div>
  </div>
</template>
<script type="text/babel"
        scoped>
  export default {
    name: 'bankCard',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      },
      logo: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      bankNum: {
        default: ''
      },
      openEnter: {
        type: Function,
        default: function () {

        }
      }
    },
    computed: {}
  }
</script>
<style lang="less">
  @import "../../../assets/styles/common/variables";

  .bank-card-wrap {
    background: inherit;
    padding: 0.2rem;
    padding-bottom: 0;
    box-sizing: border-box;

    .bank-card {
      background: #fff;
      border-radius: 0.06rem;
      padding: 0.4rem;
      position: relative;
      overflow: hidden;

      .top {
        .flex();
        align-items: normal;
        .bank-logo {
          width: 0.72rem;
          height: 0.72rem;
          line-height: 0.72rem;
          margin-right: 0.3rem;
          display: flex;
          align-items: center;
        }

        .is-open {
          flex: 1;
          .right {

            &.right-flex {
              .flex-between();

              .open-text {
                color: @color-sub;
              }
            }
          }

        }
        .right {
          flex: 1;

          .bank-name {
            color: @color-main;
            .font32();
          }
          .type {
            margin-top: 0.15rem;
            color: @color-sub;
            .font28();
          }

          .bank-detail {
            .item {
              margin-top: 0.3rem;
              .font28();
              color: @color-main;
              .flex-between();

              .recharg-btn {
                width: 1rem;
                height: 0.4rem;
                line-height: 0.4rem;
                color: @color-primary;
                border: 1px solid @color-primary;
                text-align: center;
              }
            }
          }
        }

      }

      .bank-bg {
        opacity: 0.05;
        width: 0.72rem * 2.5;
        display: inline-block;
        height: auto;
        position: absolute;
        right: -0.3rem;
        top: -0.3rem;
      }
    }
  }
</style>
