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
    path: '/bindBankCard',
    name: 'bindBankCard',
    meta: {
      title: '绑定银行卡',
      requireAuth: true
    },
    component: resolve => require(['@/views/account/bindBankCard/bindBankCard'], resolve)
  },

  {
    path: '/openBank',
    name: 'account_openBank',
    meta: {
      title: '账户总额'
    },
    component: resolve => require(['@/views/account/openBank/openBankPage'], resolve)
  },
  {
    path: '/bankAccount',
    name: 'account_bankAccount',
    meta: {
      title: '银行存管账户',      requireAuth: true

    },
    component: resolve => require(['@/views/account/openBank/bankAccountPage'], resolve)
  },
  {
    path: '/bankCard',
    name: 'account_bankCard',
    meta: {
      title: '银行卡',      requireAuth: true
    },
    component: resolve => require(['@/views/account/openBank/bankCardPage'], resolve)
  },
  {
    path: '/bidAuth',
    name: 'account_bidAuth',
    meta: {
      title: '投标授权',      requireAuth: true
    },
    component: resolve => require(['@/views/account/openBank/bidAuthPage'], resolve)
  },
  {
    path: '/totalAmount',
    name: 'account_totalAmount',
    meta: {
      title: '账户总额',      requireAuth: true
    },
    component: resolve => require(['@/views/account/totalAmountPage'], resolve)
  },
  {
    path: '/dueIn',
    name: 'account_dueIn',
    meta: {
      title: '待收金额',      requireAuth: true
    },
    component: resolve => require(['@/views/account/dueInPage'], resolve)
  },
  {
    path: '/recharge',
    name: 'account_recharge',
    meta: {
      title: '充值',      requireAuth: true
    },
    component: resolve => require(['@/views/account/recharge/rechargePage'], resolve)
  },
  {
    path: '/rechargeList',
    name: 'account_rechargeList',
    meta: {
      title: '充值',      requireAuth: true
    },
    component: resolve => require(['@/views/account/recharge/rechargeListPage'], resolve)
  },
  {
    path: '/withdraw',
    name: 'account_withdraw',
    meta: {
      title: '提现',      requireAuth: true
    },
    component: resolve => require(['@/views/account/withdraw/withdrawPage'], resolve)
  },
  {
    path: '/withdrawList',
    name: 'account_withdrawList',
    meta: {
      title: '充值',      requireAuth: true
    },
    component: resolve => require(['@/views/account/withdraw/withdrawListPage'], resolve)
  },
  {
    path: '/moneyRecord',
    name: 'account_moneyRecord',
    meta: {
      title: '资金记录',      requireAuth: true
    },
    component: resolve => require(['@/views/account/moneyRecord/moneyRecordPage'], resolve)
  },
  {
    path: '/loanRecord',
    name: 'account_loanRecord',
    meta: {
      title: '出借记录',      requireAuth: true
    },
    component: resolve => require(['@/views/account/loanRecord/loanRecordPage'], resolve)
  },
  {
    path: '/loanDetail',
    name: 'account_loanDetail',
    meta: {
      title: '出借记录',      requireAuth: true
    },
    component: resolve => require(['@/views/account/loanRecord/loanDetailPage'], resolve)
  },
]
export default accountRoute
