
newDishControllers.controller('newLocationCtrl', function ($scope, $state, locations, dataService) {
    $scope.locModel = {};

    $scope.props.Title = "Add a new location";

    $scope.addLocation = function () {
        locations.addLocation($scope.locModel).then(function (loc) {
            dataService.locModel = loc;
            $state.go("new.dish");
        });
    }
});