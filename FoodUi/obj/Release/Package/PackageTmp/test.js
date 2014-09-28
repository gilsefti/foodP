/**
 * Created by gilad on 7/9/2014.
 */
var local = 'http://localhost:54864/';

var dish = angular.module("dish", ["ngRoute"]);

dish.controller('locationsCtrl',function($scope, $location){
    $scope.x = "xxx";
    $scope.nextCtrl = function(){
        $location.path("newLocation");

    }
});
dish.controller('mainCtrl', function ($scope) {


});
dish.controller('newLocationCtrl',function($scope, $location){
  alert($scope.x);
});

dish.config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'locationsCtrl',
            template:" <button ng-click='nextCtrl()'>next Ctrl</button> "
        }).when("/newLocation", {
            controller: "newLocationCtrl",
            template:"next Ctrl"
        })
    }
);
  