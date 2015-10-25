/**
 * Created on 10/22/15.
 */
var app = angular.module('traitApp', []);

app.controller('traitController', function($scope, $http) {
  $scope.getGuardian = function() {
    $http({
      method: 'GET',
      url: 'http://localhost:1555/member/' + $scope.search
    }).success(function(response) {
      $scope.memberid = response;
      $http({
        method: 'GET',
        url: 'http://localhost:1555/customer/' + $scope.memberid
      }).success(function(response) {
        $scope.clientid = response;
        $http({
          method: 'GET',
          url: 'http://localhost:1555/stats/' + $scope.memberid + '/' + $scope.clientid
        }).success(function(response) {

          var pvp = response.allPvP.allTime;
          $scope.pvp = pvp;

          var allStrikes = response.allStrikes.allTime;
          $scope.allstrike = allStrikes;

          var patrol = response.patrol.allTime;
          $scope.patrol = patrol;

          var raid = response.raid.allTime;
          $scope.raid = raid;

          var story = response.story.allTime;
          $scope.story = story;

          $http({
            method: 'GET',
            url: 'http://localhost:1555/aggstats/' + $scope.memberid
          }).success(function(response) {
            $scope.aggStats = response;
          })
        })
      })
    })
  }
});