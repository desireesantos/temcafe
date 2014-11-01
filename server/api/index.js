var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');
var ws = require('../ws');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/:id', function (req, res) {
  ws.redis().set('foo', req.body.status);	

 console.log("** Redis set**");
 console.log(req.body.status);

  console.log("** Redis get**");
  console.log(ws.getRedis());
  updatedWebClient(ws.getRedis());
  res.json(new Machine(req.body.status));
});

app.get('/', function (req, res) {
  res.json({level: '70'});
 });

function updatedWebClient(status){
	ws.callSocket().emit('coffe:level', status); 
}

