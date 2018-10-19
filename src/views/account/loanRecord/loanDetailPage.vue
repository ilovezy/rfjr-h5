<template>
  <layout class='loan-detail-page'>
    <navbar slot="navbar">
      <span slot="center">出借详情</span>
    </navbar>

    <loan-end v-if='status == "end"'></loan-end>
    <loan-payed v-if='status == "payed"'></loan-payed>
    <loan-paying v-if='status == "paying"'></loan-paying>
    <loan-prepay v-if='status == "prepay"'></loan-prepay>
    <loan-raise v-if='status == "raise"'></loan-raise>

  </layout>
</template>
<script>
  import LoanEnd from './loanDetailComp/loanEnd'
  import LoanPayed from './loanDetailComp/loanPayed'
  import LoanPaying from './loanDetailComp/loanPaying'
  import LoanPrepay from './loanDetailComp/loanPrepay'
  import LoanRaise from './loanDetailComp/loanRaise'

  export default {
    components: {
      LoanEnd,LoanPayed,LoanPaying,LoanPrepay,LoanRaise
    },
    data() {
      return {
        status: 'prepay',
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
  @import "loanDetailPage";
</style>
