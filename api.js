/**
 * Created on 10/19/15.
 */

var express = require('express');
var router = express.Router();
var request = require('request');
//var destiny = require('destiny-client')();
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.bungie.net/platform/destiny/2/Stats/GetMembershipIdByDisplayName/mugillicutty",
  "method": "GET",
  "headers": {
    "x-api-key": "aafd5349326b4892b7d2c4f50d0ab751",
    "cache-control": "no-cache",
    "postman-token": "7a31fcd0-a2fd-7c43-e3a1-f75df695f613"
  }
};

router.get('/', function(req, res, data) {
  request('https://www.bungie.net/platform/destiny/2/Stats/GetMembershipIdByDisplayName/mugillicutty',
  function(error, response, body) {
    var resdata = JSON.parse(body).resdata;
    var dataobj = {};
    for (var i = 0; i < resdata.length; i++) {
      dataobj[i] = resdata[i].dataobj;
    }
    res.send(dataobj);
  })
});

module.exports = router;