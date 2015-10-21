/**
 * Created on 10/19/15.
 */

var express = require('express');
var router = express.Router();
var request = require('request');

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.bungie.net/platform/destiny/2/Stats/GetMembershipIdByDisplayName/mugillicutty?%7BdestinyMembershipId%7D=4611686018434951893&%7BcharacterId%7D=2305843009219886135",
  "method": "GET",
  "headers": {
    "x-api-key": "aafd5349326b4892b7d2c4f50d0ab751",
    "cache-control": "no-cache",
    "postman-token": "9c845f9d-2e85-7574-3ca4-06c8aa9fcc2f"
  }

router.get('/api', function(req, res, next) {
  request('https://www.bungie.net/platform/destiny/2' +
      '/Stats/GetMembershipIdByDisplayName/mugillicutty')
});


//router.get('/api', function(req, res, next) {
//  request('https://www.bungie.net/platform/destiny/' +
//      req.params.memtype +
//      '2/Stats/GetMembershipIdByDisplayName/' +
//      req.params.memname, function())
//});