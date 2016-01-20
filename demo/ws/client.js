var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8001');

ws.on('open', function open() {
  var array = new Float32Array(5);

  for (var i = 0; i < array.length; ++i) {
    array[i] = i / 2;
  }

//  ws.send(array, { binary: true, mask: true });
  ws.send("Test data...", { binary: false, mask: true });
  console.log(array);
  
  ws.on('message', function message(data, flags) {
  console.log('Data received: '+data+'\nRoundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
  });
});