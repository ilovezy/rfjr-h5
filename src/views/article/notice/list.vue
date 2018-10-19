<template>
  <layout class='notice-list-page'>
    <navbar slot="navbar">
      <span slot="center">公告</span>
    </navbar>
    <div class="notavailable"
         v-show="!isLongArr(noticelist)">
      <img src="/static/images/notavailable/not_available.png"
           alt="暂无网站公告~"
           class="not_icon">
      <p class="not_txt">暂无网站公告~</p>
    </div>

    <div class="article-list"
         v-show="isLongArr(noticelist)">
      <router-link :to="{ name: 'notice_detail',params: { noticeId: item.id }}"
                   class="article-item"
                   v-for="item in noticelist"
                   :key="item.id">
        <div class='left'>
          <div class='title'>{{item.title}}</div>
          <time>{{item.date}}</time>
        </div>
        <div class='right'>
          <img src='/static/images/common/arrow-right.png'
               alt=''>
        </div>
      </router-link>
    </div>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        noticelist: [{
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨jfosajfidfjaoifj发动机扫风景点萨景点萨',
          id: 1,
          date: '2013-4-31'
        }, {
          title: 'jfosajfidfjaoifj发动机扫风景点萨',
          id: 1,
          date: '2013-4-31'
        },],
        page: 0,
        pageSize: 10
      }
    },
    created() {
      this.loadNoticeList()
    },
    methods: {
      isLongArr,
      goBack() {
        this.$router.back()
      },
      loadNoticeList() {
        // this.$dialog.loading.open('数据加载中...');
        // this.axios.get('security/notice/list' + '?page=' + this.page + '&size=' + this.pageSize).then(res => {
        //   var _noticelist = res.result.content
        //   if (_noticelist === undefined) {
        //     _noticelist = null
        //   }
        //   this.noticelist = [...this.noticelist, ...(_noticelist || [])];
        //   if (_noticelist == null || _noticelist.length < this.pageSize || this.page == 10) {
        //     // 所有数据加载完毕
        //     this.$refs.loadNoticeList.$emit('cf.infinitescroll.loadedDone');
        //     return;
        //   }
        //   // 单次请求数据完毕
        //   this.$refs.loadNoticeList.$emit('cf.infinitescroll.finishLoad');
        //   this.page++;
        // });
      }
    }
  }
</script>
<style lang="less">
  @import "./list";
</style>
