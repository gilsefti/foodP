//var dish = angular.module("dish", ['externalServices','newDishControllers']);

var dish = angular.module("dish", ["ngRoute", "newDishControllers"]);
dish.controller('mainCtrl', function ($scope) {
    $scope.props = {};
    $scope.props.Title = "W2222";
});

var newControllers = angular.module("newControllers", ["externalServices"]);

dish.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/locations.html',
            controller: 'locationsCtrl'
        }).when("/describe", {
            templateUrl: "templates/describe.html",
            controller: "describeCtrl"
        }).when('/photo', {
            templateUrl: 'templates/photo.html',
            controller: 'photoCtrl'
        }).when('/favorites', {
            templateUrl: 'templates/favorites.html',
            controller: 'favoritesCtrl'
        });
    }
);