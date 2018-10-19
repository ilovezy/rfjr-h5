<template>
  <div class="mask-black-dialog">
    <div class="confirm alert">
      <div class="confirm-bd" v-html="mes"></div>
      <div class="confirm-ft">
        <a href="javascript:;" class="confirm-btn primary" @click.stop="closeAlert">确定</a>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      mes: String,
      callback: Function
    }
  }
</script>
<style lang="less">
  @import "../../../../assets/styles/components/dialog.less";
</style>
