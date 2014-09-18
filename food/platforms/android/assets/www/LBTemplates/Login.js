
loginServices.controller('loginCtrl', function ($scope, login, UserService, $state) {
    $scope.login = function () {
       
        login.login($scope.credentials).then(function (d) {
            if (d.data.length == 0) {
                UserService.user().isLogged = false;
                UserService.user().username = '';
                UserService.user().ID = '';
            }
            else {
                UserService.user().isLogged = true;
                UserService.user().username = d.data[0].UserName;
                UserService.user().ID = d.data[0].ID;
                $state.go("LB");
            }
        }).catch(function (ex) {           
            UserService.user().isLogged = false;
            UserService.user().username = '';
            UserService.user().ID = '';
            alert( ex);
        });

    }
});

