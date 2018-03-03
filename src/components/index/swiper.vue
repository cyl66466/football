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
            swiperHref: "http://m.tb.cn/h.WG0B9tb",
            swiperUrl: "https://gw.alicdn.com/imgextra/i1/61169695/TB2S0taXFmWBuNjSspdXXbugXXa_!!61169695.jpg_790x10000Q75.jpg_.webp"
          },
          {
            swiperHref: "http://m.tb.cn/h.WG0DoKg",
            swiperUrl: "https://gw.alicdn.com/imgextra/i2/17937675/TB2x4.PXNHI8KJjy1zbXXaxdpXa_!!17937675-0-shop_design.jpg_760x760q50s150.jpg_.webp"
          },
          {
            swiperHref: "http://m.tb.cn/h.WGbXiUZ",
            swiperUrl: "https://gw.alicdn.com/imgextra/i1/757485156/TB2x.dqmBNkpuFjy0FaXXbRCVXa_!!757485156-0-shop_design.jpg_790x10000Q75.jpg_.webp" 
          },
          {
            swiperHref: "http://m.tb.cn/h.WGbbzaX",
            swiperUrl: "https://gw.alicdn.com/imgextra/i4/757485156/TB2MDx3jMMPMeJjy1XdXXasrXXa_!!757485156-0-shop_design.jpg_790x10000Q75.jpg_.webp"
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
