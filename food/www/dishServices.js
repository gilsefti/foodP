//var dish = angular.module("dish", ['externalServices','newDishControllers']);

var dishSerices = angular.module("dishSerices", [ "newDishControllers", "loginServices"]);
//var dish = mainApp;
//dish.controller('mainCtrl', function ($scope) {
//    $scope.props = {};   
//    $scope.props.Title = "";
//});

dishSerices.service("dataService", function () {
    this.locModel = {};
    this.dishModel = {};
});

//var newControllers = angular.module("newControllers", ["externalServices"]);

//dish.config(function ($routeProvider) {
//        $routeProvider.when('/location', {
//            templateUrl: 'AddTemplates/locations.html',
//            controller: 'locationsCtrl'
//        }).when("/newLocation", {
//            templateUrl: "AddTemplates/newLocation.html",
//            controller: "newLocationCtrl"
//        }).when("/dish", {
//            templateUrl: "AddTemplates/dishes.html",
//            controller: "dishCtrl"
//        }).when('/photo', {
//            templateUrl: 'AddTemplates/photo.html',
//            controller: 'photoCtrl'
//        }).when('/newDish', {
//            templateUrl: 'AddTemplates/newDish.html',
//            controller: 'newDishCtrl'
//        }).when('/addLB', {
//            templateUrl: 'AddTemplates/addLB.html',
//            controller: 'addLBCtrl'
//        });
//    }
//);

