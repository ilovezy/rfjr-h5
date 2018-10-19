let demoRoute = [
  {
    path: '/product',
    name: 'product',//理财
    meta: {
      title: '理财'
    },
    component: resolve => require(['@/views/product'], resolve)
  },{
    path: '/historyProduct',
    name: 'historyProduct',//理财
    meta: {
      title: '理财'
    },
    component: resolve => require(['@/views/product/historyProductListPage'], resolve)
  },
  {
    path: '/productDetail',
    name: 'product_detail',//项目详情
    meta: {
      title: '项目详情'
    },
    component: resolve => require(['@/views/product/detail'], resolve)
  },
  {
    path: '/loanConfirm',
    name: 'loanConfirm',//出借确认
    meta: {
      title: '出借确认'
    },
    component: resolve => require(['@/views/product/loanConfirmPage'], resolve)
  }
]
export default demoRoute
