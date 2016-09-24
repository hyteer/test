var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var userNum = 0;
//app.use(express.static(__dirname+'/public'));

/*
app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/demo/chat/index.html');

});*/
var debug="Hi! you're connected.";

io.sockets.on('connection', function(socket){
  userNum++;
  io.emit('debug', debug);
  console.log('a user connected. [total: ' + userNum +']');
  console.log('connects: '+Object.keys(io.sockets.connected).length);

  var socketId = socket.id;
  var clientIp = socket.request.connection.remoteAddress;

  console.log(clientIp);

  socket.on('chatData', function(data){
    io.emit('chatData', data);
    console.log('name: ' + data.name + ' | message: ' + data.msg);
  });
  /*socket.on('data', function(data){
    if(!data){var data="no data."}; 
    console.log('name: ' + data.name+'\nmsg: '+data.msg);
  });*/

  socket.on('debug', function(debug){
    console.log(debug);
  });
  
  socket.on('disconnect', function(){
    userNum--;
    console.log('disconnected. [total: ' + userNum + ']');
    console.log('connects: '+Object.keys(io.sockets.connected).length);
  });

});

/*
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
*/

http.listen(3003,function(){
  console.log('io test server listen on *: 3003.')  ;
});
