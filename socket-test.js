var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//var nsp = io.of('/test');  // use namespace

app.use(express.static(__dirname+'/public'));

/*
app.get('/', function(req,res){
  res.sendFile('index.html');

});*/

/*
nsp.on('connection', function(socket){
  console.log('connected test.');
  socket.on('testData',function(data){
    console.log('test data: ' + data.info);
    nsp.emit('testData', data);
  });
  socket.on('disconnect', function(){
    console.log('disconnected');
  });
});
*/

/*
io.on('connection', function(socket){
  console.log('a user connected.');
  socket.on('testData', function(data){
    io.emit('testData', data);
    console.log('data received: ' + data.msg);
  });

});*/

io.on('connection', function(socket){
  console.log('one connected.');
  socket.on('testData', function(data){
    io.emit('testData', data.msg);
    console.log('data received: '+data.msg);
  });
  socket.on('disconnect', function(){
    console.log('one disconnected.');
  });
 
});


http.listen(3333,function(){
  console.log('io test server listen on *: 3333.')  ;
});
