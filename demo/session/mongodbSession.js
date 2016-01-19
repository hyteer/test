var express = require('express');
    var session = require('express-session');
    var MongoDBStore = require('connect-mongodb-session')(session);
 
    var app = express();
    var store = new MongoDBStore(
      { 
        uri: 'mongodb://localhost:27017/connect_mongodb_session_test1',
        collection: 'mySessions'
      });
 
    // Catch errors 
    store.on('error', function(error) {
      assert.ifError(error);
      assert.ok(false);
    });
 
    app.use(session({
      secret: 'This is a secret',
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
      },
      store: store
    }));
 
    app.get('/', function(req, res) {
      res.send('Hello ' + JSON.stringify(req.session));
    });
 
    server = app.listen(3000);