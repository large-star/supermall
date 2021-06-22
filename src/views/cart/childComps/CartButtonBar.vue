<template>
  <div class="button-bar">
    <div class="selectAll">
      <check-button :isCheckedBtn="isSclectAll" @click.native="checkClick"/><span>全选</span>
    </div>
    <div class="totalPirce">
      <span>总价：<span class="total">¥{{totalPirce}}</span></span>
    </div>
    <div class="settlement">
      <span>去计算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

//引入mapGetters 辅助函数
import { mapGetters } from 'vuex'

export default {
  name:'CartButtonBar',
  components:{
    CheckButton
  },
  computed:{
    //引入store中的计算属性
    ...mapGetters([
      'getCartList'
    ]),
    //计算所有选中的商品总价
    totalPirce(){
      let cartList = this.getCartList
      return cartList.filter(item => {
        return item.isChecked
      }).reduce((pre,item) => {
        return pre + item.count * item.highNowPrice
      },0).toFixed(2)
    },
    //计算添加到购物车中的选中商品数量
    checkLength(){
      let cartList = this.getCartList
      return cartList.filter(item => item.isChecked).length
    },
    //计算是否全选---如果有一个没选中，则为false
    isSclectAll(){
      let cartList = this.getCartList
      if(cartList.length<=0) return false
      /* 
        find 返回 item
        如果find到，有item，则取反return(false)
        如果find不到，没有item，为false也取反为(true)
       */
      return !cartList.find(item => !item.isChecked)
    }
  },
  methods:{
    checkClick(){
      let cartList = this.getCartList
      if(cartList.length<=0) return
      if(this.isSclectAll){//全部选中则修改成不选中
        cartList.forEach(item => {
          item.isChecked = false
        })
      }else{//有一个没选，则把所有的都选中
        cartList.forEach(item => {
          item.isChecked = true
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.button-bar{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  font-size: 16px;
  border-top: 1px solid rgba(6, 6, 6, .1);
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-content: space-between;
  background-color:rgb(233, 232, 232);
}
.selectAll{
  display: flex;
  align-items: center;
  span{
    margin: 0px 5px;
  }
}

.settlement{
  width: 120px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: orangered;
}

.total{
  font-size: 18px;
  color: orangered;
}
</style>