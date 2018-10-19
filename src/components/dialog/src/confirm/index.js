import Vue from 'vue';
import {pageScroll} from '../../../utils/assist';
const ConfirmConstructor = Vue.extend(require('./confirm.vue'));
const instance = new ConfirmConstructor({
  el: document.createElement('div')
});
ConfirmConstructor.prototype.closeConfirm = function (stay, callback) {
  typeof callback == 'function' && callback();
  if (stay)return;
  pageScroll.unlock();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};
const Confirm = (options = {}) => {
  instance.classname = options.classname || '';
  instance.mes = options.mes || '';
  instance.title = options.noTitle ? '' : (options.title || '提示');
  instance.inputType = options.inputType || 'text';
  instance.align = options.align || ''
  instance.showTitle = true
  instance.prompt = options.prompt
  instance.promptVal = options.promptVal
  instance.opts = options.opts;
  document.body.appendChild(instance.$el);
  pageScroll.lock();
};
export default Confirm;
