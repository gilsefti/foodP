var mainApp = angular.module('Main', ["ngRoute", "lbExternalSql"]);


mainApp.controller('mainCtrl', function ($scope) {
    $scope.tabs = [
            { link: '#/LB', label: 'Lunch Box' },
            { link: '#/Search', label: 'Search' },        
    ];

    $scope.selectedTab = $scope.tabs[0];
    $scope.setSelectedTab = function (tab) {
        $scope.selectedTab = tab;
    }

    $scope.tabClass = function (tab) {
        if ($scope.selectedTab == tab) {
            return "active";
        } else {
            return "";
        }
    }

    $scope.newPlate = function () {
        window.open("Index.html", "_self");
    }
      

});
mainApp.config(function ($routeProvider) {
    $routeProvider.
        when('/LB', { templateUrl: 'LBTemplates/LunchBox.html', controller: "lunchBoxCtrl" }).
        when('/Search', { templateUrl: 'LBTemplates/Search.html', controller: "searchCtrl" }).
        otherwise({ redirectTo: '/LB' });

});

