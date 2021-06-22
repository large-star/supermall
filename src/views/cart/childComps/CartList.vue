<template>
  <div class="cart-list">
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="(item,index) in getCartList" :key="index" :goodsInfo="item"/>
    </scroll>
  </div>
</template>

<script>
//childComps
import CartListItem from './CartListItem'

//components
import Scroll from 'components/common/scroll/Scroll'

//引入mapGetters 辅助函数
import { mapGetters } from 'vuex'


export default {
  name:'CartList',
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters([
      'getCartList'
    ])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="less" scoped>
.cart-list{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
.scroll{
  height: 100%;
}
</style>