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
console.log('Redis ready ...');
}

exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return client;
}

exports.setRedis = function (value) {
  client.set('coffee', value);
  console.log('OK +++++++++');
}

exports.getRedis = function () {
var result;	
client.get('coffee', function (err, reply) {
    console.dir(reply); 
});
return result;
};

function  testToRead () {
var result;	
client.get('coffee', function (err, reply) {
    result = reply; 
});
console.log('*************');
console.dir(result)
return result;

}



