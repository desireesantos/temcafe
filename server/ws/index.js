
module.exports = function (io) {
  console.log('Starting ...')
 
  no_coffee = 0;  
  io.sockets.on('connection', function (socket) {
      socket.emit('coffe:level', no_coffee );
      console.log('someone connected!');

      socket.on('coffee:level:update', function (level) {
        socket.emit('coffee:level:update', level);
    });
  }); 
}
