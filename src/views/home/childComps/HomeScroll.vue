<template>
  <scroll
    class="wrapper"
    ref="homescroll"
    :data="data"
    :pulldown="pulldown"
    :pullup="pullup"
    :probeType="probeType"
    :listenScroll="listenScroll"
    @scroll="scroll"
    @scrollToEnd="loadData"
    @pulldown="loadData"
  >
    <!-- @scroll='scroll(probeType)' 监听滚动时的处理的类型 -->
    <!-- @scrollToEnd @pulldown 上拉下拉刷新数据 -->
    <div class="content">
      <slot></slot>
    </div>
    <!-- <div class="loading-wrapper"></div> -->
  </scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "HomeScroll",
  data() {
    return {
      data: [], //渲染数据
      pulldown: true, //下拉刷新
      pullup: true, //上啦刷新
      currentPage: 0, //加载数据的页数
      listenScroll: true, //是否监听滚动
      probeType: 3, //滚动时监听方式
      // 1 滚动的时候会派发scroll事件，会截流。
      // 2 滚动的时候实时派发scroll事件，不会截流。
      // 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      scrolly: 0, //自定义属性，滚动距离
    };
  },
  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
  components: {
    Scroll,
  },
  methods: {
    loadData() {
      this.data.push(...this.datas);
      this.$emit("loadUpMore");
    },
    scroll(pos) {
      this.scrolly = pos.y;
      this.$emit("backTopScrollPosition", pos);
    },
    scrollTo(x, y, time = 300) {
      this.$refs.homescroll.scroll.scrollTo(x, y, time);
    },
    // 上拉加载更多
    refresh(){
      this.$refs.homescroll.scroll.refresh()
    },
    getScrollY(){
      return this.scrolly
    }
  },
  // watch: {
  //   // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
  //   data() {
  //     setTimeout(() => {
  //        this.$refs.homescroll.scroll.refresh();
  //     }, this.$refs.homescroll.scroll.refreshDelay);
  //   },
  // },
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>