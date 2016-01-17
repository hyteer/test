var fs=require('fs');

fs.readFile('pub/dataU8.txt', function(err,data){
	if(err){console.error(err);}
	else{console.log('Read file: '+data);}
	fs.writeFile('./out/dataU8out.txt',data,function(err){
		if(err){console.error(err);}
		else if(!err){console.log('No data to write!');}
		else{console.log('write file to dataU8out.txt successfully.');}
	});
});
	
