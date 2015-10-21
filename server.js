/**
 * Created on 10/19/15.
 */

var express = require('express');
var app = express();
var api = require('./api.js');

app.use(function(req, res, next) {
  console.log(req.url);
  next()
});

app.use(express.static('public'));

//app.use('/api',api);

var server = app.listen(1555, function() {
  console.log('Server is running at http://localhost:' +
      server.address().port);
});