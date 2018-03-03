
<template lang="html">
  <div class="release">
    <div class="header">
        <span class="cancel" @click="_goCancel" >取消</span>
        <h1>发布</h1>
    </div>
    <div class="content">
        <textarea v-model="text" placeholder='分享你的球事 ...'>
        </textarea>
        <div class='content-img'>
            <img :src="imgUrl" alt="" v-if="imgUrl">
            <div class='add-img'>
                <i class="fa fa-camera fa-3x" aria-hidden="true"></i>
                <input type='file' class="selFile" @change="_changImg($event)" accept="image/*" multiple="">                
            </div>
        </div>
        <div class="permissions">
            <div class="map">
                <i class="fa fa-map-marker" :class="showLocation && 'setColor'" aria-hidden="true"></i>
                <div @click="_getLocation">{{showLocation ? location : '获取地址'}}</div>
            </div>
            <div class="see">
                <i class="fa fa-eye i-see" :class="isPublic && 'setColor'" aria-hidden="true"></i>
                <div @click="_setPublic">{{isPublic ? '私密' : '公开'}}</div>
            </div>            
        </div>
    </div>
    <div class="btn"  @click="_goRelease">
        <span>发布</span>
        <img src="http://p4adg9kfz.bkt.clouddn.com//news/football.png" alt="" :class="isRotate && 'rotate'" >
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'

