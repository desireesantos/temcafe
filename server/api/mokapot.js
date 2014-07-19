var express = require('express');
var app = module.exports = express();
var service = require('./service/machine');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json(service.findAll());
});

app.get('/:id', function (req, res) {
  res.json(service.findById(req.params.id)); 
});

app.post('/',function (req, res) {
  res.json(service.create(req.body.name, req.body.status));
});

app.put('/:id', function (req, res) {
  res.json(service.update(req.params.id, req.body.status ));
});

