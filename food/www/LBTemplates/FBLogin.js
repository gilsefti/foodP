mainApp.controller('FBLoginCtrl', function ($scope, UserService, $state) {
    $scope.login = function () {
        if (!window.cordova) {
            var appId = "509210995889450";//prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }

        facebookConnectPlugin.login([], success, fail);
    }

    var success = function (response) {
        if (response.status === 'connected') {
            var promiseA =  UserService.initUser();
            promiseA.then(function () {
                $state.go("LB");
            }).catch(function (er)
            { alert(er) });
        }
    }
    var fail = function (response) {
        alert("login failed")
    }

    $scope.logout = function () {
        facebookConnectPlugin.logout(success, fail);
        var success = function (response) {
        
         
        }
        var fail = function (response) { alert("logout failed") }
    }
});

//function myLogin() {
//    var appId = "509210995889450";//prompt("Enter FB Application ID", "");
//    facebookConnectPlugin.browserInit(appId);
//    facebookConnectPlugin.login([],
//       success, fail);
//    var success = function (response) {
//        if (response.status === 'connected')
//        { alert(JSON.stringify(response)) }
//    }
//    var fail = function (response) { alert("login failed") }

//}
