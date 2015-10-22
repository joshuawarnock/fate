/**
 * Created on 10/22/15.
 */
var app = angular.module('traitApp', ['ngResource']);

app.controller('traitController', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://localhost:1555/member/mugillicutty'
  }).success(function(response) {
    $scope.memberid = response;
  })
});
