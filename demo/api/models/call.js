//call user.js as a module
var express = require('express')
var app = express();

var user=require('./user.js');

var urinfo={name:'yt',password:'222'};
var Ur=new user(urinfo);

//console.log('Name:'+Ur.name+' Pass:'+Ur.password);
app.get('/api/users/:urname',function(req,res){
  if(req.params.urname){
    var username=req.params.urname;
    user.get(username,function(err,data){
	if(err){console.log('Error: '+err)}
	else{
	  console.log('success.\nname: '+data.name+'\nremark: '+data.remark);
	  res.send('success.\nname: '+data.name+'<br>remark: '+data.remark);
	}
});
  }else{
	new Error(req.params.username+' does not exist.')
  }
  
});

app.listen(3000);
console.log('server is running..');



