<template lang="html">
    <mt-swipe :auto="4000" v-if='swiperData'>
      <mt-swipe-item v-for="(k,i) in swiperData" :key="i">
        <a :href="k.swiperHref">
          <img :src="k.swiperUrl">
        </a>
      </mt-swipe-item>
    </mt-swipe>

</template>

<script>
export default {

  // props:['swiperData'],
  data() {
      return {
        swiperData:[
          {
            swiperHref: "http://m.shihuo.cn/activity/223.html",
            swiperUrl: "http://shihuo.hupucdn.com/appZone/201801/1210/bddce0a854268c1bc7966ed715426908.jpg"
          },
          {
            swiperHref: "http://m.shihuo.cn/activity/195.html#qk=rmqd&order=",
            swiperUrl: "http://shihuo.hupucdn.com/column/201709/1819/e3fde3eb912b479d4917d759b6c72e14.jpg"
          },
          {
            swiperHref: "http://m.shihuo.cn/article/detail/8728.html#qk=banner&order=2",
            swiperUrl: "http://shihuo.hupucdn.com/appHome/201802/2617/7e4fde3e4ce091f725ab24f56cb42d48.jpg?imageView2/2/w/750/h/380/interlace/1" 
          },
          {
            swiperHref: "http://m.shihuo.cn/column/143.html",
            swiperUrl: "http://shihuo.hupucdn.com/appHome/201712/1417/8ad8388dee124bae992e5504e301ffa7.jpg"
          }
        ]
      }
    },
}
</script>

<style lang="less" scoped>

.mint-swipe {
  width: 100%;
  height:50vw;
  a,img {
    display: block;
    width: 100%;
    height:100%;
  }
}
</style>
