var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        console.log('delete ...');
        // //删除Collection
        if(db.collection.drop()){
            console.log('Del collection successfully!');
        }else{
            console.log('Fail...')
        }

	}else{
        console.log(err);
    }

});