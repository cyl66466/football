<template lang="html">
  <section class="section4" v-if='section4'>
    <h2 class="section4-title">
      <i class="fa fa-heart" aria-hidden="true"></i>
      猜你喜欢
      <!-- <i class="icon-right"></i> -->
    </h2>
    <ul class="section4-list">
      <li v-for="(k,i) in section4.list">
        <a :href="k.shopUrl[i]" :key="k.id">
          <img v-lazy="k.imgPath[i]">
          <p>{{k.intro}}</p>
          <div class="describe">
            <h3>{{k.title[i]}}</h3>
            <span class="price">￥<i>{{k.price}}</i></span>
            <span class="lookNub">{{k.lookNub}}人浏览</span>
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          </div>
        </a>
        
      </li>

    </ul>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
  export default {
    props:['section4']
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section4 {
    width: 100%;
    overflow: hidden;
    .section4-title {
      background-color: #ffffff;
      text-align: center;
      padding: 3vw 0;
      .fz(font-size, 38);
      color: rgb(238, 98, 63);
      font-weight: bold;
      position: relative;
    }

    .section4-list {
      width: 100%;
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      overflow: hidden;
      li {
        width: 50%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding:0 1vw;
        margin: 1vw 0 ;
        >a {
          display: block;
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 100%;
          }
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            top: 41.5vw;
            left: 0;
            text-align: center;
            width: 100%;
            background-image: url(http://p4adg9kfz.bkt.clouddn.com//index/true66.png);
            color: #f1e7b8;
            font-size: 3.5vw;
            background-size: 100%;
            background-position: 50%;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding:2vw 0vw .8vw;
          }
          .describe{
            background: #fafaf9;
            padding-left: 3vw; 
            >h3 {
              padding-top: 4vw;
              .fz(font-size,28);
            }
            >.price {
              display: inline-block;
              padding-bottom: 1vw;
              color: red;
              .fz(font-size,25);            
              i {
                vertical-align: middle;
                .fz(font-size,36);            
              }
            }
            >.lookNub {
              padding-left: 2vw;
              color: rgb(168, 163, 163);
              .fz(font-size,22);
            }
            >i {
              float: right;
              margin: 1.2vw 2vw;
              .fz(font-size,24);
            }
          }
        }
        
        
      }
    }

    // .section4-banner {
    //   width: 100%;
    //   display: block;
    //   img {
    //     display: block;
    //     width: 100%;
    //   }
    // }
  }
</style>
