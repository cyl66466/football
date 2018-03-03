<template lang="html">
  <aside class="aside" v-if="datas">
    <ul>
      <li v-for="(k,i) in datas.aside" @click='changeTabIndex(i)'>
        <i class="fa fa-twitter" aria-hidden="true" v-if="i==tabIndex"></i>
        <router-link :to="{path:'/category/'+k.partenTitle}" :class='{active:i==tabIndex}' >{{k.partenTitle}}</router-link>
      </li>
    </ul>

  </aside>
</template>

<script>
  export default {
    props:['datas'],

    computed:{
      tabIndex(){
        return this.$store.state.category.tabIndex
      }
    },
    methods:{
      changeTabIndex(i) {
         this.$store.commit('CHANGE_TABINDEX',i)
      }
    },
  }
</script>

<style lang="less" scoped>
  .aside {
    // flex: 2.5;
    width: 29vw;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    > ul {
      height: 100%;
      width: 100%;
      padding: 13vw 0 29vw; 
      li {
        position: relative;
        text-align: center;
        // background-color: rgb(220, 235, 245);
          // background-color: rgb(248, 189, 72);
            background: -webkit-linear-gradient(top,rgb(231, 206, 123),rgb(247, 139, 38));
            background: linear-gradient( top,rgb(231, 205, 120),rgb(247, 139, 38));
        height: 16vw;
        i {
          position: absolute;
          top:50%;
          left: .5vw;
          transform: translateY(-50%);
          color: #FFAA00;
          z-index: 8000;
        }       
        a {
          // width: 100%;
          // height: 100%;
          display: block;
          padding: 4.5vw 2vw;
          position: relative;
          font-size: 4.2vw;
        }
        .active {
          // position: relative;
          font-size: 5.5vew;
          color: #FFAA00;
          background: #fff;
          // &::before {
          //   width: 0;
          //   height: 0;
          //   content: "";
          //   position: absolute;
          //   left: 0;
          //   top: 50%;
          //   transform: translateY(-50%);
          //   border-color: transparent transparent transparent #FFAA00;;
          //   border-style: solid;
          //   border-width: 2.5vw;
          // }
        }
      }
    }
  }
</style>
