<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      :class="{ fixed: isTabFixed }"
      v-show="isTabFixed"
    />

    <home-scroll
      ref="homescroll"
      @backTopScrollPosition="backTopScrollPosition"
      @loadUpMore="loadUpMore"
      :datas="goods.pop.list"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goodsList="showGoods" />
    </home-scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import HomeScroll from "./childComps/HomeScroll";

import { getHomeMutidata, getHomeGoods } from "network/home";

import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,
    HomeScroll,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0
    };
  },
  created() {
    this.getHomeMutidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // 监听img图片加载完成   放在creted的话可能bs还未创建，所以放在mounted
    // const refresh = this.debounce(this.$refs.homescroll.refresh)
    // this.$bus.$on("itemImageLoad", () => {
    //   console.log("xixi");
    //   this.$refs.homescroll.refresh();
    // });
  },
  mounted() {
    const refresh = debounce(this.$refs.homescroll.refresh);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated() {
    // console.log('chuangjianle ');
    // console.log( this.$refs.homescroll.scrollTo);
    // this.$refs.homescroll.scrollTo(0,this.saveY,0)
    // this.$refs.homescroll.refresh()//如果不刷新可能有毛病
  },
  deactivated() {
    // this.saveY = this.$refs.homescroll.getScrollY()
    // console.log(this.saveY);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTopClick() {
      // 直接找到子组件的子组件的根元素的BScroll实例对象，然后调用方法
      // this.$refs.homescroll.$refs.homescroll.scroll.scrollTo(0,0,1000)
      // 自定义scrollTo方法是组件封装的方法，直接指向$refs.homescroll.scroll.scrollTo() BS方法
      this.$refs.homescroll.scrollTo(0, 0);
    },
    backTopScrollPosition(pos) {
      // backtop是否显示
      this.isShowBackTop = -pos.y > 1000;
      // 是否吸顶
      this.isTabFixed = -pos.y > this.tabOffsetTop;
    },
    // 上拉加载更多
    loadUpMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      // 获取tabcontrol高度
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /*
     *网络请求
     */
    getHomeMutidata() {
      getHomeMutidata().then((res) => {
        // this 在箭头函数中this会往上找作用域，实际上找的是created里的this
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      }); //异步操作
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  /* 在base.css定义的变量 */
  /* 在使用浏览器原生滚动式，为了不跟随一起滚动而使用的 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  background-color: var(--color-tint);
  /* z-index: 9; */
}
.fixed {
  position: relative;
  z-index: 10;
}
</style>