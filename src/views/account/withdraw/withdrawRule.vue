<template>
  <div class='withdraw-rule'>
    <div class='header'>
      朗润金融提现时间及费用规则：
    </div>

    <div class='title'>
      1.提现时间：
    </div>

    <table class='withdraw-rule-table content'>
      <tr>
        <td class='left'>9:00-16:00</td>
        <td class='right'>两小时左右到账；</td>
      </tr>
      <tr>
        <td class='left'>16:00-22:30</td>
        <td class='right'>
          <p class='p-top'>小于等于5万元的两小时左右到账；</p>
          <p>大于5万元的顺延下一个工作日。</p>
        </td>
      </tr>
      <tr>
        <td class='left'>22:30-9:00</td>
        <td class='right'>不处理提现业务。</td>
      </tr>
    </table>

    <div class='title'>
      2.提现费用规则：
    </div>

    <div class='content'>
      提现手续费：手续费：0.05%，目前为活动期间，暂不收取。
    </div>
  </div>
</template>
<script>
  export default {
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

  .withdraw-rule {
    padding: 0.4rem;
    color: @color-sub;
    .font28();

    .header {
      margin-bottom: 0.5rem;
    }

    .title {
      margin-bottom: 0.3rem;
    }

    .content {
      .font24();
      line-height: 0.34rem;
    }

    .withdraw-rule-table {
      margin-bottom: 0.5rem;
      background: #EBEFF5;
      border-collapse: collapse;
      width: 100%;

      td {
        border: 1px solid @body-bg;
      }
      .left {
        width: 2.2rem;
        text-align: center;
        padding: 0.25rem 0;
      }

      .right{
        padding: 0.25rem;
        .p-top {
          margin-bottom: 0.15rem;
        }
      }
    }
  }
</style>
