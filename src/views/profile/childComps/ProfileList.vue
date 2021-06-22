<template>
  <div class="list">
    <div class="line"></div>
    <div class="list-item">
      <div>
        <img src="~assets/img/profile/yonghu.png" alt="">
        <p>我的消息</p>
      </div>
      <div>
        <img src="~assets/img/profile/zuanshi.png" alt="">
        <p>积分商城</p>
      </div>
      <div>
        <img src="~assets/img/profile/huiyuanqia.png" alt="">
        <p>会员卡</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="list-item">
      <div>
        <img src="~assets/img/profile/gouwuchekong.png" alt="">
        <p>我的购物车</p>
      </div>
      <div>
        <img src="~assets/img/profile/zan.png" alt="">
        <p>点赞购物APP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileList'
}
</script>

<style lang="less" scoped>
.list{
  font-size: 16px;
  color: #666;
  img{
    width: 20px;
    height: 20px;
  }
}
.list-item div{
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  p{
    flex: 1;
    height: 30px;
    margin-left: 5px;
    border-bottom: 1px solid #ddd;
  }
}
.line{
  height: 10px;
  background-color: rgba(3, 3, 3, .1);
}
</style>