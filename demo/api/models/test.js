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

   db.open(function(err, db) {
     if (err) { 
      console.log(err);
    }else{
      console.log('Open db success.');
    }
  });