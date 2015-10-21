/**
 * Created on 10/19/15.
 */

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/member/:member', function(req, res) {
  var memOptions = {
    url: 'https://www.bungie.net/platform/' +
    'destiny/2/Stats/GetMembershipIdByDisplayName/' + req.params.member + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(memOptions, function(error, response, body) {
    var memberID = JSON.parse(body).Response;
    res.send(memberID);
  });
});

router.get('/customer/:member', function(req, res) {
  var charOptions = {
    url: 'https://www.bungie.net/platform/destiny/2/Account/' + req.params.member + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(charOptions, function(error, response, body) {
    var charID = JSON.parse(body);
    res.send(charID);
  })
});

module.exports = router;