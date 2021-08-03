<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title"
          :class="{ titleActive: currentIndex == index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  created() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleclick',index)
    },
    backClick() {
      this.$router.back(); // 等价于this.$router.go(-1)
    },
  },
};
</script>

<style>
.titles {
  display: flex;
  font-size: 13px;
}
.title {
  flex: 1;
}
.titleActive {
  color: var(--color-high-text);
  /* background-color: red; */
}
.back img {
  margin-top: 12px;
}
</style>