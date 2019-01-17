var express = require('express');
var app = express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    res.render("index");
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening at port', port);
});
module.exports = server;
