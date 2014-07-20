module.exports = function (http) {
var io = require('socket.io')(http);

io.on('connection', function (client) {
    console.log('Start connnection')
    client.emit('coffee:level', 60);
});

}

