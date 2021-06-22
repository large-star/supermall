<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return {
      isShow:false,
      message:''
    }
  },
  methods:{
    show(message='默认文字',delayed='2000'){
      if(this.isShow) return
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, delayed);
    }
  }
}
</script>

<style lang="less" scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%,-50%);
  font-size: 18px;
  width: 200px;
  height: 50px;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(3, 3, 3, .8);
}
</style>