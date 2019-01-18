var Browser = require('zombie')
var app = require('../../server')
var expect = require('expect.js')
var nock = require('nock')
Browser.localhost('example.com', 3000)

describe('User visits homepage', function() {

  var browser = new Browser()

  before(function() {
    nock("https://chitter-backend-api.herokuapp.com/")
      .get('/peeps')
      .replyWithFile(200, __dirname + '/mockApi.json', {
        'Content-Type': 'application/json',
      })
    return browser.visit('/')
  })

  describe('peeps homepage', function() {
    it('should display title', function(done) {
      expect(browser.text("title")).to.equal('Chitter Api Tech Test')
      done()
    })

    it('should display page h1', function(done) {
      expect(browser.text("h1")).to.equal('Peepline')
      done()
    })

    it('should display list of all peeeps with most recent peep first', function(done) {
      expect(browser.text("li:nth-of-type(1)")).to.equal('Hit em up? More like hit me up (pls)')
      expect(browser.text("li:nth-of-type(2)")).to.equal('guess who?')
      done()
    })
  })

})
