'use strict';

/* Controllers */



//F1Feeder main controller
angular.module('F1FeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIservice) {
		$scope.nameFilter = null;
    $scope.driversList = [];

    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
}).
/*Dropbox controller */
controller('dropboxController', function($scope, dropboxService) {
    $scope.dropboxConnection = "no result";
    
    $scope.dropboxEvnt = {};
    $scope.dropboxEvnt.connect = function() {
        alert("here");
    }
}).
/* Driver controller */
controller('driverController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
});
