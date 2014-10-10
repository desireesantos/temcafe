var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');

var redis = require('redis');
var url = require('url');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/:id', function (req, res) {
  updatedWebClient(parseInt(getRedis()) );
  client.set('coffee', req.body.status);
  res.json(new Machine(req.body.status));
});

app.get('/', function (req, res) {
  res.json({level: '70'});
 });

function updatedWebClient(status){
	ws.callSocket().emit('coffe:level', status); 
}

function getRedis(){
client.get('foo', function (err, reply) {
   reply.toString(); 
});
}