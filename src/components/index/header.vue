<template lang="html">

  <mt-header title="球探">

  <router-link :to="{name:'搜索页'}" slot="right">
    <mt-button icon="search" class="header-search"></mt-button>
  </router-link>
</mt-header>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.mint-header {
    padding: 6.8vw 4.8vw;
    background-color: #fff;
    color: #333!important;
    .fz(font-size, 38)!important;
}
.header-search {
  margin-top: -1vw; 
}
</style>
