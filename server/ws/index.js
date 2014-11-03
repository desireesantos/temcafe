var redisClient;
var socket;
var getResult = 0;

exports.startRedis = function () {
	var redis = require('redis');	
	var url = require('url');
	var redisURL = url.parse(process.env.REDISCLOUD_URL);
	redisClient = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	redisClient.auth(redisURL.auth.split(":")[1]);
}

exports.listen = function (http) {
	readingCoffeeLevel(redisClient, redis_get);
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	console.log('someone connecting 3 with value ' + getResult);	
	client.emit('coffe:level', getResult);	
	console.log('someone connecting 4...');
}); 
}

exports.callSocket = function () {
 return socket;
}

exports.redis = function () {
 return redisClient;
}

exports.setRedis = function (value) {
 console.log('Setting value 1' + value);
 redisClient.set('coffee', value);
 readingCoffeeLevel(redisClient, redis_get);
 console.log('Setting value 2' + getResult);
 console.log('Setting value 2' + getResult);
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
  console.dir("ENTROU 2 " + getResult);
};


