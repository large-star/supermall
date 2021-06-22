<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="info-header">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="info-content">
      <div class="info-number">
        <div class="info-csell">
          <div>{{shopInfo.cSells | totalSell}}</div>
          <div>总销售</div>
        </div>
        <div class="info-cgoods">
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="info-score">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td :style="{color: item.isBetter?'red':'green'}">{{item.score}}</td>
            <td style="color:#fff;" :style="{backgroundColor: item.isBetter?'red':'green'}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="intoShop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    totalSell(num){
      let ret=num
      if(num > 10000){
        ret = (ret/10000).toFixed(1)+'万'
      }
      return ret
    }
  }
}
</script>

<style lang="less" scoped>
.shop-info{
  padding: 20px 10px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
  img{
    height: 50px;
    width: 50px;
    vertical-align: middle;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  span{
    margin-left: 5px;
    font-size: 18px;
  }
}
.info-content{
  display: flex;
  margin: 20px 0;
  .info-number{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 2px solid #ddd;
    text-align: center;
    line-height: 26px;
  }
  .info-score{
    flex: 1;
    line-height: 26px;
    table{
      margin: 0 auto;
      border-spacing: 8px;
    }
  }
}
.intoShop{
  background-color: rgba(6, 6, 6, .1);
  color: #999;
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 8px;
  margin: 0 auto;
}
</style>