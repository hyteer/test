var express = require('express');
var app = express();
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: "foo",
    store: new MongoStore({
      	host:"localhost",
	port:"27017",
	db: "test",
	collection:"sessions"
    })
  }));

app.get('/',function(req,res){
	res.send('server is running...');
	console.log(req.session);
  
});


app.listen(3000);
console.log('server is running...');