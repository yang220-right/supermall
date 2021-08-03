<template>
      <div class='tab-bar-item' @click="itemClick">
        <div v-if = '!isActive'>
          <slot name='item-icon'></slot>
        </div>
        <div v-else>
          <slot name='item-icon-active'></slot>
        </div>
        <div :style="activeStyle">
           <slot name='item-text'></slot>
        </div>
      </div>
</template>

<script>

export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  // data(){
    
  // },
  computed:{
    isActive(){
      return this.$route.path == this.path
    },
    activeStyle(){
      // 如果处于活跃状态，则返回true
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      // console.log('click');
      // replace 没有返回
      this.$router.replace(this.path)
    }
  }
}
</script>


<style scoped>
  .tab-bar-item{
    flex:1;
    height: 49px;
    text-align: center;
    color: aquamarine;
  }
  .tab-bar-item img{
    height: 25px;
    width: 25px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .tab-bar-item div{
    text-align: center;
    height: 24px;
    font-size: 16px;
  }
  /* .active{
    color: red;
  } */
</style>