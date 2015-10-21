/**
 * Created on 10/19/15.
 */

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, data) {
  var options = {
    url: 'https://www.bungie.net/platform/' +
    'destiny/2/Stats/GetMembershipIdByDisplayName/mugillicutty/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(options, function(error, response, body) {
    var member = JSON.parse(body);
    res.send(member);
  })
});

module.exports = router;

