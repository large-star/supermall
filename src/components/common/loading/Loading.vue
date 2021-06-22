<template>
  <div id="loading" v-show="isShow">
    <div class="box">
      <img src="~assets/img/loading/loading2.gif" alt="" srcset="">
      加载中...
    </div>
  </div>
</template>

<script>
import {debounce} from '@/common/tools'
export default {
  name:'Loading',
  data(){
    return{
      isShow:false,
      debounceShow:null,
      debounceHide:null
    }
  },
  methods:{
    show(){
      if(this.isShow) return
      this.debounceShow()
    },
    hide(){
      if(!this.isShow) return
      this.debounceHide()
    }
  },
  mounted(){
    let show = function(){
      this.isShow = true
    }
    let hide = function(){
      this.isShow =false
    }
    let time = 10
    this.debounceShow = debounce(show,time)
    this.debounceHide = debounce(hide,time)
  }
}
</script>

<style lang="less" scoped>
#loading{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(3, 3, 3, .2);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.box{
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  width: 180px;
  height: 100px;
  background-color: rgba(0, 0, 0, .4);
  border-radius: 20px;
  img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
}
</style>