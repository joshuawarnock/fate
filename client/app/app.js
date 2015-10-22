/**
 * Created on 10/22/15.
 */
var app = angular.module('traitApp', ['ngResource']);

app.controller('traitController', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://localhost:1555/member/' + $scope.search
  }).success(function(response) {
    $scope.memberid = response;
  }).then(function($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://localhost:1555/customer/' + response
    }).success(function(response) {
      $scope.customerid = response;
    })
  })
});
