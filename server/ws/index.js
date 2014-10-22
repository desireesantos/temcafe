var socket;
var redis = require('redis');
var client;

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

exports.getRedis = function () {
   client.get("coffee", function (err, reply) {
       return reply.toString(); 
    });
};

exports.setRedis = function (newStatus) {
  console.log("***** SET UP *****")
  client.set('coffee', newStatus);
  console.log(
        client.get("coffee", function (err, reply) {
       return reply.toString(); 
    })
    );
}

function startRedis(){
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);
client.set('coffee', '0');
}

