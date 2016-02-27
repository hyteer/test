var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
  res.sendFile('index.html');

});


io.on('connection', function(socket){
  console.log('a user connected.');
  socket.on('chatData', function(data){
    io.emit('chatData', data);
    console.log('name: ' + data.name + ' | message: ' + data.msg);
  });
  /*socket.on('data', function(data){
    if(!data){var data="no data."}; 
    console.log('name: ' + data.name+'\nmsg: '+data.msg);
  });*/
  socket.on('disconnect', function(){
    console.log('disconnected');
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
