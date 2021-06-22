<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style lang="less" scoped>
.nav-bar{
  color: #fff;
  height: 44px;
  background-color: var(--color-tint);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
}
.left,.right{
  width: 80px;
}
.center{
  flex: 1;
}
</style>