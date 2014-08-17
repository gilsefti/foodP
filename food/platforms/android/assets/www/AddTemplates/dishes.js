
newDishControllers.controller("dishCtrl", function ($scope, $state, dishes,dataService) {
    $scope.props.Title = "Select a dish";
    dataService.dishModel = {};
    dishes.getDishes(dataService.locModel).then(function (d) {
        $scope.dishes = d;
    });

    $scope.addDish = function () {
        $state.go("newDish");
    };
    $scope.getDish = function (dish) {
        dataService.dishModel = dish;
        $state.go("addLB");
    };
});


newDishControllers.controller('newDishCtrl', function ($scope, $state, dishes,dataService) {
    $scope.dishModel = {};

    $scope.props.Title = "What is the name of the dish?";

    $scope.addDish = function () {
        dataService.dishModel.PlaceID = dataService.ID;
        dishes.addDish($scope.dishModel).then(function (dish) {
            $scope.dishModel = dish;
            $state.go("addLB");
            //window.location.href("lunchBox.html");
        });
    }

});

newDishControllers.controller("AddParentCtrl", function ($scope) {
    $scope.props.Title = "";    
});
newDishControllers.controller("addLBCtrl", function ($scope, $state, lunchBox, dataService, UserService) {
    $scope.props.Title = "Add to Lunch box?";
    $scope.addLB = function () {
        var dish = {};
        dish.ID = dataService.dishModel.ID;
        dish.Name = dataService.dishModel.Name;
        dish.PlaceID = dataService.dishModel.PlaceID;
        lunchBox.addToLB(dish,UserService.user.ID).then(function (d) {
            $state.go("/LB");
        })
        .catch(function (error) {
            alert(error);    // Where the error is actually caught.
            throw(error);
        });
        //window.open("Main.html", "_self");
    };
});