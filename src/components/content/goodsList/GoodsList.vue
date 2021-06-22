<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
.goods-list{
  text-align: center;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-around;
}
</style>