<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color: #222;
}
.info-price{
  position: relative;
  margin-top: 10px;
}
.info-price .n-price{
  font-size :24px;
  color: var(--color-high-text);
}
.info-price .o-price{
  font-size: 13px;
  margin-left: 10px;
  margin-right: 5px;
  text-decoration: line-through;
}
.discount{
  position: absolute;
  top: 10px;
  padding:3px 8px;
  margin-top: -10px;
  color: white;
  background-color: var(--color-high-text);
  border-radius: 20px;
}
.info-other{
  display: flex;
  margin-top: 25px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-bottom: 2px solid #f2f5f8;
}
.info-other span{
  flex: 1;
}
.info-other span:nth-child(2){
  text-align: center  ;
}
.info-other span:last-child{
  text-align: right;
}
.info-service{
  display: flex;
  padding: 20px 0;
  color: rgb(112, 112, 112);
  font-size: 14px;
}
.info-service>*{
  flex: 1;
}
.info-service img{
  height: 12px;
}
.info-service>span{
  text-align: center;
}
.info-service>span:first-child{
 text-align: left;
}
.info-service>span:last-child{
  text-align: right;
}
</style>