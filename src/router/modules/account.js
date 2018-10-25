let accountRoute = [
  {
    path: '/account',
    name: 'account',//账户首页
    meta: {
      title: '我的'
    },
    component: resolve => require(['@/views/account'], resolve)
  },
  {
    path: '/realName',
    name: 'realName',//实名认证
    meta: {
      title: '实名认证'
    },
    component: resolve => require(['@/views/account/realName/realName'], resolve)
  },

  {
    path: '/bindBankCard',
    name: 'bindBankCard',
    meta: {
      title: '绑定银行卡',
      requireAuth: true
    },
    component: resolve => require(['@/views/account/bindBankCard/bindBankCard'], resolve)
  },
  {
    path: '/openAccount',
    name: 'account_openAccount',
    meta: {
      title: '在线开户'
    },
    component: resolve => require(['@/views/account/openAccount/openAccount'], resolve)
  },

  {
    path: '/recharge',
    name: 'account_recharge',
    meta: {
      title: '入金', requireAuth: true
    },
    component: resolve => require(['@/views/account/recharge/rechargePage'], resolve)
  },
  {
    path: '/rechargeList',
    name: 'account_rechargeList',
    meta: {
      title: '入金记录', requireAuth: true
    },
    component: resolve => require(['@/views/account/recharge/rechargeListPage'], resolve)
  },

  {
    path: '/withdraw',
    name: 'account_withdraw',
    meta: {
      title: '出金', requireAuth: true
    },
    component: resolve => require(['@/views/account/withdraw/withdrawPage'], resolve)
  },
  {
    path: '/withdrawList',
    name: 'account_withdrawList',
    meta: {
      title: '出金记录', requireAuth: true
    },
    component: resolve => require(['@/views/account/withdraw/withdrawListPage'], resolve)
  },
  {
    path: '/changePassword',
    name: 'account_changePassword',
    meta: {
      title: '修改密码', requireAuth: true
    },
    component: resolve => require(['@/views/account/changePassword/changePassword'], resolve)
  },

]
export default accountRoute
