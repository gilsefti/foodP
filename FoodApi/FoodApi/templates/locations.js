/**
 * Created by gilad on 7/9/2014.
 */

var newDishControllers = angular.module('newDishControllers', ['externalServices', "ngRoute"]);
newDishControllers.controller('locationsCtrl', function ($scope, $location, locations) {
    $scope.LocModel = {};
    //$scope.LocModel.Name = "y";
    //$scope.LocModel.Location = "T";
    $scope.props.Title = "Where did you get the dish?";
    locations.getLocations().then(function (d) {
        $scope.locals = d
    });
    $scope.addLocation = function () {
        locations.addLocation($scope.LocModel).then(function(d){

        });
    }
    $scope.selectLocal = function (loc) {
        $location.path("describe");
    };
});

newDishControllers.controller("describeCtrl", function ($scope, $location, dishes) {
    $scope.props.Title = "What is the name of the dish?";
    $scope.dishes = dishes.getDishes();
    $scope.selectDishes = function (loc) {
        $location.path("photo");
    };
});

newDishControllers.controller("photoCtrl", function ($scope, $location, dishes) {
    $scope.props.Title = "Add a photo";
    $scope.loadPhoto = function () {
        $location.path("favorites");
    };
});


newDishControllers.controller("favoritesCtrl", function ($scope, $location, dishes) {
    $scope.props.Title = "Add to Lunch box?";
    $scope.addFavorites = function (loc) {
        $location.path("favorites");
    };
});