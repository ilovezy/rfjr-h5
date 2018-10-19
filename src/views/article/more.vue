<template>
  <layout>
    <navbar :title="$route.meta.title" slot="navbar">
    </navbar>
    <cell-group>
      <cell-item arrow type="link" href="/article/about">
        <span slot="left">关于长富理财</span>
      </cell-item>
      <!--<cell-item arrow type="link" href="#">-->
        <!--<span slot="left">信息披露</span>-->
      <!--</cell-item>-->
      <!--<cell-item arrow type="link" href="#">-->
        <!--<span slot="left">意见反馈</span>-->
      <!--</cell-item>-->
      <cell-item arrow type="link" href="/article/help">
        <span slot="left">帮助中心</span>
      </cell-item>
      <cell-item arrow type="label" @click.native="contactService()">
        <span slot="left">联系客服</span>
      </cell-item>
    </cell-group>
  </layout>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goBack(){
        this.$router.back()
      },
      contactService(){
        this.$dialog.confirm({
          title: '长富理财服务热线',
          mes: '<div style=" text-align: center;"><h3 style=" font-weight: normal; font-size: .38rem; color: #333; line-height: .6rem">400-099-8799</h3><p style="color: #999; font-size: .24rem">&#40; 工作日: 9:00-17:30，节假日: 9:30-17:30 &#41;</p></div>',
          opts: [
            {
              txt: '取消',
              color: false
            },
            {
              txt: '呼叫',
              color: true,
              callback: () => {
                window.location.href="tel:4000998799"
              }
            }
          ]
        });
      }
    }
  }
</script>
