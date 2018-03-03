<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登录注册</h1>
    </v-header>
    <section>
      <div class="prompt" v-if="isRegistered">温馨提示：用户名长度需1-10位，且只能为中英文，数字，下划线。密码长度需6-16位，且包含字母和数字。</div>      
      <mt-field
        v-if="isRegistered"      
        label="用户名"
        placeholder="请输入中文字"
        type = "text"
        v-model = "user_name"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type = "text"
        v-model = "phone"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        :disableClear = '!toggle'
        ></mt-field>
        <mt-field
        v-if="isRegistered"
        label="确认密码"
        placeholder="请输入密码"
        type="password"
        v-model="confirmPassword"
        :disableClear = '!toggle'
        ></mt-field>
    </section>
    <button
     size="large"
     @click="toLogin"
     >{{isRegistered ? "注册" : "登录"}}
     </button>
    <div class="footer">
      <span class="forgotPassword" @click="_forgotPassword" v-if="!isRegistered">忘记密码</span>
      <span class="newUser" @click="_registered">{{isRegistered ? "已有账户 , 去登录!" : "新用户注册"}}</span>
    </div>
    <!-- <h1 @click="logout">退出登录</h1> -->
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'

import axios from 'axios'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      user_name:'',      
      phone:'',
      password:'',
      confirmPassword:'',
      isRegistered:false,
      fromPath:this.$store.state.login.fromPath,
      toggle:!parseInt(JSON.parse(window.localStorage.getItem("user")).token),
    }
  },
