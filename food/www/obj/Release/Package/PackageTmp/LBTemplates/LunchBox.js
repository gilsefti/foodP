
mainApp.controller("lunchBoxCtrl", function ($scope, $location, LBDishes) {
    //$scope.props.Title = "Select a dish";
    $scope.LBPlates = {};
    //dataService.dishModel = {};
    LBDishes.getDishes().then(function (d) {
        $scope.LBPlates = d;
    });

    $scope.addDish = function () {
        $location.path("newDish");
    };
    $scope.getDish = function (dish) {
        dataService.dishModel = dish;
        $location.path("addLB");
    };
});

