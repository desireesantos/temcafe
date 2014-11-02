var client;
var socket;
var getResult = 0;

exports.startRedis = function () {
	var redis = require('redis');	
	var url = require('url');
	var redisURL = url.parse(process.env.REDISCLOUD_URL);
	client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	client.auth(redisURL.auth.split(":")[1]);
}

exports.listen = function (http) {
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	client.emit('coffe:level', readingCoffeeLevel(client, redis_get));
}); 
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

exports.getRedis = function (client) {
client.get('coffee', function (err, reply) {
	  reply.toString();
	});
}

function readingCoffeeLevel (client, callback) {
 client.get('coffee', function(err, value) {
        if(err) {
            console.error("error");
        } else {
            callback(redis_get(value));
        }
    });
}

function redis_get (value) {
  return getResult = value;
};


