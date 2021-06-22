<template>
  <div id="app">
    <!-- 路由占位符 -->
    <keep-alive exclude="Detail" v-if="isRouterAlive">
      <router-view/>
    </keep-alive>

    <!-- 底部导航 -->
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
export default {
  data(){
    return{
      isRouterAlive:true
    }
  },
  components:{
    TabBar
  },
  methods:{
    reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  mounted(){
    window.onresize = () => {
      this.reload()
    }
  }
}
</script>
<style lang="less">
/* 全局使用了  base.css */
@import url('~assets/css/base.css');
</style>
