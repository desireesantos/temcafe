var client;
var socket;

exports.listen = function (http) {
 socket = require('socket.io').listen(http, require('config').server);
 socket.sockets.on('connection', function (client) {
 client.emit('coffe:level', 10);	
 console.log('someone connecting ...');
  }); 
};

exports.startRedis = function () {
var mongo = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL;

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('temcafe', function(er, collection) {
    collection.insert({'coffee': '10'}, {safe: true}, function(er,rs) {
    	console.log("Record added as "+ rs[0]);
    });
  });
});
};


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
