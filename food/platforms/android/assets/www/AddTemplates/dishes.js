


newDishControllers.controller('dishCtrl', function ($scope, $state, dishes,dataService) {
    $scope.dishModel = {};

    $scope.props.Title = "Select a dish";

    dishes.getDishes(dataService.locModel).then(function (d) {
        $scope.dishes = d.data;
    }).catch(function (error) {
        alert(error);    // Where the error is actually caught.
    });
    $scope.addDish = function () {
        $state.go("Main.new.newDish");
    }
    $scope.selectDish = function (dish) {
        dataService.dishModel = dish;
        $state.go("photo");
    };

});

newDishControllers.controller("AddParentCtrl", function ($scope) {
    $scope.props.Title = "";    
});