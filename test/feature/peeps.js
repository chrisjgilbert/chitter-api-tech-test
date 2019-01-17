process.env.NODE_ENV = 'test'

var app = require('../../app.js')

describe('peeps index page', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000)
  })

  it('should display all peeps')

  after(function() {
    this.server.close(done)
  })
})
