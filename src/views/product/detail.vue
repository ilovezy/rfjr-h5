<template>
  <layout class="product-detail-page">
    <navbar slot="navbar">
      <span slot="center">{{product.name}}</span>
    </navbar>

    <div class='product-basic'>
      <i v-if="product.novice == true"
         class="novice">新手专享</i>
      <div class='grid grid-top'>
        <div class='grid-item'>
          <div class='num num-lg'>
            9.0<span class='unit'>%</span>
          </div>
          <div class='text'>年化利率</div>
        </div>
      </div>

      <div class='grid grid-bottom'>
        <div class='grid-item'>
          <div class='num'>
            9<span class='unit'>天</span>
          </div>
          <div class='text'>持有期限</div>
        </div>
        <div class='grid-item'>
          <div class='num'>
            150,000<span class='unit'>元</span>
          </div>
          <div class='text'>标的总额</div>
        </div>
      </div>
    </div>

    <div class='novice-bar'>
      新手专享，单笔3万限额，限投一次，抓住机会
    </div>

    <div class='product-progress-info'>
      <div class='bottom-info'>
        <div class='item'>
          <div class='label text-main'>
            募集进度
          </div>
          <div class='right-info'>
            <div class="progress">
              <div class="progressbar">
                <i :style="{width: investAmount * 100 / totalAmount + '%'}"></i>
              </div>
              <span class='text notice'>
                <!--已募集-->
                66.2%
              </span>
            </div>

            <div class='info'>
              <div class='text notice'>剩余80,000元</div>
            </div>
          </div>
        </div>


        <div class='item'>
          <div class='label text-main'>
            计息方式
          </div>
          <div class='text text-sub'>
            满标次日开始计息
          </div>
        </div>

        <div class='item'>
          <div class='label text-main'>
            还款方式
          </div>
          <div class='text text-sub'>
            一次性还本付息
          </div>
        </div>
      </div>
    </div>

    <div class='bottom-tips'
         @click='openTab'>点击查看更多
    </div>

    <button class='btn btn-primary btn-square btn-block btn-fixed-bottom'
            @click='doConfirm'>
      立即出借(剩余2天)
    </button>

    <open-account-modal v-if='showModal'
                        :close='closeModal'></open-account-modal>

    <detail-tab v-if='showTab'
                :close='closeTab'></detail-tab>
  </layout>
</template>
<script>
  import openAccountModal from './productComp/openAccountModal'
  import detailTab from './productComp/detailTab'

  export default {
    components: {
      openAccountModal, detailTab
    },
    data() {
      return {
        product: {
          name: '车新宝31号',
          novice: true,
        },

        investAmount: 12321,
        totalAmount: 44442,

        showTab: false,
        showModal: false,
      }
    },
    created() {
      // debugger
      console.log(this.$route)
      this.getProductDetails()
    },
    methods: {
      //头部返回路由
      goBack() {
        this.$router.back()
      },
      refreshPage() {
        this.$router.go(0)
      },

      openTab() {
        this.showTab = true
      },
      closeTab() {
        this.showTab = false
      },

      //获取项目详情
      getProductDetails() {
        this.isProductDetail = true
        //项目数据laoding
        // this.$dialog.loading.open('数据加载中...');
      },

      doConfirm() {
        if (true) {
          this.openModal()
        } else {
          this.$router.push('/loanConfirm')
        }
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
  @import "detail";
</style>
