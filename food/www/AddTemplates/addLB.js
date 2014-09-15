
newDishControllers.controller('addLBCtrl', function ($scope, $state, lunchBox, dataService, UserService) {
    $scope.dishModel = {};

    $scope.props.Title = "Add to Lunch Box?";

    $scope.addLB = function () {
 
        lunchBox.addToLB(dataService.dishModel, UserService.user().ID).then(function () {
            $state.go("Search");
            //window.location.href("lunchBox.html");
        });
    }

});
