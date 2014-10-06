



var externalServices = angular.module('externalServices', []);
externalServices.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});


externalServices.service('locations', function ($http) {
    this.getLocations = function (subStr) {
        var dat = { 'subStr': subStr };
        var promise = $http({
            method: 'POST',
            data:dat,
            url: serverUrl + "api/Location/Places"
        });
        return promise;
    };
    this.addLocation = function (loc) {
        var promise = $http({
            method: 'POST',
            data: loc,
            url: serverUrl + "api/Location/AddPlace"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    }
});

externalServices.service('dishes', function ($http) {
    this.getDishes = function (loc) {
        var dishes = {};
        var commandUrl = serverUrl + "api/Dish/DishesByLocation/" + loc.ID;
        var promise = $http({
            method: 'GET',
            url: commandUrl
        });
        return promise;
    }
    this.getDishesById = function (id) {
        var dishes = {};
        var commandUrl = serverUrl + "api/Dish/DishesById/" + id;
        var promise = $http({
            method: 'GET',
            url: commandUrl
        });
        return promise;
    }
    this.addDish = function (dish) {
        var promise = $http({
            method: 'POST',
            data: dish,
            url: serverUrl + "api/Dish/AddDish"
        }).then(function (d) {
            return d.data;
        })
        return promise;
    }
});
externalServices.service('lunchBox', function ($http) {
    this.addToLB = function (dis, userID) {
        dat = {dish:dis, usr:userID}
        var commandUrl = serverUrl + "api/Dish/AddLB";
        var promise = $http({
            method: 'POST',
            url: commandUrl,
            data: dat
        });
        return promise;
    }
});

externalServices.service('users', function ($http) {
    this.logFB = function (FBID) {
        var commandUrl = serverUrl + "api/User/LogFB/" + FBID;
        var promise = $http({
            method: 'GET',
            url: commandUrl          
        });
        return promise;
    }
});