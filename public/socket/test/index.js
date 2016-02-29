var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));


io.on('connection', function(socket){
  console.log('one connected.');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('data received: '+msg);
  });
  socket.on('disconnect', function(){
    console.log('one disconnected.');
  });
 
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});