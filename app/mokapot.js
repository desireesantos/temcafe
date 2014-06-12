var express = require('express');
var app = module.exports = express();
var MachineControl = require('./controller/machineController');

app.get('/', function (req, res) {
  res.send(new MachineControl.findAll());
});

app.get('/:id', function (req, res) {
  res.send(new MachineControl.findById(req.params.id)); 
});

app.post('/',function (req, res) {
  
  res.send(res.statusCode = 200);
});

app.put('/:id', function (req, res) {
  res.send(res.statusCode = 200); 
});
