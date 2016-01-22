//user.js
//var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('api', server, {safe:true});

var mongodb = require('./db'); 
function User(user) { 
    this.name = user.name; 
    this.password = user.password; }; 
module.exports = User; 
User.prototype.save =  function  save(callback) {   // Store to Mongodb 
    var  user = {     name:  this.name,     password:  this.password,   };   
    db.open(function(err, db) { 
        if (err)  { 
            return  callback(err);     }     // Read users collection     
        db.collection('users', function(err, collection) { 
            if  (err) { 
                mongodb.close(); 
                return  callback(err);       } 
              // Add index for name property
              collection.ensureIndex('name', {unique:  true});
               // Read  user  doc
                collection.insert(user, {safe:  true},  function(err, user) { 
                     mongodb.close();
                     callback(err, user);
               });
         }); 
 }); }; 
User.get =  function  get(username, callback) {
   mongodb.open(function(err, db) {
     if (err) { return  callback(err);
     } 
    // Read users collection
     db.collection('users', function(err, collection) {
         if  (err) {
             mongodb.close();
             return  callback(err); 
          } 
      // Find doc where name  property is username 
      collection.findOne({name: username},  function(err, doc) {
         mongodb.close();
         if  (doc) {
           // 封装文档为 User 对象
         var  user =  new  User(doc);
		}
	  else{
           callback(err, user); 
               } 
             
      });
     });
   }); 
}; 

