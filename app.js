if (!module.parent) {
  http.createServer(app).listen(process.env.PORT, function() {
    console.log('Server listening on ' + app.get('port'))
  })
}
module.exports = app;
