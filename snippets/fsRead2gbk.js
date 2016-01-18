var fs=require('fs');
var iconv=require('iconv-lite');

fs.readFile('../res/Data.txt', function (err,data){
	if(err){ console.Error(err);}
	else{
	buf = iconv.decode(data, 'gbk');
	console.log(buf);}
	});
  

