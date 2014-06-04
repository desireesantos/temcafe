var express = require('express');
var config = require('config').server;

var app = express();
app.use('/', require('./mokapot'));

app.listen(config.port, function () {
  console.log('» Tem Café? ☕');
});
