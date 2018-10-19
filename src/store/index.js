/**
 * Created by ymjdev on 2017/3/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 1,
    pageDirection: 'fade',
    routeChain:[]
  },
  mutations: {
    addRouteChain(state, route){
      state.pageDirection = 'slide-left'
      state.routeChain.push(route);
    },
    popRouteChain(state){
      state.pageDirection = 'slide-right'
      state.routeChain.pop();
    },
    popRouteChain2(state){
      state.pageDirection = 'slide-right'
      state.routeChain.pop();
      state.routeChain.pop();
    },
    addRouteChainNoAnimate(state, route){
      state.pageDirection = ''
      state.routeChain.push(route);
    },
    popRouteChainNoAnimate(state){
      state.pageDirection = ''
      state.routeChain.pop();
    },
    setPageDirection(state, dir){
      state.pageDirection = dir;
    }
  }
});

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      // state.isLoading = payload.isLoading
      state.isLoading = false
    }
  }
})

export default store
