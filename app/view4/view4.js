'use strict';

angular.module('bestSellerApp.science', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/science', {
    templateUrl: 'view4/science.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/nytimeBestsellerScience20150706.json').success(function(data) {
    $scope.booklist4 = data;
  });
}]);