<template>
  <div class="login">
    <div class="user-pic">
      <img src="~assets/img/profile/paidaxin.jpg" alt="">
    </div>
    <div class="user-info">
      <p>登录 / 注册</p>
      <div class="phone-num">
        <img src="~assets/img/profile/phone.png" alt="">
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="right-icon">
      <img src="~assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileLogin'
}
</script>

<style lang="less" scoped>
.login{
  position: relative;
  padding: 0 20px;
  height: 90px;
  background-color: var(--color-tint);
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
}
.user-pic{
  display: flex;
  align-items: center;
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #ddd;
  }
}

.user-info{
  margin-left: 20px;
  .phone-num{
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
}

.right-icon{
  position: absolute;
  top: 50px;
  right: 10px;
  transform: translateY(-50%);
  
  img{
    width: 16px;
    height: 16px;
  }
}

</style>