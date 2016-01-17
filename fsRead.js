var fs=require('fs');
var iconv=require('iconv-lite');

fs.readFile('res/Data.txt', 'utf-8',function (err,data){
	if(err){ console.Error(err);}
	else{
//	var idata=
	buf = iconv.encode(data, 'gbk');
	console.log(buf);}
	});
  

