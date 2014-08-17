var lbExternalSql = angular.module('lbExternalSql', []);
lbExternalSql.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});


lbExternalSql.service('LBDishes', function ($http) {
    this.getDishes = function (loc) {
        var dishes = {};
        var commandUrl = local + "api/LunchBox/Dishes" ;
        var promise = $http({
            method: 'GET',
            url: commandUrl
        }).then(function (d) {
            return d.data;
        }).catch(function (ex) { });
        return promise;
    }
});