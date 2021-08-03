<template>
    <div class="recommend">
      <div v-for="(item,index) in recommend" :key='index' class='recommend-item'>
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>


export default {
  name:'RecommendView',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
   
  }
};
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  padding: 8px 0 15px;
  border-bottom: 6px solid #ddd;
}
.recommend-item{
  /* flex: 1; */
  width: 23%;
}
.recommend-item img{
  width: 100%;
  margin-bottom: 10px;
}
</style>