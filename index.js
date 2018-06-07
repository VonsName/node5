const express=require('express');
var app=express();
//解析静态文件
const exstatic=require('express-static');
/*app.get('/', function (req, res) {
    res.send('Hello World');
});*/
/*app.use('/',function (req,res) {
    //res.write({a:12,b:23});//First argument must be a string or Buffer 报错
    res.send({a:12,b:23});
    res.end();
});*/
app.route('/user').get(function (req,res) {
       res.send('get请求')
});

app.route('/').post(function (req,res) {
    res.send('post请求');
});
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
var users={
  'lisi':'123456',
  'zhaoliu':'23567',
  'wangwu':'123'
};
app.route('/login').get(function (req,res) {
    let s=req.query;
    let username=s['name'];
    let pwd=s['pwd'];
    console.log(users[username]);//23567

    if (users[username]==null){
        res.send({'ok':false,'msg':'没有这个用户'});
    } else {
        if (users[username]!==pwd){
            res.send({'ok':false,'msg':'密码错误'});
        } else {
            res.send({'ok':true,'msg':'登录成功'});
        }
    }
});

//读取静态资源文件 要放在其他请求后面
app.use(exstatic('./www'));
