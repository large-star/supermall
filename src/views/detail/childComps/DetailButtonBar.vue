<template>
  <div class="button-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div @click="toCart">
        <i class="icon shop">
          <span class="cartListLength">{{cartListLength}}</span>
        </i>
        <span>购物车</span>
      </div>
      <div>
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="into-cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailButtonBar',
  props:{
    iid:{
      type:String,
      default:''
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart')
    },
    toCart(){
      if(this.cartListLength<=0) return
      this.$router.push('/cart')
    },
    buy(){
      // this.addToCart()
      // this.toCart()
      let cartList = this.$store.state.cartList
      let ret = cartList.find(item => {
        return item.iid === this.iid
      })
      if(ret){
        this.toCart()
      }else{
        this.addToCart()
        this.toCart()
      }
    }
  },
  computed:{
    cartListLength(){
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style lang="less" scoped>
.button-bar{
  height: 49px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  box-shadow:0px -2px 2px rgba(6, 6, 6, .2);
  display: flex;
}
.bar-left,.bar-right{
  flex:1;
  display: flex;
  text-align: center;
  align-items: center;
  div{
    flex: 1;
  }
}
.bar-left{
  font-size: 14px;
  .icon{
    display: block;
    margin: 0 auto;
    width: 22px;
    height: 22px;
    background:url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    background-size: 100%;
  }
  .service{
    background-position: 0 -54px;
  }
  .shop{
    background-position: 0 -98px;
    position: relative;
  }
}

.bar-right{
  text-align: center;
  // height: 42px;
  // line-height: 42px;
  .into-cart{
    color: #333;
    background-color: #ffe817;
    border-top-left-radius:40px;
    border-bottom-left-radius:40px;
    padding: 10px 0;
  }
  .buy{
    color: #fff;
    background-color: #f69;
    border-top-right-radius:40px;
    border-bottom-right-radius:40px;
    padding: 10px 0;
  }
}

.cartListLength{
  position: absolute;
  display: block;
  top: -4px;
  left: 14px;
  background-color: red;
  text-align: center;
  line-height: 18px;
  font-size: 6px;
  font-style: normal;
  color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
</style>