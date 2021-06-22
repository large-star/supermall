<template>
  <div class="subcategory">
    <div class="subcategory-item" v-for="(item,index) in subcategoryList" :key="index">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'CateSubcategory',
  props:{
    subcategoryList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.subcategory{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  padding: 10px;
}
.subcategory-item{
  height: 100px;
  width: 65px;
  text-align: center;
  img{
    width: 65px;
    margin-bottom: 10px;
  }
  p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>