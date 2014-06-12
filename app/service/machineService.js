var Machine = require('../models/machine');
var machineName = "iot01";

exports.findAll = function () {
  return new Machine(machineName,'10') ;
}

exports.findById = function (id) {
  return new Machine(id,'10');
}

exports.udpated = function (machine) {
  return new Machine();
}
