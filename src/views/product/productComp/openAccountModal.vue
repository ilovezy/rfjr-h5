<template>
  <div class="mask-black-dialog open-account-modal">
    <div class="modal">
      <div class='modal-container'>
        <div class='modal-body'>
          <div class='title'>
            为保证资金安全 <br> 请开通银行存管账户
          </div>

          <img src='/static/images/user/registerSuccess/regsiter_img_cunguan@3x.png'
               class='img-center'
               alt=''>
          <button class='btn btn-primary btn-square btn-block'
                  @click='goOpen'>
            前往开通
          </button>

          <div class='tip'
               @click='close'>
            暂不开通
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'openAccountModal',
    data() {
      return {}
    },
    props: {
      close: Function,
      show: Boolean
    },
    methods: {
      goOpen() {
        // this.$router.push('/')
        alert('TODO')
      }
    }
  }
</script>
<style lang="less"
       scoped>
  @import "../../../assets/styles/common/variables";

  .open-account-modal {
    line-height: 0.36rem;
    font-size: 0.24rem;
    color: @color-sub;

    .modal-body {
      text-align: center;

      .title {
        .font32();
        line-height: 0.44rem;
        color: @color-main;
        font-weight: 500;
      }

      .img-center {
        display: inline-block;
        margin-top: 0.55rem;
        margin-bottom: 0.65rem;
      }

      .tip {
        margin-top: 0.4rem;
      }
    }
  }

</style>
