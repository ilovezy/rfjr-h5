<template>
  <layout :showNavbar="isNavbar" class="bg-white">
    <navbar slot="navbar" :title="$route.meta.title">
    </navbar>
    <div class="notavailable" v-show="helplist.length == 0"><img src="../../../../static/images/notavailable/not_available.png" alt="暂无帮助信息~" class="not_icon"><p class="not_txt">暂无帮助信息~</p></div>
    <infinitescroll :on-infinite="loadHelpList" ref="loadHelpList" v-show="helplist.length !== 0">
      <cell-group slot="list" class="help-list">
        <!--:href="{ path: '帮助中心详情',params: { helpId: item.id }}"-->
        <cell-item arrow type="link" :href="{ path: './help_detail', query: { id: item.id,os: osTpye}}" v-for="item in helplist" :key="item.id" v-show="isOs">
          <span slot="left">{{item.title}}</span>
        </cell-item>
        <cell-item arrow type="link" :href="{ path: './help_detail', query: { id: item.id}}"  v-for="item in helplist" :key="item.id" v-show="!isOs">
          <span slot="left">{{item.title}}</span>
        </cell-item>
      </cell-group>
    </infinitescroll>
  </layout>
</template>
<script>
  export default {
    data () {
      return {
        isNavbar: true,
        isOs: false,
        osTpye: '',
        helplist: '',
        page: 0,
        pageSize: 15
      }
    },
    created() {
      this.isOsAccess()
    },
    methods: {
      isOsAccess(){
        if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          this.isNavbar = false
          this.isOs = true
          this.osTpye = this.$route.query.os
        }
        this.loadHelpList()
      },
      goBack(){
        this.$router.back()
      },
      loadHelpList() {
        this.$dialog.loading.open('数据加载中...');
        this.axios.get('security/help/list' + '?page=' + this.page + '&size=' + this.pageSize).then(res => {
          var _helplist = res.result.content
          if(_helplist === undefined){
            _helplist = null
          }
          this.helplist = [...this.helplist, ...(_helplist || [])];
          if ( _helplist === null || _helplist.length < this.pageSize || this.page === 10) {
            // 所有数据加载完毕
            this.$refs.loadHelpList.$emit('cf.infinitescroll.loadedDone');
            return;
          }
          // 单次请求数据完毕
          this.$refs.loadHelpList.$emit('cf.infinitescroll.finishLoad');
          this.page++;
        });
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .help-list
    position relative
    margin-top 0!important
    margin-bottom -.2rem!important
    .cell-item
      padding: .3rem
      .cell-left
        white-space normal
      .cell-right
        min-height 0
</style>
