var assert = require("assert")
var expect = require('chai').expect;
var Machine = require('../../../server/api/service/machine');

describe('Machine service', function(){

    it('#Machine with a new value', function(){
      name = "iot1";
      machine1 = new Machine(100);

      assert.equal(machine1.name, name);
      assert.equal(machine1.status, 100);
      })
})
