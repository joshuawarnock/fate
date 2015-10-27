/**
 * Created on 10/19/15.
 */

var express = require('express');
var router = express.Router();
var request = require('request');

// Gets memberid number
router.get('/member/:screename', function(req, res) {
  var memOptions = {
    url: 'https://www.bungie.net/platform/' +
    'destiny/2/Stats/GetMembershipIdByDisplayName/' + req.params.screename + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(memOptions, function(error, response, body) {
    var memberID = JSON.parse(body).Response;
    res.send(memberID);
  });
});

// Gets characterid number
router.get('/customer/:member', function(req, res) {
  var charOptions = {
    url: 'https://www.bungie.net/platform/destiny/2/Account/' + req.params.member + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(charOptions, function(error, response, body) {
    var charID = JSON.parse(body).Response.data.characters[0].characterBase.characterId;
    res.send(charID);
  })
});

// Gets historical stats for character
router.get('/stats/:member/:character', function(req, res) {
  var statOptions = {
    url: 'https://www.bungie.net/platform/destiny/Stats/2/' + req.params.member +
    '/' + req.params.character + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(statOptions, function(error, response, body) {
    var charStats = JSON.parse(body).Response;
    debugger;
    res.send(charStats);
  })
});

// Gets aggregate stats for character
router.get('/aggstats/:member', function(req, res) {
  var aggstatOptions = {
    url: 'https://www.bungie.net/platform/destiny/Stats/Account/2/' + req.params.member + '/',
    headers: {
      'X-API-Key': 'aafd5349326b4892b7d2c4f50d0ab751'
    }
  };
  request(aggstatOptions, function(error, response, body) {
    var aggStats = JSON.parse(body).Response.mergedAllCharacters.merged.allTime;
    res.send(aggStats);
  })
});

module.exports = router;