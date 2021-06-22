<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="price-new">{{goodsInfo.price}}</span>
      <span class="price-old">{{goodsInfo.oldPrice}}</span>
      <span class="price-discountDesc" v-if="goodsInfo.discountDesc">{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="info-columns">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goodsInfo.services.length-1" :key="index">
        <img src="~assets/img/common/ok.png" alt="">
        {{goodsInfo.services[index-1].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods-info{
  padding: 0 10px;
  font-size: 13px;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  margin-top: 10px;
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
}
.price-new{
  color: var(--color-tint);
  font-size: 25px;
}
.price-old{
  color:#999;
  font-size: 15px;
  text-decoration: line-through;
  margin-left: 5px;
}
.price-discountDesc{
  font-size: 12px;
  margin-left: 5px;
  padding: 2px 5px;
  background-color: var(--color-high-text);
  border-radius: 8px;
  color: #fff;
  /* 元素上移 */
  position: relative;
  top: -8px;
}
.info-columns{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid rgba(3, 3, 3, .05);
}
.info-services{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  img{
    width: 15px;
    height: 15px;
    vertical-align: bottom;
  }
}
</style>