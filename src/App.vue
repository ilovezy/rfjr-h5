<template>
  <div id="app">
    <loading v-model="isLoading"></loading>

    <transition :name="pageDirection">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import { Loading } from 'vux'
  import {mapState, mapMutations} from 'vuex';
  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapState([
        'pageDirection'
      ]),
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>
