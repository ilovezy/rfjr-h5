<template>
  <layout class='my-redpackage-page with-tab'>
    <navbar slot="navbar">
      <span slot="center">我的红包</span>
    </navbar>

    <tab :line-width=2
         active-color='#E0634E'
         custom-bar-width="0.55rem"
         class='tab-sm tab-justify'
         v-model="index">
      <tab-item>抵扣券</tab-item>
      <tab-item>加息券</tab-item>
    </tab>

    <swiper v-model="index"
            class='tab-panel-sm'
            :show-dots="false">
      <swiper-item :key="0">
        <redPackageCard v-for='item,index in list1'
                        :key='"list1" + index'
                        :item='item'/>

        <router-link to='historyRedPackage' class='bottom-tips'>
          查看历史红包 >
        </router-link>
      </swiper-item>

      <swiper-item :key="1">
        <redPackageCard v-for='item,index in list2'
                        :key='"list2" + index'
                        :item='item'/>
        <router-link to='historyRedPackage' class='bottom-tips'>
          查看历史红包 >
        </router-link>
      </swiper-item>
    </swiper>
  </layout>
</template>
<script>
  import redPackageCard from './redPackageCard'

  export default {
    components: {
      redPackageCard
    },
    data() {
      return {
        index: 0,
        list1: [{
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
        },],
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
        },{
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
  @import "myRedPackagePage";
</style>
