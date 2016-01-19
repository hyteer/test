var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
  res.send('test server...');
  console.log('requesting home...');
});
app.listen(app.get('port'));
console.log('test server running...');
