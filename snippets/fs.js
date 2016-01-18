var fs=require('fs');
var rfile='../pub/dataU8.txt';
var wfile='../out/writeDemo.txt';

console.log('read file...')
fs.readFile(rfile, function(err,data){
	if(err){console.error(err);}
	else{console.log('read <'+rfile+' >success!');}
	console.log('write file...');
	fs.writeFile(wfile,data,function(err){
		if(err){console.error(err);}
		else if(!data){console.log('No data to write!');}
		else{console.log('write file <'+wfile+'> success!');}
	});
});
	
