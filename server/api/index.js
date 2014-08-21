var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');
 var redis = require("redis"),
        client = redis.createClient(10553, 'pub-redis-10553.us-east-1-3.1.ec2.garantiadata.com');


var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/:id', function (req, res) {
  client.set("status", req.body.status);
  updatedWebClient(req.body.status);
  res.json(new Machine(req.body.status));
});

app.get('/', function (req, res) {
  res.json({level: client.get("status")});
 });

function updatedWebClient(status){
	ws.callSocket().emit('coffe:level', status); 
}