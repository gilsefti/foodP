
newDishControllers.controller('newDishCtrl', function ($scope, $state, dishes,dataService) {
    $scope.dishModel = {};

    $scope.props.Title = "What is the name of the dish?";

    $scope.addDish = function () {
        $scope.dishModel.PlaceID = dataService.locModel.ID;
        dishes.addDish($scope.dishModel).then(function (dish) {
            dataService.dishModel = dish;
            //$state.go("photo");
            $state.go("new.addLB");
        });
    }

});
