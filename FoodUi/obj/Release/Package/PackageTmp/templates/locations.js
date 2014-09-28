
var newDishControllers = angular.module('newDishControllers', ['externalServices', "ngRoute"]);
newDishControllers.controller('locationsCtrl', function ($scope, $location, locations,dataService) {
    dataService.locModel = {};
    dataService.dishModel = {};

    $scope.props.Title = "Where did you get the dish?";
    locations.getLocations().then(function (d) {
        $scope.locals = d.data;
    }).catch(function (error) {
        alert(error);    // Where the error is actually caught.
    });
    $scope.addLocation = function () {
        $location.path("newLocation");     
    }
    $scope.selectLocal = function (loc) {
        dataService.locModel = loc;
        $location.path("dish");
    };
});

newDishControllers.controller('newLocationCtrl', function ($scope, $location, locations,dataService) {
    $scope.locModel = {};

    $scope.props.Title = "Add a new location";
    
    $scope.addLocation = function () {       
        locations.addLocation($scope.locModel).then(function (loc) {
            dataService.locModel = loc;
            $location.path("dish");
        });
    }
});

newDishControllers.controller("photoCtrl", function ($scope, $location, dishes) {
    $scope.props.Title = "Add a photo";
    $scope.loadPhoto = function () {
        $location.path("favorites");
    };
});

