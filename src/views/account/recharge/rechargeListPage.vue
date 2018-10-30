<template>
  <layout class='recharge-list-page'>
    <navbar slot="navbar">
      <span slot="center">入金记录</span>
    </navbar>

    <div v-if='loading'>
      <p style="text-align:center; margin-top: 100px; ">
        <span style="color: #999;vertical-align:middle;display:inline-block;font-size: 18px;">加载中&nbsp;&nbsp;</span>
        <inline-loading></inline-loading>
      </p>
    </div>

    <div v-else>
      <div class='simple-panel-with-title'
           v-if='list.length > 0'>
        <div class='list-item-spe'
             v-for='item, index in list'
             :key='index'>
          <div class='top'>
            <div class='left'>金额：<span class='number'>${{item.amount | formatThousands}}</span></div>
            <div class='right'>{{statusMap[item.status] || item.status}}</div>
          </div>
          <div class='bottom'>
            <div class='left'>{{typeMap[item.type]}}</div>
            <div class='right'>提交时间：{{item.createAt}}</div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class='no-data'>
          暂无数据
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
  import {InlineLoading} from 'vux'

  export default {
    components: {
      InlineLoading
    },
    data() {
      return {
        list: [],
        statusMap: {
          wait: '待确认',
          processing: '处理中',
          success: '成功',
          fail: '失败',
        },
        typeMap: {
          alipay: '支付宝',
          bank_card: '银联'
        },
        loading: true,
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      formatThousands: function (num) {
        return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      },

      getToken() {
        if (USER.isLogin()) {
          this.isLogin = true
          this.getList()
        } else {
          this.isLogin = false
        }
      },

      getList() {
        const self = this
        this.axios.post('/api/member/recharge/page').then(res => {
          self.list = res.content || []
          self.loading = false
        })
      }
    }
  }
</script>
<style lang="less">
  @import "rechargeListPage";

  .list-item-spe {
    background: #fff;
    padding: 0.3rem 0.4rem;
    color: @color-main;
    font-size: 0.28rem;
    margin-bottom: 0.02rem;
    border-bottom: 1px solid #eaeaea;
    &:active {
      background: @link-active-bg;
    }
    .top {
      .flex-between();
      font-size: 0.32rem;
      line-height: 0.32rem;
      margin-bottom: 0.3rem;
      .left {
        color: @color-main;
        .number {
          color: @color-primary;
        }
      }
      .right {
        color: @color-main !important;
      }
    }
    .bottom {
      .flex-between();

      font-size: 0.28rem;
      line-height: 0.28rem;
      color: @color-sub;
    }
  }
</style>
