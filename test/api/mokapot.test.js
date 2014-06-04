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
      request.get('/').expect([], done);
    });
  });

});
