  var ws = require('../../../bin/temcafe');

  exports.findAll = function () {
    return [new Machine('IOT01','0')];
  }

  exports.findById = function (id) {
    return new Machine('IOT01','0');
  }

  exports.create = function (name, status) {
    ws.getsocket(status);
    return new Machine(name,status);
  }

exports.update = function (name, status) {
 return new Machine(name, status);
}

function Machine ( name, status) {
    this.name = name;
    this.status = status ==  false ? '0' : status ;
}

