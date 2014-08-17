/**
 * Created by gilad on 7/9/2014.
 */
var local = 'http://localhost:54864/';

var dish = angular.module("dish", []);
dish.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});

dish.controller('mainCtrl', function ($scope, $http) {
   
        $http({
            method: 'GET',
            url:  "api/Location/Places"
        }).success(function (data) {
            var response = data;
           alert(response);
        }).error(function (ex) {
            alert("error currs");
        });
});


  