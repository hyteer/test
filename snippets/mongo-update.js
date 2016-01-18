var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
         db.collection('mycoll',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
    		console.log('update data...')	;
            
            collection.update({title:'Hello Silly!'},{name:"title",title:'Hello Silly!'});

		}
         });
	}});