// A simple example creating, dropping a collection and then verifying that the collection is gone.

var MongoClient = require('mongodb').MongoClient,
  temporal = require('temporal'),
  test = require('assert');
  temporal.delay(2000,function(){
  console.log('connect db...');

MongoClient.connect('mongodb://localhost:27017/test11', function(err, db) {
  test.equal(null, err);
  console.log('connect success!');
  // Execute ping against the server
  db.command({ping:1}, function(err, result) {
    test.equal(null, err);
    temporal.delay(2000,function(){
      console.log('create collection...')
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
              console.log('drop collection...');
            });
        collection.insertOne({title:"For testing"}, {Num:1}, function(err, result) {
          test.equal(null, err);
          temporal.delay(10000,function(){

            // Drop the collection from this world
        db.dropCollection("tempcol", function(err, result) {
          test.equal(null, err);
          console.log('drop collection success!\nResult: ');
          console.log(result);

          // Verify that the collection is gone
          db.listCollections({name:"tempcol"}).toArray(function(err, names) {
            test.equal(0, names.length);

            db.close();
          });
        });
        });
        });
        
      });
    });//temporal...
      
    });
  });//temporal...
    
  });
});
});//temporal...