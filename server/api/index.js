var express = require('express');
var app = module.exports = express();
var Machine =  require('./service/machine');
var ws = require('../ws')

var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.put('/:id', function (req, res) {
  function x (callback){callback(getSocket())};
  res.json(new Machine(req.body.status));
});


function getSocket() {
  ws.server(function (io) {  
  io.on('coffee:level:update', function () {
     console.log('Entrou')
        io.emit('coffee:level:update', 100);
    }); }
)}

