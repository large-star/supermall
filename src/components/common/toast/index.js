import Toast from './Toast.vue'
const obj = {}
obj.install = (Vue) => {
  //1.创建组件构造器
  let  toastConstructor = Vue.extend(Toast)
  //2.new的方法，根据组件构造器，可以创建一个组件对象
  let toast = new toastConstructor()
  //3.将组件对象，手动挂载到某一个元素上 -------挂载上后才有 $el
  toast.$mount(document.createElement('div'))
  //4.添加到body中，toast.$el对应的是创建的div
  document.body.appendChild(toast.$el)
  //5.把组件放到vue原型中，方便调用内部methods
  Vue.prototype.$toast = toast

}

export default obj