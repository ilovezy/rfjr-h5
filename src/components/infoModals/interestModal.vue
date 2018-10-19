<template>
  <simple-modal class='interest-modal'
                :close='close'
                v-if='show'
                title='预期利息的计算方式'>
    <div class='title'>
      1.以天数计算的标的
    </div>
    <div class='content'>
      预期利息=出借本金*年利率*持有天数/365天
    </div>
    <div class='title'>
      2.以月数计算的标的
    </div>
    <div class='content'>
      预期利息=出借本金*年利率*持有天数/365天 <br>

      （持有天数=标的月数*30天计算）
    </div>

    <div class='content'>
      预期利息为募集期间给出借人做参考的利息，不为实际利息 <br>
      实际利息请查看还款计划表，如有疑问，请联系客服
    </div>
  </simple-modal>
</template>
<script type="text/babel">
  export default {
    name: 'interest-modal',
    data() {
      return {}
    },
    props: {
      close: Function,
      show: Boolean
    },
    methods: {}
  }
</script>
<style lang="less"
       scoped>
  @import "../../assets/styles/common/variables";

  .interest-modal {
    line-height: 0.36rem;
    font-size: 0.24rem;
    color: @color-sub;
  }

  .title {
    font-weight: 500;
  }

  .content {
    padding-left: 0.2rem;
    margin-bottom: 0.3rem;
  }
</style>
