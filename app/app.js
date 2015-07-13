'use strict';

// Declare app level module which depends on views, and components
var bestSellerApp = angular.module('bestSellerApp', [
  'ngRoute',
  'bestSellerApp.nonfiction',
  'bestSellerApp.fiction',
  'bestSellerApp.culture',
  'bestSellerApp.science',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/nonfiction'});
}]);