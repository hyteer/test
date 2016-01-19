var express = require('express');
var app = express();
var ejs = require('ejs');
var routes = require('./routes')

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 

app.get('/', routes.index) ;
app.get('/hello', routes.hello); 

app.listen(3000);
console.log('server listen on 3000');