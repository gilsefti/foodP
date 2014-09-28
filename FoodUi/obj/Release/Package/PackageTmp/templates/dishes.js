
newDishControllers.controller("dishCtrl", function ($scope, $location, dishes,dataService) {
    $scope.props.Title = "Select a dish";
    dataService.dishModel = {};
    dishes.getDishes(dataService.locModel).then(function (d) {
        $scope.dishes = d;
    });

    $scope.addDish = function () {
        $location.path("newDish");
    };
    $scope.getDish = function (dish) {
        dataService.dishModel = dish;
        $location.path("addLB");
    };
});


newDishControllers.controller('newDishCtrl', function ($scope, $location, dishes,dataService) {
    $scope.dishModel = {};

    $scope.props.Title = "What is the name of the dish?";

    $scope.addDish = function () {
        dataService.dishModel.PlaceID = dataService.ID;
        dishes.addDish($scope.dishModel).then(function (dish) {
            $scope.dishModel = dish;
            $location.path("addLB");
            //window.location.href("lunchBox.html");
        });
    }

});


newDishControllers.controller("addLBCtrl", function ($scope, $location, lunchBox,dataService) {
    $scope.props.Title = "Add to Lunch box?";
    $scope.addLB = function () {
        var dish = {};
        dish.ID = dataService.dishModel.ID;
        dish.Name = dataService.dishModel.Name;
        dish.PlaceID = dataService.dishModel.PlaceID;
        lunchBox.addToLB(dish).then(function (d) {
            //$location.path("/");
        })
        .catch(function (error) {
            alert(error);    // Where the error is actually caught.
            throw(error);
        });
        window.open("Main.html", "_self");
    };
});