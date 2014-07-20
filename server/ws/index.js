var io ;
module.exports = function (http) {
 io = require('socket.io')(http);
 console.log('Starting ...')
 getSocket(0);
}

module.exports.getSocket = function(status) {
  io.on('connection', function (status) {
    console.log('Sending data ...')
    client.emit('coffee:level', level);
  });
}
