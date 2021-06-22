import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入toast自定义插件
import toast from 'components/common/toast/index'
import loading from './components/common/loading/index'

//引入 vue-lazyload 懒加载图片插件
import VueLazyload from 'vue-lazyload'


//引入lib
import './lib/swiper'
//事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

//调用里面的install
Vue.use(toast)
Vue.use(loading)

//调用懒加载图片插件 - 配置信息
Vue.use(VueLazyload, {
  error: require('./assets/img/common/lazyload.jpg'),
  loading: require('./assets/img/common/lazyload.jpg'),
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
