<template>
  <layout class='bid-auth-page'>
    <navbar slot="navbar">
      <span slot="center">投标授权</span>
    </navbar>

    <div class='top-card-wrap'>
      <div class='top-card'>
        <div class='left'>
          <div class='title'>投标授权</div>
          <div class='date'>授权日期: {{'2018-9-3'}}</div>
        </div>
        <div class='open-text'>已开通</div>
      </div>
    </div>

    <div class='simple-panel'>
      <simple-list-item title='授权结束日'
                        :disabled='true'
                        right-text-sub='2019.12.12'/>
      <simple-list-item title='单笔最大出借金额'
                        :disabled='true'
                        right-text-sub='1,000,000元'/>
      <simple-list-item title='累计出借金额上限'
                        :disabled='true'
                        right-text-sub='1,000,000元'/>
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-block btn-square btn-primary'
              @click='doConfirm'>取消授权
      </button>
    </div>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        loginName: '',
        password: '',
        showPassword: false,
      }
    },
    created() {

    },
    methods: {
      doConfirm() {
        const self = this
        this.$dialog.confirm({
          title: '温馨提示',
          mes: '确定取消授权？',
          opts() {
          }
        })
      },

      togglePassword() {
        this.showPassword = !this.showPassword
      },
    }
  }
</script>
<style lang="less"
       scoped>
  @import "../../../assets/styles/common/variables";

  .bid-auth-page {

    .top-card-wrap {
      padding: 0.2rem;
      padding-bottom: 0;
      background: @body-bg;
      .top-card {
        background: #fff;
        padding: 0.45rem 0.4rem 0.55rem;
        box-sizing: border-box;
        border-radius: 0.06rem;
        .flex-between();

        .left {
          .title {
            .font32();
            color: @color-main;
            font-weight: 500;
            margin-bottom: 0.2rem;
          }

          .date {
            .font28();
            color: @color-sub;
          }
        }

        .open-text {
          .font28();
          color: @color-sub;
        }
      }
    }

    .btn-wrap {
      padding: 0.4rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }

</style>
