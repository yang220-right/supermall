<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:'TabBar'  
}
</script>


<style scoped>
  #tab-bar{
    position: fixed;
    /* 如果只有left没有right的话会向左对齐 */
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background-color: aliceblue;
    /* opacity: .9; */
    box-shadow: 0 -1px 1px 1px gray;
  }
</style>