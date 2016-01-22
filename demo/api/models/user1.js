var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('test', server, {safe:true});

// connect db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // connect Collection（could be regarded as table in mysql）
        // The #1 way to connect
        // db.collection('mycoll',{safe:true}, function(err, collection){
        //     if(err){
        //         console.log(err);
        //     }
        // });
        // The #2 way to connect
        db.createCollection('testcol', {safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                //add record...
                // var tmp1 = {id:'1',title:'hello',number:1};
       //          collection.insert(tmp1,{safe:true},function(err, result){
       //              console.log(result);
       //          }); 
                   //update...
                   // collection.update({title:'hello'}, {$set:{number:3}}, {safe:true}, function(err, result){
                   //     console.log(result);
                   // });
                   // delete...
                       // collection.remove({title:'hello'},{safe:true},function(err,result){
        //                   console.log(result);
        //               });

                // console.log(collection);
                // query...
                var tmp1 = {title:'Test1'};
                   var tmp2 = {title:'Test2'};
                   collection.insert([tmp1,tmp2],{safe:true},function(err,result){
                   console.log(result);
                   }); 
                   collection.find().toArray(function(err,docs){
                   console.log('find');
                   console.log(docs);
                   }); 
                   collection.findOne(function(err,doc){
                    console.log('findOne');
                      console.log(doc);
                   }); 
            }

        });
        // console.log('delete ...');
        // //删除Collection
        // db.dropCollection('mycoll',{safe:true},function(err,result){

  //           if(err){
                
        //         console.log('err:');
        //         console.log(err);
        //     }else{
        //         console.log('ok:');
        //         console.log(result);
        //     }
  //       }); 
    }else{
        console.log(err);
    }
});