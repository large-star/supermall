import Loading from './Loading.vue'
const obj = {}
obj.install = (Vue) => {
  let loadingConstructor = Vue.extend(Loading)
  let loading = new loadingConstructor()
  loading .$mount(document.createElement('div'))
  document.body.appendChild(loading.$el)
  // Vue.prototype.$loading = loading
  window.$loading = loading
}

export default obj