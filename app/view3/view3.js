'use strict';

angular.module('bestSellerApp.culture', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/culture', {
    templateUrl: 'view3/culture.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/nytimeBestsellerCulture20150706.json').success(function(data) {
    $scope.booklist3 = data;
  });
}]);