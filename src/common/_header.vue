<template>
  <header>
    <router-link
     class="icon-go"
     :to="{ name: '首页'}"
     v-if="$route.matched[0].path=='/category'">
    </router-link>
    <span class="icon-go" @click="goBack" v-else></span>
    <slot name="title"></slot>
  </header>
</template>
<script>
export default {
  data() {
    return {
      toPath:this.$store.state.login.toPath,
    }
  },
  methods: {
    goBack() {
      if(this.toPath =='sayBall' || this.toPath =='car'){
        this.$router.push({name:'首页'})        
      }else{
        this.$router.go(-1);        
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
header {
  background: white;
  background: -webkit-linear-gradient(left,rgb(231, 205, 120),rgb(247, 139, 38));
  background: linear-gradient( left,rgb(231, 205, 120),rgb(247, 139, 38));
  // background-color: rgb(248, 176, 31);
  text-align: center;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 13.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  h1 {
    // background: red;
    width: 100%;
    text-align: center;
    // .fz(font-size,34);
    letter-spacing: .2vw;
    color: #333!important;
    .fz(font-size, 38)!important;   
  }
  span,a {
    position: absolute;
    top:50%;
    left: 3%;
    display: inline-block;
    .fz(font-size,46);
    transform:translateY(-50%) rotate(-180deg);
    &::before {
      color:rgb(17, 17, 17);
    }
  }
}


</style>

