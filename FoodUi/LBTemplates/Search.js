
mainApp.controller("searchCtrl", function ($scope, $state, searchDishes,dataService) {
    $scope.subStr = "";
    //$scope.props.Title = "Select a dish";
  
    $scope.dishesRows = function () {
        searchDishes.searchDis($scope.subStr).then(function (dat) {
            $scope.Dishes = dat.data;
            for (var i = 0; i < $scope.Dishes.length; i++) {
                $scope.Dishes[i].imgLink = serverUrl + "api/Files/DishFiles/" + $scope.Dishes[i].ID;

            }
            $scope.SearchDishes = function () {

            }
        }).catch(function (er)
        { alert(er) });
    }
    $scope.dishesRows();
    $scope.selectPlate = function (plate) {
        dataService.dishModel = plate;
        $state.go("View");
    }
});

