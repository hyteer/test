var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('api', server, {safe:true});

var userdata = {name:'See'};

var userDel = function(user){db.open(function(err, db){
    if(!err){
        console.log('connect db');
        /*db.Collection('mycoll',{safe:true}, function(err, collection){*/
        db.createCollection('usercol',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
    	      console.log('Connected...');
		
		console.log(user);
	      collection.findOne(function(err,doc){
		if(err){
		console.log(err);
            	}else{
		  if(!doc){
		    console.log(user.name + ' not exist.');
		    return null;
		  }else{
			collection.deleteOne(user,{safe:true},function(err,result){
	                console.log('delete success!')
	              //  console.log(result);
			console.log(collection.findOne(user));
			});
			}
		}          
              });
	   }
	      
   /*       collection.find().toArray(function(err,docs){
                console.log('find...');
                console.log(docs);
            });*/
	  });
		
	}else{
        console.log(err);
    }
});
}
userDel(userdata);
