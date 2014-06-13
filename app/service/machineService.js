var Machine = require('../models/machine');

exports.findAll = function () {
  return [new Machine('IOT01','0')];
}

exports.create = function (machine) {
  return new Machine(machine.name, machine.status);
}



