let accountRoute = [
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '设置'
    },
    component: resolve => require(['@/views/setting/settingPage'], resolve)
  },
  {
    path: '/resetLoginPwd',
    name: 'resetLoginPwd',
    meta: {
      title: '登录密码'
    },
    component: resolve => require(['@/views/setting/resetLoginPwdPage'], resolve)
  },
  {
    path: '/resetTradersPwd',
    name: 'resetTradersPwd',
    meta: {
      title: '交易密码'
    },
    component: resolve => require(['@/views/setting/resetTradersPwdPage'], resolve)
  },
  {
    path: '/forgetTradersPwd',
    name: 'forgetTradersPwd',
    meta: {
      title: '交易密码'
    },
    component: resolve => require(['@/views/setting/forgetTradersPwdPage'], resolve)
  },
  {
    path: '/forgetTradersPwdNext',
    name: 'forgetTradersPwdNext',
    meta: {
      title: '交易密码'
    },
    component: resolve => require(['@/views/setting/forgetTradersPwdNextPage'], resolve)
  },
]
export default accountRoute
