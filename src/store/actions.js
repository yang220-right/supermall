import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((res, rej) => {
      // payload添加新的商品
      // find   如果返回结果为真，就将oldProduct赋值为item
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        res('当前商品数量加1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        res('添加新的商品')
      }
    })
  },
}