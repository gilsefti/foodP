var loginServices = angular.module('loginServices', []);

loginServices.service('UserService', function () {

    this.user = {
        isLogged: false,
        username: '',
        ID: ''
    };
});
