<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="icon"></slot></div>
    <div v-else class="item-icon item-icon-active"><slot name="icon-active"></slot></div>
    <div class="item-text" :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:{
      type:String,
      default:''
    }
  },
  methods:{
    itemClick(){
      //如果是 在当前path 则不需要跳转
      if(this.$route.path.includes(this.path)) return
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)//includes es6 查询字符串语法 返回 true 或 false
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-item{
  font-size: 14px;
  font-weight: 600;
  padding: 0 20px;
}
.item-icon{
  width: 24px;
  height: 24px;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}

.active{
  color: red;
}
</style>