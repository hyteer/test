var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Node Server')
})
 
var users={'sillly':{name:'Yt',sex:'male'}};
app.all('/user/:username',function(req,res,next){
    if(users[req.params.username]){next();}
    next(new Error(req.params.username+' does not exist.'));
});
app.get('/user/:username',function(req,res){
    res.send(JSON.stringify(users[req.params.username])); 
});

app.listen(3000)