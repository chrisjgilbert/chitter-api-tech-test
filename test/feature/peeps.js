process.env.NODE_ENV = 'test'

var app = require('../../server')
var Browser = require('zombie')
var assert = require('assert');

describe('peeps index page', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000)
    this.browser = new Browser( { site: 'http://localhost:3000' } )
  })

  before(function() {
    this.browser.load('/peeps', done)
  })

  it('should display all peeps', function() {
    assert.ok(this.browser.success)
    assert.equal(this.browser.text('h1'), 'Hello, world')
  })

  after(function() {
    this.server.close(done)
  })
})
