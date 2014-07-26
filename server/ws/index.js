var io;
module.exports = function (http) {
 io = require('socket.io')(http);
 console.log('Starting ...')
 getSocket(0);
}


function getSocket (level) {
  io.on('connection', function (client) {
    client.broadcast.emit('coffee:level', level);
});
}

function getSocket (level) {
zero_level = 50;  
io.sockets.on('connection', function (socket) {
    socket.emit('start_msg', zero_level );

    socket.on('updated', function (data) {
        io.sockets.emit('updated', data);
    });
}); 

}
