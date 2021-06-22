
import {debounce} from './tools'

//引入组件
import BackTop from 'components/common/backTop/BackTop'

export const goodsImgLoadMixin = {
  data(){
    return{
      goodsImgLoad:null,
      scrollRefresh:null
    }
  },
  mounted(){
    this.scrollRefresh = debounce(this.$refs.scroll.refresh,100)
    this.goodsImgLoad = ()=>{
      this.scrollRefresh()
    }
    this.$bus.$on('goodsImgListen',this.goodsImgLoad)
  }
}

export const BackTopMixin = {
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    listenIsShowBackTop(pos){
      this.isShowBackTop = -pos.y > 1000
    }
  },
  components:{
    BackTop
  }
}