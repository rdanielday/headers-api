var express = require('express');
var app = express();

app.get("/", function(req, res) {
  var OS = req.headers['user-agent'].match(/\(([^)]+)\)/);
  var user = {
    ip: req.headers['x-forwarded-for'],
    language: req.acceptsLanguages()[0],
    software: OS[1]
  };
  res.json(user);
});

var server = app.listen(process.env.PORT, function() {
  console.log('Listening on port %s...', server.address().port);
});
