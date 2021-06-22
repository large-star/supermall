<template>
  <div class="wallet">
    <div class="money">
      <div class="money-item">
        <p>
          <span class="text-high">0.00</span> 元
        </p>
        <p>我的余额</p>
      </div>
    </div>
    <div class="coupon">
      <div class="coupon-item">
        <p>
          <span class="text-high">0</span> 个
        </p>
        <p>我的优惠</p>
      </div>
    </div>
    <div class="integral">
      <div class="integral-item">
        <p>
          <span class="text-high">0</span> 分
        </p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileWallet'
}
</script>

<style lang="less" scoped>
.wallet{
  height: 80px;
  display: flex;
  font-size: 14px;
  div{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.text-high{
  font-weight: 700;
  color: orangered;
  font-size: 24px;
}

</style>