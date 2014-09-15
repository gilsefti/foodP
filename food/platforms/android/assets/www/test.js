/**
 * Created by gilad on 7/9/2014.
 */
var serverUrl = 'http://192.168.1.128:58547/';

var dish = angular.module("dish", []);
dish.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});

dish.controller('mainCtrl', function ($scope, $http) {
   $scope.getLocations = function () {
        var locations = {};
        $http({
            method: 'GET',
            url: serverUrl + "api/Location/Places"
        }).then(function (d) {
            alert(d.data);
        }).catch(function (error) {
            alert(error);    // Where the error is actually caught.
        });;

    };
});
