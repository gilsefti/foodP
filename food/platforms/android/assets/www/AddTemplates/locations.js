
var newDishControllers = angular.module('newDishControllers', ['externalServices', , "loginServices"]);
newDishControllers.controller('locationsCtrl', function ($scope, $state, locations,dataService) {
    dataService.locModel = {};
    dataService.dishModel = {};


    $scope.subStr = "";
 
    $scope.locationRows = function () {
        locations.getLocations($scope.subStr).then(function (dat) {
            $scope.locals = dat.data;      
        }).catch(function (er)
        { alert(er) });
    }
    $scope.locationRows();




    $scope.props.Title = "Where did you get the dish?";
    //locations.getLocations().then(function (d) {
    //    $scope.locals = d.data;
    //}).catch(function (error) {
    //    alert(error);    // Where the error is actually caught.
    //});
    $scope.addLocation = function () {
        $state.go("new.newLocation");     
    }
    $scope.selectLocal = function (loc) {
        dataService.locModel = loc;
        $state.go("Main.new.dish");
    };
});


//newDishControllers.controller("photoCtrl", function ($scope, $state, dishes) {
//    $scope.props.Title = "Add a photo";
//    $scope.loadPhoto = function () {
//        $state.go("favorites");
//    };
//});