export default {
  
  data() {
    return {
        isRotate: false,
        text: '',
        imgUrl: '',
        location: '',
        showLocation: false,
        isPublic: false
    }
  },
  mounted: function () {
    document.body.addEventListener('touchstart', function () {})
  },
  methods: {
    //点击取消
    _goCancel() {
        this.$router.push({name:'言球页'})
    },
    // 信息验证
    _checkData() {
        if(!this.text){
            Toast("还没有分享你的球事呢！");
            return ;
        }else if(!this.imgUrl){
            Toast("请添加一张照片！");
            return ;
        }
        return true;
    },
    //判断设备是否支持地理定位。向参数showPosition中规定的函数返回一个coordinates对象，
    // getCurrentPosition() 方法的第二个参数showError用于处理错误，它规定当获取用户位置失败时运行的函数
    _getLocation() {
        if(!this.showLocation){
            Toast('正在获取定位...');            
        }
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._showPosition,this._showError);
        }else{
            Toast("设备不支持地理定位!");
        }
    },

    //获取地理定位
    _showPosition(position) {
        // 纬度:position.coords.latitude  经度:position.coords.longitude)
        let latlon = position.coords.latitude+','+position.coords.longitude;
        
        //谷歌地图
        let urls = 'http://maps.google.cn/maps/api/geocode/json?latlng='+latlon+'&language=CN';
        axios({
            method: 'get',
            url: urls,
        }).then((res) => {
            if(res.data.status== 'OK'){             
                let street = res.data.results[0].address_components[0].long_name,                                       
                    county = res.data.results[0].address_components[1].long_name,                              
                    city = res.data.results[0].address_components[2].long_name;                                       
                this.location = city + county + street;
                this.showLocation = !this.showLocation;                                       
            }
        }).catch((error) => {
            Toast("获取失败")                                
        });
    },

    //地理定位错误处理
    _showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                Toast("定位失败,用户已拒绝请求定位!");
                break;
            case error.POSITION_UNAVAILABLE:
                Toast("定位失败,位置信息是不可用!");
                break;
            case error.TIMEOUT:
                Toast("定位失败,请求获取用户位置超时!");
                break;
            case error.UNKNOWN_ERROR:
                Toast("定位失败,定位系统失效!");
                break;
        }
    },

    // 设置是否公开
    _setPublic() {
        this.isPublic = !this.isPublic;
    },

    // 获取当前时间 xxxx-xx-xx格式
    _getTime() {
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let currentdate = year + '-' + month + '-' + strDate;
        console.log(currentdate);
        return currentdate;
    },
    // 点击分布
    _goRelease() {
        let that = this;
        // 通过控制足球旋转的参数isRotate来防止多次点击
        if(this._checkData() && !this.isRotate){
            let user = JSON.parse(window.localStorage.getItem("user"));
            let news={
                user_photo: user.user_photo,
                user_name: user.user_name,
                news_time: this._getTime(),
                news_text: this.text,
                news_img: this.imgUrl,
                news_location: this.location,
                news_love: 0,
                news_comments: 0
            };
            // console.log(news);
            this.isRotate = true;
            this.$store.commit('ADD_news',news);
            setTimeout(() =>{
                that.$router.push({name: '言球页'})                
            },1000)
            setTimeout(() =>{
                that.isRotate = false
            },3000)
        }
        
    },
    //添加图片
    _changImg(e) {
        for (let i = 0; i < e.target.files.length; i++) {    
            let file = e.target.files.item(i);    
            if (!(/^image\/.*$/i.test(file.type))) {    
                continue; //不是图片 就跳出这一次循环    
            }    
            var url = null;
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            this.imgUrl = url;
        }
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.release {
    position: relative;
    min-height: 100%;
    overflow: hidden;
    background-image: url(http://pic.qiantucdn.com/58pic/26/25/09/58ca3657bbdc7_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/1024x768a0a0);
    background-size: 100%;
    .header { 
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 13.5vw;
        line-height: 13.5vw;
        border-bottom: 1px solid rgb(88, 175, 88); 
        // background: -webkit-linear-gradient(left,rgb(231, 205, 120),rgb(247, 139, 38));
        // background: linear-gradient( left,rgb(228, 203, 122),rgb(247, 139, 38));
        // background: rgb(252, 207, 85);
        .cancel {
            margin-left: 4vw;
            display: inline-block;
            font-size: 4.2vw;      
            color: rgb(255, 255, 255);
            &:active {
                color: #ccc;
            }
        }
        h1 {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            font-size: 5.5vw;
            color: rgb(252, 247, 247);
        }
    }
    .content {
        position: absolute;
        left: 50%;
        top: 15vw;
        transform: translateX(-50%);
        box-sizing: border-box;
        width: 90%;
        height: 88vw;
        margin: 0 auto;
        padding: 5vw;
        border-radius: 5vw;
        background-color: #fff;
        z-index: 200;        
        textarea {
            width: 98%;
            height: 34vw;
            border: none;
            outline:none;
            font-size: 4.5vw;
        }
        textarea::-webkit-input-placeholder{
            color:rgb(223, 215, 215);
            font-size: 4.5vw;
            vertical-align: top;
        }
        .content-img {
            // position: relative;
            display: flex;
            width: 100%;
            margin-top: 3vw;
            // height: 30vw;
            // background-color: red;
            img {
                object-fit: cover;
                width: 28vw;
                height: 28vw;
                margin-right: 3vw;
            }
            .add-img {
                position: relative;
                box-sizing: border-box;
                width: 28vw;
                height: 28vw;
                // background-color: rgb(235, 220, 19);
                border: 1px solid rgb(211, 206, 182);
                i {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    color: rgb(156, 155, 151);
                }
                .selFile {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: translateX(-50%);            
                    width: 100%;
                    height: 100%;
                    // border-radius: 50%;
                    // background-color: red;
                    opacity: 0;
                    z-index: 10;
                }
            }
            
        }
        .permissions {
            display: flex;
            justify-content: space-between;
            margin-top: 6vw; 
            line-height: 5vw;
            .map {
                display: flex;
                height: 6vw;
                line-height: 6vw;
                i {
                    padding-left: 1vw; 
                    margin-right: 2vw;
                    font-size: 6vw; 
                }
                
            }
            .see {
                display: flex;
                height: 6vw;
                line-height: 6.5vw;
                i {
                    font-size: 6vw;                     
                    margin-right: 1.5vw; 
                }            
            }
            // 切换颜色
            .setColor {
                color: rgb(245, 150, 9)
            }
        }
    }
    .btn {
        position: absolute;
        left: 50%;
        bottom: 10%;
        transform: translateX(-50%);
        width: 26vw;
        height: 26vw;
        line-height: 26vw;
        text-align: center;
        // margin: 30vw auto 10vw;
        font-size: 5vw;
        font-weight: bold;
        color: rgb(2, 2, 2);
        // background-image: url(http://p4adg9kfz.bkt.clouddn.com//news/football.png);
        background-size: 100%;
        z-index: 100;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 200;
        }
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .rotate {
            animation:myfirst 3s linear;
            -moz-animation:myfirst 3s linear;
            -o-animation:myfirst 3s linear;
            -webkit-animation:myfirst 3s linear; /* Safari and Chrome */
        }
            
    }
}
  
@keyframes myfirst
    {
        0%   {transform:rotate(0deg)}
        8%  {transform:rotate(90deg)}
        16%  {transform:rotate(180deg)}
        24% {transform:rotate(270deg)}
        32% {transform:rotate(360deg)}
        40%   {transform:rotate(450deg)}
        48%  {transform:rotate(540deg)}
        56%  {transform:rotate(630deg)}
        64% {transform:rotate(720deg)}
        72% {transform:rotate(810deg)}
        80% {transform:rotate(900deg)}
        88% {transform:rotate(990deg)}
        100% {transform:rotate(1080deg)}
    }
@-webkit-keyframes myfirst
    {
        0%   {-webkit-transform:rotate(0deg)}
        8%  {-webkit-transform:rotate(90deg)}
        16%  {-webkit-transform:rotate(180deg)}
        24% {-webkit-transform:rotate(270deg)}
        32% {-webkit-transform:rotate(360deg)}
        40%   {-webkit-transform:rotate(450deg)}
        48%  {-webkit-transform:rotate(540deg)}
        56%  {-webkit-transform:rotate(630deg)}
        64% {-webkit-transform:rotate(720deg)}
        72% {-webkit-transform:rotate(810deg)}
        80% {-webkit-transform:rotate(900deg)}
        88% {-webkit-transform:rotate(990deg)}
        100% {-webkit-transform:rotate(1080deg)}
    }
@-moz-keyframes myfirst
    {
        0%   {-moz-transform:rotate(0deg)}
        8%  {-moz-transform:rotate(90deg)}
        16%  {-moz-transform:rotate(180deg)}
        24% {-moz-transform:rotate(270deg)}
        32% {-moz-transform:rotate(360deg)}
        40%   {-moz-transform:rotate(450deg)}
        48%  {-moz-transform:rotate(540deg)}
        56%  {-moz-transform:rotate(630deg)}
        64% {-moz-transform:rotate(720deg)}
        72% {-moz-transform:rotate(810deg)}
        80% {-moz-transform:rotate(900deg)}
        88% {-moz-transform:rotate(990deg)}
        100% {-moz-transform:rotate(1080deg)}
    }
@-o-keyframes myfirst
    {
        0%   {-o-transform:rotate(0deg)}
        8%  {-o-transform:rotate(90deg)}
        16%  {-o-transform:rotate(180deg)}
        24% {-o-transform:rotate(270deg)}
        32% {-o-transform:rotate(360deg)}
        40%   {-o-transform:rotate(450deg)}
        48%  {-o-transform:rotate(540deg)}
        56%  {-o-transform:rotate(630deg)}
        64% {-o-transform:rotate(720deg)}
        72% {-o-transform:rotate(810deg)}
        80% {-o-transform:rotate(900deg)}
        88% {-o-transform:rotate(990deg)}
        100% {-o-transform:rotate(1080deg)}
    }
</style>
