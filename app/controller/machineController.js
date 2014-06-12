var Machine = require('../models/machine');
var machineIoT1 = new Machine('IOT01','10');

exports.findAll = function () {
  return [machineIoT1];
}

exports.findById = function (id) {
  return machineIoT1;
}

exports.new = function (machine) {
  return new Machine(machine.name, machine.status);
}
