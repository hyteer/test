//call user.js as a module
var user=require('./user.js');

var urinfo={name:'yt',password:'222'};
var Ur=new user(urinfo);

//console.log('Name:'+Ur.name+' Pass:'+Ur.password);
/*
user.test('Silly',function(sig,data){
	if(sig==1){console.log('success, data is: '+data)}
	else if(sig==0){console.log('no data, '+data)}
	else{console.log('there is an error...')}
});*/

user.get('silly',function(err,data){
	if(err){console.log('Error: '+err)}
	else{console.log('success.\nname: '+data.name+'\nremark: '+data.remark)}
});


