<template>
  <nav-bar>
    <div slot="center">购物车({{goodsNum}})</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
  name:'CartNavBar',
  props:{
    goodsNum:{
      type:Number,
      default:0
    }
  },
  components:{
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>