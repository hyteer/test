var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('api', server, {safe:true});

var userdata = [{name:'See',remark:'De see'},{name:'Tester1',remark:'for testing'}];

var userAdd = function(user){db.open(function(err, db){
    if(!err){
        console.log('connect db');
        //db.Collection('mycoll',{safe:true}, function(err, collection){
        db.createCollection('usercol',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
    		console.log('Connected...')	;
        /*    var data1 = {name:'testuser',remark:'Silly'};
            var data2 = {name: 'yt',remark:'Super Admin'};*/
        //    collection.insert([data1,data2],{safe:true},function(err,result){
	      var data1=user[0],data2=user[1];
	      collection.insert(user,{safe:true},function(err,result){
                console.log('insert success!')
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
}
userAdd(userdata);
