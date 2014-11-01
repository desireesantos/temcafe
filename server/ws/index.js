var socket;
var redis = require('redis');
var client;

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', '0' );
      console.log('someone connecting ...');
      startRedis();
  }); 
};

exports.callSocket = function () {
 return socket;
}

exports.getRedis = function () {
 result = client.get('foo', function (err, reply) {
    reply; 
});

console.log ("GET Redis");
console.log(result);

return result;
};

exports.redis = function () {
 return client;
}

function startRedis(){
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);
}

