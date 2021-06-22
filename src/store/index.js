import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //添加到购物车
    addToCart(state,payload){
      payload.isChecked = true
      state.cartList.push(payload)
    },
    //商品数量+1
    addCount(state,payload){
      payload.count++
    }
  },
  actions: {
    addToCartList(content,payload){
      return new Promise((resolve,reject) => {
        let oldCommodity = content.state.cartList.find(item => {
          return item.iid == payload.iid
        })
        if(oldCommodity){
          //有此商品就添加数量
          content.commit('addCount',oldCommodity)
          resolve('当前商品数量+1')
        }else{
          //无此商品则先添加数量再加入购物车
          payload.count = 1
          content.commit('addToCart',payload)
          resolve('加入购物车成功!')
        }
      })
    }
  },
  getters:{
    getCartListLength(state,getters){
      return state.cartList.length
    },
    getCartList(state,getters){
      return state.cartList
    }
  },
  modules: {
  }
})
