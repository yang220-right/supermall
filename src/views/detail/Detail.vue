<template>
  <div class="detail">
    <detail-nav-bar
      @titleclick="titleclick"
      ref="detailNavBar"
      class="detailNavBar"
    />
    <top-image-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" />
    <detail-param-info :param-info="paramInfo" ref="paramInfo" />
    <detail-comment-info :comment-info="commentInfo" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childrenComp/DetailNavBar";
import TopImageSwiper from "./childrenComp/TopImageSwiper";
import DetailBaseInfo from "./childrenComp/DetailBaseInfo";
import DetailShopInfo from "./childrenComp/DetailShopInfo";
import DetailGoodsInfo from "./childrenComp/DetailsGoodsInfo";
import DetailParamInfo from "./childrenComp/DetailParamInfo";
import DetailCommentInfo from "./childrenComp/DetailCommentInfo";
import DetailBottomBar from "./childrenComp/DetailBottomBar";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import { debounce } from "common/utils";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      themeTopYs: [],
      getThemeTopYs: null,
    };
  },
  components: {
    DetailNavBar,
    TopImageSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid;
    // 保存数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // 获取轮播图图片
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详情信息
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论信息   先判断有无评论
      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0];

      // 获取高度
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(this.$refs.detailNavBar.$el.offsetTop);
        this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop);
        console.log(this.themeTopYs);
      }, 100);
    });
  },
  methods: {
    ...mapActions({
      AaddCart:'addCart'
    }),
    detailImageLoad() {
      this.getThemeTopYs();
    },
    titleclick(index) {
      console.log(index);
      // 利用BS直接移动盒子距离，等封装
    },
    addCart() {
      // 获取购物车需要展示的信息,没必要添加一个变量
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid; //一定要穿的数据，每个数据唯一的标识

      // 将商品添加到购物车内
      // 不要这样做，修改store的数据最好通过mutations方法
      // this.$store.cartList.push(product)
      // this.$store.dispatch("addCart", product).then((res) => console.log(res));
      // 映射后直接使用
      this.AaddCart(product).then(res=>this.$toast.show(res,1500)) 
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detailNavBar {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 9;
}
</style>