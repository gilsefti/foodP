
newDishControllers.controller('newDishCtrl', function ($scope, $state, dishes,dataService) {
    $scope.dishModel = {};

    $scope.props.Title = "What is the name of the dish?";

    $scope.addDish = function () {
        dataService.dishModel.PlaceID = dataService.ID;
        dishes.addDish($scope.dishModel).then(function (dish) {
            $scope.dishModel = dish;
            $state.go("photo");
            //window.location.href("lunchBox.html");
        });
    }

});
