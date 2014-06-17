var express = require('express');
var config = require('../config/default').server;

var app = express();
  app.use('/', require('./mokapot'));
  app.listen(config.port);
//   app.listen(config.port, function () {
//   console.log('» Tem Café? ☕');
// }); 

var server = require('http').createServer(app)
var io = require('socket.io')(server);

io.sockets.on('connection', function (client) {
  client.on('toServer', function (msg) {
    client.emit('status', {'status': '12345678'});
  });
});
