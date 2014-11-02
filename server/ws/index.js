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
client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

client.on("connect", function () {
    console.log("Got socket connection.")
});
client('coffee', 10);
console.log('Redis ready ...');
}


exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return client;
}

exports.setRedis = function (value) {
  console.log( client.set('coffee', value, client.print));
}

exports.getRedis = function () {
 client.info('coffee', function (err, reply) {
    reply.toString; 
});
};

function  testToRead () {
client.get("coffee", redis.print);

}



