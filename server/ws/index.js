var redisClient;
var socket;
var getResult = 0;

exports.startRedis = function () {
	var redis = require('redis');	
	var url = require('url');
	var redisURL = url.parse(process.env.REDISCLOUD_URL);
	redisClient = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	redisClient.auth(redisURL.auth.split(":")[1]);
	console.log('Redis ready with value(2) ----> ');
}

exports.listen = function (http) {
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	client.emit('coffe:level', readingCoffeeLevel(redisClient, redis_get) );	
	console.log('someone connecting 3...');
}); 
}

exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return redisClient;
}

exports.setRedis = function (value) {
 redisClient.set('coffee', value);
}

exports.getRedis = function () {
redisClient.get('coffee', function (err, reply) {
	  reply.toString();
	});
}

function readingCoffeeLevel (redisClient, callback) {
 redisClient.get('coffee', function(err, value) {
        if(err) {
            console.error("error");
        } else {
            callback(value);
        }
    });
}

function redis_get (value) {
  getResult = value;
  console.dir("ENTROU 2" + getResult);
};


