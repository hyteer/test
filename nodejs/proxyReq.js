var http = require('http');

http.get ({
    host: '127.0.0.1',
    port: 8888,
    path: 'http://localhost/'
}, function (response) {
    console.log (response);
});