<template lang="html">
  <div class="main" v-if="datas">
    <a :href="datas.aside[tabIndex].allUrl">查看全部</a>
    <!-- <div>{{tabIndex}}</div> -->
    <!-- <h2>查看全部{{datas.aside[tabIndex].title[tabIndex]}}</h2> -->
    <ul>
      <li v-for="(k,i) in datas.aside[tabIndex].sonTitle">
        <!-- <div v-if="i == 3" class="brand">NIKE足球鞋</div>         -->
        <router-link :to="{name:'详情页'}" >
          <!-- <img v-lazy="k.imgPath"> -->
          <span>{{k}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
  props:['datas'],
  computed:{
    // 获取当前aside栏选择的是第几个
    tabIndex(){
      return this.$store.state.category.tabIndex
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 9.8;
  // height: 100%;
  padding: 15vw 0 20vw; 
  &::-webkit-scrollbar {display:none}
  >a {
    display: block;
    width: 40%;
    overflow: hidden;
    margin: 3vw auto;
    text-align: center;
    font-size: 4vw;
    padding: 2vw 4vw;
    color:#333;
    letter-spacing: 2px;
    border: 1px solid #ccc;
    border-radius: 6vw;
    &:active {
    background-color: #FFAA00;
    }
  }
  >ul {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fff;
    li {
      width: 43%;
      text-align: center;
      padding-top: 3vw;
      // .brand {
      //   width: 200%;
      //   background: red;
      //   position: absolute;
      // } 
      a {
        color: rgb(255, 253, 253);
        display: block;
        background: -webkit-linear-gradient(left,rgb(250, 186, 103),rgb(247, 122, 14) );
        background: linear-gradient(left,rgb(250, 186, 103),rgb(247, 122, 14) );
        border-radius: 6vw;
        padding: 3vw 0; 
        font-size: 3.5vw;
        &:active {
          background: rgb(243, 156, 43);
        }
        // img {
        //   display: block;
        //   width: 60%;
        //   margin: 4vw auto;
        // }
        span {
          text-align: center;
        }
      }
    }
  }
}
</style>
