'use strict';




angular.module('F1FeederApp', [
	'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	when("/dropbox", {templateUrl: "partials/dropbox.html", controller: "dropboxController"}).
	otherwise({redirectTo: '/drivers'});
}]);

