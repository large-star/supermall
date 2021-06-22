<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>  
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup  from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  name:'Scroll',
  props:{
    //是否要监听滚动，0不监听 1 2 3 要监听
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      bs:null
    }
  },
  mounted(){
    let wrapper = this.$refs.wrapper
    this.bs = new BScroll(wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    //触发时机：正在滚动
    if(this.probeType == 2 || this.probeType == 3){
      this.bs.on('scroll', (pos) => {
        // console.log(this.scrollY())
        this.$emit('scrollListen',pos)
      })
    }
    //触发实际：上拉加载更多
    if(this.pullUpLoad){
      this.bs.on('pullingUp',() => {
        this.$emit('ScrollPullingUp')
      })
    } 
  },
  methods:{
    refresh(){
      this.bs && this.bs.refresh()
      // console.log('refresh')
    },
    scrollTo(x=0,y=0,time=300){
      this.bs.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.bs && this.bs.finishPullUp && this.bs.finishPullUp()
    },
    scrollY(){
      return this.bs?-this.bs.y:0
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  overflow: hidden;
}

</style>