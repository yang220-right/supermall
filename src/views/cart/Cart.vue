<template>
  <div class="cart">
    <!-- 头部 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <div class="wrapper">
      <cart-list />
    </div>
    <!-- 汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComp/CartList";
import CartBottomBar from "./childComp/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
}
.cart-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 9;
}
.wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 88px;
  overflow: auto;
}
</style>