var mocha = require('mocha');
var expect = require('chai').expect;

var Promisr = require('../dist/promisr');

describe('passed', function () {
  'use strict';

  var promisr = new Promisr(global.Promise);

  var proc = promisr.passed;

  context('Function', function () {
    it('takes true and resolves it through Promise interface.', function () {
      return proc(true)
      .then(function (value) {
        expect(value).to.be.true;
      }, function (value) {
        expect(value).to.not.exist;
      });
    });

    it('takes false and resolves it through Promise interface.', function () {
      return proc(false)
      .then(function (value) {
        expect(value).to.be.false;
      }, function (value) {
        expect(value).to.not.exist;
      });
    });

    it('takes nothing and resolves it through Promise interface.', function () {
      return proc()
      .then(function (value) {
        expect(value).to.be.an('undefined');
      }, function (value) {
        expect(value).to.not.exist;
      });
    });

    it('takes an error and resolves it through Promise interface.', function () {
      return proc(new Error('Sample error'))
      .then(function (error) {
        expect(error).to.be.instanceof(Error);
      }, function (value) {
        expect(value).to.not.exist;
      });
    });
  });

});
