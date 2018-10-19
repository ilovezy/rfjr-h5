<template>
  <layout class='safety-page'>
    <navbar slot="navbar">
      <span slot="center">安全保障</span>
    </navbar>
    <swiper v-model="index"
            class='safety-swiper'
            height='100%'
            dots-position='center'
            dots-class='safety-spe-dot'
            :show-dots="index != 0">
      <swiper-item :key="0"
                   class='swiper-item1'>
        <div class='swiper-item1-mask'>
          <div class='header'>截止今天 <br>
            <span class='title-bold'>日发金融</span>已安全运营
          </div>
          <div class='count'><span class='num'>2123</span>天</div>

          <div class='icon-wrap'>
            <div class='icon-list-wrap'>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/bank@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>恒丰银行资金存管</div>
              </div>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/riskmanagement@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>数据安全有保障</div>
              </div>
            </div>
            <div class='icon-list-wrap'>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/information@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>信息披露公开透明</div>
              </div>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/safe@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>严格风控</div>
              </div>
            </div>
            <div class='icon-list-wrap'>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/Licence@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>ICP业务许可证</div>
              </div>
              <div class='icon-item'>
                <img src='/static/images/article/safety/icons/bank@2x.png'
                     class='icon-logo'
                     alt=''>
                <div class='text'>稳健运营合规至上</div>
              </div>
            </div>
          </div>

          <div class='footer'>
            <img src='/static/images/article/safety/next.png'
                 class='next-icon'
                 alt=''>
          </div>
        </div>
      </swiper-item>

      <swiper-item class='swiper-item-info'
                   :key="1">
        <header>
          <img src='/static/images/article/safety/bank.png'
               class='safety-logo'
               alt=''>
          <div class='title'>
            <div>银行存管</div>
            <div class='spe-line'></div>
          </div>
        </header>
        <main>
          <h3>1.银行存管 资金去向可查</h3>
          <p>日发金融与恒丰银行合作的银行存管系统已于2017年9月正式上线，实现资金分账管理，资金去向可追踪，是平台拥抱监管、合规经营的重要里程碑。</p>
          <h3>2.信息透明 信息披露完善
          </h3>
          <p>日发金融严格按照相关规定和要求，在平台及官网设置“信息披露”专栏，向社会公众公式平台基本信息、运营信息、项目信息、重大风险信息等相关信息。</p>
          <h3>3.实名认证 保障信息真实 </h3>
          <p>日发金融实行实名校验认证，确保借贷双方信息真实，保障资金回款路径唯一。</p>
        </main>
      </swiper-item>

      <swiper-item class='swiper-item-info'
                   :key="2">
        <header>
          <img src='/static/images/article/safety/riskmanagement.png'
               class='safety-logo'
               alt=''>
          <div class='title'>
            <div>严格风控</div>
            <div class='spe-line'></div>
          </div>
        </header>
        <main>
          <h3>1.严格风控
          </h3>
          <p>平台标的经多重审核，无抵押不贷款，足额抵/质押 ，有效降低坏账风险。
          </p>
          <h3>2.项目透明
          </h3>
          <p>所有标的一一对应，信息披露公开透明 ，保障标的真实性。
          </p>
          <h3>3.小额分散
          </h3>
          <p>产品主要以小额借款标的为主，在分散出借时能有效降低风险。
          </p>
        </main>
      </swiper-item>

      <swiper-item class='swiper-item-info'
                   :key="3">
        <header>
          <img src='/static/images/article/safety/technicalsupport.png'
               class='safety-logo'
               alt=''>
          <div class='title'>
            <div>技术保障
            </div>
            <div class='spe-line'></div>
          </div>
        </header>
        <main>
          <h3>1.数据信息保障
          </h3>
          <p>日发金融严格按照国家相关法律法规要求，进行平台数据信息加密保管，保障信息安全。
          </p>
          <h3>2.平台系统保障

          </h3>
          <p>日发金融系统均为自主研发，配置完善防黑体系及灾备系统，符合国家标准要求。
          </p>
          <h3>3.腾讯云电子签章
          </h3>
          <p>用户每一笔交易与还款操作均有存证和具有法律效力， 所有出借也都有免证效力的电子合同。
          </p>
        </main>
      </swiper-item>

      <swiper-item class='swiper-item-info'
                   :key="4">
        <header>
          <img src='/static/images/article/safety/operate.png'
               class='safety-logo'
               alt=''>
          <div class='title'>
            <div>合规运营
            </div>
            <div class='spe-line'></div>
          </div>
        </header>
        <main>
          <p>
            自2015年上线以来，日发金融一直主动拥抱监管，至今已稳健运营3年。<br>
            2016年《网络借贷信息中介机构业务活动管理暂行办法》正式实施，日发金融作为一个严格自律的网络信息借贷中介平台，全方位进行平台的合规建设，力求在整改期限内将各项政策改进落地，成为客户值得信赖的平台，助力行业健康生态发展
          </p>
        </main>
      </swiper-item>
    </swiper>
  </layout>
</template>
<script>
  export default {
    data() {
      return {
        index: 0
      }
    }
  }
</script>
<style lang="less">
  @import "safetyPage";
</style>
