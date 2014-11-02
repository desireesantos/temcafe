var client;
var socket;

exports.startRedis = function () {
	var redis = require('redis');	
	var url = require('url');
	var redisURL = url.parse(process.env.REDISCLOUD_URL);
	client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	client.auth(redisURL.auth.split(":")[1]);
	client.set('coffee', 10);
	result = readingCoffeeLevel(client);
	console.dir('Redis ready with value(2) ----> ' + result);
}


exports.listen = function (http) {
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	client.emit('coffe:level', 40);
	console.dir("FOI(3) ----- "+ 40);	
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

exports.getRedis = function (client) {
client.get('coffee', function (err, reply) {
	  reply.toString();
	});
}

function readingCoffeeLevel (client) {
  client.get('coffee', function (err, reply) {
 	console.dir('DIR ' + reply);
 	console.log('LOG ' + reply);
	});
}
