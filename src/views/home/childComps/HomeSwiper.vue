<template>
  <swiper>
    <!-- 不动态绑定的话，并不会解析里面的item.link -->
    <!-- <swiper-item v-for="item in banner" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item> -->
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="SimgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 默认情况下会直接引用 文件下面的index
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isSell: true,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    SimgLoad() {
      if (this.isSell) {
        this.isSell = false
        this.$emit("swiperImageLoad");
        // console.log('----');
      }
    },
  },
};
</script>

<style scoped>
</style>