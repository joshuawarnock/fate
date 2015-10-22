/**
 * Created on 10/22/15.
 */
var app = angular.module('traitApp', ['ngResource']);

app.controller('traitController', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/member/:screename'
  }).then(function characterCapture(response) {
    $http({
      method: 'GET',
      url: '/customer/:member'
    }).then(function statCapture(response) {
      $http({
        method: 'GET',
        url: '/stats/:member/:character'
      })
    })
  })
});
