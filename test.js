// Modules
var express = require('express');
var app = express();
var ejs = require('ejs');

// Customized modules
var routes = require('./routes');


var ng=0;
var ns=0;

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + '/pub'))
// use ipWare
var getIP = require('ipware')().get_ip;
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    console.log(ipInfo);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});

app.get('/', routes.index);
app.get('/yt', routes.yt);
  
  
 // Test routes
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

// **Test modules
var clientIP = require('./nodejs/lib/get-clientIP.js');
app.get('/myip', function(req,res){
	res.send('your ip address: ' + clientIP.getClientIp(req));
	console.log("client's ip address: " + clientIP(req));
});
// count
var count = require('./nodejs/lib/count.js');
app.get('/count', function(req,res){
	var arr=[12,23,54];
	res.status('OK').send('Numbers: '+ arr);
	console.log('Numbers: ',arr, '\nTotal: ' + count.sum(arr));
});
app.get('/ip', function(req,res){
	var ip = req.connection.remoteAddress;
	//res.send('Your IP: ' + ip);
	res.send('Your IP: ' + req.ip);
	console.log('Your IP: ' + ip);
});



app.listen(3000);
console.log('Node test server listen on:3000');
