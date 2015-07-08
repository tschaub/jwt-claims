/* eslint-env mocha */
var assert = require('chai').assert;

var decode = require('../lib/index');
var fixtures = require('./fixtures-encoded.json');

describe('decode()', function() {
  for (var key in fixtures) {
    createTest(key);
  }
});

function createTest(key) {
  var fixture = fixtures[key];
  it('parses ' + key, function() {
    var payload = decode(fixture.token);
    assert.deepEqual(payload, fixture.payload);
  });
}
