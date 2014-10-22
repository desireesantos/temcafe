var socket;
var redis = require('redis');
var client = redis.createClient();

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
      client.emit('coffe:level', '0' );
      console.log('someone connected');
      startRedis();
  }); 
};

exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
  return redis;
}

exports.getRedis = function () {
   redis.get("coffee", function (err, reply) {
       return reply.toString(); 
    });
};

exports.setRedis = function (newStatus) {
  redis.set('coffee', newStatus);
}

function startRedis(){
 setRedis(0);
}