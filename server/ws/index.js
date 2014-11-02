var client;
var socket;

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
 client.emit('coffe:level', testToRead());	
 console.log('someone connecting ...');
  }); 
};

exports.startRedis = function () {
var redis = require('redis');	
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true, detect_buffers: true});
client.auth(redisURL.auth.split(":")[1]);

client.on("connect", function () {
    console.log("Got redis connection ...");
});

redis.debug_mode = true;
client.set('coffee', 10, redis.print);
console.log('Redis ready with value' + testToRead());
}


exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return client;
}

exports.setRedis = function (value) {
 client.set('coffee', value);
}

exports.getRedis = function () {
client.get('coffee');
}

function  testToRead () {
return client.get("coffee", function (err, reply) {
   
    console.log(reply.length + " replies:");
    reply.toString();
});
}
