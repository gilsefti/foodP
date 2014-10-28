mainApp.controller('FBLoginCtrl', function ($scope, UserService, $state) {
  $scope.proccessing = false;
    $scope.fbLogin = function () {
        $scope.proccessing = true;
        if (!window.cordova) {
            var appId = "509210995889450";//prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }
        var success = function (response) {          
            var promiseA = UserService.initUser();
            promiseA.then(function () {
                $state.go("LB");
                $scope.proccessing = false;
            }).catch(function (er)
            { alert(er) });
        }
        var fail = function (response) {
            alert(JSON.stringify(response));
        }

        facebookConnectPlugin.login(["email"], success, fail);

    }



    $scope.logout = function () {
        facebookConnectPlugin.logout(success, fail);
        var success = function (response) {


        }
        var fail = function (response) { alert("logout failed") }
    }
});
