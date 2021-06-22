<template>
  <div class="img-info" v-if="Object.keys(imgInfo).length !== 0">
    <div class="start"></div>
    <div class="info-desc">
      {{imgInfo.desc}}
    </div>
    <div class="end"></div>
    <div class="info-imgs clear" v-for="(item,index) in imgInfo.detailImage" :key="index">
      <div class="keys">{{item.key}}</div>
      <div v-for="(iten,indey) in item.list" :key="indey">
        <img :src="iten" alt="" @load="imgInfoListen">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailImgInfo',
  props:{
    imgInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgInfoListen(){
      this.$emit('imgInfoListen')
    }
  }
}
</script>

<style lang="less" scoped>
.clear{
  clear: both;
}
.img-info{
  margin: 20px 0;
}
.info-desc{
  padding: 30px 10px;
  position: relative;
}
.start,.end{
  position: relative;
  margin: 0 10px;
  width: 8px;
  height: 8px;
  background-color: #000;
}
.end{
  float: right;
}
.start::before,.end::before{
  content: " ";
  position: absolute;
  width: 140px;
  height: 1px;
  background-color: #000;
}
.end::before{
  clear: both;
  right: 0;
  bottom: 0;
}
.info-imgs{
  width: 100%;
  color: #333;
  font-weight: 700;
  .keys{
    margin-left: 10px;
    margin-bottom: 10px;
  }
  img{
    width: 100%;
    vertical-align: middle;
  }
}
</style>