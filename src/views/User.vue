<template lang="html">

  <div class="car">
      <!-- <v-header>
        <h1 slot="title">购物车</h1>
      </v-header> -->
      <header class="header" @click="_loginSituation">
          <div class="header-icon">
            <img  :src="user_photo" alt="">
          </div>
          <span class="noLogin" v-if="!isLogin">登录/注册</span>
          <div class="loginSuccess" v-else> 
            <span class="userId">{{user_name}}</span></br>
            <span>欢迎您</span>
            <div class="vipLogo">
              <i class="fa fa-diamond diamond" aria-hidden="true"></i>
              <span>高级会员</span>
            </div>
            
          </div>
      </header>
      <div class="main">
          <!-- <router-link class="my-indent" :to="{ name: ''}">
              <span class="my-indent-left">我的订单</span>
              <div class="my-indent-right">
                  <span>全部订单</span>
                  <i class="icon-go"></i>
              </div>
          </router-link> -->

          <section class="my-pay">
              <router-link :to="{ name: ''}" class="pays">
                  <span class="fa fa-star fa1"></span>                
                  <p>收藏</p>
              </router-link>
              <router-link :to="{ name: ''}" class="pays">
                  <span class="fa fa-clock-o fa2"></span>
                  <p>历史</p>
              </router-link>
              <router-link :to="{ name: ''}" class="pays">
                  <span class="fa fa-moon-o fa-rotate-270 fa3"></span>
                  <p>夜间</p>
              </router-link>

          </section>

          <section class="my-vip">
              <div class="line">            
            
            <!-- <router-link class="my-vip-top ho" :to="{ name: ''}" > -->
              <!-- <div class="my-vip-top-div"> -->
                <span class="icon2-vip fa-icon-left">
                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span>
                </span>
              <!-- </div> -->
              <!-- <p> -->
                <a>会员福利</a><i class="icon-go"></i>
              <!-- </p> -->
            <!-- </router-link> -->
            <!-- <router-link class="my-vip-bottom ho" :to="{ name: ''}"> -->
              </div>
              
              <!-- <div> -->
              <div class="line">            
                
                <span class="fa fa-book fa-lg fa-icon-left"></span>
              <!-- </div> -->
              <!-- <p> -->
                <a>球探必备</a><i class="icon-go"></i>
              <!-- </p> -->
            <!-- </router-link> -->
              </div>
            
          </section>

          <section class="my-service">
              <div class="line">            
            
              <!-- <router-link class="my-service-top" :to="{ name: ''}"> -->
                  <!-- <div> -->
                    <span class="icon2-service fa-icon-left">
                        <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                    </span>
                  <!-- </div> -->
                  <!-- <p> -->
                    <a>服务中心</a><i class="icon-go"></i>
                  <!-- </p> -->
              <!-- </router-link> -->
              </div>
              
              <div class="line">             
              
              <!-- <router-link class="my-service-bottom" :to="{ name: ''}"> -->
                  <!-- <div> -->
                    <span class="fa fa-files-o fa4 fa-icon-left"></span>
                  <!-- </div> -->
                  <!-- <p> -->
                    <a>优惠券</a><i class="icon-go"></i>
                  <!-- </p> -->
              <!-- </router-link> -->
              </div>
              
          </section>

          <section class="my-settle">
              <div class="line">            
              <!-- <router-link :to="{ name: ''}" class="my-settle-top"> -->
                  <!-- <div> -->
                    <span class="fa fa-gavel fa5 fa-icon-left"></span>
                  <!-- </div> -->
                  <!-- <p> -->
                    <a>装备鉴定</a><i class="icon-go"></i>
                  <!-- </p> -->
              <!-- </router-link> -->
              </div>              
              <div class="line" @click="_goSetting">
                <!-- <router-link :to="{ name: '搜索页'}" class=""> -->
                  <!-- <div> -->
                    <span class="fa fa-cog fa-lg fa6 fa-icon-left"></span>
                  <!-- </div> -->
                  <!-- <p> -->
                    <a href="">设置</a><i class="icon-go"></i>
                  <!-- </p> -->
                </router-link>
              </div>
          </section>

      </div>
      <!-- <v-baseline></v-baseline> -->
      <v-footer></v-footer>
    </div>
