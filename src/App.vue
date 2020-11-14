<template>
  <div >
    <Tabbar></Tabbar>
    <router-view/>
  </div>

</template>
<script>
  import Tabbar from './components/common/tabbar/Tabbar'
  import TabBarItem from './components/common/tabbar/Tab-bar-item'
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
