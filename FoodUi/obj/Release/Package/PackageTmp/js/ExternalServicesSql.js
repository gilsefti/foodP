var local = 'http://localhost:58547/';

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
        });
        return promise;
    };
    this.addLocation = function (loc) {
        var promise = $http({
            method: 'POST',
            data: loc,
            url: local + "api/Location/AddPlace"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    }
});

externalServices.service('dishes', function ($http) {
    this.getDishes = function (loc) {
        var dishes = {};
        var commandUrl = local + "api/Dish/Dishes/" + loc.ID;
        var promise = $http({
            method: 'GET',
            url: commandUrl
        }).then(function (d) {
            return d.data;
        }, function (ex) {

        })
        return promise;
    }

    this.addDish = function (dish) {
        var promise = $http({
            method: 'POST',
            data: dish,
            url: local + "api/Dish/AddDish"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    }
});
externalServices.service('lunchBox', function ($http) {
    this.addToLB = function (dis) {
        var commandUrl = local + "api/Dish/AddLB";
        var promise = $http({
            method: 'POST',
            url: commandUrl,
            data: dis
        });
        return promise;
    }
});