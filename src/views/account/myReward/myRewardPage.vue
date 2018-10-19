<template>
  <layout class='my-reward-page'>
    <navbar slot="navbar">
      <span slot="center">我的邀请奖励</span>
      <span slot="right"
            class='nav-right'
            @click='openModal'>奖励规则</span>
    </navbar>

    <simple-modal v-if='showModal'
                  title='奖励规则'
                  :close='closeModal'>
      好友首次投资金额≥1000元，<br>即可获得10元现金，<br>并且好友可获得88元现金券一张
    </simple-modal>

    <div class='top-container'>
      <div class='top-main'>
        <div class='num'>
          90<span class='unit'>人</span>
        </div>
        <div class='text'>
          邀请
        </div>
      </div>

      <div class='top-main'>
        <div class='num'>
          900<span class='unit'>元</span>
        </div>
        <div class='text'>
          奖励
        </div>
      </div>
    </div>

    <div class='simple-panel-table'>
      <div class='list-item'>
        <span class='text1'>被邀请人</span>
        <span class='text2'>注册时间</span>
        <span class='text3'>奖励</span>
      </div>
      <div v-if='dataSet.length'>
        <div class='list-item'
             v-for='item, index in dataSet'
             :key='index'>
          <span class='text1'>{{item.phone}}</span>
          <span class='text2'>{{item.date}}</span>
          <span class='text3'>{{item.money}}元</span>
        </div>
      </div>

      <div class='list-no-data'
           v-else>
        暂无奖励
      </div>
    </div>

    <button class='btn btn-primary btn-square btn-block btn-fixed-bottom'
            @click='doFuckShare'>
      分享给好友
    </button>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        showModal: false,
        dataSet: [{
          phone: 15088603225,
          date: '2017/12/01',
          money: 300
        }]
      }
    },
    created() {
    },

    methods: {
      openModal() {
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      },

      doFuckShare(){
        alert('fuck u')
      }
    }
  }
</script>
<style lang="less">
  @import "myRewardPage";
</style>
