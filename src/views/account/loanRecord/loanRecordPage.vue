<template>
  <layout class='loan-record-page with-tab'>
    <navbar slot="navbar">
      <span slot="center">出借记录</span>
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
         class='tab-sm tab-justify'
         v-model="index">
      <tab-item>持有中</tab-item>
      <tab-item>已完成</tab-item>
    </tab>

    <swiper v-model="index"
            class='tab-panel-sm'
            :show-dots="false">
      <swiper-item :key="0">
        <loan-card status='process' link='/loanDetail' />
        <loan-card status='process' link='/loanDetail' />
        <loan-card link='/loanDetail' />
      </swiper-item>

      <swiper-item :key="1">
        <loan-card status='payed' link='/loanDetail' />
        <loan-card status='end' link='/loanDetail' />
      </swiper-item>
    </swiper>
  </layout>
</template>
<script>
  import LoanCard from './loanCard'

  export default {
    components: {
      LoanCard
    },
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
  @import "loanRecordPage";
</style>
