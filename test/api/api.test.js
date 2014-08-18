var expect = require('chai').expect;
var request = require('supertest');
var sinon = require('sinon');
var temcafe = require('../../server/api/index');

request = request(temcafe);


describe('PUT /:id', function () {

  machine = { status: '100'}
    it('Update status coffee for a machine', function (done) {
        request.put('/iot1')
        		.set('Content-Type', 'application/json')
        		.send(machine)
        		.expect(200, done);
    });
});

