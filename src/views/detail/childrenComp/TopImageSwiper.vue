<template>
    <!-- <h2>{{TopImages}}</h2> -->
    <swiper class='topSwiper'>
      <swiper-item v-for='(item,index) in TopImages' :key='index'>
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>
<script>

import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'TopImageSwiper',
  props:{
    TopImages:[]
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.topSwiper{
  height: 300px;
  overflow: hidden;
}
</style>