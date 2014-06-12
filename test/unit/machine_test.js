var assert = require("assert")
var machineService = require('../../app/service/machineService');


describe('Machine service', function(){
  describe('#findAll', function(){
    it('Retuns all machines', function(){
      assert.equal(machineService.findAll,1);
    })
  })
})
