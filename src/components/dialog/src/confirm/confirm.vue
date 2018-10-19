<template>
  <div class="mask-black-dialog">
    <div class="confirm"
         :class="classname">
      <div class="confirm-hd">
        <strong class="confirm-title"
                v-html="title"></strong>
      </div>
      <div class="confirm-bd"
           v-if='prompt'>
        <div class='form-item'>
          <!--TODO type 有需要的话再改-->
          <input :placeholder='mes'
                 :type='inputType'
                 autofocus
                 class='form-control'
                 :class='align'
                 v-model='promptVal'/>
        </div>
      </div>
      <div class="confirm-bd"
           v-else
           v-html="mes"></div>
      <template v-if="typeof opts == 'function'">
        <div class="confirm-ft">
          <a href="javascript:;"
             class="confirm-btn primary"
             @click.stop="closeConfirm(false)">取消</a>
          <a href="javascript:;"
             class="confirm-btn default"
             v-if='prompt'
             @click.stop="closeConfirm(false, () => {
              opts(promptVal)
             })">确定</a>
          <a href="javascript:;"
             class="confirm-btn default"
             v-else
             @click.stop="closeConfirm(false, opts)">确定</a>
        </div>
      </template>
      <template v-else>
        <div class="confirm-ft">
          <a href="javascript:;"
             class="confirm-btn"
             v-for="item in opts"
             :class="typeof item.color == 'boolean' ? (item.color ? 'primary' : 'default') : ''"
             :style="{color: item.color}"
             @click.stop="closeConfirm(item.stay, item.callback)"
          >{{item.txt}}</a>
        </div>
      </template>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      classname: String,
      title: String,
      mes: String,
      prompt: Boolean,
      promptVal: String,
      opts: {
        type: [Array, Function],
        default: () => {
        }
      },
      inputType:{
        type: String,
        default: 'text'
      },
      align: String
    }
  }
</script>
