//node.js+express验证码的实现
//安装ccap库 npm install ccap

var ccap = require();

var captcha = ccap({

　　width:190,

　　height:50,　

　　offset:30,

　　quality:100,

　　fontsize:40,

　　generate:function(){

　　　　//自定义生成字符串

　　　　//此方法可不要
           var str = "qQ";
           return str;

　　}

　　

});

var ary = captcha.get();

console.log(ary[0]);//字符串

res.write(ary[1]); //

res.end();