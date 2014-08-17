var lbExternalSql = angular.module('lbExternalSql', []);
lbExternalSql.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
});


lbExternalSql.service('LBDishes', function ($http) {
    this.getDishes = function (usr) {
        var dishes = {};
        var commandUrl = local + "api/LunchBox/Dishes/" + usr;;
        var promise = $http({
            method: 'GET',          
            url: commandUrl
        }).then(function (d) {
            return d.data;
        }).catch(function (ex) { });
        return promise;
    }
});

lbExternalSql.service('login', function ($http) {
    this.login = function (credentials) {
        credentials.ID = -1;
        var commandUrl = local + "api/user/Login";
        var promise = $http({
            method: 'POST',
            data: credentials,
            url: commandUrl
        });
        return promise;
    }
})