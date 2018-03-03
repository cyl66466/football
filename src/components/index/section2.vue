<template>
  <section class="section2" v-if='section2'>
    <div class="section2-list">
      <ul>
        <li v-for="(k,i) in section2.list" :key="k.id">
          <router-link :to="{name:'详情页'}">
            <img v-lazy="k.imgPath[i]">
          </router-link>
          <!-- <h2 class="section2-list-title ac">
            {{k.title}}
          </h2> -->
          <p class="section2-list-intro">
            {{k.intro[i]}}
          </p>
          <p class="section2-list-price">
            ￥{{k.price[i]}}
          </p>
        </li>
      </ul>
    </div>
    <div class="section2-banner">
      <i class="fa fa-bolt" aria-hidden="true"></i>
      今日秒杀
    </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

  export default {
    props:['section2']

  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section2-list {
    overflow-x: auto;
    width: 100%;
    // .pt();
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    >ul {
      .bt();
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      padding: 6vw;
      width: 350%;
      li {
        // margin-right: 10vw;
        width: 26vw;
        a,
        img {
          display: block;
          width: 100%;
        }

        h2,
        p {
          overflow: hidden;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h2 {
          .fz(font-size, 32);
          padding-top: 3vw;
          color: #333;
        }

        p.section2-list-intro {
          padding-top: 1vw;
          .fz(font-size, 26);
          color: rgb(150, 150, 150);
        }

        p.section2-list-price {
          padding-top: 2vw;          
          color: red;
        }
      }
    }



  }

  .section2-banner {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 3vw 0;
    .fz(font-size, 38);
    color: rgb(238, 98, 63);
    font-weight: bold;
    position: relative;
    // img {
    //   display: block;
    //   height: 24vw;
    //   width: 100%;
    // }
  }
</style>
