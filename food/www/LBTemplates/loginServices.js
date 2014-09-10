var loginServices = angular.module('loginServices', ["externalServices"]);

loginServices.service('UserService', function (users) {

    var userData = {
        isLogged: false,
        username: '',
        ID: '',
        FBID:''
    };
    var success = function (response) {
        users.logFB(response.id).then(function (d) {
            var data = d.data
            userData.id = data.ID;
            userData.username = data.UserName;
            userData.FBID = data.FacebookID;
            userData.isLogged = true;
            //$state.go("Search");
            //window.location.href("lunchBox.html");
        }).catch(function (ex) {
            var x = 1;
            //throw ex;
        });
                     
    }
    this.initUser = function () {
        facebookConnectPlugin.api("me/", [],
                  success,
                   function (response) {
                       alert(JSON.stringify(response))
                   });
    }
    this.user = function () {
        return userData;
    }
});
