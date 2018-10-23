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
