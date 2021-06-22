<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy ="showImg" alt="" @load="imgListen">
    <div class="item-info">
      <p class="info-title">{{goodsItem.title}}</p>
      <span class="info-price">￥{{goodsItem.price}}</span>
      <span class="cfav">
        <img src="~assets/img/common/collect.svg" alt=""><span>{{goodsItem.cfav}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgListen(){
      this.$bus.$emit('goodsImgListen')
    },
    itemClick(){
      if(!this.goodsItem.iid) return
      // console.log(this.goodsItem.iid)
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list-item{
  font-size: 14px;
  width: 48%;
  position: relative;
  margin-bottom: 50px;
  img{
    width: 100%;
    vertical-align: middle;
    border-radius: 5%;
  }
}
.item-info{
  position: absolute;
  bottom: -45px;
  left: 0;
  right: 0;
  padding: 0 5px;
  .info-title{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .info-price{
    color: var(--color-tint)
  }
  .cfav{
    margin-left: 5px; 
    img{
      width: 16px;
      vertical-align: top;
    }
  }
}
</style>