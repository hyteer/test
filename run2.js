var express = require('express')
var app = express()
 
var users={'silly':{name:'Yt',sex:'male'}};
app.get('/user/:username',  function(req, res) { 
	var name=req.params.username;
	
	console.log(users[req.params.username]);
//	console.log(users[name]);
	
}); 



app.listen(3000)