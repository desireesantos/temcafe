var io ;
module.exports = function (http) {
 io = require('socket.io')(http);
 console.log('Starting ...')
 getSocket(0);
}

module.exports.callsocket = function(status){
  getSocket(status);
}

function getSocket (level) {
  io.on('connection', function (client) {
    console.log('Sending data ...')
    client.emit('coffee:level', level);
});
}
