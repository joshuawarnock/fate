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
        }).success(function(response){
          $scope.stats = response;
        })
      })
    })

  }

});
