<template lang="html">
  <div class="footballCircle">
    <v-header>
        <h1 slot="title">足球圈</h1>
    </v-header>
    <div class="content">
        <ul class="tab">
            <li v-for="(k,i) in tab">
                <span :class=" i==select && 'sel'" @click="checkTab(i)">{{k}}</span>
            </li>
        </ul>
        <v-swiper></v-swiper>
        <div class="activity">
            <h1>火热活动</h1>
            <ul>
                <li v-for="(k,i) in tabImg">
                    <a :href="k.swiperHref">
                        <img :src="k.swiperUrl" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <h1>绿茵头条</h1>
        <ul class="news">
            <li v-for="(k,i) in newsList">
                <div class="news-content">
                    <div class="news-left">
                        <img :src="k.user_photo" alt="">
                    </div>
                    <div class="news-right">
                        <h1>{{k.user_name}}</h1>
                        <h6>{{k.news_time}}</h6>
                        <div class="news-text">
                            {{k.news_text}}
                        </div>
                        <img v-lazy="k.news_img" alt="" class="news-img">
                        <div class="map" v-if="k.news_location">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>{{k.news_location}}</span>
                        </div>
                        <div class="news-data">
                            <span  @click="giveLove(i)">
                                <i class="fa fa-thumbs-up" :class="{'i-love': loveList.indexOf(i) != -1 }"></i>
                                <span class="love">{{k.news_love}}</span>
                            </span>
                            <span @click="goComment">
                                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                <span class="comments">{{k.news_comments}}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>
    <div class="release" @click="goRelease">
        <i class="fa fa-camera camera" aria-hidden="true"></i>
    </div>
    <v-baseline></v-baseline>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
import axios from 'axios'
import Footer from '@/common/_footer.vue'
import Swiper from '@/components/sayball/swiper.vue'
import Baseline from '@/common/_baseline.vue'
import { Lazyload } from 'mint-ui';
export default {
  
  data() {
    let tab = ['关注','推荐','热点'],
        tabImg = [
            {
                swiperHref: "http://m.shihuo.cn/column/137.html",
                swiperUrl: "http://shihuo.hupucdn.com/appZone/201710/3015/bfd899e7a6d19538709c8aedf7f85a25.jpg"
            },
            {
                swiperHref: "http://m.shihuo.cn/column/224.html",
                swiperUrl: "http://shihuo.hupucdn.com/column/201801/1214/3ad43458675c2442baac891d6974c49a.jpg"
            },
            {
                swiperHref: "http://m.shihuo.cn/article/detail/8693.html",
                swiperUrl: "http://shihuo.hupucdn.com/appZone/201802/2610/240e72ae82b2a828b3fa9b133b68db96.jpg"
            },
        ];
    return {
        tab,
        select : 1,
        tabImg,
        newsList : this.$store.state.sayBall.newsList,
        loveList : this.$store.state.sayBall.loveList,
    }
  },
  components:{
    'v-header':Header,
    'v-footer':Footer,
    'v-swiper': Swiper,
    'v-baseline': Baseline,
  },
  mounted: function () {
    document.body.addEventListener('touchstart', function () {})
  },
  methods: {
    checkTab(i) {
        this.select = i;
    },
    giveLove(i) {
        let index = this.loveList.indexOf(i)
        if( index != -1){
        this.$store.commit('CANCEL_love',{loveSub : index,newSub : i });              
        }else{
        this.$store.commit('ADD_love',i);
        }
    },
    goComment() {
        Toast('球探君将持续跟进，敬请期待！^_^');            
    },
    goRelease() {
        let user = JSON.parse(window.localStorage.getItem("user"));
        if(parseInt(user.token)){
            this.$router.push({name:'发布页'})
        }else{
            Toast('登录后即可发布！');                        
            this.$router.push({name:'登录页'})
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
  .footballCircle { 
    position: relative;
    box-sizing: border-box;
    padding: 13vw 0 16vw;
    .content {
        .tab {
            display: flex;
            justify-content: space-around;
            margin-bottom: 2vw;
            li{
                width: 33%;
                text-align: center;
                
                span {
                    display: inline-block;
                    padding: 3vw 0 ;                    
                    width: 100%;
                    &:active {
                        background-color: rgb(252, 234, 185);  
                    }
                }
            }
            .sel {
                border-bottom: 2px solid rgb(243, 199, 6);
            }
        }
        .activity {
            box-sizing: border-box;
            margin: 3vw 0;
            border: 1px solid rgb(241, 240, 240);
            h1 {
                padding: 1.5vw 2vw;
                color: rgb(85, 81, 81);
                font-size: 4.5vw;
                font-weight: bold;
                font-family: "NSimSun";
            }
            ul{
                display: flex;
                justify-content: space-around;
                margin-bottom: 2vw;
                li{
                    width: 32%;
                    text-align: center;
                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 20vw;
                    }
                }
            }
        }
        >h1 {
            padding: 2.5vw 0;
            color: rgb(245, 231, 197);
            letter-spacing: 1.5vw;
            background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1321187271,3355669765&fm=27&gp=0.jpg);
            font-size: 5vw;
            text-align: center;
        }
        .news {
            // display: flex;
            // justify-content: space-around;
            margin-bottom: 2vw;
            li{
                padding: 3vw;
                border-bottom: 1px solid rgb(241, 238, 238);
                .news-content{  
                    display: flex;
                    .news-left {
                        // object-fit: contain;
                        width: 12vw;
                        height: 12vw;
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
                    .news-right {
                        width: 87%;
                        padding: 0 2vw;
                        h1 {
                            color: rgb(248, 184, 9);
                            font-size: 4.2vw;
                            margin-bottom: .5vw;
                        }
                        h6 {
                            color: rgb(158, 156, 156);
                            font-size: 3.4vw;                            
                        }
                        .news-text {
                            padding: 2vw 0; 
                            font-size: 4vw;
                            font-weight: bold;
                            color: rgb(90, 88, 88);                            
                        }
                        .news-img {
                            object-fit: cover ;
                            // width: 100%;
                            height: 35vw;
                            margin-bottom: 2.5vw;
                        }
                        .map {
                            display: flex;
                            height: 6vw;
                            // background-color: red;
                            i {
                                color: rgb(170, 167, 167);
                                font-size: 5vw;
                                padding-top: .3vw; 
                            }
                            span {
                                margin-left: 1.5vw;
                                font-size: 3.8vw;
                            }
                        }
                        .news-data {
                            width: 100%;
                            padding: 2vw 0;
                            i {
                                font-size: 5vw;                                
                            }
                            .i-love {
                                color: rgb(248, 184, 9);
                            }
                            .love {
                                margin-right: 3vw;
                            }
                        }
                    }
                }
                
            }
        }
    }
    .release {
        position: fixed;
        right: 5.5%;
        bottom: 12.5%;
        width: 14vw;
        height: 14vw;
        // line-height: 5vw;
        // text-align: center;
        border-radius: 50%;
        background-color: rgb(245, 179, 58);
        &:active {
            background-color: rgb(252, 147, 9);
        }
        .camera {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            font-size: 6vw;
            color: #fff;
        }
    }
  }
</style>
