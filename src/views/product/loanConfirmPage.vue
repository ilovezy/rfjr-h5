<template>
  <layout class="loan-confirm-page">
    <navbar slot="navbar">
      <span slot="center">出借确认</span>
    </navbar>
    <interest-modal :show='showIntroModal'
                    :close='closeIntroModal'/>

    <loan-status-modal :show='showLoanStatusModal'
                       :close='closeStatusModal'
                       :status='loanStatus'/>

    <div class='simple-panel'>
      <simple-list-item title='标的名称'
                        :disabled='true'
                        right-text='车新宝1215号'/>
      <simple-list-item title='剩余金额'
                        :disabled='true'
                        right-text='80,000元'/>
    </div>

    <div class='form-body-simple with-label'>
      <div class='form-item with-extra'>
        <div class='label'>出借金额</div>
        <div class='right'>
          <div>
            <input type='number'
                   style='width: 180px'
                   class='form-control'
                   maxlength="11"
                   placeholder="请输入出借金额，100元起"
                   v-model="loginName">
            元
          </div>
          <div class='extra-text'>
            预期利息 <span class='text-primary'>0.00</span> <span class='text-main'>元</span>
            <span class='icon icon-group40'
                  @click='openIntroModal'></span>
          </div>
        </div>
      </div>

      <div class='form-item'>
        <div class='label'>可用余额</div>

        <div class='spe-wrap'>
          0.00 元
        </div>
        <button slot="right"
                class="btn-cell-special"
                disabled
                v-if="loginName.length !== 11">去充值
        </button>
      </div>
    </div>

    <div class='form-body-simple with-label'>
      <div class='form-item with-extra'>
        <div class='label'>交易密码</div>
        <div class='right'>
          <input type="password"
                 class='form-control'
                 maxlength="6"
                 placeholder="请输入交易密码"
                 v-model="password">
          <div class='extra-text'>
            <router-link to='/forgetTradersPwd'
                         class='text-info'>忘记密码 TODO 页面跳转回来
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class='btn-wrap'>
      <button class='btn btn-square btn-block btn-primary' @click='openStatusModal'>开通
      </button>
    </div>

    <div class='notice'>
      已阅读并同意 <span class='text-main'>《出借协议》</span>
    </div>
    <div class='bottom-tips'>
      客服电话：400-150-8080 <br>
      （工作日 09:00-18:00）
    </div>
  </layout>
</template>

<script>
  import LoanStatusModal from './loanStatusModal'

  export default {
    components: {
      LoanStatusModal
    },
    data() {
      return {
        loginName: '',
        password: '',
        showIntroModal: false,
        showLoanStatusModal: false,
        loanStatus: 'loading'
      }
    },
    created() {

    },
    methods: {
      openIntroModal() {
        this.showIntroModal = true
      },
      closeIntroModal() {
        this.showIntroModal = false
      },
      openStatusModal() {
        this.showLoanStatusModal = true
      },
      closeStatusModal() {
        this.showLoanStatusModal = false
      },
    }
  }
</script>
<style lang="less">
  @import "loanConfirmPage";
</style>
