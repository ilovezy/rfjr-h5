<template>
  <layout class='product-main-page'
          :show-tabbar='true'>
    <navbar slot="navbar"
            :noBack='true'>
      <span slot="center">产品</span>
    </navbar>

    <div class='page-body'>
      <img src='/static/images/proudct/product-banner.png'
           alt=''>

      <div class='product-list-container'>
        <div v-show="list.length !== 0"
             class="product-infinitescroll">
          <div class="product-list"
               slot="list">
            <router-link tag="div"
                         :to="{ path: '/productDetail',query: { productId: 123321 }}"
                         class="product-item"
                         v-for="item in list"
                         :key="item.id">
              <div class='product-top'>
                <span class='title'>{{item.name}}</span>
                <span v-if="item.novice"
                      class="novice">新手专享</span>
              </div>
              <div class="product-props">
                <div class='temp year-count'>
                  <div class='num'>90<span class='unit'>%</span></div>
                  <div class='text'>年化利率</div>
                </div>

                <div class='temp day-count'>
                  <div class='num'>30<span class='unit'> 天</span></div>
                  <div class='text'>持有期限</div>
                </div>

                <div class="temp progress">
                  <div class="progressbar">
                    <i :style="{width: item.investAmount * 100 / item.totalAmount + '%'}"></i>
                  </div>
                  <div class='text notice'>剩余可投150,000元</div>
                </div>
              </div>

            </router-link>
          </div>
        </div>

        <div class="notavailable"
             v-show="list.length == 0">
          <img src="/static/images/notavailable/not_product.png"
               alt="暂无理财项目~"
               class="not_icon">
          <p class="not_txt">暂无理财项目~</p>
        </div>

        <div class='bottom-tips'>
          <router-link class='top-text'
                       to="historyProduct">查看历史项目 <span class='icon-next-hzg'></span>
          </router-link>
          <div>市场有风险，出借需谨慎</div>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
  import USER from '../../global/USER';

  export default {
    data() {
      return {
        list: [{
          name: '好的佛安抚',
          novice: true,
          yearPercent: 22,
          day: 23,
          left: 123,
          investAmount: 1203,
          totalAmount: 12032,
        }, {
          name: '好的佛安抚',
          novice: true,
          yearPercent: 22,
          day: 23,
          left: 123,
          investAmount: 1303,
          totalAmount: 2442,
        }, {
          name: '好的佛安抚',
          novice: false,
          yearPercent: 22,
          day: 23,
          left: 123,
          investAmount: 1203,
          totalAmount: 1333,
        }],
        page: 0,
        pageSize: 10,
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {

      }
    }
  }
</script>
<style lang="less">
  @import "index";
</style>
