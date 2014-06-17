var express = require('express');
var app = module.exports = express();
var machineControl = require('./controller/machineController');

app.get('/', function (req, res) {
  
  res.render('index', { title: 'ejs' });
  res.json(machineControl.findAll());
});

app.get('/:id', function (req, res) {
  res.json(machineControl.findById(req.params.id)); 
});

app.post('/',function (req, res) {
  res.send(res.statusCode = 200);
});

app.put('/:id', function (req, res) {
  res.send(res.statusCode = 200); 
});

