//user.js
var  mongodb = require('mongodb');
//var mongodb = require('./db'); 
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('test', server, {safe:true});


function User(user) { 
    this.name = user.name; 
    this.password = user.password; }; 
module.exports = User; 
User.prototype.save =  function  save(callback) {   // Store to Mongodb 
    var  user = {     name:  this.name,     password:  this.password,   };   
    db.open(function(err, db) { 
        if (err)  { 
            return  callback(err);     }     // Read users collection     
        db.collection('apiUsers', function(err, collection) { 
            if  (err) { 
                db.close(); 
                return  callback(err);       } 
              // Add index for name property
              collection.ensureIndex('name', {unique:  true});
               // Read  user  doc
                collection.insert(user, {safe:  true},  function(err, user) { 
                     db.close();
                     callback(err, user);
               });
         }); 
 }); }; 
User.get =  function  get(username, callback) {
   db.open(function(err, db) {
     if (err) { return  callback(err);
     } 
    // Read users collection
     db.collection('apitest', function(err, collection) {
         if  (err) {
             db.close();
             return  callback(err); 
          } 
      // Find doc where name  property is username 
      collection.findOne({name: username},  function(err, doc) {
         db.close();
         if  (doc) {
           // 封装文档为 User 对象
         var  user =  new  User(doc);
	    console.log('name is: '+doc);
	    return callback(null, doc);
		}
	 else{
           return callback(err, user); 
               }            
      });
     });
   }); 
}; 

User.test =  function  test(username, callback) {
/*
   db.open(function(err, db) {
     if (err) { return  callback(err);
     } 
    // Read users collection
     db.collection('apiUsers', function(err, collection) {
         if  (err) {
             db.close();
             return  callback(err); 
          } 
      // Find doc where name  property is username 
      collection.findOne({name: username},  function(err, doc) {
         db.close();
         if  (doc) {
           // Encapsulation User as an object
         var  user =  new  User(doc);
		}
	  else{
           callback(err, user); 
               }            
      });
     });
   }); */
	  if(username){
	 //  console.log(username);
	   return callback(1,username);
	  
	  }else{
	//  console.log('No data...');
	  return callback(0,"Nothing...");
	  
	 }


}; 

var user1 = {name: "silly1",password: "111"};
var User1 = new User(user1);
