<template lang="html">
  <section class="section1" v-if='section1'>
    <h1 class="section1-title">
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
      热门推荐
      <a href="http://m.tb.cn/h.WGbZf3g"><i class="fa fa-hand-o-right" aria-hidden="true"></i></a>
    </h1>
    <ul class="section1-list">
      <li v-for="k in sectionList1">
        <a :href="k.list1Href">
          <img v-lazy="k.list1Url" alt="">
        </a>
      </li>
    </ul>
  <div  class="section1-banner">
  </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

  export default {
    props:['section1'],
    data() {
      return {
        sectionList1 : [
          {
            list1Href: "https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=562478955587",
            list1Url: "https://gw.alicdn.com/imgextra/i2/757485156/TB2FicAgDvI8KJjSspjXXcgjXXa_!!757485156-0-shop_design.jpg_790x10000Q75.jpg_.webp"
          },
          {
            list1Href: "https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=555284194906",
            list1Url: "https://gw.alicdn.com/imgextra/i3/757485156/TB2ch9hjHsTMeJjSsziXXcdwXXa_!!757485156-0-shop_design.jpg_790x10000Q75.jpg_.webp"
          },
          {
            list1Href: "https://h5.m.taobao.com/awp/core/detail.htm?id=564924758061",
            list1Url: "https://gw.alicdn.com/imgextra/i4/17937675/TB25XRxXSBYBeNjy0FeXXbnmFXa_!!17937675-0-shop_design.jpg_760x760q50s150.jpg_.webp" 
          },
          {
            list1Href: "http://h5.m.taobao.com/awp/core/detail.htm?spm=a1z10.5-c-s.w4002-16594651823.14.26585e97iLN2tw&id=564776884011",
            list1Url: "https://gw.alicdn.com/imgextra/i1/23448432/TB2k47UXbZnBKNjSZFGXXbt3FXa_!!23448432-0-shop_design.jpg_760x760q50s150.jpg_.webp"
          }
        ]
      }
    }
  }

</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section1 {
    // .pt();
    .section1-title {
      .bt();
      background-color: #ffffff;
      text-align: center;
      padding: 3vw 0;
      .fz(font-size, 38);
      color: rgb(238, 98, 63);
      font-weight: bold;
      position: relative;
      a {
        i {
          position: absolute;
          right: 6vw;
          top: 50%;
          .fz(font-size, 36);
          .fz(margin-top,-19);

          // &::before {
            color: rgb(252, 184, 144);
          // }
        }
      }
      
    }

    .section1-list {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      padding:0 2vw 4vw 2vw;
      li {
        width: 50%;
        padding:1vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        a,
        img {
          width: 100%;
          height: 26vw;
          display: block;
        }
      }
    }

    .section1-banner {
      display: block;
      width: 100vw;
      height: 24vw;
      background-image: url(https://gw.alicdn.com/imgextra/i2/23448432/TB26B1WXhGYBuNjy0FnXXX5lpXa_!!23448432-0-shop_design.jpg_760x760q50s150.jpg_.webp);
      background-position:center; 
      background-size: 100% 180%;
      // img {
      //   width: 100%;
      //   height: 24vw;
      //   background: red;
      // }
    }


  }
</style>
