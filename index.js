const express=require('express');
var app=express();

/*app.get('/', function (req, res) {
    res.send('Hello World');
});*/
/*app.use('/',function (req,res) {
    //res.write({a:12,b:23});//First argument must be a string or Buffer
    res.send({a:12,b:23});
    res.end();
});*/
app.route('/user')
    .get(function (req,res) {
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