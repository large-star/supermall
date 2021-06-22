<template>
  <div class="cart-list-item">
    <div class="item-select">
      <check-button :isCheckedBtn="goodsInfo.isChecked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="goodsInfo.image" alt="">
    </div>
    <div class="item-info">
      <div class="info-title">{{goodsInfo.title}}</div>
      <div class="info-desc">{{goodsInfo.desc}}</div>
      <div class="info-buttom">
        <span class="buttom-price">¥{{goodsInfo.highNowPrice}}</span>
        <span>x{{goodsInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name:'CartListItem',
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checkClick(){
      this.goodsInfo.isChecked = !this.goodsInfo.isChecked
    }
  }
}
</script>

<style lang="less" scoped>
.cart-list-item{
  display: flex;
  height: 110px;
  border-bottom: 1px solid #ccc;
  // align-items: center;
  padding: 5px 10px;
}
.item-select{
  display: flex;
  align-items: center;
}
.item-img{
  height: 100%;
  margin: 0 10px;
  img{
    height: 100%;
    width: 70px;
    border-radius: 3px;
  }
}
.item-info{
  overflow: hidden;
  .info-title,.info-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info-title{
    font-size: 20px;
    color: #333;
  }
  .info-desc{
    margin: 18px 0;
  }
  .info-buttom{
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    color: #333;
    .buttom-price{
      color: orangered;
    }
  }
}
</style>