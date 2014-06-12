var assert = require("assert")
var expect = require('chai').expect;
var machineService = require('../../../app/service/machineService');

describe('Machine service', function(){

    it('#findAll', function(){
        expect(machineService.findAll()).to.not.be.empty;
      })

    it('#create', function(){
        var Machine = require('../../../app/models/machine');
        new_machine = machineService.create(new Machine("01",100));

        assert.equal(new_machine.name, "01");
        assert.equal(new_machine.status, 100);
      })
})
