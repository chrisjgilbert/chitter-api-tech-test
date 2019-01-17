var Browser = require('zombie');
var app = require('../../server');
var expect = require('expect.js')
Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function() {
    return browser.visit('/');
  });

  describe('homepage', function() {
    it('should see welcome page', function() {
      expect(browser.text("title")).to.equal('Chitter Api Tech Test');
    });
  });

});
