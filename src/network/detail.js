import {request} from "./request" ;
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class GoodsParam{
  constructor(info,rule){
    // image可能没有值
    this.image = info.images?info.images[0]:''
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop{
  constructor(shipInfo){
    this.logo = shipInfo.shopLogo;
    this.name = shipInfo.name;
    this.fans = shipInfo.cFans;
    this.sells = shipInfo.cSells;
    this.score = shipInfo.score;
    this.goodsCount = shipInfo.cGoods;
  }
}
// 有问题
// export function formatDate(data,fmt){
//   if(/(y+)/.text(fmt))
//     fmt = fmt.replace(RegExp.$1,(data.getFullYear()+'').substr(4-RegExp.$1.length))
//   let o={
//     'M+':Date.getMouth()+1,
//     'd+':Date.getDate()+1,
//     'h+':Date.getHours()+1,
//     'm+':Date.getMinutes()+1,
//     's+':Date.getSeconds()+1,
//   }
//   for(let k in o)
//     if(new RegExp(`(${k})`).test(fmt)){
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1,(RegExp.$1.length ===1)?str:padLeftZero(str))
//     }
//   return fmt
// }
// function padLeftZero(str){
//   return ('00'+str).substr(str.length)
// }