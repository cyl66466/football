<template lang="html">
  <div class="search">
    <div class="search-header">
      <div class="header-left"> 
        <span class="icon-go" @click="$router.go(-1)"></span>
        <input type="text" placeholder="寻找宝贝，店铺" v-model="searchContent"></input>
        <i class="fa fa-search fa-lg search-iocn" @click="gotoShop(searchContent)"></i>
      </div>
    </div>
    <div class="hot-search">
      <h6>热门搜索</h6>
      <ul>
        <li v-for="(k,i) in hotSearchData">
          <a  :href="k.searchurl">{{k.text}}</a>
        </li>
      </ul>
    </div>
    <div class="history-search">
      <h6>历史搜索</h6>
      <ul>
        <li v-for="(k,i) in historySearchData" @click="gotoShop(k)">
          {{k}}
        </li>
      </ul>
      <div v-if=" historySearchData.length > 0 " class="empty-search" @click="emptyRecord">
          <i class="fa fa-trash-o"></i>
          <span>清空历史搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      searchContent: "",
      hotSearchData: [
        {
          text: "秒杀",
          searchurl: "http://www.dwntme.com/h.ZYKHMjs"
        },
        {
          text: "恒大",
          searchurl: "http://www.dwntme.com/h.ZYKDAKV"
        },
        {
          text: "刺客",
          searchurl: "http://www.dwntme.com/h.ZYKxl7m"
        },
        {
          text: "传奇",
          searchurl: "http://www.dwntme.com/h.ZYKB8Fo"
        },
        {
          text: "国家队",
          searchurl: "http://www.dwntme.com/h.ZYKyB4r"
        },
        {
          text: "梅西",
          searchurl: "http://www.dwntme.com/h.ZYKyoFt"
        },
        {
          text: "新百伦",
          searchurl: "http://www.dwntme.com/h.ZYq0YJV"
        },
        {
          text: "球袜",
          searchurl: "http://www.dwntme.com/h.ZYq0JMY"
        },
        {
          text: "训练服",
          searchurl: "http://www.dwntme.com/h.ZYqYnf1"
        },
        {
          text: "曼联",
          searchurl: "http://www.dwntme.com/h.ZYqYDrP"
        },
        {
          text: "巴萨",
          searchurl: "http://www.dwntme.com/h.ZYqYjUV"
        },
        {
          text: "足球",
          searchurl: "http://www.dwntme.com/h.ZYq09Lq"
        },
      ],
      historySearchData: this.$store.state.search.historySearch
    }
  },
  mounted: function () {
    document.body.addEventListener('touchstart', function () {})
  },
  methods: {
    gotoShop (val) {
      if(val){
        let paramUrl="http://redirect.simba.taobao.com/rd?f=http%3A%2F%2Fai.taobao.com%2Fsearch%2Findex.htm%3Fkey%3D" + val + "%26pid%3Dmm_126522013_37098945_134152551%26unid%3D%26source_id%3Dtdj_search&w=unionapijs&p=mm_10011550_2325296_9002527&b=display_601_0_0_0_0&c=cn&pvid=0_0_0&k=317b874644f98ccc";
        window.location.href = paramUrl;                            
        this.$store.commit('CHANGE_historySearch',val);
      }
    },
    emptyRecord () {

      this.historySearchData = [];
      this.$store.commit('DELETE_historySearch');
    }

  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
  .search-header { 
    box-sizing: border-box;
    width: 100%;
    background: linear-gradient( left,rgb(228, 203, 122),rgb(247, 139, 38));
    padding: 3vw;
    .icon-go {
      float: left;
      margin-top: .5vw;
      display: inline-block;
      .fz(font-size,46);
      transform: rotate(-180deg);
      &::before {
        color:#333;
      }
    }
    input {
      box-sizing: border-box;
      width: 72vw;
      height: 8vw;
      // line-height: 1vw;
      font-size: 4.6vw;
      margin-left: 3vw;
      padding: 0 0 0 4.5vw; 
      letter-spacing: .5px;
      border-radius: 1vw;
    }
    i {
      display: inline-block;
      float:right;
      margin-right: 2vw; 
      margin-top: 1.7vw;
      color: #fff;
      &:active {
            color: rgb(243, 227, 222);                
      }
    }
  }
  .hot-search {
    box-sizing: border-box;
    width: 92%;
    padding: 4.5vw;
    padding-bottom: 2vw;
    margin: 0 auto;
    margin-top: 6vw;
    background: rgb(248, 246, 246);
    border-radius: 5%;
    ul {
      margin-top: 4vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      background: rgb(248, 246, 246);
      
      li{
        float: left;
        width: 18.5vw;
        height: 8.5vw;
        font-size: 3.6vw;
        border-radius: 9vw;
        line-height: 8.5vw;
        text-align: center;
        margin-bottom: 4vw;
        background: rgb(253, 253, 253);
      }
    }
  }
  h6 {
      font-size: 4vw;    
      color: rgb(189, 188, 188);
  }
  .history-search {
    box-sizing: border-box;
    width: 92%;
    padding-bottom: 2vw;
    margin: 0 auto;
    h6{
      padding: 4.5vw 4.5vw 1.5vw 4.5vw;      
    }
    ul {
      li {
        box-sizing: border-box;
        height: 10vw;
        line-height: 10vw;
        border-top: 1px solid rgb(245, 242, 242); 
        padding-left: 4.5vw;

        font-size: 4vw;
        &:active {
            background: rgb(245, 243, 242);                
        }        
      }
    }
    .empty-search {
      width: 52%;
      height: 11vw;
      line-height: 11vw;
      margin: 0 auto;
      margin-top: 10vw;
      text-align: center;
      color: #fff;
      border-radius: 6vw;
      background: rgb(238, 190, 101);
      &:active {
        background: linear-gradient(to right bottom, #f59921 20%,rgb(231, 205, 120) 60%);      
      }
    }
  }
</style>
