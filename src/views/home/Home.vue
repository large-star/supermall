<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 虚假TabControl区域 -->
    <tab-control class="tab-control1" :controlTitles="controlTitles" @controlClick="controlClick" ref="tabControl1" v-show="isShowControl"/>

    <!-- 把内容放在滚动条内 -->
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scrollListen="scrollListen" @ScrollPullingUp="ScrollPullingUp">
      <!-- swipe区域 -->
      <home-swiper :swiperList="swiperList" @swipeImgLoad="listenControlTop"/>
      <!-- recommend区域 -->
      <home-recommend :recommends="recommends" @recommendImgLoad="listenControlTop"/>
      <!-- feature区域 -->
      <home-feature/>
      <!-- TabControl区域 -->
      <tab-control :controlTitles="controlTitles" @controlClick="controlClick" ref="tabControl"/>
      <!-- GoodsList区域 -->
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <!-- BackTop区域 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'

//网络请求
import {getHomeMultidata,getHomeGoods} from 'network/home.js'

//工具
import {debounce} from  '@/common/tools'

import {goodsImgLoadMixin,BackTopMixin} from '@/common/mixin.js'

export default {
  name:'Home',
  data(){
    return{
      swiperList:[],
      recommends:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      controlTitles:['流行','新款','推荐'],
      isShowControl:false,
      controlTop:0,
      saveY:0
    }
  },
  mixins:[goodsImgLoadMixin,BackTopMixin],
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  created(){
    //调用 请求数据
    this.getHomeMultidata()
    //把goods三个数组一起请求过来
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    
  },
  //home活跃状态
  activated(){
    //先更新滚动高度，再回到滚动的位置
    let scroll = this.$refs.scroll
    scroll.refresh()
    scroll.scrollTo(0,-this.saveY,0)
  },
  //home失去活跃
  deactivated(){
    //失去活跃记录当前位置
    this.saveY = this.$refs.scroll.scrollY()
  },
  methods:{
    /* 事件函数 */
    //TabControl title 点击事件
    controlClick(index){
      // this.$refs.scroll.scrollTo(0,-this.controlTop,0)
      //检测当前是哪个type
      switch (index) {
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      //让两个tabControl保持统一
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
      
    },    
    //scroll滚动监听
    scrollListen(pos){
      //监听是否显示BackTop
      this.listenIsShowBackTop(pos)
      this.isShowControl = (-pos.y) > this.controlTop
    },
    //上拉加载更多
    ScrollPullingUp(){
      //上拉添加当前 type 的 list 数据
      this.getHomeGoods(this.currentType)
    },
    //swipe图片加载完成执行 获取tabControl的offsetTop
    listenControlTop(){
      this.controlTop = this.$refs.tabControl.$el.offsetTop
    },

    /* 网络请求 函数 */
    //请求 home 的数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        let data = res.data.data
        this.swiperList = data.banner.list
        this.recommends = data.recommend.list
        // console.log(data)
      })
    },
    //请求 home goods数据
    getHomeGoods(type){
      let page = this.goods[type].page+=1
      getHomeGoods(type,page).then(res => {
        let data = res.data.data
        this.goods[type].list.push(...data.list)
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style lang="less" scoped>
#home{
  height: 100vh;
  position: relative;
}
.nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.scroll{
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.tab-control1{
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>