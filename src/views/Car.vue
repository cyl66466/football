<template lang="html">
    <div>
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">购物车</h1>
      </v-header>
      <div class="car">
        <!-- 根据购物车是否有商品,是否登录加载不同的组件 -->
        <v-nothing v-if="!count || !isLogin"></v-nothing>        
        <v-something v-else></v-something>
        <v-footer></v-footer>
        <v-checkout></v-checkout>
      </div>
    </div>
    
</template>

<script>
import Header from '@/common/_header.vue'
import Nothing from '@/components/car/nothing.vue'
import Something from '@/components/car/something.vue'
import Footer from '@/common/_footer.vue'   
import Checkout from '@/components/car/footer.vue'

export default {
  components:{
    'v-header':Header,
    'v-nothing':Nothing,
    'v-something':Something,
    'v-footer':Footer,
    'v-checkout':Checkout
  },
  computed:{
    count() {
      return this.$store.state.detail.count
    },
    isLogin() {
      return  parseInt(JSON.parse(window.localStorage.getItem("user")).token)
      
    }
  },
  
  mounted(){
    // 防止刷新页面数据为空
    if (this.$store.state.detail.count=="") {

      this.$store.commit('RESET_COUNT');

    }
  }

}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding: 13vw 0 13vw; 
  // padding-bottom: 14vw;
}
</style>
