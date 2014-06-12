var Machine = require('../models/machine');
var machineIoT1 = new Machine('IOT01','0');

exports.findAll = function () {
  return [machineIoT1];
}

exports.create = function (machine) {
  return new Machine(machine.name, machine.status);
}




