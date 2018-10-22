// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import './global/CONFIG'
import './global/Function'
import './global/Validate'
import './global/Platform'
import USER from './global/USER'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import UI from './components/ui'
import './assets/styles/base.less'
import axios from './global/fetch'
import _ from 'underscore'
import moment from 'moment'
import $ from 'jquery'

window.USER = USER
window._ = _
window.moment = moment
window.$ = $

Vue.use(UI)
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.config.devtools = false

//全局路由钩子
let tabPages = ['accountHome', 'product', 'account']

function isTabSwitch(to, from) {
  let toName = to.name || ''
  let fromName = from.name || ''
  return tabPages.indexOf(toName) > -1 && tabPages.indexOf(fromName) > -1
}

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})

  //动态修改标题
  document.title = '日发金融 - ' + to.meta.title
  //路由切换动画
  let routeLength = store.state.routeChain.length;

  //登录验证
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem('token')) {
      //判断token是否存在
      // store.commit('setPageDirection', 'slide-left');
      // next()
      let isTab = isTabSwitch(to, from)
      let add = isTab ? 'addRouteChainNoAnimate' : 'addRouteChain'
      let pop = isTab ? 'popRouteChainNoAnimate' : 'popRouteChain'
      if (routeLength === 0) {
        add = 'addRouteChainNoAnimate'
        if (to.path === from.path && to.path === '/') {
          //当直接打开根路由的时候
          store.commit(add, to);
        } else {
          //直接打开非根路由的时候其实生成了两个路径，from其实就是根路由
          store.commit(add, from);
          store.commit(add, to);
        }
      } else if (routeLength === 1) {
        store.commit(add, to);
      } else {
        let lastBeforeRoute = store.state.routeChain[routeLength - 2];

        if (from.path == '/forgetNext'  && to.path == '/login') { // fuck 忘记密码第二步跳回登录页面，需要跳两次
          store.commit('popRouteChain2');
        } else {
          if (to.path == '/' || tabPages.indexOf(to.name) > -1) {
            store.commit(pop);
          } else {
            if (lastBeforeRoute.path === to.path) {
              store.commit(pop);
            } else {
              store.commit(add, to);
            }
          }
        }
      }
      next()
    } else {
      localStorage.clear()
      store.commit('setPageDirection', 'slide-left');
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    let isTab = isTabSwitch(to, from)
    let add = isTab ? 'addRouteChainNoAnimate' : 'addRouteChain'
    let pop = isTab ? 'popRouteChainNoAnimate' : 'popRouteChain'
    if (routeLength === 0) {
      add = 'addRouteChainNoAnimate'
      if (to.path === from.path && to.path === '/') {
        //当直接打开根路由的时候
        store.commit(add, to);
      } else {
        //直接打开非根路由的时候其实生成了两个路径，from其实就是根路由
        store.commit(add, from);
        store.commit(add, to);
      }
    } else if (routeLength === 1) {
      store.commit(add, to);
    } else {
      let lastBeforeRoute = store.state.routeChain[routeLength - 2];

      if (from.path == '/forgetNext'  && to.path == '/login') { // fuck 忘记密码第二步跳回登录页面，需要跳两次
        store.commit('popRouteChain2');
      } else {
        if (to.path == '/' || tabPages.indexOf(to.name) > -1) {
          store.commit(pop);
        } else {
          if (lastBeforeRoute.path === to.path) {
            store.commit(pop);
          } else {
            store.commit(add, to);
          }
        }
      }
    }
    next()
  }
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

Vue.filter('formatPhone', formatPhone)
Vue.filter('formatThousands', formatThousands)
Vue.filter('formatDate', formatDate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

