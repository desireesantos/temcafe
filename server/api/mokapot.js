var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/:id', function (req, res) {
  res.json(new Machine(req.body.status));
});

