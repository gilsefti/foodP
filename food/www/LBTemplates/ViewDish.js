
mainApp.controller("viewDishCtrl", function ($scope, $state, dishes, dataService) {
    dishes.getDishesById(dataService.dishModel.ID).then(function (dat) {
        $scope.plate = dat.data;
        $scope.plate.imgLink = serverUrl + "api/Files/DishFiles/" + $scope.plate.ID;

    }).catch(function (er)
    { alert(er) });


});

