<template>
  <layout class='product-history-page'>
    <navbar slot="navbar">
      <span slot="center">历史项目</span>
    </navbar>

    <div class='page-body'>
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

                <div class="temp status">
                  {{item.status}}
                </div>
              </div>

            </router-link>
          </div>
        </div>

        <div class="notavailable"
             v-show="list.length == 0">
          <img src="/static/images/notavailable/not_product.png"
               alt="暂无历史项目~"
               class="not_icon">
          <p class="not_txt">暂无历史项目~</p>
        </div>

        <div class='bottom-tips'>
          出于安全考虑，只展示部分历史项目 <br>用户本人出借的项目，可在出借记录中查看
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
          status: '募集结束',
        }, {
          name: '好的佛安抚',
          novice: true,
          yearPercent: 22,
          day: 23,
          left: 123,
          investAmount: 1303,
          totalAmount: 2442,
          status: '募集结束',
        }, {
          name: '好的佛安抚',
          novice: false,
          yearPercent: 22,
          day: 23,
          left: 123,
          investAmount: 1203,
          totalAmount: 1333,
          status: '募集结束',
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
  @import "historyProductListPage";
</style>
