import Vue from 'vue'
//vue-swipe样式
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';

//注册 swipe组件
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);