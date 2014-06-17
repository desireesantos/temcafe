var Machine = require('../models/machine');
var service = require('../service/machineService');

exports.findAll = function () {
  return service.findAll();
}

// Add this later
exports.findById = function (id) {
  return new Machine('IOT01','0');
}

exports.new = function (machine) {
  return service.create(machine);
}
