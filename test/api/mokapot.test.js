var expect = require('chai').expect;
var should = require('chai').should()
var request = require('supertest');
var mokapot = require('../../server/api/mokapot');

request = request(mokapot);

describe('TemCafe', function () {

describe('PUT /:id', function () {
  machine = { status: '100'}
    it('Update status coffee for a machine', function (done) {
         request.put('/IOT01').set('Content-Type', 'application/json').send(machine).expect(200, done);
    });
  });
});
