var expect = require('chai').expect;
var request = require('supertest');

var mokapot = require('../../app/mokapot');
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
      request.get('/').expect([{"name": "IOT01","status": "10"}],done);
    });
  });

  describe('GET /:id', function () {

    it('returns data about an especific device', function (done) {
     request.get('/IOT01').expect({"name": "IOT01","status": "10"}, done);
    }); 
  });

describe('POST /', function () {
    it('Create a coffee machine', function (done) {
      request.post('/').expect(200,done);
    });
  });

describe('PUT /:id', function () {
    it('Send information for a especific machine', function (done) {
         request.put('/IOT01').expect(200,done);
    });
  });
});
