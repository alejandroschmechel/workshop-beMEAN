'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/beers', {
      templateUrl: 'expose/beers/list',
      controller: 'BeerListController'
    }).
    when('/beers/add', {
      templateUrl: 'expose/beers/create',
      controller: 'BeerCreateController'
    }).
    when('/beers/total', {
      templateUrl: 'expose/beers/total',
      controller: 'BeerTotalController'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeerShowController'
    }).
    when('/beers/:id/edit', {
      templateUrl: 'expose/beers/edit',
      controller: 'BeerEditController'
    }).
    when('/xxx', {
      templateUrl: 'expose/xxx/list',
      controller: 'XXXController'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
