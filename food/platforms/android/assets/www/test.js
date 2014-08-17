/**
 * Created by gilad on 7/9/2014.
 */
var local = 'http://localhost:54864/';

var dish = angular.module("dish", ["ngRoute"]);

dish.controller('locationsCtrl',function($scope, $state){
    $scope.x = "xxx";
    $scope.nextCtrl = function(){
        $state.go("newLocation");

    }
});
dish.controller('mainCtrl', function ($scope) {


});
dish.controller('newLocationCtrl',function($scope, $state){
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
  