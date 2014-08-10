var socket;
var queue = [];
var io = require('socket.io');
var socket;
exports.listen = function (http) {
 socket = io.listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', 0 );
      console.log('someone connected!');

      client.on('new status', function () {
        client.broadcast.emit('new status', console.log('ALO  '));
    });
  }); 
 var cb; while (cb = queue.pop()) cb(socket);
};

exports.server = function (callback) {
 if (socket) callback(socket);
 else queue.push(callback);
};

exports.testando = function () {
 return socket;
}



