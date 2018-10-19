<template>
  <layout class='dueIn-page'>
    <div class='tab-nav-withback'>
      <div class='back-icon-wrap'>
        <img src='/static/images/common/arrow-back-1.png'
             class='back-img'
             @click='goBack'
             alt=''>
      </div>
      <tab :line-width=2
           active-color='#E0634E'
           custom-bar-width="0.55rem"
           v-model="index">
        <tab-item>待收本金</tab-item>
        <tab-item>待收收益</tab-item>
      </tab>
    </div>

    <swiper v-model="index"
            class='tab-panel-withwrap'
            height='100%'
            :show-dots="false">
      <swiper-item :key="0">
        <div class='simple-panel'>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
        </div>
      </swiper-item>

      <swiper-item :key="1">
        <div class='simple-panel'>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>2000元</div>
              <div class='right'>还有1天</div>
            </div>
            <div class='bottom'>
              <div class='left'>XX项目</div>
              <div class='right'>2018-03-08</div>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    components: {},
    data() {
      return {
        index: 0,
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      goBack() {
        this.$router.back()
      },
      toggleShowNum() {
        this.showNum = !this.showNum
      },

      sayFuck() {
        this.$dialog.toast({mes: 'fuclk TODO'})
      },

      getToken() {
        if (USER.isLogin()) {
          this.isLogin = true
          this.getAccount()
          this.loginName = USER.getLoginName()
        } else {
          this.isLogin = false
        }
      },

      getAccount() {
      }
    }
  }
</script>
<style lang="less">
  @import "dueInPage";
</style>
