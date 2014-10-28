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
              
            }).catch(function (ex) {
                alert(ex);
                task.reject();
            
            });
        }

        if (userData.ID == '')
        {
            if (initializeUser) {
                var response = { id: 10152713949253828 }
                success(response);
            }
            else
                facebookConnectPlugin.api("me/", [],
                      function (response) {
                          success(response);  
                      },
                    function (response) {
                       alert( JSON.stringify(response));
                        task.reject();
                    });
                   
        }
        else
            task.resolve();
        return task.promise;
    }
    this.user = function () {
        return userData;
    }
});
