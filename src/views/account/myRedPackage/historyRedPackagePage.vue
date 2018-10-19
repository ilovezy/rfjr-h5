<template>
  <layout class='history-redpackage-page '>
    <navbar slot="navbar">
      <span slot="center">历史红包</span>
    </navbar>
    <div class='list-wrap'>
      <redPackageCard v-for='item,index in list2'
                      :key='"list2" + index'
                      :isActive='false'
                      :item='item'/>
    </div>
  </layout>
</template>
<script>
  import redPackageCard from './redPackageCard'

  export default {
    components: {redPackageCard},
    data() {
      return {
        list2: [{
          type: 'money',
          money: 80,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        }, {
          type: 'rate',
          rate: 30,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        }, {
          type: 'money',
          money: 80,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        }, {
          type: 'rate',
          rate: 30,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        }, {
          type: 'money',
          money: 80,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        }, {
          type: 'rate',
          rate: 30,
          leftDay: 5,
          borrowLimit: 30,
          borrowMoney: 1000,
          name: '新手注册礼包'
        },]
      }
    },
    created() {
    },

    methods: {}
  }
</script>
<style lang="less"
       scoped>
  @import "historyRedPackagePage";
</style>
