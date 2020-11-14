<template>
  <div id="tabbar">
    <TabBarItem path="/home" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Category.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Category2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopCart" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/shop-cart.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/shop-cart2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Profile.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Profile2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './Tab-bar-item'
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tabbar{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }


</style>
