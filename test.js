var express = require('express');
var app = express();
var ejs = require('ejs');
var routes = require('./routes.js');
var ng=0;
var ns=0;

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + '/pub'))

app.get('/', routes.index);
app.get('/yt', routes.yt);
  
  
 
var users={'silly':{name:'Yt',sex:'male'}};
app.all('/user/:username',function(req,res,next){
    if(users[req.params.username]){
    ng+=1;
    console.log("msg recieved: "+ng);
    next();}
    else{
    next(new Error(req.params.username+' does not exist.'));}
});
app.get('/user/:username',function(req,res){
    res.send(JSON.stringify(users[req.params.username])); 
    ns+=1;
    console.log("msg sent: "+ns);
});

app.listen(3000)