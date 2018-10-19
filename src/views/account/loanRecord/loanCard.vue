<template>
  <div class='loan-card-wrap'>
    <router-link :to='link'
                 class='loan-card'>
      <header>
        <div class='name'>车新宝842号</div>
        <div class='status'
             :class='(status == "end" || status == "payed") && "text-sub"'>募集中
        </div>
      </header>

      <div v-if='status == "process"'
           class='loan-body'>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>出借金额</span> <span class='text-sub'>1,000元</span>
          </div>
          <div class='right'>
            <span class='text-main'>预期利息</span> <span class='text-sub'> 22元</span>
          </div>
        </div>
        <div class='bottom'>
          <div class="progress">
            <div class="progressbar">
              <i :style="{width: investAmount * 100 / totalAmount + '%'}"></i>
            </div>
            <div class='info'>
              <div class='text notice'>
                截止日期：2017/07/11
              </div>
              <div class='text notice'>
                66.2%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if='status == "payed"'
           class='loan-body loan-text-info'>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>出借金额</span>
            <span class='text-sub'>1,000元</span>
          </div>
          <div class='right'>
            <span class='text-main'>利息</span>
            <span class='text-sub'>20元</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>还款金额</span>
            <span class='text-sub'>1,022元</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>还款日期</span>
            <span class='text-sub'>2017/07/12</span>
          </div>
        </div>
      </div>

      <div v-else-if='status == "end"'
           class='loan-body loan-text-info'>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>出借金额</span>
            <span class='text-sub'>1,000元</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>流标日期</span>
            <span class='text-sub'>2017/07/12</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>投标资金将于1个自然日内退回至可用余额账户</span>
          </div>
        </div>
      </div>

      <div v-else
           class='loan-body loan-text-info'>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>出借金额</span> <span class='text-sub'>1,000元</span>
          </div>
          <div class='right'>
            <span class='text-main'>预期利息</span> <span class='text-sub'> 22元</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>下期还款(1/3)</span> <span class='text-sub'>1,000元</span>
          </div>
        </div>
        <div class='simple-info'>
          <div class='left'>
            <span class='text-main'>还款日期</span> <span class='text-sub'>2017/07/12</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        investAmount: 12321,
        totalAmount: 44442
      }
    },
    props: {
      showProcess: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      }
    },
    methods: {}
  }
</script>
<style lang="less"
       scoped>
  @import "loanCard";
</style>
