mainApp.controller('FBLoginCtrl', function ($scope, UserService, $state) {

    $scope.fbLogin = function () {
        $state.go("Search"); 
        if (!window.cordova) {
            var appId = "509210995889450";//prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }
        var success = function () {           
                $state.go("LB");  
        }
        var fail = function () {
            alert("login failed")
        }

        facebookConnectPlugin.login([], success, fail);
   
    }

   

    $scope.logout = function () {
        facebookConnectPlugin.logout(success, fail);
        var success = function (response) {
        
         
        }
        var fail = function (response) { alert("logout failed") }
    }
});
