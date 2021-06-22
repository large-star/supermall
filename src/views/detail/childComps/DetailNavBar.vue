<template>
  <div class="nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="bar-center">
        <span v-for="(item,index) in navBarTitles" :key="index" :class="{active: index === activeIndex}" @click="titleClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
  name:'DetailNavBar',
  data(){
    return{
      navBarTitles:['商品','参数','评论','推荐'],
      activeIndex:0,
    }
  },
  methods:{
    //回到首页
    back(){
      this.$router.back()
    },
    titleClick(index){
      this.activeIndex = index
      this.$emit('titleClick',index)
    }
  },
  components:{
    NavBar
  }
}
</script>

<style lang="less" scoped>
.nav-bar{
  background-color: #fff;
  color: #333;
  img{
    vertical-align: middle;
  }
  .bar-center{
    display: flex;
    justify-content: space-around;
  }
}
.active{
  color:crimson
}
</style>