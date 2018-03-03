var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
// var cors = require('cors');
// 引入mongodb操作文件
var Server = require("./mongodb.js");
// 实例化mongodb操作对象
var server = new Server();

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
      if(user.phone){
        //进行登录操作
        if(pathName == "/login"){
          server.find("user",{"phone":user.phone},function(bool,data){
            if(bool){
              //判断该用户是否存在
              if(data.length === 0){
                resData = {
                  user_status : 0,
                  res_text : '该用户未注册!'
                };
                res.end(JSON.stringify(resData));
                return;
              }else{
                if(data[0].password == user.password){
                  resData = {
                    user_status : 2,
                    res_text : '登录成功!',
                    uesr_phone : data[0].phone,
                    user_name : data[0].user_name,
                    user_photo : data[0].user_photo                                                
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
            }else{
              console.log("登录-数据库查找连接失败")
            }
          });
        }
        //进行注册操作
        if(pathName == "/register"){
          server.find("user",{"phone":user.phone},function(bool,data){
            if(bool){
              //判断用户是否已经注册
              if(data.length !=0){
                resData = {
                  user_status : 0,
                  res_text : '该用户已注册!',
                };
                res.end(JSON.stringify(resData));
                return;
              }else{
                //创建一个对象来保存用户信息
                let obj = {};
              //把用户的帐号密码保存
                obj.user_name = user.user_name;              
                obj.phone = user.phone;
                obj.password = user.password;
                obj.user_photo = 'http://p4adg9kfz.bkt.clouddn.com//user/img/user_photo.jpg';
                server.insert("user",obj,function(bool,data){
                  if(bool){
                    if(data.result.ok == 1){
                      resData = {
                        user_status : 1,
                        res_text : '注册成功!',
                        uesr_phone : data.ops[0].phone,
                        user_name : data.ops[0].user_name,
                        user_photo : data.ops[0].user_photo
                      };
                      res.end(JSON.stringify(resData));
                      return;
                    }else{
                      console.log("注册-数据库新增失败")                      
                    }
                  }else{
                    console.log("注册-数据库新增连接失败")
                  }
                });
                
              }
            }else{
              console.log("注册-数据库查找连接失败")
            }
          });
        }
        //修改用户头像
        if(pathName == "/repPhoneUrl"){
          server.update("user",{"phone":user.phone},{"user_photo":user.user_photo},function(bool,data){
            if(bool){
              // console.log(data.result.ok);
              if(data.result.ok == 1){
                resData = {
                  user_status : 1,
                  res_text : '修改头像成功!',
                };
                res.end(JSON.stringify(resData));
                return; 
              }else{
                console.log("修改头像-数据库查询的用户不存在")              
              }
            }else{
              console.log("修改头像-数据库查找连接失败")
            }
          });
        }
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
    // server.insert("user",{g:79999999,hh:"0880808880",bb:667890006},function(bool,data){
    //   if(bool){
    //     console.log("新增后的数据为："+ Object.keys(data))
    //     console.log(data.result)
    //     console.log(data.ops[0].bb)
    //     console.log(data.insertedCount)
    //     console.log(data.insertedIds)

        // 新增后的数据为：result,ops,insertedCount,insertedIds
        // result: { ok: 1, n: 1 }
        // ops:  [ 
        //         { 
        //           g: 79999999,
        //           hh: '0880808880',
        //           bb: 666,
        //           _id: 5a9a3605c7afa43668290497 
        //         } 
        //       ]
        // insertedCount:  1
        // insertedIds:  [ 5a9a3605c7afa43668290497 ]
  //     }else{
  //       console.log("新增失败")
  //     }
  //   });
  // server.update("user",{g:798},{hhii:"chynjkdkf"},function(bool,data){
  //   if(bool){
  //     console.log("修改后的数据为："+data)
  //     //data为 {"n":0,"nModified":0,"ok":1}
  //   }else{
  //     console.log("修改失败")
  //   }
  // });
  // server.find("user",{g:798},function(bool,data){
  //   if(bool){
  //     console.log("查询后的数据为："+data[0].hh)
  //   }else{
  //     console.log("查找失败")
  //   }
  // });
    console.log("服务器启动成功，正在监听port3000...");
  }
});
