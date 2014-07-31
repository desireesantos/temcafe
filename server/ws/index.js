var socket;
var queue = [];

exports.listen = function (http) {
 var io = require('socket.io');
 socket = io.listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', 0 );
      console.log('someone connected!');

      client.on('coffee:level:update', function (level) {
        client.emit('coffee:level:update', 100);
    });
  }); 

 var cb; while (cb = queue.pop()) cb(socket);
};

exports.server = function (callback) {
 if (socket) callback(socket);
 else queue.push(callback);
};
