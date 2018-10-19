let articletRoute = [
  {
    path: '/article/more',
    name: 'more',//更多
    meta: {
      title: '更多'
    },
    component: resolve => require(['@/views/article/more'], resolve)
  },

  {
    path: '/article/about',
    name: 'about',//关于我们
    meta: {
      title: '关于长富理财'
    },
    component: resolve => require(['@/views/article/about'], resolve)
  },
  {
    path: '/article/notice',
    name: 'notice',//网站公告
    meta: {
      title: '平台公告'
    },
    component: resolve => require(['@/views/article/notice/list'], resolve)
  },
  {
    path: '/article/notice/:noticeId',
    name: 'notice_detail',//公告详情
    meta: {
      title: '平台公告详情'
    },
    component: resolve => require(['@/views/article/notice/detail'], resolve)
  },
  {
    path: '/article/help',
    name: 'help',//帮助中心
    meta: {
      title: '帮助中心'
    },
    component: resolve => require(['@/views/article/help'], resolve)
  },
  {
    path: '/article/help_detail',
    name: 'help_detail',//帮助中心详情
    meta: {
      title: '帮助详情'
    },
    component: resolve => require(['@/views/article/help/detail'], resolve)
  },
  {
    path: '/article/safety',
    name: 'articleSafety',//帮助中心详情
    meta: {
      title: '安全保障'
    },
    component: resolve => require(['@/views/article/safety/safetyPage'], resolve)
  },
]
export default articletRoute
