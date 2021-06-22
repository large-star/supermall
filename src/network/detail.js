import {request} from './request'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.highNowPrice = itemInfo.highNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class Params{
  constructor(info,rule){
    //有些商品没有图片
    this.image = info.image?info.image:''
    this.infos = info.set
    this.rules = rule?rule.tables:[]
  }
}