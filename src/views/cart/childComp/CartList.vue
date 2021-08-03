<template>
  <div class="cart-list">
    <div class='content'>
      <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :itemInfo="item"
      @click.native = 'cartItem(index)'
    />
    </div>
  </div>
</template>
<script>
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods:{
    cartItem(index){
      
    }
  }
};
</script>
<style scoped>
.cart-list{
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 93px;
}
</style>