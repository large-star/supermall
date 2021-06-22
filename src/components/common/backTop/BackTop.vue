<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style lang="less" scoped>
.back-top{
  position: absolute;
  z-index: 99;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 20px;
  bottom: 110px;
  img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}
</style>