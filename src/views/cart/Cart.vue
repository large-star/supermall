<template>
  <div id="cart">
    <!-- CartNavBar 区域 -->
    <cart-nav-bar :goodsNum="getCartListLength"/>
    <!-- CartList 区域 -->
    <cart-list/>
    <!-- CartButtonBar 区域 -->
    <cart-button-bar/>
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartButtonBar from './childComps/CartButtonBar'
import CartList from './childComps/CartList'

//引入mapGetters 辅助函数
import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    CartNavBar,
    CartButtonBar,
    CartList
  },
  computed:{
    ...mapGetters([
      'getCartListLength',
      'getCartList'
    ])
  }
}
</script>

<style lang="less" scoped>
#cart{
  height: 100vh;
  position: relative;
}
</style>