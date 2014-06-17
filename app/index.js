var express = require('express');
var config = require('../config/default').server;
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(config.port, function () {
  console.log('Server listening at port %d', config.port);
  console.log('» Tem Café? ☕');
});

  app.use('/', require('./mokapot'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  
io.on('connection', function (client) {
    console.log('Start connection');
    client.emit('status', {'status': '12345678'});
});





