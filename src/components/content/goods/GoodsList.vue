<template>
  <div class="goods-list">
    <goods-list-item 
    v-for="(item,index) in goodsList" 
    :key='index' 
    :goodsItem = 'item' 
    class="goodsflex"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
  name:'GoodsList',
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods:{
    
  }
}
</script>
<style scoped>
 .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 3px;
  }
  .goodsflex{
    height: 385px;
  }
</style>