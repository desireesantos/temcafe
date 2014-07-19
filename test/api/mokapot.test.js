var expect = require('chai').expect;
var should = require('chai').should()
var request = require('supertest');
var mokapot = require('../../server/api/mokapot');

request = request(mokapot);

describe('Moka Pot', function () {

  describe('GET /', function () {
    it('returns 200', function (done) {
      request.get('/').expect(200, done);
    });

    it('responds with json', function (done) {
      request.get('/').expect('Content-Type', /json/, done);
    });

    it('returns the registered coffee-makers', function (done) {
      request.get('/').expect([{"name": "IOT01","status": "0"}],done);
    });
  });

  describe('GET /:id', function () {
    it('returns data about an especific device', function (done) {
     request.get('/IOT01').expect({"name": "IOT01","status": "0"}, done);
    }); 
  });

describe('POST /', function () {
  machine = { name: 'IOT01', status: '100'}
    it('Create a coffee machine', function (done) {
      request.post('/').set('Content-Type', 'application/json').send(machine).expect(200, done);     
});
  });

describe('PUT /:id', function () {
  machine = { name: 'IOT01', status: '100'}
    it('Send information for a especific machine', function (done) {
         request.put('/IOT01').set('Content-Type', 'application/json').send(machine).expect(200, done);
    });
  });
});
