var Machine = require('../models/machine');

exports.findAll = function () {
  return [new Machine('IOT01','10')];
}
