<template>
  <div class='bank-step'>
    <!--<header>距离财富还剩 <span class='step-count'>{{step}}</span> 步</header>-->
    <section>
      <div class='left'>
        <img src='/static/images/account/index/stepIcon/step3.png'
             class='step3'
             alt=''>

        <div class='desc'>
          <div class='title'>开通银行存管账户</div>
          <div class='text'>账户隔离，资金更安全</div>
        </div>
      </div>
      <div class='right'>
        <button class='btn btn-primary btn-arrow'
                @click='doNext'>
          <i class='icon-next-hzg'></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {

    },

    computed: {},

    created() {
    },

    methods: {
      doNext() {
        // TODO
        this.$router.push('/openBank')
      }
    }
  }
</script>

<style lang='less'
       scoped>
  @import "../../../assets/styles/common/variables";

  .bank-step {
    padding: 0.3rem 0.4rem;
    background: #fff;
    color: @color-main;

    .step-count {
      font-weight: 500;
    }
    header {
      font-size: 0.28rem;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1rem;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .title {
          color: @color-main;
          font-size: 0.32rem;
          font-weight: 500;
          margin-bottom: 0.15rem;
        }
        .desc {
          margin-left: 0.4rem;
          font-size: 0.28rem;
          color: #5F646B;
        }
      }

      .step3 {
        width: 0.90rem;
      }
    }

    .btn-arrow {
      width: 0.7rem;
      height: 0.7rem;
      line-height: 0.7rem;
      border-radius: 1rem;
      text-align: center;
      padding: 0;
      font-size: 0.25rem;
    }
  }
</style>
