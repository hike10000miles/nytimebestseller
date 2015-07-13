'use strict';

angular.module('bestSellerApp.fiction', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fiction', {
    templateUrl: 'view2/fiction.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('resources/nytimeBestsellerfiction20150706.json').success(function(data) {
    $scope.booklist2 = data;
  });
}]);