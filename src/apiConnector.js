var request = require('superagent')

var getPeeps = function(callback) {
  request
    .get("https://chitter-backend-api.herokuapp.com/peeps")
    .end(function(err, res) {
      if (!err) {
        var peeps = res.body.map(function(peep) {
          return peep.id;
        });
        callback(null, peeps);
      } else {
        callback('Error Occurred!');
      }
    });
};

module.exports.getPeeps = getPeeps;
