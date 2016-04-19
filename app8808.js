var hp=require('http');
var express=require('express');
var app=express();

app.set('port',process.env.PORT || 8808);
app.use(express.static(__dirname+'/public'));


hp.createServer(app).listen(app.get('port'),function(){
	console.log('server is running...on '+app.get('port'));	
});

app.get('/test',function(req,res){
  res.send('Test server is running...');
});


