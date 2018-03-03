<template lang="html">
  <div class="outLongin">
    <v-header>
        <h1 slot="title">账户设置</h1>
    </v-header>
    <div class="userData">
        <div class="header-icon">
            <img  :src="user_photo" alt="">
        </div>
        <!-- <div  class="header-icon">
            <span class="icon2-user"></span>
        </div> -->
        <input type='file' class="selFile" @change="changImg($event)" accept="image/*" multiple="">
        <div class="userId">{{uesr_phone}}</div>
    </div>
    <button @click="logout">退出登录</button>
            <!-- <img  :src="user_photo" alt=""> -->
    
    <!-- <img src="http://localhost:1234/outLogin/01bcc70a-684c-4300-8657-677599908b32"> -->
    <!-- <img src="http://pic.qiantucdn.com/58pic/19/71/05/26g58PICxrd_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS40LnBuZw==/align/center" alt=""> -->
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import axios from 'axios'

export default {
  
  data() {
    let user = JSON.parse(window.localStorage.getItem("user"));
    return {
        uesr_phone: user.uesr_phone,
        user_photo: user.user_photo
    }
  },
  components:{
    'v-header':Header
  },
  mounted: function () {
    document.body.addEventListener('touchstart', function () {})
  },
  methods: {
    // 退出登录按钮
    logout() {
        MessageBox.confirm('确定要退出登录吗？','温馨提醒').then(action => {
            Toast('退出登录成功');
            // this.$store.commit('CHANGE_TOKEN',0);
            let storage = window.localStorage;
            let user = {token:0};
            storage.setItem("user",JSON.stringify(user));
            // console.log(JSON.parse(window.localStorage.getItem("user")).token);
            // this.toggle = true;
            this.$router.push({name:'用户页'})
        });
      
    },
    //添加替换头像
    changImg(e) {
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
            this.user_photo = url
            let opt = {
                phone: this.uesr_phone,
                user_photo: this.user_photo,
            }
            let pathname = "repPhoneUrl" ;
            let that = this;
        
            axios.post('http://192.168.1.103:3000/'+pathname,opt)
            .then(function (res) {
                let data = res.data ;
                if(data.user_status === 0){
                    Toast(data.res_text)
                }else {
                    // Toast(data.res_text);
                    // that.$store.commit('CHANGE_TOKEN',1);
                    let user = JSON.parse(window.localStorage.getItem("user"));
                    let storage = window.localStorage;
                    let updataUser = {
                        token : "1",
                        uesr_phone : user.uesr_phone,
                        user_name : user.user_name,
                        user_photo : that.user_photo
                    };
                    storage.setItem("user",JSON.stringify(updataUser));
                    console.log(user.user_photo)
                }
            })
            .catch(function (error) {
                Toast("服务器繁忙")  
                console.log(error)              
            });
            // 实例化FileReader API    
            // let freader = new FileReader();    
            // freader.readAsDataURL(file);    
            // freader.onload = function(e) {    
            //     this.user_photo = e.target.result.replace(/^data:image\/(jpeg|jpg);base64,/, ""); 
            //     console.log(this.user_photo)            
            // }    
        }
    }

  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
// @import '../assets/user/icon/carstyle.css';
  .outLongin { 
    box-sizing: border-box;
    padding-top: 13vw;
    .userData {
        position: relative;
        left: 5%;
        width: 90%;
        height: 60vw;
        margin-top: 5.5vw;
        background-image: url("http://p4adg9kfz.bkt.clouddn.com//outLogin/userBg.jpg");
        background-size: 100%;
        border-radius: 10vw;
        .header-icon {
            position: absolute;
            left: 50%;
            top: 6.5%;
            transform: translateX(-50%);
            width: 14vw;
            height: 14vw;
            background-image: url(http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg);
            background-size: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-radius: 50%;
            overflow: hidden;
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;            
            } 
        }
        .selFile {
            position: absolute;
            left: 50%;
            top: 3%;
            transform: translateX(-50%);            
            width: 18vw;
            height: 18vw;
            border-radius: 50%;
            opacity: 0;
            z-index: 10;
        }
        .userId {
            position: absolute;
            left: 0;
            top: 38%;
            width: 100%;
            text-align: center;
        }
    }
    button {
    display: block;
    width: 90%;
    font-size: 4.5vw;
    margin: 12vw auto 5vw;
    padding: 4vw 0;
    color: #fff;
    border-radius: 8vw;
    background: rgb(255, 115, 0);
    background: linear-gradient(left,rgb(231, 205, 120),rgb(247, 139, 38));
    background: -webkit-linear-gradient(left,rgb(231, 205, 120),rgb(247, 139, 38));
    &:active {
    background: rgb(231, 165, 40);
      
    }
  }
  }
</style>
