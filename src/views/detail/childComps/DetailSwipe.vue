<template>
  <div class="detail-swipe">
    <swipe class="my-swipe">
      <swipe-item v-for="(item,index) in topImgs" :key="index">
        <img :src="item" alt="">
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
export default {
  name:'DetailSwipe',
  props:{
    topImgs:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-swipe{
  height: 300px;
  img{
    width: 100%;
    overflow: hidden;
  }
}
</style>