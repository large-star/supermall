<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <img :src="item.image" alt="" @load="recommendImgLoad">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  data(){
    return {
      isShowImg:false
    }
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    recommendImgLoad(){
      if(!this.isShowImg){
        this.$emit('recommendImgLoad')
        this.isShowImg = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  display: flex;
  margin-top: 10px;
  text-align: center;
  div{
    flex: 1;
    margin: 0 6px;
  }
  img{
    width: 100%;
    border-radius: 50%;
  }
}
</style>