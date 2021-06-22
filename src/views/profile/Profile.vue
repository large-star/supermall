<template>
  <div id="profile">
    <!-- navbar顶部 -->
    <nav-bar>
      <div slot="center">购物狂欢</div>
    </nav-bar>
    <!-- 登录区域 -->
    <profile-login/>
    <!-- 钱包区域 -->
    <profile-wallet/>
    <!-- 列表区域 -->
    <profile-list/>
  </div>
</template>

<script>
//components
import NavBar from 'components/content/navbar/NavBar'

//childComps
import ProfileLogin from './childComps/ProfileLogin'
import ProfileWallet from './childComps/ProfileWallet'
import ProfileList from './childComps/ProfileList'

export default {
  name:'Profile',
  components:{
    NavBar,
    ProfileLogin,
    ProfileWallet,
    ProfileList
  }
}
</script>

<style lang="less" scoped>
#profile{
  height: 100vh;
  position: relative;
}
</style>