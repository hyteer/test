var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
        //db.Collection('mycoll',{safe:true}, function(err, collection){
        //第2种连接方式
        db.createCollection('mycoll',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
    		console.log('Connected...')	;
            var data1 = {name:'title3',title:'Hello Silly!'};
            var data2 = {title: 'This is my first connection to mongodb'};
            collection.insert([data1,data2],{safe:true},function(err,result){
                console.log('Insert data successfully!')
                console.log(result);
            });
            collection.find().toArray(function(err,docs){
                console.log('find...');
                console.log(docs);
            });
            collection.findOne(function(err,doc){
                console.log('findOne...');
                console.log(doc);
            });
		}
         });
	}else{
        console.log(err);
    }
});