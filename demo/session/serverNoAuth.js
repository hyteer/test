var express = require('express');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var MongoStore = require('connect-mongo')(session);
var settings = require('./settings');

var app = express();

//app.use(bodyParser());
app.use(bodyParser.urlencoded( {extended: false}));
app.use(cookieParser());
/**app.use(session({ 
  secret: 'password', 
  key: 'sid', 
  cookie: {
    secure: false
    }
    }));**/
/*
app.use(session({
    cookie: { maxAge: 1000*60*2 } ,
    secret: "session secret" ,
    store:new MongoStore({
            db: 'express',
            host: 'oceanic.mongohq.com',
            port: 10065,  
            username: 'cm',
            password: 'cm', 
            collection: 'session', 
            auto_reconnect:true
    })
}));*/



app.use(session({
  secret: settings.cookieSecret,
  key: settings.db,//cookie name
 // cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  cookie: {maxAge: 1000 * 60 * 60},//cookie expiration by seconds
  name: "MongoSessionDemo",
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
	url:'mongodb://localhost:27017/test',
	ttl: '20',
	autoRemove:'native',
//    url:'mongodb://localhost:'+port+'/'+settings.db,
  })
}));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});
app.post('/',function(req,res){
  req.session.name=req.body.name;
  res.redirect('/info');
});
app.get('/info',function(req,res){
  res.send('<div style="color:#89A4AD;font-size:30;">'+req.session.name+'</div>'+'<div><a href="/">back</a></div>');
});

app.listen(3000);
console.log('Server is running...');