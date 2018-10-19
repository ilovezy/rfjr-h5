<template>
  <layout class='total-amount-page with-tab'>
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
        <tab-item>我的账户</tab-item>
        <tab-item>我的收益</tab-item>
      </tab>
    </div>

    <swiper v-model="index"
            class='tab-panel-withwrap'
            height='100%'
            :show-dots="false">
      <swiper-item :key="0">
        <div class="tab-swiper vux-center">
          <div class='top-container'>
            <div class='title'>账户总额(元)</div>
            <div class='num'>150,680,568</div>
          </div>
          <div class='simple-panel'>
            <simple-list-item title='可用余额'
                              rightText='0.01'/>
            <simple-list-item title='募集中金额'
                              rightText='0.01'/>
            <simple-list-item title='提现中金额'
                              rightText='0.01'/>
            <div class='list-item-lg'>
              <div class='top'>
                <div class='list-item-main'>
                  <span class='title'>待收金额</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
              <div class='bottom'>
                <div class='list-item-sub'>
                  <span class='title'>待收本金</span>
                  <span class='right-text'>0.01</span>
                </div>
                <div class='list-item-sub'>
                  <span class='title'>待收利息</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-item>

      <swiper-item :key="1">
        <div>
          <div class='top-container'>
            <div class='title'>收益总额(元)</div>
            <div class='num'>150,681</div>
          </div>
          <div class='simple-panel'>
            <div class='list-item-lg'>
              <div class='top'>
                <div class='list-item-main'>
                  <span class='title'>已收利息</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
              <div class='bottom'>
                <div class='list-item-sub'>
                  <span class='title'>基础利息</span>
                  <span class='right-text'>0.01</span>
                </div>
                <div class='list-item-sub'>
                  <span class='title'>加息利息</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
            </div>

            <div class='list-item-lg'>
              <div class='top'>
                <div class='list-item-main'>
                  <span class='title'>待收利息</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
              <div class='bottom'>
                <div class='list-item-sub'>
                  <span class='title'>基础利息</span>
                  <span class='right-text'>0.01</span>
                </div>
                <div class='list-item-sub'>
                  <span class='title'>加息利息</span>
                  <span class='right-text'>0.01</span>
                </div>
              </div>
            </div>

            <simple-list-item title='红包金额'
                              rightText='0.01'/>
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
        navList: [{
          label: 'fuck'
        }],
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
  @import "totalAmountPage";
</style>
