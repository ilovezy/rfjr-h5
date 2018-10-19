<template>
  <layout class='money-record-page with-tab'>
    <navbar slot="navbar">
      <span slot="center">资金记录</span>
    </navbar>

    <simple-modal :close='closeModal'
                  :show-copy-btn='true'
                  :copy='doCopy'
                  v-if='showModal'>
      <div class='modal-list-wrap'>
        <div class='modal-list-item'>
          <div class='title'>流水订单号</div>
          <div class='content'>工商银行，尾号1766</div>
        </div>
        <div class='modal-list-item'>
          <div class='title'>流水订单号</div>
          <div class='content'>工商银行，尾号1766</div>
        </div>
        <div class='modal-list-item'>
          <div class='title'>流水订单号</div>
          <div class='content'>工商银行，尾号1766</div>
        </div>
        <div class='modal-list-item'>
          <div class='title'>流水订单号</div>
          <div class='content'>工商银行，尾号1766</div>
        </div>
        <div class='modal-list-item'>
          <div class='title'>流水订单号</div>
          <div class='content'>工商银行，尾号1766</div>
        </div>
      </div>
    </simple-modal>

    <tab :line-width=2
         active-color='#E0634E'
         custom-bar-width="0.55rem"
         class='tab-sm'
         v-model="index">
      <tab-item>全部</tab-item>
      <tab-item>充值</tab-item>
      <tab-item>提现</tab-item>
      <tab-item>出借</tab-item>
      <tab-item>其他</tab-item>
    </tab>

    <swiper v-model="index"
            class='tab-panel-sm'
            :show-dots="false">
      <swiper-item :key="0">
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
      </swiper-item>

      <swiper-item :key="1">
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item :key="2">

      </swiper-item>
      <swiper-item :key="3">
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item :key="4">
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'
               @click='openModal'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
        <div class='simple-panel-with-title'>
          <div class='title'>
            2018/07
          </div>

          <div class='list-item-spe'>
            <div class='top'>
              <div class='left'>充值</div>
              <div class='right'>1,000</div>
            </div>
            <div class='bottom'>
              <div class='left'>2017/07/04 13:38:27</div>
              <div class='right'>充值成功</div>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </layout>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        index: 0,
        showModal: false
      }
    },
    created() {
    },

    methods: {
      doCopy() {
        alert('fuck')
      },
      openModal() {
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      }
    }
  }
</script>
<style lang="less">
  @import "moneyRecordPage";
</style>
