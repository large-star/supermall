<template>
  <div class="swipe" :style="{height:imgHeight+'px'}" ref="swipe">
    <swipe class="my-swipe">
      <!-- <swipe-item>1111</swipe-item>
      <swipe-item>2222</swipe-item>
      <swipe-item>3333</swipe-item> -->
      <swipe-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.image" alt="" @load="swipeImgLoad">
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
export default {
  name:'Swiper',
  props:{
    swiperList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      imgHeight:0,
      isImgLoad:false
    }
  },
  mounted(){
    
  },
  methods:{
    //要保留多少位小数
    NumRound(value,n){
      return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
    },
    swipeImgLoad(){
      if(!this.isImgLoad){
        this.$emit('swipeImgLoad')
        this.isImgLoad = true
      }
    }
  },
  watch:{
    swiperList(val,old) {
      let imgW=val[0].width
      let imgH=val[0].height
      let ww = document.body.getBoundingClientRect().width
      ww=this.NumRound(ww,1)
      let imgInfo =this.NumRound(imgH * ww / imgW,2) 
      this.imgHeight=imgInfo
    }
  },
  computed:{
    imgH(){
      // console.log(this.swiperList[0].height)
      return 300
    }
  }
}
</script>

<style lang="less" scoped>
.swipe{
  img{
    width: 100%;
  }
}
</style>