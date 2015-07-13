'use strict';

angular.module('bestSellerApp.nonfiction', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nonfiction', {
    templateUrl: 'view1/nonfiction.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/nytimeBestsellerNonfiction20150706.json').success(function(data) {
    $scope.booklist1 = data;
  });
  $scope.wants = [
    {'title' :'Book Title'}
  ];
  $scope.addWants = function() {
    $scope.wants.push({'title': $scope.wantbook});
  };
}]);