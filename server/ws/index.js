var socket;
var redis = require('redis'),
    url = require('url');

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', getRedis() );
      console.log('someone connected');
  }); 
};

exports.callSocket = function () {
 return socket;
}

exports.createClient = function () {
    var client;
    console.log(url);
    var redisURL = url.parse(process.env.REDISCLOUD_URL);
    if (process.env.REDISTOGO_URL) {       
        client = redis.createClient(redisURL.port, redisURL.hostname, options);
        client.auth(redisURL.auth.split(":")[1]);
    } else {
        client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
    }
    return client;
};
