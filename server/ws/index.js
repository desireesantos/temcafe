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
    collection.insert({'coffee': '10'}, function(er,rs) {
    	console.log("Record added as "+ db.collection.find(){{ "_id" : ObjectId("526705b4a3559a176784b4af"), "coffee" : "10" }};
    });
  });
});
};


exports.callSocket = function () {
 return socket;
}


