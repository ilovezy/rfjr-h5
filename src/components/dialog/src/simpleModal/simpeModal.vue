<template>
  <div class="mask-black-dialog">
    <div class="modal">
      <div class='modal-container'>
        <div class="modal-header" v-if='title'>
          {{title}}
        </div>
        <div class='modal-btn-copy' v-if='showCopyBtn' @click='copy'>
          复制
        </div>
        <div class='modal-body'>
          <slot></slot>
        </div>
      </div>
      <img src='/static/images/common/modal-close.png'
           class='modal-close'
           @click='close'
           alt=''>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'simple-modal',
    data(){
      return {
      }
    },
    props: {
      close: Function,
      copy: Function,
      title: String,
      showCopyBtn: Boolean
    },
    methods: {

    }
  }
</script>
