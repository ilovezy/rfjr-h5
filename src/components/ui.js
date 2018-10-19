import '../assets/styles/base.less';

import {Confirm, Alert, Toast, Notify, Loading, SimpleModal} from './dialog';
import {Layout} from './layout';
import {Button} from './button';
import {NavBar} from './navbar';
import {TabBar, TabBarItem} from './tabbar';
import {SendCode} from './sendcode';
import {Slider, SliderItem} from './slider';
import {Popup} from './popup';
import {RollNotice, RollNoticeItem} from './rollnotice';
import {SimpleListItem} from './simpleListItem';
import {BankCard} from './bankCard';
import {InterestModal} from './infoModals';

// USE VUX
import {Grid, GridItem} from 'vux'
import { Tab, TabItem } from 'vux'
import { Swiper, SwiperItem } from 'vux'
import { Spinner } from 'vux'

window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(Button.name, Button);
  Vue.component(NavBar.name, NavBar);
  Vue.component(TabBar.name, TabBar);
  Vue.component(TabBarItem.name, TabBarItem);
  Vue.component(SendCode.name, SendCode);
  Vue.component(Slider.name, Slider);
  Vue.component(SliderItem.name, SliderItem);
  Vue.component(Popup.name, Popup);
  Vue.component(RollNotice.name, RollNotice);
  Vue.component(RollNoticeItem.name, RollNoticeItem);
  Vue.component(SimpleListItem.name, SimpleListItem);
  Vue.component(BankCard.name, BankCard);
  Vue.component(SimpleModal.name, SimpleModal);
  Vue.component(InterestModal.name, InterestModal);

  // VUX components
  Vue.component('grid', Grid)
  Vue.component('grid-item', GridItem)
  Vue.component('tab', Tab)
  Vue.component('tab-item', TabItem)
  Vue.component('swiper', Swiper)
  Vue.component('swiper-item', SwiperItem)
  Vue.component('spinner', Spinner)

  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
