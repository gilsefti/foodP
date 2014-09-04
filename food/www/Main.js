var mainApp = angular.module('Main', ["ui.router", "lbExternalSql", "newDishControllers", "loginServices", "dishSerices"]);


mainApp.controller('mainCtrl', function ($scope) {
    $scope.tabs = [
            { link: 'LB', label: 'Lunch Box' },
            { link: 'Search', label: 'Search' },
                 { link: 'new.location', label: 'Add to LB' },
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

    $scope.props = {};
    $scope.props.Title = "";
    //$scope.newPlate = function () {
    //    window.open("Index.html", "_self");
    //}


});
mainApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state('LB', { url: '/LB', templateUrl: 'LBTemplates/LunchBox.html', controller: "lunchBoxCtrl" }).
        state('Search', { url: '/Search', templateUrl: 'LBTemplates/Search.html', controller: "searchCtrl" }).
        state('Login', { url: '/Login', templateUrl: 'LBTemplates/Login.html', controller: "loginCtrl" }).
          state('new', {
              url: '/new',
              templateUrl: 'AddTemplates/AddParent.html',
              controller: 'AddParentCtrl'
          }).state('new.location', {
             url: '/location',
             templateUrl: 'AddTemplates/locations.html',
             controller: 'locationsCtrl'
          }).state("new.newLocation", {
             url: '/newLocation',
             templateUrl: "AddTemplates/newLocation.html",
             controller: "newLocationCtrl"
          })
        .state("new.dish", {
             url: '/dish',
             templateUrl: "AddTemplates/dishes.html",
             controller: "dishCtrl"
          }).state('photo', {
             url: '/photo',
             templateUrl: 'AddTemplates/photo.html',
             controller: 'photoCtrl'
          }).state('new.newDish', {
             url: '/newDish',
             templateUrl: 'AddTemplates/newDish.html',
             controller: 'newDishCtrl'
          })
        .state('new.addLB', {
             url: '/addLB',
             templateUrl: 'AddTemplates/addLB.html',
             controller: 'addLBCtrl'
          }).state('new.fileLoad', {
              url: '/fileLoad',
              templateUrl: 'AddTemplates/fileLoad.html',
              controller: 'fileLoadCtrl'
          });

    $urlRouterProvider.otherwise('/Login');
    //$urlRouterProvider.otherwise('/new/photo');
    //$urlRouterProvider.otherwise('/new/fileLoad');

});

