var express = require('express');

// Mongoose import
var mongoose = require('mongoose');
var uri = 'mongodb://ted:ted@ds061797.mongolab.com:61797/theenlighteneddeveloper';
var uri2 = 'mongodb://localhost:27017/test';

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect(uri2, function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    remark: String,
    approved: Boolean,
    flag: Number,
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

// Bootstrap express
var app = express();

// URLS management

app.get('/', function (req, res) {
    res.send("<a href='/users'>Show Users</a>");
});

app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

app.get('/users/add/:name/:remark', function (req, res) {
    var name=req.params.name;
    var remark=req.params.remark;
    var newUser = new User({
	name:name,
	remark:remark,
	approved:false,
	flag:0,
	});
    newUser.save(function(err, doc){
        if(err) return cb({ error: 'Unable to add new doc.' });
        //callback(null, { id: doc._id });
	console.log('Insert:'+name+'success.');
    }); 
	
    res.send('name: '+name+'<br>remark: '+remark);
});

app.get('/users/:email', function (req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});

// Start the server
app.listen(8000);
console.log('test server listen on: 8000');