</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Header from '@/common/_header.vue'
  import Baseline from '@/common/_baseline.vue'
  import Footer from '@/common/_footer.vue'

  export default {
    data() {
      let user = JSON.parse(window.localStorage.getItem("user"));
      return {
        isLogin: parseInt(user.token),
        // uesr_phone: user.uesr_phone,
        user_name: user.user_name,
        user_photo: user.user_photo  || "http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg"
      }
    },
    // computed: {
    //     isLogin(){
    //       // return this.$store.state.login.token
    //       return JSON.parse(window.localStorage.getItem("user")).token
    //     }
    // },
    components: {
      'v-header':Header,
      'v-baseline': Baseline,
      'v-footer': Footer
    },
    methods:{
      _goSetting() {
        window.location.href="https://cyl66466.github.io/QTSetUp/setting.html";
      },
      _loginSituation() {
        if(!this.isLogin){
          this.$router.push({name:'登录页'})
        }else{
          this.$router.push({name:'退出登录页'})          
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/index/style.css';
  @import '../assets/user/icon/carstyle.css';


  .car {
    width: 100%;
    padding-bottom: 14vw;
    // background-color: #F8FCFF;
    .header {
      width: 100%;
      height: 16vw;
      // line-height: 16vw;
      background: url(../../static/carbg.png) center 0 #f37d0f;
      background-size: auto 100%;
      padding: 3.2vw 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .header-icon {
        // position: absolute;
        // left: 50%;
        // top: 6.5%;
        // transform: translateX(-50%);
        margin-left: 5vw;
        width: 14vw;
        height: 14vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 50%;
        background-image: url(http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg);
        background-size: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;            
        } 
      }
      .noLogin {
        margin-left: 3.2vw;
        .fz(font-size, 30);
        color: #ffffff;
        letter-spacing: .2vw;
      }
      .loginSuccess {
        // background: red;
        color: white;
        font-size: 3.5vw;
        margin-left: 8vw;
        .userId {
          display: inline-block;
          margin: 1vw 0;
        }
        .vipLogo {
          margin-left: 4vw;
          width: 24vw;
          display: inline-block;
          border-radius: 5vw;
          text-align: center;
          vertical-align: middle;
          // background: pink;
          border: 1px solid white;
          .diamond {
            // display: block;
            // width: 1vw;
            // height: vw;
            color: rgb(219, 235, 240);
          }
        }
      }
    }
    .main {
      width: 100%;
      // .my-indent {
      //   width: 100%;
      //   display: block;
      //   -webkit-box-sizing: border-box;
      //   box-sizing: border-box;
      //   color: #333;
      //   display: -webkit-box;
      //   display: -ms-flexbox;
      //   display: flex;
      //   -webkit-box-pack: justify;
      //   -ms-flex-pack: justify;
      //   justify-content: space-between;
      //   padding: 0 5vw;
      //   height: 15vw;
      //   line-height: 15vw;
      //   background-color: #fff;
      //   .bd();
      //   &:active {
      //     background-color: rgb(224, 227, 230)
      //   }

      //   .my-indent-right {
      //     span {
      //       display: inline-block;
      //       .fz(font-size, 28);
      //       color: rgba(0, 0, 0, .4);
      //       position: relative;
      //     }
      //     i {
      //       position: relative;
      //       top: .8vw;
      //     }
      //   }
      // }

      .my-pay {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        background-color: #fff;
        .bd();

        >a {
          display: block;
          width: 33.33%;
          color: #999;
          text-align: center;
          &:active{
            background: rgb(224, 227, 230);
          }
          >span {
            .fz(font-size, 50);
            margin-top: 2.3vw;
            display: block;
            text-align: center;
          }

          p {
            padding: 2.3vw 0;
            text-align: center;
          }
        }
      }

      .my-vip,.my-service,.my-settle {
        width: 100%;
        .mt();
        .bd();
        .bt();
        >a {
          background-color: #fff;
          display: block;
          width: 100%;
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 15vw;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          padding: 0 6vw;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          &:active {
            background-color: rgb(224, 227, 230);
          }
          >div {
            -ms-flex: 2;
            -webkit-box-flex: 2;
                    flex: 2;
                    padding-top: 1.3vw;
          }

          .my-vip-top-div {
            padding-top: 0;
          }
          >p {
            -ms-flex: 10;
            -webkit-box-flex: 10;
                    flex: 10;
            position: relative;

            &:active {
              background-color: rgb(224, 227, 230);
            }

            i {
              position: absolute;
              right: 0;
              top: .4vw;
            }
          }
        }

      }
    }
  }
  .line {
    padding: 4vw 6vw;
    &:active {
      background: rgb(231, 231, 231);
    }
    .fa-icon-left {
      display: inline-block;
      width: 2vw;
      height: 2vw;
    }
    a {
      margin-left: 10vw;
    }
    .icon-go {
      float: right;
    }
  }
  /*图标大小不一，重新定义*/
  .icon-go {
    .fz(font-size, 36);
    &::before {
      color: #aba8a8;
    }
  }

  [class^="icon2-"],
  [class*=" icon2-"] {
    .fz(font-size, 50);
  }

  .icon2-service {
    .fz(font-size, 34);
  }

  .fa1 {
    color: #FFB100;
  }
  .fa2 {
    color: rgb(233, 156, 147);
  }
  .fa3 {
    color: rgb(147, 177, 233);
  }
  .fa4 {
    color: rgb(223, 185, 104);
  }
  .fa5 {
    color: rgb(187, 141, 55);
  }
  .fa6 {
    color: rgb(243, 170, 12);
  }
</style>
