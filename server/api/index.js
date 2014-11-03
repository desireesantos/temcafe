var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');
var ws = require('../ws');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/:id', function (req, res) {	

 ws.setRedis(req.body.status);
 updatedWebClient(req.body.status);
 res.json(new Machine(req.body.status));
});

app.get('/', function (req, res) {
  res.json({level: ws.getRedis()});
 });

function updatedWebClient(status){
	ws.callSocket().emit('coffe:level', status); 
}

