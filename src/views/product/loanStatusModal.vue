<template>
  <div class="mask-black-dialog"
       @click.self='close'
       v-if='show'>
    <div class="modal">
      <div class='modal-container'
           v-if='status == "loading"'>
        <div class='modal-body'>
          <div class='spinner-container'>
            <spinner type='android'
                     size='60px'
                     class='spinner'/>
          </div>
          <div class='text-notice'>
            处理中
          </div>
        </div>
      </div>

      <div class='modal-container'
           v-if='status == "during"'>
        <div class="modal-header">
          出借处理中
        </div>
        <div class='modal-body'>
          <div class='img-status-wrap'>
            <img src='/static/images/proudct/loanStatus/during.png'
                 class='img-status'
                 alt=''>
          </div>
        </div>
        <div class='modal-footer'>
          <div class='modal-btn text-sub'>查看记录</div>
          <div class='modal-btn text-primary'>继续出借</div>
        </div>
      </div>

      <div class='modal-container'
           v-if='status == "success"'>
        <div class="modal-header">
          出借成功
        </div>
        <div class='modal-body'>
          <div class='img-status-wrap'>
            <img src='/static/images/proudct/loanStatus/success.png'
                 class='img-status'
                 alt=''>
          </div>
        </div>
        <div class='modal-footer'>
          <div class='modal-btn text-sub'>查看记录</div>
          <div class='modal-btn text-primary'>继续出借</div>
        </div>
      </div>

      <div class='modal-container'
           v-if='status == "fail"'>
        <div class="modal-header">
          出借失败
        </div>
        <div class='modal-body'>
          <div class='img-status-wrap'>
            <img src='/static/images/proudct/loanStatus/fail.png'
                 class='img-status'
                 alt=''>
          </div>

          <div class='text-sub'>
            标的剩余金额不足
          </div>
        </div>
        <div class='modal-footer'>
          <div class='modal-btn text-sub'>查看记录</div>
          <div class='modal-btn text-primary'>继续出借</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'loan-status-modal',
    data() {
      return {}
    },
    props: {
      close: Function,
      copy: Function,
      status: String,
      show: Boolean
    },
    methods: {}
  }
</script>

<style lang='less'
       scoped>
  @import "../../assets/styles/common/variables";
  @import "./loanStatusModal";

  .mask-black-dialog {
    .modal {
      .modal-container {
        padding: 0;
        overflow: hidden;
        .modal-header {
          padding-top: 0.4rem;
        }
        .modal-body {
          padding: 0.4rem;
          padding-top: 0 !important;
          text-align: center;

          .img-status-wrap {
            padding-top: 0.3rem;
            padding-bottom: 0.2rem;
            .img-status {
              width: 1.2rem;
            }
          }

          .spinner-container {
            padding-top: 0.6rem;
            padding-bottom: 0.4rem;

            .spinner {
              stroke: #6BA6FF;
            }
          }
          .text-notice {
            color: @color-main;
            .font32();
          }

          .text-sub {
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
            .font32();
          }
        }

        .modal-footer {
          .flex-between();
          .grey-border-top();
          .modal-btn {
            padding: 0.3rem;
            .font32();
            text-align: center;
            flex: 1;
            &:active {
              background: @link-active-bg;
            }
          }
        }
      }
    }

  }

</style>
