<template>
  <div id="category">
    <!-- 顶部导航 -->
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>

    <!-- 左侧边导航 -->
    <cate-slide-bar :categoryList="categoryList" @slideBarClick="slideBarClick"/>

    <!-- 右侧推荐数据 -->
    <scroll class="scroll" ref="scroll">
      <cate-subcategory :subcategoryList="subcategoryList"/>
      <tab-control :controlTitles="controlTitles" @controlClick="controlClick" ref="tabControl"/>
      <goods-list :goods="subcategoryDetailList"/>
    </scroll>
    

  </div>
</template>

<script>
//mixin
import {goodsImgLoadMixin} from '@/common/mixin'

//components
import NavBar from 'components/content/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goodsList/GoodsList'
import TabControl from 'components/content/tabControl/TabControl'

//childComps
import CateSlideBar from './childComps/CateSlideBar'
import CateSubcategory from './childComps/CateSubcategory'
//网络请求
import {getCateGory,getSubcategory,getSubcategoryDetail} from 'network/category'
export default {
  name:'Category',
  data(){
    return {
      categoryList:[],
      cateCurrentIndex:0,
      subcategoryList:[],
      subcategoryDetailList:[],
      controlTitles:['流行','新款','推荐'],
      typeList:['pop','new','sell']
    }
  },
  components:{
    NavBar,
    Scroll,
    GoodsList,
    TabControl,
    CateSlideBar,
    CateSubcategory
  },
  mixins:[goodsImgLoadMixin],
  created(){
    this.getCateGory()
  },
  activated(){
    this.$refs.scroll.refresh()
  },
  methods:{
    /* 事件监听 */
    //slideBar切换
    slideBarClick({maitKey,index}){
      this.getSubcategory(maitKey)
      this.cateCurrentIndex = index
      //初始化 goodsList 和 tabcontrol
      this.getSubcategoryDetail(this.categoryList[this.cateCurrentIndex].miniWallkey,this.typeList[0])
      this.$refs.tabControl.currentIndex = 0
      this.$refs.scroll.scrollTo(0,0,0)
    },
    //tabControl切换
    controlClick(index){
      //请求当前的detail
      this.getSubcategoryDetail(this.categoryList[this.cateCurrentIndex].miniWallkey,this.typeList[index])
    },


    /* 网络请求 */
    //获取左侧板导航的list列表数据
    getCateGory(){
      getCateGory().then(res => {
        this.categoryList = res.data.data.category.list
        this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey)
          this.getSubcategoryDetail(this.categoryList[0].miniWallkey,'pop')
        })
      })
    },
    //获取对应的右推荐数据
    getSubcategory(maitKey){
      getSubcategory(maitKey).then(res => {
        this.subcategoryList = res.data.data.list
      })
    },
    //获取右对应的detail数据
    getSubcategoryDetail(miniWallkey,type){
      getSubcategoryDetail(miniWallkey,type).then(res => {
        this.subcategoryDetailList = res.data
      })
    }
  },
}
</script>

<style lang="less" scoped>
#category{
  height: 100vh;
  position: relative;
}
.scroll{
  position: absolute;
  top: 44px;
  left: 100px;
  right: 0;
  bottom: 49px;
}
</style>