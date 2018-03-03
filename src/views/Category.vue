<template lang="html">
  <div class="wrap">
    <v-header class="header">
      <h1 slot="title">商品分类</h1>
    </v-header>
    <section class="view">
      <v-aside :datas="allData"></v-aside>
      <router-view :datas="allData" class="child-views"></router-view>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>

import Header from '@/common/_header.vue'
import Aside from '@/components/category/aside.vue'
import Footer from '@/common/_footer.vue'   
import category from '@/http/mock.js' //模拟数据
export default {
  components:{
    'v-header':Header,
    'v-aside': Aside,
    'v-footer': Footer     
  },
  data(){
  //   let allData={
  //     aside:[
  //     {
  //       partenTitle:'足球鞋',
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?q=%E8%B6%B3%E7%90%83%E9%9E%8B',
  //       sonTitle:['NIKE','Adidas','Puma','mizuno','新百伦','茵宝','安踏','亚瑟士','李宁','锐克','刺客','传奇','毒蜂','鬼牌','BOMBAX','猎鹰','ACE','X逆天绝杀','Nemeziz','MESSI专属','FUTURE','ONE','EVOPOWER','EVOSPEED','EVOTOUCH','KING','Truora','morelia','无回旋','basara','rebula','MONARCIDA','RYUOU','NEO']
  //     },
  //     {
  //       partenTitle:'国家队',
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=915114205&catTxt=%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%A3%85%E5%A4%87',
  //       sonTitle:['中国','德国','西班牙','法国','英格兰','意大利','葡萄牙','巴西','阿根廷','比利时','日本','韩国','瑞士','荷兰','克罗地亚','塞尔维亚','澳大利亚','波兰']
  //     },
  //     {
  //       partenTitle:'俱乐部',
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=346571626&catTxt=%E6%96%B0%E8%B5%9B%E5%AD%A3%E4%BF%B1%E4%B9%90%E9%83%A8%E8%A3%85%E5%A4%87',
  //       sonTitle:['恒大','巴塞罗那','皇家马德里','曼联','阿森纳','切尔西','曼城','拜仁','多特蒙德','马竞','尤文图斯','AC米兰','国际米兰','罗马','巴黎','申花','国安']
  //     },
  //     {
  //       partenTitle:'世界杯',
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1358024358&catTxt=2018%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A3%85%E5%A4%87',
  //       sonTitle:['吉祥物','比赛用球','宣传海报','钥匙扣','世界杯抱枕','贴纸','围巾']
  //     },
  //     {
  //       partenTitle:'团队球服',
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=439007956&catTxt=%E5%9B%A2%E9%98%9F%E7%90%83%E6%9C%8D',
  //       sonTitle:['团队球服','出场服','球袜','护具']
  //     },
  //     {
  //       partenTitle:'足球生活',
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1120061349&catTxt=%E8%B6%B3%E7%90%83%E7%94%9F%E6%B4%BB%E7%B3%BB%E5%88%97',
  //       sonTitle:['棉服','羽绒服','上衣','裤装','休闲鞋','蜂控鞋带','吸汗毛巾','雨伞','T恤','发带','水杯','围巾','帽子']
  //     },
  //     {
  //       partenTitle:'训练装备',
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1280866757&catTxt=%E7%94%B7%E5%AD%90%E8%AE%AD%E7%BB%83%E8%A3%85%E5%A4%87',
  //       sonTitle:['足球裤','训练衫','紧身衣','收腿裤','护腿板','背心','套头衫','围脖','训练帽']
  //     },
  //     {
  //       partenTitle:'装备包',
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=987598869&catTxt=%E8%A3%85%E5%A4%87%E5%8C%85',
  //       sonTitle:['单肩包','双肩包','手提','收纳袋','球网']
  //     },
  //     {
  //       partenTitle:'足球袜',
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=987598867&catTxt=%E8%B6%B3%E7%90%83%E8%A2%9C',
  //       sonTitle:['短袜','中筒袜','长筒袜','防滑袜','中长袜','训练袜']
  //     },
  //     {
  //       partenTitle:'足球',
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=896741819&catTxt=%E8%B6%B3%E7%90%83',
  //       sonTitle:['NIKE','Adidas','世达','Puma','火车头','5号足球','4号足球','纪念足球','儿童足球']
  //     },
  //     {
  //       partenTitle:'儿童装备',        
  //       allUrl:'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=1035137507&catTxt=%E5%84%BF%E7%AB%A5%E8%A3%85%E5%A4%87',
  //       sonTitle:['球迷服','儿童足鞋','儿童足球','足球套装']
  //     },
  //     {
  //       partenTitle:'其他',        
  //       allUrl:'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=987598868&catTxt=%E6%8A%A4%E5%85%B7%2F%E5%99%A8%E6%9D%90%2F%E9%85%8D%E4%BB%B6',
  //       sonTitle:['穿戴护具','黏贴保护','训练器材','手套','鞋带','后脚跟贴','装备维护','急救药品','奖杯奖牌']
  //     }
  //     ]
  //   };
    return {
      allData:"",
    }
  },
  created(){
    this.$api({
      method:'post',
      url:'/category'
    }).then((res)=>{
      this.allData = res.data;
    }).catch((error)=>{
      console.log(error);
    })
  },
}
</script>

<style lang="less" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    // display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
            flex-flow: column nowrap;

    .view {
      width: 100%;
      height:100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
</style>