//   watch: {  
//     '$route' (to, from) {
//       this.fromPath = from.path.split('/')[1] ;
//       console.log(11);
//  　　  console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
//   　　　　const toDepth = to.path.split('/').length
//  　　　　const fromDepth = from.path.split('/').length
//  　　　　this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
// 　　}  
//   },
  methods:{
    //注册
    _registered() {
      this.isRegistered = !this.isRegistered;
      this.user_name = '';
      this.phone = '';
      this.password = '';
      this.confirmPassword = '';
    },

    //用户名验证
    _userNameTest() {
      if(this.isRegistered){
        let error,
          regExp=/^[\u4e00-\u9fa5A-Za-z0-9_]{1,10}$/;
        if(this.user_name == ""){
          error="用户名不能为空"
        }else if(!regExp.test(this.user_name)){
          error="请输入正确的用户名"
        }
        if(error){
          Toast(error); 
          return false;       
        }
      }
      return true; 
    },
    //手机号验证
    _phoneTest() {
      let error,
          regExp=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if(this.phone == ""){
        error="手机号不能为空"
      }else if(!regExp.test(this.phone)){
        error="请输入正确的手机号"
      }
      if(error){
        Toast(error); 
        return false;       
      }
      return true;      
    },

    //密码验证
    _passwordTest() {
      let error, 
          regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if(this.password == ""){
        error="密码不能为空"
      }else if(!regExp.test(this.password)){
        error="请输入正确格式的密码"
      }else if(this.isRegistered){
        error = this._confirmPasswordTest();
      }
      if(error){
        Toast(error); 
        return false;       
      }
      return true;  
    },

    //注册时，确认密码的验证
    _confirmPasswordTest() {
      let error="";
      if(this.confirmPassword == ""){
        error="请输入确认密码"
      }else if(this.password !== this.confirmPassword){
        error="两次密码不一样，请重输"
      }
      return error; 
    },

    //信息验证
    _fromTest() {
      let bol = (this._userNameTest() && this._phoneTest() && this._passwordTest()) ?
              true : false;
      return bol;
    },
    // 忘记密码
    _forgotPassword() {
      Toast('后台维护，尽请谅解！');            
    },

    //登录/注册操作
    _login() {
      let opt = {
        // user_name: this.user_name,        
        phone: this.phone,
        password: this.password,
      }
      let pathname = "login" ;
      let that = this;
          
      if(this.isRegistered){
        pathname = "register";
        opt.user_name = this.user_name;
      }
      
      axios.post('http://192.168.1.103:3000/'+pathname,opt)
      .then(function (res) {
        let data = res.data ;
        if(data.user_status === 0){
          Toast(data.res_text)
        }else {
          Toast(data.res_text);
          // that.$store.commit('CHANGE_TOKEN',1);
          let storage = window.localStorage;
          let user = {
            token : "1",
            uesr_phone : data.uesr_phone,
            user_name : data.user_name,
            user_photo : data.user_photo,
          };
          storage.setItem("user",JSON.stringify(user));
          setTimeout(()=>{
            if(that.fromPath !='sayBall'){
              that.$router.go(-1);
            }else{
              that.$router.push({name:'发布页'})
            }
            // that.toggle = false;            
          },1000);
        }
      })
      .catch(function (error) {
        Toast("服务器繁忙")                
      });

      // api.UserLogin(opt).then(({
      //     data
      // }) => {
      //   console.log(11)
      //     console.log(data)
      //     let text = "登录成功,欢迎使用";
      //     if(this.isRegistered) {
      //       text="注册成功，欢迎使用"
      //     }
      //     Toast(text);
      //     this.$store.commit('CHANGE_TOKEN',1);
      //     setTimeout(()=>{
      //       this.$router.go(-1);
      //       this.toggle = false;            
      //     },1000);


          // if (!data.info) {
          //     this.$message({
          //         type: 'info',
          //         message: '账号不存在'
          //     })
          // }
          // if (data.success) {
          //     this.$message({
          //         type: 'success',
          //         message: '登录成功'
          //     })
          //     this.$store.dispatch('UserLogin', data.token)
          //     this.$store.dispatch('UserName', data.email)
          //     let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          //     this.$router.push({
          //         path: redirect
          //     })
          // } else {
          //     this.$message({
          //         type: 'info',
          //         message: '密码错误'
          //     })
          // }
      // }).catch(function (error) {
      //   console.log(error);
      // });
      
    },
    // 点击登录/注册按钮
    toLogin(){
      // if(this.phone!=="" && this.password!=="") {
        // console.log(11)
      if(this._fromTest()){
        this._login()
      }
        // if(isRegistered){

        // }else{
        //   Toast('登录成功,欢迎使用');
        //   this.toggle = false;
        //   this.$store.commit('CHANGE_TOKEN',1);
        //   setTimeout(()=>{
        //     this.$router.go(-1);
        //   },1000);
        // }     
      // }else {
      //   Toast('账号密码不能为空');
      // }
    },

    // 退出登录按钮
    logout(){
      Toast('退出登录成功');
      // this.$store.commit('CHANGE_TOKEN',0);
      let storage = window.localStorage;
      let user = {token:0};
      storage.setItem("user",JSON.stringify(user));
      console.log(JSON.parse(window.localStorage.getItem("user")).token);
      // this.toggle = true;
      this.user_name = '';      
      this.phone = '';
      this.password = '';

    }
  }
}

</script>

<style lang="less" scoped>
.login {
  padding: 13vw 0 10vw; 
  // .yzm {
  //   // position: relative;
  //   .red {
  //     // padding: 2vw;
  //     // width: 50%;
  //     // overflow: hidden;
  //     position: absolute;
  //     top: 50%;
  //     right: 50%; 
  //     transform: translateY(-50%);
  //     // margin-right: 20vw;
  //     // border: 1px solid rgb(236, 14, 14);
  //     z-index: 20000;
  //   }
  // }
  
  >section {
    // .tip {
    //   padding: 6vw 3vw;
    //   color:rgb(224, 145, 71);
    //   letter-spacing: 2px;
    //   font-size: 16px;
    // }
    .prompt {
      margin: 5vw 0;
      padding-left: 3vw;
      font-size: 4vw;
      color: #ccc;
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
  .footer {
    padding: 0 5vw ;
    color: rgb(245, 164, 88);
    .forgotPassword {
      float: left;
      &:active {
        color: rgb(148, 122, 77);
      }
    }
    .newUser {
      float: right;
      &:active {
        color: rgb(148, 122, 77);        
      }
    }
  }
  
}
</style>
