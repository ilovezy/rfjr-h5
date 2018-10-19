let protocolRoute = [
  {
    path: '/protocol/register',
    name: 'protocol_register',//注册协议
    meta: {
      title: '长富理财注册协议'
    },
    component: resolve => require(['@/views/protocol/register'], resolve)
  },
  {
    path: '/protocol/borrowing_agreements',
    name: 'protocol_borrowing_agreements',//长富理财网借款协议
    meta: {
      title: '借款协议',
      requireAuth: true
    },
    component: resolve => require(['@/views/protocol/borrowing_agreements'], resolve)
  }
]
export default protocolRoute
