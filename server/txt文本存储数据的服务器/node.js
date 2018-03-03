var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var cors = require('cors');

http.createServer(function (req, res) {
//设置请求头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  // res.setHeader("Content-Type", "application/json;charset=utf-8");

  // if (req.getMethod().equals("OPTIONS")) {
  //     HttpUtil.setResponse(res, HttpStatus.OK.value(), null);
  //     return;
  // }
  if(req.method == "POST"){
    //接收发来的用户名，手机号和密码
    var result = "";
    //请求响应的数据对象
    var resData = {};
    //获取前端代码发来的路由地址
    var pathName = url.parse(req.url).pathname;
    req.addListener("data",function (chunk) {
      result += chunk;
    });

    req.addListener("end" , function () {
      var user = JSON.parse(result);
      console.log(result);
      if(pathName == "/repPhoneUrl"){
        fs.readFile("db.txt" , "utf-8" , function (err,data) {
          var arr = JSON.parse(data);          
          for(var i = 0;i < arr.length;i++){
            var obj = arr[i];
            if(obj.phone == user.phone){
              arr[i].user_photo = user.user_photo;
              fs.writeFileSync("db.txt" , JSON.stringify(arr) , "utf-8");
              resData = {
                user_status : 1,
                res_text : '修改头像成功!',
              };
              res.end(JSON.stringify(resData));
              
              return;                        
            }
          }
          console.log("请求参数有误！")
        }) 
      //判断用户是否存在
      }else if(user.phone){
        fs.readFile("db.txt" , "utf-8" , function (err,data) {
          if (!err){
            console.log("读取文件成功");
            if (!data){
              if(pathName == "/login"){
                resData = {
                  user_status : 0,
                  res_text : '该用户未注册!'
                };
                res.end(JSON.stringify(resData));
                return;
              }
              //根据前端发来的路由地址判断是登录还是注册页面，如果是注册页面
              if(pathName == "/register"){
              //创建一个数组一个对象来保存帐号和密码
                var arr = [];
                var obj = {};
              //把用户的帐号密码保存
                obj.user_name = user.user_name;              
                obj.phone = user.phone;
                obj.password = user.password;
                obj.user_photo = 'http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg';
                arr.push(obj);
              //同步写入db.txt文件，必须是同步进行
                fs.writeFileSync("db.txt" , JSON.stringify(arr) , "utf-8");
                resData = {
                  user_status : 1,
                  res_text : '注册成功!',
                  uesr_phone : obj.phone,
                  user_name : obj.user_name,
                  user_photo : obj.user_photo
                };
                res.end(JSON.stringify(resData));
                return;
              }
            }else {
              console.log("文件中有数据");
              //把数据转成JSON对象，以便我们使用
              var arr = JSON.parse(data);
              //遍历整个保存数据的数组 判断登录注册
              for(var i = 0;i < arr.length;i++){
                var obj = arr[i];
                if(obj.phone == user.phone){
                  if(pathName == "/login"){
                    // console.log(obj)
                    // console.log(user)
                    if (obj.password == user.password){
                      resData = {
                        user_status : 2,
                        res_text : '登录成功!',
                        uesr_phone : obj.phone,
                        user_name : obj.user_name,
                        user_photo : obj.user_photo                                                
                      };
                      res.end(JSON.stringify(resData));
                      return;
                    }else {
                      resData = {
                        user_status : 0,
                        res_text : '密码错误!',
                      };
                      res.end(JSON.stringify(resData));
                      return;
                    }
                  }
                  if(pathName == "/register"){
                    resData = {
                      user_status : 0,
                      res_text : '该用户已存在!',
                    };
                    res.end(JSON.stringify(resData));
                    return;
                  }
                }
              }
              if(pathName == "/login"){
                resData = {
                  user_status : 0,
                  res_text : '该用户未注册'
                }
                res.end(JSON.stringify(resData));
                return;
              }
              if(pathName == "/register"){
              //创建新对象写入数据
                var obj = {};
                obj.user_name = user.user_name;                              
                obj.phone = user.phone;
                obj.password = user.password;
                obj.user_photo = 'http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg';                
                arr.push(obj);
                fs.writeFileSync("db.txt" , JSON.stringify(arr) , "utf-8");
                resData = {
                  user_status : 1,
                  res_text : '注册成功!',
                  uesr_phone : obj.phone,
                  user_name : obj.user_name,
                  user_photo : obj.user_photo                                                                                    
                };
                res.end(JSON.stringify(resData));
                return;
              }
            }
          }else {
            resData = {
              user_status : 0,
              res_text : '系统繁忙，稍后再试'
            }
            res.end(JSON.stringify(resData));
            return;
          }
        })
      }else{
        resData = {
          user_status : 0,
          res_text : '没有用户参数'
        }
        res.end(JSON.stringify(resData));
        return;       
      }
    });
  }else {
    resData = {
      user_status : 0,
      res_text : 'get请求'
    }
    res.end(JSON.stringify(resData));
  }
}).listen(3000 , function (err) {
  if (!err){
    console.log("服务器启动成功，正在监听port3000...");
  }
});
