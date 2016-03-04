var express = require('express');
var http = require('http');
var app = express();

app.set('port',process.env.PORT || 80);
app.use(express.static(__dirname+'/pub'));

http.createServer(app).listen(app.get('port'),function(){
	console.log('Angular server is running on '+ app.get('port'));
});

app.get('/',function(req,res){
	res.send('Angular test server is running...');
});
