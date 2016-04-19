var express=require('express')
var app=express();

var os=require('os');  
var ifaces=os.networkInterfaces();  

app.get('/',function(req,res){
    res.send('Node server');
   console.log('runing on.');
});

function getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    };
	
app.get('/ip',function(req,res){
	var ipInfo = getClientIp(req);
	if(ipInfo){
		console.log(ipInfo);
		res.send(ipInfo);
	}else {
		console.log("There's an error.");
		res.send("There's an error.");
	}
});
	
app.get('/info', function(req,res) {
	var ipInfo='';
    for (var dev in ifaces) {  
      var alias=0;  
      ifaces[dev].forEach(function(details){  
        if (details.family=='IPv4') {  
		  ipInfo=ipInfo+dev+(alias?':'+alias:': ')+details.address+'<br>';
          console.log(dev+(alias?':'+alias:': '),details.address);  
		  
          ++alias;  
        }  
      });  
    }
	res.send(ipInfo);	
	
});
   

app.listen(3000);