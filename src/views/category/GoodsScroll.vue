<template>
  <scroll
    class="wrapper"
    :data="data"
    :pulldown="pulldown"
    :pullup="pullup"
    :probeType="probeType"
    :listenScroll="listenScroll"
    @scroll='scroll(probeType)'
    @scrollToEnd="loadData"
    @pulldown="loadData"
  >
   <!-- @scroll='scroll(probeType)' 监听滚动时的处理的类型 -->
   <!-- @scrollToEnd @pulldown 上拉下拉刷新数据 -->
    <ul class="content">
      <li v-for="(item, index) in data" :key="index">
        <img :src="item.show.img" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <!-- <div class="loading-wrapper"></div> -->
  </scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import { getHomeGoods } from "network/home";

export default {
  name: "GoodsScroll",
  data() {
    return {
      data: [],//渲染数据
      pulldown: true,//下拉刷新
      pullup:true,//上啦刷新
      currentPage: 0,//加载数据的页数
      listenScroll:true,//是否监听滚动
      probeType:2,//滚动时监听方式
      // 1 滚动的时候会派发scroll事件，会截流。
      // 2 滚动的时候实时派发scroll事件，不会截流。
      // 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
    };
  },
  components: {
    Scroll,
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {//
      this.currentPage += 1;
      getHomeGoods("pop", this.currentPage).then((res) => {
        this.data = this.data.concat(res.data.list);
      });
    },
    scroll(){
      console.log('aaa');
    },
  
      
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  /* width: 50%; */
}
.content li {
  height: 500px;
}
</style>