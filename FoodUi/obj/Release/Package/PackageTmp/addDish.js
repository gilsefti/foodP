//var dish = angular.module("dish", ['externalServices','newDishControllers']);

var dish = angular.module("dish", ["ngRoute", "newDishControllers"]);
dish.controller('mainCtrl', function ($scope) {
    $scope.props = {};
    $scope.props.Title = "";

});

dish.service("dataService", function () {
    this.locModel = {};
    this.dishModel = {};
});

var newControllers = angular.module("newControllers", ["externalServices"]);

dish.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/locations.html',
            controller: 'locationsCtrl'
        }).when("/newLocation", {
            templateUrl: "templates/newLocation.html",
            controller: "newLocationCtrl"
        }).when("/dish", {
            templateUrl: "templates/dishes.html",
            controller: "dishCtrl"
        }).when('/photo', {
            templateUrl: 'templates/photo.html',
            controller: 'photoCtrl'
        }).when('/newDish', {
            templateUrl: 'templates/newDish.html',
            controller: 'newDishCtrl'
        }).when('/addLB', {
            templateUrl: 'templates/addLB.html',
            controller: 'addLBCtrl'
        });
    }
);

