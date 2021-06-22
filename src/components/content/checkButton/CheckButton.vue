<template>
  <div class="check-button" :class="{checked : isCheckedBtn}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isCheckedBtn:{
      type:Boolean,
      default:false
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.check-button{
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #aaa;
  background-color: #fff;
  display: flex;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
  }
}
.checked{
  background-color: darksalmon;
  border-color: darksalmon;
}
</style>