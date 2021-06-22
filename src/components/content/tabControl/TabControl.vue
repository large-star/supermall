<template>
  <div class="tab-control">
    <div v-for="(item,index) in controlTitles" :key="index" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    controlTitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      if(this.currentIndex === index) return
      this.currentIndex = index
      this.$emit('controlClick',index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-control{
  display: flex;
  text-align: center;
  color: #333;
  height: 40px;
  justify-content: space-around;
  font-size: 16px;
  line-height: 40px;
  background-color: #fff;
  div{
    height: 100%;
    padding: 0 10px;
  }
}
.active{
  border-bottom: 3px solid var(--color-tint);
}
</style>