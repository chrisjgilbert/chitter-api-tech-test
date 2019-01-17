var expect = require('chai').expect;
var getPeeps = require('../../src/apiConnector').getPeeps;

describe('GET peeps', function() {
  beforeEach(function() {
    var peepsResponse = [
      {
        "id": 3,
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "updated_at": "2018-06-23T13:21:23.317Z",
        "user": {
          "id": 1,
          "handle": "kay"
        },
        "likes": [{
          "user": {
            "id": 1,
            "handle": "kay"
          }
        }]
      }
    ]
    nock("https://chitter-backend-api.herokuapp.com/peeps")
      .get('/peeps')
      .reply(200, peepsResponse);
    });
  })
  it('returns all peeps', function(done) {
    this.timeout(5000);
    getPeeps(function(err, peeps) {
      expect(Array.isArray(peeps)).to.equal(true);
      expect(peeps).to.have.length.above(0);
      done()
    })
})
