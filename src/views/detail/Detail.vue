<template>
  <div id="detail">
    <!-- 顶部 navbar -->
    <detail-nav-bar @titleClick="titleClick" ref="navbar"/>
    <!-- scroll 区域 -->
    <scroll class="scroll" ref="scroll" :probeType="3" @scrollListen="scrollListen">
      <!-- swipe 区域 -->
      <detail-swipe :topImgs="topImgs"/>
      <!-- goodsInfo 区域 -->
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <!-- shopInfo 区域 -->
      <detail-shop-info :shopInfo="shopInfo"/>
      <!-- imgInfo 图片详情 区域 -->
      <detail-img-info :imgInfo="imgInfo" @imgInfoListen="imgInfoListen"/>
      <!-- params 参数 区域 -->
      <detail-params :params="params" ref="params"/>
      <!-- comment 评论 区域 -->
      <detail-comment :comment="comment" ref="comment"/>
      <!-- recommend 推荐区域 -->
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <!-- buttonBar 区域 -->
    <detail-button-bar @addToCart="addToCart" :iid="iid"/>
    <!-- BackTop区域 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
//network 网络请求
import {getDetail,Goods,ShopInfo,Params,getRecommend} from 'network/detail'

//tools工具
import {debounce} from '@/common/tools'

//childComps
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwipe from './childComps/DetailSwipe'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import DetailParams from './childComps//DetailParams'
import DetailComment from './childComps/DetailComment'
import DetailButtonBar from './childComps/DetailButtonBar'


//components
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from '../../components/content/goodsList/GoodsList'

import {goodsImgLoadMixin,BackTopMixin} from '@/common/mixin.js'

export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topImgs:[],
      goodsInfo:{},
      shopInfo:{},
      imgInfo:{},
      // scrollRefresh:null, => mixin
      params:{},
      comment:{},
      recommend:[],
      //存放titles对应的位置
      titlesOffsetTop:[],
      //防抖 获取titles的offsetTop
      getTitlesOffsetTop:null,
      titleIndex:0
    }
  },
  mixins:[goodsImgLoadMixin,BackTopMixin],
  components:{
    DetailNavBar,
    DetailSwipe,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailParams,
    DetailComment,
    DetailButtonBar,
    Scroll,
    GoodsList
  },
  created(){
    let iid = this.$route.params.iid
    this.iid = iid
    //请求 iid 的详情
    getDetail(iid).then(res => {
      let data = res.data.result
      //获取顶部轮播图图片
      this.topImgs = data.itemInfo.topImages
      // console.log(data)
      //获取 界面详情
      this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //获取 店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      //获取 图片列表信息
      this.imgInfo = data.detailInfo
      //获取 参数信息
      this.params = new Params(data.itemParams.info,data.itemParams.rule)
      //获取第一条评论信息
      this.comment = data.rate.list?data.rate.list[0]:{}
    })
    //推荐的请求
    getRecommend().then(res => {
      this.recommend = res.data.data.list
      // console.log(res)
    })
  },
  mounted(){
    this.$nextTick(() => {
      //绑定防抖函数，要放到imgload中
      this.getTitlesOffsetTop = debounce(() => {
        this.titlesOffsetTop = []
        this.titlesOffsetTop[0] = 0
        this.titlesOffsetTop[1] = this.$refs.params?this.$refs.params.$el.offsetTop:0
        this.titlesOffsetTop[2] = this.$refs.comment?this.$refs.comment.$el.offsetTop:0
        this.titlesOffsetTop[3] = this.$refs.recommend?this.$refs.recommend.$el.offsetTop:0
        this.titlesOffsetTop[4] = Number.MAX_VALUE//便于 title 对联判断
      })
    })
  },
   //生命周期销毁
  destroyed(){
    // console.log('detail destroyed')
    // this.$bus.$off('itemImageLoad',this.goodsImgLoad) 
  },
  methods:{
    //title切换和滚动到相应位置
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.titlesOffsetTop[index],1000)
    },
    //imgInfo图片加载完成执行
    imgInfoListen(){
      this.scrollRefresh()
      this.getTitlesOffsetTop()
    },
    //title关联位置
    titleRelation(pos){
      let posY = -pos.y
      let length = this.titlesOffsetTop.length
      for(let i=0; i < length; i++){
        if(i===this.titleIndex) continue
        if(posY >= this.titlesOffsetTop[i] && posY < this.titlesOffsetTop[i+1]){
          this.titleIndex = i
          this.$refs.navbar.activeIndex = i
        }
      }
    },
    //监听滚动条滚动
    scrollListen(pos){
      //mixin backtop
      this.listenIsShowBackTop(pos)
      this.titleRelation(pos)
    },
    //添加到购物车
    addToCart(){
      //要添加过去的商品数据
      let commodity = {}
      commodity.iid = this.iid
      commodity.image = this.topImgs[0]
      commodity.title = this.goodsInfo.title
      commodity.desc = this.goodsInfo.desc
      commodity.highNowPrice = this.goodsInfo.highNowPrice

      //调用 actions 方法添加到购物车
      this.$store.dispatch('addToCartList',commodity).then(res => {
        this.$toast.show(res,1000)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>