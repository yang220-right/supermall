<template>
  <div class="cart-bottom-bar">
    <div class="checked-content">
      <checked-button
        class="checked-button"
        @click.native="buttonClick"
        :isChecked="isSelectAll"
      />
      <span>全选</span>
    </div>
    <div class="totalPrice">
      <h2>汇总：{{ totalPrice }}</h2>
    </div>
    <div class="caculate">去计算:{{ checkedLength }}</div>
  </div>
</template>
<script>
import CheckedButton from "components/content/checkedButton/CheckedButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  data() {
    return {
      isAll: true,
    };
  },
  components: {
    CheckedButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((pre, n) => n.price * n.count + pre, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.checkedLength == 0) return false;
      //  return !(this.cartList.filter((item) => !item.checked).length)
      return !this.cartList.find((item) => !item.checked); //性能可能高一点
    },
  },
  methods: {
    buttonClick() {
      this.cartList
        .filter((item) => item.checked != !this.isSelectAll)
        .map((item) => (item.checked = !item.checked));
    },
  },
};
</script>
<style scoped>
.cart-bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 49px;
  height: 40px;
  background-color: rgb(238, 238, 238);
}
.checked-content {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;
}
.checked-button {
  width: 22px;
  height: 22px;
  line-height: 26px;
}
.checked-content > span {
  margin-left: 10px;
}
.totalPrice {
  margin-left: 20px;
  color: #666;
  font-weight: 400;
}
.caculate {
  width: 130px;
  height: 100%;

  text-align: center;
  line-height: 40px;
  background-color: rgb(255, 26, 0);
  font-size: 18px;
  color: #ddd;
}
</style>