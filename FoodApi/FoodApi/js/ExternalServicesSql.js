var local = 'http://localhost:54864/';

var externalServices = angular.module('externalServices', []);
externalServices.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});


externalServices.service('locations', function ($http) {
    this.getLocations = function () {
        var locations = {};
        var promise = $http({
            method: 'GET',
            url: local + "api/Location/Places"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    };
    this.addLocation = function (loc){
        var promise = $http({
            method: 'POST',
            data:loc,
            url: local + "api/Location/AddPlace"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    }
});


externalServices.service('dishes', function () {
    this.getDishes = function () {
        var dishes = [
            {
                ID: 1,
                name: "Israeli breakfast"
            },
            {
                ID: 2,
                name: "American breakfast"
            }
        ];
        return dishes;
    };
});