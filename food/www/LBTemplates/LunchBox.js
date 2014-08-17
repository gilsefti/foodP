
mainApp.controller("lunchBoxCtrl", function ($scope, $state, LBDishes, UserService) {
    //$scope.props.Title = "Select a dish";
    $scope.LBPlates = {};
    //dataService.dishModel = {};
    LBDishes.getDishes(UserService.user.ID).then(function (d) {
        $scope.LBPlates = d;
    });

    $scope.addDish = function () {
        $state.go("newDish");
    };
    $scope.getDish = function (dish) {
        dataService.dishModel = dish;
        $state.go("addLB");
    };
});

