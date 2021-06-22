<template>
  <div class="tabbar">
    <tab-bar-item path='/home'>
      <img src="~assets/img/tabbar/home.png" alt="" slot="icon">
      <img src="~assets/img/tabbar/active-home.png" alt="" slot="icon-active">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <img src="~assets/img/tabbar/category.png" alt="" slot="icon">
      <img src="~assets/img/tabbar/active-category.png" alt="" slot="icon-active">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart'>
      <img src="~assets/img/tabbar/shopcart.png" alt="" slot="icon">
      <img src="~assets/img/tabbar/active-shopcart.png" alt="" slot="icon-active">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img src="~assets/img/tabbar/profile.png" alt="" slot="icon">
      <img src="~assets/img/tabbar/active-profile.png" alt="" slot="icon-active">
      <div slot="text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name:'TabBar',
  components:{
    TabBarItem
  }
}
</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, .12);
}
</style>