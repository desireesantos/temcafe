var socket;

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', '100' );
      console.log('someone connected');
  }); 
};

exports.callSocket = function () {
 return socket;
}

exports.redisClient = function () {       
   redis;       
};

