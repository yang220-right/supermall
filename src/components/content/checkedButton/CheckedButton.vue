<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img
      src="~assets/img/cart/tick.svg"
      alt=""
    /> 
  </div>
</template>
<script>
export default {
  name: "CheckedButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.check-button {
  border: 1px solid #333;
  border-radius: 50%;
}
.checked {
  border-radius: 50%;
  background-color: red;
  border-color: red;
}
</style>