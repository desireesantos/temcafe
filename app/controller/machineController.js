var Machine = require('../models/machine');

exports.findAll = function () {
  return [new Machine('IOT01','10')];
}

exports.findById = function (id) {
  return new Machine(id,'10');
}

exports.udpated = function (machine) {
  return new Machine();
}
