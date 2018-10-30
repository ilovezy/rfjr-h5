let demoRoute = [
  {
    path: '/login',
    name: 'login',//登录
    meta: {
      title: '登录'
    },
    component: resolve => require(['@/views/user/login.vue'], resolve)
  },
  {
    path: '/register',
    name: 'register',//注册
    meta: {
      title: '注册'
    },
    component: resolve => require(['@/views/user/register'], resolve)
  },
  {
    path: '/registerSuccess',
    name: 'registerSuccess',//注册
    meta: {
      title: '注册成功'
    },
    component: resolve => require(['@/views/user/registerSuccess'], resolve)
  },
  {
    path: '/forget',
    name: 'forget',//找回密码
    meta: {
      title: '忘记密码'
    },
    component: resolve => require(['@/views/user/forget'], resolve)
  }
]
export default demoRoute
