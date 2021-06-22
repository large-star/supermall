<template>
  <div class="comment">
    <div class="header">
      <div v-if="Object.keys(comment).length !== 0">
        <span>用户评论</span>
        <span>更多</span>
      </div>
      <div v-else>暂无用户评论</div>
    </div>
    <div v-if="Object.keys(comment).length !== 0">
      <div class="userInfo">
        <img :src="comment.user.avatar" alt="">
        <span>{{comment.user.uname}}</span>
      </div>
      <div class="context">
        <div class="content">{{comment.content}}</div>
        <div class="info">
          <span class="date">{{comment.created | showDate}}</span>
          <span class="style">{{comment.style}}</span>
        </div>
        <div class="imgs" v-if="comment.images">
          <img v-for="(item,index) in comment.images" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {dateFormat} from '@/common/tools'
export default {
  name:'DetailComment',
  props:{
    comment:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      let date = new Date(value*1000)
      return dateFormat("YYYY-mm-dd HH:MM", date)
    }
  }
}
</script>

<style lang="less" scoped>
.comment{
  margin-top: 10px;
  padding: 10px 10px;
}
.header>div:nth-of-type(1){
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(6, 6, 6, .2);
}
.userInfo{
  margin: 10px 0;
  color: #333;
  font-weight: 700;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ddd;
    vertical-align: middle;
    margin-right: 5px;
  }
}
.info{
  margin-top: 10px;
  color: rgb(177, 177, 177);
  .date{
    margin-right: 10px;
  }
}
.imgs{
  margin-top: 10px;
  height: 80px;
  img{
    margin-right: 5px;
    height: 100%;
  }
  
}
</style>