var express = require('express')
var app = express()
var ng=0;
var ns=0;

//app.use(express.static,(__dirname+'/public'));
app.use(express.static(__dirname + '/pub'))

app.get('/', function (req, res) {
  
    res.send('Node Server');
    ns+=1;
    console.log("msg sent: "+ns);
})
 
var users={'silly':{name:'Yt',sex:'male'},see: {name:'Dyci',sex:'female'}};
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

app.listen(3000);
console.log('Test server listen on:3000');