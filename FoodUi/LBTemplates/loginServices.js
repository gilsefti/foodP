var loginServices = angular.module('loginServices', ["externalServices"]);

loginServices.service('UserService', function (users, $q) {
    
    var userData = {
        isLogged: false,
        username: '',
        ID: '',
        FBID: ''
    };

    this.initUser = function () {
        var task = $q.defer();
        var success = function (response) {
            users.logFB(response.id).then(function (d) {
                var data = d.data
                userData.ID = data.ID;
                userData.username = data.UserName;
                userData.FBID = data.FacebookID;
                userData.isLogged = true;
                task.resolve();
                //$state.go("Search");
                //window.location.href("lunchBox.html");
            }).catch(function (ex) {
                task.reject();
                //throw ex;
            });
        }

        if (userData.ID == '')
        {
            if (initializeUser) {
                var response = { id: 10152713949253828 }
                success(response);
            }
            else
                FB.api("me/", {},
                    function (response) {
                        if (response.error)
                            task.reject();
                        else
                            success(response);                           
                    })
        }
        else
            task.resolve();
        return task.promise;
    }
    this.user = function () {
        return userData;
    }
});
