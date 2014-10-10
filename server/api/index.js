var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');

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
