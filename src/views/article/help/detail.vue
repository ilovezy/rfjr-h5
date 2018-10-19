<template>
  <layout class="bg-white" :showNavbar="isNavbar">
    <navbar slot="navbar">
    </navbar>
    <div class="article-detail">
      <header class="article-header">
        <h1>{{helpdetail.title}}</h1>
        <span>{{helpdetail.createAt}}</span>
      </header>
      <article class="article-content" v-html="helpdetail.content"></article>
    </div>
  </layout>
</template>
<script>
  export default {
    data () {
      return {
        isNavbar: true,
        helpdetail: {
          title: '',
          createAt: '',
          content: ''
        },
      }
    },
    created(){
      this.isOsAccess()
    },
    methods: {
      isOsAccess(){
        if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
          this.isNavbar = false
        }
        this.helpDetail()
      },
      goBack(){
        this.$router.back()
      },
      helpDetail(){
        this.$dialog.loading.open('数据加载中...');
        this.axios.get('security/notice/view/' + this.$route.query.id).then(res => {
          if (res.success) {
            this.helpdetail = res.result
          } else if (res.error === 'PROJECT_NOT_EXIST_ERROR') {
            this.$dialog.confirm({
              mes: res.errorDescription,
              opts: [{
                txt: '去帮助中心',
                color: true,
                callback: () => {
                  if (this.$route.query.os === 'app_ios' || this.$route.query.os === 'app_android') {
                    this.$router.push({path: '/article/help', query: {os: this.$route.query.os}})
                  } else {
                    this.$router.push({path: '/article/help'})
                  }
                }
              }]
            });
          }
        })
      }
    }
  }
</script>
<style lang="less">
  @import "detail.less";
</style>
