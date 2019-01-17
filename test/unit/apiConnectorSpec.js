var expect = require('chai').expect;
var getPeeps = require('../../src/apiConnector').getPeeps;

describe('GET peeps', function() {
  it('returns all peeps', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    getPeeps(function(err, peeps) {
      // It should return an array object
      expect(Array.isArray(peeps)).to.equal(true);
      // Ensure that at least one follower is in the array
      expect(peeps).to.have.length.above(1);

      done();
    });

  });
});
