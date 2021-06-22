<template>
  <div class="slide-bar">
    <scroll class="scroll" ref="scroll">
      <div v-for="(item,index) in categoryList" :key="index" class="bar-item" :class="{active:index===currentIndex}" @click="itemClick(item,index)">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'CateSlideBar',
  props:{
    categoryList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  components:{
    Scroll
  },
  methods:{
    itemClick(item,index){
      if(index === this.currentIndex) return
      let obj = {
        maitKey:item.maitKey,
        index
      }
      this.currentIndex = index
      this.$emit('slideBarClick',obj)
    }
  },
  updated(){
    this.$refs.scroll.refresh()
    // console.log('updated')
  }
}
</script>

<style lang="less" scoped>
.slide-bar{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  width: 100px;
  line-height: 45px;
  text-align: center;
  overflow: hidden;
  background-color: #f6f6f6;
}
.bar-item{
  width: 100%;
  height: 45px;
  font-size: 14px;
  color: #666;
}
.scroll{
  height: 100%;
  overflow: hidden;
}

.active{
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #fff;
}
</style>