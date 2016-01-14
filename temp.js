var express=require('express')
var app=express();
app.get('/',function(req,res){
    res.send('Node server');
   console.log('runing on.');
});
app.listen(3000);