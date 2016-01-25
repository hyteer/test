// A simple example creating, dropping a collection and then verifying that the collection is gone.

var MongoClient = require('mongodb').MongoClient,
  temporal = require('temporal'),
  test = require('assert');
  url = 'mongodb://silly:111@localhost:27017/test';

function User(user) { 
    this.name = user.name; 
    this.password = user.password; }; 

module.exports = User; 
 
User.test = function test(username, callback){
  MongoClient.connect(url, function(err, db) {
    test.equal(null, err);
    console.log('connect success!');
      // Create a capped collection with a maximum of 1000 documents
      db.createCollection("tempcol", {capped:true, size:10000, max:1000, w:1}, function(err, collection) {
        test.equal(null, err);
        temporal.delay(2000,function(){
          console.log('create collection success!');
          console.log('insertOne...');
          // Insert a document in the capped collection
          collection.insertOne({title:"For testing"}, {Num:1}, function(err, result) {
              test.equal(null, err);
              console.log('insertOne success!\nResult: ');
              console.log(result['result']);
              collection.find().toArray(function(err,docs){
              console.log(docs);      
              });      
        });
      });//temporal...
        
      });
});
};


User.get =  function  get(username, callback) {
 //  console.log('connect db...');
  // console.log('Username: '+username);
  MongoClient.connect(url, function(err, db) {
    db.createCollection("tempcol", {capped:true, size:10000, max:1000, w:1}, function(err, collection) {
        test.equal(null, err);
       //   console.log('create collection success!');
        //  console.log('findOne...');
          // Find a document in the capped collection
          collection.findOne({name:username}, function(err, result) {
            db.close();
              //test.equal(null, err);
            if(result){
                  return callback(err,result);
                  callback("user not exist.",null);
            }else{ 
             // console.log('there is an error.');
              err = "there is an error,the user is not exist.";
              callback(err,null);
            }

              });      
        }); 
      });

};