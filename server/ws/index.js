module.exports = function (http) {

var io = require('socket.io')(http);

io.on('connection', function (client) {
    console.log('Start connection');
    client.emit('status', {'status': '0'});
});
}


