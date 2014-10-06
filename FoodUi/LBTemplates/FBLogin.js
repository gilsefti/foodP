mainApp.controller('FBLoginCtrl', function ($scope, UserService, $state) {

    $scope.login = function () {
        if (!window.cordova) {
            var appId = "509210995889450";//prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }
        var success = function (response) {
            if (response.status === 'connected') {
                $state.go("LB");              
            }
        }
        var fail = function (response) {
            alert("login failed")
        }

        //facebookConnectPlugin.login([], success, fail);
        FB.login(
              function (response) {
                  if (response.session) {
                      success();
                  } else {
                      fail();
                  }
              }, {
                  scope: ""
              }
          );
    }


    $scope.logout = function () {
        facebookConnectPlugin.logout(success, fail);
        var success = function (response) {
        
         
        }
        var fail = function (response) { alert("logout failed") }
    }
});

document.addEventListener('deviceready', function () {
    try {
        alert('Device is ready! Make sure you set your app_id below this alert.');
        FB.init({
            appId: "509210995889450",
            nativeInterface: CDV.FB,
            useCachedDialogs: false
        });
        document.getElementById('data').innerHTML = "";
    } catch (e) {
        alert(e);
    }
}, false);
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
