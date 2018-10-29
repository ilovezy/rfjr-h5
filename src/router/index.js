import Vue from 'vue'
import Router from 'vue-router'
import userRoute from './modules/user'
import accountRoute from './modules/account'
import protocolRoute from './modules/protocol'
import landingRoute from './modules/landing'
import productRoute from './modules/product'
import settingRoute from './modules/setting'

Vue.use(Router)

let basicRoute = [
  {
    path: '/',
    name: 'accountHome',//首页
    meta: {
      title: '日发金融',
      requireAuth: true
    },
    component: resolve => require(['@/views/account/index.vue'], resolve)
  },
  {
    path: '*',
    name: '404',//404错误
    meta: {
      title: '404错误'
    },
    component: resolve => require(['@/views/error.vue'], resolve)
  }
]

export default new Router({
  // mode: 'history',
  routes: [
    ...basicRoute,
    ...userRoute,
    ...accountRoute,
    ...protocolRoute,
    ...landingRoute,
    ...productRoute,
    ...settingRoute,
  ]
})
