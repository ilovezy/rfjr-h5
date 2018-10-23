let protocolRoute = [
  {
    path: '/protocol/register',
    name: 'protocol_register',//客户协议书
    meta: {
      title: '客户协议书'
    },
    component: resolve => require(['@/views/protocol/register'], resolve)
  },
  {
    path: '/download',
    name: 'download',//我要下载
    meta: {
      title: '我要下载'
    },
    component: resolve => require(['@/views/protocol/download'], resolve)
  },
  {
    path: '/protocol/riskDisclosure',
    name: 'protocol_riskDisclosure',//《风险揭示书》
    meta: {
      title: '风险揭示书',
      requireAuth: true
    },
    component: resolve => require(['@/views/protocol/riskDisclosure'], resolve)
  }
]
export default protocolRoute
