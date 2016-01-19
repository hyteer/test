var hp=require('http');
var express=require('express');
var app=express();

app.set('port',process.env.PORT || 3000);

hp.createServer(app).listen(app.get('port'),function(){
	console.log('server is running...');	
});

app.get('/',function(req,res){
  res.send('server is running...');
});
