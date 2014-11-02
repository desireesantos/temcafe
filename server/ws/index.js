var client;
var socket;

exports.startRedis = function () {
	var redis = require('redis');	
	var url = require('url');
	var redisURL = url.parse(process.env.REDISCLOUD_URL);
	client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	client.auth(redisURL.auth.split(":")[1]);

	client.set('coffee', readingCoffeeLevel(redis));
	console.log('Redis ready with value ' + readingCoffeeLevel());
}


exports.listen = function (http) {
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	client.emit('coffe:level', testToRead());	
	console.log('someone connecting ...');
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

exports.getRedis = function () {
client.get('coffee', client.print);
}

function  readingCoffeeLevel (client) {
	client.get("coffee", function (err, reply) {
	  reply.toString();
	});
}
