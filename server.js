var express = require('express');
var app = express();
var path = require('path');
var getPeeps = require('./src/apiConnector').getPeeps;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  getPeeps(function(err, peeps) {
    res.render('index', { peeps: peeps } )
  })
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening at port', port);
});
module.exports = server;
