var Browser = require('zombie');
var app = require('../../server');
var expect = require('expect.js')
Browser.localhost('example.com', 3000);

describe('User visits homepage', function() {

  var browser = new Browser();

  before(function() {
    return browser.visit('/');
  });

  describe('peeps homepage', function() {
    it('should display title', function() {
      expect(browser.text("title")).to.equal('Chitter Api Tech Test')
    });

    it('should display a list of peeps', function() {
      expect(browser.text("h1")).to.equal('Peepline')
    });
  });

});
