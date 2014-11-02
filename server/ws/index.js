var client;
var socket;

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
 console.log('someone connecting ...');
  }); 
};

exports.startRedis = function () {
var redis = require('redis');	
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);
 console.log('Redis ready ...');
}

exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return client;
}

exports.setRedis = function (value) {
 return client.set('coffee', value);
}

exports.getRedis = function () {
 return client.get('coffee', function (err, reply) {
    reply.toString(); 
});
};





